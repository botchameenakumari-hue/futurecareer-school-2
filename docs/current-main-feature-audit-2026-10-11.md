# Current `main` feature audit

Audit date: 12 October 2026  
Repository: `botchameenakumari-hue/futurecareer-school-2`  
Latest pushed `main` SHA inspected: `a3b0117281f651ff6bb75f177f5f17ca307d4f4d`

The remote `origin/main` SHA was verified with a read-only `git ls-remote` check and fetched before inspection. The verification was run against the working tree containing the uncommitted source, component, configuration and contract changes shown by `git status`; the SHA above is the latest pushed baseline, not a claim that the working-tree changes have been committed or pushed.

This is the current-branch evidence record. The older strategy report was prepared against `a2a5782`; statements in that report are historical unless the current source or a current verification command below supports them.

The separate false-positive review in `../SEPARATE_AUDIT_FALSE_POSITIVE_REVIEW.md` was also reconciled before this inventory was updated. It correctly identifies the older snapshot as stale for the tracker, assessment plans, PDF reporting, and Class 10/Class 12 tooling. Those features are therefore treated here as implemented surfaces that require regression and quality checks—not as missing products.

## Inventory evidence

The current production build reports 1,071 generated pages. The checked output contains 1,070 HTML files and 732 sitemap locations. The source tree contains 730 page entry files, including 45 assessment entries and twenty-five tool-page entries. The two additional source entries are the unpublished course-eligibility verification-queue JSON and CSV work-order endpoints; the additional page entry is the browser-local course verification workbench.

These counts were obtained from the current `src/pages`, `dist` and generated sitemap after the production build; they are not copied from the older audit snapshot.

## Historical-objective reconciliation

The strategy report in the objective file is a baseline against `a2a5782`, not a current inventory. The current tree changes several of its status statements:

| Historical statement | Current evidence | Current interpretation |
| --- | --- | --- |
| 15 public datasets were not built | `src/pages/datasets/` contains seven published editorial dataset pages, with JSON/CSV endpoints and provenance contracts | Seven editorial datasets are published; the remaining planned datasets and all first-party benchmark datasets remain unpublished. |
| The Class 12 catalogue covered 11 routes | `src/config/careerChartAfter12th.mjs` and the audit contract | The current catalogue contains 18 route records. |
| The course finder was only a planned next step | `src/config/courseEligibilityFinder.ts`, eight tool routes, and Chromium contracts | The current finder contains 15 dated editorial records, including a state-specific Telangana nursing route. |
| Stage-test PDFs lacked report-detail pages | Four stage PDF generators, `scripts/check-stage-pdf-details.mjs` and the Chromium runtime contract | The current generators contain explicit front/back report sections; runtime checks now require those sections and stage score fields to be populated before both PDF controls are downloaded. |
| Social-skills intent was consolidated into another assessment | `src/pages/services/assessments/social-skills-self-assessment/`, its bundle, and the current-feature contract | A distinct 25-question, five-domain self-assessment now exists; it is not a generic explanatory article. |
| High-value tools were not in the sitemap | `src/config/site.ts`, `src/pages/sitemap.xml.ts`, and the built `dist/sitemap.xml` | The 25 current tool pages plus the seven editorial datasets, research hub and data policy are now explicit sitemap routes. |
| “Unique business ideas for students” had no differentiated asset | `src/components/StudentBusinessFeasibilityCalculator.astro`, `/tools/student-business-idea-feasibility-calculator/` and the browser contract | A user-input contribution, break-even and 14-day test-before-investing calculator now exists; it makes no demand or income claim. |
| Degree-intent keywords had only list-style coverage | `src/config/degreePathwayPlanner.ts`, `src/components/DegreePathwayPlanner.astro`, and `/tools/degree-career-project-planner/` | One differentiated worksheet now covers BA Political Science, Botany, forensic science and BCA with subject-specific projects and route checks. |
| Career database ownership and first-50 selection were undecided | `CAREER_DATABASE_READINESS`, `check-career-database-readiness.mjs`, and the public research registry | Ownership, cadence, required fields and the actual 50-key unpublished verification queue are now explicit; the catalogue remains editorial-only. |

This reconciliation does not convert the remaining 118-tool proposal, 20 first-party research reports, school/counsellor products, career database, or real-student validation into completed work. Those remain open unless their current evidence is added.

## Feature-to-route matrix

| Requirement | Current evidence | Status | What the evidence does not prove |
| --- | --- | --- | --- |
| Class 10 decision tool | `src/components/RouteFinder10.astro`, `src/scripts/streamFinder10.ts`, Class 10 chart page | Implemented | It does not prove a real student found the result useful. |
| Class 12 filtering and reasons | `src/config/careerChartAfter12th.mjs`, `src/config/chart12Filters.ts`, `src/components/ChartFilter12.astro` | Implemented; 18 route records | It is an editorial planning model, not an admissions decision. Official notices remain authoritative. |
| Assessment result personalization | `src/scripts/resultCompanion.ts` and the four stage-page score attributes | Implemented with limits | Static contracts do not replace a complete human test cohort. |
| Social-skills self-assessment | `src/pages/services/assessments/social-skills-self-assessment/`, shared skill-test bundle and browser contract | Implemented; 25 questions across five practical domains | It is a non-clinical self-assessment, not a validated psychological or hiring instrument. |
| Stage-test PDF front/back details | Four stage PDF generators plus `scripts/check-stage-pdf-details.mjs` | Implemented and contract-verified | The contract verifies section ordering/content, not visual quality on every printer or PDF viewer. |
| Course and entrance-exam finders | `src/config/courseEligibilityFinder.ts`, `src/components/CourseEligibilityFinder.astro`, the course-finder tool routes | Implemented; 15 dated records plus exam filtering and a PCB-without-NEET view | Records are conservative editorial records, not a complete national database. Current institute notices must be checked. |
| Course-rule verification workflow | `/tools/course-eligibility-verification-workbench/`, 15-record queue endpoints and browser contract | Implemented as a local review-packet workflow | It prepares evidence packets but does not verify, publish or turn the 15 editorial records into admission data. |
| Career route finder | `src/components/CareerRouteFinder.astro`, `/tools/career-route-finder/`, 612-record editorial catalogue | Implemented; browser-local search with stage and category filters | The catalogue is not a live job, salary, labour-market or licensing database. |
| Privacy-safe tracker sharing | `src/components/SkillPortfolioTracker.astro`, `tests/current-feature-contracts.spec.js` | Implemented; share URL exposes only ratings-derived aggregates, stage and target direction, with no name, notes, files or evidence URLs | It is a voluntary summary link, not account sync, counsellor access or cloud persistence. |
| Informational interview planner | `src/components/InformationalInterviewPlanner.astro`, `/tools/informational-interview-planner/` | Implemented; creates a respectful outreach plan, focused questions, source-verification prompt and next experiment | It does not guarantee access, employment or that one person’s experience represents a whole field. |
| Study-abroad readiness planner | `src/components/StudyAbroadReadinessPlanner.astro`, `/tools/study-abroad-readiness-planner/` | Implemented; turns institution, cost, official-condition and backup-route checks into a browser-local readiness plan | It does not verify admission, visas, migration, costs or employment outcomes. |
| Skill-to-service mapper | `src/components/SkillToServiceMapper.astro`, `/tools/skill-to-service-mapper/` | Implemented; maps a skill to a narrow audience, deliverable, proof artifact and bounded usefulness test | It does not promise clients, demand, income or professional eligibility. |
| Career experiment planner | `src/components/CareerExperimentPlanner.astro`, `/tools/career-experiment-planner/` | Implemented; turns a direction into a 30-day activity, output, weekly steps, evidence question and review rubric | One experiment cannot prove career fit, future income or placement. |
| Career decision journal | `src/components/CareerDecisionJournal.astro`, `/tools/career-decision-journal/` | Implemented; browser-local hypothesis, experiment, review and JSON export workflow | It is a reflection tool, not a validated career-fit or employability predictor. |
| Course cost planner | `src/components/CourseCostPlanner.astro`, `/tools/course-cost-planner/` | Implemented; separates fixed fees, recurring costs, funding and monthly gap from user-entered assumptions | It is not a provider quote, loan calculator or affordability guarantee. |
| Career optionality calculator | `src/components/CareerOptionalityCalculator.astro`, `/tools/career-optionality-calculator/` | Implemented; models adjacent routes, skill portability, reversibility, testability and official-rule clarity | Its 0–100 signal is not a probability, ranking, fit score or labour-market benchmark. |
| Portfolio quality checker | `src/components/PortfolioQualityChecker.astro`, `/tools/portfolio-quality-checker/` | Implemented; checks project context, process, artifact, feedback, reflection and a 14-day evidence repair | It checks presentation clarity, not talent, hiring likelihood or externally validated capability. |
| Course provider comparison | `src/components/CourseProviderComparison.astro`, `/tools/course-provider-comparison/` | Implemented; compares recognition, cost, practical work, feedback and outcome evidence using identical questions | It creates a due-diligence brief, not a provider ranking or verification result. |
| Career-change runway calculator | `src/components/CareerChangeRunwayCalculator.astro`, `/tools/career-change-runway-calculator/` | Implemented; estimates an entered savings/expense/income gap and records a pause threshold | It is simple arithmetic, not financial advice or a recommendation to resign. |
| Internship readiness planner | `src/components/InternshipReadinessPlanner.astro`, `/tools/internship-readiness-planner/` | Implemented; turns evidence, communication, opportunity checks and safety into a seven-day preparation plan | It does not guarantee placement or judge an employer. |
| Scholarship application planner | `src/components/ScholarshipApplicationPlanner.astro`, `/tools/scholarship-application-planner/` | Implemented; organizes official-source, eligibility, document, deadline and funding-gap checks | It does not list scholarships or predict an award. |
| Career database verification workbench | `/tools/career-database-verification-workbench/`, browser contract and queue endpoint | Implemented; local field checklist, per-field evidence notes, source URLs, verifier/date, conflict note and incomplete-packet guard | It prepares review drafts; it does not independently verify or publish records. |
| Career route comparison | `CareerRouteFinder.astro` comparison worksheet and current-feature browser contract | Implemented; two-route side-by-side trade-off table, browser-local | It structures editorial fields; it does not rank routes or predict outcomes. |
| Student business feasibility calculator | `src/components/StudentBusinessFeasibilityCalculator.astro`, `/tools/student-business-idea-feasibility-calculator/` | Implemented; unit economics and 14-day test plan | It evaluates entered assumptions only; it cannot validate demand, legal obligations or likely income. |
| Degree career project planner | `src/config/degreePathwayPlanner.ts`, `src/components/DegreePathwayPlanner.astro`, `/tools/degree-career-project-planner/` | Implemented; four subject families with project evidence | It is an editorial worksheet, not admissions, licensing, salary or aptitude advice. |
| Education payback planner | `src/components/EducationPaybackPlanner.astro`, `/tools/education-cost-payback-planner/` | Implemented and Chromium-verified | It is a user-input planning model, not a salary, investment or employment prediction. |
| Parent/student agreement and disagreement worksheet | `src/components/ParentStudentAgreement.astro` | Implemented and contract-verified; captures each side's boundary, shared review rule and next evidence step | It is browser-local; it is not an account-backed family workflow, mediation service or consent system. |
| Skill portfolio tracker | `src/components/SkillPortfolioTracker.astro`, `src/config/careerTargets.ts`, `src/config/skillProjects.ts` | Implemented as browser-local self-report | No cloud sync, external evidence review or hiring-outcome validation is claimed. |
| Career-target model | `CAREER_TARGET_METHOD` in `src/config/careerTargets.ts` | Provenance and limits disclosed | The model is not a validated labour-market benchmark. |
| Project/evidence scoring | `PROJECT_LIBRARY_METHOD` and tracker report methodology | Provenance and limits disclosed | Evidence and links are entered by the user and are not independently checked. |
| Editorial datasets | `src/pages/data/`, `src/pages/datasets/`, dataset contracts | Implemented where records exist | No survey or first-party benchmark data has been invented. |
| Assessment methodology dataset | `/datasets/assessment-methodology-2026/`, JSON/CSV endpoints, research-registry contract | Implemented; authored structure for the current self-assessment bundles | Contains no participant answers, scores, norms or validation results. |
| Research reports and first-party benchmarks | `src/config/researchRegistry.ts`, `/research-and-datasets/` | Explicitly not published | Consent, storage, sample definition and data ownership are still required. |
| School/counsellor products | Existing authenticated workspace source | Not established by this audit | Scope, consent and class-level data governance still need an explicit product decision. |
| Career database publication gate | `src/config/careerRouteDataset.ts`, `/research-and-datasets/`, JSON/CSV verification-queue endpoints, `scripts/check-career-database-readiness.mjs` | Implemented as an unpublished readiness gate and actionable 50-record queue | It does not verify the underlying 612 records; primary-source verification still remains work to be done. |
| Skill evidence project dataset | `/datasets/skill-evidence-library-2026/`, JSON/CSV endpoints, editorial-dataset contract | Implemented; authored project prompts, effort bands and evidence ideas | Contains prompts only; completion is self-reported and no employment outcome is claimed. |
| Career-target emphasis dataset | `/datasets/career-target-emphasis-2026/`, JSON/CSV endpoints, tracker model contract | Implemented; directional skill bands for 20 broad target families | It is not a hiring requirement, salary/labour-market dataset or employability prediction. |

## Verification record

The current verification chain passed after the latest changes:

- Astro type check across all 962 files with minimum severity `error`: 0 errors.
- `pnpm verify` now runs that type check before the production build, so the repository gate cannot pass while Astro errors are present.
- 1,071-page production build.
- Stage score and stage PDF-detail contracts.
- Chromium stage-PDF runtime contract: all four stage assessments reached their result views, populated the companion front/back sections and standard score fields, both PDF controls downloaded the expected report successfully, and each downloaded file contained at least four PDF pages.
- Assessment-companion personalization contract.
- Assessment coverage contract: 19 routes use the shared result companion, 17 use the shared self-test renderer, and five are explicitly classified as landing-only; no concrete result route is left unclassified.
- Chromium route smoke: all 41 concrete assessment/landing routes rendered with HTTP 200 and non-empty document content. Redirect-style landing pages are accepted when their resulting document exposes an `h1`.
- Tracker-methodology disclosure contract.
- User-validation protocol contract: consent, minor safeguards, measured tasks, retention, a ready-to-run session sheet and non-validation rules are documented; field testing is still not conducted.
- Course eligibility, pathway, payback, parent/student and dataset contracts.
- Chromium entrance-exam finder runtime contract: all 15 dated route cards render, the NEET UG filter narrows to the documented NEET-tagged routes, and the PCB-without-NEET view preserves the separate Telangana TG-EAPCET nursing route.
- Life-skills assessment contract: the distinct 25-question route, five domains, stage guidance, scenarios, report support and built output are present.
- Student-parent intake contract and Chromium runtime: the browser-local worksheet saves locally, routes by stage and decision, and is linked from the after-12th chart context.
- Resume evidence builder contract and Chromium runtime: the browser-local tool turns a real task into a checked draft bullet without inventing metrics, and is linked from the skill portfolio tracker.
- Public-copy guardrail across 1,070 rendered HTML files.
- 30,716 internal blog links with zero broken links.
- Internal URL check across 1,069 pages.
- Page-media check across 763 pages.
- Strict image audit across 725 pages with zero issues.
- Chromium interaction test for the education payback planner.
- Audit-consistency contract: the documented remote SHA, source/HTML/tool counts, Class 12 route count, non-claims and data-strategy record match the current worktree.
- Shared BOFU component contract: `BofuListCardSection` now accepts wrapper usage without a duplicate local title and conditionally renders its intro block; the production build and full verification gate pass after this correction.
- Privacy-safe tracker-share contract: a shared snapshot decodes in Chromium and explicitly excludes private entries.
- Career route finder contract and Chromium test: the 612-record editorial catalogue can be searched by term, stage and category, and the route’s limits remain visible.
- Student business calculator contract and Chromium test: user-entered unit economics, break-even output and a 14-day test plan render without external income claims.
- Degree pathway planner contract and Chromium test: all four subject families expose work signals, a project brief, evidence to keep and route limits.
- 27 current-feature Chromium tests passed, including the privacy-safe tracker-share snapshot, incomplete-packet guards and complete exports for both verification workbenches, the parent/student disagreement workflow, informational interview planner, study-abroad readiness planner, skill-to-service mapper and career experiment planner.

The inbound-link check still reports ten pages with three inbound links each. Those are recorded as genuine low-link pages; no artificial cross-link ring was added to hide the warning.

The parent/student worksheet now includes a disagreement protocol: each side can record a non-negotiable boundary, the family can write a shared evidence-review rule, and the summary keeps those boundaries visible alongside the next test and review date. This improves decision structure but is not mediation, counselling or a substitute for safeguarding support.

The operating defaults for the still-open research, database and school-product workstreams are recorded in `docs/data-strategy-decision-record-2026-10-11.md`: editorial-only datasets for now, no hidden reuse of browser-local inputs, named ownership and source fields before definitive database claims, and school/counsellor products deferred until consent and access rules are approved.

## Explicit non-claims

This audit does not claim that all 118 proposed new tools exist. It does not claim that the 20 research reports or 15 first-party datasets exist. It does not claim cross-device tracker persistence, external evidence verification, validated career-fit scores, real-student testing, or a comprehensive career database. Those are separate requirements and remain open until the necessary product scope, data and validation evidence exist. The user-validation execution protocol is documented at `docs/assessment-user-validation-protocol.md`, but no participant results have been collected or published.
