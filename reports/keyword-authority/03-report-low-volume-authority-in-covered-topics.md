# Report 3: Authority through low-volume and zero-volume keywords inside topics the site already covers

*Prepared 2026-10-14. Reference tree: `origin/main` (commit 1a1fda4 plus the reports commit). Sources: both Google Sheets (34 keyword tabs, every keyword, plus the Search Console tab), the Search Console export, every page on the site, and 8 live search spot-checks. Companions: [Report 1](01-report-authority-in-existing-topics.md) and [Report 2](02-report-authority-in-uncovered-topics.md), which are unchanged.*

## 1. What this report is for

Report 2 looked for topics the site does not cover. This report does what the brief actually asked: **inside the topics the site already covers, find the keywords that are low-volume or zero-volume in the tool but still matter for authority, that few sites write a dedicated answer to, and decide for each whether the site should answer it and where.** Volume is not the filter. Evidence of real asking (repetition, cross-sheet presence, Search Console impressions, question form) and fit with a page the site already has are.

It also closes gaps in the first two reports:

| Gap in Reports 1 and 2 | What this report does |
|---|---|
| Only about 1,800 keyword groups with volume of 90 or more were reviewed by hand; the other keywords were pattern-mined | **All 100,387 unique keywords** in the 34 keyword tabs are classified into topic clusters, flagged as noise or kept, and checked against the site (`appendix/A8`). |
| Coverage was judged by page slug, then by reading a few pages | Coverage is now judged against **every heading, FAQ question and section title of 691 pages** plus the phrase sets of the 29 generated assessment pages. A keyword counts as answered only if one heading line contains its words. |
| Tools, datasets and the 18 self-assessments were not weighed | They are in the inventory; tools and datasets are never used as hosts for informational keywords. |
| No view of which existing page should absorb which long-tail phrasing | Each angle group is matched to a host page (`appendix/A9`), and pages are ranked by the long-tail load they could absorb (`appendix/A11`). |
| Search Console was used for a few long-tail examples | All 1,000 queries are tested for heading coverage; 338 queries (2,034 impressions) are not answered by any heading (Section 6, `appendix/A12`). |
| Angles were found by pattern guessing | 28 angle families are counted across the whole dataset with the number of site headings that already speak that angle (Section 5). |

## 2. Bottom line

1. **Of 100,387 unique keywords, 21,347 (21%) are noise, 8,185 are off-topic for this site and 10,801 are soft-skill definitions; 58,535 are in topics the site covers.** Noise rules and the off-topic clusters are in `appendix/A6` and `A10`.
2. **Of those 58,535 covered-topic keywords, only 5,428 (9%) are answered by a heading on the site.** 17,841 (30%) have their words on a page but under no heading, and 35,261 (60%) do not appear on any page. The site is broad but the long tail is largely unanswered at heading level. Part of the 'not on any page' set is clutter (odd phrasings, near-typos), which is why bullet 3 uses the filtered view.
3. **56,809 of them (97%) have volume of 50 or less and 43,817 have none**, so the volume column cannot be the decision rule. After removing typos, one-off strings and junk, they collapse into **2,789 angle groups that have a real host page**, of which **672 deserve an H2 and FAQ set** and only **9 are micro-article candidates**. Most long-tail demand should be absorbed by existing pages, not by new URLs.
4. **The biggest repeated angles are not topics, they are formats**: career objectives written per field (about 1,900), online/certificate/internship courses per branch or degree (about 2,600), career after MBA per specialisation (about 1,000), and career plan, goals and ladder per field (about 1,000). Each is spread across dozens of one-off phrasings, which is exactly why the tool prices them at 20-30 each.
5. **Search Console confirms the wording gap**: 338 non-test queries (2,034 impressions) land on pages whose headings never use the searcher's words. The cheapest authority gain is to rename and add headings on pages that already have impressions.
6. **Where SERPs were checked, the long tail is mostly served by Careers360 Q&A threads, college marketing pages and old slide decks**; the exceptions (CUET vs JEE, business analyst progression) are crowded by coaching sites and course vendors. Section 8 lists what was seen.

## 3. How low and zero volume was handled

A zero in the tool is treated as "unknown", not "nobody searches this". A phrasing was kept as a real signal only when at least two of these held; single-signal phrasings were kept as FAQ wording at most.

| Signal | Why it counts |
|---|---|
| Repetition: the same intent appears as 3+ phrasings | One real need is split across wordings, so each looks like nothing. |
| Cross-sheet: same phrasing in 2+ tabs | Two independent seed lists reached it. |
| Question form (how, what, why, is, can, which) | Answerable in a heading and FAQ; matches how assistants and voice queries are phrased. |
| Search Console impressions | The only first-party evidence. |
| Host page exists with the entity in its title | The site is already accountable for the topic, so an unanswered angle weakens its authority. |
| Live search spot-check shows thin or dated results | Competition check. |

Excluded before any scoring (so they cannot become false positives): company and institute pages ("X careers", "Y career opportunities"), other countries, document types (pdf, ppt, essay, notes), astrology, 2000-2023 year stamps, exam-question strings, typos (any word that appears in fewer than 3 keywords), single-use tokens, and keywords with digits other than 10/12. The same rules produced the noise counts in Report 1.

## 4. Coverage audit by topic cluster

Every keyword was assigned to the first matching cluster. "Answered" means one heading, FAQ question or title on the site contains the keyword's words. "Long-tail unanswered" counts keywords with volume of 50 or less that are not answered.

| Cluster | Fit | Site pages | Clean keywords | With volume | Answered in a heading | Words on page, no heading | Not on any page | Long-tail unanswered | Search Console impressions |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|
| E01 Engineering and technology branches | CORE | 32 | 7,549 | 1,518 | 482 | 2,238 | 4,829 | 6,993 | 445 |
| J0 General career options, opportunities and scope | CORE | 43 | 6,740 | 1,977 | 606 | 1,899 | 4,235 | 6,026 | 192 |
| D14 Courses and degrees for students (generic) | CORE | 21 | 3,709 | 737 | 162 | 818 | 2,729 | 3,500 | 116 |
| D06 MBA, PGDM and management | CORE | 28 | 3,281 | 670 | 222 | 1,094 | 1,965 | 3,027 | 322 |
| H2 Career counselling (service, online, free, fees, session) | CORE | 78 | 3,272 | 686 | 573 | 787 | 1,912 | 2,671 | 381 |
| H4 Career coaching and mentoring | CORE | 18 | 2,830 | 573 | 150 | 581 | 2,094 | 2,645 | 19 |
| D11 Design, fashion, media, creative careers | CORE | 18 | 2,790 | 605 | 164 | 780 | 1,846 | 2,605 | 84 |
| H3 Career guidance (service, centre, app, near me) | CORE | 25 | 2,624 | 597 | 302 | 595 | 1,727 | 2,288 | 295 |
| J7 Freelancing, entrepreneurship and business ideas | CORE | 8 | 2,459 | 639 | 133 | 752 | 1,574 | 2,292 | 28 |
| F01 IT, software, data, AI and cyber careers | CORE | 51 | 2,370 | 587 | 271 | 893 | 1,206 | 2,061 | 71 |
| SCI Science stream (PCM, PCB, PCMB, BiPC, MPC) and after 12th science | CORE | 27 | 2,110 | 779 | 401 | 897 | 812 | 1,623 | 60 |
| J5 Choosing a career, confusion and decisions | CORE | 15 | 1,975 | 480 | 288 | 740 | 947 | 1,684 | 126 |
| COM Commerce stream and commerce students | CORE | 19 | 1,960 | 635 | 269 | 650 | 1,041 | 1,623 | 513 |
| ART Arts and humanities stream and students | CORE | 17 | 1,760 | 631 | 176 | 695 | 889 | 1,510 | 154 |
| H5 Career tests, quizzes, assessments, psychometric | CORE | 22 | 1,660 | 461 | 165 | 437 | 1,058 | 1,491 | 4,373 |
| F02 Marketing, sales, business analysis, HR, operations | CORE | 20 | 1,440 | 389 | 80 | 664 | 696 | 1,340 | 113 |
| D09 Medical, nursing, paramedical, physiotherapy, pharmacy, AYUSH | CORE | 22 | 1,436 | 471 | 140 | 559 | 737 | 1,254 | 340 |
| S12 After 12th (general) | CORE | 18 | 1,367 | 349 | 188 | 510 | 669 | 1,159 | 356 |
| D10 Biotechnology, life sciences, biomedical | CORE | 18 | 1,079 | 314 | 153 | 436 | 490 | 890 | 0 |
| H1 Career counselling in a city or locality | CORE | 51 | 937 | 254 | 195 | 208 | 534 | 738 | 3 |
| S10 After 10th and Class 10 decisions | CORE | 5 | 749 | 250 | 63 | 186 | 500 | 661 | 70 |
| F03 Finance, banking, accounting, trading | CORE | 10 | 699 | 214 | 45 | 261 | 393 | 643 | 69 |
| F05 Teaching, education, sports and physical education | CORE | 6 | 631 | 126 | 31 | 176 | 424 | 579 | 41 |
| J1 Resume, CV, career objective, LinkedIn | CORE | 10 | 509 | 139 | 20 | 150 | 339 | 462 | 63 |
| D08 Law | CORE | 3 | 431 | 141 | 35 | 170 | 226 | 382 | 0 |
| D13 Diploma, ITI, polytechnic, vocational and certificate courses | CORE | 1 | 381 | 56 | 10 | 70 | 301 | 367 | 99 |
| D12 Agriculture, food, environment, dairy | CORE | 3 | 340 | 89 | 7 | 167 | 166 | 323 | 0 |
| J2 Interviews and job search for freshers | CORE | 13 | 270 | 38 | 19 | 66 | 185 | 247 | 6 |
| J3 Salary, pay, earnings and growth | CORE | 11 | 244 | 67 | 15 | 89 | 140 | 228 | 84 |
| F06 Hospitality, aviation, travel, merchant navy | CORE | 2 | 235 | 69 | 9 | 57 | 169 | 219 | 0 |
| F04 Government jobs, exams and defence | CORE | 9 | 205 | 50 | 17 | 72 | 116 | 182 | 62 |
| J8 Parents, women, disability and special groups | CORE | 2 | 166 | 32 | 8 | 43 | 115 | 157 | 18 |
| J6 Study abroad, NRI and international | CORE | 9 | 135 | 39 | 0 | 18 | 117 | 135 | 0 |
| J4 Career change, mid-career, gap, restart | CORE | 9 | 110 | 28 | 13 | 52 | 45 | 97 | 19 |
| J9 Future careers, AI and emerging jobs | CORE | 1 | 82 | 28 | 16 | 31 | 35 | 66 | 364 |
| X4 Soft-skill definitions and how-to-improve | ADJ | 5 | 10,801 | 6,572 | 604 | 3,851 | 6,332 | 9,786 | 21 |
| X2 Life skills (school curriculum, kids, IELTS) | OFF | 1 | 6,231 | 1,414 | 19 | 1,082 | 5,130 | 6,090 | 0 |
| X1 Laptops and gadgets for students | OFF | 0 | 1,672 | 622 | 0 | 55 | 1,617 | 1,518 | 0 |
| Z Unclassified | OTHER | 27 | 1,519 | 359 | 52 | 234 | 1,227 | 1,449 | 372 |
| X3 Migration and platform skill assessments | OFF | 0 | 282 | 97 | 0 | 8 | 274 | 267 | 0 |

Reading the table: site page counts are assigned by the same cluster rules applied to page slugs, so they are approximate. The clusters with the most unanswered long tail relative to pages are **E01 engineering branches** (32 pages, 7,549 keywords), **H4 coaching and mentoring** (18 pages, 2,830 keywords), **J7 freelancing and business** (8 pages, 2,459), **D14 courses and degrees** (21 pages, 3,709), **D13 diploma/ITI/polytechnic** (381 keywords, one page whose slug matches), **D08 law** (431 keywords, 3 pages) and **D12 agriculture and food** (340 keywords, 3 pages). Soft-skill definitions (X4, 10,801 keywords) and life skills (X2) are large but outside the site's job, as Report 1 Section 6 explains.

## 5. Angle families across the covered topics

An angle family is a way of asking that repeats across many fields. The columns show the whole dataset (covered-topic, non-noise keywords only) and how many site pages already speak that angle in a heading.

| Family | Phrasings | With volume | Largest | Unanswered | Site pages with a matching heading |
|---|---:|---:|---:|---:|---:|
| A01 Career objective lines by field or degree | 1,926 | 417 | 320 | 1,889 | 4 |
| A02 Online, certificate, internship and free courses for [branch/degree] students | 2,642 | 851 | 1,900 | 2,371 | 15 |
| A03 Career after MBA by specialisation | 1,006 | 201 | 1,000 | 900 | 35 |
| A04 Diploma holders: careers, courses and routes after diploma | 446 | 58 | 320 | 440 | 49 |
| A05 Freshers, entry-level and first-job angle | 1,349 | 225 | 3,600 | 1,306 | 228 |
| A06 Career change or switch into a field | 345 | 71 | 30 | 328 | 152 |
| A07 Abroad and international variants | 1,299 | 305 | 320 | 1,273 | 72 |
| A08 Salary, pay and package for a role | 839 | 172 | 3,600 | 792 | 503 |
| A09 Why choose X as a career (answer-style) | 609 | 197 | 140 | 608 | 44 |
| A10 How to start, build or enter a career in X | 524 | 81 | 50 | 495 | 123 |
| A11 Career plan, goals, growth, ladder, hierarchy and roadmap | 1,047 | 192 | 390 | 989 | 62 |
| A12 Girls and women angle | 372 | 67 | 1,000 | 341 | 15 |
| A13 "Without" and "other than" angle (without maths, NEET, biology, degree, exam) | 499 | 163 | 2,900 | 409 | 506 |
| A14 Honours, specialisation and subject-combination angle | 465 | 155 | 1,900 | 414 | 155 |
| A15 Class 12 stream aliases (non-medical, plus two, intermediate, 10+2) | 511 | 110 | 880 | 492 | 27 |
| A16 Government jobs and exams after a degree or stream | 172 | 32 | 320 | 150 | 127 |
| A17 Higher studies, research, PhD, masters and NET after a degree | 1,540 | 228 | 170 | 1,484 | 281 |
| A18 Entrance exams, eligibility and admission | 290 | 21 | 210 | 288 | 151 |
| A19 Colleges, institutes and rankings | 38 | 0 | 0 | 38 | 292 |
| A20 Head-to-head comparison (X vs Y, X or Y, difference between) | 192 | 14 | 110 | 175 | 473 |
| A21 Skills required, job description and day-in-the-life | 338 | 70 | 390 | 336 | 11 |
| A22 Question-form verdicts (is, are, should, will, can) | 3,014 | 1,255 | 1,600 | 2,742 | 574 |
| A23 Counselling and guidance formats (quiz, chat, phone, seminar, workshop, certification, business) | 1,026 | 211 | 1,000 | 955 | 47 |
| A24 Scope, future and demand of a field | 1,189 | 218 | 390 | 1,117 | 425 |
| A25 Region, state or city flavoured career queries | 1,935 | 227 | 1,900 | 1,812 | 82 |
| A26 Work from home, part-time, remote and gig angle | 120 | 24 | 140 | 113 | 79 |
| A27 Age and life-stage angle (after 30, 40, 50, career break, retirement) | 228 | 48 | 30 | 216 | 34 |
| A28 Books, courses and certifications to learn a field | 379 | 96 | 170 | 353 | 144 |

The families with large unanswered pools and few site pages are the authority gaps: **A01 career objectives (4 pages)**, **A02 courses per branch (15 pages)**, **A09 why choose X (44 headings, all from one page pattern)**, **A12 girls and women (15)**, **A15 class 12 stream aliases (27)**, **A21 skills required and job description (33)**, **A23 counselling formats (47)** and **A27 age and life-stage (34)**.

### 5.1 Exact keywords behind the largest families

**A01 Career objective lines by field or degree** (1,926 phrasings, 1,889 unanswered)  
Add one hub, "career objective for engineers by branch", with distinct sample lines per branch, not a page per branch. The site has three single-field objective pages already (`good-career-objective-for-resume`, `career-objective-for-computer-science-fresher`, `biotechnology-career-objective-and-goals`), so the pattern is proven; extend it only where the objective differs materially (MBA finance/HR, law, mechanical/civil/electrical). Live check: results are resume-builder pages and old SlideShare uploads.  
Examples (volume): career objective for civil engineer (320); career objective for students (140); career objective for resume for student (140); career objective for electrical engineer (140); career goal for an mba student (0); career goals for an mba student (0); career goals for mba india (0); career goals of mba (0); my career goal for mba (0).

**A02 Online, certificate, internship and free courses for [branch/degree] students** (2,642 phrasings, 2,371 unanswered)  
The site has CSE, ECE (job-oriented), BBA, BCom, law and MBA course pages. Mechanical, civil and electrical/EEE students have none. One page per branch is defensible only because the content really differs (CAD/CAM, STAAD, PLC/SCADA). Live check: NPTEL and vendor blogs; no independent "which certificate is worth it" page surfaced.  
Examples (volume): iiser courses for pcb students (720); courses for medical students (590); bhu courses for pcb students (320); after plus two courses for science students (320); courses for medical students in india (0); free online courses for medical students india (0); it courses for medical students (0); online medical courses for students in india (0); top courses for medical students (0).

**A03 Career after MBA by specialisation** (1,006 phrasings, 900 unanswered)  
`mba-career-options`, `best-mba-specializations-india` and `mba-finance-vs-marketing-india` exist. Add H2 per specialisation (HR, marketing, finance, operations, business analytics, banking, healthcare) to the hub before considering separate URLs.  
Examples (volume): mba careers in healthcare (170); mba finance career options (170); certification courses for mba finance students (110); career options after mba finance (70); career opportunites mba in it (0); mba it career scope (0); best career options after mba finance india (0); best career options after mba in finance (0); career option after mba finance in india (0).

**A04 Diploma holders: careers, courses and routes after diploma** (446 phrasings, 440 unanswered)  
Diploma holders ask "what next" in many branch-specific ways. One page covers diplomas after 12th; nothing covers life after a diploma (lateral entry, jobs, AMIE). Live check: college marketing pages and a 2018 forum answer.  
Examples (volume): diploma courses for law students (140); career options after diploma (110); diploma courses for science students (40); diploma courses for bams students (30); after diploma mechanical engineering career options (0); career options after diploma mechanical engineering (0); mechanical engineering diploma career options (0); after diploma mechanical engineering career (0); career in mechanical engineering diploma (0).

**A09 Why choose X as a career (answer-style)** (609 phrasings, 608 unanswered)  
44 site pages carry one heading of this type each. "Why choose HR / data analytics / nursing / software testing as a career" is a typical fresher interview and school-essay question.  
Examples (volume): why you choose hr as a career (140); why choose a career in human resources (90); why should i choose hotel management as career (90); why choose seo as career (30); why choose hr as a career path (0); why choose digital marketing as your career (0); why did you choose hr as a career choice (0); why did you choose hr as a career option (0); why did you choose hr as a career path (0).

**A11 Career plan, goals, growth, ladder, hierarchy and roadmap** (1,047 phrasings, 989 unanswered)  
"Career goals", "career plan", "career growth", "career ladder", "career graph" per field. The site has many roadmap and career-path pages; add ladder/progression H2s to existing career pages first.  
Examples (volume): better opportunity and career growth (320); for better opportunity and career growth (210); career goals for business management (40); career planning questions for students (40); career goal for an mba student (0); career goals for an mba student (0); career goals for mba india (0); career goals mba india (0); career goals of mba (0).

**A12 Girls and women angle** (372 phrasings, 341 unanswered)  
Girls and women variants appear for PCM, PCB, commerce, engineering and hotel management. The site has `career-options-after-12th-for-girls-in-india` and `safe-career-options-for-girls-in-india`; per-stream girl pages would be doorway risk, so use a short girls-specific section per stream page.  
Examples (volume): small business ideas for girl students (390); is law a good career for a woman in india (140); career options for ladies (70); career options for homemakers (40); best career options for ladies in india (0); career options for ladies in india (0); choose girl or career (0); what career do girls choose (0); what to choose girl or career (0).

**A15 Class 12 stream aliases (non-medical, plus two, intermediate, 10+2)** (511 phrasings, 492 unanswered)  
"Non medical", "plus two", "intermediate", "10+2", "class 12 science" are aliases for the same streams. Cheapest fix: add the alias in the first paragraph and one FAQ line on each stream page.  
Examples (volume): after plus two courses for science students (320); after plus two courses for commerce students (140); courses for non medical students (110); career options after intermediate (110); career option after inter commerce (0); best career options after inter (0); career option after inter (0); career option after inter from pcb (0); non medical stream career options (0).

**A21 Skills required, job description and day-in-the-life** (338 phrasings, 336 unanswered)  
"Skills required for", "job description" and "what does a X do" per role. Only business analyst and a few roadmap pages carry them.  
Examples (volume): skills required for business analyst (390); skills needed for business analyst (320); technical skills required for business analyst (260); skills required for data scientist fresher (210); business analyst skills required for a job (0); it skills required for a business analyst (0); required skills of business analyst (0); skill required for business analytics (0); skills required for business analytics jobs (0).

**A23 Counselling and guidance formats (quiz, chat, phone, seminar, workshop, certification, business)** (1,026 phrasings, 955 unanswered)  
Counselling formats: "career counselling quiz", "chat", "phone", "seminar", "certification", "business", "books", "companies". Several belong to Report 2 W7; the consumer-side ones (quiz, chat, phone, free online) are covered by service pages that lack the wording.  
Examples (volume): career counselling courses (1000); career coaching centre (590); aadi career guidance & counselling centre (590); state career guidance center (320); career counseling online courses in india (0); career counselling online courses (0); career in career counselling courses (0); free online career counseling courses (0); free online career counselling courses in india (0).

**A27 Age and life-stage angle (after 30, 40, 50, career break, retirement)** (228 phrasings, 216 unanswered)  
Age and life-stage: "career options after 35 / 40", "career break", "late start". The site has change-at-30, second-career-at-40 and a seniors service page; the numbers 35 and 45+ and the career-break wording are missing from headings.  
Examples (volume): career break before mba (30); career break opportunities (30); is a career break a good idea (30); career break advice (20); midlife career counseling india (0); midlife career counselling (0); midlife career counselling free (0); second career student (0); second career student india (0).

## 6. What Search Console already shows: queries no heading answers

The 1,000 queries were checked against every heading. Test and quiz queries are left to the assessment pages (Report 1 Section 5). The rest:

- 338 queries, 2,034 impressions, 11 clicks have no heading that contains their words.

| Query | Impressions | Host page that should carry it | Match |
|---|---:|---|---|
| humanities jobs list and salary | 48 | `arts-and-humanities-careers-that-pay-well-today` | not on any page |
| future carrier | 47 | no close page | not on any page |
| contact us for future-ready career counseling | 34 | no close page | not on any page |
| future career consultancy | 33 | no close page | words on page, no heading |
| cuet vs jee mains | 32 | `cuet-vs-jee-which-is-better-for-career` | words on page, no heading |
| coding vs pcm for future engineers | 28 | `pcm-career-options` | words on page, no heading |
| java or python which is better for future in india | 24 | `python-vs-java-which-to-learn-first-india` | not on any page |
| cuet vs jee mains which is tough | 24 | `cuet-vs-jee-which-is-better-for-career` | not on any page |
| courses after b com with high salary | 24 | `best-courses-after-12th-for-high-salary-india` | words on page, no heading |
| best diploma courses after 12th fail | 23 | `best-diploma-courses-after-12th` | not on any page |
| after bcom which course is best for high salary | 23 | `best-courses-after-bcom-for-high-salary` | words on page, no heading |
| data scientist vs software engineer salary in india | 22 | `data-science-vs-software-engineering-career-india` | words on page, no heading |
| career change quiz free | 22 | `career-profile-quiz-perfect-plan-passion-or-empire-builder` | words on page, no heading |
| in college highest package or placement means what tell in simple words | 20 | no close page | not on any page |
| is cuet difficult than jee | 20 | `cuet-vs-jee-which-is-better-for-career` | not on any page |
| government psychologist salary in india per month | 19 | no close page | not on any page |
| is cuet tougher than jee | 19 | `cuet-vs-jee-which-is-better-for-career` | not on any page |
| future bright career guidance | 19 | no close page | words on page, no heading |
| career change quiz | 19 | `career-profile-quiz-perfect-plan-passion-or-empire-builder` | words on page, no heading |
| high paying skills for commerce students | 18 | `best-skills-for-commerce-students-to-learn` | words on page, no heading |
| top freelance skills for earning lakhs per month in india platforms resources | 18 | no close page | not on any page |
| best mba branch for engineers | 17 | `ms-in-computer-science-vs-mba-india` | words on page, no heading |
| high-paying skills for commerce students | 17 | `best-skills-for-commerce-students-to-learn` | words on page, no heading |
| data analyst vs software engineer salary in india | 16 | `data-science-vs-software-engineering-career-india` | words on page, no heading |
| skills for commerce students in resume | 16 | `best-skills-for-commerce-students-to-learn` | words on page, no heading |
| what job is good for introverts | 16 | `best-careers-for-introverts-in-india` | words on page, no heading |
| technical skills for commerce students | 15 | `best-skills-for-commerce-students-to-learn` | words on page, no heading |
| skills for bcom students | 15 | `certificate-courses-for-bcom-students` | words on page, no heading |
| skills to learn as a commerce student | 15 | `best-skills-for-commerce-students-to-learn` | words on page, no heading |
| median ctc means | 14 | no close page | words on page, no heading |
| is cuet harder than jee | 14 | `cuet-vs-jee-which-is-better-for-career` | words on page, no heading |
| is cuet easier than jee mains | 14 | `cuet-vs-jee-which-is-better-for-career` | words on page, no heading |
| mpt neurology salary in india per month | 14 | no close page | not on any page |
| mpt salary per month in government hospital | 13 | no close page | not on any page |
| skills required for commerce students | 13 | `best-skills-for-commerce-students-to-learn` | words on page, no heading |
| how much does content creator earn in india | 13 | no close page | not on any page |
| career options after bba except mba | 13 | `bba-career-options` | words on page, no heading |
| future skills development tools | 13 | `career-development-skills` | words on page, no heading |
| india medical coding market | 13 | `is-medical-coding-a-good-career-in-india` | words on page, no heading |
| mpt salary per month in private hospital | 12 | no close page | not on any page |

Pages that would absorb the most of this wording, by impressions:

| Host page | Impressions | Queries |
|---|---:|---:|
| `cuet-vs-jee-which-is-better-for-career` | 196 | 19 |
| `best-diploma-courses-after-12th` | 117 | 26 |
| `best-skills-for-commerce-students-to-learn` | 103 | 8 |
| `arts-and-humanities-careers-that-pay-well-today` | 68 | 6 |
| `career-profile-quiz-perfect-plan-passion-or-empire-builder` | 64 | 5 |
| `data-science-vs-software-engineering-career-india` | 46 | 5 |
| `certificate-courses-for-bcom-students` | 34 | 6 |
| `pcm-career-options` | 28 | 1 |
| `best-courses-after-bcom-for-high-salary` | 28 | 3 |
| `postgraduate-diploma-courses-in-canada-for-international-students` | 27 | 7 |
| `career-after-bsc-nursing-india-scope` | 26 | 4 |
| `python-vs-java-which-to-learn-first-india` | 24 | 1 |
| `best-courses-after-12th-for-high-salary-india` | 24 | 1 |
| `career-development-workshop-online` | 24 | 4 |
| `career-options-for-non-cs-engineers` | 24 | 6 |

The full list is `appendix/A12-search-console-unanswered-queries.csv`.

## 7. Existing pages ranked by the long tail they could absorb

A host is the page whose title and slug best match the angle group's entity. The count is of distinct phrasings, after junk and typo removal. Suggested headings are the highest-scoring groups. Full list: `appendix/A11`; group detail: `appendix/A9`.

| Host page | Groups | Phrasings | Groups with volume | Suggested headings (phrasings in group) |
|---|---:|---:|---:|---|
| `business-analyst-vs-data-analyst-career-india` | 167 | 232 | 67 | skills required for business analyst in india [7] || career progression of business analyst [5] || business analyst skills technical [5] || career graph of business analyst [3] || career switch to business analyst [3] || business  |
| `is-mechanical-engineering-a-good-career-in-india` | 128 | 207 | 33 | online courses for mechanical engineering students [9] || career objective for mechanical engineer fresher [8] || career objective for mechanical engineer [6] || career after b tech mechanical engineering [6] || career objective i |
| `is-civil-engineering-a-good-career-in-india` | 133 | 204 | 33 | career options after civil engineering degree [10] || career objective for civil engineer fresher [7] || career opportunities after civil engineering [6] || courses for civil engineering students [6] || career objective for civil  |
| `graphic-design-career-roadmap` | 109 | 165 | 32 | web design career path [12] || product designing career [8] || web design is good career [4] || career in web designing and graphics [4] || is product design a good career in india [3] || graphic design career objective [4] || car |
| `data-science-analytics-career-roadmap` | 88 | 144 | 23 | starting a career in data science [14] || career switch to data science [9] || how to make career in data science [6] || build career in data science [6] || career change to data science [4] || career growth in data science [4] || |
| `is-software-engineering-a-good-career-in-india` | 94 | 132 | 45 | career change to software engineer [5] || software engineer career goals [5] || career objective for software engineer freshers [4] || career aspirations for software engineer [3] || software engineering career progression [4] ||  |
| `career-after-electrical-engineering-in-india` | 84 | 128 | 19 | career in electrical and electronics engineering [11] || career objective in resume for electrical engineer [9] || career objective for electrical engineer fresher [5] || career objective in electrical engineering [4] || career af |
| `mba-finance-vs-marketing-india` | 79 | 128 | 20 | career objective for mba finance [8] || courses for mba finance students [7] || career objective of mba finance fresher [7] || best certification courses for mba finance students [5] || careers for mba finance freshers [4] || care |
| `career-options-after-12th-commerce-without-maths` | 82 | 107 | 20 | career options after 12th commerce with ip [5] || after 12 which course is best for commerce student [4] || career after 12th arts without maths [3] || career in computer field after 12th commerce [3] || career in economics after  |
| `is-fashion-designing-a-good-career-in-india` | 77 | 102 | 23 | fashion designer career path [8] || career in fashion designing after 12th [8] || fashion design career salary [3] || career options after fashion management [3] || fashion business management career options [2] || how to start ca |
| `career-after-bsc-computer-science` | 50 | 99 | 16 | career options after bsc life science [12] || career in bsc nautical science [8] || career after bsc home science [6] || career after msc environmental science [6] || career after bsc forensic science [5] || career after bsc physi |
| `career-after-mechanical-engineering-in-india` | 76 | 93 | 13 | mechanical engineer career change [4] || mechanical engineer career in dubai [5] || career path for mechanical engineer with mba [3] || mechanical engineering career goals [3] || mechanical engineering career prospects [2] || mech |
| `best-computer-and-data-science-courses-for-commerce-students` | 73 | 92 | 30 | after graduation courses for commerce students [7] || online certification courses for commerce students [5] || career options after 12th commerce with computer science [3] || abroad courses for commerce students [4] || job orient |
| `bsc-career-options` | 31 | 84 | 13 | career in bsc agriculture [13] || bsc in biology career [10] || bsc microbiology career [9] || career in bsc statistics [8] || bsc economics career [7] || careers with bsc degree [4] || bsc animation career [3] || career after bsc |
| `certificate-courses-for-law-students` | 50 | 74 | 21 | career options for law graduates [7] || career in law after graduation [5] || is corporate law a good career in india [2] || is international law a good career [2] || law degree career options [3] || corporate law career options [ |
| `career-after-civil-engineering-in-india` | 52 | 65 | 11 | career objectives of design engineer [4] || career objective for design engineer [3] || career objective for civil design engineer [2] || career in process design engineer [2] || career in civil engineering in design company [2] | |
| `career-options-in-commerce-without-maths` | 43 | 64 | 15 | career opportunities in commerce stream [7] || career options for commerce students after graduation [6] || career options in commerce arts [4] || career options for commerce students abroad [2] || career options in arts without m |
| `job-oriented-courses-for-ece-students` | 43 | 63 | 17 | which course is best for ece students [5] || ms courses for ece students [4] || best computer courses for ece students [3] || online certificate courses for ece students [3] || training courses for ece students [3] || best certifi |
| `courses-for-pcm-mpc-science-students-after-12th` | 51 | 62 | 17 | after inter courses for mpc students [4] || career options after 12th science pcm for girl [4] || career options after 12th pcm with computer science [3] || career options after 12th science pcm group [2] || after 12th science pcm |
| `career-options-after-12th-science-without-biology` | 32 | 54 | 13 | career to choose after 12th science [11] || career in defence after 12th science [3] || career after 12 bio science [3] || career in home science after 12th [3] || career path chart after 12th science [2] || career options after 1 |
| `is-interior-design-a-good-career-in-india` | 41 | 50 | 14 | career in interior designing after 12th [3] || interior design career salary [3] || is interior designing a good career for boy [2] || careers with interior design degree [2] || interior design career outlook [2] || careers for in |
| `computer-science-engineering-career-options` | 31 | 47 | 8 | career objective for computer science engineer [9] || career objective for computer engineering student [4] || career after graduation in computer science [2] || career options after graduation in computer science engineering [1]  |
| `best-courses-for-computer-science-cse-students` | 29 | 45 | 7 | internship courses for cse students [5] || online certificate courses for cse students [4] || training courses for cse students [5] || best online certification courses for cse students [3] || courses to learn for cse students [3] |
| `postgraduate-diploma-courses-in-canada-for-international-students` | 40 | 43 | 14 | diploma courses in sydney for international students [2] || diploma courses in norway for international students [2] || best diploma courses for statistics students [2] || diploma courses in perth for international students [1] || |
| `career-in-finance-vs-accounting-india` | 27 | 40 | 18 | courses for finance students [7] || career objective of finance student [3] || career options in banking and finance [3] || careers with business finance degree [2] || career options after phd in finance [2] || master of finance c |
| `bsc-biotechnology-career-options` | 34 | 38 | 4 | career after msc agriculture biotechnology [2] || msc microbiology career options [2] || career options for bsc plant biology biotechnology [1] || career options in bsc geology or msc geology and salary [1] || which msc is good fo |
| `is-hotel-management-a-good-career-in-india` | 24 | 35 | 8 | hotel management career after 12th [5] || career in hotel management after graduation [4] || career objective for hotel management student [3] || is hotel management a good career option for girls [1] || alternative career options |
| `career-objective-for-computer-science-fresher` | 31 | 35 | 5 | career objective for resume for fresher in computer science engineering [2] || career objective for computer science engineer fresher [2] || career objective for phd in computer science [2] || career objective for life science stu |
| `btech-biotechnology-career-options` | 28 | 32 | 2 | what are the career options in btech cs [2] || career options after btech ee [2] || careers after graduation btech [2] || good career option architecture or btech [1] || my career options after i finish btech [2] || what are the c |
| `is-psychology-a-good-career-in-india` | 17 | 28 | 11 | career in psychology after graduation [3] || psychology masters career options [3] || career options with psychology degree [3] || clinical psychology career options [3] || psychology career options and salaries in india [2] || is |
| `career-options-after-12th-except-medical` | 12 | 27 | 4 | career after 12th non medical [12] || courses after 12th for non medical students [3] || medical career options without neet [2] || best course for medical student after 12th [2] || career chart medical students after 12th in indi |
| `career-options-after-ma-in-india` | 10 | 27 | 4 | ma english career options [6] || career options for ma economics [6] || career options after ma history [5] || career options after ma in philosophy [2] || ma in sociology career options [2] || career option after ma education [2] |
| `best-courses-for-bba-students` | 18 | 27 | 9 | bba student career objective [5] || online certificate courses for bba students [4] || computer courses for bba students [2] || career options after bba marketing [2] || career options after graduation in bba [1] || what are the c |
| `is-pharmacy-a-good-career-in-india` | 20 | 26 | 6 | what are the career options after b pharmacy [5] || careers options for m.pharmacy [2] || is b pharmacy is good career [1] || is pharmacy tech a good career [1] || pharmacy career options abroad [2] || pharmacy career options and  |
| `ba-career-options` | 7 | 25 | 5 | best career after ba graduation [9] || career options for ba economics [8] || ba in sociology career options [3] || career objective for ba students [2] || career options after ba arts [1] || career options after ba education [1]  |
| `medical-laboratory-science-career-options` | 19 | 25 | 9 | science non medical career options [4] || bachelor of medical science career options [2] || is medical lab science a good career [1] || computer science careers in medical field [2] || medical science liaison careers [2] || career |
| `career-after-bsc-nursing-india-scope` | 18 | 24 | 1 | career after bsc non medical [4] || career options after bsc microbiology in abroad [2] || what are the alternative career options after bsc nursing [1] || course for bsc students medical [2] || male bsc nursing career [2] || care |
| `is-hr-a-good-career-in-india` | 19 | 23 | 5 | hr fresher skills [3] || career options for hr professionals [2] || is hr recruiter a good career option india [1] || is hr consulting a good career [1] || is hr good career for introverts [1] || is sap hr a good career [1] || goo |
| `biomedical-science-career-options` | 22 | 23 | 1 | is biomedical science a good career than biomedical engineering [1] || how is system engineer as a career option [1] || biomedical engineering career salary in india [2] || how good is computer engineering as a career choice [1] | |
| `courses-for-arts-and-humanities-students-after-12th` | 16 | 22 | 3 | career courses after 12th science [4] || after 12 courses for biology students [2] || career options after 12th arts in mumbai [2] || what are the best career study after 12th arts [1] || career options of government jobs after 12 |

Note on host quality: hosts are matched by title overlap, so a few look indirect (for example a mechanical-engineering verdict page hosting "online courses for mechanical engineering students"). Read those as "the site's mechanical engineering page is where a reader would expect this answer" and decide between a section and a sibling page using the doorway rules.

### 7.1 Micro-article candidates (the only groups with 10 or more phrasings and volume or cross-sheet evidence)

| Angle group | Phrasings | Largest | Host | Handling |
|---|---:|---:|---|---|
| starting a career in data science | 14 | 30 | `data-science-analytics-career-roadmap` | One section on the host first; spin out only if impressions persist |
| career in bsc agriculture | 13 | 50 | `bsc-career-options` | One section on the host first; spin out only if impressions persist |
| career options after bsc life science | 12 | 50 | `career-after-bsc-computer-science` | One section on the host first; spin out only if impressions persist |
| career after 12th non medical | 12 | 40 | `career-options-after-12th-except-medical` | One section on the host first; spin out only if impressions persist |
| web design career path | 12 | 20 | `graphic-design-career-roadmap` | One section on the host first; spin out only if impressions persist |
| career to choose after 12th science | 11 | 20 | `career-options-after-12th-science-without-biology` | One section on the host first; spin out only if impressions persist |
| career in electrical and electronics engineering | 11 | 10 | `career-after-electrical-engineering-in-india` | One section on the host first; spin out only if impressions persist |
| bsc in biology career | 10 | 30 | `bsc-career-options` | One section on the host first; spin out only if impressions persist |
| career options after civil engineering degree | 10 | 30 | `is-civil-engineering-a-good-career-in-india` | One section on the host first; spin out only if impressions persist |

## 8. Live search spot-checks on long-tail angles inside covered topics

| Query tested | What surfaced | Reading |
|---|---|---|
| career objective for mechanical engineer fresher resume examples India | Resume-builder pages (Goodspace, ResumeGyani), old SlideShare uploads, one college page that says experts disagree whether an objective is needed | Thin and dated; a branch-specific page with real lines and an honest view on whether to include one has room (A01) |
| online certification courses for CSE students India which are worth it | NPTEL pages, vendor blogs, Careers360 Q&A | Vendor-dominated; an independent "worth it" angle is open (A02) |
| career options after 12th commerce with informatics practices IP | Careers360 Q&A threads and one school blog | Only forum answers; the IP-specific page the site would write is unclaimed (stream aliases, A14/A15) |
| career after BSc statistics India options jobs MSc | Careers360 Q&A dated 2019-2022 | Dated Q&A only; subject-level BSc pages are open |
| business analyst career progression titles India associate to head | Scaler, PW Skills, university blogs; titles vary and no single ladder is complete | Contested by course vendors; low priority, supports Report 1 item 4.02 |
| career options after diploma in mechanical engineering India lateral entry B.Tech | College marketing pages, Careers360 Q&A, a foundit guide | College-led; a neutral lateral-entry and jobs page is open (A04) |
| is CUET easier than JEE Main comparison difficulty | Aakash, Vedantu, PW, Careers360 and several comparison blogs | Crowded by coaching institutes; win on honest framing, not on the phrasing |
| career counselling quiz free vs paid how accurate | Vendor blogs, affiliate "best quiz" pages, no independent research | Open for an independent explainer inside the assessments silo (A23) |

Each row is one search on one day; it supports "thin or dated" or "crowded", not a ranking forecast.

## 9. Doorway and false-positive guards

- A phrasing that only rewords an existing page's topic (no new angle word) is a **title or H1 wording change**, never a new URL. Of the angle groups with a host match, those with no angle word are listed in `appendix/A9` with an empty angle column.
- A new URL needs a different decision, not a different noun: if swapping the field name leaves 70% of the page unchanged, merge it into a hub (`DOORWAY_PREVENTION_GUIDE.md`).
- Company/institute strings, exam-question strings, typos, astrology and year-stamped keywords are excluded and listed in `appendix/A6`.
- Hosts are suggestions from title overlap. Check the actual page before adding a section; some are better served by a sibling page.
- Tools, datasets and generated assessment pages are never used as hosts for informational keywords.

## 10. Suggested sequence

1. **Week 1-2, wording on pages that already have impressions** (Section 6 table): add the searcher's phrasing as H2/H3 or FAQ on the top 15 host pages.
2. **Week 3-6, the top 30 host pages in Section 7**: for each, add the highest-scoring angle groups as H2 plus 2-3 FAQ lines, using the exact phrasings in `appendix/A9`.
3. **Month 2-3, the families with the biggest unanswered pools**: one career-objective hub for engineers (A01); mechanical, civil and electrical course pages (A02); MBA specialisation H2s (A03); stream-alias lines on every stream page (A15); girls-specific sections on the stream pages (A12).
4. **Then the nine micro-article candidates**, one at a time, only if the host section's impressions justify it.
5. **Measure** by the cluster: impressions on queries that were previously unanswered, per host page, at 4, 8 and 12 weeks.

## 11. How this relates to Reports 1 and 2

| Earlier item | Effect of this analysis |
|---|---|
| Report 1 clusters A-H (new and expanded pages) | Unchanged. This report adds the long-tail wording each of those pages should carry (look up the page in `appendix/A11`). |
| Report 1 "Fix before you build" | Extended from topic groups to all 338 unanswered queries (Section 6). |
| Report 2 whitespace themes | Unchanged. They concern topics the site does not cover; this report does not. |
| Report 1 "What not to build" | Confirmed; the same noise rules are applied to all 100k keywords. |

## 12. Limits

- The heading index covers 691 pages. Text produced at runtime (tools, calculators, quizzes) is not indexed, so a tool may answer something this report calls unanswered; tools were deliberately not used as hosts.
- Heading coverage is a strict test (all of the keyword's words in one heading line). Keywords marked "words on page, no heading" may already be answered in body paragraphs; adding a heading is the fix, not new content.
- Cluster assignment is rule-based (first match wins) and will misplace some keywords; `appendix/A8` lets you re-sort.
- Host matching uses title and slug overlap and was spot-checked, not manually verified for all 2,789 groups.
- Volumes, KD and trend flags are the sheets' figures. The Search Console export is dated 7/8/26 and may predate recent pages.
- Eight live searches is a sample, not a SERP study.

## 13. Files

- `appendix/A8-all-keywords-classified.csv` - all 100,387 keywords with cluster, fit, noise flag, heading status and angle modifiers
- `appendix/A9-longtail-angle-groups-covered-topics.csv` - 2,789 angle groups with host page, handling and phrasings
- `appendix/A10-cluster-summary.csv` - the Section 4 table
- `appendix/A11-existing-pages-ranked-by-unanswered-longtail.csv` - the Section 7 table, all 234 pages
- `appendix/A12-search-console-unanswered-queries.csv` - the Section 6 list
- `appendix/A13-angle-families.csv` - Section 5 with all examples
