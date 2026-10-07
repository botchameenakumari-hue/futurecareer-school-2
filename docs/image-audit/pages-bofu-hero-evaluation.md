# Image audit — service/other pages: bofu-hero-evaluation

13 pages, ordered by search priority. Submit one page section at a time with `docs/image-audit/00-READ-FIRST.md`.

### /services/career-counselling-and-career-guidance/best-career-counselling-online/

**H1:** The best career counselling online isn't about the platform or the guidance format — it's about whether one live session actually resolves your decision  
**Type:** bofu · **Search priority:** P2 (2 clicks, 18 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-evaluation.webp` is shared by 13 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-evaluation.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 95% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-online-session.webp` has no title attribute and no caption.
7. Context visual reuse: `context-online-session.webp` appears on 6 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 91% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 92% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 94% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-evaluation.webp` | 95% | eager/high | A four-point checklist beside a laptop for… | NO | NO |
| `bofu/context-online-session.webp` | 96% | lazy | An online guidance visual showing live… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. CREATE a distinct hero for this page (it ranks, and `hero-evaluation.webp` is shared by 13 pages): documentary photograph, natural light. Top-down desk view with hands in frame of an Indian student or adult at a home desk, a classroom desk after hours. Props: notebooks, a laptop and printed course or job information. File `best-career-counselling-online-hero.webp` 1600×900, eager + fetchpriority high; alt/title/caption specific to “The best career counselling online isn't about the platform or the…”.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `best-career-counselling-online-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Career counselling online is not the same question as a career guidance platform or the online format in…
- On-image text (about 25-40 words, shortened from the page; no new claims): Four checks that judge one online counselling session, not a whole… / A real counselling session vs everything else sold under the same name / Counselling, guidance, or a platform — which question are you… / What actually changes when the online counselling session holds up / What one online counselling session actually costs
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: The best career counselling online…”: Four checks that judge one online…; A real counselling session…
- Title attribute: At a glance: The best career counselling online isn't about the…
- Caption (and keep the same point in HTML text): Career counselling online is not the same question as a career guidance platform or the online format in general — it's whether one…
**V2 — Comparison table** (place after the section “A real counselling session vs everything else sold under the same name”)
- File: `best-career-counselling-online-comparison-real-counselling-session-everything.webp` · 1600×1000 WebP under 200 KB
- Teaches: "Counselling" gets stretched to cover a lot of different formats.
- On-image text (about 25-40 words, shortened from the page; no new claims): Columns: What's actually on… | What to check / Row: One live 1-on-1… | Ends in a specific… / Row: A "counselling" page that… | Worth asking directly… / Row: A recorded module sold as… | No real counsellor is… / Row: The same counsellor… | Worth confirming before…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Comparison table for “A real counselling session vs everything else…”: What's actually on… | What to…; One live 1-on-1… | Ends in a…; A "counselling" page…
- Title attribute: A real counselling session vs everything else sold under the same name
- Caption (and keep the same point in HTML text): "Counselling" gets stretched to cover a lot of different formats.
**V3 — Asymmetrical pros-and-cons comparison** (place after the section “Counselling, guidance, or a platform — which question are you…”)
- File: `best-career-counselling-online-asymmetrical-counselling-guidance-platform-question.webp` · 1600×1000 WebP under 200 KB
- Teaches: These three questions sound similar but aren't the same comparison, and mixing them up leads to reading the…
- On-image text (about 25-40 words, shortened from the page; no new claims): This page fits if / A different page fits better if / You have one specific decision you need resolved — a stream, an offer, a pivot. / You want to book a single session, not an ongoing relationship. / Your main question is whether that one online session will actually be trustworthy and… / You're still comparing providers in general — the platform evaluation covers credentials… / Your question is about online delivery across a broader, ongoing guidance relationship…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “Counselling, guidance, or a platform — which…”: This page fits if; A different page fits better if; You have one…
- Title attribute: Counselling, guidance, or a platform — which question are you…
- Caption (and keep the same point in HTML text): These three questions sound similar but aren't the same comparison, and mixing them up leads to reading the wrong page or booking the wrong…
**V4 — Comparison table** (place after the section “What one online counselling session actually costs”)
- File: `best-career-counselling-online-comparison-one-online-counselling-session.webp` · 1600×1000 WebP under 200 KB
- Teaches: Pricing transparency is part of trusting a single session, so here are the real numbers rather than a vague…
- On-image text (about 25-40 words, shortened from the page; no new claims): Columns: Session | Price / Row: Student 1-on-1… | Rs 250 (limited-time… / Row: Working professional… | Rs 3000 (limited-time…
- Numbers: Pricing transparency is part of trusting a single session, so here are the real numbers rather than a vague "book a call to find out." Session Price Student 1-on-1 counselling session, online Rs 250 (limited-time price, down from Rs 3000) Working professional 
- Alt: Comparison table for “What one online counselling session actually costs”: Session | Price; Student 1-on-1… | Rs 250…; Working professional… | Rs 3000…
- Title attribute: What one online counselling session actually costs
- Caption (and keep the same point in HTML text): Pricing transparency is part of trusting a single session, so here are the real numbers rather than a vague "book a call to find out."…
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/best-career-counselling-platform/

**H1:** The best career counselling platform isn't the one with the biggest ad budget — here's how to actually tell  
**Type:** bofu · **Search priority:** P2 (0 clicks, 27 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-evaluation.webp` is shared by 13 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-evaluation.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 96% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-evaluation-checklist.webp` has no title attribute and no caption.
7. Context visual reuse: `context-evaluation-checklist.webp` appears on 11 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 91% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 93% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 94% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-evaluation.webp` | 96% | eager/high | A four-point checklist beside a laptop for… | NO | NO |
| `bofu/context-evaluation-checklist.webp` | 96% | lazy | A checklist visual for evaluating real career… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. CREATE a distinct hero for this page (it ranks, and `hero-evaluation.webp` is shared by 13 pages): documentary photograph, natural light. Wide three-quarter shot of an Indian student or adult at a home desk, a school or college corridor bench. Props: notebooks, a laptop and printed course or job information. File `best-career-counselling-platform-hero.webp` 1600×900, eager + fetchpriority high; alt/title/caption specific to “The best career counselling platform isn't the one with the biggest…”.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `best-career-counselling-platform-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: There is no single "best" platform for everyone.
- On-image text (about 25-40 words, shortened from the page; no new claims): The six things that actually separate a good career counselling… / Red flags worth checking before you pay any platform / What actually changes when a platform scores well on these criteria / What it actually costs here, so you can compare against any other… / How to shortlist a platform, without a hard sell
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: The best career counselling platform…”: The six things that actually…; Red flags worth checking…
- Title attribute: At a glance: The best career counselling platform isn't the one with…
- Caption (and keep the same point in HTML text): There is no single "best" platform for everyone.
**V2 — Asymmetrical pros-and-cons comparison** (place after the section “Red flags worth checking before you pay any platform”)
- File: `best-career-counselling-platform-asymmetrical-red-flags-worth-checking.webp` · 1600×1000 WebP under 200 KB
- Teaches: A fair comparison has to name what to watch for, not just what to look for.
- On-image text (about 25-40 words, shortened from the page; no new claims): Signs a platform is worth trusting / Signs to slow down / States pricing clearly before asking you to commit time to a call. / Can explain who counsels you and what their background is. / Recommendations feel specific to you, not a generic personality-type list. / Talks about ongoing support and revisiting the plan, not just one verdict. / Is upfront that no outcome can be guaranteed.
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “Red flags worth checking before you pay any…”: Signs a platform is worth trusting; Signs to slow down; States…
- Title attribute: Red flags worth checking before you pay any platform
- Caption (and keep the same point in HTML text): A fair comparison has to name what to watch for, not just what to look for.
**V3 — Comparison table** (place after the section “What it actually costs here, so you can compare against any other…”)
- File: `best-career-counselling-platform-comparison-actually-costs-here-compare.webp` · 1600×1000 WebP under 200 KB
- Teaches: Pricing transparency is one of the six criteria above, so here are the real numbers rather than a vague…
- On-image text (about 25-40 words, shortened from the page; no new claims): Columns: Plan | Price / Row: Student 1-on-1 session | Rs 250 (limited-time… / Row: Student continuous… | Rs 12000 (limited-time… / Row: Working-professional… | Rs 3000 (limited-time…
- Numbers: Pricing transparency is one of the six criteria above, so here are the real numbers rather than a vague "contact us for pricing." Plan Price Student 1-on-1 session Rs 250 (limited-time price, down from Rs 3000) Student continuous guidance (year, includes the 1
- Alt: Comparison table for “What it actually costs here, so you can compare…”: Plan | Price; Student 1-on-1 session | Rs 250…; Student continuous… | Rs 12000…
- Title attribute: What it actually costs here, so you can compare against any other…
- Caption (and keep the same point in HTML text): Pricing transparency is one of the six criteria above, so here are the real numbers rather than a vague "contact us for pricing." Plan…
**V4 — Linear process chain or roadmap** (place after the section “How to shortlist a platform, without a hard sell”)
- File: `best-career-counselling-platform-linear-shortlist-platform-without-hard.webp` · 1600×1000 WebP under 200 KB
- Teaches: A paid platform is worth evaluating closely if The decision is expensive, time-pressured, or hard to reverse.
- On-image text (about 25-40 words, shortened from the page; no new claims): A paid platform is worth evaluating closely if / The decision is expensive, time-pressured, or hard to reverse. / You've already read enough and are still stuck. / A parent or family member needs a documented plan to evaluate, not just an idea.
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Linear process chain or roadmap for “How to shortlist a platform, without a hard sell”: A paid platform is worth…; The decision is expensive…; You've already…
- Title attribute: How to shortlist a platform, without a hard sell
- Caption (and keep the same point in HTML text): A paid platform is worth evaluating closely if The decision is expensive, time-pressured, or hard to reverse.
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/career-counselling-questions-for-students/

**H1:** Career counselling questions for students: what a counsellor actually asks, and why  
**Type:** bofu · **Search priority:** P2 (0 clicks, 119 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-evaluation.webp` is shared by 13 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-evaluation.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 95% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-evaluation-checklist.webp` has no title attribute and no caption.
7. Context visual reuse: `context-evaluation-checklist.webp` appears on 11 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 90% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 92% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 93% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-evaluation.webp` | 95% | eager/high | A four-point checklist beside a laptop for… | NO | NO |
| `bofu/context-evaluation-checklist.webp` | 96% | lazy | A checklist visual for evaluating real career… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. CREATE a distinct hero for this page (it ranks, and `hero-evaluation.webp` is shared by 13 pages): documentary photograph, natural light. Top-down desk view with hands in frame of a Class 12 or first-year medical aspirant, a quiet public library table. Props: stethoscope, NEET/NCERT books, a fee sheet, a notebook. File `career-counselling-questions-for-students-hero.webp` 1600×900, eager + fetchpriority high; alt/title/caption specific to “Career counselling questions for students: what a counsellor actually…”.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-questions-for-students-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Most of the hesitation before a first session isn’t about the counsellor — it’s not knowing what you’ll be…
- On-image text (about 25-40 words, shortened from the page; no new claims): Why a session asks about all of this instead of just testing you / Questions about what you actually enjoy, not just what you score well… / Questions about strengths, not just aptitude scores / Questions about family expectations versus what you actually want / Questions that pin down exactly where the confusion sits
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career counselling questions for…”: Why a session asks about all of…; Questions about what you…
- Title attribute: At a glance: Career counselling questions for students: what a…
- Caption (and keep the same point in HTML text): Most of the hesitation before a first session isn’t about the counsellor — it’s not knowing what you’ll be asked, or worrying you won’t…
**V2 — Self-assessment checklist** (place after the section “Questions about what you actually enjoy, not just what you score well…”)
- File: `career-counselling-questions-for-students-self-questions-about-actually-enjoy.webp` · 1600×1000 WebP under 200 KB
- Teaches: Marks tell a counsellor what you can produce under exam conditions.
- On-image text (about 25-40 words, shortened from the page; no new claims): Which subjects do you actually enjoy studying, separate from how well you score in them? / If no exam existed for a month, what would you end up reading or watching about on your… / Is there a subject you’re doing fine in but privately dread every time it comes up? / When you help a friend with homework, which subject do you end up explaining the most?
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Self-assessment checklist for “Questions about what you actually enjoy, not just…”: Which subjects do you actually…; If no exam existed for a month…; Is there…
- Title attribute: Questions about what you actually enjoy, not just what you score well…
- Caption (and keep the same point in HTML text): Marks tell a counsellor what you can produce under exam conditions.
**V3 — Self-assessment checklist** (place after the section “Questions about strengths, not just aptitude scores”)
- File: `career-counselling-questions-for-students-self-questions-about-strengths-just.webp` · 1600×1000 WebP under 200 KB
- Teaches: An assessment can flag a pattern.
- On-image text (about 25-40 words, shortened from the page; no new claims): What do teachers, friends, or family say you’re naturally good at, even if you’ve never… / Think of something you finished without anyone pushing you — what was it, and what kept… / Are you the one who explains ideas to others, builds things, organises a group, or works… / When a group project goes wrong, what part do you instinctively step in to fix?
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Self-assessment checklist for “Questions about strengths, not just aptitude…”: What do teachers, friends, or…; Think of something you finished…; Are you the…
- Title attribute: Questions about strengths, not just aptitude scores
- Caption (and keep the same point in HTML text): An assessment can flag a pattern.
**V4 — Asymmetrical pros-and-cons comparison** (place after the section “Questions about family expectations versus what you actually want”)
- File: `career-counselling-questions-for-students-asymmetrical-questions-about-family-expectations.webp` · 1600×1000 WebP under 200 KB
- Teaches: This is often the hardest thing to say out loud, so a counsellor asks it directly rather than waiting for it…
- On-image text (about 25-40 words, shortened from the page; no new claims): What does your family expect you to become, and how close is that to what you’re actually… / Have you told your parents what you’re considering, or are you still working out how to… / If money and family opinion weren’t part of the decision at all, what would you pick? / Is there a relative or family story behind the option your family is pushing, or is it…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “Questions about family expectations versus what…”: What does your family expect you…; Have you told your parents…
- Title attribute: Questions about family expectations versus what you actually want
- Caption (and keep the same point in HTML text): This is often the hardest thing to say out loud, so a counsellor asks it directly rather than waiting for it to come up on its own.
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/career-guidance-platform-review/

**H1:** A career guidance platform review of Future Career School — written the way an honest review should be, including what to expect and what falls short  
**Type:** bofu · **Search priority:** P2 (0 clicks, 28 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-evaluation.webp` is shared by 13 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-evaluation.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 95% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-evaluation-checklist.webp` has no title attribute and no caption.
7. Context visual reuse: `context-evaluation-checklist.webp` appears on 11 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 91% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 93% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 94% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-evaluation.webp` | 95% | eager/high | A four-point checklist beside a laptop for… | NO | NO |
| `bofu/context-evaluation-checklist.webp` | 96% | lazy | A checklist visual for evaluating real career… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. CREATE a distinct hero for this page (it ranks, and `hero-evaluation.webp` is shared by 13 pages): documentary photograph, natural light. Wide three-quarter shot of an Indian student or adult at a home desk, a quiet public library table. Props: notebooks, a laptop and printed course or job information. File `career-guidance-platform-review-hero.webp` 1600×900, eager + fetchpriority high; alt/title/caption specific to “A career guidance platform review of Future Career School — written…”.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-guidance-platform-review-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: This is Future Career School reviewing itself, held to the same standard a genuine third-party review would…
- On-image text (about 25-40 words, shortened from the page; no new claims): What an honest review of a career guidance platform actually has to… / What this review cannot honestly claim, and why there are no star… / What this platform is built around, stated plainly / Who this platform is genuinely not a good fit for / What it actually costs, stated the same way it appears on the booking…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: A career guidance platform review of…”: What an honest review of a career…; What this review cannot…
- Title attribute: At a glance: A career guidance platform review of Future Career…
- Caption (and keep the same point in HTML text): This is Future Career School reviewing itself, held to the same standard a genuine third-party review would demand: name the real price…
**V2 — Decision tree** (place after the section “Who this platform is genuinely not a good fit for”)
- File: `career-guidance-platform-review-decision-who-platform-genuinely-good.webp` · 1600×1000 WebP under 200 KB
- Teaches: A review that only lists who it suits is incomplete.
- On-image text (about 25-40 words, shortened from the page; no new claims): This tends to fit well if / This is a weaker fit if / You want a structured session with a real counsellor working through your specific… / You're comfortable with fully online delivery — video call, no in-person office visit. / You want transparent, upfront pricing before committing time to anything. / You're looking for periodic guidance across a decision, not a daily-use habit tool. / You specifically want an in-person, in-office meeting rather than a video call.
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “Who this platform is genuinely not a good fit for”: This tends to fit well if; This is a weaker fit if; You want a structured session…
- Title attribute: Who this platform is genuinely not a good fit for
- Caption (and keep the same point in HTML text): A review that only lists who it suits is incomplete.
**V3 — Comparison table** (place after the section “What it actually costs, stated the same way it appears on the booking…”)
- File: `career-guidance-platform-review-comparison-actually-costs-stated-same.webp` · 1600×1000 WebP under 200 KB
- Teaches: Pricing transparency is one of the six things this review holds itself to, so here are the real numbers…
- On-image text (about 25-40 words, shortened from the page; no new claims): Columns: Plan | Price / Row: Student 1-on-1 session | Rs 250 (limited-time… / Row: Student continuous… | Rs 12000 (limited-time… / Row: Working-professional… | Rs 3000 (limited-time…
- Numbers: Pricing transparency is one of the six things this review holds itself to, so here are the real numbers instead of a vague "contact us." Plan Price Student 1-on-1 session Rs 250 (limited-time price, down from Rs 3000) Student continuous guidance (year, include
- Alt: Comparison table for “What it actually costs, stated the same way it…”: Plan | Price; Student 1-on-1 session | Rs 250…; Student continuous… | Rs 12000…
- Title attribute: What it actually costs, stated the same way it appears on the booking…
- Caption (and keep the same point in HTML text): Pricing transparency is one of the six things this review holds itself to, so here are the real numbers instead of a vague "contact us."…
**V4 — Linear process chain or roadmap** (place after the section “How to verify any of this yourself before deciding”)
- File: `career-guidance-platform-review-linear-verify-any-yourself-before.webp` · 1600×1000 WebP under 200 KB
- Teaches: Since this review comes from the platform it describes, the honest move is to make it easy to check rather…
- On-image text (about 25-40 words, shortened from the page; no new claims): Compare the prices stated here against the plans page and the booking link directly —… / Ask directly, before booking, who will run your session and what their background is. / Ask what happens if you decide not to continue after a first session — a platform…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Linear process chain or roadmap for “How to verify any of this yourself before deciding”: Compare the prices stated here…; Ask directly, before booking, who……
- Title attribute: How to verify any of this yourself before deciding
- Caption (and keep the same point in HTML text): Since this review comes from the platform it describes, the honest move is to make it easy to check rather than ask you to trust it…
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/best-career-counselling-for-students/

**H1:** The best career counselling for students isn't the best-reviewed platform in general — it's the one built around a student's actual situation  
**Type:** bofu · **Search priority:** P3 (0 clicks, 4 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-evaluation.webp` is shared by 13 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-evaluation.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 95% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-evaluation-checklist.webp` has no title attribute and no caption.
7. Context visual reuse: `context-evaluation-checklist.webp` appears on 11 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 91% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 92% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 94% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-evaluation.webp` | 95% | eager/high | A four-point checklist beside a laptop for… | NO | NO |
| `bofu/context-evaluation-checklist.webp` | 96% | lazy | A checklist visual for evaluating real career… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-evaluation.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `best-career-counselling-for-students-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: A platform can score well on the usual evaluation questions — who counsels you, pricing transparency, skill…
- On-image text (about 25-40 words, shortened from the page; no new claims): Four checks that matter specifically for a student's situation / Red flags specific to counselling built (or not built) for students / What actually changes for a student when a process passes these checks / What it actually costs for a student, so you can compare fairly / How to shortlist for a student's situation, without a hard sell
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: The best career counselling for…”: Four checks that matter…; Red flags specific to counselling…; What…
- Title attribute: At a glance: The best career counselling for students isn't the…
- Caption (and keep the same point in HTML text): A platform can score well on the usual evaluation questions — who counsels you, pricing transparency, skill and income direction — and…
**V2 — Decision tree by situation** (place after the section “Four checks that matter specifically for a student's situation”)
- File: `best-career-counselling-for-students-decision-four-checks-matter-specifically.webp` · 1600×1000 WebP under 200 KB
- Teaches: These sit on top of the general questions worth asking any counselling provider — who actually counsels you…
- On-image text (about 25-40 words, shortened from the page; no new claims): Age-appropriate engagement, not a generic adult script / Parent involvement handled openly, not silently decided for you / Awareness of the exam and admission calendar / Credibility on the actual stream or subject choice
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree by situation for “Four checks that matter specifically for a…”: Age-appropriate engagement, not a…; Parent involvement handled…; Awareness of the…
- Title attribute: Four checks that matter specifically for a student's situation
- Caption (and keep the same point in HTML text): These sit on top of the general questions worth asking any counselling provider — who actually counsels you, whether pricing is…
**V3 — Mistakes versus smarter move panel** (place after the section “Red flags specific to counselling built (or not built) for students”)
- File: `best-career-counselling-for-students-mistakes-red-flags-specific-counselling.webp` · 1600×1000 WebP under 200 KB
- Teaches: These are on top of the general red flags worth checking for any provider — undisclosed pricing…
- On-image text (about 25-40 words, shortened from the page; no new claims): Signs the process actually fits a student / Signs to slow down / Asks the student direct questions, not just the parent in the room. / Can describe how it balances parent concerns with the student's own preferences. / Names real trade-offs between your exact stream or subject options. / Is upfront about working around exam and admission deadlines. / Is honest that no admission, rank, or placement can be guaranteed.
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Mistakes versus smarter move panel for “Red flags specific to counselling built (or not…”: Signs the process actually fits a…; Signs to slow down; Asks the…
- Title attribute: Red flags specific to counselling built (or not built) for students
- Caption (and keep the same point in HTML text): These are on top of the general red flags worth checking for any provider — undisclosed pricing, one-size-fits-all recommendations…
**V4 — Comparison table** (place after the section “What it actually costs for a student, so you can compare fairly”)
- File: `best-career-counselling-for-students-comparison-actually-costs-student-compare.webp` · 1600×1000 WebP under 200 KB
- Teaches: Pricing transparency is one of the general checks worth applying to any provider, so here are the real…
- On-image text (about 25-40 words, shortened from the page; no new claims): Columns: Plan | Price / Row: Student 1-on-1 session | Rs 250 (limited-time… / Row: Student continuous… | Rs 12000 (limited-time…
- Numbers: Pricing transparency is one of the general checks worth applying to any provider, so here are the real numbers for students rather than a vague "contact us for pricing." Plan Price Student 1-on-1 session Rs 250 (limited-time price, down from Rs 3000) Student c
- Alt: Comparison table for “What it actually costs for a student, so you can…”: Plan | Price; Student 1-on-1 session | Rs 250…; Student continuous… | Rs 12000…
- Title attribute: What it actually costs for a student, so you can compare fairly
- Caption (and keep the same point in HTML text): Pricing transparency is one of the general checks worth applying to any provider, so here are the real numbers for students rather than a…
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/best-career-counsellor/

**H1:** The best career counsellor isn't the platform with the most reviews — it's the specific person who actually talks to you  
**Type:** bofu · **Search priority:** P3 (0 clicks, 5 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-evaluation.webp` is shared by 13 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-evaluation.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 95% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-evaluation-checklist.webp` has no title attribute and no caption.
7. Context visual reuse: `context-evaluation-checklist.webp` appears on 11 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 90% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 92% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 93% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-evaluation.webp` | 95% | eager/high | A four-point checklist beside a laptop for… | NO | NO |
| `bofu/context-evaluation-checklist.webp` | 96% | lazy | A checklist visual for evaluating real career… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-evaluation.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `best-career-counsellor-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: A platform can look strong on paper — a polished site, a long list of testimonials, a big audience — and the…
- On-image text (about 25-40 words, shortened from the page; no new claims): Four checks that judge the person, not the platform around them / Red flags specific to the individual counsellor / What actually changes when a counsellor passes these four checks / What it actually costs, so you can judge fairly
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: The best career counsellor isn't the…”: Four checks that judge the…; Red flags specific to the…; What…
- Title attribute: At a glance: The best career counsellor isn't the platform with the…
- Caption (and keep the same point in HTML text): A platform can look strong on paper — a polished site, a long list of testimonials, a big audience — and the individual counsellor you…
**V2 — Self-assessment checklist** (place after the section “Four checks that judge the person, not the platform around them”)
- File: `best-career-counsellor-self-four-checks-judge-person.webp` · 1600×1000 WebP under 200 KB
- Teaches: A platform's marketing, pricing page, and testimonials tell you about the business.
- On-image text (about 25-40 words, shortened from the page; no new claims): Real training and background, stated specifically / Breadth of experience across genuinely different situations / Advice that changes based on you specifically, not a template / Staying current, and honest about where their expertise ends
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Self-assessment checklist for “Four checks that judge the person, not the…”: Real training and background…; Breadth of experience across…; Advice that changes…
- Title attribute: Four checks that judge the person, not the platform around them
- Caption (and keep the same point in HTML text): A platform's marketing, pricing page, and testimonials tell you about the business.
**V3 — Mistakes versus smarter move panel** (place after the section “Red flags specific to the individual counsellor”)
- File: `best-career-counsellor-mistakes-red-flags-specific-individual.webp` · 1600×1000 WebP under 200 KB
- Teaches: A well-reviewed platform can still hand you a poorly matched counsellor.
- On-image text (about 25-40 words, shortened from the page; no new claims): Signs the person is worth trusting / Signs to slow down / Answers questions about their own training and background specifically, not vaguely. / Can describe the range of situations they typically work with. / References real details from your profile in their reasoning. / Says plainly when something is outside their expertise. / Is honest that no outcome can be guaranteed.
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Mistakes versus smarter move panel for “Red flags specific to the individual counsellor”: Signs the person is worth trusting; Signs to slow down; Answers…
- Title attribute: Red flags specific to the individual counsellor
- Caption (and keep the same point in HTML text): A well-reviewed platform can still hand you a poorly matched counsellor.
**V4 — Comparison table** (place after the section “What it actually costs, so you can judge fairly”)
- File: `best-career-counsellor-comparison-actually-costs-judge-fairly.webp` · 1600×1000 WebP under 200 KB
- Teaches: A fair price is the easy part to check.
- On-image text (about 25-40 words, shortened from the page; no new claims): Columns: Plan | Price / Row: Student 1-on-1 session | Rs 250 (limited-time… / Row: Working professional… | Rs 3000 (limited-time…
- Numbers: Plan Price Student 1-on-1 session Rs 250 (limited-time price, down from Rs 3000) Working professional 1-on-1 session Rs 3000 (limited-time price, down from Rs 5000) Once pricing is transparent, the real evaluation is still the four checks above — a fair price 
- Alt: Comparison table for “What it actually costs, so you can judge fairly”: Plan | Price; Student 1-on-1 session | Rs 250…; Working professional… | Rs 3000…
- Title attribute: What it actually costs, so you can judge fairly
- Caption (and keep the same point in HTML text): A fair price is the easy part to check.
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/best-career-guidance-website/

**H1:** The best career guidance website isn't the most polished one — it's the one that gives you something real before it asks for anything  
**Type:** bofu · **Search priority:** P3 (0 clicks, 8 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-evaluation.webp` is shared by 13 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-evaluation.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 94% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-evaluation-checklist.webp` has no title attribute and no caption.
7. Context visual reuse: `context-evaluation-checklist.webp` appears on 11 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 89% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 91% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 93% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-evaluation.webp` | 94% | eager/high | A four-point checklist beside a laptop for… | NO | NO |
| `bofu/context-evaluation-checklist.webp` | 95% | lazy | A checklist visual for evaluating real career… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-evaluation.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `best-career-guidance-website-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: A website can look professional and still be built to capture your details before it gives you anything…
- On-image text (about 25-40 words, shortened from the page; no new claims): Four checks that judge the website as a property / Red flags specific to the website itself / What actually changes when a website passes these checks / What the service behind this website actually costs
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: The best career guidance website…”: Four checks that judge the…; Red flags specific to the website……
- Title attribute: At a glance: The best career guidance website isn't the most polished…
- Caption (and keep the same point in HTML text): A website can look professional and still be built to capture your details before it gives you anything useful.
**V2 — Self-assessment checklist** (place after the section “Four checks that judge the website as a property”)
- File: `best-career-guidance-website-self-four-checks-judge-website.webp` · 1600×1000 WebP under 200 KB
- Teaches: These are separate from evaluating the counselling process or provider — they're about the site itself…
- On-image text (about 25-40 words, shortened from the page; no new claims): Real, readable content before any signup / Named authors you can actually check / Pricing shown on the page, not hidden behind a call / Claims you can check
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Self-assessment checklist for “Four checks that judge the website as a property”: Real, readable content before any…; Named authors you can actually…; Pricing…
- Title attribute: Four checks that judge the website as a property
- Caption (and keep the same point in HTML text): These are separate from evaluating the counselling process or provider — they're about the site itself, before you've even spoken to anyone.
**V3 — Mistakes versus smarter move panel** (place after the section “Red flags specific to the website itself”)
- File: `best-career-guidance-website-mistakes-red-flags-specific-website.webp` · 1600×1000 WebP under 200 KB
- Teaches: A site can look trustworthy and still be built to extract your details before it gives you anything real.
- On-image text (about 25-40 words, shortened from the page; no new claims): Signs the website is worth your time / Signs to slow down / Lets you read real, specific content before asking for anything. / Names its authors, with a checkable background. / Shows pricing directly on the page. / Is honest about who is behind the site and what it does not do. / Every page of real substance sits behind a signup wall.
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Mistakes versus smarter move panel for “Red flags specific to the website itself”: Signs the website is worth your…; Signs to slow down; Lets you read real…
- Title attribute: Red flags specific to the website itself
- Caption (and keep the same point in HTML text): A site can look trustworthy and still be built to extract your details before it gives you anything real.
**V4 — Comparison table** (place after the section “What the service behind this website actually costs”)
- File: `best-career-guidance-website-comparison-service-behind-website-actually.webp` · 1600×1000 WebP under 200 KB
- Teaches: The third check above asked whether a site shows its pricing directly.
- On-image text (about 25-40 words, shortened from the page; no new claims): Columns: Plan | Price / Row: Student 1-on-1 session | Rs 250 (limited-time… / Row: Working professional… | Rs 3000 (limited-time…
- Numbers: Plan Price Student 1-on-1 session Rs 250 (limited-time price, down from Rs 3000) Working professional 1-on-1 session Rs 3000 (limited-time price, down from Rs 5000) See what career guidance covers here Compare plans and pricing
- Alt: Comparison table for “What the service behind this website actually…”: Plan | Price; Student 1-on-1 session | Rs 250…; Working professional… | Rs 3000…
- Title attribute: What the service behind this website actually costs
- Caption (and keep the same point in HTML text): The third check above asked whether a site shows its pricing directly.
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/best-online-career-guidance/

**H1:** The best online career guidance isn't judged by the provider alone — it's judged by whether the online format itself actually works  
**Type:** bofu · **Search priority:** P3 (0 clicks, 24 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-evaluation.webp` is shared by 13 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-evaluation.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 95% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-online-session.webp` has no title attribute and no caption.
7. Context visual reuse: `context-online-session.webp` appears on 6 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 90% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 92% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 93% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-evaluation.webp` | 95% | eager/high | A four-point checklist beside a laptop for… | NO | NO |
| `bofu/context-online-session.webp` | 96% | lazy | An online guidance visual showing live… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-evaluation.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `best-online-career-guidance-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: A provider can score well on the general questions — who counsels you, pricing, skill and income direction —…
- On-image text (about 25-40 words, shortened from the page; no new claims): Four checks that judge the online delivery itself / Online vs in-person, honestly / Red flags specific to online delivery / What actually changes when the online format passes these checks / What an online session actually costs, so you can compare fairly
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: The best online career guidance…”: Four checks that judge the online…; Online vs in-person, honestly…
- Title attribute: At a glance: The best online career guidance isn't judged by the…
- Caption (and keep the same point in HTML text): A provider can score well on the general questions — who counsels you, pricing, skill and income direction — and the online delivery itself…
**V2 — Comparison table** (place after the section “Online vs in-person, honestly”)
- File: `best-online-career-guidance-comparison-online-person-honestly.webp` · 1600×1000 WebP under 200 KB
- Teaches: Neither format is automatically better — the real question is whether the four checks above hold up for the…
- On-image text (about 25-40 words, shortened from the page; no new claims): Columns: Format | What to check / Row: Live two-way video call | You can ask follow-up… / Row: Recorded or scripted… | No real back-and-forth —… / Row: In-person meeting | Removes the… / Row: Online across every city… | Only works if the…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Comparison table for “Online vs in-person, honestly”: Format | What to check; Live two-way video call | You can…; Recorded or scripted… | No real…
- Title attribute: Online vs in-person, honestly
- Caption (and keep the same point in HTML text): Neither format is automatically better — the real question is whether the four checks above hold up for the specific online process you're…
**V3 — Mistakes versus smarter move panel** (place after the section “Red flags specific to online delivery”)
- File: `best-online-career-guidance-mistakes-red-flags-specific-online.webp` · 1600×1000 WebP under 200 KB
- Teaches: A video-call session can look identical to a real one right up until you're on it.
- On-image text (about 25-40 words, shortened from the page; no new claims): Signs the format actually works / Signs to slow down / Confirms sessions are live, two-way video, not recorded. / Can describe who you'll actually be speaking with, consistently. / Is upfront about how your information is handled and stored. / Shows the same availability and quality regardless of city. / Makes scheduling around exams or work hours genuinely easy.
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Mistakes versus smarter move panel for “Red flags specific to online delivery”: Signs the format actually works; Signs to slow down; Confirms sessions are live…
- Title attribute: Red flags specific to online delivery
- Caption (and keep the same point in HTML text): A video-call session can look identical to a real one right up until you're on it.
**V4 — Comparison table** (place after the section “What an online session actually costs, so you can compare fairly”)
- File: `best-online-career-guidance-comparison-online-session-actually-costs.webp` · 1600×1000 WebP under 200 KB
- Teaches: None of the format checks above matter much if the price only shows up after a call.
- On-image text (about 25-40 words, shortened from the page; no new claims): Columns: Plan | Price / Row: Student 1-on-1 session… | Rs 250 (limited-time… / Row: Working professional… | Rs 3000 (limited-time…
- Numbers: Plan Price Student 1-on-1 session, online Rs 250 (limited-time price, down from Rs 3000) Working professional 1-on-1 session, online Rs 3000 (limited-time price, down from Rs 5000) Guidance here is delivered fully online across every state in India, so locatio
- Alt: Comparison table for “What an online session actually costs, so you can…”: Plan | Price; Student 1-on-1 session… | Rs 250…; Working professional… | Rs 3000…
- Title attribute: What an online session actually costs, so you can compare fairly
- Caption (and keep the same point in HTML text): None of the format checks above matter much if the price only shows up after a call.
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/best-skill-development-platform/

**H1:** The best skill development platform depends on a decision most people skip: which skill is actually worth building first  
**Type:** bofu · **Search priority:** P3 (0 clicks, 3 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-evaluation.webp` is shared by 13 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-evaluation.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 96% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-evaluation-checklist.webp` has no title attribute and no caption.
7. Context visual reuse: `context-evaluation-checklist.webp` appears on 11 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 92% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 93% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 94% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-evaluation.webp` | 96% | eager/high | A four-point checklist beside a laptop for… | NO | NO |
| `bofu/context-evaluation-checklist.webp` | 97% | lazy | A checklist visual for evaluating real career… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-evaluation.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `best-skill-development-platform-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: There is no single "best" skill development platform for everyone — a strong coding bootcamp for one person…
- On-image text (about 25-40 words, shortened from the page; no new claims): The five things that actually separate a good skill development… / Why the skill decision usually matters more than the platform decision / Red flags worth checking before you pay any skill development platform / What actually changes when skill direction is clearer before you pick… / What career guidance costs here, so you know what you're weighing
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: The best skill development platform…”: The five things that actually…; Why the skill decision…
- Title attribute: At a glance: The best skill development platform depends on a…
- Caption (and keep the same point in HTML text): There is no single "best" skill development platform for everyone — a strong coding bootcamp for one person can be the wrong spend for…
**V2 — Asymmetrical pros-and-cons comparison** (place after the section “Red flags worth checking before you pay any skill development platform”)
- File: `best-skill-development-platform-asymmetrical-red-flags-worth-checking.webp` · 1600×1000 WebP under 200 KB
- Teaches: A fair comparison has to name what to watch for, not just what to look for.
- On-image text (about 25-40 words, shortened from the page; no new claims): Signs a platform is worth trusting / Signs to slow down / Shows real projects or a portfolio from past learners, not just testimonials. / States pricing and refund terms clearly before you commit. / Curriculum has a visible, recent update history. / Offers real mentor or community support, not just recorded videos. / Is upfront that no course can guarantee a job or a salary outcome.
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “Red flags worth checking before you pay any skill…”: Signs a platform is worth trusting; Signs to slow down; Shows…
- Title attribute: Red flags worth checking before you pay any skill development platform
- Caption (and keep the same point in HTML text): A fair comparison has to name what to watch for, not just what to look for.
**V3 — Comparison table** (place after the section “What career guidance costs here, so you know what you're weighing”)
- File: `best-skill-development-platform-comparison-career-guidance-costs-here.webp` · 1600×1000 WebP under 200 KB
- Teaches: To be clear, this is the cost of direction-setting guidance — deciding which skill to build — not the cost of…
- On-image text (about 25-40 words, shortened from the page; no new claims): Columns: Plan | Price / Row: Career & Skills Compass | Fully free, always / Row: Student 1-on-1 session | Rs 250 (limited-time… / Row: Student continuous… | Rs 12000 (limited-time… / Row: Working-professional… | Rs 3000 (limited-time…
- Numbers: Plan Price Career & Skills Compass Fully free, always Student 1-on-1 session Rs 250 (limited-time price, down from Rs 3000) Student continuous guidance (year, includes the 1-on-1 plus up to 24 small-group sessions) Rs 12000 (limited-time price, down from Rs 29
- Alt: Comparison table for “What career guidance costs here, so you know what…”: Plan | Price; Career & Skills Compass | Fully…; Student 1-on-1 session | Rs 250…
- Title attribute: What career guidance costs here, so you know what you're weighing
- Caption (and keep the same point in HTML text): To be clear, this is the cost of direction-setting guidance — deciding which skill to build — not the cost of an actual skill-training…
**V4 — Linear process chain or roadmap** (place after the section “How to shortlist, without a hard sell”)
- File: `best-skill-development-platform-linear-shortlist-without-hard-sell.webp` · 1600×1000 WebP under 200 KB
- Teaches: The free Career & Skills Compass is probably enough if You're early in exploring and just need to narrow a…
- On-image text (about 25-40 words, shortened from the page; no new claims): The free Career & Skills Compass is probably enough if / A guidance session is worth booking if / You're early in exploring and just need to narrow a long list of possible skills. / You haven't picked a direction at all yet and want a quick, no-cost starting point. / The eventual platform spend is still hypothetical, not imminent. / You're weighing two or three specific skills and the wrong pick would cost real time or… / Your financial or family situation makes the decision higher-stakes than a generic tool…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Linear process chain or roadmap for “How to shortlist, without a hard sell”: The free Career & Skills Compass…; A guidance session is worth…; You're early in…
- Title attribute: How to shortlist, without a hard sell
- Caption (and keep the same point in HTML text): The free Career & Skills Compass is probably enough if You're early in exploring and just need to narrow a long list of possible skills.
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/career-counselling-vs-career-coaching/

**H1:** Career counselling vs career coaching: the real difference, honestly explained  
**Type:** bofu · **Search priority:** P3 (0 clicks, 5 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-evaluation.webp` is shared by 13 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-evaluation.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 95% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-holistic-framework.webp` has no title attribute and no caption.
7. Context visual reuse: `context-holistic-framework.webp` appears on 24 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 90% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 92% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 94% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-evaluation.webp` | 95% | eager/high | A four-point checklist beside a laptop for… | NO | NO |
| `bofu/context-holistic-framework.webp` | 96% | lazy | A holistic career decision framework covering… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-evaluation.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-vs-career-coaching-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Career counselling and career coaching are not identical, even though the words get used loosely.
- On-image text (about 25-40 words, shortened from the page; no new claims): What career counselling and career coaching usually mean / Where the line between counselling and coaching actually blurs / What matters more than the label on the session / How to tell which one actually fits your situation / How counselling and coaching are handled here, without making you…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career counselling vs career…”: What career counselling and…; Where the line between…; What matters…
- Title attribute: At a glance: Career counselling vs career coaching: the real…
- Caption (and keep the same point in HTML text): Career counselling and career coaching are not identical, even though the words get used loosely.
**V2 — Self-assessment checklist** (place after the section “What career counselling and career coaching usually mean”)
- File: `career-counselling-vs-career-coaching-self-career-counselling-career-coaching.webp` · 1600×1000 WebP under 200 KB
- Teaches: Neither term is legally defined or regulated the same way everywhere, so exact usage varies by provider.
- On-image text (about 25-40 words, shortened from the page; no new claims): Career counselling, in its more traditional sense / Career coaching, in its more traditional sense / Centres on assessment: aptitude, interests, personality fit, work-style signals. / Focused on a decision — a stream, a course, a college, a career switch. / Often structured as a shorter engagement: one session, or a small, defined series. / Common in school and college settings, and at major life-stage crossroads. / Centres on execution: turning a chosen direction into concrete action.
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Self-assessment checklist for “What career counselling and career coaching…”: Career counselling, in its more…; Career coaching, in its more…; Centres on…
- Title attribute: What career counselling and career coaching usually mean
- Caption (and keep the same point in HTML text): Neither term is legally defined or regulated the same way everywhere, so exact usage varies by provider.
**V3 — Asymmetrical pros-and-cons comparison** (place after the section “How to tell which one actually fits your situation”)
- File: `career-counselling-vs-career-coaching-asymmetrical-tell-one-actually-fits.webp` · 1600×1000 WebP under 200 KB
- Teaches: Counselling-style support probably fits if You're still choosing between streams, courses, or directions.
- On-image text (about 25-40 words, shortened from the page; no new claims): Counselling-style support probably fits if / Coaching-style support probably fits if / You're still choosing between streams, courses, or directions. / The immediate question is a decision, not a follow-through problem. / You want an assessment-backed read on fit before committing time or money. / You already know your direction but keep losing momentum on it. / You want regular accountability, not a one-time verdict.
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “How to tell which one actually fits your situation”: Counselling-style support…; Coaching-style support probably……
- Title attribute: How to tell which one actually fits your situation
- Caption (and keep the same point in HTML text): Counselling-style support probably fits if You're still choosing between streams, courses, or directions.
**V4 — Comparison table** (place after the section “What counselling-style and coaching-style support costs here”)
- File: `career-counselling-vs-career-coaching-comparison-counselling-style-coaching-style.webp` · 1600×1000 WebP under 200 KB
- Teaches: Pricing for either format, or both together, is shown upfront rather than revealed after a sales call.
- On-image text (about 25-40 words, shortened from the page; no new claims): Columns: Plan | Price / Row: Student 1-on-1 session… | Rs 250 (limited-time… / Row: Student continuous… | Rs 12000 (limited-time… / Row: Working-professional… | Rs 3000 (limited-time…
- Numbers: Plan Price Student 1-on-1 session (counselling-style: decision support) Rs 250 (limited-time price, down from Rs 3000) Student continuous guidance (coaching-style: year-round follow-through, includes the 1-on-1 plus up to 24 small-group sessions) Rs 12000 (lim
- Alt: Comparison table for “What counselling-style and coaching-style support…”: Plan | Price; Student 1-on-1 session… | Rs 250…; Student continuous… | Rs 12000…
- Title attribute: What counselling-style and coaching-style support costs here
- Caption (and keep the same point in HTML text): Pricing for either format, or both together, is shown upfront rather than revealed after a sales call.
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/compare-career-counselling-services/

**H1:** Compare career counselling services side by side, not one at a time  
**Type:** bofu · **Search priority:** P3 (0 clicks, 20 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-evaluation.webp` is shared by 13 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-evaluation.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 95% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-evaluation-checklist.webp` has no title attribute and no caption.
7. Context visual reuse: `context-evaluation-checklist.webp` appears on 11 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 91% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 92% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 94% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-evaluation.webp` | 95% | eager/high | A four-point checklist beside a laptop for… | NO | NO |
| `bofu/context-evaluation-checklist.webp` | 96% | lazy | A checklist visual for evaluating real career… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-evaluation.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `compare-career-counselling-services-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: When you compare career counselling services, the real differences rarely show up in a headline claim — they…
- On-image text (about 25-40 words, shortened from the page; no new claims): The side-by-side comparison matrix / What the pricing-transparency row actually looks like in numbers / What actually changes once you weigh these rows and choose accordingly / Objections worth answering before you pick a row / Once you know which rows matter most, here is how to start
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Compare career counselling services…”: The side-by-side comparison matrix; What the…
- Title attribute: At a glance: Compare career counselling services side by side, not…
- Caption (and keep the same point in HTML text): When you compare career counselling services, the real differences rarely show up in a headline claim — they show up when you line up who…
**V2 — Comparison table** (place after the section “The side-by-side comparison matrix”)
- File: `compare-career-counselling-services-comparison-side-side-comparison-matrix.webp` · 1600×1000 WebP under 200 KB
- Teaches: These are broad patterns, not a claim that every provider in a category behaves identically — individual…
- On-image text (about 25-40 words, shortened from the page; no new claims): Columns: Criteria | Independent counsellor | School- or… | Coaching or ed-tech… / Row: Who counsels you | Usually the person you… | Often a teacher or… | Can be routed through an… / Row: Personalization | Can be genuinely high… | Usually the same session… | Recommendations can read… / Row: Skill and income direction | Varies — some focus… | Usually centred on marks… | Often steers toward a… / Row: Pricing transparency | Usually stated upfront… | Typically bundled into… | Sometimes withheld until… / Row: Session format | Usually one-off, or a… | Typically one session… | Often bundled with a…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Comparison table for “The side-by-side comparison matrix”: Criteria | Independent counsellor…; Who counsels you | Usually the…; Personalization | Can be…
- Title attribute: The side-by-side comparison matrix
- Caption (and keep the same point in HTML text): These are broad patterns, not a claim that every provider in a category behaves identically — individual counsellors and platforms vary.
**V3 — Comparison table** (place after the section “What the pricing-transparency row actually looks like in numbers”)
- File: `compare-career-counselling-services-comparison-pricing-transparency-row-actually.webp` · 1600×1000 WebP under 200 KB
- Teaches: The matrix above lists pricing transparency as one of the criteria worth checking on any service.
- On-image text (about 25-40 words, shortened from the page; no new claims): Columns: Plan | Price / Row: Student 1-on-1 session | Rs 250 (limited-time… / Row: Student continuous… | Rs 12000 (limited-time… / Row: Working-professional… | Rs 3000 (limited-time…
- Numbers: Plan Price Student 1-on-1 session Rs 250 (limited-time price, down from Rs 3000) Student continuous guidance (year, includes the 1-on-1 plus up to 24 small-group sessions) Rs 12000 (limited-time price, down from Rs 29000) Working-professional 1-on-1 session Rs
- Alt: Comparison table for “What the pricing-transparency row actually looks…”: Plan | Price; Student 1-on-1 session | Rs 250…; Student continuous… | Rs 12000…
- Title attribute: What the pricing-transparency row actually looks like in numbers
- Caption (and keep the same point in HTML text): The matrix above lists pricing transparency as one of the criteria worth checking on any service.
**V4 — Asymmetrical pros-and-cons comparison** (place after the section “Objections worth answering before you pick a row”)
- File: `compare-career-counselling-services-asymmetrical-objections-worth-answering-before.webp` · 1600×1000 WebP under 200 KB
- Teaches: "Isn't the cheapest option always the safer bet?" Not necessarily.
- On-image text (about 25-40 words, shortened from the page; no new claims): "Isn't the cheapest option always the safer bet?" / "What if two services score well on different rows?" / "Does a bigger platform automatically mean better counselling?"
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “Objections worth answering before you pick a row”: "Isn't the cheapest option always…; "What if two services score…
- Title attribute: Objections worth answering before you pick a row
- Caption (and keep the same point in HTML text): "Isn't the cheapest option always the safer bet?" Not necessarily.
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/top-career-coaching-services/

**H1:** The top career coaching services aren't the ones with the best pep talk — they're the ones that hold you accountable to a plan  
**Type:** bofu · **Search priority:** P3 (0 clicks, 0 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-evaluation.webp` is shared by 13 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-evaluation.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 95% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-holistic-framework.webp` was chosen by the regex in `BofuContextVisual.astro`; a cleaner match for this keyword is `context-evaluation-checklist.webp`.
7. Context visual `context-holistic-framework.webp` has no title attribute and no caption.
8. Context visual reuse: `context-holistic-framework.webp` appears on 24 pages.
9. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 90% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 92% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 93% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-evaluation.webp` | 95% | eager/high | A four-point checklist beside a laptop for… | NO | NO |
| `bofu/context-holistic-framework.webp` | 96% | lazy | A holistic career decision framework covering… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-evaluation.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `top-career-coaching-services-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: A coaching call can feel motivating in the moment and still leave you with nothing structured to actually…
- On-image text (about 25-40 words, shortened from the page; no new claims): Four checks that separate real coaching from a paid pep talk / Coaching or counselling — which one your situation actually needs / Red flags specific to career coaching services / What actually changes when a coaching service passes these checks / What ongoing coaching actually costs, so you can compare fairly
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: The top career coaching services…”: Four checks that separate real…; Coaching or counselling — which……
- Title attribute: At a glance: The top career coaching services aren't the ones with…
- Caption (and keep the same point in HTML text): A coaching call can feel motivating in the moment and still leave you with nothing structured to actually follow.
**V2 — Asymmetrical pros-and-cons comparison** (place after the section “Coaching or counselling — which one your situation actually needs”)
- File: `top-career-coaching-services-asymmetrical-coaching-counselling-one-situation.webp` · 1600×1000 WebP under 200 KB
- Teaches: Before evaluating coaching services specifically, it's worth confirming coaching is the right fit at all.
- On-image text (about 25-40 words, shortened from the page; no new claims): The real difference in practice / Before evaluating coaching services specifically, it's worth confirming… / Counselling fits when The real gap is still a decision — which path, which…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “Coaching or counselling — which one your…”: The real difference in practice; Before evaluating coaching……
- Title attribute: Coaching or counselling — which one your situation actually needs
- Caption (and keep the same point in HTML text): Before evaluating coaching services specifically, it's worth confirming coaching is the right fit at all.
**V3 — Mistakes versus smarter move panel** (place after the section “Red flags specific to career coaching services”)
- File: `top-career-coaching-services-mistakes-red-flags-specific-career.webp` · 1600×1000 WebP under 200 KB
- Teaches: A service can call itself coaching and still deliver a single pep talk with a subscription attached.
- On-image text (about 25-40 words, shortened from the page; no new claims): Signs a coaching service is genuine / Signs to slow down / Can describe a specific, scheduled check-in cadence. / Builds a plan tied to your named goals, not generic encouragement. / Reviews and adjusts the plan as your situation changes. / Is clear about who is coaching you and their background. / Is honest that no specific outcome can be guaranteed.
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Mistakes versus smarter move panel for “Red flags specific to career coaching services”: Signs a coaching service is…; Signs to slow down; Can describe a…
- Title attribute: Red flags specific to career coaching services
- Caption (and keep the same point in HTML text): A service can call itself coaching and still deliver a single pep talk with a subscription attached.
**V4 — Comparison table** (place after the section “What ongoing coaching actually costs, so you can compare fairly”)
- File: `top-career-coaching-services-comparison-ongoing-coaching-actually-costs.webp` · 1600×1000 WebP under 200 KB
- Teaches: A real coaching service doesn't need a sales call to state its price.
- On-image text (about 25-40 words, shortened from the page; no new claims): Columns: Plan | Price / Row: Working professional… | Rs 3000 (limited-time… / Row: Student continuous… | Rs 12000 (limited-time…
- Numbers: Plan Price Working professional 1-on-1 session Rs 3000 (limited-time price, down from Rs 5000) Student continuous guidance (year, includes the 1-on-1 plus up to 24 small-group sessions) Rs 12000 (limited-time price, down from Rs 29000) Use these numbers as a b
- Alt: Comparison table for “What ongoing coaching actually costs, so you can…”: Plan | Price; Working professional… | Rs 3000…; Student continuous… | Rs 12000…
- Title attribute: What ongoing coaching actually costs, so you can compare fairly
- Caption (and keep the same point in HTML text): A real coaching service doesn't need a sales call to state its price.
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/where-to-get-career-counselling/

**H1:** Where to get career counselling depends on what you're actually deciding  
**Type:** bofu · **Search priority:** P3 (0 clicks, 1 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-evaluation.webp` is shared by 13 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-evaluation.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 95% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-evaluation-checklist.webp` has no title attribute and no caption.
7. Context visual reuse: `context-evaluation-checklist.webp` appears on 11 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 91% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 92% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 94% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-evaluation.webp` | 95% | eager/high | A four-point checklist beside a laptop for… | NO | NO |
| `bofu/context-evaluation-checklist.webp` | 96% | lazy | A checklist visual for evaluating real career… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-evaluation.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `where-to-get-career-counselling-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Where to get career counselling comes down to five real places: a school or college counselling cell, a…
- On-image text (about 25-40 words, shortened from the page; no new claims): The five real channels, compared / How to actually reach each one / What the paid end of the table actually costs / What changes once you pick the right door instead of the nearest one / What people usually worry about before choosing where to go
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Where to get career counselling…”: The five real channels, compared; How to actually reach each one…
- Title attribute: At a glance: Where to get career counselling depends on what you're…
- Caption (and keep the same point in HTML text): Where to get career counselling comes down to five real places: a school or college counselling cell, a government or NGO helpline, an…
**V2 — Comparison table** (place after the section “The five real channels, compared”)
- File: `where-to-get-career-counselling-comparison-five-real-channels-compared.webp` · 1600×1000 WebP under 200 KB
- Teaches: These are broad patterns, not a claim that every provider in a category behaves identically.
- On-image text (about 25-40 words, shortened from the page; no new claims): Columns: Channel | What you actually get | Cost | Best for / Row: School or college… | A single group session or… | Free or already included… | A first, narrow question… / Row: Government or NGO helpline | General-purpose guidance… | Free. | A basic starting point… / Row: Employer-provided… | Support scoped to your… | Usually free if your… | Questions about growth… / Row: Independent private… | One-to-one attention that… | Set by the individual… | Someone who has already… / Row: Online career guidance… | Structured decision… | A paid 1-on-1 or… | A specific decision that…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Comparison table for “The five real channels, compared”: Channel | What you actually get |…; School or college… | A single…; Government or NGO helpline |…
- Title attribute: The five real channels, compared
- Caption (and keep the same point in HTML text): These are broad patterns, not a claim that every provider in a category behaves identically.
**V3 — Linear process chain or roadmap** (place after the section “How to actually reach each one”)
- File: `where-to-get-career-counselling-linear-actually-reach-each-one.webp` · 1600×1000 WebP under 200 KB
- Teaches: Knowing a channel exists is not the same as knowing how to use it.
- On-image text (about 25-40 words, shortened from the page; no new claims): School or college counselling cell / Government or NGO helpline / Employer-run guidance or mentoring / Independent private counsellor / Online guidance platform
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Linear process chain or roadmap for “How to actually reach each one”: School or college counselling cell; Government or NGO helpline; Employer-run guidance or…
- Title attribute: How to actually reach each one
- Caption (and keep the same point in HTML text): Knowing a channel exists is not the same as knowing how to use it.
**V4 — Comparison table** (place after the section “What the paid end of the table actually costs”)
- File: `where-to-get-career-counselling-comparison-paid-end-table-actually.webp` · 1600×1000 WebP under 200 KB
- Teaches: The table above lists cost as one of the things to check before choosing a channel.
- On-image text (about 25-40 words, shortened from the page; no new claims): Columns: Plan | Price / Row: Student 1-on-1 session | Rs 250 (limited-time… / Row: Student continuous… | Rs 12000 (limited-time… / Row: Working-professional… | Rs 3000 (limited-time…
- Numbers: Plan Price Student 1-on-1 session Rs 250 (limited-time price, down from Rs 3000) Student continuous guidance (year, includes the 1-on-1 plus up to 24 small-group sessions) Rs 12000 (limited-time price, down from Rs 29000) Working-professional 1-on-1 session Rs
- Alt: Comparison table for “What the paid end of the table actually costs”: Plan | Price; Student 1-on-1 session | Rs 250…; Student continuous… | Rs 12000…
- Title attribute: What the paid end of the table actually costs
- Caption (and keep the same point in HTML text): The table above lists cost as one of the things to check before choosing a channel.
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---
