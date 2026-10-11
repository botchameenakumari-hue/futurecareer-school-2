# Release gap register — Future Career School

This is the durable handoff for remaining work that cannot be completed honestly from the repository alone. Future work should update the named files, preserve the evidence rules, and rerun `pnpm verify` before release.

Repository: https://github.com/botchameenakumari-hue/futurecareer-school-2

## 1. First-party datasets — blocked on real collected data

Current state: the site publishes editorial datasets with dated source notes. It does not claim that these are first-party surveys, benchmark samples, outcome statistics, or representative student data.

Start here:

- `docs/data-strategy-decision-record-2026-10-11.md` — ownership, source, governance and publication decision record.
- `docs/assessment-user-validation-protocol.md` — consent, minors, measures, retention and non-validation guardrails.
- `src/config/researchRegistry.ts` — publication status registry; do not mark planned work as published.
- `src/pages/research-and-datasets.astro`, `src/pages/datasets/`, and `src/pages/data/` — public registry, dataset pages and JSON/CSV endpoints.
- `scripts/check-research-registry.mjs`, `scripts/check-editorial-dataset.mjs`, and `scripts/check-data-policy.mjs` — release contracts.

Required external inputs: named owner and purpose; consent wording and minor-participation rules; collection instrument and sampling plan; minimum sample size and missing-data rules; de-identification, retention and deletion process; review date and a statement of what the data cannot prove. Never fill these datasets with invented values or present a convenience sample as a population benchmark.

## 2. Real student/user validation — blocked on participants

Current state: the protocol and product safeguards are implemented, but no real-world validation claim is made.

Start here:

- `docs/assessment-user-validation-protocol.md` — protocol to follow.
- `scripts/check-user-validation-protocol.mjs` — protocol completeness contract.
- `tests/current-feature-contracts.spec.js` — browser contracts; these prove implementation behavior, not student outcomes.
- Assessment routes under `src/pages/services/assessments/` and local worksheet tools under `src/pages/tools/`.

Required evidence before claiming validation: participant count and audience definition; consent/assent and guardian process where relevant; task-completion, comprehension, usefulness and safety measures; anonymized findings and limitations; and a dated decision log showing which product changes came from the evidence. Automated tests must continue to be described as implementation checks, never as user research.

## 3. Cross-device and counsellor synchronization — blocked on backend/data governance

Current state: several public tools are deliberately browser-local and export/print oriented. The authenticated workspace already has Supabase integration, but local worksheets and public tools must not be silently promoted to cloud storage.

Start here:

- `src/lib/supabase.ts` and `src/lib/supabase-types.ts` — existing backend boundary and generated types.
- `src/scripts/careerWorkspace.ts`, `src/scripts/hierarchyWorkspace.ts`, and `src/scripts/coachingWorkspace.ts` — authenticated workspace behavior.
- `src/components/SkillPortfolioTracker.astro`, `src/components/ParentStudentAgreement.astro`, `src/components/StudentParentCareerIntake.astro`, `src/components/ResumeEvidenceBuilder.astro`, `src/components/CareerDecisionJournal.astro`, `src/components/CareerDatabaseVerificationWorkbench.astro`, and `src/components/CourseEligibilityVerificationWorkbench.astro` — local-first tools that need an explicit sync decision.
- `docs/data-strategy-decision-record-2026-10-11.md` — governance decision point.

Required decisions: record ownership; parent/counsellor/school/student visibility; consent, withdrawal and deletion flow; retention period and audit trail; local/cloud conflict behavior; approved Supabase tables, RLS policies and migrations. Do not add sync merely to make a tool look more complete.

## 4. Course and eligibility coverage — blocked on official-source research

Current state: the finder contains a dated editorial set of 15 course/eligibility records. It is not a comprehensive institutional catalogue and official notices remain authoritative.

Start here:

- `src/config/courseEligibilityFinder.ts` — current records and source metadata.
- `src/pages/tools/course-entrance-exam-finder.astro` and other course finder pages under `src/pages/tools/` — public routes.
- `src/components/CourseEligibilityFinder.astro` — user-facing finder.
- `src/components/CourseEligibilityVerificationWorkbench.astro` — local review packet for adding or correcting a rule.
- `src/pages/data/course-eligibility-2026.json.ts` and `src/pages/data/course-eligibility-2026.csv.ts` — published endpoints.
- `scripts/check-course-eligibility-finder.mjs`, `scripts/check-course-eligibility-workbench.mjs`, and `scripts/check-course-entrance-exam-runtime.mjs` — contracts.

Every new record needs an official source URL, source date, eligibility wording, exceptions, last-reviewed date, and uncertainty note. Prioritize high-intent routes from the keyword report rather than attempting an unbounded catalogue.

## 5. Large JavaScript chunks — performance optimization

Current evidence: the production build warns about chunks above 500 KB. Principal candidates are PDF and workspace dependencies.

Start here: `src/scripts/reportKit.ts`, `src/scripts/assessmentPdfRenderer.ts`, the PDF components under `src/components/`, `src/scripts/workingProfessionalAssessmentPdf.ts`, `src/lib/supabase.ts`, `src/scripts/careerWorkspace.ts`, and `src/scripts/hierarchyWorkspace.ts`.

Acceptance criteria: preserve PDF downloads, assessment runtime contracts, authenticated workspace behavior and accessibility; compare chunk sizes before/after; rerun `pnpm verify`.

## 6. Ten pages with weak internal linking — SEO optimization

`scripts/check-inbound-links.mjs` reports three inbound links for these pages (they are not broken):

- `/blog/career-change/career-switch-tips-for-it-professionals-india/`
- `/blog/parents/how-much-to-spend-on-child-education-india/`
- `/blog/study-abroad/study-abroad-benefits-india/`
- `/services/career-counselling-and-career-guidance/locations/career-counselling-in-agra/`
- `/services/career-counselling-and-career-guidance/locations/career-counselling-in-aurangabad/`
- `/services/career-counselling-and-career-guidance/locations/career-counselling-in-jaipur/`
- `/services/career-counselling-and-career-guidance/locations/career-counselling-in-jalandhar/`
- `/services/career-counselling-and-career-guidance/locations/career-counselling-in-kandivali/`
- `/services/career-counselling-and-career-guidance/locations/career-counselling-in-kota/`
- `/services/career-counselling-and-career-guidance/locations/career-counselling-in-lucknow/`

Improve them through relevant contextual links from hubs and sibling pages; do not create artificial link rings. Acceptance check: `pnpm run check:inbound-links` plus the full `pnpm verify` gate.

## Release command

From the repository root: `pnpm verify`, then `git status --short`, then `git push origin main`.

The GitHub workflow at `.github/workflows/verify.yml` repeats the verification gate on pushes and pull requests to `main`.
