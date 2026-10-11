# Keyword opportunity analysis — 11 October 2026

## Scope and evidence

This analysis uses the latest pushed `main` baseline at commit `a3b0117281f651ff6bb75f177f5f17ca307d4f4d`, verified directly against `origin/main` (the working tree contains additional uncommitted implementation changes; this document does not claim they are pushed).

Both connected Google Sheets were read tab-by-tab using their exact visible tab names and bounded row chunks:

- `keywords 2026 -1`: 21 tabs, 67,349 data rows in the recorded grid.
- `Keywords 2026-2`: 14 tabs, 47,704 data rows in the recorded grid.

The keyword tabs use a provider export with `Keyword`, `Intent`, `Volume`, `Trend`, `Keyword Difficulty`, `CPC (USD)`, and `Number of Results`. The second workbook includes the same export structure across its 14 tabs. The `FCS - Queries - 7/8/26` tab is Search Console-style query/click/impression data and does not contain a keyword-difficulty field.

The spreadsheets are source data, not proof of SERP ownership. A KD value of 0 means the export reports its lowest difficulty bucket; it does **not** mean zero competing pages, zero AI-overview exposure, or guaranteed ranking. “Zero AI-overview risk” cannot be established from these sheets alone, so the recommendations below use the safer label **strong click-intent / low answer-substitution risk**.

## Highest-priority opportunities

These are the strongest candidates after removing obvious brands, unrelated navigation, astrology, generic definitions, laptop shopping, and queries whose answer is fully replaceable by a short AI response.

| Candidate cluster | Sheet evidence | Why it is worth building | Recommended product/page |
|---|---|---|---|
| Social skills self assessment | `Skill Assessment`, volume 110, KD 0 | A self-assessment produces a personal result; the searcher must interact with the site | Interactive assessment with scored result, improvement plan, printable summary, and links to the existing skill portfolio flow |
| Leadership skills self assessment | `Skill Assessment`, volume 90, KD 0 | Same durable interaction intent; stronger business/fresher fit than a generic leadership article | Leadership diagnostic with evidence prompts and a 30-day practice plan |
| Life skills test | `Life Skills`, volume 90, KD 0 | Test intent is materially less answer-substitutable than “what are life skills” | Short life-skills check with domain scores and next actions |
| Aptitude test for career counselling | `Career Counselling`, volume 90, KD 0 | Directly aligned to the assessment funnel and already supported by the site’s assessment architecture | Improve the existing aptitude/counselling route with a clear free-start CTA and result handoff; do not create a duplicate URL |
| Career counselling fees | `Career Counselling`, volume 90, KD 0 | High commercial intent; a price/fit decision is not satisfied by a generic definition | Strengthen the existing fees page with transparent package comparison, inclusions, exclusions, and booking path |
| Career guidance questions for students | `Student` and `Career Guidance`, volume 90, KD 0 | A structured question tool can create a useful first-party interaction | Student/parent intake questionnaire that routes to the right assessment or counselling page |
| Career options after 12th PCB except medical | `Career Options`, volume 90, KD 0 | Clear decision problem and a strong fit for source-backed eligibility screening | Extend the existing after-12th finder with a “without MBBS/NEET” filter and official-source cards |
| Commerce without maths career options | `Career Options`, volume 1,000, KD 0 | Best volume-to-product-fit opportunity in the export; now supported by the new eligibility finder | Consolidate around the existing commerce-without-maths finder; avoid a second article targeting the same intent |
| PCB after 12th without NEET | `Career Options` and `Student`, volume 480, KD 0 | Repeated across tabs, showing durable demand; the query needs eligibility and pathway nuance | Use one authoritative finder/detail experience, not multiple thin articles |
| After 12 commerce career options | `Career Options`, volume 880, KD 0 | Strong decision intent but broad; needs filters and evidence to win | Expand the existing Class 12 route catalogue rather than publish another generic list |

## Secondary opportunities, only with a differentiated asset

These can work if the page contains an original worksheet, calculator, dataset, or decision framework. A normal 1,000-word article is unlikely to create durable authority.

- `career options after BA political science` — volume 140, KD 0. Build a role-to-skill-to-project map, not a generic list.
- `BSc botany career options` — volume 110, KD 0. Include qualification routes, field-vs-lab work, and a downloadable decision worksheet.
- `career in forensic science in India` — volume 110, KD 0. Needs official course/eligibility links and a route comparison.
- `career after mechanical engineering` — volume 110, KD 0. A branching transition planner is more defensible than an article.
- `is BCA a good career option` — volume 140, KD 0. Add a self-check and project trial; do not make an unsupported salary promise.
- `best career courses after 12th` — volume 110, KD 0. Use the editorially reviewed course finder and current-cycle source dates; require the reader to check the current institute notice.
- `unique business ideas for students` — volume 110, KD 0. Only pursue with a feasibility calculator, test-before-investing worksheet, and India-specific assumptions.
- `what should I put as my skills on a resume` — volume 170, KD 0. A skills-to-resume evidence builder is stronger than another advice post.
- `how to find out your skills` — volume 90, KD 0. Route to the existing self-report portfolio/assessment system.

## Queries to reject or defer

Do not create pages merely because an export row has KD 0. Reject or defer:

- branded or navigational terms such as `career launcher student portal`, `university of toronto career opportunities`, `career point coaching kota`, and `hp laptop prices for students`;
- astrology or unrelated terms such as `saturn 10th house career`;
- generic definitional questions such as `what are academic skills`, `what is communication skill and its types`, and `what is a bridge course for students` unless they are used as supporting sections inside a stronger tool/page;
- broad “best course” and “career options” terms where the proposed page would be another undifferentiated list;
- laptop-shopping queries, unless the business deliberately wants that commercial category and can maintain product data.

## Existing-site collision decisions

The current implementation already contains relevant assets for Class 10/12 assessment flows, Class 10 and after-12th route datasets, course-and-entrance-exam finders, the education payback planner, skill portfolio tracking, and career counselling service pages. The safe publishing rule is:

1. Extend the existing route when the intent matches an existing tool or service.
2. Create a new URL only for a genuinely distinct interaction: social-skills assessment, leadership assessment, life-skills test, or a student/parent intake tool.
3. Do not publish a second generic page for commerce without maths, PCB without NEET, after-12th options, career counselling fees, or aptitude testing.

The latest working-tree verification covers the concrete assessment routes, PDF controls, course finders, the focused PCB-without-NEET finder state, payback planner, parent/student agreement, datasets, internal links, and media contracts. It does not establish external SERP ownership, AI-overview behavior, real-student usability, or ranking outcomes.

Implementation update: the `PCB after 12th without NEET` opportunity now has a dedicated route at `/tools/pcb-career-options-without-neet/`. It reuses the dated 15-record course dataset, removes records tagged with NEET UG as a common entrance route, preserves the separately documented Telangana TG-EAPCET B.Sc. Nursing route, exposes the official-source cards, and states that the result is a research shortlist rather than an admission guarantee. This is a focused decision state, not a second generic PCB article.

Implementation update: the existing after-12th route catalogue now expands from 15 to 18 records with distinct rows for BA Political Science/public policy, botany/environmental/life sciences, and forensic science/criminal-justice support. These are deliberately housed inside the existing filterable chart and dataset rather than published as three thin articles; each row carries cautious eligibility wording, a next-step catch, and the existing official-source verification warning.

Implementation update: the distinct life-skills opportunity is now served at `/services/assessments/life-skills-self-assessment/` with 25 questions, five practical domains, stage-aware guidance, scenario questions, a 14-day routine and a downloadable report. Social-skills intent now has a distinct `/services/assessments/social-skills-self-assessment/` route with 25 questions across five practical domains, stage-aware advice and browser verification. Leadership intent remains consolidated in the dedicated leadership assessment; no generic duplicate articles were created.

Implementation update: the “career after mechanical engineering” opportunity now has a focused `/tools/career-route-finder/` interaction over the school’s editorial route catalogue. It supports work/stage/category filtering, a first-test next step and explicit catalogue limits; it does not claim live job, salary or licensing data. The high-value course, payback, evidence-builder, intake and dataset routes are now also listed in the XML sitemap rather than being discoverable only through internal links.

Implementation update: the “unique business ideas for students” opportunity now has `/tools/student-business-idea-feasibility-calculator/`. It exposes contribution margin, break-even sales, time and budget stress tests, then gives a 14-day test-before-investing worksheet. It uses only visitor-entered assumptions and makes no demand, income or success-rate claim.

Implementation update: the secondary degree-intent cluster is consolidated into `/tools/degree-career-project-planner/`, covering BA Political Science, Botany, forensic science and BCA with subject-specific work signals, role families, project evidence and route checks. This is one differentiated worksheet rather than four thin list pages.

Implementation update: the career-route finder now includes a browser-local two-route comparison worksheet. It compares work setting, route length, entry routes, first test, stage fit and catalogue confidence without creating a second generic article or presenting a ranking.

Implementation update: `/datasets/assessment-methodology-2026/` now publishes a fourth editorial dataset. It maps the authored self-assessment bundles, domains, question counts, supported stages and disclosed limits; it deliberately excludes participant answers, scores and validation claims.

Implementation update: `/datasets/skill-evidence-library-2026/` now publishes a fifth editorial dataset from the existing tracker project library. It exposes practice levels, effort, outcomes and evidence prompts while making no employment or hiring-outcome claim.

Implementation update: `/datasets/career-target-emphasis-2026/` now publishes a sixth editorial dataset from the existing tracker model. It preserves the nine-skill key order and directional 1–5 bands, with explicit limits against treating them as hiring requirements or labour-market evidence.

Implementation update: `/datasets/career-routes-after-10th-2026/` now publishes a seventh editorial dataset from the existing Class 10 route chart. It includes subject, diploma, ITI, open-school and skill-first route descriptions with a first move and watch-out, but no invented admission, salary or employment statistics.

## Authority areas that fit the business

The most defensible authority wedge is **interactive, evidence-backed career decisions for Indian students and early-career adults**:

- editorially reviewed eligibility and pathway screening with source dates, plus an explicit handoff to current official notices;
- assessments that produce a result and a next action, not a score-only page;
- parent/student decision support and printable agreements;
- first-party route catalogues and transparent methodology disclosures;
- practical “try before you commit” projects and proof-of-work plans;
- honest cost/payback planning with visible assumptions.

This is more ownable than publishing more generic “best career” articles. The business facts support a decision-support product; they do not yet support claiming a comprehensive national course database, validated psychometric instruments, original labor-market research, or real-student validation. Those claims should remain out of the copy until the required evidence exists.

## Recommended build order

1. Upgrade the existing commercial pages first: counselling fees, aptitude-test entry, and the Class 12/PCB/commerce finders.
2. Build one reusable assessment engine and launch the three distinct interaction opportunities: social skills, leadership skills, and life skills.
3. Add the student/parent intake questionnaire and connect it to assessment routing.
4. Add original evidence only where it improves the tool: official eligibility sources, dated methodology, downloadable result/decision artifacts, and measured user testing.
5. Measure Search Console clicks, completion rate, result-page engagement, and assisted counselling conversions per route. Do not judge these opportunities by keyword volume alone.

## Full-sheet exact-KD-0 recheck

The two source workbooks were re-read from live metadata and bounded `A:G` ranges after the earlier summary was written. The scan covered all 35 visible tabs: 20, plus the Search Console-style `FCS - Queries - 7/8/26` tab, in the first workbook; and 14 in the second workbook. The Search Console tab was retained for click/impression context but excluded from keyword-difficulty ranking because its columns are not the provider keyword-export schema.

Across the provider-export tabs, the recheck found **106,558 rows whose exact `Keyword Difficulty` value is `0` and 98,069 case-insensitive unique keyword strings**. This is a filter result, not a claim that those phrases have no competing pages. Many are irrelevant, branded, navigational, definitional, or shopping queries and were rejected before recommendations.

The highest-volume relevant rows in the live recheck were:

| Keyword | Volume | Intent | Source tab / row | Current decision |
|---|---:|---|---|---|
| best course for commerce students | 1,300 | Commercial | Keywords 2026-2 / Courses / 3 | Use the existing commerce/course-finder route; do not create a thin duplicate |
| commerce without maths career options | 1,000 | Informational, Commercial | keywords 2026 -1 / Career Options / 51 | Existing focused finder; strengthen evidence and internal links |
| after 12 commerce career options | 880 | Unspecified export intent | keywords 2026 -1 / Career Options / 55 | Existing Class 12 catalogue; expand route detail rather than another list |
| pcb student career options after 12th without neet | 480 | Unspecified export intent | keywords 2026 -1 / Career Options / 124; also Student | Existing dedicated PCB-without-NEET finder |
| rbi career opportunities | 170 | Commercial | keywords 2026 -1 / Career Oppurtunities / 83 | Defer: official-exam and employer-specific research required |
| geology career options | 170 | Unspecified export intent | keywords 2026 -1 / Career Options / 293 | Candidate for a sourced pathway brief, not a generic article |
| is qa a good career | 170 | Unspecified export intent | keywords 2026 -1 / Good / 97 | Candidate for a self-check and route experiment, not a prediction page |
| math science careers | 170 | Unspecified export intent | keywords 2026 -1 / Science / 76 | Consolidate into the existing stream chart |
| business mentors in india | 170 | Unspecified export intent | Keywords 2026-2 / Business Mentor / 4 | Defer until the business has a clearly defined mentor offer |
| what should i put as my skills on a resume | 170 | Unspecified export intent | Keywords 2026-2 / Skills - Questions / 256 | Existing resume evidence builder; add contextual links, not a duplicate article |
| career options after BA political science | 140 | Unspecified export intent | keywords 2026 -1 / Career Options / 344; also Science | Existing degree project planner |
| is BCA a good career option | 140 | Unspecified export intent | keywords 2026 -1 / Career Options / 374; also Good | Existing BCA pathway in the degree planner |
| best courses for PCB students after 12th | 140 | Unspecified export intent | Keywords 2026-2 / Courses / 121 | Existing course eligibility finder |
| best courses for PCM students after 12th | 140 | Unspecified export intent | Keywords 2026-2 / Courses / 122 | Existing course eligibility finder |
| social skills self assessment | 110 | Unspecified export intent | Keywords 2026-2 / Skill Assessment / 38 | Existing dedicated assessment |
| career in forensic science in India | 110 | Unspecified export intent | keywords 2026 -1 / Science / 107 | Existing degree/project planner and sourced route row |
| career after mechanical engineering | 110 | Unspecified export intent | keywords 2026 -1 / Engineering / 85 | Existing career-route finder |

The live scan confirms the earlier strategic conclusion: exact KD 0 is a discovery signal, not an editorial green light. The best defensible opportunities are interactive or source-backed decisions already represented by the focused finder, assessment, planner, or evidence-builder routes. No “zero AI-overview risk” label is assigned; the report uses interaction intent and answer-substitution risk only as qualitative editorial criteria.
