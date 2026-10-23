# Pending work (as of 2026-10-23)

Everything from **Report 1** that was in scope is done (see `00-README-START-HERE.md` Section 3 and `reports/keyword-authority/04-report-01-retitle-and-expand-log.md`). What remains:

## A. Images for 39 live pages (owner is making them)

Full list with image briefs: `01-IMAGES-NEEDED.md`. When the owner sends images:
1. Put files in `public/images/blog/<category>/<slug>/` using the filenames in the brief (plus `<slug>-social.jpg`, 1200x630).
2. In each page add the hero `<figure class="article-visual article-visual--hero">`, 5 or more `<figure class="article-visual">` blocks with captions spread through the article, and `ogImage`, `ogImageWidth={1200}`, `ogImageHeight={630}` props. Alt 25+ characters, `title`, `width="1600" height="1000"`, files under 250 KB.
3. Run `pnpm exec astro build` then `node scripts/audit-images.mjs --strict --scope=blog` and fix what it flags.
This is the one thing that blocks `audit-images --strict` from passing on the new pages.

## B. Report 2: topics few people write about (not started)

File: `reports/keyword-authority/02-report-authority-in-uncovered-topics.md` (17 themes; each has evidence, pages to write, guardrails). Suggested sequence from the report:

- **Month 1 (P1):** W1 disability and learning-difference careers (hub + `career-options-for-students-with-disabilities-india`, `career-options-for-students-with-dyslexia-and-learning-disabilities`, `career-options-for-deaf-and-hard-of-hearing-students-india`, `colour-blindness-and-career-choice-india`); W7 the career-counselling profession (`how-to-become-a-career-counsellor-in-india`, `career-counselling-courses-india-compared-accreditation-fees-ignou`, `career-coach-certification-india`, `how-to-become-a-soft-skills-or-life-skills-trainer-india`, `how-to-start-a-career-counselling-practice-india`).
- **Month 2:** W2 second-chance pathways (`what-to-do-after-failing-class-12-india`, `what-to-do-after-failing-class-10-india`, `diploma-courses-for-12th-failed-students`, `after-failing-first-year-engineering-india`); W6 free government guidance.
- **Month 3:** W4 career ladders/designation hierarchies (HR and IT first), W8 green skills / Skill India / NSQF / training-provider scam check, W3 regional board vocabulary decoder.
- **Only if earlier pages show impressions:** W5 pay and package literacy (CTC, in-hand, median vs average), W9 "why did you choose this career" answer guides, W10 mentoring, W13 glossary, W17 engineering branch decisions, and P3 themes W11, W12, W14, W15, W16.
- **Accuracy-risk themes** (legal, financial, health-adjacent): W1, W5, W6, W8 (and W2, W7 depend on board rules/accreditation). They need a sourcing pass and a "last verified" line on the page. Use statutes and official bodies, no forum paraphrase.
- Category notes: choose the existing category that fits (e.g. `career-guidance`, `stream-selection`, `college-degrees`, `parents`); `salary-growth` exists as a category and now has one page.
- Many of these are definitions/rules/process pages, so the STEP 0 duplicate check matters: grep `src/config/blog.ts` and `src/config/site.ts` first.

## C. Report 3: low and zero volume keywords inside covered topics (not started)

File: `reports/keyword-authority/03-report-low-volume-authority-in-covered-topics.md`. The report's advice is **mostly not new URLs**: add headings/FAQs to existing pages.
1. Week 1-2: add the searcher's phrasing as H2/H3 or FAQ on the top ~15 host pages that already have impressions (report Section 6; data in `appendix/A12`).
2. Week 3-6: top 30 host pages (Section 7; `appendix/A11`, angle phrasings in `appendix/A9`): add the best angle groups as H2 plus 2-3 FAQ lines.
3. Month 2-3: bigger families: one career-objective hub for engineers, mechanical/civil/electrical course pages, MBA specialisation H2s, stream-alias lines on stream pages, girls-specific sections on stream pages.
4. Then the nine micro-article candidates (Section 7.1), one at a time, only if the host section's impressions justify it.
Use the same additive-edit rules as Report 1: never remove sections, keep slugs and target words, FAQ JSON-LD from the same array, seoTitle at most 75 characters, meta at most 160.

## D. Report 1 items not built (decide with Search Console data first)

- Cluster I "check intent of related page" rows: project management (`project-manager-career-india-pmp-certification` exists), banking, finance/accounting, animation, teaching, paramedical (OT/MLT/anaesthesia), content writing, consulting. Related pages exist; only build "is X a good career" pages if their intent is a different decision.
- `mba-hr-career-options` and `polytechnic-career-options`: decided not to build (overlap). Revisit only if impressions show demand.
- Standalone pages for `career-options-after-jee`, `mba-marketing-career-options`, `business-analyst-career-path`, `is-mba/bba/bca-a-good-career-option`: stopped at STEP 0; covered by expansions.
- Astronomy: Report 2 W12 proposes a separate `astronomy-and-astrophysics-career-options-india` page; the new astronomy page already absorbs those phrasings, so check for cannibalisation before building it.

## E. Clean-up / verification still worth doing

- Re-verify date-sensitive and medium-confidence facts listed in each `docs/dossiers/<slug>.md` ledger (exam dates, fees, cut-offs, rules). Highest-risk: law-career-options (Bhumika Trust v. Union of India judiciary rule reports differ), professional-courses-for-commerce-students (ICSI details from snippets), is-youtube-a-good-career (YPP thresholds change 1 Feb 2027), polytechnic-diploma (state entry rules/fees are secondary summaries), is-aviation (IndiGo/DGCA rules from summaries), business-ideas-for-students (GST/minors rules from explainers), CS/CMA pass rates (news reports).
- A visual check of the new tables at phone width (360-430 px) has not been done.
- Existing pages with pre-existing over-limit titles/descriptions (`best-mba-specializations-india` title 80 chars, description 197; `mba-finance-vs-marketing-india` description 178; `is-business-analyst-a-good-career-in-india` title 79, description 171) were left alone because changing them changes live snippets. Decide whether to shorten.
- Hub pages (`/blog/<category>/`) are generated from `blog.ts`; nothing else needed to list new pages.
- Deployment is manual (Hostinger). After deploying, submit/inspect the new URLs in Search Console, then re-measure at 4, 8 and 12 weeks against `reports/keyword-authority/search-console-baseline-2026-07-13-to-2026-10-12/`.

## F. Decisions the owner may still want to make

1. Whether to shorten the longest pillar pages (agents flagged candidate cuts in each report; none was cut).
2. Whether to build the P3/Cluster I rows above or wait for Search Console evidence (recommended: wait 6-8 weeks).
3. Whether to start Report 2 (recommended order in Section B) or Report 3's cheap heading-and-FAQ edits first (lowest risk, no new URLs).
