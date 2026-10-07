# Image audit — service/other pages: services-hub

1 pages, ordered by search priority. Submit one page section at a time with `docs/image-audit/00-READ-FIRST.md`.

### /services/

**H1:** Choose the Right Career Support for Your Current Stage  
**Type:** services-hub · **Search priority:** P2 (1 clicks, 39 impressions) · **Rendered images:** 4 (0 generic category, 1 hero, 1 context, 2 SVG)
**Status: AMBER**

**Findings**
1. Hero `hero-hub.webp` is shared by 2 page(s); acceptable reuse.
2. Hero `hero-hub.webp` has no title attribute and no caption.
3. Hero is `fetchpriority=high` but is rendered at 99% of the raw HTML (after the content); it is moved by JavaScript.
4. Context visual `context-holistic-framework.webp` has no title attribute and no caption.
5. Context visual reuse: `context-holistic-framework.webp` appears on 24 pages.
6. SVG diagrams present (`session-flow.svg`, `skill-portfolio-chain.svg`): preserve them; add alt/title/caption if missing.
7. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `bofu/hero-hub.webp` | 99% | eager/high | The career counselling and guidance service shown… | NO | NO |
| `bofu/session-flow.svg` | 99% | lazy | Five-stage career guidance session flow from… | NO | NO |
| `bofu/skill-portfolio-chain.svg` | 100% | lazy | Skill portfolio chain from strengths to financial… | NO | NO |
| `bofu/context-holistic-framework.webp` | 100% | lazy | A holistic career decision framework covering… | NO | NO |

**Required actions**
1. KEEP the hub hero. CREATE 4 explanatory visuals (hub overview, audience chooser, how to pick) from the page content:
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `services-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Future Career School is built for decisions that matter: stream selection, degree direction, skill selection…
- On-image text (about 25-40 words, shortened from the page; no new claims): Three Tracks, Shared Direction / Students and Working Professionals / Browse All Service Pages / Build Future-Ready Skills for Earlier Financial Freedom / Career Guidance for Different Situations
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Choose the Right Career Support for…”: Three Tracks, Shared Direction; Students and Working…
- Title attribute: At a glance: Choose the Right Career Support for Your Current Stage
- Caption (and keep the same point in HTML text): Future Career School is built for decisions that matter: stream selection, degree direction, skill selection, career pivots, and achieving…
**V2 — Self-assessment checklist** (place after the section “Three Tracks, Shared Direction”)
- File: `services-self-three-tracks-shared-direction.webp` · 1600×1000 WebP under 200 KB
- Teaches: Each track has a clear job.
- On-image text (about 25-40 words, shortened from the page; no new claims): Career Guidance, Counselling, and Coaching / Assessments and Career Tests / Skill Roadmaps and Execution Resources / Stream selection and degree direction / Career change planning and risk control / Skill direction based on market-fit / Proof of work and income-growth direction
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Self-assessment checklist for “Three Tracks, Shared Direction”: Career Guidance, Counselling, and…; Assessments and Career Tests; Skill Roadmaps and Execution…
- Title attribute: Three Tracks, Shared Direction
- Caption (and keep the same point in HTML text): Each track has a clear job.
**V3 — Linear process chain or roadmap** (place after the section “Build Future-Ready Skills for Earlier Financial Freedom”)
- File: `services-linear-build-future-ready-skills.webp` · 1600×1000 WebP under 200 KB
- Teaches: Students Student path Student Career Guidance Practical student career guidance before the wrong path wastes…
- On-image text (about 25-40 words, shortened from the page; no new claims): Student Career Guidance / Working Professional Career Guidance / Students Student path Student Career Guidance Practical student career guidance… / Limited-time student offer ₹3000 ₹250 for the first 1-on-1 session A… / Book 1-on-1 Online across India Avoid Wrong streams, outdated degrees, and…
- Numbers: Limited-time student offer ₹3000 ₹250 for the first 1-on-1 session A low-friction first step before the wrong path costs more time and money. | Continuous career guidance Limited-time annual price ₹29000 ₹12000 Includes the 1-on-1 and up to 24 small-group sessions across the year. | Limited-time professional offer ₹5000 ₹3000 for one 1-on-1 session Book one sharp 1-on-1 before stagnation, weak positioning, or a bad pivot gets more expensive.
- Alt: Linear process chain or roadmap for “Build Future-Ready Skills for Earlier Financial…”: Student Career Guidance; Working Professional Career…; Students Student…
- Title attribute: Build Future-Ready Skills for Earlier Financial Freedom
- Caption (and keep the same point in HTML text): Students Student path Student Career Guidance Practical student career guidance before the wrong path wastes years, money, and future…
**V4 — Asymmetrical pros-and-cons comparison** (place after the section “Career Guidance for Different Situations”)
- File: `services-asymmetrical-career-guidance-different-situations.webp` · 1600×1000 WebP under 200 KB
- Teaches: Explore the guidance option that fits your current decision, stage, or pressure.
- On-image text (about 25-40 words, shortened from the page; no new claims): Explore the guidance option that fits your current decision, stage, or pressure. / Career Counselling and Guidance Broader help with stream, course, skill, and… / › Career Guidance Practical direction for people who need clearer next steps…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “Career Guidance for Different Situations”: Explore the guidance option that…; Career Counselling and Guidance…; ›…
- Title attribute: Career Guidance for Different Situations
- Caption (and keep the same point in HTML text): Explore the guidance option that fits your current decision, stage, or pressure.
2. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
3. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---
