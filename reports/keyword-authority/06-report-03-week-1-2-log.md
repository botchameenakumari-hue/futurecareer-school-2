# Report 3, weeks 1-2: wording edits on pages that already have impressions

Done 2026-10-30 on `main`. Source: Report 3 Section 6 (`appendix/A12`). Rules followed: additive only, no section removed, slugs and ids unchanged, FAQ JSON-LD matches the visible FAQ, no new figures that were not already on the site.

How the worklist was built: every A12 query was re-tested against the current headings and FAQ questions of its host page (a script, not a read-through), because the Report 1 pass had already covered several of them. Of 199 queries still flagged open by the strict test, the edits below target the hosts where the substance was already on the page and only the searcher's wording was missing.

| Host page | Search wording added | What changed |
|---|---|---|
| `data-science-vs-software-engineering-career-india` | data scientist vs software engineer salary in india; data analyst vs software engineer salary | Salary H2 renamed; new short H2 explaining analyst vs data scientist (no new figures); FAQ; jump links |
| `python-vs-java-which-to-learn-first-india` | java or python which is better for future in india | Job-market H2 renamed; FAQ (page and schema) |
| `best-courses-after-bcom-for-high-salary` | after bcom which course is best for high salary; courses after b com with high salary | Ranking H2 renamed; FAQ |
| `pcm-career-options` | coding vs pcm for future engineers | New H2 with plain explanation (stream vs skill) and honest-take box; FAQ |
| `best-diploma-courses-after-12th` | diploma courses list after 12th; diploma after 12th science; best diploma courses after 12th fail; high salary diploma courses after 12th; does diploma need 12th pass; which diploma is best for future | Four H2s renamed; three FAQs |
| `best-skills-for-commerce-students-to-learn` | skills to learn as a commerce student; skills required for commerce students | Skill-groups H2 renamed; two FAQs (page and schema) |
| `certificate-courses-for-bcom-students` | skills for bcom students; technical skills for bcom students | By-goal H2 renamed; FAQ mapping skills to certificates |
| `career-options-for-non-cs-engineers` | non circuit / non core / non tech branches of engineering | Branch-map H2 renamed; FAQ that explains the informal labels |
| `career-after-bsc-nursing-india-scope` | medical coding after bsc nursing salary | FAQ using the same range as the medical coding guide, labelled indicative |
| `arts-and-humanities-careers-that-pay-well-today` | humanities jobs list and salary; high paying humanities jobs | Lanes H2 renamed; new section on how to read pay (a method, no salary table, because none could be sourced) |
| `career-profile-quiz-perfect-plan-passion-or-empire-builder` | career change quiz (free) | New section explaining what the quiz does and does not do for a career change, linking to the career-change guide and the career-changers assessment |

## Deliberately not changed

- `cuet-vs-jee-which-is-better-for-career`: already carries the "CUET UG vs JEE Main" section and FAQs from the Report 1 pass; the remaining flagged phrasings are covered in that section's text.
- `career-development-workshop-online` (service page) and the quiz queries mapped to it: not a fit for informational wording; the assessments silo is a measured follow-up.
- `best-courses-after-12th-for-high-salary-india` and `postgraduate-diploma-courses-in-canada-for-international-students`: the flagged queries are host mismatches (the BCom and diploma pages above are the right hosts).
- `career-after-bsc-nursing-india-scope` "how to go abroad": already answered by the FAQ added in the Report 1 pass.
- MPT salary queries, "future career" brand queries, government psychologist salary and the other "no close page" rows: no host and no verifiable figures; not forced onto an unrelated page.

## Still open from Report 3

Weeks 3-6 (top 30 host pages in Section 7), month 2-3 family work (A01, A02, A03, A12, A15) and the nine micro-article candidates. Re-measure these pages at 4, 8 and 12 weeks against the baseline in `search-console-baseline-2026-07-13-to-2026-10-12/`.

## Verification

`pnpm exec astro build` passed (1,110 pages). `check-public-copy`, `check-blog-links`, `check-internal-urls`, `check-inbound-links` and `check-scalability-coverage` all passed. Every new FAQ question was confirmed in both the visible page and the FAQ JSON-LD in the built HTML, with no duplicate questions. No em dashes or banned audience words in the added copy.
