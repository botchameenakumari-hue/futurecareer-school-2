# Image audit — service/other pages: bofu-hero-helpline-whatsapp

1 pages, ordered by search priority. Submit one page section at a time with `docs/image-audit/00-READ-FIRST.md`.

### /services/career-counselling-and-career-guidance/career-counselling-helpline/

**H1:** Career counselling helpline for a real conversation before you decide anything  
**Type:** bofu · **Search priority:** P2 (0 clicks, 31 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-helpline-whatsapp.webp` is shared by 1 page(s); acceptable reuse.
4. Hero `hero-helpline-whatsapp.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 97% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-helpline.webp` has no title attribute and no caption.
7. Context visual reuse: `context-helpline.webp` appears on 1 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 94% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 95% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 96% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-helpline-whatsapp.webp` | 97% | eager/high | A WhatsApp chat with a career counsellor on a… | NO | NO |
| `bofu/context-helpline.webp` | 97% | lazy | A helpline visual showing how one honest question… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-helpline-whatsapp.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-helpline-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Future Career School's career counselling helpline connects you directly to a career counsellor on WhatsApp —…
- On-image text (about 25-40 words, shortened from the page; no new claims): What actually happens when you message us / What a career counselling helpline should actually give you / What people usually worry about before messaging / What you can actually ask before deciding anything / What to check before trusting any career counselling helpline
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career counselling helpline for a…”: What actually happens when you…; What a career counselling…; What…
- Title attribute: At a glance: Career counselling helpline for a real conversation…
- Caption (and keep the same point in HTML text): Future Career School's career counselling helpline connects you directly to a career counsellor on WhatsApp — for students, freshers, and…
**V2 — Chronological timeline** (place after the section “What actually happens when you message us”)
- File: `career-counselling-helpline-chronological-actually-happens-message.webp` · 1600×1000 WebP under 200 KB
- Teaches: No hold music, no ticket number, no generic script — a real counsellor reads your situation and responds.
- On-image text (about 25-40 words, shortened from the page; no new claims): A career counsellor reads your message directly / You get a practical read on your situation, not a sales pitch / No hold music, no ticket number, no generic script — a real counsellor reads… / 01 A career counsellor reads your message directly There is no ticketing queue… / When you message, a Future Career School career counsellor sees your situation…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “What actually happens when you message us”: A career counsellor reads your…; You get a practical read on your…; No hold music, no…
- Title attribute: What actually happens when you message us
- Caption (and keep the same point in HTML text): No hold music, no ticket number, no generic script — a real counsellor reads your situation and responds.
**V3 — Decision tree** (place after the section “What a career counselling helpline should actually give you”)
- File: `career-counselling-helpline-decision-career-counselling-helpline-should.webp` · 1600×1000 WebP under 200 KB
- Teaches: The label 'helpline' should mean real access to a person who can help — not a queue, a sales script, or a…
- On-image text (about 25-40 words, shortened from the page; no new claims): The label 'helpline' should mean real access to a person who can help — not a… / Others Shift Future Career School Others A call that ends in a sales push…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “What a career counselling helpline should…”: The label 'helpline' should mean…; Others Shift Future Career School…
- Title attribute: What a career counselling helpline should actually give you
- Caption (and keep the same point in HTML text): The label 'helpline' should mean real access to a person who can help — not a queue, a sales script, or a rushed pitch for the most…
**V4 — Decision tree** (place after the section “What you can actually ask before deciding anything”)
- File: `career-counselling-helpline-decision-actually-ask-before-deciding.webp` · 1600×1000 WebP under 200 KB
- Teaches: You do not need a finished plan before you reach out.
- On-image text (about 25-40 words, shortened from the page; no new claims): Before you commit to anything / When the decision feels urgent / What the counsellor helps you map once you start / Confusion about which stream, course, or degree actually fits you / Whether career counselling is the right next step for your exact situation / What a session actually covers, and what it does not / What the current pricing is and what is included
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “What you can actually ask before deciding anything”: Before you commit to anything; When the decision feels urgent; What the counsellor…
- Title attribute: What you can actually ask before deciding anything
- Caption (and keep the same point in HTML text): You do not need a finished plan before you reach out.
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---
