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
