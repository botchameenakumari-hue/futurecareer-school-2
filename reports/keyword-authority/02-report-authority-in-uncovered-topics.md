# Report 2: Building authority in topics few people write about

*Prepared 2026-10-14 on branch `main`. Companion to [Report 1](01-report-authority-in-existing-topics.md). Same sources: both Google Sheets (all 35 tabs), the Search Console export, the site source, plus 11 live search spot-checks (log in Section 5).*

## 1. Bottom line

1. **17 themes, 3 at P1, 9 at P2, 5 at P3.** Every theme has at least one independent evidence source beyond the keyword-tool volume, and the evidence type is stated, so a low number in the sheets is never the only reason to build.
2. **The strongest themes are the ones the tool prices at 20-30 per phrasing.** Disability and learning-difference careers (over 100 phrasings, none above 30), second-chance pathways after failing Class 10/12 (about 200 phrasings, largest 70), the career-counselling profession itself (1,000 head term, then 170/140/110), and free government guidance (320/320/320 for the three official-sounding names) are all real, under-served and on-brand.
3. **Search Console is the best evidence the sheets cannot give.** It shows the site already being asked for things it has no page for: HR hierarchy levels, median CTC, "non-circuit branches", "is CUET easier than JEE", "education loan secured or unsecured", MPT salary by specialty. These are Report 1 and Report 2 items alike; Report 2 takes the ones that are definitions, hierarchies, process and rights rather than "career options" lists.
4. **Authority here means links and citations, not just clicks.** Disability, government-guidance and skilling-ecosystem pages are the ones schools, NGOs, journalists and training bodies actually link to. Judge them on referring domains and impressions at 8 and 12 weeks, not on first-month clicks.
5. **At least four themes carry accuracy risk (legal, financial, health-adjacent): W1, W5, W6, W8; W2 and W7 depend on board rules and accreditation status.** They need a sourcing pass and a "last verified" line, or they will do more harm than a gap.
6. **Where common sense overrides the tool, the report says so.** Where the sheets show a high volume but the intent does not fit (life skills, laptops, soft-skill definitions), they are listed as rejected in Report 1 Section 6, not here.

## 2. How "whitespace" was decided

Site reference: `origin/main` at commit 1a1fda4 (2026-10-14), not the older local checkout. That tree already contains 25 tools, 7 published datasets, 18 skills/stress/readiness self-assessments and a research-and-datasets hub; themes below were checked against it, and several should cite or link those assets (for example the course-eligibility and career-route datasets).

A topic is in this report only if all of these hold:

1. **No dedicated page on the site.** Checked by slug and then by searching the body text of every page (the counts are quoted per theme). Partly covered topics are labelled PARTLY COVERED and only spin-off questions are proposed.
2. **At least one evidence source:** keyword sheets (variant density counts as evidence even when each number is tiny), Search Console impressions, or a live SERP spot-check. Themes with only my judgement behind them are marked P3.
3. **It builds authority rather than traffic.** The question asked of each theme: would a school counsellor, a journalist or a competitor reasonably cite this page?
4. **It survives the doorway rules.** No theme proposes a template re-skinned across names; per-field or per-state pages are gated on the hub performing first (`DOORWAY_PREVENTION_GUIDE.md`).

Flags used in the evidence lines: **SPIKE** = more than half of the 12-month demand falls in one month; **DEAD** = under 10% of demand in the last four months; **NEW** = under 10% of demand before the last four months.

## 3. Evidence at a glance

| Theme | Prio | Sheet phrasings (with volume) | Largest | Search Console | SERP spot-check | Site today |
|---|---|---:|---:|---|---|---|
| W1 Careers and study routes for students with disabilities and learning differences | P1 | 121 (22) | 30 | - | checked | related only |
| W2 Second-chance pathways: failed, supplementary, dropped out, average marks | P1 | 208 (48) | 70 | 2 q / 26 imp / 1 clk | not checked | related only |
| W3 Regional board and stream vocabulary (PUC, SSLC, Plus Two, Intermediate, HSC, NIOS) | P2 | 235 (46) | 320 | 1 q / 2 imp / 0 clk | not checked | related only |
| W4 Career ladders and designation hierarchies (what the titles mean, and how long each step takes) | P2 | 79 (15) | 30 | 5 q / 14 imp / 1 clk | checked | related only |
| W5 Pay and package literacy: CTC, in-hand, median vs average, what "highest package" means | P2 | 9 (0) | 0 | 8 q / 60 imp / 0 clk | checked | partly |
| W6 Government and free career-guidance infrastructure (what is free, who runs it, how to use it) | P2 | 150 (43) | 320 | 6 q / 21 imp / 0 clk | checked | related only |
| W7 The career-counselling profession itself (for people who want to become counsellors and coaches) | P1 | 194 (57) | 1,000 | 2 q / 5 imp / 0 clk | checked | none |
| W8 Green skills, green jobs and the Indian skilling ecosystem (Skill India, NSQF, vocational pathways) | P2 | 336 (106) | 1,900 | - | checked | related only |
| W9 "Why did you choose this career?" answer guides for named fields | P2 | 401 (150) | 140 | - | checked | none |
| W10 Mentoring knowledge: finding, using and being a mentor | P2 | 1430 (233) | 390 | 1 q / 7 imp / 0 clk | not checked | related only |
| W11 Interest- and trait-based career lists (extension of an existing site pattern) | P3 | 125 (23) | 40 | 12 q / 86 imp / 0 clk | not checked | related only |
| W12 Rare and specialist degrees (extension of mortuary, polymer, dairy, science-museum pages) | P3 | 306 (66) | 480 | - | not checked | related only |
| W13 Plain-language glossary of Indian education and career terms | P2 | 45 (20) | 390 | 25 q / 121 imp / 0 clk | not checked | none |
| W14 Hindi and Hinglish query layer | P3 | 37 (19) | 210 | - | not checked | none |
| W15 Mid-life, women returning and career-break guidance (small demand, strong fit) | P3 | 126 (29) | 140 | 11 q / 62 imp / 0 clk | not checked | related only |
| W16 Career versus life decisions (love, family, marriage, relocation, passion vs money) | P3 | 185 (31) | 880 | - | not checked | related only |
| W17 Engineering branch decisions: core vs non-core, "non-circuit" branches, and "which stream is easiest" | P2 | 1 (0) | 0 | 9 q / 34 imp / 0 clk | checked | related only |

## 4. Themes

### W1 [P1] Careers and study routes for students with disabilities and learning differences

**Why it builds authority.** Highest trust and accuracy signal on the list: a counselling brand that handles this well earns links from schools, NGOs and disability bodies, which general career lists never do. Volumes read as 20-30 each, which is the "wrong volume" case: over 100 phrasings exist across the sheets and none passes 30.

**Evidence.**
- Sheets: 121 phrasings matched, 22 with any volume, largest 30, KD -. Top: career options for dyslexics (30); courses for deaf students (30); courses for dyslexic students (30); career opportunities for disabled (20); career opportunities for students with disabilities (20); career options for colour blind (20); course for teaching blind students in india (20); courses for blind students (20); courses for deaf and dumb students (20); courses for disabled students (20).
- Site today: No dedicated page. The word disability appears in four files in passing (none about careers); nothing on the RPwD Act, colour blindness or sign language.
- SERP spot-check: Checked ("career options for dyslexic students in India after 12th", "career options for deaf students India"): results are generic after-12th pages and individual Careers360 Q&A threads; the deaf-careers sources found were dated 2014. No dedicated, current guide surfaced.

**Pages to write.**

- `career-options-for-students-with-disabilities-india`: Rights, reservations, exam accommodations (scribe, extra time), scholarships, then career routes by disability type. Verify every legal figure against the RPwD Act 2016 text before publishing.
- `career-options-for-students-with-dyslexia-and-learning-disabilities`: Course and exam routes that fit; accommodation process for board and entrance exams; what to avoid.
- `career-options-for-deaf-and-hard-of-hearing-students-india`: Courses, employers, sign-language-related careers, accessibility reality in India.
- `colour-blindness-and-career-choice-india`: Which roles and exams restrict colour-vision-deficient candidates (for example pilots, defence services and some railway/electrical posts) and which do not. Take the exact medical standard from each recruiting body at publish time; do not paraphrase from forums.

**Guardrail.** Accuracy over speed. Use ranges and cite statutes; add a "last verified" line; avoid medical advice; do not promise outcomes.

### W2 [P1] Second-chance pathways: failed, supplementary, dropped out, average marks

**Why it builds authority.** These searchers are in the highest-stakes moment and get the worst content. Fits the existing backlogs/dropouts service pages as upstream traffic.

**Evidence.**
- Sheets: 208 phrasings matched, 48 with any volume, largest 70, KD -. Top: diploma courses for 12th failed students (70); career options for 12th failed students (50); courses for 2nd puc failed students (40); best career option for average students (30); best courses after 12th for average students (30); best courses for weak students after 10th (30); career options for dropouts (30); courses for 12th commerce fail students (30); courses for gap year students (30); courses for inter failed students (30).
- Search Console: 2 queries, 26 impressions, 1 clicks. Largest: "best diploma courses after 12th fail" (23); "what to do after upsc failure" (3).
- Site today: Service pages exist for dropouts, backlogs, low CGPA and low board scores. The blog has UPSC and bank-exam failure pages but nothing for a failed Class 10/12 or failed first-year engineering.
- SERP spot-check: Not separately checked.

**Pages to write.**

- `what-to-do-after-failing-class-12-india`: Supplementary exam, NIOS/open school, diploma (lateral entry), ITI, skill routes; timelines and what to tell parents.
- `what-to-do-after-failing-class-10-india`: Supplementary exam, polytechnic/ITI entry rules by state, repeat vs shift.
- `diploma-courses-for-12th-failed-students`: Directly mirrors a Search Console query already earning impressions ("best diploma courses after 12th fail", 23 impressions, 1 click).
- `after-failing-first-year-engineering-india`: Backlog rules, branch change, lateral routes, when to leave.

**Guardrail.** Tone: no blame, no "consolation list" (the site already avoids this). State rules vary by board and state; cite board circulars.

### W7 [P1] The career-counselling profession itself (for people who want to become counsellors and coaches)

**Why it builds authority.** A second audience (aspiring practitioners) that links, cites and shares. 1,000 + 170 + 140 + 140 + 110 + 110 in the sheets, KD 16-22. Shows the team knows the profession from the inside, which feeds every service page.

**Evidence.**
- Sheets: 194 phrasings matched, 57 with any volume, largest 1,000, KD 16-22. Top: career counselling courses (1,000); career counseling certification (170); career counselling courses ignou (140); career counselling courses online (140); career coach certification (110); diploma in career counselling (110); free career counselling courses online (40); how to become a career coach (40); career coaching course (30); career counseling certification programs online (30).
- Search Console: 2 queries, 5 impressions, 0 clicks. Largest: "teacher trainer" (3); "how to become a teacher trainer" (2).
- Site today: No page. A service silo for buyers exists (120 pages) but none for the professional audience.
- SERP spot-check: Checked ("how to become a career counsellor in India courses certification salary"): SCDL/Collegedunia course-provider pages, Careers360 Q&A, a YourStory piece promoting one certification. Salary figures come from course sellers.

**Pages to write.**

- `how-to-become-a-career-counsellor-in-india`: Routes (MA/PG diploma/certification), what is recognised, honest salary evidence, first-year income reality.
- `career-counselling-courses-india-compared-accreditation-fees-ignou`: 1,000 head term; compare IGNOU, PG diplomas, private certificates with a red-flag list.
- `career-coach-certification-india`: 110; ICF-style credentials vs local certificates.
- `how-to-become-a-soft-skills-or-life-skills-trainer-india`: 170 head term (KD 15), 8 phrasings.
- `how-to-start-a-career-counselling-practice-india`: "how to start a career counseling business" (8 phrasings), "masters in career counseling" (7), "career counseling books" (7): registration, tools, ethics, pricing, first 20 clients.

**Guardrail.** Do not sell a training programme from it unless one exists. State clearly that the site is a counselling provider, not an accrediting body.

### W3 [P2] Regional board and stream vocabulary (PUC, SSLC, Plus Two, Intermediate, HSC, NIOS)

**Why it builds authority.** A decoder page is a natural hub for the Kerala/Karnataka/AP-Telangana/Maharashtra audience and a clear internal-linking spine for the stream pages. Pairs with Report 1 items 1.08 and 1.09.

**Evidence.**
- Sheets: 235 phrasings matched, 46 with any volume, largest 320, KD 21-42. Top: after plus two courses for science students (320); after plus two courses for commerce students (140); career options after intermediate (110); after inter career options (90); courses for 2nd puc failed students (40); after plus two courses for computer science students (30); after plus two courses for humanities students (30); career options after 2nd puc science (30); career options after intermediate cec (30); courses for inter failed students (30). Spike/decay flags on top terms: SPIKE.
- Search Console: 1 queries, 2 impressions, 0 clicks. Largest: "after plus two diploma courses" (2).
- Site today: "Plus two / PUC / SSLC" appears in 9 files in passing. No page decodes the names.
- SERP spot-check: Not checked.

**Pages to write.**

- `class-11-12-names-across-india-puc-plus-two-intermediate-hsc-explained`: A one-page decoder: board name, stream names, equivalent Class, where each leads; links to the stream pages.
- `courses-after-plus-two-science-commerce-computer-science`: "After plus two courses" is 320 / 140 / 30 / 30 and KD 21-42 in the sheet.

**Guardrail.** Build the decoder first; build state-specific pages only after the decoder shows impressions.

### W4 [P2] Career ladders and designation hierarchies (what the titles mean, and how long each step takes)

**Why it builds authority.** Hierarchy pages are the pages students and parents actually share. They make the existing roadmap pages more useful and give every career page a natural "what comes next" link.

**Evidence.**
- Sheets: 79 phrasings matched, 15 with any volume, largest 30, KD -. Top: career ladder for business analyst (30); data science career ladder (30); engineering manager career ladder (30); product designer career ladder (30); business analyst career hierarchy (20); business analyst career ladder (20); business development career ladder (20); design career ladder (20); engineering career ladder (20); engineering career ladder titles (20).
- Search Console: 5 queries, 14 impressions, 1 clicks. Largest: "hr hierarchy levels in india" (6); "hr career growth" (3); "hr career path in india" (2); "hr promotion levels" (2); "hr executive" (1).
- Site today: Roadmap pages exist (16) and "career ladder" appears in 45 files, but there is no standalone hierarchy page for any function. Search Console shows "hr hierarchy levels in india" and "hr promotion levels".
- SERP spot-check: Checked ("HR hierarchy levels in India designations"): no authoritative India-specific HR ladder; results are generic company-hierarchy pages and a Scribd grading sheet.

**Pages to write.**

- `hr-hierarchy-in-india-titles-levels-and-years-per-step`: Executive to CHRO, with what each title actually owns.
- `it-company-designations-india-trainee-to-principal`: SDE/analyst/lead/manager/architect ladder, service vs product company.
- `banking-hierarchy-india-clerk-po-and-beyond`: Public vs private bank ladders; promotion rules by exam vs time.
- `hospital-and-nursing-hierarchy-india`: Clinical and non-clinical ladders; where paramedical roles sit.

**Guardrail.** Titles vary by company; say so, give ranges and a "typical, not universal" label. Do not invent year counts: source from published grade structures or label as editorial estimates.

### W5 [P2] Pay and package literacy: CTC, in-hand, median vs average, what "highest package" means

**Why it builds authority.** Real queries from real students ("in college highest package or placement means what tell in simple words" 20 impressions). Strong internal-link target for every college-comparison and MBA page.

**Evidence.**
- Sheets: effectively none (9 loose matches, all zero-volume and mostly off-topic). The evidence for this theme is Search Console and the site check below.
- Search Console: 8 queries, 60 impressions, 0 clicks. Largest: "in college highest package or placement means what tell in simple words" (20); "median ctc means" (14); "what is median ctc" (9); "median placement meaning" (6); "what is ctc in college placement" (5); "college package means" (2).
- Site today: PARTLY COVERED: how-to-read-college-placement-report-india mentions CTC 41 times and salary-negotiation-for-freshers-india 19 times. The parent exists.
- SERP spot-check: Checked ("median CTC meaning college placement report"): Careers360 Q&A threads and a coaching-institute guide; one third-party "average package vs actual in-hand" article. Plain-language answers are scarce but not absent.

**Pages to write.**

- `ctc-vs-in-hand-salary-india-with-worked-example`: A worked monthly breakdown (basic, HRA, PF, variable, tax). Distinct from the placement-report page.
- `median-vs-average-package-what-colleges-do-not-say`: Spin-off ONLY if how-to-read-college-placement-report-india does not start ranking for the Search Console phrasings in 8 weeks.

**Guardrail.** Check the parent page in Search Console first. Worked salary examples must state they are illustrative and tax figures need the current slab.

### W6 [P2] Government and free career-guidance infrastructure (what is free, who runs it, how to use it)

**Why it builds authority.** The sheets show 150 phrasings (320 for "district employment and career guidance centre", 320 for "state career guidance center", 320 for "career guidance bureau"). A paid-service brand that explains the free option earns trust and is cited by journalists and school pages.

**Evidence.**
- Sheets: 150 phrasings matched, 43 with any volume, largest 320, KD 6-21. Top: career guidance bureau (320); district employment and career guidance centre (320); state career guidance center (320); career guidance center (170); career guidance council (110); career guidance council hyderabad (110); career guidance bureau attingal (50); career counselling helpline number (30); career guidance bureau psc books (30); career guidance bureau thampanoor (30).
- Search Console: 6 queries, 21 impressions, 0 clicks. Largest: "free career counselling contact number" (7); "career counselor number" (4); "career guidance number" (3); "career guidance helpline number" (3); "career counselling number" (2); "free career counselling number" (2).
- Site today: National Career Service is named in body text of 31 files (mostly as a pointer). There is no page that explains the public system.
- SERP spot-check: Checked ("government career guidance India NCS portal"): ministry brochure, explainers from finance-product and exam-prep sites. Nothing from an independent counselling provider.

**Pages to write.**

- `free-government-career-guidance-india-ncs-and-state-centres`: NCS portal, Model Career Centres, state career guidance bureaus, DEGC, board portals: what each does and does not do.
- `career-guidance-helpline-numbers-india-what-is-free`: Honest list of public helplines and what a paid session adds.

**Guardrail.** Verify every number and URL against the portal on the publish date; helplines change. Avoid listing private institutes.

### W8 [P2] Green skills, green jobs and the Indian skilling ecosystem (Skill India, NSQF, vocational pathways)

**Why it builds authority.** "Green skills" is a CBSE school subject, so the audience is large and under-served by career sites. The scam-checking page builds trust and is rarely written by commercial providers.

**Evidence.**
- Sheets: 336 phrasings matched, 106 with any volume, largest 1,900, KD 10-50. Top: what is green skills (1,900); what are green skills (1,300); what is skill india (590); how many skill india international centre to be set up (320); iti career options (260); what is green skills class 9 (260); what is skill development scam (260); what are vocational skills (210); what is national skill qualification framework (170); polytechnic career options (140).
- Site today: "Green skills" appears in zero files. Skill India/NSQF appears in 12 files in passing.
- SERP spot-check: Checked ("green skills green careers India guide for students"): research papers, a UN India event page, a Skill Council page and one certification-provider blog. No single practical student guide.

**Pages to write.**

- `green-skills-and-green-careers-india-student-guide`: What "green skills" means (1,900 + 1,300 + 260 + 110 in the sheet, KD 30), which jobs are real, which degrees map, which are marketing.
- `skill-india-nsqf-pmkvy-explained-what-certificates-are-worth`: 170 + 590 + 140; what a Skill India or NSQF-level certificate does and does not get you.
- `skill-development-scam-how-to-check-a-training-provider`: "what is skill development scam" 260: a verification checklist (NCVET/NSDC listings, placement claims).

**Guardrail.** Official sources only (MSDE, NCVET, NSDC, Skill Council for Green Jobs). Separate hype from verified job numbers.

### W9 [P2] "Why did you choose this career?" answer guides for named fields

**Why it builds authority.** About 400 sheet phrasings, about 150 with any volume (140 HR, 90 HR, 90 hotel management, then 30s). Low per-term numbers, but the pattern repeats across every field, which is exactly where tools under-report.

**Evidence.**
- Sheets: 401 phrasings matched, 150 with any volume, largest 140, KD -. Top: why you choose hr as a career (140); why choose a career in human resources (90); why should i choose hotel management as career (90); why choose a career in data analytics (30); why choose biotechnology as a career (30); why choose cyber security as a career (30); why choose marketing as a career (30); why choose mba as a career (30); why choose nursing as a career (30); why choose seo as career (30). Spike/decay flags on top terms: DEAD.
- Site today: Not covered as an article. The phrase appears in passing in interview-preparation-for-freshers-india and is-salesforce-a-good-career, and inside some self-assessment config files.
- SERP spot-check: Checked ("why did you choose this career sample answers fresher interview"): Naukri, Mondo, CareerSherpa - generic, not field-specific.

**Pages to write.**

- `why-did-you-choose-this-career-answers-for-freshers-india`: Hub: structure, five weak answers, field picker.
- `why-did-you-choose-hr-as-a-career`: 140 + 90; do HR first (largest).
- `why-did-you-choose-nursing-marketing-cyber-security-data-analytics`: Only build more per-field pages where the field has its own honest story; else keep inside the hub.

**Guardrail.** Doorway risk is high if per-field pages are templated. Each page needs field-specific substance (real motivations, real day-one tasks, real downsides).

### W10 [P2] Mentoring knowledge: finding, using and being a mentor

**Why it builds authority.** Sheets: 1,430 mentor phrasings, 233 with volume, max 390 ("student mentor"). Small, but the topic supports the service and attracts educator audiences ("student mentoring report format", "mentoring activities for college students").

**Evidence.**
- Sheets: 1430 phrasings matched, 233 with any volume, largest 390, KD 12-40. Top: student mentor (390); business mentor (320); online mentors (210); business mentors in india (170); student mentoring form (170); online mentoring jobs (110); mentoria career counseling (40); benefits of having a business mentor (30); best business mentors (30); business analyst mentor (30).
- Search Console: 1 queries, 7 impressions, 0 clicks. Largest: "career mentorship program" (7).
- Site today: One service page (career-mentoring-program) and the tools/informational-interview-planner. No informational article on finding or using a mentor.
- SERP spot-check: Not checked.

**Pages to write.**

- `how-to-find-a-career-mentor-in-india`: Where mentors actually are (alumni, LinkedIn, professional bodies), the ask, the first call.
- `mentor-vs-coach-vs-counsellor-vs-guide`: Extends the existing counselling-vs-coaching page.
- `questions-to-ask-a-career-mentor`: Student-friendly list; pairs with the fresher pages.

**Guardrail.** Keep to career mentoring. Institutional mentor forms (college templates) are a different audience: skip unless there is a B2B plan.

### W13 [P2] Plain-language glossary of Indian education and career terms

**Why it builds authority.** Cheap, link-dense, and answers the query form (definitions) that students use. Sheets: "define career counseling" 390, "career counselling meaning" 260, "career opportunities meaning" 210, "what is bridge course for students" 170.

**Evidence.**
- Sheets: 45 phrasings matched, 20 with any volume, largest 390, KD 13-31. Top: define career counseling (390); career counselling meaning (260); career opportunities meaning (210); what is bridge course for students (170); career guidance meaning (140); define career guidance (110); goods career meaning (30); student mentor meaning (30); what is the meaning of career counselling (30); better career opportunity meaning (20).
- Search Console: 25 queries, 121 impressions, 0 clicks. Largest: "lateral mba meaning" (9); "mba lateral entry meaning" (9); "what is median ctc" (9); "what is mba lateral entry" (8); "future career meaning" (8); "below ssc meaning in bank form" (7).
- Site today: No glossary. Search Console shows meaning-style queries already finding the site (counts above): the "mba lateral entry meaning" family, "dmlt full form", "cuet full form", "crc level", "below ssc meaning in bank form", "median ctc means".
- SERP spot-check: Not checked.

**Pages to write.**

- `career-and-education-terms-explained-india`: One hub of short definitive entries (lateral entry, CTC, median package, bridge course, NIOS, NSQF, CUET, DMLT, PGDM vs MBA...), each linking to the deep page.

**Guardrail.** Keep entries short; the deep pages must keep the real answer. Do not turn each entry into its own thin URL.

### W17 [P2] Engineering branch decisions: core vs non-core, "non-circuit" branches, and "which stream is easiest"

**Why it builds authority.** A decision students make at 17 with almost no reliable guidance, asked in vocabulary (core, non-core, non-circuit) that the existing pages never define. Cheap to write, high shareability, and a natural feeder to the stream-selector assessment that is already the site's best performer.

**Evidence.**
- Sheets: effectively none (1 loose matches, all zero-volume and mostly off-topic). The evidence for this theme is Search Console and the site check below.
- Search Console: 9 queries, 34 impressions, 0 clicks. Largest: "non circuit branches in engineering" (6); "which is the easiest stream in class 11" (6); "non tech branches of engineering" (5); "non core branches of engineering" (4); "non core branches in engineering" (4); "non core engineering branches" (3).
- Site today: "Non-core / non-circuit" appears in 4 files in passing (mostly service pages). No page defines the terms or compares the branches; engineering-vs-other-streams-which-is-better-career-india compares streams, not branches.
- SERP spot-check: Checked ("non core branches of engineering list India"): Careers360 Q&A and college marketing blogs; the sources contradict each other on what counts as core.

**Pages to write.**

- `core-vs-non-core-engineering-branches-india`: Define the terms honestly (there is no official AICTE list), compare placement and pay by branch, and what a "circuit" branch actually means to recruiters.
- `which-stream-is-easiest-in-class-11-and-why-that-is-the-wrong-question`: Search Console shows the literal question; answer it, then redirect to fit-based choice and the stream selector test.

**Guardrail.** Be explicit that the labels are informal. Do not rank branches by single placement years; show ranges and the college-tier effect.

### W11 [P3] Interest- and trait-based career lists (extension of an existing site pattern)

**Why it builds authority.** Cheap to add to a pattern the site already owns. Sheet demand is only 20-40 per phrasing, so this is a brand-depth play, not a traffic play.

**Evidence.**
- Sheets: 125 phrasings matched, 23 with any volume, largest 40, KD -. Top: career options for creative minds (40); career options for those who love travelling (40); best career options for introverts (20); career for good speakers (20); career options for a creative person (20); career options for creative people (20); career options for creative person (20); career options for creative person in india (20); career options for introverts (20); career options for maths lovers (20).
- Search Console: 12 queries, 86 impressions, 0 clicks. Largest: "what jobs are best for introverts" (16); "what job is good for introverts" (16); "careers suitable for introverts" (12); "what are the best jobs for introverts" (10); "what are the best careers for introverts" (8); "jobs for introverts" (7).
- Site today: Already written: introverts, analytical thinkers, numbers, creative people, no desk jobs, teaching, helping others, communication, multitaskers. Search Console shows introvert queries (counts above) with 0 clicks.
- SERP spot-check: Not checked.

**Pages to write.**

- `careers-for-people-who-love-animals-and-nature-india`: Vets, wildlife, forestry, agri, ecology, animal-welfare: with degrees.
- `careers-for-people-who-love-travelling-india`: "career options for those who love travelling" 40: aviation, tourism, merchant navy, field roles, consulting.
- `careers-for-good-speakers-india`: "career for good speakers" 20.

**Guardrail.** First, fix why the existing introvert page earns 0 clicks on 84 impressions before extending the pattern.

### W12 [P3] Rare and specialist degrees (extension of mortuary, polymer, dairy, science-museum pages)

**Why it builds authority.** Each is small; together they extend the "we cover fields others skip" signal. Build slowly, one per month, with real institutional detail.

**Evidence.**
- Sheets: 306 phrasings matched, 66 with any volume, largest 480, KD 21-32. Top: career opportunities in astronomy (480); geology career options (170); anthropology career options (110); career options in anthropology (110); is archaeology a good career (110); is criminology a good career (110); is naturopathy a good career choice (110); yoga career opportunities (110); is astrophysics a good career (90); horticulture career options (70).
- Site today: The site already publishes unusual fields (mortuary science, polymer science, dairy science, science museums, exercise science, home science). That is a differentiator.
- SERP spot-check: Not checked.

**Pages to write.**

- `archaeology-career-options-india`: is archaeology a good career 110; careers after BA archaeology/ancient history.
- `anthropology-career-options-india`: 110 + 110.
- `geology-career-options-india`: 170; oil & gas, mining, groundwater, GSI.
- `astronomy-and-astrophysics-career-options-india`: 480 ("career opportunities in astronomy") + 90 + 30.
- `yoga-and-naturopathy-career-options-india`: 110 + 110; AYUSH, therapy, teaching, wellness; regulatory status.

**Guardrail.** Avoid hype on wellness fields; cite regulators (AYUSH ministry, UGC).

### W14 [P3] Hindi and Hinglish query layer

**Why it builds authority.** About 37 phrasings, 19 with volume, max 210. Real but small; a translation programme is a bigger commitment than the volume justifies.

**Evidence.**
- Sheets: 37 phrasings matched, 19 with any volume, largest 210, KD 15-30. Top: 12th ke baad career option (210); career counselling kya hota hai (140); science me career options (140); bsc ke baad career option (110); career counselling kya hai (110); bca ke baad career option (70); 12th ke baad career (30); fashion designing me career kaise banaye (30); 12th ke baad career kaise banaye (20); apna career kaise choose kare (20).
- Site today: English only.
- SERP spot-check: Not checked.

**Pages to write.**

- `12th-ke-baad-career-options (Hindi/Hinglish hub)`: "12th ke baad career option" 210, "bsc ke baad career option" 110, "career counselling kya hota hai" 140, "science me career options" 140.

**Guardrail.** Only after Report 1 priorities. Needs a human Hindi editor and hreflang/URL decision. Do not machine-translate the library.

### W15 [P3] Mid-life, women returning and career-break guidance (small demand, strong fit)

**Why it builds authority.** Low volumes, but the audience is under-served and matches the service pages already live.

**Evidence.**
- Sheets: 126 phrasings matched, 29 with any volume, largest 140, KD 43. Top: work from home career opportunities (140); career options for homemakers (40); housewife career opportunities (40); career break before mba (30); career break opportunities (30); career options after 35 years in india (30); career options after 40 years in india (30); career options after marriage (30); career options at 40 in india (30); is a career break a good idea (30).
- Search Console: 11 queries, 62 impressions, 0 clicks. Largest: "career options for girls after 12th" (29); "ghar baithe job for female" (6); "best job for girls" (5); "safe jobs for women" (5); "best government jobs for girls" (3); "govt jobs for girls after 12th" (3).
- Site today: Covered in service pages (women returning to work, seniors, 30-year-olds) and blog (second career at 40, change at 30, safe options for girls).
- SERP spot-check: Not checked.

**Pages to write.**

- `legit-work-from-home-careers-india-and-scam-red-flags`: "work from home career opportunities" 140, "ghar baithe job for female" in Search Console; value is the red-flag checklist.
- `career-options-after-35-and-after-40-india`: 30 each across 6 phrasings; check how much second-career-at-40 already answers before building.

**Guardrail.** Work-from-home SERPs are full of scam content. Only publish with a verifiable-employer checklist.

### W16 [P3] Career versus life decisions (love, family, marriage, relocation, passion vs money)

**Why it builds authority.** Zero-volume-style phrasings that repeat (about a dozen), emotionally high-intent, and closely tied to the counselling service. Brand-fit is real; traffic is small.

**Evidence.**
- Sheets: 185 phrasings matched, 31 with any volume, largest 880, KD 10-31. Top: people should choose careers that are monetarily rewarding (880); how to choose career after 12th (170); aptitude test to choose career after 12th (30); choose love or career (30); choosing career over marriage (30); free psychometric test to choose career (30); personality test to choose career (30); psychometric test to choose career (30); what to choose between love and career (30); aptitude test to choose career (20). Spike/decay flags on top terms: SPIKE.
- Site today: Related: should-you-choose-a-career-for-money (blog), what-to-do-when-your-passion-doesnt-pay (resource). Nothing on relationships, family or relocation trade-offs.
- SERP spot-check: Not checked.

**Pages to write.**

- `choosing-career-over-family-or-relationship-how-to-decide`: "choose love or career" 30, "choosing career over marriage" 30, "what to choose between career and love" 30. A structured decision aid, not advice.

**Guardrail.** Counselling-lite risk: no clinical or relationship advice; keep to trade-off frameworks and point to a counsellor.

## 5. SERP spot-check log

Eleven live searches were run to test the "few people write this" claim. Results are from one search each and show what was visible on that day, not a ranking study.

| Query | What surfaced | Implication |
|---|---|---|
| career options for dyslexic students in India after 12th | Generic after-12th guides; one individual Careers360 Q&A thread | Open: no dedicated guide surfaced (W1) |
| career options for deaf hard of hearing students India | Mostly 2014-era articles, NGO pages | Open and the sources are stale (W1) |
| green skills green careers India guide for students | Research papers, a UN India event page, a certification provider blog; no single student guide | Open (W8) |
| why did you choose this career sample answers fresher interview | Naukri, Mondo, CareerSherpa generic answers | Generic content is saturated; field-specific answers are the opening (W9) |
| non core branches of engineering list India | Careers360 Q&A and college marketing blogs; sources disagree on the definition | Open for an honest, sourced definition (W17) |
| HR hierarchy levels in India designations | No authoritative India-specific HR ladder; generic hierarchy pages and a Scribd sheet | Open (W4) |
| how to become a career counsellor in India courses certification salary | Course-provider pages, Q&A, one promotional article | Open for an independent explainer (W7) |
| MPT salary per month India by specialization | College marketing pages, Q&A, one job notice; no salary survey | Open, but needs careful sourcing (Report 1 item 6.01) |
| median CTC meaning college placement report average package vs median | Careers360 Q&A, coaching-institute guide, one third-party in-hand-salary article | Partly served; plain-language, worked-example angle is open (W5) |
| career options in physical education India B.P.Ed scope salary | Collegedunia, GetMyUni, LNCT University, FindMyCollege | Not whitespace: standard aggregator competition (Report 1 item 2.04 is volume-led, KD 17-39) |
| government career guidance India NCS portal | Ministry brochure, finance-product and exam-prep explainers | Moderate; independent "what is free and how to use it" angle is open (W6) |

## 6. Demand by repetition: low-volume phrasings that keep recurring

The tool prices each phrasing separately, so a topic asked 14 different ways at 30 each looks like nothing. These groups have six or more phrasings each, a largest volume of 90 or less, and are not already handled in either report. Check the destination column before building.

| Group (example phrasing) | Phrasings | Largest | Handled in |
|---|---:|---:|---|
| career options after mba in marketing | 15 | 20 | Report 1 item 2.14 |
| how to start a career in data science | 14 | 30 | Report 1 item 3.04 |
| career options for electronics engineers | 12 | 30 | Report 1 item 3.02 |
| career goals after mba | 12 | 30 | Report 1 item 2.14 |
| career to choose after 12th science | 10 | 20 | Existing: career-options-after-12th-science |
| free career counselling sites | 10 | 30 | Existing: free-career-counselling-session (service) |
| chemical engineering career options | 10 | 70 | Report 1 item 3.03 |
| career options after btech in ece | 10 | 40 | Report 1 item 3.02 |
| computer engineering career path | 10 | 30 | Existing: computer-science-engineering-career-options |
| automobile engineering career in india | 10 | 20 | Existing: is-automobile-engineering-a-good-career |
| career after mba in marketing | 10 | 30 | Report 1 item 2.14 |
| how to choose my career after graduation | 9 | 30 | Report 1 item 2.13 / existing how-to-plan-your-career-path-after-graduation-india |
| career switch to data science | 9 | 20 | Report 1 item 3.04 |
| how to find a business mentor in india | 9 | 30 | Report 2 W10 |
| how to start a career counseling business | 8 | 30 | Report 2 W7 |
| need of career counselling | 8 | 30 | Existing: why-career-counseling-is-important / purpose-of-career-counseling |
| journalism career options | 8 | 30 | Existing: is-journalism-a-good-career-india |
| career options after diploma in mechanical engineering | 8 | 20 | Report 1 item 5.03 |
| career options after mba in hr | 8 | 20 | Report 1 item 2.14 |
| web design career path | 8 | 20 | Report 1 cluster I (web design) |
| petroleum engineer career path | 8 | 20 | Report 1 cluster I (petroleum engineering) |
| career after mba in hr | 8 | 30 | Report 1 item 2.14 |
| careers with environmental science degree | 8 | 30 | Existing: environmental-science-career-options |
| business coach mentor | 8 | 30 | Report 2 W10 |
| career options after 10th class | 7 | 70 | Existing: career-options-after-10th |
| career after bsc biology | 7 | 90 | Report 1 items 2.07-2.10 |
| masters in career counseling | 7 | 40 | Report 2 W7 |
| career counseling books | 7 | 20 | Report 2 W7 |
| career options after graduation in arts | 7 | 50 | Report 1 item 2.13 / existing how-to-plan-your-career-path-after-graduation-india |
| why to choose digital marketing as a career | 7 | 30 | Report 2 W9 |

## 7. Suggested sequence

1. **Month 1: W1 hub plus two pages (disabilities overview, dyslexia/learning differences) and W7 (how to become a career counsellor).** Highest authority per page, lowest competition, both need sourcing time more than writing time.
2. **Month 2: W2 (failing Class 10/12, diploma for failed students) and W6 (free government guidance).** W2 pairs with the diploma page fixes in Report 1 (5.03).
3. **Month 3: W4 (HR and IT hierarchy first), W8 (green skills, Skill India/NSQF explainer, training-provider scam check), W3 decoder page.**
4. **Then, only if earlier pages show impressions:** W5 spin-offs, W9 per-field answers, W10, W13 glossary, and the P3 themes.

**Measurement.** For each page record at 4, 8 and 12 weeks: impressions, queries, referring domains, and whether it is linked from three or more other pages on the site. A whitespace page that has links and impressions but no clicks is working; one with none of the three should be merged into its hub.

## 8. Limits

- The SERP checks are single searches without a ranking tool. They support "nothing definitive surfaced", not "no one has ever written this".
- Evidence for W5, W13, W15 and W16 is mostly Search Console and judgement; the sheets contain little on them because they were not seed words.
- Legal and salary content must be sourced at write time. Legal figures (for example reservation percentages under the RPwD Act) are deliberately not stated in this report; verify them against the Act text and each recruiting body.
- Hindi/Hinglish (W14) is small in the sheets; its real cost is editorial, not SEO.
- All keyword volumes are the sheets' tool figures, unverified.

## 9. Files

- `appendix/A4-report2-matched-keywords.csv` - every sheet keyword behind each theme
- `appendix/A2-search-console-queries-mapped.csv`
- `appendix/A6-noise-and-anomaly-log.csv` - exclusion rules, spikes and decaying keywords
- `appendix/A1-site-page-inventory.csv`
