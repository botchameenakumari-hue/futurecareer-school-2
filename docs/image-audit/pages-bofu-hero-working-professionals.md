# Image audit — service/other pages: bofu-hero-working-professionals

19 pages, ordered by search priority. Submit one page section at a time with `docs/image-audit/00-READ-FIRST.md`.

### /services/career-counselling-and-career-guidance/executive-career-coaching/

**H1:** Executive career coaching for the senior moves that are harder to reverse  
**Type:** bofu · **Search priority:** P2 (0 clicks, 35 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-working-professionals.webp` is shared by 19 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-working-professionals.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 97% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-professional-pivot.webp` has no title attribute and no caption.
7. Context visual reuse: `context-professional-pivot.webp` appears on 10 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 94% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 95% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 96% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-working-professionals.webp` | 97% | eager/high | A working professional weighing a career move at… | NO | NO |
| `bofu/context-professional-pivot.webp` | 97% | lazy | A working professional career pivot map from… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. CREATE a distinct hero for this page (it ranks, and `hero-working-professionals.webp` is shared by 19 pages): documentary photograph, natural light. Candid side profile near a window of an exam aspirant with preparation notes, a family dining table in the evening. Props: stacked exam books, a timetable, previous-year question papers. File `executive-career-coaching-hero.webp` 1600×900, eager + fetchpriority high; alt/title/caption specific to “Executive career coaching for the senior moves that are harder to…”.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `executive-career-coaching-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Executive career coaching should deal with the decisions a senior title does not automatically answer…
- On-image text (about 25-40 words, shortened from the page; no new claims): When executive career coaching becomes useful / The senior-level decisions this should help you make / What changes when executive career coaching is done right / What to check before paying for executive career coaching / Questions senior professionals ask before choosing executive career…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Executive career coaching for the…”: When executive career coaching…; The senior-level decisions…
- Title attribute: At a glance: Executive career coaching for the senior moves that are…
- Caption (and keep the same point in HTML text): Executive career coaching should deal with the decisions a senior title does not automatically answer: leadership track or deep expert…
**V2 — Chronological timeline** (place after the section “When executive career coaching becomes useful”)
- File: `executive-career-coaching-chronological-executive-career-coaching-becomes.webp` · 1600×1000 WebP under 200 KB
- Teaches: It becomes useful right as a leadership-track question, a readiness doubt, or a visibility gap starts costing…
- On-image text (about 25-40 words, shortened from the page; no new claims): Unsure whether to chase the leadership track or stay the strongest… / A senior move is on the table, and you cannot tell if you are… / Your track record is strong, but the right people still do not know it / Ten-plus years in, and the growth curve has quietly gone flat
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “When executive career coaching becomes useful”: Unsure whether to chase the…; A senior move is on the table…; Your track record is…
- Title attribute: When executive career coaching becomes useful
- Caption (and keep the same point in HTML text): It becomes useful right as a leadership-track question, a readiness doubt, or a visibility gap starts costing you real opportunities…
**V3 — Decision tree** (place after the section “The senior-level decisions this should help you make”)
- File: `executive-career-coaching-decision-senior-level-decisions-should.webp` · 1600×1000 WebP under 200 KB
- Teaches: Not generic career-advancement talk.
- On-image text (about 25-40 words, shortened from the page; no new claims): Which track actually compounds your income and influence faster / An honest read on what is missing before the next senior conversation / Making your track record visible to the people who decide the next… / A deliberate plan for the next decade instead of riding the current… / Whether people-leadership genuinely fits your working style, or whether a principal… / What the realistic compensation and influence ceiling looks like on each track from where… / What would need to be true about your current role for either track to actually open up…
- Numbers: 01 Leadership track vs deep expert track Which track actually compounds your income and influence faster Whether people-leadership genuinely fits your working style, or whether a principal, staff, or specialist-expert track builds more leverage for you specifi
- Alt: Decision tree for “The senior-level decisions this should help you…”: Which track actually compounds…; An honest read on what is missing…; Making your track…
- Title attribute: The senior-level decisions this should help you make
- Caption (and keep the same point in HTML text): Not generic career-advancement talk.
**V4 — Chronological timeline** (place after the section “What changes when executive career coaching is done right”)
- File: `executive-career-coaching-chronological-changes-executive-career-coaching.webp` · 1600×1000 WebP under 200 KB
- Teaches: Executive career coaching should feel different from a generic pep talk about aiming higher.
- On-image text (about 25-40 words, shortened from the page; no new claims): Executive career coaching should feel different from a generic pep talk about… / Others Shift Future Career School Others Advice written for early-career moves…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “What changes when executive career coaching is…”: Executive career coaching should…; Others Shift Future Career School…
- Title attribute: What changes when executive career coaching is done right
- Caption (and keep the same point in HTML text): Executive career coaching should feel different from a generic pep talk about aiming higher.
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/career-coaching-for-career-change/

**H1:** Career coaching for career change when you are ready to switch industries or roles, not just this job  
**Type:** bofu · **Search priority:** P3 (0 clicks, 0 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-working-professionals.webp` is shared by 19 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-working-professionals.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 97% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-professional-pivot.webp` has no title attribute and no caption.
7. Context visual reuse: `context-professional-pivot.webp` appears on 10 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 94% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 95% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 96% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-working-professionals.webp` | 97% | eager/high | A working professional weighing a career move at… | NO | NO |
| `bofu/context-professional-pivot.webp` | 97% | lazy | A working professional career pivot map from… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-working-professionals.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-coaching-for-career-change-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Career coaching for career change should deal with the decisions a real switch actually requires: telling a…
- On-image text (about 25-40 words, shortened from the page; no new claims): When career coaching for career change becomes useful / The decisions a real career change should help you make / Sequencing the switch: while employed vs after you leave / What changes when a career change is planned instead of reactive / What to check before paying for career coaching for career change
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career coaching for career change…”: When career coaching for career…; The decisions a real career……
- Title attribute: At a glance: Career coaching for career change when you are ready to…
- Caption (and keep the same point in HTML text): Career coaching for career change should deal with the decisions a real switch actually requires: telling a genuine mismatch apart from…
**V2 — Chronological timeline** (place after the section “When career coaching for career change becomes useful”)
- File: `career-coaching-for-career-change-chronological-career-coaching-career-change.webp` · 1600×1000 WebP under 200 KB
- Teaches: It becomes useful right as the pull toward a different industry, function, or track stops feeling like a…
- On-image text (about 25-40 words, shortened from the page; no new claims): You want out of this job, but you are not sure if you want out of… / You do not know what actually carries over into a new field / The income dip and the timeline are the real blockers, not the idea…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “When career coaching for career change becomes…”: You want out of this job, but you…; You do not know what actually…; The income…
- Title attribute: When career coaching for career change becomes useful
- Caption (and keep the same point in HTML text): It becomes useful right as the pull toward a different industry, function, or track stops feeling like a passing mood and starts feeling…
**V3 — Decision tree** (place after the section “The decisions a real career change should help you make”)
- File: `career-coaching-for-career-change-decision-decisions-real-career-change.webp` · 1600×1000 WebP under 200 KB
- Teaches: Not generic 'follow your passion' advice.
- On-image text (about 25-40 words, shortened from the page; no new claims): Whether this is a genuine industry or function mismatch, or a… / What experience genuinely maps across industries, functions, or… / Income-dip tolerance, financial runway, and how long a switch usually… / Separating a bad manager, a bad team, or a bad six months from a real mismatch between… / Testing the pull toward the new direction against more than one bad week: does the… / Naming what specifically about the current path does not fit, instead of a general "I… / Which parts of your current skill set are portable as-is, which need repositioning in…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “The decisions a real career change should help…”: Whether this is a genuine…; What experience genuinely maps…; Income-dip tolerance…
- Title attribute: The decisions a real career change should help you make
- Caption (and keep the same point in HTML text): Not generic 'follow your passion' advice.
**V4 — Asymmetrical pros-and-cons comparison** (place after the section “Sequencing the switch: while employed vs after you leave”)
- File: `career-coaching-for-career-change-asymmetrical-sequencing-switch-while-employed.webp` · 1600×1000 WebP under 200 KB
- Teaches: Both paths are used.
- On-image text (about 25-40 words, shortened from the page; no new claims): While still employed / A planned transition window / After you leave
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “Sequencing the switch: while employed vs after…”: While still employed; A planned transition window; After you leave
- Title attribute: Sequencing the switch: while employed vs after you leave
- Caption (and keep the same point in HTML text): Both paths are used.
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/career-coaching-for-entrepreneurs/

**H1:** Career coaching for entrepreneurs deciding what comes after the startup chapter  
**Type:** bofu · **Search priority:** P3 (0 clicks, 3 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-working-professionals.webp` is shared by 19 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-working-professionals.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 97% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-entrepreneur-path.webp` has no title attribute and no caption.
7. Context visual reuse: `context-entrepreneur-path.webp` appears on 2 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 93% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 94% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 96% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-working-professionals.webp` | 97% | eager/high | A working professional weighing a career move at… | NO | NO |
| `bofu/context-entrepreneur-path.webp` | 97% | lazy | An entrepreneurship visual showing problem… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-working-professionals.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-coaching-for-entrepreneurs-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Career coaching for entrepreneurs helps with the decision most founders eventually face: keep building the…
- On-image text (about 25-40 words, shortened from the page; no new claims): When career coaching for entrepreneurs becomes the right move / The decisions career coaching for entrepreneurs should help you make / What changes with focused entrepreneur career coaching / What to check before paying for career coaching as an entrepreneur / Questions entrepreneurs ask before choosing career coaching
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career coaching for entrepreneurs…”: When career coaching for…; The decisions career coaching for……
- Title attribute: At a glance: Career coaching for entrepreneurs deciding what comes…
- Caption (and keep the same point in HTML text): Career coaching for entrepreneurs helps with the decision most founders eventually face: keep building the venture, return to employment…
**V2 — Chronological timeline** (place after the section “When career coaching for entrepreneurs becomes the right move”)
- File: `career-coaching-for-entrepreneurs-chronological-career-coaching-entrepreneurs-becomes.webp` · 1600×1000 WebP under 200 KB
- Teaches: Whichever way this goes, the goal is the same: the decisions that unlock high income opportunities through a…
- On-image text (about 25-40 words, shortened from the page; no new claims): The venture stopped compounding the way it used to / You need employment to make sense on paper again / A side venture is pulling harder than the day job
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “When career coaching for entrepreneurs becomes…”: The venture stopped compounding…; You need employment to make sense…; A side…
- Title attribute: When career coaching for entrepreneurs becomes the right move
- Caption (and keep the same point in HTML text): Whichever way this goes, the goal is the same: the decisions that unlock high income opportunities through a deliberate skill portfolio…
**V3 — Decision tree** (place after the section “The decisions career coaching for entrepreneurs should help you make”)
- File: `career-coaching-for-entrepreneurs-decision-decisions-career-coaching-entrepreneurs.webp` · 1600×1000 WebP under 200 KB
- Teaches: These are not abstract founder questions.
- On-image text (about 25-40 words, shortened from the page; no new claims): Venture, employment, or both / Turning founder experience into an employability narrative / Whether a side venture is ready to go full-time / The identity and pride questions around going back to a job / Using founder skills as a genuine strength in a job search
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “The decisions career coaching for entrepreneurs…”: Venture, employment, or both; Turning founder experience into…; Whether a side venture is…
- Title attribute: The decisions career coaching for entrepreneurs should help you make
- Caption (and keep the same point in HTML text): These are not abstract founder questions.
**V4 — Self-assessment checklist** (place after the section “Questions entrepreneurs ask before choosing career coaching”)
- File: `career-coaching-for-entrepreneurs-self-questions-entrepreneurs-ask-before.webp` · 1600×1000 WebP under 200 KB
- Teaches: 01 Should I go back to a full-time job or keep pushing my venture?
- On-image text (about 25-40 words, shortened from the page; no new claims): 01 Should I go back to a full-time job or keep pushing my venture? / This is rarely a simple yes or no. / It depends on the venture’s real trajectory, your financial runway, and what…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Self-assessment checklist for “Questions entrepreneurs ask before choosing…”: 01 Should I go back to a…; This is rarely a simple yes or no.; It depends on the…
- Title attribute: Questions entrepreneurs ask before choosing career coaching
- Caption (and keep the same point in HTML text): 01 Should I go back to a full-time job or keep pushing my venture?
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/career-coaching-for-it-professionals/

**H1:** Career coaching for IT professionals to turn a pivot, promotion push, or skill upgrade you have already decided on into consistent action  
**Type:** bofu · **Search priority:** P3 (0 clicks, 3 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-working-professionals.webp` is shared by 19 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-working-professionals.webp` has no title attribute and no caption.
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
| `bofu/hero-working-professionals.webp` | 97% | eager/high | A working professional weighing a career move at… | NO | NO |
| `bofu/context-engineering-tech.webp` | 97% | lazy | An engineering career visual showing foundations… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-working-professionals.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-coaching-for-it-professionals-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Career coaching for IT professionals should deal with the problem that shows up after direction is already…
- On-image text (about 25-40 words, shortened from the page; no new claims): When career coaching for IT professionals becomes useful / What ongoing coaching actually helps you do / How the coaching-style follow-through actually works / What changes when execution has real structure behind it / The real objections worth checking before you commit
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career coaching for IT professionals…”: When career coaching for IT…; What ongoing coaching actually……
- Title attribute: At a glance: Career coaching for IT professionals to turn a pivot…
- Caption (and keep the same point in HTML text): Career coaching for IT professionals should deal with the problem that shows up after direction is already clear: a plan that keeps…
**V2 — Chronological timeline** (place after the section “When career coaching for IT professionals becomes useful”)
- File: `career-coaching-for-it-professionals-chronological-career-coaching-professionals-becomes.webp` · 1600×1000 WebP under 200 KB
- Teaches: It becomes useful once the direction question is mostly settled and the real blocker is follow-through.
- On-image text (about 25-40 words, shortened from the page; no new claims): You already know the pivot, promotion track, or skill upgrade you want / You keep starting an upskilling plan and quietly abandoning it a few… / You got specific promotion feedback but nothing has actually moved… / You are trying to execute a tech pivot or skill upgrade entirely alone
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “When career coaching for IT professionals becomes…”: You already know the pivot…; You keep starting an upskilling…; You got…
- Title attribute: When career coaching for IT professionals becomes useful
- Caption (and keep the same point in HTML text): It becomes useful once the direction question is mostly settled and the real blocker is follow-through.
**V3 — Self-assessment checklist** (place after the section “What ongoing coaching actually helps you do”)
- File: `career-coaching-for-it-professionals-self-ongoing-coaching-actually-helps.webp` · 1600×1000 WebP under 200 KB
- Teaches: Not another roadmap you read once.
- On-image text (about 25-40 words, shortened from the page; no new claims): Turning a skill-upgrade idea into a sequenced plan with proof of work / Following through on a promotion conversation instead of letting the… / Executing a pivot you have already decided on, not re-deciding it… / Staying on track when work gets busy and plans quietly stall / Breaking a vague "learn AI tooling" or "go deeper in cloud" goal into an ordered sequence… / Building actual proof of work alongside the learning, so the skill upgrade shows up in… / Keeping the plan realistic against your actual working hours, so it survives a busy…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Self-assessment checklist for “What ongoing coaching actually helps you do”: Turning a skill-upgrade idea into…; Following through on a promotion…; Executing a…
- Title attribute: What ongoing coaching actually helps you do
- Caption (and keep the same point in HTML text): Not another roadmap you read once.
**V4 — Asymmetrical pros-and-cons comparison** (place after the section “The real objections worth checking before you commit”)
- File: `career-coaching-for-it-professionals-asymmetrical-real-objections-worth-checking.webp` · 1600×1000 WebP under 200 KB
- Teaches: These are the actual hesitations IT professionals raise before choosing ongoing coaching, answered directly.
- On-image text (about 25-40 words, shortened from the page; no new claims): "I already know I want to move into X, I just haven't executed." / "I keep starting upskilling plans and not finishing them." / "I got the promotion conversation wishlist but no accountability to… / "I don't need to be told what's wrong, I need someone checking my…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “The real objections worth checking before you…”: "I already know I want to move…; "I keep starting upskilling…
- Title attribute: The real objections worth checking before you commit
- Caption (and keep the same point in HTML text): These are the actual hesitations IT professionals raise before choosing ongoing coaching, answered directly.
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/career-coaching-for-layoff-recovery/

**H1:** Career coaching for layoff recovery when a layoff has already happened and the next few weeks matter  
**Type:** bofu · **Search priority:** P3 (0 clicks, 0 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-working-professionals.webp` is shared by 19 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-working-professionals.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 97% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-holistic-framework.webp` was chosen by the regex in `BofuContextVisual.astro`; a cleaner match for this keyword is `context-professional-pivot.webp`.
7. Context visual `context-holistic-framework.webp` has no title attribute and no caption.
8. Context visual reuse: `context-holistic-framework.webp` appears on 24 pages.
9. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 94% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 95% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 96% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-working-professionals.webp` | 97% | eager/high | A working professional weighing a career move at… | NO | NO |
| `bofu/context-holistic-framework.webp` | 97% | lazy | A holistic career decision framework covering… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-working-professionals.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-coaching-for-layoff-recovery-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Career coaching for layoff recovery should start from where you actually are: the layoff has happened, the…
- On-image text (about 25-40 words, shortened from the page; no new claims): When career coaching for layoff recovery matters most / A practical sequence for the weeks after a layoff / What changes when layoff recovery has real direction / What to check before choosing career coaching for layoff recovery / The layoff-specific decisions this should help you make
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career coaching for layoff recovery…”: When career coaching for layoff…; A practical sequence for…
- Title attribute: At a glance: Career coaching for layoff recovery when a layoff has…
- Caption (and keep the same point in HTML text): Career coaching for layoff recovery should start from where you actually are: the layoff has happened, the shock is real, and the next few…
**V2 — Chronological timeline** (place after the section “When career coaching for layoff recovery matters most”)
- File: `career-coaching-for-layoff-recovery-chronological-career-coaching-layoff-recovery.webp` · 1600×1000 WebP under 200 KB
- Teaches: It matters most in the weeks right after the layoff, because the sooner your money, your story, and your next…
- On-image text (about 25-40 words, shortened from the page; no new claims): The shock is still fresh and every decision feels urgent / Severance, savings, and a shrinking timeline / You are going to be asked why you left / Whether to fix the mismatch or replace the job fast
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “When career coaching for layoff recovery matters…”: The shock is still fresh and…; Severance, savings, and a…; You are going to be…
- Title attribute: When career coaching for layoff recovery matters most
- Caption (and keep the same point in HTML text): It matters most in the weeks right after the layoff, because the sooner your money, your story, and your next move are clear, the sooner…
**V3 — Chronological timeline** (place after the section “A practical sequence for the weeks after a layoff”)
- File: `career-coaching-for-layoff-recovery-chronological-practical-sequence-weeks-after.webp` · 1600×1000 WebP under 200 KB
- Teaches: This is the part of career coaching for layoff recovery that matters most in the short term — a practical…
- On-image text (about 25-40 words, shortened from the page; no new claims): Right after the layoff: Steady the ground / Early on: Build the number and the story / As things settle: Move with direction, not panic
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “A practical sequence for the weeks after a layoff”: Right after the layoff: Steady…; Early on: Build the number and…; As things…
- Title attribute: A practical sequence for the weeks after a layoff
- Caption (and keep the same point in HTML text): This is the part of career coaching for layoff recovery that matters most in the short term — a practical sequence for the stretch right…
**V4 — Decision tree** (place after the section “The layoff-specific decisions this should help you make”)
- File: `career-coaching-for-layoff-recovery-decision-layoff-specific-decisions-should.webp` · 1600×1000 WebP under 200 KB
- Teaches: Not advice about protecting a role that might be at risk.
- On-image text (about 25-40 words, shortened from the page; no new claims): Explaining the layoff without sounding defensive / Taking the first offer or holding out / Pivot opportunity or rushing back to the same role / Keep the explanation to one or two honest sentences instead of over-justifying or… / Separate the company’s decision from your own performance without sounding bitter about it / Redirect quickly into what you are looking for next, instead of dwelling on what happened / Read whether an offer is a genuine fit or a decision being made from runway fear
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “The layoff-specific decisions this should help…”: Explaining the layoff without…; Taking the first offer or holding…; Pivot opportunity or…
- Title attribute: The layoff-specific decisions this should help you make
- Caption (and keep the same point in HTML text): Not advice about protecting a role that might be at risk.
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/career-coaching-for-mid-career-professionals/

**H1:** Career coaching for mid-career professionals when promotions have slowed and the next move is not obvious  
**Type:** bofu · **Search priority:** P3 (0 clicks, 3 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-working-professionals.webp` is shared by 19 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-working-professionals.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 97% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-professional-pivot.webp` has no title attribute and no caption.
7. Context visual reuse: `context-professional-pivot.webp` appears on 10 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 94% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 95% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 96% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-working-professionals.webp` | 97% | eager/high | A working professional weighing a career move at… | NO | NO |
| `bofu/context-professional-pivot.webp` | 98% | lazy | A working professional career pivot map from… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-working-professionals.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-coaching-for-mid-career-professionals-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Career coaching for mid-career professionals should deal with the exact fork that shows up eight to fifteen…
- On-image text (about 25-40 words, shortened from the page; no new claims): When career coaching for mid-career professionals becomes useful / The decisions this stage of a career actually requires / What changes when the mid-career plateau is addressed directly / What to check before paying for career coaching for mid-career… / Questions mid-career professionals ask before choosing career coaching
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career coaching for mid-career…”: When career coaching for…; The decisions this stage of a…; What…
- Title attribute: At a glance: Career coaching for mid-career professionals when…
- Caption (and keep the same point in HTML text): Career coaching for mid-career professionals should deal with the exact fork that shows up eight to fifteen years in: specialize deeper…
**V2 — Chronological timeline** (place after the section “When career coaching for mid-career professionals becomes useful”)
- File: `career-coaching-for-mid-career-professionals-chronological-career-coaching-mid-career.webp` · 1600×1000 WebP under 200 KB
- Teaches: Not a general working-professional check-in.
- On-image text (about 25-40 words, shortened from the page; no new claims): Promotions have slowed, and the next step is no longer obvious / The salary is good, the growth is not, and walking away feels harder… / What made you valuable a decade ago is not what the market pays for…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “When career coaching for mid-career professionals…”: Promotions have slowed, and the…; The salary is good, the growth is…; What…
- Title attribute: When career coaching for mid-career professionals becomes useful
- Caption (and keep the same point in HTML text): Not a general working-professional check-in.
**V3 — Chronological timeline** (place after the section “The decisions this stage of a career actually requires”)
- File: `career-coaching-for-mid-career-professionals-chronological-decisions-stage-career-actually.webp` · 1600×1000 WebP under 200 KB
- Teaches: Specialize deeper or pivot now, an honest read on being passed over, and a plan that respects the financial…
- On-image text (about 25-40 words, shortened from the page; no new claims): Specialize deeper where you already have leverage, or pivot before it… / Being passed over is data, not just a bruised ego / Weighing risk when a mortgage, school fees, or dependents are part of… / This decision sits at a genuinely different point than it does earlier or later in a… / Whether ten-plus years of depth in your current track is a moat worth compounding, or a… / What deeper specialization would actually require from here, versus what a deliberate… / Separating a genuine skill or positioning gap from a one-off bad review cycle or a…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “The decisions this stage of a career actually…”: Specialize deeper where you…; Being passed over is data, not…; Weighing risk when…
- Title attribute: The decisions this stage of a career actually requires
- Caption (and keep the same point in HTML text): Specialize deeper or pivot now, an honest read on being passed over, and a plan that respects the financial and family obligations that…
**V4 — Chronological timeline** (place after the section “What changes when the mid-career plateau is addressed directly”)
- File: `career-coaching-for-mid-career-professionals-chronological-changes-mid-career-plateau.webp` · 1600×1000 WebP under 200 KB
- Teaches: Career coaching for mid-career professionals should feel different from generic motivational advice to 'keep…
- On-image text (about 25-40 words, shortened from the page; no new claims): Career coaching for mid-career professionals should feel different from generic… / Others Shift Future Career School Others Waiting for the next promotion cycle…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “What changes when the mid-career plateau is…”: Career coaching for mid-career…; Others Shift Future Career School…
- Title attribute: What changes when the mid-career plateau is addressed directly
- Caption (and keep the same point in HTML text): Career coaching for mid-career professionals should feel different from generic motivational advice to 'keep pushing' or a vague suggestion…
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/career-coaching-for-professionals/

**H1:** Career coaching for professionals when the direction is clear but the follow-through keeps slipping  
**Type:** bofu · **Search priority:** P3 (0 clicks, 5 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-working-professionals.webp` is shared by 19 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-working-professionals.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 97% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-professional-pivot.webp` has no title attribute and no caption.
7. Context visual reuse: `context-professional-pivot.webp` appears on 10 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 94% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 95% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 96% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-working-professionals.webp` | 97% | eager/high | A working professional weighing a career move at… | NO | NO |
| `bofu/context-professional-pivot.webp` | 97% | lazy | A working professional career pivot map from… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-working-professionals.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-coaching-for-professionals-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Career coaching for professionals should do more than hand you a direction and move on.
- On-image text (about 25-40 words, shortened from the page; no new claims): What career coaching for professionals actually means / What changes when coaching includes real accountability / The specific problems career coaching for professionals solves / What to check before paying for career coaching for professionals / Questions professionals ask before choosing career coaching
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career coaching for professionals…”: What career coaching for…; What changes when coaching…; The…
- Title attribute: At a glance: Career coaching for professionals when the direction is…
- Caption (and keep the same point in HTML text): Career coaching for professionals should do more than hand you a direction and move on.
**V2 — Decision tree by situation** (place after the section “What career coaching for professionals actually means”)
- File: `career-coaching-for-professionals-decision-career-coaching-professionals-actually.webp` · 1600×1000 WebP under 200 KB
- Teaches: Career counselling and career guidance both tend to end at a decision.
- On-image text (about 25-40 words, shortened from the page; no new claims): A decision made / A direction, not yet executed / A plan under ongoing accountability
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree by situation for “What career coaching for professionals actually…”: A decision made; A direction, not yet executed; A plan under ongoing…
- Title attribute: What career coaching for professionals actually means
- Caption (and keep the same point in HTML text): Career counselling and career guidance both tend to end at a decision.
**V3 — Chronological timeline** (place after the section “What changes when coaching includes real accountability”)
- File: `career-coaching-for-professionals-chronological-changes-coaching-includes-real.webp` · 1600×1000 WebP under 200 KB
- Teaches: Career coaching for professionals should feel different from a single verdict, a motivational chat, or…
- On-image text (about 25-40 words, shortened from the page; no new claims): Career coaching for professionals should feel different from a single verdict… / Others Shift Future Career School Others A clear plan that slowly fades after…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “What changes when coaching includes real…”: Career coaching for professionals…; Others Shift Future Career School…
- Title attribute: What changes when coaching includes real accountability
- Caption (and keep the same point in HTML text): Career coaching for professionals should feel different from a single verdict, a motivational chat, or generic advice to 'just upskill'.
**V4 — Decision tree by situation** (place after the section “The specific problems career coaching for professionals solves”)
- File: `career-coaching-for-professionals-decision-specific-problems-career-coaching.webp` · 1600×1000 WebP under 200 KB
- Teaches: Not the moment of choosing a direction — the harder part that comes after, where good decisions quietly stall…
- On-image text (about 25-40 words, shortened from the page; no new claims): You already know what to do, but keep drifting off the plan / A counselling session, a course, or a mentor gave you a direction… / AI pressure and market shifts mean the plan from six months ago may… / A clear next step gets set at the start of a busy month, then quietly slips as deadlines… / The gap is rarely a lack of clarity about what to do — it is the absence of anyone… / A plan without a return date to review it tends to age the same way an unused gym… / Plenty of professionals have already been told what to do — a skill to build, a pivot to…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree by situation for “The specific problems career coaching for…”: You already know what to do, but…; A counselling session, a course…; AI pressure…
- Title attribute: The specific problems career coaching for professionals solves
- Caption (and keep the same point in HTML text): Not the moment of choosing a direction — the harder part that comes after, where good decisions quietly stall without a follow-through…
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/career-coaching-for-women/

**H1:** Career coaching for women who are ready to act, not just decide  
**Type:** bofu · **Search priority:** P3 (0 clicks, 0 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-working-professionals.webp` is shared by 19 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-working-professionals.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 97% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-women-returning.webp` has no title attribute and no caption.
7. Context visual reuse: `context-women-returning.webp` appears on 3 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 94% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 95% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 96% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-working-professionals.webp` | 97% | eager/high | A working professional weighing a career move at… | NO | NO |
| `bofu/context-women-returning.webp` | 97% | lazy | A return-to-work visual showing experience… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-working-professionals.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-coaching-for-women-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Staying accountable to a return-to-work plan once real life resumes, following through on a field or career…
- On-image text (about 25-40 words, shortened from the page; no new claims): The real gap this coaching is built to close / Where this coaching actually helps / What should actually decide whether you need coaching or a decision… / Why career coaching for women needs real accountability, not a single… / What to check before paying for career coaching aimed at women
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career coaching for women who are…”: The real gap this coaching is…; Where this coaching actually…
- Title attribute: At a glance: Career coaching for women who are ready to act, not just…
- Caption (and keep the same point in HTML text): Staying accountable to a return-to-work plan once real life resumes, following through on a field or career switch you have already chosen…
**V2 — Self-assessment checklist** (place after the section “Where this coaching actually helps”)
- File: `career-coaching-for-women-self-where-coaching-actually-helps.webp` · 1600×1000 WebP under 200 KB
- Teaches: Not every woman searching this is stuck for the same reason.
- On-image text (about 25-40 words, shortened from the page; no new claims): Staying on the return-to-work plan once real life resumes / Turning a field choice you have already made into a working skill… / Practising the ask until it stops feeling like a one-off event / Keeping the plan alive without pretending household responsibilities… / Regular check-ins that track what actually got done against the plan, not just intentions / Adjusts the pace honestly when a week or month gets derailed, instead of treating a gap… / Keeps the skill-refresh and positioning work moving even when motivation dips
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Self-assessment checklist for “Where this coaching actually helps”: Staying on the return-to-work…; Turning a field choice you have…; Practising the ask until…
- Title attribute: Where this coaching actually helps
- Caption (and keep the same point in HTML text): Not every woman searching this is stuck for the same reason.
**V3 — Decision tree** (place after the section “What should actually decide whether you need coaching or a decision…”)
- File: `career-coaching-for-women-decision-should-actually-decide-whether.webp` · 1600×1000 WebP under 200 KB
- Teaches: Ongoing execution support and one-time decision support solve different problems.
- On-image text (about 25-40 words, shortened from the page; no new claims): Are you stuck deciding, or stuck doing? / Has a plan stalled before from unclear direction, or from lost… / Does the pace realistically match your actual week? / Is the setback a skill gap, a confidence gap, or a follow-through gap?
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “What should actually decide whether you need…”: Are you stuck deciding, or stuck…; Has a plan stalled before from…; Does the pace…
- Title attribute: What should actually decide whether you need coaching or a decision…
- Caption (and keep the same point in HTML text): Ongoing execution support and one-time decision support solve different problems.
**V4 — Self-assessment checklist** (place after the section “Common questions before starting”)
- File: `career-coaching-for-women-self-common-questions-before-starting.webp` · 1600×1000 WebP under 200 KB
- Teaches: 01 How is career coaching for women different from career counselling for women?
- On-image text (about 25-40 words, shortened from the page; no new claims): 01 How is career coaching for women different from career counselling for women? / Counselling here centres on the decision itself — choosing a field, planning a… / Coaching centres on what happens after the decision: staying accountable to the…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Self-assessment checklist for “Common questions before starting”: 01 How is career coaching for…; Counselling here centres on the…; Coaching centres on what…
- Title attribute: Common questions before starting
- Caption (and keep the same point in HTML text): 01 How is career coaching for women different from career counselling for women?
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/career-counselling-for-adults-online/

**H1:** Career counselling for adults online whatever your current employment status is  
**Type:** bofu · **Search priority:** P3 (0 clicks, 0 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-working-professionals.webp` is shared by 19 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-working-professionals.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 97% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-professional-pivot.webp` was chosen by the regex in `BofuContextVisual.astro`; a cleaner match for this keyword is `context-online-session.webp`.
7. Context visual `context-professional-pivot.webp` has no title attribute and no caption.
8. Context visual reuse: `context-professional-pivot.webp` appears on 10 pages.
9. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 93% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 94% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 95% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-working-professionals.webp` | 97% | eager/high | A working professional weighing a career move at… | NO | NO |
| `bofu/context-professional-pivot.webp` | 97% | lazy | A working professional career pivot map from… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-working-professionals.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-for-adults-online-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Future Career School offers career counselling for adults online for anyone past school or college age who…
- On-image text (about 25-40 words, shortened from the page; no new claims): Who career counselling for adults online is built for / What changes when counselling is not built only for the currently… / What to check before paying for career counselling as an adult / What strong career counselling for adults should improve / Questions adults ask before choosing online career counselling
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career counselling for adults online…”: Who career counselling for adults…; What changes when…
- Title attribute: At a glance: Career counselling for adults online whatever your…
- Caption (and keep the same point in HTML text): Future Career School offers career counselling for adults online for anyone past school or college age who needs a clearer next step —…
**V2 — Chronological timeline** (place after the section “What changes when counselling is not built only for the currently…”)
- File: `career-counselling-for-adults-online-chronological-changes-counselling-built-only.webp` · 1600×1000 WebP under 200 KB
- Teaches: Most career counselling online quietly assumes a resume, an employer, and a job title.
- On-image text (about 25-40 words, shortened from the page; no new claims): Most career counselling online quietly assumes a resume, an employer, and a job… / This is where that assumption should stop being the default. / Others Shift Future Career School Others Sessions that need free afternoons…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “What changes when counselling is not built only…”: Most career counselling online…; This is where that assumption…; Others Shift…
- Title attribute: What changes when counselling is not built only for the currently…
- Caption (and keep the same point in HTML text): Most career counselling online quietly assumes a resume, an employer, and a job title.
**V3 — Decision tree** (place after the section “What strong career counselling for adults should improve”)
- File: `career-counselling-for-adults-online-decision-strong-career-counselling-adults.webp` · 1600×1000 WebP under 200 KB
- Teaches: 01 Direction that does not assume a fixed job title Clarity built from your strengths, work style, and market…
- On-image text (about 25-40 words, shortened from the page; no new claims): Direction that does not assume a fixed job title / Skill-first positioning, not a return to square one / Income-growth logic, not just reactivation / A process actually designed to run online
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “What strong career counselling for adults should…”: Direction that does not assume a…; Skill-first positioning, not a…; Income-growth logic…
- Title attribute: What strong career counselling for adults should improve
- Caption (and keep the same point in HTML text): 01 Direction that does not assume a fixed job title Clarity built from your strengths, work style, and market fit, whatever your current…
**V4 — Self-assessment checklist** (place after the section “Questions adults ask before choosing online career counselling”)
- File: `career-counselling-for-adults-online-self-questions-adults-ask-before.webp` · 1600×1000 WebP under 200 KB
- Teaches: 01 Is career counselling for adults different if I am not currently employed?
- On-image text (about 25-40 words, shortened from the page; no new claims): 01 Is career counselling for adults different if I am not currently employed? / The underlying support is the same — strengths, work style, market fit, skill… / What changes is the starting point: the guidance should not assume a current…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Self-assessment checklist for “Questions adults ask before choosing online…”: 01 Is career counselling for…; The underlying support is the…; What changes is…
- Title attribute: Questions adults ask before choosing online career counselling
- Caption (and keep the same point in HTML text): 01 Is career counselling for adults different if I am not currently employed?
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/career-counselling-for-adults/

**H1:** Career counselling for adults built around real life, not free afternoons  
**Type:** bofu · **Search priority:** P3 (0 clicks, 0 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-working-professionals.webp` is shared by 19 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-working-professionals.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 97% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-professional-pivot.webp` has no title attribute and no caption.
7. Context visual reuse: `context-professional-pivot.webp` appears on 10 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 93% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 94% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 96% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-working-professionals.webp` | 97% | eager/high | A working professional weighing a career move at… | NO | NO |
| `bofu/context-professional-pivot.webp` | 97% | lazy | A working professional career pivot map from… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-working-professionals.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-for-adults-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Future Career School offers career counselling for adults that starts from what actually shapes an adult…
- On-image text (about 25-40 words, shortened from the page; no new claims): Why career counselling for adults needs a different starting point / Checks before choosing career counselling built for adult life / What changes when counselling accounts for grown-up constraints / What career counselling for adults should actually improve / Questions adults ask before choosing career counselling
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career counselling for adults built…”: Why career counselling for adults…; Checks before choosing…
- Title attribute: At a glance: Career counselling for adults built around real life…
- Caption (and keep the same point in HTML text): Future Career School offers career counselling for adults that starts from what actually shapes an adult decision — limited free time, real…
**V2 — Asymmetrical pros-and-cons comparison** (place after the section “Why career counselling for adults needs a different starting point”)
- File: `career-counselling-for-adults-asymmetrical-career-counselling-adults-needs.webp` · 1600×1000 WebP under 200 KB
- Teaches: Most career counselling online is written with a student's schedule and a student's stakes in mind.
- On-image text (about 25-40 words, shortened from the page; no new claims): A weekly system, not a student-style free afternoon / Fewer redos, more that is already riding on the decision / Something to build on, not a blank slate / Realism instead of youth-coded reinvention talk
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “Why career counselling for adults needs a…”: A weekly system, not a…; Fewer redos, more that is already…; Something…
- Title attribute: Why career counselling for adults needs a different starting point
- Caption (and keep the same point in HTML text): Most career counselling online is written with a student's schedule and a student's stakes in mind.
**V3 — Self-assessment checklist** (place after the section “Checks before choosing career counselling built for adult life”)
- File: `career-counselling-for-adults-self-checks-before-choosing-career.webp` · 1600×1000 WebP under 200 KB
- Teaches: The goal is a process that starts from your real schedule, your real obligations, and what you already know —…
- On-image text (about 25-40 words, shortened from the page; no new claims): Check whether the plan assumes free time you do not have / Check whether your existing experience gets used or ignored / Check whether financial and family reality gets factored in / Check whether the advice sounds like it was written for a 22-year-old
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Self-assessment checklist for “Checks before choosing career counselling built…”: Check whether the plan assumes…; Check whether your existing…; Check whether…
- Title attribute: Checks before choosing career counselling built for adult life
- Caption (and keep the same point in HTML text): The goal is a process that starts from your real schedule, your real obligations, and what you already know — not a plan built for someone…
**V4 — Chronological timeline** (place after the section “What changes when counselling accounts for grown-up constraints”)
- File: `career-counselling-for-adults-chronological-changes-counselling-accounts-grown.webp` · 1600×1000 WebP under 200 KB
- Teaches: Time, money, and an existing track record are not side notes for an adult career decision.
- On-image text (about 25-40 words, shortened from the page; no new claims): Time, money, and an existing track record are not side notes for an adult… / They should shape the plan from the start, on the way toward unlocking higher… / Others Shift Future Career School Others Advice written for people with fewer…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “What changes when counselling accounts for…”: Time, money, and an existing…; They should shape the plan from…; Others Shift Future…
- Title attribute: What changes when counselling accounts for grown-up constraints
- Caption (and keep the same point in HTML text): Time, money, and an existing track record are not side notes for an adult career decision.
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/career-counselling-for-it-professionals/

**H1:** Career counselling for IT professionals when layoffs, AI pressure, or a pivot decision make staying put feel risky  
**Type:** bofu · **Search priority:** P3 (0 clicks, 12 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-working-professionals.webp` is shared by 19 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-working-professionals.webp` has no title attribute and no caption.
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
| `bofu/hero-working-professionals.webp` | 97% | eager/high | A working professional weighing a career move at… | NO | NO |
| `bofu/context-engineering-tech.webp` | 97% | lazy | An engineering career visual showing foundations… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-working-professionals.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-for-it-professionals-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Career counselling for IT professionals should deal with the decisions your role actually faces…
- On-image text (about 25-40 words, shortened from the page; no new claims): When career counselling for IT professionals becomes useful / The IT-specific decisions this should help you make / What changes when IT career guidance is done right / What to check before paying for career counselling for IT… / Career Counselling Plans for IT Professionals
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career counselling for IT…”: When career counselling for IT…; The IT-specific decisions this…; What…
- Title attribute: At a glance: Career counselling for IT professionals when layoffs, AI…
- Caption (and keep the same point in HTML text): Career counselling for IT professionals should deal with the decisions your role actually faces: hiring-slowdown or layoff anxiety, AI…
**V2 — Chronological timeline** (place after the section “When career counselling for IT professionals becomes useful”)
- File: `career-counselling-for-it-professionals-chronological-career-counselling-professionals-becomes.webp` · 1600×1000 WebP under 200 KB
- Teaches: It becomes useful right as layoff risk, AI pressure, or a company or role pivot starts to feel real, because…
- On-image text (about 25-40 words, shortened from the page; no new claims): Layoff anxiety or a hiring slowdown in your part of tech / AI tools doing part of what your role used to require / Service-company burnout or a stalled product-company move / Technical-to-management or management-to-technical doubt
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “When career counselling for IT professionals…”: Layoff anxiety or a hiring…; AI tools doing part of what your…; Service-company…
- Title attribute: When career counselling for IT professionals becomes useful
- Caption (and keep the same point in HTML text): It becomes useful right as layoff risk, AI pressure, or a company or role pivot starts to feel real, because the sooner your skill…
**V3 — Decision tree** (place after the section “The IT-specific decisions this should help you make”)
- File: `career-counselling-for-it-professionals-decision-specific-decisions-should-help.webp` · 1600×1000 WebP under 200 KB
- Teaches: Not generic tech career advice.
- On-image text (about 25-40 words, shortened from the page; no new claims): What your actual layoff and AI-disruption risk looks like / Service company vs product company vs startup / Technical-to-management or back to hands-on technical work / Upskilling within tech vs a domain or role switch / Which parts of your current role are being automated first, and which parts of your skill… / Whether your risk is really about your company, your stack, your seniority band, or the… / What a realistic skill move looks like, paced to your actual runway, if your current role…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “The IT-specific decisions this should help you…”: What your actual layoff and…; Service company vs product…; Technical-to-management or back…
- Title attribute: The IT-specific decisions this should help you make
- Caption (and keep the same point in HTML text): Not generic tech career advice.
**V4 — Linear process chain or roadmap** (place after the section “Career Counselling Plans for IT Professionals”)
- File: `career-counselling-for-it-professionals-linear-career-counselling-plans-professionals.webp` · 1600×1000 WebP under 200 KB
- Teaches: Working Professionals 1-on-1 Working Professional Career Counselling For professionals who need clearer…
- On-image text (about 25-40 words, shortened from the page; no new claims): Working Professional Career Counselling / Working Professionals 1-on-1 Working Professional Career Counselling For… / Limited-time professional offer ₹5000 ₹3000 for one 1-on-1 session Book one… / Book 1-on-1 Online across India Avoid Salary ceilings, random upskilling, weak…
- Numbers: Limited-time professional offer ₹5000 ₹3000 for one 1-on-1 session Book one sharp 1-on-1 before stagnation, weak positioning, or a bad pivot gets more expensive.
- Alt: Linear process chain or roadmap for “Career Counselling Plans for IT Professionals”: Working Professional Career…; Working Professionals 1-on-1…; Limited-time…
- Title attribute: Career Counselling Plans for IT Professionals
- Caption (and keep the same point in HTML text): Working Professionals 1-on-1 Working Professional Career Counselling For professionals who need clearer pivots, stronger compensation, and…
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/career-counselling-for-seniors/

**H1:** Career counselling for seniors built around decades of experience, not a resume rewrite  
**Type:** bofu · **Search priority:** P3 (0 clicks, 0 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-working-professionals.webp` is shared by 19 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-working-professionals.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 97% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-holistic-framework.webp` was chosen by the regex in `BofuContextVisual.astro`; a cleaner match for this keyword is `context-professional-pivot.webp`.
7. Context visual `context-holistic-framework.webp` has no title attribute and no caption.
8. Context visual reuse: `context-holistic-framework.webp` appears on 24 pages.
9. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 94% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 95% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 96% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-working-professionals.webp` | 97% | eager/high | A working professional weighing a career move at… | NO | NO |
| `bofu/context-holistic-framework.webp` | 97% | lazy | A holistic career decision framework covering… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-working-professionals.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-for-seniors-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Future Career School offers career counselling for seniors and retirement-age adults who want to stay…
- On-image text (about 25-40 words, shortened from the page; no new claims): Why career counselling for seniors needs a different starting point / Checks before choosing career counselling built for this stage / Common starting points for this decision / A clear plan beats another year of an unclear 'maybe later' / What changes when counselling accounts for a retirement-age decision
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career counselling for seniors built…”: Why career counselling for…; Checks before choosing career……
- Title attribute: At a glance: Career counselling for seniors built around decades of…
- Caption (and keep the same point in HTML text): Future Career School offers career counselling for seniors and retirement-age adults who want to stay professionally active — through…
**V2 — Asymmetrical pros-and-cons comparison** (place after the section “Why career counselling for seniors needs a different starting point”)
- File: `career-counselling-for-seniors-asymmetrical-career-counselling-seniors-needs.webp` · 1600×1000 WebP under 200 KB
- Teaches: Most career advice online is written for people early in their working life.
- On-image text (about 25-40 words, shortened from the page; no new claims): Not "get a job again" — "use what I already know" / A resume built for a 30-year-old rarely fits / Energy at 62 is not energy at 32, and a real plan says so / A straight answer for "why are you still working"
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “Why career counselling for seniors needs a…”: Not "get a job again" — "use what…; A resume built for a 30-year-old……
- Title attribute: Why career counselling for seniors needs a different starting point
- Caption (and keep the same point in HTML text): Most career advice online is written for people early in their working life.
**V3 — Chronological timeline** (place after the section “Checks before choosing career counselling built for this stage”)
- File: `career-counselling-for-seniors-chronological-checks-before-choosing-career.webp` · 1600×1000 WebP under 200 KB
- Teaches: The goal is a process that starts from decades of real experience and a realistic pace, not a plan copied…
- On-image text (about 25-40 words, shortened from the page; no new claims): Check whether the plan assumes a 25-year-old job search / Check whether digital comfort is treated as a real, fixable gap / Check whether pace and health are part of the plan, not an… / Check whether it promises a job, or supports a real decision
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “Checks before choosing career counselling built…”: Check whether the plan assumes a…; Check whether digital comfort is…; Check…
- Title attribute: Checks before choosing career counselling built for this stage
- Caption (and keep the same point in HTML text): The goal is a process that starts from decades of real experience and a realistic pace, not a plan copied from someone decades younger with…
**V4 — Chronological timeline** (place after the section “What changes when counselling accounts for a retirement-age decision”)
- File: `career-counselling-for-seniors-chronological-changes-counselling-accounts-retirement.webp` · 1600×1000 WebP under 200 KB
- Teaches: Pace, family reaction, and decades of unpackaged experience are not side notes at this stage.
- On-image text (about 25-40 words, shortened from the page; no new claims): Pace, family reaction, and decades of unpackaged experience are not side notes… / They should shape the plan from the start, on the way to unlocking real income… / Others Shift Future Career School Others A resume rewrite that ignores decades…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “What changes when counselling accounts for a…”: Pace, family reaction, and…; They should shape the plan from…; Others Shift Future…
- Title attribute: What changes when counselling accounts for a retirement-age decision
- Caption (and keep the same point in HTML text): Pace, family reaction, and decades of unpackaged experience are not side notes at this stage.
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/career-counselling-for-women/

**H1:** Career counselling for women who want a real decision, not a stereotype  
**Type:** bofu · **Search priority:** P3 (0 clicks, 3 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-working-professionals.webp` is shared by 19 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-working-professionals.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 97% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-women-returning.webp` has no title attribute and no caption.
7. Context visual reuse: `context-women-returning.webp` appears on 3 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 95% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 95% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 96% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-working-professionals.webp` | 97% | eager/high | A working professional weighing a career move at… | NO | NO |
| `bofu/context-women-returning.webp` | 98% | lazy | A return-to-work visual showing experience… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-working-professionals.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-for-women-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Career breaks and re-entry planning, "safe for women" field pressure versus genuine fit, and the confidence…
- On-image text (about 25-40 words, shortened from the page; no new claims): The decision pressure this guidance actually has to answer / Real decision points this guidance works through / What should actually decide, when 'safe' is not a strategy / Why career counselling for women needs to go beyond a 'safe careers'… / What to check before paying for career counselling aimed at women
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career counselling for women who…”: The decision pressure this…; Real decision points this…; What…
- Title attribute: At a glance: Career counselling for women who want a real decision…
- Caption (and keep the same point in HTML text): Career breaks and re-entry planning, "safe for women" field pressure versus genuine fit, and the confidence gap in negotiating or switching…
**V2 — Self-assessment checklist** (place after the section “Real decision points this guidance works through”)
- File: `career-counselling-for-women-self-real-decision-points-guidance.webp` · 1600×1000 WebP under 200 KB
- Teaches: Not every woman searching this is at the same stage.
- On-image text (about 25-40 words, shortened from the page; no new claims): Choosing a field you actually want, not the one that sounds safest / A concrete return plan, not just "update your resume" / Changing direction without treating it as starting completely over / Asking for what the work is worth / Checks real strengths and work style against the field, not just its reputation / Names the trade-offs of the "safe" option honestly instead of dismissing them / Builds a skill plan around the field you actually want, so the choice can hold up over…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Self-assessment checklist for “Real decision points this guidance works through”: Choosing a field you actually…; A concrete return plan, not just…; Changing…
- Title attribute: Real decision points this guidance works through
- Caption (and keep the same point in HTML text): Not every woman searching this is at the same stage.
**V3 — Chronological timeline** (place after the section “What should actually decide, when 'safe' is not a strategy”)
- File: `career-counselling-for-women-chronological-should-actually-decide-safe.webp` · 1600×1000 WebP under 200 KB
- Teaches: Choosing a field, planning a return, or deciding to switch is rarely about one clean answer.
- On-image text (about 25-40 words, shortened from the page; no new claims): Genuine interest versus a label that sounds reassuring / How long the break actually was, and what changed in that time / Financial and family reality, without letting it be the only factor / Skill gap versus confidence gap
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “What should actually decide, when 'safe' is not a…”: Genuine interest versus a label…; How long the break actually was…; Financial…
- Title attribute: What should actually decide, when 'safe' is not a strategy
- Caption (and keep the same point in HTML text): Choosing a field, planning a return, or deciding to switch is rarely about one clean answer.
**V4 — Linear process chain or roadmap** (place after the section “Choose the field and the plan — not just the label that sounds safest”)
- File: `career-counselling-for-women-linear-choose-field-plan-just.webp` · 1600×1000 WebP under 200 KB
- Teaches: A career break, a family-influenced field choice, or a stalled negotiation are all workable decision points…
- On-image text (about 25-40 words, shortened from the page; no new claims): A career break, a family-influenced field choice, or a stalled negotiation are… / Get Student Career Counselling for Women Get Working Professional Career…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Linear process chain or roadmap for “Choose the field and the plan — not just the…”: A career break, a…; Get Student Career Counselling…
- Title attribute: Choose the field and the plan — not just the label that sounds safest
- Caption (and keep the same point in HTML text): A career break, a family-influenced field choice, or a stalled negotiation are all workable decision points with the right plan behind them…
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/career-counselling-for-working-professionals/

**H1:** Career counselling for working professionals when you need a decision, not another opinion  
**Type:** bofu · **Search priority:** P3 (0 clicks, 0 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-working-professionals.webp` is shared by 19 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-working-professionals.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 96% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-professional-pivot.webp` has no title attribute and no caption.
7. Context visual reuse: `context-professional-pivot.webp` appears on 10 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 93% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 94% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 95% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-working-professionals.webp` | 96% | eager/high | A working professional weighing a career move at… | NO | NO |
| `bofu/context-professional-pivot.webp` | 97% | lazy | A working professional career pivot map from… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-working-professionals.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-for-working-professionals-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Career counselling for working professionals resolves one specific fork - stay or move, specialise or pivot…
- On-image text (about 25-40 words, shortened from the page; no new claims): What career counselling for working professionals should resolve / How career counselling for working professionals compares / What to check before booking career counselling for working… / Questions working professionals ask before booking career counselling / Resolve the decision instead of carrying it into next quarter
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career counselling for working…”: What career counselling for…; How career counselling for…; What to…
- Title attribute: At a glance: Career counselling for working professionals when you…
- Caption (and keep the same point in HTML text): Career counselling for working professionals resolves one specific fork - stay or move, specialise or pivot, take the offer or wait - using…
**V2 — Decision tree** (place after the section “What career counselling for working professionals should resolve”)
- File: `career-counselling-for-working-professionals-decision-career-counselling-working-professionals.webp` · 1600×1000 WebP under 200 KB
- Teaches: 01 One decision, not a full career audit Career counselling here is built around the fork actually in front…
- On-image text (about 25-40 words, shortened from the page; no new claims): One decision, not a full career audit / A recommendation you can defend, not just accept / A risk-adjusted recommendation, not more options / Income math attached to the decision / A skill portfolio, not a single skill bet
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “What career counselling for working professionals…”: One decision, not a full career…; A recommendation you can defend…; A risk-adjusted…
- Title attribute: What career counselling for working professionals should resolve
- Caption (and keep the same point in HTML text): 01 One decision, not a full career audit Career counselling here is built around the fork actually in front of you - stay or move…
**V3 — Asymmetrical pros-and-cons comparison** (place after the section “How career counselling for working professionals compares”)
- File: `career-counselling-for-working-professionals-asymmetrical-career-counselling-working-professionals.webp` · 1600×1000 WebP under 200 KB
- Teaches: The difference is not effort or good intentions.
- On-image text (about 25-40 words, shortened from the page; no new claims): The difference is not effort or good intentions. / It is whether the process actually resolves your specific decision. / Others Shift Future Career School Others Another opinion that leaves you where…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “How career counselling for working professionals…”: The difference is not effort or…; It is whether the process……
- Title attribute: How career counselling for working professionals compares
- Caption (and keep the same point in HTML text): The difference is not effort or good intentions.
**V4 — Self-assessment checklist** (place after the section “Questions working professionals ask before booking career counselling”)
- File: `career-counselling-for-working-professionals-self-questions-working-professionals-ask.webp` · 1600×1000 WebP under 200 KB
- Teaches: 01 What is the difference between career counselling and career guidance for working professionals?
- On-image text (about 25-40 words, shortened from the page; no new claims): 01 What is the difference between career counselling and career guidance for… / Career counselling here is a structured process built around one specific… / Working professional career guidance covers the same practical territory but is…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Self-assessment checklist for “Questions working professionals ask before…”: 01 What is the difference between…; Career counselling here is a…; Working…
- Title attribute: Questions working professionals ask before booking career counselling
- Caption (and keep the same point in HTML text): 01 What is the difference between career counselling and career guidance for working professionals?
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/career-guidance-for-30-year-olds/

**H1:** Career guidance for 30 year olds while a pivot is still comparatively cheap  
**Type:** bofu · **Search priority:** P3 (0 clicks, 4 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-working-professionals.webp` is shared by 19 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-working-professionals.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 97% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-holistic-framework.webp` was chosen by the regex in `BofuContextVisual.astro`; a cleaner match for this keyword is `context-professional-pivot.webp`.
7. Context visual `context-holistic-framework.webp` has no title attribute and no caption.
8. Context visual reuse: `context-holistic-framework.webp` appears on 24 pages.
9. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 94% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 95% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 96% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-working-professionals.webp` | 97% | eager/high | A working professional weighing a career move at… | NO | NO |
| `bofu/context-holistic-framework.webp` | 97% | lazy | A holistic career decision framework covering… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-working-professionals.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-guidance-for-30-year-olds-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Thirty is not a deadline, but it is a genuine inflection point: usually five to nine years into a career…
- On-image text (about 25-40 words, shortened from the page; no new claims): Why 30 is a genuinely different decision point / Checks before choosing career guidance for this specific decision / What changes when the decision is treated as a 30s-specific window / The decisions that actually matter at this stage / Questions people around 30 ask before choosing career guidance
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career guidance for 30 year olds…”: Why 30 is a genuinely different…; Checks before choosing career……
- Title attribute: At a glance: Career guidance for 30 year olds while a pivot is still…
- Caption (and keep the same point in HTML text): Thirty is not a deadline, but it is a genuine inflection point: usually five to nine years into a career, with real skill and track record…
**V2 — Asymmetrical pros-and-cons comparison** (place after the section “Why 30 is a genuinely different decision point”)
- File: `career-guidance-for-30-year-olds-asymmetrical-genuinely-different-decision-point.webp` · 1600×1000 WebP under 200 KB
- Teaches: Not a countdown, and not the same conversation as career counselling for any adult regardless of age.
- On-image text (about 25-40 words, shortened from the page; no new claims): Thirty is not a deadline. It is the point where a pivot stops being… / Enough experience to have real leverage, not enough to be locked in / Peer comparison gets loud around this age, and it is a bad decision… / Marriage, a first child, or a home loan can close the window fast
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “Why 30 is a genuinely different decision point”: Thirty is not a deadline. It is…; Enough experience to have real……
- Title attribute: Why 30 is a genuinely different decision point
- Caption (and keep the same point in HTML text): Not a countdown, and not the same conversation as career counselling for any adult regardless of age.
**V3 — Self-assessment checklist** (place after the section “Checks before choosing career guidance for this specific decision”)
- File: `career-guidance-for-30-year-olds-self-checks-before-choosing-career.webp` · 1600×1000 WebP under 200 KB
- Teaches: The goal is a tested read on your actual situation at this age, not a generic 'it's not too late' reassurance…
- On-image text (about 25-40 words, shortened from the page; no new claims): Check whether the guidance treats 30 as a real inflection point, not… / Check whether it separates a genuine mismatch from ordinary… / Check whether family and financial timing gets planned for honestly / Check whether the existing five-plus years of experience is used, not…
- Numbers: 01 Check whether the guidance treats 30 as a real inflection point, not just another "adult" case A 30 year old usually has meaningfully different leverage, obligations, and runway than someone at 22 or someone at 45.
- Alt: Self-assessment checklist for “Checks before choosing career guidance for this…”: Check whether the guidance treats…; Check whether it separates a…; Check…
- Title attribute: Checks before choosing career guidance for this specific decision
- Caption (and keep the same point in HTML text): The goal is a tested read on your actual situation at this age, not a generic 'it's not too late' reassurance or a script built for a…
**V4 — Chronological timeline** (place after the section “The decisions that actually matter at this stage”)
- File: `career-guidance-for-30-year-olds-chronological-decisions-actually-matter-stage.webp` · 1600×1000 WebP under 200 KB
- Teaches: 01 Is this actually the wrong path, or just a hard year?
- On-image text (about 25-40 words, shortened from the page; no new claims): Is this actually the wrong path, or just a hard year? / Deepen the current direction, or use the window to switch / What changes once dependents or a home loan enter the picture / A skill portfolio for the next decade, not just the next job
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “The decisions that actually matter at this stage”: Is this actually the wrong path…; Deepen the current direction, or…; What…
- Title attribute: The decisions that actually matter at this stage
- Caption (and keep the same point in HTML text): 01 Is this actually the wrong path, or just a hard year?
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/career-guidance-for-women-returning-to-work/

**H1:** Career guidance for women returning to work after a career break  
**Type:** bofu · **Search priority:** P3 (0 clicks, 15 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-working-professionals.webp` is shared by 19 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-working-professionals.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 97% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-women-returning.webp` has no title attribute and no caption.
7. Context visual reuse: `context-women-returning.webp` appears on 3 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 94% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 95% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 96% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-working-professionals.webp` | 97% | eager/high | A working professional weighing a career move at… | NO | NO |
| `bofu/context-women-returning.webp` | 97% | lazy | A return-to-work visual showing experience… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-working-professionals.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-guidance-for-women-returning-to-work-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: A break for maternity, caregiving, health, or relocation does not erase what you already know.
- On-image text (about 25-40 words, shortened from the page; no new claims): What a return to work after a break actually involves / The re-entry plan, piece by piece / Why re-entry needs more than 'just start applying again' / What to check before paying for career guidance aimed at returning to… / Go back in at your real level, not a step below it
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career guidance for women returning…”: What a return to work after a…; The re-entry plan, piece by…
- Title attribute: At a glance: Career guidance for women returning to work after a…
- Caption (and keep the same point in HTML text): A break for maternity, caregiving, health, or relocation does not erase what you already know.
**V2 — Framework cards** (place after the section “What a return to work after a break actually involves”)
- File: `career-guidance-for-women-returning-to-work-framework-return-work-after-break.webp` · 1600×1000 WebP under 200 KB
- Teaches: Not vague encouragement to 'update your resume and get back out there.' These are the specific, practical…
- On-image text (about 25-40 words, shortened from the page; no new claims): A career break is not a resume defect that needs hiding / Some skills held up. Some tools moved on without you / Feeling behind and being behind are not the same thing / Going back in below where you left off is not the only option
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Framework cards for “What a return to work after a break actually…”: A career break is not a resume…; Some skills held up. Some tools…; Feeling behind and…
- Title attribute: What a return to work after a break actually involves
- Caption (and keep the same point in HTML text): Not vague encouragement to 'update your resume and get back out there.' These are the specific, practical pieces a re-entry plan has to…
**V3 — Linear process chain or roadmap** (place after the section “The re-entry plan, piece by piece”)
- File: `career-guidance-for-women-returning-to-work-linear-entry-plan-piece-piece.webp` · 1600×1000 WebP under 200 KB
- Teaches: Every return is shaped by how long the break was and what changed in your specific field during that time.
- On-image text (about 25-40 words, shortened from the page; no new claims): A plan sized to how long you were actually out / A gap story you can say out loud without flinching / Targeted catching-up, not relearning everything from scratch / Applying where the skill portfolio genuinely fits / Maps what changed in your specific field during your exact time away, not a generic… / Separates skills that still transfer directly from the ones that need a deliberate refresh / Sets a realistic re-entry level based on what has actually changed, not on how long the…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Linear process chain or roadmap for “The re-entry plan, piece by piece”: A plan sized to how long you were…; A gap story you can say out loud…; Targeted…
- Title attribute: The re-entry plan, piece by piece
- Caption (and keep the same point in HTML text): Every return is shaped by how long the break was and what changed in your specific field during that time.
**V4 — Self-assessment checklist** (place after the section “Common questions before starting”)
- File: `career-guidance-for-women-returning-to-work-self-common-questions-before-starting.webp` · 1600×1000 WebP under 200 KB
- Teaches: 01 How long a break is too long to plan a real return?
- On-image text (about 25-40 words, shortened from the page; no new claims): 01 How long a break is too long to plan a real return? / There is no cutoff where a return stops being possible. / Longer breaks usually mean more of the plan is spent on refreshing specific…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Self-assessment checklist for “Common questions before starting”: 01 How long a break is too long…; There is no cutoff where a return…; Longer breaks usually…
- Title attribute: Common questions before starting
- Caption (and keep the same point in HTML text): 01 How long a break is too long to plan a real return?
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/professional-career-counselling/

**H1:** Professional career counselling built to end in a real recommendation  
**Type:** bofu · **Search priority:** P3 (0 clicks, 0 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-working-professionals.webp` is shared by 19 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-working-professionals.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 97% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-professional-pivot.webp` has no title attribute and no caption.
7. Context visual reuse: `context-professional-pivot.webp` appears on 10 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 94% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 95% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 96% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-working-professionals.webp` | 97% | eager/high | A working professional weighing a career move at… | NO | NO |
| `bofu/context-professional-pivot.webp` | 98% | lazy | A working professional career pivot map from… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-working-professionals.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `professional-career-counselling-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Future Career School delivers professional career counselling for students, freshers, and working…
- On-image text (about 25-40 words, shortened from the page; no new claims): What actually makes career counselling professional-grade / What to check before trusting any career counselling as genuinely… / Why the word professional has to mean something here / How professional-grade career counselling fits wherever you are right… / What a professional-grade counselling session actually includes
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Professional career counselling…”: What actually makes career…; What to check before trusting any……
- Title attribute: At a glance: Professional career counselling built to end in a real…
- Caption (and keep the same point in HTML text): Future Career School delivers professional career counselling for students, freshers, and working professionals who want a session that is…
**V2 — Framework cards** (place after the section “What actually makes career counselling professional-grade”)
- File: `professional-career-counselling-framework-actually-makes-career-counselling.webp` · 1600×1000 WebP under 200 KB
- Teaches: Not a tagline.
- On-image text (about 25-40 words, shortened from the page; no new claims): A counsellor matched to your specific decision type / Real assessment data behind the recommendation, not a five-minute read / A session built to close with a stated recommendation / The same intake and recommendation format for every session
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Framework cards for “What actually makes career counselling…”: A counsellor matched to your…; Real assessment data behind the…; A session built to close with a…
- Title attribute: What actually makes career counselling professional-grade
- Caption (and keep the same point in HTML text): Not a tagline.
**V3 — Asymmetrical pros-and-cons comparison** (place after the section “Doubts worth resolving before trusting any counselling as professional”)
- File: `professional-career-counselling-asymmetrical-doubts-worth-resolving-before.webp` · 1600×1000 WebP under 200 KB
- Teaches: These are the questions worth asking before you decide whether a session is genuinely structured, or just…
- On-image text (about 25-40 words, shortened from the page; no new claims): “Professional” gets used by everyone. What does it actually mean on… / Is this the same as career counselling for working professionals? / How is this different from professional career guidance? / What actually happens if my decision is unusual or does not fit a…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “Doubts worth resolving before trusting any…”: “Professional” gets used by…; Is this the same as career…; How is this…
- Title attribute: Doubts worth resolving before trusting any counselling as professional
- Caption (and keep the same point in HTML text): These are the questions worth asking before you decide whether a session is genuinely structured, or just confidently generic, and how it…
**V4 — Self-assessment checklist** (place after the section “Questions people ask before trusting professional career counselling”)
- File: `professional-career-counselling-self-questions-people-ask-before.webp` · 1600×1000 WebP under 200 KB
- Teaches: 01 What does "professional" mean in professional career counselling?
- On-image text (about 25-40 words, shortened from the page; no new claims): 01 What does "professional" mean in professional career counselling? / It describes how the session is run, not a marketing label: a counsellor… / 02 Is this different from career counselling for working professionals?
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Self-assessment checklist for “Questions people ask before trusting professional…”: 01 What does "professional" mean…; It describes how the session is…; 02 Is…
- Title attribute: Questions people ask before trusting professional career counselling
- Caption (and keep the same point in HTML text): 01 What does "professional" mean in professional career counselling?
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/professional-career-guidance/

**H1:** Professional career guidance built on a process you can actually check  
**Type:** bofu · **Search priority:** P3 (0 clicks, 3 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-working-professionals.webp` is shared by 19 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-working-professionals.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 97% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-professional-pivot.webp` has no title attribute and no caption.
7. Context visual reuse: `context-professional-pivot.webp` appears on 10 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 95% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 95% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 96% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-working-professionals.webp` | 97% | eager/high | A working professional weighing a career move at… | NO | NO |
| `bofu/context-professional-pivot.webp` | 98% | lazy | A working professional career pivot map from… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-working-professionals.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `professional-career-guidance-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Future Career School delivers professional career guidance for students, freshers, and working professionals…
- On-image text (about 25-40 words, shortened from the page; no new claims): What actually makes career guidance professional-grade / Why the word professional has to mean something here / What to check before trusting any career guidance as genuinely… / What a professional-grade guidance process actually includes / How a structured, professional-grade process fits wherever you are…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Professional career guidance built…”: What actually makes career…; Why the word professional has to……
- Title attribute: At a glance: Professional career guidance built on a process you can…
- Caption (and keep the same point in HTML text): Future Career School delivers professional career guidance for students, freshers, and working professionals who want to know the advice…
**V2 — Linear process chain or roadmap** (place after the section “What a professional-grade guidance process actually includes”)
- File: `professional-career-guidance-linear-professional-grade-guidance-process.webp` · 1600×1000 WebP under 200 KB
- Teaches: This is the same structured process behind every serious guidance decision here — not a one-off conversation…
- On-image text (about 25-40 words, shortened from the page; no new claims): The shift should feel clear before it feels big / Then the work should connect like a roadmap / This is the same structured process behind every serious guidance decision here… / First the situation gets clearer.
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Linear process chain or roadmap for “What a professional-grade guidance process…”: The shift should feel clear…; Then the work should connect like…; This is…
- Title attribute: What a professional-grade guidance process actually includes
- Caption (and keep the same point in HTML text): This is the same structured process behind every serious guidance decision here — not a one-off conversation that ends when the call does.
**V3 — Linear process chain or roadmap** (place after the section “How a structured, professional-grade process fits wherever you are…”)
- File: `professional-career-guidance-linear-structured-professional-grade-process.webp` · 1600×1000 WebP under 200 KB
- Teaches: Student or Early-Career For school, college, fresher, and early-direction decisions Useful when stream…
- On-image text (about 25-40 words, shortened from the page; no new claims): For school, college, fresher, and early-direction decisions / For stagnation, AI pressure, and salary-ceiling decisions / Student or Early-Career For school, college, fresher, and early-direction… / Working Professional For stagnation, AI pressure, and salary-ceiling decisions… / A clearer route toward achieving earlier financial freedom through stronger…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Linear process chain or roadmap for “How a structured, professional-grade process fits…”: For school, college, fresher, and…; For stagnation, AI pressure…
- Title attribute: How a structured, professional-grade process fits wherever you are…
- Caption (and keep the same point in HTML text): Student or Early-Career For school, college, fresher, and early-direction decisions Useful when stream choices, course choices, skill…
**V4 — Asymmetrical pros-and-cons comparison** (place after the section “Doubts worth resolving before trusting any guidance as professional”)
- File: `professional-career-guidance-asymmetrical-doubts-worth-resolving-before.webp` · 1600×1000 WebP under 200 KB
- Teaches: These are the questions worth asking before you decide whether guidance is genuinely structured or just…
- On-image text (about 25-40 words, shortened from the page; no new claims): “Professional” sounds like a marketing word. What does it actually… / How is this different from a friend’s advice, a WhatsApp group, or a… / Is a more structured process just a more expensive way to get the… / I already have a rough idea of my path. Do I still need the full…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “Doubts worth resolving before trusting any…”: “Professional” sounds like a…; How is this different from a…; Is a…
- Title attribute: Doubts worth resolving before trusting any guidance as professional
- Caption (and keep the same point in HTML text): These are the questions worth asking before you decide whether guidance is genuinely structured or just confidently generic.
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/working-professional-career-guidance/

**H1:** Working professional career guidance when staying where you are no longer feels smart  
**Type:** bofu · **Search priority:** P3 (0 clicks, 0 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-working-professionals.webp` is shared by 19 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-working-professionals.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 97% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-professional-pivot.webp` has no title attribute and no caption.
7. Context visual reuse: `context-professional-pivot.webp` appears on 10 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 94% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 95% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 96% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-working-professionals.webp` | 97% | eager/high | A working professional weighing a career move at… | NO | NO |
| `bofu/context-professional-pivot.webp` | 97% | lazy | A working professional career pivot map from… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-working-professionals.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `working-professional-career-guidance-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Working professional career guidance should help when the current role, skill stack, or growth path feels…
- On-image text (about 25-40 words, shortened from the page; no new claims): What strong working professional guidance should improve / What to check before paying for working professional career guidance / When working professional career guidance becomes useful / Why generic career advice does not fix stagnation / Questions working professionals ask before choosing career guidance
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Working professional career guidance…”: What strong working professional…; What to check before paying…
- Title attribute: At a glance: Working professional career guidance when staying where…
- Caption (and keep the same point in HTML text): Working professional career guidance should help when the current role, skill stack, or growth path feels under-leveraged.
**V2 — Decision tree** (place after the section “What strong working professional guidance should improve”)
- File: `working-professional-career-guidance-decision-strong-working-professional-guidance.webp` · 1600×1000 WebP under 200 KB
- Teaches: 01 A genuine high-value skill portfolio Stop random upskilling and build a deliberate high-value, high-income…
- On-image text (about 25-40 words, shortened from the page; no new claims): A genuine high-value skill portfolio / Personal branding and positioning / Career pivot logic / Income-growth direction
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “What strong working professional guidance should…”: A genuine high-value skill…; Personal branding and positioning; Career pivot logic
- Title attribute: What strong working professional guidance should improve
- Caption (and keep the same point in HTML text): 01 A genuine high-value skill portfolio Stop random upskilling and build a deliberate high-value, high-income skill portfolio that…
**V3 — Chronological timeline** (place after the section “When working professional career guidance becomes useful”)
- File: `working-professional-career-guidance-chronological-working-professional-career-guidance.webp` · 1600×1000 WebP under 200 KB
- Teaches: 01 Stagnation or ceiling pressure When the role continues, but the upside does not feel strong enough to keep…
- On-image text (about 25-40 words, shortened from the page; no new claims): Stagnation or ceiling pressure / AI pressure or skill under-leverage / Career pivots or income-growth decisions
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “When working professional career guidance becomes…”: Stagnation or ceiling pressure; AI pressure or skill…; Career pivots or…
- Title attribute: When working professional career guidance becomes useful
- Caption (and keep the same point in HTML text): 01 Stagnation or ceiling pressure When the role continues, but the upside does not feel strong enough to keep compounding in the same…
**V4 — Self-assessment checklist** (place after the section “Questions working professionals ask before choosing career guidance”)
- File: `working-professional-career-guidance-self-questions-working-professionals-ask.webp` · 1600×1000 WebP under 200 KB
- Teaches: 01 How do I know if I am in a stagnant role or if I should give it more time?
- On-image text (about 25-40 words, shortened from the page; no new claims): 01 How do I know if I am in a stagnant role or if I should give it more time? / Stagnation is usually not about boredom alone. / It is when the role, skill growth, and income trajectory all feel flat after…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Self-assessment checklist for “Questions working professionals ask before…”: 01 How do I know if I am in a…; Stagnation is usually not about…; It is when the…
- Title attribute: Questions working professionals ask before choosing career guidance
- Caption (and keep the same point in HTML text): 01 How do I know if I am in a stagnant role or if I should give it more time?
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---
