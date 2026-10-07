# Image audit — blog category: skill-roadmaps

5 pages. Pages are ordered by search priority (P1 first). Submit one page section at a time together with `docs/image-audit/00-READ-FIRST.md`.

### /blog/skill-roadmaps/cloud-computing-career-skills-india/

**H1:** Cloud computing career skills India: the honest roadmap from zero to hired  
**Category:** skill-roadmaps · **Words:** 4035 · **H2 sections:** 11 · **Search priority:** P2 (0 clicks, 37 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 4 other articles, with identical alt text and captions, so they say nothing specific about “Cloud computing career skills India: the honest roadmap…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/skill-roadmaps/cloud-computing-career-skills-india*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“The short answer”, “4 real cloud career…”, “AWS vs Azure vs GCP…”, “Certification costs and…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 89%, 89%, 90%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `skill-roadmaps-editorial-cover.webp`, `skill-roadmaps-context.webp`, `skill-roadmaps-path.webp`, `skill-roadmaps-sprint.webp`, `skill-roadmaps-framework.webp`, `skill-roadmaps-review.webp`, `skill-roadmaps-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `cloud-computing-career-skills-india.webp`, `cloud-computing-career-skills-india-detail.webp`, `cloud-computing-career-skills-india-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `cloud-computing-career-skills-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `cloud-computing-career-skills-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Candid side profile near a window of a learner at a laptop with a small project, a family dining table in the evening. Props that belong to “Cloud computing career skills India: the honest roadmap from zero to hired”: notebooks, a laptop and printed course or job information. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: Cloud computing career skills India: the honest roadmap from zero to…
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 5 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `cloud-computing-career-skills-india-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Cloud computing career skills India: real role paths (cloud engineer, DevOps, architect, security), an honest…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): The short answer / 4 real cloud career paths / AWS vs Azure vs GCP: the honest comparison / Certification costs and prep time / Getting in from a non-cloud IT background
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “Cloud computing career skills India: the honest roadmap from zero to…”
- Title attribute: At a glance: Cloud computing career skills India: the honest roadmap…
- Caption (also keep the key point in the HTML text): Cloud computing career skills India: real role paths (cloud engineer, DevOps, architect, security), an honest AWS vs Azure vs GCP comparison…
**V2 — Linear process chain or roadmap** (place after the H2 “4 real cloud career paths” #career-paths)
- File: `cloud-computing-career-skills-india-linear-real-cloud-career-paths.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: "Cloud computing career" is not one job — it is at least four different roles with different daily work…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Cloud engineer / DevOps engineer / Cloud architect / Cloud security engineer
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Linear process chain or roadmap for “4 real cloud career paths”: Cloud engineer; DevOps engineer; Cloud architect
- Title attribute: 4 real cloud career paths
- Caption (also keep the key point in the HTML text): "Cloud computing career" is not one job — it is at least four different roles with different daily work, different entry bars, and different ceilings.
**V3 — Comparison table** (place after the H2 “AWS vs Azure vs GCP: the honest comparison” #platform-landscape)
- File: `cloud-computing-career-skills-india-comparison-aws-azure-gcp-honest.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: None of the three major platforms is objectively "the best" — they win in different situations, and the right…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Platform | Market position in… | Strength | Watch out / Row: AWS | Largest global market… | Widest ecosystem, most… | Breadth can be a downside… / Row: Microsoft Azure | Second-largest by market… | Strong fit if the target… | Fewer public community… / Row: Google Cloud (GCP) | Smallest of the three in… | Strong choice if the… | Fewer total openings…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Comparison table for “AWS vs Azure vs GCP: the honest comparison”: Platform | Market position in… |…; AWS | Largest global market… | Widest…; Microsoft Azure |…
- Title attribute: AWS vs Azure vs GCP: the honest comparison
- Caption (also keep the key point in the HTML text): None of the three major platforms is objectively "the best" — they win in different situations, and the right pick depends on your target city…
**V4 — Comparison table** (place after the H2 “Certification costs and prep time” #certifications)
- File: `cloud-computing-career-skills-india-comparison-certification-costs-prep-time.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Certification cost and prep time vary more than most guides admit.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Certification | Approximate cost | Realistic prep time | Verdict / Row: AWS Certified Cloud… | Roughly ₹8,000–9,000 (USD… | A few weeks for someone… | Good starting point to… / Row: AWS Certified Solutions… | Roughly ₹15,000 including… | Around 6–12 weeks of… | The single most… / Row: Microsoft Azure… | Roughly ₹4,800–4,900 | A few weeks to a couple… | Strong pick if targeting… / Row: Google Cloud Associate… | USD 125 (roughly… | A few weeks with the free… | Cheapest of the three… / Row: CKA (Certified Kubernetes… | Higher fee than most… | Best attempted after real… | Worth pursuing once you…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Certification Approximate cost Realistic prep time Verdict AWS Certified Cloud Practitioner Roughly ₹8,000–9,000 (USD 100 + GST) A few weeks for someone with basic IT familiarity Good starting point to learn vocabulary; does not carry much weight alone in a jo | AWS Certified Solutions Architect – Associate Roughly ₹15,000 including GST; budget ₹25,000–40,000 total with a course and practice tests Around 6–12 weeks of consistent study with real lab practice, not passive video watching The single most recognised entry- | Microsoft Azure Administrator (AZ-104) Roughly ₹4,800–4,900 A few weeks to a couple of months, depending on prior Windows Server or networking exposure Strong pick if targeting large enterprises already on Microsoft infrastructure; noticeably cheaper than the 
- Alt: Comparison table for “Certification costs and prep time”: Certification | Approximate cost |…; AWS Certified Cloud… | Roughly…; AWS Certified Solutions… | Roughly…
- Title attribute: Certification costs and prep time
- Caption (also keep the key point in the HTML text): Certification cost and prep time vary more than most guides admit.
**V5 — Stat panel or bar chart (only the numbers listed)** (place after the H2 “What the roles actually pay in India” #salary-reality)
- File: `cloud-computing-career-skills-india-stat-roles-actually-pay-india.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Salary ranges in cloud computing move with city, employer type (service company versus product company)…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Cloud engineer (entry-level): commonly in the roughly ₹3.5–9 LPA range depending on… / DevOps engineer (entry-level): commonly in the roughly ₹4–8 LPA range for freshers… / Cloud architect: typically a senior-track role, with junior architect-level postings… / Cloud security engineer: entry roles commonly start around ₹5–9 LPA, with mid-level roles…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Cloud engineer (entry-level): commonly in the roughly ₹3.5–9 LPA range depending on platform, city, and employer type, with product companies and specialised skills toward the higher end. | DevOps engineer (entry-level): commonly in the roughly ₹4–8 LPA range for freshers, rising toward a broader ₹5.5–16 LPA band with a couple of years of Kubernetes and Docker experience. | Cloud architect: typically a senior-track role, with junior architect-level postings starting around ₹10–20 LPA and senior architects with deep platform expertise reaching well beyond that.
- Alt: Stat panel or bar chart (only the numbers listed) for “What the roles actually pay in India”: Cloud engineer (entry-level)…; DevOps engineer (entry-level)…; Cloud…
- Title attribute: What the roles actually pay in India
- Caption (also keep the key point in the HTML text): Salary ranges in cloud computing move with city, employer type (service company versus product company), platform specialisation, and whether you add…

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/skill-roadmaps/full-stack-developer-roadmap-india/

**H1:** Full-stack developer roadmap India: the build order that actually gets you hired  
**Category:** skill-roadmaps · **Words:** 3907 · **H2 sections:** 11 · **Search priority:** P3 (0 clicks, 7 impressions)  
**Status: AMBER — AUTHORED** · og:image: /images/blog/skill-roadmaps/full-stack-developer-roadmap-india/full-stack-developer-roadmap-india-cover.webp

> **ON THE OWNER'S EXCLUSION LIST.** This route was explicitly excluded in the earlier visual brief (38 routes, listed in the deleted `BLOG-VISUAL-AUDIT.md`, commit 26b8e33~1). Do not create or replace images here unless the owner confirms. The findings below are for the owner's decision.

**Findings**
1. 6 authored images on the page (hero + 5 supporting).
2. Clean, readable set.
3. Hero is a graphic/flat-lay/illustration rather than a natural human scene. Keep it only if it is clear; otherwise add a natural editorial hero.
4. 6 of 6 images have no title attribute.

**Current images**
| File | Real size | Attr size | Loading | Position | Issues |
|---|---|---|---|---|---|
| `skill-roadmaps/full-stack-developer-roadmap-india/full-stack-developer-roadmap-india-cover.webp` | 1600x900 | 1600x900 | eager | 15% | no title attr |
| `skill-roadmaps/full-stack-developer-roadmap-india/what-full-stack-means-today.webp` | 1122x1402 | 1122x1402 | lazy | 31% | no title attr |
| `skill-roadmaps/full-stack-developer-roadmap-india/full-stack-developer-build-order.webp` | 1122x1402 | 1122x1402 | lazy | 33% | no title attr |
| `skill-roadmaps/full-stack-developer-roadmap-india/full-stack-roadmap-which-stack-to-pick.webp` | 1122x1402 | 1122x1402 | lazy | 50% | no title attr |
| `skill-roadmaps/full-stack-developer-roadmap-india/full-stack-proof-of-work.webp` | 1122x1402 | 1122x1402 | lazy | 57% | no title attr |
| `skill-roadmaps/full-stack-developer-roadmap-india/full-stack-vs-specializing.webp` | 1122x1402 | 1122x1402 | lazy | 65% | no title attr |

**Required actions**
1. HERO: optional upgrade. Keep the current graphic hero if it reads clearly; otherwise add a natural scene hero using the brief below.
- Reason: current hero is a graphic, not a human scene
- File: `full-stack-developer-roadmap-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `full-stack-developer-roadmap-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Top-down desk view with hands in frame of a learner at a laptop with a small project, a classroom desk after hours. Props that belong to “Full-stack developer roadmap India: the build order that actually gets you hired”: a laptop with a live project, job description printouts, a notebook. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: Full-stack developer roadmap India: the build order that actually…
- Caption: one sentence tying the scene to the article's decision.
2. FIX attributes on every kept image: meaningful kebab-case filename; alt that describes what is visible; title attribute; caption (figcaption) for every explanatory image; width/height equal to the real pixel size; `loading="lazy"` below the fold, hero eager with fetchpriority; WebP under 200 KB.
3. Mobile check at 390px: no horizontal overflow, text inside images readable without zoom (body text on the image at least about 16 px when the image is displayed at 360 px wide), captions wrap.

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/skill-roadmaps/machine-learning-roadmap-india/

**H1:** Machine learning roadmap India: the math, tools, and portfolio order that actually gets you hired  
**Category:** skill-roadmaps · **Words:** 3982 · **H2 sections:** 11 · **Search priority:** P3 (0 clicks, 24 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 4 other articles, with identical alt text and captions, so they say nothing specific about “Machine learning roadmap India: the math, tools, and…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/skill-roadmaps/machine-learning-roadmap-india*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“The short answer”, “The math, honestly…”, “Python and the ML…”, “ML engineer vs data…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 88%, 89%, 90%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `skill-roadmaps-editorial-cover.webp`, `skill-roadmaps-context.webp`, `skill-roadmaps-path.webp`, `skill-roadmaps-sprint.webp`, `skill-roadmaps-framework.webp`, `skill-roadmaps-review.webp`, `skill-roadmaps-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `machine-learning-roadmap-india.webp`, `machine-learning-roadmap-india-detail.webp`, `machine-learning-roadmap-india-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `machine-learning-roadmap-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `machine-learning-roadmap-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Top-down desk view with hands in frame of a learner at a laptop with a small project, a classroom desk after hours. Props that belong to “Machine learning roadmap India: the math, tools, and portfolio order that…”: a laptop with a live project, job description printouts, a notebook. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: Machine learning roadmap India: the math, tools, and portfolio order…
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 5 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `machine-learning-roadmap-india-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: A machine learning roadmap India guide with honest math prerequisites, Python and ML tools, engineer vs data…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): The short answer / The math, honestly scoped / Python and the ML toolkit / ML engineer vs data scientist vs applied AI engineer / The build order
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “Machine learning roadmap India: the math, tools, and portfolio order…”
- Title attribute: At a glance: Machine learning roadmap India: the math, tools, and…
- Caption (also keep the key point in the HTML text): A machine learning roadmap India guide with honest math prerequisites, Python and ML tools, engineer vs data scientist paths, and the portfolio order…
**V2 — Comparison table** (place after the H2 “Python and the ML toolkit” #python-tools)
- File: `machine-learning-roadmap-india-comparison-python-toolkit.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Tools matter less than sequence.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Stage | Tool / library | What it's for / Row: Data handling | Python, pandas, NumPy | Cleaning, reshaping, and… / Row: Visualization | Matplotlib, Seaborn | Exploring data patterns… / Row: Classical ML | scikit-learn | Regression… / Row: Data access | SQL | Pulling and joining data… / Row: Deep learning | PyTorch (or TensorFlow) | Neural networks for…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Comparison table for “Python and the ML toolkit”: Stage | Tool / library | What it's for; Data handling | Python, pandas, NumPy…; Visualization | Matplotlib…
- Title attribute: Python and the ML toolkit
- Caption (also keep the key point in the HTML text): Tools matter less than sequence.
**V3 — Asymmetrical pros-and-cons comparison** (place after the H2 “ML engineer vs data scientist vs applied AI engineer” #roles-explained)
- File: `machine-learning-roadmap-india-asymmetrical-engineer-data-scientist-applied.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: These three titles get used loosely in Indian job postings, but the actual day-to-day work, math depth, and…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Data scientist / Machine learning engineer / Applied AI engineer
- Numbers: use ONLY these facts from the article (exact values, no new ones): Fast-growing demand Lower model-training depth One widely cited 2026 comparison put fresher machine learning engineer offers in the roughly ₹12–25 lakh range against roughly ₹8–20 lakh for data science freshers, while a separate salary tracker put the median m
- Alt: Asymmetrical pros-and-cons comparison for “ML engineer vs data scientist vs applied AI engineer”: Data scientist; Machine learning engineer; Applied AI engineer
- Title attribute: ML engineer vs data scientist vs applied AI engineer
- Caption (also keep the key point in the HTML text): These three titles get used loosely in Indian job postings, but the actual day-to-day work, math depth, and entry bar are genuinely different.
**V4 — Asymmetrical pros-and-cons comparison** (place after the H2 “Kaggle vs a real portfolio” #portfolio)
- File: `machine-learning-roadmap-india-asymmetrical-kaggle-real-portfolio.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Kaggle is a genuinely useful training ground, and a Kaggle profile is a positive signal, especially for…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Kaggle hands you the data, the problem, and the metric already defined. Real jobs require… / Aim for three to five real, end-to-end projects instead of a long list of small… / Document each project properly on GitHub: the problem you chose, the options you… / Deploy at least one project somewhere real, even a small hosted API or a simple web app.… / Get one honest outside review from someone already working in ML before you lean on a…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Asymmetrical pros-and-cons comparison for “Kaggle vs a real portfolio”: Kaggle hands you the data, the…; Aim for three to five real…; Document each project properly…
- Title attribute: Kaggle vs a real portfolio
- Caption (also keep the key point in the HTML text): Kaggle is a genuinely useful training ground, and a Kaggle profile is a positive signal, especially for junior roles.
**V5 — Comparison table** (place after the H2 “Certifications: worth it vs skip” #certifications)
- File: `machine-learning-roadmap-india-comparison-certifications-worth-skip.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Certifications in machine learning are a genuinely mixed bag, and no single credential reliably predicts…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Certification / course | Verdict | Why / Row: Andrew Ng's Machine… | Worth it, conditionally | Strong for building real… / Row: Google/TensorFlow… | Fine as a milestone | Useful proof you can… / Row: Generic "become a data… | Skip or verify carefully | Wide variance in quality.… / Row: University-run PG… | Useful for structure and… | Can help with peer…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Comparison table for “Certifications: worth it vs skip”: Certification / course | Verdict | Why; Andrew Ng's Machine… | Worth it…; Google/TensorFlow… | Fine as a…
- Title attribute: Certifications: worth it vs skip
- Caption (also keep the key point in the HTML text): Certifications in machine learning are a genuinely mixed bag, and no single credential reliably predicts whether someone can actually do the job.

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/skill-roadmaps/product-manager-skills-roadmap-india/

**H1:** Product manager skills roadmap India: what actually gets you hired  
**Category:** skill-roadmaps · **Words:** 4048 · **H2 sections:** 12 · **Search priority:** P3 (0 clicks, 9 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 4 other articles, with identical alt text and captions, so they say nothing specific about “Product manager skills roadmap India: what actually gets…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/skill-roadmaps/product-manager-skills-roadmap-india*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“The short answer”, “The 6 skills that…”, “3 real entry paths”, “APM programs and who…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 89%, 90%, 90%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `skill-roadmaps-editorial-cover.webp`, `skill-roadmaps-context.webp`, `skill-roadmaps-path.webp`, `skill-roadmaps-sprint.webp`, `skill-roadmaps-framework.webp`, `skill-roadmaps-review.webp`, `skill-roadmaps-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `product-manager-skills-roadmap-india.webp`, `product-manager-skills-roadmap-india-detail.webp`, `product-manager-skills-roadmap-india-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `product-manager-skills-roadmap-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `product-manager-skills-roadmap-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Top-down desk view with hands in frame of a learner at a laptop with a small project, a family dining table in the evening. Props that belong to “Product manager skills roadmap India: what actually gets you hired”: notebooks, a laptop and printed course or job information. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: Product manager skills roadmap India: what actually gets you hired
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 5 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `product-manager-skills-roadmap-india-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Product manager skills roadmap India: the 6 core skills, 3 real entry paths, certifications worth doing, and…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): The short answer / The 6 skills that actually get screened / 3 real entry paths / APM programs and who else hires juniors / Certifications: worth it vs skip
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “Product manager skills roadmap India: what actually gets you hired”
- Title attribute: At a glance: Product manager skills roadmap India: what actually gets…
- Caption (also keep the key point in the HTML text): Product manager skills roadmap India: the 6 core skills, 3 real entry paths, certifications worth doing, and a realistic sequence to get…
**V2 — Linear process chain or roadmap** (place after the H2 “3 real entry paths” #entry-paths)
- File: `product-manager-skills-roadmap-india-linear-real-entry-paths.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Almost every "how to become a PM" story in India collapses into one of three real entry doors.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Internal transfer or APM route / Campus placement or lateral MBA hire / UX, research, or business-analyst lateral move
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Linear process chain or roadmap for “3 real entry paths”: Internal transfer or APM route; Campus placement or lateral MBA hire; UX, research, or business-analyst…
- Title attribute: 3 real entry paths
- Caption (also keep the key point in the HTML text): Almost every "how to become a PM" story in India collapses into one of three real entry doors.
**V3 — Comparison table** (place after the H2 “APM programs and who else hires juniors” #apm-programs)
- File: `product-manager-skills-roadmap-india-comparison-apm-programs-who-else.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Associate Product Manager (APM) programs are the most structured junior entry point, but they are not the…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Entry point | Who runs it | Reality check / Row: Structured APM programs | Flipkart, Google, and a… | Often campus-hiring only… / Row: Product companies that… | Amazon, Razorpay, Swiggy… | Less structured… / Row: Business-analyst or… | Consulting and… | Slower and less visible…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Comparison table for “APM programs and who else hires juniors”: Entry point | Who runs it | Reality…; Structured APM programs | Flipkart…; Product companies that… |…
- Title attribute: APM programs and who else hires juniors
- Caption (also keep the key point in the HTML text): Associate Product Manager (APM) programs are the most structured junior entry point, but they are not the only door, and campus hiring is not the…
**V4 — Linear process chain or roadmap** (place after the H2 “The build order” #learning-sequence)
- File: `product-manager-skills-roadmap-india-linear-build-order.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Sequence matters more than most self-taught roadmaps admit.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Business and domain fluency first / Basic analytics and SQL / User research in practice, not theory / Apply a prioritization framework to a real decision / Turn one real decision into a case study
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Linear process chain or roadmap for “The build order”: Business and domain fluency first; Basic analytics and SQL; User research in practice, not theory
- Title attribute: The build order
- Caption (also keep the key point in the HTML text): Sequence matters more than most self-taught roadmaps admit.
**V5 — Comparison table** (place after the H2 “Tools to learn and portfolio project ideas” #tools-and-projects)
- File: `product-manager-skills-roadmap-india-comparison-tools-learn-portfolio-project.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: You do not need to master a long tool list before you are useful in a PM interview.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Tool | What you use it for | Cost to start / Row: SQL (any flavour, even… | Pull your own funnel… | Free / Row: Mixpanel or Amplitude… | Read event-level product… | Free tier is enough to… / Row: Figma (view or edit… | Follow a design handoff… | Free tier / Row: JIRA or Linear | Understand how… | Free tier / trial / Row: Notion or Google Docs | Write a one-page PRD or… | Free / Audit and re-prioritise a real backlog
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Comparison table for “Tools to learn and portfolio project ideas”: Tool | What you use it for | Cost to…; SQL (any flavour, even… | Pull your…; Mixpanel or…
- Title attribute: Tools to learn and portfolio project ideas
- Caption (also keep the key point in the HTML text): You do not need to master a long tool list before you are useful in a PM interview.

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/skill-roadmaps/ux-design-career-path-india/

**H1:** UX design career path India: the real map, not the visual-polish myth  
**Category:** skill-roadmaps · **Words:** 3882 · **H2 sections:** 12 · **Search priority:** P3 (0 clicks, 5 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 4 other articles, with identical alt text and captions, so they say nothing specific about “UX design career path India: the real map, not the…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/skill-roadmaps/ux-design-career-path-india*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“The short answer”, “What UX design actually…”, “Tools worth learning”, “3 real entry paths”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 89%, 90%, 90%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `skill-roadmaps-editorial-cover.webp`, `skill-roadmaps-context.webp`, `skill-roadmaps-path.webp`, `skill-roadmaps-sprint.webp`, `skill-roadmaps-framework.webp`, `skill-roadmaps-review.webp`, `skill-roadmaps-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `ux-design-career-path-india.webp`, `ux-design-career-path-india-detail.webp`, `ux-design-career-path-india-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `ux-design-career-path-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `ux-design-career-path-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Top-down desk view with hands in frame of an Indian student or adult at a home desk, a classroom desk after hours. Props that belong to “UX design career path India: the real map, not the visual-polish myth”: sketchbook, case notes, a camera or design samples. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: UX design career path India: the real map, not the visual-polish myth
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 5 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `ux-design-career-path-india-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: UX design career path India: research, wireframing, prototyping, and testing, not just visuals.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): The short answer / What UX design actually involves / Tools worth learning / 3 real entry paths / Portfolio strategy
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “UX design career path India: the real map, not the visual-polish myth”
- Title attribute: At a glance: UX design career path India: the real map, not the…
- Caption (also keep the key point in the HTML text): UX design career path India: research, wireframing, prototyping, and testing, not just visuals.
**V2 — Asymmetrical pros-and-cons comparison** (place after the H2 “Tools worth learning” #tools)
- File: `ux-design-career-path-india-asymmetrical-tools-worth-learning.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Tools change faster than skills do, so the goal is fluency in one solid tool per category, not a checklist of…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Screen design and clickable prototypes / Talking to and observing real users / Whiteboarding, documentation, and developer handoff
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Asymmetrical pros-and-cons comparison for “Tools worth learning”: Screen design and clickable prototypes; Talking to and observing real users; Whiteboarding…
- Title attribute: Tools worth learning
- Caption (also keep the key point in the HTML text): Tools change faster than skills do, so the goal is fluency in one solid tool per category, not a checklist of every brand name on a job description.
**V3 — Linear process chain or roadmap** (place after the H2 “3 real entry paths” #entry-paths)
- File: `ux-design-career-path-india-linear-real-entry-paths.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Almost every real UX design story in India starts from one of three doors.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Bootcamp or paid cohort program / Self-taught, project-first route / Design degree or postgraduate program
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Linear process chain or roadmap for “3 real entry paths”: Bootcamp or paid cohort program; Self-taught, project-first route; Design degree or postgraduate program
- Title attribute: 3 real entry paths
- Caption (also keep the key point in the HTML text): Almost every real UX design story in India starts from one of three doors.
**V4 — Comparison table** (place after the H2 “Courses and certificates: worth it vs skip” #certifications)
- File: `ux-design-career-path-india-comparison-courses-certificates-worth-skip.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: No single certificate or degree is required to work as a UX designer in India, which makes course choice…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Course or credential | Verdict | Why / Row: Google UX Design… | Worth it, conditionally | Builds three end-to-end… / Row: Interaction Design… | Worth it for depth | Strong for building real… / Row: Short paid "become a UX… | Skip or verify carefully | Many of these are… / Row: A four-year design degree… | Worth it for the right… | Strong for depth, studio… / Row: Free self-study (YouTube… | Fine as a foundation | Good for vocabulary and…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Comparison table for “Courses and certificates: worth it vs skip”: Course or credential | Verdict | Why; Google UX Design… | Worth it…; Interaction Design… | Worth…
- Title attribute: Courses and certificates: worth it vs skip
- Caption (also keep the key point in the HTML text): No single certificate or degree is required to work as a UX designer in India, which makes course choice genuinely confusing.
**V5 — Comparison table** (place after the H2 “What it actually pays” #salary)
- File: `ux-design-career-path-india-comparison-actually-pays.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: India UX salary data varies widely by source, city, and company type, but the pattern across current listings…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Stage | Typical range | What moves it / Row: Fresher (0-2 years) | Roughly Rs 2.5-6 LPA | Wide range driven by… / Row: Mid-level (2-5 years) | Roughly Rs 8-15 LPA | Growth here tracks… / Row: Senior (5+ years) | Roughly Rs 14-28 LPA | Requires ownership of… / Row: Lead / Head of Design | Roughly Rs 25-45 LPA | Strategic and…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Stage Typical range What moves it Fresher (0-2 years) Roughly Rs 2.5-6 LPA Wide range driven by city, company brand, and portfolio strength more than by degree alone. | Mid-level (2-5 years) Roughly Rs 8-15 LPA Growth here tracks shipped, measurable outcomes more than years of tenure by themselves. | Senior (5+ years) Roughly Rs 14-28 LPA Requires ownership of full projects end to end and the ability to defend decisions to non-design stakeholders.
- Alt: Comparison table for “What it actually pays”: Stage | Typical range | What moves it; Fresher (0-2 years) | Roughly Rs…; Mid-level (2-5 years) | Roughly Rs…
- Title attribute: What it actually pays
- Caption (also keep the key point in the HTML text): India UX salary data varies widely by source, city, and company type, but the pattern across current listings is consistent: growth tracks shipped…

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---
