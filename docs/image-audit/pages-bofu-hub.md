# Image audit — service/other pages: bofu-hub

1 pages, ordered by search priority. Submit one page section at a time with `docs/image-audit/00-READ-FIRST.md`.

### /services/career-counselling-and-career-guidance/

**H1:** Career Counselling and Guidance for Students and Working Professionals  
**Type:** bofu-hub · **Search priority:** P2 (1 clicks, 51 impressions) · **Rendered images:** 4 (0 generic category, 1 hero, 1 context, 2 SVG)
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
| `bofu/skill-portfolio-chain.svg` | 99% | lazy | Skill portfolio chain from strengths to financial… | NO | NO |
| `bofu/context-holistic-framework.webp` | 99% | lazy | A holistic career decision framework covering… | NO | NO |

**Required actions**
1. KEEP the hub hero. CREATE 4 explanatory visuals (hub overview, audience chooser, how to pick) from the page content:
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-and-career-guidance-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Whether someone searches for career counselling, career guidance, career coaching, or career strategy, the…
- On-image text (about 25-40 words, shortened from the page; no new claims): How practical guidance should move you forward / What Guidance Is and Isn't / Career Guidance for Students and Working Professionals / Start with the guidance situation closest to yours / Clearer Career Decisions for Future Readiness and Earlier Financial…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career Counselling and Guidance for…”: How practical guidance should…; What Guidance Is and Isn't…
- Title attribute: At a glance: Career Counselling and Guidance for Students and Working…
- Caption (and keep the same point in HTML text): Whether someone searches for career counselling, career guidance, career coaching, or career strategy, the real need is usually the same…
**V2 — Self-assessment checklist** (place after the section “What Guidance Is and Isn't”)
- File: `career-counselling-and-career-guidance-self-guidance-isn.webp` · 1600×1000 WebP under 200 KB
- Teaches: Good guidance should make the next decision clearer, not dress up generic advice in stronger words.
- On-image text (about 25-40 words, shortened from the page; no new claims): What Guidance Is Not / What Guidance Is / A shortcut that works without effort on your part / A placement service or guaranteed job outcome / Generic advice you could find on public videos / Degree-first pressure without skill thinking / Low-growth path pushing dressed up as guidance
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Self-assessment checklist for “What Guidance Is and Isn't”: What Guidance Is Not; What Guidance Is; A shortcut that works without…
- Title attribute: What Guidance Is and Isn't
- Caption (and keep the same point in HTML text): Good guidance should make the next decision clearer, not dress up generic advice in stronger words.
**V3 — Decision tree by situation** (place after the section “Career Guidance for Students and Working Professionals”)
- File: `career-counselling-and-career-guidance-decision-career-guidance-students-working.webp` · 1600×1000 WebP under 200 KB
- Teaches: Different starting points still need the same foundations: clearer decisions, higher-value skill direction…
- On-image text (about 25-40 words, shortened from the page; no new claims): School, College, and Early-Career Students / Working Professionals / You're in school or college and don't know which path to commit to. / You're a fresher or recent graduate and still do not know which skill direction is worth… / You picked a stream or degree without knowing if it suits your thinking style. / You want to start building skills but don't know which one is worth it. / Student career guidance: Early direction and stream awareness.
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree by situation for “Career Guidance for Students and Working…”: School, College, and Early-Career…; Working Professionals; You're in school or…
- Title attribute: Career Guidance for Students and Working Professionals
- Caption (and keep the same point in HTML text): Different starting points still need the same foundations: clearer decisions, higher-value skill direction, proof of work, and a clearer…
**V4 — Decision tree by situation** (place after the section “Start with the guidance situation closest to yours”)
- File: `career-counselling-and-career-guidance-decision-start-guidance-situation-closest.webp` · 1600×1000 WebP under 200 KB
- Teaches: If the labels feel similar, choose by your current decision first.
- On-image text (about 25-40 words, shortened from the page; no new claims): School, college, or early-career direction / Course, degree, and next-step decisions / Career growth, pivot, or income leverage / Start from anywhere in India / One focused consultation before committing
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree by situation for “Start with the guidance situation closest to yours”: School, college, or early-career…; Course, degree, and next-step…; Career…
- Title attribute: Start with the guidance situation closest to yours
- Caption (and keep the same point in HTML text): If the labels feel similar, choose by your current decision first.
2. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
3. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---
