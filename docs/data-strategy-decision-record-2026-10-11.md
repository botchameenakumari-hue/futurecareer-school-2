# Data strategy decision record — 11 October 2026

This record converts the open research and database questions in the strategy audit into safe operating defaults. It is an implementation decision record, not a claim that the strategy team has approved a research programme.

## Decisions applied in the current product

### Research reports and first-party datasets

No assessment answer, planner entry, counselling result or student interaction is treated as research data. The browser-local tools do not silently export user inputs. No benchmark report is published until the project has a stated question, consent/assent path, retention rule, minimum sample, analysis method and publication owner.

Until those conditions exist, the site may publish only editorial datasets derived from its own authored content or from explicitly linked official starting pages. Every such dataset must carry its provenance, version, editorial review date and limits. A definitive database record additionally needs a last-verified date and named verifier. Editorial records must not be presented as survey findings, salary statistics, employment outcomes or admission guarantees.

### Database ownership and verification

The current career catalogue remains an exploratory editorial catalogue owned by Future Career School’s content team. It is not a national occupation database. The code exposes this status as `editorial-only` and maintains an unpublished, deterministic verification queue of 50 priority route keys, visible in the public registry and JSON metadata. Before a regulated, admissions, salary or labour-market database is launched, the owner must assign:

- a named verifier;
- an official or primary source for each material field;
- a last-verified date and review cadence;
- a correction and withdrawal path; and
- a publication threshold for missing or conflicting evidence.

Records without those fields remain exploratory and cannot be used to make a definitive recommendation.

The review default is quarterly for active records, with immediate review after a source correction. The first-50 queue is an editorial work order only; it is not evidence that those careers have been checked.

### School and counsellor products

Class-level dashboards, cohort reports, counsellor exports and account-backed student data are deferred. They require an explicit product decision covering account ownership, parent/guardian consent, minor safeguards, role-based access, retention, deletion and school-level data processing. The current local worksheets and planners are therefore intentionally private-by-design and browser-local.

### Priority order

The implementation order is:

1. Source-backed editorial course and entrance-exam finder (implemented with source links, review dates and conservative language; it is not independently verified admission data).
2. Stream-specific finders for Commerce without Maths, MPC/PCM and BiPC/PCB (implemented).
3. Parent/student agreement worksheet (implemented locally, without account storage).
4. Exploratory career catalogue improvements only when each new claim has an owner and source.
5. Research reports, public benchmark datasets and school/counsellor products only after the gates above are approved and evidenced.

## What this record does not decide

It does not authorise collecting personal data, enrolling minors in a study, publishing research results, claiming that any assessment is validated, or presenting the editorial catalogue as a comprehensive career database. Those require a separate owner-approved decision and current evidence.

## Related evidence

- `/data-policy/` — public provenance and privacy policy.
- `/research-and-datasets/` — live publication registry.
- `docs/assessment-user-validation-protocol.md` — protocol for future human testing; no participant results are currently claimed.
- `docs/current-main-feature-audit-2026-10-11.md` — current implementation and verification record.
