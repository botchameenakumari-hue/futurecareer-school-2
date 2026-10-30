# Report 3, weeks 3-6 and month 2-3 work

Done 30 Oct 2026 on `main`. Source: Report 3 Section 7 (`appendix/A11` top 30 host pages, angle phrasings in `appendix/A9`) and the Section 10 month 2-3 families (`appendix/A13`: A01, A02, A03, A12, A15) plus the micro-article candidates in Section 7.1.

Rules followed: additive only, no section removed, slugs and ids unchanged, no new figures, FAQ JSON-LD matches the visible FAQ (checked in the built HTML by comparing question text), no em dashes, headings and answers written for the page's own content.

## Weeks 3-6: top 30 host pages

| Host page | Search wording added |
|---|---|
| `business-analyst-vs-data-analyst-career-india` | skills required for business analyst; technical skills; career progression; career graph (two new H2s, 6 FAQs) |
| `is-mechanical-engineering-a-good-career-in-india` | online courses for mechanical students; career objective; career after B.Tech (H2, 3 FAQs, links to new objective page) |
| `is-civil-engineering-a-good-career-in-india` | courses for civil students; career objective; career opportunities (H2, 3 FAQs) |
| `is-software-engineering-a-good-career-in-india` | career change to software engineer; career goals; objective (H2, 3 FAQs) |
| `career-after-electrical-engineering-in-india` | career objective for electrical engineers (H2, 3 FAQs) |
| `mba-finance-vs-marketing-india` | career objective, courses and certification for MBA finance (H2, 3 FAQs) |
| `career-options-after-12th-commerce-without-maths` | commerce with IP; best course for commerce; arts without maths (H2, 3 FAQs) |
| `is-fashion-designing-a-good-career-in-india` | career path; after 12th; salary (no figures); fashion management (H2, 4 FAQs) |
| `career-after-mechanical-engineering-in-india` | career change; goals; working abroad (H2, 3 FAQs) |
| `best-computer-and-data-science-courses-for-commerce-students` | job-oriented and certification courses; study abroad caution (H2; page has no FAQ array) |
| `bsc-career-options` | microbiology, statistics, economics; agriculture, biology, life science (two H2s, 6 FAQs) |
| `certificate-courses-for-law-students` | career options for law graduates; international law (H2, 3 FAQs) |
| `career-after-civil-engineering-in-india` | objective for design and structural engineers; M.Tech (H2, 3 FAQs) |
| `career-options-in-commerce-without-maths` | careers after graduation; abroad (H2, 3 FAQs) |
| `job-oriented-courses-for-ece-students` | which course is best; computer courses; MS abroad; online certificates (H2, 4 FAQs) |
| `courses-for-pcm-mpc-science-students-after-12th` | after Inter MPC; girls; PCM with computer science (H2, 3 FAQs) |
| `career-options-after-12th-science-without-biology` | defence; home science; forensic science; which career to choose (two H2s, 4 FAQs) |
| `is-interior-design-a-good-career-in-india` | after 12th; salary (no figures); outlook (H2, 3 FAQs) |
| `computer-science-engineering-career-options` | career objective for CSE; salary (no figures) (H2, 3 FAQs) |
| `best-courses-for-computer-science-cse-students` | internship, training and online certificates (H2, 3 FAQs) |
| `career-in-finance-vs-accounting-india` | courses for finance students; objective; banking and finance (H2, 3 FAQs) |
| `bsc-biotechnology-career-options` | MSc microbiology, agriculture, biology (H2, 3 FAQs) |
| `is-hotel-management-a-good-career-in-india` | after 12th; after graduation; objective; girls (H2, 4 FAQs) |
| `career-objective-for-computer-science-fresher` | resume skills; life science objective (H2, 3 FAQs) |
| `btech-biotechnology-career-options` | objective for B.Tech; AI courses (H2, 2 FAQs) |
| `is-psychology-a-good-career-in-india` | after graduation; masters options; clinical (H2, 4 FAQs) |
| `career-resources/graphic-design-career-roadmap` | web design and product design (section, links to verdict pages; table cells given data-label) |
| `career-resources/data-science-analytics-career-roadmap` | switching careers into data science (section; table cells given data-label) |

## Left unchanged on purpose

- `career-after-bsc-computer-science`: the listed groups (nautical science, home science, forensic science) are host mismatches. The BSc life-science phrasings were added to `bsc-career-options`.
- `postgraduate-diploma-courses-in-canada-for-international-students`: the listed groups are other countries' cities; a Canada page is not the host.

## Month 2-3 families

- A01 career objective: dedicated page `career-objective-for-mechanical-civil-electrical-engineering-freshers`, linked from every branch host above and from `career-objective-for-computer-science-fresher` and `good-career-objective-for-resume`.
- A02 courses and certificates by branch: handled with branch H2s (mechanical, civil, ECE, CSE, commerce, MBA finance) and the skills page `online-certification-courses-for-cse-students-india-skills-and-pay`.
- A03 MBA specialisations: `mba-career-options` gets HR, operations, analytics and healthcare.
- A12 girls: short sections on `career-options-after-10th`, `which-stream-to-choose-in-11th` and `pcm-career-options`, linking to the two existing girls guides.
- A15 stream aliases: `career-options-after-12th-except-medical` explains non-medical, plus two, intermediate and 10+2.
- Micro-article candidates (Section 7.1): handled as host sections (BSc agriculture, BSc biology, BSc life science, career after 12th non-medical, career to choose after 12th science, data science switch, web design). None spun into new URLs, as the report advises, until impressions justify it.

## Verification

Build passed (1,129 pages). `check-public-copy`, `check-blog-links`, `check-internal-urls`, `check-inbound-links` and `check-scalability-coverage` passed. FAQ JSON-LD question text matches the visible FAQ on every edited page. Re-measure at 4, 8 and 12 weeks against `search-console-baseline-2026-07-13-to-2026-10-12/`.

## Follow-up checklist upgrade on the three pages that already existed for the skipped keywords

The owner approved banking, finance/accounting and consulting pages. Pages already exist, so no duplicates were built; each was audited against `BLOG_WRITING_PROMPT_FOLLOWUP.md` and the gaps were filled.

| Existing page | Gap found | Added |
|---|---|---|
| `government-jobs/banking-sector-career-india` | no who-pays or scalable-route layer, no 10 percent test, no free-first preparation | "Growth beyond the pay scale" (SEBI adviser rule change from Outlook Money, Nov 2025, labelled to verify) and "Preparing without overspending" |
| `freelancing-business/consulting-as-a-career-india-how-to-get-into-consulting` | no who-pays layer, no AI section | "Who pays you" and "AI and consulting" |
| `career-in-finance-vs-accounting-india` | no positioning in the short version, no who-pays layer, no 10 percent test | positioning bullet, "Who pays you and what scales", "Learning it cheaply and the 10 percent test" (ICAI FAQ facts) |
