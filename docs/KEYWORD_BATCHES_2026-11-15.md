# Keyword batches — 15 November 2026

Source: both Google Sheets (`keywords 2026 -1`: 21 tabs, `Keywords 2026-2`: 14 tabs; top 250 rows of each tab by volume, plus the full Search Console query tab) checked against the 910 blog slugs, the 121 service pages, the assessment routes and the tools in `main`.

How to read this file:
- **Vol / KD** come from the sheet when the exact phrase is there. A dash means the phrase is a normalised form of a Search Console query or of several sheet variants; the evidence is in the note.
- **Competition** is the sheet's KD bucket only (low ≤15, medium 16–30, high >30). It is not a statement about SERP crowding or AI Overviews.
- **Type** is the proposed kickoff-prompt class (blog = TOFU, mofu, bofu). Final classification and the exact-match check are re-run per keyword when the page is built (STEP 0 and STEP A–C of `COWORK_KICKOFF_PROMPT.md`).
- Keywords with an exact-match live page were left out: diploma best trade after 10th, career options for girls after 12th, mba finance vs marketing, pcmb career options, pcb career options other than medical, career options for pcm students other than engineering, skills required for data scientist fresher, best mba specialisation for engineers, is engineering still a good option, is salesforce a good career, is robotics a good career, is graphic design a good career in india, how to develop public speaking skills, how to develop problem solving skills, how to increase analytical skills, career objective for civil/electrical engineer.

Mix: 60 low, 63 medium, 6 high-difficulty by sheet KD; the rest are Search Console-proven phrases with no KD figure.

## Build status (updated 15 November 2026)

Batch 1, first 12 keywords:

| Keyword | Result |
|---|---|
| coding vs pcm for future engineers | New page: /blog/stream-selection/coding-vs-pcm-for-future-engineers/ |
| java or python which is better for future in india | New page: /blog/skills/java-or-python-which-is-better-for-future-india/ |
| data scientist vs software engineer salary in india | New page: /blog/career-options/data-scientist-vs-software-engineer-salary-india/ (an H2 on data-science-vs-software-engineering-career-india already targets this phrase; watch for overlap in Search Console) |
| data analyst vs software engineer salary in india | New page: /blog/skills/data-analyst-vs-software-engineer-salary-india/ |
| education loan is secured or unsecured | New page: /blog/college-degrees/education-loan-secured-or-unsecured-india/ |
| what does highest package vs median ctc mean in placements | New page: /blog/college-degrees/highest-package-vs-median-ctc-meaning-india/ |
| mpt salary per month in india | New page: /blog/medical-careers/mpt-salary-per-month-in-india/ |
| government psychologist salary in india per month | New page: /blog/government-jobs/government-psychologist-salary-india-per-month/ |
| medical coding salary after bsc nursing | New page: /blog/medical-careers/medical-coding-salary-after-bsc-nursing-india/ |
| how much does a content creator earn in india | Exact match already live (/blog/freelancing-business/content-creator-income-india/); no new page |
| what jobs are best for introverts in india | Exact match already live (/blog/career-options/best-careers-for-introverts-in-india/); keyword wording added to its intro, FAQ items opened |
| lateral mba meaning and eligibility | Exact match already live (/blog/college-degrees/lateral-entry-mba-india/); eligibility heading reworded |

## Batch 1 — GSC-proven gaps (queries already earning impressions with no matching page) + low-KD, high-volume decisions (25)

| # | Keyword | Vol | KD | Competition | Type | Evidence / note |
|---|---|---|---|---|---|---|
| 1 | coding vs pcm for future engineers | — | — | — | blog | GSC 28 imp; stream/skill decision (Search Console: 0 clicks / 28 impressions) |
| 2 | java or python which is better for future in india | — | — | — | blog | GSC 24 imp (Search Console: 0 clicks / 24 impressions) |
| 3 | data scientist vs software engineer salary in india | — | — | — | blog | GSC; salary comparison, indicative ranges only (Search Console: 0 clicks / 22 impressions) |
| 4 | data analyst vs software engineer salary in india | — | — | — | blog | GSC; near data-analyst-vs-ai-engineer page but different pair (Search Console: 0 clicks / 16 impressions) |
| 5 | education loan is secured or unsecured | — | — | — | blog | GSC 23 imp; nearest education-loan pages do not answer secured/unsecured (Search Console: 0 clicks / 23 impressions) |
| 6 | what does highest package vs median ctc mean in placements | — | — | — | blog | GSC 'median ctc means' + 'highest package means' (Search Console: 0 clicks / 14 impressions) |
| 7 | mpt salary per month in india | — | — | — | blog | GSC: 4+ MPT salary variants |
| 8 | government psychologist salary in india per month | — | — | — | blog | GSC (Search Console: 0 clicks / 19 impressions) |
| 9 | medical coding salary after bsc nursing | — | — | — | blog | GSC: coding after nursing, CPC salary, market |
| 10 | how much does a content creator earn in india | — | — | — | blog | GSC: 4 variants (Search Console: 0 clicks / 11 impressions) |
| 11 | what jobs are best for introverts in india | — | — | — | blog | GSC: 5 variants; scalable-route marking essential |
| 12 | lateral mba meaning and eligibility | — | — | — | blog | GSC (Search Console: 0 clicks / 9 impressions) |
| 13 | bsc nursing scope abroad | — | — | — | blog | GSC; existing page is India scope |
| 14 | government jobs after ba history | — | — | — | blog | GSC (Search Console: 0 clicks / 12 impressions) |
| 15 | which degree grows your salary the fastest | — | — | — | blog | GSC; must mark scalability, no invented figures (Search Console: 0 clicks / 9 impressions) |
| 16 | bba scope in future | — | — | — | blog | GSC (Search Console: 0 clicks / 9 impressions) |
| 17 | which diploma course is best for future | — | — | — | blog | GSC; nearest best-diploma-courses-after-12th (Search Console: 0 clicks / 11 impressions) |
| 18 | high paying skills for commerce students | — | — | — | blog | GSC; nearest best-skills-for-commerce-students-to-learn (Search Console: 0 clicks / 18 impressions) |
| 19 | top freelance skills for earning lakhs per month in india | — | — | — | blog | GSC |
| 20 | high salary career options in medical without neet | 2900 | 9 | low | blog | Sheet 2900/9, biggest low-KD gap |
| 21 | i am confused about my career after 10th | 1900 | 8 | low | blog | Sheet 1900/8; test page exists, no empathetic guide (Search Console: 0 clicks / 3 impressions) |
| 22 | which factor is important while choosing a career | 2400 | 19 | medium | blog | Sheet 2400/19; nearest factors-to-consider page |
| 23 | humanities jobs list and salary | — | — | — | blog | GSC 48 imp; nearest best-paying-jobs-for-humanities (Search Console: 0 clicks / 48 impressions) |
| 24 | degree courses list for mpc students | 1000 | 11 | low | blog | Sheet 1000/11 |
| 25 | high salary courses for bipc students | 880 | 11 | low | blog | Sheet 880/11 |

## Batch 2 — City-intent career counselling (the third commercial page type in the kickoff prompt) (20)

| # | Keyword | Vol | KD | Competition | Type | Evidence / note |
|---|---|---|---|---|---|---|
| 26 | career counselling in bangalore | 1900 | 17 | medium | bofu | 1900/17 (Search Console: 0 clicks / 3 impressions) |
| 27 | career counselling in pune | 1300 | 14 | low | bofu | 1300/14 |
| 28 | career counselling in kolkata | 1000 | 15 | low | bofu | 1000/15 |
| 29 | career counselling in chennai | 720 | 9 | low | bofu | 720/9 |
| 30 | career counselling in hyderabad | 590 | 12 | low | bofu | 590/12 |
| 31 | career counselling in chandigarh | 480 | 12 | low | bofu | 480/12 |
| 32 | career counselling in gurgaon | 480 | 12 | low | bofu | 480/12 |
| 33 | career counselling in nagpur | 480 | 10 | low | bofu | 480/10 |
| 34 | career counselling in ahmedabad | 390 | 10 | low | bofu | 390/10 |
| 35 | career counselling in surat | 390 | 13 | low | bofu | 390/13 |
| 36 | career counselling in thane | 320 | 13 | low | bofu | 320/13 |
| 37 | career counselling in ludhiana | 170 | 13 | low | bofu | 260/11 |
| 38 | career counselling in guwahati | 260 | 18 | medium | bofu | 260/18 |
| 39 | career counselling in vadodara | 260 | 13 | low | bofu | 260/13 |
| 40 | career counselling in raipur | 260 | 12 | low | bofu | 260/12 |
| 41 | career counselling in noida | 170 | 11 | low | bofu | 170/11 |
| 42 | career counselling in nashik | 170 | 14 | low | bofu | 170/14 |
| 43 | career guidance in chennai | 210 | 12 | low | bofu | 210/12 |
| 44 | career guidance in trivandrum | 260 | 15 | low | bofu | 260/15 |
| 45 | career coach bangalore | 110 | 15 | low | bofu | 110/15 |

## Batch 3 — Service-intent MOFU/BOFU around counselling, coaching and guidance (14)

| # | Keyword | Vol | KD | Competition | Type | Evidence / note |
|---|---|---|---|---|---|---|
| 46 | career guidance group | 2900 | 29 | medium | mofu | 2900/29; ambiguity: group counselling vs WhatsApp groups |
| 47 | career guidance app | 590 | 25 | medium | mofu | 590/25 |
| 48 | free online career counselling chat | 260 | 28 | medium | mofu | 260/28 |
| 49 | ai career coach | 170 | 18 | medium | mofu | 170/18 |
| 50 | career and life coach | 140 | 17 | medium | bofu | 140/17 |
| 51 | career coach certification | 110 | 22 | medium | mofu | 110/22; must stay honest, FCS does not certify coaches |
| 52 | student mentor | 390 | 23 | medium | mofu | 390/23 |
| 53 | career guidance program | 480 | 29 | medium | mofu | 480/29 |
| 54 | psychometric test for career guidance | 170 | 14 | low | mofu | 170/14; existing psychometric page |
| 55 | mindler career counselling | 390 | 29 | medium | mofu | 390/29; competitor comparison, factual only |
| 56 | best career counselling in bangalore | 210 | 16 | medium | mofu | 210/16 |
| 57 | career counselling for medical students | — | — | — | bofu | GSC (Search Console: 0 clicks / 9 impressions) |
| 58 | future career consultancy | — | — | — | bofu | GSC 33 imp (Search Console: 0 clicks / 33 impressions) |
| 59 | career counselling after 12th pcb | — | — | — | bofu | derivable gap |

## Batch 4 — Stream and degree career-options guides (25)

| # | Keyword | Vol | KD | Competition | Type | Evidence / note |
|---|---|---|---|---|---|---|
| 60 | non medical career options | 480 | 16 | medium | blog | 720/16 |
| 61 | pcm career options without jee | 260 | 13 | low | blog | 260/13 |
| 62 | bio stream career options | 880 | 20 | medium | blog | 880/20 |
| 63 | maths stream career options | 480 | 25 | medium | blog | 480/25 |
| 64 | career options after bachelor of arts | 880 | 12 | low | blog | 880/12 |
| 65 | english honours career options | 390 | 14 | low | blog | 390/14 |
| 66 | career options after llb | 720 | 13 | low | blog | 720/13 |
| 67 | microbiologist career options | 390 | 22 | medium | blog | 390/22 |
| 68 | bsc zoology career options | 210 | 16 | medium | blog | 210/18 |
| 69 | career options after ba llb | 210 | 10 | low | blog | 210/10 |
| 70 | best career options after 10th for girl | 590 | 16 | medium | blog | 590/16 |
| 71 | career options after 10th in commerce | 320 | 16 | medium | blog | 320/16 |
| 72 | career options after 10th in arts | 210 | 21 | medium | blog | 210/21 |
| 73 | career chart after 10th in science | 480 | 11 | low | blog | 480/11 |
| 74 | career guidance chart after 10th | 170 | 10 | low | blog | 170/10 |
| 75 | career mapping for students | 110 | 28 | medium | blog | 110/28 |
| 76 | degree courses for bipc students without eamcet and neet | 390 | 15 | low | blog | 390/15 |
| 77 | which bsc course is best for biology students | 880 | 18 | medium | blog | 880/18 |
| 78 | b tech courses list for mpc students | 720 | 15 | low | blog | 720/15 |
| 79 | degree courses for bipc students | 720 | 14 | low | blog | 720/14 |
| 80 | high salary courses for bipc students without neet | 590 | 11 | low | blog | 590/11 |
| 81 | nursing course for arts students | 260 | 8 | low | blog | 260/8 |
| 82 | cuet courses for pcm students | 210 | 26 | medium | blog | 210/26 |
| 83 | which course is best for biology students with high salary | 260 | 35 | high | blog | 260/35 |
| 84 | career options for pcmb students | 140 | 11 | low | blog | 140/11 |

## Batch 5 — Is-X-a-good-career decision pages (25)

| # | Keyword | Vol | KD | Competition | Type | Evidence / note |
|---|---|---|---|---|---|---|
| 85 | is human resource management a good career | 480 | 17 | medium | blog | 480/17 |
| 86 | is chartered accountant a good career | 140 | 0 | low | blog | 140/0 (Search Console: 0 clicks / 4 impressions) |
| 87 | is dermatology a good career | 140 | 15 | low | blog | 140/15 |
| 88 | is mlt a good career | 140 | 21 | medium | blog | 140/21 |
| 89 | is paramedic a good career | 140 | 22 | medium | blog | 140/22 |
| 90 | is psychiatry a good career | 140 | 14 | low | blog | 140/14 |
| 91 | is quality assurance a good career | 140 | 0 | low | blog | 140/0 |
| 92 | is air hostess a good career | 110 | 24 | medium | blog | 110/24 |
| 93 | is automation testing a good career | 110 | 21 | medium | blog | 110/21 |
| 94 | is medical billing a good career | 110 | 17 | medium | blog | 110/17 |
| 95 | is modeling a good career | 110 | 18 | medium | blog | 110/18 |
| 96 | is sap fico a good career | 110 | 3 | low | blog | 110/3 |
| 97 | is bpt a good career option | 90 | 0 | low | blog | 90/0 |
| 98 | is clinical psychology a good career | 90 | 0 | low | blog | 90/0 |
| 99 | is hospital administration a good career | 90 | 0 | low | blog | 90/0 |
| 100 | is manual testing a good career | 90 | 0 | low | blog | 90/0 |
| 101 | is devops a good career for freshers | 70 | 0 | low | blog | 70/0 |
| 102 | is law a good career for a woman in india | 140 | 9 | low | blog | 140/9 |
| 103 | is mechatronics engineering a good career | 140 | 21 | medium | blog | 140/21 |
| 104 | is agricultural engineering a good career | 110 | 13 | low | blog | 110/13 |
| 105 | is biotech engineering a good career | 170 | 13 | low | blog | 170/13 |
| 106 | is anesthesia a good career | 110 | 11 | low | blog | 110/11 |
| 107 | is archeology a good career | 110 | 31 | high | blog | 110/31 |
| 108 | is information technology a good career | 110 | 21 | medium | blog | 110/21 |
| 109 | is stenography a good career | 110 | 24 | medium | blog | 110/24 |

## Batch 6 — Skills, resume and business-skill gaps (27)

| # | Keyword | Vol | KD | Competition | Type | Evidence / note |
|---|---|---|---|---|---|---|
| 110 | soft skills for resume for freshers | 720 | 30 | medium | blog | 720/30 |
| 111 | skills for cv for freshers | 590 | 28 | medium | blog | 590/28 |
| 112 | skills in resume for freshers with no experience | 320 | 26 | medium | blog | 320/26 |
| 113 | computer skills for resume for freshers | 170 | 27 | medium | blog | 170/27 |
| 114 | what skills to add in resume | 390 | 31 | high | blog | 390/31 |
| 115 | career objective for resume for student | 140 | 20 | medium | blog | 140/20 |
| 116 | career objective for mba resume | 110 | 17 | medium | blog | 110/17 |
| 117 | career objective for software engineer | 110 | 20 | medium | blog | 140/20 |
| 118 | career objective for fresher engineer resume | — | — | — | blog | 140/15 |
| 119 | business development manager skills | 140 | 24 | medium | blog | 140/24 |
| 120 | business writing skills | 210 | 37 | high | blog | 210/37 |
| 121 | business leadership skills | 210 | 20 | medium | blog | 210/20 |
| 122 | how to learn business skills | 110 | 23 | medium | blog | 110/23 |
| 123 | types of life skills | 480 | 23 | medium | blog | 480/23 |
| 124 | life skills for students | 1900 | 27 | medium | blog | 1900/27 |
| 125 | life skills activities for students | 390 | 12 | low | blog | 390/12 |
| 126 | life skills and personality development | 260 | 10 | low | blog | 260/10 |
| 127 | which skill is best for future | 1000 | 28 | medium | blog | 1000/28 |
| 128 | what skills are you building for the future | 480 | 26 | medium | blog | 480/26 |
| 129 | is confidence a skill | 210 | 20 | medium | blog | 210/20 |
| 130 | is patience a skill | 260 | 17 | medium | blog | 260/17 |
| 131 | how to improve social skills | 260 | 27 | medium | blog | 260/27 |
| 132 | how to develop listening skills | 260 | 30 | medium | blog | 260/30 |
| 133 | what are professional skills | 260 | 31 | high | blog | 260/31 |
| 134 | what is skill matrix | 210 | 19 | medium | blog | 210/19 |
| 135 | employability skills assessment test | 110 | 18 | medium | mofu | 110/18 |
| 136 | writing skills assessment test | 210 | 17 | medium | mofu | 210/17 |

## Batch 7 — Business, commerce and career-opportunity gaps (17)

| # | Keyword | Vol | KD | Competition | Type | Evidence / note |
|---|---|---|---|---|---|---|
| 137 | 12 unique business ideas for students | 1300 | 26 | medium | blog | 1300/26 |
| 138 | small business ideas for girl students | 390 | 31 | high | blog | 390/31 |
| 139 | business ideas for students with low investment | 210 | 29 | medium | blog | 210/29 |
| 140 | pg courses for commerce students | 170 | 15 | low | blog | 170/15 |
| 141 | b ed course for commerce students | 170 | 15 | low | blog | 170/15 |
| 142 | certificate courses for b com students | 140 | 10 | low | blog | 140/10 |
| 143 | side courses for commerce students | 170 | 23 | medium | blog | 170/23 |
| 144 | diploma courses for law students | 140 | 17 | medium | blog | 140/17 |
| 145 | icai certificate courses for students | 210 | 25 | medium | blog | 210/25 |
| 146 | career opportunities after bba | 1300 | 12 | low | blog | 1300/12 |
| 147 | career opportunities after bca | 880 | 23 | medium | blog | 880/23 |
| 148 | career opportunities in psychology | 720 | 23 | medium | blog | 720/23 |
| 149 | career opportunities in nursing | 590 | 9 | low | blog | 590/9 |
| 150 | career opportunities in humanities | 720 | 13 | low | blog | 720/13 |
| 151 | career opportunities in fashion designing | 880 | 11 | low | blog | 880/11 |
| 152 | career opportunities after mba | 720 | 19 | medium | blog | 720/19 |
| 153 | career opportunities in microbiology | 590 | 15 | low | blog | 590/15 |
