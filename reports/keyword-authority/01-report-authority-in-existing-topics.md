# Report 1: Building authority in the topics FutureCareerSchool already targets

*Prepared 2026-10-14 on branch `main`. Sources: Google Sheets "keywords 2026 -1" (21 tabs) and "Keywords 2026-2" (14 tabs), the Search Console export in tab "FCS - Queries - 7/8/26", and the site source (`src/pages`, `src/config`). Companion: [Report 2](02-report-authority-in-uncovered-topics.md). Raw lists: [appendix/](appendix/).*

## 1. Bottom line

1. **The site writes one dominant pattern, and the sheets confirm it is the right one.** 258 of 678 static pages are "career options / career after X / is X a good career" pages; the sheets' biggest real demand is that same pattern ("career options in commerce" 18,100, "pcb career options" 9,900, "career options after 12th" 8,100).
2. **Search Console says authority is currently built on the assessments, not the blog.** 160 of the 181 clicks in the export (88%) come from stream-selector, aptitude and other test queries. The other 4,428 impressions (informational and service queries) produced 21 clicks. The next step is therefore *fix and deepen what already gets impressions* before opening new fronts (Section 5).
3. **Real gaps are sibling gaps.** The cleanest wins are pages whose siblings already exist: `career-options-in-science` (siblings: commerce, arts), `pcm-career-options-with-salary` (sibling: PCB with salary), `career-options-after-btech`, `career-options-after-neet`, and a title fix so BCom, arts and BiPC are owned by the pages that already exist. Section 4.
4. **Several "gaps" the raw sheets suggest are not gaps.** Assessment phrasings (335 variants) are already consolidated into 29 generated pages; cities with real demand are all built; "career options after 12th arts" and "BiPC career options" are wording mismatches on existing pages. During verification, a dozen first-draft "new page" ideas were downgraded to on-page edits because the site already has the content (for example secured vs unsecured education loans, nursing abroad, fashion, microbiology, biomedical engineering). Section 6 lists what not to build and why.
5. **The keyword sheets under-report the site's own long tail.** The strongest new-page evidence (MPT salary, diploma trades, nursing abroad, education-loan type, CMA vs CFA) comes from Search Console, not from the sheets, because the sheets were seeded on "career options / counselling / guidance / skills" only.
6. **Volume numbers need a filter.** 71,578 of 100,387 unique keywords (71%) show zero volume, 18,819 are brand/institute/old-year/junk, and 20 of the 416 keywords at 500+ volume are one-month spikes. Section 3.
7. **Recommended build: 9 new pages first (P1), 8 more (P2), 6 held (P3), plus 26 on-page fixes to existing pages (EXPAND/RETITLE).** Order in Section 7.

## 2. What the site is actually writing

### 2.1 Page inventory

The reference tree is `origin/main` at commit 1a1fda4 (2026-10-14), which has 694 route files. After removing templates, dashboards and design demos, that is **678 static content pages** plus **29 canonical assessment pages generated from `src/config/assessmentPages.ts`** (335 source phrasings collapsed into 29 pages with 306 redirects). Full list: `appendix/A1-site-page-inventory.csv`.

| Section | Pages | What it targets |
|---|---:|---|
| blog/career-options | 208 | Career options by stream/degree, "is X a good career", "career after X", persona lists |
| services: counselling and guidance | 120 | Commercial pages: counselling/coaching/guidance variants and audiences |
| services: city and locality pages | 50 | "career counselling in <city>" |
| career-resources | 43 | Roadmaps, skills, salary/negotiation, AI-proofing |
| blog/college-degrees | 36 | Courses for X students, MBA, college comparisons |
| services/assessments (static, incl. 18 self-assessments) + 29 generated | 73 | Aptitude, psychometric, stream-selector, personality tests; skills, stress, readiness self-assessments |
| tools (calculators, finders, planners) | 25 | Course finders (BiPC, MPC/PCM, commerce without maths), career-change runway, education cost payback, resume skills evidence, student business-idea feasibility |
| datasets and research | 9 | Published 2026 datasets (career routes, course eligibility, assessment methodology, skill evidence) and the data policy |
| blog/ai-future, career-guidance, study-abroad, government-jobs, career-change, skills, freelancing-business | 103 | Decision and comparison pages |
| blog: all other categories | 37 | Medical, parents, job search, skill roadmaps, resume, interviews, LinkedIn, portfolio, stream selection |

### 2.2 Keyword pattern types the site writes (by URL slug)

| Pattern | Pages | Example |
|---|---:|---|
| career options / careers list | 131 | `career-options-in-commerce` |
| other | 108 | `mixed: AI-future, job-search, resume, tools` |
| is X a good career | 68 | `is-civil-engineering-a-good-career-in-india` |
| career after X | 59 | `career-after-bsc-computer-science` |
| city location page | 50 | `career-counselling-in-pune` |
| counselling/guidance service | 47 | `career-counselling-session` |
| counselling/coaching for [audience] | 46 | `career-counselling-for-freshers` |
| assessment / test | 44 | `stream-selector-test-after-10th` |
| X vs Y comparison | 41 | `ssc-vs-bank-exams-which-to-prepare-india` |
| how-to | 25 | `how-to-become-a-data-scientist-india` |
| roadmap | 16 | `web-development-career-roadmap` |
| career path | 16 | `data-science-career-path-and-opportunities` |
| best/top/compare (commercial) | 11 | `best-career-counsellor` |
| courses for X | 11 | `courses-for-commerce-students-after-12th` |
| what/why/should (question) | 5 | `what-career-should-i-choose` |

Reading: the site is a **list-and-decide** publisher (options, verdicts, comparisons) with a **commercial service layer** (counselling, coaching, locations) on top. It does not yet write **salary, hierarchy, eligibility/definition, exam-explainer or process** pages, which is where its own Search Console long tail is asking for answers (Section 5).

### 2.3 Structural findings that affect keyword work

- **Seven of 25 blog categories have no posts**: `internships`, `salary-growth`, `negotiation`, `assessments`, `mental-models`, `productivity-learning`, `industry-guides` (defined in `src/config/blog.ts`). `salary-growth` is where the Search Console salary long tail belongs (cluster F). `career-options` holds 208 of 384 posts (54%).
- **`BLOG_CATEGORIES` defines the slug `career-change` twice** (lines 37 and 336 of `src/config/blog.ts`). `getStaticPaths` in `src/pages/blog/[category]/index.astro` maps over the array, so the duplicate may emit two static paths for one URL. Not changed here; worth a developer check.
- **City pages are saturated.** Every city with 100+ monthly searches for "career counselling/guidance in <city>" is built, including Thrissur (170), Kochi and Kozhikode; the next-best uncovered places are Faridabad (90) and Indore (30). The site has 50 city and locality pages, including Dadar, Chembur, Kandivali, Paschim Vihar and Pitampura where the sheets show 30 or less. Do not add more; if any are reviewed, apply the 30%-unique-content rule in `DOORWAY_PREVENTION_GUIDE.md`.
- **Assessment phrasing is saturated.** 335 phrasings were already folded into 29 canonical pages, and 18 skills, stress and readiness self-assessments (communication, soft skills, life skills, leadership, time management, burnout and others) now sit beside them. The remaining issue is wording alignment and CTR (Section 5), not page count.

- **Recent pages the data may predate.** `career-chart-after-10th` (with five stream PDFs), the Thrissur, Kochi and Kozhikode pages, `confused-about-career-after-10th-test`, 25 tools and 7 dataset pages are in `origin/main` but not in older checkouts of this repository. The sheets and the 7/8/26 Search Console export may predate them. Each was checked before any recommendation below was written; refresh the Search Console export before judging results.

## 3. How far to trust the sheets

- 109,202 rows across 34 keyword tabs (35 including Search Console) = **100,387 unique keywords**. **71,578 (71%) have zero volume.** Only 416 keywords reach 500+.
- 18,819 unique keywords (18%) were set aside as noise before analysis: company and institute names, other countries, language-specific queries, document types (pdf/ppt/essay), astrology, and 2020-2023 year-stamped terms. Rules are in `appendix/A6-noise-and-anomaly-log.csv`.
- **20 of the 416 keywords at 500+ are one-month spikes** (more than half the 12-month demand in one month). Examples: "which factor is important while choosing a career" 2,400, "career guidance group" 2,900, "i am confused about my career after 10th" 1,900, "life skills exam preparation" 1,900 (exam-season question strings). Treat these as unproven; the item tables below flag them.
- **Head terms can be wrong in both directions.** 74,000 for "deloitte career opportunities" and 12,100 for "career institute of medical sciences and hospital" are brand/institute searches. Meanwhile entire real topics sit at 20-30 per phrasing across dozens of phrasings (disability careers: over 100 phrasings; "why did you choose X as a career": about 400). Report 2 is built on the second case.
- **The two documents were seeded differently.** Doc 1 is built on "career options / counselling / guidance / opportunities / after / for-students" and subject tabs; doc 2 on "mentor / skills / life skills / courses / business / laptop". Anything outside those seeds (salary, MPT, diploma trades, CMA vs CFA, education loans) is invisible in the sheets and visible only in Search Console.

Flags used in the item tables: **SPIKE** = more than half of the 12-month demand falls in one month; **DEAD** = under 10% of demand in the last four months; **NEW** = under 10% of demand before the last four months.

| Tab (A = doc "keywords 2026 -1", B = doc "Keywords 2026-2") | Rows | % zero-volume | Top keyword | Fit for this site |
|---|---:|---:|---|---|
| A/10th | 930 | 68% | career options after 10th (5,400) | CORE |
| A/BSc | 1,137 | 72% | bsc career options (880) | CORE |
| A/Biotechnology | 521 | 75% | biotechnology career (1,900) | CORE - already 12+ pages |
| A/Business | 2,800 | 81% | career essentials in business analysis by microsoft (590) | LOW - mostly company-careers pages (noise) |
| A/Career_Advice | 996 | 83% | career advice (12,100) | LOW - generic head term; one-month spikes |
| A/Career_After | 1,593 | 70% | career after 12th (1,600) | CORE |
| A/Career_Counselling | 4,437 | 78% | career counselling (22,200) | CORE (service pages) |
| A/Career_Guidance | 3,890 | 78% | career guidance (6,600) | CORE (service pages) |
| A/Career_Opportunities | 2,000 | 19% | deloitte career opportunities (74,000) | Mixed - head term 74,000 is a brand (Deloitte); real demand is "career opportunities after/in X" |
| A/Career_Options | 10,001 | 70% | career options in commerce (18,100) | CORE - the site's main pattern (career options after/in/for X) |
| A/Choose | 2,381 | 75% | which factor is important while choosing a career (2,400) | CORE (decision pages) - exam-question spikes inflate head terms |
| A/Coach_coaching | 2,316 | 78% | career coach (1,600) | LOW - coaching institutes/sports coaches (noise); real: career coach |
| A/Design | 3,304 | 83% | career opportunities in fashion designing (880) | MIXED - is-X-good + fashion; rest company pages |
| A/Engineering | 10,000 | 79% | is mechanical engineering a good career (1,300) | MIXED - 78% zero-volume; many company "careers" pages |
| A/Good | 4,317 | 64% | good luck wishes for future career (1,600) | CORE (is X a good career) - head terms include noise |
| A/Graduation | 2,254 | 83% | careers for mba graduates (880) | CORE |
| A/MBA | 2,600 | 86% | mba career options (1,000) | CORE |
| A/PCB | 167 | 70% | pcb career options (9,900) | CORE |
| A/Science | 5,000 | 75% | career institute of medical sciences and hospital (12,100) | MIXED - 12,100 head term is an institute (noise) |
| A/Student | 4,295 | 79% | pcb student career options (2,400) | CORE |
| B/Business | 1,800 | 71% | 12 unique business ideas for students (1,300) | ADJACENT - business ideas for students |
| B/Business_Mentor | 511 | 80% | mentor a siemens business (480) | LOW - tiny volumes, mostly brands/overseas |
| B/Business_Skills | 3,145 | 76% | business analyst skills (4,400) | MIXED - business analyst skills is real; rest generic |
| B/Courses | 9,262 | 75% | best courses for commerce students (1,900) | CORE - courses for X students |
| B/Developer_mentor | 175 | 84% | business development mentor (30) | LOW |
| B/Entrepreneur_Mentor | 59 | 93% | entrepreneur mentor (20) | LOW |
| B/Fresher_Skills | 950 | 84% | skills for resume for freshers (3,600) | CORE - resume skills for freshers |
| B/Laptop_For_Students | 2,790 | 69% | best laptops for students (60,500) | OFF-TOPIC - consumer laptops |
| B/Life_Skills | 8,400 | 79% | life skills (14,800) | LOW FIT - school/NCERT/WHO life-skills intent |
| B/Mentor_online | 478 | 85% | mentoring minds online answer key (210) | LOW |
| B/Skill_Assessment | 3,300 | 75% | skill assessment (12,100) | MIXED - head term is Australian migration + LinkedIn assessments |
| B/Skills | 880 | 87% | career based on the skills based education (22,200) | LOW - 22,200 head term is a 1-month spike |
| B/Skills_Questions | 12,000 | 38% | how to improve communication skills (9,900) | LOW-MEDIUM - soft-skill definitions, very high competition |
| B/Student_Mentor | 513 | 86% | student mentor (390) | LOW-MEDIUM - informational mentoring angle |

## 4. Gaps in the topics already targeted

Reading the tables: **Action** NEW = new URL; EXPAND = add sections/wording to an existing page; RETITLE = change title/H1 of an existing page. **Demand** is the pooled count of matching phrasings and the largest single number; **KD** is the keyword difficulty range for the top matches in the sheets. **Site check** was done by slug search over all pages, then by reading titles. Priorities: P1 = clear sibling gap or 700+ head with KD under 40; P2 = 300-700 or strategic fit; P3 = hold or fold in. Every NEW row must also pass the doorway rules (distinct decision, 30%+ unique content).


### Cluster A: Stream and class hubs

**1.01 [P1] NEW: `career-options-in-science`**  
*Career options in science: the stream decision before and after Class 10, mapped to real lanes*

- Sheets: 49 phrasings with volume (of 141 matched), largest 2,900, KD 21-64. Top: career options in science (2,900); science stream career options (2,400); science careers (1,600); science field career options (880); science side career options (590); career opportunities in science (480).
- Site check: no dedicated page.
- Home: `blog/career-options`. Link to/from: career-options-after-12th-science; career-options-in-commerce; career-options-in-arts.
- Why: Sibling parity gap: the site owns "career options in commerce" and "career options in arts" but has no "in science" page. Head terms 2,900 / 2,400 / 1,600 sit unclaimed.

**1.02 [P1] RETITLE: `career-options-after-12th-humanities (add "arts" to title/H1/first H2)`**  
*Do not create a second page. Make the existing page the owner of the "arts" wording.*

- Sheets: 23 phrasings with volume (of 44 matched), largest 2,900, KD 22-25. Top: career options after 12th arts (2,900); best career options after 12th arts (720); career after 12th arts (720); career opportunities in arts stream (480); career options after 12th arts with high salary (320); best career after 12th arts (50).
- Search Console: 13 queries, 94 impressions, 0 clicks; top: "humanities jobs list and salary" (48); "highest paying jobs for humanities students" (10); "high paying humanities jobs" (6); "high paying jobs for humanities students" (5); "humanities jobs" (5).
- Site check: existing: `career-options-after-12th-humanities`.
- Home: `blog/career-options`. Link to/from: career-options-in-arts (overview) and this page (first-year decision map) must carry clearly different jobs.
- Why: "Career options after 12th arts" (2,900) is a wording mismatch with a page called "humanities". A new page would cannibalise career-options-in-arts.

**1.05 [P3] EXPAND: `confused-about-career-after-10th-test (assessment) and career-guidance-for-confused-students (service): add "how to choose a career after 10th" wording`**  
*Origin/main already has an assessment page for this intent. A blog twin of what-to-do-after-12th-confused is optional.*

- Sheets: 8 phrasings with volume (of 24 matched), largest 1,900, KD 8-28. Top: i am confused about my career after 10th (1,900); how to choose a career after 10th (140); how to decide career after 10th (140); how to decide your career after 10th (30); how to choose career after 10th class (20); how to choose my career after 10th (20). Caution: top terms flagged as SPIKE (see Section 3).
- Search Console: 2 queries, 5 impressions, 0 clicks; top: "i am confused about my career after 10th" (3); "what should i do after 10th" (2).
- Site check: existing: `confused-about-career-after-10th-test`, `career-guidance-for-confused-students`, `what-to-do-after-12th-confused`.
- Home: `blog/career-guidance`. Link to/from: career-options-after-10th; stream-selector-test-after-10th; career-guidance-for-confused-students (service).
- Why: Head term 1,900 is a one-month spike, and the intent is now owned by the new confused-about-career-after-10th-test page. The rest of the cluster ("how to choose / decide career after 10th", 140 each) can be absorbed by wording.

**1.06 [P1] NEW: `pcm-career-options-with-salary`**  
*PCM career options with salary: ranges by route, fresher vs year-5, with the honest spread*

- Sheets: 5 phrasings with volume (of 11 matched), largest 3,600, KD 10-17. Top: pcm career options with salary (3,600); pcm career options with high salary (720); pcmb career options with salary (260); career options after 12th pcm with high salary (140); career options after 12th pcm with salary (20); best career options after 12th science pcm with highest salary (0).
- Site check: no dedicated page.
- Home: `blog/career-options`. Link to/from: pcm-career-options; pcb-career-options-with-salary (sibling).
- Why: Sibling gap: pcb-career-options-with-salary exists, PCM does not. 3,600 + 720 + 260 + 140, KD 10-17.

**1.07 [P2] NEW: `commerce-career-options-with-salary (new); arts wording added to best-paying-jobs-for-humanities-students-india (retitle)`**  
*One data-led commerce salary page (10 named roles, fresher vs year-5 range). Arts salary intent is already served by best-paying-jobs-for-humanities-students-india and the arts-and-humanities-careers-that-pay-well-today resource, so add the searcher's wording there instead of a second page.*

- Sheets: 7 phrasings with volume (of 11 matched), largest 880, KD 18-34. Top: arts career options with salary (880); commerce career options with salary (590); career options after 12th arts with high salary (320); career options in commerce with salary (210); career options after 12th commerce with high salary (170); humanities career options with salary (20).
- Site check: existing: `arts-and-humanities-careers-that-pay-well-today`, `courses-for-arts-and-humanities-students-after-12th`, `best-paying-jobs-for-humanities-students-india`.
- Home: `blog/career-options`. Link to/from: career-options-in-arts; career-options-in-commerce; best-career-options-with-high-salary.
- Why: Commerce side: 590 + 390 + 320 + 170 with salary intent and no salary-led page. Arts side: 880 "arts career options with salary" is a wording mismatch on the two existing humanities pay pages.

**1.08 [P2] RETITLE: `pcb-career-options (title/H1/first H2 carry "BiPC"); link bipc-pcb-course-finder`**  
*BiPC is the Andhra/Telangana name for the same stream. Do not build a parallel page (bio-student-career-options-after-12th-without-neet already uses BiPC 30 times); make the PCB hub own the wording.*

- Sheets: 14 phrasings with volume (of 30 matched), largest 720, KD 13-15. Top: bipc career options (720); career options for bipc students (170); career options after bipc (110); career options for bipc students after 12th (30); career options in bipc (30); what are the career options after bipc (30).
- Site check: existing: `cuet-eamcet-courses-for-pcb-bipc-biology-students`, `courses-for-pcb-bipc-biology-students-after-12th-without-neet`, `pcb-career-options`.
- Home: `blog/career-options`. Link to/from: pcb-career-options; courses-for-pcb-bipc-biology-students-after-12th-without-neet.
- Why: 720 + 170 + 110, KD 13-15. A separate BiPC page would be a vocabulary duplicate of pcb-career-options, the exact pattern the doorway guide warns against.

**1.09 [P3] EXPAND: `career-options-in-commerce (add a CEC / MEC / HEC section); decoder page in Report 2 W3`**  
*Telugu-state commerce groups*

- Sheets: 6 phrasings with volume (of 12 matched), largest 210, KD 4-7. Top: cec career options (210); mec career options (170); cec course career opportunities (30); hec career options (30); mec career opportunities (20); mec course career opportunities (20).
- Site check: existing: `career-options-in-commerce`.
- Home: `blog/career-options`. Link to/from: career-options-in-commerce; bipc-career-options.
- Why: 210 + 170 + 30, KD only 4-7. Too small for its own URL; best as a section plus the W3 decoder. MPC (170) should likewise be an H2 in pcm-career-options.

**1.10 [P1] NEW: `career-options-after-neet`**  
*After NEET: what each score band realistically opens (distinct from the existing "without NEET" pages)*

- Sheets: 6 phrasings with volume (of 12 matched), largest 390, KD 10-17. Top: career options after neet (390); neet career options (390); after neet career options (260); career options after neet exam (110); neet career guidance (30); without neet career options (30).
- Site check: no dedicated page.
- Home: `blog/career-options`. Link to/from: career-counselling-for-neet-aspirants (service); pcb-career-options-without-neet.
- Why: 390 + 390 + 260 + 110, KD 10-17, four distinct variants. Intent is post-result, which no existing page owns.

**1.11 [P2] NEW: `career-options-after-jee`**  
*After JEE Main / Advanced: score-band routes beyond a lower-branch seat*

- Sheets: 5 phrasings with volume (of 7 matched), largest 320, KD 10-11. Top: jee career options (320); career options after jee mains (170); after jee career options (140); career options after jee (50); career options after jee advanced (20); iit jee career guidance (0).
- Site check: no dedicated page.
- Home: `blog/career-options`. Link to/from: career-options-after-12th-pcm; engineering-vs-other-streams.
- Why: 320 + 170 + 140, KD 10-11.

**1.12 [P2] RETITLE: `career-options-after-12th (title/meta/H1 carry "opportunities")`**  
*"Career opportunities after 12th" is 9,900 and the same intent as options; ensure the existing hub carries the word*

- Sheets: 8 phrasings with volume (of 10 matched), largest 9,900, KD 14-37. Top: career opportunities after 12th (9,900); career opportunities after 12th science (590); career opportunities after 12th commerce (260); career opportunities after 12th arts (40); career opportunities after 12th pcm (20); career opportunities after 12th science pcm (20).
- Site check: existing: `career-options-after-12th`.
- Home: `blog/career-options`. Link to/from: -.
- Why: 9,900 head term (KD 37) and ~1,600 more in stream variants are the same searcher as "career options". Check the meta title first; a new page would split the signal.


### Cluster B: Degree and subject pages

**2.01 [P1] NEW: `career-options-after-btech`**  
*After B.Tech (any branch): job, M.Tech, MBA, GATE, abroad - decided by branch and CGPA*

- Sheets: 58 phrasings with volume (of 216 matched), largest 480, KD 12-19. Top: after b tech career options (480); b tech career options (480); career opportunities after btech (480); career options after b tech (480); career options after btech (480); career options after b tech computer science (320).
- Site check: no dedicated page.
- Home: `blog/career-options`. Link to/from: career-after-btech-other-than-software; career-after-mechanical/civil/electrical; engineering-vs-other-streams.
- Why: Five spellings at 480 each. Existing page covers only "other than software", so the parent query has no owner.

**2.02 [P2] NEW: `law-career-options (LLB, BA LLB, BBA LLB, after LLB)`**  
*One law pillar first; split only if Search Console shows the after-LLB intent separating*

- Sheets: 36 phrasings with volume (of 67 matched), largest 720, KD 10-24. Top: career options after llb (720); law career options (590); llb career options (320); career options after ba llb (210); ba llb career options (170); bba llb career options (140).
- Site check: existing: `is-law-a-good-career-in-india`, `is-lawyer-a-good-career-in-india`.
- Home: `blog/career-options`. Link to/from: is-law-a-good-career-in-india; is-lawyer-a-good-career-in-india; certificate-courses-for-law-students.
- Why: 720 + 590 + 320 + 210 + 170 + 140, KD 10-24. is-law-a-good-career-in-india already has a branch map and pay by branch, so a new page must have a different job: the post-LLB decision (judiciary, corporate, LPO, LLM/CLAT PG, UPSC) with timelines. If that cannot be made distinct, add it as sections to the existing page instead.

**2.03 [P2] RETITLE: `career-in-pharmacy-india-scope-future (title and an H2 for "career options after B.Pharm")`**  
*The page already compares D.Pharm / B.Pharm / Pharm.D and six paths; the searcher uses "b pharmacy career options" wording*

- Sheets: 14 phrasings with volume (of 44 matched), largest 720, KD 10-30. Top: b pharmacy career options (720); career options after b pharmacy (480); best career options after b pharmacy (170); career opportunities after b pharmacy (170); b pharm career opportunities (110); career for b pharm graduates (40).
- Site check: existing: `career-in-pharmacy-india-scope-future`.
- Home: `blog/medical-careers`. Link to/from: career-in-pharmacy-india-scope-future; is-pharmacy-a-good-career-in-india.
- Why: 720 + 480 + 170 + 170 + 110, KD 10-30. Existing page covers the content; the wording and the post-B.Pharm fork (M.Pharm/GPAT, MBA, pharmacovigilance, regulatory) need to be the headline.

**2.04 [P1] NEW: `physical-education-career-options`**  
*B.P.Ed / M.P.Ed / sports science: teaching, coaching, fitness, sports management, govt sports quota*

- Sheets: 44 phrasings with volume (of 79 matched), largest 1,000, KD 17-39. Top: career options in physical education (1,000); career opportunities in physical education (480); career option in physical education class 11 (210); career options in physical education class 11 (210); briefly discuss the coaching career in physical education (170); explain in detail the career option in physical education (170).
- Site check: no dedicated page.
- Home: `blog/career-options`. Link to/from: exercise-science-career-options; career-options-after-12th-humanities.
- Why: 1,000 + 480 + 210 + 210 + 170, KD 17-39. Zero dedicated pages on the site (5 body mentions only). Standard aggregator competition (SERP checked).

**2.05 [P3] EXPAND: `social-science-career-options (promote the economics track to its own H2 with the searcher's wording)`**  
*Economics is already Track 2 of the social-science page*

- Sheets: 17 phrasings with volume (of 22 matched), largest 590, KD 10-23. Top: career options in economics (590); career opportunities in economics (320); ba economics career options (170); career options after ma economics (140); career opportunities in economics in india (110); career options after ba economics (110).
- Site check: existing: `social-science-career-options`.
- Home: `blog/career-options`. Link to/from: social-science-career-options; ba-career-options.
- Why: 590 + 320 + 170 + 140 + 110. Covered as a track; build a separate page only if the section grows past a screen and the pooled phrasings do not move.

**2.06 [P2] NEW: `geography-career-options`**  
*Geography (BA/BSc/MA): GIS, remote sensing, urban planning, civil services, teaching*

- Sheets: 18 phrasings with volume (of 63 matched), largest 480, KD 17-24. Top: career opportunities in geography (480); career options in geography (390); geography honours career options (140); career options after ba geography honours (30); career options in geography in india (30); career in geography after 12th (20).
- Site check: no dedicated page.
- Home: `blog/career-options`. Link to/from: career-options-in-arts; environmental-science-career-options.
- Why: 480 + 390 + 140; KD 17-24. No dedicated page.

**2.07 [P3] RETITLE: `is-microbiology-a-good-career (add "microbiology career options" wording)`**  
*The page already has pay by sector, NET/PhD route and industry lanes (97 mentions of microbiology)*

- Sheets: 21 phrasings with volume (of 70 matched), largest 590, KD 14-30. Top: career opportunities in microbiology (590); microbiologist career options (390); microbiology career options (390); is microbiology a good career (320); career after bsc microbiology (110); career opportunities after bsc microbiology (110).
- Site check: existing: `is-microbiology-a-good-career`.
- Home: `blog/career-options`. Link to/from: is-microbiology-a-good-career; biotechnology cluster.
- Why: 590 + 390 + 390 + 110 + 110. List-of-paths intent is served inside the verdict page; wording only.

**2.08 [P2] NEW: `mathematics-career-options (BSc maths / MSc maths)`**  
*Maths graduates: actuarial, data, finance, teaching, research - with what to add on top*

- Sheets: 59 phrasings with volume (of 160 matched), largest 720, KD 18-31. Top: science maths career options (720); career opportunities in mathematics (590); mathematics career options (590); maths career options (590); after 12th maths career option (260); bsc math career option (210).
- Site check: existing: `math-and-science-careers`.
- Home: `blog/career-options`. Link to/from: math-and-science-careers; actuarial-science-careers.
- Why: 590 x3 variants + 210. math-and-science-careers is a map, not the BSc-maths decision.

**2.09 [P3] NEW: `zoology-and-botany career pages (build zoology first)`**  
*Two pages only if the fork logic differs (wildlife/biomedical vs agri/forestry/pharma botany)*

- Sheets: 50 phrasings with volume (of 125 matched), largest 390, KD 16-23. Top: career after bsc botany (390); career option in zoology (390); zoology career options (260); bsc zoology career options (210); career opportunities in botany (210); career options after bsc zoology (210).
- Site check: existing: `biology-career-options-after-12th`, `bsc-career-options`.
- Home: `blog/career-options`. Link to/from: career-after-bsc-for-pcb-students; bsc-career-options.
- Why: Zoology 390/260/210/210; botany 390/210/170/110. biology-career-options-after-12th and bsc-career-options already cover both in passing (20 and 6 mentions). Hold; the doorway guard applies if built.

**2.10 [P3] NEW: `bsc-physics / bsc-chemistry / bsc-agriculture (hold)`**  
*Hold until the first four pages show traction; merge physics+chemistry into "BSc physical sciences" if built*

- Sheets: 169 phrasings with volume (of 572 matched), largest 480, KD 13-29. Top: career opportunities in chemistry (480); agriculture career options (390); career options in physics (260); after bsc chemistry career options (210); bsc agriculture career options (210); career options after bsc agriculture (210).
- Site check: no dedicated page.
- Home: `blog/career-options`. Link to/from: bsc-career-options.
- Why: Each is 140-480 at best. Pooled demand is real (physics ~2,100 keywords-sum, chemistry ~2,600) but split across many tiny variants.

**2.11 [P1] RETITLE: `career-after-bcom-in-india (retitle/H1: "BCom career options")`**  
*Siblings are named ba/bba/bca/bsc-career-options; BCom is the odd one out*

- Sheets: 47 phrasings with volume (of 165 matched), largest 1,300, KD 15-20. Top: career options after bcom (1,300); bcom career options (1,000); best career option after b com (390); career opportunities after bcom (260); best career options after bcom (170); career options after b com (170).
- Site check: existing: `career-after-bcom-in-india`, `career-after-bcom-other-than-ca-and-mba`.
- Home: `blog/career-options`. Link to/from: career-after-bcom-other-than-ca-and-mba; bba-vs-bcom.
- Why: 1,300 + 1,000 + 390 + 260. Same searcher; retitle, do not duplicate.

**2.12 [P3] EXPAND: `mba-career-options (add an MBA-finance roles section)`**  
*mba-finance-vs-marketing-india already has CFO-track content (28 mentions)*

- Sheets: 42 phrasings with volume (of 191 matched), largest 720, KD 12-23. Top: mba finance careers (720); career after mba in finance (260); mba finance career options (170); career options after mba finance (70); career opportunities for mba finance (30); computer courses for mba finance students (30).
- Site check: existing: `mba-finance-vs-marketing-india`, `mba-career-options`.
- Home: `blog/career-options`. Link to/from: mba-career-options; mba-finance-vs-marketing-india; best-mba-specializations-india.
- Why: 720 + 260 + 170 + 70. The head-to-head page exists; add the list-of-roles section to the MBA hub rather than a third MBA-finance URL.

**2.13 [P2] NEW: `career-options-after-graduation`**  
*Hub for "after graduation" that routes to degree-specific pages*

- Sheets: 20 phrasings with volume (of 26 matched), largest 480, KD 12-16. Top: career opportunities after graduation (480); career options after graduation (480); best career options after graduation (210); career after graduation (140); career opportunities after graduation in commerce (110); list of career options after graduation (30).
- Site check: no dedicated page.
- Home: `blog/career-options`. Link to/from: how-to-plan-your-career-path-after-graduation-india; career-counselling-after-graduation (service).
- Why: 480 + 480 + 210 + 140; KD 12-15.

**2.14 [P3] NEW: `mba-marketing-career-options and mba-hr-career-options`**  
*One page per specialisation only where the job ladders differ (marketing: brand/product/sales; HR: generalist/TA/L&D/comp-ben)*

- Sheets: 22 phrasings with volume (of 139 matched), largest 30, KD -. Top: career after mba in hr (30); career after mba in marketing (30); career goals after mba (30); career after mba in human resource management (20); career in mba hr (20); career in mba marketing (20).
- Search Console: 35 queries, 265 impressions, 0 clicks; top: "mba finance marketing" (24); "which mba specialization is best for engineers?" (21); "which mba specialization is best for engineers" (20); "best mba branch for engineers" (17); "best mba specialisation for engineers" (16).
- Site check: no dedicated page.
- Home: `blog/college-degrees`. Link to/from: mba-career-options; best-mba-specializations-india; mba-finance-vs-marketing-india.
- Why: Demand shows up as many repeated phrasings rather than one big head term: "career options after mba in marketing" 15 variants, "career after mba in marketing" 10, "career after mba in hr" 8, "career options after mba in hr" 8, "career goals after mba" 12. Individually 20-30 in the tool. best-mba-specializations-india already compares specialisations, so build only if the mba-career-options hub ranks and the specialisation phrasings stay unserved.

**2.15 [P3] EXPAND: `career-options-after-ma-in-india (add MCom and MSc sections)`**  
*"career options after m com" 8 phrasings, "mcom career options" 110; "career options after msc" 110 (126 phrasings across subjects)*

- Sheets: 55 phrasings with volume (of 153 matched), largest 140, KD 13-22. Top: career options after msc physics (140); mcom career options (140); career after msc biotechnology (110); career options after mcom (110); career options after msc (110); career options after msc biotechnology (110).
- Site check: existing: `career-options-after-ma-in-india`.
- Home: `blog/career-options`. Link to/from: -.
- Why: Many small phrasings, no single page worth building; fold into the existing post-graduate page.


### Cluster C: Engineering and technical

**3.01 [P3] EXPAND: `is-biomedical-engineering-a-good-career (add "biomedical engineering careers" H2 and wording)`**  
*Page already has placements, specialisation lanes and the biomedical-vs-biotech mix-up (60 mentions)*

- Sheets: 14 phrasings with volume (of 53 matched), largest 720, KD 10-29. Top: biomedical engineering careers (720); is biomedical engineering a good career (590); biomedical engineering career salary (260); is biomedical engineering a good career in india (170); career after biomedical engineering (40); biomedical engineering career path (30).
- Site check: existing: `is-biomedical-engineering-a-good-career`.
- Home: `blog/career-options`. Link to/from: is-biomedical-engineering-a-good-career; biomedical-science-career-options.
- Why: 720 + 260 + 170. Same searcher as the existing verdict page.

**3.02 [P3] EXPAND: `job-oriented-courses-for-ece-students (add an "ECE career options" headline section)`**  
*Page already runs six ECE tracks and the GATE/ISRO/BEL route (77 mentions of ECE)*

- Sheets: 42 phrasings with volume (of 188 matched), largest 480, KD 13-20. Top: career in electronics and communication engineering (480); ece career options (170); career opportunities for electronics and communication engineers (140); career opportunities in electrical and electronics engineering (140); ece career opportunities (140); is ece a good career (110). Caution: top terms flagged as SPIKE (see Section 3).
- Site check: existing: `job-oriented-courses-for-ece-students`.
- Home: `blog/college-degrees`. Link to/from: career-guidance-after-b-tech-ece (service); job-oriented-courses-for-ece-students.
- Why: 480 + 170 + 140 + 140. Courses-first framing; the careers wording is missing.

**3.03 [P2] EXPAND: `career-after-civil/mechanical/electrical-engineering, is-aerospace/aeronautical, is-chemical (add "career options / careers" wording)`**  
*Page already exists per branch; the data shows the searcher uses "career options" and "careers" wording*

- Sheets: 76 phrasings with volume (of 304 matched), largest 590, KD 19-34. Top: career in civil engineering in india (590); chemical engineering careers (590); mechanical engineering career (590); electrical engineering careers (480); civil engineering career (320); aeronautical engineering career (260). Caution: top terms flagged as SPIKE (see Section 3).
- Site check: existing: `career-after-mechanical-engineering-in-india`, `career-after-civil-engineering-in-india`, `career-after-electrical-engineering-in-india`.
- Home: `blog/career-options`. Link to/from: -.
- Why: 590 + 480 + 590 + 260 + 210. Section/headline change, not a new URL.

**3.04 [P2] EXPAND: `how-to-become-a-data-scientist-india (add a non-tech / switcher section and the "start a career in data science" wording)`**  
*A repetition cluster: about 40 phrasings of "start / switch to / make / build a career in data science" at 20-30 each*

- Sheets: 13 phrasings with volume (of 42 matched), largest 30, KD -. Top: how to make career in data science (30); how to start a career in data science (30); build a career in data science (20); build career in data science (20); career change to data science (20); career switch to data science (20).
- Site check: existing: `how-to-become-a-data-scientist-india`.
- Home: `blog/career-options`. Link to/from: data-science-career-path-and-opportunities; is-data-science-a-good-career-in-india; upskilling-for-career-change-india.
- Why: No single big number, which is why the tool understates it; the repetition is the signal. The page exists, so add the switcher framing rather than a new URL.


### Cluster D: Business, finance and design

**4.01 [P1] NEW: `business-analyst-skills`**  
*Business analyst skills: technical vs domain vs behavioural, with a fresher proof-of-skill checklist*

- Sheets: 104 phrasings with volume (of 288 matched), largest 4,400, KD 24-39. Top: business analyst skills (4,400); skills required for business analyst (390); skills needed for business analyst (320); technical skills required for business analyst (260); what are the skills required for business analyst (260); what skills are required for business analyst (210).
- Site check: no dedicated page.
- Home: `blog/skills (or career-options)`. Link to/from: is-business-analyst-a-good-career-in-india; how-to-become-a-business-analyst-entry-level-india; business-analyst-vs-data-analyst.
- Why: 4,400 head + 390 + 320 + 260 + 260 + 210 + 140; KD 24-39. Three BA pages already exist; none owns "skills", the biggest query in the cluster. Pooled ~8,500 across 300+ variants.

**4.02 [P3] NEW: `business-analyst-career-path`**  
*Role ladder: associate BA to product owner to head of business, with typical years and titles*

- Sheets: 12 phrasings with volume (of 28 matched), largest 390, KD 38. Top: business analyst career path (390); business analyst career path diagram (30); business analyst career path in india (30); business analyst career path reddit (30); it business analyst career path (30); business analyst career growth (20).
- Site check: existing: `is-business-analyst-a-good-career-in-india`.
- Home: `blog/career-options`. Link to/from: business-analyst skills page; product-manager-skills-roadmap-india.
- Why: 390 (13 variants) plus ladder wording. is-business-analyst-a-good-career-in-india already has a BA-to-PM progression section; build only after 4.01 ranks.

**4.03 [P2] EXPAND: `ca-vs-cma-vs-cfa-india-which-is-better (add a head-to-head CMA vs CFA section and matching H2s)`**  
*Search Console shows 79 impressions / 0 clicks on two-way phrasing ("cma vs cfa", "cfa or cma", "cfa vs cma salary")*

- Sheets: no usable match (topic is outside the sheets' seed words).
- Search Console: 15 queries, 79 impressions, 0 clicks; top: "cma vs cfa" (9); "cma or cfa" (8); "cma or cfa which is better" (7); "cma cfa" (7); "ca vs cma vs cfa" (6).
- Site check: existing: `ca-vs-cma-vs-cfa-india-which-is-better`.
- Home: `blog/career-options`. Link to/from: -.
- Why: Evidence is Search Console, not the keyword sheets (sheets have no CMA/CFA seed). Fix on page first; spin out a page only if clicks stay at zero after the section is added.

**4.04 [P3] EXPAND: `is-fashion-designing-a-good-career-in-india (add "fashion designing career options" H2)`**  
*Page already covers design vs merchandising vs styling, NIFT/NID, pay by track (171 mentions of fashion)*

- Sheets: 87 phrasings with volume (of 317 matched), largest 880, KD 10-27. Top: career opportunities in fashion designing (880); is fashion designing a good career (720); fashion designer career (590); is fashion designing a good career in india (260); career options in fashion designing (170); career option in fashion designing (140).
- Site check: existing: `is-fashion-designing-a-good-career-in-india`.
- Home: `blog/career-options`. Link to/from: is-fashion-designing-a-good-career-in-india; graphic-design-career-roadmap.
- Why: 880 + 590 + 170 + 140 + 110. Same searcher as the verdict page.

**4.05 [P3] EXPAND: `is-interior-design-..., how-to-become-an-animator-india (add "career options" wording)`**  
*Interior design career 480 (12 variants), animation career options 170: add wording, no new URL*

- Sheets: 24 phrasings with volume (of 74 matched), largest 480, KD 10-25. Top: interior design career (480); career options in animation industry (170); career options in animation (30); gauri khan interior design career (30); interior design career in india (30); interior design career path (30).
- Site check: existing: `how-to-become-an-animator-india`, `is-interior-design-a-good-career-in-india`.
- Home: `blog/career-options`. Link to/from: -.
- Why: Both topics already have a page that can absorb the list-intent queries.


### Cluster E: Courses for [students]

**5.01 [P1] NEW: `professional-courses-for-commerce-students`**  
*CA, CS, CMA, ACCA, CFA, FRM, CPA: entry rules, cost, time, who should skip*

- Sheets: 45 phrasings with volume (of 106 matched), largest 1,000, KD 10-39. Top: professional courses for commerce students (1,000); diploma courses for commerce students (320); certificate courses for commerce students (210); ug courses for commerce students (210); pg courses for commerce students (170); short term courses for bcom students (170).
- Site check: no dedicated page.
- Home: `blog/college-degrees`. Link to/from: courses-for-commerce-students-after-12th; certificate-courses-for-bcom-students; ca-vs-cma-vs-cfa.
- Why: 1,000 + 320 + 260 + 210 + 210 + 140, KD 10-33. The general page exists; the professional-qualification page does not.

**5.02 [P1] NEW: `bsc-courses-after-12th-pcb-bipc`**  
*Which BSc after PCB/BiPC: biotech, microbiology, nursing, zoology, forensic, agriculture, food - ranked by outcome*

- Sheets: 23 phrasings with volume (of 49 matched), largest 880, KD 15-23. Top: which bsc course is best for biology students (880); bsc courses for pcb students (390); bsc courses for bipc students (260); best bsc courses for pcb students (210); bsc courses list for biology students (210); b sc courses for biology students (140).
- Site check: no dedicated page.
- Home: `blog/college-degrees`. Link to/from: courses-for-pcb-bipc-biology-students-after-12th-without-neet; career-after-bsc-for-pcb-students.
- Why: 880 + 390 + 260 + 210 + 210 + 140, KD 15-23. Existing course pages are about the NEET/CUET route, not the BSc choice.

**5.03 [P1] EXPAND: `best-diploma-courses-after-12th (+ new trade-selection page, see 5.04)`**  
*Search Console: 55 diploma queries, 403 impressions, 4 clicks. Add science/arts/commerce sections, "does diploma need 12th pass", "diploma vs 12th", lateral entry*

- Sheets: 51 phrasings with volume (of 425 matched), largest 320, KD 14-23. Top: diploma courses for commerce students (320); diploma courses for law students (140); career options after diploma (110); diploma courses for 12th failed students (70); diploma courses for 10th pass students (40); diploma courses for science students (40). Caution: top terms flagged as SPIKE (see Section 3).
- Search Console: 55 queries, 403 impressions, 4 clicks; top: "diploma courses after 12th" (85); "best diploma courses after 12th" (54); "diploma best trade" (39); "best diploma courses after 12th fail" (23); "which trade is best in diploma" (13).
- Site check: existing: `best-diploma-courses-after-12th`.
- Home: `blog/college-degrees`. Link to/from: -.
- Why: Largest non-test impression pool in the export (403 impressions, 4 clicks). The page already has a polytechnic section, stream fit, diploma-vs-degree and salary sections, so the real gaps are narrower: diploma after 10th (polytechnic entry), trade-by-trade comparison, lateral entry to B.Tech, and "does diploma need 12th pass" equivalence.

**5.04 [P2] NEW: `polytechnic-diploma-after-10th-which-trade-to-choose`**  
*Diploma after 10th: polytechnic entry rules by state, trades compared (mechanical, civil, electrical, computer, electronics, chemical, automobile), lateral entry to B.Tech, and equivalence*

- Sheets: no usable match (topic is outside the sheets' seed words).
- Search Console: 7 queries, 64 impressions, 1 clicks; top: "diploma best trade" (39); "which trade is best in diploma" (13); "which diploma branch is best for future" (4); "diploma trades" (3); "best trade in polytechnic diploma" (2).
- Site check: existing: `best-diploma-courses-after-12th`.
- Home: `blog/college-degrees`. Link to/from: best-diploma-courses-after-12th; engineering-vs-other-streams.
- Why: Evidence is Search Console ("which trade is best in diploma", "diploma best trade", "diploma trades", "how many trade in diploma", "best trade in polytechnic"). Sheets barely contain it.

**5.05 [P3] NEW: `iti-career-options and polytechnic-career-options`**  
*Vocational ladder after 10th: ITI trades, apprenticeship, lateral entry to diploma*

- Sheets: 6 phrasings with volume (of 46 matched), largest 260, KD 10-14. Top: iti career options (260); polytechnic career options (140); career options after iti (30); iti courses for 10th fail students (20); iti courses for commerce students (20); polytechnic career opportunities (10).
- Site check: existing: `career-options-after-10th`, `career-chart-after-10th`.
- Home: `blog/college-degrees`. Link to/from: career-options-after-10th; best-diploma-courses-after-12th.
- Why: ITI 260 + polytechnic 140 + "career options after iti" 30. ITI is already covered 40 times in career-options-after-10th and 19 times in career-chart-after-10th (which also ships an ITI/diploma PDF). Hold.


### Cluster F: Salary and earnings (the empty salary-growth category)

**6.01 [P1] EXPAND: `physiotherapy-career-scope-salary-india (add "MPT salary by specialisation and setting" section + FAQ in the searchers' wording)`**  
*The page has BPT/MPT structure, four tracks and a salary ladder, but not MPT salary by specialty, setting or city; spin out "mpt-salary-india" only if impressions stay at zero clicks after the section is live*

- Sheets: no usable match (topic is outside the sheets' seed words).
- Search Console: 37 queries, 184 impressions, 0 clicks; top: "mpt neurology salary in india per month" (14); "mpt salary per month in government hospital" (13); "mpt salary per month in private hospital" (12); "mpt salary" (12); "mpt ortho salary per month" (10).
- Site check: existing: `is-physiotherapy-a-good-career-in-india`, `physiotherapy-career-scope-salary-india`.
- Home: `blog/medical-careers`. Link to/from: physiotherapy-career-scope-salary-india; is-physiotherapy-a-good-career-in-india.
- Why: Search Console (counts above): every query is a salary phrasing ("mpt ortho salary per month", "mpt cardiopulmonary salary", "mpt sports salary", "salary after mpt"). Sheets have no MPT seed, so this is invisible in the keyword tool. SERP is college marketing pages and forums.

**6.02 [P3] EXPAND: `career-after-bsc-nursing-india-scope (the "Nursing abroad: Gulf, UK, and US routes" section: add exam steps and the searchers' phrasing)`**  
*The page already has a nursing-abroad H2*

- Sheets: no usable match (topic is outside the sheets' seed words).
- Search Console: 5 queries, 35 impressions, 0 clicks; top: "bsc nursing scope in abroad" (18); "how to go abroad after bsc nursing for job" (8); "how to go abroad after bsc nursing in india" (4); "can i go abroad after bsc nursing" (3); "scope of bsc nursing in abroad" (2).
- Site check: existing: `career-after-bsc-nursing-india-scope`.
- Home: `blog/medical-careers`. Link to/from: career-after-bsc-nursing-india-scope; nri-return.
- Why: Search Console: "how to go abroad after bsc nursing", "scope of bsc nursing in abroad". A section exists, so this is a wording and FAQ fix; spin out only if the section outgrows the page.

**6.03 [P2] EXPAND: `content-creator-income-india (add per-platform earnings bands + the Search Console phrasings)`**  
*11 queries, 76 impressions, 1 click: "how much does a content creator earn in india"*

- Sheets: no usable match (topic is outside the sheets' seed words).
- Search Console: 11 queries, 76 impressions, 1 clicks; top: "how much does content creator earn in india" (13); "how much content creators earn in india" (12); "how much a content creator earn" (11); "how much does a content creator earn in india" (11); "how much a content creator earn in india" (6).
- Site check: existing: `content-creator-income-india`.
- Home: `blog/freelancing-business`. Link to/from: creator-economy-india-career-opportunities.
- Why: Page exists. Add the literal question as H1/H2 and an earnings-by-stage table.

**6.04 [P2] EXPAND: `medical-coding-career-india / is-medical-coding-a-good-career (salary + CPC phrasing)`**  
*Search Console: "medical coding starting salary in india", "after cpc certification salary", "salary of medical coder", "cpc salary in india"*

- Sheets: 6 phrasings with volume (of 15 matched), largest 480, KD 6-25. Top: is medical coding a good career (480); is medical coding a good career in india (140); medical coding career opportunities (90); why did you choose medical coding as a career (30); is medical coding a good career choice (20); why is medical coding a good career (20). Caution: top terms flagged as DEAD (see Section 3).
- Search Console: 8 queries, 52 impressions, 0 clicks; top: "india medical coding market" (13); "medical coding after bsc nursing salary" (11); "after cpc certification salary in india" (11); "medical coding starting salary in india" (6); "salary of medical coder in india" (3).
- Site check: existing: `is-medical-coding-a-good-career-in-india`, `medical-coding-career-india`.
- Home: `blog/medical-careers`. Link to/from: -.
- Why: Pages exist; the salary-specific headings are missing.

**6.05 [P2] NEW: `salary-by-degree: which degree has the highest salary in India`**  
*Honest, sourced comparison across degrees with ranges, not a ranking of single figures*

- Sheets: no usable match (topic is outside the sheets' seed words).
- Search Console: 2 queries, 14 impressions, 0 clicks; top: "which degree grows your salary the fastest" (9); "which degree has highest salary in india" (5).
- Site check: no dedicated page.
- Home: `blog/salary-growth (currently empty)`. Link to/from: mba-salary-growth-over-time-india; best-career-options-with-high-salary.
- Why: Search Console: "which degree has highest salary in india", "which degree grows your salary the fastest". Seeds the empty salary-growth category.

**6.06 [P2] EXPAND: `education-loan-worth-it-india-private-college (add a "secured vs unsecured education loan in India" H2)`**  
*education-loan-for-study-abroad-india already has this section and FAQ for abroad; the Search Console query is the generic India one*

- Sheets: no usable match (topic is outside the sheets' seed words).
- Search Console: 2 queries, 27 impressions, 0 clicks; top: "education loan is secured or unsecured" (23); "unsecured education loan for abroad" (4).
- Site check: existing: `education-loan-worth-it-india-private-college`, `education-loan-for-study-abroad-india`.
- Home: `blog/college-degrees`. Link to/from: education-loan-for-study-abroad-india; education-loan-worth-it-india-private-college.
- Why: Search Console: "education loan is secured or unsecured" (largest non-test long-tail query in this group). The abroad page answers it for study abroad; the domestic page has only two passing mentions of secured loans and no section on it.


### Cluster G: Resume, skills and student business

**7.01 [P1] NEW: `skills-for-resume-for-freshers`**  
*What to list, how to word it, by background (BCom, BTech CSE, MBA, arts), with before/after lines*

- Sheets: 410 phrasings with volume (of 632 matched), largest 3,600, KD 28-32. Top: skills for resume for freshers (3,600); skills in resume for freshers (3,600); resume skills for freshers (880); what to write in skills in resume (880); soft skills for resume for freshers (720); technical skills in resume for freshers (720).
- Site check: no dedicated page.
- Home: `blog/resume`. Link to/from: resume-tips-for-freshers-india; good-career-objective-for-resume; best-skills-for-commerce-students-to-learn.
- Why: 3,600 + 3,600 + 1,000 + 880 + 880 + 720 + 720 (pooled about 25,000 across roughly 630 variants), KD 28-32. Pair it with the existing tool tools/resume-skills-evidence-builder. One page for freshers; a second general page only if the first ranks.

**7.02 [P2] EXPAND: `best-skills-for-commerce-students-to-learn (add BCom/technical/computer-skills sections)`**  
*Search Console: 28 queries, 306 impressions, 0 clicks ("skills required for commerce students", "technical skills for bcom students", "computer skills for commerce students")*

- Sheets: negligible (largest 20); the evidence is Search Console.
- Search Console: 28 queries, 306 impressions, 0 clicks; top: "skills for commerce students" (43); "best skills for commerce students" (32); "best skills to learn in 2026 for commerce students" (21); "commerce skills" (18); "high paying skills for commerce students" (18).
- Site check: existing: `best-skills-for-commerce-students-to-learn`.
- Home: `blog/skills`. Link to/from: -.
- Why: Exact-intent page already exists; zero clicks means a wording/depth mismatch, not a missing page.

**7.03 [P3] NEW: `business-ideas-for-students`**  
*Low-investment ideas that fit a student timetable, with legal/tax basics for minors and under-21s*

- Sheets: 127 phrasings with volume (of 242 matched), largest 1,300, KD 23-31. Top: 12 unique business ideas for students (1,300); business ideas for students (1,000); business startup ideas for students (480); small business ideas for students (480); small business ideas for girl students (390); best business ideas for students (320).
- Site check: no dedicated page.
- Home: `blog/freelancing-business`. Link to/from: how-to-monetize-your-skills-online-india; best-freelance-skills-in-demand-india.
- Why: 1,300 + 1,000 + 480 + 480 + 390 + 320 (KD 23-31). Adjacent, not core; the site already has tools/student-business-idea-feasibility-calculator, so a short article that feeds the tool is the right size.


### Cluster H: Counselling and guidance services

**8.01 [P3] EXPAND: `best-career-guidance-website (add apps and websites for students)`**  
*"career guidance app" 590 and "career counselling app" 110, "career guidance websites for students" 140*

- Sheets: 17 phrasings with volume (of 75 matched), largest 590, KD 20-46. Top: career guidance app (590); career guidance websites (320); career counselling websites (170); career guidance websites for students (140); career counselling app (110); career counseling app (70).
- Site check: existing: `best-career-guidance-website`.
- Home: `services`. Link to/from: best-career-counselling-platform; compare-career-counselling-services.
- Why: The comparison pages exist; the app wording is missing.


### Cluster I: "Is X a good career": the next candidates for a pattern the site already runs 68 times

Candidates were screened by pooled phrasings across the sheets; each row shows whether a page or near-page already exists. Rows marked *variant* are not new pages: the existing page needs the searcher's spelling or synonym in its title/H1. Everything else is a P2/P3 "is X a good career" page and should follow the existing format (verdict, pay, burnout, who should skip).

| Entity | Phrasings (with volume) | Largest | Top phrasing | KD | Existing related page | Call |
|---|---:|---:|---|---|---|---|
| IT / information technology | 53 (3) | 170 | is it a good career | 19-21 | none | NEW P2 |
| SAP (all modules) | 46 (16) | 210 | is sap a good career | 3-23 | none | NEW P2 |
| Project management | 13 (8) | 260 | is project management a good career | 30 | `project-manager-career-india-pmp-certifi` | check intent of related page |
| Banking | 4 (4) | 170 | is banking a good career | 22 | `career-in-investment-banking-india-how-t`, `is-investment-banking-a-good-career` | check intent of related page |
| Finance / accounting | 12 (6) | 110 | is finance a good career | 35 | `mba-finance-vs-marketing-india`, `career-in-finance-vs-accounting-india` | check intent of related page |
| BPO | 10 (4) | 140 | is bpo a good career | 17 | none | NEW P2 |
| Photography | 11 (6) | 140 | is photography a good career | 23 | none | NEW P2 |
| Animation | 17 (10) | 170 | is animation a good career | 7-22 | `how-to-become-an-animator-india` | check intent of related page |
| Aviation / cabin crew / air hostess | 7 (7) | 170 | is aviation a good career | 12-24 | none | NEW P2 |
| Teaching | 6 (4) | 110 | is teaching a good career | 14 | `teaching-vs-corporate-career-india-which` | check intent of related page |
| Ethical hacking | 5 (2) | 170 | is ethical hacking a good career | 10 | none | NEW P2 |
| Embedded systems / VLSI / robotics / mechatronics | 18 (13) | 140 | is embedded systems a good career | 8-21 | none | NEW P2 |
| Networking / network engineering | 18 (9) | 140 | is network engineering a good career | 12-29 | none | NEW P2 |
| Petroleum engineering | 4 (2) | 140 | is petroleum engineering a good career | 30 | none | NEW P2 |
| Web design / product design | 13 (8) | 110 | is product design a good career | 12-16 | none | NEW P2 |
| Occupational therapy / psychiatry / MLT / paramedic / anaesthesia | 14 (11) | 140 | is dermatology a good career | 14-22 | `best-paramedical-courses-scope-in-india` | check intent of related page |
| Real estate | 12 (8) | 110 | is real estate a good career | 33 | none | NEW P2 |
| Corporate law | 3 (2) | 140 | is corporate law a good career | 26 | none | NEW P2 |
| Content writing | 7 (3) | 110 | is content writing a good career | 28 | `content-writing-vs-copywriting-career-in`, `journalism-vs-content-writing-career-ind` | check intent of related page |
| Consulting | 2 (1) | 110 | is consulting a good career | 21 | `consulting-as-a-career-india-how-to-get-` | check intent of related page |
| YouTube / content creation | 5 (3) | 110 | is youtube a good career | 19 | none | NEW P2 |
| Archaeology / criminology / astronomy | 14 (7) | 110 | is archaeology a good career | 17-32 | none | NEW P2 |
| MBA / BBA / BCA "as a career option" | 4 (3) | 170 | is bba a good career option | 17-20 | none | NEW P2 |
| Cyber security (spelling variant: page exists as "cybersecurity") | 5 (3) | 1,300 | is cyber security a good career | 14-29 | `is-cybersecurity-a-good-career-in-india` | EXPAND existing (wording) |
| Human resource management (variant: is-hr page exists) | 6 (4) | 480 | is human resource management a good career | 17 | `is-hr-a-good-career-in-india` | EXPAND existing (wording) |
| Actuarial science (page exists as actuarial-science-careers) | 1 (1) | 110 | is actuarial science a good career | 10 | `actuarial-science-careers` | EXPAND existing (wording) |

The single largest pool is **IT / information technology** (about 50 phrasings, though only a few carry volume) because searchers write "is IT a good career" for the whole sector; it deserves one sector-level page that routes to the existing software, data and cyber pages.

## 5. Fix before you build: what Search Console already shows

The export holds 1,000 queries, 181 clicks and 9,279 impressions (one snapshot, no position column). Queries were grouped into topics by rule; the full mapping is `appendix/A2-search-console-queries-mapped.csv`.

| Topic group | Queries | Impressions | Clicks | CTR | Read |
|---|---:|---:|---:|---:|---|
| Stream-selector / stream tests | 28 | 761 | 72 | 9.5% | Working. Defend it. |
| Aptitude tests | 131 | 2,341 | 79 | 3.4% | Working; 2,341 impressions, 79 clicks. Wording variants below. |
| Career tests / quizzes / interest tests (not aptitude) | 192 | 1,749 | 9 | 0.5% | Biggest leak: 1,749 impressions, 9 clicks. Pages exist (29 generated + static); H1/title wording does not match queries like "career change quiz", "free career test for students", "stream suitability test", "career interest test", "vocational test", "skills assessment test". |
| Diploma courses / trades after 12th | 55 | 403 | 4 | 1.0% | Page exists; add the trade list and eligibility answers (5.03, 5.04). |
| MPT / physiotherapy salary | 37 | 184 | 0 | 0.0% | No page. Build 6.01. |
| Content-creator earnings | 11 | 76 | 1 | 1.3% | Page exists; add literal question and earnings table (6.03). |
| CUET vs JEE | 33 | 328 | 0 | 0.0% | Page exists, 328 impressions and no clicks. On-page: add "is CUET easier than JEE", "CUET UG vs JEE Main" headings; add a short "what is CUET" explainer to support it. |
| CA / CMA / CFA | 25 | 120 | 0 | 0.0% | Page exists; add head-to-head section (4.03). |
| SSC vs bank / govt jobs | 36 | 140 | 0 | 0.0% | Page exists; add "SSC CGL vs IBPS clerk", "SSC CHSL vs bank clerk", salary and difficulty sections. |
| Humanities / arts jobs | 29 | 156 | 1 | 0.6% | Pages exist; "high paying humanities jobs" and "humanities jobs list and salary" need those exact headings. |
| Introvert jobs | 11 | 84 | 0 | 0.0% | Page exists; 0 clicks on 84 impressions, so audit before extending the pattern. |
| MBA (lateral, specialisation, after bcom) | 35 | 265 | 0 | 0.0% | Pages exist; add "meaning" and "vs" headings. |
| CTC / package / placement meaning | 8 | 60 | 0 | 0.0% | Parent exists (how-to-read-college-placement-report-india); see Report 2 W5. |
| Skills for commerce / BCom students | 28 | 306 | 0 | 0.0% | Page exists; add BCom/technical/computer sections (7.02). |
| Career counselling / guidance (generic, service intent) | 68 | 581 | 1 | 0.2% | Service pages; head-term competition, expect slow movement. |
| Future career / future skills (brand-adjacent) | 24 | 346 | 2 | 0.6% | Brand-echo queries ("future career", "future carrier", "future career consultancy"); the contact page is picking them up. Consider a clear "Future Career School" brand/about snippet. |
| Medical / nursing / paramedical / coding | 32 | 168 | 0 | 0.0% | See 6.01, 6.02, 6.04. |
| Study abroad / education loan | 3 | 33 | 0 | 0.0% | See 6.06. |
| Engineering branches (non-core etc.) | 6 | 24 | 0 | 0.0% | See Report 2 W17 (non-core branches). |
| LinkedIn / resume / portfolio | 9 | 65 | 0 | 0.0% | Small. |
| Salary (generic) | 26 | 166 | 2 | 1.2% | See 6.05 and the empty salary-growth category. |
| Unclassified / noise | 173 | 923 | 10 | 1.1% | Includes AI-assistant query strings and one-word queries; ignore. |

Test-type queries (123 of them, 1,164 impressions) whose wording matches neither the phrase sets of the 29 generated pages nor any static page slug closely. Use them as H1/title/FAQ wording checks on the nearest existing assessment page, not as new pages: "stream suitability test" (106); "stream selector" (45); "skill finder" (39); "high school aptitude test" (32); "which stream to choose after 10th quiz" (28); "aptitude test for class 10 stream selection" (24); "free career aptitude test for high school students" (23); "stream choosing test" (22); "free aptitude test for high school students" (22); "career change quiz free" (22); "job skills assessment test" (21); "free career quiz high school student" (20); "which stream is best for me test" (19); "skills assessment test" (19); "skill assessment test online" (19); "career change quiz" (19); "psychometric test after 10th" (18); "free psychometric test india" (16); "online aptitude assessment" (16); "skills test for jobs" (16).

## 6. What not to build (false positives the sheets will tempt you with)

| Keyword or cluster | Number in the sheet | Why it is not an opportunity |
|---|---:|---|
| best laptops for students (and ~870 laptop phrasings) | 60,500 | Consumer-electronics intent. Whole tab (B: Laptop For Students) sums to 225,870 monthly searches and none of it is career intent. Skip; the one adjacent angle (free-laptop government schemes) is state-by-state and changes yearly. |
| deloitte career opportunities and every "<company> careers/career opportunities" | 74,000 | Job-seeker navigation to a company careers page. Thousands of rows in the Career Opportunities, Business, Engineering and Science tabs. |
| career institute of medical sciences (and hospital) | 12,100 | An institute name. Same for "career launcher", "career endeavour", "career point", "career power coaching". |
| career based on the skills based education | 22,200 | Two variants, reads like a textbook/exam prompt; do not size plans on it. |
| life skills / life skills education / life skills for students | 14,800 / 3,600 / 1,900 | School-curriculum and WHO/NCERT intent (teachers, parents of children). The site already has a life-skills-self-assessment page for the career-relevant slice. "ielts life skills" (149 phrasings) is the UKVI English test. |
| skill assessment (head term) | 12,100 | Dominated by Australian migration skills assessment (VETASSESS, ACS, Engineers Australia) and LinkedIn skill assessments. The addressable part is "skills assessment test" (390) and similar. |
| what is communication skills / what is soft skills / how to improve communication skills | 9,900 / 6,600 / 9,900 | Dictionary-style intent, KD 48-59, huge incumbents. Pursue only as spokes of the Career Skills Compass with a career angle (e.g. communication skills for interviews). |
| career advice | 12,100 | Generic head term; the trend line shows the demand is a short burst. |
| anthropic ceo career advice | 720 | A one-month news spike. |
| which motor skill is involved in smashing volleyball; which of the following is not a soft skill | 1,900 / 320 | Exam-question strings. |
| ketu / saturn / moon in 10th house career | 320 / 140 / 110 | Astrology; excluded on policy. |
| good luck wishes for future career | 1,600 | Greeting-card intent. |
| any keyword with a 2017-2023 year stamp ("free laptop ... 2021", "career fair 2019") | - | Stale by definition. |
| new city or locality pages | - | Demand is exhausted (Section 2.3); more would add doorway risk. |
| career chart after 10th / after 12th by stream | 1,300 / 1,300 / 880 / 260 | Already built: career-chart-after-10th exists in origin/main, and career-chart-after-12th has science, commerce and arts sections plus a PDF per stream. |
| confused about career after 10th test | 1,900 | Already built as services/assessments/confused-about-career-after-10th-test; the 1,900 head term is also a one-month spike. |
| separate page for career options after 12th arts | 2,900 | Same searcher as the humanities page and career-options-in-arts; retitle (item 1.02). |

## 7. Suggested build order

**Wave 0: wording fixes on existing pages (hours, not days).** 1.02 arts wording on the humanities page, 1.08 BiPC wording on pcb-career-options, 1.12 'opportunities' in career-options-after-12th, 2.11 BCom wording on career-after-bcom-in-india, 2.03 B.Pharm headline, 6.01 MPT salary section, 5.03 diploma page gaps, 4.03 CMA vs CFA head-to-head, 6.03 and 6.04 salary headings, 7.02 BCom skills sections, 6.06 domestic secured/unsecured loan section, and the test-page wording checks in Section 5. These target queries that already earn impressions.

**Wave 1: sibling-parity pages (lowest risk, clearest evidence).** 1.01 career-options-in-science, 1.06 pcm-career-options-with-salary, 1.10 career-options-after-neet, 2.01 career-options-after-btech.

**Wave 2: pages with their own decision and sizeable pooled demand.** 4.01 business-analyst-skills, 5.01 professional courses for commerce, 5.02 BSc courses after PCB/BiPC, 7.01 skills-for-resume-for-freshers (link the existing resume-skills tool), 2.04 physical-education-career-options, 5.04 polytechnic diploma after 10th.

**Wave 3: P2 pages, one per fortnight, only after earlier waves show impressions.** 2.02 post-LLB, 1.11 after JEE, 1.07 commerce salary page, 6.05 salary by degree, 2.06 geography, 2.08 mathematics, 2.13 career options after graduation, 2.14 MBA marketing/HR, and the 'is X a good career' candidates in Cluster I.

**Internal linking rule for every new page:** one link up to its hub, two sideways to siblings, one to the matching assessment or service page (assessment mentions only where the keyword is assessment-intent, per the Assessment Mention Rules in `DOORWAY_PREVENTION_GUIDE.md`).

## 8. Limits of this analysis

- Search Console data is a single export of 1,000 queries with clicks and impressions only; there is no average-position column, so "0 clicks" cannot be split into "not ranking" versus "ranking with a weak snippet".
- KD and CPC columns come from the sheets' tool and were not re-verified. The "Number of Results" column contains values such as 123 and 19,500,000 for similar queries, so it was not used.
- Site coverage was checked on slug, title and (for selected terms) page body text in the repository, not on the live site. Pages that exist only in the database or were published after this checkout would not be seen.
- Wording rules such as "avoid India in titles" in `PROJECT_MEMORY.md` were not applied to the slugs proposed here.
- The Search Console export is dated 7/8/26 and the site tree is 2026-10-14. Some queries may already be served by pages added in between; re-pull the export before measuring impact.
- A slug search alone gave false gaps in the first pass (for example secured vs unsecured education loans and nursing abroad already exist as sections). Every NEW item was therefore re-checked against page headings and body text; the EXPAND and RETITLE items are the ones where the content already existed.
- Salary and legal figures are never quoted as facts here; every salary or statute-based page needs a sourcing pass at write time.

## 9. Files

- `appendix/A1-site-page-inventory.csv` - every page with its pattern type
- `appendix/A2-search-console-queries-mapped.csv` - 1,000 queries, topic group, nearest page
- `appendix/A3-report1-matched-keywords.csv` - every sheet keyword behind each item above (volume, KD, spike flag, source tab)
- `appendix/A5-sheet-tab-summary.csv` - fit verdict per tab
- `appendix/A6-noise-and-anomaly-log.csv` - exclusion rules and the largest anomalies
- `appendix/A7-is-x-good-career-candidates.csv`
