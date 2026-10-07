# Image audit — service/other pages: bofu-hero-class-11-12

6 pages, ordered by search priority. Submit one page section at a time with `docs/image-audit/00-READ-FIRST.md`.

### /services/career-counselling-and-career-guidance/career-guidance-after-12th-online/

**H1:** Career guidance after 12th online when the next decision cannot wait for a local option  
**Type:** bofu · **Search priority:** P2 (1 clicks, 37 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-class-11-12.webp` is shared by 6 page(s); acceptable reuse.
4. Hero `hero-class-11-12.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 97% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-after-12th.webp` was chosen by the regex in `BofuContextVisual.astro`; a cleaner match for this keyword is `context-online-session.webp`.
7. Context visual `context-after-12th.webp` has no title attribute and no caption.
8. Context visual reuse: `context-after-12th.webp` appears on 3 pages.
9. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 94% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 95% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 96% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-class-11-12.webp` | 97% | eager/high | A Class 11-12 student choosing between Science… | NO | NO |
| `bofu/context-after-12th.webp` | 97% | lazy | A career decision map for comparing work, routes… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-class-11-12.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-guidance-after-12th-online-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Career guidance after 12th online should help you compare course, degree, skill, and backup-route trade-offs…
- On-image text (about 25-40 words, shortened from the page; no new claims): When online career guidance after 12th becomes the smarter option / Choose online guidance before admission pressure keeps moving while… / What online career guidance after 12th should actually help you decide / Why online guidance can work better than waiting for the perfect… / What to keep ready before online career guidance after 12th
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career guidance after 12th online…”: When online career guidance after…; Choose online guidance…
- Title attribute: At a glance: Career guidance after 12th online when the next decision…
- Caption (and keep the same point in HTML text): Career guidance after 12th online should help you compare course, degree, skill, and backup-route trade-offs clearly, without losing time…
**V2 — Chronological timeline** (place after the section “When online career guidance after 12th becomes the smarter option”)
- File: `career-guidance-after-12th-online-chronological-online-career-guidance-after.webp` · 1600×1000 WebP under 200 KB
- Teaches: Online matters most when the decision is already serious but waiting for the right local option only adds…
- On-image text (about 25-40 words, shortened from the page; no new claims): You need help now, not after more delay / You want the decision quality, not city dependence / Student and parent both need the same clarity / You need a route that still works from anywhere in India
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “When online career guidance after 12th becomes…”: You need help now, not after more…; You want the decision quality…; Student and…
- Title attribute: When online career guidance after 12th becomes the smarter option
- Caption (and keep the same point in HTML text): Online matters most when the decision is already serious but waiting for the right local option only adds more delay — and the goal is…
**V3 — Decision tree** (place after the section “What online career guidance after 12th should actually help you decide”)
- File: `career-guidance-after-12th-online-decision-online-career-guidance-after.webp` · 1600×1000 WebP under 200 KB
- Teaches: 01 Course and degree shortlist Narrow broad options into a sharper shortlist instead of getting lost in too…
- On-image text (about 25-40 words, shortened from the page; no new claims): Course and degree shortlist / Entrance route versus backup route / Skill direction from the beginning / Parent-student decision confidence
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “What online career guidance after 12th should…”: Course and degree shortlist; Entrance route versus backup route; Skill direction from the…
- Title attribute: What online career guidance after 12th should actually help you decide
- Caption (and keep the same point in HTML text): 01 Course and degree shortlist Narrow broad options into a sharper shortlist instead of getting lost in too many acceptable-sounding routes.
**V4 — Self-assessment checklist** (place after the section “Common questions before starting”)
- File: `career-guidance-after-12th-online-self-common-questions-before-starting.webp` · 1600×1000 WebP under 200 KB
- Teaches: 01 Can career guidance after 12th really work well online?
- On-image text (about 25-40 words, shortened from the page; no new claims): 01 Can career guidance after 12th really work well online? / Yes. / Online guidance can work well when the real work is clear reasoning around fit…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Self-assessment checklist for “Common questions before starting”: 01 Can career guidance after 12th…; Yes.; Online guidance can work well…
- Title attribute: Common questions before starting
- Caption (and keep the same point in HTML text): 01 Can career guidance after 12th really work well online?
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/career-guidance-after-12th/

**H1:** Career guidance after 12th before the wrong turn gets expensive  
**Type:** bofu · **Search priority:** P2 (0 clicks, 50 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-class-11-12.webp` is shared by 6 page(s); acceptable reuse.
4. Hero `hero-class-11-12.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 97% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-after-12th.webp` has no title attribute and no caption.
7. Context visual reuse: `context-after-12th.webp` appears on 3 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 94% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 95% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 96% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-class-11-12.webp` | 97% | eager/high | A Class 11-12 student choosing between Science… | NO | NO |
| `bofu/context-after-12th.webp` | 97% | lazy | A career decision map for comparing work, routes… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-class-11-12.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-guidance-after-12th-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: After 12th, a list of options is not enough.
- On-image text (about 25-40 words, shortened from the page; no new claims): When career guidance after 12th becomes worth it / Why after-12th guidance has to be sharper than generic advice / What stronger career guidance after 12th should actually improve / What parents should compare before paying major fees after 12th / What to check before paying for career guidance after 12th
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career guidance after 12th before…”: When career guidance after 12th…; Why after-12th guidance has to…
- Title attribute: At a glance: Career guidance after 12th before the wrong turn gets…
- Caption (and keep the same point in HTML text): After 12th, a list of options is not enough.
**V2 — Asymmetrical pros-and-cons comparison** (place after the section “When career guidance after 12th becomes worth it”)
- File: `career-guidance-after-12th-asymmetrical-career-guidance-after-12th.webp` · 1600×1000 WebP under 200 KB
- Teaches: This usually matters when the next course, degree, or skill decision is starting to carry real cost, generic…
- On-image text (about 25-40 words, shortened from the page; no new claims): Too many acceptable options / Parent and student keep repeating the same confusion / The commitment is getting expensive / You want stronger growth logic, not just a safe-sounding option
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “When career guidance after 12th becomes worth it”: Too many acceptable options; Parent and student keep repeating……
- Title attribute: When career guidance after 12th becomes worth it
- Caption (and keep the same point in HTML text): This usually matters when the next course, degree, or skill decision is starting to carry real cost, generic advice is no longer enough…
**V3 — Decision tree** (place after the section “What stronger career guidance after 12th should actually improve”)
- File: `career-guidance-after-12th-decision-stronger-career-guidance-after.webp` · 1600×1000 WebP under 200 KB
- Teaches: 01 Course and degree shortlist Narrow broad options into a smaller, more serious shortlist instead of getting…
- On-image text (about 25-40 words, shortened from the page; no new claims): Course and degree shortlist / Entrance route versus backup route / Skill direction from year one / Parent decision confidence
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “What stronger career guidance after 12th should…”: Course and degree shortlist; Entrance route versus backup route; Skill direction from…
- Title attribute: What stronger career guidance after 12th should actually improve
- Caption (and keep the same point in HTML text): 01 Course and degree shortlist Narrow broad options into a smaller, more serious shortlist instead of getting lost in endless possibilities.
**V4 — Asymmetrical pros-and-cons comparison** (place after the section “What parents should compare before paying major fees after 12th”)
- File: `career-guidance-after-12th-asymmetrical-parents-should-compare-before.webp` · 1600×1000 WebP under 200 KB
- Teaches: The strongest decision is usually not the loudest option.
- On-image text (about 25-40 words, shortened from the page; no new claims): Fit before prestige pressure / Cost against real growth logic / Skill direction from year one / Backup strength if the first plan slows down
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “What parents should compare before paying major…”: Fit before prestige pressure; Cost against real growth logic…
- Title attribute: What parents should compare before paying major fees after 12th
- Caption (and keep the same point in HTML text): The strongest decision is usually not the loudest option.
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/career-counselling-after-12th/

**H1:** Career counselling after 12th when you already have a shortlist, not a blank page  
**Type:** bofu · **Search priority:** P3 (0 clicks, 5 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-class-11-12.webp` is shared by 6 page(s); acceptable reuse.
4. Hero `hero-class-11-12.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 97% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-after-12th.webp` has no title attribute and no caption.
7. Context visual reuse: `context-after-12th.webp` appears on 3 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 94% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 95% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 96% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-class-11-12.webp` | 97% | eager/high | A Class 11-12 student choosing between Science… | NO | NO |
| `bofu/context-after-12th.webp` | 97% | lazy | A career decision map for comparing work, routes… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-class-11-12.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-after-12th-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: You do not need more course names after 12th — you already have two, three, maybe four in front of you.
- On-image text (about 25-40 words, shortened from the page; no new claims): When career counselling after 12th is the right move / Why resolving a shortlist needs sharper input than generic advice / What a career counselling session after 12th should actually resolve / What a focused counselling session looks like / What to check before paying for career counselling after 12th
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career counselling after 12th when…”: When career counselling after…; Why resolving a shortlist…
- Title attribute: At a glance: Career counselling after 12th when you already have a…
- Caption (and keep the same point in HTML text): You do not need more course names after 12th — you already have two, three, maybe four in front of you.
**V2 — Chronological timeline** (place after the section “When career counselling after 12th is the right move”)
- File: `career-counselling-after-12th-chronological-career-counselling-after-12th.webp` · 1600×1000 WebP under 200 KB
- Teaches: This fits best once the field has already narrowed and the real problem is choosing, not exploring.
- On-image text (about 25-40 words, shortened from the page; no new claims): You already have a shortlist, not a blank page / You keep going in circles between the same options / Every option "sounds fine" on paper / You want a recommendation, not another list
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “When career counselling after 12th is the right…”: You already have a shortlist, not…; You keep going in circles between…; Every…
- Title attribute: When career counselling after 12th is the right move
- Caption (and keep the same point in HTML text): This fits best once the field has already narrowed and the real problem is choosing, not exploring.
**V3 — Decision tree** (place after the section “What a career counselling session after 12th should actually resolve”)
- File: `career-counselling-after-12th-decision-career-counselling-session-after.webp` · 1600×1000 WebP under 200 KB
- Teaches: 01 Pick one option from your existing shortlist The session starts from what you have already narrowed down…
- On-image text (about 25-40 words, shortened from the page; no new claims): Pick one option from your existing shortlist / Settle the disagreement, not just restate it / Pressure-test the "safe" choice / Attach the decision to a skill direction
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “What a career counselling session after 12th…”: Pick one option from your…; Settle the disagreement, not just…; Pressure-test the "safe"…
- Title attribute: What a career counselling session after 12th should actually resolve
- Caption (and keep the same point in HTML text): 01 Pick one option from your existing shortlist The session starts from what you have already narrowed down and works toward a direct…
**V4 — Self-assessment checklist** (place after the section “Common questions before starting”)
- File: `career-counselling-after-12th-self-common-questions-before-starting.webp` · 1600×1000 WebP under 200 KB
- Teaches: 01 What does career counselling after 12th actually help with?
- On-image text (about 25-40 words, shortened from the page; no new claims): 01 What does career counselling after 12th actually help with? / It helps you take a shortlist of two to four stream, course, or college options… / 02 How is this different from career guidance after 12th?
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Self-assessment checklist for “Common questions before starting”: 01 What does career counselling…; It helps you take a shortlist of…; 02 How is this different…
- Title attribute: Common questions before starting
- Caption (and keep the same point in HTML text): 01 What does career counselling after 12th actually help with?
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/career-counselling-for-11th-class-students/

**H1:** Career counselling for 11th class students sorting out electives, stream-fit, and exam-track hours  
**Type:** bofu · **Search priority:** P3 (0 clicks, 24 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-class-11-12.webp` is shared by 6 page(s); acceptable reuse.
4. Hero `hero-class-11-12.webp` has no title attribute and no caption.
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
| `bofu/hero-class-11-12.webp` | 97% | eager/high | A Class 11-12 student choosing between Science… | NO | NO |
| `bofu/context-student-parent-map.webp` | 97% | lazy | A student and parent career decision map from… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-class-11-12.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-for-11th-class-students-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Future Career School offers career counselling for 11th class students who have already entered Science…
- On-image text (about 25-40 words, shortened from the page; no new claims): What the 11th class decision actually involves once you are already… / How this is different from Class 10 and from after-12th counselling / Why the 11th-class elective and stream-fit decision needs sharper… / What career counselling for 11th class students should actually… / What to check before paying for 11th-class career counselling
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career counselling for 11th class…”: What the 11th class decision…; How this is different from Class……
- Title attribute: At a glance: Career counselling for 11th class students sorting out…
- Caption (and keep the same point in HTML text): Future Career School offers career counselling for 11th class students who have already entered Science, Commerce, or Arts and now have to…
**V2 — Decision tree by situation** (place after the section “What the 11th class decision actually involves once you are already…”)
- File: `career-counselling-for-11th-class-students-decision-11th-class-decision-actually.webp` · 1600×1000 WebP under 200 KB
- Teaches: Choosing Science, Commerce, or Arts was the first decision.
- On-image text (about 25-40 words, shortened from the page; no new claims): The elective or subject combination inside the stream / Whether the stream picked at Class 10 still actually fits / How much of the year goes to boards, entrance prep, and one backup… / How to hold the parent and school conversation without losing the…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree by situation for “What the 11th class decision actually involves…”: The elective or subject…; Whether the stream picked at…; How much of the year…
- Title attribute: What the 11th class decision actually involves once you are already…
- Caption (and keep the same point in HTML text): Choosing Science, Commerce, or Arts was the first decision.
**V3 — Asymmetrical pros-and-cons comparison** (place after the section “How this is different from Class 10 and from after-12th counselling”)
- File: `career-counselling-for-11th-class-students-asymmetrical-different-class-after-12th.webp` · 1600×1000 WebP under 200 KB
- Teaches: Class 10, Class 11, and after 12th can look like one long stretch of the same decision from the outside.
- On-image text (about 25-40 words, shortened from the page; no new claims): Before 11th, the question was which stream to enter / Inside 11th, the question is what to do with the stream already… / After 12th, the question moves to a specific course and college / A stream switch is still possible here, but the window is closing
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “How this is different from Class 10 and from…”: Before 11th, the question was…; Inside 11th, the question is what……
- Title attribute: How this is different from Class 10 and from after-12th counselling
- Caption (and keep the same point in HTML text): Class 10, Class 11, and after 12th can look like one long stretch of the same decision from the outside.
**V4 — Linear process chain or roadmap** (place after the section “Career Counselling Plans for 11th Class Students”)
- File: `career-counselling-for-11th-class-students-linear-career-counselling-plans-11th.webp` · 1600×1000 WebP under 200 KB
- Teaches: Students Student path Student Career Counselling Practical student career counselling before the wrong path…
- On-image text (about 25-40 words, shortened from the page; no new claims): Student Career Counselling / Students Student path Student Career Counselling Practical student career… / Limited-time student offer ₹3000 ₹250 for the first 1-on-1 session A… / Book 1-on-1 Online across India Avoid Wrong streams, outdated degrees, and…
- Numbers: Limited-time student offer ₹3000 ₹250 for the first 1-on-1 session A low-friction first step before the wrong path costs more time and money. | Continuous career guidance Limited-time annual price ₹29000 ₹12000 Includes the 1-on-1 and up to 24 small-group sessions across the year.
- Alt: Linear process chain or roadmap for “Career Counselling Plans for 11th Class Students”: Student Career Counselling; Students Student path Student……
- Title attribute: Career Counselling Plans for 11th Class Students
- Caption (and keep the same point in HTML text): Students Student path Student Career Counselling Practical student career counselling before the wrong path wastes years, money, and future…
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/career-counselling-for-12th-students/

**H1:** Career counselling for 12th students once your real marks are in and the clock is already running  
**Type:** bofu · **Search priority:** P3 (0 clicks, 6 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-class-11-12.webp` is shared by 6 page(s); acceptable reuse.
4. Hero `hero-class-11-12.webp` has no title attribute and no caption.
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
| `bofu/hero-class-11-12.webp` | 97% | eager/high | A Class 11-12 student choosing between Science… | NO | NO |
| `bofu/context-student-parent-map.webp` | 98% | lazy | A student and parent career decision map from… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-class-11-12.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-for-12th-students-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Future Career School offers career counselling for 12th students for the exact moment after results — when…
- On-image text (about 25-40 words, shortened from the page; no new claims): Why the moment right after results is different from general… / Why results-day counselling has to be sharper than general advice / What career counselling for 12th students solves right after results / Four real situations this counselling is built for / What to have ready before a results-day counselling session
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career counselling for 12th students…”: Why the moment right after…; Why results-day counselling has……
- Title attribute: At a glance: Career counselling for 12th students once your real…
- Caption (and keep the same point in HTML text): Future Career School offers career counselling for 12th students for the exact moment after results — when the number in front of you is…
**V2 — Asymmetrical pros-and-cons comparison** (place after the section “Why the moment right after results is different from general…”)
- File: `career-counselling-for-12th-students-asymmetrical-moment-right-after-results.webp` · 1600×1000 WebP under 200 KB
- Teaches: Before results, every option is still theoretical.
- On-image text (about 25-40 words, shortened from the page; no new claims): The number in front of you is real now, not a projection / The admission clock is already running / Parents and student are reacting, not deciding / One conversation now beats a rushed one next week
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “Why the moment right after results is different…”: The number in front of you is…; The admission clock is already……
- Title attribute: Why the moment right after results is different from general…
- Caption (and keep the same point in HTML text): Before results, every option is still theoretical.
**V3 — Decision tree by situation** (place after the section “Four real situations this counselling is built for”)
- File: `career-counselling-for-12th-students-decision-four-real-situations-counselling.webp` · 1600×1000 WebP under 200 KB
- Teaches: These are the exact conversations that come up in the days right after 12th results, not general…
- On-image text (about 25-40 words, shortened from the page; no new claims): My marks came in lower than expected / My rank missed my target course or college by a small margin / My parents want one option and I want another / I do well but I still do not know which specific course to lock in
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree by situation for “Four real situations this counselling is built for”: My marks came in lower than…; My rank missed my target course…; My parents…
- Title attribute: Four real situations this counselling is built for
- Caption (and keep the same point in HTML text): These are the exact conversations that come up in the days right after 12th results, not general course-planning questions.
**V4 — Chronological timeline** (place after the section “What to have ready before a results-day counselling session”)
- File: `career-counselling-for-12th-students-chronological-have-ready-before-results.webp` · 1600×1000 WebP under 200 KB
- Teaches: A results-day session works best when the real numbers and real constraints are already on the table instead…
- On-image text (about 25-40 words, shortened from the page; no new claims): Your actual marks, rank, or percentile / The 2 to 4 routes still realistically open / What each parent actually wants and why / Any hard deadline you already know about
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “What to have ready before a results-day…”: Your actual marks, rank, or…; The 2 to 4 routes still…; What each parent actually wants…
- Title attribute: What to have ready before a results-day counselling session
- Caption (and keep the same point in HTML text): A results-day session works best when the real numbers and real constraints are already on the table instead of being discovered…
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/career-guidance-after-12th-computer-science/

**H1:** Career guidance after 12th for computer science students before a hard-won seat becomes an expensive assumption  
**Type:** bofu · **Search priority:** P3 (0 clicks, 0 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-class-11-12.webp` is shared by 6 page(s); acceptable reuse.
4. Hero `hero-class-11-12.webp` has no title attribute and no caption.
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
| `bofu/hero-class-11-12.webp` | 97% | eager/high | A Class 11-12 student choosing between Science… | NO | NO |
| `bofu/context-engineering-tech.webp` | 98% | lazy | An engineering career visual showing foundations… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-class-11-12.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-guidance-after-12th-computer-science-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Future Career School offers career guidance after 12th for computer science students choosing between a CS…
- On-image text (about 25-40 words, shortened from the page; no new claims): When career guidance after 12th for computer science becomes worth it / Why a computer science decision needs sharper guidance than 'CS is a… / The three checks a computer science decision should pass / If the CS cutoff pushed you into an allied branch instead / What to check before paying for career guidance after 12th for…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career guidance after 12th for…”: When career guidance after 12th…; Why a computer science decision……
- Title attribute: At a glance: Career guidance after 12th for computer science students…
- Caption (and keep the same point in HTML text): Future Career School offers career guidance after 12th for computer science students choosing between a CS seat, an allied branch, and…
**V2 — Asymmetrical pros-and-cons comparison** (place after the section “When career guidance after 12th for computer science becomes worth it”)
- File: `career-guidance-after-12th-computer-science-asymmetrical-career-guidance-after-12th.webp` · 1600×1000 WebP under 200 KB
- Teaches: This usually matters right at the point where the CS admission decision — or the allied-branch decision it…
- On-image text (about 25-40 words, shortened from the page; no new claims): You have a CS seat, but no idea if you actually like coding / The CS cutoff pushed you into IT, AI & Data Science, or ECE instead / You are stuck choosing between BTech CS, BCA, and a plain BSc CS / Everyone around you picked CS, and you followed
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “When career guidance after 12th for computer…”: You have a CS seat, but no idea…; The CS cutoff pushed you into IT……
- Title attribute: When career guidance after 12th for computer science becomes worth it
- Caption (and keep the same point in HTML text): This usually matters right at the point where the CS admission decision — or the allied-branch decision it forced — is about to turn into…
**V3 — Decision tree** (place after the section “The three checks a computer science decision should pass”)
- File: `career-guidance-after-12th-computer-science-decision-three-checks-computer-science.webp` · 1600×1000 WebP under 200 KB
- Teaches: Call these the three CS-fit checks: real coding fit, the right course format, and market positioning beyond…
- On-image text (about 25-40 words, shortened from the page; no new claims): Check one — real coding fit, not resume fit / Check two — the right course format for your actual goal / Check three — market positioning beyond the branch label / The allied-branch question, if the CS cutoff did not go your way
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “The three checks a computer science decision…”: Check one — real coding fit, not…; Check two — the right course…; Check three — market…
- Title attribute: The three checks a computer science decision should pass
- Caption (and keep the same point in HTML text): Call these the three CS-fit checks: real coding fit, the right course format, and market positioning beyond the branch label.
**V4 — Self-assessment checklist** (place after the section “Questions computer science students ask before choosing career…”)
- File: `career-guidance-after-12th-computer-science-self-questions-computer-science-students.webp` · 1600×1000 WebP under 200 KB
- Teaches: 01 I got a CS seat through cutoff luck, family pressure, or just following the crowd — how do I actually know…
- On-image text (about 25-40 words, shortened from the page; no new claims): 01 I got a CS seat through cutoff luck, family pressure, or just following the… / Run it through the three CS-fit checks: real coding fit (not just interest in… / If you cannot answer those three honestly yet, that is exactly what career…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Self-assessment checklist for “Questions computer science students ask before…”: 01 I got a CS seat through cutoff…; Run it through the three CS-fit…; If you…
- Title attribute: Questions computer science students ask before choosing career…
- Caption (and keep the same point in HTML text): 01 I got a CS seat through cutoff luck, family pressure, or just following the crowd — how do I actually know if it is right for me?
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---
