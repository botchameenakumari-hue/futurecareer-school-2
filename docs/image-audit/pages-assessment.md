# Image audit — service/other pages: assessment

55 pages, ordered by search priority. Submit one page section at a time with `docs/image-audit/00-READ-FIRST.md`.

### /services/assessments/career-aptitude-test-after-10th/

**H1:** Career Aptitude Test After 10th  
**Type:** assessment · **Search priority:** P1 (108 clicks, 1203 impressions) · **Rendered images:** 7 (3 generic category, 1 hero, 1 context, 2 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/assessments-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `assessments-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-assessment.webp` is shared by 52 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-assessment.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 94% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-assessment-map.webp` has no title attribute and no caption.
7. Context visual reuse: `context-assessment-map.webp` appears on 49 pages.
8. SVG diagrams present (`session-flow.svg`, `skill-portfolio-chain.svg`): preserve them; add alt/title/caption if missing.
9. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 90% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 91% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/assessments-at-a-glance.webp` | 93% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-assessment.webp` | 94% | eager/high | A student taking an online career assessment on a… | NO | NO |
| `bofu/session-flow.svg` | 95% | lazy | Five-stage career guidance session flow from… | NO | NO |
| `bofu/skill-portfolio-chain.svg` | 96% | lazy | Skill portfolio chain from strengths to financial… | NO | NO |
| `bofu/context-assessment-map.webp` | 96% | lazy | An assessment signal map showing how results… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the shared assessment hero; add title attribute and caption. The page-specific value must come from the explanatory visuals below.
3. CREATE 3 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-aptitude-test-after-10th-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: If you are looking for an aptitude test after 10th, this free quiz helps you find your strongest skills.
- On-image text (about 25-40 words, shortened from the page; no new claims): Yes, your aptitude test after 10th is included — plus a lot more / How This Test Works / Common Questions / More Assessment Options for Students / Free results help. Full student clarity needs stronger guidance.
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career Aptitude Test After 10th”: Yes, your aptitude test after…; How This Test Works; Common Questions
- Title attribute: At a glance: Career Aptitude Test After 10th
- Caption (and keep the same point in HTML text): If you are looking for an aptitude test after 10th, this free quiz helps you find your strongest skills.
**V2 — Decision tree** (place after the section “Yes, your aptitude test after 10th is included — plus a lot more”)
- File: `career-aptitude-test-after-10th-decision-yes-aptitude-test-after.webp` · 1600×1000 WebP under 200 KB
- Teaches: This shorter quiz only checks one thing.
- On-image text (about 25-40 words, shortened from the page; no new claims): ✓ Your full aptitude breakdown — logical, numerical, and verbal strength, scored and… / ✓ Your full RIASEC career interest profile, not just your top skills / ✓ Stream fit compared across PCM, PCB, Commerce, and Humanities / ✓ Your thinking style, learning style, and how your brain is wired / ✓ An AI-readiness signal and a 6-month exploration roadmap
- Numbers: ✓ Your full aptitude breakdown — logical, numerical, and verbal strength, scored and explained ✓ Your full RIASEC career interest profile, not just your top skills ✓ Stream fit compared across PCM, PCB, Commerce, and Humanities ✓ Your thinking style, learning 
- Alt: Decision tree for “Yes, your aptitude test after 10th is included —…”: ✓ Your full aptitude breakdown —…; ✓ Your full RIASEC career…; ✓ Stream fit compared…
- Title attribute: Yes, your aptitude test after 10th is included — plus a lot more
- Caption (and keep the same point in HTML text): This shorter quiz only checks one thing.
**V3 — Self-assessment checklist** (place after the section “Your result is one slice. See the whole picture, free.”)
- File: `career-aptitude-test-after-10th-self-result-one-slice-see.webp` · 1600×1000 WebP under 200 KB
- Teaches: Career Aptitude Test After 10th Your natural strengths across a few aptitude areas One focused read on what…
- On-image text (about 25-40 words, shortened from the page; no new claims): Career Aptitude Test After 10th / Class 10 and Below Assessment / Your natural strengths across a few aptitude areas / One focused read on what you are good at today / No stream comparison or interest profile / ✓ Your best-fit stream, with PCM, PCB, Commerce and Humanities compared side by side / ✓ Your 6 career interest scores (RIASEC) and the careers that fit them
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Self-assessment checklist for “Your result is one slice. See the whole picture…”: Career Aptitude Test After 10th; Class 10 and Below Assessment; Your natural…
- Title attribute: Your result is one slice. See the whole picture, free.
- Caption (and keep the same point in HTML text): Career Aptitude Test After 10th Your natural strengths across a few aptitude areas One focused read on what you are good at today No stream…
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/assessments/career-aptitude-test-after-12th/

**H1:** Career Aptitude Test After 12th  
**Type:** assessment · **Search priority:** P1 (59 clicks, 596 impressions) · **Rendered images:** 7 (3 generic category, 1 hero, 1 context, 2 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/assessments-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `assessments-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-assessment.webp` is shared by 52 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-assessment.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 94% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-assessment-map.webp` has no title attribute and no caption.
7. Context visual reuse: `context-assessment-map.webp` appears on 49 pages.
8. SVG diagrams present (`session-flow.svg`, `skill-portfolio-chain.svg`): preserve them; add alt/title/caption if missing.
9. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 90% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 91% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/assessments-at-a-glance.webp` | 93% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-assessment.webp` | 94% | eager/high | A student taking an online career assessment on a… | NO | NO |
| `bofu/session-flow.svg` | 95% | lazy | Five-stage career guidance session flow from… | NO | NO |
| `bofu/skill-portfolio-chain.svg` | 96% | lazy | Skill portfolio chain from strengths to financial… | NO | NO |
| `bofu/context-assessment-map.webp` | 96% | lazy | An assessment signal map showing how results… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the shared assessment hero; add title attribute and caption. The page-specific value must come from the explanatory visuals below.
3. CREATE 3 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-aptitude-test-after-12th-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: If you are looking for an aptitude test after 12th, this free quiz helps you see your strongest skill…
- On-image text (about 25-40 words, shortened from the page; no new claims): Yes, your aptitude test after 12th is included — plus a lot more / How This Test Works / Common Questions / More Assessment and Guidance Options After 12th / Free results help. After-12th decisions need a real plan.
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career Aptitude Test After 12th”: Yes, your aptitude test after…; How This Test Works; Common Questions
- Title attribute: At a glance: Career Aptitude Test After 12th
- Caption (and keep the same point in HTML text): If you are looking for an aptitude test after 12th, this free quiz helps you see your strongest skill direction before choosing a degree or…
**V2 — Decision tree** (place after the section “Yes, your aptitude test after 12th is included — plus a lot more”)
- File: `career-aptitude-test-after-12th-decision-yes-aptitude-test-after.webp` · 1600×1000 WebP under 200 KB
- Teaches: This shorter quiz only checks one thing.
- On-image text (about 25-40 words, shortened from the page; no new claims): ✓ Your full aptitude breakdown — logical, numerical, and verbal strength, scored and… / ✓ Your full RIASEC career interest profile, not just your top skills / ✓ A college entrance strategy, with realistic college targets for your profile / ✓ Entrance exam readiness (JEE, NEET, CA, or CLAT, matched to your profile) and a prep… / ✓ High-income skills to build over the next 10 years, and an AI-readiness signal
- Numbers: ✓ Your full aptitude breakdown — logical, numerical, and verbal strength, scored and explained ✓ Your full RIASEC career interest profile, not just your top skills ✓ A college entrance strategy, with realistic college targets for your profile ✓ Entrance exam r
- Alt: Decision tree for “Yes, your aptitude test after 12th is included —…”: ✓ Your full aptitude breakdown —…; ✓ Your full RIASEC career…; ✓ A college entrance…
- Title attribute: Yes, your aptitude test after 12th is included — plus a lot more
- Caption (and keep the same point in HTML text): This shorter quiz only checks one thing.
**V3 — Self-assessment checklist** (place after the section “Your result is one slice. See the whole picture, free.”)
- File: `career-aptitude-test-after-12th-self-result-one-slice-see.webp` · 1600×1000 WebP under 200 KB
- Teaches: Career Aptitude Test After 12th Your natural strengths across a few aptitude areas One focused read on skill…
- On-image text (about 25-40 words, shortened from the page; no new claims): Career Aptitude Test After 12th / Class 11 and 12 Assessment / Your natural strengths across a few aptitude areas / One focused read on skill fit before choosing a course / No college targets or entrance-exam readiness / ✓ Your 6 career interest scores (RIASEC) and matching careers / ✓ Numerical, verbal and logical aptitude, scored and explained
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Self-assessment checklist for “Your result is one slice. See the whole picture…”: Career Aptitude Test After 12th; Class 11 and 12 Assessment; Your natural…
- Title attribute: Your result is one slice. See the whole picture, free.
- Caption (and keep the same point in HTML text): Career Aptitude Test After 12th Your natural strengths across a few aptitude areas One focused read on skill fit before choosing a course…
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/assessments/career-inclination-test/

**H1:** Career inclination test  
**Type:** assessment · **Search priority:** P1 (19 clicks, 367 impressions) · **Rendered images:** 7 (3 generic category, 1 hero, 1 context, 2 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/assessments-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `assessments-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-assessment.webp` is shared by 52 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-assessment.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 95% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-assessment-map.webp` has no title attribute and no caption.
7. Context visual reuse: `context-assessment-map.webp` appears on 49 pages.
8. SVG diagrams present (`session-flow.svg`, `skill-portfolio-chain.svg`): preserve them; add alt/title/caption if missing.
9. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 92% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 93% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/assessments-at-a-glance.webp` | 94% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-assessment.webp` | 95% | eager/high | A student taking an online career assessment on a… | NO | NO |
| `bofu/session-flow.svg` | 96% | lazy | Five-stage career guidance session flow from… | NO | NO |
| `bofu/skill-portfolio-chain.svg` | 96% | lazy | Skill portfolio chain from strengths to financial… | NO | NO |
| `bofu/context-assessment-map.webp` | 97% | lazy | An assessment signal map showing how results… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the shared assessment hero; add title attribute and caption. The page-specific value must come from the explanatory visuals below.
3. CREATE 3 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-inclination-test-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Career Inclination Test should help you choose the right free assessment first, not leave you with more…
- On-image text (about 25-40 words, shortened from the page; no new claims): Get the complete picture, not just one piece of it / When to use career inclination test / What career inclination test should actually help you do / You may also want these next / Common questions before you start
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career inclination test”: Get the complete picture, not…; When to use career inclination…; What career…
- Title attribute: At a glance: Career inclination test
- Caption (and keep the same point in HTML text): Career Inclination Test should help you choose the right free assessment first, not leave you with more guesswork.
**V2 — Chronological timeline** (place after the section “When to use career inclination test”)
- File: `career-inclination-test-chronological-use-career-inclination-test.webp` · 1600×1000 WebP under 200 KB
- Teaches: This matters when you still need help choosing the right free assessment before taking one specific test.
- On-image text (about 25-40 words, shortened from the page; no new claims): You want a clearer first filter / You want more than a label / You want the right free test for your stage
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “When to use career inclination test”: You want a clearer first filter; You want more than a label; You want the right free test for…
- Title attribute: When to use career inclination test
- Caption (and keep the same point in HTML text): This matters when you still need help choosing the right free assessment before taking one specific test.
**V3 — Decision tree** (place after the section “What career inclination test should actually help you do”)
- File: `career-inclination-test-decision-career-inclination-test-should.webp` · 1600×1000 WebP under 200 KB
- Teaches: The stronger outcome is not only a label.
- On-image text (about 25-40 words, shortened from the page; no new claims): Choose the right assessment first / Reduce wasted clicks and wrong turns / Know whether updated career guidance is still needed
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “What career inclination test should actually help…”: Choose the right assessment first; Reduce wasted clicks and wrong…; Know whether…
- Title attribute: What career inclination test should actually help you do
- Caption (and keep the same point in HTML text): The stronger outcome is not only a label.
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/assessments/class-10-and-below/

**H1:** Free Career Assessment for School Students (Class 10 and Below)  
**Type:** assessment · **Search priority:** P1 (18 clicks, 233 impressions) · **Rendered images:** 7 (3 generic category, 1 hero, 1 context, 2 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/assessments-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `assessments-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-assessment.webp` is shared by 52 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-assessment.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 94% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-assessment-map.webp` has no title attribute and no caption.
7. Context visual reuse: `context-assessment-map.webp` appears on 49 pages.
8. SVG diagrams present (`session-flow.svg`, `skill-portfolio-chain.svg`): preserve them; add alt/title/caption if missing.
9. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 90% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 91% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/assessments-at-a-glance.webp` | 93% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-assessment.webp` | 94% | eager/high | A student taking an online career assessment on a… | NO | NO |
| `bofu/session-flow.svg` | 95% | lazy | Five-stage career guidance session flow from… | NO | NO |
| `bofu/skill-portfolio-chain.svg` | 96% | lazy | Skill portfolio chain from strengths to financial… | NO | NO |
| `bofu/context-assessment-map.webp` | 96% | lazy | An assessment signal map showing how results… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the shared assessment hero; add title attribute and caption. The page-specific value must come from the explanatory visuals below.
3. CREATE 3 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `class-10-and-below-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: A stream selector test, an aptitude test and a career interest test (RIASEC) in one free assessment.
- On-image text (about 25-40 words, shortened from the page; no new claims): Six Tests. One Assessment. Instant Results. / Discover Your Career Profile / Common Questions / Focused Free Tests for After 10th / Where to Go Next
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Free Career Assessment for School…”: Six Tests. One Assessment.…; Discover Your Career Profile; Common…
- Title attribute: At a glance: Free Career Assessment for School Students (Class 10 and…
- Caption (and keep the same point in HTML text): A stream selector test, an aptitude test and a career interest test (RIASEC) in one free assessment.
**V2 — Decision tree** (place after the section “Six Tests. One Assessment. Instant Results.”)
- File: `class-10-and-below-decision-six-tests-one-assessment.webp` · 1600×1000 WebP under 200 KB
- Teaches: Each question in this assessment is engineered to capture multiple signals at once.
- On-image text (about 25-40 words, shortened from the page; no new claims): Career Interest Test / Stream Selection Test / Multiple Intelligence Profile / Numerical, Verbal & Logical Aptitude / Learning Style Assessment
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “Six Tests. One Assessment. Instant Results.”: Career Interest Test; Stream Selection Test; Multiple Intelligence Profile
- Title attribute: Six Tests. One Assessment. Instant Results.
- Caption (and keep the same point in HTML text): Each question in this assessment is engineered to capture multiple signals at once.
**V3 — Self-assessment checklist** (place after the section “Common Questions”)
- File: `class-10-and-below-self-common-questions.webp` · 1600×1000 WebP under 200 KB
- Teaches: Who should take this assessment?
- On-image text (about 25-40 words, shortened from the page; no new claims): Who should take this assessment? / Any school student in Class 10 or below who wants to start making sense of… / Class 8 and Class 9 students get just as much value — the earlier you start…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Self-assessment checklist for “Common Questions”: Who should take this assessment?; Any school student in Class 10 or…; Class 8 and Class 9 students get…
- Title attribute: Common Questions
- Caption (and keep the same point in HTML text): Who should take this assessment?
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/assessments/class-11-to-12/

**H1:** Free Career Assessment for Class 11 & 12 Students  
**Type:** assessment · **Search priority:** P1 (17 clicks, 236 impressions) · **Rendered images:** 7 (3 generic category, 1 hero, 1 context, 2 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/assessments-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `assessments-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-assessment.webp` is shared by 52 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-assessment.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 94% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-assessment-map.webp` has no title attribute and no caption.
7. Context visual reuse: `context-assessment-map.webp` appears on 49 pages.
8. SVG diagrams present (`session-flow.svg`, `skill-portfolio-chain.svg`): preserve them; add alt/title/caption if missing.
9. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 90% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 92% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/assessments-at-a-glance.webp` | 93% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-assessment.webp` | 94% | eager/high | A student taking an online career assessment on a… | NO | NO |
| `bofu/session-flow.svg` | 95% | lazy | Five-stage career guidance session flow from… | NO | NO |
| `bofu/skill-portfolio-chain.svg` | 96% | lazy | Skill portfolio chain from strengths to financial… | NO | NO |
| `bofu/context-assessment-map.webp` | 96% | lazy | An assessment signal map showing how results… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the shared assessment hero; add title attribute and caption. The page-specific value must come from the explanatory visuals below.
3. CREATE 3 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `class-11-to-12-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Stream chosen.
- On-image text (about 25-40 words, shortened from the page; no new claims): Six Tests. One Assessment. Personalised to Your Stream. / Discover Your Career Direction / Common Questions / Focused Free Tests for After 12th / Where to Go Next
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Free Career Assessment for Class 11…”: Six Tests. One Assessment.…; Discover Your Career Direction…
- Title attribute: At a glance: Free Career Assessment for Class 11 & 12 Students
- Caption (and keep the same point in HTML text): Stream chosen.
**V2 — Decision tree** (place after the section “Six Tests. One Assessment. Personalised to Your Stream.”)
- File: `class-11-to-12-decision-six-tests-one-assessment.webp` · 1600×1000 WebP under 200 KB
- Teaches: 25 questions capture multiple signals at once — RIASEC type, intelligence profile, aptitude, learning style…
- On-image text (about 25-40 words, shortened from the page; no new claims): Career Interest Profile / College Entrance Roadmap / Multiple Intelligence Profile / Numerical, Verbal & Logical Aptitude / Learning Style Assessment
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “Six Tests. One Assessment. Personalised to Your…”: Career Interest Profile; College Entrance Roadmap; Multiple Intelligence Profile
- Title attribute: Six Tests. One Assessment. Personalised to Your Stream.
- Caption (and keep the same point in HTML text): 25 questions capture multiple signals at once — RIASEC type, intelligence profile, aptitude, learning style, and a college entrance roadmap…
**V3 — Self-assessment checklist** (place after the section “Common Questions”)
- File: `class-11-to-12-self-common-questions.webp` · 1600×1000 WebP under 200 KB
- Teaches: I am already in Class 12.
- On-image text (about 25-40 words, shortened from the page; no new claims): I am already in Class 12. / Is this still useful? / Yes — especially if you have not clearly mapped your career direction or…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Self-assessment checklist for “Common Questions”: I am already in Class 12.; Is this still useful?; Yes — especially if you have not…
- Title attribute: Common Questions
- Caption (and keep the same point in HTML text): I am already in Class 12.
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/assessments/stream-selection-test/

**H1:** Stream selection test  
**Type:** assessment · **Search priority:** P1 (33 clicks, 584 impressions) · **Rendered images:** 7 (3 generic category, 1 hero, 1 context, 2 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/assessments-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `assessments-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-assessment.webp` is shared by 52 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-assessment.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 94% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-assessment-map.webp` has no title attribute and no caption.
7. Context visual reuse: `context-assessment-map.webp` appears on 49 pages.
8. SVG diagrams present (`session-flow.svg`, `skill-portfolio-chain.svg`): preserve them; add alt/title/caption if missing.
9. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 90% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 91% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/assessments-at-a-glance.webp` | 93% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-assessment.webp` | 94% | eager/high | A student taking an online career assessment on a… | NO | NO |
| `bofu/session-flow.svg` | 95% | lazy | Five-stage career guidance session flow from… | NO | NO |
| `bofu/skill-portfolio-chain.svg` | 96% | lazy | Skill portfolio chain from strengths to financial… | NO | NO |
| `bofu/context-assessment-map.webp` | 96% | lazy | An assessment signal map showing how results… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the shared assessment hero; add title attribute and caption. The page-specific value must come from the explanatory visuals below.
3. CREATE 3 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `stream-selection-test-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: A stream selection test should help before Science, Commerce, or Arts choices harden into years of drift.
- On-image text (about 25-40 words, shortened from the page; no new claims): Get the complete picture, not just one piece of it / When a stream selection test becomes worth taking / What a stream selection test should actually clarify / You may also want these next / Common questions before you start
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Stream selection test”: Get the complete picture, not…; When a stream selection test…; What a stream…
- Title attribute: At a glance: Stream selection test
- Caption (and keep the same point in HTML text): A stream selection test should help before Science, Commerce, or Arts choices harden into years of drift.
**V2 — Asymmetrical pros-and-cons comparison** (place after the section “When a stream selection test becomes worth taking”)
- File: `stream-selection-test-asymmetrical-stream-selection-test-becomes.webp` · 1600×1000 WebP under 200 KB
- Teaches: This matters when the Class 10 decision is starting to feel heavy enough that guessing or following pressure…
- On-image text (about 25-40 words, shortened from the page; no new claims): You are choosing between Science, Commerce, or Arts / Parent pressure and student uncertainty are both active / You want a free first step before deeper help
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “When a stream selection test becomes worth taking”: You are choosing between Science…; Parent pressure and student……
- Title attribute: When a stream selection test becomes worth taking
- Caption (and keep the same point in HTML text): This matters when the Class 10 decision is starting to feel heavy enough that guessing or following pressure no longer feels safe.
**V3 — Decision tree** (place after the section “What a stream selection test should actually clarify”)
- File: `stream-selection-test-decision-stream-selection-test-should.webp` · 1600×1000 WebP under 200 KB
- Teaches: A better test should narrow the choice, not only repeat broad definitions of the three streams.
- On-image text (about 25-40 words, shortened from the page; no new claims): Which stream feels more aligned / Why one stream is a better first bet than another / Whether you need broader student guidance next
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “What a stream selection test should actually…”: Which stream feels more aligned; Why one stream is a better first…; Whether you need broader…
- Title attribute: What a stream selection test should actually clarify
- Caption (and keep the same point in HTML text): A better test should narrow the choice, not only repeat broad definitions of the three streams.
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/assessments/stream-selector-test-after-10th/

**H1:** Stream Selector Test After 10th  
**Type:** assessment · **Search priority:** P1 (222 clicks, 1059 impressions) · **Rendered images:** 7 (3 generic category, 1 hero, 1 context, 2 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/assessments-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `assessments-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-assessment.webp` is shared by 52 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-assessment.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 94% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-assessment-map.webp` has no title attribute and no caption.
7. Context visual reuse: `context-assessment-map.webp` appears on 49 pages.
8. SVG diagrams present (`session-flow.svg`, `skill-portfolio-chain.svg`): preserve them; add alt/title/caption if missing.
9. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 90% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 91% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/assessments-at-a-glance.webp` | 93% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-assessment.webp` | 94% | eager/high | A student taking an online career assessment on a… | NO | NO |
| `bofu/session-flow.svg` | 95% | lazy | Five-stage career guidance session flow from… | NO | NO |
| `bofu/skill-portfolio-chain.svg` | 96% | lazy | Skill portfolio chain from strengths to financial… | NO | NO |
| `bofu/context-assessment-map.webp` | 96% | lazy | An assessment signal map showing how results… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the shared assessment hero; add title attribute and caption. The page-specific value must come from the explanatory visuals below.
3. CREATE 3 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `stream-selector-test-after-10th-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: If you are trying to figure out which stream to choose after 10th, this free stream selector test makes that…
- On-image text (about 25-40 words, shortened from the page; no new claims): Yes, your best-fit stream — PCM, PCB, Commerce, or Arts is included —… / How This Test Works / Common Questions / More Assessment Options Around Stream Choice / Free results help. Full student clarity needs stronger guidance.
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Stream Selector Test After 10th”: Yes, your best-fit stream — PCM…; How This Test Works; Common…
- Title attribute: At a glance: Stream Selector Test After 10th
- Caption (and keep the same point in HTML text): If you are trying to figure out which stream to choose after 10th, this free stream selector test makes that decision easier.
**V2 — Decision tree** (place after the section “Yes, your best-fit stream — PCM, PCB, Commerce, or Arts is included —…”)
- File: `stream-selector-test-after-10th-decision-yes-best-fit-stream.webp` · 1600×1000 WebP under 200 KB
- Teaches: This shorter quiz only checks one thing.
- On-image text (about 25-40 words, shortened from the page; no new claims): ✓ Your best-fit stream, compared across PCM, PCB, Commerce, and Humanities in full / ✓ Your full RIASEC career interest profile, not just a stream label / ✓ Your aptitude strengths — logical, numerical, and verbal, scored and explained / ✓ Your thinking style, learning style, and how your brain is wired / ✓ An AI-readiness signal and a 6-month exploration roadmap
- Numbers: ✓ Your best-fit stream, compared across PCM, PCB, Commerce, and Humanities in full ✓ Your full RIASEC career interest profile, not just a stream label ✓ Your aptitude strengths — logical, numerical, and verbal, scored and explained ✓ Your thinking style, learn
- Alt: Decision tree for “Yes, your best-fit stream — PCM, PCB, Commerce…”: ✓ Your best-fit stream, compared…; ✓ Your full RIASEC career…; ✓ Your aptitude strengths —…
- Title attribute: Yes, your best-fit stream — PCM, PCB, Commerce, or Arts is included —…
- Caption (and keep the same point in HTML text): This shorter quiz only checks one thing.
**V3 — Self-assessment checklist** (place after the section “Your result is one slice. See the whole picture, free.”)
- File: `stream-selector-test-after-10th-self-result-one-slice-see.webp` · 1600×1000 WebP under 200 KB
- Teaches: Stream Selector Test After 10th Your best-fit stream: Science (PCM), Science (PCB), Commerce or Arts 15 short…
- On-image text (about 25-40 words, shortened from the page; no new claims): Stream Selector Test After 10th / Class 10 and Below Assessment / Your best-fit stream: Science (PCM), Science (PCB), Commerce or Arts / 15 short questions about the subjects and work you like / A stream label with matching careers and exams / ✓ Your best-fit stream, with PCM, PCB, Commerce and Humanities compared side by side / ✓ Your 6 career interest scores (RIASEC) and the careers that fit them
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Self-assessment checklist for “Your result is one slice. See the whole picture…”: Stream Selector Test After 10th; Class 10 and Below Assessment; Your best-fit…
- Title attribute: Your result is one slice. See the whole picture, free.
- Caption (and keep the same point in HTML text): Stream Selector Test After 10th Your best-fit stream: Science (PCM), Science (PCB), Commerce or Arts 15 short questions about the subjects…
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/assessments/stream-selector-test-after-12th/

**H1:** Career Test After 12th  
**Type:** assessment · **Search priority:** P1 (28 clicks, 278 impressions) · **Rendered images:** 7 (3 generic category, 1 hero, 1 context, 2 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/assessments-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `assessments-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-assessment.webp` is shared by 52 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-assessment.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 94% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-assessment-map.webp` has no title attribute and no caption.
7. Context visual reuse: `context-assessment-map.webp` appears on 49 pages.
8. SVG diagrams present (`session-flow.svg`, `skill-portfolio-chain.svg`): preserve them; add alt/title/caption if missing.
9. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 90% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 91% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/assessments-at-a-glance.webp` | 93% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-assessment.webp` | 94% | eager/high | A student taking an online career assessment on a… | NO | NO |
| `bofu/session-flow.svg` | 95% | lazy | Five-stage career guidance session flow from… | NO | NO |
| `bofu/skill-portfolio-chain.svg` | 96% | lazy | Skill portfolio chain from strengths to financial… | NO | NO |
| `bofu/context-assessment-map.webp` | 96% | lazy | An assessment signal map showing how results… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the shared assessment hero; add title attribute and caption. The page-specific value must come from the explanatory visuals below.
3. CREATE 3 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `stream-selector-test-after-12th-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: If you are confused about what to do after Class 12, this free career quiz helps you narrow your best-fit…
- On-image text (about 25-40 words, shortened from the page; no new claims): Yes, your best-fit course and career direction after 12th is included… / How This Test Works / Common Questions / More Assessment and Guidance Options After 12th / Free results help. After-12th decisions need a real plan.
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career Test After 12th”: Yes, your best-fit course and…; How This Test Works; Common Questions
- Title attribute: At a glance: Career Test After 12th
- Caption (and keep the same point in HTML text): If you are confused about what to do after Class 12, this free career quiz helps you narrow your best-fit path.
**V2 — Decision tree** (place after the section “Yes, your best-fit course and career direction after 12th is included…”)
- File: `stream-selector-test-after-12th-decision-yes-best-fit-course.webp` · 1600×1000 WebP under 200 KB
- Teaches: This shorter quiz only checks one thing.
- On-image text (about 25-40 words, shortened from the page; no new claims): ✓ Your best-fit direction, plus a college entrance strategy with realistic college targets / ✓ Your full RIASEC career interest profile, not just a course label / ✓ Your aptitude strengths — logical, numerical, and verbal, scored and explained / ✓ Entrance exam readiness (JEE, NEET, CA, or CLAT, matched to your profile) and a prep… / ✓ High-income skills to build over the next 10 years, and an AI-readiness signal
- Numbers: ✓ Your best-fit direction, plus a college entrance strategy with realistic college targets ✓ Your full RIASEC career interest profile, not just a course label ✓ Your aptitude strengths — logical, numerical, and verbal, scored and explained ✓ Entrance exam read
- Alt: Decision tree for “Yes, your best-fit course and career direction…”: ✓ Your best-fit direction, plus a…; ✓ Your full RIASEC career…; ✓ Your aptitude strengths…
- Title attribute: Yes, your best-fit course and career direction after 12th is included…
- Caption (and keep the same point in HTML text): This shorter quiz only checks one thing.
**V3 — Self-assessment checklist** (place after the section “Your result is one slice. See the whole picture, free.”)
- File: `stream-selector-test-after-12th-self-result-one-slice-see.webp` · 1600×1000 WebP under 200 KB
- Teaches: Career Test After 12th A broad course and career-direction read after Class 12 15 short questions about what…
- On-image text (about 25-40 words, shortened from the page; no new claims): Career Test After 12th / Class 11 and 12 Assessment / A broad course and career-direction read after Class 12 / 15 short questions about what you like and are good at / One direction label with matching paths / ✓ Your 6 career interest scores (RIASEC) and matching careers / ✓ Numerical, verbal and logical aptitude, scored and explained
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Self-assessment checklist for “Your result is one slice. See the whole picture…”: Career Test After 12th; Class 11 and 12 Assessment; A broad course and…
- Title attribute: Your result is one slice. See the whole picture, free.
- Caption (and keep the same point in HTML text): Career Test After 12th A broad course and career-direction read after Class 12 15 short questions about what you like and are good at One…
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/assessments/big-5-personality-test-careers/

**H1:** Big 5 Personality Test for Careers  
**Type:** assessment · **Search priority:** P2 (0 clicks, 30 impressions) · **Rendered images:** 7 (3 generic category, 1 hero, 1 context, 2 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/assessments-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `assessments-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-assessment.webp` is shared by 52 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-assessment.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 95% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-assessment-map.webp` has no title attribute and no caption.
7. Context visual reuse: `context-assessment-map.webp` appears on 49 pages.
8. SVG diagrams present (`session-flow.svg`, `skill-portfolio-chain.svg`): preserve them; add alt/title/caption if missing.
9. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 92% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 93% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/assessments-at-a-glance.webp` | 94% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-assessment.webp` | 95% | eager/high | A student taking an online career assessment on a… | NO | NO |
| `bofu/session-flow.svg` | 96% | lazy | Five-stage career guidance session flow from… | NO | NO |
| `bofu/skill-portfolio-chain.svg` | 96% | lazy | Skill portfolio chain from strengths to financial… | NO | NO |
| `bofu/context-assessment-map.webp` | 97% | lazy | An assessment signal map showing how results… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the shared assessment hero; add title attribute and caption. The page-specific value must come from the explanatory visuals below.
3. CREATE 3 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `big-5-personality-test-careers-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Understand how curiosity, execution, social energy, cooperation, and emotional sensitivity may shape your…
- On-image text (about 25-40 words, shortened from the page; no new claims): Get the complete picture with a full free career assessment / Every trait can help or hinder depending on the task / Rate how accurately each statement describes you / Use the report to test work, not stereotype yourself / Before you act on a personality score
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Big 5 Personality Test for Careers”: Get the complete picture with a…; Every trait can help or…
- Title attribute: At a glance: Big 5 Personality Test for Careers
- Caption (and keep the same point in HTML text): Understand how curiosity, execution, social energy, cooperation, and emotional sensitivity may shape your work.
**V2 — Framework cards** (place after the section “Every trait can help or hinder depending on the task”)
- File: `big-5-personality-test-careers-framework-every-trait-help-hinder.webp` · 1600×1000 WebP under 200 KB
- Teaches: The report treats each score as a continuum.
- On-image text (about 25-40 words, shortened from the page; no new claims): Openness / Conscientiousness / Extraversion / Agreeableness / Emotional sensitivity
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Framework cards for “Every trait can help or hinder depending on the…”: Openness; Conscientiousness; Extraversion
- Title attribute: Every trait can help or hinder depending on the task
- Caption (and keep the same point in HTML text): The report treats each score as a continuum.
**V3 — Framework cards** (place after the section “Career Guidance Pricing”)
- File: `big-5-personality-test-careers-framework-career-guidance-pricing.webp` · 1600×1000 WebP under 200 KB
- Teaches: Students Student path Student Career Guidance Practical student career guidance before the wrong path wastes…
- On-image text (about 25-40 words, shortened from the page; no new claims): Student Career Guidance / Working Professional Career Guidance / Students Student path Student Career Guidance Practical student career guidance… / Limited-time student offer ₹3000 ₹250 for the first 1-on-1 session A… / Book 1-on-1 Online across India Avoid Wrong streams, outdated degrees, and…
- Numbers: Limited-time student offer ₹3000 ₹250 for the first 1-on-1 session A low-friction first step before the wrong path costs more time and money. | Continuous career guidance Limited-time annual price ₹29000 ₹12000 Includes the 1-on-1 and up to 24 small-group sessions across the year. | Limited-time professional offer ₹5000 ₹3000 for one 1-on-1 session Book one sharp 1-on-1 before stagnation, weak positioning, or a bad pivot gets more expensive.
- Alt: Framework cards for “Career Guidance Pricing”: Student Career Guidance; Working Professional Career…; Students Student path Student…
- Title attribute: Career Guidance Pricing
- Caption (and keep the same point in HTML text): Students Student path Student Career Guidance Practical student career guidance before the wrong path wastes years, money, and future…
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/assessments/career-aptitude-test-for-teens/

**H1:** Career aptitude test for teens  
**Type:** assessment · **Search priority:** P2 (2 clicks, 35 impressions) · **Rendered images:** 7 (3 generic category, 1 hero, 1 context, 2 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/assessments-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `assessments-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-assessment.webp` is shared by 52 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-assessment.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 94% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-assessment-map.webp` has no title attribute and no caption.
7. Context visual reuse: `context-assessment-map.webp` appears on 49 pages.
8. SVG diagrams present (`session-flow.svg`, `skill-portfolio-chain.svg`): preserve them; add alt/title/caption if missing.
9. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 90% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 91% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/assessments-at-a-glance.webp` | 93% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-assessment.webp` | 94% | eager/high | A student taking an online career assessment on a… | NO | NO |
| `bofu/session-flow.svg` | 95% | lazy | Five-stage career guidance session flow from… | NO | NO |
| `bofu/skill-portfolio-chain.svg` | 96% | lazy | Skill portfolio chain from strengths to financial… | NO | NO |
| `bofu/context-assessment-map.webp` | 96% | lazy | An assessment signal map showing how results… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the shared assessment hero; add title attribute and caption. The page-specific value must come from the explanatory visuals below.
3. CREATE 3 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-aptitude-test-for-teens-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Career Aptitude Test for Teens should help you judge where your stronger natural patterns sit before more…
- On-image text (about 25-40 words, shortened from the page; no new claims): Get the complete picture, not just one piece of it / When to use career aptitude test for teens / What career aptitude test for teens should actually help you… / You may also want these next / Common questions before you start
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career aptitude test for teens”: Get the complete picture, not…; When to use career aptitude test……
- Title attribute: At a glance: Career aptitude test for teens
- Caption (and keep the same point in HTML text): Career Aptitude Test for Teens should help you judge where your stronger natural patterns sit before more time and money get wasted.
**V2 — Chronological timeline** (place after the section “When to use career aptitude test for teens”)
- File: `career-aptitude-test-for-teens-chronological-use-career-aptitude-test.webp` · 1600×1000 WebP under 200 KB
- Teaches: This matters when the next study or work decision should be based on stronger fit signals, not only on what…
- On-image text (about 25-40 words, shortened from the page; no new claims): You want stronger evidence before choosing / You want the right aptitude page for your stage / You want a free first step before heavier support
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “When to use career aptitude test for teens”: You want stronger evidence before…; You want the right aptitude page…; You want a free…
- Title attribute: When to use career aptitude test for teens
- Caption (and keep the same point in HTML text): This matters when the next study or work decision should be based on stronger fit signals, not only on what sounds attractive or familiar.
**V3 — Decision tree** (place after the section “What career aptitude test for teens should actually help you…”)
- File: `career-aptitude-test-for-teens-decision-career-aptitude-test-teens.webp` · 1600×1000 WebP under 200 KB
- Teaches: The stronger outcome is not only a score.
- On-image text (about 25-40 words, shortened from the page; no new claims): Which strength patterns matter most / Which stage-specific aptitude page fits better / Whether aptitude is the whole issue
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “What career aptitude test for teens should…”: Which strength patterns matter…; Which stage-specific aptitude…; Whether aptitude is the whole…
- Title attribute: What career aptitude test for teens should actually help you…
- Caption (and keep the same point in HTML text): The stronger outcome is not only a score.
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/assessments/career-test-for-8th-graders/

**H1:** Career test for 8th graders  
**Type:** assessment · **Search priority:** P2 (2 clicks, 23 impressions) · **Rendered images:** 7 (3 generic category, 1 hero, 1 context, 2 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/assessments-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `assessments-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-assessment.webp` is shared by 52 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-assessment.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 94% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-assessment-map.webp` has no title attribute and no caption.
7. Context visual reuse: `context-assessment-map.webp` appears on 49 pages.
8. SVG diagrams present (`session-flow.svg`, `skill-portfolio-chain.svg`): preserve them; add alt/title/caption if missing.
9. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 90% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 91% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/assessments-at-a-glance.webp` | 93% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-assessment.webp` | 94% | eager/high | A student taking an online career assessment on a… | NO | NO |
| `bofu/session-flow.svg` | 95% | lazy | Five-stage career guidance session flow from… | NO | NO |
| `bofu/skill-portfolio-chain.svg` | 96% | lazy | Skill portfolio chain from strengths to financial… | NO | NO |
| `bofu/context-assessment-map.webp` | 96% | lazy | An assessment signal map showing how results… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the shared assessment hero; add title attribute and caption. The page-specific value must come from the explanatory visuals below.
3. CREATE 3 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-test-for-8th-graders-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Career Test for 8th Graders should help before stream, course, and degree decisions become expensive wrong…
- On-image text (about 25-40 words, shortened from the page; no new claims): Get the complete picture, not just one piece of it / When to use career test for 8th graders / What career test for 8th graders should actually help with / You may also want these next / Common questions before you start
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career test for 8th graders”: Get the complete picture, not…; When to use career test for 8th…; What…
- Title attribute: At a glance: Career test for 8th graders
- Caption (and keep the same point in HTML text): Career Test for 8th Graders should help before stream, course, and degree decisions become expensive wrong turns.
**V2 — Chronological timeline** (place after the section “When to use career test for 8th graders”)
- File: `career-test-for-8th-graders-chronological-use-career-test-8th.webp` · 1600×1000 WebP under 200 KB
- Teaches: This matters when students need a faster first layer before stream selection, after-12th pressure, or bigger…
- On-image text (about 25-40 words, shortened from the page; no new claims): You want a student-safe first layer / You want the stage-relevant test / You want clearer parent-student discussion
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “When to use career test for 8th graders”: You want a student-safe first…; You want the stage-relevant test; You want clearer…
- Title attribute: When to use career test for 8th graders
- Caption (and keep the same point in HTML text): This matters when students need a faster first layer before stream selection, after-12th pressure, or bigger student decisions start…
**V3 — Decision tree** (place after the section “What career test for 8th graders should actually help with”)
- File: `career-test-for-8th-graders-decision-career-test-8th-graders.webp` · 1600×1000 WebP under 200 KB
- Teaches: The stronger outcome is not only student self-description.
- On-image text (about 25-40 words, shortened from the page; no new claims): Choose the right student test first / Reduce wrong turns early / Make the next discussion easier
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “What career test for 8th graders should actually…”: Choose the right student test…; Reduce wrong turns early; Make the next discussion easier
- Title attribute: What career test for 8th graders should actually help with
- Caption (and keep the same point in HTML text): The stronger outcome is not only student self-description.
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/assessments/disc-personality-test-careers/

**H1:** DISC Personality Test for Careers  
**Type:** assessment · **Search priority:** P2 (0 clicks, 46 impressions) · **Rendered images:** 7 (3 generic category, 1 hero, 1 context, 2 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/assessments-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `assessments-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-assessment.webp` is shared by 52 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-assessment.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 95% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-assessment-map.webp` has no title attribute and no caption.
7. Context visual reuse: `context-assessment-map.webp` appears on 49 pages.
8. SVG diagrams present (`session-flow.svg`, `skill-portfolio-chain.svg`): preserve them; add alt/title/caption if missing.
9. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 92% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 93% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/assessments-at-a-glance.webp` | 94% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-assessment.webp` | 95% | eager/high | A student taking an online career assessment on a… | NO | NO |
| `bofu/session-flow.svg` | 96% | lazy | Five-stage career guidance session flow from… | NO | NO |
| `bofu/skill-portfolio-chain.svg` | 96% | lazy | Skill portfolio chain from strengths to financial… | NO | NO |
| `bofu/context-assessment-map.webp` | 97% | lazy | An assessment signal map showing how results… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the shared assessment hero; add title attribute and caption. The page-specific value must come from the explanatory visuals below.
3. CREATE 3 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `disc-personality-test-careers-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Rate 24 real workplace behaviours and get your Dominance, Influence, Steadiness, and Conscientiousness…
- On-image text (about 25-40 words, shortened from the page; no new claims): Get the complete picture with a full free career assessment / Most people are a blend of two styles / How much is each behaviour like you at work or in study? / Turn a style blend into better decisions / Before you use your style blend
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: DISC Personality Test for Careers”: Get the complete picture with a…; Most people are a blend of two……
- Title attribute: At a glance: DISC Personality Test for Careers
- Caption (and keep the same point in HTML text): Rate 24 real workplace behaviours and get your Dominance, Influence, Steadiness, and Conscientiousness scores, your style blend, and…
**V2 — Asymmetrical pros-and-cons comparison** (place after the section “How much is each behaviour like you at work or in study?”)
- File: `disc-personality-test-careers-asymmetrical-much-each-behaviour-like.webp` · 1600×1000 WebP under 200 KB
- Teaches: Use your common pattern under normal conditions, not your best day or your worst day.
- On-image text (about 25-40 words, shortened from the page; no new claims): Use your common pattern under normal conditions, not your best day or your… / School student Understand your natural style in group projects and leadership… / College student Connect your style with team roles, internships, and project…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “How much is each behaviour like you at work or in…”: Use your common pattern under…; School student Understand…
- Title attribute: How much is each behaviour like you at work or in study?
- Caption (and keep the same point in HTML text): Use your common pattern under normal conditions, not your best day or your worst day.
**V3 — Asymmetrical pros-and-cons comparison** (place after the section “Turn a style blend into better decisions”)
- File: `disc-personality-test-careers-asymmetrical-turn-style-blend-into.webp` · 1600×1000 WebP under 200 KB
- Teaches: 1 Notice See which styles are strongest, blended, or clearly lower under normal conditions.
- On-image text (about 25-40 words, shortened from the page; no new claims): Notice / Compare / Communicate / Verify
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “Turn a style blend into better decisions”: Notice; Compare; Communicate
- Title attribute: Turn a style blend into better decisions
- Caption (and keep the same point in HTML text): 1 Notice See which styles are strongest, blended, or clearly lower under normal conditions.
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/assessments/graduates-and-early-professionals/

**H1:** Career Clarity for Graduates & Early Professionals  
**Type:** assessment · **Search priority:** P2 (1 clicks, 11 impressions) · **Rendered images:** 7 (3 generic category, 1 hero, 1 context, 2 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/assessments-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `assessments-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-assessment.webp` is shared by 52 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-assessment.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 94% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-assessment-map.webp` has no title attribute and no caption.
7. Context visual reuse: `context-assessment-map.webp` appears on 49 pages.
8. SVG diagrams present (`session-flow.svg`, `skill-portfolio-chain.svg`): preserve them; add alt/title/caption if missing.
9. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 90% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 91% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/assessments-at-a-glance.webp` | 93% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-assessment.webp` | 94% | eager/high | A student taking an online career assessment on a… | NO | NO |
| `bofu/session-flow.svg` | 95% | lazy | Five-stage career guidance session flow from… | NO | NO |
| `bofu/skill-portfolio-chain.svg` | 96% | lazy | Skill portfolio chain from strengths to financial… | NO | NO |
| `bofu/context-assessment-map.webp` | 96% | lazy | An assessment signal map showing how results… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the shared assessment hero; add title attribute and caption. The page-specific value must come from the explanatory visuals below.
3. CREATE 3 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `graduates-and-early-professionals-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Pinpoint your strongest career direction, skill gaps, and role-fit strategy.
- On-image text (about 25-40 words, shortened from the page; no new claims): Six Tests. One Assessment. Built for Your Stage. / Discover Your Career Direction / Where to Go Next / Free results help. Graduate decisions still need sharper career… / Career Guidance Pricing for Graduates and Early Professionals
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career Clarity for Graduates & Early…”: Six Tests. One Assessment. Built…; Discover Your Career…
- Title attribute: At a glance: Career Clarity for Graduates & Early Professionals
- Caption (and keep the same point in HTML text): Pinpoint your strongest career direction, skill gaps, and role-fit strategy.
**V2 — Chronological timeline** (place after the section “Six Tests. One Assessment. Built for Your Stage.”)
- File: `graduates-and-early-professionals-chronological-six-tests-one-assessment.webp` · 1600×1000 WebP under 200 KB
- Teaches: 26 questions capture multiple signals at once — RIASEC career interests, role and domain fit, intelligence…
- On-image text (about 25-40 words, shortened from the page; no new claims): Career Interest Profile / Role & Domain Guide / Multiple Intelligence Profile / Professional Aptitude / Learning Style Assessment
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “Six Tests. One Assessment. Built for Your Stage.”: Career Interest Profile; Role & Domain Guide; Multiple Intelligence Profile
- Title attribute: Six Tests. One Assessment. Built for Your Stage.
- Caption (and keep the same point in HTML text): 26 questions capture multiple signals at once — RIASEC career interests, role and domain fit, intelligence profile, aptitude, learning…
**V3 — Decision tree by situation** (place after the section “Career Guidance Pricing for Graduates and Early Professionals”)
- File: `graduates-and-early-professionals-decision-career-guidance-pricing-graduates.webp` · 1600×1000 WebP under 200 KB
- Teaches: Students Student path Student Career Guidance Practical student career guidance before the wrong path wastes…
- On-image text (about 25-40 words, shortened from the page; no new claims): Student Career Guidance / Students Student path Student Career Guidance Practical student career guidance… / Limited-time student offer ₹3000 ₹250 for the first 1-on-1 session A… / Book 1-on-1 Online across India Avoid Wrong streams, outdated degrees, and…
- Numbers: Limited-time student offer ₹3000 ₹250 for the first 1-on-1 session A low-friction first step before the wrong path costs more time and money. | Continuous career guidance Limited-time annual price ₹29000 ₹12000 Includes the 1-on-1 and up to 24 small-group sessions across the year.
- Alt: Decision tree by situation for “Career Guidance Pricing for Graduates and Early…”: Student Career Guidance; Students Student path Student…; Limited-time…
- Title attribute: Career Guidance Pricing for Graduates and Early Professionals
- Caption (and keep the same point in HTML text): Students Student path Student Career Guidance Practical student career guidance before the wrong path wastes years, money, and future…
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/assessments/numerical-reasoning-test/

**H1:** Numerical Reasoning Test with Worked Results  
**Type:** assessment · **Search priority:** P2 (1 clicks, 5 impressions) · **Rendered images:** 7 (3 generic category, 1 hero, 1 context, 2 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/assessments-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `assessments-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-assessment.webp` is shared by 52 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-assessment.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 95% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-assessment-map.webp` has no title attribute and no caption.
7. Context visual reuse: `context-assessment-map.webp` appears on 49 pages.
8. SVG diagrams present (`session-flow.svg`, `skill-portfolio-chain.svg`): preserve them; add alt/title/caption if missing.
9. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 91% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 92% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/assessments-at-a-glance.webp` | 94% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-assessment.webp` | 95% | eager/high | A student taking an online career assessment on a… | NO | NO |
| `bofu/session-flow.svg` | 96% | lazy | Five-stage career guidance session flow from… | NO | NO |
| `bofu/skill-portfolio-chain.svg` | 96% | lazy | Skill portfolio chain from strengths to financial… | NO | NO |
| `bofu/context-assessment-map.webp` | 97% | lazy | An assessment signal map showing how results… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the shared assessment hero; add title attribute and caption. The page-specific value must come from the explanatory visuals below.
3. CREATE 3 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `numerical-reasoning-test-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Measure how accurately you handle numbers, ratios, rates, data, estimation, and practical quantitative…
- On-image text (about 25-40 words, shortened from the page; no new claims): Get more than Numerical Reasoning Test gives you, free / See more than one overall score / Get a result that speaks to your stage / The report diagnoses how the error happened / Before you use the score
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Numerical Reasoning Test with Worked…”: Get more than Numerical Reasoning…; See more than one overall…
- Title attribute: At a glance: Numerical Reasoning Test with Worked Results
- Caption (and keep the same point in HTML text): Measure how accurately you handle numbers, ratios, rates, data, estimation, and practical quantitative decisions.
**V2 — Decision tree** (place after the section “Get more than Numerical Reasoning Test gives you, free”)
- File: `numerical-reasoning-test-decision-get-more-than-numerical.webp` · 1600×1000 WebP under 200 KB
- Teaches: Numerical Reasoning Test Percentages, ratios, rates and data interpretation A check of one aptitude area A…
- On-image text (about 25-40 words, shortened from the page; no new claims): Numerical Reasoning Test / Graduates and Early Professionals Assessment / Percentages, ratios, rates and data interpretation / A check of one aptitude area / A numerical-skill read for study and work / ✓ Your role and domain guide, based on your interest evidence / ✓ Professional aptitude signals and your 8 intelligence signals
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “Get more than Numerical Reasoning Test gives you…”: Numerical Reasoning Test; Graduates and Early Professionals…; Percentages, ratios, rates…
- Title attribute: Get more than Numerical Reasoning Test gives you, free
- Caption (and keep the same point in HTML text): Numerical Reasoning Test Percentages, ratios, rates and data interpretation A check of one aptitude area A numerical-skill read for study…
**V3 — Self-assessment checklist** (place after the section “Your result is one slice. See the whole picture, free.”)
- File: `numerical-reasoning-test-self-result-one-slice-see.webp` · 1600×1000 WebP under 200 KB
- Teaches: Numerical Reasoning Test Percentages, ratios, rates and data interpretation A check of one aptitude area A…
- On-image text (about 25-40 words, shortened from the page; no new claims): Numerical Reasoning Test / Graduates and Early Professionals Assessment / Percentages, ratios, rates and data interpretation / A check of one aptitude area / A numerical-skill read for study and work / ✓ Your role and domain guide, based on your interest evidence / ✓ Professional aptitude signals and your 8 intelligence signals
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Self-assessment checklist for “Your result is one slice. See the whole picture…”: Numerical Reasoning Test; Graduates and Early Professionals…; Percentages…
- Title attribute: Your result is one slice. See the whole picture, free.
- Caption (and keep the same point in HTML text): Numerical Reasoning Test Percentages, ratios, rates and data interpretation A check of one aptitude area A numerical-skill read for study…
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/assessments/psychometric-test-for-career/

**H1:** Psychometric test for career  
**Type:** assessment · **Search priority:** P2 (0 clicks, 26 impressions) · **Rendered images:** 7 (3 generic category, 1 hero, 1 context, 2 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/assessments-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `assessments-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-assessment.webp` is shared by 52 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-assessment.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 95% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-assessment-map.webp` has no title attribute and no caption.
7. Context visual reuse: `context-assessment-map.webp` appears on 49 pages.
8. SVG diagrams present (`session-flow.svg`, `skill-portfolio-chain.svg`): preserve them; add alt/title/caption if missing.
9. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 91% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 92% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/assessments-at-a-glance.webp` | 94% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-assessment.webp` | 95% | eager/high | A student taking an online career assessment on a… | NO | NO |
| `bofu/session-flow.svg` | 96% | lazy | Five-stage career guidance session flow from… | NO | NO |
| `bofu/skill-portfolio-chain.svg` | 96% | lazy | Skill portfolio chain from strengths to financial… | NO | NO |
| `bofu/context-assessment-map.webp` | 97% | lazy | An assessment signal map showing how results… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the shared assessment hero; add title attribute and caption. The page-specific value must come from the explanatory visuals below.
3. CREATE 3 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `psychometric-test-for-career-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: A psychometric test for career decisions should help you connect personality, interests, work style, and fit…
- On-image text (about 25-40 words, shortened from the page; no new claims): Get the complete picture, not just one piece of it / When to use a psychometric test for career / What a psychometric test for career should actually help you… / You may also want these next / Common questions before you start
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Psychometric test for career”: Get the complete picture, not…; When to use a psychometric test…; What…
- Title attribute: At a glance: Psychometric test for career
- Caption (and keep the same point in HTML text): A psychometric test for career decisions should help you connect personality, interests, work style, and fit to a real career decision.
**V2 — Chronological timeline** (place after the section “When to use a psychometric test for career”)
- File: `psychometric-test-for-career-chronological-use-psychometric-test-career.webp` · 1600×1000 WebP under 200 KB
- Teaches: This matters when marks, opinions, or job titles alone are not enough to judge fit and direction properly.
- On-image text (about 25-40 words, shortened from the page; no new claims): You want more than grades or resume signals / You want a career-relevant interpretation / You want a free starting point before deeper help
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “When to use a psychometric test for career”: You want more than grades or…; You want a career-relevant…; You want a free starting…
- Title attribute: When to use a psychometric test for career
- Caption (and keep the same point in HTML text): This matters when marks, opinions, or job titles alone are not enough to judge fit and direction properly.
**V3 — Decision tree** (place after the section “What a psychometric test for career should actually help you…”)
- File: `psychometric-test-for-career-decision-psychometric-test-career-should.webp` · 1600×1000 WebP under 200 KB
- Teaches: The stronger outcome is not just that you learn a few traits.
- On-image text (about 25-40 words, shortened from the page; no new claims): Which work environments fit better / Where your preferences and strengths support each other / Which stage-specific assessment deserves more attention
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “What a psychometric test for career should…”: Which work environments fit better; Where your preferences and…; Which stage-specific…
- Title attribute: What a psychometric test for career should actually help you…
- Caption (and keep the same point in HTML text): The stronger outcome is not just that you learn a few traits.
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/assessments/riasec-career-test/

**H1:** RIASEC career test  
**Type:** assessment · **Search priority:** P2 (1 clicks, 14 impressions) · **Rendered images:** 7 (3 generic category, 1 hero, 1 context, 2 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/assessments-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `assessments-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-assessment.webp` is shared by 52 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-assessment.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 95% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-assessment-map.webp` has no title attribute and no caption.
7. Context visual reuse: `context-assessment-map.webp` appears on 49 pages.
8. SVG diagrams present (`session-flow.svg`, `skill-portfolio-chain.svg`): preserve them; add alt/title/caption if missing.
9. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 91% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 92% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/assessments-at-a-glance.webp` | 94% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-assessment.webp` | 95% | eager/high | A student taking an online career assessment on a… | NO | NO |
| `bofu/session-flow.svg` | 96% | lazy | Five-stage career guidance session flow from… | NO | NO |
| `bofu/skill-portfolio-chain.svg` | 96% | lazy | Skill portfolio chain from strengths to financial… | NO | NO |
| `bofu/context-assessment-map.webp` | 97% | lazy | An assessment signal map showing how results… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the shared assessment hero; add title attribute and caption. The page-specific value must come from the explanatory visuals below.
3. CREATE 3 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `riasec-career-test-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: RIASEC Career Test should help connect personality, interests, work style, and direction to a real career…
- On-image text (about 25-40 words, shortened from the page; no new claims): Get the complete picture, not just one piece of it / When to use RIASEC career test / What RIASEC career test should actually help you understand / You may also want these next / Common questions before you start
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: RIASEC career test”: Get the complete picture, not…; When to use RIASEC career test; What RIASEC…
- Title attribute: At a glance: RIASEC career test
- Caption (and keep the same point in HTML text): RIASEC Career Test should help connect personality, interests, work style, and direction to a real career decision.
**V2 — Chronological timeline** (place after the section “When to use RIASEC career test”)
- File: `riasec-career-test-chronological-use-riasec-career-test.webp` · 1600×1000 WebP under 200 KB
- Teaches: This matters when marks, opinions, or job titles alone are not enough to judge fit and direction properly.
- On-image text (about 25-40 words, shortened from the page; no new claims): You want more than one narrow label / You want career-relevant interpretation / You want the right psychometric page for your stage
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “When to use RIASEC career test”: You want more than one narrow…; You want career-relevant…; You want the right psychometric…
- Title attribute: When to use RIASEC career test
- Caption (and keep the same point in HTML text): This matters when marks, opinions, or job titles alone are not enough to judge fit and direction properly.
**V3 — Decision tree** (place after the section “What RIASEC career test should actually help you understand”)
- File: `riasec-career-test-decision-riasec-career-test-should.webp` · 1600×1000 WebP under 200 KB
- Teaches: The stronger outcome is not only personality description.
- On-image text (about 25-40 words, shortened from the page; no new claims): Which work patterns fit better / Where your preferences and strengths support each other / Which stage-specific psychometric page deserves attention
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “What RIASEC career test should actually help you…”: Which work patterns fit better; Where your preferences and…; Which stage-specific…
- Title attribute: What RIASEC career test should actually help you understand
- Caption (and keep the same point in HTML text): The stronger outcome is not only personality description.
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/assessments/vark-learning-style-test/

**H1:** VARK Learning Style Test  
**Type:** assessment · **Search priority:** P2 (2 clicks, 76 impressions) · **Rendered images:** 7 (3 generic category, 1 hero, 1 context, 2 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/assessments-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `assessments-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-assessment.webp` is shared by 52 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-assessment.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 95% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-assessment-map.webp` has no title attribute and no caption.
7. Context visual reuse: `context-assessment-map.webp` appears on 49 pages.
8. SVG diagrams present (`session-flow.svg`, `skill-portfolio-chain.svg`): preserve them; add alt/title/caption if missing.
9. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 91% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 92% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/assessments-at-a-glance.webp` | 94% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-assessment.webp` | 95% | eager/high | A student taking an online career assessment on a… | NO | NO |
| `bofu/session-flow.svg` | 96% | lazy | Five-stage career guidance session flow from… | NO | NO |
| `bofu/skill-portfolio-chain.svg` | 96% | lazy | Skill portfolio chain from strengths to financial… | NO | NO |
| `bofu/context-assessment-map.webp` | 97% | lazy | An assessment signal map showing how results… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the shared assessment hero; add title attribute and caption. The page-specific value must come from the explanatory visuals below.
3. CREATE 3 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `vark-learning-style-test-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Rate 24 real learning situations and get your Visual, Auditory, Read/Write, and Kinesthetic scores, your…
- On-image text (about 25-40 words, shortened from the page; no new claims): Get the complete picture with a full free career assessment / Most people learn best from a blend / How much does each situation help you learn? / Turn a preference into a real study system / Before you rely on your learning style
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: VARK Learning Style Test”: Get the complete picture with a…; Most people learn best from a…; How much…
- Title attribute: At a glance: VARK Learning Style Test
- Caption (and keep the same point in HTML text): Rate 24 real learning situations and get your Visual, Auditory, Read/Write, and Kinesthetic scores, your learning-style blend, and…
**V2 — Decision tree by situation** (place after the section “How much does each situation help you learn?”)
- File: `vark-learning-style-test-decision-much-each-situation-help.webp` · 1600×1000 WebP under 200 KB
- Teaches: Think about how you actually study best, not how you think you are supposed to learn.
- On-image text (about 25-40 words, shortened from the page; no new claims): Think about how you actually study best, not how you think you are supposed to… / School student Find study methods that actually work for exams and daily… / College student Match your learning style to lecture notes, projects, and…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree by situation for “How much does each situation help you learn?”: Think about how you actually…; School student Find study methods…; College…
- Title attribute: How much does each situation help you learn?
- Caption (and keep the same point in HTML text): Think about how you actually study best, not how you think you are supposed to learn.
**V3 — Skill map** (place after the section “Before you rely on your learning style”)
- File: `vark-learning-style-test-skill-before-rely-learning-style.webp` · 1600×1000 WebP under 200 KB
- Teaches: What does VARK stand for?
- On-image text (about 25-40 words, shortened from the page; no new claims): What does VARK stand for? / VARK describes four learning-preference channels: Visual (diagrams and images)… / Most people show a blend rather than one pure style.
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Skill map for “Before you rely on your learning style”: What does VARK stand for?; VARK describes four…; Most people show a blend rather…
- Title attribute: Before you rely on your learning style
- Caption (and keep the same point in HTML text): What does VARK stand for?
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/assessments/ai-career-readiness-test/

**H1:** AI career readiness test  
**Type:** assessment · **Search priority:** P3 (0 clicks, 10 impressions) · **Rendered images:** 7 (3 generic category, 1 hero, 1 context, 2 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/assessments-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `assessments-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-assessment.webp` is shared by 52 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-assessment.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 94% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-assessment-map.webp` has no title attribute and no caption.
7. Context visual reuse: `context-assessment-map.webp` appears on 49 pages.
8. SVG diagrams present (`session-flow.svg`, `skill-portfolio-chain.svg`): preserve them; add alt/title/caption if missing.
9. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 90% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 92% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/assessments-at-a-glance.webp` | 93% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-assessment.webp` | 94% | eager/high | A student taking an online career assessment on a… | NO | NO |
| `bofu/session-flow.svg` | 95% | lazy | Five-stage career guidance session flow from… | NO | NO |
| `bofu/skill-portfolio-chain.svg` | 96% | lazy | Skill portfolio chain from strengths to financial… | NO | NO |
| `bofu/context-assessment-map.webp` | 96% | lazy | An assessment signal map showing how results… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the shared assessment hero; add title attribute and caption. The page-specific value must come from the explanatory visuals below.
3. CREATE 3 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `ai-career-readiness-test-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: An AI career readiness test should help you judge whether your current skill stack is exposed…
- On-image text (about 25-40 words, shortened from the page; no new claims): Get the complete picture, not just one piece of it / When to use an AI career readiness test / What an AI career readiness test should actually help you judge / You may also want these next / Common questions before you start
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: AI career readiness test”: Get the complete picture, not…; When to use an AI career…; What an AI…
- Title attribute: At a glance: AI career readiness test
- Caption (and keep the same point in HTML text): An AI career readiness test should help you judge whether your current skill stack is exposed, under-leveraged, or ready for stronger…
**V2 — Chronological timeline** (place after the section “When to use an AI career readiness test”)
- File: `ai-career-readiness-test-chronological-use-career-readiness-test.webp` · 1600×1000 WebP under 200 KB
- Teaches: This matters when you can feel the market shifting but still do not know whether the answer is upskilling…
- On-image text (about 25-40 words, shortened from the page; no new claims): You feel AI pressure but do not know what to change first / You want skill signals tied to real career growth / You want a free starting point before bigger guidance
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “When to use an AI career readiness test”: You feel AI pressure but do not…; You want skill signals tied to…; You want a free…
- Title attribute: When to use an AI career readiness test
- Caption (and keep the same point in HTML text): This matters when you can feel the market shifting but still do not know whether the answer is upskilling, repositioning, or a bigger…
**V3 — Decision tree** (place after the section “What an AI career readiness test should actually help you judge”)
- File: `ai-career-readiness-test-decision-career-readiness-test-should.webp` · 1600×1000 WebP under 200 KB
- Teaches: The useful outcome is not fear.
- On-image text (about 25-40 words, shortened from the page; no new claims): Which parts of your current work are most exposed / What kind of skill direction improves resilience / What the next practical move should be
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “What an AI career readiness test should actually…”: Which parts of your current work…; What kind of skill direction…; What the next…
- Title attribute: What an AI career readiness test should actually help you judge
- Caption (and keep the same point in HTML text): The useful outcome is not fear.
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/assessments/aptitude-test-for-career-after-12th/

**H1:** Aptitude test for career after 12th  
**Type:** assessment · **Search priority:** P3 (0 clicks, 0 impressions) · **Rendered images:** 7 (3 generic category, 1 hero, 1 context, 2 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/assessments-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `assessments-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-assessment.webp` is shared by 52 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-assessment.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 94% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-assessment-map.webp` has no title attribute and no caption.
7. Context visual reuse: `context-assessment-map.webp` appears on 49 pages.
8. SVG diagrams present (`session-flow.svg`, `skill-portfolio-chain.svg`): preserve them; add alt/title/caption if missing.
9. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 90% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 92% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/assessments-at-a-glance.webp` | 93% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-assessment.webp` | 94% | eager/high | A student taking an online career assessment on a… | NO | NO |
| `bofu/session-flow.svg` | 95% | lazy | Five-stage career guidance session flow from… | NO | NO |
| `bofu/skill-portfolio-chain.svg` | 96% | lazy | Skill portfolio chain from strengths to financial… | NO | NO |
| `bofu/context-assessment-map.webp` | 96% | lazy | An assessment signal map showing how results… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the shared assessment hero; add title attribute and caption. The page-specific value must come from the explanatory visuals below.
3. CREATE 3 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `aptitude-test-for-career-after-12th-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Aptitude Test for Career After 12th should help you judge where your stronger natural patterns sit before…
- On-image text (about 25-40 words, shortened from the page; no new claims): Get the complete picture, not just one piece of it / When to use aptitude test for career after 12th / What aptitude test for career after 12th should actually help you… / You may also want these next / Common questions before you start
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Aptitude test for career after 12th”: Get the complete picture, not…; When to use aptitude test for……
- Title attribute: At a glance: Aptitude test for career after 12th
- Caption (and keep the same point in HTML text): Aptitude Test for Career After 12th should help you judge where your stronger natural patterns sit before more time and money get wasted.
**V2 — Chronological timeline** (place after the section “When to use aptitude test for career after 12th”)
- File: `aptitude-test-for-career-after-12th-chronological-use-aptitude-test-career.webp` · 1600×1000 WebP under 200 KB
- Teaches: This matters when the next study or work decision should be based on stronger fit signals, not only on what…
- On-image text (about 25-40 words, shortened from the page; no new claims): You want stronger evidence before choosing / You want the right aptitude page for your stage / You want a free first step before heavier support
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “When to use aptitude test for career after 12th”: You want stronger evidence before…; You want the right aptitude page…; You want a…
- Title attribute: When to use aptitude test for career after 12th
- Caption (and keep the same point in HTML text): This matters when the next study or work decision should be based on stronger fit signals, not only on what sounds attractive or familiar.
**V3 — Decision tree** (place after the section “What aptitude test for career after 12th should actually help you…”)
- File: `aptitude-test-for-career-after-12th-decision-aptitude-test-career-after.webp` · 1600×1000 WebP under 200 KB
- Teaches: The stronger outcome is not only a score.
- On-image text (about 25-40 words, shortened from the page; no new claims): Which strength patterns matter most / Which stage-specific aptitude page fits better / Whether aptitude is the whole issue
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “What aptitude test for career after 12th should…”: Which strength patterns matter…; Which stage-specific aptitude…; Whether aptitude is the…
- Title attribute: What aptitude test for career after 12th should actually help you…
- Caption (and keep the same point in HTML text): The stronger outcome is not only a score.
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/assessments/aptitude-test/

**H1:** Aptitude test  
**Type:** assessment · **Search priority:** P3 (0 clicks, 13 impressions) · **Rendered images:** 7 (3 generic category, 1 hero, 1 context, 2 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/assessments-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `assessments-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-assessment.webp` is shared by 52 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-assessment.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 95% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-assessment-map.webp` has no title attribute and no caption.
7. Context visual reuse: `context-assessment-map.webp` appears on 49 pages.
8. SVG diagrams present (`session-flow.svg`, `skill-portfolio-chain.svg`): preserve them; add alt/title/caption if missing.
9. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 91% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 92% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/assessments-at-a-glance.webp` | 93% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-assessment.webp` | 95% | eager/high | A student taking an online career assessment on a… | NO | NO |
| `bofu/session-flow.svg` | 95% | lazy | Five-stage career guidance session flow from… | NO | NO |
| `bofu/skill-portfolio-chain.svg` | 96% | lazy | Skill portfolio chain from strengths to financial… | NO | NO |
| `bofu/context-assessment-map.webp` | 97% | lazy | An assessment signal map showing how results… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the shared assessment hero; add title attribute and caption. The page-specific value must come from the explanatory visuals below.
3. CREATE 3 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `aptitude-test-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: An aptitude test is useful when the real question is not only what you like, but what kinds of skills or…
- On-image text (about 25-40 words, shortened from the page; no new claims): Get the complete picture, not just one piece of it / When an aptitude test becomes the right first step / What an aptitude test should actually help you understand / You may also want these next / Common questions before you start
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Aptitude test”: Get the complete picture, not…; When an aptitude test becomes the…; What an aptitude…
- Title attribute: At a glance: Aptitude test
- Caption (and keep the same point in HTML text): An aptitude test is useful when the real question is not only what you like, but what kinds of skills or problem patterns you handle more…
**V2 — Chronological timeline** (place after the section “When an aptitude test becomes the right first step”)
- File: `aptitude-test-chronological-aptitude-test-becomes-right.webp` · 1600×1000 WebP under 200 KB
- Teaches: Aptitude-first assessment helps most when you want stronger fit signals before choosing a course, degree, or…
- On-image text (about 25-40 words, shortened from the page; no new claims): You want stronger skill-fit clues before committing / You are comparing paths that need different strengths / You want a strong first filter before the updated career guidance
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “When an aptitude test becomes the right first step”: You want stronger skill-fit clues…; You are comparing paths that need…; You…
- Title attribute: When an aptitude test becomes the right first step
- Caption (and keep the same point in HTML text): Aptitude-first assessment helps most when you want stronger fit signals before choosing a course, degree, or training path.
**V3 — Decision tree** (place after the section “What an aptitude test should actually help you understand”)
- File: `aptitude-test-decision-aptitude-test-should-actually.webp` · 1600×1000 WebP under 200 KB
- Teaches: The stronger outcome is not a score for ego.
- On-image text (about 25-40 words, shortened from the page; no new claims): Where your stronger skill patterns are / Which course or training directions fit better / What may still need updated guidance after the test
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “What an aptitude test should actually help you…”: Where your stronger skill…; Which course or training…; What may still need updated…
- Title attribute: What an aptitude test should actually help you understand
- Caption (and keep the same point in HTML text): The stronger outcome is not a score for ego.
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/assessments/aptitude/

**H1:**   
**Type:** assessment · **Search priority:** P3 (0 clicks, 0 impressions) · **Rendered images:** 0 (0 generic category, 0 hero, 0 context, 0 SVG)
**Status: RED**

**Findings**
1. No images are rendered on this page.

**Current images**

**Required actions**
1. KEEP the shared assessment hero; add title attribute and caption. The page-specific value must come from the explanatory visuals below.
2. CREATE 1 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `aptitude-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Aptitude Test | Future Career School This page has moved to /services/assessments/aptitude-test/ .
- On-image text (about 25-40 words, shortened from the page; no new claims): Aptitude Test | Future Career School This page has moved to /services/assessments/aptitude-test/ .
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance:”: Aptitude Test | Future Career…
- Title attribute: At a glance:
- Caption (and keep the same point in HTML text): Aptitude Test | Future Career School This page has moved to /services/assessments/aptitude-test/ .
3. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
4. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/assessments/career-aptitude-test-for-adults/

**H1:** Career aptitude test for adults  
**Type:** assessment · **Search priority:** P3 (0 clicks, 9 impressions) · **Rendered images:** 7 (3 generic category, 1 hero, 1 context, 2 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/assessments-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `assessments-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-assessment.webp` is shared by 52 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-assessment.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 95% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-assessment-map.webp` has no title attribute and no caption.
7. Context visual reuse: `context-assessment-map.webp` appears on 49 pages.
8. SVG diagrams present (`session-flow.svg`, `skill-portfolio-chain.svg`): preserve them; add alt/title/caption if missing.
9. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 91% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 92% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/assessments-at-a-glance.webp` | 93% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-assessment.webp` | 95% | eager/high | A student taking an online career assessment on a… | NO | NO |
| `bofu/session-flow.svg` | 95% | lazy | Five-stage career guidance session flow from… | NO | NO |
| `bofu/skill-portfolio-chain.svg` | 96% | lazy | Skill portfolio chain from strengths to financial… | NO | NO |
| `bofu/context-assessment-map.webp` | 97% | lazy | An assessment signal map showing how results… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the shared assessment hero; add title attribute and caption. The page-specific value must come from the explanatory visuals below.
3. CREATE 3 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-aptitude-test-for-adults-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Career Aptitude Test for Adults should help you judge where your stronger natural patterns sit before more…
- On-image text (about 25-40 words, shortened from the page; no new claims): Get the complete picture, not just one piece of it / When to use career aptitude test for adults / What career aptitude test for adults should actually help you… / You may also want these next / Common questions before you start
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career aptitude test for adults”: Get the complete picture, not…; When to use career aptitude test……
- Title attribute: At a glance: Career aptitude test for adults
- Caption (and keep the same point in HTML text): Career Aptitude Test for Adults should help you judge where your stronger natural patterns sit before more time and money get wasted.
**V2 — Chronological timeline** (place after the section “When to use career aptitude test for adults”)
- File: `career-aptitude-test-for-adults-chronological-use-career-aptitude-test.webp` · 1600×1000 WebP under 200 KB
- Teaches: This matters when the next study or work decision should be based on stronger fit signals, not only on what…
- On-image text (about 25-40 words, shortened from the page; no new claims): You want stronger evidence before choosing / You want the right aptitude page for your stage / You want a free first step before heavier support
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “When to use career aptitude test for adults”: You want stronger evidence before…; You want the right aptitude page…; You want a…
- Title attribute: When to use career aptitude test for adults
- Caption (and keep the same point in HTML text): This matters when the next study or work decision should be based on stronger fit signals, not only on what sounds attractive or familiar.
**V3 — Decision tree** (place after the section “What career aptitude test for adults should actually help you…”)
- File: `career-aptitude-test-for-adults-decision-career-aptitude-test-adults.webp` · 1600×1000 WebP under 200 KB
- Teaches: The stronger outcome is not only a score.
- On-image text (about 25-40 words, shortened from the page; no new claims): Which strength patterns matter most / Which stage-specific aptitude page fits better / Whether aptitude is the whole issue
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “What career aptitude test for adults should…”: Which strength patterns matter…; Which stage-specific aptitude…; Whether aptitude is the…
- Title attribute: What career aptitude test for adults should actually help you…
- Caption (and keep the same point in HTML text): The stronger outcome is not only a score.
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/assessments/career-aptitude-test-for-class-10/

**H1:** Career aptitude test for class 10  
**Type:** assessment · **Search priority:** P3 (0 clicks, 4 impressions) · **Rendered images:** 7 (3 generic category, 1 hero, 1 context, 2 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/assessments-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `assessments-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-assessment.webp` is shared by 52 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-assessment.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 94% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-assessment-map.webp` has no title attribute and no caption.
7. Context visual reuse: `context-assessment-map.webp` appears on 49 pages.
8. SVG diagrams present (`session-flow.svg`, `skill-portfolio-chain.svg`): preserve them; add alt/title/caption if missing.
9. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 90% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 92% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/assessments-at-a-glance.webp` | 93% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-assessment.webp` | 94% | eager/high | A student taking an online career assessment on a… | NO | NO |
| `bofu/session-flow.svg` | 95% | lazy | Five-stage career guidance session flow from… | NO | NO |
| `bofu/skill-portfolio-chain.svg` | 96% | lazy | Skill portfolio chain from strengths to financial… | NO | NO |
| `bofu/context-assessment-map.webp` | 96% | lazy | An assessment signal map showing how results… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the shared assessment hero; add title attribute and caption. The page-specific value must come from the explanatory visuals below.
3. CREATE 3 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-aptitude-test-for-class-10-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Career Aptitude Test for Class 10 should help you judge where your stronger natural patterns sit before more…
- On-image text (about 25-40 words, shortened from the page; no new claims): Get the complete picture, not just one piece of it / When to use career aptitude test for class 10 / What career aptitude test for class 10 should actually help you… / You may also want these next / Common questions before you start
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career aptitude test for class 10”: Get the complete picture, not…; When to use career aptitude test……
- Title attribute: At a glance: Career aptitude test for class 10
- Caption (and keep the same point in HTML text): Career Aptitude Test for Class 10 should help you judge where your stronger natural patterns sit before more time and money get wasted.
**V2 — Chronological timeline** (place after the section “When to use career aptitude test for class 10”)
- File: `career-aptitude-test-for-class-10-chronological-use-career-aptitude-test.webp` · 1600×1000 WebP under 200 KB
- Teaches: This matters when the next study or work decision should be based on stronger fit signals, not only on what…
- On-image text (about 25-40 words, shortened from the page; no new claims): You want stronger evidence before choosing / You want the right aptitude page for your stage / You want a free first step before heavier support
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “When to use career aptitude test for class 10”: You want stronger evidence before…; You want the right aptitude page…; You want a…
- Title attribute: When to use career aptitude test for class 10
- Caption (and keep the same point in HTML text): This matters when the next study or work decision should be based on stronger fit signals, not only on what sounds attractive or familiar.
**V3 — Decision tree** (place after the section “What career aptitude test for class 10 should actually help you…”)
- File: `career-aptitude-test-for-class-10-decision-career-aptitude-test-class.webp` · 1600×1000 WebP under 200 KB
- Teaches: The stronger outcome is not only a score.
- On-image text (about 25-40 words, shortened from the page; no new claims): Which strength patterns matter most / Which stage-specific aptitude page fits better / Whether aptitude is the whole issue
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “What career aptitude test for class 10 should…”: Which strength patterns matter…; Which stage-specific aptitude…; Whether aptitude is the…
- Title attribute: What career aptitude test for class 10 should actually help you…
- Caption (and keep the same point in HTML text): The stronger outcome is not only a score.
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/assessments/career-aptitude-test-for-class-9/

**H1:** Career aptitude test for class 9  
**Type:** assessment · **Search priority:** P3 (0 clicks, 1 impressions) · **Rendered images:** 7 (3 generic category, 1 hero, 1 context, 2 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/assessments-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `assessments-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-assessment.webp` is shared by 52 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-assessment.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 94% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-assessment-map.webp` has no title attribute and no caption.
7. Context visual reuse: `context-assessment-map.webp` appears on 49 pages.
8. SVG diagrams present (`session-flow.svg`, `skill-portfolio-chain.svg`): preserve them; add alt/title/caption if missing.
9. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 90% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 91% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/assessments-at-a-glance.webp` | 93% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-assessment.webp` | 94% | eager/high | A student taking an online career assessment on a… | NO | NO |
| `bofu/session-flow.svg` | 95% | lazy | Five-stage career guidance session flow from… | NO | NO |
| `bofu/skill-portfolio-chain.svg` | 95% | lazy | Skill portfolio chain from strengths to financial… | NO | NO |
| `bofu/context-assessment-map.webp` | 96% | lazy | An assessment signal map showing how results… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the shared assessment hero; add title attribute and caption. The page-specific value must come from the explanatory visuals below.
3. CREATE 3 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-aptitude-test-for-class-9-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Career Aptitude Test for Class 9 should help you judge where your stronger natural patterns sit before more…
- On-image text (about 25-40 words, shortened from the page; no new claims): Get the complete picture, not just one piece of it / When to use career aptitude test for class 9 / What career aptitude test for class 9 should actually help you… / You may also want these next / Common questions before you start
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career aptitude test for class 9”: Get the complete picture, not…; When to use career aptitude test……
- Title attribute: At a glance: Career aptitude test for class 9
- Caption (and keep the same point in HTML text): Career Aptitude Test for Class 9 should help you judge where your stronger natural patterns sit before more time and money get wasted.
**V2 — Chronological timeline** (place after the section “When to use career aptitude test for class 9”)
- File: `career-aptitude-test-for-class-9-chronological-use-career-aptitude-test.webp` · 1600×1000 WebP under 200 KB
- Teaches: This matters when the next study or work decision should be based on stronger fit signals, not only on what…
- On-image text (about 25-40 words, shortened from the page; no new claims): You want stronger evidence before choosing / You want the right aptitude page for your stage / You want a free first step before heavier support
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “When to use career aptitude test for class 9”: You want stronger evidence before…; You want the right aptitude page…; You want a…
- Title attribute: When to use career aptitude test for class 9
- Caption (and keep the same point in HTML text): This matters when the next study or work decision should be based on stronger fit signals, not only on what sounds attractive or familiar.
**V3 — Decision tree** (place after the section “What career aptitude test for class 9 should actually help you…”)
- File: `career-aptitude-test-for-class-9-decision-career-aptitude-test-class.webp` · 1600×1000 WebP under 200 KB
- Teaches: The stronger outcome is not only a score.
- On-image text (about 25-40 words, shortened from the page; no new claims): Which strength patterns matter most / Which stage-specific aptitude page fits better / Whether aptitude is the whole issue
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “What career aptitude test for class 9 should…”: Which strength patterns matter…; Which stage-specific aptitude…; Whether aptitude is the…
- Title attribute: What career aptitude test for class 9 should actually help you…
- Caption (and keep the same point in HTML text): The stronger outcome is not only a score.
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/assessments/career-aptitude-test-for-college-students/

**H1:** Career aptitude test for college students  
**Type:** assessment · **Search priority:** P3 (0 clicks, 5 impressions) · **Rendered images:** 7 (3 generic category, 1 hero, 1 context, 2 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/assessments-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `assessments-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-assessment.webp` is shared by 52 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-assessment.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 95% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-assessment-map.webp` has no title attribute and no caption.
7. Context visual reuse: `context-assessment-map.webp` appears on 49 pages.
8. SVG diagrams present (`session-flow.svg`, `skill-portfolio-chain.svg`): preserve them; add alt/title/caption if missing.
9. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 91% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 92% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/assessments-at-a-glance.webp` | 94% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-assessment.webp` | 95% | eager/high | A student taking an online career assessment on a… | NO | NO |
| `bofu/session-flow.svg` | 96% | lazy | Five-stage career guidance session flow from… | NO | NO |
| `bofu/skill-portfolio-chain.svg` | 96% | lazy | Skill portfolio chain from strengths to financial… | NO | NO |
| `bofu/context-assessment-map.webp` | 97% | lazy | An assessment signal map showing how results… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the shared assessment hero; add title attribute and caption. The page-specific value must come from the explanatory visuals below.
3. CREATE 3 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-aptitude-test-for-college-students-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Career Aptitude Test for College Students should help you judge where your stronger natural patterns sit…
- On-image text (about 25-40 words, shortened from the page; no new claims): Get the complete picture, not just one piece of it / When to use career aptitude test for college students / What career aptitude test for college students should actually help… / You may also want these next / Common questions before you start
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career aptitude test for college…”: Get the complete picture, not…; When to use career aptitude test……
- Title attribute: At a glance: Career aptitude test for college students
- Caption (and keep the same point in HTML text): Career Aptitude Test for College Students should help you judge where your stronger natural patterns sit before more time and money get…
**V2 — Chronological timeline** (place after the section “When to use career aptitude test for college students”)
- File: `career-aptitude-test-for-college-students-chronological-use-career-aptitude-test.webp` · 1600×1000 WebP under 200 KB
- Teaches: This matters when the next study or work decision should be based on stronger fit signals, not only on what…
- On-image text (about 25-40 words, shortened from the page; no new claims): You want stronger evidence before choosing / You want the right aptitude page for your stage / You want a free first step before heavier support
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “When to use career aptitude test for college…”: You want stronger evidence before…; You want the right aptitude page…; You want a…
- Title attribute: When to use career aptitude test for college students
- Caption (and keep the same point in HTML text): This matters when the next study or work decision should be based on stronger fit signals, not only on what sounds attractive or familiar.
**V3 — Decision tree** (place after the section “What career aptitude test for college students should actually help…”)
- File: `career-aptitude-test-for-college-students-decision-career-aptitude-test-college.webp` · 1600×1000 WebP under 200 KB
- Teaches: The stronger outcome is not only a score.
- On-image text (about 25-40 words, shortened from the page; no new claims): Which strength patterns matter most / Which stage-specific aptitude page fits better / Whether aptitude is the whole issue
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “What career aptitude test for college students…”: Which strength patterns matter…; Which stage-specific aptitude…; Whether aptitude is the…
- Title attribute: What career aptitude test for college students should actually help…
- Caption (and keep the same point in HTML text): The stronger outcome is not only a score.
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/assessments/career-aptitude-test-for-kids/

**H1:** Career aptitude test for kids  
**Type:** assessment · **Search priority:** P3 (0 clicks, 16 impressions) · **Rendered images:** 7 (3 generic category, 1 hero, 1 context, 2 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/assessments-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `assessments-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-assessment.webp` is shared by 52 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-assessment.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 94% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-assessment-map.webp` has no title attribute and no caption.
7. Context visual reuse: `context-assessment-map.webp` appears on 49 pages.
8. SVG diagrams present (`session-flow.svg`, `skill-portfolio-chain.svg`): preserve them; add alt/title/caption if missing.
9. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 90% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 91% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/assessments-at-a-glance.webp` | 93% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-assessment.webp` | 94% | eager/high | A student taking an online career assessment on a… | NO | NO |
| `bofu/session-flow.svg` | 95% | lazy | Five-stage career guidance session flow from… | NO | NO |
| `bofu/skill-portfolio-chain.svg` | 96% | lazy | Skill portfolio chain from strengths to financial… | NO | NO |
| `bofu/context-assessment-map.webp` | 96% | lazy | An assessment signal map showing how results… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the shared assessment hero; add title attribute and caption. The page-specific value must come from the explanatory visuals below.
3. CREATE 3 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-aptitude-test-for-kids-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Career Aptitude Test for Kids should help you judge where your stronger natural patterns sit before more time…
- On-image text (about 25-40 words, shortened from the page; no new claims): Get the complete picture, not just one piece of it / When to use career aptitude test for kids / What career aptitude test for kids should actually help you understand / You may also want these next / Common questions before you start
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career aptitude test for kids”: Get the complete picture, not…; When to use career aptitude test……
- Title attribute: At a glance: Career aptitude test for kids
- Caption (and keep the same point in HTML text): Career Aptitude Test for Kids should help you judge where your stronger natural patterns sit before more time and money get wasted.
**V2 — Chronological timeline** (place after the section “When to use career aptitude test for kids”)
- File: `career-aptitude-test-for-kids-chronological-use-career-aptitude-test.webp` · 1600×1000 WebP under 200 KB
- Teaches: This matters when the next study or work decision should be based on stronger fit signals, not only on what…
- On-image text (about 25-40 words, shortened from the page; no new claims): You want stronger evidence before choosing / You want the right aptitude page for your stage / You want a free first step before heavier support
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “When to use career aptitude test for kids”: You want stronger evidence before…; You want the right aptitude page…; You want a free…
- Title attribute: When to use career aptitude test for kids
- Caption (and keep the same point in HTML text): This matters when the next study or work decision should be based on stronger fit signals, not only on what sounds attractive or familiar.
**V3 — Decision tree** (place after the section “What career aptitude test for kids should actually help you understand”)
- File: `career-aptitude-test-for-kids-decision-career-aptitude-test-kids.webp` · 1600×1000 WebP under 200 KB
- Teaches: The stronger outcome is not only a score.
- On-image text (about 25-40 words, shortened from the page; no new claims): Which strength patterns matter most / Which stage-specific aptitude page fits better / Whether aptitude is the whole issue
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “What career aptitude test for kids should…”: Which strength patterns matter…; Which stage-specific aptitude…; Whether aptitude is the whole…
- Title attribute: What career aptitude test for kids should actually help you understand
- Caption (and keep the same point in HTML text): The stronger outcome is not only a score.
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/assessments/career-aptitude-test-for-students/

**H1:** Career aptitude test for students  
**Type:** assessment · **Search priority:** P3 (0 clicks, 0 impressions) · **Rendered images:** 7 (3 generic category, 1 hero, 1 context, 2 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/assessments-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `assessments-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-assessment.webp` is shared by 52 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-assessment.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 95% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-assessment-map.webp` has no title attribute and no caption.
7. Context visual reuse: `context-assessment-map.webp` appears on 49 pages.
8. SVG diagrams present (`session-flow.svg`, `skill-portfolio-chain.svg`): preserve them; add alt/title/caption if missing.
9. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 91% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 92% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/assessments-at-a-glance.webp` | 93% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-assessment.webp` | 95% | eager/high | A student taking an online career assessment on a… | NO | NO |
| `bofu/session-flow.svg` | 95% | lazy | Five-stage career guidance session flow from… | NO | NO |
| `bofu/skill-portfolio-chain.svg` | 96% | lazy | Skill portfolio chain from strengths to financial… | NO | NO |
| `bofu/context-assessment-map.webp` | 97% | lazy | An assessment signal map showing how results… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the shared assessment hero; add title attribute and caption. The page-specific value must come from the explanatory visuals below.
3. CREATE 3 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-aptitude-test-for-students-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: A career aptitude test for students should help before stream, course, and degree choices become expensive…
- On-image text (about 25-40 words, shortened from the page; no new claims): Get the complete picture, not just one piece of it / When to use a student career aptitude test / What a student career aptitude test should actually help with / You may also want these next / Common questions before you start
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career aptitude test for students”: Get the complete picture, not…; When to use a student career……
- Title attribute: At a glance: Career aptitude test for students
- Caption (and keep the same point in HTML text): A career aptitude test for students should help before stream, course, and degree choices become expensive wrong turns.
**V2 — Chronological timeline** (place after the section “When to use a student career aptitude test”)
- File: `career-aptitude-test-for-students-chronological-use-student-career-aptitude.webp` · 1600×1000 WebP under 200 KB
- Teaches: This matters when students need stronger fit signals before stream, course, or degree decisions harden.
- On-image text (about 25-40 words, shortened from the page; no new claims): You want more than marks-based decisions / You want a stage-relevant aptitude path / You want a strong first filter before the updated career guidance
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “When to use a student career aptitude test”: You want more than marks-based…; You want a stage-relevant…; You want a strong first…
- Title attribute: When to use a student career aptitude test
- Caption (and keep the same point in HTML text): This matters when students need stronger fit signals before stream, course, or degree decisions harden.
**V3 — Decision tree** (place after the section “What a student career aptitude test should actually help with”)
- File: `career-aptitude-test-for-students-decision-student-career-aptitude-test.webp` · 1600×1000 WebP under 200 KB
- Teaches: The stronger outcome is not only a score.
- On-image text (about 25-40 words, shortened from the page; no new claims): Which student aptitude page fits your stage / Which paths deserve more serious attention / How to make the next discussion easier
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “What a student career aptitude test should…”: Which student aptitude page fits…; Which paths deserve more serious…; How to make the next…
- Title attribute: What a student career aptitude test should actually help with
- Caption (and keep the same point in HTML text): The stronger outcome is not only a score.
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/assessments/career-aptitude-test-online/

**H1:**   
**Type:** assessment · **Search priority:** P3 (0 clicks, 0 impressions) · **Rendered images:** 0 (0 generic category, 0 hero, 0 context, 0 SVG)
**Status: RED**

**Findings**
1. No images are rendered on this page.

**Current images**

**Required actions**
1. KEEP the shared assessment hero; add title attribute and caption. The page-specific value must come from the explanatory visuals below.
2. CREATE 1 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-aptitude-test-online-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Online Career Aptitude Test | Future Career School This page has moved to…
- On-image text (about 25-40 words, shortened from the page; no new claims): Online Career Aptitude Test | Future Career School This page has moved to /services/assessments/aptitude-test/ .
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance:”: Online Career Aptitude Test |…
- Title attribute: At a glance:
- Caption (and keep the same point in HTML text): Online Career Aptitude Test | Future Career School This page has moved to /services/assessments/aptitude-test/ .
3. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
4. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/assessments/career-change-test/

**H1:** Career change test  
**Type:** assessment · **Search priority:** P3 (0 clicks, 4 impressions) · **Rendered images:** 7 (3 generic category, 1 hero, 1 context, 2 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/assessments-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `assessments-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-assessment.webp` is shared by 52 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-assessment.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 95% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-assessment-map.webp` has no title attribute and no caption.
7. Context visual reuse: `context-assessment-map.webp` appears on 49 pages.
8. SVG diagrams present (`session-flow.svg`, `skill-portfolio-chain.svg`): preserve them; add alt/title/caption if missing.
9. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 91% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 92% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/assessments-at-a-glance.webp` | 93% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-assessment.webp` | 95% | eager/high | A student taking an online career assessment on a… | NO | NO |
| `bofu/session-flow.svg` | 95% | lazy | Five-stage career guidance session flow from… | NO | NO |
| `bofu/skill-portfolio-chain.svg` | 96% | lazy | Skill portfolio chain from strengths to financial… | NO | NO |
| `bofu/context-assessment-map.webp` | 97% | lazy | An assessment signal map showing how results… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the shared assessment hero; add title attribute and caption. The page-specific value must come from the explanatory visuals below.
3. CREATE 3 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-change-test-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Career Change Test should help you choose the right free assessment first, not leave you with more guesswork.
- On-image text (about 25-40 words, shortened from the page; no new claims): Get the complete picture, not just one piece of it / When to use career change test / What career change test should actually help you do / You may also want these next / Common questions before you start
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career change test”: Get the complete picture, not…; When to use career change test; What career…
- Title attribute: At a glance: Career change test
- Caption (and keep the same point in HTML text): Career Change Test should help you choose the right free assessment first, not leave you with more guesswork.
**V2 — Chronological timeline** (place after the section “When to use career change test”)
- File: `career-change-test-chronological-use-career-change-test.webp` · 1600×1000 WebP under 200 KB
- Teaches: This matters when you still need help choosing the right free assessment before taking one specific test.
- On-image text (about 25-40 words, shortened from the page; no new claims): You want a clearer first filter / You want more than a label / You want the right free test for your stage
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “When to use career change test”: You want a clearer first filter; You want more than a label; You want the right free test for…
- Title attribute: When to use career change test
- Caption (and keep the same point in HTML text): This matters when you still need help choosing the right free assessment before taking one specific test.
**V3 — Decision tree** (place after the section “What career change test should actually help you do”)
- File: `career-change-test-decision-career-change-test-should.webp` · 1600×1000 WebP under 200 KB
- Teaches: The stronger outcome is not only a label.
- On-image text (about 25-40 words, shortened from the page; no new claims): Choose the right assessment first / Reduce wasted clicks and wrong turns / Know whether updated career guidance is still needed
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “What career change test should actually help you…”: Choose the right assessment first; Reduce wasted clicks and wrong…; Know whether updated…
- Title attribute: What career change test should actually help you do
- Caption (and keep the same point in HTML text): The stronger outcome is not only a label.
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/assessments/career-choosing-test-after-10th/

**H1:** Career choosing test after 10th  
**Type:** assessment · **Search priority:** P3 (0 clicks, 1 impressions) · **Rendered images:** 7 (3 generic category, 1 hero, 1 context, 2 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/assessments-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `assessments-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-assessment.webp` is shared by 52 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-assessment.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 94% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-assessment-map.webp` has no title attribute and no caption.
7. Context visual reuse: `context-assessment-map.webp` appears on 49 pages.
8. SVG diagrams present (`session-flow.svg`, `skill-portfolio-chain.svg`): preserve them; add alt/title/caption if missing.
9. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 90% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 91% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/assessments-at-a-glance.webp` | 93% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-assessment.webp` | 94% | eager/high | A student taking an online career assessment on a… | NO | NO |
| `bofu/session-flow.svg` | 95% | lazy | Five-stage career guidance session flow from… | NO | NO |
| `bofu/skill-portfolio-chain.svg` | 95% | lazy | Skill portfolio chain from strengths to financial… | NO | NO |
| `bofu/context-assessment-map.webp` | 96% | lazy | An assessment signal map showing how results… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the shared assessment hero; add title attribute and caption. The page-specific value must come from the explanatory visuals below.
3. CREATE 3 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-choosing-test-after-10th-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Career Choosing Test After 10th should help before stream, course, and degree decisions become expensive…
- On-image text (about 25-40 words, shortened from the page; no new claims): Get the complete picture, not just one piece of it / When to use career choosing test after 10th / What career choosing test after 10th should actually help with / You may also want these next / Common questions before you start
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career choosing test after 10th”: Get the complete picture, not…; When to use career choosing test……
- Title attribute: At a glance: Career choosing test after 10th
- Caption (and keep the same point in HTML text): Career Choosing Test After 10th should help before stream, course, and degree decisions become expensive wrong turns.
**V2 — Chronological timeline** (place after the section “When to use career choosing test after 10th”)
- File: `career-choosing-test-after-10th-chronological-use-career-choosing-test.webp` · 1600×1000 WebP under 200 KB
- Teaches: This matters when students need a faster first layer before stream selection, after-12th pressure, or bigger…
- On-image text (about 25-40 words, shortened from the page; no new claims): You want a student-safe first layer / You want the stage-relevant test / You want clearer parent-student discussion
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “When to use career choosing test after 10th”: You want a student-safe first…; You want the stage-relevant test; You want clearer…
- Title attribute: When to use career choosing test after 10th
- Caption (and keep the same point in HTML text): This matters when students need a faster first layer before stream selection, after-12th pressure, or bigger student decisions start…
**V3 — Decision tree** (place after the section “What career choosing test after 10th should actually help with”)
- File: `career-choosing-test-after-10th-decision-career-choosing-test-after.webp` · 1600×1000 WebP under 200 KB
- Teaches: The stronger outcome is not only student self-description.
- On-image text (about 25-40 words, shortened from the page; no new claims): Choose the right student test first / Reduce wrong turns early / Make the next discussion easier
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “What career choosing test after 10th should…”: Choose the right student test…; Reduce wrong turns early; Make the next discussion easier
- Title attribute: What career choosing test after 10th should actually help with
- Caption (and keep the same point in HTML text): The stronger outcome is not only student self-description.
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/assessments/career-counselling-test-after-10th/

**H1:** Career counselling test after 10th  
**Type:** assessment · **Search priority:** P3 (0 clicks, 0 impressions) · **Rendered images:** 7 (3 generic category, 1 hero, 1 context, 2 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/assessments-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `assessments-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-assessment.webp` is shared by 52 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-assessment.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 94% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-assessment-map.webp` has no title attribute and no caption.
7. Context visual reuse: `context-assessment-map.webp` appears on 49 pages.
8. SVG diagrams present (`session-flow.svg`, `skill-portfolio-chain.svg`): preserve them; add alt/title/caption if missing.
9. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 90% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 91% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/assessments-at-a-glance.webp` | 93% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-assessment.webp` | 94% | eager/high | A student taking an online career assessment on a… | NO | NO |
| `bofu/session-flow.svg` | 95% | lazy | Five-stage career guidance session flow from… | NO | NO |
| `bofu/skill-portfolio-chain.svg` | 95% | lazy | Skill portfolio chain from strengths to financial… | NO | NO |
| `bofu/context-assessment-map.webp` | 96% | lazy | An assessment signal map showing how results… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the shared assessment hero; add title attribute and caption. The page-specific value must come from the explanatory visuals below.
3. CREATE 3 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-test-after-10th-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Career Counselling Test After 10th should make updated, skill-first career guidance stronger, not replace it…
- On-image text (about 25-40 words, shortened from the page; no new claims): Get the complete picture, not just one piece of it / When to use career counselling test after 10th / What career counselling test after 10th should actually help you do / You may also want these next / Common questions before you start
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career counselling test after 10th”: Get the complete picture, not…; When to use career counselling……
- Title attribute: At a glance: Career counselling test after 10th
- Caption (and keep the same point in HTML text): Career Counselling Test After 10th should make updated, skill-first career guidance stronger, not replace it with a decorative report.
**V2 — Chronological timeline** (place after the section “When to use career counselling test after 10th”)
- File: `career-counselling-test-after-10th-chronological-use-career-counselling-test.webp` · 1600×1000 WebP under 200 KB
- Teaches: This matters when you want the testing layer to make the updated career guidance stronger instead of becoming…
- On-image text (about 25-40 words, shortened from the page; no new claims): You want better input before guidance / You want more than one narrow label / You want the right page for your stage
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “When to use career counselling test after 10th”: You want better input before…; You want more than one narrow…; You want the right…
- Title attribute: When to use career counselling test after 10th
- Caption (and keep the same point in HTML text): This matters when you want the testing layer to make the updated career guidance stronger instead of becoming a dead-end report.
**V3 — Decision tree** (place after the section “What career counselling test after 10th should actually help you do”)
- File: `career-counselling-test-after-10th-decision-career-counselling-test-after.webp` · 1600×1000 WebP under 200 KB
- Teaches: The stronger outcome is not only a report.
- On-image text (about 25-40 words, shortened from the page; no new claims): Give the next guidance step better input / Choose the right assessment route / Reduce guesswork before paying for more
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “What career counselling test after 10th should…”: Give the next guidance step…; Choose the right assessment route; Reduce guesswork before…
- Title attribute: What career counselling test after 10th should actually help you do
- Caption (and keep the same point in HTML text): The stronger outcome is not only a report.
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/assessments/career-counselling-test-for-10th-std-students/

**H1:** Career counselling test for 10th std students  
**Type:** assessment · **Search priority:** P3 (0 clicks, 0 impressions) · **Rendered images:** 7 (3 generic category, 1 hero, 1 context, 2 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/assessments-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `assessments-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-assessment.webp` is shared by 52 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-assessment.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 94% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-assessment-map.webp` has no title attribute and no caption.
7. Context visual reuse: `context-assessment-map.webp` appears on 49 pages.
8. SVG diagrams present (`session-flow.svg`, `skill-portfolio-chain.svg`): preserve them; add alt/title/caption if missing.
9. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 90% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 91% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/assessments-at-a-glance.webp` | 93% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-assessment.webp` | 94% | eager/high | A student taking an online career assessment on a… | NO | NO |
| `bofu/session-flow.svg` | 95% | lazy | Five-stage career guidance session flow from… | NO | NO |
| `bofu/skill-portfolio-chain.svg` | 96% | lazy | Skill portfolio chain from strengths to financial… | NO | NO |
| `bofu/context-assessment-map.webp` | 96% | lazy | An assessment signal map showing how results… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the shared assessment hero; add title attribute and caption. The page-specific value must come from the explanatory visuals below.
3. CREATE 3 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-test-for-10th-std-students-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Career Counselling Test for 10th Std Students should make updated, skill-first career guidance stronger, not…
- On-image text (about 25-40 words, shortened from the page; no new claims): Get the complete picture, not just one piece of it / When to use career counselling test for 10th std students / What career counselling test for 10th std students should actually… / You may also want these next / Common questions before you start
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career counselling test for 10th std…”: Get the complete picture, not…; When to use career…
- Title attribute: At a glance: Career counselling test for 10th std students
- Caption (and keep the same point in HTML text): Career Counselling Test for 10th Std Students should make updated, skill-first career guidance stronger, not replace it with a decorative…
**V2 — Chronological timeline** (place after the section “When to use career counselling test for 10th std students”)
- File: `career-counselling-test-for-10th-std-students-chronological-use-career-counselling-test.webp` · 1600×1000 WebP under 200 KB
- Teaches: This matters when you want the testing layer to make the updated career guidance stronger instead of becoming…
- On-image text (about 25-40 words, shortened from the page; no new claims): You want better input before guidance / You want more than one narrow label / You want the right page for your stage
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “When to use career counselling test for 10th std…”: You want better input before…; You want more than one narrow…; You want the…
- Title attribute: When to use career counselling test for 10th std students
- Caption (and keep the same point in HTML text): This matters when you want the testing layer to make the updated career guidance stronger instead of becoming a dead-end report.
**V3 — Decision tree** (place after the section “What career counselling test for 10th std students should actually…”)
- File: `career-counselling-test-for-10th-std-students-decision-career-counselling-test-10th.webp` · 1600×1000 WebP under 200 KB
- Teaches: The stronger outcome is not only a report.
- On-image text (about 25-40 words, shortened from the page; no new claims): Give the next guidance step better input / Choose the right assessment route / Reduce guesswork before paying for more
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “What career counselling test for 10th std…”: Give the next guidance step…; Choose the right assessment route; Reduce guesswork before paying…
- Title attribute: What career counselling test for 10th std students should actually…
- Caption (and keep the same point in HTML text): The stronger outcome is not only a report.
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/assessments/career-guidance-test-after-10th/

**H1:** Career guidance test after 10th  
**Type:** assessment · **Search priority:** P3 (0 clicks, 0 impressions) · **Rendered images:** 7 (3 generic category, 1 hero, 1 context, 2 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/assessments-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `assessments-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-assessment.webp` is shared by 52 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-assessment.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 94% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-assessment-map.webp` has no title attribute and no caption.
7. Context visual reuse: `context-assessment-map.webp` appears on 49 pages.
8. SVG diagrams present (`session-flow.svg`, `skill-portfolio-chain.svg`): preserve them; add alt/title/caption if missing.
9. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 90% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 91% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/assessments-at-a-glance.webp` | 93% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-assessment.webp` | 94% | eager/high | A student taking an online career assessment on a… | NO | NO |
| `bofu/session-flow.svg` | 95% | lazy | Five-stage career guidance session flow from… | NO | NO |
| `bofu/skill-portfolio-chain.svg` | 96% | lazy | Skill portfolio chain from strengths to financial… | NO | NO |
| `bofu/context-assessment-map.webp` | 96% | lazy | An assessment signal map showing how results… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the shared assessment hero; add title attribute and caption. The page-specific value must come from the explanatory visuals below.
3. CREATE 3 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-guidance-test-after-10th-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Career Guidance Test After 10th should make updated, skill-first career guidance stronger, not replace it…
- On-image text (about 25-40 words, shortened from the page; no new claims): Get the complete picture, not just one piece of it / When to use career guidance test after 10th / What career guidance test after 10th should actually help you do / You may also want these next / Common questions before you start
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career guidance test after 10th”: Get the complete picture, not…; When to use career guidance test……
- Title attribute: At a glance: Career guidance test after 10th
- Caption (and keep the same point in HTML text): Career Guidance Test After 10th should make updated, skill-first career guidance stronger, not replace it with a decorative report.
**V2 — Chronological timeline** (place after the section “When to use career guidance test after 10th”)
- File: `career-guidance-test-after-10th-chronological-use-career-guidance-test.webp` · 1600×1000 WebP under 200 KB
- Teaches: This matters when you want the testing layer to make the updated career guidance stronger instead of becoming…
- On-image text (about 25-40 words, shortened from the page; no new claims): You want better input before guidance / You want more than one narrow label / You want the right page for your stage
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “When to use career guidance test after 10th”: You want better input before…; You want more than one narrow…; You want the right…
- Title attribute: When to use career guidance test after 10th
- Caption (and keep the same point in HTML text): This matters when you want the testing layer to make the updated career guidance stronger instead of becoming a dead-end report.
**V3 — Decision tree** (place after the section “What career guidance test after 10th should actually help you do”)
- File: `career-guidance-test-after-10th-decision-career-guidance-test-after.webp` · 1600×1000 WebP under 200 KB
- Teaches: The stronger outcome is not only a report.
- On-image text (about 25-40 words, shortened from the page; no new claims): Give the next guidance step better input / Choose the right assessment route / Reduce guesswork before paying for more
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “What career guidance test after 10th should…”: Give the next guidance step…; Choose the right assessment route; Reduce guesswork before…
- Title attribute: What career guidance test after 10th should actually help you do
- Caption (and keep the same point in HTML text): The stronger outcome is not only a report.
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/assessments/career-interest-test/

**H1:** Career interest test  
**Type:** assessment · **Search priority:** P3 (0 clicks, 0 impressions) · **Rendered images:** 7 (3 generic category, 1 hero, 1 context, 2 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/assessments-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `assessments-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-assessment.webp` is shared by 52 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-assessment.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 95% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-assessment-map.webp` has no title attribute and no caption.
7. Context visual reuse: `context-assessment-map.webp` appears on 49 pages.
8. SVG diagrams present (`session-flow.svg`, `skill-portfolio-chain.svg`): preserve them; add alt/title/caption if missing.
9. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 91% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 92% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/assessments-at-a-glance.webp` | 94% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-assessment.webp` | 95% | eager/high | A student taking an online career assessment on a… | NO | NO |
| `bofu/session-flow.svg` | 96% | lazy | Five-stage career guidance session flow from… | NO | NO |
| `bofu/skill-portfolio-chain.svg` | 96% | lazy | Skill portfolio chain from strengths to financial… | NO | NO |
| `bofu/context-assessment-map.webp` | 97% | lazy | An assessment signal map showing how results… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the shared assessment hero; add title attribute and caption. The page-specific value must come from the explanatory visuals below.
3. CREATE 3 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-interest-test-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: A career interest test should help you understand what kind of work naturally pulls you in before stream…
- On-image text (about 25-40 words, shortened from the page; no new claims): Get the complete picture, not just one piece of it / When to use a career interest test / What a career interest test should actually show / You may also want these next / Common questions before you start
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career interest test”: Get the complete picture, not…; When to use a career interest test; What a…
- Title attribute: At a glance: Career interest test
- Caption (and keep the same point in HTML text): A career interest test should help you understand what kind of work naturally pulls you in before stream, course, or role choices become…
**V2 — Chronological timeline** (place after the section “When to use a career interest test”)
- File: `career-interest-test-chronological-use-career-interest-test.webp` · 1600×1000 WebP under 200 KB
- Teaches: Interest-based tests matter when the biggest problem is not marks alone but figuring out what kind of work…
- On-image text (about 25-40 words, shortened from the page; no new claims): You do not want to choose only by pressure or popularity / You want early fit clues before stream choices harden / You need something simpler than a full counselling process
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “When to use a career interest test”: You do not want to choose only by…; You want early fit clues before…; You need something…
- Title attribute: When to use a career interest test
- Caption (and keep the same point in HTML text): Interest-based tests matter when the biggest problem is not marks alone but figuring out what kind of work and learning direction feels…
**V3 — Decision tree** (place after the section “What a career interest test should actually show”)
- File: `career-interest-test-decision-career-interest-test-should.webp` · 1600×1000 WebP under 200 KB
- Teaches: The stronger outcome is a clearer sense of the directions that energize you more naturally, not only a fun…
- On-image text (about 25-40 words, shortened from the page; no new claims): What kinds of tasks feel more natural / Which early study directions deserve more exploration / Where to test interest with real action next
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “What a career interest test should actually show”: What kinds of tasks feel more…; Which early study directions…; Where to test interest…
- Title attribute: What a career interest test should actually show
- Caption (and keep the same point in HTML text): The stronger outcome is a clearer sense of the directions that energize you more naturally, not only a fun label to read once and forget.
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/assessments/career-role-test/

**H1:** Career role test  
**Type:** assessment · **Search priority:** P3 (0 clicks, 0 impressions) · **Rendered images:** 7 (3 generic category, 1 hero, 1 context, 2 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/assessments-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `assessments-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-assessment.webp` is shared by 52 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-assessment.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 95% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-assessment-map.webp` has no title attribute and no caption.
7. Context visual reuse: `context-assessment-map.webp` appears on 49 pages.
8. SVG diagrams present (`session-flow.svg`, `skill-portfolio-chain.svg`): preserve them; add alt/title/caption if missing.
9. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 91% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 92% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/assessments-at-a-glance.webp` | 94% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-assessment.webp` | 95% | eager/high | A student taking an online career assessment on a… | NO | NO |
| `bofu/session-flow.svg` | 96% | lazy | Five-stage career guidance session flow from… | NO | NO |
| `bofu/skill-portfolio-chain.svg` | 96% | lazy | Skill portfolio chain from strengths to financial… | NO | NO |
| `bofu/context-assessment-map.webp` | 97% | lazy | An assessment signal map showing how results… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the shared assessment hero; add title attribute and caption. The page-specific value must come from the explanatory visuals below.
3. CREATE 3 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-role-test-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Career Role Test should help when the issue is no longer only what interests you.
- On-image text (about 25-40 words, shortened from the page; no new claims): Get the complete picture, not just one piece of it / When to use career role test / What career role test should actually help you understand / You may also want these next / Common questions before you start
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career role test”: Get the complete picture, not…; When to use career role test; What career role test…
- Title attribute: At a glance: Career role test
- Caption (and keep the same point in HTML text): Career Role Test should help when the issue is no longer only what interests you.
**V2 — Chronological timeline** (place after the section “When to use career role test”)
- File: `career-role-test-chronological-use-career-role-test.webp` · 1600×1000 WebP under 200 KB
- Teaches: This matters when employability, readiness, leverage, or stronger skill direction is part of the real problem.
- On-image text (about 25-40 words, shortened from the page; no new claims): You want more than broad interest clarity / You need a practical reality check / You want the right stage-based skill page
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “When to use career role test”: You want more than broad interest…; You need a practical reality check; You want the right…
- Title attribute: When to use career role test
- Caption (and keep the same point in HTML text): This matters when employability, readiness, leverage, or stronger skill direction is part of the real problem.
**V3 — Decision tree** (place after the section “What career role test should actually help you understand”)
- File: `career-role-test-decision-career-role-test-should.webp` · 1600×1000 WebP under 200 KB
- Teaches: The stronger outcome is not only measuring ability.
- On-image text (about 25-40 words, shortened from the page; no new claims): Whether the issue is readiness or positioning / Which skill move deserves attention first / Which assessment fits your stage better
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “What career role test should actually help you…”: Whether the issue is readiness or…; Which skill move deserves…; Which assessment fits your…
- Title attribute: What career role test should actually help you understand
- Caption (and keep the same point in HTML text): The stronger outcome is not only measuring ability.
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/assessments/career-test-after-graduation/

**H1:** Career test after graduation  
**Type:** assessment · **Search priority:** P3 (0 clicks, 0 impressions) · **Rendered images:** 7 (3 generic category, 1 hero, 1 context, 2 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/assessments-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `assessments-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-assessment.webp` is shared by 52 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-assessment.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 94% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-assessment-map.webp` has no title attribute and no caption.
7. Context visual reuse: `context-assessment-map.webp` appears on 49 pages.
8. SVG diagrams present (`session-flow.svg`, `skill-portfolio-chain.svg`): preserve them; add alt/title/caption if missing.
9. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 90% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 92% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/assessments-at-a-glance.webp` | 93% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-assessment.webp` | 94% | eager/high | A student taking an online career assessment on a… | NO | NO |
| `bofu/session-flow.svg` | 95% | lazy | Five-stage career guidance session flow from… | NO | NO |
| `bofu/skill-portfolio-chain.svg` | 96% | lazy | Skill portfolio chain from strengths to financial… | NO | NO |
| `bofu/context-assessment-map.webp` | 96% | lazy | An assessment signal map showing how results… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the shared assessment hero; add title attribute and caption. The page-specific value must come from the explanatory visuals below.
3. CREATE 3 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-test-after-graduation-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Career Test After Graduation should help you choose the right free assessment first, not leave you with more…
- On-image text (about 25-40 words, shortened from the page; no new claims): Get the complete picture, not just one piece of it / When to use career test after graduation / What career test after graduation should actually help you do / You may also want these next / Common questions before you start
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career test after graduation”: Get the complete picture, not…; When to use career test after…; What…
- Title attribute: At a glance: Career test after graduation
- Caption (and keep the same point in HTML text): Career Test After Graduation should help you choose the right free assessment first, not leave you with more guesswork.
**V2 — Chronological timeline** (place after the section “When to use career test after graduation”)
- File: `career-test-after-graduation-chronological-use-career-test-after.webp` · 1600×1000 WebP under 200 KB
- Teaches: This matters when you still need help choosing the right free assessment before taking one specific test.
- On-image text (about 25-40 words, shortened from the page; no new claims): You want a clearer first filter / You want more than a label / You want the right free test for your stage
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “When to use career test after graduation”: You want a clearer first filter; You want more than a label; You want the right free…
- Title attribute: When to use career test after graduation
- Caption (and keep the same point in HTML text): This matters when you still need help choosing the right free assessment before taking one specific test.
**V3 — Decision tree** (place after the section “What career test after graduation should actually help you do”)
- File: `career-test-after-graduation-decision-career-test-after-graduation.webp` · 1600×1000 WebP under 200 KB
- Teaches: The stronger outcome is not only a label.
- On-image text (about 25-40 words, shortened from the page; no new claims): Choose the right assessment first / Reduce wasted clicks and wrong turns / Know whether updated career guidance is still needed
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “What career test after graduation should actually…”: Choose the right assessment first; Reduce wasted clicks and wrong…; Know whether…
- Title attribute: What career test after graduation should actually help you do
- Caption (and keep the same point in HTML text): The stronger outcome is not only a label.
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/assessments/career-test-online/

**H1:**   
**Type:** assessment · **Search priority:** P3 (0 clicks, 0 impressions) · **Rendered images:** 0 (0 generic category, 0 hero, 0 context, 0 SVG)
**Status: RED**

**Findings**
1. No images are rendered on this page.

**Current images**

**Required actions**
1. KEEP the shared assessment hero; add title attribute and caption. The page-specific value must come from the explanatory visuals below.
2. CREATE 1 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-test-online-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Online Career Test | Future Career School This page has moved to /services/assessments/career-test/ .
- On-image text (about 25-40 words, shortened from the page; no new claims): Online Career Test | Future Career School This page has moved to /services/assessments/career-test/ .
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance:”: Online Career Test | Future…
- Title attribute: At a glance:
- Caption (and keep the same point in HTML text): Online Career Test | Future Career School This page has moved to /services/assessments/career-test/ .
3. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
4. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/assessments/career-test/

**H1:** Career test  
**Type:** assessment · **Search priority:** P3 (0 clicks, 0 impressions) · **Rendered images:** 7 (3 generic category, 1 hero, 1 context, 2 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/assessments-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `assessments-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-assessment.webp` is shared by 52 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-assessment.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 95% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-assessment-map.webp` has no title attribute and no caption.
7. Context visual reuse: `context-assessment-map.webp` appears on 49 pages.
8. SVG diagrams present (`session-flow.svg`, `skill-portfolio-chain.svg`): preserve them; add alt/title/caption if missing.
9. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 92% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 93% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/assessments-at-a-glance.webp` | 94% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-assessment.webp` | 95% | eager/high | A student taking an online career assessment on a… | NO | NO |
| `bofu/session-flow.svg` | 96% | lazy | Five-stage career guidance session flow from… | NO | NO |
| `bofu/skill-portfolio-chain.svg` | 96% | lazy | Skill portfolio chain from strengths to financial… | NO | NO |
| `bofu/context-assessment-map.webp` | 97% | lazy | An assessment signal map showing how results… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the shared assessment hero; add title attribute and caption. The page-specific value must come from the explanatory visuals below.
3. CREATE 3 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-test-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Many people start with a broad career test.
- On-image text (about 25-40 words, shortened from the page; no new claims): Get the complete picture, not just one piece of it / When to use a broad career test / What a career test should actually help you decide / You may also want these next / Common questions before you start
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career test”: Get the complete picture, not…; When to use a broad career test; What a career test…
- Title attribute: At a glance: Career test
- Caption (and keep the same point in HTML text): Many people start with a broad career test.
**V2 — Chronological timeline** (place after the section “When to use a broad career test”)
- File: `career-test-chronological-use-broad-career-test.webp` · 1600×1000 WebP under 200 KB
- Teaches: Use this when you know the decision matters, but has not yet narrowed which type of test is most relevant.
- On-image text (about 25-40 words, shortened from the page; no new claims): You want a free first step before paying anyone / You are not sure whether the issue is fit, aptitude, or stage / You want clarity before the next wrong turn gets expensive
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “When to use a broad career test”: You want a free first step before…; You are not sure whether the…; You want clarity before the…
- Title attribute: When to use a broad career test
- Caption (and keep the same point in HTML text): Use this when you know the decision matters, but has not yet narrowed which type of test is most relevant.
**V3 — Decision tree** (place after the section “What a career test should actually help you decide”)
- File: `career-test-decision-career-test-should-actually.webp` · 1600×1000 WebP under 200 KB
- Teaches: The value is not only getting a result.
- On-image text (about 25-40 words, shortened from the page; no new claims): Which assessment fits your stage best / Whether you need broad direction or narrower aptitude clarity / What the next better step is after the test
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “What a career test should actually help you decide”: Which assessment fits your stage…; Whether you need broad direction…; What the next…
- Title attribute: What a career test should actually help you decide
- Caption (and keep the same point in HTML text): The value is not only getting a result.
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/assessments/emotional-intelligence-test-careers/

**H1:** Emotional Intelligence Test for Careers  
**Type:** assessment · **Search priority:** P3 (0 clicks, 0 impressions) · **Rendered images:** 7 (3 generic category, 1 hero, 1 context, 2 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/assessments-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `assessments-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-assessment.webp` is shared by 52 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-assessment.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 95% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-assessment-map.webp` has no title attribute and no caption.
7. Context visual reuse: `context-assessment-map.webp` appears on 49 pages.
8. SVG diagrams present (`session-flow.svg`, `skill-portfolio-chain.svg`): preserve them; add alt/title/caption if missing.
9. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 92% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 93% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/assessments-at-a-glance.webp` | 94% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-assessment.webp` | 95% | eager/high | A student taking an online career assessment on a… | NO | NO |
| `bofu/session-flow.svg` | 96% | lazy | Five-stage career guidance session flow from… | NO | NO |
| `bofu/skill-portfolio-chain.svg` | 96% | lazy | Skill portfolio chain from strengths to financial… | NO | NO |
| `bofu/context-assessment-map.webp` | 97% | lazy | An assessment signal map showing how results… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the shared assessment hero; add title attribute and caption. The page-specific value must come from the explanatory visuals below.
3. CREATE 3 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `emotional-intelligence-test-careers-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Rate 25 real situations and get your self-awareness, self-regulation, motivation, empathy, and social-skills…
- On-image text (about 25-40 words, shortened from the page; no new claims): Get the complete picture with a full free career assessment / Emotional intelligence is a skill set, not a fixed trait / Rate how true each statement is of you / Turn self-report into real evidence / Before you use this score
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Emotional Intelligence Test for…”: Get the complete picture with a…; Emotional intelligence is a…
- Title attribute: At a glance: Emotional Intelligence Test for Careers
- Caption (and keep the same point in HTML text): Rate 25 real situations and get your self-awareness, self-regulation, motivation, empathy, and social-skills scores, an overall composite…
**V2 — Skill map** (place after the section “Emotional intelligence is a skill set, not a fixed trait”)
- File: `emotional-intelligence-test-careers-skill-emotional-intelligence-skill-set.webp` · 1600×1000 WebP under 200 KB
- Teaches: Each area can be observed, practised, and improved with real feedback, unlike some personality traits that…
- On-image text (about 25-40 words, shortened from the page; no new claims): Self-Awareness / Self-Regulation / Motivation / Empathy / Social Skills
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Skill map for “Emotional intelligence is a skill set, not a…”: Self-Awareness; Self-Regulation; Motivation
- Title attribute: Emotional intelligence is a skill set, not a fixed trait
- Caption (and keep the same point in HTML text): Each area can be observed, practised, and improved with real feedback, unlike some personality traits that stay more stable over time.
**V3 — Framework cards** (place after the section “Career Guidance Pricing”)
- File: `emotional-intelligence-test-careers-framework-career-guidance-pricing.webp` · 1600×1000 WebP under 200 KB
- Teaches: Students Student path Student Career Guidance Practical student career guidance before the wrong path wastes…
- On-image text (about 25-40 words, shortened from the page; no new claims): Student Career Guidance / Working Professional Career Guidance / Students Student path Student Career Guidance Practical student career guidance… / Limited-time student offer ₹3000 ₹250 for the first 1-on-1 session A… / Book 1-on-1 Online across India Avoid Wrong streams, outdated degrees, and…
- Numbers: Limited-time student offer ₹3000 ₹250 for the first 1-on-1 session A low-friction first step before the wrong path costs more time and money. | Continuous career guidance Limited-time annual price ₹29000 ₹12000 Includes the 1-on-1 and up to 24 small-group sessions across the year. | Limited-time professional offer ₹5000 ₹3000 for one 1-on-1 session Book one sharp 1-on-1 before stagnation, weak positioning, or a bad pivot gets more expensive.
- Alt: Framework cards for “Career Guidance Pricing”: Student Career Guidance; Working Professional Career…; Students Student path Student…
- Title attribute: Career Guidance Pricing
- Caption (and keep the same point in HTML text): Students Student path Student Career Guidance Practical student career guidance before the wrong path wastes years, money, and future…
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/assessments/enneagram-personality-test-careers/

**H1:** Enneagram Personality Test for Careers  
**Type:** assessment · **Search priority:** P3 (0 clicks, 0 impressions) · **Rendered images:** 7 (3 generic category, 1 hero, 1 context, 2 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/assessments-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `assessments-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-assessment.webp` is shared by 52 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-assessment.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 95% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-assessment-map.webp` has no title attribute and no caption.
7. Context visual reuse: `context-assessment-map.webp` appears on 49 pages.
8. SVG diagrams present (`session-flow.svg`, `skill-portfolio-chain.svg`): preserve them; add alt/title/caption if missing.
9. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 91% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 93% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/assessments-at-a-glance.webp` | 94% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-assessment.webp` | 95% | eager/high | A student taking an online career assessment on a… | NO | NO |
| `bofu/session-flow.svg` | 96% | lazy | Five-stage career guidance session flow from… | NO | NO |
| `bofu/skill-portfolio-chain.svg` | 96% | lazy | Skill portfolio chain from strengths to financial… | NO | NO |
| `bofu/context-assessment-map.webp` | 97% | lazy | An assessment signal map showing how results… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the shared assessment hero; add title attribute and caption. The page-specific value must come from the explanatory visuals below.
3. CREATE 3 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `enneagram-personality-test-careers-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Rate 27 real statements and get all nine type scores, your dominant type and supporting pattern, and…
- On-image text (about 25-40 words, shortened from the page; no new claims): Get the complete picture with a full free career assessment / Your type is about core motivation, not just behaviour / Rate how true each statement is of you / Turn core motivation into better decisions / Before you use your type
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Enneagram Personality Test for…”: Get the complete picture with a…; Your type is about core…; Rate how…
- Title attribute: At a glance: Enneagram Personality Test for Careers
- Caption (and keep the same point in HTML text): Rate 27 real statements and get all nine type scores, your dominant type and supporting pattern, and practical career directions built from…
**V2 — Asymmetrical pros-and-cons comparison** (place after the section “Turn core motivation into better decisions”)
- File: `enneagram-personality-test-careers-asymmetrical-turn-core-motivation-into.webp` · 1600×1000 WebP under 200 KB
- Teaches: 1 Notice See which type is dominant and which forms your supporting pattern.
- On-image text (about 25-40 words, shortened from the page; no new claims): Notice / Reflect / Apply / Verify
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “Turn core motivation into better decisions”: Notice; Reflect; Apply
- Title attribute: Turn core motivation into better decisions
- Caption (and keep the same point in HTML text): 1 Notice See which type is dominant and which forms your supporting pattern.
**V3 — Framework cards** (place after the section “Career Guidance Pricing”)
- File: `enneagram-personality-test-careers-framework-career-guidance-pricing.webp` · 1600×1000 WebP under 200 KB
- Teaches: Students Student path Student Career Guidance Practical student career guidance before the wrong path wastes…
- On-image text (about 25-40 words, shortened from the page; no new claims): Student Career Guidance / Working Professional Career Guidance / Students Student path Student Career Guidance Practical student career guidance… / Limited-time student offer ₹3000 ₹250 for the first 1-on-1 session A… / Book 1-on-1 Online across India Avoid Wrong streams, outdated degrees, and…
- Numbers: Limited-time student offer ₹3000 ₹250 for the first 1-on-1 session A low-friction first step before the wrong path costs more time and money. | Continuous career guidance Limited-time annual price ₹29000 ₹12000 Includes the 1-on-1 and up to 24 small-group sessions across the year. | Limited-time professional offer ₹5000 ₹3000 for one 1-on-1 session Book one sharp 1-on-1 before stagnation, weak positioning, or a bad pivot gets more expensive.
- Alt: Framework cards for “Career Guidance Pricing”: Student Career Guidance; Working Professional Career…; Students Student path Student…
- Title attribute: Career Guidance Pricing
- Caption (and keep the same point in HTML text): Students Student path Student Career Guidance Practical student career guidance before the wrong path wastes years, money, and future…
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/assessments/entrepreneurial-aptitude-test/

**H1:** Entrepreneurial Aptitude Test  
**Type:** assessment · **Search priority:** P3 (0 clicks, 0 impressions) · **Rendered images:** 7 (3 generic category, 1 hero, 1 context, 2 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/assessments-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `assessments-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-assessment.webp` is shared by 52 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-assessment.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 95% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-assessment-map.webp` has no title attribute and no caption.
7. Context visual reuse: `context-assessment-map.webp` appears on 49 pages.
8. SVG diagrams present (`session-flow.svg`, `skill-portfolio-chain.svg`): preserve them; add alt/title/caption if missing.
9. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 91% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 93% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/assessments-at-a-glance.webp` | 94% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-assessment.webp` | 95% | eager/high | A student taking an online career assessment on a… | NO | NO |
| `bofu/session-flow.svg` | 96% | lazy | Five-stage career guidance session flow from… | NO | NO |
| `bofu/skill-portfolio-chain.svg` | 96% | lazy | Skill portfolio chain from strengths to financial… | NO | NO |
| `bofu/context-assessment-map.webp` | 97% | lazy | An assessment signal map showing how results… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the shared assessment hero; add title attribute and caption. The page-specific value must come from the explanatory visuals below.
3. CREATE 3 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `entrepreneurial-aptitude-test-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Rate 25 real situations and get your risk tolerance, resilience, opportunity recognition, execution…
- On-image text (about 25-40 words, shortened from the page; no new claims): Get the complete picture with a full free career assessment / Entrepreneurial readiness is a skill set, not a fixed trait / Rate how true each statement is of you / Turn self-report into real evidence / Before you use this score
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Entrepreneurial Aptitude Test”: Get the complete picture with a…; Entrepreneurial readiness is a……
- Title attribute: At a glance: Entrepreneurial Aptitude Test
- Caption (and keep the same point in HTML text): Rate 25 real situations and get your risk tolerance, resilience, opportunity recognition, execution discipline, and financial and people…
**V2 — Skill map** (place after the section “Entrepreneurial readiness is a skill set, not a fixed trait”)
- File: `entrepreneurial-aptitude-test-skill-entrepreneurial-readiness-skill-set.webp` · 1600×1000 WebP under 200 KB
- Teaches: Each area can be observed, practised, and improved with real experience, not only measured once and left…
- On-image text (about 25-40 words, shortened from the page; no new claims): Risk Tolerance / Resilience / Opportunity Recognition / Execution Discipline / Financial & People Leadership
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Skill map for “Entrepreneurial readiness is a skill set, not a…”: Risk Tolerance; Resilience; Opportunity Recognition
- Title attribute: Entrepreneurial readiness is a skill set, not a fixed trait
- Caption (and keep the same point in HTML text): Each area can be observed, practised, and improved with real experience, not only measured once and left alone.
**V3 — Framework cards** (place after the section “Career Guidance Pricing”)
- File: `entrepreneurial-aptitude-test-framework-career-guidance-pricing.webp` · 1600×1000 WebP under 200 KB
- Teaches: Students Student path Student Career Guidance Practical student career guidance before the wrong path wastes…
- On-image text (about 25-40 words, shortened from the page; no new claims): Student Career Guidance / Working Professional Career Guidance / Students Student path Student Career Guidance Practical student career guidance… / Limited-time student offer ₹3000 ₹250 for the first 1-on-1 session A… / Book 1-on-1 Online across India Avoid Wrong streams, outdated degrees, and…
- Numbers: Limited-time student offer ₹3000 ₹250 for the first 1-on-1 session A low-friction first step before the wrong path costs more time and money. | Continuous career guidance Limited-time annual price ₹29000 ₹12000 Includes the 1-on-1 and up to 24 small-group sessions across the year. | Limited-time professional offer ₹5000 ₹3000 for one 1-on-1 session Book one sharp 1-on-1 before stagnation, weak positioning, or a bad pivot gets more expensive.
- Alt: Framework cards for “Career Guidance Pricing”: Student Career Guidance; Working Professional Career…; Students Student path Student…
- Title attribute: Career Guidance Pricing
- Caption (and keep the same point in HTML text): Students Student path Student Career Guidance Practical student career guidance before the wrong path wastes years, money, and future…
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/assessments/free-job-career-test/

**H1:**   
**Type:** assessment · **Search priority:** P3 (0 clicks, 0 impressions) · **Rendered images:** 0 (0 generic category, 0 hero, 0 context, 0 SVG)
**Status: RED**

**Findings**
1. No images are rendered on this page.

**Current images**

**Required actions**
1. KEEP the shared assessment hero; add title attribute and caption. The page-specific value must come from the explanatory visuals below.
2. CREATE 1 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `free-job-career-test-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Free Job Career Test | Future Career School This assessment has moved to the Placement Aptitude Test .
- On-image text (about 25-40 words, shortened from the page; no new claims): Free Job Career Test | Future Career School This assessment has moved to the Placement Aptitude Test .
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance:”: Free Job Career Test | Future…
- Title attribute: At a glance:
- Caption (and keep the same point in HTML text): Free Job Career Test | Future Career School This assessment has moved to the Placement Aptitude Test .
3. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
4. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/assessments/holland-code-free-career-test/

**H1:** Holland code free career test  
**Type:** assessment · **Search priority:** P3 (0 clicks, 0 impressions) · **Rendered images:** 7 (3 generic category, 1 hero, 1 context, 2 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/assessments-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `assessments-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-assessment.webp` is shared by 52 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-assessment.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 95% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-assessment-map.webp` has no title attribute and no caption.
7. Context visual reuse: `context-assessment-map.webp` appears on 49 pages.
8. SVG diagrams present (`session-flow.svg`, `skill-portfolio-chain.svg`): preserve them; add alt/title/caption if missing.
9. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 91% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 92% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/assessments-at-a-glance.webp` | 94% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-assessment.webp` | 95% | eager/high | A student taking an online career assessment on a… | NO | NO |
| `bofu/session-flow.svg` | 96% | lazy | Five-stage career guidance session flow from… | NO | NO |
| `bofu/skill-portfolio-chain.svg` | 96% | lazy | Skill portfolio chain from strengths to financial… | NO | NO |
| `bofu/context-assessment-map.webp` | 97% | lazy | An assessment signal map showing how results… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the shared assessment hero; add title attribute and caption. The page-specific value must come from the explanatory visuals below.
3. CREATE 3 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `holland-code-free-career-test-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Holland Code Free Career Test should help connect personality, interests, work style, and direction to a real…
- On-image text (about 25-40 words, shortened from the page; no new claims): Get the complete picture, not just one piece of it / When to use holland code free career test / What holland code free career test should actually help you understand / You may also want these next / Common questions before you start
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Holland code free career test”: Get the complete picture, not…; When to use holland code free…; What…
- Title attribute: At a glance: Holland code free career test
- Caption (and keep the same point in HTML text): Holland Code Free Career Test should help connect personality, interests, work style, and direction to a real career decision.
**V2 — Chronological timeline** (place after the section “When to use holland code free career test”)
- File: `holland-code-free-career-test-chronological-use-holland-code-free.webp` · 1600×1000 WebP under 200 KB
- Teaches: This matters when marks, opinions, or job titles alone are not enough to judge fit and direction properly.
- On-image text (about 25-40 words, shortened from the page; no new claims): You want more than one narrow label / You want career-relevant interpretation / You want the right psychometric page for your stage
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “When to use holland code free career test”: You want more than one narrow…; You want career-relevant…; You want the right…
- Title attribute: When to use holland code free career test
- Caption (and keep the same point in HTML text): This matters when marks, opinions, or job titles alone are not enough to judge fit and direction properly.
**V3 — Decision tree** (place after the section “What holland code free career test should actually help you understand”)
- File: `holland-code-free-career-test-decision-holland-code-free-career.webp` · 1600×1000 WebP under 200 KB
- Teaches: The stronger outcome is not only personality description.
- On-image text (about 25-40 words, shortened from the page; no new claims): Which work patterns fit better / Where your preferences and strengths support each other / Which stage-specific psychometric page deserves attention
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “What holland code free career test should…”: Which work patterns fit better; Where your preferences and…; Which stage-specific psychometric…
- Title attribute: What holland code free career test should actually help you understand
- Caption (and keep the same point in HTML text): The stronger outcome is not only personality description.
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/assessments/job-aptitude-test/

**H1:**   
**Type:** assessment · **Search priority:** P3 (0 clicks, 2 impressions) · **Rendered images:** 0 (0 generic category, 0 hero, 0 context, 0 SVG)
**Status: RED**

**Findings**
1. No images are rendered on this page.

**Current images**

**Required actions**
1. KEEP the shared assessment hero; add title attribute and caption. The page-specific value must come from the explanatory visuals below.
2. CREATE 1 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `job-aptitude-test-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Job Aptitude Test | Future Career School This assessment has moved to the Placement Aptitude Test .
- On-image text (about 25-40 words, shortened from the page; no new claims): Job Aptitude Test | Future Career School This assessment has moved to the Placement Aptitude Test .
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance:”: Job Aptitude Test | Future Career…
- Title attribute: At a glance:
- Caption (and keep the same point in HTML text): Job Aptitude Test | Future Career School This assessment has moved to the Placement Aptitude Test .
3. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
4. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/assessments/job-career-aptitude-test/

**H1:**   
**Type:** assessment · **Search priority:** P3 (0 clicks, 0 impressions) · **Rendered images:** 0 (0 generic category, 0 hero, 0 context, 0 SVG)
**Status: RED**

**Findings**
1. No images are rendered on this page.

**Current images**

**Required actions**
1. KEEP the shared assessment hero; add title attribute and caption. The page-specific value must come from the explanatory visuals below.
2. CREATE 1 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `job-career-aptitude-test-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Job Career Aptitude Test | Future Career School This assessment has moved to the Placement Aptitude Test .
- On-image text (about 25-40 words, shortened from the page; no new claims): Job Career Aptitude Test | Future Career School This assessment has moved to the Placement Aptitude Test .
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance:”: Job Career Aptitude Test | Future…
- Title attribute: At a glance:
- Caption (and keep the same point in HTML text): Job Career Aptitude Test | Future Career School This assessment has moved to the Placement Aptitude Test .
3. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
4. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/assessments/myers-briggs-career-test/

**H1:** Myers Briggs Career Test Alternative for Real Career Decisions  
**Type:** assessment · **Search priority:** P3 (0 clicks, 11 impressions) · **Rendered images:** 7 (3 generic category, 1 hero, 1 context, 2 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/assessments-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `assessments-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-assessment.webp` is shared by 52 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-assessment.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 95% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-assessment-map.webp` has no title attribute and no caption.
7. Context visual reuse: `context-assessment-map.webp` appears on 49 pages.
8. SVG diagrams present (`session-flow.svg`, `skill-portfolio-chain.svg`): preserve them; add alt/title/caption if missing.
9. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 92% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 93% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/assessments-at-a-glance.webp` | 94% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-assessment.webp` | 95% | eager/high | A student taking an online career assessment on a… | NO | NO |
| `bofu/session-flow.svg` | 96% | lazy | Five-stage career guidance session flow from… | NO | NO |
| `bofu/skill-portfolio-chain.svg` | 96% | lazy | Skill portfolio chain from strengths to financial… | NO | NO |
| `bofu/context-assessment-map.webp` | 97% | lazy | An assessment signal map showing how results… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the shared assessment hero; add title attribute and caption. The page-specific value must come from the explanatory visuals below.
3. CREATE 3 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `myers-briggs-career-test-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Explore how you tend to engage, notice information, decide, and organise work.
- On-image text (about 25-40 words, shortened from the page; no new claims): Get the complete picture with a full free career assessment / Both sides can be valuable / Choose what is more naturally like you / Test the result against real life / Before you use the type code
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Myers Briggs Career Test Alternative…”: Get the complete picture with a…; Both sides can be valuable…
- Title attribute: At a glance: Myers Briggs Career Test Alternative for Real Career…
- Caption (and keep the same point in HTML text): Explore how you tend to engage, notice information, decide, and organise work.
**V2 — Decision tree** (place after the section “Choose what is more naturally like you”)
- File: `myers-briggs-career-test-decision-choose-more-naturally-like.webp` · 1600×1000 WebP under 200 KB
- Teaches: Do not answer as the person you think a job demands.
- On-image text (about 25-40 words, shortened from the page; no new claims): Do not answer as the person you think a job demands. / Use your common pattern across study, work, and meaningful projects. / School student Explore learning, teamwork, and decision preferences without…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “Choose what is more naturally like you”: Do not answer as the person you…; Use your common pattern across…; School student Explore learning…
- Title attribute: Choose what is more naturally like you
- Caption (and keep the same point in HTML text): Do not answer as the person you think a job demands.
**V3 — Framework cards** (place after the section “Career Guidance Pricing”)
- File: `myers-briggs-career-test-framework-career-guidance-pricing.webp` · 1600×1000 WebP under 200 KB
- Teaches: Students Student path Student Career Guidance Practical student career guidance before the wrong path wastes…
- On-image text (about 25-40 words, shortened from the page; no new claims): Student Career Guidance / Working Professional Career Guidance / Students Student path Student Career Guidance Practical student career guidance… / Limited-time student offer ₹3000 ₹250 for the first 1-on-1 session A… / Book 1-on-1 Online across India Avoid Wrong streams, outdated degrees, and…
- Numbers: Limited-time student offer ₹3000 ₹250 for the first 1-on-1 session A low-friction first step before the wrong path costs more time and money. | Continuous career guidance Limited-time annual price ₹29000 ₹12000 Includes the 1-on-1 and up to 24 small-group sessions across the year. | Limited-time professional offer ₹5000 ₹3000 for one 1-on-1 session Book one sharp 1-on-1 before stagnation, weak positioning, or a bad pivot gets more expensive.
- Alt: Framework cards for “Career Guidance Pricing”: Student Career Guidance; Working Professional Career…; Students Student path Student…
- Title attribute: Career Guidance Pricing
- Caption (and keep the same point in HTML text): Students Student path Student Career Guidance Practical student career guidance before the wrong path wastes years, money, and future…
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/assessments/personality-test-for-career/

**H1:** Personality test for career  
**Type:** assessment · **Search priority:** P3 (0 clicks, 4 impressions) · **Rendered images:** 7 (3 generic category, 1 hero, 1 context, 2 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/assessments-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `assessments-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-assessment.webp` is shared by 52 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-assessment.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 95% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-assessment-map.webp` has no title attribute and no caption.
7. Context visual reuse: `context-assessment-map.webp` appears on 49 pages.
8. SVG diagrams present (`session-flow.svg`, `skill-portfolio-chain.svg`): preserve them; add alt/title/caption if missing.
9. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 91% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 93% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/assessments-at-a-glance.webp` | 94% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-assessment.webp` | 95% | eager/high | A student taking an online career assessment on a… | NO | NO |
| `bofu/session-flow.svg` | 96% | lazy | Five-stage career guidance session flow from… | NO | NO |
| `bofu/skill-portfolio-chain.svg` | 96% | lazy | Skill portfolio chain from strengths to financial… | NO | NO |
| `bofu/context-assessment-map.webp` | 97% | lazy | An assessment signal map showing how results… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the shared assessment hero; add title attribute and caption. The page-specific value must come from the explanatory visuals below.
3. CREATE 3 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `personality-test-for-career-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: A personality test for career decisions is useful only if it improves real choices.
- On-image text (about 25-40 words, shortened from the page; no new claims): Get the complete picture, not just one piece of it / When to use a personality test for career / What a personality test for career should actually clarify / You may also want these next / Common questions before you start
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Personality test for career”: Get the complete picture, not…; When to use a personality test…; What a…
- Title attribute: At a glance: Personality test for career
- Caption (and keep the same point in HTML text): A personality test for career decisions is useful only if it improves real choices.
**V2 — Chronological timeline** (place after the section “When to use a personality test for career”)
- File: `personality-test-for-career-chronological-use-personality-test-career.webp` · 1600×1000 WebP under 200 KB
- Teaches: This matters when you want clearer work-style signals before choosing a role direction, not just another…
- On-image text (about 25-40 words, shortened from the page; no new claims): You want to know what kind of work environment fits better / You want more than interest lists / You need a free starting point before the updated career guidance
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “When to use a personality test for career”: You want to know what kind of…; You want more than interest lists; You need a free…
- Title attribute: When to use a personality test for career
- Caption (and keep the same point in HTML text): This matters when you want clearer work-style signals before choosing a role direction, not just another label to read once.
**V3 — Decision tree** (place after the section “What a personality test for career should actually clarify”)
- File: `personality-test-for-career-decision-personality-test-career-should.webp` · 1600×1000 WebP under 200 KB
- Teaches: The stronger outcome is better work-fit understanding and clearer role direction, not only another…
- On-image text (about 25-40 words, shortened from the page; no new claims): How you are more likely to work well / Which kinds of roles are worth deeper attention / What may still need updated guidance after the test
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “What a personality test for career should…”: How you are more likely to work…; Which kinds of roles are worth…; What may still need updated…
- Title attribute: What a personality test for career should actually clarify
- Caption (and keep the same point in HTML text): The stronger outcome is better work-fit understanding and clearer role direction, not only another personality code.
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/assessments/placement-aptitude-test/

**H1:** Placement Aptitude Test for Job Readiness  
**Type:** assessment · **Search priority:** P3 (0 clicks, 2 impressions) · **Rendered images:** 7 (3 generic category, 1 hero, 1 context, 2 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/assessments-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `assessments-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-assessment.webp` is shared by 52 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-assessment.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 94% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-assessment-map.webp` has no title attribute and no caption.
7. Context visual reuse: `context-assessment-map.webp` appears on 49 pages.
8. SVG diagrams present (`session-flow.svg`, `skill-portfolio-chain.svg`): preserve them; add alt/title/caption if missing.
9. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 90% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 92% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/assessments-at-a-glance.webp` | 93% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-assessment.webp` | 94% | eager/high | A student taking an online career assessment on a… | NO | NO |
| `bofu/session-flow.svg` | 95% | lazy | Five-stage career guidance session flow from… | NO | NO |
| `bofu/skill-portfolio-chain.svg` | 96% | lazy | Skill portfolio chain from strengths to financial… | NO | NO |
| `bofu/context-assessment-map.webp` | 96% | lazy | An assessment signal map showing how results… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the shared assessment hero; add title attribute and caption. The page-specific value must come from the explanatory visuals below.
3. CREATE 3 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `placement-aptitude-test-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Take this free aptitude test for jobs to check the five skills that commonly matter in placement and…
- On-image text (about 25-40 words, shortened from the page; no new claims): Get more than Placement Aptitude Test gives you, free / Know exactly where your placement preparation stands / Answer all 20 questions / A better score comes from focused practice, not random repetition / Before you start practising
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Placement Aptitude Test for Job…”: Get more than Placement Aptitude…; Know exactly where your…
- Title attribute: At a glance: Placement Aptitude Test for Job Readiness
- Caption (and keep the same point in HTML text): Take this free aptitude test for jobs to check the five skills that commonly matter in placement and screening rounds.
**V2 — Decision tree** (place after the section “Get more than Placement Aptitude Test gives you, free”)
- File: `placement-aptitude-test-decision-get-more-than-placement.webp` · 1600×1000 WebP under 200 KB
- Teaches: Placement Aptitude Test Five aptitude areas used in placement and job screening Numerical, logical, verbal…
- On-image text (about 25-40 words, shortened from the page; no new claims): Placement Aptitude Test / Graduates and Early Professionals Assessment / Five aptitude areas used in placement and job screening / Numerical, logical, verbal, data and judgement practice / A readiness read for hiring rounds / ✓ Your role and domain guide, based on your interest evidence / ✓ Professional aptitude signals and your 8 intelligence signals
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “Get more than Placement Aptitude Test gives you…”: Placement Aptitude Test; Graduates and Early Professionals…; Five aptitude areas used in…
- Title attribute: Get more than Placement Aptitude Test gives you, free
- Caption (and keep the same point in HTML text): Placement Aptitude Test Five aptitude areas used in placement and job screening Numerical, logical, verbal, data and judgement practice A…
**V3 — Decision tree by situation** (place after the section “Career Guidance Pricing for Graduates and Early Professionals”)
- File: `placement-aptitude-test-decision-career-guidance-pricing-graduates.webp` · 1600×1000 WebP under 200 KB
- Teaches: Students Student path Student Career Guidance Practical student career guidance before the wrong path wastes…
- On-image text (about 25-40 words, shortened from the page; no new claims): Student Career Guidance / Students Student path Student Career Guidance Practical student career guidance… / Limited-time student offer ₹3000 ₹250 for the first 1-on-1 session A… / Book 1-on-1 Online across India Avoid Wrong streams, outdated degrees, and…
- Numbers: Limited-time student offer ₹3000 ₹250 for the first 1-on-1 session A low-friction first step before the wrong path costs more time and money. | Continuous career guidance Limited-time annual price ₹29000 ₹12000 Includes the 1-on-1 and up to 24 small-group sessions across the year. | Take it free → ★ Most complete · 100% free · No sign-up
- Alt: Decision tree by situation for “Career Guidance Pricing for Graduates and Early…”: Student Career Guidance; Students Student path Student…; Limited-time…
- Title attribute: Career Guidance Pricing for Graduates and Early Professionals
- Caption (and keep the same point in HTML text): Students Student path Student Career Guidance Practical student career guidance before the wrong path wastes years, money, and future…
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/assessments/professional-skill-assessment/

**H1:** Professional skill assessment  
**Type:** assessment · **Search priority:** P3 (0 clicks, 2 impressions) · **Rendered images:** 7 (3 generic category, 1 hero, 1 context, 2 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/assessments-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `assessments-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-assessment.webp` is shared by 52 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-assessment.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 94% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-assessment-map.webp` has no title attribute and no caption.
7. Context visual reuse: `context-assessment-map.webp` appears on 49 pages.
8. SVG diagrams present (`session-flow.svg`, `skill-portfolio-chain.svg`): preserve them; add alt/title/caption if missing.
9. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 90% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 92% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/assessments-at-a-glance.webp` | 93% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-assessment.webp` | 94% | eager/high | A student taking an online career assessment on a… | NO | NO |
| `bofu/session-flow.svg` | 95% | lazy | Five-stage career guidance session flow from… | NO | NO |
| `bofu/skill-portfolio-chain.svg` | 96% | lazy | Skill portfolio chain from strengths to financial… | NO | NO |
| `bofu/context-assessment-map.webp` | 96% | lazy | An assessment signal map showing how results… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the shared assessment hero; add title attribute and caption. The page-specific value must come from the explanatory visuals below.
3. CREATE 3 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `professional-skill-assessment-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: A professional skill assessment should help when the real problem is not only what you know, but how…
- On-image text (about 25-40 words, shortened from the page; no new claims): Get the complete picture, not just one piece of it / When to use a professional skill assessment / What a professional skill assessment should actually reveal / You may also want these next / Common questions before you start
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Professional skill assessment”: Get the complete picture, not…; When to use a professional skill……
- Title attribute: At a glance: Professional skill assessment
- Caption (and keep the same point in HTML text): A professional skill assessment should help when the real problem is not only what you know, but how under-leveraged your current profile…
**V2 — Chronological timeline** (place after the section “When to use a professional skill assessment”)
- File: `professional-skill-assessment-chronological-use-professional-skill-assessment.webp` · 1600×1000 WebP under 200 KB
- Teaches: This matters most when your role continues but the leverage, growth, or direction no longer feels strong…
- On-image text (about 25-40 words, shortened from the page; no new claims): You feel skilled, but under-leveraged / You are comparing a pivot, upskilling move, or salary-growth path / You want a strong first read before the updated career guidance
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “When to use a professional skill assessment”: You feel skilled, but…; You are comparing a pivot…; You want a strong first read…
- Title attribute: When to use a professional skill assessment
- Caption (and keep the same point in HTML text): This matters most when your role continues but the leverage, growth, or direction no longer feels strong enough.
**V3 — Decision tree** (place after the section “What a professional skill assessment should actually reveal”)
- File: `professional-skill-assessment-decision-professional-skill-assessment-should.webp` · 1600×1000 WebP under 200 KB
- Teaches: The value is not only measuring what you can do.
- On-image text (about 25-40 words, shortened from the page; no new claims): Which skills are already valuable but underused / Which growth gaps matter most now / What the next leverage move should be
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “What a professional skill assessment should…”: Which skills are already valuable…; Which growth gaps matter most now; What the next leverage…
- Title attribute: What a professional skill assessment should actually reveal
- Caption (and keep the same point in HTML text): The value is not only measuring what you can do.
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/assessments/psychometric-test/

**H1:** Psychometric test  
**Type:** assessment · **Search priority:** P3 (0 clicks, 3 impressions) · **Rendered images:** 7 (3 generic category, 1 hero, 1 context, 2 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/assessments-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `assessments-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-assessment.webp` is shared by 52 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-assessment.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 95% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-assessment-map.webp` has no title attribute and no caption.
7. Context visual reuse: `context-assessment-map.webp` appears on 49 pages.
8. SVG diagrams present (`session-flow.svg`, `skill-portfolio-chain.svg`): preserve them; add alt/title/caption if missing.
9. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 91% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 92% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/assessments-at-a-glance.webp` | 94% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-assessment.webp` | 95% | eager/high | A student taking an online career assessment on a… | NO | NO |
| `bofu/session-flow.svg` | 96% | lazy | Five-stage career guidance session flow from… | NO | NO |
| `bofu/skill-portfolio-chain.svg` | 96% | lazy | Skill portfolio chain from strengths to financial… | NO | NO |
| `bofu/context-assessment-map.webp` | 97% | lazy | An assessment signal map showing how results… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the shared assessment hero; add title attribute and caption. The page-specific value must come from the explanatory visuals below.
3. CREATE 3 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `psychometric-test-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: A psychometric test is useful only if it helps with a real decision.
- On-image text (about 25-40 words, shortened from the page; no new claims): Get the complete picture, not just one piece of it / When a psychometric test becomes a useful first step / What a psychometric test should actually help you understand / You may also want these next / Common questions before you start
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Psychometric test”: Get the complete picture, not…; When a psychometric test becomes…; What a…
- Title attribute: At a glance: Psychometric test
- Caption (and keep the same point in HTML text): A psychometric test is useful only if it helps with a real decision.
**V2 — Chronological timeline** (place after the section “When a psychometric test becomes a useful first step”)
- File: `psychometric-test-chronological-psychometric-test-becomes-useful.webp` · 1600×1000 WebP under 200 KB
- Teaches: Psychometric-style assessments help most when you need a clearer read on personality, interests, work style…
- On-image text (about 25-40 words, shortened from the page; no new claims): You want more than raw marks or opinions / You need personality and interest input together / You want a free starting point before paying for reports
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “When a psychometric test becomes a useful first…”: You want more than raw marks or…; You need personality and interest…; You want a…
- Title attribute: When a psychometric test becomes a useful first step
- Caption (and keep the same point in HTML text): Psychometric-style assessments help most when you need a clearer read on personality, interests, work style, and how they affect your next…
**V3 — Decision tree** (place after the section “What a psychometric test should actually help you understand”)
- File: `psychometric-test-decision-psychometric-test-should-actually.webp` · 1600×1000 WebP under 200 KB
- Teaches: The test should make the decision clearer, not just describe you in a way that still leaves the decision…
- On-image text (about 25-40 words, shortened from the page; no new claims): Interest and work-style alignment / Where aptitude and preference support each other / Which next route deserves deeper exploration
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “What a psychometric test should actually help you…”: Interest and work-style alignment; Where aptitude and preference…; Which next route…
- Title attribute: What a psychometric test should actually help you understand
- Caption (and keep the same point in HTML text): The test should make the decision clearer, not just describe you in a way that still leaves the decision untouched.
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/assessments/psychometric/

**H1:**   
**Type:** assessment · **Search priority:** P3 (0 clicks, 0 impressions) · **Rendered images:** 0 (0 generic category, 0 hero, 0 context, 0 SVG)
**Status: RED**

**Findings**
1. No images are rendered on this page.

**Current images**

**Required actions**
1. KEEP the shared assessment hero; add title attribute and caption. The page-specific value must come from the explanatory visuals below.
2. CREATE 1 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `psychometric-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Psychometric Test | Future Career School This page has moved to /services/assessments/psychometric-test/ .
- On-image text (about 25-40 words, shortened from the page; no new claims): Psychometric Test | Future Career School This page has moved to /services/assessments/psychometric-test/ .
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance:”: Psychometric Test | Future Career…
- Title attribute: At a glance:
- Caption (and keep the same point in HTML text): Psychometric Test | Future Career School This page has moved to /services/assessments/psychometric-test/ .
3. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
4. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/assessments/riasec-holland-code-career-test/

**H1:** RIASEC Holland Code Career Test  
**Type:** assessment · **Search priority:** P3 (0 clicks, 0 impressions) · **Rendered images:** 7 (3 generic category, 1 hero, 1 context, 2 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/assessments-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `assessments-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-assessment.webp` is shared by 52 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-assessment.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 95% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-assessment-map.webp` has no title attribute and no caption.
7. Context visual reuse: `context-assessment-map.webp` appears on 49 pages.
8. SVG diagrams present (`session-flow.svg`, `skill-portfolio-chain.svg`): preserve them; add alt/title/caption if missing.
9. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 92% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 93% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/assessments-at-a-glance.webp` | 94% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-assessment.webp` | 95% | eager/high | A student taking an online career assessment on a… | NO | NO |
| `bofu/session-flow.svg` | 96% | lazy | Five-stage career guidance session flow from… | NO | NO |
| `bofu/skill-portfolio-chain.svg` | 96% | lazy | Skill portfolio chain from strengths to financial… | NO | NO |
| `bofu/context-assessment-map.webp` | 97% | lazy | An assessment signal map showing how results… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the shared assessment hero; add title attribute and caption. The page-specific value must come from the explanatory visuals below.
3. CREATE 3 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `riasec-holland-code-career-test-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Rate 36 real activities across six interest types and get your three-letter Holland Code, matched career…
- On-image text (about 25-40 words, shortened from the page; no new claims): Get the complete picture with a full free career assessment / Every type points to real, different career families / How much would you enjoy each activity? / Turn interest scores into a real decision / Before you use your Holland Code
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: RIASEC Holland Code Career Test”: Get the complete picture with a…; Every type points to real…; How…
- Title attribute: At a glance: RIASEC Holland Code Career Test
- Caption (and keep the same point in HTML text): Rate 36 real activities across six interest types and get your three-letter Holland Code, matched career families, and high-potential…
**V2 — Asymmetrical pros-and-cons comparison** (place after the section “Every type points to real, different career families”)
- File: `riasec-holland-code-career-test-asymmetrical-every-type-points-real.webp` · 1600×1000 WebP under 200 KB
- Teaches: Adjacent types on the hexagon tend to combine naturally.
- On-image text (about 25-40 words, shortened from the page; no new claims): Realistic / Investigative / Artistic / Social / Enterprising
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “Every type points to real, different career…”: Realistic; Investigative; Artistic
- Title attribute: Every type points to real, different career families
- Caption (and keep the same point in HTML text): Adjacent types on the hexagon tend to combine naturally.
**V3 — Framework cards** (place after the section “Career Guidance Pricing”)
- File: `riasec-holland-code-career-test-framework-career-guidance-pricing.webp` · 1600×1000 WebP under 200 KB
- Teaches: Students Student path Student Career Guidance Practical student career guidance before the wrong path wastes…
- On-image text (about 25-40 words, shortened from the page; no new claims): Student Career Guidance / Working Professional Career Guidance / Students Student path Student Career Guidance Practical student career guidance… / Limited-time student offer ₹3000 ₹250 for the first 1-on-1 session A… / Book 1-on-1 Online across India Avoid Wrong streams, outdated degrees, and…
- Numbers: Limited-time student offer ₹3000 ₹250 for the first 1-on-1 session A low-friction first step before the wrong path costs more time and money. | Continuous career guidance Limited-time annual price ₹29000 ₹12000 Includes the 1-on-1 and up to 24 small-group sessions across the year. | Limited-time professional offer ₹5000 ₹3000 for one 1-on-1 session Book one sharp 1-on-1 before stagnation, weak positioning, or a bad pivot gets more expensive.
- Alt: Framework cards for “Career Guidance Pricing”: Student Career Guidance; Working Professional Career…; Students Student path Student…
- Title attribute: Career Guidance Pricing
- Caption (and keep the same point in HTML text): Students Student path Student Career Guidance Practical student career guidance before the wrong path wastes years, money, and future…
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/assessments/skill-test/

**H1:** Skill test  
**Type:** assessment · **Search priority:** P3 (0 clicks, 10 impressions) · **Rendered images:** 7 (3 generic category, 1 hero, 1 context, 2 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/assessments-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `assessments-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-assessment.webp` is shared by 52 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-assessment.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 94% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-assessment-map.webp` has no title attribute and no caption.
7. Context visual reuse: `context-assessment-map.webp` appears on 49 pages.
8. SVG diagrams present (`session-flow.svg`, `skill-portfolio-chain.svg`): preserve them; add alt/title/caption if missing.
9. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 91% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 92% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/assessments-at-a-glance.webp` | 93% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-assessment.webp` | 94% | eager/high | A student taking an online career assessment on a… | NO | NO |
| `bofu/session-flow.svg` | 95% | lazy | Five-stage career guidance session flow from… | NO | NO |
| `bofu/skill-portfolio-chain.svg` | 96% | lazy | Skill portfolio chain from strengths to financial… | NO | NO |
| `bofu/context-assessment-map.webp` | 97% | lazy | An assessment signal map showing how results… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the shared assessment hero; add title attribute and caption. The page-specific value must come from the explanatory visuals below.
3. CREATE 3 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `skill-test-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: A skill test should help when the issue is no longer only what interests you.
- On-image text (about 25-40 words, shortened from the page; no new claims): Get the complete picture, not just one piece of it / When to use a broad skill test / What a skill test should actually help you understand / You may also want these next / Common questions before you start
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Skill test”: Get the complete picture, not…; When to use a broad skill test; What a skill test should…
- Title attribute: At a glance: Skill test
- Caption (and keep the same point in HTML text): A skill test should help when the issue is no longer only what interests you.
**V2 — Chronological timeline** (place after the section “When to use a broad skill test”)
- File: `skill-test-chronological-use-broad-skill-test.webp` · 1600×1000 WebP under 200 KB
- Teaches: This matters when employability, readiness, leverage, or stronger skill direction is now part of the real…
- On-image text (about 25-40 words, shortened from the page; no new claims): You want more than broad interest clarity / You need a practical reality check / You want a free first filter before anything heavier
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “When to use a broad skill test”: You want more than broad interest…; You need a practical reality check; You want a free first…
- Title attribute: When to use a broad skill test
- Caption (and keep the same point in HTML text): This matters when employability, readiness, leverage, or stronger skill direction is now part of the real problem.
**V3 — Decision tree** (place after the section “What a skill test should actually help you understand”)
- File: `skill-test-decision-skill-test-should-actually.webp` · 1600×1000 WebP under 200 KB
- Teaches: The value is not only measuring ability.
- On-image text (about 25-40 words, shortened from the page; no new claims): Whether the issue is readiness or positioning / Which skill move deserves attention first / Which assessment matches your current career stage
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “What a skill test should actually help you…”: Whether the issue is readiness or…; Which skill move deserves…; Which assessment matches your…
- Title attribute: What a skill test should actually help you understand
- Caption (and keep the same point in HTML text): The value is not only measuring ability.
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/assessments/verbal-reasoning-test/

**H1:** Verbal Reasoning Test with Practical Results  
**Type:** assessment · **Search priority:** P3 (0 clicks, 0 impressions) · **Rendered images:** 7 (3 generic category, 1 hero, 1 context, 2 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/assessments-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `assessments-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-assessment.webp` is shared by 52 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-assessment.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 95% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-assessment-map.webp` has no title attribute and no caption.
7. Context visual reuse: `context-assessment-map.webp` appears on 49 pages.
8. SVG diagrams present (`session-flow.svg`, `skill-portfolio-chain.svg`): preserve them; add alt/title/caption if missing.
9. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 91% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 92% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/assessments-at-a-glance.webp` | 94% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-assessment.webp` | 95% | eager/high | A student taking an online career assessment on a… | NO | NO |
| `bofu/session-flow.svg` | 96% | lazy | Five-stage career guidance session flow from… | NO | NO |
| `bofu/skill-portfolio-chain.svg` | 96% | lazy | Skill portfolio chain from strengths to financial… | NO | NO |
| `bofu/context-assessment-map.webp` | 97% | lazy | An assessment signal map showing how results… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the shared assessment hero; add title attribute and caption. The page-specific value must come from the explanatory visuals below.
3. CREATE 3 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `verbal-reasoning-test-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Measure how accurately you understand written information, interpret evidence, recognise relationships, and…
- On-image text (about 25-40 words, shortened from the page; no new claims): Get more than Verbal Reasoning Test gives you, free / See where understanding breaks down / Get interpretation built for your stage / Diagnose the reasoning error, not only the wrong answer / Before you use the score
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Verbal Reasoning Test with Practical…”: Get more than Verbal Reasoning…; See where understanding…
- Title attribute: At a glance: Verbal Reasoning Test with Practical Results
- Caption (and keep the same point in HTML text): Measure how accurately you understand written information, interpret evidence, recognise relationships, and communicate a clear decision.
**V2 — Decision tree** (place after the section “Get more than Verbal Reasoning Test gives you, free”)
- File: `verbal-reasoning-test-decision-get-more-than-verbal.webp` · 1600×1000 WebP under 200 KB
- Teaches: Verbal Reasoning Test Comprehension, vocabulary in context and inference A check of one aptitude area A…
- On-image text (about 25-40 words, shortened from the page; no new claims): Verbal Reasoning Test / Graduates and Early Professionals Assessment / Comprehension, vocabulary in context and inference / A check of one aptitude area / A verbal-skill read for study and work / ✓ Your role and domain guide, based on your interest evidence / ✓ Professional aptitude signals and your 8 intelligence signals
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “Get more than Verbal Reasoning Test gives you…”: Verbal Reasoning Test; Graduates and Early Professionals…; Comprehension, vocabulary in…
- Title attribute: Get more than Verbal Reasoning Test gives you, free
- Caption (and keep the same point in HTML text): Verbal Reasoning Test Comprehension, vocabulary in context and inference A check of one aptitude area A verbal-skill read for study and…
**V3 — Self-assessment checklist** (place after the section “Your result is one slice. See the whole picture, free.”)
- File: `verbal-reasoning-test-self-result-one-slice-see.webp` · 1600×1000 WebP under 200 KB
- Teaches: Verbal Reasoning Test Comprehension, vocabulary in context and inference A check of one aptitude area A…
- On-image text (about 25-40 words, shortened from the page; no new claims): Verbal Reasoning Test / Graduates and Early Professionals Assessment / Comprehension, vocabulary in context and inference / A check of one aptitude area / A verbal-skill read for study and work / ✓ Your role and domain guide, based on your interest evidence / ✓ Professional aptitude signals and your 8 intelligence signals
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Self-assessment checklist for “Your result is one slice. See the whole picture…”: Verbal Reasoning Test; Graduates and Early Professionals…; Comprehension…
- Title attribute: Your result is one slice. See the whole picture, free.
- Caption (and keep the same point in HTML text): Verbal Reasoning Test Comprehension, vocabulary in context and inference A check of one aptitude area A verbal-skill read for study and…
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/assessments/working-professionals-and-career-changers/

**H1:** Career Growth Strategy for Working Professionals & Career Changers  
**Type:** assessment · **Search priority:** P3 (0 clicks, 11 impressions) · **Rendered images:** 7 (3 generic category, 1 hero, 1 context, 2 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/assessments-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `assessments-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-assessment.webp` is shared by 52 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-assessment.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 94% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-assessment-map.webp` has no title attribute and no caption.
7. Context visual reuse: `context-assessment-map.webp` appears on 49 pages.
8. SVG diagrams present (`session-flow.svg`, `skill-portfolio-chain.svg`): preserve them; add alt/title/caption if missing.
9. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 89% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 91% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/assessments-at-a-glance.webp` | 92% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-assessment.webp` | 94% | eager/high | A student taking an online career assessment on a… | NO | NO |
| `bofu/session-flow.svg` | 95% | lazy | Five-stage career guidance session flow from… | NO | NO |
| `bofu/skill-portfolio-chain.svg` | 95% | lazy | Skill portfolio chain from strengths to financial… | NO | NO |
| `bofu/context-assessment-map.webp` | 96% | lazy | An assessment signal map showing how results… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the shared assessment hero; add title attribute and caption. The page-specific value must come from the explanatory visuals below.
3. CREATE 3 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `working-professionals-and-career-changers-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Assess your career pivot feasibility, income leverage potential, leadership readiness, and entrepreneurial…
- On-image text (about 25-40 words, shortened from the page; no new claims): Six Dimensions of Professional Growth / Assess Your Professional Trajectory / Where to Go Next / Free results help. Working professionals still need a sharper plan. / Working Professional Career Guidance Pricing
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career Growth Strategy for Working…”: Six Dimensions of Professional…; Assess Your Professional……
- Title attribute: At a glance: Career Growth Strategy for Working Professionals &…
- Caption (and keep the same point in HTML text): Assess your career pivot feasibility, income leverage potential, leadership readiness, and entrepreneurial fit.
**V2 — Framework cards** (place after the section “Six Dimensions of Professional Growth”)
- File: `working-professionals-and-career-changers-framework-six-dimensions-professional-growth.webp` · 1600×1000 WebP under 200 KB
- Teaches: 32 questions assess your readiness across career transitions, income optimization, leadership capability…
- On-image text (about 25-40 words, shortened from the page; no new claims): Pivot Feasibility / Income Leverage / Leadership Potential / Remote Work Readiness / AI Career Readiness
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Framework cards for “Six Dimensions of Professional Growth”: Pivot Feasibility; Income Leverage; Leadership Potential
- Title attribute: Six Dimensions of Professional Growth
- Caption (and keep the same point in HTML text): 32 questions assess your readiness across career transitions, income optimization, leadership capability, remote-work fit, AI-era career…
**V3 — Linear process chain or roadmap** (place after the section “Free results help. Working professionals still need a sharper plan.”)
- File: `working-professionals-and-career-changers-linear-free-results-help-working.webp` · 1600×1000 WebP under 200 KB
- Teaches: The assessment shows leverage and risk.
- On-image text (about 25-40 words, shortened from the page; no new claims): The assessment shows leverage and risk. / Updated career guidance is where pivot quality, positioning, compensation… / Avoid stagnation, bad pivots, and random upskilling that wastes money.
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Linear process chain or roadmap for “Free results help. Working professionals still…”: The assessment shows leverage and…; Updated career guidance is where……
- Title attribute: Free results help. Working professionals still need a sharper plan.
- Caption (and keep the same point in HTML text): The assessment shows leverage and risk.
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---
