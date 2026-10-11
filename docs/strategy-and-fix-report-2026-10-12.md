# FutureCareerSchool strategy and fix report — current main

Audit date: 12 October 2026  
Repository: `botchameenakumari-hue/futurecareer-school-2`  
Verified branch: `main`  
Verified baseline SHA: `0481b094b4321382eb2235ddd093ec7c761e92ef`

## Executive correction

The earlier strategy report was written against an older commit and is no longer a reliable status sheet. The current branch contains the previously listed assessment, PDF, result-summary and Class 12 updates. The Class 12 catalogue currently contains 20 route records, not 11. The current branch also contains the tool and editorial-data work described in the current-main feature audit.

The repository was synchronized at the verified baseline. Any release commit after this report must rerun the gate and confirm that checked-out `main` and `origin/main` match.

## Status reconciliation

| Earlier report statement | Current verified state | Evidence |
| --- | --- | --- |
| Stage-test PDFs lacked report details, method, review and sources | Corrected; all four stage PDF families carry the report sections and the PDF contracts pass | `scripts/check-stage-pdf-details.mjs`, four stage PDF generators, `tests/current-feature-contracts.spec.js` |
| Strongest/weakest or highest/lowest scores were not real | Corrected for the four stage tests and the four aptitude/stream-selector tests; score rows are populated from the result data | `src/scripts/resultCompanion.ts`, stage score attributes, assessment companion contract |
| Short-summary PDF was missing on some plan results | Corrected; the plan-result surfaces expose the short-summary action | `src/components/AssessmentReportTools.astro`, assessment companion contract |
| Class 12 had only 11 routes | Corrected; 20 route records are present and the subjects-studied selector is wired to the filter | `src/config/careerChartAfter12th.mjs`, `src/config/chart12Filters.ts`, `src/components/ChartFilter12.astro` |
| The 60-stage PDF check was pending | The recorded check passed 60/60 at the latest stage-PDF verification point | `scripts/check-stage-pdf-details.mjs` and the verification record in `docs/current-main-feature-audit-2026-10-11.md` |
| Course and entrance-exam finder was only a proposal | A dated editorial finder with 15 records, exam filtering and a local verification workbench exists | `src/config/courseEligibilityFinder.ts`, `src/components/CourseEligibilityFinder.astro`, `/tools/course-eligibility-verification-workbench/` |
| High-value tools were absent | 25 tool-page entries are present, including the course finders, cost/payback planners, assessment-adjacent worksheets, parent/student intake, evidence builder and route finder | `src/pages/tools/`, current feature audit and verification contracts |
| Public datasets were entirely absent | Seven editorial dataset pages and JSON/CSV endpoints are published; first-party survey/benchmark data is not published | `src/pages/datasets/`, `src/pages/data/`, `src/config/researchRegistry.ts` |

## New-tool-list boundary

The proposal still contains 118 new-tool ideas. The existence of 25 current tool routes does not mean all 118 proposed tools are complete. Existing Partial and Related items must continue to be extended in place; duplicate pages should not be created. The item-level companion report remains the authority for each individual proposal status.

The current repository evidence supports the following implemented or partly implemented families:

- course and entrance-rule discovery, including commerce-without-maths, MPC/PCM, BiPC/PCB and PCB-without-NEET views;
- course-cost, education-payback, optionality and career-change planning;
- degree-pathway project planning;
- parent/student intake and disagreement planning;
- resume evidence, portfolio quality, skill-to-service, internship and scholarship preparation;
- career experiments, decision journaling, informational interviews and study-abroad readiness;
- route search/comparison and a local career-database verification workbench.

These are browser-local planning or evidence tools unless the page explicitly says otherwise. They do not establish employment, admission, salary, demand, psychological validity or a comprehensive database.

## Work that must remain open

The following items are intentionally not marked complete:

1. First-party research reports and benchmark datasets need real participants, consent, collection design, de-identification, retention and a publication rule.
2. Cross-device student/counsellor synchronization needs an explicit account, ownership, visibility, consent, deletion, retention, conflict and RLS decision before implementation.
3. Course coverage remains an editorial set of 15 dated records, not a national institutional catalogue. New records need official-source wording, exceptions and a checked date.
4. The 612-record career catalogue remains editorial and requires primary-source verification before definitive eligibility, regulation, cost or outcome claims.
5. Real-student and counsellor validation has not occurred. Automated checks prove implementation behavior only.
6. Production JavaScript still has large PDF/workspace chunks; optimization must preserve downloads, assessment runtime and authenticated workspace behavior.
7. Ten pages still have three inbound links each. They need relevant contextual links, not artificial link rings.

Exact file paths, owners, required external inputs and acceptance criteria for these gaps are recorded in `docs/release-gap-register-2026-10-12.md`.

## Evidence rules for future work

- Do not invent route, eligibility, salary, cost, demand, outcome or participant figures.
- Do not make admission, employment, income, ranking or assessment-validity promises.
- Do not publish first-party research or benchmark language without real collected data and an approved governance record.
- Keep new planning tools browser-local until synchronization governance is approved.
- Use WhatsApp as the only contact route in new work.
- Do not add service prices or investment claims. User-entered arithmetic fields are inputs, not published facts.
- For every new course or career record, store the official source URL, source wording, checked date, exceptions and uncertainty note.

## Verification target

The release gate is `pnpm verify`. It must be run after code changes, followed by `git status --short` and confirmation that `main` and `origin/main` match. The audit-consistency contract must continue to match the current SHA, generated page counts, tool count, Class 12 route count and explicit non-claims.
