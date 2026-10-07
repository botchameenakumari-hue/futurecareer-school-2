# Image audit — service/other pages: bofu-hero-graduates-college

27 pages, ordered by search priority. Submit one page section at a time with `docs/image-audit/00-READ-FIRST.md`.

### /services/career-counselling-and-career-guidance/career-counselling-for-students-with-backlogs/

**H1:** Career counselling for students with backlogs who still want a strong placement and earlier financial freedom  
**Type:** bofu · **Search priority:** P1 (2 clicks, 314 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-graduates-college.webp` is shared by 27 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-graduates-college.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 97% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-first-generation.webp` was chosen by the regex in `BofuContextVisual.astro`; a cleaner match for this keyword is `context-exam-pressure.webp`.
7. Context visual `context-first-generation.webp` has no title attribute and no caption.
8. Context visual reuse: `context-first-generation.webp` appears on 4 pages.
9. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 95% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 95% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 96% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-graduates-college.webp` | 97% | eager/high | A graduate with a laptop planning a skill roadmap… | NO | NO |
| `bofu/context-first-generation.webp` | 98% | lazy | A first-generation career visual showing context… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. CREATE a distinct hero for this page (it ranks, and `hero-graduates-college.webp` is shared by 27 pages): documentary photograph, natural light. Over-the-shoulder shot of a Class 12 or first-year medical aspirant, a family dining table in the evening. Props: stethoscope, NEET/NCERT books, a fee sheet, a notebook. File `career-counselling-for-students-with-backlogs-hero.webp` 1600×900, eager + fetchpriority high; alt/title/caption specific to “Career counselling for students with backlogs who still want a strong…”.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-for-students-with-backlogs-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: One or two pending subjects on your transcript do not have to decide your placement chances, your graduation…
- On-image text (about 25-40 words, shortened from the page; no new claims): How many backlogs is too many for placement? / University rules on backlogs you need to know / How companies actually treat an active backlog / Why this needs sharper guidance than generic placement advice / Should you disclose a backlog in an interview?
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career counselling for students with…”: How many backlogs is too many for…; University rules on…
- Title attribute: At a glance: Career counselling for students with backlogs who still…
- Caption (and keep the same point in HTML text): One or two pending subjects on your transcript do not have to decide your placement chances, your graduation date, or your income potential.
**V2 — Asymmetrical pros-and-cons comparison** (place after the section “How many backlogs is too many for placement?”)
- File: `career-counselling-for-students-with-backlogs-asymmetrical-many-backlogs-too-many.webp` · 1600×1000 WebP under 200 KB
- Teaches: The number that matters is not a rumor from a senior - it is the specific line your target recruiters and…
- On-image text (about 25-40 words, shortened from the page; no new claims): One or two backlogs, final year / Three to five backlogs, still mid-degree / More than five, or backlogs repeated across years
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “How many backlogs is too many for placement?”: One or two backlogs, final year; Three to five backlogs, still…; More…
- Title attribute: How many backlogs is too many for placement?
- Caption (and keep the same point in HTML text): The number that matters is not a rumor from a senior - it is the specific line your target recruiters and your own university use, checked…
**V3 — Linear process chain or roadmap** (place after the section “Your plan depends on where you are right now”)
- File: `career-counselling-for-students-with-backlogs-linear-plan-depends-where-right.webp` · 1600×1000 WebP under 200 KB
- Teaches: Whether you still have semesters left, placements are approaching, or your final semester results are close…
- On-image text (about 25-40 words, shortened from the page; no new claims): Mid-degree, real time on the clock / Final year, placements approaching / Final year, backlogs still unresolved
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Linear process chain or roadmap for “Your plan depends on where you are right now”: Mid-degree, real time on the clock; Final year, placements approaching…
- Title attribute: Your plan depends on where you are right now
- Caption (and keep the same point in HTML text): Whether you still have semesters left, placements are approaching, or your final semester results are close with subjects still pending…
**V4 — Linear process chain or roadmap** (place after the section “Career Counselling Plans for Students with Backlogs”)
- File: `career-counselling-for-students-with-backlogs-linear-career-counselling-plans-students.webp` · 1600×1000 WebP under 200 KB
- Teaches: Students Student path Student Career Counselling Practical student career counselling before the wrong path…
- On-image text (about 25-40 words, shortened from the page; no new claims): Student Career Counselling / Students Student path Student Career Counselling Practical student career… / Limited-time student offer ₹3000 ₹250 for the first 1-on-1 session A… / Book 1-on-1 Online across India Avoid Wrong streams, outdated degrees, and…
- Numbers: Limited-time student offer ₹3000 ₹250 for the first 1-on-1 session A low-friction first step before the wrong path costs more time and money. | Continuous career guidance Limited-time annual price ₹29000 ₹12000 Includes the 1-on-1 and up to 24 small-group sessions across the year.
- Alt: Linear process chain or roadmap for “Career Counselling Plans for Students with…”: Student Career Counselling; Students Student path Student…; Limited-time…
- Title attribute: Career Counselling Plans for Students with Backlogs
- Caption (and keep the same point in HTML text): Students Student path Student Career Counselling Practical student career counselling before the wrong path wastes years, money, and future…
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/career-counselling-after-graduation/

**H1:** Career counselling after graduation for the fork every degree ends at  
**Type:** bofu · **Search priority:** P2 (1 clicks, 15 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-graduates-college.webp` is shared by 27 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-graduates-college.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 97% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-graduate-pathway.webp` has no title attribute and no caption.
7. Context visual reuse: `context-graduate-pathway.webp` appears on 7 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 94% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 95% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 96% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-graduates-college.webp` | 97% | eager/high | A graduate with a laptop planning a skill roadmap… | NO | NO |
| `bofu/context-graduate-pathway.webp` | 98% | lazy | A graduate pathway from degree and capability… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. CREATE a distinct hero for this page (it ranks, and `hero-graduates-college.webp` is shared by 27 pages): documentary photograph, natural light. Top-down desk view with hands in frame of a final-year student or recent graduate, a home desk near a window in the evening. Props: notebooks, a laptop and printed course or job information. File `career-counselling-after-graduation-hero.webp` 1600×900, eager + fetchpriority high; alt/title/caption specific to “Career counselling after graduation for the fork every degree ends at”.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-after-graduation-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Career counselling after graduation is built for the moment the degree is finished and nothing is decided yet…
- On-image text (about 25-40 words, shortened from the page; no new claims): The specific pressure right after a degree ends / What career counselling after graduation should actually help you… / Four common defaults after graduation, and what each one actually… / What to check before booking career counselling after graduation / Generic post-graduation advice versus counselling built around your…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career counselling after graduation…”: The specific pressure right after…; What career counselling…
- Title attribute: At a glance: Career counselling after graduation for the fork every…
- Caption (and keep the same point in HTML text): Career counselling after graduation is built for the moment the degree is finished and nothing is decided yet — job search, a master's or…
**V2 — Decision tree** (place after the section “What career counselling after graduation should actually help you…”)
- File: `career-counselling-after-graduation-decision-career-counselling-after-graduation.webp` · 1600×1000 WebP under 200 KB
- Teaches: Direction for the fork itself, not a repeat of the degree or stream decision you already made years ago.
- On-image text (about 25-40 words, shortened from the page; no new claims): A real comparison across your actual options, not a default toward… / Turning vague "get a good job" or "do an MBA" pressure into your own… / Building one visible piece of proof if the degree alone is standing… / Replacing an open-ended "figuring it out" phase with one real… / What a job, a master's or MBA, and a competitive or government exam attempt would each… / Which of those options actually changes your eligibility, ceiling, or direction in a… / How to test a direction quickly before committing a year or more of income and time to it
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “What career counselling after graduation should…”: A real comparison across your…; Turning vague "get a good job" or…; Building one visible…
- Title attribute: What career counselling after graduation should actually help you…
- Caption (and keep the same point in HTML text): Direction for the fork itself, not a repeat of the degree or stream decision you already made years ago.
**V3 — Asymmetrical pros-and-cons comparison** (place after the section “Generic post-graduation advice versus counselling built around your…”)
- File: `career-counselling-after-graduation-asymmetrical-generic-post-graduation-advice.webp` · 1600×1000 WebP under 200 KB
- Teaches: The difference matters most in the months right after a degree ends, when a default gets picked quietly if no…
- On-image text (about 25-40 words, shortened from the page; no new claims): The difference matters most in the months right after a degree ends, when a… / Others Shift Future Career School Others Taking whatever job or course is…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “Generic post-graduation advice versus counselling…”: The difference matters most in…; Others Shift Future Career…
- Title attribute: Generic post-graduation advice versus counselling built around your…
- Caption (and keep the same point in HTML text): The difference matters most in the months right after a degree ends, when a default gets picked quietly if no one actually tests it against…
**V4 — Linear process chain or roadmap** (place after the section “Career Counselling Plans After Graduation”)
- File: `career-counselling-after-graduation-linear-career-counselling-plans-after.webp` · 1600×1000 WebP under 200 KB
- Teaches: Students Student path Student Career Counselling Practical student career counselling before the wrong path…
- On-image text (about 25-40 words, shortened from the page; no new claims): Student Career Counselling / Students Student path Student Career Counselling Practical student career… / Limited-time student offer ₹3000 ₹250 for the first 1-on-1 session A… / Book 1-on-1 Online across India Avoid Wrong streams, outdated degrees, and…
- Numbers: Limited-time student offer ₹3000 ₹250 for the first 1-on-1 session A low-friction first step before the wrong path costs more time and money. | Continuous career guidance Limited-time annual price ₹29000 ₹12000 Includes the 1-on-1 and up to 24 small-group sessions across the year.
- Alt: Linear process chain or roadmap for “Career Counselling Plans After Graduation”: Student Career Counselling; Students Student path Student…; Limited-time…
- Title attribute: Career Counselling Plans After Graduation
- Caption (and keep the same point in HTML text): Students Student path Student Career Counselling Practical student career counselling before the wrong path wastes years, money, and future…
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/career-counselling-for-engineering-students/

**H1:** Career counselling for engineering students before a branch, company, or skill decision gets expensive  
**Type:** bofu · **Search priority:** P2 (1 clicks, 9 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-graduates-college.webp` is shared by 27 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-graduates-college.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 97% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-engineering-tech.webp` has no title attribute and no caption.
7. Context visual reuse: `context-engineering-tech.webp` appears on 8 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 94% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 95% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 96% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-graduates-college.webp` | 97% | eager/high | A graduate with a laptop planning a skill roadmap… | NO | NO |
| `bofu/context-engineering-tech.webp` | 98% | lazy | An engineering career visual showing foundations… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. CREATE a distinct hero for this page (it ranks, and `hero-graduates-college.webp` is shared by 27 pages): documentary photograph, natural light. Top-down desk view with hands in frame of a Class 12 or first-year medical aspirant, a home study corner with natural window light. Props: stethoscope, NEET/NCERT books, a fee sheet, a notebook. File `career-counselling-for-engineering-students-hero.webp` 1600×900, eager + fetchpriority high; alt/title/caption specific to “Career counselling for engineering students before a branch, company…”.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-for-engineering-students-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Career counselling for engineering students should deal with the real decisions B.Tech students face: branch…
- On-image text (about 25-40 words, shortened from the page; no new claims): When career counselling for engineering students becomes useful / The engineering-specific decisions this should help you make / What changes when engineering career guidance is done right / What to check before paying for career counselling for engineering… / Career Counselling Plans for Engineering Students
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career counselling for engineering…”: When career counselling for…; The engineering-specific…; What…
- Title attribute: At a glance: Career counselling for engineering students before a…
- Caption (and keep the same point in HTML text): Career counselling for engineering students should deal with the real decisions B.Tech students face: branch or specialization regret, a…
**V2 — Chronological timeline** (place after the section “When career counselling for engineering students becomes useful”)
- File: `career-counselling-for-engineering-students-chronological-career-counselling-engineering-students.webp` · 1600×1000 WebP under 200 KB
- Teaches: It becomes useful right when a branch, company, or skill decision starts to feel expensive, because the…
- On-image text (about 25-40 words, shortened from the page; no new claims): The branch does not feel like the right fit anymore / Service company vs product company confusion / Uncertainty about whether engineering still pays off / Higher studies vs starting work
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “When career counselling for engineering students…”: The branch does not feel like the…; Service company vs product…; Uncertainty…
- Title attribute: When career counselling for engineering students becomes useful
- Caption (and keep the same point in HTML text): It becomes useful right when a branch, company, or skill decision starts to feel expensive, because the sooner the direction is right, the…
**V3 — Decision tree** (place after the section “The engineering-specific decisions this should help you make”)
- File: `career-counselling-for-engineering-students-decision-engineering-specific-decisions-should.webp` · 1600×1000 WebP under 200 KB
- Teaches: Not generic career advice.
- On-image text (about 25-40 words, shortened from the page; no new claims): Branch and specialization clarity / Service company vs product company / Higher studies vs jumping into work / A path beyond core technical work / Whether to go deeper into your current branch or build a skill stack that fits you better… / How to read your actual strengths against what your branch, college, and family… / What a realistic specialization path looks like without pretending you can start the…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “The engineering-specific decisions this should…”: Branch and specialization clarity; Service company vs product company; Higher studies vs…
- Title attribute: The engineering-specific decisions this should help you make
- Caption (and keep the same point in HTML text): Not generic career advice.
**V4 — Linear process chain or roadmap** (place after the section “Career Counselling Plans for Engineering Students”)
- File: `career-counselling-for-engineering-students-linear-career-counselling-plans-engineering.webp` · 1600×1000 WebP under 200 KB
- Teaches: Students Student path Student Career Counselling Practical student career counselling before the wrong path…
- On-image text (about 25-40 words, shortened from the page; no new claims): Student Career Counselling / Students Student path Student Career Counselling Practical student career… / Limited-time student offer ₹3000 ₹250 for the first 1-on-1 session A… / Book 1-on-1 Online across India Avoid Wrong streams, outdated degrees, and…
- Numbers: Limited-time student offer ₹3000 ₹250 for the first 1-on-1 session A low-friction first step before the wrong path costs more time and money. | Continuous career guidance Limited-time annual price ₹29000 ₹12000 Includes the 1-on-1 and up to 24 small-group sessions across the year.
- Alt: Linear process chain or roadmap for “Career Counselling Plans for Engineering Students”: Student Career Counselling; Students Student path Student……
- Title attribute: Career Counselling Plans for Engineering Students
- Caption (and keep the same point in HTML text): Students Student path Student Career Counselling Practical student career counselling before the wrong path wastes years, money, and future…
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/career-guidance-after-bcom/

**H1:** Career guidance after B.Com for the CA-vs-M.Com-vs-exam-vs-job fork  
**Type:** bofu · **Search priority:** P2 (1 clicks, 34 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-graduates-college.webp` is shared by 27 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-graduates-college.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 97% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-graduate-pathway.webp` has no title attribute and no caption.
7. Context visual reuse: `context-graduate-pathway.webp` appears on 7 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 94% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 95% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 96% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-graduates-college.webp` | 97% | eager/high | A graduate with a laptop planning a skill roadmap… | NO | NO |
| `bofu/context-graduate-pathway.webp` | 97% | lazy | A graduate pathway from degree and capability… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. CREATE a distinct hero for this page (it ranks, and `hero-graduates-college.webp` is shared by 27 pages): documentary photograph, natural light. Candid side profile near a window of a final-year student or recent graduate, a quiet corner of a library. Props: a ledger, calculator, balance sheet printouts, a laptop. File `career-guidance-after-bcom-hero.webp` 1600×900, eager + fetchpriority high; alt/title/caption specific to “Career guidance after B.Com for the CA-vs-M.Com-vs-exam-vs-job fork”.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-guidance-after-bcom-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Career guidance after B.Com is built for the specific fork commerce graduates actually face: continuing or…
- On-image text (about 25-40 words, shortened from the page; no new claims): The specific pressure B.Com graduates face after the degree / What career guidance after B.Com should actually help you decide / Four common paths after B.Com, and what each one actually costs / What to check before booking career guidance after B.Com / Generic post-B.Com advice versus guidance built around your actual…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career guidance after B.Com for the…”: The specific pressure B.Com…; What career guidance after…
- Title attribute: At a glance: Career guidance after B.Com for the…
- Caption (and keep the same point in HTML text): Career guidance after B.Com is built for the specific fork commerce graduates actually face: continuing or exiting a CA, CS, or CMA attempt…
**V2 — Decision tree** (place after the section “What career guidance after B.Com should actually help you decide”)
- File: `career-guidance-after-bcom-decision-career-guidance-after-com.webp` · 1600×1000 WebP under 200 KB
- Teaches: Direction for the B.Com-specific fork itself, not a repeat of generic post-graduation advice.
- On-image text (about 25-40 words, shortened from the page; no new claims): An honest read on whether another attempt is still worth it / Comparing three real options instead of defaulting to the most… / Testing genuine fit before committing months or years to one exam… / What actually strengthens a B.Com degree in the job market / How much time, coaching fees, and attempts have already gone in, weighed against a… / What exiting into a finance, accounting, or analytics role would look like using the… / How to separate genuine fit for the professional-course workload from sunk-cost thinking…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “What career guidance after B.Com should actually…”: An honest read on whether another…; Comparing three real options…; Testing genuine fit…
- Title attribute: What career guidance after B.Com should actually help you decide
- Caption (and keep the same point in HTML text): Direction for the B.Com-specific fork itself, not a repeat of generic post-graduation advice.
**V3 — Linear process chain or roadmap** (place after the section “Four common paths after B.Com, and what each one actually costs”)
- File: `career-guidance-after-bcom-linear-four-common-paths-after.webp` · 1600×1000 WebP under 200 KB
- Teaches: Any of these can be the right move.
- On-image text (about 25-40 words, shortened from the page; no new claims): Any of these can be the right move. / The problem is picking one without pricing it against the others first. / Continue CA, CS, or CMA Worth it when fit and progress genuinely support…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Linear process chain or roadmap for “Four common paths after B.Com, and what each one…”: Any of these can be the right…; The problem is picking one…; Continue…
- Title attribute: Four common paths after B.Com, and what each one actually costs
- Caption (and keep the same point in HTML text): Any of these can be the right move.
**V4 — Asymmetrical pros-and-cons comparison** (place after the section “Generic post-B.Com advice versus guidance built around your actual…”)
- File: `career-guidance-after-bcom-asymmetrical-generic-post-com-advice.webp` · 1600×1000 WebP under 200 KB
- Teaches: The difference matters most in the months right after B.Com, when a default gets picked quietly if no one…
- On-image text (about 25-40 words, shortened from the page; no new claims): The difference matters most in the months right after B.Com, when a default… / Others Shift Future Career School Others Defaulting to CA, M.Com, or a job…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “Generic post-B.Com advice versus guidance built…”: The difference matters most in…; Others Shift Future Career…
- Title attribute: Generic post-B.Com advice versus guidance built around your actual…
- Caption (and keep the same point in HTML text): The difference matters most in the months right after B.Com, when a default gets picked quietly if no one actually tests it against the…
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/career-guidance-after-engineering-without-placement/

**H1:** Career guidance after engineering without placement when there is still no offer in hand  
**Type:** bofu · **Search priority:** P2 (0 clicks, 38 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-graduates-college.webp` is shared by 27 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-graduates-college.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 97% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-engineering-tech.webp` has no title attribute and no caption.
7. Context visual reuse: `context-engineering-tech.webp` appears on 8 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 94% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 95% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 96% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-graduates-college.webp` | 97% | eager/high | A graduate with a laptop planning a skill roadmap… | NO | NO |
| `bofu/context-engineering-tech.webp` | 97% | lazy | An engineering career visual showing foundations… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. CREATE a distinct hero for this page (it ranks, and `hero-graduates-college.webp` is shared by 27 pages): documentary photograph, natural light. Close desk-level detail with a partly visible person of a final-year student or recent graduate, a quiet corner of a library. Props: a circuit board, graph paper, a laptop with CAD or code, a notebook. File `career-guidance-after-engineering-without-placement-hero.webp` 1600×900, eager + fetchpriority high; alt/title/caption specific to “Career guidance after engineering without placement when there is…”.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-guidance-after-engineering-without-placement-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Career guidance after engineering without placement should deal with exactly this moment: graduation is done…
- On-image text (about 25-40 words, shortened from the page; no new claims): When this becomes the decision that matters most / The decisions this should help you make right now / What changes when the job search after engineering is done right / What to check before paying for guidance at this stage / Questions graduates without a placement offer ask before choosing…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career guidance after engineering…”: When this becomes the decision…; The decisions this should help……
- Title attribute: At a glance: Career guidance after engineering without placement when…
- Caption (and keep the same point in HTML text): Career guidance after engineering without placement should deal with exactly this moment: graduation is done, the campus placement window…
**V2 — Chronological timeline** (place after the section “When this becomes the decision that matters most”)
- File: `career-guidance-after-engineering-without-placement-chronological-becomes-decision-matters-most.webp` · 1600×1000 WebP under 200 KB
- Teaches: These are the specific pressure points graduates without an offer are dealing with right now.
- On-image text (about 25-40 words, shortened from the page; no new claims): Graduation has passed and there is still no offer / Peers have offers and the comparisons have started at home / An offer has come in, but it feels like settling / Unsure what to actually apply for anymore
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “When this becomes the decision that matters most”: Graduation has passed and there…; Peers have offers and the…; An offer has come…
- Title attribute: When this becomes the decision that matters most
- Caption (and keep the same point in HTML text): These are the specific pressure points graduates without an offer are dealing with right now.
**V3 — Decision tree** (place after the section “The decisions this should help you make right now”)
- File: `career-guidance-after-engineering-without-placement-decision-decisions-should-help-make.webp` · 1600×1000 WebP under 200 KB
- Teaches: Not generic placement advice.
- On-image text (about 25-40 words, shortened from the page; no new claims): Off-campus job search, not another placement drive / Closing the resume gap without panic-applying / Referral routes vs cold off-campus applications / What to upskill first when time is limited / Whether a non-core or service-company role is a bridge or a trap
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “The decisions this should help you make right now”: Off-campus job search, not…; Closing the resume gap without…; Referral routes vs cold…
- Title attribute: The decisions this should help you make right now
- Caption (and keep the same point in HTML text): Not generic placement advice.
**V4 — Chronological timeline** (place after the section “What changes when the job search after engineering is done right”)
- File: `career-guidance-after-engineering-without-placement-chronological-changes-job-search-after.webp` · 1600×1000 WebP under 200 KB
- Teaches: This should feel different from another round of the same resume sent to another hundred portals.
- On-image text (about 25-40 words, shortened from the page; no new claims): This should feel different from another round of the same resume sent to… / Others Shift Future Career School Others Applying to every opening while…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “What changes when the job search after…”: This should feel different from…; Others Shift Future Career School…
- Title attribute: What changes when the job search after engineering is done right
- Caption (and keep the same point in HTML text): This should feel different from another round of the same resume sent to another hundred portals.
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/career-coaching-for-engineering-students/

**H1:** Career coaching for engineering students who already have a direction but keep losing momentum on it  
**Type:** bofu · **Search priority:** P3 (0 clicks, 12 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-graduates-college.webp` is shared by 27 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-graduates-college.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 97% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-engineering-tech.webp` has no title attribute and no caption.
7. Context visual reuse: `context-engineering-tech.webp` appears on 8 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 94% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 95% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 96% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-graduates-college.webp` | 97% | eager/high | A graduate with a laptop planning a skill roadmap… | NO | NO |
| `bofu/context-engineering-tech.webp` | 97% | lazy | An engineering career visual showing foundations… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-graduates-college.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-coaching-for-engineering-students-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Career coaching for engineering students is built for a different moment than a branch or offer decision: you…
- On-image text (about 25-40 words, shortened from the page; no new claims): When career coaching for engineering students becomes the right fit / How the coaching plan is built and kept on track / What changes when the follow-through is actually coached / What to check before paying for career coaching for engineering… / Career Coaching Plans for Engineering Students
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career coaching for engineering…”: When career coaching for…; How the coaching plan is built…; What…
- Title attribute: At a glance: Career coaching for engineering students who already…
- Caption (and keep the same point in HTML text): Career coaching for engineering students is built for a different moment than a branch or offer decision: you already have a rough…
**V2 — Chronological timeline** (place after the section “When career coaching for engineering students becomes the right fit”)
- File: `career-coaching-for-engineering-students-chronological-career-coaching-engineering-students.webp` · 1600×1000 WebP under 200 KB
- Teaches: It fits the moment right after a direction is roughly picked, when a stronger, higher-income skill portfolio…
- On-image text (about 25-40 words, shortened from the page; no new claims): You already know roughly where you want to go, but keep drifting / Skill-building keeps starting over instead of compounding / Placement season is closing in and there is no structured sequence / Nobody is actually tracking whether the plan is being executed
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “When career coaching for engineering students…”: You already know roughly where…; Skill-building keeps starting…; Placement season…
- Title attribute: When career coaching for engineering students becomes the right fit
- Caption (and keep the same point in HTML text): It fits the moment right after a direction is roughly picked, when a stronger, higher-income skill portfolio and earlier financial freedom…
**V3 — Linear process chain or roadmap** (place after the section “How the coaching plan is built and kept on track”)
- File: `career-coaching-for-engineering-students-linear-coaching-plan-built-kept.webp` · 1600×1000 WebP under 200 KB
- Teaches: Not a single verdict handed down once.
- On-image text (about 25-40 words, shortened from the page; no new claims): Lock the skill-building goal / Build the action plan / Stay accountable across the year / Carry it through placement prep
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Linear process chain or roadmap for “How the coaching plan is built and kept on track”: Lock the skill-building goal; Build the action plan; Stay accountable…
- Title attribute: How the coaching plan is built and kept on track
- Caption (and keep the same point in HTML text): Not a single verdict handed down once.
**V4 — Linear process chain or roadmap** (place after the section “Career Coaching Plans for Engineering Students”)
- File: `career-coaching-for-engineering-students-linear-career-coaching-plans-engineering.webp` · 1600×1000 WebP under 200 KB
- Teaches: Students Student path Student Career Coaching Practical student career coaching before the wrong path wastes…
- On-image text (about 25-40 words, shortened from the page; no new claims): Student Career Coaching / Students Student path Student Career Coaching Practical student career coaching… / Limited-time student offer ₹3000 ₹250 for the first 1-on-1 session A… / Book 1-on-1 Online across India Avoid Wrong streams, outdated degrees, and…
- Numbers: Limited-time student offer ₹3000 ₹250 for the first 1-on-1 session A low-friction first step before the wrong path costs more time and money. | Continuous career guidance Limited-time annual price ₹29000 ₹12000 Includes the 1-on-1 and up to 24 small-group sessions across the year.
- Alt: Linear process chain or roadmap for “Career Coaching Plans for Engineering Students”: Student Career Coaching; Students Student path Student…; Limited-time…
- Title attribute: Career Coaching Plans for Engineering Students
- Caption (and keep the same point in HTML text): Students Student path Student Career Coaching Practical student career coaching before the wrong path wastes years, money, and future…
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/career-coaching-for-freshers/

**H1:** Career coaching for freshers when the direction is clear but the job search keeps stalling  
**Type:** bofu · **Search priority:** P3 (0 clicks, 0 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-graduates-college.webp` is shared by 27 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-graduates-college.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 97% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-graduate-pathway.webp` has no title attribute and no caption.
7. Context visual reuse: `context-graduate-pathway.webp` appears on 7 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 94% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 95% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 96% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-graduates-college.webp` | 97% | eager/high | A graduate with a laptop planning a skill roadmap… | NO | NO |
| `bofu/context-graduate-pathway.webp` | 97% | lazy | A graduate pathway from degree and capability… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-graduates-college.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-coaching-for-freshers-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Career coaching for freshers should do more than tell you which offer to accept and move on.
- On-image text (about 25-40 words, shortened from the page; no new claims): What career coaching for freshers actually means / What changes when fresher coaching includes real accountability / The specific problems career coaching for freshers solves / What to check before paying for career coaching as a fresher / Questions freshers ask before choosing career coaching
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career coaching for freshers when…”: What career coaching for freshers…; What changes when fresher……
- Title attribute: At a glance: Career coaching for freshers when the direction is clear…
- Caption (and keep the same point in HTML text): Career coaching for freshers should do more than tell you which offer to accept and move on.
**V2 — Decision tree by situation** (place after the section “What career coaching for freshers actually means”)
- File: `career-coaching-for-freshers-decision-career-coaching-freshers-actually.webp` · 1600×1000 WebP under 200 KB
- Teaches: Career counselling for freshers tends to end at a decision — which offer, which company type.
- On-image text (about 25-40 words, shortened from the page; no new claims): A decision made / A search, not yet running / A plan under ongoing accountability
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree by situation for “What career coaching for freshers actually means”: A decision made; A search, not yet running; A plan under ongoing…
- Title attribute: What career coaching for freshers actually means
- Caption (and keep the same point in HTML text): Career counselling for freshers tends to end at a decision — which offer, which company type.
**V3 — Chronological timeline** (place after the section “What changes when fresher coaching includes real accountability”)
- File: `career-coaching-for-freshers-chronological-changes-fresher-coaching-includes.webp` · 1600×1000 WebP under 200 KB
- Teaches: Career coaching for freshers should feel different from a single verdict on an offer, a motivational chat, or…
- On-image text (about 25-40 words, shortened from the page; no new claims): Career coaching for freshers should feel different from a single verdict on an…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “What changes when fresher coaching includes real…”: Career coaching for freshers…
- Title attribute: What changes when fresher coaching includes real accountability
- Caption (and keep the same point in HTML text): Career coaching for freshers should feel different from a single verdict on an offer, a motivational chat, or generic advice to 'just keep…
**V4 — Decision tree by situation** (place after the section “The specific problems career coaching for freshers solves”)
- File: `career-coaching-for-freshers-decision-specific-problems-career-coaching.webp` · 1600×1000 WebP under 200 KB
- Teaches: Not the moment of choosing an offer or a company type — the harder part that comes after, where a good…
- On-image text (about 25-40 words, shortened from the page; no new claims): You are applying every week, but the search has no system behind it / You are getting some interviews, but preparation and follow-up are… / An offer converts to a start date, but probation and early… / A batch of applications gets sent out, then the week gets busy and the follow-up… / The gap is rarely a lack of effort in one burst — it is the absence of a repeatable… / A job search without a return date to review it tends to stall the same way any plan does… / Each new round resets to scratch — a different mock question, a different resume angle…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree by situation for “The specific problems career coaching for…”: You are applying every week, but…; You are getting some interviews…; An offer…
- Title attribute: The specific problems career coaching for freshers solves
- Caption (and keep the same point in HTML text): Not the moment of choosing an offer or a company type — the harder part that comes after, where a good decision quietly stalls without a…
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/career-coaching-for-science-students/

**H1:** Career coaching for science students who already have a direction but keep losing momentum on it  
**Type:** bofu · **Search priority:** P3 (0 clicks, 3 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-graduates-college.webp` is shared by 27 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-graduates-college.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 97% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-student-parent-map.webp` has no title attribute and no caption.
7. Context visual reuse: `context-student-parent-map.webp` appears on 15 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 94% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 95% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 96% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-graduates-college.webp` | 97% | eager/high | A graduate with a laptop planning a skill roadmap… | NO | NO |
| `bofu/context-student-parent-map.webp` | 97% | lazy | A student and parent career decision map from… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-graduates-college.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-coaching-for-science-students-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Science career coaching is built for a different moment than a specialisation or exam-attempt decision: you…
- On-image text (about 25-40 words, shortened from the page; no new claims): What changes when the follow-through is actually coached / When career coaching for science students becomes the right fit / What to check before paying for career coaching for science students / How the coaching plan is built and kept on track / Career Coaching Plans for Science Students
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career coaching for science students…”: What changes when the…; When career coaching for science……
- Title attribute: At a glance: Career coaching for science students who already have a…
- Caption (and keep the same point in HTML text): Science career coaching is built for a different moment than a specialisation or exam-attempt decision: you already have a rough direction…
**V2 — Chronological timeline** (place after the section “When career coaching for science students becomes the right fit”)
- File: `career-coaching-for-science-students-chronological-career-coaching-science-students.webp` · 1600×1000 WebP under 200 KB
- Teaches: It fits the moment right after a direction is roughly picked, when building a high-value skill portfolio and…
- On-image text (about 25-40 words, shortened from the page; no new claims): You already know roughly where a science degree should take you, but… / Online certificates and short courses keep piling up without forming… / CSIR-NET, GATE, ICAR/DBT-JRF, or campus placements are approaching… / A self-made revision or research plan quietly gets abandoned by week…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “When career coaching for science students becomes…”: You already know roughly where a…; Online certificates and short…; CSIR-NET…
- Title attribute: When career coaching for science students becomes the right fit
- Caption (and keep the same point in HTML text): It fits the moment right after a direction is roughly picked, when building a high-value skill portfolio and clearing the next filter — an…
**V3 — Linear process chain or roadmap** (place after the section “How the coaching plan is built and kept on track”)
- File: `career-coaching-for-science-students-linear-coaching-plan-built-kept.webp` · 1600×1000 WebP under 200 KB
- Teaches: Not a single verdict handed down once.
- On-image text (about 25-40 words, shortened from the page; no new claims): Lock the specific science-career goal / Build the action plan / Stay accountable across the year / Carry it through exam or placement prep
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Linear process chain or roadmap for “How the coaching plan is built and kept on track”: Lock the specific science-career…; Build the action plan; Stay…
- Title attribute: How the coaching plan is built and kept on track
- Caption (and keep the same point in HTML text): Not a single verdict handed down once.
**V4 — Linear process chain or roadmap** (place after the section “Career Coaching Plans for Science Students”)
- File: `career-coaching-for-science-students-linear-career-coaching-plans-science.webp` · 1600×1000 WebP under 200 KB
- Teaches: Students Student path Student Career Coaching Practical student career coaching before the wrong path wastes…
- On-image text (about 25-40 words, shortened from the page; no new claims): Student Career Coaching / Students Student path Student Career Coaching Practical student career coaching… / Limited-time student offer ₹3000 ₹250 for the first 1-on-1 session A… / Book 1-on-1 Online across India Avoid Wrong streams, outdated degrees, and…
- Numbers: Limited-time student offer ₹3000 ₹250 for the first 1-on-1 session A low-friction first step before the wrong path costs more time and money. | Continuous career guidance Limited-time annual price ₹29000 ₹12000 Includes the 1-on-1 and up to 24 small-group sessions across the year.
- Alt: Linear process chain or roadmap for “Career Coaching Plans for Science Students”: Student Career Coaching; Students Student path Student…; Limited-time student…
- Title attribute: Career Coaching Plans for Science Students
- Caption (and keep the same point in HTML text): Students Student path Student Career Coaching Practical student career coaching before the wrong path wastes years, money, and future…
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/career-counselling-after-engineering/

**H1:** Career counselling after engineering for the direction that comes after the degree itself  
**Type:** bofu · **Search priority:** P3 (0 clicks, 11 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-graduates-college.webp` is shared by 27 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-graduates-college.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 97% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-engineering-tech.webp` has no title attribute and no caption.
7. Context visual reuse: `context-engineering-tech.webp` appears on 8 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 94% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 95% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 96% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-graduates-college.webp` | 97% | eager/high | A graduate with a laptop planning a skill roadmap… | NO | NO |
| `bofu/context-engineering-tech.webp` | 97% | lazy | An engineering career visual showing foundations… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-graduates-college.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-after-engineering-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Career counselling after engineering should deal with the question that comes after the degree is done…
- On-image text (about 25-40 words, shortened from the page; no new claims): When this becomes the decision that matters most / The decisions this should help you make right now / What changes when direction after engineering is done right / What to check before paying for guidance at this stage / Questions engineering graduates ask before choosing career counselling
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career counselling after engineering…”: When this becomes the decision…; The decisions this should…
- Title attribute: At a glance: Career counselling after engineering for the direction…
- Caption (and keep the same point in HTML text): Career counselling after engineering should deal with the question that comes after the degree is done, whether an offer is already in hand…
**V2 — Chronological timeline** (place after the section “When this becomes the decision that matters most”)
- File: `career-counselling-after-engineering-chronological-becomes-decision-matters-most.webp` · 1600×1000 WebP under 200 KB
- Teaches: These are the real pressure points once an engineering degree is behind you.
- On-image text (about 25-40 words, shortened from the page; no new claims): The degree is done, and "what next" has no obvious answer / Placed, but still unsure if core engineering is really the plan / Higher studies feels tempting now that the pressure is briefly gone / Family and peers already expect the obvious next move
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “When this becomes the decision that matters most”: The degree is done, and "what…; Placed, but still unsure if core…; Higher…
- Title attribute: When this becomes the decision that matters most
- Caption (and keep the same point in HTML text): These are the real pressure points once an engineering degree is behind you.
**V3 — Decision tree** (place after the section “The decisions this should help you make right now”)
- File: `career-counselling-after-engineering-decision-decisions-should-help-make.webp` · 1600×1000 WebP under 200 KB
- Teaches: Not generic placement advice, and not built only around whether an offer exists.
- On-image text (about 25-40 words, shortened from the page; no new claims): Direction after the degree, independent of placement status / Staying in core engineering or pivoting once the degree is behind you / Higher studies vs working now / Making peace with, or correcting, the branch and college choice / What "after engineering" should actually mean for you specifically, instead of copying… / How to separate the placement outcome from the deeper direction question, since an offer… / What a realistic first-year plan looks like whether you are starting a job, still…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “The decisions this should help you make right now”: Direction after the degree…; Staying in core engineering or…; Higher studies vs working…
- Title attribute: The decisions this should help you make right now
- Caption (and keep the same point in HTML text): Not generic placement advice, and not built only around whether an offer exists.
**V4 — Chronological timeline** (place after the section “What changes when direction after engineering is done right”)
- File: `career-counselling-after-engineering-chronological-changes-direction-after-engineering.webp` · 1600×1000 WebP under 200 KB
- Teaches: This should feel different from following whatever the placement cycle, a relative, or a WhatsApp group…
- On-image text (about 25-40 words, shortened from the page; no new claims): This should feel different from following whatever the placement cycle, a… / Others Shift Future Career School Others Defaulting to the same job route as…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “What changes when direction after engineering is…”: This should feel different from…; Others Shift Future Career School…
- Title attribute: What changes when direction after engineering is done right
- Caption (and keep the same point in HTML text): This should feel different from following whatever the placement cycle, a relative, or a WhatsApp group already decided for you.
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/career-counselling-for-bds-graduates/

**H1:** Career counselling for BDS graduates when NEET-MDS, practice setup, or an abroad route feels like the real decision  
**Type:** bofu · **Search priority:** P3 (0 clicks, 11 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-graduates-college.webp` is shared by 27 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-graduates-college.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 97% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-healthcare-aspirant.webp` has no title attribute and no caption.
7. Context visual reuse: `context-healthcare-aspirant.webp` appears on 3 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 93% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 94% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 96% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-graduates-college.webp` | 97% | eager/high | A graduate with a laptop planning a skill roadmap… | NO | NO |
| `bofu/context-healthcare-aspirant.webp` | 97% | lazy | A healthcare career visual showing patients… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-graduates-college.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-for-bds-graduates-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Career counselling for BDS graduates should deal with the decisions your degree actually left you with…
- On-image text (about 25-40 words, shortened from the page; no new claims): When career counselling for BDS graduates becomes useful / The BDS-specific decisions this should help you make / What changes when BDS-graduate career counselling is done right / What to check before paying for career counselling for BDS graduates / Questions BDS graduates ask before choosing career counselling
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career counselling for BDS graduates…”: When career counselling for BDS…; The BDS-specific decisions…
- Title attribute: At a glance: Career counselling for BDS graduates when NEET-MDS…
- Caption (and keep the same point in HTML text): Career counselling for BDS graduates should deal with the decisions your degree actually left you with: whether to keep attempting NEET-MDS…
**V2 — Chronological timeline** (place after the section “When career counselling for BDS graduates becomes useful”)
- File: `career-counselling-for-bds-graduates-chronological-career-counselling-bds-graduates.webp` · 1600×1000 WebP under 200 KB
- Teaches: It becomes useful right as the NEET-MDS, practice-setup, abroad-route, or pivot decision starts to feel real…
- On-image text (about 25-40 words, shortened from the page; no new claims): Deciding whether to keep attempting NEET-MDS or move on from it / Private practice, clinic ownership, or joining an existing clinic… / Weighing a US, UK, Australia, or Canada dental-licensing exam route / Considering a non-clinical healthcare, dental-industry, or healthtech…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “When career counselling for BDS graduates becomes…”: Deciding whether to keep…; Private practice, clinic…; Weighing a US, UK…
- Title attribute: When career counselling for BDS graduates becomes useful
- Caption (and keep the same point in HTML text): It becomes useful right as the NEET-MDS, practice-setup, abroad-route, or pivot decision starts to feel real, because the sooner your…
**V3 — Decision tree** (place after the section “The BDS-specific decisions this should help you make”)
- File: `career-counselling-for-bds-graduates-decision-bds-specific-decisions-should.webp` · 1600×1000 WebP under 200 KB
- Teaches: Not generic postgraduate career advice.
- On-image text (about 25-40 words, shortened from the page; no new claims): Whether to keep attempting NEET-MDS, and for how long / Building a genuine income plan around clinical practice / Mapping the real cost, timeline, and requirements of an abroad… / Evaluating a genuine non-clinical or dental-industry pivot / An honest look at your realistic chances given attempt history, preparation time, and the… / What a genuine backup plan looks like if a government MDS seat does not come through in a… / Whether a private MDS seat, given its cost, is worth it for your specific specialization…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “The BDS-specific decisions this should help you…”: Whether to keep attempting…; Building a genuine income plan…; Mapping the real cost…
- Title attribute: The BDS-specific decisions this should help you make
- Caption (and keep the same point in HTML text): Not generic postgraduate career advice.
**V4 — Chronological timeline** (place after the section “What changes when BDS-graduate career counselling is done right”)
- File: `career-counselling-for-bds-graduates-chronological-changes-bds-graduate-career.webp` · 1600×1000 WebP under 200 KB
- Teaches: Career counselling for BDS graduates should feel different from a generic postgraduate pep talk or a…
- On-image text (about 25-40 words, shortened from the page; no new claims): Career counselling for BDS graduates should feel different from a generic… / Others Shift Future Career School Others Treating clinical practice as the only…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “What changes when BDS-graduate career counselling…”: Career counselling for BDS…; Others Shift Future Career School…
- Title attribute: What changes when BDS-graduate career counselling is done right
- Caption (and keep the same point in HTML text): Career counselling for BDS graduates should feel different from a generic postgraduate pep talk or a coaching-centre script pushing…
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/career-counselling-for-college-students/

**H1:** Career counselling for college students who want the degree years to build proof, not just a certificate  
**Type:** bofu · **Search priority:** P3 (0 clicks, 4 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-graduates-college.webp` is shared by 27 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-graduates-college.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 97% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-student-parent-map.webp` has no title attribute and no caption.
7. Context visual reuse: `context-student-parent-map.webp` appears on 15 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 94% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 95% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 96% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-graduates-college.webp` | 97% | eager/high | A graduate with a laptop planning a skill roadmap… | NO | NO |
| `bofu/context-student-parent-map.webp` | 98% | lazy | A student and parent career decision map from… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-graduates-college.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-for-college-students-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Career counselling for college students is built for the decisions that come up while you are still enrolled…
- On-image text (about 25-40 words, shortened from the page; no new claims): The decisions this is built to resolve while you are still in college / The years left in your degree are still building your income ceiling… / What career counselling for college students should actually help you… / The same degree looks different depending on which year you are… / What to check before booking career counselling as a college student
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career counselling for college…”: The decisions this is built to…; The years left in your degree are……
- Title attribute: At a glance: Career counselling for college students who want the…
- Caption (and keep the same point in HTML text): Career counselling for college students is built for the decisions that come up while you are still enrolled — a specialization or elective…
**V2 — Decision tree** (place after the section “What career counselling for college students should actually help you…”)
- File: `career-counselling-for-college-students-decision-career-counselling-college-students.webp` · 1600×1000 WebP under 200 KB
- Teaches: Direction for the exact fork you are standing at inside your degree, not a repeat of the choice you already…
- On-image text (about 25-40 words, shortened from the page; no new claims): A specialization or elective choice grounded in the real work, not… / Turning an internship — or the lack of one — into real leverage / A real comparison between a job, a master's, and an MBA — not a… / One visible proof asset built while you are still enrolled / What each specialization or elective track actually asks you to do day-to-day, beyond the… / How placement outcomes for each track compare where that data is genuinely available… / How to test a direction quickly — one short project, one conversation with someone doing…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “What career counselling for college students…”: A specialization or elective…; Turning an internship — or the…; A real comparison between a…
- Title attribute: What career counselling for college students should actually help you…
- Caption (and keep the same point in HTML text): Direction for the exact fork you are standing at inside your degree, not a repeat of the choice you already made when you picked this…
**V3 — Asymmetrical pros-and-cons comparison** (place after the section “The same degree looks different depending on which year you are…”)
- File: `career-counselling-for-college-students-asymmetrical-same-degree-looks-different.webp` · 1600×1000 WebP under 200 KB
- Teaches: Early years The live question is fit — whether the specialization or elective track you are leaning toward…
- On-image text (about 25-40 words, shortened from the page; no new claims): Early years The live question is fit — whether the specialization or elective… / Middle years The live question is proof — turning an internship, a class… / Final year The live question is direction — job, master's, or MBA, decided…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “The same degree looks different depending on…”: Early years The live question is…; Middle years The live question…
- Title attribute: The same degree looks different depending on which year you are…
- Caption (and keep the same point in HTML text): Early years The live question is fit — whether the specialization or elective track you are leaning toward matches the real day-to-day…
**V4 — Linear process chain or roadmap** (place after the section “Career Counselling Plans for College Students”)
- File: `career-counselling-for-college-students-linear-career-counselling-plans-college.webp` · 1600×1000 WebP under 200 KB
- Teaches: Students Student path Student Career Counselling Practical student career counselling before the wrong path…
- On-image text (about 25-40 words, shortened from the page; no new claims): Student Career Counselling / Students Student path Student Career Counselling Practical student career… / Limited-time student offer ₹3000 ₹250 for the first 1-on-1 session A… / Book 1-on-1 Online across India Avoid Wrong streams, outdated degrees, and…
- Numbers: Limited-time student offer ₹3000 ₹250 for the first 1-on-1 session A low-friction first step before the wrong path costs more time and money. | Continuous career guidance Limited-time annual price ₹29000 ₹12000 Includes the 1-on-1 and up to 24 small-group sessions across the year.
- Alt: Linear process chain or roadmap for “Career Counselling Plans for College Students”: Student Career Counselling; Students Student path Student…; Limited-time…
- Title attribute: Career Counselling Plans for College Students
- Caption (and keep the same point in HTML text): Students Student path Student Career Counselling Practical student career counselling before the wrong path wastes years, money, and future…
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/career-counselling-for-dropouts/

**H1:** Career counselling for dropouts - a real next step, not a verdict on your future  
**Type:** bofu · **Search priority:** P3 (0 clicks, 4 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-graduates-college.webp` is shared by 27 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-graduates-college.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 97% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-exam-pressure.webp` has no title attribute and no caption.
7. Context visual reuse: `context-exam-pressure.webp` appears on 2 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 94% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 95% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 96% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-graduates-college.webp` | 97% | eager/high | A graduate with a laptop planning a skill roadmap… | NO | NO |
| `bofu/context-exam-pressure.webp` | 97% | lazy | A career setback visual showing attempts, time… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-graduates-college.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-for-dropouts-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Leaving a school, college, or course partway usually happens for real reasons - money running out, a family…
- On-image text (about 25-40 words, shortened from the page; no new claims): Why courses get left unfinished - and why that is not the whole story / Why this needs sharper guidance than a general pep talk / Reframing the story for employers, without pretending it did not… / Having the conversation at home without it turning into a bigger fight / What to check before paying for counselling after dropping out
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career counselling for dropouts - a…”: Why courses get left unfinished …; Why this needs sharper…
- Title attribute: At a glance: Career counselling for dropouts - a real next step, not…
- Caption (and keep the same point in HTML text): Leaving a school, college, or course partway usually happens for real reasons - money running out, a family crisis, or a path that stopped…
**V2 — Framework cards** (place after the section “Why courses get left unfinished - and why that is not the whole story”)
- File: `career-counselling-for-dropouts-framework-courses-get-left-unfinished.webp` · 1600×1000 WebP under 200 KB
- Teaches: Most dropouts happen for specific, understandable reasons.
- On-image text (about 25-40 words, shortened from the page; no new claims): Money ran out before the course did / A crisis at home pulled attention away / The course or stream stopped making sense / Repeated failure wore down the will to continue
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Framework cards for “Why courses get left unfinished - and why that is…”: Money ran out before the course…; A crisis at home pulled attention…; The course or…
- Title attribute: Why courses get left unfinished - and why that is not the whole story
- Caption (and keep the same point in HTML text): Most dropouts happen for specific, understandable reasons.
**V3 — Linear process chain or roadmap** (place after the section “Three real routes forward, depending on your situation”)
- File: `career-counselling-for-dropouts-linear-three-real-routes-forward.webp` · 1600×1000 WebP under 200 KB
- Teaches: Whether the course can still be completed, needs a flexible reroute, or is better left behind for a…
- On-image text (about 25-40 words, shortened from the page; no new claims): Go back and complete the same path / Finish it through a flexible route instead / Build a skill-first path without going back at all
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Linear process chain or roadmap for “Three real routes forward, depending on your…”: Go back and complete the same path; Finish it through a flexible…; Build a…
- Title attribute: Three real routes forward, depending on your situation
- Caption (and keep the same point in HTML text): Whether the course can still be completed, needs a flexible reroute, or is better left behind for a skill-first path - a specific route…
**V4 — Self-assessment checklist** (place after the section “Common questions before starting”)
- File: `career-counselling-for-dropouts-self-common-questions-before-starting.webp` · 1600×1000 WebP under 200 KB
- Teaches: 01 What should career counselling for dropouts actually help with?
- On-image text (about 25-40 words, shortened from the page; no new claims): 01 What should career counselling for dropouts actually help with? / It should help you look honestly at three real routes - going back to complete… / 02 Does leaving a course partway close off strong career options permanently?
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Self-assessment checklist for “Common questions before starting”: 01 What should career counselling…; It should help you look honestly…; 02 Does leaving a…
- Title attribute: Common questions before starting
- Caption (and keep the same point in HTML text): 01 What should career counselling for dropouts actually help with?
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/career-counselling-for-first-generation-graduates/

**H1:** Career counselling for first-generation graduates figuring out the corporate world with no one at home who's done it before  
**Type:** bofu · **Search priority:** P3 (0 clicks, 0 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-graduates-college.webp` is shared by 27 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-graduates-college.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 97% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-first-generation.webp` has no title attribute and no caption.
7. Context visual reuse: `context-first-generation.webp` appears on 4 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 94% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 95% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 96% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-graduates-college.webp` | 97% | eager/high | A graduate with a laptop planning a skill roadmap… | NO | NO |
| `bofu/context-first-generation.webp` | 97% | lazy | A first-generation career visual showing context… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-graduates-college.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-for-first-generation-graduates-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Being the first in your family to finish a degree already took real discipline.
- On-image text (about 25-40 words, shortened from the page; no new claims): The decisions you're navigating without a family precedent / When this becomes useful / What changes with counselling built for this exact gap / What to check before choosing counselling as a first-generation… / Questions first-generation graduates ask before choosing career…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career counselling for…”: The decisions you're navigating…; When this becomes useful; What changes…
- Title attribute: At a glance: Career counselling for first-generation graduates…
- Caption (and keep the same point in HTML text): Being the first in your family to finish a degree already took real discipline.
**V2 — Framework cards** (place after the section “The decisions you're navigating without a family precedent”)
- File: `career-counselling-for-first-generation-graduates-framework-decisions-navigating-without-family.webp` · 1600×1000 WebP under 200 KB
- Teaches: These are not vague worries.
- On-image text (about 25-40 words, shortened from the page; no new claims): Turning "get a good job" into an actual plan / Reading workplace norms nobody explained at home / Building a network that does not exist yet / Deciding what to build in year one / Presenting your background as an asset, not a gap
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Framework cards for “The decisions you're navigating without a family…”: Turning "get a good job" into an…; Reading workplace norms nobody…; Building a network…
- Title attribute: The decisions you're navigating without a family precedent
- Caption (and keep the same point in HTML text): These are not vague worries.
**V3 — Chronological timeline** (place after the section “When this becomes useful”)
- File: `career-counselling-for-first-generation-graduates-chronological-becomes-useful.webp` · 1600×1000 WebP under 200 KB
- Teaches: This becomes useful once real decisions are on the table, not while you are still casually reading advice…
- On-image text (about 25-40 words, shortened from the page; no new claims): You are the first in your family to finish a degree / You are prepping for interviews and unsure what "professional"… / You have an offer and no one at home has negotiated one before / You feel like your background is something to explain away in…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “When this becomes useful”: You are the first in your family…; You are prepping for interviews…; You have an offer and no one at…
- Title attribute: When this becomes useful
- Caption (and keep the same point in HTML text): This becomes useful once real decisions are on the table, not while you are still casually reading advice online.
**V4 — Self-assessment checklist** (place after the section “Questions first-generation graduates ask before choosing career…”)
- File: `career-counselling-for-first-generation-graduates-self-questions-first-generation-graduates.webp` · 1600×1000 WebP under 200 KB
- Teaches: 01 I'm the first person in my family to graduate.
- On-image text (about 25-40 words, shortened from the page; no new claims): 01 I'm the first person in my family to graduate. / Where do I even start with a career plan? / Start by separating what your family wants for you (usually stability and…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Self-assessment checklist for “Questions first-generation graduates ask before…”: 01 I'm the first person in my…; Where do I even start with a…; Start by…
- Title attribute: Questions first-generation graduates ask before choosing career…
- Caption (and keep the same point in HTML text): 01 I'm the first person in my family to graduate.
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/career-counselling-for-freshers/

**H1:** Career counselling for freshers before the first job decision sets your direction  
**Type:** bofu · **Search priority:** P3 (0 clicks, 0 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-graduates-college.webp` is shared by 27 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-graduates-college.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 97% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-graduate-pathway.webp` has no title attribute and no caption.
7. Context visual reuse: `context-graduate-pathway.webp` appears on 7 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 94% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 95% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 96% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-graduates-college.webp` | 97% | eager/high | A graduate with a laptop planning a skill roadmap… | NO | NO |
| `bofu/context-graduate-pathway.webp` | 97% | lazy | A graduate pathway from degree and capability… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-graduates-college.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-for-freshers-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Career counselling for freshers should help with the decisions that actually shape a first career: which…
- On-image text (about 25-40 words, shortened from the page; no new claims): The decisions that shape your first real career move / When career counselling for freshers becomes useful / What changes with stronger fresher career counselling / What to check before paying for career counselling as a fresher / Questions freshers ask before choosing career counselling
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career counselling for freshers…”: The decisions that shape your…; When career counselling for…; What…
- Title attribute: At a glance: Career counselling for freshers before the first job…
- Caption (and keep the same point in HTML text): Career counselling for freshers should help with the decisions that actually shape a first career: which offer to accept, service company…
**V2 — Framework cards** (place after the section “The decisions that shape your first real career move”)
- File: `career-counselling-for-freshers-framework-decisions-shape-first-real.webp` · 1600×1000 WebP under 200 KB
- Teaches: These are not abstract career questions.
- On-image text (about 25-40 words, shortened from the page; no new claims): Evaluating your first job offer / Service company or product company / What to build in year one / If placement or your first job did not work out / Building a resume and portfolio from zero experience
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Framework cards for “The decisions that shape your first real career…”: Evaluating your first job offer; Service company or product company; What to build in…
- Title attribute: The decisions that shape your first real career move
- Caption (and keep the same point in HTML text): These are not abstract career questions.
**V3 — Chronological timeline** (place after the section “When career counselling for freshers becomes useful”)
- File: `career-counselling-for-freshers-chronological-career-counselling-freshers-becomes.webp` · 1600×1000 WebP under 200 KB
- Teaches: This becomes useful once a real decision is on the table, not while you are still casually browsing career…
- On-image text (about 25-40 words, shortened from the page; no new claims): You have more than one offer / The job search has taken longer than expected / The first job already feels wrong / You are choosing your next skill investment
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “When career counselling for freshers becomes…”: You have more than one offer; The job search has taken longer…; The first job…
- Title attribute: When career counselling for freshers becomes useful
- Caption (and keep the same point in HTML text): This becomes useful once a real decision is on the table, not while you are still casually browsing career advice.
**V4 — Self-assessment checklist** (place after the section “Questions freshers ask before choosing career counselling”)
- File: `career-counselling-for-freshers-self-questions-freshers-ask-before.webp` · 1600×1000 WebP under 200 KB
- Teaches: 01 I have two job offers and I am not sure which one is actually better long-term.
- On-image text (about 25-40 words, shortened from the page; no new claims): 01 I have two job offers and I am not sure which one is actually better… / How do I decide? / Start by separating pay from learning curve, role scope, team quality, and how…
- Numbers: It depends on the specific project, the skills you will actually get to use, and what you plan to do with your first 12 to 18 months there.
- Alt: Self-assessment checklist for “Questions freshers ask before choosing career…”: 01 I have two job offers and I am…; How do I decide?; Start by separating pay…
- Title attribute: Questions freshers ask before choosing career counselling
- Caption (and keep the same point in HTML text): 01 I have two job offers and I am not sure which one is actually better long-term.
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/career-counselling-for-government-exam-aspirants/

**H1:** Career coaching for government exam aspirants deciding which exams — and which future — to bet on  
**Type:** bofu · **Search priority:** P3 (0 clicks, 21 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-graduates-college.webp` is shared by 27 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-graduates-college.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 97% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-law-policy.webp` was chosen by the regex in `BofuContextVisual.astro`; a cleaner match for this keyword is `context-exam-pressure.webp`.
7. Context visual `context-law-policy.webp` has no title attribute and no caption.
8. Context visual reuse: `context-law-policy.webp` appears on 3 pages.
9. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 95% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 96% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 96% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-graduates-college.webp` | 97% | eager/high | A graduate with a laptop planning a skill roadmap… | NO | NO |
| `bofu/context-law-policy.webp` | 98% | lazy | A law and policy career visual showing impact… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-graduates-college.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-for-government-exam-aspirants-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Career coaching for government exam aspirants should help with the decisions a single-exam view misses: which…
- On-image text (about 25-40 words, shortened from the page; no new claims): The decision pressure behind government exam preparation / Whichever exams you are attempting, drifting into another cycle… / Real decision points this coaching works through / What should actually decide, when the exam calendar alone will not… / Why this needs to go beyond "keep attempting" or "give up"
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career coaching for government exam…”: The decision pressure behind…; Whichever exams you are…; Real…
- Title attribute: At a glance: Career coaching for government exam aspirants deciding…
- Caption (and keep the same point in HTML text): Career coaching for government exam aspirants should help with the decisions a single-exam view misses: which exams among SSC, banking…
**V2 — Self-assessment checklist** (place after the section “Real decision points this coaching works through”)
- File: `career-counselling-for-government-exam-aspirants-self-real-decision-points-coaching.webp` · 1600×1000 WebP under 200 KB
- Teaches: Not every government exam aspirant searching this is at the same stage, or targeting the same exams.
- On-image text (about 25-40 words, shortened from the page; no new claims): Choosing which government exams are genuinely worth your preparation… / Keeping a multi-exam strategy from turning into a spread-too-thin… / Deciding if another cycle of attempts is still the highest-leverage… / Converting years of GK, reasoning, and quantitative aptitude… / Maps your eligibility, remaining attempts, and age window across the specific exams you… / Checks how much genuine syllabus overlap exists between the exams on your shortlist… / Weighs government-exam preparation honestly against private-sector or skill-based paths…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Self-assessment checklist for “Real decision points this coaching works through”: Choosing which government exams…; Keeping a multi-exam strategy…; Deciding if…
- Title attribute: Real decision points this coaching works through
- Caption (and keep the same point in HTML text): Not every government exam aspirant searching this is at the same stage, or targeting the same exams.
**V3 — Chronological timeline** (place after the section “What should actually decide, when the exam calendar alone will not…”)
- File: `career-counselling-for-government-exam-aspirants-chronological-should-actually-decide-exam.webp` · 1600×1000 WebP under 200 KB
- Teaches: Choosing exams, managing a multi-exam strategy, or pivoting away from government exam preparation is rarely…
- On-image text (about 25-40 words, shortened from the page; no new claims): Exam eligibility and attempt rules, not government exams as one… / Genuine syllabus overlap versus a spread-too-thin habit / What one more cycle actually costs versus what it could realistically… / Sunk preparation years versus a forward-looking plan
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “What should actually decide, when the exam…”: Exam eligibility and attempt…; Genuine syllabus overlap versus a…; What one more…
- Title attribute: What should actually decide, when the exam calendar alone will not…
- Caption (and keep the same point in HTML text): Choosing exams, managing a multi-exam strategy, or pivoting away from government exam preparation is rarely one clean answer.
**V4 — Self-assessment checklist** (place after the section “Questions government exam aspirants ask before choosing career…”)
- File: `career-counselling-for-government-exam-aspirants-self-questions-government-exam-aspirants.webp` · 1600×1000 WebP under 200 KB
- Teaches: 01 I am preparing for SSC, banking, and a state PSC exam at the same time.
- On-image text (about 25-40 words, shortened from the page; no new claims): 01 I am preparing for SSC, banking, and a state PSC exam at the same time. / Is that a good strategy, or should I focus on one? / It depends on how much the exams on your list genuinely overlap and how much…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Self-assessment checklist for “Questions government exam aspirants ask before…”: 01 I am preparing for SSC…; Is that a good strategy, or…; It depends on how…
- Title attribute: Questions government exam aspirants ask before choosing career…
- Caption (and keep the same point in HTML text): 01 I am preparing for SSC, banking, and a state PSC exam at the same time.
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/career-counselling-for-government-jobs/

**H1:** Career counselling for government jobs: deciding if this path fits, before you commit to exam prep  
**Type:** bofu · **Search priority:** P3 (0 clicks, 13 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-graduates-college.webp` is shared by 27 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-graduates-college.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 96% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-law-policy.webp` was chosen by the regex in `BofuContextVisual.astro`; a cleaner match for this keyword is `context-exam-pressure.webp`.
7. Context visual `context-law-policy.webp` has no title attribute and no caption.
8. Context visual reuse: `context-law-policy.webp` appears on 3 pages.
9. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 92% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 93% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 95% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-graduates-college.webp` | 96% | eager/high | A graduate with a laptop planning a skill roadmap… | NO | NO |
| `bofu/context-law-policy.webp` | 97% | lazy | A law and policy career visual showing impact… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-graduates-college.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-for-government-jobs-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Career counselling for government jobs is not the same question as career counselling for government exam…
- On-image text (about 25-40 words, shortened from the page; no new claims): The real trade-off behind a government job decision / Telling genuine fit from pressure or default thinking / What actually changes a government-job decision / How this decision is handled here, before any exam-specific commitment / What this decision support costs here
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career counselling for government…”: The real trade-off behind a…; Telling genuine fit from pressure……
- Title attribute: At a glance: Career counselling for government jobs: deciding if this…
- Caption (and keep the same point in HTML text): Career counselling for government jobs is not the same question as career counselling for government exam preparation.
**V2 — Framework cards** (place after the section “The real trade-off behind a government job decision”)
- File: `career-counselling-for-government-jobs-framework-real-trade-off-behind.webp` · 1600×1000 WebP under 200 KB
- Teaches: Government roles are genuinely different from private-sector or skill-based paths in ways that matter more…
- On-image text (about 25-40 words, shortened from the page; no new claims): Government roles are genuinely different from private-sector or skill-based… / Structured pay bands, defined promotion cycles, pension-linked retirement… / The honest cost side is just as concrete.
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Framework cards for “The real trade-off behind a government job…”: Government roles are genuinely…; Structured pay bands, defined…; The honest cost side is…
- Title attribute: The real trade-off behind a government job decision
- Caption (and keep the same point in HTML text): Government roles are genuinely different from private-sector or skill-based paths in ways that matter more than the "safe versus risky"…
**V3 — Decision tree** (place after the section “Telling genuine fit from pressure or default thinking”)
- File: `career-counselling-for-government-jobs-decision-telling-genuine-fit-pressure.webp` · 1600×1000 WebP under 200 KB
- Teaches: Signs the pull is genuine fit You are drawn to the actual nature of the work — structure, public service, a…
- On-image text (about 25-40 words, shortened from the page; no new claims): Signs the pull is genuine fit / Signs the pull is pressure or avoidance / You are drawn to the actual nature of the work — structure, public service, a defined… / Income stability is a real, considered priority for your situation, not an assumption you… / You have looked honestly at the pay-band and growth trajectory and are still comfortable… / The private-sector job search feels uncertain, so government prep feels like the "safer"… / Family or community expectation is doing more of the deciding than your own read on the…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “Telling genuine fit from pressure or default…”: Signs the pull is genuine fit; Signs the pull is pressure or…; You are drawn to the actual…
- Title attribute: Telling genuine fit from pressure or default thinking
- Caption (and keep the same point in HTML text): Signs the pull is genuine fit You are drawn to the actual nature of the work — structure, public service, a defined process — not just its…
**V4 — Comparison table** (place after the section “What this decision support costs here”)
- File: `career-counselling-for-government-jobs-comparison-decision-support-costs-here.webp` · 1600×1000 WebP under 200 KB
- Teaches: Pricing is shown upfront rather than revealed after a sales call, whichever direction the decision points…
- On-image text (about 25-40 words, shortened from the page; no new claims): Columns: Plan | Price / Row: Student 1-on-1 session… | Rs 250 (limited-time… / Row: Student continuous… | Rs 12000 (limited-time… / Row: Working-professional… | Rs 3000 (limited-time…
- Numbers: Plan Price Student 1-on-1 session (government-vs-other-path decision support) Rs 250 (limited-time price, down from Rs 3000) Student continuous guidance (includes the 1-on-1 plus up to 24 small-group sessions across the year) Rs 12000 (limited-time price, down
- Alt: Comparison table for “What this decision support costs here”: Plan | Price; Student 1-on-1 session… | Rs 250…; Student continuous… | Rs 12000…
- Title attribute: What this decision support costs here
- Caption (and keep the same point in HTML text): Pricing is shown upfront rather than revealed after a sales call, whichever direction the decision points toward.
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/career-counselling-for-low-cgpa-students/

**H1:** Career counselling for low CGPA students who still want a strong placement and a real shot at earlier financial freedom  
**Type:** bofu · **Search priority:** P3 (0 clicks, 3 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-graduates-college.webp` is shared by 27 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-graduates-college.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 97% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-first-generation.webp` has no title attribute and no caption.
7. Context visual reuse: `context-first-generation.webp` appears on 4 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 94% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 95% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 96% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-graduates-college.webp` | 97% | eager/high | A graduate with a laptop planning a skill roadmap… | NO | NO |
| `bofu/context-first-generation.webp` | 97% | lazy | A first-generation career visual showing context… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-graduates-college.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-for-low-cgpa-students-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: A low CGPA can shut a few specific doors — certain on-campus cutoffs, a handful of scholarships — but it does…
- On-image text (about 25-40 words, shortened from the page; no new claims): What a low CGPA actually blocks — and what it does not / How recruiters and admissions committees actually weigh CGPA / Why this needs sharper guidance than generic placement advice / Mistakes that make a low CGPA cost more than it should / What to check before paying for career counselling on a low CGPA
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career counselling for low CGPA…”: What a low CGPA actually blocks —…; How recruiters and admissions……
- Title attribute: At a glance: Career counselling for low CGPA students who still want…
- Caption (and keep the same point in HTML text): A low CGPA can shut a few specific doors — certain on-campus cutoffs, a handful of scholarships — but it does not decide your placement…
**V2 — Mistakes versus smarter move panel** (place after the section “Mistakes that make a low CGPA cost more than it should”)
- File: `career-counselling-for-low-cgpa-students-mistakes-mistakes-make-low-cgpa.webp` · 1600×1000 WebP under 200 KB
- Teaches: Most of the real damage from a low CGPA does not come from the number itself — it comes from decisions made…
- On-image text (about 25-40 words, shortened from the page; no new claims): Waiting for placement season to start building proof / Assuming every recruiter uses the same CGPA cutoff / Applying to MBA or MS programs without checking the real eligibility… / Treating the CGPA as the whole story in interviews
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Mistakes versus smarter move panel for “Mistakes that make a low CGPA cost more than it…”: Waiting for placement season to…; Assuming every recruiter uses…
- Title attribute: Mistakes that make a low CGPA cost more than it should
- Caption (and keep the same point in HTML text): Most of the real damage from a low CGPA does not come from the number itself — it comes from decisions made about it, usually under…
**V3 — Linear process chain or roadmap** (place after the section “Career Counselling Plans for Low CGPA Students”)
- File: `career-counselling-for-low-cgpa-students-linear-career-counselling-plans-low.webp` · 1600×1000 WebP under 200 KB
- Teaches: Students Student path Student Career Counselling Practical student career counselling before the wrong path…
- On-image text (about 25-40 words, shortened from the page; no new claims): Student Career Counselling / Students Student path Student Career Counselling Practical student career… / Limited-time student offer ₹3000 ₹250 for the first 1-on-1 session A… / Book 1-on-1 Online across India Avoid Wrong streams, outdated degrees, and…
- Numbers: Limited-time student offer ₹3000 ₹250 for the first 1-on-1 session A low-friction first step before the wrong path costs more time and money. | Continuous career guidance Limited-time annual price ₹29000 ₹12000 Includes the 1-on-1 and up to 24 small-group sessions across the year.
- Alt: Linear process chain or roadmap for “Career Counselling Plans for Low CGPA Students”: Student Career Counselling; Students Student path Student…; Limited-time…
- Title attribute: Career Counselling Plans for Low CGPA Students
- Caption (and keep the same point in HTML text): Students Student path Student Career Counselling Practical student career counselling before the wrong path wastes years, money, and future…
**V4 — Self-assessment checklist** (place after the section “Common questions before starting”)
- File: `career-counselling-for-low-cgpa-students-self-common-questions-before-starting.webp` · 1600×1000 WebP under 200 KB
- Teaches: 01 Does a low CGPA disqualify me from campus placements?
- On-image text (about 25-40 words, shortened from the page; no new claims): 01 Does a low CGPA disqualify me from campus placements? / It can affect eligibility for specific on-campus drives that set a minimum CGPA… / It does not disqualify you from placements overall — off-campus applications…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Self-assessment checklist for “Common questions before starting”: 01 Does a low CGPA disqualify me…; It can affect eligibility for…; It does not disqualify you…
- Title attribute: Common questions before starting
- Caption (and keep the same point in HTML text): 01 Does a low CGPA disqualify me from campus placements?
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/career-counselling-for-mba-graduates/

**H1:** Career counselling for MBA graduates when the specialization, ROI, or salary jump did not turn out the way you expected  
**Type:** bofu · **Search priority:** P3 (0 clicks, 14 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-graduates-college.webp` is shared by 27 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-graduates-college.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 97% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-graduate-pathway.webp` has no title attribute and no caption.
7. Context visual reuse: `context-graduate-pathway.webp` appears on 7 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 94% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 95% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 96% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-graduates-college.webp` | 97% | eager/high | A graduate with a laptop planning a skill roadmap… | NO | NO |
| `bofu/context-graduate-pathway.webp` | 97% | lazy | A graduate pathway from degree and capability… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-graduates-college.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-for-mba-graduates-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Career counselling for MBA graduates should deal with the decisions your degree actually left you with: a…
- On-image text (about 25-40 words, shortened from the page; no new claims): When career counselling for MBA graduates becomes useful / The MBA-specific decisions this should help you make / What changes when MBA-graduate career counselling is done right / What to check before paying for career counselling for MBA graduates / Questions MBA graduates ask before choosing career counselling
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career counselling for MBA graduates…”: When career counselling for MBA…; The MBA-specific decisions…
- Title attribute: At a glance: Career counselling for MBA graduates when the…
- Caption (and keep the same point in HTML text): Career counselling for MBA graduates should deal with the decisions your degree actually left you with: a specialization that does not…
**V2 — Chronological timeline** (place after the section “When career counselling for MBA graduates becomes useful”)
- File: `career-counselling-for-mba-graduates-chronological-career-counselling-mba-graduates.webp` · 1600×1000 WebP under 200 KB
- Teaches: It becomes useful right as the specialization mismatch, ROI doubt, or functional-track decision starts to…
- On-image text (about 25-40 words, shortened from the page; no new claims): You specialized in one track but your actual role looks nothing like… / The salary jump the MBA was supposed to deliver has not shown up / A tier-2 or tier-3 B-school placement that did not match the pitch / Choosing between consulting, product, marketing, finance, or ops and…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “When career counselling for MBA graduates becomes…”: You specialized in one track but…; The salary jump the MBA was…; A tier-2 or…
- Title attribute: When career counselling for MBA graduates becomes useful
- Caption (and keep the same point in HTML text): It becomes useful right as the specialization mismatch, ROI doubt, or functional-track decision starts to feel real, because the sooner…
**V3 — Decision tree** (place after the section “The MBA-specific decisions this should help you make”)
- File: `career-counselling-for-mba-graduates-decision-mba-specific-decisions-should.webp` · 1600×1000 WebP under 200 KB
- Teaches: Not generic postgraduate career advice.
- On-image text (about 25-40 words, shortened from the page; no new claims): Whether to fight for your specialization or reposition around your… / What to do when the expected salary jump has not materialized / Making the degree work harder when the campus brand alone will not… / Consulting, product, marketing, finance, or ops: choosing with more… / Whether the mismatch between your MBA specialization and your current role is a… / What it actually takes to move internally or externally back toward the function you… / How to read your current role for transferable, high-value skills instead of writing it…
- Numbers: 01 Specialization vs role Whether to fight for your specialization or reposition around your actual role Whether the mismatch between your MBA specialization and your current role is a company-specific placement issue or a signal that the specialization itself
- Alt: Decision tree for “The MBA-specific decisions this should help you…”: Whether to fight for your…; What to do when the expected…; Making the degree work harder…
- Title attribute: The MBA-specific decisions this should help you make
- Caption (and keep the same point in HTML text): Not generic postgraduate career advice.
**V4 — Chronological timeline** (place after the section “What changes when MBA-graduate career counselling is done right”)
- File: `career-counselling-for-mba-graduates-chronological-changes-mba-graduate-career.webp` · 1600×1000 WebP under 200 KB
- Teaches: Career counselling for MBA graduates should feel different from a generic postgraduate pep talk or a…
- On-image text (about 25-40 words, shortened from the page; no new claims): Career counselling for MBA graduates should feel different from a generic… / Others Shift Future Career School Others Blaming the specialization and…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “What changes when MBA-graduate career counselling…”: Career counselling for MBA…; Others Shift Future Career School…
- Title attribute: What changes when MBA-graduate career counselling is done right
- Caption (and keep the same point in HTML text): Career counselling for MBA graduates should feel different from a generic postgraduate pep talk or a placement-cell script.
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/career-counselling-for-mba-students/

**H1:** Career counselling for MBA students while the specialization, internship, and placement decisions are still open  
**Type:** bofu · **Search priority:** P3 (0 clicks, 1 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-graduates-college.webp` is shared by 27 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-graduates-college.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 97% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-student-parent-map.webp` has no title attribute and no caption.
7. Context visual reuse: `context-student-parent-map.webp` appears on 15 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 94% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 95% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 96% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-graduates-college.webp` | 97% | eager/high | A graduate with a laptop planning a skill roadmap… | NO | NO |
| `bofu/context-student-parent-map.webp` | 98% | lazy | A student and parent career decision map from… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-graduates-college.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-for-mba-students-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Career counselling for MBA students should deal with the decisions you are actually facing right now, while…
- On-image text (about 25-40 words, shortened from the page; no new claims): When career counselling for MBA students becomes useful / Make the specialization, internship, or elective call clearer before… / The in-program decisions this should help you make / What changes when MBA-student career counselling is done right / What to check before paying for career counselling for MBA students
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career counselling for MBA students…”: When career counselling for MBA…; Make the specialization…; The…
- Title attribute: At a glance: Career counselling for MBA students while the…
- Caption (and keep the same point in HTML text): Career counselling for MBA students should deal with the decisions you are actually facing right now, while you are still in the programme…
**V2 — Chronological timeline** (place after the section “When career counselling for MBA students becomes useful”)
- File: `career-counselling-for-mba-students-chronological-career-counselling-mba-students.webp` · 1600×1000 WebP under 200 KB
- Teaches: It becomes useful right as the specialization deadline, internship conversion, or elective choice starts to…
- On-image text (about 25-40 words, shortened from the page; no new claims): Choosing a specialization before you have seen the actual work / Turning a summer internship into a pre-placement offer, not just… / Elective and specialization-track choices that quietly decide your… / Realizing the specialization you locked in no longer fits, with…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “When career counselling for MBA students becomes…”: Choosing a specialization before…; Turning a summer internship into…; Elective…
- Title attribute: When career counselling for MBA students becomes useful
- Caption (and keep the same point in HTML text): It becomes useful right as the specialization deadline, internship conversion, or elective choice starts to feel real, because the sooner…
**V3 — Decision tree** (place after the section “The in-program decisions this should help you make”)
- File: `career-counselling-for-mba-students-decision-program-decisions-should-help.webp` · 1600×1000 WebP under 200 KB
- Teaches: Not generic postgraduate career advice.
- On-image text (about 25-40 words, shortened from the page; no new claims): Picking a specialization you can actually commit to / Making the summer internship count toward an actual offer / Choosing electives, certifications, and case tracks with the… / Deciding whether to switch specialization, or reposition around the… / How to read your own working style and strengths against what finance, marketing… / Which specialization keeps more doors open if your first placement bet does not land… / How to weigh a specialization against your batch, your institute's recruiter mix, and…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “The in-program decisions this should help you make”: Picking a specialization you can…; Making the summer internship…; Choosing electives…
- Title attribute: The in-program decisions this should help you make
- Caption (and keep the same point in HTML text): Not generic postgraduate career advice.
**V4 — Linear process chain or roadmap** (place after the section “Career Counselling Plans for MBA Students”)
- File: `career-counselling-for-mba-students-linear-career-counselling-plans-mba.webp` · 1600×1000 WebP under 200 KB
- Teaches: Students Student path Student Career Counselling Practical student career counselling before the wrong path…
- On-image text (about 25-40 words, shortened from the page; no new claims): Student Career Counselling / Students Student path Student Career Counselling Practical student career… / Limited-time student offer ₹3000 ₹250 for the first 1-on-1 session A… / Book 1-on-1 Online across India Avoid Wrong streams, outdated degrees, and…
- Numbers: Limited-time student offer ₹3000 ₹250 for the first 1-on-1 session A low-friction first step before the wrong path costs more time and money. | Continuous career guidance Limited-time annual price ₹29000 ₹12000 Includes the 1-on-1 and up to 24 small-group sessions across the year.
- Alt: Linear process chain or roadmap for “Career Counselling Plans for MBA Students”: Student Career Counselling; Students Student path Student…; Limited-time…
- Title attribute: Career Counselling Plans for MBA Students
- Caption (and keep the same point in HTML text): Students Student path Student Career Counselling Practical student career counselling before the wrong path wastes years, money, and future…
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/career-counselling-for-nri-students/

**H1:** Career counselling for NRI students choosing between India and abroad with real clarity  
**Type:** bofu · **Search priority:** P3 (0 clicks, 4 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-graduates-college.webp` is shared by 27 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-graduates-college.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 97% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-study-abroad.webp` has no title attribute and no caption.
7. Context visual reuse: `context-study-abroad.webp` appears on 2 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 94% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 95% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 96% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-graduates-college.webp` | 97% | eager/high | A graduate with a laptop planning a skill roadmap… | NO | NO |
| `bofu/context-study-abroad.webp` | 98% | lazy | A study-abroad decision visual comparing cost… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-graduates-college.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-for-nri-students-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Whether you grew up abroad and are weighing a move to India, or you studied overseas and are not sure whether…
- On-image text (about 25-40 words, shortened from the page; no new claims): The decisions NRI students actually have to make / Wherever you land, the plan is the skill portfolio, not the country… / Real decision points this guidance works through / What should actually decide the direction, when the country label… / Why career counselling for NRI students needs more than a generic…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career counselling for NRI students…”: The decisions NRI students…; Wherever you land, the plan is……
- Title attribute: At a glance: Career counselling for NRI students choosing between…
- Caption (and keep the same point in HTML text): Whether you grew up abroad and are weighing a move to India, or you studied overseas and are not sure whether to return, the real risk is…
**V2 — Self-assessment checklist** (place after the section “Real decision points this guidance works through”)
- File: `career-counselling-for-nri-students-self-real-decision-points-guidance.webp` · 1600×1000 WebP under 200 KB
- Teaches: Not every NRI student is at the same stage.
- On-image text (about 25-40 words, shortened from the page; no new claims): Choosing a country before locking in a stream, course, or first job / Weighing a first job in India against staying where you studied / Reconnecting with the Indian job market after years away / Checking whether an Indian degree actually supports the direction… / Checks real strengths, interests, and market fit against both directions, not just family… / Builds a skill plan that keeps genuine optionality between India and abroad for as long… / Names the trade-offs of each path honestly, including cost, timeline, and realistic…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Self-assessment checklist for “Real decision points this guidance works through”: Choosing a country before locking…; Weighing a first job in India……
- Title attribute: Real decision points this guidance works through
- Caption (and keep the same point in HTML text): Not every NRI student is at the same stage.
**V3 — Chronological timeline** (place after the section “What should actually decide the direction, when the country label…”)
- File: `career-counselling-for-nri-students-chronological-should-actually-decide-direction.webp` · 1600×1000 WebP under 200 KB
- Teaches: An India-versus-abroad decision is rarely one clean answer.
- On-image text (about 25-40 words, shortened from the page; no new claims): Genuine market fit versus a credential assumption / How recent your India context actually is / Family and financial reality, without letting it be the only factor / Skill portfolio strength versus country label
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “What should actually decide the direction, when…”: Genuine market fit versus a…; How recent your India context…; Family and…
- Title attribute: What should actually decide the direction, when the country label…
- Caption (and keep the same point in HTML text): An India-versus-abroad decision is rarely one clean answer.
**V4 — Linear process chain or roadmap** (place after the section “Career Counselling Plans for NRI Students”)
- File: `career-counselling-for-nri-students-linear-career-counselling-plans-nri.webp` · 1600×1000 WebP under 200 KB
- Teaches: Students Student path Student Career Counselling Practical student career counselling before the wrong path…
- On-image text (about 25-40 words, shortened from the page; no new claims): Student Career Counselling / Working Professional Career Counselling / Students Student path Student Career Counselling Practical student career… / Limited-time student offer ₹3000 ₹250 for the first 1-on-1 session A… / Book 1-on-1 Online across India Avoid Wrong streams, outdated degrees, and…
- Numbers: Limited-time student offer ₹3000 ₹250 for the first 1-on-1 session A low-friction first step before the wrong path costs more time and money. | Continuous career guidance Limited-time annual price ₹29000 ₹12000 Includes the 1-on-1 and up to 24 small-group sessions across the year. | Limited-time professional offer ₹5000 ₹3000 for one 1-on-1 session Book one sharp 1-on-1 before stagnation, weak positioning, or a bad pivot gets more expensive.
- Alt: Linear process chain or roadmap for “Career Counselling Plans for NRI Students”: Student Career Counselling; Working Professional Career…; Students Student…
- Title attribute: Career Counselling Plans for NRI Students
- Caption (and keep the same point in HTML text): Students Student path Student Career Counselling Practical student career counselling before the wrong path wastes years, money, and future…
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/career-counselling-for-study-abroad/

**H1:** Career counselling for study abroad when country, cost, and the return-versus-stay decision all feel unresolved  
**Type:** bofu · **Search priority:** P3 (0 clicks, 1 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-graduates-college.webp` is shared by 27 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-graduates-college.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 97% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-study-abroad.webp` has no title attribute and no caption.
7. Context visual reuse: `context-study-abroad.webp` appears on 2 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 94% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 95% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 96% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-graduates-college.webp` | 97% | eager/high | A graduate with a laptop planning a skill roadmap… | NO | NO |
| `bofu/context-study-abroad.webp` | 97% | lazy | A study-abroad decision visual comparing cost… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-graduates-college.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-for-study-abroad-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Career counselling for study-abroad and MBA-abroad aspirants should deal with the decisions that actually…
- On-image text (about 25-40 words, shortened from the page; no new claims): When career counselling for study abroad becomes useful / The study-abroad-specific decisions this should help you make / What changes when study-abroad career counselling is done right / What to check before paying for career counselling for study abroad / Questions aspirants ask before choosing career counselling for study…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career counselling for study abroad…”: When career counselling for study…; The study-abroad-specific……
- Title attribute: At a glance: Career counselling for study abroad when country, cost…
- Caption (and keep the same point in HTML text): Career counselling for study-abroad and MBA-abroad aspirants should deal with the decisions that actually determine the outcome: which…
**V2 — Chronological timeline** (place after the section “When career counselling for study abroad becomes useful”)
- File: `career-counselling-for-study-abroad-chronological-career-counselling-study-abroad.webp` · 1600×1000 WebP under 200 KB
- Teaches: It becomes useful right as the country, cost, exam-timeline, or return-versus-stay decision starts to feel…
- On-image text (about 25-40 words, shortened from the page; no new claims): Choosing between countries and specific programs, not just the "go… / Weighing the real cost and loan burden against realistic post-study… / Planning GRE, GMAT, IELTS, or TOEFL preparation around real… / Deciding whether to return to India or build a career abroad after…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “When career counselling for study abroad becomes…”: Choosing between countries and…; Weighing the real cost and loan…; Planning…
- Title attribute: When career counselling for study abroad becomes useful
- Caption (and keep the same point in HTML text): It becomes useful right as the country, cost, exam-timeline, or return-versus-stay decision starts to feel real, because the sooner your…
**V3 — Decision tree** (place after the section “The study-abroad-specific decisions this should help you make”)
- File: `career-counselling-for-study-abroad-decision-study-abroad-specific-decisions.webp` · 1600×1000 WebP under 200 KB
- Teaches: Not generic study-abroad-consultancy sales talk.
- On-image text (about 25-40 words, shortened from the page; no new claims): Matching country and course to your actual career goals, not just… / Building a realistic cost, funding, and income-recovery plan / Sequencing GRE, GMAT, IELTS, or TOEFL prep against real deadlines / Deciding your post-study direction before you commit to a country / How specific countries and universities actually compare on placement outcomes, work-visa… / Whether an MBA abroad, a specialized master’s, or a different qualification actually fits… / How to avoid choosing a country or course mainly because a peer group or agent is pushing…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “The study-abroad-specific decisions this should…”: Matching country and course to…; Building a realistic cost…; Sequencing GRE, GMAT, IELTS…
- Title attribute: The study-abroad-specific decisions this should help you make
- Caption (and keep the same point in HTML text): Not generic study-abroad-consultancy sales talk.
**V4 — Chronological timeline** (place after the section “What changes when study-abroad career counselling is done right”)
- File: `career-counselling-for-study-abroad-chronological-changes-study-abroad-career.webp` · 1600×1000 WebP under 200 KB
- Teaches: Career counselling for study abroad should feel different from a generic study-abroad-consultancy pitch built…
- On-image text (about 25-40 words, shortened from the page; no new claims): Career counselling for study abroad should feel different from a generic… / Others Shift Future Career School Others Choosing a program with no view of the…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “What changes when study-abroad career counselling…”: Career counselling for study…; Others Shift Future Career School…
- Title attribute: What changes when study-abroad career counselling is done right
- Caption (and keep the same point in HTML text): Career counselling for study abroad should feel different from a generic study-abroad-consultancy pitch built around commission-linked…
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/career-counselling-for-tier-2-college-students/

**H1:** Career counselling for tier 2 college students who are ready to out-build the college name on their resume  
**Type:** bofu · **Search priority:** P3 (0 clicks, 0 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-graduates-college.webp` is shared by 27 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-graduates-college.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 97% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-first-generation.webp` has no title attribute and no caption.
7. Context visual reuse: `context-first-generation.webp` appears on 4 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 94% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 95% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 96% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-graduates-college.webp` | 97% | eager/high | A graduate with a laptop planning a skill roadmap… | NO | NO |
| `bofu/context-first-generation.webp` | 98% | lazy | A first-generation career visual showing context… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-graduates-college.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-for-tier-2-college-students-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Career counselling for tier 2 college students should deal with the real disadvantage you are up against…
- On-image text (about 25-40 words, shortened from the page; no new claims): When this becomes the right kind of support / Do not let another placement cycle pass on the campus channel alone / The tier-2-specific decisions this should help you make / Realistic, not discouraging: what the gap with tier 1 peers actually… / What to check before paying for career counselling as a tier 2…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career counselling for tier 2…”: When this becomes the right kind…; Do not let another placement…; The…
- Title attribute: At a glance: Career counselling for tier 2 college students who are…
- Caption (and keep the same point in HTML text): Career counselling for tier 2 college students should deal with the real disadvantage you are up against: fewer campus recruiters, a…
**V2 — Chronological timeline** (place after the section “When this becomes the right kind of support”)
- File: `career-counselling-for-tier-2-college-students-chronological-becomes-right-kind-support.webp` · 1600×1000 WebP under 200 KB
- Teaches: This becomes useful once the recruiter-access gap is visibly affecting your outcomes, not while you are still…
- On-image text (about 25-40 words, shortened from the page; no new claims): Fewer, and often narrower, companies visit your campus / No senior already sitting inside the company you want / A resume screen that stalls before your skills get seen / Watching tier-1 peers get further with what looks like less effort
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “When this becomes the right kind of support”: Fewer, and often narrower…; No senior already sitting inside…; A resume screen that…
- Title attribute: When this becomes the right kind of support
- Caption (and keep the same point in HTML text): This becomes useful once the recruiter-access gap is visibly affecting your outcomes, not while you are still assuming hard work alone will…
**V3 — Decision tree** (place after the section “The tier-2-specific decisions this should help you make”)
- File: `career-counselling-for-tier-2-college-students-decision-tier-specific-decisions-should.webp` · 1600×1000 WebP under 200 KB
- Teaches: Not generic placement advice.
- On-image text (about 25-40 words, shortened from the page; no new claims): Off-campus applications as a primary channel, not a backup / Building a portfolio that outweighs the college line on your resume / Getting a fair look despite recruiter brand bias / Setting a realistic, honest timeline without losing momentum / How to treat off-campus drives, direct company applications, and open national tests as… / Where to register early instead of only searching once final year starts and the… / How to read which of your target companies actually hire off-campus, so effort goes where…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “The tier-2-specific decisions this should help…”: Off-campus applications as a…; Building a portfolio that…; Getting a fair look despite…
- Title attribute: The tier-2-specific decisions this should help you make
- Caption (and keep the same point in HTML text): Not generic placement advice.
**V4 — Linear process chain or roadmap** (place after the section “Career Counselling Plans for Tier 2 College Students”)
- File: `career-counselling-for-tier-2-college-students-linear-career-counselling-plans-tier.webp` · 1600×1000 WebP under 200 KB
- Teaches: Students Student path Student Career Counselling Practical student career counselling before the wrong path…
- On-image text (about 25-40 words, shortened from the page; no new claims): Student Career Counselling / Students Student path Student Career Counselling Practical student career… / Limited-time student offer ₹3000 ₹250 for the first 1-on-1 session A… / Book 1-on-1 Online across India Avoid Wrong streams, outdated degrees, and…
- Numbers: Limited-time student offer ₹3000 ₹250 for the first 1-on-1 session A low-friction first step before the wrong path costs more time and money. | Continuous career guidance Limited-time annual price ₹29000 ₹12000 Includes the 1-on-1 and up to 24 small-group sessions across the year.
- Alt: Linear process chain or roadmap for “Career Counselling Plans for Tier 2 College…”: Student Career Counselling; Students Student path Student…; Limited-time…
- Title attribute: Career Counselling Plans for Tier 2 College Students
- Caption (and keep the same point in HTML text): Students Student path Student Career Counselling Practical student career counselling before the wrong path wastes years, money, and future…
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/career-counselling-for-upsc-aspirants/

**H1:** Career counselling for UPSC aspirants before another attempt costs another year  
**Type:** bofu · **Search priority:** P3 (0 clicks, 12 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-graduates-college.webp` is shared by 27 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-graduates-college.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 97% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-law-policy.webp` was chosen by the regex in `BofuContextVisual.astro`; a cleaner match for this keyword is `context-exam-pressure.webp`.
7. Context visual `context-law-policy.webp` has no title attribute and no caption.
8. Context visual reuse: `context-law-policy.webp` appears on 3 pages.
9. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 95% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 95% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 96% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-graduates-college.webp` | 97% | eager/high | A graduate with a laptop planning a skill roadmap… | NO | NO |
| `bofu/context-law-policy.webp` | 98% | lazy | A law and policy career visual showing impact… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-graduates-college.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-for-upsc-aspirants-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Career counselling for UPSC aspirants should help with the hardest calls in this journey: whether to attempt…
- On-image text (about 25-40 words, shortened from the page; no new claims): The decision pressure behind a UPSC attempt / Whichever stage you are at, drifting into another year without a plan… / Real decision points this guidance works through / What should actually decide, when the exam alone will not tell you / Why this needs to go beyond "try again" or "give up"
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career counselling for UPSC…”: The decision pressure behind a…; Whichever stage you are at…; Real…
- Title attribute: At a glance: Career counselling for UPSC aspirants before another…
- Caption (and keep the same point in HTML text): Career counselling for UPSC aspirants should help with the hardest calls in this journey: whether to attempt at all, whether another…
**V2 — Self-assessment checklist** (place after the section “Real decision points this guidance works through”)
- File: `career-counselling-for-upsc-aspirants-self-real-decision-points-guidance.webp` · 1600×1000 WebP under 200 KB
- Teaches: Not every UPSC aspirant searching this is at the same stage.
- On-image text (about 25-40 words, shortened from the page; no new claims): Weighing UPSC against other high-value paths honestly / Deciding if another attempt is still the highest-leverage move / Converting years of preparation into a real next career / Quitting a job to prepare, or preparing while still employed / Maps your natural strengths against what the exam and the job genuinely reward / Names the realistic time, cost, and opportunity-cost trade-offs upfront, not after year… / Compares UPSC honestly against other paths that could use the same discipline and…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Self-assessment checklist for “Real decision points this guidance works through”: Weighing UPSC against other…; Deciding if another attempt is…; Converting…
- Title attribute: Real decision points this guidance works through
- Caption (and keep the same point in HTML text): Not every UPSC aspirant searching this is at the same stage.
**V3 — Chronological timeline** (place after the section “What should actually decide, when the exam alone will not tell you”)
- File: `career-counselling-for-upsc-aspirants-chronological-should-actually-decide-exam.webp` · 1600×1000 WebP under 200 KB
- Teaches: Attempting, continuing, or pivoting away from UPSC is rarely one clean answer.
- On-image text (about 25-40 words, shortened from the page; no new claims): Genuine fit versus prestige and default momentum / What one more attempt actually costs versus what it could… / Family expectation versus your own runway and risk tolerance / A closed door versus a starting point
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “What should actually decide, when the exam alone…”: Genuine fit versus prestige and…; What one more attempt actually…; Family…
- Title attribute: What should actually decide, when the exam alone will not tell you
- Caption (and keep the same point in HTML text): Attempting, continuing, or pivoting away from UPSC is rarely one clean answer.
**V4 — Linear process chain or roadmap** (place after the section “Career Counselling Plans for UPSC Aspirants”)
- File: `career-counselling-for-upsc-aspirants-linear-career-counselling-plans-upsc.webp` · 1600×1000 WebP under 200 KB
- Teaches: Students Student path Student Career Counselling Practical student career counselling before the wrong path…
- On-image text (about 25-40 words, shortened from the page; no new claims): Student Career Counselling / Working Professional Career Counselling / Students Student path Student Career Counselling Practical student career… / Limited-time student offer ₹3000 ₹250 for the first 1-on-1 session A… / Book 1-on-1 Online across India Avoid Wrong streams, outdated degrees, and…
- Numbers: Limited-time student offer ₹3000 ₹250 for the first 1-on-1 session A low-friction first step before the wrong path costs more time and money. | Continuous career guidance Limited-time annual price ₹29000 ₹12000 Includes the 1-on-1 and up to 24 small-group sessions across the year. | Limited-time professional offer ₹5000 ₹3000 for one 1-on-1 session Book one sharp 1-on-1 before stagnation, weak positioning, or a bad pivot gets more expensive.
- Alt: Linear process chain or roadmap for “Career Counselling Plans for UPSC Aspirants”: Student Career Counselling; Working Professional Career…; Students Student…
- Title attribute: Career Counselling Plans for UPSC Aspirants
- Caption (and keep the same point in HTML text): Students Student path Student Career Counselling Practical student career counselling before the wrong path wastes years, money, and future…
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/career-guidance-after-b-tech-ece/

**H1:** Career guidance after B.Tech ECE for the core-vs-VLSI-vs-software fork  
**Type:** bofu · **Search priority:** P3 (0 clicks, 0 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-graduates-college.webp` is shared by 27 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-graduates-college.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 97% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-engineering-tech.webp` has no title attribute and no caption.
7. Context visual reuse: `context-engineering-tech.webp` appears on 8 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 94% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 95% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 96% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-graduates-college.webp` | 97% | eager/high | A graduate with a laptop planning a skill roadmap… | NO | NO |
| `bofu/context-engineering-tech.webp` | 98% | lazy | An engineering career visual showing foundations… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-graduates-college.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-guidance-after-b-tech-ece-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Career guidance after B.Tech ECE is built for the specific fork Electronics and Communication graduates…
- On-image text (about 25-40 words, shortened from the page; no new claims): The specific pressure ECE graduates face after B.Tech / What career guidance after B.Tech ECE should actually help you decide / Four ECE-specific tracks, and what each one actually demands / What to check before booking career guidance after B.Tech ECE / Generic post-engineering advice versus guidance built around the ECE…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career guidance after B.Tech ECE for…”: The specific pressure ECE…; What career guidance after…
- Title attribute: At a glance: Career guidance after B.Tech ECE for the…
- Caption (and keep the same point in HTML text): Career guidance after B.Tech ECE is built for the specific fork Electronics and Communication graduates actually face: core electronics…
**V2 — Decision tree** (place after the section “What career guidance after B.Tech ECE should actually help you decide”)
- File: `career-guidance-after-b-tech-ece-decision-career-guidance-after-tech.webp` · 1600×1000 WebP under 200 KB
- Teaches: Direction for the ECE-specific fork itself, not a repeat of general engineering branch talk.
- On-image text (about 25-40 words, shortened from the page; no new claims): A real comparison, not a default toward whichever pays the campus… / Testing genuine fit for chip design before committing a master's and… / Two ECE-specific tracks that rarely get compared against each other… / M.Tech, MS abroad, or working first — priced against your specific… / What a core electronics, embedded, or RF role actually pays and grows into over the next… / Whether your actual coursework strengths point toward circuits and signal processing or… / How to keep a software option realistically open even while leaning core, or the reverse…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “What career guidance after B.Tech ECE should…”: A real comparison, not a default…; Testing genuine fit for chip…; Two ECE-specific tracks…
- Title attribute: What career guidance after B.Tech ECE should actually help you decide
- Caption (and keep the same point in HTML text): Direction for the ECE-specific fork itself, not a repeat of general engineering branch talk.
**V3 — Asymmetrical pros-and-cons comparison** (place after the section “Generic post-engineering advice versus guidance built around the ECE…”)
- File: `career-guidance-after-b-tech-ece-asymmetrical-generic-post-engineering-advice.webp` · 1600×1000 WebP under 200 KB
- Teaches: The difference matters most right after B.Tech ECE, when a track gets picked quietly if no one actually tests…
- On-image text (about 25-40 words, shortened from the page; no new claims): The difference matters most right after B.Tech ECE, when a track gets picked… / Others Shift Future Career School Others Drifting between core, VLSI, and…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “Generic post-engineering advice versus guidance…”: The difference matters most right…; Others Shift Future Career…
- Title attribute: Generic post-engineering advice versus guidance built around the ECE…
- Caption (and keep the same point in HTML text): The difference matters most right after B.Tech ECE, when a track gets picked quietly if no one actually tests core, VLSI, embedded…
**V4 — Self-assessment checklist** (place after the section “Questions B.Tech ECE graduates ask before choosing career guidance”)
- File: `career-guidance-after-b-tech-ece-self-questions-tech-ece-graduates.webp` · 1600×1000 WebP under 200 KB
- Teaches: 01 Should I go into core electronics, VLSI, embedded systems, or software after B.Tech ECE?
- On-image text (about 25-40 words, shortened from the page; no new claims): 01 Should I go into core electronics, VLSI, embedded systems, or software after… / There is no single right track for every ECE graduate — the honest comparison… / Core electronics, VLSI, embedded systems, telecom, and software each demand a…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Self-assessment checklist for “Questions B.Tech ECE graduates ask before…”: 01 Should I go into core…; There is no single right track…; Core electronics, VLSI…
- Title attribute: Questions B.Tech ECE graduates ask before choosing career guidance
- Caption (and keep the same point in HTML text): 01 Should I go into core electronics, VLSI, embedded systems, or software after B.Tech ECE?
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/career-guidance-after-bba/

**H1:** Career guidance after BBA for the MBA-vs-job-vs-family-business fork  
**Type:** bofu · **Search priority:** P3 (0 clicks, 9 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-graduates-college.webp` is shared by 27 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-graduates-college.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 97% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-graduate-pathway.webp` has no title attribute and no caption.
7. Context visual reuse: `context-graduate-pathway.webp` appears on 7 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 94% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 95% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 96% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-graduates-college.webp` | 97% | eager/high | A graduate with a laptop planning a skill roadmap… | NO | NO |
| `bofu/context-graduate-pathway.webp` | 97% | lazy | A graduate pathway from degree and capability… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-graduates-college.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-guidance-after-bba-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Career guidance after BBA is built for the specific fork management graduates actually face: whether an MBA…
- On-image text (about 25-40 words, shortened from the page; no new claims): The specific pressure BBA graduates face after the degree / What career guidance after BBA should actually help you decide / Four common paths after BBA, and what each one actually costs / What to check before booking career guidance after BBA / Generic post-BBA advice versus guidance built around your actual fork
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career guidance after BBA for the…”: The specific pressure BBA…; What career guidance after BBA…; Four…
- Title attribute: At a glance: Career guidance after BBA for the…
- Caption (and keep the same point in HTML text): Career guidance after BBA is built for the specific fork management graduates actually face: whether an MBA now genuinely strengthens your…
**V2 — Decision tree** (place after the section “What career guidance after BBA should actually help you decide”)
- File: `career-guidance-after-bba-decision-career-guidance-after-bba.webp` · 1600×1000 WebP under 200 KB
- Teaches: Direction for the BBA-specific fork itself, not a repeat of generic post-graduation advice.
- On-image text (about 25-40 words, shortened from the page; no new claims): Whether an MBA genuinely strengthens your specific direction, or… / An honest comparison, not a decision made by guilt or default / Turning a generalist BBA into a specific, marketable direction / What a BBA graduate needs to show, beyond the degree itself / What tier and specialization of MBA would actually change your ceiling in the function… / Whether two to three years of work experience first would make an eventual MBA more… / What a direct management-trainee or functional entry role realistically pays and grows…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “What career guidance after BBA should actually…”: Whether an MBA genuinely…; An honest comparison, not a…; Turning a generalist BBA into a…
- Title attribute: What career guidance after BBA should actually help you decide
- Caption (and keep the same point in HTML text): Direction for the BBA-specific fork itself, not a repeat of generic post-graduation advice.
**V3 — Linear process chain or roadmap** (place after the section “Four common paths after BBA, and what each one actually costs”)
- File: `career-guidance-after-bba-linear-four-common-paths-after.webp` · 1600×1000 WebP under 200 KB
- Teaches: Any of these can be the right move.
- On-image text (about 25-40 words, shortened from the page; no new claims): Any of these can be the right move. / The problem is picking one without pricing it against the others first. / An MBA now Worth it when a specific tier and specialization would genuinely…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Linear process chain or roadmap for “Four common paths after BBA, and what each one…”: Any of these can be the right…; The problem is picking one…; An MBA now…
- Title attribute: Four common paths after BBA, and what each one actually costs
- Caption (and keep the same point in HTML text): Any of these can be the right move.
**V4 — Asymmetrical pros-and-cons comparison** (place after the section “Generic post-BBA advice versus guidance built around your actual fork”)
- File: `career-guidance-after-bba-asymmetrical-generic-post-bba-advice.webp` · 1600×1000 WebP under 200 KB
- Teaches: The difference matters most in the months right after BBA, when MBA-or-not gets decided quietly if no one…
- On-image text (about 25-40 words, shortened from the page; no new claims): The difference matters most in the months right after BBA, when MBA-or-not gets… / Others Shift Future Career School Others Doing an MBA because it is the…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “Generic post-BBA advice versus guidance built…”: The difference matters most in…; Others Shift Future Career School…
- Title attribute: Generic post-BBA advice versus guidance built around your actual fork
- Caption (and keep the same point in HTML text): The difference matters most in the months right after BBA, when MBA-or-not gets decided quietly if no one actually tests it against the…
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/career-guidance-after-bsc/

**H1:** Career guidance after B.Sc for the M.Sc-vs-job-vs-exam-vs-teaching fork  
**Type:** bofu · **Search priority:** P3 (0 clicks, 4 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-graduates-college.webp` is shared by 27 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-graduates-college.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 97% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-graduate-pathway.webp` has no title attribute and no caption.
7. Context visual reuse: `context-graduate-pathway.webp` appears on 7 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 94% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 95% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 96% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-graduates-college.webp` | 97% | eager/high | A graduate with a laptop planning a skill roadmap… | NO | NO |
| `bofu/context-graduate-pathway.webp` | 97% | lazy | A graduate pathway from degree and capability… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-graduates-college.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-guidance-after-bsc-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Career guidance after B.Sc is built for the specific fork science graduates actually face: M.Sc and research…
- On-image text (about 25-40 words, shortened from the page; no new claims): The specific pressure B.Sc graduates face after the degree / What career guidance after B.Sc should actually help you decide / Four common paths after B.Sc, and what each one actually costs / What to check before booking career guidance after B.Sc / Generic post-B.Sc advice versus guidance built around your actual fork
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career guidance after B.Sc for the…”: The specific pressure B.Sc…; What career guidance after B.Sc……
- Title attribute: At a glance: Career guidance after B.Sc for the…
- Caption (and keep the same point in HTML text): Career guidance after B.Sc is built for the specific fork science graduates actually face: M.Sc and research versus a direct industry job…
**V2 — Decision tree** (place after the section “What career guidance after B.Sc should actually help you decide”)
- File: `career-guidance-after-bsc-decision-career-guidance-after-should.webp` · 1600×1000 WebP under 200 KB
- Teaches: Direction for the B.Sc-specific fork itself, not a repeat of generic post-graduation advice.
- On-image text (about 25-40 words, shortened from the page; no new claims): Testing genuine fit before committing two more years / A common B.Sc route that deserves a real fit check, not an automatic… / A genuine option for many science graduates, not a fallback / A realistic route for many B.Sc graduates when a deliberate skill… / Whether your interest in the subject is strong enough to support a multi-year research or… / What a direct industry job in your subject area — lab work, quality control, testing, or… / How to tell a genuine pull toward the subject apart from choosing M.Sc mainly because it…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “What career guidance after B.Sc should actually…”: Testing genuine fit before…; A common B.Sc route that deserves…; A genuine option for…
- Title attribute: What career guidance after B.Sc should actually help you decide
- Caption (and keep the same point in HTML text): Direction for the B.Sc-specific fork itself, not a repeat of generic post-graduation advice.
**V3 — Linear process chain or roadmap** (place after the section “Four common paths after B.Sc, and what each one actually costs”)
- File: `career-guidance-after-bsc-linear-four-common-paths-after.webp` · 1600×1000 WebP under 200 KB
- Teaches: Any of these can be the right move.
- On-image text (about 25-40 words, shortened from the page; no new claims): Any of these can be the right move. / The problem is picking one without pricing it against the others first. / M.Sc and research Worth it when genuine subject interest supports going…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Linear process chain or roadmap for “Four common paths after B.Sc, and what each one…”: Any of these can be the right…; The problem is picking one…; M.Sc and…
- Title attribute: Four common paths after B.Sc, and what each one actually costs
- Caption (and keep the same point in HTML text): Any of these can be the right move.
**V4 — Asymmetrical pros-and-cons comparison** (place after the section “Generic post-B.Sc advice versus guidance built around your actual fork”)
- File: `career-guidance-after-bsc-asymmetrical-generic-post-advice-versus.webp` · 1600×1000 WebP under 200 KB
- Teaches: The difference matters most in the months right after B.Sc, when a default gets picked quietly if no one…
- On-image text (about 25-40 words, shortened from the page; no new claims): The difference matters most in the months right after B.Sc, when a default gets… / Others Shift Future Career School Others Continuing to M.Sc because nothing…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “Generic post-B.Sc advice versus guidance built…”: The difference matters most in…; Others Shift Future Career School…
- Title attribute: Generic post-B.Sc advice versus guidance built around your actual fork
- Caption (and keep the same point in HTML text): The difference matters most in the months right after B.Sc, when a default gets picked quietly if no one actually tests it against the…
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/career-guidance-after-gap-year/

**H1:** Career guidance after a gap year before the pause turns into drift  
**Type:** bofu · **Search priority:** P3 (0 clicks, 9 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-graduates-college.webp` is shared by 27 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-graduates-college.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 97% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-holistic-framework.webp` was chosen by the regex in `BofuContextVisual.astro`; a cleaner match for this keyword is `context-graduate-pathway.webp`.
7. Context visual `context-holistic-framework.webp` has no title attribute and no caption.
8. Context visual reuse: `context-holistic-framework.webp` appears on 24 pages.
9. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 94% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 95% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 96% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-graduates-college.webp` | 97% | eager/high | A graduate with a laptop planning a skill roadmap… | NO | NO |
| `bofu/context-holistic-framework.webp` | 97% | lazy | A holistic career decision framework covering… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-graduates-college.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-guidance-after-gap-year-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: A gap year after 12th or after a degree can be a genuine head start — or it can quietly turn into a year that…
- On-image text (about 25-40 words, shortened from the page; no new claims): When career guidance after a gap year becomes useful / Why a gap year needs sharper guidance than generic advice / What career guidance after a gap year should actually improve / What to check before paying for guidance after a gap year / A planned gap year is not the same as falling behind
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career guidance after a gap year…”: When career guidance after a gap…; Why a gap year needs sharper……
- Title attribute: At a glance: Career guidance after a gap year before the pause turns…
- Caption (and keep the same point in HTML text): A gap year after 12th or after a degree can be a genuine head start — or it can quietly turn into a year that leaves you behind.
**V2 — Chronological timeline** (place after the section “When career guidance after a gap year becomes useful”)
- File: `career-guidance-after-gap-year-chronological-career-guidance-after-gap.webp` · 1600×1000 WebP under 200 KB
- Teaches: The right use of a gap year is not just staying busy.
- On-image text (about 25-40 words, shortened from the page; no new claims): Gap year after 12th / Gap year after a degree / The gap year is running longer than planned / You need to explain the gap year to someone
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “When career guidance after a gap year becomes…”: Gap year after 12th; Gap year after a degree; The gap year is running longer…
- Title attribute: When career guidance after a gap year becomes useful
- Caption (and keep the same point in HTML text): The right use of a gap year is not just staying busy.
**V3 — Chronological timeline** (place after the section “What career guidance after a gap year should actually improve”)
- File: `career-guidance-after-gap-year-chronological-career-guidance-after-gap.webp` · 1600×1000 WebP under 200 KB
- Teaches: 01 A real plan for the rest of the gap year Skills, an internship, a project, or focused exam prep that add…
- On-image text (about 25-40 words, shortened from the page; no new claims): A real plan for the rest of the gap year / A gap-year account that holds up / Skill direction that starts now, not later / A workable way back in
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “What career guidance after a gap year should…”: A real plan for the rest of the…; A gap-year account that holds up; Skill direction…
- Title attribute: What career guidance after a gap year should actually improve
- Caption (and keep the same point in HTML text): 01 A real plan for the rest of the gap year Skills, an internship, a project, or focused exam prep that add up to something specific…
**V4 — Self-assessment checklist** (place after the section “Common questions before starting”)
- File: `career-guidance-after-gap-year-self-common-questions-before-starting.webp` · 1600×1000 WebP under 200 KB
- Teaches: 01 Will a gap year hurt my chances with colleges or employers?
- On-image text (about 25-40 words, shortened from the page; no new claims): 01 Will a gap year hurt my chances with colleges or employers? / A gap year does not automatically hurt your chances. / What usually matters more is whether you can show what the time was used for…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Self-assessment checklist for “Common questions before starting”: 01 Will a gap year hurt my…; A gap year does not automatically…; What usually matters more is…
- Title attribute: Common questions before starting
- Caption (and keep the same point in HTML text): 01 Will a gap year hurt my chances with colleges or employers?
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---
