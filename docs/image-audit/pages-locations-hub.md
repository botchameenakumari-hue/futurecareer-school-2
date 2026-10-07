# Image audit — service/other pages: locations-hub

1 pages, ordered by search priority. Submit one page section at a time with `docs/image-audit/00-READ-FIRST.md`.

### /services/career-counselling-and-career-guidance/locations/

**H1:** Career Counselling and Guidance by Location  
**Type:** locations-hub · **Search priority:** P3 (0 clicks, 3 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-locations-hub.webp` is shared by 1 page(s); acceptable reuse.
4. Hero `hero-locations-hub.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 97% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-location-online.webp` has no title attribute and no caption.
7. Context visual reuse: `context-location-online.webp` appears on 48 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 94% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 95% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 96% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-locations-hub.webp` | 97% | eager/high | A map of India with city pins linked to one… | NO | NO |
| `bofu/context-location-online.webp` | 98% | lazy | A local search and online guidance visual showing… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the hub hero. CREATE 3 explanatory visuals (hub overview, audience chooser, how to pick) from the page content:
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `locations-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Some people search by city because they want support that feels closer, more reachable, and easier to trust.
- On-image text (about 25-40 words, shortened from the page; no new claims): City-Specific Career Guidance Pages / Broader Guidance Pages
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career Counselling and Guidance by…”: City-Specific Career Guidance…; Broader Guidance Pages
- Title attribute: At a glance: Career Counselling and Guidance by Location
- Caption (and keep the same point in HTML text): Some people search by city because they want support that feels closer, more reachable, and easier to trust.
**V2 — Framework cards** (place after the section “City-Specific Career Guidance Pages”)
- File: `locations-framework-city-specific-career-guidance.webp` · 1600×1000 WebP under 200 KB
- Teaches: Open the city page that matches your search intent, then compare the next step based on clarity, practical…
- On-image text (about 25-40 words, shortened from the page; no new claims): Open the city page that matches your search intent, then compare the next step… / Career Counselling in Greater Noida For students, freshers, and working… / › Career Counselling in Agra For students, freshers, and working professionals…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Framework cards for “City-Specific Career Guidance Pages”: Open the city page that matches…; Career Counselling in Greater…; › Career Counselling in Agra For…
- Title attribute: City-Specific Career Guidance Pages
- Caption (and keep the same point in HTML text): Open the city page that matches your search intent, then compare the next step based on clarity, practical value, and decision quality.
**V3 — Framework cards** (place after the section “Broader Guidance Pages”)
- File: `locations-framework-broader-guidance-pages.webp` · 1600×1000 WebP under 200 KB
- Teaches: If the city matters less than the decision itself, these main guidance pages are the stronger next filter.
- On-image text (about 25-40 words, shortened from the page; no new claims): If the city matters less than the decision itself, these main guidance pages… / Career Counselling and Guidance Use the main guidance page if the city is less… / › Career Counselling See the main counselling page when you want clarity-first…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Framework cards for “Broader Guidance Pages”: If the city matters less than the…; Career Counselling and Guidance…; › Career Counselling See the main…
- Title attribute: Broader Guidance Pages
- Caption (and keep the same point in HTML text): If the city matters less than the decision itself, these main guidance pages are the stronger next filter.
3. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
4. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---
