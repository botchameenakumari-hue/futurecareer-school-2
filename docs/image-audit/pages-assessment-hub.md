# Image audit — service/other pages: assessment-hub

1 pages, ordered by search priority. Submit one page section at a time with `docs/image-audit/00-READ-FIRST.md`.

### /services/assessments/

**H1:** All Assessment Tracks for Career Decisions That Need Clarity  
**Type:** assessment-hub · **Search priority:** P1 (0 clicks, 211 impressions) · **Rendered images:** 4 (0 generic category, 1 hero, 1 context, 2 SVG)
**Status: AMBER**

**Findings**
1. Hero `hero-assessment.webp` is shared by 52 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
2. Hero `hero-assessment.webp` has no title attribute and no caption.
3. Hero is `fetchpriority=high` but is rendered at 97% of the raw HTML (after the content); it is moved by JavaScript.
4. Context visual `context-assessment-map.webp` has no title attribute and no caption.
5. Context visual reuse: `context-assessment-map.webp` appears on 49 pages.
6. SVG diagrams present (`session-flow.svg`, `skill-portfolio-chain.svg`): preserve them; add alt/title/caption if missing.
7. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `bofu/hero-assessment.webp` | 97% | eager/high | A student taking an online career assessment on a… | NO | NO |
| `bofu/session-flow.svg` | 98% | lazy | Five-stage career guidance session flow from… | NO | NO |
| `bofu/skill-portfolio-chain.svg` | 98% | lazy | Skill portfolio chain from strengths to financial… | NO | NO |
| `bofu/context-assessment-map.webp` | 98% | lazy | An assessment signal map showing how results… | NO | NO |

**Required actions**
1. KEEP the hub hero. CREATE 4 explanatory visuals (hub overview, audience chooser, how to pick) from the page content:
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `assessments-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Career aptitude tests, psychometric assessments, stream selection tests, personality tests, skill readiness…
- On-image text (about 25-40 words, shortened from the page; no new claims): Assessments Covering Every Career Decision Point / Start with the situation closest to yours / Career Tests by Life Stage - Pick Where You Are / Browse every free assessment / Focused Free Tests for After 10th
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: All Assessment Tracks for Career…”: Assessments Covering Every Career…; Start with the situation…
- Title attribute: At a glance: All Assessment Tracks for Career Decisions That Need…
- Caption (and keep the same point in HTML text): Career aptitude tests, psychometric assessments, stream selection tests, personality tests, skill readiness checks, and career transition…
**V2 — Decision tree by situation** (place after the section “Start with the situation closest to yours”)
- File: `assessments-decision-start-situation-closest-yours.webp` · 1600×1000 WebP under 200 KB
- Teaches: If you do not know which test name to choose, use these starting points first.
- On-image text (about 25-40 words, shortened from the page; no new claims): Choosing stream or early direction / Comparing courses and career paths / Finding employability and role fit / Career change or growth decisions / Placement and aptitude readiness
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree by situation for “Start with the situation closest to yours”: Choosing stream or early direction; Comparing courses and career paths; Finding…
- Title attribute: Start with the situation closest to yours
- Caption (and keep the same point in HTML text): If you do not know which test name to choose, use these starting points first.
**V3 — Chronological timeline** (place after the section “Career Tests by Life Stage - Pick Where You Are”)
- File: `assessments-chronological-career-tests-life-stage.webp` · 1600×1000 WebP under 200 KB
- Teaches: Each track combines multiple assessments into one experience - career interest tests, aptitude mapping…
- On-image text (about 25-40 words, shortened from the page; no new claims): Students (Class 10 and Below) / Students (Class 11 to 12) / Graduates and Early Professionals / Working Professionals and Career Changers / Career Discovery Assessment (Live - free, instant results) / Stream Selection Test / Career Interest Test (RIASEC)
- Numbers: ● 100% Free and Live Students (Class 10 and Below) Free early clarity before stream pressure and costly wrong turns. | Tests Career Discovery Assessment (Live - free, instant results) Stream Selection Test Career Interest Test (RIASEC) Subject Preference and Learning Style Assessment Multiple Intelligence Profile Test Numerical Reasoning Test (Live - free, detailed results) Ve | Tests Career Aptitude Test After 12th Engineering Branch Selector Test Commerce Career Selector Test Humanities Career Selector Test Degree and Career Fit Assessment Career Motivation and Work-Style Assessment Numerical Reasoning Test (Live - free, detailed re
- Alt: Chronological timeline for “Career Tests by Life Stage - Pick Where You Are”: Students (Class 10 and Below); Students (Class 11 to 12); Graduates and Early…
- Title attribute: Career Tests by Life Stage - Pick Where You Are
- Caption (and keep the same point in HTML text): Each track combines multiple assessments into one experience - career interest tests, aptitude mapping, personality profiling, and stream…
**V4 — Decision tree** (place after the section “Focused Free Tests for After 10th”)
- File: `assessments-decision-focused-free-tests-after.webp` · 1600×1000 WebP under 200 KB
- Teaches: Quick free tests for students choosing a stream or checking strength-fit after Class 10.
- On-image text (about 25-40 words, shortened from the page; no new claims): Quick free tests for students choosing a stream or checking strength-fit after… / Stream Selector Test After 10th A quick 15-question free stream quiz for… / Also known as: stream selector test after 10th, stream selector test after 10th…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “Focused Free Tests for After 10th”: Quick free tests for students…; Stream Selector Test After 10th A…; Also known as: stream selector…
- Title attribute: Focused Free Tests for After 10th
- Caption (and keep the same point in HTML text): Quick free tests for students choosing a stream or checking strength-fit after Class 10.
2. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
3. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---
