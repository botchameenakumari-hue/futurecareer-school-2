# Image audit — blog category: government-jobs

15 pages. Pages are ordered by search priority (P1 first). Submit one page section at a time together with `docs/image-audit/00-READ-FIRST.md`.

### /blog/government-jobs/bank-job-vs-it-job-india/

**H1:** Bank job vs IT job India: the honest trade-off between security and ceiling  
**Category:** government-jobs · **Words:** 4570 · **H2 sections:** 13 · **Search priority:** P1 (5 clicks, 532 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 12 other articles, with identical alt text and captions, so they say nothing specific about “Bank job vs IT job India: the honest trade-off between…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/government-jobs/bank-job-vs-it-job-india*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“Bank Job”, “It Job India”, “The short answer”, “What the daily work…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 89%, 90%, 91%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `government-jobs-editorial-cover.webp`, `government-jobs-context.webp`, `government-jobs-filters.webp`, `government-jobs-compare.webp`, `government-jobs-sequence.webp`, `government-jobs-backup.webp`, `government-jobs-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `bank-job-vs-it-job-india.webp`, `bank-job-vs-it-job-india-detail.webp`, `bank-job-vs-it-job-india-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `bank-job-vs-it-job-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `bank-job-vs-it-job-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Candid side profile near a window of an exam aspirant with preparation notes, a family dining table in the evening. Props that belong to “Bank job vs IT job India: the honest trade-off between security and ceiling”: a ledger, calculator, balance sheet printouts, a laptop. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: Bank job vs IT job India: the honest trade-off between security and…
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 6 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `bank-job-vs-it-job-india-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Bank job vs IT job India comes down to security versus pay ceiling.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): The short answer to bank job vs IT job India / What the daily work actually looks like in each field / How you actually get in / Salary reality: fresher to senior level, without the marketing numbers / Job security: what the 2025 layoffs actually changed
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “Bank job vs IT job India: the honest trade-off between security and…”
- Title attribute: At a glance: Bank job vs IT job India: the honest trade-off between…
- Caption (also keep the key point in the HTML text): Bank job vs IT job India comes down to security versus pay ceiling.
**V2 — Asymmetrical pros-and-cons comparison** (place after the H2 “The short answer to bank job vs IT job India” #short-answer)
- File: `bank-job-vs-it-job-india-asymmetrical-short-answer-bank-job.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: There is no universal winner, and most advice you have heard from relatives on either side has already picked…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): There is no universal winner, and most advice you have heard from relatives on… / A bank job wins on protection: once you clear the exam and confirm after… / An IT job wins on ceiling and speed: no single high-stakes exam gates your…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Asymmetrical pros-and-cons comparison for “The short answer to bank job vs IT job India”: There is no universal winner, and…; A bank job wins on protection: once……
- Title attribute: The short answer to bank job vs IT job India
- Caption (also keep the key point in the HTML text): There is no universal winner, and most advice you have heard from relatives on either side has already picked a team based on their own experience…
**V3 — Self-assessment checklist** (place after the H2 “How you actually get in” #entry-paths)
- File: `bank-job-vs-it-job-india-self-actually-get.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Entry mechanics differ more sharply than most people expect, and this alone should shape your timeline and…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Exam-gated: IBPS PO/Clerk or SBI PO/Clerk, each drawing lakhs of applicants for a limited… / Typical prep runs one to three attempts over a year or two, often with little or no… / Once cleared, banks are still net hiring — SBI alone posted 14,000+ clerk vacancies in a… / No single licensing exam gates entry — campus placement, off-campus hiring, or a strong… / Entry can happen straight out of a B.Tech/BCA/BSc degree, faster than a full bank-exam…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Self-assessment checklist for “How you actually get in”: Exam-gated: IBPS PO/Clerk or SBI…; Typical prep runs one to three…; Once cleared, banks are still net…
- Title attribute: How you actually get in
- Caption (also keep the key point in the HTML text): Entry mechanics differ more sharply than most people expect, and this alone should shape your timeline and runway planning.
**V4 — Comparison table** (place after the H2 “Salary reality: fresher to senior level, without the marketing numbers” #salary-reality)
- File: `bank-job-vs-it-job-india-comparison-salary-reality-fresher-senior.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Salary content for this exact comparison tends to quote whichever side's best-case numbers support its…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Career stage | Bank job | IT job / Row: Fresher, 0-2 years | Under the 12th Bipartite… | Service-company freshers… / Row: Mid-level, 3-6 years | Promotion to… | Engineers with 4-5 years… / Row: Senior, 8+ years | Bank officers progress… | Senior engineers…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Career stage Bank job IT job Fresher, 0-2 years Under the 12th Bipartite Settlement (effective April 2024), an IBPS PO starts at a basic pay of Rs 48,480/month; with DA, HRA, and special allowances, gross pay runs roughly Rs 88,000-92,000/month, with in-hand p | SBI PO runs on its own separate scale, with in-hand typically Rs 48,000-58,000/month. | Service-company freshers hired through campus placement (TCS, Infosys, Wipro) typically start at Rs 3.6-4.5 LPA (roughly Rs 30,000-37,000/month); TCS's largest entry band starts near Rs 3.36 LPA.
- Alt: Comparison table for “Salary reality: fresher to senior level, without the…”: Career stage | Bank job | IT job; Fresher, 0-2 years | Under the 12th…; Mid-level, 3-6…
- Title attribute: Salary reality: fresher to senior level, without the marketing numbers
- Caption (also keep the key point in the HTML text): Salary content for this exact comparison tends to quote whichever side's best-case numbers support its argument.
**V5 — Comparison table** (place after the H2 “Job security: what the 2025 layoffs actually changed” #job-security)
- File: `bank-job-vs-it-job-india-comparison-job-security-2025-layoffs.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: "IT is risky, banking is safe" was always broadly true, but 2025 made the gap concrete and measurable instead…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Security signal | What it actually shows / Row: Layoff exposure in 2025 | Tech-sector layoffs in… / Row: Voluntary attrition | Average IT-sector… / Row: What happens if the… | In IT, a weak appraisal… / Row: Retirement-era protection | PSU bank employees hired…
- Numbers: use ONLY these facts from the article (exact values, no new ones): TCS announced cuts of roughly 12,000 roles (about 2% of its global workforce), mostly at middle and senior management levels, citing "skill mismatch." Infosys cut over 8,000 roles in 2025 and reduced headcount by more than 12,500 employees across 2023-2025 com | Voluntary attrition Average IT-sector attrition eased to 15.1% in 2024 from 19.3% in 2023, but that is still far higher than banking, where attrition among confirmed PSU employees is structurally low — once someone clears the exam and finishes probation, few o
- Alt: Comparison table for “Job security: what the 2025 layoffs actually changed”: Security signal | What it actually…; Layoff exposure in 2025 | Tech-sector…; Voluntary…
- Title attribute: Job security: what the 2025 layoffs actually changed
- Caption (also keep the key point in the HTML text): "IT is risky, banking is safe" was always broadly true, but 2025 made the gap concrete and measurable instead of just a feeling.
**V6 — Mistakes versus smarter move panel** (place after the H2 “Mistakes to avoid when making this decision” #mistakes)
- File: `bank-job-vs-it-job-india-mistakes-mistakes-avoid-making-decision.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: 01 Choosing a bank job only for the exam-cleared prestige Clearing IBPS or SBI PO is a genuine achievement…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): 01 Choosing a bank job only for the exam-cleared prestige Clearing IBPS or SBI… / Sit with a real branch operations day (ask a working PO, do not guess) before… / 02 Choosing IT only because "software engineers earn crores" Senior architect…
- Numbers: use ONLY these facts from the article (exact values, no new ones): 02 Choosing IT only because "software engineers earn crores" Senior architect and staff-engineer pay above Rs 50 LPA is real but sits at the top of a steep pyramid most engineers never reach. | Most fresher pay at service companies (Rs 3.6-4.5 LPA) is closer to entry-level than salary-screenshot content suggests, and the path upward depends on continuous skill-building, not just years of service.
- Alt: Mistakes versus smarter move panel for “Mistakes to avoid when making this decision”: 01 Choosing a bank job only for the…; Sit with a real branch operations day……
- Title attribute: Mistakes to avoid when making this decision
- Caption (also keep the key point in the HTML text): 01 Choosing a bank job only for the exam-cleared prestige Clearing IBPS or SBI PO is a genuine achievement, but the job that follows is years of…

**Done when:** hero + 6 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/government-jobs/banking-sector-career-india/

**H1:** Banking sector career India: PSU vs private, the real ladder, and what each track pays  
**Category:** government-jobs · **Words:** 4604 · **H2 sections:** 14 · **Search priority:** P1 (0 clicks, 263 impressions)  
**Status: RED — NO IMAGES** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

> **ON THE OWNER'S EXCLUSION LIST.** This route was explicitly excluded in the earlier visual brief (38 routes, listed in the deleted `BLOG-VISUAL-AUDIT.md`, commit 26b8e33~1). Do not create or replace images here unless the owner confirms. The findings below are for the owner's decision. This excluded page currently has NO content images at all, which is probably unintended; ask the owner.

**Findings**

**Current images**
No images at all are rendered on this route.

**Required actions**
1. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
2. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `banking-sector-career-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `banking-sector-career-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Over-the-shoulder shot of an exam aspirant with preparation notes, a classroom desk after hours. Props that belong to “Banking sector career India: PSU vs private, the real ladder, and what each…”: a ledger, calculator, balance sheet printouts, a laptop. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: Banking sector career India: PSU vs private, the real ladder, and…
- Caption: one sentence tying the scene to the article's decision.
3. CREATE 6 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `banking-sector-career-india-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: A banking sector career in India runs through IBPS or SBI exams for public banks, or direct hiring for…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): The short answer / Public sector vs private bank: the real trade-off / The entry doors: how people actually get in / The exam track: IBPS, SBI, and RBI in plain terms / The private track: direct hire and PO programs
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “Banking sector career India: PSU vs private, the real ladder, and…”
- Title attribute: At a glance: Banking sector career India: PSU vs private, the real…
- Caption (also keep the key point in the HTML text): A banking sector career in India runs through IBPS or SBI exams for public banks, or direct hiring for private banks — with different pay, culture…
**V2 — Comparison table** (place after the H2 “Public sector vs private bank: the real trade-off” #psu-vs-private)
- File: `banking-sector-career-india-comparison-public-sector-private-bank.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Every "which bank is better" comparison eventually comes down to six practical differences.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Aspect | Public sector (PSU) | Private bank / Row: Entry route | Written exam first: IBPS… | Direct campus or… / Row: Starting pay (Scale I /… | Roughly Rs 6-8 LPA gross… | Roughly Rs 3.5-7 LPA CTC… / Row: Promotion speed | Slower and… | Faster and… / Row: Job security | High. Public sector bank… | Lower. Private banks can… / Row: Work pressure and hours | More predictable hours in… | Higher day-to-day…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Starting pay (Scale I / entry officer) Roughly Rs 6-8 LPA gross for IBPS/SBI PO, basic pay around Rs 48,480 under the current bipartite settlement, in-hand around Rs 65,000-76,000 a month depending on posting. | Roughly Rs 3.5-7 LPA CTC for most PO programs (ICICI Rs 4.5-5 LPA, HDFC and Axis in a similar band), with variable pay tied to sales targets on top. | Promotion speed Slower and seniority-linked: 5-7 years typical for the first officer promotion, with cadre-based exams (JAIIB, CAIIB) able to speed it up.
- Alt: Comparison table for “Public sector vs private bank: the real trade-off”: Aspect | Public sector (PSU) |…; Entry route | Written exam first…; Starting pay (Scale I…
- Title attribute: Public sector vs private bank: the real trade-off
- Caption (also keep the key point in the HTML text): Every "which bank is better" comparison eventually comes down to six practical differences.
**V3 — Chronological timeline** (place after the H2 “The career ladder: clerk to GM, with real timelines” #ladder)
- File: `banking-sector-career-india-chronological-career-ladder-clerk-real.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: The full PSU ladder runs clerk to Probationary Officer/Scale I, then Scale II (Manager), Scale III (Senior…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): The full PSU ladder runs clerk to Probationary Officer/Scale I, then Scale II… / This is a 25-30+ year arc for someone who joins as a clerk and eventually… / A clerk becomes eligible for officer promotion after a minimum of 2 years of…
- Numbers: use ONLY these facts from the article (exact values, no new ones): A clerk becomes eligible for officer promotion after a minimum of 2 years of service, through one of two routes: the seniority-linked internal exam, or the merit-based route using JAIIB (Junior Associate of the Indian Institute of Bankers) and CAIIB (Certified | From Scale I onward, each promotion stage typically takes 5-7 years and depends on both seniority and a performance appraisal — both are required, not either-or. | The private bank ladder is less standardized: a strong-performing relationship manager can move into a senior relationship or branch-head role in 3-5 years, while someone who plateaus in a target-driven role for a decade may see limited upward movement regardl
- Alt: Chronological timeline for “The career ladder: clerk to GM, with real timelines”: The full PSU ladder runs clerk to…; This is a 25-30+ year arc for someone…; A…
- Title attribute: The career ladder: clerk to GM, with real timelines
- Caption (also keep the key point in the HTML text): The full PSU ladder runs clerk to Probationary Officer/Scale I, then Scale II (Manager), Scale III (Senior Manager), Scale IV (Chief Manager), Scale…
**V4 — Comparison table** (place after the H2 “What banking actually pays, by stage” #salary-table)
- File: `banking-sector-career-india-comparison-banking-actually-pays-stage.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Numbers below are ranges, not guarantees — actual pay varies by bank, city, and individual performance.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Stage | Typical pay range | Context / Row: PSU clerk (entry… | Basic pay ~Rs 24,050… | Two years of service… / Row: PSU officer, Scale I… | Basic pay ~Rs 48,480… | SBI PO pay runs… / Row: Private bank PO /… | CTC roughly Rs 3.5-7 LPA… | Lower fixed pay than PSU… / Row: PSU manager, Scale II-III… | In-hand typically… | Promotion here is… / Row: Private bank… | Roughly Rs 8-15 LPA CTC… | Progression here tracks…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Stage Typical pay range Context PSU clerk (entry, IBPS/SBI Clerk) Basic pay ~Rs 24,050 rising to ~Rs 64,480; gross ~Rs 42,000-48,000/month; in-hand ~Rs 35,000-40,000/month Two years of service typically makes a clerk eligible for internal promotion to officer, | PSU officer, Scale I (IBPS PO / SBI PO, entry) Basic pay ~Rs 48,480; gross ~Rs 85,000-90,000/month; in-hand ~Rs 65,000-76,000/month depending on posting SBI PO pay runs marginally above IBPS PO at the same scale, largely due to advance increments and location- | Private bank PO / management trainee (entry) CTC roughly Rs 3.5-7 LPA depending on bank and city Lower fixed pay than PSU officer entry, but often includes performance-linked variable pay that can add 15-30% on top for people who consistently hit sales targets
- Alt: Comparison table for “What banking actually pays, by stage”: Stage | Typical pay range | Context; PSU clerk (entry… | Basic pay ~Rs…; PSU officer, Scale I… | Basic…
- Title attribute: What banking actually pays, by stage
- Caption (also keep the key point in the HTML text): Numbers below are ranges, not guarantees — actual pay varies by bank, city, and individual performance.
**V5 — Self-assessment checklist** (place after the H2 “The 4-Checkpoint Protocol before you commit” #checkpoint)
- File: `banking-sector-career-india-self-checkpoint-protocol-before-commit.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Before you spend a year or more preparing for one specific banking track, run yourself through the same…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Stamina / Context / Market / Survival
- Numbers: use ONLY these facts from the article (exact values, no new ones): 01 Stamina Can you genuinely sustain 1-3 years of structured exam prep (for the PSU route) or 50-60 hour target-driven weeks (for the private route) without burning out? | 02 Context Can you fund 1-2 years of exam prep with limited or no income if you are going the PSU route, or accept lower starting pay for 2-3 years if you are going the private route, before either path pays off?
- Alt: Self-assessment checklist for “The 4-Checkpoint Protocol before you commit”: Stamina; Context; Market
- Title attribute: The 4-Checkpoint Protocol before you commit
- Caption (also keep the key point in the HTML text): Before you spend a year or more preparing for one specific banking track, run yourself through the same four-part check that applies to any serious…
**V6 — Mistakes versus smarter move panel** (place after the H2 “Mistakes that stall a banking career” #mistakes)
- File: `banking-sector-career-india-mistakes-mistakes-stall-banking-career.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: 01 Preparing for IBPS/SBI with no backup income plan Multi-year exam prep with zero income and no parallel…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Preparing for IBPS/SBI with no backup income plan / Assuming "private bank" always means higher pay / Staying in a generalist branch role for a decade with no… / Ignoring JAIIB/CAIIB because "the exam is optional" / Treating a private bank sales target role as a permanent home with no…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Decide on a specialization direction within your first 3-5 years, not after a decade of routine posting.
- Alt: Mistakes versus smarter move panel for “Mistakes that stall a banking career”: Preparing for IBPS/SBI with no backup…; Assuming "private bank" always means……
- Title attribute: Mistakes that stall a banking career
- Caption (also keep the key point in the HTML text): 01 Preparing for IBPS/SBI with no backup income plan Multi-year exam prep with zero income and no parallel skill or part-time work is a common way…

**Done when:** hero + 6 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/government-jobs/career-options-after-upsc-cse-india/

**H1:** Career options after UPSC CSE India: the real map once you clear it  
**Category:** government-jobs · **Words:** 3772 · **H2 sections:** 11 · **Search priority:** P1 (2 clicks, 489 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 12 other articles, with identical alt text and captions, so they say nothing specific about “Career options after UPSC CSE India: the real map once you…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/government-jobs/career-options-after-upsc-cse-india*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“How service allocation…”, “What your rank…”, “Cadre allocation: which…”, “Career trajectory…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 89%, 90%, 90%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `government-jobs-editorial-cover.webp`, `government-jobs-context.webp`, `government-jobs-filters.webp`, `government-jobs-compare.webp`, `government-jobs-sequence.webp`, `government-jobs-backup.webp`, `government-jobs-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `career-options-after-upsc-cse-india.webp`, `career-options-after-upsc-cse-india-detail.webp`, `career-options-after-upsc-cse-india-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `career-options-after-upsc-cse-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `career-options-after-upsc-cse-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Over-the-shoulder shot of an exam aspirant with preparation notes, a home study corner with natural window light. Props that belong to “Career options after UPSC CSE India: the real map once you clear it”: stacked exam books, a timetable, previous-year question papers. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: Career options after UPSC CSE India: the real map once you clear it
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 5 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `career-options-after-upsc-cse-india-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Career options after UPSC CSE India span IAS, IPS, IFS, IRS, and other Group A services.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): How service allocation actually works / What your rank realistically gets you / Cadre allocation: which state you serve in / Career trajectory inside the IAS
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “Career options after UPSC CSE India: the real map once you clear it”
- Title attribute: At a glance: Career options after UPSC CSE India: the real map once…
- Caption (also keep the key point in the HTML text): Career options after UPSC CSE India span IAS, IPS, IFS, IRS, and other Group A services.
**V2 — Comparison table** (place after the H2 “How service allocation actually works” #allocation)
- File: `career-options-after-upsc-cse-india-comparison-service-allocation-actually-works.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Clearing the Civil Services Examination gets you onto a merit list.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Service (2025 cycle) | Vacancies / Row: IAS (Indian… | 180 posts / Row: IPS (Indian Police… | 150 posts / Row: IFS (Indian Foreign… | 55 posts / Row: Central Services, Group A… | 507 posts / Row: Central Services, Group B | 195 posts / Assuming your rank alone decides your service, without your own preference order playing…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Comparison table for “How service allocation actually works”: Service (2025 cycle) | Vacancies; IAS (Indian… | 180 posts; IPS (Indian Police… | 150 posts
- Title attribute: How service allocation actually works
- Caption (also keep the key point in the HTML text): Clearing the Civil Services Examination gets you onto a merit list.
**V3 — Decision tree** (place after the H2 “Cadre allocation: which state you serve in” #cadre)
- File: `career-options-after-upsc-cse-india-decision-cadre-allocation-state-serve.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Service and cadre are two separate decisions, and both matter.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Just pick a random order for cadre preferences, it will sort itself out. / A home-state cadre is always the better outcome. / Cadre barely matters compared to which service you get. / The 26 IAS/IPS/IFoS cadres are grouped into five zones. You rank one cadre from each… / A home-state cadre means faster local-language fluency and family proximity, but it also…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Decision tree for “Cadre allocation: which state you serve in”: Just pick a random order for cadre…; A home-state cadre is always the…; Cadre barely matters…
- Title attribute: Cadre allocation: which state you serve in
- Caption (also keep the key point in the HTML text): Service and cadre are two separate decisions, and both matter.
**V4 — Comparison table** (place after the H2 “Career trajectory inside the IPS” #ips-path)
- File: `career-options-after-upsc-cse-india-comparison-career-trajectory-inside-ips.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: IPS careers move through police ranks with clearer command responsibility at each stage than most people…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Rank | Typical timeline | What changes / Row: Assistant Superintendent… | 0-2 years, on probation | District posting under a… / Row: Superintendent of Police… | 6-9 years | Runs a full district… / Row: Deputy Inspector General… | 12-16 years | Links state headquarters… / Row: Inspector General (IG) | Around 18 years | Commands a zone made up… / Row: Additional Director… | 25+ years | State-level command of a…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Rank Typical timeline What changes Assistant Superintendent of Police (ASP) 0-2 years, on probation District posting under a Superintendent, hands-on training in field policing and investigation. | Superintendent of Police (SP) 6-9 years Runs a full district police force, the first major independent command. | Deputy Inspector General (DIG) 12-16 years Links state headquarters to district forces, advises SPs on complex investigations, oversees specialised units.
- Alt: Comparison table for “Career trajectory inside the IPS”: Rank | Typical timeline | What changes; Assistant Superintendent… | 0-2…; Superintendent of Police… | 6-9…
- Title attribute: Career trajectory inside the IPS
- Caption (also keep the key point in the HTML text): IPS careers move through police ranks with clearer command responsibility at each stage than most people expect from outside the service.
**V5 — Linear process chain or roadmap** (place after the H2 “Group B services and the state route” #group-b)
- File: `career-options-after-upsc-cse-india-linear-group-services-state-route.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: A smaller share of vacancies each year go to Central Services, Group B — roles like Section Officer in the…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): A smaller share of vacancies each year go to Central Services, Group B — roles… / These sit below Group A in seniority and pay scale but still offer a genuine… / Group B is not a consolation outcome, but it is a different kind of career…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Linear process chain or roadmap for “Group B services and the state route”: A smaller share of vacancies each…; These sit below Group A in seniority…; Group B is…
- Title attribute: Group B services and the state route
- Caption (also keep the key point in the HTML text): A smaller share of vacancies each year go to Central Services, Group B — roles like Section Officer in the central secretariat, or Assistant Security…

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/government-jobs/government-exam-preparation-while-working-india/

**H1:** Government exam preparation while working in India: the realistic plan  
**Category:** government-jobs · **Words:** 3087 · **H2 sections:** 10 · **Search priority:** P1 (4 clicks, 595 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 12 other articles, with identical alt text and captions, so they say nothing specific about “Government exam preparation while working in India: the…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/government-jobs/government-exam-preparation-while-working-india*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“Should you quit your…”, “Realistic study hours…”, “A weekly structure that…”, “Using leave…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 86%, 87%, 88%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `government-jobs-editorial-cover.webp`, `government-jobs-context.webp`, `government-jobs-filters.webp`, `government-jobs-compare.webp`, `government-jobs-sequence.webp`, `government-jobs-backup.webp`, `government-jobs-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `government-exam-preparation-while-working-india.webp`, `government-exam-preparation-while-working-india-detail.webp`, `government-exam-preparation-while-working-india-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `government-exam-preparation-while-working-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `government-exam-preparation-while-working-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Close desk-level detail with a partly visible person of an exam aspirant with preparation notes, a home study corner with natural window light. Props that belong to “Government exam preparation while working in India: the realistic plan”: stacked exam books, a timetable, previous-year question papers. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: Government exam preparation while working in India: the realistic plan
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 5 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `government-exam-preparation-while-working-india-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Government exam preparation while working India: real weekly study-hour math, when to quit vs stay, leave…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Should you quit your job to prepare full-time? / Realistic study hours while working / A weekly structure that survives a real job / Using leave strategically / Notice period and job timing around your exam
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “Government exam preparation while working in India: the realistic plan”
- Title attribute: At a glance: Government exam preparation while working in India: the…
- Caption (also keep the key point in the HTML text): Government exam preparation while working India: real weekly study-hour math, when to quit vs stay, leave strategy, notice-period timing, and honest…
**V2 — Decision tree** (place after the H2 “Should you quit your job to prepare full-time?” #quit-or-not)
- File: `government-exam-preparation-while-working-india-decision-should-quit-job-prepare.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: This is the question most working aspirants ask before they have the data to answer it.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): This is your first serious attempt and you have not yet tested how much focused time you… / Your job genuinely allows 3-5 quality hours most weekdays, even if it takes negotiation… / Your household depends on this income, or a job gap would be hard to explain to future… / You have not yet built a real routine — quitting before proving you can study… / You have already attempted at least once while working and know exactly where the extra…
- Numbers: use ONLY these facts from the article (exact values, no new ones): You have 18-24 months of expenses saved, separate from any exam or coaching cost.
- Alt: Decision tree for “Should you quit your job to prepare full-time?”: This is your first serious attempt…; Your job genuinely allows 3-5 quality…; Your household…
- Title attribute: Should you quit your job to prepare full-time?
- Caption (also keep the key point in the HTML text): This is the question most working aspirants ask before they have the data to answer it.
**V3 — Comparison table** (place after the H2 “Realistic study hours while working” #hours)
- File: `government-exam-preparation-while-working-india-comparison-realistic-study-hours-while.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: The most common planning mistake is borrowing a study-hour target from a full-time aspirant's routine.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Exam track | Weekday | Weekend | Weekly total / Row: SSC CGL / CHSL | 1.5-2.5 focused hours | 5-7 hours across both days | Roughly 15-20 hours / Row: IBPS / SBI PO or Clerk | 2-3 focused hours | 6-8 hours across both days | Roughly 18-23 hours / Row: State PSC | 2-3 focused hours | 6-9 hours across both days | Roughly 20-24 hours / Row: UPSC Civil Services | 3-4 focused hours | 8-10 hours across both… | Roughly 30-35 hours
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Comparison table for “Realistic study hours while working”: Exam track | Weekday | Weekend |…; SSC CGL / CHSL | 1.5-2.5 focused…; IBPS / SBI PO or Clerk | 2-3…
- Title attribute: Realistic study hours while working
- Caption (also keep the key point in the HTML text): The most common planning mistake is borrowing a study-hour target from a full-time aspirant's routine.
**V4 — Chronological timeline** (place after the H2 “A weekly structure that survives a real job” #weekly-blueprint)
- File: `government-exam-preparation-while-working-india-chronological-weekly-structure-survives-real.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: A study plan only works if it can absorb a bad week without collapsing.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): A study plan only works if it can absorb a bad week without collapsing. / Here is a structure that holds up against real job demands, not just an ideal… / 01 Protect one deep-work block before work, not after it Morning hours before…
- Numbers: use ONLY these facts from the article (exact values, no new ones): 03 Load 60-70% of your weekly hours into the weekend This is where working aspirants realistically catch up on volume: full-length mock tests, answer writing, revision of the week's topics, and anything that needs an uninterrupted 3-4 hour stretch.
- Alt: Chronological timeline for “A weekly structure that survives a real job”: A study plan only works if it can…; Here is a structure that holds up…; 01 Protect one…
- Title attribute: A weekly structure that survives a real job
- Caption (also keep the key point in the HTML text): A study plan only works if it can absorb a bad week without collapsing.
**V5 — Comparison table** (place after the H2 “Honest odds: working vs full-time prep” #odds)
- File: `government-exam-preparation-while-working-india-comparison-honest-odds-working-full.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Working aspirants deserve the real numbers, not motivational framing.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Metric | Figure / Row: UPSC Civil Services —… | Roughly 1,000 selections… / Row: Typical UPSC timeline… | Around 1.5 years to a… / Row: SSC CGL / IBPS PO, while… | A focused working… / Row: Share of successful UPSC… | A small minority — most…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Metric Figure UPSC Civil Services — recent cycle selection ratio Roughly 1,000 selections from over 5.7 lakh candidates who appeared — close to 0.1-0.17% overall. | Typical UPSC timeline, full-time preparation Around 1.5 years to a first serious attempt for most full-time aspirants who start from a reasonable base. | Typical UPSC timeline, while working Commonly 2-3 years, because weekly study volume runs lower and more of it happens on weekends.
- Alt: Comparison table for “Honest odds: working vs full-time prep”: Metric | Figure; UPSC Civil Services —… | Roughly…; Typical UPSC timeline… | Around 1.5…
- Title attribute: Honest odds: working vs full-time prep
- Caption (also keep the key point in the HTML text): Working aspirants deserve the real numbers, not motivational framing.

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/government-jobs/government-jobs-after-engineering-india/

**H1:** Government jobs after engineering India: the complete route map  
**Category:** government-jobs · **Words:** 4534 · **H2 sections:** 15 · **Search priority:** P1 (1 clicks, 258 impressions)  
**Status: AMBER — AUTHORED** · og:image: /images/blog/government-jobs/government-jobs-after-engineering-india/government-jobs-after-engineering-route-map-cover.webp

> **ON THE OWNER'S EXCLUSION LIST.** This route was explicitly excluded in the earlier visual brief (38 routes, listed in the deleted `BLOG-VISUAL-AUDIT.md`, commit 26b8e33~1). Do not create or replace images here unless the owner confirms. The findings below are for the owner's decision.

**Findings**
1. 6 authored images on the page (hero + 5 supporting).
2. Verify pay figures (Rs 10-15 LPA PSU, Rs 56,100 basic UPSC ESE, Rs 44,000-52,000 SSC JE in-hand, Rs 55,000-65,000 RRB JE, Rs 75,000-95,000 RRB SSE).
3. Hero is a graphic/flat-lay/illustration rather than a natural human scene. Keep it only if it is clear; otherwise add a natural editorial hero.
4. 6 of 6 images have no title attribute.
5. 3 images are over 250 KB: `six-government-job-routes-after-engineering.webp` (251 KB), `government-route-salary-reality.webp` (261 KB), `government-job-prep-mistakes.webp` (290 KB)
6. Numbers read from the images (OCR) that do not appear in the article text, verify or remove: `government-route-salary-reality.webp`: 000. OCR can misread, so check by eye.

**Current images**
| File | Real size | Attr size | Loading | Position | Issues |
|---|---|---|---|---|---|
| `government-jobs/government-jobs-after-engineering-india/government-jobs-after-engineering-route-map-cover.webp` | 1600x900 | 1600x900 | eager | 12% | no title attr |
| `government-jobs/government-jobs-after-engineering-india/six-government-job-routes-after-engineering.webp` | 1122x1402 | 1122x1402 | lazy | 27% | no title attr; 251 KB |
| `government-jobs/government-jobs-after-engineering-india/four-checkpoint-government-job-route-test.webp` | 1122x1402 | 1122x1402 | lazy | 53% | no title attr |
| `government-jobs/government-jobs-after-engineering-india/realistic-government-exam-prep-timelines.webp` | 1600x900 | 1600x900 | lazy | 61% | no title attr |
| `government-jobs/government-jobs-after-engineering-india/government-route-salary-reality.webp` | 1122x1402 | 1122x1402 | lazy | 68% | no title attr; 261 KB |
| `government-jobs/government-jobs-after-engineering-india/government-job-prep-mistakes.webp` | 1122x1402 | 1122x1402 | lazy | 75% | no title attr; 290 KB |

**Required actions**
1. HERO: optional upgrade. Keep the current graphic hero if it reads clearly; otherwise add a natural scene hero using the brief below.
- Reason: current hero is a graphic, not a human scene
- File: `government-jobs-after-engineering-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `government-jobs-after-engineering-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Top-down desk view with hands in frame of a final-year student or recent graduate, a home desk near a window in the evening. Props that belong to “Government jobs after engineering India: the complete route map”: a circuit board, graph paper, a laptop with CAD or code, a notebook. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: Government jobs after engineering India: the complete route map
- Caption: one sentence tying the scene to the article's decision.
2. CREATE 1 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `government-jobs-after-engineering-india-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Government jobs after engineering India run through GATE-PSU, UPSC ESE, SSC JE, RRB JE/SSE, state PSC, and…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Why the pull toward a government job never really goes away / Six real routes, one table / GATE to PSU: the fastest single-exam route / UPSC ESE (IES): the highest ceiling, the hardest odds / SSC JE: no GATE, no interview, faster entry
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “Government jobs after engineering India: the complete route map”
- Title attribute: At a glance: Government jobs after engineering India: the complete…
- Caption (also keep the key point in the HTML text): Government jobs after engineering India run through GATE-PSU, UPSC ESE, SSC JE, RRB JE/SSE, state PSC, and defence entries.
3. FIX attributes on every kept image: meaningful kebab-case filename; alt that describes what is visible; title attribute; caption (figcaption) for every explanatory image; width/height equal to the real pixel size; `loading="lazy"` below the fold, hero eager with fetchpriority; WebP under 200 KB.
4. Mobile check at 390px: no horizontal overflow, text inside images readable without zoom (body text on the image at least about 16 px when the image is displayed at 360 px wide), captions wrap.

**Done when:** hero + 6 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/government-jobs/psu-jobs-after-engineering-india/

**H1:** PSU jobs after engineering India: GATE route, PSU-only exams, and the Maharatna gap  
**Category:** government-jobs · **Words:** 3864 · **H2 sections:** 12 · **Search priority:** P1 (0 clicks, 276 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 12 other articles, with identical alt text and captions, so they say nothing specific about “PSU jobs after engineering India: GATE route, PSU-only…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/government-jobs/psu-jobs-after-engineering-india*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“Two doors into a PSU…”, “Door 1: GATE-based PSU…”, “Door 2: PSUs that run…”, “The 3-Layer PSU Fit…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 88%, 89%, 89%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `government-jobs-editorial-cover.webp`, `government-jobs-context.webp`, `government-jobs-filters.webp`, `government-jobs-compare.webp`, `government-jobs-sequence.webp`, `government-jobs-backup.webp`, `government-jobs-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `psu-jobs-after-engineering-india.webp`, `psu-jobs-after-engineering-india-detail.webp`, `psu-jobs-after-engineering-india-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `psu-jobs-after-engineering-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `psu-jobs-after-engineering-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Close desk-level detail with a partly visible person of a final-year student or recent graduate, a quiet corner of a library. Props that belong to “PSU jobs after engineering India: GATE route, PSU-only exams, and the Maharatna…”: a circuit board, graph paper, a laptop with CAD or code, a notebook. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: PSU jobs after engineering India: GATE route, PSU-only exams, and the…
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 5 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `psu-jobs-after-engineering-india-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: PSU jobs after engineering India run through two doors: GATE-based recruitment and each PSU's own written…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Why "PSU job" is not one decision / Two doors into a PSU, not one / Door 1: GATE-based PSU recruitment / Door 2: PSUs that run their own recruitment exam / Maharatna, Navratna, Miniratna: what the label actually changes
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “PSU jobs after engineering India: GATE route, PSU-only exams, and the…”
- Title attribute: At a glance: PSU jobs after engineering India: GATE route, PSU-only…
- Caption (also keep the key point in the HTML text): PSU jobs after engineering India run through two doors: GATE-based recruitment and each PSU's own written exam.
**V2 — Comparison table** (place after the H2 “Door 1: GATE-based PSU recruitment” #gate-door)
- File: `psu-jobs-after-engineering-india-comparison-door-gate-based-psu.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Over 70 public sector undertakings across sectors like oil and gas, power, mining, and heavy engineering use…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Tier | Common examples | Recruitment reality / Row: Maharatna examples | IOCL, ONGC, NTPC, Coal… | Most of the… / Row: Navratna examples | NALCO, RVNL, Container… | Still GATE-based in most… / Row: Miniratna and… | BEML, defence R&D bodies… | Recruitment mode varies…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Comparison table for “Door 1: GATE-based PSU recruitment”: Tier | Common examples | Recruitment…; Maharatna examples | IOCL, ONGC…; Navratna examples | NALCO, RVNL…
- Title attribute: Door 1: GATE-based PSU recruitment
- Caption (also keep the key point in the HTML text): Over 70 public sector undertakings across sectors like oil and gas, power, mining, and heavy engineering use GATE scores as their primary or…
**V3 — Comparison table** (place after the H2 “The PSU career ladder, grade by grade” #ladder)
- File: `psu-jobs-after-engineering-india-comparison-psu-career-ladder-grade.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Most PSUs run a fairly consistent executive grade structure, commonly labelled E1 through E9, even though…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Grade | What it typically… / Row: E1 — Executive/Management… | Entry grade for fresh… / Row: E2-E3 — Assistant Manager… | First independent… / Row: E4-E5 — Manager / Senior… | Usually reached eight to… / Row: E6-E7 — Deputy General… | Mid-to-senior leadership.… / Row: E8-E9 — Executive… | Functional director roles…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Comparison table for “The PSU career ladder, grade by grade”: Grade | What it typically…; E1 — Executive/Management… | Entry…; E2-E3 — Assistant Manager… | First…
- Title attribute: The PSU career ladder, grade by grade
- Caption (also keep the key point in the HTML text): Most PSUs run a fairly consistent executive grade structure, commonly labelled E1 through E9, even though exact grade names and pay bands differ by…
**V4 — Mistakes versus smarter move panel** (place after the H2 “Pay, perks, and the pension myth” #pay-perks)
- File: `psu-jobs-after-engineering-india-mistakes-pay-perks-pension-myth.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: PSU compensation is rarely a single number.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Most PSUs moved away from a defined-benefit government-style pension decades ago. What… / Dearness Allowance in most PSUs runs on the Industrial DA (IDA) pattern, revised… / House Rent Allowance is tiered by city classification, commonly around 24-30% of basic in… / Medical coverage typically extends to the employee, spouse, and dependent parents at…
- Numbers: use ONLY these facts from the article (exact values, no new ones): House Rent Allowance is tiered by city classification, commonly around 24-30% of basic in metro postings and lower in smaller towns, alongside company-provided or subsidised housing at many plant and township locations.
- Alt: Mistakes versus smarter move panel for “Pay, perks, and the pension myth”: Most PSUs moved away from a…; Dearness Allowance in most PSUs runs…; House Rent Allowance…
- Title attribute: Pay, perks, and the pension myth
- Caption (also keep the key point in the HTML text): PSU compensation is rarely a single number.
**V5 — Asymmetrical pros-and-cons comparison** (place after the H2 “PSU pace vs private-sector engineering: the honest comparison” #psu-vs-private)
- File: `psu-jobs-after-engineering-india-asymmetrical-psu-pace-private-sector.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: This is the comparison most PSU content skips, and it matters more than the pay figure alone.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Meaningfully lower layoff risk, since PSU employment is tied to government ownership… / A predictable, structured promotion ladder with defined eligibility windows at each grade. / A wider, more stable perk basket: medical coverage for family, housing support, LTC, and… / Deep, hands-on exposure to large-scale infrastructure, energy, or manufacturing systems… / Salary growth tied to grade eligibility and vacancy availability, not to how fast you…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Asymmetrical pros-and-cons comparison for “PSU pace vs private-sector engineering: the honest…”: Meaningfully lower layoff risk, since…; A predictable, structured…
- Title attribute: PSU pace vs private-sector engineering: the honest comparison
- Caption (also keep the key point in the HTML text): This is the comparison most PSU content skips, and it matters more than the pay figure alone.

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/government-jobs/rbi-and-sbi-career-growth-india/

**H1:** RBI and SBI career growth India: the regulator ladder vs the commercial bank ladder  
**Category:** government-jobs · **Words:** 4756 · **H2 sections:** 15 · **Search priority:** P1 (1 clicks, 354 impressions)  
**Status: AMBER — AUTHORED + GENERIC EXTRAS** · og:image: /images/blog/government-jobs/rbi-and-sbi-career-growth-india/rbi-sbi-career-growth-india-cover.webp

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 12 other articles, with identical alt text and captions, so they say nothing specific about “RBI and SBI career growth India: the regulator ladder vs…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/government-jobs/rbi-and-sbi-career-growth-india*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“The short answer”, “Why RBI and SBI are not…”, “The four entry doors”, “RBI Grade B vs RBI…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.
5. 6 authored images on the page (hero + 5 supporting).
6. Verify RBI Grade B gross Rs 1,54,936 / basic Rs 78,450, RBI Assistant Rs 58,514 in-hand, SBI PO Rs 80,000-82,000, SBI Clerk Rs 40,000-43,000 and post counts (60-350, ~1,500).
7. Hero is a graphic/flat-lay/illustration rather than a natural human scene. Keep it only if it is clear; otherwise add a natural editorial hero.
8. 6 of 6 images have no title attribute.
9. Numbers read from the images (OCR) that do not appear in the article text, verify or remove: `rbi-sbi-career-growth-india-cover.webp`: 500; `rbi-sbi-pay-perks-compared.webp`: 258,5, 20197 lakh, 1418. OCR can misread, so check by eye.

**Current images**
| File | Real size | Attr size | Loading | Position | Issues |
|---|---|---|---|---|---|
| `government-jobs/rbi-and-sbi-career-growth-india/rbi-sbi-career-growth-india-cover.webp` | 1600x900 | 1600x900 | eager | 12% | no title attr |
| `government-jobs/rbi-and-sbi-career-growth-india/four-entry-doors-rbi-sbi-careers.webp` | 1122x1402 | 1122x1402 | lazy | 25% | no title attr |
| `government-jobs/rbi-and-sbi-career-growth-india/rbi-sbi-pay-perks-compared.webp` | 1122x1402 | 1122x1402 | lazy | 41% | no title attr |
| `government-jobs/rbi-and-sbi-career-growth-india/rbi-sbi-promotion-ladders.webp` | 1086x1448 | 1086x1448 | lazy | 45% | no title attr |
| `government-jobs/rbi-and-sbi-career-growth-india/four-checkpoint-protocol-rbi-sbi-choice.webp` | 1122x1402 | 1122x1402 | lazy | 52% | no title attr |
| `government-jobs/rbi-and-sbi-career-growth-india/rbi-vs-sbi-career-fit.webp` | 1122x1402 | 1122x1402 | lazy | 64% | no title attr |

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 90%, 90%, 91%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `government-jobs-editorial-cover.webp`, `government-jobs-context.webp`, `government-jobs-filters.webp`, `government-jobs-compare.webp`, `government-jobs-sequence.webp`, `government-jobs-backup.webp`, `government-jobs-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `rbi-and-sbi-career-growth-india.webp`, `rbi-and-sbi-career-growth-india-detail.webp`, `rbi-and-sbi-career-growth-india-action.webp`.
3. HERO: optional upgrade. Keep the current graphic hero if it reads clearly; otherwise add a natural scene hero using the brief below.
- Reason: current hero is a graphic, not a human scene
- File: `rbi-and-sbi-career-growth-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `rbi-and-sbi-career-growth-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Close desk-level detail with a partly visible person of an exam aspirant with preparation notes, a classroom desk after hours. Props that belong to “RBI and SBI career growth India: the regulator ladder vs the commercial bank…”: notebooks, a laptop and printed course or job information. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: RBI and SBI career growth India: the regulator ladder vs the…
- Caption: one sentence tying the scene to the article's decision.
4. CREATE 1 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `rbi-and-sbi-career-growth-india-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: RBI and SBI career growth India compared: RBI Grade B vs Assistant, SBI PO vs Clerk, pay, promotion speed…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): The short answer on RBI and SBI career growth India / Why RBI and SBI are not the same career / The four entry doors / RBI Grade B vs RBI Assistant: the two RBI doors compared / SBI PO vs SBI Clerk: the two SBI doors compared
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “RBI and SBI career growth India: the regulator ladder vs the…”
- Title attribute: At a glance: RBI and SBI career growth India: the regulator ladder vs…
- Caption (also keep the key point in the HTML text): RBI and SBI career growth India compared: RBI Grade B vs Assistant, SBI PO vs Clerk, pay, promotion speed, and why a central bank job and a…
5. FIX attributes on every kept image: meaningful kebab-case filename; alt that describes what is visible; title attribute; caption (figcaption) for every explanatory image; width/height equal to the real pixel size; `loading="lazy"` below the fold, hero eager with fetchpriority; WebP under 200 KB.
6. Mobile check at 390px: no horizontal overflow, text inside images readable without zoom (body text on the image at least about 16 px when the image is displayed at 360 px wide), captions wrap.

**Done when:** hero + 6 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/government-jobs/ssc-vs-bank-exams-which-to-prepare-india/

**H1:** SSC vs bank exams: which to prepare for in India, when you can only pick one  
**Category:** government-jobs · **Words:** 4494 · **H2 sections:** 15 · **Search priority:** P1 (4 clicks, 2152 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 12 other articles, with identical alt text and captions, so they say nothing specific about “SSC vs bank exams: which to prepare for in India, when you…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/government-jobs/ssc-vs-bank-exams-which-to-prepare-india*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“Ssc”, “Bank Exams Which To…”, “The short answer”, “What SSC and bank exams…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 89%, 90%, 91%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `government-jobs-editorial-cover.webp`, `government-jobs-context.webp`, `government-jobs-filters.webp`, `government-jobs-compare.webp`, `government-jobs-sequence.webp`, `government-jobs-backup.webp`, `government-jobs-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `ssc-vs-bank-exams-which-to-prepare-india.webp`, `ssc-vs-bank-exams-which-to-prepare-india-detail.webp`, `ssc-vs-bank-exams-which-to-prepare-india-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `ssc-vs-bank-exams-which-to-prepare-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `ssc-vs-bank-exams-which-to-prepare-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Wide three-quarter shot of an exam aspirant with preparation notes, a family dining table in the evening. Props that belong to “SSC vs bank exams: which to prepare for in India, when you can only pick one”: a ledger, calculator, balance sheet printouts, a laptop. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: SSC vs bank exams: which to prepare for in India, when you can only…
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 5 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `ssc-vs-bank-exams-which-to-prepare-india-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: SSC vs bank exams which to prepare India: compare SSC CGL/CHSL and IBPS/SBI PO on syllabus overlap, real…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): The short answer to SSC vs bank exams which to prepare for in India / What SSC and bank exams actually cover / The real syllabus overlap between SSC and bank exams / Difficulty and competition, honestly / Pay and career growth compared
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “SSC vs bank exams: which to prepare for in India, when you can only…”
- Title attribute: At a glance: SSC vs bank exams: which to prepare for in India, when…
- Caption (also keep the key point in the HTML text): SSC vs bank exams which to prepare India: compare SSC CGL/CHSL and IBPS/SBI PO on syllabus overlap, real competition, pay, and career ceiling before…
**V2 — Asymmetrical pros-and-cons comparison** (place after the H2 “The short answer to SSC vs bank exams which to prepare for in India” #short-answer)
- File: `ssc-vs-bank-exams-which-to-prepare-india-asymmetrical-short-answer-ssc-bank.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: There is no universal winner, and most comparison content online picks a side based on which one the writer…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): There is no universal winner, and most comparison content online picks a side… / SSC wins on department variety and steadier day-to-day hours: clear SSC CGL and… / Bank exams win on starting pay and attempt frequency: IBPS and SBI both run…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Asymmetrical pros-and-cons comparison for “The short answer to SSC vs bank exams which to prepare…”: There is no universal winner, and…; SSC wins on department…
- Title attribute: The short answer to SSC vs bank exams which to prepare for in India
- Caption (also keep the key point in the HTML text): There is no universal winner, and most comparison content online picks a side based on which one the writer happened to clear.
**V3 — Comparison table** (place after the H2 “Difficulty and competition, honestly” #difficulty-competition)
- File: `ssc-vs-bank-exams-which-to-prepare-india-comparison-difficulty-competition-honestly.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: "Which one is harder" gets asked constantly, and the honest answer is that both are hard enough to take…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Demand signal | What it actually shows / Row: Recent vacancy volume | SSC CGL 2026 was notified… / Row: Applicant pool size | SSC CGL routinely draws… / Row: Selection ratio | Both land in a similar… / Huge applicant volume (often 25-40 lakh) makes the field feel more crowded even when… / A wider, more unpredictable static-GK syllabus that rewards broad, sustained reading over… / One main annual notification cycle, so a missed attempt usually costs a full year.
- Numbers: use ONLY these facts from the article (exact values, no new ones): Applicant pool size SSC CGL routinely draws well over 25-40 lakh applicants nationwide because it is open to a very wide range of graduates chasing a wide range of departments. | Bank PO exams (IBPS combined) typically draw a somewhat smaller applicant pool, commonly cited in the 15-25 lakh range, spread across fewer, more narrowly defined roles. | SSC's version of hard Huge applicant volume (often 25-40 lakh) makes the field feel more crowded even when individual cutoffs look moderate.
- Alt: Comparison table for “Difficulty and competition, honestly”: Demand signal | What it actually shows; Recent vacancy volume | SSC CGL 2026…; Applicant pool size |…
- Title attribute: Difficulty and competition, honestly
- Caption (also keep the key point in the HTML text): "Which one is harder" gets asked constantly, and the honest answer is that both are hard enough to take seriously — the difficulty shows up in…
**V4 — Comparison table** (place after the H2 “Pay and career growth compared” #pay-growth)
- File: `ssc-vs-bank-exams-which-to-prepare-india-comparison-pay-career-growth-compared.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Salary comparisons for this decision tend to quote whichever number makes one side look best.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Track | Entry-level pay… / Row: SSC CGL (central govt… | Entry-level posts sit… / Row: SSC CHSL (central govt… | Lower entry band than CGL… / Row: IBPS PO (public sector… | Basic pay starts around… / Row: SBI PO (State Bank of… | Initial in-hand pay is…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Track Entry-level pay reality SSC CGL (central govt, Group B/C) Entry-level posts sit around Pay Level 4 (Rs 25,500-81,100 basic band) up to Pay Level 7 (Rs 44,900-1,42,400 basic band) depending on the post. | In-hand gross pay typically runs roughly Rs 35,000-65,000 a month depending on post, city, and HRA. | IBPS PO (public sector bank officer) Basic pay starts around Rs 48,480 and can rise to roughly Rs 85,920 with scheduled increments.
- Alt: Comparison table for “Pay and career growth compared”: Track | Entry-level pay…; SSC CGL (central govt… | Entry-level…; SSC CHSL (central govt… | Lower entry…
- Title attribute: Pay and career growth compared
- Caption (also keep the key point in the HTML text): Salary comparisons for this decision tend to quote whichever number makes one side look best.
**V5 — Chronological timeline** (place after the H2 “Use The 4-Checkpoint Protocol before you commit a year to either track” #checkpoint)
- File: `ssc-vs-bank-exams-which-to-prepare-india-chronological-use-checkpoint-protocol-before.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: A vacancy count or a salary chart cannot tell you which exam fits your actual working style and life…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): A vacancy count or a salary chart cannot tell you which exam fits your actual… / The 4-Checkpoint Protocol narrows this decision to what genuinely matters for… / 01 Biology SSC rewards people who can hold a wide static-knowledge base…
- Numbers: use ONLY these facts from the article (exact values, no new ones): 02 Context Both tracks typically need 4-8 months of serious, structured prep for a first realistic attempt, and most successful candidates do not clear on their first try — plan for 1-2 attempt cycles, not one shot. | If your family or financial runway cannot absorb 1-2 years of exam-focused prep without income, that constraint should weigh as heavily as which exam "suits your brain" better.
- Alt: Chronological timeline for “Use The 4-Checkpoint Protocol before you commit a year…”: A vacancy count or a salary chart…; The 4-Checkpoint Protocol narrows…; 01…
- Title attribute: Use The 4-Checkpoint Protocol before you commit a year to either track
- Caption (also keep the key point in the HTML text): A vacancy count or a salary chart cannot tell you which exam fits your actual working style and life situation.

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/government-jobs/state-vs-central-government-jobs-india/

**H1:** State vs central government jobs India: the honest trade-off before you pick a track  
**Category:** government-jobs · **Words:** 4450 · **H2 sections:** 13 · **Search priority:** P1 (2 clicks, 537 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 12 other articles, with identical alt text and captions, so they say nothing specific about “State vs central government jobs India: the honest…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/government-jobs/state-vs-central-government-jobs-india*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“State”, “Central Government Jobs…”, “The short answer”, “State PSC vs UPSC/SSC…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 89%, 89%, 90%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `government-jobs-editorial-cover.webp`, `government-jobs-context.webp`, `government-jobs-filters.webp`, `government-jobs-compare.webp`, `government-jobs-sequence.webp`, `government-jobs-backup.webp`, `government-jobs-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `state-vs-central-government-jobs-india.webp`, `state-vs-central-government-jobs-india-detail.webp`, `state-vs-central-government-jobs-india-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `state-vs-central-government-jobs-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `state-vs-central-government-jobs-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Top-down desk view with hands in frame of an exam aspirant with preparation notes, a classroom desk after hours. Props that belong to “State vs central government jobs India: the honest trade-off before you pick a…”: stacked exam books, a timetable, previous-year question papers. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: State vs central government jobs India: the honest trade-off before…
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 5 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `state-vs-central-government-jobs-india-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: State vs central government jobs India compared on real pay commission gaps, State PSC vs UPSC/SSC…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): The short answer to state vs central government jobs India / State PSC vs UPSC/SSC: the real exam map / Pay scale: 7th CPC vs state pay commissions / Transfer and posting reality / Prestige and career ceiling, honestly
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “State vs central government jobs India: the honest trade-off before…”
- Title attribute: At a glance: State vs central government jobs India: the honest…
- Caption (also keep the key point in the HTML text): State vs central government jobs India compared on real pay commission gaps, State PSC vs UPSC/SSC competition, transfer reality, and prestige — so…
**V2 — Asymmetrical pros-and-cons comparison** (place after the H2 “The short answer to state vs central government jobs India” #short-answer)
- File: `state-vs-central-government-jobs-india-asymmetrical-short-answer-state-central.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: There is no universal winner here, and most comparison content treats this as "central is always better,"…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): There is no universal winner here, and most comparison content treats this as… / Central government jobs win on total vacancy pool, national reach, and… / UPSC and SSC together recruit for a far wider range of departments than any…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Asymmetrical pros-and-cons comparison for “The short answer to state vs central government jobs…”: There is no universal winner here…; Central government jobs win…
- Title attribute: The short answer to state vs central government jobs India
- Caption (also keep the key point in the HTML text): There is no universal winner here, and most comparison content treats this as "central is always better," which is not accurate once you look past…
**V3 — Comparison table** (place after the H2 “State PSC vs UPSC/SSC: the real exam map” #exam-landscape)
- File: `state-vs-central-government-jobs-india-comparison-state-psc-upsc-ssc.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Before comparing pay or postings, it helps to be precise about what each exam route actually recruits for…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: What to compare | State route (State… | Central route (UPSC /… / Row: Recruiting body | Each state runs its own… | UPSC conducts the Civil… / Row: What you actually join | A state cadre such as UP… | IAS/IPS/IFoS officers get… / Row: Number of exams to track | One state exam calendar… | UPSC CSE runs once a… / Domicile and reservation rules you should check before you prepare
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Comparison table for “State PSC vs UPSC/SSC: the real exam map”: What to compare | State route (State……; Recruiting body | Each state runs its…; What you actually…
- Title attribute: State PSC vs UPSC/SSC: the real exam map
- Caption (also keep the key point in the HTML text): Before comparing pay or postings, it helps to be precise about what each exam route actually recruits for, because "state government job" and…
**V4 — Self-assessment checklist** (place after the H2 “Transfer and posting reality” #transfer-posting)
- File: `state-vs-central-government-jobs-india-self-transfer-posting-reality.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: This is the part popular assumptions about government jobs get wrong most often, in both directions.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Postings stay inside one state's geographic boundary for your entire career. / District-to-district transfers happen regularly, sometimes every 2-4 years. / Local language and administrative-system familiarity carry real, lasting value. / IAS/IPS: mostly within one allotted state cadre, with periodic central deputation. / Central Group A/B departmental posts: genuinely all-India, city determined by department…
- Numbers: use ONLY these facts from the article (exact values, no new ones): District-to-district transfers happen regularly, sometimes every 2-4 years.
- Alt: Self-assessment checklist for “Transfer and posting reality”: Postings stay inside one state's…; District-to-district transfers happen…; Local language and…
- Title attribute: Transfer and posting reality
- Caption (also keep the key point in the HTML text): This is the part popular assumptions about government jobs get wrong most often, in both directions.
**V5 — Comparison table** (place after the H2 “Competition levels compared” #competition)
- File: `state-vs-central-government-jobs-india-comparison-competition-levels-compared.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: "Which one is easier" gets asked constantly, and the honest answer depends heavily on which specific exam and…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Exam route | What the competition… / Row: UPSC Civil Services… | Recent cycles have drawn… / Row: State PSC exams (state… | Applicant volume swings… / Row: SSC CGL and other central… | SSC CGL alone routinely…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Exam route What the competition actually looks like UPSC Civil Services Examination Recent cycles have drawn well over 10 lakh applicants competing for roughly 800-1,000 posts across IAS, IPS, IFoS, and allied central services — a selection rate commonly cited | Smaller and mid-size states commonly see 1-3 lakh applicants for a few hundred posts. | SSC CGL and other central Group B/C exams SSC CGL alone routinely draws 25-40 lakh applicants nationwide for a much wider vacancy pool spread across dozens of central departments, because the same exam feeds many different postings at once.
- Alt: Comparison table for “Competition levels compared”: Exam route | What the competition…; UPSC Civil Services… | Recent cycles…; State PSC exams (state… | Applicant…
- Title attribute: Competition levels compared
- Caption (also keep the key point in the HTML text): "Which one is easier" gets asked constantly, and the honest answer depends heavily on which specific exam and which state you are comparing, not a…

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/government-jobs/what-to-do-after-bank-exam-failure-india/

**H1:** What to do after bank exam failure in India: the honest re-attempt math  
**Category:** government-jobs · **Words:** 4423 · **H2 sections:** 12 · **Search priority:** P1 (2 clicks, 497 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 12 other articles, with identical alt text and captions, so they say nothing specific about “What to do after bank exam failure in India: the honest…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/government-jobs/what-to-do-after-bank-exam-failure-india*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“The short answer”, “Bank exam attempt…”, “What the actual odds…”, “Diagnose exactly where…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 89%, 89%, 90%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `government-jobs-editorial-cover.webp`, `government-jobs-context.webp`, `government-jobs-filters.webp`, `government-jobs-compare.webp`, `government-jobs-sequence.webp`, `government-jobs-backup.webp`, `government-jobs-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `what-to-do-after-bank-exam-failure-india.webp`, `what-to-do-after-bank-exam-failure-india-detail.webp`, `what-to-do-after-bank-exam-failure-india-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `what-to-do-after-bank-exam-failure-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `what-to-do-after-bank-exam-failure-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Wide three-quarter shot of an exam aspirant with preparation notes, a family dining table in the evening. Props that belong to “What to do after bank exam failure in India: the honest re-attempt math”: a ledger, calculator, balance sheet printouts, a laptop. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: What to do after bank exam failure in India: the honest re-attempt…
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 5 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `what-to-do-after-bank-exam-failure-india-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: What to do after bank exam failure in India: since IBPS and SBI run yearly with no attempt cap, the real…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): The short answer to what to do after bank exam failure in India / Bank exam attempt reality vs UPSC / What the actual odds looked like / Diagnose exactly where you failed / Re-attempt or pivot: the real decision
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “What to do after bank exam failure in India: the honest re-attempt…”
- Title attribute: At a glance: What to do after bank exam failure in India: the honest…
- Caption (also keep the key point in the HTML text): What to do after bank exam failure in India: since IBPS and SBI run yearly with no attempt cap, the real question is which stage you failed at and…
**V2 — Comparison table** (place after the H2 “Bank exam attempt reality vs UPSC” #attempt-reality)
- File: `what-to-do-after-bank-exam-failure-india-comparison-bank-exam-attempt-reality.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: If you have been reading UPSC recovery content or hearing "attempts are running out" language from coaching…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Exam | Age limit | Attempt cap | Frequency / Row: IBPS PO / Clerk | 20-30 (PO), 20-28 (Clerk) | No official attempt cap | Runs every year / Row: SBI PO / Clerk | 21-30 (PO), 20-28… | No official attempt cap | Runs every year / Row: RRB PO / Clerk | Broadly 18-30, check… | No official attempt cap | Runs every year / Row: UPSC CSE (for comparison) | Up to 32-37 depending on… | 6-9 attempts, or none for… | Runs every year, but…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Comparison table for “Bank exam attempt reality vs UPSC”: Exam | Age limit | Attempt cap |…; IBPS PO / Clerk | 20-30 (PO), 20-28…; SBI PO / Clerk | 21-30 (PO)…
- Title attribute: Bank exam attempt reality vs UPSC
- Caption (also keep the key point in the HTML text): If you have been reading UPSC recovery content or hearing "attempts are running out" language from coaching centres, it is worth seeing how…
**V3 — Stat panel or bar chart (only the numbers listed)** (place after the H2 “What the actual odds looked like” #odds)
- File: `what-to-do-after-bank-exam-failure-india-stat-actual-odds-looked-like.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: It helps to see the real scale of competition before deciding what a non-selection means about you.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): It helps to see the real scale of competition before deciding what a… / For the IBPS PO 2025 cycle, over 12 lakh candidates applied for roughly 5,200… / SBI PO cycles run similarly competitive, with mains sectional cutoffs alone…
- Numbers: use ONLY these facts from the article (exact values, no new ones): For the IBPS PO 2025 cycle, over 12 lakh candidates applied for roughly 5,200 notified vacancies — a selection rate under half a percent, or roughly 1 selected candidate for every 237 applicants.
- Alt: Stat panel or bar chart (only the numbers listed) for “What the actual odds looked like”: It helps to see the real scale of…; For the IBPS PO 2025 cycle, over 12……
- Title attribute: What the actual odds looked like
- Caption (also keep the key point in the HTML text): It helps to see the real scale of competition before deciding what a non-selection means about you.
**V4 — Mistakes versus smarter move panel** (place after the H2 “Diagnose exactly where you failed” #diagnose)
- File: `what-to-do-after-bank-exam-failure-india-mistakes-diagnose-exactly-where-failed.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Because bank exams run in clearly separated stages — prelims, mains, and interview — with sectional cutoffs…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Prelims has no sectional cutoff — only an overall cutoff, so a weak section can be offset… / A prelims miss usually points to raw speed and accuracy under time pressure, not… / Fix: increase timed mock volume and sectional time allocation before adding new topics. / Mains carries a sectional cutoff — failing even one section eliminates you regardless of… / A mains miss almost always points to one specific weak section, not general…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Mistakes versus smarter move panel for “Diagnose exactly where you failed”: Prelims has no sectional cutoff —…; A prelims miss usually points to raw…; Fix: increase…
- Title attribute: Diagnose exactly where you failed
- Caption (also keep the key point in the HTML text): Because bank exams run in clearly separated stages — prelims, mains, and interview — with sectional cutoffs that behave differently at each stage, a…
**V5 — Comparison table** (place after the H2 “Where your bank exam prep skills genuinely transfer” #skills-transfer)
- File: `what-to-do-after-bank-exam-failure-india-comparison-where-bank-exam-prep.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: "You learned a lot preparing for bank exams" is true, but vague encouragement does not get you hired or…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Skill built in bank… | Where it genuinely… | What proof looks like / Row: Speed and accuracy under… | SSC CGL/CHSL, RRB NTPC… | A real recent mock score… / Row: Quant, reasoning, and… | SSC exams share roughly… | A completed diagnostic… / Row: Financial and… | NBFC and private bank… | A short explainer or case… / Row: Client-facing… | Relationship manager and… | A mock client… / Row: Long-cycle discipline and… | Any long-cycle… | One completed…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Skill built in bank exam prep Where it genuinely transfers What proof looks like Speed and accuracy under a strict sectional timer SSC CGL/CHSL, RRB NTPC, insurance exams (LIC AAO, NIACL), other timed government exams A real recent mock score in the target exa
- Alt: Comparison table for “Where your bank exam prep skills genuinely transfer”: Skill built in bank… | Where it…; Speed and accuracy under… | SSC…; Quant, reasoning…
- Title attribute: Where your bank exam prep skills genuinely transfer
- Caption (also keep the key point in the HTML text): "You learned a lot preparing for bank exams" is true, but vague encouragement does not get you hired or admitted to another exam's mains stage.

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/government-jobs/what-to-do-after-failed-upsc-attempts-india/

**H1:** What to do after failed UPSC attempts in India: an honest recovery plan  
**Category:** government-jobs · **Words:** 4088 · **H2 sections:** 12 · **Search priority:** P1 (4 clicks, 362 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 12 other articles, with identical alt text and captions, so they say nothing specific about “What to do after failed UPSC attempts in India: an honest…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/government-jobs/what-to-do-after-failed-upsc-attempts-india*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“The short answer”, “The real UPSC…”, “What the actual odds…”, “Processing the…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 88%, 89%, 90%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `government-jobs-editorial-cover.webp`, `government-jobs-context.webp`, `government-jobs-filters.webp`, `government-jobs-compare.webp`, `government-jobs-sequence.webp`, `government-jobs-backup.webp`, `government-jobs-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `what-to-do-after-failed-upsc-attempts-india.webp`, `what-to-do-after-failed-upsc-attempts-india-detail.webp`, `what-to-do-after-failed-upsc-attempts-india-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `what-to-do-after-failed-upsc-attempts-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `what-to-do-after-failed-upsc-attempts-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Over-the-shoulder shot of an exam aspirant with preparation notes, a classroom desk after hours. Props that belong to “What to do after failed UPSC attempts in India: an honest recovery plan”: a laptop with a live project, job description printouts, a notebook. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: What to do after failed UPSC attempts in India: an honest recovery…
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 5 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `what-to-do-after-failed-upsc-attempts-india-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: What to do after failed UPSC attempts in India: the real attempt-limit rules, how to process sunk cost, and…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): The short answer to what to do after failed UPSC attempts in India / The real UPSC attempt-limit rules by category / What the actual odds looked like / Processing the sunk-cost feeling honestly / How your UPSC prep skills actually transfer
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “What to do after failed UPSC attempts in India: an honest recovery…”
- Title attribute: At a glance: What to do after failed UPSC attempts in India: an…
- Caption (also keep the key point in the HTML text): What to do after failed UPSC attempts in India: the real attempt-limit rules, how to process sunk cost, and where your prep skills genuinely transfer…
**V2 — Mistakes versus smarter move panel** (place after the H2 “The short answer to what to do after failed UPSC attempts in India” #short-answer)
- File: `what-to-do-after-failed-upsc-attempts-india-mistakes-short-answer-after-failed.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: There is no single right next move, and most advice online skips straight to "here are ten alternative…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): There is no single right next move, and most advice online skips straight to… / Before any career decision, get two facts straight. / First, your real attempt-and-age position against your category's rules — not a…
- Numbers: use ONLY these facts from the article (exact values, no new ones): What most people need first is permission to treat this as a probability outcome from an exam that rejects over 99% of everyone who sits it, not a personal failure — and a clear-eyed look at the actual numbers before any new commitment.
- Alt: Mistakes versus smarter move panel for “The short answer to what to do after failed UPSC…”: There is no single right next move…; Before any career decision, get…
- Title attribute: The short answer to what to do after failed UPSC attempts in India
- Caption (also keep the key point in the HTML text): There is no single right next move, and most advice online skips straight to "here are ten alternative careers" without addressing the part that…
**V3 — Comparison table** (place after the H2 “The real UPSC attempt-limit rules by category” #attempt-limits)
- File: `what-to-do-after-failed-upsc-attempts-india-comparison-real-upsc-attempt-limit.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Coaching-centre folklore about attempt limits drifts over time.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Category | Maximum attempts | Upper age limit / Row: General / EWS | 6 attempts | Up to 32 years / Row: OBC (non-creamy layer) | 9 attempts | Up to 35 years / Row: SC / ST | No attempt cap | Up to 37 years / Row: PwBD, General/OBC | 9 attempts | Higher relaxed age limit… / Row: PwBD, SC/ST | No attempt cap | Higher relaxed age limit…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Category Maximum attempts Upper age limit General / EWS 6 attempts Up to 32 years OBC (non-creamy layer) 9 attempts Up to 35 years SC / ST No attempt cap Up to 37 years PwBD, General/OBC 9 attempts Higher relaxed age limit applies PwBD, SC/ST No attempt cap Hi
- Alt: Comparison table for “The real UPSC attempt-limit rules by category”: Category | Maximum attempts | Upper…; General / EWS | 6 attempts | Up to 32…; OBC (non-creamy…
- Title attribute: The real UPSC attempt-limit rules by category
- Caption (also keep the key point in the HTML text): Coaching-centre folklore about attempt limits drifts over time.
**V4 — Stat panel or bar chart (only the numbers listed)** (place after the H2 “What the actual odds looked like” #odds)
- File: `what-to-do-after-failed-upsc-attempts-india-stat-actual-odds-looked-like.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: It helps to see the real scale of the exam before deciding what a non-selection means about you.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): It helps to see the real scale of the exam before deciding what a non-selection… / In a recent Civil Services Examination cycle, roughly 5.5 to 7.5 lakh… / Around 14,000 qualified for the Mains.
- Numbers: use ONLY these facts from the article (exact values, no new ones): In a recent Civil Services Examination cycle, roughly 5.5 to 7.5 lakh candidates appeared for the Prelims. | The final result recommended fewer than 1,000 candidates against just over 1,000 total vacancies, once reserve-list and provisional candidatures are accounted for. | Run that through as a rough proportion and the selection rate sits well under 1% of everyone who originally sat the Prelims.
- Alt: Stat panel or bar chart (only the numbers listed) for “What the actual odds looked like”: It helps to see the real scale of the…; In a recent Civil Services……
- Title attribute: What the actual odds looked like
- Caption (also keep the key point in the HTML text): It helps to see the real scale of the exam before deciding what a non-selection means about you.
**V5 — Comparison table** (place after the H2 “How your UPSC prep skills actually transfer” #skills-transfer)
- File: `what-to-do-after-failed-upsc-attempts-india-comparison-upsc-prep-skills-actually.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: "You learned a lot preparing for UPSC" is true, but vague encouragement does not get you hired.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Skill built in UPSC… | Where it genuinely… | What proof looks like / Row: Structured… | Policy research, business… | A real writing sample — a… / Row: Wide current-affairs and… | Journalism… | A small portfolio of… / Row: Interview and… | Client-facing roles, HR… | A recorded mock session… / Row: Long-cycle discipline and… | Long-cycle certifications… | One completed… / Row: Governance and… | ESG and… | A mapped regulatory…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Comparison table for “How your UPSC prep skills actually transfer”: Skill built in UPSC… | Where it…; Structured… | Policy research…; Wide current-affairs and… |…
- Title attribute: How your UPSC prep skills actually transfer
- Caption (also keep the key point in the HTML text): "You learned a lot preparing for UPSC" is true, but vague encouragement does not get you hired.

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/government-jobs/defence-services-career-india/

**H1:** Defence services career India: entry routes, ranks, pay, and the trade-offs no recruiter mentions  
**Category:** government-jobs · **Words:** 4952 · **H2 sections:** 16 · **Search priority:** P2 (0 clicks, 131 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 12 other articles, with identical alt text and captions, so they say nothing specific about “Defence services career India: entry routes, ranks, pay…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/government-jobs/defence-services-career-india*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“The short answer”, “Officer vs other ranks…”, “Every entry route, one…”, “NDA after 12th: the…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 89%, 90%, 91%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `government-jobs-editorial-cover.webp`, `government-jobs-context.webp`, `government-jobs-filters.webp`, `government-jobs-compare.webp`, `government-jobs-sequence.webp`, `government-jobs-backup.webp`, `government-jobs-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `defence-services-career-india.webp`, `defence-services-career-india-detail.webp`, `defence-services-career-india-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `defence-services-career-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `defence-services-career-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Wide three-quarter shot of an exam aspirant with preparation notes, a quiet public library table. Props that belong to “Defence services career India: entry routes, ranks, pay, and the trade-offs no…”: notebooks, a laptop and printed course or job information. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: Defence services career India: entry routes, ranks, pay, and the…
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 6 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `defence-services-career-india-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Defence services career India: compare NDA, CDS, Technical Entry, and Agnipath routes, officer vs other-ranks…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): The short answer on a defence services career in India / Officer vs other ranks: the core split you need to understand first / Every entry route into a defence services career, in one table / NDA after 12th: the earliest door, and the biggest early commitment / CDS after graduation: the degree-first route
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “Defence services career India: entry routes, ranks, pay, and the…”
- Title attribute: At a glance: Defence services career India: entry routes, ranks, pay…
- Caption (also keep the key point in the HTML text): Defence services career India: compare NDA, CDS, Technical Entry, and Agnipath routes, officer vs other-ranks paths, 7th CPC pay, and the honest…
**V2 — Comparison table** (place after the H2 “Every entry route into a defence services career, in one table” #entry-routes)
- File: `defence-services-career-india-comparison-every-entry-route-into.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Here is what each of the four main routes actually requires and how the process runs, side by side.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Route | Who is eligible | How selection… / Row: NDA (National Defence… | Class 12 pass, unmarried… | UPSC written exam (Maths… / Row: CDS (Combined Defence… | Bachelor's degree in any… | UPSC written exam twice a… / Row: Technical Entry Scheme… | Class 12 pass with… | No separate written exam… / Row: Agnipath (Agniveer, other… | 10th or 12th pass… | Written/online test…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Route Who is eligible How selection actually works NDA (National Defence Academy) Class 12 pass, unmarried, 16.5-19.5 years. | Selected candidates train 3 years at NDA Khadakwasla, then 1 year at the respective service academy before commissioning. | Training runs 1-1.5 years depending on the academy before commissioning as an officer.
- Alt: Comparison table for “Every entry route into a defence services career, in…”: Route | Who is eligible | How…; NDA (National Defence… | Class 12…; CDS (Combined…
- Title attribute: Every entry route into a defence services career, in one table
- Caption (also keep the key point in the HTML text): Here is what each of the four main routes actually requires and how the process runs, side by side.
**V3 — Linear process chain or roadmap** (place after the H2 “Agnipath: the other-ranks route now” #agnipath)
- File: `defence-services-career-india-linear-agnipath-other-ranks-route.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Since 2022, most fresh recruitment into other-ranks positions across the Army, Navy, and Air Force runs…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Since 2022, most fresh recruitment into other-ranks positions across the Army… / Eligible candidates are roughly 17.5 to 21 years old for the Navy and 17.5 to… / Selected Agniveers serve a fixed 4-year tenure, receiving full training…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Eligible candidates are roughly 17.5 to 21 years old for the Navy and 17.5 to 23 for the Army and Air Force, with a 10th or 12th pass requirement depending on the trade applied for. | At the end of the tenure, up to 25% of each batch is retained for full regular service — continuing under the standard other-ranks pay and pension structure — while the remaining 75% exit with a tax-free Seva Nidhi package (commonly reported around Rs 11.71 la | Agnipath is genuinely the lowest-commitment way to test whether military life fits you, since the tenure is fixed at 4 years rather than an open-ended career.
- Alt: Linear process chain or roadmap for “Agnipath: the other-ranks route now”: Since 2022, most fresh recruitment…; Eligible candidates are roughly 17.5…; Selected…
- Title attribute: Agnipath: the other-ranks route now
- Caption (also keep the key point in the HTML text): Since 2022, most fresh recruitment into other-ranks positions across the Army, Navy, and Air Force runs through the Agnipath scheme.
**V4 — Asymmetrical pros-and-cons comparison** (place after the H2 “Short Service Commission vs Permanent Commission: the difference that matters…” #ssc-vs-pc)
- File: `defence-services-career-india-asymmetrical-short-service-commission-permanent.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: For officers, the biggest long-term decision is not which exam you clear, but which commission type you end…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Entry routes specifically for women / A full career until retirement age, with the widest promotion eligibility across the… / Pension entitlement after completing the qualifying period of service (broadly 20 years). / Access to command postings and senior staff appointments that shape the highest ranks. / A fixed tenure, commonly 10-14 years, with the option to apply for Permanent Commission… / Officers who exit without crossing the pension-qualifying threshold and without a PC…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Pension entitlement after completing the qualifying period of service (broadly 20 years). | Short Service Commission A fixed tenure, commonly 10-14 years, with the option to apply for Permanent Commission after 10 years — vacancies are limited and not guaranteed.
- Alt: Asymmetrical pros-and-cons comparison for “Short Service Commission vs Permanent Commission: the…”: Entry routes specifically for women; A full career until…
- Title attribute: Short Service Commission vs Permanent Commission: the difference that…
- Caption (also keep the key point in the HTML text): For officers, the biggest long-term decision is not which exam you clear, but which commission type you end up in — and this is the part most…
**V5 — Linear process chain or roadmap** (place after the H2 “The rank ladder and how fast it actually moves” #rank-ladder)
- File: `defence-services-career-india-linear-rank-ladder-fast-actually.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Rank progression for officers is not a smooth, guaranteed climb.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Rank progression for officers is not a smooth, guaranteed climb. / The first several ranks move mostly on a time-scale basis; everything from… / 01 Lieutenant to Captain to Major A commissioned officer starts as a Lieutenant…
- Numbers: use ONLY these facts from the article (exact values, no new ones): 01 Lieutenant to Captain to Major A commissioned officer starts as a Lieutenant (Sub-Lieutenant in the Navy, Flying Officer in the Air Force) and moves to Captain (Lieutenant in Navy, Flight Lieutenant in Air Force) around 2 years of service, then to Major (Li | 02 Lieutenant Colonel around 13 years Officers with roughly 13 years of commissioned service move to the Lieutenant Colonel rank (Commander in Navy, Wing Commander in Air Force), which sits at Pay Level 12A in the 7th CPC defence pay matrix. | 03 Colonel and Brigadier: the real selection bottleneck Colonel rank (roughly 16 years of service, Pay Level 13) and Brigadier rank (Pay Level 13A) are selection-based, not time-based, and a meaningful share of officers who reach Lieutenant Colonel do not go f
- Alt: Linear process chain or roadmap for “The rank ladder and how fast it actually moves”: Rank progression for officers is not…; The first several ranks move mostly……
- Title attribute: The rank ladder and how fast it actually moves
- Caption (also keep the key point in the HTML text): Rank progression for officers is not a smooth, guaranteed climb.
**V6 — Comparison table** (place after the H2 “Pay and perks under the 7th CPC defence pay matrix” #pay-perks)
- File: `defence-services-career-india-comparison-pay-perks-under-7th.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Defence pay uses the same 7th CPC pay matrix structure (Level 1 to 18) as civilian central government…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Component | What it actually… / Row: Basic pay band (7th CPC) | The defence pay matrix… / Row: Military Service Pay (MSP) | A fixed monthly addition… / Row: Allowances | Beyond basic pay and MSP… / Row: Non-cash perks | Free rations or ration… / Row: Group insurance and… | Army/Navy/Air Force Group…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Component What it actually looks like Basic pay band (7th CPC) The defence pay matrix runs from Level 3 to Level 18, with a minimum basic pay around Rs 21,700 (other ranks entry) and a maximum near Rs 2,50,000 (service chief level). | Military Service Pay (MSP) A fixed monthly addition on top of basic pay: Rs 15,500 for commissioned officers (Level 10 and above) and Rs 5,200 for JCOs and other ranks (Level 1-9).
- Alt: Comparison table for “Pay and perks under the 7th CPC defence pay matrix”: Component | What it actually…; Basic pay band (7th CPC) | The…; Military Service Pay…
- Title attribute: Pay and perks under the 7th CPC defence pay matrix
- Caption (also keep the key point in the HTML text): Defence pay uses the same 7th CPC pay matrix structure (Level 1 to 18) as civilian central government employees, but with a defence-specific Military…

**Done when:** hero + 6 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/government-jobs/government-job-vs-startup-job-stability-india/

**H1:** Government job vs startup job stability India: what the failure and layoff data actually says  
**Category:** government-jobs · **Words:** 4226 · **H2 sections:** 13 · **Search priority:** P2 (0 clicks, 61 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 12 other articles, with identical alt text and captions, so they say nothing specific about “Government job vs startup job stability India: what the…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/government-jobs/government-job-vs-startup-job-stability-india*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“Government Job”, “Startup Job Stability…”, “The short answer”, “What actually differs…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 88%, 89%, 90%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `government-jobs-editorial-cover.webp`, `government-jobs-context.webp`, `government-jobs-filters.webp`, `government-jobs-compare.webp`, `government-jobs-sequence.webp`, `government-jobs-backup.webp`, `government-jobs-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `government-job-vs-startup-job-stability-india.webp`, `government-job-vs-startup-job-stability-india-detail.webp`, `government-job-vs-startup-job-stability-india-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `government-job-vs-startup-job-stability-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `government-job-vs-startup-job-stability-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Wide three-quarter shot of an independent freelancer at a neighbourhood workspace, a modest office desk after hours. Props that belong to “Government job vs startup job stability India: what the failure and layoff data…”: stacked exam books, a timetable, previous-year question papers. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: Government job vs startup job stability India: what the failure and…
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 5 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `government-job-vs-startup-job-stability-india-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Government job vs startup job stability India compared on real numbers: startup failure rates, funding-winter…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): The short answer on government job vs startup job stability India / What actually differs, side by side / The failure and shutdown numbers / Layoff waves and the funding-winter cycle / ESOPs: what a payout actually requires
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “Government job vs startup job stability India: what the failure and…”
- Title attribute: At a glance: Government job vs startup job stability India: what the…
- Caption (also keep the key point in the HTML text): Government job vs startup job stability India compared on real numbers: startup failure rates, funding-winter layoff data, ESOP payout reality, and a…
**V2 — Asymmetrical pros-and-cons comparison** (place after the H2 “The short answer on government job vs startup job stability India” #short-answer)
- File: `government-job-vs-startup-job-stability-india-asymmetrical-short-answer-government-job.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: A government job's stability is structural — it is built into how the post itself works, independent of how…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): A government job's stability is structural — it is built into how the post… / A startup job's stability is conditional — it depends on whether that specific… / That difference is bigger than the gap between government and an established…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Asymmetrical pros-and-cons comparison for “The short answer on government job vs startup job…”: A government job's stability is…; A startup job's stability is……
- Title attribute: The short answer on government job vs startup job stability India
- Caption (also keep the key point in the HTML text): A government job's stability is structural — it is built into how the post itself works, independent of how well any single office or department…
**V3 — Comparison table** (place after the H2 “What actually differs, side by side” #structure-table)
- File: `government-job-vs-startup-job-stability-india-comparison-actually-differs-side-side.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Before the failure and layoff numbers, it helps to see the structural differences clearly — the parts that…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: What differs | Government job | Startup job / Row: What your job security… | Your post and your… | Your company's cash… / Row: How pay grows | A fixed 3% annual… | Cash CTC negotiated per… / Row: What "failure" looks like | Not applicable in the way… | About 90% of Indian… / Row: Responsibility and… | Defined by seniority and… | Often accelerated well… / Row: Culture and process | Rule-bound and… | Informal and fast-moving…
- Numbers: use ONLY these facts from the article (exact values, no new ones): How pay grows A fixed 3% annual increment on basic pay, reset roughly once a decade through a pay commission. | About 90% of Indian startups do not survive past five years, and a large share of the funded ones that do survive still go through at least one layoff round tied to funding cycles. | Often accelerated well beyond your job title in the first 12-18 months, because small teams cannot afford to keep responsibility narrow — the upside is faster skill-building, the downside is less structured mentorship.
- Alt: Comparison table for “What actually differs, side by side”: What differs | Government job |…; What your job security… | Your post…; How pay grows | A fixed 3%…
- Title attribute: What actually differs, side by side
- Caption (also keep the key point in the HTML text): Before the failure and layoff numbers, it helps to see the structural differences clearly — the parts that stay true regardless of which specific…
**V4 — Mistakes versus smarter move panel** (place after the H2 “The failure and shutdown numbers” #failure-data)
- File: `government-job-vs-startup-job-stability-india-mistakes-failure-shutdown-numbers.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: "Startups are risky" gets said so often it stops meaning anything.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): "Startups are risky" gets said so often it stops meaning anything. / Here is what the actual research says about how risky, and why. / Survival past 5 years A study by the Institute of Business Value and Oxford…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Survival past 5 years A study by the Institute of Business Value and Oxford Economics found roughly 90% of Indian startups fail within their first five years — a success rate near 10%, well below the global average of about 33%. | Only about 20% of Indian startups survive past five years, and only around 8% make it past ten. | Why they actually fail Misreading market demand accounts for roughly 42% of startup failures in India, followed by a weak founding team (about 23%) and being outpaced by competitors (about 19%).
- Alt: Mistakes versus smarter move panel for “The failure and shutdown numbers”: "Startups are risky" gets said so…; Here is what the actual research says…; Survival past…
- Title attribute: The failure and shutdown numbers
- Caption (also keep the key point in the HTML text): "Startups are risky" gets said so often it stops meaning anything.
**V5 — Stat panel or bar chart (only the numbers listed)** (place after the H2 “ESOPs: what a payout actually requires” #esop-reality)
- File: `government-job-vs-startup-job-stability-india-stat-esops-payout-actually-requires.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Equity is the part of a startup offer that gets talked about the most and understood the least.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Equity is the part of a startup offer that gets talked about the most and… / An ESOP grant is not deferred salary — it is a chain of conditions, and the… / 01 Vesting first — and you have to survive to get there The standard Indian…
- Numbers: use ONLY these facts from the article (exact values, no new ones): 01 Vesting first — and you have to survive to get there The standard Indian structure is a 1-year cliff followed by vesting over roughly 4 years, about 25% a year. | For someone in the 30% tax bracket, that tax bill alone can run into lakhs, which is why many employees simply do not exercise options from a company that has not shown a clear path to a liquidity event.
- Alt: Stat panel or bar chart (only the numbers listed) for “ESOPs: what a payout actually requires”: Equity is the part of a startup offer…; An ESOP grant is not…
- Title attribute: ESOPs: what a payout actually requires
- Caption (also keep the key point in the HTML text): Equity is the part of a startup offer that gets talked about the most and understood the least.

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/government-jobs/govt-vs-private-job-india/

**H1:** Government job vs private job India: the honest trade-off, not the salary chart  
**Category:** government-jobs · **Words:** 3816 · **H2 sections:** 13 · **Search priority:** P2 (0 clicks, 126 impressions)  
**Status: AMBER — AUTHORED** · og:image: /images/blog/government-jobs/govt-vs-private-job-india/government-job-vs-private-job-india-cover.webp

> **ON THE OWNER'S EXCLUSION LIST.** This route was explicitly excluded in the earlier visual brief (38 routes, listed in the deleted `BLOG-VISUAL-AUDIT.md`, commit 26b8e33~1). Do not create or replace images here unless the owner confirms. The findings below are for the owner's decision.

**Findings**
1. 6 authored images on the page (hero + 5 supporting).
2. Verify: 7th CPC 2.57 factor, 3% annual increment, average 9.1% appraisal in 2026, UPSC 10.16 lakh applied / 5.92 lakh appeared / 1,016 selected / 0.17% success, 8th Pay Commission claims.
3. Hero is a graphic/flat-lay/illustration rather than a natural human scene. Keep it only if it is clear; otherwise add a natural editorial hero.
4. 6 of 6 images have no title attribute.

**Current images**
| File | Real size | Attr size | Loading | Position | Issues |
|---|---|---|---|---|---|
| `government-jobs/govt-vs-private-job-india/government-job-vs-private-job-india-cover.webp` | 1600x900 | 1600x900 | eager | 14% | no title attr |
| `government-jobs/govt-vs-private-job-india/government-job-vs-private-job-india-what-differs.webp` | 1122x1402 | 1122x1402 | lazy | 29% | no title attr |
| `government-jobs/govt-vs-private-job-india/government-job-vs-private-job-india-pay-reality.webp` | 1122x1402 | 1122x1402 | lazy | 36% | no title attr |
| `government-jobs/govt-vs-private-job-india/government-job-vs-private-job-india-prep-years-cost.webp` | 1122x1402 | 1122x1402 | lazy | 47% | no title attr |
| `government-jobs/govt-vs-private-job-india/government-job-vs-private-job-india-3-runway-test.webp` | 1122x1402 | 1122x1402 | lazy | 55% | no title attr |
| `government-jobs/govt-vs-private-job-india/government-job-vs-private-job-india-field-comparison.webp` | 1122x1402 | 1122x1402 | lazy | 68% | no title attr |

**Required actions**
1. HERO: optional upgrade. Keep the current graphic hero if it reads clearly; otherwise add a natural scene hero using the brief below.
- Reason: current hero is a graphic, not a human scene
- File: `govt-vs-private-job-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `govt-vs-private-job-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Close desk-level detail with a partly visible person of an Indian student or adult at a home desk, a home study corner with natural window light. Props that belong to “Government job vs private job India: the honest trade-off, not the salary chart”: a printed resume, a job description, a notebook, a phone. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: Government job vs private job India: the honest trade-off, not the…
- Caption: one sentence tying the scene to the article's decision.
2. FIX attributes on every kept image: meaningful kebab-case filename; alt that describes what is visible; title attribute; caption (figcaption) for every explanatory image; width/height equal to the real pixel size; `loading="lazy"` below the fold, hero eager with fetchpriority; WebP under 200 KB.
3. Mobile check at 390px: no horizontal overflow, text inside images readable without zoom (body text on the image at least about 16 px when the image is displayed at 360 px wide), captions wrap.

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/government-jobs/is-government-exam-coaching-worth-it-india/

**H1:** Is government exam coaching worth it in India? An honest cost-vs-value breakdown  
**Category:** government-jobs · **Words:** 3791 · **H2 sections:** 11 · **Search priority:** P2 (0 clicks, 73 impressions)  
**Status: AMBER — AUTHORED + GENERIC EXTRAS** · og:image: /images/blog/government-jobs/is-government-exam-coaching-worth-it-india/government-exam-coaching-cover.webp

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 12 other articles, with identical alt text and captions, so they say nothing specific about “Is government exam coaching worth it in India? An honest…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/government-jobs/is-government-exam-coaching-worth-it-india*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“The short answer”, “The real cost of…”, “What coaching genuinely…”, “What free resources now…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.
5. 7 authored images on the page (hero + 6 supporting).
6. Verify costs: UPSC classroom Rs 1-3 lakh, SSC Rs 15-40k, online UPSC Rs 65k-1.55 lakh, relocation Rs 8-20k per month. Footer cites "CCPA Guidelines, 2024".
7. Hero is a graphic/flat-lay/illustration rather than a natural human scene. Keep it only if it is clear; otherwise add a natural editorial hero.
8. 7 of 7 images have no title attribute.
9. 2 images are over 250 KB: `government-exam-coaching-real-cost.webp` (250 KB), `government-exam-coaching-value-by-exam.webp` (256 KB)
10. Numbers read from the images (OCR) that do not appear in the article text, verify or remove: `government-exam-coaching-real-cost.webp`: 15k, 40k, 65k, 20k; `government-coaching-marketing-red-flags.webp`: 703. OCR can misread, so check by eye.

**Current images**
| File | Real size | Attr size | Loading | Position | Issues |
|---|---|---|---|---|---|
| `government-jobs/is-government-exam-coaching-worth-it-india/government-exam-coaching-cover.webp` | 1600x900 | 1600x900 | eager | 13% | no title attr |
| `government-jobs/is-government-exam-coaching-worth-it-india/coaching-content-structure-feedback.webp` | 1448x1086 | 1448x1086 | lazy | 20% | no title attr |
| `government-jobs/is-government-exam-coaching-worth-it-india/government-exam-coaching-real-cost.webp` | 1122x1402 | 1122x1402 | lazy | 28% | no title attr; 250 KB |
| `government-jobs/is-government-exam-coaching-worth-it-india/government-coaching-marketing-red-flags.webp` | 1122x1402 | 1122x1402 | lazy | 39% | no title attr |
| `government-jobs/is-government-exam-coaching-worth-it-india/government-exam-coaching-four-filter-test.webp` | 1122x1402 | 1122x1402 | lazy | 51% | no title attr |
| `government-jobs/is-government-exam-coaching-worth-it-india/government-exam-coaching-value-by-exam.webp` | 1586x992 | 1586x992 | lazy | 57% | no title attr; 256 KB |
| `government-jobs/is-government-exam-coaching-worth-it-india/hybrid-government-exam-preparation-model.webp` | 1122x1402 | 1122x1402 | lazy | 60% | no title attr |

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 88%, 89%, 90%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `government-jobs-editorial-cover.webp`, `government-jobs-context.webp`, `government-jobs-filters.webp`, `government-jobs-compare.webp`, `government-jobs-sequence.webp`, `government-jobs-backup.webp`, `government-jobs-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `is-government-exam-coaching-worth-it-india.webp`, `is-government-exam-coaching-worth-it-india-detail.webp`, `is-government-exam-coaching-worth-it-india-action.webp`.
3. HERO: optional upgrade. Keep the current graphic hero if it reads clearly; otherwise add a natural scene hero using the brief below.
- Reason: current hero is a graphic, not a human scene
- File: `is-government-exam-coaching-worth-it-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `is-government-exam-coaching-worth-it-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Wide three-quarter shot of an exam aspirant with preparation notes, a school or college corridor bench. Props that belong to “Is government exam coaching worth it in India? An honest cost-vs-value breakdown”: stacked exam books, a timetable, previous-year question papers. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: Is government exam coaching worth it in India? An honest…
- Caption: one sentence tying the scene to the article's decision.
4. FIX attributes on every kept image: meaningful kebab-case filename; alt that describes what is visible; title attribute; caption (figcaption) for every explanatory image; width/height equal to the real pixel size; `loading="lazy"` below the fold, hero eager with fetchpriority; WebP under 200 KB.
5. Mobile check at 390px: no horizontal overflow, text inside images readable without zoom (body text on the image at least about 16 px when the image is displayed at 360 px wide), captions wrap.

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---
