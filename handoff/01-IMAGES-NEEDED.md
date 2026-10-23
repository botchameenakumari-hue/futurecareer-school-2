# Images needed for the 39 new pages

Every page below is live in the repo with NO images yet. Each needs a hero plus 5 or more explanatory images (the strict image audit fails a blog page with fewer than hero + 5).

## Image technical spec (from scripts/audit-images.mjs and existing pages)

- Folder: `public/images/blog/<category>/<slug>/` (filenames are given in each brief; start with the slug).
- Format: WebP, 1600x1000 (ratio 16:10) for hero and explanatory images, each under 250 KB.
- One social image per page: `<slug>-social.jpg`, 1200x630, used as `ogImage` (the audit fails a blog page whose og:image is missing or SVG).
- Every image needs a meaningful filename (no `visual-1`), an alt text of 25+ characters, a `title` attribute, width and height attributes matching the file ratio.
- Explanatory images sit in `<figure class="article-visual">` with a `<figcaption>` caption; the hero uses `<figure class="article-visual article-visual--hero">` with `loading="eager" fetchpriority="high"`. Images must be spread through the article, not clustered after it.
- On-image text may only use facts that are on the page itself (the briefs list the text per image). Do not invent numbers.
- Read `docs/image-audit/00-READ-FIRST.md` and `docs/image-audit/ORIGINAL-BRIEF.md` for the full visual-system rules. A good reference page: `src/pages/blog/career-guidance/what-to-do-after-12th-confused/index.astro` (look at its `<figure class="article-visual">` blocks and ogImage props).

## Summary table (live URL = https://futurecareerschool.com + path)

| # | Live path | Category | Dossier (with image brief) | Images in brief |
|---|---|---|---|---|
| 1 | /blog/career-options/pcm-career-options-with-salary/ | career-options | docs/dossiers/pcm-career-options-with-salary.md | 8 |
| 2 | /blog/career-options/career-options-after-btech/ | career-options | docs/dossiers/career-options-after-btech.md | 7 |
| 3 | /blog/career-options/career-options-after-neet/ | career-options | docs/dossiers/career-options-after-neet.md | 1 |
| 4 | /blog/career-options/physical-education-career-options/ | career-options | docs/dossiers/physical-education-career-options.md | 7 |
| 5 | /blog/career-options/career-options-in-science/ | career-options | docs/dossiers/career-options-in-science.md | 8 |
| 6 | /blog/college-degrees/bsc-courses-after-12th-pcb-bipc/ | college-degrees | docs/dossiers/bsc-courses-after-12th-pcb-bipc.md | 8 |
| 7 | /blog/college-degrees/professional-courses-for-commerce-students/ | college-degrees | docs/dossiers/professional-courses-for-commerce-students.md | 8 |
| 8 | /blog/skills/business-analyst-skills/ | skills | docs/dossiers/business-analyst-skills.md | 8 |
| 9 | /blog/resume/skills-for-resume-for-freshers/ | resume | docs/dossiers/skills-for-resume-for-freshers.md | 8 |
| 10 | /blog/salary-growth/salary-by-degree/ | salary-growth | docs/dossiers/salary-by-degree.md | 7 |
| 11 | /blog/career-options/commerce-career-options-with-salary/ | career-options | docs/dossiers/commerce-career-options-with-salary.md | 8 |
| 12 | /blog/career-options/law-career-options/ | career-options | docs/dossiers/law-career-options.md | 8 |
| 13 | /blog/career-options/geography-career-options/ | career-options | docs/dossiers/geography-career-options.md | 7 |
| 14 | /blog/career-options/mathematics-career-options/ | career-options | docs/dossiers/mathematics-career-options.md | 7 |
| 15 | /blog/career-options/career-options-after-graduation/ | career-options | docs/dossiers/career-options-after-graduation.md | 7 |
| 16 | /blog/college-degrees/polytechnic-diploma-after-10th-which-trade-to-choose/ | college-degrees | docs/dossiers/polytechnic-diploma-after-10th-which-trade-to-choose.md | 7 |
| 17 | /blog/career-options/zoology-career-options/ | career-options | docs/dossiers/zoology-career-options.md | 1 |
| 18 | /blog/career-options/botany-career-options/ | career-options | docs/dossiers/botany-career-options.md | 7 |
| 19 | /blog/career-options/bsc-physics-career-options/ | career-options | docs/dossiers/bsc-physics-career-options.md | 8 |
| 20 | /blog/career-options/bsc-chemistry-career-options/ | career-options | docs/dossiers/bsc-chemistry-career-options.md | 1 |
| 21 | /blog/career-options/bsc-agriculture-career-options/ | career-options | docs/dossiers/bsc-agriculture-career-options.md | 7 |
| 22 | /blog/college-degrees/iti-career-options/ | college-degrees | docs/dossiers/iti-career-options.md | 7 |
| 23 | /blog/freelancing-business/business-ideas-for-students/ | freelancing-business | docs/dossiers/business-ideas-for-students.md | 8 |
| 24 | /blog/career-options/is-it-a-good-career-in-india/ | career-options | docs/dossiers/is-it-a-good-career-in-india.md | 8 |
| 25 | /blog/career-options/is-sap-a-good-career-in-india/ | career-options | docs/dossiers/is-sap-a-good-career-in-india.md | 7 |
| 26 | /blog/career-options/is-bpo-a-good-career-in-india/ | career-options | docs/dossiers/is-bpo-a-good-career-in-india.md | 8 |
| 27 | /blog/career-options/is-photography-a-good-career-in-india/ | career-options | docs/dossiers/is-photography-a-good-career-in-india.md | 7 |
| 28 | /blog/career-options/is-aviation-a-good-career-in-india/ | career-options | docs/dossiers/is-aviation-a-good-career-in-india.md | 7 |
| 29 | /blog/career-options/is-ethical-hacking-a-good-career-in-india/ | career-options | docs/dossiers/is-ethical-hacking-a-good-career-in-india.md | 8 |
| 30 | /blog/career-options/is-embedded-systems-a-good-career-in-india/ | career-options | docs/dossiers/is-embedded-systems-a-good-career-in-india.md | 7 |
| 31 | /blog/career-options/is-network-engineering-a-good-career-in-india/ | career-options | docs/dossiers/is-network-engineering-a-good-career-in-india.md | 8 |
| 32 | /blog/career-options/is-petroleum-engineering-a-good-career-in-india/ | career-options | docs/dossiers/is-petroleum-engineering-a-good-career-in-india.md | 7 |
| 33 | /blog/career-options/is-product-design-a-good-career-in-india/ | career-options | docs/dossiers/is-product-design-a-good-career-in-india.md | 8 |
| 34 | /blog/career-options/is-real-estate-a-good-career-in-india/ | career-options | docs/dossiers/is-real-estate-a-good-career-in-india.md | 7 |
| 35 | /blog/career-options/is-corporate-law-a-good-career-in-india/ | career-options | docs/dossiers/is-corporate-law-a-good-career-in-india.md | 8 |
| 36 | /blog/career-options/is-youtube-a-good-career-in-india/ | career-options | docs/dossiers/is-youtube-a-good-career-in-india.md | 8 |
| 37 | /blog/career-options/is-archaeology-a-good-career-in-india/ | career-options | docs/dossiers/is-archaeology-a-good-career-in-india.md | 7 |
| 38 | /blog/career-options/is-criminology-a-good-career-in-india/ | career-options | docs/dossiers/is-criminology-a-good-career-in-india.md | 8 |
| 39 | /blog/career-options/is-astronomy-a-good-career-in-india/ | career-options | docs/dossiers/is-astronomy-a-good-career-in-india.md | 7 |

## Full image briefs, page by page

### 1. /blog/career-options/pcm-career-options-with-salary/

Page file: `src/pages/blog/career-options/pcm-career-options-with-salary/index.astro`

## IMAGE BRIEF (images produced separately; none referenced in the page)
Hero: pcm-career-options-with-salary-hero.webp. Scene: Indian PCM student at a desk comparing a printed salary sheet, a calculator, a laptop with code and a drawing set, a parent beside. Text on image: none. Alt: "Indian PCM student comparing pay ranges for software, engineering and architecture routes at a desk with a parent". Caption: "The same stream can lead to very different pay; the route and the proof decide the spread."
1. pcm-career-options-with-salary-at-a-glance-summary.webp: summary card. Text: "Entry Rs 25,000 a month", "Year 3+ Rs 42,000", "11.2% to 42.9% earn Rs 50,000+". Alt: summary card of fresher versus year-three engineering pay. Caption: PLFS 2025 formal-work medians.
2. pcm-career-options-with-salary-four-question-pay-check.webp: 4-card infographic Who counted / Out of how many / Which employer / Which year, with "263 of 2,897 colleges ranked". Alt: four questions to ask before trusting a salary claim.
3. pcm-career-options-with-salary-spread-median-vs-top.webp: bar comparison Rs 3.5 lakh vs Rs 20 lakh (5.7x), Rs 4.0 vs 19.5 lakh (4.9x). Alt: spread between median and top pay.
4. pcm-career-options-with-salary-route-scalability-ladder.webp: seven routes with three scale labels. Alt: PCM routes ordered by growth headroom.
5. pcm-career-options-with-salary-core-multiplier-proof.webp: stack diagram core + multiplier + proof for software/core/architecture. Alt: skill stack that lifts pay.
6. pcm-career-options-with-salary-multi-stage-competition.webp: staircase JEE -> branch/college -> placement; GATE 10.4% CS, 13.8% ECE -> PSU post. Alt: competition at more than one stage.
7. pcm-career-options-with-salary-fee-in-months.webp: Rs 4 / 16 / 24 lakh = 16 / 64 / 96 months of Rs 25,000 pay. Alt: fee measured in months of entry pay.

### 2. /blog/career-options/career-options-after-btech/

Page file: `src/pages/blog/career-options/career-options-after-btech/index.astro`

## IMAGE BRIEF (not built; no img tags on page)
1. career-options-after-btech-hero.webp: graduate at desk with a branching path map of ten routes. Alt: Engineering graduate comparing ten career routes after B.Tech. Caption: Ten routes, one decision.
2. career-options-after-btech-at-a-glance-summary.webp: infographic of ten routes with the three scalability labels. On-image text: Scalable / Scalable with a business layer / Not so scalable.
3. career-options-after-btech-stat-market-numbers.webp: stat panel 70.15%, 10,000 openings (May 2026), 2.23 lakh startups.
4. career-options-after-btech-comparison-four-filters-doors.webp: table graphic CGPA, college, money, time vs open doors.
5. career-options-after-btech-linear-mba-payback-method.webp: three-step payback method (illustrative numbers marked).
6. career-options-after-btech-funnel-two-stage-competition.webp: CSE 2026 funnel 8,19,372 -> ~5.49 lakh -> 13,343 -> 1,016 posts.
7. career-options-after-btech-linear-sales-basics-engineers.webp: six sales basics.

### 3. /blog/career-options/career-options-after-neet/

Page file: `src/pages/blog/career-options/career-options-after-neet/index.astro`

## IMAGE BRIEF (no images in the page yet)
Hero: career-options-after-neet-hero.webp. Scene: an Indian student and a parent at a table with a laptop on the counselling portal, a fee sheet and a notebook, calm daylight. On-image text: none. Alt: "Indian student and parent comparing NEET counselling seat fees and closing ranks at a home table". Caption: "After a NEET result, the decision runs on your category closing rank, the quota and the full fee."
V1 at-a-glance-summary: infographic "Rank, quota, fee, lane" with four tiles. Text: "About 8 qualifiers per MBBS seat"; "1,40,664 MBBS seats"; "Government MBBS about Rs 2.6 lakh (HP)"; "Private management Rs 95.83 lakh (one college)". Alt: "Summary of NEET seat numbers and fee gap". Caption: "Seats, qualifiers and the fee gap in four numbers."
V2 closing-ranks-by-category: bar chart, text "General 25,655 (566)", "OBC 25,768 (566)", "EWS 29,743 (560)", "SC 1,20,870 (478)", "ST 1,31,976 (471)". Alt: "Round 2 closing ranks by category". Caption: "Round 2 closing ranks in the 15% all-India quota."
V3 counselling-rounds-flow: process chain Register and deposit, Choices, Allotment, Freeze or float, Report, Exit cost. Text only those steps plus "Joined Round 3 seat is final". Alt: "MCC counselling steps". Caption: "Where a missed step costs your deposit."
V4 seat-fee-ladder: comparison "Rs 2.6 lakh / Rs 50.82 lakh / Rs 95.83 lakh". Alt: "Government, state quota and management MBBS fees in one state". Caption: "The same MBBS degree at three prices."
V5 loan-emi: stat "Rs 50 lakh loan, 10% assumed, 15 years: about Rs 53,730 a month". Alt: "Loan instalment example". Caption: "An assumed-rate illustration, not a bank quote."
V6 two-stage-competition: decision chain NEET UG seat, MBBS 4.5 years, internship, registration, NEET PG seat about 58,000. Alt: "Two stages of competition in medicine". Caption: "The second stage is a separate competition."
V7 nmc-advertising: two-column Allowed / Not allowed from the 6 Oct 2026 guidelines. Alt: "What NMC advertising guidelines allow doctors". Caption: "Growing a practice within the rules."

### 4. /blog/career-options/physical-education-career-options/

Page file: `src/pages/blog/career-options/physical-education-career-options/index.astro`

## IMAGE BRIEF (not yet produced; page has no img tags)
1. physical-education-career-options-hero.webp: Indian PE teacher with a small group of children on a school ground, clipboard and cones. Alt: "Physical education teacher guiding a group of school children through a skill drill on a school ground". Caption: "Physical education careers start on a ground, but the growth routes are built on coaching proof and basic business sense."
2. ...-at-a-glance-summary.webp: infographic of the seven options with ratings (Scalable / Scalable with a business layer / Not so scalable) in the page's order.
3. ...-degree-ladder.webp: flow Class 11-12 PE subject, BPES/B.Sc, B.P.Ed (2 years), M.P.Ed (2 years), UGC NET code 47. Text only from the ladder table.
4. ...-two-stage-competition.webp: three two-step tracks (teaching posts, elite coaching, college posts). Text: "Clear the course, then clear the post".
5. ...-government-sports-quota.webp: table card of Punjab 3%, Haryana 3% Group C, Andhra 2% to 3%, Himachal 3% with "read the current notice".
6. ...-coaching-sales-funnel.webp: enquiries to enrolments funnel, who pays, trial class, follow-up, referral, one number.
7. ...-ai-human-layer.webp: two-column what AI helps with vs what stays human (from the page's AI lists).

### 5. /blog/career-options/career-options-in-science/

Page file: `src/pages/blog/career-options/career-options-in-science/index.astro`

## IMAGE BRIEF (images produced separately; page has no img tags)
Hero: career-options-in-science-hero.webp. Indian Class 10 student at a home desk with two paper routes laid out, a calculator, a biology textbook and a laptop, parent beside. Alt: "Indian student comparing science stream choices with a parent at a home study desk". Caption: "Choose the lane first, then the stream that reaches it." No on-image text.
1 career-options-in-science-two-decisions.webp: three-step ladder (Before Class 11, After Class 12, After the degree). Text: "Decision 1/2/3". Alt: "Three stage decision ladder for science careers". Caption: "Science careers need more than one decision."
2 career-options-in-science-stream-doors.webp: grid of PCM, PCB, PCMB, Diploma against 8 lanes with open/closed marks drawn only from the door table. Alt: "Table of what PCM, PCB and PCMB open and close". Caption: "Read across a row to see how many streams reach a lane."
3 career-options-in-science-eight-lanes-scalability.webp: eight lane tiles with the three labels (Scalable; Scalable with a business layer; Not so scalable). Alt: "Eight science career lanes with scalability labels". Caption: "Lanes are ordered by scalability."
4 career-options-in-science-seats-per-aspirant.webp: stat panel: about 23 JEE Main appearers per JoSAA seat, about 14 NEET appearers per MBBS seat. Alt: "Candidates per seat for JEE Main and NEET in 2026". Caption: "The first filter is only one of two."
5 career-options-in-science-research-ladder.webp: funnel 45.7 lakh, 8.6 lakh, 80,284 (AISHE 2023-24). Alt: "Science enrolment narrowing from undergraduate to PhD". Caption: "Research narrows at every level."
6 career-options-in-science-entry-pay-markers.webp: bars of PayScale entry-level markers with n shown. Alt: "Entry-level pay markers by science lane". Caption: "Indicative markers from self-reported pay."
7 career-options-in-science-cost-filter.webp: 10% and 20% budget illustration for Rs 8, 15, 30 lakh. Alt: "College cost filter at 10 and 20 percent of the education budget". Caption: "A planning heuristic, not a law."

### 6. /blog/college-degrees/bsc-courses-after-12th-pcb-bipc/

Page file: `src/pages/blog/college-degrees/bsc-courses-after-12th-pcb-bipc/index.astro`

## IMAGE BRIEF (no img tags in the page yet)
Hero: bsc-courses-after-12th-pcb-bipc-hero.webp. Scene: Indian student at a window desk with a notebook listing BSc names and a fee sheet. Alt: "Indian biology student comparing BSc course options and a fee sheet at a desk". Caption: "The right BSc starts with the work you want to do and the seat that comes after it."
1. at-a-glance-summary.webp: ten BSc routes ranked by growth room with the two labels (Scalable with a business layer, Not so scalable). Text only from the ranking cards. Alt: "Ranked list of ten BSc routes for PCB and BiPC students with scalability labels". Caption: "Ten BSc routes, ordered by growth room and not by prestige."
2. comparison-licensed-vs-open.webp: two-column comparison of licensed (nursing, allied health, clinical psychology, government food posts) and not licensed routes. Alt: "Comparison of licensed and unlicensed BSc careers". Caption: "A licence decides who may practise; an approved college decides whether you can sit for it."
3. comparison-entry-gates.webp: table of entry routes: nursing, ICAR CUET 20% of seats, NFSU 55%, MLT 50%, Maths lock on data science. Alt: "Entry gates for BSc courses open to PCB students". Caption: "Maths is the usual lock on data-led degrees."
4. stat-pay-samples.webp: seven PayScale samples with profile counts and dates (only the values in the pay table). Alt: "Pay samples for BSc-linked roles with sample sizes". Caption: "Self-reported pay samples, not promises."
5. linear-second-seat-race.webp: BSc seat, then MSc (JAM or CUET PG), then NET and PhD. Alt: "Two-stage competition after a pure-science BSc". Caption: "The second seat is a separate race."
6. asymmetrical-college-cost-10-20.webp: Rs 10 lakh budget, Rs 1 lakh start, Rs 2 lakh caution line. Alt: "College fee benchmark against total education budget". Caption: "Keep the degree near 10% of the budget."
7. decision-sales-basics-practice-routes.webp: who pays, trust, first skill, number to watch for nutrition, lab, consultancy. Alt: "Basic sales steps for BSc-linked practices". Caption: "Who pays, how they trust you, and one number to watch."

### 7. /blog/college-degrees/professional-courses-for-commerce-students/

Page file: `src/pages/blog/college-degrees/professional-courses-for-commerce-students/index.astro`

## IMAGE BRIEF (no img tags in page yet)
Hero: professional-courses-for-commerce-students-hero.webp | Indian commerce student at desk with ledger, laptop and notes, calm morning light | alt "Indian commerce student comparing professional course options at a study desk" | caption "Choose the route by the work you want, then price the whole path."
1 ...-credential-product-sort.webp | three-column infographic: credential is the product / signal / skill; text: "CA audit sign-off", "US CPA licence", "ACCA, CFA, FRM" | alt "Three types of professional credential: product, signal and skill" | caption "Ask first whether the law makes the credential necessary."
2 ...-qualification-map.webp | map of 8 routes with stages; text from table | alt "Map of CA, CS, CMA, ACCA, CFA, FRM and CPA stages" | caption "Eight routes, different starts and different finish lines."
3 ...-ca-stages-clocks.webp | CA stage ladder: Foundation (4 papers, 40%/50%), Intermediate (8 months registration), 2-year articleship, Final; validity 4/5/10 years | alt "CA stages and registration validity clocks" | caption "Each CA stage is a separate filter with its own clock."
4 ...-pass-rates-2026.webp | bar chart: CA Foundation 20.09, Inter both 8.47, Final both 14.07, CMA Final 32.97, CFA L1 45 with source line | alt "2026 pass rates across CA, CMA and CFA exams" | caption "Pass rates are one session each and not directly comparable."
5 ...-fee-shape.webp | comparison: ICAI Rs 9,000+18,000+22,000=49,000; CFA USD 3,520-4,570; FRM USD 1,600-2,000; CPA USD 460 per section | alt "Fee shapes for Indian and global professional courses" | caption "Body fees are small beside repeat attempts, coaching and currency."
6 ...-sequencing-patterns.webp | four patterns A-D timeline | alt "Four ways to sequence a degree with a professional course" | caption "Protect the degree marks; they open direct entry later."
7 ...-practice-business-layer.webp | who pays / how found / first skill / number to watch | alt "How a CA, CS or CMA practice finds and keeps clients" | caption "Referrals and a clear niche beat advertising, and rules limit advertising."

### 8. /blog/skills/business-analyst-skills/

Page file: `src/pages/blog/skills/business-analyst-skills/index.astro`

## IMAGE BRIEF (no images in page yet; produced separately; on-image text only from page facts)
Hero: business-analyst-skills-hero.webp. Scene: Indian early-career analyst at a shared desk reviewing a printed process map with a colleague, laptop showing a simple table. Alt: "Early-career business analyst and a colleague reviewing a process map and notes at a desk". Caption: "Skills get you shortlisted. Proof gets you believed."
1. business-analyst-skills-three-groups.webp - infographic: Technical / Domain / Behavioural with 4 example skills each (SQL, Excel, process maps, user stories; BFSI, healthcare, retail, ERP; elicitation, negotiation, stakeholder management, written communication). Alt: three skill groups. Caption: "Three groups, one job."
2. business-analyst-skills-table-stakes-vs-differentiators.webp - two-column graphic: table stakes (Excel, basic SQL, user stories, Jira, clear writing) vs differentiators (domain depth, data checks, facilitation, negotiation under pressure, visible proof).
3. business-analyst-skills-proof-ladder.webp - ladder weak to strong: certificate -> course project -> real process documented -> reviewed by a working analyst -> used by a real person.
4. business-analyst-skills-employer-mix.webp - matrix of IT services / bank or NBFC / product company / consulting vs which skill is weighted (text from the page table only).
5. business-analyst-skills-ai-split.webp - left "AI drafts" (meeting notes, first stories, SQL drafts) right "You decide" (real need, priority, sign-off, the unsaid).
6. business-analyst-skills-three-gates.webp - Proof of Skill, Proof of Communication, Proof of Value applied to BA work.
7. business-analyst-skills-certification-ladder.webp - ECBA (no experience), CCBA (3,750 hrs in 7 yrs), CBAP (7,500 hrs in 10 yrs) with PMI-PBA marked "check pmi.org".

### 9. /blog/resume/skills-for-resume-for-freshers/

Page file: `src/pages/blog/resume/skills-for-resume-for-freshers/index.astro`

## IMAGE BRIEF (no images referenced in the page yet; on-image text only from facts on the page)
1. skills-for-resume-for-freshers-hero.webp (1600x900): scene of an Indian graduate at a desk marking a printed skills list with a pen, laptop showing a spreadsheet. Alt: "Fresher marking up the skills section of a printed resume beside a laptop". Caption: "A skills section works when each skill has something you can show."
2. receipt-line-tool-action-output.webp: infographic, 3 steps "Name the tool", "Say what you did", "Attach an output someone can check"; example "Excel pivot tables: built a [tracker]; file at [link]". Alt: "Three-step receipt line for writing a resume skill". Caption: "Tool, action, checkable output."
3. three-gates-resume-skill.webp: Proof of Skill / Proof of Communication / Proof of Value, with the page's definitions. Alt: "The 3 Gates applied to one resume skill line".
4. resume-skills-ats-claims-vs-evidence.webp: 5 claims with evidence labels (Jobscan 384 recruiters 76.4%; Enhancv 23 of 25; Ladders 7.4 seconds with caveat). Alt: "Common ATS claims about resume skills compared with the evidence".
5. skills-list-vs-leave-out.webp: two-column "List these / Leave out these". Alt: "What a fresher should list and leave out in a resume skills section".
6. resume-skills-by-degree.webp: seven degrees, each with core skill, multiplier, proof shelf and scalability label from the page. Alt: "Core skill, multiplier skill and proof shelf for seven degrees".
7. core-multiplier-proof-shelf.webp: three cards. Alt: "Core skill, multiplier skill and proof shelf stack".
8. applications-replies-interviews-tracker.webp: four-stage funnel with what to count (no benchmark numbers). Alt: "Tracker for applications, replies, interviews and offers".

### 10. /blog/salary-growth/salary-by-degree/

Page file: `src/pages/blog/salary-growth/salary-by-degree/index.astro`

## IMAGE BRIEF (no img tags in the page yet)
Folder: /images/blog/salary-growth/salary-by-degree/
1. Hero: salary-by-degree-hero.webp. Scene: Indian graduate and parent at a table comparing printed salary pages with a notebook. No on-image text. Alt: "Indian graduate and parent comparing degree salary pages and notes at a table". Caption: "A degree's pay depends on the college, the employer and the skills built beside it."
2. start-vs-growth-by-degree.webp. Infographic: paired bars, entry vs three or more years monthly wage for engineering (25,000 to 42,000), medical (15,180 to 35,000), other technical (18,000 to 33,000), other degree (18,000 to 25,000). Source tag: PLFS CY2025 via Avanti Fellows. Alt: "Bar chart of monthly pay at entry and at three or more years for four degree groups". Caption: "Start and growth are different numbers."
3. rupees-added-vs-multiple.webp. Panel: growth multiples 2.31x, 1.83x, 1.68x, 1.39x next to rupees added 19,820, 15,000, 17,000, 7,000. Alt: "Panel comparing growth multiples with rupees added by degree". Caption: "A low start inflates the multiple, so read the rupee gain too."
4. same-degree-different-pay.webp. Comparison: Payscale MBA average Rs 10 lakh (6,890 profiles) vs IIM Ahmedabad median Rs 32.5 lakh; BSc employer averages Rs 3.7 lakh to Rs 31.75 lakh. Alt: "Comparison showing the same degree with very different pay figures". Caption: "One degree name, very different results."
5. start-slope-spread-check.webp. Three-step framework: Start, Slope, Spread with the 42.9% vs 9.6% above Rs 50,000 example. Alt: "Three-step check: start, slope and spread". Caption: "Three numbers to ask for before trusting a degree's salary claim."
6. degree-routes-scalability.webp. Chart of nine routes grouped Scalable / Scalable with a business layer / Not so scalable. Alt: "Degree routes grouped by scalability rating". Caption: "Where pay can grow through skill, consulting or ownership."
7. skills-sales-ownership.webp. Three cards: skills, sales layer, ownership. Alt: "Three levers of income growth beyond the degree". Caption: "Our view: these three move the curve more than the college."

### 11. /blog/career-options/commerce-career-options-with-salary/

Page file: `src/pages/blog/career-options/commerce-career-options-with-salary/index.astro`

## IMAGE BRIEF (no img tags in page yet)
Hero: commerce-career-options-with-salary-hero.webp | Indian commerce student at a desk with a calculator, ledger and laptop, family member nearby, warm daylight | alt "Indian commerce student comparing salary ranges for CA, BCom and BBA routes at a desk" | caption "Price each commerce route in years and rupees before you choose."
1 commerce-career-options-with-salary-baseline-plain-degree.webp | stat panel: "Rs 18,000 a month at entry", "Rs 25,000 at 3+ years", "3.0% to 9.6% earn Rs 50,000+", "15.0% in formal work" (PLFS 2025) | alt "Pay of a plain commerce-type degree in formal work: Rs 18,000 at entry and Rs 25,000 at three years" | caption "The plain-degree baseline most commerce salary pages skip."
2 commerce-career-options-with-salary-three-clocks.webp | three clocks: exam clock, low-pay clock, payoff clock; one line each | alt "The 3-Clock Check: exam clock, low-pay clock and payoff clock" | caption "Run each route through three clocks before you start."
3 commerce-career-options-with-salary-route-scalability.webp | ladder of routes with Scalable / Scalable with a business layer / Not so scalable chips (route names only, no pay) | alt "Commerce routes ordered from most scalable to least scalable" | caption "Lead with routes where pay can grow past a scale."
4 commerce-career-options-with-salary-pass-rates-2026.webp | bar chart: CA Foundation 20.09, Inter both groups 8.47, Final both 14.07, CS Executive 17.41/22.19, CMA Inter 19.68, CMA Final 32.97 with source line | alt "2026 pass rates for CA, CS and CMA exam stages" | caption "One sitting each, so rates are not a ranking of the institutes."
5 commerce-career-options-with-salary-stipend-gap.webp | arithmetic card: Rs 1,32,000 / 1,08,000 / 84,000 stipend over two years versus Rs 4,32,000 | alt "Two years of CA stipend compared with a graduate's median formal pay" | caption "The low-pay clock for the CA route, worked out."
6 commerce-career-options-with-salary-spread.webp | three-row spread chart: analyst 3.7x, accountant 4.1x, digital marketing manager 7.4x | alt "Gap between 10th and 90th percentile pay for three commerce job titles" | caption "Within one job title, the top is several times the middle."
7 commerce-career-options-with-salary-who-pays.webp | table card: route, who pays, how they trust you, number to watch | alt "Who pays and how they find you in commerce careers" | caption "Referrals and proof come before price."

### 12. /blog/career-options/law-career-options/

Page file: `src/pages/blog/career-options/law-career-options/index.astro`

## IMAGE BRIEF (no img tags on the page yet; page registered without images)
Hero: `law-career-options-hero.webp` (1600x900). Scene: a young Indian law graduate at a desk with a printed route map and a laptop, bar gown folded on a chair. Alt: "Law graduate comparing career routes on a printed map after finishing an LLB". Caption: "Pick the route by the next gate you can clear, then by how the money works."
1. `law-career-options-stage-ladder.webp`: infographic of five stages (5-year integrated, 3-year LLB, LLB pre-AIBE, AIBE cleared, LLM) with next gate. Text only from the stage table. Alt: "Ladder of law degree stages and the next legal gate at each". Caption: "Your stage decides your next gate."
2. `law-career-options-route-map.webp`: ten routes with three scalability colour tags (Scalable, Scalable with a business layer, Not so scalable). Alt: "Ten law career routes labelled by scalability". Caption: "Routes that let you set price and add clients come first."
3. `law-career-options-judiciary-rule-timeline.webp`: timeline 2002, 20 May 2025, 21 Aug 2026, 31 Mar 2027 / 1 Apr 2027. Alt: "Timeline of the judicial service practice rule from 2002 to 2027". Caption: "The rule changed twice in fifteen months. Read your state notification."
4. `law-career-options-entry-gates.webp`: cards for AIBE, CLAT PG, UGC NET, ICSI CSEET with the verified rules and dates. Alt: "Entry rules for AIBE, CLAT PG, UGC NET Law and company secretary". Caption: "Confirm dates on the official site."
5. `law-career-options-rule-36-and-49.webp`: two-column "What Rule 36 stops / What still works" plus a Rule 49 note. Alt: "What Bar Council advertising and salaried-job rules allow advocates to do". Caption: "A salaried job and a court practice are two different lives."
6. `law-career-options-stacked-competition.webp`: two-filter diagram for judiciary, top firm, litigation, arbitrator, teaching. Alt: "Two stacked filters in law careers". Caption: "Clearing the first filter does not clear the second."
7. `law-career-options-who-pays.webp`: table graphic of who pays and the first skill per route. Alt: "Who pays and how clients find a lawyer, by route". Caption: "Learn the who-pays layer early."

### 13. /blog/career-options/geography-career-options/

Page file: `src/pages/blog/career-options/geography-career-options/index.astro`

## IMAGE BRIEF (not built; the page has no img tags and references no image files)
1. geography-career-options-hero.webp. Scene: an Indian graduate at a desk with a laptop showing a district map in QGIS and a printed topographic sheet beside it. Alt: Indian geography graduate analysing a district map on a laptop. Caption: Geography is three subjects in one degree; the mapping skill is what employers pay for.
2. geography-career-options-at-a-glance-summary.webp. Infographic: nine routes with the three scalability chips. On-image text: Scalable, Scalable with a business layer, Not so scalable; route names from the page. Alt: Summary card of nine geography career routes with scalability labels. Caption: Nine routes, led by the ones that can grow.
3. geography-career-options-comparison-background-doors.webp. Table graphic: BA, BSc with maths, MA/MSc, any graduate plus RS/GIS master's versus doors that open directly. On-image text from the background table. Alt: Table showing which geography background opens which career doors. Caption: Your school stream and degree type change which doors open.
4. geography-career-options-stat-upsc-geography-optional.webp. Stat panel: 1,260 Mains takers, 94 selected, 7.5%, UPSC Annual Report 2023-24. Alt: UPSC geography optional 2023-24 selection numbers. Caption: A popular optional does not mean easy selection.
5. geography-career-options-comparison-entry-rules.webp. Table graphic: Survey of India (B.Sc with Maths, 60%, age 21-28), NRSC Project Associate-I (M.Sc RS/GIS with B.Sc any subject), UGC NET (master's 55%), CEPT M.Plan (50%, entrance mandatory, 132 seats). Alt: Entry rules for four geography career routes. Caption: Read the essential-qualification column before planning years around a post.
6. geography-career-options-linear-gis-ladder.webp. Four-step ladder: prepare and digitize, analyze with QGIS and SQL, automate with Python, advise in one domain; first step marked most exposed to AI. Alt: Four-rung GIS skill ladder from digitizer to domain analyst. Caption: Move up the ladder before the bottom rung is automated.
7. geography-career-options-framework-three-gates-map-portfolio.webp. Three Gates (proof of skill, communication, value) with a map portfolio example. Alt: Three Gates applied to a geography map portfolio. Caption: One finished map project passes all three gates.

### 14. /blog/career-options/mathematics-career-options/

Page file: `src/pages/blog/career-options/mathematics-career-options/index.astro`

## IMAGE BRIEF (not built; no img tags on page)
1. mathematics-career-options-hero.webp: Indian graduate at a desk with a notebook of equations and a laptop showing a chart, a branching path behind. Alt: Indian maths graduate comparing career routes at a study desk. Caption: A maths degree opens doors; the entry rule decides which.
2. mathematics-career-options-at-a-glance-summary.webp: eight route chips with the three labels Scalable / Scalable with a business layer / Not so scalable. On-image text from the page only.
3. mathematics-career-options-stat-gate-numbers.webp: stat panel "28 of 44" ISS posts (UPSC 2026 notice), "3 of 11" DRDO SAG maths JRF posts (Aug 2026), "Rs 500" ACET fee (Dec 2026 session).
4. mathematics-career-options-comparison-entry-rules.webp: table graphic of ACET, ISS, RBI DSIM, CSIR-UGC NET, DRDO SAG with "Does plain maths clear it?" yes/no.
5. mathematics-career-options-linear-subject-to-route.webp: arrows from probability, algebra, optimisation, analysis to routes.
6. mathematics-career-options-funnel-two-stage-filters.webp: two-stage diagram for ISS (800 marks written then 200 interview) and RBI DSIM (200, 240, 75 marks).
7. mathematics-career-options-table-ai-checks.webp: four tasks, what AI does, where maths still wins.

### 15. /blog/career-options/career-options-after-graduation/

Page file: `src/pages/blog/career-options/career-options-after-graduation/index.astro`

## IMAGE BRIEF (no img tags in the page yet)
1. Hero `career-options-after-graduation-hero.webp`: graduate at a desk with seven doors/paths labelled Job, Skills, Study, Exams, Abroad, Freelance, Gap year. Alt: "Indian graduate choosing between seven career routes after graduation". Caption: "Seven routes open after any degree; the difference is what a wrong turn costs."
2. `career-options-after-graduation-at-a-glance-summary.webp`: infographic with the three numbers and the three scalability labels. On-image text: "Months until money", "Rupees sunk before you know", "Proof kept if you stop", "Scalable / Scalable with a business layer / Not so scalable". Alt: summary of the Three-Number Check. Caption: "Compare routes by three numbers, not by how safe they sound."
3. `career-options-after-graduation-job-numbers-india.webp`: three stat tiles: 15.9% (youth unemployment Apr-Jun 2026, MoSPI), about 40% / about 20% (graduates, 2023, State of Working India 2026), 56.35% (India Skills Report 2026). Alt: stat cards on youth and graduate job numbers. Caption: "These numbers explain why a degree alone is a weak plan."
4. `career-options-after-graduation-seven-routes-compared.webp`: 7-row table image route x three numbers x label (text from the page table). Alt: comparison of seven post-graduation routes. Caption: "Routes led by the ones that scale."
5. `career-options-after-graduation-entry-rules.webp`: entry-rule card for UPSC (21-32, six attempts), CAT (50%/45%), CA direct entry (55%/60%), IBPS PO (20-30). Alt: entry rules for graduates. Caption: "Check each rule on the official page."
6. `career-options-after-graduation-education-budget-10-percent.webp`: bar of Rs 10 lakh example: Rs 1 lakh credential, Rs 9 lakh skills and security; caution zone above 20%. Alt: 10% education budget example. Caption: "An example, not a rule."
7. `career-options-after-graduation-rail-rule-three-gates.webp`: main route bar with a parallel proof rail and Gates 1-3. Alt: main route plus proof rail. Caption: "Run one proof rail beside any route."

### 16. /blog/college-degrees/polytechnic-diploma-after-10th-which-trade-to-choose/

Page file: `src/pages/blog/college-degrees/polytechnic-diploma-after-10th-which-trade-to-choose/index.astro`

## IMAGE BRIEF (no img tags in the page yet)
Folder: /images/blog/college-degrees/polytechnic-diploma-after-10th-which-trade-to-choose/
1. Hero: polytechnic-diploma-after-10th-which-trade-to-choose-hero.webp. Scene: Class 10 student and parent at a polytechnic open day looking at a workshop bench with a lathe and a wiring panel. No on-image text. Alt: "Class 10 student and parent visiting a polytechnic workshop with machines and an electrical panel". Caption: "A trade is chosen by the work, the nearby employer and the exits, not by the seat you get."
2. state-entry-rules-polytechnic-after-10th.webp. Infographic: seven states, entry mode (test or Class 10 merit) and one check each: AP 35% and Maths, TS 35% and Maths, Delhi Science+Maths+English and age limit 21/23, UP 50% in Maths and PC, Maharashtra merit via CAP, TN merit, Karnataka DCET is lateral entry. Alt: "Chart of polytechnic entry rules in seven states". Caption: "Check Maths, marks and age limits before you plan."
3. seats-not-scarce-polytechnic.webp. Panel: 9.95 lakh approved seats (2024-25), 3,566 polytechnics, 59% private, vacancy 33% (2022-23) to 49.4% (2021-22), 5 autonomous colleges. Alt: "Figures on polytechnic seats, vacancies and private share". Caption: "Seats are easy; a good institute is the filter."
4. trade-scalability-ladder.webp. Chart: nine trades grouped Scalable / Scalable with a business layer / Not so scalable. Alt: "Polytechnic trades grouped by scalability rating". Caption: "Where your own skill can be sold directly."
5. cluster-exit-side-income-check.webp. Three-step framework with the three questions. Alt: "Three-step check: cluster, exit and side-income". Caption: "Three questions to ask before ranking branches."
6. diploma-vs-class-11-12-years.webp. Timeline: diploma 3 years, diploma plus lateral B.Tech about 6, Class 11-12 plus 3-year degree 5, plus B.Tech 6. Alt: "Timeline comparing diploma and Class 11 and 12 routes". Caption: "Same six years to B.Tech, with three years of skill built along the way."
7. lateral-entry-bridge.webp. Checklist: 45% (40% SC/ST), state entry test (AP ECET, Karnataka DCET), branch match, limited seats. Alt: "Checklist for lateral entry from diploma to B.Tech". Caption: "A bridge, not a promise."

### 17. /blog/career-options/zoology-career-options/

Page file: `src/pages/blog/career-options/zoology-career-options/index.astro`

## IMAGE BRIEF (no images in the page yet; use /images/blog/career-options/zoology-career-options/)
Hero zoology-career-options-hero.webp 1600x900: Indian student in field gear with notebook and binoculars beside a pond or grassland edge, laptop with a species table in the foreground. Alt: "Indian zoology student with a field notebook and laptop comparing wildlife, fisheries and data career routes". Caption: "A zoology degree pays differently depending on the route you add to it."
1 at-a-glance-summary 1600x1000: seven route tiles with scale labels. Text: "Seven routes", "Scalable", "Scalable with a business layer", "Not so scalable". Alt: summary of seven zoology routes and their scalability labels. Caption: Each route has its own payer, entry rule and ceiling.
2 degree-stage ladder 1600x1000 (BSc, MSc, JRF/PhD): text from the stage table. Alt: ladder of zoology degree stages and what each opens.
3 fee-vs-field-pay comparison 1600x1000: bars "WII fee about Rs 6,00,000" vs "BNHS project fellow Rs 3,00,000 a year" vs "CSIR JRF Rs 4,44,000 a year"; text "2.0 years of project pay". Alt: comparison of WII fee with BNHS and CSIR annual pay. Caption: Pay and fee only make sense side by side.
4 fish-bee-silk-poultry stats 1600x1000: "195 lakh tonnes fish 2024-25", "over 30 million livelihoods", "1.4 lakh tonnes honey 2024", "1.07 lakh tonnes honey exported FY 2023-24". Alt: stat panel of Indian fisheries and honey figures. Caption: Official numbers show real volume in the animal-economy routes.
5 second-filter funnel 1600x1000: WII 20 seats -> project contracts; IFoS about 80 vacancies, 1,046 in mains, 13.1 per vacancy. Alt: funnel showing wildlife and forest service second filters.
6 who-pays map 1600x1000: seven routes with payer and trust signal (from table). Alt: map of who pays for each zoology route.
7 first-short-test decision 1600x1000: pick two routes, read notices, one piece of work, ask three people, drop one. Alt: decision steps for testing two zoology routes. Caption: A short test replaces months of comparing labels.

### 18. /blog/career-options/botany-career-options/

Page file: `src/pages/blog/career-options/botany-career-options/index.astro`

## IMAGE BRIEF (no images referenced in the page yet)
1. Hero, botany-career-options-hero.webp: a student in a nursery aisle holding a tablet beside seedlings and a pressed-specimen folder; on-image text: "Botany career options in India". Alt: "Botany student in a plant nursery with a tablet and a folder of pressed specimens". Caption: "Nine routes from plant data to forest service."
2. botany-job-ad-decoder.webp: infographic of six ad titles linked to botany branches (taxonomy, pathology, ecology, ethnobotany, propagation, teaching). Text only from the decoder table. Alt: "Job ad titles mapped to the botany branch behind each". Caption: "Job ads rarely say botany."
3. botany-routes-by-scalability.webp: three-column chart (Scalable / Scalable with a business layer / Not so scalable) listing the nine routes. Alt: "Nine botany routes grouped by scalability label". Caption: "Ordered by growth room, not prestige."
4. botany-plant-business-layers.webp: three cards: nursery, tissue culture lab, herbal raw material, each with its number to watch. Alt: "Three plant business layers with the number to watch for each". Caption: "Rules to check and one number to watch."
5. bsi-project-post-pay-ledger.webp: bar graphic of Rs 20,000, Rs 31,000, Rs 37,000 (CSIR JRF), Rs 61,000 a month with post counts 16, 8 and 1. Alt: "Monthly pay for Botanical Survey of India project posts compared with the CSIR JRF stipend". Caption: "Contract pay by qualification."
6. botany-ai-drone-pressure.webp: four-row table graphic (naming common plants, herbarium data entry, drone plot surveys, tissue culture handwork) with High/High/Medium/Low. Alt: "How AI and drones affect four botany tasks". Caption: "Where the pressure falls."
7. botany-proof-shelf.webp: five proof items (dated plant list, ten pressed specimens, cuttings log, contamination log, small map). Alt: "Five proof items a botany graduate can build". Caption: "Proof someone else can check."

### 19. /blog/career-options/bsc-physics-career-options/

Page file: `src/pages/blog/career-options/bsc-physics-career-options/index.astro`

## IMAGE BRIEF (images produced separately; the page references none yet)
Hero: `bsc-physics-career-options-hero.webp`. Scene: an Indian student at a window-side desk comparing a printed recruitment notice, a physics notebook and a laptop showing a plotted dataset. Alt: "Indian physics student comparing an official recruitment notice with a laptop plot at a home desk". Caption: "The notice, not the degree name, decides which physics doors are open."
1. `bsc-physics-career-options-at-a-glance-summary.webp`. Infographic: eight routes with the three scalability labels (Scalable, Scalable with a business layer, Not so scalable). Text only from the page: route names and labels. Alt: "Summary card ranking eight BSc physics career routes by scalability". Caption: "Routes ranked by how far income and reach can grow."
2. `bsc-physics-career-options-comparison-doors-plain-bsc-clears.webp`. Table graphic: Door | What the notice asks | Clears with plain BSc? (JEST yes for MSc seats; JAM yes; NISER medical physics yes; BARC OCES no; NESAC JRF no; IMD no). Alt: "Comparison of physics doors and whether a plain BSc clears each". Caption: "Read the degree line before you plan around a door."
3. `bsc-physics-career-options-stat-barc-oces-physics-rules.webp`. Stat panel: Rs 74,000 stipend, 60% in BSc and MSc, age 26, 3-year bond, interview decides, MSc Medical Physics not eligible. Alt: "Key rules of the BARC OCES physics discipline in 2026". Caption: "OCES-2026 physics rules as printed in the advertisement."
4. `bsc-physics-career-options-linear-medical-physics-path.webp`. Four-step linear path: BSc physics with maths, master's or post-MSc diploma, internship, registration. Text: "10 seats at NISER", "CGPA 6 for internship". Alt: "Four-step path to becoming a medical physicist". Caption: "Each step in medical physics has its own gate."
5. `bsc-physics-career-options-comparison-maths-on-marksheet.webp`. Three combinations (Physics-Maths-Chemistry, Physics-Maths-Electronics/CS, Physics without Maths) vs doors they keep open. Alt: "Comparison of three physics subject combinations and open doors". Caption: "Maths at BSc level is named in several physics notices."
6. `bsc-physics-career-options-asymmetrical-two-stage-filters.webp`. Two-stage filter graphic for research, OCES, IMD, medical physics. Alt: "Physics routes that filter candidates at two separate stages". Caption: "Clearing the first filter does not finish the climb."
7. `bsc-physics-career-options-mistakes-wrong-turns.webp`. Mistakes versus smarter moves (dropping maths, planning on ISRO scientist after BSc, choosing MSc Medical Physics for OCES, treating project posts as permanent). Alt: "Expensive wrong turns for physics students and the safer move". Caption: "Four wrong turns that cost years."

### 20. /blog/career-options/bsc-chemistry-career-options/

Page file: `src/pages/blog/career-options/bsc-chemistry-career-options/index.astro`

## IMAGE BRIEF (no images in the page yet; use /images/blog/career-options/bsc-chemistry-career-options/)
Hero bsc-chemistry-career-options-hero.webp 1600x900: Indian BSc chemistry graduate in a lab coat and safety glasses at a bench with a burette stand and a laptop showing a calibration curve, window light. Alt: "Indian BSc chemistry graduate in a lab coat at a bench with a laptop showing a calibration curve". Caption: A BSc opens some chemistry doors directly and leaves others to a master's.
1 bsc-chemistry-career-options-at-a-glance-summary 1600x1000: ten route tiles with the three labels. Text: "Ten routes", "Scalable", "Scalable with a business layer", "Not so scalable". Alt: summary of ten BSc chemistry routes and their scalability labels. Caption: Ten routes, ordered by how far they can scale.
2 bsc-chemistry-career-options-comparison-bsc-doors-msc-doors 1600x1000: two columns from the fork cards ("Doors a BSc opens directly", "Doors that name a master's"). Alt: comparison of chemistry doors a BSc opens and doors that need an MSc. Caption: Check whether your door names an MSc before you plan two more years.
3 bsc-chemistry-career-options-stat-pay-signals 1600x1000: bars from the pay ledger: "Payscale chemist average ₹2,89,512 a year", "CSIR JRF ₹4,44,000 a year", "FSSAI contract Food Analyst ₹7,20,000 a year", "BARC OCES stipend ₹8,88,000 a year", with the note "each needs an MSc". Alt: pay signals for chemistry routes compared with the Payscale average. Caption: The higher pay lines all sit behind a master's.
4 bsc-chemistry-career-options-stat-jam-chemistry-2025 1600x1000: funnel "14,759 registered, 12,721 appeared, 2,666 qualified", "18 percent of registrants". Alt: JAM 2025 Chemistry funnel from registered to qualified. Caption: Qualifying is not a seat.
5 bsc-chemistry-career-options-framework-four-rulebooks 1600x1000: four tiles (Schedule M, NABL ISO/IEC 17025, CPCB and FSSAI recognition, plant safety) with one line each from the page. Alt: four rulebooks that shape chemistry jobs in India. Caption: The rule is also where the demand comes from.
6 bsc-chemistry-career-options-stat-battery-reality 1600x1000: three tiles "2.8 percent of 50 GWh commissioned by October 2025", "1,118 jobs against 1.03 million estimated", "0 incentives paid". Alt: stat panel on India's battery cell incentive scheme progress. Caption: Battery headlines run ahead of battery jobs.
7 bsc-chemistry-career-options-framework-testing-lab-minimum 1600x1000: staircase "Work in an accredited lab", "Know the legal minimum: 9 staff", "Start with a smaller service". Alt: steps toward owning a chemistry testing lab. Caption: A testing lab is a later stage, not a first job.

### 21. /blog/career-options/bsc-agriculture-career-options/

Page file: `src/pages/blog/career-options/bsc-agriculture-career-options/index.astro`

## Image brief (images produced separately; page references none)
1. Hero `bsc-agriculture-career-options-hero.webp`: Indian BSc Agriculture graduate with a soil test kit, notebook and phone on a farm bund at morning light. Alt: "Indian agriculture graduate with a soil test kit and notebook weighing career options on a farm". Caption: "A degree opens doors; the route is chosen by who pays and which rule you meet."
2. `bsc-agriculture-career-options-seat-types-infographic.webp`: three seat types (ICAR quota, state quota, private). On-image text: "6,002 ICAR-quota seats, 2025-26", "National exam: 20 percent of university seats", "28,000+ UG students a year". Alt: infographic of three BSc Agriculture seat types. Caption: "At most about one seat in five comes through the national exam."
3. `bsc-agriculture-career-options-twelve-routes-chart.webp`: 12 routes grouped Scalable / Scalable with a business layer / Not so scalable. Text: route names and labels only. Alt: "Chart of twelve BSc Agriculture routes grouped by scalability". Caption: "Routes ordered by growth room."
4. `bsc-agriculture-career-options-exam-sums.webp`: bar comparison of annual figures: JRF Rs 3,82,000; Kerala AO lowest step Rs 6,62,400; ARS entry Rs 6,92,400; IBPS basic Rs 5,81,760. Alt: "Bar chart of yearly pay signals for agriculture exam posts". Caption: "Yearly pay signals from notices, before allowances."
5. `bsc-agriculture-career-options-four-business-layers.webp`: four cards: own enterprise, FPO, input retail, consulting, each with its number to watch. Alt: "Four business layers for agriculture graduates with the number to watch". Caption: "Four layers you can own."
6. `bsc-agriculture-career-options-natural-farming-gap.webp`: progress bar 2,045 of 10,000 input centres (20 percent). Alt: "Progress bar showing 2,045 of 10,000 bio-input resource centres set up by July 2025". Caption: "A gap that needs trained people."
7. `bsc-agriculture-career-options-ai-task-table.webp`: five tasks vs AI pressure (High/Medium/Low). Alt: "Table of farm advisory tasks rated by AI pressure". Caption: "Tools take the standard tasks; trust stays with a person."

### 22. /blog/college-degrees/iti-career-options/

Page file: `src/pages/blog/college-degrees/iti-career-options/index.astro`

## IMAGE BRIEF
1 hero iti-career-options-hero.webp: Class 10 student and parent at an ITI workshop bench with a wiring panel and a motor; no on-image text. Alt "Class 10 student and parent visiting an ITI workshop with an electrical panel". Caption "A trade is chosen by the work, the employers near you and what you could sell by year three."
2 iti-career-options-ncvt-scvt-certificate.webp: two-column infographic NCVT trades -> National Trade Certificate; SCVT trades -> State Trade Certificate; text only from page. Alt/caption accordingly.
3 iti-career-options-eligibility-ladder.webp: Class 8 / Class 10 / Class 10 fail / Class 12 steps with examples (Plumber, Sewing Technology; Electrician, Fitter; COPA).
4 iti-career-options-scalability-by-trade.webp: trade groups with the three labels.
5 iti-career-options-affiliation-check.webp: six steps incl. ncvtmis.gov.in search by trade and session.
6 iti-career-options-after-iti-routes.webp: flow ITI -> apprenticeship -> Group D / PSU / diploma second year / own service.
7 iti-career-options-business-layers.webp: workshop, contracting, repair and service, solar and EV service.

### 23. /blog/freelancing-business/business-ideas-for-students/

Page file: `src/pages/blog/freelancing-business/business-ideas-for-students/index.astro`

## IMAGE BRIEF (no images in the page yet; use /images/blog/freelancing-business/business-ideas-for-students/)
Hero business-ideas-for-students-hero.webp 1600x900: Indian college student at a hostel desk with a laptop showing a cafe menu design and a phone with a WhatsApp chat, notebook with a price list. Alt: "Indian college student designing a cafe menu on a laptop with a phone and notebook on the desk". Caption: A student business starts with one skill and one local customer.
1 business-ideas-for-students-at-a-glance-summary.webp 1600x1000: twelve idea tiles in three colour groups with the labels Scalable, Scalable with a business layer, Not so scalable. Alt: summary of twelve student business ideas and their scalability labels. Caption: Twelve ideas, ordered by how far they can scale.
2 business-ideas-for-students-framework-age-rules-gate.webp 1600x1000: rule tiles using only page facts: "Minor's agreement is void: a parent signs", "Savings account from age 10 within bank limits", "YouTube ads: 18 or guardian", "FSSAI registration up to Rs 1.5 crore from 1 April 2026". Alt: age and rules checklist for student businesses in India. Caption: Check the rule before you pick the idea.
3 business-ideas-for-students-comparison-scalable-vs-time-bound.webp 1600x1000: two columns "Skill-led services you can package" versus "Time-bound or thin-margin work". Alt: comparison of scalable and non-scalable student business ideas. Caption: Package a skill; do not just sell hours.
4 business-ideas-for-students-framework-cost-per-sale.webp 1600x1000: formula strip "Price minus cost of one sale, times sales, minus fixed costs" with a worked example using clearly marked sample numbers (labelled "example only"). Alt: simple cost-per-sale method for a student business. Caption: Count the cost before you count the dream.
5 business-ideas-for-students-stat-task-scam-pattern.webp 1600x1000: "Over 100 task-fraud websites found by I4C, blocked in 2023" and a four-step flow: small payout, ask for deposit, bigger promise, money frozen. Alt: how a task-based part-time job scam works. Caption: If you must pay to earn, it is a scam.
6 business-ideas-for-students-framework-seven-sales-basics.webp 1600x1000: seven steps from the sales basics list. Alt: seven basic sales steps for students. Caption: Sales is a skill you can learn at any age.
7 business-ideas-for-students-framework-3-gates.webp 1600x1000: three gates: Proof of Skill, Proof of Communication, Proof of Value. Alt: the 3 Gates for a student business. Caption: Three real tests before more money goes in.

### 24. /blog/career-options/is-it-a-good-career-in-india/

Page file: `src/pages/blog/career-options/is-it-a-good-career-in-india/index.astro`

## IMAGE BRIEF (page has no images yet)
Hero is-it-a-good-career-in-india-hero.webp: Indian graduate at a shared table comparing a laptop, printed job notes and a notebook with route sketches. Alt: "Indian graduate comparing laptop work and job notes while choosing a route in IT". Caption: "IT is five businesses. Pick the door, then the second job."
1 -sector-map.webp: five segments with USD 149/63/59/23/21bn and a scalability label each.
2 -jobs-vs-revenue.webp: two bars, revenue +6.1% vs jobs +2.3% (FY26, Nasscom).
3 -four-doors.webp: campus, company tests, referral, lateral, with the experience gate (GCC 56% at 4-10 yrs).
4 -route-scalability.webp: five routes with Scalable / with a business layer / Not so scalable.
5 -ladder-or-treadmill.webp: the five check questions.
6 -non-cs-doors.webp: four starting points and their best doors.
7 -three-gates.webp: Proof of skill, communication, value for IT lanes.

### 25. /blog/career-options/is-sap-a-good-career-in-india/

Page file: `src/pages/blog/career-options/is-sap-a-good-career-in-india/index.astro`

## IMAGE BRIEF (no images in the page yet)
1. is-sap-a-good-career-in-india-hero.webp: Indian finance graduate at a desk with an ERP-style process diagram on screen and a notebook; on-image text: "Is SAP a good career?" Alt: "Finance graduate studying an SAP process map at a home desk". Caption: "SAP rewards people who can explain one real process."
2. -eight-tracks.webp: horizontal ladder of eight tracks, three scalability colours (Scalable teal, Scalable with a business layer gold, Not so scalable red). Text from the track table only. Alt: "Eight SAP career tracks rated by scalability". Caption: "Development skills that work outside SAP lead; classic ABAP, Basis and support sit last."
3. -2027-timeline.webp: timeline end 2027 (mainstream maintenance), 2028 to 2030 (extended, +2 points), 2031 to 2033 (cloud transition option), 2040 (S/4HANA commitment). Alt: "SAP ERP maintenance timeline from 2027 to 2040". Caption: "The demand wave is real and time-limited."
4. -official-vs-institute.webp: two columns "SAP's own certification" (performance-based exam, annual assessment) vs "Institute paper" (issued by the institute). Alt: "Official SAP certification compared with an institute certificate". Caption: "Only one of these can be checked with SAP."
5. -pay-by-experience.webp: bar chart of PayScale totals Rs 3.65 lakh (under 1 yr, 160 salaries), Rs 5.99 lakh (1 to 4 yrs, 591), Rs 13.3 lakh (5 to 9 yrs senior pool, 187), labelled "PayScale, May and July 2026". Alt: "SAP consultant pay by experience from PayScale". Caption: "Different job-title pools; read the direction, not a ladder."
6. -fresher-doors.webp: five backgrounds with best door (from table). Alt: "Best SAP entry door by educational background". Caption: "Start from what you already know."
7. -freelance-barriers.webp: four gates (client access, licences, depth, project-wave timing). Alt: "Four barriers to freelance SAP consulting". Caption: "Independence comes after repeat project experience."

### 26. /blog/career-options/is-bpo-a-good-career-in-india/

Page file: `src/pages/blog/career-options/is-bpo-a-good-career-in-india/index.astro`

## IMAGE BRIEF (no images in page yet)
1. Hero `is-bpo-a-good-career-in-india-hero.webp`: Indian young adult with headset at a quiet workstation, laptop showing a help-desk screen, notebook. Alt: "Young Indian customer support executive with a headset at a workstation reviewing a help desk screen". Caption: "BPO works best as a paid first step with a plan for the next one."
2. `...-at-a-glance-summary.webp`: summary card. Text: "Good first job, weak long-term plan", "Voice, chat, tech support, back office, KPO", "Plan the exit on day one". 
3. `...-roles-voice-non-voice-kpo.webp`: comparison of five roles with work and shift. Text from roles table.
4. `...-stat-hiring-slowdown.webp`: stat panel: "Net headcount growth 177,000 (2021-22), 130,000 (2022-23), under 17,000 a year in the last two years. Source: Reuters, 15 Oct 2025, TeamLease Digital." Alt describes the three bars.
5. `...-night-shift-ask-before-you-accept.webp`: checklist (fixed or rotating, exact times, transport, weekly offs) plus "IARC 2019: probably carcinogenic (Group 2A)". 
6. `...-ai-pressure-by-role.webp`: ranked list: scripted voice, chat, back office high; escalations lower; bot owner and analyst growing.
7. `...-bridge-or-burrow.webp`: five questions of the Bridge or Burrow check.
8. `...-scam-fee-warning.webp`: "Never pay for registration, training, kit, verification or offer letter. Report: 1930".

### 27. /blog/career-options/is-photography-a-good-career-in-india/

Page file: `src/pages/blog/career-options/is-photography-a-good-career-in-india/index.astro`

## IMAGE BRIEF (no images in the page yet)
All text on images uses only facts already on the page.
1. Hero: `is-photography-a-good-career-in-india-hero.webp`. Scene: Indian photographer at a desk with a mirrorless camera, a laptop showing a cull grid, a notebook and a price list; natural window light; no brand logos. Alt: "Indian photographer reviewing a photo set on a laptop beside a camera and a notebook with a price list". Caption: "Photography becomes a career through genre choice, price, proof of work and repeat clients."
2. At a glance: `...-at-a-glance-summary.webp`. Infographic card: Verdict "good for those who run it like a business"; "No degree or licence needed"; "Rent before you buy"; "AI hits plain catalogue and stock first". Alt: summary card of the photography verdict. Caption: "The genre decides most of the outcome."
3. Genre ladder: `...-genre-scalability-ranking.webp`. Eight rows with the Scalable / Scalable with a business layer / Not so scalable chips exactly as in the table. Alt: ranking of photography genres by scalability. Caption: "Crowded routes stay in the list with their risk."
4. Pay by source: `...-comparison-pay-by-source.webp`. Table graphic with three rows: studio listings Rs 12,000-30,000 a month; vendor day rates candid Rs 10,000-28,000 and photo plus video Rs 30,000-65,000; US median $44,660 and -1% outlook, each with a trust tag. Alt: comparison of photographer pay figures by source with trust level. Caption: "Every number has a named source and a trust level."
5. Price floor: `...-linear-price-floor-method.webp`. Six-step line: monthly need, yearly business cost, jobs delivered, divide, compare, deposit and scope. Include the labelled made-up example (Rs 3.6 lakh + Rs 1.2 lakh / 40 jobs = Rs 12,000). Alt: six-step method to calculate a photography price floor. Caption: "Find the price below which a job loses you money."
6. Wedding season: `...-chronological-wedding-season-gap.webp`. Timeline: 18 auspicious dates 12 Nov to 16 Dec (2024-25), about a month pause, mid-Jan to March. Alt: wedding season timeline showing a gap after the December dates. Caption: "Income follows the date calendar, so plan twelve months from one season."
7. AI by genre: `...-asymmetrical-ai-exposure-by-genre.webp`. High exposure (product catalogue, plain fashion catalogue, stock) vs slower change (wedding and event, photojournalism, wildlife). Alt: photography genres by AI exposure. Caption: "AI hits plain, repeatable pictures first and real-world presence last."

### 28. /blog/career-options/is-aviation-a-good-career-in-india/

Page file: `src/pages/blog/career-options/is-aviation-a-good-career-in-india/index.astro`

## IMAGE BRIEF (no images referenced in the page yet)
1. Hero, is-aviation-a-good-career-in-india-hero.webp: an Indian student at a window seat in an airport departure hall with a notebook and a phone, aircraft on the apron behind; on-image text: "Is aviation a good career in India?". Alt: "Student in an airport hall comparing aviation career routes". Caption: "Eight doors, each with its own gate."
2. is-aviation-doors-and-gates.webp: infographic of the eight doors with stream/age/medical gate icons; text only from the doors table (e.g. "Drone remote pilot: age 18 to 65, Class 10"). Alt: "Eight aviation career doors with who can apply and the gate for each". Caption: "Your stream, age and health decide the open doors."
3. is-aviation-routes-by-scale.webp: three-column chart (Scalable with a business layer / Not so scalable) listing the eight doors per the ranked table. Alt: "Eight aviation routes grouped by scalability label". Caption: "Ordered by growth room, not by glamour."
4. is-aviation-demand-signals.webp: four stat cards: 412 million passengers FY25; 164 airports vs 74 in 2014; +3.5% Apr-Nov 2025; more than 4,200 cancellations 1-9 December 2025. Alt: "Four signals on Indian aviation demand and disruption". Caption: "Growth comes in waves."
5. is-aviation-ame-licence-path.webp: five-step path (approved course, certificate of recognition, practical experience, module exams, add categories). Alt: "Five steps to an aircraft maintenance engineer licence". Caption: "A licence cannot be shortcut."
6. is-aviation-cabin-crew-exits.webp: ladder graphic of five moves from the exit table. Alt: "Five career moves after cabin crew". Caption: "Plan the exit on day one."
7. is-aviation-scam-red-flags.webp: checklist of six red flags from the scam callout with "Bretish Airways: Rs 7,000 to Rs 10,000" case note. Alt: "Red flags in fake airline job offers". Caption: "A real airline hires you and does not sell you the job."

### 29. /blog/career-options/is-ethical-hacking-a-good-career-in-india/

Page file: `src/pages/blog/career-options/is-ethical-hacking-a-good-career-in-india/index.astro`

## IMAGE BRIEF (no images in page yet)
Hero is-ethical-hacking-a-good-career-in-india-hero.webp: Indian student at a desk with a laptop showing a lab terminal and a handwritten scope sheet. Alt: "Indian student practising on a security lab with a written scope sheet beside the laptop". Caption: "Ethical hacking starts with a lab and a written scope."
1 -five-routes-scalability.webp: infographic of the five routes with Scalable / with a business layer / Not so scalable labels (text from route table).
2 -authorisation-line.webp: three questions of The Authorisation Line; on-image text only those questions plus "IT Act s43 and s66 apply".
3 -credential-costs.webp: CEH from USD 1,699, PNPT USD 499, OSCP bundle USD 1,749, exam alone 1,699 (vendor pages, Oct 2026).
4 -proof-ladder.webp: the five rungs from free rooms to a real report.
5 -bug-bounty-concentration.webp: top 100 programs USD 51M of USD 81M (HackerOne via BleepingComputer, Oct 2025).
6 -ai-squeezed-vs-rewarded.webp: two columns from the AI section.
7 -course-red-flags.webp: six red flags from the table.
Each with matching alt and caption written from the page text.

### 30. /blog/career-options/is-embedded-systems-a-good-career-in-india/

Page file: `src/pages/blog/career-options/is-embedded-systems-a-good-career-in-india/index.astro`

## IMAGE BRIEF (none referenced in page yet)
1. embedded-systems-career-hero.webp: engineer at a bench with dev board, logic analyser and laptop. Alt: "Embedded engineer debugging a microcontroller board with a logic analyser". Caption: "Embedded work is slow, patient debugging on real boards."
2. embedded-systems-career-at-a-glance.webp: summary card: verdict, lanes, ratings. Text only from page: "Embedded firmware: broad door", "VLSI: narrow, tool-heavy", "Own a board, build proof".
3. embedded-systems-week-split.webp: four-block week (35/25/20/20) labelled as one site's sketch.
4. embedded-systems-sector-map.webp: five sectors with ratings.
5. embedded-systems-skills-ladder.webp: five rungs with proof per rung.
6. embedded-vs-vlsi-fork.webp: six-path comparison.
7. india-semiconductor-facts.webp: Semicon 2.0 15 Jul 2026, Rs 1,27,500 crore, 315 universities, 68,000 trained; note counts vary.
Alt text and captions drawn only from the table facts above.

### 31. /blog/career-options/is-network-engineering-a-good-career-in-india/

Page file: `src/pages/blog/career-options/is-network-engineering-a-good-career-in-india/index.astro`

## IMAGE BRIEF (no images in page yet)
Hero: is-network-engineering-a-good-career-in-india-hero.webp. Indian learner at desk with laptop showing a simple network diagram and notebook. Alt: "Indian learner building a small office network diagram on a laptop with notes beside it". Caption: "A network career starts with a small network you can build and explain."
1. ...-six-roles.webp: six role cards (cloud networking, network security, enterprise, SD-WAN, telecom/5G, NOC) with the page's labels (Scalable / Scalable with a business layer / Not so scalable). Alt: "Six network engineering roles with scalability ratings".
2. ...-certificate-costs.webp: CCNA US$300; CCNP ENCOR US$400 + US$300; AWS ANS US$300 retires 31 Dec 2026; AZ-700 free yearly renewal. Alt: "Network certificate costs from Cisco, AWS and Microsoft".
3. ...-old-vs-new-work.webp: fading (manual commands) vs growing (Python/Ansible, cloud networks, design). 
4. ...-entry-pay.webp: Payscale entry Rs 2.95 lakh (<1 yr), Rs 4.13 lakh (1-4 yrs), base percentile range Rs 2.4-10 lakh; "indicative, Payscale July 2026".
5. ...-who-hires.webp: employer types plus TRAI 1,200.8M subscribers.
6. ...-business-layer.webp: cabling, Wi-Fi, CCTV, firewall, yearly maintenance contract; who pays and the one number (visits to signed quotes).
7. ...-lab-gates.webp: 3 Gates for a first lab.

### 32. /blog/career-options/is-petroleum-engineering-a-good-career-in-india/

Page file: `src/pages/blog/career-options/is-petroleum-engineering-a-good-career-in-india/index.astro`

## IMAGE BRIEF (no images referenced in the page yet; file names under /images/blog/career-options/is-petroleum-engineering-a-good-career-in-india/)
1. Hero `is-petroleum-engineering-a-good-career-in-india-hero.webp` - Indian engineer in hard hat and safety gear at an onshore well site at dusk, laptop with a decline curve. Alt: "Petroleum engineer reviewing well data at an onshore oil site in India". Caption: "Petroleum engineering is narrow, cyclical and well paid when you reach the right seat."
2. `...-four-disciplines.webp` - infographic of reservoir, drilling, production, facilities with one line each and scalability label. On-image text from the discipline table only. Alt: "Four areas of petroleum engineering with scalability ratings". Caption: "Four jobs hide under one title."
3. `...-india-oil-numbers.webp` - stat panel: 28.7 MT FY25 production (29.4 FY24), 88.2% import dependence, ~10% of basin area explored. Alt: "India crude output and import dependence FY25". Caption: "High demand does not mean many jobs."
4. `...-10-20-percent-fee-test.webp` - bar showing Rs 24 lakh fee against budgets of Rs 2.4 crore (10%) and Rs 1.2 crore (20%). Alt: "Fee of about Rs 24 lakh against 10 and 20 percent education budget limits". Caption: "Run the fee test before you pay."
5. `...-who-feels-a-crash-first.webp` - ladder: service firms, private operators, overseas contracts, public sector. Alt: "Which employers cut jobs first in an oil price crash". Caption: "Where the cycle hits first."
6. `...-ongc-three-stage-funnel.webp` - funnel: degree match, GATE or company test, promotion filter. Alt: "ONGC recruitment funnel in three stages". Caption: "Three filters, not one."
7. `...-routes-by-growth-headroom.webp` - table graphic of six routes with Scalable / Scalable with a business layer / Not so scalable. Alt: "Petroleum engineering routes ranked by growth headroom". Caption: "Lead with routes that can grow beyond one employer."

### 33. /blog/career-options/is-product-design-a-good-career-in-india/

Page file: `src/pages/blog/career-options/is-product-design-a-good-career-in-india/index.astro`

## IMAGE BRIEF (no images in page yet)
Hero: is-product-design-a-good-career-in-india-hero.webp. Indian designer at a lit home desk with a phone prototype, sticky-note flows and a laptop showing a component library. Alt: "Indian product designer comparing a phone prototype, sticky-note flows and a component library at a desk". Caption: "Product design is five layers of work, not one screen tool."
1. ...-five-layers-of-the-job.webp: infographic of layers 1-5 (Discovery, Interaction, Visual, System, Product thinking) with the proof artifact per layer. On-image text from page table only. Alt: "Five layers of a product designer's work with the proof each one needs". Caption: "Hiring leans on layers 1, 4 and 5 at mid and senior level."
2. ...-six-routes-rated.webp: six routes with labels Scalable / Scalable with a business layer / Not so scalable (exact labels). Alt: "Six routes into product design rated for scalability". Caption: "Rate the route before you pay for it."
3. ...-ucee-nid-dates.webp: timeline: UCEED reg 1-31 Oct 2026, exam 17 Jan 2027; NID deadline 30 Nov 2026. Alt: "Entrance dates for UCEED 2027 and NID B.Des". Caption: "Check the official sites for any change."
4. ...-ai-task-by-task.webp: three-column table (task, AI now, still yours). Alt: "Design tasks AI now speeds up and tasks that stay human". Caption: "The squeeze is at the bottom, in production work."
5. ...-pay-sources-confidence.webp: pay ranges with source and confidence tags (Glassdoor via Fueler, Rs 7-16L base etc.). Alt: "Product designer pay ranges in India with source and confidence". Caption: "Sources disagree most at entry level."
6. ...-web-design-cms-share.webp: bar chart of W3Techs shares (17 Oct 2026). Alt: "Share of websites by CMS: WordPress 39.6%, Shopify 5.3%, Wix 4.2%". Caption: "Plenty of sites exist; template builds are the squeezed part."
7. ...-four-ways-to-own-the-work.webp: four cards (freelance practice, studio, templates, audits) each with who pays and number to watch. Alt/caption accordingly.

### 34. /blog/career-options/is-real-estate-a-good-career-in-india/

Page file: `src/pages/blog/career-options/is-real-estate-a-good-career-in-india/index.astro`

## IMAGE BRIEF (images produced separately, none referenced in the page)
On-image text uses only verified page facts.
1. Hero `is-real-estate-a-good-career-in-india-hero.webp` (1600x900): an Indian young adult with a notepad and phone outside a residential building entrance, reviewing a document folder. Alt: "Indian young adult checking a property document folder outside a residential building, weighing a real estate career". Caption: "Real estate is many careers; the route and the paperwork habits decide the outcome."
2. At-a-glance `...-at-a-glance-summary.webp` (1600x1000): infographic with "Entry is easy, staying paid is hard"; "RERA number in every sale"; "Rs 10,000 a day, up to 5% of cost"; "Lead with routes that scale". Alt: "Summary card with the main answer on whether real estate is a good career in India". Caption: "The answer depends on the route, the rules and the trust you build."
3. `...-comparison-who-pays-money-arrives.webp`: table graphic of resale, rental, channel partner, salaried, property management with "who pays". Alt: "Table showing who pays in resale, rental, new project, salaried and property management routes". Caption: "Know who pays you and when before choosing a route."
4. `...-income-lumps-illustration.webp`: bar graphic "Rs 80,000 fee after three months = about Rs 26,700 a month" labelled illustration. Alt: "Illustration of one commission fee spread over three months". Caption: "A lumpy income: steady work, uneven pay."
5. `...-comparison-twelve-routes-scalability.webp`: routes with Scalable, Scalable with a business layer, Not so scalable labels. Alt: "Twelve real estate career routes rated by scalability". Caption: "Routes with repeat income or a licensed skill scale furthest."
6. `...-steps-rera-registration.webp`: five-step flow from the page. Alt: "Five steps to register as a real estate agent under RERA". Caption: "Registration is by state; check your state portal."
7. `...-self-red-flags-fraud-habits.webp`: red flags versus habits checklist. Alt: "Checklist of real estate fraud red flags and safe habits". Caption: "Papers, receipts and no part-cash deals protect your name."

### 35. /blog/career-options/is-corporate-law-a-good-career-in-india/

Page file: `src/pages/blog/career-options/is-corporate-law-a-good-career-in-india/index.astro`

## IMAGE BRIEF (no img tags on page yet)
Hero: `is-corporate-law-a-good-career-in-india-hero.webp` (1600x900). Scene: young Indian lawyer reviewing a deal checklist at a desk late in the evening beside a laptop and a printed route map. Alt: "Young lawyer reviewing a corporate deal checklist at a desk". Caption: "Corporate law rewards precise work, and it costs hours. Pick the route before the title."
1. `...-route-verdict.webp`: six routes with three scalability tags. Text from route table. Alt: "Six corporate law routes labelled by scalability". Caption: "Routes you can sell directly come first."
2. `...-hiring-pipeline.webp`: internship, pre-placement offer, campus round, off-campus; NLU Odisha 40 of 76 outcomes. Alt: "Steps of top law firm hiring and where offers come from". Caption: "Many offers are made before the campus round."
3. `...-nlu-medians.webp`: bar graphic of the seven medians with placement shares and caveat. Alt: "Median salary and placement share for seven National Law Universities". Caption: "The college you reach changes the odds."
4. `...-partner-ladder.webp`: rung and PQE band stair. Alt: "Law firm ladder from associate to equity partner by years of experience". Caption: "Equity is ownership, not just a title."
5. `...-in-house-ladder.webp`: five-step stack. Alt: "In-house legal career ladder from legal executive to general counsel". Caption: "Titles differ by company."
6. `...-ai-now-later.webp`: two columns, AI now vs build toward, with Mint figures (20-30%, 40-60%). Alt: "How AI changes junior corporate law work". Caption: "Routine work shrinks first."
7. `...-who-pays.webp`: who-pays table graphic. Alt: "Who pays and how corporate lawyers find clients, by route". Caption: "Learn the money layer early."

### 36. /blog/career-options/is-youtube-a-good-career-in-india/

Page file: `src/pages/blog/career-options/is-youtube-a-good-career-in-india/index.astro`

## IMAGE BRIEF (no img tags in the page yet)
Folder: `/images/blog/career-options/is-youtube-a-good-career-in-india/`
1. `is-youtube-a-good-career-in-india-hero.webp` (1600x900). Scene: young Indian creator at a home desk with phone on a small tripod, laptop showing a video timeline, notebook with a script; a study textbook stacked nearby (studies plus channel). No on-image text. Alt: "Indian creator planning a YouTube video at a home desk with a phone on a tripod, laptop timeline and notebook". Caption: "A channel becomes a career when it brings in work, not only views."
2. `...-at-a-glance-summary.webp` (1600x1000). Infographic: "Career or lottery" two columns. Text only from page: "Career: channel feeds a skill, service or product; more than one income source" / "Lottery: views are the only plan; ads are the whole income". Alt: "Two-column summary comparing a YouTube career with a YouTube lottery". Caption: "The plan behind the channel decides which one you are in."
3. `...-stat-odds-by-uploads.webp` (1600x1000). Bar visual of vidIQ figures: 0.20%, 1.86%, 8.65%, 30.77% reaching 1,000 subscribers by video-count change; footnote "vidIQ, Sept 2026, 32.9 million channels, observational". Alt: "Bar chart of share of small channels reaching 1,000 subscribers by number of videos added". Caption: "Channels that kept publishing were far likelier to get anywhere."
4. `...-linear-partner-programme-gate.webp` (1600x1000). Three-step ladder: Early tier 500 subs / 3 uploads in 90 days / 3,000 hrs or 3M Shorts views; Ads today 1,000 subs + 4,000 hrs or 10M Shorts; From 1 Feb 2027 for new creators 8,000 hrs or 20M Shorts. Alt: "Three-step chart of YouTube Partner Programme thresholds now and from February 2027". Caption: "Eligible is not earning, and the bar for new creators is rising."
5. `...-comparison-six-routes-scalability.webp` (1600x1000). Six route cards with chips: Scalable / Scalable with a business layer / Not so scalable (as in page table). Alt: "Six YouTube income routes ranked by scalability". Caption: "Own the offer and the customer, not only the views."
6. `...-self-faceless-ai-policy.webp` (1600x1000). Checklist of the AI label table (needs label / no label) plus "Mass-produced content is not monetised". Alt: "Checklist of AI uses on YouTube that need a label and uses that do not". Caption: "Faceless is fine. Mass-produced is not."
7. `...-linear-do-not-quit-rule.webp` (1600x1000). Two-column "keep your study or job while" vs "consider going full time when" (page bullets). Alt: "Checklist for when to keep a job and when to consider full-time YouTube". Caption: "Quit on evidence from more than one income source, not on a good month."
8. `...-mistakes-scams.webp` (optional). Warning-sign grid from scam table (agent promising monetisation for a fee, bought subscribers, bought channels). Alt: "Warning signs of YouTube monetisation scams". Caption: "No one can buy you approval."

### 37. /blog/career-options/is-archaeology-a-good-career-in-india/

Page file: `src/pages/blog/career-options/is-archaeology-a-good-career-in-india/index.astro`

## IMAGE BRIEF (none referenced in the page; images produced separately; on-image text only from the page's verified facts)
1. Hero `is-archaeology-a-good-career-in-india-hero.webp` (1600x900): Indian young adult at a trench edge with a clipboard and measuring tape at a site, daylight, field-notebook in hand. Alt: "Indian student recording measurements at the edge of an excavation trench with a notebook and tape". Caption: "Archaeology is mostly careful recording, and the career depends on what you add to it."
2. `...-at-a-glance-summary.webp` (1600x1000): "Good for committed people, thin for jobs"; "150 Assistant Archaeologist posts (2026 draft)"; "191 of 420 ASI archaeology posts vacant"; "Lead with routes that scale". Alt: "Summary card with the main answer on whether archaeology is a good career in India". Caption: "The work is real; funded seats are few."
3. `...-stat-hiring-funnel-numbers.webp`: stat panel of the numberRows (150 posts, 191/420, 67 DSA posts vs 1,407 applicants, NET 3/53/108, 121 permissions, Rs 6.8 crore for 16 digs). Alt: "Stat panel of ASI posts, vacancies, UGC NET qualifiers and excavation permissions". Caption: "Read the numbers behind the jobs."
4. `...-comparison-ten-routes-scalability.webp`: ten routes with Scalable, Scalable with a business layer, Not so scalable. Alt: "Ten archaeology career routes rated by scalability". Caption: "Routes that add a portable skill scale furthest."
5. `...-table-asi-assistant-archaeologist-draft-rules.webp`: draft-rule items (Level 6, 150 posts, age 30, master's subjects, probation field training). Alt: "Key points of the ASI draft rules for Assistant Archaeologist". Caption: "A draft from 20 April 2026; read the final rules."
6. `...-framework-core-multiplier-proof.webp`: core (field recording), multiplier (GIS, 3D, lab method), proof (one documented site). Alt: "Core skill, multiplier skill and proof for an archaeology career". Caption: "Build the skill that sells outside the dig."
7. `...-comparison-ai-tasks-pressure.webp`: AI pressure by task (site detection F1 34 to 38%, report drafts high, trench reading low). Alt: "AI pressure on archaeology tasks, from site detection to trench reading". Caption: "AI helps the routine work; people check the rest."

### 38. /blog/career-options/is-criminology-a-good-career-in-india/

Page file: `src/pages/blog/career-options/is-criminology-a-good-career-in-india/index.astro`

## IMAGE BRIEF (not yet produced; page has no img tags)
Hero: criminology-career-india-hero.webp, an Indian student with NCRB printouts and a laptop at a library desk; alt "Student comparing crime statistics tables for a criminology career decision in India"; caption "Criminology work starts with reading the data."
1 criminology-vs-forensic-science.webp: two-column infographic. Text only from page: "Why crime happens, who is harmed, what works" vs "Evidence for one case". Alt: comparison of criminology and forensic science.
2 criminology-route-scalability.webp: route list with labels Scalable with a business layer / Not so scalable.
3 criminology-degree-entry-map.webp: NFSU B.Sc. 3y CUET-UG, NFSU M.A. 2y CUET-PG, Rs 65,000 and Rs 60,000 per semester, TISS Rs 1,63,900.
4 criminology-openings-gap.webp: 1,468 vs 820 correctional posts (2022); 349 CAPF AC posts (2026); 86,420 cyber cases (2023).
5 criminology-pairing-stack.webp: criminology plus data / law / psychology with proof asset.
6 private-detective-law-india.webp: bill timeline 13 Aug 2007 introduced, 23 Mar 2020 withdrawn.
7 criminology-ai-split.webp: shrinking vs growing tasks.

### 39. /blog/career-options/is-astronomy-a-good-career-in-india/

Page file: `src/pages/blog/career-options/is-astronomy-a-good-career-in-india/index.astro`

## IMAGE BRIEF (no images in the page yet)
1. Hero `is-astronomy-a-good-career-in-india-hero.webp`: Indian student with laptop of sky-survey plots at a night window; alt "Indian student analysing sky-survey data on a laptop at night, weighing a career in astronomy"; caption "Astronomy is a good subject and a risky single job plan; the data skill is what travels."
2. `...-verdict-four-questions.webp`: four-card infographic. Text: "Good subject: yes", "Good job plan alone: no", "Training pays off if you leave: often", "Ceiling: not in the ladder". Alt: infographic of the four verdict questions. Caption: the verdict in four lines.
3. `...-funnel-five-stages.webp`: five-step narrowing funnel. Text: Degree, PhD gate, Funded PhD (up to 5 years at ARIES), Postdoc, Permanent post. Alt: five-stage funnel from degree to permanent post. Caption: each stage is a separate selection.
4. `...-stats-members-postdocs-fellowship.webp`: three stat tiles: "~1,000 ASI members", "2 in 3 US new PhDs took a postdoc (AIP, 2018-20)", "JRF 37,000 / SRF 42,000 a month at ARIES". Alt/caption accordingly.
5. `...-doors-tests-dates.webp`: table graphic: NSEA 21 Nov 2026, INAO 30 Jan 2027, JEST 12 Apr 2026 (fee 1,200), ARIES interviews 15-19 Jun 2026. Alt: key test dates for astronomy entry. Caption: confirm dates on official sites.
6. `...-skills-that-transfer.webp`: two-column "moves" vs "does not move" (modelling data, Python, big data, image processing vs knowing about stars). Alt and caption accordingly.
7. `...-seven-routes-scalability.webp`: seven routes with labels Scalable / Scalable with a business layer / Not so scalable as on page.
All on-image text taken from the figures above only.
