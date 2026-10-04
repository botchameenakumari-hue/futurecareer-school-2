# Dossier: N15 mba-career-counselling (PARTIAL - STOPPED at tool session limit, 5 Oct 2026)
Status: research incomplete; NO page written, nothing registered, no files edited in repo.

## STEP 0 / classification (done)
- Keyword "MBA career counselling" -> BOFU (direct service intent; sits in /services/career-counselling-and-career-guidance/ family). Case (b) DISTINCT.
- Nearest existing: career-counselling-for-mba-students (enrolled students: specialization/internship->PPO/electives/mid-programme switch) and career-counselling-for-mba-graduates (post-degree: ROI doubt, specialization mismatch, functional track). Neither covers: PRE-MBA decision (should I do it, when, which tier, loan), the "MBA or not" ROI math, or a cross-stage view. Missing concept vs both: "MBA career counselling" as the whole-journey service (before / during / after / switching) with ROI computation.
- Routes are auto-discovered by src/config/site.ts (discoverRoutes on services folder) -> NO manual site.ts edit needed; bofu.ts only holds link/comparison libraries (no per-page registration). directory.ts auto-fallback handles MBA wording. New folder: src/pages/services/career-counselling-and-career-guidance/mba-career-counselling/index.astro (model on the mba-students page; use GuidancePlansSection audience="mixed" since pre-MBA/post-MBA professionals + students; serviceLabel "Career Counselling").
- Prompts read: COMMON_RULES, NEW_PAGES, COWORK_KICKOFF, CLIENT_FACING_COPY_RULE, BOFU_PAGE_PROMPT (all rule sections + relevant audience banks lines 1-3560 skimmed in full for rules), BOFU_PAGE_PROMPT_FOLLOWUP (full), DOORWAY guide (first 300 of 612 lines).

## Commodity map (9 pages read; Reddit/Quora/YouTube not fetched; Quora appeared in snippets only)
1. ask4clg.com career-counselling-for-mba: "need counselling / signs MBA right / when not / after graduation vs experience" - zero salary figures, zero sources, no price.
2. rnrstudiezs.com career-counselling-for-mba: exams CAT/MAT/GMAT/XAT list, "take our FREE career counselling" (free claim - we must NOT copy), no fees, no credentials, no outcomes.
3. mbacrystalball.com/career-counselling: Career MAP package INR 37,000, psychometric + counselling calls; testimonial "40% hike" with no context; no ROI metrics.
4. metaapplycareercounselling.io blog: 5-step process; no data; anecdotal opening; no cost, no ROI.
5. thecounselingcafe.in guide: generic 8-step selection (goals, tier, curriculum, specialization); no costs, no data, no alternatives.
6. bschool.careers360.com/articles/mba-counselling: actually ADMISSION counselling (seat allotment, CAP/TSICET/AP ICET fees Rs 300-1,200) - 2024 stale, dates marked "over". Shows SERP intent confusion: "MBA counselling" = seat allotment; ours is career decision counselling.
7. hitbullseye one-on-one counselling: "10,000+ sessions, 5,000+ success stories" undefined; pricing behind login; "free" counselling claims.
8. ambitionsmba.com: 250+ partner B-schools, 5000+ students - admission-agent model (conflict of interest: paid by colleges); no pricing/outcomes.
9. karangupta.com: "100% admission offers for completers", $14M scholarships - self-reported survivorship-biased abroad-admissions focus.
(scholarstrategy.com and others: not usable/ blocked.)
COMMODITY = "MBA suits X, not Y; choose specialization by interest; check tier/ROI; counsellor helps" with no number, no payback, no placement-report reading skill, no loan math, no non-MBA alternative, no post-MBA stuck case. Several conflate admission counselling with career counselling and use free-counselling hooks.
BLIND SPOTS to own: computed break-even; how to read placement reports (denominator, MEP/median, opt-outs); tail-of-distribution schools; AI-entry-role risk; post-MBA pivots; "MBA vs not" stated honestly (page can say MBA is wrong for some).

## Primary / strong data collected (with arithmetic)
P1 IIM-A PGP 2026 audited (IPRS, B2K Analytics, report dated 3 Sep 2026; via campusutra, secondary reprint of official): 402 eligible, 392 accepted offers, 10 opted out; median domestic MEP Rs 37.00 lakh, mean Rs 36.98 lakh; highest domestic Rs 81.60 lakh; PPOs 203 awarded/194 accepted. CONFIDENCE: secondary-of-official; verify on iima.ac.in before publishing.
P2 IIM-A fee PGP 2025-27 total Rs 27.50 lakh (tuition 20.10) (cracku); 2026-28 not announced there. Secondary.
P3 IIM fee table (mbauniverse): Rohtak 17.90 (2026-28), Visakhapatnam 23.59 (2026-28), Ranchi 19.20 (25-27), Tiruchirappalli 19.50 (26-28), Calcutta 27.00 (25-27), Bangalore 26.00 (26-28), Lucknow 20.75 (26-28), Mumbai 25.00 (26-28), Jammu 22.81 (26-28), Shillong 26.18 (24-26, understated). Secondary.
P4 IIM placements batch 2024-26 (mbauniverse): Calcutta avg 36.00/median 35.00, 458 students 542 offers; Bangalore avg 35.35/median 34.75; Lucknow 33.20/32.90; Shillong 27.03/26.00; Rohtak 20.03/18.00; Ranchi 19.26/18.00 (2025-26, audited); Tiruchirappalli 18.00/16.75 (387 of 444 registered placed, interim); Jammu 16.04/15.80; Visakhapatnam 15.72/15.00; Bodh Gaya 14.80/14.00 (MEP). Caveat quoted: "No two IIMs report placements the same way."
P5 Non-IIM tail example: MDI Murshidabad PGDM avg Rs 10.93 lakh (2024-26), 12.75 (2023-25), 10.67 (2022-24); highest 15 lakh; fee Rs 6.82-16.46 lakh range (collegedunia, mixes part-time/full-time; unclear) - official placement page mdim.ac.in/placement.
P6 NIRF 2025 management (nirfindia.org, official): 100 ranked institutions; careers360 analysis: only ~15% of 1,026 participants ranked; placement outcome carries ~20% weight; median salary standalone Rs 25.67-33 lakh, multidisciplinary Rs 12.78-26.73 lakh (2023-24 batch, secondary analysis).
P7 AICTE management (careers360 portal analysis): approved intake 4,22,628 vs enrolled 2,85,367 in 2022-23 = 67.5% filled; 2017-18 60.5%. Latest verified year only 2022-23.
P8 IIM seats ~5,500+ across 21 IIMs (2025, collegedekho; includes IPM at Indore) vs CAT 2025 appeared ~2.58 lakh (prior notes, careers360) -> ~47 test-takers per IIM seat (UPPER-BOUND, mixes IPM, secondary). Individual: IIM-A 385, Calcutta 462, Bangalore 565, Lucknow 490, Mumbai 550, Kozhikode 525.
P9 GMAC Corporate Recruiters Survey 2026 (gmac.com PDF, official): 621 recruiters, 39 countries, 53% Fortune 500; 39% plan same MBA hiring in 2026, 32% more; US median MBA starting salary USD 120,000 (2026 proj., down from 125,000); one-third replaced some entry-level roles with AI; top skills communication 64%, problem-solving 62%, adaptability 60%; future: AI tools 53%, strategic thinking 50%. Report has NO India/APAC salary split. (Note: earlier batch notes said "39% plan to expand"; the report text read says 39% same, 32% more - use report figures.)
P10 From earlier verified batch notes (reuse): RBI Grade B 2026 60 posts, ~Rs 1.55 lakh/month gross; SEBI Grade A 110 posts gross Rs 1.43-1.84 lakh/month; CAT 2026 on 29 Nov 2026 IIM Indore, 50% (45% reserved), registration closed 22 Sep; NIRF 2022 pandemic-era median under Rs 6 lakh for 29 of top 100.
NOT YET FETCHED (needed): IPRS rules text (IIMA web.iima.ac.in/iprs PDF - hit limit), education-loan rates (cracku/SBI), PLFS/graduate pay baseline, Naukri/AmbitionBox pre-MBA salary baselines, mid-tier B-school fee+placement official, ISB/XLRI official, executive MBA data, work-ex class profile (IIM official class profile PDFs), real-question platforms beyond snippets.

## Computed insight (draft - ORIGINAL ANGLE: "MBA payback calculator table" with formula shown)
Formula: payback years = (programme fee + 2 x pre-MBA annual pay) / (post-MBA pay - pre-MBA pay). Pre-tax, ignores interest, bonuses, growth.
Example inputs (post-MBA = reported MEDIAN/avg; pre-MBA pay assumed Rs 8 lakh, flagged as assumption):
- IIM-A: (27.5 + 16) / (37.0 - 8) = 43.5/29 = 1.50 years.
- IIM Lucknow: (20.75 + 16)/(32.90 - 8) = 36.75/24.9 = 1.48 years.
- IIM Rohtak: (17.90 + 16)/(18.0 - 8) = 33.9/10 = 3.39 years.
- IIM Visakhapatnam: (23.59 + 16)/(15.0 - 8) = 39.59/7 = 5.66 years.
- IIM Tiruchirappalli: (19.5 + 16)/(16.75 - 8) = 35.5/8.75 = 4.06 years.
- PGDM tail (MDI Murshidabad avg 10.93, fee ~16.46 full-time): (16.46 + 16)/(10.93 - 8) = 32.46/2.93 = 11.1 years (avg not median; fee from aggregator).
Fresher case (pre-MBA pay 0, opportunity cost 0): fee/post pay: IIM Visakhapatnam 23.59/15 = 1.57x annual pay; IIM-A 27.5/37 = 0.74x; PGDM 16.46/10.93 = 1.5x.
Sensitivity: at pre-MBA Rs 15 lakh, IIM Rohtak: (17.9+30)/(18-15)= 16 years -> shows engineer/experienced switchers at mid-tier IIMs often get little pay uplift; MBA then must be justified on role change, not pay. (All to be recomputed and re-verified before publication.)
Original angle options: (1) payback table by pre-MBA pay x school tier; (2) "placement report reading rules" (denominator: 458 students/542 offers means offers != students; Tiruchirappalli 387 of 444 = 87.2% placed at interim report; MEP vs CTC; mean vs median) - IIM-A mean 36.98 vs median 37.00 shows near-symmetrical top tier whereas tail averages hide skew; (3) decision situations: before / during / after / switching with what a counsellor actually does.

## Real questions (15+ target; have these from search-result titles; platform status below)
1. "Is it better to do an MBA after 3 years of work experience... I'm 26 and for MBA I will have to take a loan, is it sensible enough, there's an opportunity cost" (Glassdoor India community; reply summary: top 5-10 colleges worth it otherwise no)
2. "Should I go for an MBA after 3 years of work experience in TCS? I am no longer interested in IT jobs..." (Quora title via search)
3. "MBA After 4 Years of Work-experience?" (InsideIIM)
4. "Is it worth doing MBA in operations from SIOM Nashik while having 3 years of work experience in production as an engineer" (Careers360 Q title)
5. "Is it good to do MBA after BBA - 3 year BBA + MBA or should I work for some time" (Careers360 Q title)
6. "What is the actual average placement of MBA College third tier" (Careers360 Q; answer body empty on fetch)
7. "Is it good to do an MBA from a tier-3 college?" (Careers360 Q title)
8. "Is doing an MBA worth it or not in a tier 3 or 4 college in India?" (Quora title)
9. "How do you recover from not getting placed on campus after an MBA" (Quora title)
10. "What can we do after completing MBA?" / "What should I do after MBA till I get a good job" (Careers360 Q titles)
11. "Can I get a decent job after MBA from a govt university in India?" (Careers360 Q title)
12. "I am in the last semester of M.Com... confused selecting finance, marketing, HR. Which stream?" (Quora title)
13. "Regretting MBA - anyone in the same boat" (Blind: Indian MBA after 2 yrs Accenture, now Google India PM 47 LPA, compares with peers who did US masters)
14. "What is the right choice after BTech - MBA or job?" (Careers360 Q title)
15. "Post MBA career myth: the MBA will help you leave a job you hate" (LinkedIn post title)
16. "Switching jobs pre-MBA?" (GMAT Club forum title)
17. "Pursue MBA after a tech job" (Blind title)
Platforms: Reddit blocked (not used); Quora/YouTube/X robots-blocked (titles via search snippets only, no bodies); Careers360 Q&A bodies empty; Blind and Glassdoor fetched partially; WebFetch hit session limit at the end.

## Fact ledger status
Only P1-P10 above; confidence tags: P9 official; P6 official list + secondary analysis; others secondary. Nothing may be published until P1/P2/P3/P4 are re-checked against iima.ac.in / each IIM's placement PDF / fee page, and IPRS rules fetched.

## Hard rules to carry into the page (from prompts)
- Paid only: NO "free counselling/consultation/plan". Free assessments allowed ONLY as ONE AssessmentSupportNote inside a larger section (use BOFU_ASSESSMENT_LINKS.graduatesAndEarlyProfessionals), never hero/final CTA primary.
- Pricing only via GuidancePlansSection (audience="mixed", serviceLabel "Career Counselling", title like "MBA Career Counselling Plans"); CTAs jump to #plans; 4-6 CTA moments via ContextualCta; FinalCta; BofuFaqSection (first item open); tables in .table-wrap with data-label on every td; ComparisonMatrix with approved subset only, labels "Others"/"Future Career School"; named framework introduced once with exact name; hero must carry positioning (earlier financial freedom / high-income skill portfolio / high income opportunities) and chain skill portfolio -> high income opportunities -> earlier financial freedom; positioning in hero + one of first two body sections + final CTA; no day/week counts for tests/sprints; no placement/job guarantees; no Review/AggregateRating; Service + BreadcrumbList + FAQPage schema; one H1; keyword in title/meta/H1/first sentence/first 100 words/an H2; no developer voice.
- Run build via: flock /tmp/claude-0/build.lock sh -c 'NODE_OPTIONS=--max-old-space-size=3072 npm run build && npm run check:public-copy'
