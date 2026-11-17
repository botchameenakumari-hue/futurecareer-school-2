# Keywords chosen to survive AI Overviews, 16 November 2026

This list replaces the informational plan in `KEYWORD_BATCHES_2026-11-15.md` (salary comparisons, "X vs Y", "best courses" and similar). Those queries have an answer that fits in a paragraph, so Google answers them itself. Your own Search Console export shows it: the 17 pages built from that plan have shown for these queries and received 0 clicks so far.

## The evidence (Search Console export, tab `FCS - Queries - 7/8/26`)

| Query type | Queries | Clicks | Impressions | CTR |
|---|---|---|---|---|
| Contains test, quiz, selector, calculator, assessment, finder, checker | 330 | 160 | 4,706 | 3.4% |
| Everything else | 669 | 21 | 4,571 | 0.5% |

160 of the site's 181 clicks come from queries where the searcher has to take a test. Examples: "aptitude test for career after 10th" (27 clicks), "stream selector test after 10th free" (23 clicks), "free aptitude test for career after 12th" (15 clicks).

Query types that get no clicks despite impressions: "humanities jobs list and salary" (48 impressions), "diploma courses after 12th" (85), "skills for commerce students" (43), "cuet vs jee" (31), "future career" (174).

Caveat: no tool here can read live search results, so "zero AI Overview risk" is a judgement from query type plus your click data, not a guarantee. KD and volume come from the sheets' provider export (India volumes are small; treat them as a ranking of demand, not a forecast).

## What is selected

### Tier 1: self-assessment tests (new pages, building now)

Each is a full bundle on the existing test system (`src/config/skillTests/`): scored result, 30-day plan, PDF report, FAQ.

| Page (slug under /services/assessments/) | Keywords it targets (volume, KD) |
|---|---|
| writing-skills-assessment-test | writing skills assessment test (210, 17); writing skills assessment (30, 0) |
| employability-skills-assessment-test | employability skills assessment test (110, 18); workplace, employee and competency skills assessment (30 each); skills test for employment (30) |
| analytical-and-critical-thinking-skills-assessment | analytical skills assessment (20); analytical skills assessment test (20); thinking skills assessment (30) |
| presentation-skills-assessment | presentation skills assessment (30); speaking skills assessment checklist (30) |
| skill-gap-assessment | skill gap assessment (30); career skills assessment, career skills test (20 each); skills test to determine career (30) |
| business-skills-quiz-for-college-students | business quiz for college students (90, 0); business skills quiz (40); business quiz for BBA, MBA, commerce, management students (20 each) |
| computer-skills-self-assessment-test | free basic computer skills assessment test (30); free excel skills assessment test (30); data analyst skills assessment (30) |

### Tier 2: download and form intent (next)

A file or form cannot be handed over by an AI summary. Each needs a real downloadable asset on the page.

| Asset | Keywords (volume, KD) | Note |
|---|---|---|
| Career counselling form (free download plus online form) | career counselling form (170, 17); IT career counselling form (140, 10) | new page |
| Student mentoring form and report format | student mentoring form (170, 12); student mentoring report format (30) | new page |
| Career guidance after 12th, PDF | career guidance after 12th pdf free download (260, 10); career guidance after 12th pdf (110, 10) | new page, STEP 0 check against existing guidance pages |
| Career guidance after 10th, PDF | career guidance after 10th pdf free download (140, 11) | new page |
| Career charts as downloads | career chart after 12th science pdf (140, 6); commerce pdf (110, 6); after 10th pdf download (110, 8); career guidance chart pdf (140, 9) | add a real PDF download to the three existing chart pages instead of new pages |
| Life skills workbook (PDF) | life skills pdf (170, 28); life skills pdf notes (140, 8); life skills questions and answers pdf (170, 10); importance of life skills pdf (110, 12) | one page tied to the life skills self-assessment |
| Career guidance questionnaire (PDF) | career counselling questionnaire for students pdf (30); career guidance questionnaire for students (30); student career interest survey pdf (30) | one page |

### Tier 3: local and service intent (kickoff BOFU pages, after Tier 2)

Someone searching "near me" or a city wants a provider, not a paragraph.

| Keyword (volume, KD) | Note |
|---|---|
| career guidance near me (1,000, 14) | online-first service, say so plainly |
| career guidance counselor near me (260, 20) | |
| career guidance in trivandrum (260, 15) | strict STEP 0: "guidance" differs from the existing "counselling" city page |
| career guidance in chennai (210, 12); hyderabad (140, 15); coimbatore (140, 10); bangalore (110, 16) | same |
| best career counselling in bangalore (210, 16) | |
| free career counselling in delhi (110, 23); mumbai (110, 5) | |
| career counselling after 10th near me (140, 17) | |

### Dropped from the earlier plan

All "salary vs salary", "X vs Y", "is X a good career", "scope of X", "best courses" and "jobs list" keywords. They may stay as supporting pages, but they are not where clicks come from.

## Not selected, with the reason

- Brand and visa terms in the same tab (ACS, VETASSESS, LinkedIn assessment, Engineers Australia): not our audience and no way to rank.
- "career test / aptitude test / quiz for students" and the "choose your career quiz" family: the site already has the pages (`career-test-online`, `career-aptitude-test-online`, the 10th and 12th tests). The data shows they get impressions but few clicks, so the work there is page-one ranking, not new pages.
- Calculators: the sheets contain almost none. Candidate calculators will need a volume check outside the sheets before building.

## Build status (16 November 2026)

Tier 1, built and live on main: all seven tests (commit `67a9ee412a`).

Tier 2, built and live on main (commit `e4a81540e0`):
- `/tools/career-counselling-form/` (career counselling form, IT career counselling form, career counselling report sample, invitation letter for career counselling)
- `/tools/student-mentoring-form-and-report/` (student mentoring form, student mentoring report format, career guidance feedback form)
- `/tools/life-skills-workbook-pdf/` (life skills pdf family). The WHO ten-skill list was verified through the CBSE note; the WHO record itself could not be opened from the build environment, so open it once and confirm the title and number.

Known limit on the three tools: the PDF font cannot draw Telugu, Hindi or other non-Latin scripts. The pages say so and point to Print then Save as PDF.

Still to build: career guidance after 12th and 10th PDF pages, real PDF downloads on the three career chart pages, the career guidance questionnaire PDF, then the Tier 3 local pages.


## Improvement pass (17 November 2026)

Applied to the 17 informational pages:
- Blog descriptions in `blog.ts` now match the page descriptions (three had drifted).
- Reading times corrected to about 220 words a minute (several were half the real length).
- Scalability tags added for the two pages that fell back to a generic rating.
- Every page now carries a "Try it now" link to a matching free test or tool, so a reader has something to click through to. These pages were getting almost no clicks; the test and tool pages are where the evidence says clicks come from.
- The PCM career options page had a section with the same title as the coding vs PCM page. It is renamed and now links to the full page, so the two no longer compete for one query.

Applied to the 7 tests (three independent reviewers, then browser runs on phone width):
- Scenario answers rewritten so the best option is no longer the longest or always in the same slot (it was the longest in 13 of 13 in two tests).
- Overlap between tests removed (employability vs computer skills, writing vs communication, analytical vs decision making), and copied FAQ boilerplate rewritten.
- Helpline and fraud-report facts checked against official or news sources on 17 November 2026. The cybercrime portal address rests on a secondary source because the official page could not be opened.
- The business quiz now says its rupee amounts are made-up teaching numbers.
- Career lists carry Scalable, needs a business layer or Not so scalable, with the risk shown.
- Report focus skill and portfolio audience added for all 7, so the report no longer defaults to "proof of work" for every stage.

Applied to the 3 tools:
- Telugu and Hindi now print correctly in the PDFs. The browser draws those lines as images, because the PDF library cannot shape those scripts. The text in those lines cannot be selected or copied, and the pages say so.
- Contrast, button fonts, form-field labels and print layout fixed; a "where to start" line added to the life skills workbook.
- WHO life skills citation corrected to the document number and the WHO wording of the definition. The IRIS link could not be opened from here, so please click it once.

Sitewide fixes found on the way:
- The business and growth note sat under the fixed menu on about 30 pages (blog home, services home, tools). It now has the right top margin.
- On phones, the small "Privacy choices" pill covered the Next button on long test questions. It is hidden while a question is on screen.
- The privacy pill no longer prints.
- A double full stop in test result text is gone.

Left as is, on purpose: FAQ answers on test pages stay collapsed like the 17 older tests; the "where to focus first" line still shows at a 100 percent score.

## Decisions for you

1. **Local "near me" pages (Tier 3).** The business is online-first and based in Visakhapatnam. Pages for Bangalore, Chennai, Hyderabad, Delhi or Mumbai would claim a local presence that does not exist. Recommended: build only Visakhapatnam, Vizag and online-for-that-city pages, and skip "near me" pages for cities you do not serve. Tell me if you do serve other cities.
2. **Image register.** The strict image audit fails for the new pages until they are added to your Round 9 needs register, which was not available to me. Send that file, or tell me to give the new pages default images.
3. **Telugu and Hindi PDFs.** The PDF font cannot draw those scripts, so the pages point to Print, then Save as PDF. Say if you want a font bundled; it adds page weight.
4. **Informational pages.** Keep the 17 as supporting pages (now with test links), or stop writing more of that kind. Recommended: keep, write no more.
5. **Build order for what remains.** Recommended: career guidance after 12th and 10th PDF pages, then real downloads on the three career chart pages, then the questionnaire PDF.
6. **Figures to re-check.** Several pay and rule figures rest on secondary sources (listed in the page source notes). The WHO life skills record should be opened once to confirm the citation.
7. **Zero AI Overview risk is a judgement.** I cannot read live search results, so check Search Console in four to six weeks before building more.
