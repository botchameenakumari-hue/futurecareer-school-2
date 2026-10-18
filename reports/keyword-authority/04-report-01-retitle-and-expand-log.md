# Report 1 follow-through: retitle and expand log

*Applied on `main`, 2026-10-14. Scope: only the RETITLE and EXPAND items from [Report 1](01-report-authority-in-existing-topics.md), plus the matching "fix before you build" items in its Section 5. No new URLs, no deleted sections, no changed slugs.*

## Why this is risk-free for existing rankings

A retitle here never replaces what a page already targets. Three rules were applied to every page:

1. **The slug and canonical URL do not change.** No redirects are needed and no link breaks.
2. **Additive only.** The words the page already ranks for stay in the H1, the search title or the first H2. New wording is added beside them (for example "Career options after 12th humanities (arts)", not "arts" instead of "humanities").
3. **Nothing is removed.** Existing sections, tables, FAQs and schema stay. New sections and FAQ items are added, and the FAQ schema is generated from the same list so it stays in step with the page.

Where a page already had a short search title (`seoTitle`), only that was widened. Where it had none, one was added so the on-page H1 can stay rich while the search result stays under the length limit.

## Perspective applied to every addition

- Every career or route option carries one of the three site labels (Scalable, Scalable with a business layer, Not so scalable) with a one-line reason, from `src/config/scalability.mjs`.
- No option was removed for being generic or crowded; it is marked and given growth advice instead.
- Pay figures appear only as indicative ranges from named public sources, with the shared pay caution.
- No new business claims, prices or accreditation were written. Education-loan, nursing-abroad, CMA/CFA and disability-style legal or financial points are stated generally and point to the official source.
- No em dashes, no day or week counts for tests, and no developer-style wording in visible copy.

## Pages changed

| Report 1 item | Page | What changed |
|---|---|---|
| 1.02 | `career-options-after-12th-humanities` | H1 and search title now carry "(arts)"; new section on the highest paying humanities jobs with scalability ratings; two FAQs |
| 1.07 | `best-paying-jobs-for-humanities-students-india` | Search title carries "Arts Too"; new "arts career options with salary" section by degree subject; two FAQs |
| 1.08 | `pcb-career-options` | H1 and search title carry "BiPC"; new section on BiPC in Andhra Pradesh and Telangana; link to the BiPC/PCB course finder; two FAQs |
| 1.09 | `career-options-in-commerce`, `pcm-career-options` | New CEC, MEC, HEC section; new MPC section; FAQs |
| 1.12 | `career-options-after-12th` | Search title carries "Opportunities"; new "career opportunities after 12th by stream" table with ratings; two FAQs |
| 2.03 | `career-in-pharmacy-india-scope-future` | Search title and H1 carry B.Pharm career options; new "after B.Pharm" fork table; FAQ |
| 2.05 | `social-science-career-options` | Economics track H2 renamed; new "career options in economics by degree stage" table; FAQ |
| 2.07 | `is-microbiology-a-good-career` | Search title and H1 carry microbiology career options; new career options by degree stage; FAQ |
| 2.11 | `career-after-bcom-in-india` | H1 and search title carry "BCom career options"; new "by goal" quick-pick table; two FAQs |
| 2.12 | `mba-career-options` | Finance H2 renamed to "MBA finance career options"; new specialisation table (marketing, HR, operations, analytics, healthcare, IT); FAQ |
| 2.15 | `career-options-after-ma-in-india` | Search title carries MCom and MSc; new MCom and MSc section; FAQ |
| 3.01 | `is-biomedical-engineering-a-good-career` | H2 renamed to "biomedical engineering careers"; new careers table; FAQ |
| 3.02 | `job-oriented-courses-for-ece-students` | Search title carries ECE career options; new "is ECE a good career" table; FAQ |
| 3.03 | civil, mechanical and electrical `career-after-*` pages; aeronautical, aerospace and chemical `is-*` pages | Search titles and H1s carry "career options" or "careers"; new rated career-options table on each; FAQ on each |
| 3.04 | `how-to-become-a-data-scientist-india` | Search title carries start or switch; new switcher section by background; FAQ |
| 4.03 | `ca-vs-cma-vs-cfa-india-which-is-better` | New CMA vs CFA head-to-head (including Indian CMA vs US CMA); two FAQs |
| 4.04, 4.05 | `is-fashion-designing-a-good-career-in-india`, `is-interior-design-a-good-career-in-india`, `how-to-become-an-animator-india` | New rated career-options tables; FAQ on each |
| 5.03 | `best-diploma-courses-after-12th` | New trade-by-trade comparison; new "after 12th fail or after 10th" section; two FAQs |
| 6.01 | `physiotherapy-career-scope-salary-india` | New MPT salary by setting and specialisation section (flags that no official survey exists); two FAQs |
| 6.02 | `career-after-bsc-nursing-india-scope` | New "how to go abroad" steps for the UK, US and Gulf, with recruiter safety checks; two FAQs |
| 6.03 | `content-creator-income-india` | Search title carries the literal question; new per-platform earnings section; FAQ |
| 6.04 | `medical-coding-career-india`, `is-medical-coding-a-good-career-in-india` | New starting-salary and after-CPC section; pointer and FAQ on the verdict page |
| 6.06 | `education-loan-worth-it-india-private-college` | New "secured or unsecured education loan" section; FAQ |
| 7.02 | `best-skills-for-commerce-students-to-learn` | New high-paying, technical and resume-wording sections; two FAQs (page and schema) |
| 8.01 | `best-career-guidance-website` | Title carries "App for Students"; new apps-and-websites section; two FAQs |
| 1.05 | `career-guidance-for-confused-students` | "How to choose a career after 10th" wording and two FAQs |
| Section 5 | `cuet-vs-jee-which-is-better-for-career` | New "CUET UG vs JEE Main" section and "what is CUET" FAQ |
| Section 5 | `ssc-vs-bank-exams-which-to-prepare-india` | New SSC CGL vs IBPS clerk and SSC CHSL vs bank clerk section; two FAQs |
| Section 5 | `best-careers-for-introverts-in-india` | Quick job list moved near the top, with ratings; search title and FAQ |
| Section 5 | `lateral-entry-mba-india`, `best-mba-specialization-for-engineers` | "Lateral MBA meaning" heading and plain definition; "best MBA branch" wording and FAQ |
| Cluster I | `is-cybersecurity-a-good-career-in-india`, `is-hr-a-good-career-in-india`, `actuarial-science-careers` | Spelling and synonym variants added to search title, first H2 and FAQ |

## Deliberately not changed

- **Assessment pages** (stream selector, aptitude and the generated pages). Report 1 says this cluster is working (88% of clicks), so wording tests belong in a measured follow-up, not a batch edit.
- **New-page items** (NEW rows in Report 1) and the Report 2 and Report 3 items. Out of scope for this pass.
- **Brand or about snippet** for "future career" queries. A suggestion, not a retitle or expand.

## Verification pass (after the first push)

Every changed page was re-checked in the built output and in a real browser at phone width.

- One H1 per page, no duplicate ids, every jump-link anchor resolves, FAQ schema matches the FAQ list, every table cell carries a data-label.
- Old search-title words were compared with new ones. Only filler modifiers dropped (for example "once the degree is actually done", "verdict", "reality", "paths" where "career options" now leads). No target keyword was lost.
- Seven pages used a block style that the page did not define (an unstyled "honest take", a two-column grid, a table class, a note line, a gold highlight variant). Each was changed to a style the page already has, or given the one missing rule.
- No page overflows at 390px width.
- One meta description was over 160 characters and was shortened. Several pages still carry long titles or descriptions that were already long before this work; those were not touched.
- Lowest-confidence content: the MPT pay ranges (career-site compilations that disagree; labelled as such) and the content-creator YouTube ranges (one agency's estimate; labelled as such).

## New pages named in Report 1 (not built in this pass)

P1 (9): career-options-in-science, pcm-career-options-with-salary, career-options-after-neet, career-options-after-btech, physical-education-career-options, business-analyst-skills, professional-courses-for-commerce-students, bsc-courses-after-12th-pcb-bipc, skills-for-resume-for-freshers.

P2 (8): commerce-career-options-with-salary, career-options-after-jee, law-career-options (post-LLB decision), geography-career-options, mathematics-career-options, career-options-after-graduation, polytechnic-diploma-after-10th-which-trade-to-choose, salary-by-degree.

P3, held (6): zoology and botany career pages, bsc-physics / bsc-chemistry / bsc-agriculture, mba-marketing-career-options and mba-hr-career-options, business-analyst-career-path, iti-career-options and polytechnic-career-options, business-ideas-for-students.

"Is X a good career" candidates (P2): IT, SAP, BPO, photography, aviation and cabin crew, ethical hacking, embedded systems and VLSI, networking, petroleum engineering, web and product design, real estate, corporate law, YouTube and content creation, archaeology, criminology and astronomy, and "is BBA / BCA / MBA a good career option".

## Follow-up: assessment wording and lowest-confidence content

- **Assessments.** All 351 test-type Search Console queries were matched against the 29 generated assessment pages (306 alias redirects), the static assessment pages and the self-assessments. Every query that earns impressions already has a page; no new assessment is needed. The gap was wording. Missing phrasings ("stream suitability test", "online aptitude test", "high school aptitude test", "free career test for students", "career change quiz", "skill finder", "psychometric test after 10th" and similar) were added to the visible phrase lists of seven generic pages and one alias list. The static stream-selector and 10th/12th aptitude pages, which earn most clicks, were not touched.
- **MPT pay.** Replaced unaudited career-site ranges with the one official anchor (central-government physiotherapist posts at Level 6 of the 7th Pay Commission matrix, from Lok Sabha replies and a central institute notice) and removed numbers for private and clinic pay, where no reliable figure exists. The notices found ask for a bachelor's degree, so the page now says an MPT does not raise the starting pay level by itself.
- **YouTube income.** Replaced one agency's per-view estimates with a method (read your own RPM in YouTube Studio) and a clearly labelled illustrative calculation.

## P1 new pages built (2026-10-14 pages, pushed to `main`)

All nine followed COWORK_KICKOFF_PROMPT.md: one independent agent per keyword, duplicate check, TOFU/blog classification, three logged follow-up passes (see `docs/dossiers/<slug>.passlog.md`), image brief in each dossier.

| Page | Depth class |
|---|---|
| `career-options/pcm-career-options-with-salary` | see dossier |
| `career-options/career-options-after-btech` | see dossier |
| `career-options/career-options-after-neet` | see dossier |
| `career-options/physical-education-career-options` | see dossier |
| `career-options/career-options-in-science` | pillar |
| `college-degrees/bsc-courses-after-12th-pcb-bipc` | see dossier |
| `college-degrees/professional-courses-for-commerce-students` | standard (deep) |
| `skills/business-analyst-skills` | pillar |
| `resume/skills-for-resume-for-freshers` | pillar |

Also corrected the ICAI fee line on `ca-vs-cma-vs-cfa-india-which-is-better` (ICAI FAQ total is about Rs 49,000).

Open items: images (briefs in dossiers; strict image audit will flag until added), sibling links to the new pages, P2/P3 pages, Reports 2 and 3.


## Report 1 pending pages: build outcome (all pushed to `main`)

**Built as new pages (27 more, each with dossier and three logged passes in `docs/dossiers/`)**

P2: salary-by-degree (salary-growth), commerce-career-options-with-salary, law-career-options, geography-career-options, mathematics-career-options, career-options-after-graduation, polytechnic-diploma-after-10th-which-trade-to-choose.

P3: zoology-career-options, botany-career-options, bsc-physics-career-options, bsc-chemistry-career-options, bsc-agriculture-career-options, iti-career-options, business-ideas-for-students.

"Is X a good career in India" (Cluster I): it, sap, bpo, photography, aviation, ethical-hacking, embedded-systems, network-engineering, petroleum-engineering, product-design, real-estate, corporate-law, youtube, archaeology, criminology, astronomy.

**Stopped at the duplicate check and done as on-page expansions instead (kickoff doorway rule)**

- career-options-after-jee: expanded `career-options-after-12th-pcm` (and the other-than-engineering page).
- mba-marketing-career-options: expanded `mba-career-options`, `best-mba-specializations-india`, `mba-finance-vs-marketing-india`.
- mba-hr-career-options: not built (same overlap; HR pages exist).
- business-analyst-career-path: expanded `is-business-analyst-a-good-career-in-india`.
- polytechnic-career-options: not built (covered by the new polytechnic page).
- is-mba / is-bba / is-bca a-good-career-option: expanded `mba-career-options`, `bba-career-options`, `bca-career-options`.

**Not built from the Cluster I "check intent of related page" rows**: project management, banking, finance, animation, teaching, paramedical, content writing, consulting (related pages already exist; revisit after Search Console data).

**Corrections made to existing pages along the way**: ICAI fee total; NFSU fee period (per semester); lateral-entry branch rule softened; YouTube Partner Programme change from 1 February 2027 noted.

**Open**: images (briefs in each dossier), medium-confidence facts listed per dossier ledger, deployment, Report 2 and Report 3 pages.
