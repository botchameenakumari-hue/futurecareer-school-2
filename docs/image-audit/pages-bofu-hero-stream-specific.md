# Image audit — service/other pages: bofu-hero-stream-specific

6 pages, ordered by search priority. Submit one page section at a time with `docs/image-audit/00-READ-FIRST.md`.

### /services/career-counselling-and-career-guidance/career-counselling-for-pcb-students/

**H1:** Career counselling for PCB students when the whole plan rests on one exam  
**Type:** bofu · **Search priority:** P1 (3 clicks, 45 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-stream-specific.webp` is shared by 6 page(s); acceptable reuse.
4. Hero `hero-stream-specific.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 97% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-healthcare-aspirant.webp` has no title attribute and no caption.
7. Context visual reuse: `context-healthcare-aspirant.webp` appears on 3 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 94% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 95% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 96% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-stream-specific.webp` | 97% | eager/high | Four study streams shown side by side: biology… | NO | NO |
| `bofu/context-healthcare-aspirant.webp` | 97% | lazy | A healthcare career visual showing patients… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-stream-specific.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-for-pcb-students-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Career counselling for PCB students should do more than repeat "aim for NEET." It should help you plan around…
- On-image text (about 25-40 words, shortened from the page; no new claims): The specific pressure PCB students carry that other students do not / Why PCB decisions need sharper support than generic exam advice / What a PCB background actually supports beyond MBBS / Whichever branch you are in, the decision still deserves real… / What to check before paying for PCB career counselling
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career counselling for PCB students…”: The specific pressure PCB…; Why PCB decisions need sharper……
- Title attribute: At a glance: Career counselling for PCB students when the whole plan…
- Caption (and keep the same point in HTML text): Career counselling for PCB students should do more than repeat "aim for NEET." It should help you plan around the pressure honestly…
**V2 — Decision tree** (place after the section “Whichever branch you are in, the decision still deserves real…”)
- File: `career-counselling-for-pcb-students-decision-whichever-branch-decision-still.webp` · 1600×1000 WebP under 200 KB
- Teaches: Most PCB guidance only prepares for one outcome.
- On-image text (about 25-40 words, shortened from the page; no new claims): If NEET is still the plan / If NEET did not go the way you needed / If medicine was never really your choice
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “Whichever branch you are in, the decision still…”: If NEET is still the plan; If NEET did not go the way you…; If medicine was never really…
- Title attribute: Whichever branch you are in, the decision still deserves real…
- Caption (and keep the same point in HTML text): Most PCB guidance only prepares for one outcome.
**V3 — Linear process chain or roadmap** (place after the section “Career Counselling Plans for PCB Students”)
- File: `career-counselling-for-pcb-students-linear-career-counselling-plans-pcb.webp` · 1600×1000 WebP under 200 KB
- Teaches: Students Student path Student Career Counselling Practical student career counselling before the wrong path…
- On-image text (about 25-40 words, shortened from the page; no new claims): Student Career Counselling / Students Student path Student Career Counselling Practical student career… / Limited-time student offer ₹3000 ₹250 for the first 1-on-1 session A… / Book 1-on-1 Online across India Avoid Wrong streams, outdated degrees, and…
- Numbers: Limited-time student offer ₹3000 ₹250 for the first 1-on-1 session A low-friction first step before the wrong path costs more time and money. | Continuous career guidance Limited-time annual price ₹29000 ₹12000 Includes the 1-on-1 and up to 24 small-group sessions across the year.
- Alt: Linear process chain or roadmap for “Career Counselling Plans for PCB Students”: Student Career Counselling; Students Student path Student…; Limited-time…
- Title attribute: Career Counselling Plans for PCB Students
- Caption (and keep the same point in HTML text): Students Student path Student Career Counselling Practical student career counselling before the wrong path wastes years, money, and future…
**V4 — Self-assessment checklist** (place after the section “Common questions before starting”)
- File: `career-counselling-for-pcb-students-self-common-questions-before-starting.webp` · 1600×1000 WebP under 200 KB
- Teaches: 01 What should career counselling for PCB students actually help with?
- On-image text (about 25-40 words, shortened from the page; no new claims): 01 What should career counselling for PCB students actually help with? / It should help you plan around NEET pressure honestly, understand real… / 02 I am scared I will not clear NEET.
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Self-assessment checklist for “Common questions before starting”: 01 What should career counselling…; It should help you plan around…; 02 I am scared I will…
- Title attribute: Common questions before starting
- Caption (and keep the same point in HTML text): 01 What should career counselling for PCB students actually help with?
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/career-counselling-for-pcm-students/

**H1:** Career counselling for PCM students when "just do engineering" is not a real decision  
**Type:** bofu · **Search priority:** P2 (1 clicks, 25 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-stream-specific.webp` is shared by 6 page(s); acceptable reuse.
4. Hero `hero-stream-specific.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 97% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-stream-choice.webp` has no title attribute and no caption.
7. Context visual reuse: `context-stream-choice.webp` appears on 3 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 94% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 95% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 96% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-stream-specific.webp` | 97% | eager/high | Four study streams shown side by side: biology… | NO | NO |
| `bofu/context-stream-choice.webp` | 98% | lazy | A stream decision visual showing science… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-stream-specific.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-for-pcm-students-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Career counselling for PCM students should do more than repeat "engineering" or "computer science" as the…
- On-image text (about 25-40 words, shortened from the page; no new claims): The specific pressure PCM students carry that other students do not / Why PCM decisions need sharper support than generic exam advice / What a PCM background actually supports beyond a default engineering… / Whichever branch you are in, the decision still deserves real… / What to check before paying for PCM career counselling
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career counselling for PCM students…”: The specific pressure PCM…; Why PCM decisions need sharper……
- Title attribute: At a glance: Career counselling for PCM students when "just do…
- Caption (and keep the same point in HTML text): Career counselling for PCM students should do more than repeat "engineering" or "computer science" as the default answer.
**V2 — Decision tree** (place after the section “Whichever branch you are in, the decision still deserves real…”)
- File: `career-counselling-for-pcm-students-decision-whichever-branch-decision-still.webp` · 1600×1000 WebP under 200 KB
- Teaches: Most PCM guidance only prepares for one outcome.
- On-image text (about 25-40 words, shortened from the page; no new claims): If engineering entrance results go well / If the result was not what you needed / If engineering was never really your choice
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “Whichever branch you are in, the decision still…”: If engineering entrance results…; If the result was not what you…; If engineering was…
- Title attribute: Whichever branch you are in, the decision still deserves real…
- Caption (and keep the same point in HTML text): Most PCM guidance only prepares for one outcome.
**V3 — Linear process chain or roadmap** (place after the section “Career Counselling Plans for PCM Students”)
- File: `career-counselling-for-pcm-students-linear-career-counselling-plans-pcm.webp` · 1600×1000 WebP under 200 KB
- Teaches: Students Student path Student Career Counselling Practical student career counselling before the wrong path…
- On-image text (about 25-40 words, shortened from the page; no new claims): Student Career Counselling / Students Student path Student Career Counselling Practical student career… / Limited-time student offer ₹3000 ₹250 for the first 1-on-1 session A… / Book 1-on-1 Online across India Avoid Wrong streams, outdated degrees, and…
- Numbers: Limited-time student offer ₹3000 ₹250 for the first 1-on-1 session A low-friction first step before the wrong path costs more time and money. | Continuous career guidance Limited-time annual price ₹29000 ₹12000 Includes the 1-on-1 and up to 24 small-group sessions across the year.
- Alt: Linear process chain or roadmap for “Career Counselling Plans for PCM Students”: Student Career Counselling; Students Student path Student…; Limited-time…
- Title attribute: Career Counselling Plans for PCM Students
- Caption (and keep the same point in HTML text): Students Student path Student Career Counselling Practical student career counselling before the wrong path wastes years, money, and future…
**V4 — Self-assessment checklist** (place after the section “Common questions before starting”)
- File: `career-counselling-for-pcm-students-self-common-questions-before-starting.webp` · 1600×1000 WebP under 200 KB
- Teaches: 01 What should career counselling for PCM students actually help with?
- On-image text (about 25-40 words, shortened from the page; no new claims): 01 What should career counselling for PCM students actually help with? / It should help you compare engineering branches, computer science specifically… / 02 Is this the same as career guidance after 12th science?
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Self-assessment checklist for “Common questions before starting”: 01 What should career counselling…; It should help you compare…; 02 Is this the same as…
- Title attribute: Common questions before starting
- Caption (and keep the same point in HTML text): 01 What should career counselling for PCM students actually help with?
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/career-counselling-for-arts-students/

**H1:** Career counselling for arts students who are done hearing "arts has no future"  
**Type:** bofu · **Search priority:** P3 (0 clicks, 2 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-stream-specific.webp` is shared by 6 page(s); acceptable reuse.
4. Hero `hero-stream-specific.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 97% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-creative-media.webp` has no title attribute and no caption.
7. Context visual reuse: `context-creative-media.webp` appears on 1 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 94% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 95% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 96% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-stream-specific.webp` | 97% | eager/high | Four study streams shown side by side: biology… | NO | NO |
| `bofu/context-creative-media.webp` | 98% | lazy | A creative career visual showing idea, craft… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-stream-specific.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-for-arts-students-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Arts students hear the stigma before they hear the actual paths.
- On-image text (about 25-40 words, shortened from the page; no new claims): The arts stigma you are actually dealing with / Replace the stigma with a specific plan before another year drifts… / Real career paths that come out of arts / What should actually decide between these paths / Why arts-specific guidance has to go further than a general session
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career counselling for arts students…”: The arts stigma you are actually…; Replace the stigma with a……
- Title attribute: At a glance: Career counselling for arts students who are done…
- Caption (and keep the same point in HTML text): Arts students hear the stigma before they hear the actual paths.
**V2 — Linear process chain or roadmap** (place after the section “Real career paths that come out of arts”)
- File: `career-counselling-for-arts-students-linear-real-career-paths-come.webp` · 1600×1000 WebP under 200 KB
- Teaches: These are not the only options, but they cover the range most arts students are genuinely choosing between…
- On-image text (about 25-40 words, shortened from the page; no new claims): Law / Design (UX/UI, graphic, communication) / Media, journalism, and content / Civil services and public policy / Humanities research and academia / Works best for students who enjoy argument, dense reading, and structured thinking / Requires early commitment to entrance prep, usually from class 11
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Linear process chain or roadmap for “Real career paths that come out of arts”: Law; Design (UX/UI, graphic…; Media, journalism, and content
- Title attribute: Real career paths that come out of arts
- Caption (and keep the same point in HTML text): These are not the only options, but they cover the range most arts students are genuinely choosing between right now.
**V3 — Linear process chain or roadmap** (place after the section “Career Counselling Plans for Arts Students”)
- File: `career-counselling-for-arts-students-linear-career-counselling-plans-arts.webp` · 1600×1000 WebP under 200 KB
- Teaches: Students Student path Student Career Counselling Practical student career counselling before the wrong path…
- On-image text (about 25-40 words, shortened from the page; no new claims): Student Career Counselling / Students Student path Student Career Counselling Practical student career… / Limited-time student offer ₹3000 ₹250 for the first 1-on-1 session A… / Book 1-on-1 Online across India Avoid Wrong streams, outdated degrees, and…
- Numbers: Limited-time student offer ₹3000 ₹250 for the first 1-on-1 session A low-friction first step before the wrong path costs more time and money. | Continuous career guidance Limited-time annual price ₹29000 ₹12000 Includes the 1-on-1 and up to 24 small-group sessions across the year.
- Alt: Linear process chain or roadmap for “Career Counselling Plans for Arts Students”: Student Career Counselling; Students Student path Student…; Limited-time…
- Title attribute: Career Counselling Plans for Arts Students
- Caption (and keep the same point in HTML text): Students Student path Student Career Counselling Practical student career counselling before the wrong path wastes years, money, and future…
**V4 — Self-assessment checklist** (place after the section “Common questions before starting”)
- File: `career-counselling-for-arts-students-self-common-questions-before-starting.webp` · 1600×1000 WebP under 200 KB
- Teaches: 01 Is arts really a weaker stream than science or commerce?
- On-image text (about 25-40 words, shortened from the page; no new claims): 01 Is arts really a weaker stream than science or commerce? / No. / That belief usually comes from comparing entrance cut-offs, not comparing real…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Self-assessment checklist for “Common questions before starting”: 01 Is arts really a weaker stream…; No.; That belief usually comes from…
- Title attribute: Common questions before starting
- Caption (and keep the same point in HTML text): 01 Is arts really a weaker stream than science or commerce?
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/career-counselling-for-ca-aspirants/

**H1:** Career counselling for CA aspirants before another attempt costs another year  
**Type:** bofu · **Search priority:** P3 (0 clicks, 8 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-stream-specific.webp` is shared by 6 page(s); acceptable reuse.
4. Hero `hero-stream-specific.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 97% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-stream-choice.webp` was chosen by the regex in `BofuContextVisual.astro`; a cleaner match for this keyword is `context-exam-pressure.webp`.
7. Context visual `context-stream-choice.webp` has no title attribute and no caption.
8. Context visual reuse: `context-stream-choice.webp` appears on 3 pages.
9. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 94% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 95% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 96% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-stream-specific.webp` | 97% | eager/high | Four study streams shown side by side: biology… | NO | NO |
| `bofu/context-stream-choice.webp` | 98% | lazy | A stream decision visual showing science… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-stream-specific.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-for-ca-aspirants-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Career counselling for CA aspirants should help with the hardest calls in this journey: whether another…
- On-image text (about 25-40 words, shortened from the page; no new claims): The decision pressure behind a CA attempt / Whichever level you are at, drifting into another attempt without a… / Real decision points this guidance works through / Why this needs to go beyond "attempt again" or "just quit" / What to check before paying for career counselling aimed at CA…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career counselling for CA aspirants…”: The decision pressure behind a CA…; Whichever level you are…
- Title attribute: At a glance: Career counselling for CA aspirants before another…
- Caption (and keep the same point in HTML text): Career counselling for CA aspirants should help with the hardest calls in this journey: whether another attempt is still worth the fees and…
**V2 — Self-assessment checklist** (place after the section “Real decision points this guidance works through”)
- File: `career-counselling-for-ca-aspirants-self-real-decision-points-guidance.webp` · 1600×1000 WebP under 200 KB
- Teaches: Not every CA aspirant searching this is at the same stage.
- On-image text (about 25-40 words, shortened from the page; no new claims): Weighing a first serious CA attempt against a clear-eyed alternative / Deciding if the next attempt is still the highest-leverage move / Making the articleship-and-exam balance sustainable, not just… / Converting Foundation, Intermediate, or articleship experience into a… / Maps your natural strengths and study style against what CA preparation and the work of a… / Names the realistic attempt count, cost, and stipend-period income upfront, not after the… / Compares CA honestly against CS, CMA, or a B.Com-plus-skills route that could use the…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Self-assessment checklist for “Real decision points this guidance works through”: Weighing a first serious CA…; Deciding if the next attempt is…; Making the…
- Title attribute: Real decision points this guidance works through
- Caption (and keep the same point in HTML text): Not every CA aspirant searching this is at the same stage.
**V3 — Chronological timeline** (place after the section “What should actually decide, when the exam result alone will not tell…”)
- File: `career-counselling-for-ca-aspirants-chronological-should-actually-decide-exam.webp` · 1600×1000 WebP under 200 KB
- Teaches: Attempting again, continuing as you are, or stepping back from Chartered Accountancy is rarely one clean…
- On-image text (about 25-40 words, shortened from the page; no new claims): Genuine fit versus family prestige and default momentum / What one more attempt actually costs versus what changed / Sunk years versus a forward-looking decision / A partial CA credential as an asset, not a gap
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “What should actually decide, when the exam result…”: Genuine fit versus family…; What one more attempt actually…; Sunk years versus…
- Title attribute: What should actually decide, when the exam result alone will not tell…
- Caption (and keep the same point in HTML text): Attempting again, continuing as you are, or stepping back from Chartered Accountancy is rarely one clean answer.
**V4 — Linear process chain or roadmap** (place after the section “Career Counselling Plans for CA Aspirants”)
- File: `career-counselling-for-ca-aspirants-linear-career-counselling-plans-aspirants.webp` · 1600×1000 WebP under 200 KB
- Teaches: Students Student path Student Career Counselling Practical student career counselling before the wrong path…
- On-image text (about 25-40 words, shortened from the page; no new claims): Student Career Counselling / Students Student path Student Career Counselling Practical student career… / Limited-time student offer ₹3000 ₹250 for the first 1-on-1 session A… / Book 1-on-1 Online across India Avoid Wrong streams, outdated degrees, and…
- Numbers: Limited-time student offer ₹3000 ₹250 for the first 1-on-1 session A low-friction first step before the wrong path costs more time and money. | Continuous career guidance Limited-time annual price ₹29000 ₹12000 Includes the 1-on-1 and up to 24 small-group sessions across the year.
- Alt: Linear process chain or roadmap for “Career Counselling Plans for CA Aspirants”: Student Career Counselling; Students Student path Student…; Limited-time…
- Title attribute: Career Counselling Plans for CA Aspirants
- Caption (and keep the same point in HTML text): Students Student path Student Career Counselling Practical student career counselling before the wrong path wastes years, money, and future…
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/career-counselling-for-commerce-students/

**H1:** Career counselling for commerce students before a CA, CS, CMA, or B.Com decision gets expensive  
**Type:** bofu · **Search priority:** P3 (0 clicks, 18 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-stream-specific.webp` is shared by 6 page(s); acceptable reuse.
4. Hero `hero-stream-specific.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 97% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-stream-choice.webp` has no title attribute and no caption.
7. Context visual reuse: `context-stream-choice.webp` appears on 3 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 94% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 95% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 96% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-stream-specific.webp` | 97% | eager/high | Four study streams shown side by side: biology… | NO | NO |
| `bofu/context-stream-choice.webp` | 97% | lazy | A stream decision visual showing science… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-stream-specific.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-for-commerce-students-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Commerce after 12th does not stay one decision.
- On-image text (about 25-40 words, shortened from the page; no new claims): When career counselling for commerce students becomes worth it / Why the commerce decision needs sharper support than generic stream… / What career counselling for commerce students should actually improve / CA, CS, CMA, or B.Com plus skills — what each route actually demands / What to check before paying for career counselling for commerce…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career counselling for commerce…”: When career counselling for…; Why the commerce decision needs……
- Title attribute: At a glance: Career counselling for commerce students before a CA, CS…
- Caption (and keep the same point in HTML text): Commerce after 12th does not stay one decision.
**V2 — Asymmetrical pros-and-cons comparison** (place after the section “When career counselling for commerce students becomes worth it”)
- File: `career-counselling-for-commerce-students-asymmetrical-career-counselling-commerce-students.webp` · 1600×1000 WebP under 200 KB
- Teaches: This usually matters once the CA, CS, CMA, B.Com, or BBA choice starts carrying real cost, time, and family…
- On-image text (about 25-40 words, shortened from the page; no new claims): CA, CS, CMA, B.Com, or BBA — and no clear way to choose / Already inside CA, CS, or CMA and reconsidering / Family treats CA as the only real commerce outcome / Doubting whether commerce itself was the right stream
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “When career counselling for commerce students…”: CA, CS, CMA, B.Com, or BBA — and…; Already inside CA, CS, or CMA…
- Title attribute: When career counselling for commerce students becomes worth it
- Caption (and keep the same point in HTML text): This usually matters once the CA, CS, CMA, B.Com, or BBA choice starts carrying real cost, time, and family pressure — and generic…
**V3 — Linear process chain or roadmap** (place after the section “CA, CS, CMA, or B.Com plus skills — what each route actually demands”)
- File: `career-counselling-for-commerce-students-linear-cma-com-plus-skills.webp` · 1600×1000 WebP under 200 KB
- Teaches: Treat these as different professional bets, not interchangeable commerce labels.
- On-image text (about 25-40 words, shortened from the page; no new claims): CA — audit, tax, and compliance depth / CS — corporate law and governance / CMA — costing and manufacturing finance / B.Com or BBA plus a deliberate skill stack
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Linear process chain or roadmap for “CA, CS, CMA, or B.Com plus skills — what each…”: CA — audit, tax, and compliance…; CS — corporate law and governance; CMA…
- Title attribute: CA, CS, CMA, or B.Com plus skills — what each route actually demands
- Caption (and keep the same point in HTML text): Treat these as different professional bets, not interchangeable commerce labels.
**V4 — Linear process chain or roadmap** (place after the section “Career Counselling Plans for Commerce Students”)
- File: `career-counselling-for-commerce-students-linear-career-counselling-plans-commerce.webp` · 1600×1000 WebP under 200 KB
- Teaches: Students Student path Student Career Counselling Practical student career counselling before the wrong path…
- On-image text (about 25-40 words, shortened from the page; no new claims): Student Career Counselling / Students Student path Student Career Counselling Practical student career… / Limited-time student offer ₹3000 ₹250 for the first 1-on-1 session A… / Book 1-on-1 Online across India Avoid Wrong streams, outdated degrees, and…
- Numbers: Limited-time student offer ₹3000 ₹250 for the first 1-on-1 session A low-friction first step before the wrong path costs more time and money. | Continuous career guidance Limited-time annual price ₹29000 ₹12000 Includes the 1-on-1 and up to 24 small-group sessions across the year.
- Alt: Linear process chain or roadmap for “Career Counselling Plans for Commerce Students”: Student Career Counselling; Students Student path Student…; Limited-time…
- Title attribute: Career Counselling Plans for Commerce Students
- Caption (and keep the same point in HTML text): Students Student path Student Career Counselling Practical student career counselling before the wrong path wastes years, money, and future…
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/career-counselling-for-neet-aspirants/

**H1:** Career counselling for NEET aspirants weighing one more attempt against one clear exit  
**Type:** bofu · **Search priority:** P3 (0 clicks, 5 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-stream-specific.webp` is shared by 6 page(s); acceptable reuse.
4. Hero `hero-stream-specific.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 97% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-healthcare-aspirant.webp` has no title attribute and no caption.
7. Context visual reuse: `context-healthcare-aspirant.webp` appears on 3 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 95% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 95% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 96% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-stream-specific.webp` | 97% | eager/high | Four study streams shown side by side: biology… | NO | NO |
| `bofu/context-healthcare-aspirant.webp` | 98% | lazy | A healthcare career visual showing patients… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-stream-specific.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-for-neet-aspirants-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Career counselling for NEET aspirants should go beyond "attempt again" advice repeated by every coaching…
- On-image text (about 25-40 words, shortened from the page; no new claims): The pressure that builds inside NEET prep culture itself / Real decision points this counselling works through / Why NEET drop-year decisions need more than another pep talk / The 'one more attempt' decision, without sunk-cost thinking / What to check before paying for NEET-aspirant career counselling
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career counselling for NEET…”: The pressure that builds inside…; Real decision points this…; Why NEET…
- Title attribute: At a glance: Career counselling for NEET aspirants weighing one more…
- Caption (and keep the same point in HTML text): Career counselling for NEET aspirants should go beyond "attempt again" advice repeated by every coaching centre.
**V2 — Linear process chain or roadmap** (place after the section “The pressure that builds inside NEET prep culture itself”)
- File: `career-counselling-for-neet-aspirants-linear-pressure-builds-inside-neet.webp` · 1600×1000 WebP under 200 KB
- Teaches: These pressures are specific to being inside NEET preparation right now, and they deserve a decision…
- On-image text (about 25-40 words, shortened from the page; no new claims): A second or third drop year starts to feel normal / The coaching schedule leaves no room to think about anything else / The fees already paid make walking away feel like wasting money twice / Mental health strain gets treated as the price of entry, not a signal
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Linear process chain or roadmap for “The pressure that builds inside NEET prep culture…”: A second or third drop year…; The coaching schedule leaves no…; The…
- Title attribute: The pressure that builds inside NEET prep culture itself
- Caption (and keep the same point in HTML text): These pressures are specific to being inside NEET preparation right now, and they deserve a decision framework that protects your mental…
**V3 — Self-assessment checklist** (place after the section “Real decision points this counselling works through”)
- File: `career-counselling-for-neet-aspirants-self-real-decision-points-counselling.webp` · 1600×1000 WebP under 200 KB
- Teaches: Not every NEET aspirant searching this is at the same stage.
- On-image text (about 25-40 words, shortened from the page; no new claims): Weighing NEET against other paths before coaching fees add up / Judging whether another coaching year is the highest-leverage move / Deciding when the coaching-factory model has stopped working for you / Converting NEET-prep discipline into a real next direction / Maps your real strengths and interest in biology against what a coaching-heavy NEET year… / Names the realistic time, money, and opportunity cost of a coaching commitment upfront… / Compares NEET honestly against para-medical, allied-health, biotech, and pharmacy routes…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Self-assessment checklist for “Real decision points this counselling works…”: Weighing NEET against other paths…; Judging whether another coaching…; Deciding…
- Title attribute: Real decision points this counselling works through
- Caption (and keep the same point in HTML text): Not every NEET aspirant searching this is at the same stage.
**V4 — Linear process chain or roadmap** (place after the section “Career Counselling Plans for NEET Aspirants”)
- File: `career-counselling-for-neet-aspirants-linear-career-counselling-plans-neet.webp` · 1600×1000 WebP under 200 KB
- Teaches: Students Student path Student Career Counselling Practical student career counselling before the wrong path…
- On-image text (about 25-40 words, shortened from the page; no new claims): Student Career Counselling / Students Student path Student Career Counselling Practical student career… / Limited-time student offer ₹3000 ₹250 for the first 1-on-1 session A… / Book 1-on-1 Online across India Avoid Wrong streams, outdated degrees, and…
- Numbers: Limited-time student offer ₹3000 ₹250 for the first 1-on-1 session A low-friction first step before the wrong path costs more time and money. | Continuous career guidance Limited-time annual price ₹29000 ₹12000 Includes the 1-on-1 and up to 24 small-group sessions across the year.
- Alt: Linear process chain or roadmap for “Career Counselling Plans for NEET Aspirants”: Student Career Counselling; Students Student path Student…; Limited-time…
- Title attribute: Career Counselling Plans for NEET Aspirants
- Caption (and keep the same point in HTML text): Students Student path Student Career Counselling Practical student career counselling before the wrong path wastes years, money, and future…
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---
