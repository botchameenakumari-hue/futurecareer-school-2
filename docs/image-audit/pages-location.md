# Image audit — service/other pages: location

47 pages, ordered by search priority. Submit one page section at a time with `docs/image-audit/00-READ-FIRST.md`.

### /services/career-counselling-and-career-guidance/locations/career-counselling-in-agra/

**H1:** Career counselling in Agra for practical clarity and stronger next steps  
**Type:** location · **Search priority:** P2 (1 clicks, 6 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `region-north.webp` is shared by 9 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `region-north.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 98% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-location-online.webp` has no title attribute and no caption.
7. Context visual reuse: `context-location-online.webp` appears on 48 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 96% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 96% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 97% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/region-north.webp` | 98% | eager/high | Northern India regional skyline illustration | NO | NO |
| `bofu/context-location-online.webp` | 98% | lazy | A local search and online guidance visual showing… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the shared city/region hero (uniqueness comes from the local explanatory visuals below). Add alt, title attribute and caption naming the city.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-in-agra-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Agra hands many people a genuinely different fork than most Indian cities: a tourism and hospitality economy…
- On-image text (about 25-40 words, shortened from the page; no new claims): Why this decision already feels important / The Taj Mahal tourism economy is Agra's real, genuinely unique fork / The leather and footwear trade: a real… / Agra's areas point to different real decisions / Choose the stronger starting point for your situation
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career counselling in Agra for…”: Why this decision already feels…; The Taj Mahal tourism economy is……
- Title attribute: At a glance: Career counselling in Agra for practical clarity and…
- Caption (and keep the same point in HTML text): Agra hands many people a genuinely different fork than most Indian cities: a tourism and hospitality economy built almost entirely around…
**V2 — Asymmetrical pros-and-cons comparison** (place after the section “The leather and footwear trade: a real…”)
- File: `career-counselling-in-agra-asymmetrical-leather-footwear-trade-real.webp` · 1600×1000 WebP under 200 KB
- Teaches: A large export manufacturing economy under real pressure, and a genuine choice between modernising the trade…
- On-image text (about 25-40 words, shortened from the page; no new claims): The leather and footwear trade: a real export economy under real… / What a skill-first path can add to the same trade / Agra is one of India's largest footwear and leather-goods manufacturing and export… / Family-run tanneries, footwear units, and leather-goods workshops pass skill down… / Environmental regulation, automation, and international buyer compliance standards are… / Many young people from trade families are weighing whether to continue in manufacturing… / Footwear design, product development, and merchandising skills can move a family unit…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “The leather and footwear trade: a real…”: The leather and footwear trade: a…; What a skill-first path can add…; Agra…
- Title attribute: The leather and footwear trade: a real…
- Caption (and keep the same point in HTML text): A large export manufacturing economy under real pressure, and a genuine choice between modernising the trade and building a different skill…
**V3 — Asymmetrical pros-and-cons comparison** (place after the section “Agra's areas point to different real decisions”)
- File: `career-counselling-in-agra-asymmetrical-agra-areas-point-different.webp` · 1600×1000 WebP under 200 KB
- Teaches: A useful local page should feel grounded in how people actually live and work across Agra, not treat it as…
- On-image text (about 25-40 words, shortened from the page; no new claims): The Taj Ganj and monument belt carries the tourism and hospitality… / Agra Cantonment and the leather clusters carry the manufacturing and… / Sadar Bazar and Sanjay Place carry the trading, retail, and services…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “Agra's areas point to different real decisions”: The Taj Ganj and monument belt…; Agra Cantonment and the leather……
- Title attribute: Agra's areas point to different real decisions
- Caption (and keep the same point in HTML text): A useful local page should feel grounded in how people actually live and work across Agra, not treat it as one flat generic location.
**V4 — Self-assessment checklist** (place after the section “Questions people ask before choosing career counselling in Agra”)
- File: `career-counselling-in-agra-self-questions-people-ask-before.webp` · 1600×1000 WebP under 200 KB
- Teaches: 01 Why choose online career counselling in Agra instead of only looking for a nearby offline office?
- On-image text (about 25-40 words, shortened from the page; no new claims): 01 Why choose online career counselling in Agra instead of only looking for a… / Because nearness does not improve the advice. / Online sessions fit around season, workshop and class timings.
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Self-assessment checklist for “Questions people ask before choosing career…”: 01 Why choose online career…; Because nearness does not improve…; Online sessions…
- Title attribute: Questions people ask before choosing career counselling in Agra
- Caption (and keep the same point in HTML text): 01 Why choose online career counselling in Agra instead of only looking for a nearby offline office?
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/locations/career-counselling-in-goa/

**H1:** Career Counselling in Goa  
**Type:** location · **Search priority:** P2 (0 clicks, 32 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `region-west.webp` is shared by 8 page(s); acceptable reuse.
4. Hero `region-west.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 98% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-location-online.webp` has no title attribute and no caption.
7. Context visual reuse: `context-location-online.webp` appears on 48 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 96% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 97% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 97% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/region-west.webp` | 98% | eager/high | Western India regional skyline illustration | NO | NO |
| `bofu/context-location-online.webp` | 98% | lazy | A local search and online guidance visual showing… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the shared city/region hero (uniqueness comes from the local explanatory visuals below). Add alt, title attribute and caption naming the city.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-in-goa-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Goa's economy runs on two very different clocks: a tourism and hospitality season that fills hotels, resorts…
- On-image text (about 25-40 words, shortened from the page; no new claims): Why this decision already feels heavier here / The Goa career reality generic advice rarely names / Ride out the season in Goa, or move for a stable, year-round role … / Gulf work, or a Portuguese passport through family ancestry - a fork… / Goa's own geography shapes which version of this decision you are in
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career Counselling in Goa”: Why this decision already feels…; The Goa career reality generic…; Ride…
- Title attribute: At a glance: Career Counselling in Goa
- Caption (and keep the same point in HTML text): Goa's economy runs on two very different clocks: a tourism and hospitality season that fills hotels, resorts, restaurants, and water-sports…
**V2 — Chronological timeline** (place after the section “Ride out the season in Goa, or move for a stable, year-round role …”)
- File: `career-counselling-in-goa-chronological-ride-out-season-goa.webp` · 1600×1000 WebP under 200 KB
- Teaches: This is the decision that shapes more Goa-based careers than any other, and it deserves an honest, specific…
- On-image text (about 25-40 words, shortened from the page; no new claims): Building a career inside Goa's tourism and hospitality economy is a… / Moving to Mumbai, Bangalore, or Pune for a stable, year-round… / Hotel and resort management, food and beverage operations, water-sports and… / The skill that actually changes your income is not working harder during the season - it… / Treating the monsoon lean months as a solvable planning problem, rather than an annual… / Mumbai's BFSI and media economy, Bangalore's IT and GCC base, and Pune's IT and… / The real costs are real too: a much higher cost of living, distance from family, and…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “Ride out the season in Goa, or move for a stable…”: Building a career inside Goa's…; Moving to Mumbai, Bangalore, or…; Hotel and…
- Title attribute: Ride out the season in Goa, or move for a stable, year-round role …
- Caption (and keep the same point in HTML text): This is the decision that shapes more Goa-based careers than any other, and it deserves an honest, specific look rather than an assumed…
**V3 — Asymmetrical pros-and-cons comparison** (place after the section “How this approach differs from typical career counselling”)
- File: `career-counselling-in-goa-asymmetrical-approach-differs-typical-career.webp` · 1600×1000 WebP under 200 KB
- Teaches: In a state built around a seasonal tourism economy on one side and a thin corporate job market pushing people…
- On-image text (about 25-40 words, shortened from the page; no new claims): In a state built around a seasonal tourism economy on one side and a thin… / The comparison below shows what separates high-leverage guidance from both. / Others Shift Future Career School Others Choosing a counsellor only because…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “How this approach differs from typical career…”: In a state built around a…; The comparison below shows what……
- Title attribute: How this approach differs from typical career counselling
- Caption (and keep the same point in HTML text): In a state built around a seasonal tourism economy on one side and a thin corporate job market pushing people toward a mainland move or…
**V4 — Self-assessment checklist** (place after the section “”)
- File: `career-counselling-in-goa-self-overview.webp` · 1600×1000 WebP under 200 KB
- Teaches: 01 Clarity on the specific fork pressing you right now Whether building a career inside Goa's tourism…
- On-image text (about 25-40 words, shortened from the page; no new claims): Clarity on the specific fork pressing you right now / A skill direction built for achieving earlier financial freedom… / Whether building a career inside Goa's tourism, hospitality, or event-management economy… / A realistic comparison of the cost, timeline, and risk of each option, instead of an… / What your Goa University, BITS Pilani, GEC, or GIM-track choice should actually build… / How to raise a hard family conversation about leaving the season, the state, or the… / A high-value skill portfolio that holds up whether you stay in Goa's tourism or…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Self-assessment checklist for “”: Clarity on the specific fork…; A skill direction built for…; Whether building a career inside…
- Title attribute: 
- Caption (and keep the same point in HTML text): 01 Clarity on the specific fork pressing you right now Whether building a career inside Goa's tourism, hospitality, or event-management…
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/locations/career-counselling-in-pune/

**H1:** Career counselling in Pune for practical clarity and stronger next steps  
**Type:** location · **Search priority:** P2 (1 clicks, 22 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `city-pune.webp` is shared by 1 page(s); acceptable reuse.
4. Hero `city-pune.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 98% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-location-online.webp` has no title attribute and no caption.
7. Context visual reuse: `context-location-online.webp` appears on 48 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 96% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 97% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 97% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/city-pune.webp` | 98% | eager/high | Pune skyline illustration for career counselling… | NO | NO |
| `bofu/context-location-online.webp` | 98% | lazy | A local search and online guidance visual showing… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the shared city/region hero (uniqueness comes from the local explanatory visuals below). Add alt, title attribute and caption naming the city.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-in-pune-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Pune draws students from across India and then hands many of them a genuine fork: stay on the automotive and…
- On-image text (about 25-40 words, shortened from the page; no new claims): Why this decision already feels important / What should get clearer before you commit harder / Automotive or IT: the fork many Pune engineering graduates actually… / Pune's main areas can shape the decision differently / Choose the stronger starting point for your situation
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career counselling in Pune for…”: Why this decision already feels…; What should get clearer before……
- Title attribute: At a glance: Career counselling in Pune for practical clarity and…
- Caption (and keep the same point in HTML text): Pune draws students from across India and then hands many of them a genuine fork: stay on the automotive and manufacturing track around…
**V2 — Decision tree** (place after the section “What should get clearer before you commit harder”)
- File: `career-counselling-in-pune-decision-should-get-clearer-before.webp` · 1600×1000 WebP under 200 KB
- Teaches: The practical job of counselling is to improve direction, skill decisions, and next-step quality before…
- On-image text (about 25-40 words, shortened from the page; no new claims): Pune pulls in students from across India - and then hands them a real… / The automotive-vs-IT fork is a genuinely Pune-specific decision / The Bangalore and Mumbai pull is real - but it is not the only path… / The outcome should be a sharper next move tied to your actual…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “What should get clearer before you commit harder”: Pune pulls in students from…; The automotive-vs-IT fork is a…; The Bangalore and Mumbai…
- Title attribute: What should get clearer before you commit harder
- Caption (and keep the same point in HTML text): The practical job of counselling is to improve direction, skill decisions, and next-step quality before confusion turns into another…
**V3 — Self-assessment checklist** (place after the section “Automotive or IT: the fork many Pune engineering graduates actually…”)
- File: `career-counselling-in-pune-self-automotive-fork-many-pune.webp` · 1600×1000 WebP under 200 KB
- Teaches: Pune is unusual in having two genuinely strong career tracks side by side.
- On-image text (about 25-40 words, shortened from the page; no new claims): The automotive and manufacturing track / The IT and services track / Rooted in the Pimpri-Chinchwad and Chakan belt, close to Tata Motors, Bajaj Auto… / Suits people who want to keep building directly on a mechanical, production, or… / Local cost of living is generally lower than the IT-corridor areas / Growth often comes from moving into quality, supply-chain, or plant-management roles over… / Rooted in Hinjewadi, Magarpatta, Kharadi, and Viman Nagar, close to Infosys, TCS, Wipro…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Self-assessment checklist for “Automotive or IT: the fork many Pune engineering…”: The automotive and manufacturing…; The IT and services track; Rooted in the…
- Title attribute: Automotive or IT: the fork many Pune engineering graduates actually…
- Caption (and keep the same point in HTML text): Pune is unusual in having two genuinely strong career tracks side by side.
**V4 — Asymmetrical pros-and-cons comparison** (place after the section “Pune's main areas can shape the decision differently”)
- File: `career-counselling-in-pune-asymmetrical-pune-main-areas-shape.webp` · 1600×1000 WebP under 200 KB
- Teaches: A useful local page should feel grounded in how people actually live, study, and work across Pune rather than…
- On-image text (about 25-40 words, shortened from the page; no new claims): Pune decisions often come from very different parts of the city / Different areas often point to different opportunity clusters and… / A useful local page should feel grounded in how people actually live, study… / 01 Pune decisions often come from very different parts of the city Someone… / Someone based around Pimpri, Chinchwad, Chakan, or Bhosari is closer to the…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “Pune's main areas can shape the decision…”: Pune decisions often come from…; Different areas often point to…; A…
- Title attribute: Pune's main areas can shape the decision differently
- Caption (and keep the same point in HTML text): A useful local page should feel grounded in how people actually live, study, and work across Pune rather than pretending every user is…
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/locations/career-counselling-in-ranchi/

**H1:** Career counselling in Ranchi for a public-sector, private-sector, and sports-career fork  
**Type:** location · **Search priority:** P2 (0 clicks, 25 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `region-east.webp` is shared by 4 page(s); acceptable reuse.
4. Hero `region-east.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 98% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-location-online.webp` has no title attribute and no caption.
7. Context visual reuse: `context-location-online.webp` appears on 48 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 96% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 96% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 97% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/region-east.webp` | 98% | eager/high | Eastern India regional skyline illustration | NO | NO |
| `bofu/context-location-online.webp` | 98% | lazy | A local search and online guidance visual showing… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the shared city/region hero (uniqueness comes from the local explanatory visuals below). Add alt, title attribute and caption naming the city.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-in-ranchi-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Ranchi's real economy runs through a genuine public-sector corridor - Central Coalfields Limited (CCL) and…
- On-image text (about 25-40 words, shortened from the page; no new claims): The Ranchi career reality generic advice misses / PSU stability, private-sector growth, or a genuine sports pathway … / How this approach differs from typical career counselling / Ranchi's geography shapes the decision, not just the commute / How the right support can fit where you are right now
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career counselling in Ranchi for a…”: The Ranchi career reality generic…; PSU stability…
- Title attribute: At a glance: Career counselling in Ranchi for a public-sector…
- Caption (and keep the same point in HTML text): Ranchi's real economy runs through a genuine public-sector corridor - Central Coalfields Limited (CCL) and Heavy Engineering Corporation…
**V2 — Linear process chain or roadmap** (place after the section “PSU stability, private-sector growth, or a genuine sports pathway …”)
- File: `career-counselling-in-ranchi-linear-psu-stability-private-sector.webp` · 1600×1000 WebP under 200 KB
- Teaches: This is the real question behind most Ranchi searches, and it has no equivalent framing anywhere else on this…
- On-image text (about 25-40 words, shortened from the page; no new claims): CCL and HEC offer real stability, but they hire hardest for specific… / A genuine cricket or hockey pathway deserves a real evaluation, not… / BIT Mesra, the PSU corridor, and a genuine sports pathway are three… / Central Coalfields Limited (mining, engineering, and operations) and Heavy Engineering… / They hire hardest for mining engineering, mechanical and industrial engineering, plant… / The honest question is not 'is a PSU job good' in the abstract, but whether a PSU track… / MS Dhoni's own story makes a serious sports pathway feel closer and more credible to…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Linear process chain or roadmap for “PSU stability, private-sector growth, or a…”: CCL and HEC offer real stability…; A genuine cricket or hockey…; BIT Mesra…
- Title attribute: PSU stability, private-sector growth, or a genuine sports pathway …
- Caption (and keep the same point in HTML text): This is the real question behind most Ranchi searches, and it has no equivalent framing anywhere else on this site: whether to build toward…
**V3 — Asymmetrical pros-and-cons comparison** (place after the section “How this approach differs from typical career counselling”)
- File: `career-counselling-in-ranchi-asymmetrical-approach-differs-typical-career.webp` · 1600×1000 WebP under 200 KB
- Teaches: In a city where the coal-and-government reputation and a genuine sports-career story both hold real truth…
- On-image text (about 25-40 words, shortened from the page; no new claims): In a city where the coal-and-government reputation and a genuine sports-career… / The comparison below shows what separates high-leverage guidance from that. / Others Shift Future Career School Others Choosing a counsellor only because…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “How this approach differs from typical career…”: In a city where the…; The comparison below shows what…; Others…
- Title attribute: How this approach differs from typical career counselling
- Caption (and keep the same point in HTML text): In a city where the coal-and-government reputation and a genuine sports-career story both hold real truth, the risk is generic advice that…
**V4 — Decision tree** (place after the section “What should feel clearer after career counselling”)
- File: `career-counselling-in-ranchi-decision-should-feel-clearer-after.webp` · 1600×1000 WebP under 200 KB
- Teaches: Good career counselling should leave you with one clear decision, a smaller shortlist of options, and one…
- On-image text (about 25-40 words, shortened from the page; no new claims): Clarity on the specific fork pressing you right now / Skill direction built for what Ranchi's actual economy is hiring for / Whether a public-sector engineering or operations track through CCL or HEC, a… / Whether a government-administration path fits you specifically, given Jharkhand's own… / If a sports pathway is genuinely on the table, what a realistic, honest read of talent… / What a realistic trajectory looks like on your current path given how Ranchi's specific… / A high-value skill portfolio aimed at mining and mechanical engineering, industrial…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “What should feel clearer after career counselling”: Clarity on the specific fork…; Skill direction built for what…; Whether a public-sector…
- Title attribute: What should feel clearer after career counselling
- Caption (and keep the same point in HTML text): Good career counselling should leave you with one clear decision, a smaller shortlist of options, and one practical next step you can…
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/locations/career-counselling-in-surat/

**H1:** Career counselling in Surat beyond the family trade  
**Type:** location · **Search priority:** P2 (1 clicks, 5 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `region-west.webp` is shared by 8 page(s); acceptable reuse.
4. Hero `region-west.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 98% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-location-online.webp` has no title attribute and no caption.
7. Context visual reuse: `context-location-online.webp` appears on 48 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 96% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 96% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 97% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/region-west.webp` | 98% | eager/high | Western India regional skyline illustration | NO | NO |
| `bofu/context-location-online.webp` | 98% | lazy | A local search and online guidance visual showing… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the shared city/region hero (uniqueness comes from the local explanatory visuals below). Add alt, title attribute and caption naming the city.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-in-surat-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Surat cuts and polishes the overwhelming majority of the world's diamonds and runs one of India's largest…
- On-image text (about 25-40 words, shortened from the page; no new claims): The Surat career reality that generic advice misses / Family trade or formal career path - the decision most Surat students… / How the right support can fit where you are right now / How practical career counselling should move you forward / How this approach differs from typical career counselling
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career counselling in Surat beyond…”: The Surat career reality that…; Family trade or formal career……
- Title attribute: At a glance: Career counselling in Surat beyond the family trade
- Caption (and keep the same point in HTML text): Surat cuts and polishes the overwhelming majority of the world's diamonds and runs one of India's largest textile manufacturing economies …
**V2 — Linear process chain or roadmap** (place after the section “Family trade or formal career path - the decision most Surat students…”)
- File: `career-counselling-in-surat-linear-family-trade-formal-career.webp` · 1600×1000 WebP under 200 KB
- Teaches: This is the real fork behind most Surat searches, and it has no equivalent framing anywhere else on this…
- On-image text (about 25-40 words, shortened from the page; no new claims): The family diamond or textile trade rarely requires a degree - and… / Diamond and textile trade income can be real and substantial, but it… / For those without a family trade to fall back on, the same city… / Unlike a family business that expects an MBA, a CA, or a professional qualification… / That makes the question genuinely different from a typical family-business-succession… / Neither answer is automatically right - the honest starting point is naming which of the… / Surat's diamond trade in particular is tied closely to global rough-diamond demand, US…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Linear process chain or roadmap for “Family trade or formal career path - the decision…”: The family diamond or textile…; Diamond and textile trade income……
- Title attribute: Family trade or formal career path - the decision most Surat students…
- Caption (and keep the same point in HTML text): This is the real fork behind most Surat searches, and it has no equivalent framing anywhere else on this site: whether a working diamond or…
**V3 — Asymmetrical pros-and-cons comparison** (place after the section “How this approach differs from typical career counselling”)
- File: `career-counselling-in-surat-asymmetrical-approach-differs-typical-career.webp` · 1600×1000 WebP under 200 KB
- Teaches: In a city where a working family trade and a formal career path both carry genuine weight, the real risk is…
- On-image text (about 25-40 words, shortened from the page; no new claims): In a city where a working family trade and a formal career path both carry… / The comparison below shows what separates high-leverage guidance from that. / Others Shift Future Career School Others Choosing a counsellor only because…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “How this approach differs from typical career…”: In a city where a working family…; The comparison below shows…
- Title attribute: How this approach differs from typical career counselling
- Caption (and keep the same point in HTML text): In a city where a working family trade and a formal career path both carry genuine weight, the real risk is advice that only knows one…
**V4 — Self-assessment checklist** (place after the section “”)
- File: `career-counselling-in-surat-self-overview.webp` · 1600×1000 WebP under 200 KB
- Teaches: 01 Clarity on the specific fork pressing you right now Whether joining, modernising, or building alongside…
- On-image text (about 25-40 words, shortened from the page; no new claims): Clarity on the specific fork pressing you right now / Skill direction built for Surat's actual trade-and-manufacturing… / Whether joining, modernising, or building alongside your family's diamond or textile… / What a realistic income and risk comparison actually looks like between staying in the… / Whether a degree already in progress, or already completed, needs a skill-first plan… / What a first-generation-white-collar path can realistically look like if there is no… / A high-value skill portfolio that works whether the near-term plan is inside the family…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Self-assessment checklist for “”: Clarity on the specific fork…; Skill direction built for Surat's…; Whether joining, modernising, or…
- Title attribute: 
- Caption (and keep the same point in HTML text): 01 Clarity on the specific fork pressing you right now Whether joining, modernising, or building alongside your family's diamond or textile…
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/locations/career-counselling-in-ahmedabad/

**H1:** Career counselling in Ahmedabad for family-business, IIM-A, and GIFT City decisions  
**Type:** location · **Search priority:** P3 (0 clicks, 9 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `city-ahmedabad.webp` is shared by 1 page(s); acceptable reuse.
4. Hero `city-ahmedabad.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 98% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-location-online.webp` has no title attribute and no caption.
7. Context visual reuse: `context-location-online.webp` appears on 48 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 96% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 97% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 97% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/city-ahmedabad.webp` | 98% | eager/high | Ahmedabad skyline illustration for career… | NO | NO |
| `bofu/context-location-online.webp` | 98% | lazy | A local search and online guidance visual showing… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the shared city/region hero (uniqueness comes from the local explanatory visuals below). Add alt, title attribute and caption naming the city.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-in-ahmedabad-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Ahmedabad forces a career pressure few other cities do quite this directly: whether to join or modernise a…
- On-image text (about 25-40 words, shortened from the page; no new claims): The family-business decision Ahmedabad rarely names out loud / Ahmedabad's economy has genuinely diversified beyond its textile… / GIFT City is building a genuinely new finance economy next door, in… / IIM Ahmedabad's presence shapes local ambition in a way few other… / Which part of Ahmedabad you're deciding from changes the real…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career counselling in Ahmedabad for…”: The family-business decision…; Ahmedabad's economy has…
- Title attribute: At a glance: Career counselling in Ahmedabad for family-business…
- Caption (and keep the same point in HTML text): Ahmedabad forces a career pressure few other cities do quite this directly: whether to join or modernise a family business, how much weight…
**V2 — Linear process chain or roadmap** (place after the section “GIFT City is building a genuinely new finance economy next door, in…”)
- File: `career-counselling-in-ahmedabad-linear-gift-city-building-genuinely.webp` · 1600×1000 WebP under 200 KB
- Teaches: For finance-minded students and professionals, this changes what 'staying in Gujarat' can actually mean …
- On-image text (about 25-40 words, shortened from the page; no new claims): GIFT City is a genuinely different kind of opportunity - not a… / It creates a genuinely new fork for finance-minded students and… / GIFT City adds a third option to the succession conversation, not…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Linear process chain or roadmap for “GIFT City is building a genuinely new finance…”: GIFT City is a genuinely…; It creates a genuinely new fork…; GIFT City…
- Title attribute: GIFT City is building a genuinely new finance economy next door, in…
- Caption (and keep the same point in HTML text): For finance-minded students and professionals, this changes what 'staying in Gujarat' can actually mean - without pretending the…
**V3 — Decision tree** (place after the section “Which part of Ahmedabad you're deciding from changes the real…”)
- File: `career-counselling-in-ahmedabad-decision-part-ahmedabad-deciding-changes.webp` · 1600×1000 WebP under 200 KB
- Teaches: A useful local page should feel grounded in how people actually live, study, and work across Ahmedabad rather…
- On-image text (about 25-40 words, shortened from the page; no new claims): SG Highway, Prahlad Nagar, and Satellite: the newer corporate and IT… / Navrangpura and CG Road: the academic and commercial core / The old city, Maninagar, and Kankaria: where the trading and textile… / Naroda, Odhav, Vatva, and Sanand: the industrial belt / Gandhinagar and GIFT City: the emerging finance corridor next door
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “Which part of Ahmedabad you're deciding from…”: SG Highway, Prahlad Nagar, and…; Navrangpura and CG Road: the…; The old city, Maninagar, and…
- Title attribute: Which part of Ahmedabad you're deciding from changes the real…
- Caption (and keep the same point in HTML text): A useful local page should feel grounded in how people actually live, study, and work across Ahmedabad rather than treating every resident…
**V4 — Self-assessment checklist** (place after the section “”)
- File: `career-counselling-in-ahmedabad-self-overview.webp` · 1600×1000 WebP under 200 KB
- Teaches: 01 Clarity on the decision actually creating pressure right now Whether joining, modernising, or stepping…
- On-image text (about 25-40 words, shortened from the page; no new claims): Clarity on the decision actually creating pressure right now / Skill direction that fits Ahmedabad's real economy / A practical next step you can act on / Whether joining, modernising, or stepping away from the family business fits your actual… / Where an IIM Ahmedabad-level ambition genuinely fits your path, and where it is pressure… / Whether a GIFT City finance direction, the pharma and industrial economy, or a… / What the honest income and growth ceiling looks like for the path you are currently on
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Self-assessment checklist for “”: Clarity on the decision actually…; Skill direction that fits…; A practical next step you can act…
- Title attribute: 
- Caption (and keep the same point in HTML text): 01 Clarity on the decision actually creating pressure right now Whether joining, modernising, or stepping away from the family business…
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/locations/career-counselling-in-aurangabad/

**H1:** Career counselling in Aurangabad for Marathwada's real forks  
**Type:** location · **Search priority:** P3 (0 clicks, 16 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `region-west.webp` is shared by 8 page(s); acceptable reuse.
4. Hero `region-west.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 98% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-location-online.webp` has no title attribute and no caption.
7. Context visual reuse: `context-location-online.webp` appears on 48 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 96% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 97% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 97% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/region-west.webp` | 98% | eager/high | Western India regional skyline illustration | NO | NO |
| `bofu/context-location-online.webp` | 98% | lazy | A local search and online guidance visual showing… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the shared city/region hero (uniqueness comes from the local explanatory visuals below). Add alt, title attribute and caption naming the city.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-in-aurangabad-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Aurangabad, officially renamed Chhatrapati Sambhajinagar in 2023 but still the name most people search and…
- On-image text (about 25-40 words, shortened from the page; no new claims): The Aurangabad career reality generic tier-2-city advice misses / Ajanta, Ellora, and Paithan give Aurangabad a career layer no other… / Farm pressure, the industrial belt, or heritage tourism - the real… / What to check before paying for career counselling in Aurangabad / How this approach differs from typical career counselling
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career counselling in Aurangabad for…”: The Aurangabad career reality…; Ajanta, Ellora, and Paithan…
- Title attribute: At a glance: Career counselling in Aurangabad for Marathwada's real…
- Caption (and keep the same point in HTML text): Aurangabad, officially renamed Chhatrapati Sambhajinagar in 2023 but still the name most people search and use, sits at the centre of…
**V2 — Chronological timeline** (place after the section “Ajanta, Ellora, and Paithan give Aurangabad a career layer no other…”)
- File: `career-counselling-in-aurangabad-chronological-ajanta-ellora-paithan-give.webp` · 1600×1000 WebP under 200 KB
- Teaches: Two UNESCO World Heritage Sites and a recognised handloom-craft tradition sit inside this one district…
- On-image text (about 25-40 words, shortened from the page; no new claims): The Ajanta and Ellora Caves make Aurangabad one of the few Indian… / Paithan's handloom-sari economy adds a craft-heritage income layer… / Two UNESCO World Heritage Sites and a recognised handloom-craft tradition sit… / 01 The Ajanta and Ellora Caves make Aurangabad one of the few Indian cities… / Alongside them, Bibi Ka Maqbara - often called the 'Mini Taj Mahal' - and…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “Ajanta, Ellora, and Paithan give Aurangabad a…”: The Ajanta and Ellora Caves make…; Paithan's handloom-sari economy…; Two UNESCO…
- Title attribute: Ajanta, Ellora, and Paithan give Aurangabad a career layer no other…
- Caption (and keep the same point in HTML text): Two UNESCO World Heritage Sites and a recognised handloom-craft tradition sit inside this one district, supporting real, specific work most…
**V3 — Chronological timeline** (place after the section “Farm pressure, the industrial belt, or heritage tourism - the real…”)
- File: `career-counselling-in-aurangabad-chronological-farm-pressure-industrial-belt.webp` · 1600×1000 WebP under 200 KB
- Teaches: This is the decision most Aurangabad and wider-Marathwada families actually face, and it has no equivalent…
- On-image text (about 25-40 words, shortened from the page; no new claims): Family farm-income pressure versus a professional or salaried skill… / Waluj-Chikalthana's auto-ancillary and pharma cluster versus a metro… / The Ajanta-Ellora heritage-tourism economy as a genuine third path… / A poor monsoon, a crop-price crash, or a bad cotton or sugarcane season can wipe out a… / That pressure is real and pushes many Aurangabad and wider-Marathwada families to want… / The honest next step is building a high-value skill portfolio deliberately aimed at that… / Bajaj Auto's Waluj plant, Endurance Technologies, and the pharmaceutical manufacturing…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “Farm pressure, the industrial belt, or heritage…”: Family farm-income pressure…; Waluj-Chikalthana's…; The Ajanta-Ellora…
- Title attribute: Farm pressure, the industrial belt, or heritage tourism - the real…
- Caption (and keep the same point in HTML text): This is the decision most Aurangabad and wider-Marathwada families actually face, and it has no equivalent framing anywhere else on this…
**V4 — Asymmetrical pros-and-cons comparison** (place after the section “How this approach differs from typical career counselling”)
- File: `career-counselling-in-aurangabad-asymmetrical-approach-differs-typical-career.webp` · 1600×1000 WebP under 200 KB
- Teaches: In a city where the farm-belt reputation, the industrial-belt story, and the heritage-tourism economy all…
- On-image text (about 25-40 words, shortened from the page; no new claims): In a city where the farm-belt reputation, the industrial-belt story, and the… / The comparison below shows what separates high-leverage guidance from that. / Others Shift Future Career School Others Choosing a counsellor only because…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “How this approach differs from typical career…”: In a city where the farm-belt…; The comparison below shows what……
- Title attribute: How this approach differs from typical career counselling
- Caption (and keep the same point in HTML text): In a city where the farm-belt reputation, the industrial-belt story, and the heritage-tourism economy all hold some truth, the risk is…
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/locations/career-counselling-in-bangalore/

**H1:** Career counselling in Bangalore for clarity in India's busiest tech market  
**Type:** location · **Search priority:** P3 (0 clicks, 8 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `city-bangalore.webp` is shared by 1 page(s); acceptable reuse.
4. Hero `city-bangalore.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 98% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-location-online.webp` has no title attribute and no caption.
7. Context visual reuse: `context-location-online.webp` appears on 48 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 96% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 96% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 97% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/city-bangalore.webp` | 98% | eager/high | Bangalore skyline illustration for career… | NO | NO |
| `bofu/context-location-online.webp` | 98% | lazy | A local search and online guidance visual showing… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the shared city/region hero (uniqueness comes from the local explanatory visuals below). Add alt, title attribute and caption naming the city.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-in-bangalore-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Bangalore is not short of career options - it is overloaded with them.
- On-image text (about 25-40 words, shortened from the page; no new claims): Why this decision already feels important / The Bangalore career reality that generic advice misses / Bangalore's tech geography shapes the decision, not just the commute / How practical career counselling should move you forward / Why online career counselling can still be the stronger route from…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career counselling in Bangalore for…”: Why this decision already feels…; The Bangalore career reality…
- Title attribute: At a glance: Career counselling in Bangalore for clarity in India's…
- Caption (and keep the same point in HTML text): Bangalore is not short of career options - it is overloaded with them.
**V2 — Asymmetrical pros-and-cons comparison** (place after the section “How this approach differs from typical career counselling”)
- File: `career-counselling-in-bangalore-asymmetrical-approach-differs-typical-career.webp` · 1600×1000 WebP under 200 KB
- Teaches: In a market this crowded, the real risk is not too little advice - it is generic, sales-driven advice that…
- On-image text (about 25-40 words, shortened from the page; no new claims): In a market this crowded, the real risk is not too little advice - it is… / The comparison below shows what separates high-leverage guidance from that. / Others Shift Future Career School Others Choosing a counsellor only because…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “How this approach differs from typical career…”: In a market this crowded, the…; The comparison below shows what……
- Title attribute: How this approach differs from typical career counselling
- Caption (and keep the same point in HTML text): In a market this crowded, the real risk is not too little advice - it is generic, sales-driven advice that ignores the specific fork you…
**V3 — Self-assessment checklist** (place after the section “”)
- File: `career-counselling-in-bangalore-self-overview.webp` · 1600×1000 WebP under 200 KB
- Teaches: 01 Clarity on the specific fork pressing you right now Whether to stay on an IT-services or GCC ladder, move…
- On-image text (about 25-40 words, shortened from the page; no new claims): Clarity on the specific fork pressing you right now / Skill direction built for Bangalore's actual market / Whether to stay on an IT-services or GCC ladder, move to a product company, or take a… / Which skill direction actually compounds given the specific work you do today / Whether AI-driven change touches your current role enough to justify a deliberate pivot / What a realistic income trajectory looks like on your current path over the next few years / A high-value skill portfolio that holds up whether you stay in IT services, move to…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Self-assessment checklist for “”: Clarity on the specific fork…; Skill direction built for…; Whether to stay on an IT-services…
- Title attribute: 
- Caption (and keep the same point in HTML text): 01 Clarity on the specific fork pressing you right now Whether to stay on an IT-services or GCC ladder, move to a product company, or take…
**V4 — Asymmetrical pros-and-cons comparison** (place after the section “What actually makes a career counselling option one of the better…”)
- File: `career-counselling-in-bangalore-asymmetrical-actually-makes-career-counselling.webp` · 1600×1000 WebP under 200 KB
- Teaches: In a city headquartered by so many edtech and coaching platforms, do not compare only marketing reach or the…
- On-image text (about 25-40 words, shortened from the page; no new claims): Check whether the counselling actually cuts through Bangalore's… / Check whether the guidance is genuinely one-on-one, not a templated… / Check whether the counsellor understands the real Bangalore fork you… / Check whether staying, moving cities, or leaving Bangalore is treated…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “What actually makes a career counselling option…”: Check whether the counselling…; Check whether the guidance is……
- Title attribute: What actually makes a career counselling option one of the better…
- Caption (and keep the same point in HTML text): In a city headquartered by so many edtech and coaching platforms, do not compare only marketing reach or the city label.
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/locations/career-counselling-in-bhopal/

**H1:** Career counselling in Bhopal for practical clarity and stronger next steps  
**Type:** location · **Search priority:** P3 (0 clicks, 1 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `region-central.webp` is shared by 4 page(s); acceptable reuse.
4. Hero `region-central.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 98% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-location-online.webp` has no title attribute and no caption.
7. Context visual reuse: `context-location-online.webp` appears on 48 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 96% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 96% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 97% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/region-central.webp` | 98% | eager/high | Central India regional skyline illustration | NO | NO |
| `bofu/context-location-online.webp` | 98% | lazy | A local search and online guidance visual showing… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the shared city/region hero (uniqueness comes from the local explanatory visuals below). Add alt, title attribute and caption naming the city.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-in-bhopal-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Bhopal hands many people a genuinely different fork than most Indian cities: one of BHEL's largest…
- On-image text (about 25-40 words, shortened from the page; no new claims): Why this decision already feels important / The BHEL and state-administration economy is Bhopal's first real fork / MPPSC and the state-exam pipeline: a second, genuinely different… / Bhopal's areas point to different real decisions / Choose the stronger starting point for your situation
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career counselling in Bhopal for…”: Why this decision already feels…; The BHEL and…
- Title attribute: At a glance: Career counselling in Bhopal for practical clarity and…
- Caption (and keep the same point in HTML text): Bhopal hands many people a genuinely different fork than most Indian cities: one of BHEL's largest heavy-engineering manufacturing units…
**V2 — Asymmetrical pros-and-cons comparison** (place after the section “MPPSC and the state-exam pipeline: a second, genuinely different…”)
- File: `career-counselling-in-bhopal-asymmetrical-mppsc-state-exam-pipeline.webp` · 1600×1000 WebP under 200 KB
- Teaches: A real professional economy under its own pressures, and a genuine choice between it and the…
- On-image text (about 25-40 words, shortened from the page; no new claims): A second, genuinely distinct economy: the MPPSC and Madhya Pradesh… / What deliberate planning can add to a state-exam-career decision / As the state capital, Bhopal has built a real coaching economy around MPPSC, state… / Many local families weigh a multi-attempt MPPSC or state-exam cycle against a BHEL… / State-exam preparation is a genuine multi-year commitment that deserves the same… / A state-government career in Bhopal can mean an MPPSC-cleared administrative role, a… / Clarity on MPPSC versus direct-recruitment versus BHEL-engineering paths early prevents…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “MPPSC and the state-exam pipeline: a second…”: A second, genuinely distinct…; What deliberate planning can add…; As…
- Title attribute: MPPSC and the state-exam pipeline: a second, genuinely different…
- Caption (and keep the same point in HTML text): A real professional economy under its own pressures, and a genuine choice between it and the BHEL-and-administration economy.
**V3 — Asymmetrical pros-and-cons comparison** (place after the section “Bhopal's areas point to different real decisions”)
- File: `career-counselling-in-bhopal-asymmetrical-bhopal-areas-point-different.webp` · 1600×1000 WebP under 200 KB
- Teaches: A useful local page should feel grounded in how people actually live and work across Bhopal, not treat it as…
- On-image text (about 25-40 words, shortened from the page; no new claims): The BHEL township and Govindpura industrial belt carry the… / The Arera Hills and secretariat belt carry the state-administration… / Coaching-institute clusters carry the MPPSC and state-exam…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “Bhopal's areas point to different real decisions”: The BHEL township and Govindpura…; The Arera Hills and…
- Title attribute: Bhopal's areas point to different real decisions
- Caption (and keep the same point in HTML text): A useful local page should feel grounded in how people actually live and work across Bhopal, not treat it as one flat generic location.
**V4 — Self-assessment checklist** (place after the section “Questions people ask before choosing career counselling in Bhopal”)
- File: `career-counselling-in-bhopal-self-questions-people-ask-before.webp` · 1600×1000 WebP under 200 KB
- Teaches: 01 Why choose online career counselling in Bhopal instead of only looking for a nearby offline office?
- On-image text (about 25-40 words, shortened from the page; no new claims): 01 Why choose online career counselling in Bhopal instead of only looking for a… / Because proximity does not improve a decision about MPPSC, BHEL-type jobs or a… / An online session fits around your preparation or work and focuses on your own…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Self-assessment checklist for “Questions people ask before choosing career…”: 01 Why choose online career…; Because proximity does not…; An online session fits…
- Title attribute: Questions people ask before choosing career counselling in Bhopal
- Caption (and keep the same point in HTML text): 01 Why choose online career counselling in Bhopal instead of only looking for a nearby offline office?
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/locations/career-counselling-in-bhubaneswar/

**H1:** Career counselling in Bhubaneswar for India's temple city built around education  
**Type:** location · **Search priority:** P3 (0 clicks, 3 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `region-east.webp` is shared by 4 page(s); acceptable reuse.
4. Hero `region-east.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 98% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-location-online.webp` has no title attribute and no caption.
7. Context visual reuse: `context-location-online.webp` appears on 48 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 96% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 96% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 97% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/region-east.webp` | 98% | eager/high | Eastern India regional skyline illustration | NO | NO |
| `bofu/context-location-online.webp` | 98% | lazy | A local search and online guidance visual showing… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the shared city/region hero (uniqueness comes from the local explanatory visuals below). Add alt, title attribute and caption naming the city.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-in-bhubaneswar-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Bhubaneswar carries a thousand years of temple heritage and a genuinely rare modern identity on top of it…
- On-image text (about 25-40 words, shortened from the page; no new claims): Bhubaneswar's real identity: a temple city that is also one of… / How the right support can fit where you are right now / The Bhubaneswar economy generic 'temple city' advice misses / How this approach differs from typical career counselling / What to check before paying for career counselling in Bhubaneswar
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career counselling in Bhubaneswar…”: Bhubaneswar's real identity: a…; How the right support can fit……
- Title attribute: At a glance: Career counselling in Bhubaneswar for India's temple…
- Caption (and keep the same point in HTML text): Bhubaneswar carries a thousand years of temple heritage and a genuinely rare modern identity on top of it: KIIT and KIT alone enrol a…
**V2 — Self-assessment checklist** (place after the section “The Bhubaneswar economy generic 'temple city' advice misses”)
- File: `career-counselling-in-bhubaneswar-self-bhubaneswar-economy-generic-temple.webp` · 1600×1000 WebP under 200 KB
- Teaches: Bhubaneswar runs on more than temples and colleges.
- On-image text (about 25-40 words, shortened from the page; no new claims): A real, growing IT corridor around Info Valley and Chandaka runs in… / Odisha's steel, aluminium, and power economy pulls in a different… / Temple-city heritage gives Bhubaneswar a civic identity that runs… / Info Valley and the Chandaka Industrial Estate host established campuses for Infosys… / A large share of this corridor's hiring pipeline is fed directly by the same KIIT-and-KIT… / The honest read is a genuine but still-developing technology sector, not yet at the scale… / NALCO (National Aluminium Company) at Angul, the Rourkela Steel Plant under SAIL, and a…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Self-assessment checklist for “The Bhubaneswar economy generic 'temple city'…”: A real, growing IT corridor…; Odisha's steel, aluminium, and…; Temple-city…
- Title attribute: The Bhubaneswar economy generic 'temple city' advice misses
- Caption (and keep the same point in HTML text): Bhubaneswar runs on more than temples and colleges.
**V3 — Asymmetrical pros-and-cons comparison** (place after the section “How this approach differs from typical career counselling”)
- File: `career-counselling-in-bhubaneswar-asymmetrical-approach-differs-typical-career.webp` · 1600×1000 WebP under 200 KB
- Teaches: In a city defined by one of India's largest student populations, the risk is advice that treats every KIIT or…
- On-image text (about 25-40 words, shortened from the page; no new claims): In a city defined by one of India's largest student populations, the risk is… / The comparison below shows what separates high-leverage guidance from that. / Others Shift Future Career School Others Choosing a counsellor only because…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “How this approach differs from typical career…”: In a city defined by one of…; The comparison below shows what……
- Title attribute: How this approach differs from typical career counselling
- Caption (and keep the same point in HTML text): In a city defined by one of India's largest student populations, the risk is advice that treats every KIIT or KIT graduate as…
**V4 — Decision tree** (place after the section “What should feel clearer after career counselling”)
- File: `career-counselling-in-bhubaneswar-decision-should-feel-clearer-after.webp` · 1600×1000 WebP under 200 KB
- Teaches: Good career counselling should leave you with one clear decision, a smaller shortlist of options, and one…
- On-image text (about 25-40 words, shortened from the page; no new claims): Clarity on the specific fork pressing you right now / Skill direction built for what Bhubaneswar's actual economy is hiring… / Whether an IT-corridor path through Info Valley, a medical or allied-health path through… / Whether staying in Bhubaneswar's white-collar economy or moving toward Rourkela, Angul… / How to build real differentiation inside one of India's largest single-city student… / What a realistic trajectory looks like on your current path given how competitive… / A high-value skill portfolio that stands out inside a huge local graduate pool, built on…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “What should feel clearer after career counselling”: Clarity on the specific fork…; Skill direction built for what…; Whether an IT-corridor…
- Title attribute: What should feel clearer after career counselling
- Caption (and keep the same point in HTML text): Good career counselling should leave you with one clear decision, a smaller shortlist of options, and one practical next step you can…
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/locations/career-counselling-in-chandigarh/

**H1:** Career Counselling in Chandigarh  
**Type:** location · **Search priority:** P3 (0 clicks, 0 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `region-north.webp` is shared by 9 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `region-north.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 98% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-location-online.webp` has no title attribute and no caption.
7. Context visual reuse: `context-location-online.webp` appears on 48 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 96% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 97% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 97% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/region-north.webp` | 98% | eager/high | Northern India regional skyline illustration | NO | NO |
| `bofu/context-location-online.webp` | 98% | lazy | A local search and online guidance visual showing… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the shared city/region hero (uniqueness comes from the local explanatory visuals below). Add alt, title attribute and caption naming the city.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-in-chandigarh-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Chandigarh was built as a planned capital for two states, and that shapes the career script most families…
- On-image text (about 25-40 words, shortened from the page; no new claims): Why this decision already feels heavier here / The Chandigarh career reality generic advice rarely names / Study and settle abroad, or build from the tri-city - the decision… / Chandigarh's own geography shapes which version of this decision you… / How this approach differs from typical career counselling
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career Counselling in Chandigarh”: Why this decision already feels…; The Chandigarh career reality……
- Title attribute: At a glance: Career Counselling in Chandigarh
- Caption (and keep the same point in HTML text): Chandigarh was built as a planned capital for two states, and that shapes the career script most families here inherit by default: a stable…
**V2 — Linear process chain or roadmap** (place after the section “Study and settle abroad, or build from the tri-city - the decision…”)
- File: `career-counselling-in-chandigarh-linear-study-settle-abroad-build.webp` · 1600×1000 WebP under 200 KB
- Teaches: Few cities in India carry an emigration pull as strong or as visible as Punjab's, and Chandigarh sits at the…
- On-image text (about 25-40 words, shortened from the page; no new claims): The pull to go abroad is real - and so is the cost of leaving it… / Staying and building from the tri-city is not the fallback option it… / A Canada, Australia, or UK study-and-settle plan can look like the safer bet when half… / Genuine reasons to go abroad exist: a program that is honestly stronger for your specific… / The weaker reason is going simply because staying feels like admitting you could not leave / Chandigarh's own growing IT corridor in Mohali, its academic strength through Panjab… / A high-value skill portfolio built from right here can open high income opportunities…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Linear process chain or roadmap for “Study and settle abroad, or build from the…”: The pull to go abroad is real …; Staying and building from the…; A Canada…
- Title attribute: Study and settle abroad, or build from the tri-city - the decision…
- Caption (and keep the same point in HTML text): Few cities in India carry an emigration pull as strong or as visible as Punjab's, and Chandigarh sits at the centre of it through its own…
**V3 — Asymmetrical pros-and-cons comparison** (place after the section “How this approach differs from typical career counselling”)
- File: `career-counselling-in-chandigarh-asymmetrical-approach-differs-typical-career.webp` · 1600×1000 WebP under 200 KB
- Teaches: In a city built around a government-service default on one side and an abroad-migration pull on the other…
- On-image text (about 25-40 words, shortened from the page; no new claims): In a city built around a government-service default on one side and an… / The comparison below shows what separates high-leverage guidance from both. / Others Shift Future Career School Others Choosing a counsellor only because…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “How this approach differs from typical career…”: In a city built around a…; The comparison below shows what…; Others…
- Title attribute: How this approach differs from typical career counselling
- Caption (and keep the same point in HTML text): In a city built around a government-service default on one side and an abroad-migration pull on the other, the real risk is advice that…
**V4 — Self-assessment checklist** (place after the section “”)
- File: `career-counselling-in-chandigarh-self-overview.webp` · 1600×1000 WebP under 200 KB
- Teaches: 01 Clarity on the specific fork pressing you right now Whether a government or administrative role, a…
- On-image text (about 25-40 words, shortened from the page; no new claims): Clarity on the specific fork pressing you right now / A skill direction built for achieving earlier financial freedom… / Whether a government or administrative role, a defence-services path, a Mohali-based IT… / A realistic comparison of the cost, timeline, and risk of an abroad plan against a… / What your Panjab University, PEC, or PGIMER-track choice should actually build toward… / How to raise a hard family conversation about stepping away from an expected government… / A high-value skill portfolio that holds up whether you stay in Chandigarh, move within…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Self-assessment checklist for “”: Clarity on the specific fork…; A skill direction built for…; Whether a government or…
- Title attribute: 
- Caption (and keep the same point in HTML text): 01 Clarity on the specific fork pressing you right now Whether a government or administrative role, a defence-services path, a Mohali-based…
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/locations/career-counselling-in-chembur/

**H1:** Career counselling in Chembur for practical clarity and stronger next steps  
**Type:** location · **Search priority:** P3 (0 clicks, 0 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `city-mumbai.webp` is shared by 7 page(s); acceptable reuse.
4. Hero `city-mumbai.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 98% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-location-online.webp` has no title attribute and no caption.
7. Context visual reuse: `context-location-online.webp` appears on 48 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 96% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 96% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 97% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/city-mumbai.webp` | 98% | eager/high | Mumbai skyline illustration for career… | NO | NO |
| `bofu/context-location-online.webp` | 98% | lazy | A local search and online guidance visual showing… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the shared city/region hero (uniqueness comes from the local explanatory visuals below). Add alt, title attribute and caption naming the city.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-in-chembur-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Chembur hands many people a genuinely different fork than most Mumbai suburbs: a legacy petrochemical and…
- On-image text (about 25-40 words, shortened from the page; no new claims): Why this decision already feels important / The Chembur-Trombay refinery economy is Chembur's first real fork / Redevelopment and the BKC commute: a second, genuinely different shift / Chembur's areas point to different real decisions / Choose the stronger starting point for your situation
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career counselling in Chembur for…”: Why this decision already feels…; The Chembur-Trombay refinery……
- Title attribute: At a glance: Career counselling in Chembur for practical clarity and…
- Caption (and keep the same point in HTML text): Chembur hands many people a genuinely different fork than most Mumbai suburbs: a legacy petrochemical and refinery-plant economy built…
**V2 — Asymmetrical pros-and-cons comparison** (place after the section “Redevelopment and the BKC commute: a second, genuinely different shift”)
- File: `career-counselling-in-chembur-asymmetrical-redevelopment-bkc-commute-second.webp` · 1600×1000 WebP under 200 KB
- Teaches: A real, changing local economy, and a genuine choice between a legacy trade tie and a newer corporate-commute…
- On-image text (about 25-40 words, shortened from the page; no new claims): A second, genuinely distinct shift: redevelopment and the BKC-commute… / What a skill-first path can add to either direction / Chembur's older chawls and industrial-worker housing colonies are undergoing large-scale… / The Eastern Freeway gives Chembur an unusually direct, fast commute into the Bandra Kurla… / Many younger residents now work in BKC-based banking, finance, consulting, or corporate… / Families weighing whether to build on a legacy refinery-trade connection or pivot toward… / Real-estate, project-management, or construction-management skills can turn…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “Redevelopment and the BKC commute: a second…”: A second, genuinely distinct…; What a skill-first path can add……
- Title attribute: Redevelopment and the BKC commute: a second, genuinely different shift
- Caption (and keep the same point in HTML text): A real, changing local economy, and a genuine choice between a legacy trade tie and a newer corporate-commute path.
**V3 — Asymmetrical pros-and-cons comparison** (place after the section “Chembur's areas point to different real decisions”)
- File: `career-counselling-in-chembur-asymmetrical-chembur-areas-point-different.webp` · 1600×1000 WebP under 200 KB
- Teaches: A useful local page should feel grounded in how people actually live and work across Chembur, not treat it as…
- On-image text (about 25-40 words, shortened from the page; no new claims): The Trombay-facing belt carries the refinery and fertiliser-plant… / Diamond Garden and the redeveloping chawl belt carry the real-estate… / The Eastern Freeway corridor carries the BKC-commute white-collar…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “Chembur's areas point to different real decisions”: The Trombay-facing belt carries…; Diamond Garden and the…; The…
- Title attribute: Chembur's areas point to different real decisions
- Caption (and keep the same point in HTML text): A useful local page should feel grounded in how people actually live and work across Chembur, not treat it as one flat generic location.
**V4 — Self-assessment checklist** (place after the section “Questions people ask before choosing career counselling in Chembur”)
- File: `career-counselling-in-chembur-self-questions-people-ask-before.webp` · 1600×1000 WebP under 200 KB
- Teaches: 01 Why choose online career counselling in Chembur instead of only looking for a nearby offline office?
- On-image text (about 25-40 words, shortened from the page; no new claims): 01 Why choose online career counselling in Chembur instead of only looking for… / Because proximity alone does not improve the decision. / Online guidance lets you start from home without waiting for local…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Self-assessment checklist for “Questions people ask before choosing career…”: 01 Why choose online career…; Because proximity alone does not…; Online guidance…
- Title attribute: Questions people ask before choosing career counselling in Chembur
- Caption (and keep the same point in HTML text): 01 Why choose online career counselling in Chembur instead of only looking for a nearby offline office?
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/locations/career-counselling-in-chennai/

**H1:** Career counselling in Chennai for the auto, IT, and healthcare fork  
**Type:** location · **Search priority:** P3 (0 clicks, 3 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `city-chennai.webp` is shared by 1 page(s); acceptable reuse.
4. Hero `city-chennai.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 98% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-location-online.webp` has no title attribute and no caption.
7. Context visual reuse: `context-location-online.webp` appears on 48 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 96% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 96% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 97% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/city-chennai.webp` | 98% | eager/high | Chennai skyline illustration for career… | NO | NO |
| `bofu/context-location-online.webp` | 98% | lazy | A local search and online guidance visual showing… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the shared city/region hero (uniqueness comes from the local explanatory visuals below). Add alt, title attribute and caption naming the city.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-in-chennai-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Chennai is the rare Indian city where a real automotive and manufacturing hub, a genuine IT corridor, and a…
- On-image text (about 25-40 words, shortened from the page; no new claims): The Chennai career reality that generic advice misses / Why this decision already feels important / Chennai's geography shapes the decision, not just the commute / How the right support can fit where you are right now / How practical career counselling should move you forward
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career counselling in Chennai for…”: The Chennai career reality that…; Why this decision already…
- Title attribute: At a glance: Career counselling in Chennai for the auto, IT, and…
- Caption (and keep the same point in HTML text): Chennai is the rare Indian city where a real automotive and manufacturing hub, a genuine IT corridor, and a strong healthcare and hospital…
**V2 — Decision tree** (place after the section “How the right support can fit where you are right now”)
- File: `career-counselling-in-chennai-decision-right-support-fit-where.webp` · 1600×1000 WebP under 200 KB
- Teaches: Student or Early-Career For school, college, fresher, and early-direction decisions Useful when stream…
- On-image text (about 25-40 words, shortened from the page; no new claims): For school, college, fresher, and early-direction decisions / For stagnation, AI pressure, and salary-ceiling decisions / Student or Early-Career For school, college, fresher, and early-direction… / Working Professional For stagnation, AI pressure, and salary-ceiling decisions… / A clearer route toward achieving earlier financial freedom through stronger…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “How the right support can fit where you are right…”: For school, college, fresher, and…; For stagnation, AI pressure, and…; Student or…
- Title attribute: How the right support can fit where you are right now
- Caption (and keep the same point in HTML text): Student or Early-Career For school, college, fresher, and early-direction decisions Useful when stream choices, course choices, skill…
**V3 — Asymmetrical pros-and-cons comparison** (place after the section “How this approach differs from typical career counselling”)
- File: `career-counselling-in-chennai-asymmetrical-approach-differs-typical-career.webp` · 1600×1000 WebP under 200 KB
- Teaches: In a city with three genuinely different industries pulling in different directions, the real risk is generic…
- On-image text (about 25-40 words, shortened from the page; no new claims): In a city with three genuinely different industries pulling in different… / The comparison below shows what separates high-leverage guidance from that. / Others Shift Future Career School Others Choosing a counsellor only because…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “How this approach differs from typical career…”: In a city with three genuinely…; The comparison below shows what……
- Title attribute: How this approach differs from typical career counselling
- Caption (and keep the same point in HTML text): In a city with three genuinely different industries pulling in different directions, the real risk is generic advice that only speaks the…
**V4 — Self-assessment checklist** (place after the section “”)
- File: `career-counselling-in-chennai-self-overview.webp` · 1600×1000 WebP under 200 KB
- Teaches: 01 Clarity on the specific fork pressing you right now Whether auto and manufacturing, the OMR IT corridor…
- On-image text (about 25-40 words, shortened from the page; no new claims): Clarity on the specific fork pressing you right now / Skill direction built for Chennai's actual mix of industries / Whether auto and manufacturing, the OMR IT corridor, healthcare, or a public-sector path… / Whether staying close to family in Chennai or relocating is the stronger move for your… / Whether your current degree needs a skill layer on top of it to stand out in a crowded… / What a realistic income trajectory looks like on your current path over the next few years / A high-value skill portfolio that holds up whether you stay in manufacturing, move into…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Self-assessment checklist for “”: Clarity on the specific fork…; Skill direction built for…; Whether auto and manufacturing…
- Title attribute: 
- Caption (and keep the same point in HTML text): 01 Clarity on the specific fork pressing you right now Whether auto and manufacturing, the OMR IT corridor, healthcare, or a public-sector…
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/locations/career-counselling-in-coimbatore/

**H1:** Career Counselling in Coimbatore  
**Type:** location · **Search priority:** P3 (0 clicks, 3 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `region-south.webp` is shared by 3 page(s); acceptable reuse.
4. Hero `region-south.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 98% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-location-online.webp` has no title attribute and no caption.
7. Context visual reuse: `context-location-online.webp` appears on 48 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 96% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 97% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 97% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/region-south.webp` | 98% | eager/high | Southern India regional skyline illustration | NO | NO |
| `bofu/context-location-online.webp` | 98% | lazy | A local search and online guidance visual showing… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the shared city/region hero (uniqueness comes from the local explanatory visuals below). Add alt, title attribute and caption naming the city.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-in-coimbatore-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Coimbatore has earned its names - the Pump City, the Manchester of South India - by building one of the…
- On-image text (about 25-40 words, shortened from the page; no new claims): Why this decision already feels heavier here / If the Coimbatore search already reflects a real fork, look at it… / The Coimbatore career reality generic advice rarely names / The family precision-engineering business decision - with no… / Coimbatore's own geography shapes which version of this decision you…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career Counselling in Coimbatore”: Why this decision already feels…; If the Coimbatore search…
- Title attribute: At a glance: Career Counselling in Coimbatore
- Caption (and keep the same point in HTML text): Coimbatore has earned its names - the Pump City, the Manchester of South India - by building one of the world's genuinely significant…
**V2 — Chronological timeline** (place after the section “The family precision-engineering business decision - with no…”)
- File: `career-counselling-in-coimbatore-chronological-family-precision-engineering-business.webp` · 1600×1000 WebP under 200 KB
- Teaches: Coimbatore's pump, textile-machinery, and auto-component units generally expect a real engineering…
- On-image text (about 25-40 words, shortened from the page; no new claims): Joining the family pump, textile-machinery, or auto-component unit is… / Stepping away does not have to mean rejecting the family's… / This is a precision-engineering succession question, not a… / A precision-engineering unit that has supplied the same buyers for two generations can be… / It can also be a unit quietly losing ground to larger organised manufacturers or newer… / The honest question is whether the specific unit, and your specific role in it, is strong… / A high-value skill portfolio in areas like design engineering, automation, quality…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “The family precision-engineering business…”: Joining the family pump…; Stepping away does not have to…; This is a…
- Title attribute: The family precision-engineering business decision - with no…
- Caption (and keep the same point in HTML text): Coimbatore's pump, textile-machinery, and auto-component units generally expect a real engineering qualification, which makes this a…
**V3 — Asymmetrical pros-and-cons comparison** (place after the section “How this approach differs from typical career counselling”)
- File: `career-counselling-in-coimbatore-asymmetrical-approach-differs-typical-career.webp` · 1600×1000 WebP under 200 KB
- Teaches: In a city built around an inherited manufacturing-business default, the real risk is advice that either…
- On-image text (about 25-40 words, shortened from the page; no new claims): In a city built around an inherited manufacturing-business default, the real… / The comparison below shows what separates high-leverage guidance from both. / Others Shift Future Career School Others Choosing a counsellor only because…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “How this approach differs from typical career…”: In a city built around an…; The comparison below shows what……
- Title attribute: How this approach differs from typical career counselling
- Caption (and keep the same point in HTML text): In a city built around an inherited manufacturing-business default, the real risk is advice that either glorifies the family unit without…
**V4 — Self-assessment checklist** (place after the section “”)
- File: `career-counselling-in-coimbatore-self-overview.webp` · 1600×1000 WebP under 200 KB
- Teaches: 01 Clarity on the specific fork pressing you right now Whether joining, modernising, or stepping back from a…
- On-image text (about 25-40 words, shortened from the page; no new claims): Clarity on the specific fork pressing you right now / A skill direction built for achieving earlier financial freedom… / Whether joining, modernising, or stepping back from a family pump, textile-machinery, or… / Whether a TIDEL Park or wider IT role is a real fit for you, or a default worth… / How to raise a hard family conversation about the unit's future without it reading as… / What a realistic income trajectory looks like inside Coimbatore's manufacturing economy… / A high-value skill portfolio in design engineering, automation, quality systems, or…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Self-assessment checklist for “”: Clarity on the specific fork…; A skill direction built for…; Whether joining, modernising, or…
- Title attribute: 
- Caption (and keep the same point in HTML text): 01 Clarity on the specific fork pressing you right now Whether joining, modernising, or stepping back from a family pump…
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/locations/career-counselling-in-dadar/

**H1:** Career counselling in Dadar for practical clarity and stronger next steps  
**Type:** location · **Search priority:** P3 (0 clicks, 12 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `city-mumbai.webp` is shared by 7 page(s); acceptable reuse.
4. Hero `city-mumbai.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 98% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-location-online.webp` has no title attribute and no caption.
7. Context visual reuse: `context-location-online.webp` appears on 48 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 95% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 96% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 97% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/city-mumbai.webp` | 98% | eager/high | Mumbai skyline illustration for career… | NO | NO |
| `bofu/context-location-online.webp` | 98% | lazy | A local search and online guidance visual showing… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the shared city/region hero (uniqueness comes from the local explanatory visuals below). Add alt, title attribute and caption naming the city.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-in-dadar-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Dadar hands many people a genuinely different fork than most Mumbai neighbourhoods: one of the city's oldest…
- On-image text (about 25-40 words, shortened from the page; no new claims): Why this decision already feels important / The wholesale flower-and-textile trade economy is Dadar's first real… / Shivaji Park's sports-and-cultural pathway: a second, genuinely… / Dadar's areas point to different real decisions / Choose the stronger starting point for your situation
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career counselling in Dadar for…”: Why this decision already feels…; The wholesale…
- Title attribute: At a glance: Career counselling in Dadar for practical clarity and…
- Caption (and keep the same point in HTML text): Dadar hands many people a genuinely different fork than most Mumbai neighbourhoods: one of the city's oldest wholesale flower-and-textile…
**V2 — Asymmetrical pros-and-cons comparison** (place after the section “Shivaji Park's sports-and-cultural pathway: a second, genuinely…”)
- File: `career-counselling-in-dadar-asymmetrical-shivaji-park-sports-cultural.webp` · 1600×1000 WebP under 200 KB
- Teaches: A real sporting and cultural economy under its own pressures, and a genuine choice between it and the…
- On-image text (about 25-40 words, shortened from the page; no new claims): A second, genuinely distinct economy: the Shivaji Park… / What deliberate planning can add to a sports or arts pathway / Shivaji Park is one of Mumbai’s most storied sporting grounds, with a long history of… / Many families in and around Dadar weigh a genuine sports-career pathway through this… / A sports pathway through Shivaji Park deserves the same honest planning as any other… / Dadar’s dense Maharashtrian cultural identity also supports real opportunities in Marathi… / Sports-science, coaching, or sports-management qualifications can extend a genuine…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “Shivaji Park's sports-and-cultural pathway: a…”: A second, genuinely distinct…; What deliberate planning can add……
- Title attribute: Shivaji Park's sports-and-cultural pathway: a second, genuinely…
- Caption (and keep the same point in HTML text): A real sporting and cultural economy under its own pressures, and a genuine choice between it and the wholesale-trade base.
**V3 — Asymmetrical pros-and-cons comparison** (place after the section “Dadar's areas point to different real decisions”)
- File: `career-counselling-in-dadar-asymmetrical-dadar-areas-point-different.webp` · 1600×1000 WebP under 200 KB
- Teaches: A useful local page should feel grounded in how people actually live and work across Dadar, not treat it as…
- On-image text (about 25-40 words, shortened from the page; no new claims): Dadar East and the market lanes carry the wholesale-trade economy / Shivaji Park and its surrounding lanes carry the sports and cultural… / Dadar’s rail-junction core carries a wider commuter and services…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “Dadar's areas point to different real decisions”: Dadar East and the market lanes…; Shivaji Park and its…
- Title attribute: Dadar's areas point to different real decisions
- Caption (and keep the same point in HTML text): A useful local page should feel grounded in how people actually live and work across Dadar, not treat it as one flat generic location.
**V4 — Self-assessment checklist** (place after the section “Questions people ask before choosing career counselling in Dadar”)
- File: `career-counselling-in-dadar-self-questions-people-ask-before.webp` · 1600×1000 WebP under 200 KB
- Teaches: 01 Why choose online career counselling in Dadar instead of only looking for a nearby offline office?
- On-image text (about 25-40 words, shortened from the page; no new claims): 01 Why choose online career counselling in Dadar instead of only looking for a… / Because crossing Mumbai for a session adds time, not clarity. / Online fits around market and training hours.
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Self-assessment checklist for “Questions people ask before choosing career…”: 01 Why choose online career…; Because crossing Mumbai for a…; Online fits around…
- Title attribute: Questions people ask before choosing career counselling in Dadar
- Caption (and keep the same point in HTML text): 01 Why choose online career counselling in Dadar instead of only looking for a nearby offline office?
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/locations/career-counselling-in-delhi/

**H1:** Career Counselling in Delhi  
**Type:** location · **Search priority:** P3 (0 clicks, 16 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `city-delhi.webp` is shared by 6 page(s); acceptable reuse.
4. Hero `city-delhi.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 98% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-location-online.webp` has no title attribute and no caption.
7. Context visual reuse: `context-location-online.webp` appears on 48 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 96% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 97% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 97% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/city-delhi.webp` | 98% | eager/high | Delhi skyline illustration for career counselling… | NO | NO |
| `bofu/context-location-online.webp` | 98% | lazy | A local search and online guidance visual showing… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the shared city/region hero (uniqueness comes from the local explanatory visuals below). Add alt, title attribute and caption naming the city.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-in-delhi-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Delhi carries a career culture no other Indian city matches at this scale - the Mukherjee Nagar and Old…
- On-image text (about 25-40 words, shortened from the page; no new claims): The Delhi career reality generic advice rarely names / Why this decision already feels heavier here / Delhi's own geography shapes which version of this decision you are in / How practical career counselling should move you forward / How the right support can fit where you are right now
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career Counselling in Delhi”: The Delhi career reality generic…; Why this decision already feels……
- Title attribute: At a glance: Career Counselling in Delhi
- Caption (and keep the same point in HTML text): Delhi carries a career culture no other Indian city matches at this scale - the Mukherjee Nagar and Old Rajinder Nagar coaching belt, Delhi…
**V2 — Decision tree** (place after the section “Delhi's own geography shapes which version of this decision you are in”)
- File: `career-counselling-in-delhi-decision-delhi-own-geography-shapes.webp` · 1600×1000 WebP under 200 KB
- Teaches: A useful local page should recognise that a PG in the coaching belt, a North Campus hostel, and a South Delhi…
- On-image text (about 25-40 words, shortened from the page; no new claims): The coaching belt is its own world inside the city / North Campus and Central Delhi carry a different kind of pressure / South Delhi and the business corridors run on a different set of…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “Delhi's own geography shapes which version of…”: The coaching belt is its own…; North Campus and Central Delhi…; South Delhi and the…
- Title attribute: Delhi's own geography shapes which version of this decision you are in
- Caption (and keep the same point in HTML text): A useful local page should recognise that a PG in the coaching belt, a North Campus hostel, and a South Delhi apartment are not living…
**V3 — Asymmetrical pros-and-cons comparison** (place after the section “How this approach differs from typical career counselling”)
- File: `career-counselling-in-delhi-asymmetrical-approach-differs-typical-career.webp` · 1600×1000 WebP under 200 KB
- Teaches: In a city built around one exam and one government track, the real risk is advice that either glorifies…
- On-image text (about 25-40 words, shortened from the page; no new claims): In a city built around one exam and one government track, the real risk is… / The comparison below shows what separates high-leverage guidance from both. / Others Shift Future Career School Others Choosing a counsellor only because…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “How this approach differs from typical career…”: In a city built around one exam…; The comparison below shows what……
- Title attribute: How this approach differs from typical career counselling
- Caption (and keep the same point in HTML text): In a city built around one exam and one government track, the real risk is advice that either glorifies another attempt or dismisses it…
**V4 — Self-assessment checklist** (place after the section “”)
- File: `career-counselling-in-delhi-self-overview.webp` · 1600×1000 WebP under 200 KB
- Teaches: 01 Clarity on the specific fork pressing you right now Whether another exam attempt is still the strongest…
- On-image text (about 25-40 words, shortened from the page; no new claims): Clarity on the specific fork pressing you right now / A skill direction built for achieving earlier financial freedom… / Whether another exam attempt is still the strongest use of your time, money, and age… / How law, policy research, media, or a private-sector skill path compares honestly against… / What your Delhi University subject or college choice should actually build toward… / How to raise a hard family conversation about sunk coaching costs without it turning into… / A high-value skill portfolio that holds up whether you continue toward the exam, pivot to…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Self-assessment checklist for “”: Clarity on the specific fork…; A skill direction built for…; Whether another exam attempt is…
- Title attribute: 
- Caption (and keep the same point in HTML text): 01 Clarity on the specific fork pressing you right now Whether another exam attempt is still the strongest use of your time, money, and age…
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/locations/career-counselling-in-greater-noida/

**H1:** Career counselling in Greater Noida for practical clarity and stronger next steps  
**Type:** location · **Search priority:** P3 (0 clicks, 3 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `city-delhi.webp` is shared by 6 page(s); acceptable reuse.
4. Hero `city-delhi.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 98% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-location-online.webp` has no title attribute and no caption.
7. Context visual reuse: `context-location-online.webp` appears on 48 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 96% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 96% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 97% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/city-delhi.webp` | 98% | eager/high | Delhi skyline illustration for career counselling… | NO | NO |
| `bofu/context-location-online.webp` | 98% | lazy | A local search and online guidance visual showing… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the shared city/region hero (uniqueness comes from the local explanatory visuals below). Add alt, title attribute and caption naming the city.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-in-greater-noida-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Greater Noida hands many people a genuinely different fork than neighbouring Noida: a purpose-built…
- On-image text (about 25-40 words, shortened from the page; no new claims): Why this decision already feels important / The university-town economy is Greater Noida's first real fork / The manufacturing and logistics base: a second, genuinely different… / Greater Noida's areas point to different real decisions / Choose the stronger starting point for your situation
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career counselling in Greater Noida…”: Why this decision already feels…; The university-town economy…
- Title attribute: At a glance: Career counselling in Greater Noida for practical…
- Caption (and keep the same point in HTML text): Greater Noida hands many people a genuinely different fork than neighbouring Noida: a purpose-built university-town economy carrying a…
**V2 — Asymmetrical pros-and-cons comparison** (place after the section “The manufacturing and logistics base: a second, genuinely different…”)
- File: `career-counselling-in-greater-noida-asymmetrical-manufacturing-logistics-base-second.webp` · 1600×1000 WebP under 200 KB
- Teaches: A real industrial employer running alongside the education economy, distinct from the software/BPO track most…
- On-image text (about 25-40 words, shortened from the page; no new claims): A real automotive, electronics, and industrial manufacturing base / The IT and services layer runs alongside, not instead of… / Greater Noida and the neighbouring Greater Noida West and Yamuna Expressway industrial… / Diploma and ITI-trained technical staff, quality and production engineers, and… / Families connected to a manufacturing or logistics unit often default straight to a… / Software, ITES, and services roles are available across the broader Noida-Greater Noida… / The real decision is usually which skill direction fits the person, not which sector is…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “The manufacturing and logistics base: a second…”: A real automotive, electronics…; The IT and services layer runs……
- Title attribute: The manufacturing and logistics base: a second, genuinely different…
- Caption (and keep the same point in HTML text): A real industrial employer running alongside the education economy, distinct from the software/BPO track most NCR guidance assumes.
**V3 — Asymmetrical pros-and-cons comparison** (place after the section “Greater Noida's areas point to different real decisions”)
- File: `career-counselling-in-greater-noida-asymmetrical-greater-noida-areas-point.webp` · 1600×1000 WebP under 200 KB
- Teaches: A useful local page should feel grounded in how people actually live and work across Greater Noida, not treat…
- On-image text (about 25-40 words, shortened from the page; no new claims): Knowledge Park and Alpha-Beta-Gamma sectors carry the education… / Greater Noida West (Noida Extension) carries a large residential and… / The Yamuna Expressway industrial belt carries the manufacturing and…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “Greater Noida's areas point to different real…”: Knowledge Park and…; Greater Noida West (Noida…; The Yamuna…
- Title attribute: Greater Noida's areas point to different real decisions
- Caption (and keep the same point in HTML text): A useful local page should feel grounded in how people actually live and work across Greater Noida, not treat it as one flat generic…
**V4 — Self-assessment checklist** (place after the section “Questions people ask before choosing career counselling in Greater…”)
- File: `career-counselling-in-greater-noida-self-questions-people-ask-before.webp` · 1600×1000 WebP under 200 KB
- Teaches: 01 Why choose online career counselling in Greater Noida instead of only looking for a nearby offline office?
- On-image text (about 25-40 words, shortened from the page; no new claims): 01 Why choose online career counselling in Greater Noida instead of only… / Because proximity alone does not improve the decision. / Online guidance lets you start from a hostel, home, or workplace without…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Self-assessment checklist for “Questions people ask before choosing career…”: 01 Why choose online career…; Because proximity alone does not…; Online guidance…
- Title attribute: Questions people ask before choosing career counselling in Greater…
- Caption (and keep the same point in HTML text): 01 Why choose online career counselling in Greater Noida instead of only looking for a nearby offline office?
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/locations/career-counselling-in-gurgaon/

**H1:** Career Counselling in Gurgaon  
**Type:** location · **Search priority:** P3 (0 clicks, 3 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `city-delhi.webp` is shared by 6 page(s); acceptable reuse.
4. Hero `city-delhi.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 98% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-location-online.webp` has no title attribute and no caption.
7. Context visual reuse: `context-location-online.webp` appears on 48 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 96% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 97% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 97% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/city-delhi.webp` | 98% | eager/high | Delhi skyline illustration for career counselling… | NO | NO |
| `bofu/context-location-online.webp` | 98% | lazy | A local search and online guidance visual showing… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the shared city/region hero (uniqueness comes from the local explanatory visuals below). Add alt, title attribute and caption naming the city.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-in-gurgaon-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Gurgaon, now officially Gurugram, is India's most concentrated corporate and Global Capability Centre address…
- On-image text (about 25-40 words, shortened from the page; no new claims): The Gurgaon career reality generic advice rarely names / If the Gurgaon search already reflects a real fork, look at it… / The GCC and MNC ladder: same company, different career / Why this decision already feels heavier here / Moved to Gurgaon for the job: a career identity most cities don't…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career Counselling in Gurgaon”: The Gurgaon career reality…; If the Gurgaon search already…; The GCC…
- Title attribute: At a glance: Career Counselling in Gurgaon
- Caption (and keep the same point in HTML text): Gurgaon, now officially Gurugram, is India's most concentrated corporate and Global Capability Centre address - Cyber City, Cyber Hub, and…
**V2 — Asymmetrical pros-and-cons comparison** (place after the section “The GCC and MNC ladder: same company, different career”)
- File: `career-counselling-in-gurgaon-asymmetrical-gcc-mnc-ladder-same.webp` · 1600×1000 WebP under 200 KB
- Teaches: Cyber City runs on formal band-and-level structures and fixed calibration cycles that most generic career…
- On-image text (about 25-40 words, shortened from the page; no new claims): The band-and-level system decides more of your career than your job… / Lateral moves between GCCs are a genuine Gurgaon career strategy, not… / The generalist-versus-specialist fork hits earlier here than in most… / Appraisal-cycle timing shapes when a career conversation actually…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “The GCC and MNC ladder: same company, different…”: The band-and-level system decides…; Lateral moves between GCCs…
- Title attribute: The GCC and MNC ladder: same company, different career
- Caption (and keep the same point in HTML text): Cyber City runs on formal band-and-level structures and fixed calibration cycles that most generic career advice never accounts for.
**V3 — Asymmetrical pros-and-cons comparison** (place after the section “How this approach differs from typical career counselling”)
- File: `career-counselling-in-gurgaon-asymmetrical-approach-differs-typical-career.webp` · 1600×1000 WebP under 200 KB
- Teaches: In a city built around corporate ladders and calibration cycles, the real risk is advice that either chases…
- On-image text (about 25-40 words, shortened from the page; no new claims): In a city built around corporate ladders and calibration cycles, the real risk… / The comparison below shows what separates high-leverage guidance from both. / Others Shift Future Career School Others Choosing a counsellor only because…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “How this approach differs from typical career…”: In a city built around corporate…; The comparison below shows…
- Title attribute: How this approach differs from typical career counselling
- Caption (and keep the same point in HTML text): In a city built around corporate ladders and calibration cycles, the real risk is advice that either chases every lateral hike or dismisses…
**V4 — Self-assessment checklist** (place after the section “”)
- File: `career-counselling-in-gurgaon-self-overview.webp` · 1600×1000 WebP under 200 KB
- Teaches: 01 Clarity on the specific fork pressing you right now Whether to stay and build depth at your current GCC or…
- On-image text (about 25-40 words, shortened from the page; no new claims): Clarity on the specific fork pressing you right now / A skill direction built for earlier financial freedom, not just the… / Whether to stay and build depth at your current GCC or MNC, or make a lateral move that… / How your specific band-and-level structure actually decides promotion timing, and what… / Whether a Cyber City corporate path or a Manesar-belt manufacturing and engineering route… / How to weigh the cost of a wrong move against Gurgaon's cost of living and the lack of a… / A high-value skill portfolio that holds up whether you stay, move laterally, or shift…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Self-assessment checklist for “”: Clarity on the specific fork…; A skill direction built for…; Whether to stay and build depth…
- Title attribute: 
- Caption (and keep the same point in HTML text): 01 Clarity on the specific fork pressing you right now Whether to stay and build depth at your current GCC or MNC, or make a lateral move…
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/locations/career-counselling-in-guwahati/

**H1:** Career counselling in Guwahati for the Northeast's own gateway city  
**Type:** location · **Search priority:** P3 (0 clicks, 22 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `region-east.webp` is shared by 4 page(s); acceptable reuse.
4. Hero `region-east.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 98% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-location-online.webp` has no title attribute and no caption.
7. Context visual reuse: `context-location-online.webp` appears on 48 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 96% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 96% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 97% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/region-east.webp` | 98% | eager/high | Eastern India regional skyline illustration | NO | NO |
| `bofu/context-location-online.webp` | 98% | lazy | A local search and online guidance visual showing… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the shared city/region hero (uniqueness comes from the local explanatory visuals below). Add alt, title attribute and caption naming the city.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-in-guwahati-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Guwahati is the Gateway to the Northeast - the first real stop for students and professionals from Assam…
- On-image text (about 25-40 words, shortened from the page; no new claims): How the right support can fit where you are right now / The decision most people searching from Guwahati are actually facing / How this approach differs from typical career counselling / Guwahati's tea-trading and oil-and-gas corporate economy - a real… / How practical career counselling should move you forward
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career counselling in Guwahati for…”: How the right support can fit…; The decision most people…; How…
- Title attribute: At a glance: Career counselling in Guwahati for the Northeast's own…
- Caption (and keep the same point in HTML text): Guwahati is the Gateway to the Northeast - the first real stop for students and professionals from Assam, Meghalaya, Nagaland, Manipur…
**V2 — Self-assessment checklist** (place after the section “The decision most people searching from Guwahati are actually facing”)
- File: `career-counselling-in-guwahati-self-decision-most-people-searching.webp` · 1600×1000 WebP under 200 KB
- Teaches: This two-stage migration pattern - home state to Guwahati, then possibly Guwahati to a bigger metro - has no…
- On-image text (about 25-40 words, shortened from the page; no new claims): For most of the Northeast, the first career decision is not "which… / Guwahati is a genuine destination in its own right, not only a… / Getting this fork right matters more here because the distances and… / Students and professionals from Meghalaya, Nagaland, Manipur, Mizoram, Tripura, Arunachal… / This two-stage migration pattern - home town to Guwahati, then possibly Guwahati to a… / Treating Guwahati as just another tier-2 stopover misses the decision most people here… / IIT Guwahati, Gauhati University, Gauhati Medical College, and a real refinery…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Self-assessment checklist for “The decision most people searching from Guwahati…”: For most of the Northeast, the…; Guwahati is a genuine destination…; Getting…
- Title attribute: The decision most people searching from Guwahati are actually facing
- Caption (and keep the same point in HTML text): This two-stage migration pattern - home state to Guwahati, then possibly Guwahati to a bigger metro - has no equivalent framing on any…
**V3 — Asymmetrical pros-and-cons comparison** (place after the section “How this approach differs from typical career counselling”)
- File: `career-counselling-in-guwahati-asymmetrical-approach-differs-typical-career.webp` · 1600×1000 WebP under 200 KB
- Teaches: In a region where the pull toward Delhi, Bangalore, or Hyderabad is constant, the risk is generic advice that…
- On-image text (about 25-40 words, shortened from the page; no new claims): In a region where the pull toward Delhi, Bangalore, or Hyderabad is constant… / The comparison below shows what separates high-leverage guidance from that. / Others Shift Future Career School Others Choosing a counsellor only because…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “How this approach differs from typical career…”: In a region where the pull toward…; The comparison below shows…
- Title attribute: How this approach differs from typical career counselling
- Caption (and keep the same point in HTML text): In a region where the pull toward Delhi, Bangalore, or Hyderabad is constant, the risk is generic advice that assumes a metro is always the…
**V4 — Self-assessment checklist** (place after the section “”)
- File: `career-counselling-in-guwahati-self-overview.webp` · 1600×1000 WebP under 200 KB
- Teaches: 01 Clarity on the specific fork pressing you right now Whether your skill direction already has a real…
- On-image text (about 25-40 words, shortened from the page; no new claims): Clarity on the specific fork pressing you right now / Skill direction built for what Guwahati's actual economy is hiring for / Whether your skill direction already has a real opening inside Guwahati's refinery and… / Whether Guwahati is genuinely your destination, or a deliberate first stage before a… / Whether staying closer to family and the wider Northeast, or moving further for a metro's… / What a realistic income trajectory looks like on your current path, given how Guwahati's… / A high-value skill portfolio aimed at energy-sector corporate roles, tea-trade commerce…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Self-assessment checklist for “”: Clarity on the specific fork…; Skill direction built for what…; Whether your skill direction…
- Title attribute: 
- Caption (and keep the same point in HTML text): 01 Clarity on the specific fork pressing you right now Whether your skill direction already has a real opening inside Guwahati's refinery…
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/locations/career-counselling-in-hyderabad/

**H1:** Career counselling in Hyderabad for tech, pharma, and family-business career clarity  
**Type:** location · **Search priority:** P3 (0 clicks, 8 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `city-hyderabad.webp` is shared by 1 page(s); acceptable reuse.
4. Hero `city-hyderabad.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 98% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-location-online.webp` has no title attribute and no caption.
7. Context visual reuse: `context-location-online.webp` appears on 48 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 96% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 97% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 97% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/city-hyderabad.webp` | 98% | eager/high | Hyderabad skyline illustration for career… | NO | NO |
| `bofu/context-location-online.webp` | 98% | lazy | A local search and online guidance visual showing… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the shared city/region hero (uniqueness comes from the local explanatory visuals below). Add alt, title attribute and caption naming the city.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-in-hyderabad-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Hyderabad runs two economies at once: a global tech and GCC corridor through HITEC City, Gachibowli, and the…
- On-image text (about 25-40 words, shortened from the page; no new claims): Hyderabad runs on two different economies at once / Which part of Hyderabad you're deciding from changes the real… / Why this decision already feels important / The real fork for Hyderabad's tech professionals: stay, or move to… / For old-city families, the tension is business succession versus a…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career counselling in Hyderabad for…”: Hyderabad runs on two different…; Which part of Hyderabad…
- Title attribute: At a glance: Career counselling in Hyderabad for tech, pharma, and…
- Caption (and keep the same point in HTML text): Hyderabad runs two economies at once: a global tech and GCC corridor through HITEC City, Gachibowli, and the Financial District, and a…
**V2 — Asymmetrical pros-and-cons comparison** (place after the section “Hyderabad runs on two different economies at once”)
- File: `career-counselling-in-hyderabad-asymmetrical-hyderabad-runs-two-different.webp` · 1600×1000 WebP under 200 KB
- Teaches: A useful page for this city has to speak to more than the tech corridor - the honest picture includes pharma…
- On-image text (about 25-40 words, shortened from the page; no new claims): HITEC City, Gachibowli, and the Financial District run a global tech… / Genome Valley makes Hyderabad one of India's genuine pharma and… / The Old City's commerce and jewelry trade is not a relic - it is a… / ISB and IIIT Hyderabad pull a specific kind of ambition into the city
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “Hyderabad runs on two different economies at once”: HITEC City, Gachibowli, and the…; Genome Valley makes Hyderabad…
- Title attribute: Hyderabad runs on two different economies at once
- Caption (and keep the same point in HTML text): A useful page for this city has to speak to more than the tech corridor - the honest picture includes pharma, old-city commerce, and a…
**V3 — Decision tree** (place after the section “Which part of Hyderabad you're deciding from changes the real…”)
- File: `career-counselling-in-hyderabad-decision-part-hyderabad-deciding-changes.webp` · 1600×1000 WebP under 200 KB
- Teaches: A useful local page should feel grounded in how people actually live, study, and work across Hyderabad rather…
- On-image text (about 25-40 words, shortened from the page; no new claims): HITEC City, Gachibowli, and the Financial District: the newer… / Old City and Charminar: the traditional trade and commerce base / Secunderabad: the older twin city with defence and railway roots / Banjara Hills and Jubilee Hills: established, and now a genuine mix…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “Which part of Hyderabad you're deciding from…”: HITEC City, Gachibowli, and the…; Old City and Charminar: the…; Secunderabad: the older twin…
- Title attribute: Which part of Hyderabad you're deciding from changes the real…
- Caption (and keep the same point in HTML text): A useful local page should feel grounded in how people actually live, study, and work across Hyderabad rather than pretending every user is…
**V4 — Asymmetrical pros-and-cons comparison** (place after the section “For old-city families, the tension is business succession versus a…”)
- File: `career-counselling-in-hyderabad-asymmetrical-old-city-families-tension.webp` · 1600×1000 WebP under 200 KB
- Teaches: This decision has no real equivalent in a single-industry tech city, and it deserves the same seriousness as…
- On-image text (about 25-40 words, shortened from the page; no new claims): For old-city families, the fork is business succession versus a tech… / A stable family business and a higher-growth tech role are not the… / Hybrid paths exist and are worth naming honestly / The pride and identity questions deserve real space, not a quick…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “For old-city families, the tension is business…”: For old-city families, the fork…; A stable family business and a……
- Title attribute: For old-city families, the tension is business succession versus a…
- Caption (and keep the same point in HTML text): This decision has no real equivalent in a single-industry tech city, and it deserves the same seriousness as any company or specialization…
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/locations/career-counselling-in-jabalpur/

**H1:** Career counselling in Jabalpur for practical clarity and stronger next steps  
**Type:** location · **Search priority:** P3 (0 clicks, 0 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `region-central.webp` is shared by 4 page(s); acceptable reuse.
4. Hero `region-central.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 98% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-location-online.webp` has no title attribute and no caption.
7. Context visual reuse: `context-location-online.webp` appears on 48 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 96% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 96% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 97% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/region-central.webp` | 98% | eager/high | Central India regional skyline illustration | NO | NO |
| `bofu/context-location-online.webp` | 98% | lazy | A local search and online guidance visual showing… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the shared city/region hero (uniqueness comes from the local explanatory visuals below). Add alt, title attribute and caption naming the city.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-in-jabalpur-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Jabalpur hands many people a genuinely different fork than most Indian cities: one of the country's largest…
- On-image text (about 25-40 words, shortened from the page; no new claims): Why this decision already feels important / The ordnance-manufacturing economy is Jabalpur's first real fork / The High Court and the legal profession: a second, genuinely… / Jabalpur's areas point to different real decisions / Choose the stronger starting point for your situation
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career counselling in Jabalpur for…”: Why this decision already feels…; The ordnance-manufacturing……
- Title attribute: At a glance: Career counselling in Jabalpur for practical clarity and…
- Caption (and keep the same point in HTML text): Jabalpur hands many people a genuinely different fork than most Indian cities: one of the country's largest concentrations of ordnance and…
**V2 — Asymmetrical pros-and-cons comparison** (place after the section “The High Court and the legal profession: a second, genuinely…”)
- File: `career-counselling-in-jabalpur-asymmetrical-high-court-legal-profession.webp` · 1600×1000 WebP under 200 KB
- Teaches: A real professional economy under its own pressures, and a genuine choice between it and the…
- On-image text (about 25-40 words, shortened from the page; no new claims): A second, genuinely distinct economy: the Madhya Pradesh High Court… / What deliberate planning can add to a legal-career decision / The Madhya Pradesh High Court is seated in Jabalpur rather than the state capital… / Many local families weigh an LLB and litigation path, a judicial-services exam attempt… / Judicial-services preparation is a genuine multi-year commitment that deserves the same… / A legal career in Jabalpur can mean litigation, judicial services, or roles supporting… / Clarity on litigation versus judicial-services versus corporate-legal paths early…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “The High Court and the legal profession: a…”: A second, genuinely distinct…; What deliberate planning can add…; The…
- Title attribute: The High Court and the legal profession: a second, genuinely…
- Caption (and keep the same point in HTML text): A real professional economy under its own pressures, and a genuine choice between it and the ordnance-manufacturing base.
**V3 — Asymmetrical pros-and-cons comparison** (place after the section “Jabalpur's areas point to different real decisions”)
- File: `career-counselling-in-jabalpur-asymmetrical-jabalpur-areas-point-different.webp` · 1600×1000 WebP under 200 KB
- Teaches: A useful local page should feel grounded in how people actually live and work across Jabalpur, not treat it…
- On-image text (about 25-40 words, shortened from the page; no new claims): The cantonment and factory belt carries the defence-manufacturing… / The High Court and civil-lines area carries the legal-profession… / Bhedaghat and the Narmada belt carry a real marble-rocks tourism…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “Jabalpur's areas point to different real decisions”: The cantonment and factory belt…; The High Court and…
- Title attribute: Jabalpur's areas point to different real decisions
- Caption (and keep the same point in HTML text): A useful local page should feel grounded in how people actually live and work across Jabalpur, not treat it as one flat generic location.
**V4 — Self-assessment checklist** (place after the section “Questions people ask before choosing career counselling in Jabalpur”)
- File: `career-counselling-in-jabalpur-self-questions-people-ask-before.webp` · 1600×1000 WebP under 200 KB
- Teaches: 01 Why choose online career counselling in Jabalpur instead of only looking for a nearby offline office?
- On-image text (about 25-40 words, shortened from the page; no new claims): 01 Why choose online career counselling in Jabalpur instead of only looking for… / Because the decision depends on your odds and skills, not on where the… / Online sessions let you speak from Jabalpur on your schedule and get advice…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Self-assessment checklist for “Questions people ask before choosing career…”: 01 Why choose online career…; Because the decision depends on…; Online sessions…
- Title attribute: Questions people ask before choosing career counselling in Jabalpur
- Caption (and keep the same point in HTML text): 01 Why choose online career counselling in Jabalpur instead of only looking for a nearby offline office?
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/locations/career-counselling-in-jaipur/

**H1:** Career counselling in Jaipur for practical clarity and stronger next steps  
**Type:** location · **Search priority:** P3 (0 clicks, 3 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `region-north.webp` is shared by 9 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `region-north.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 98% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-location-online.webp` has no title attribute and no caption.
7. Context visual reuse: `context-location-online.webp` appears on 48 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 96% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 96% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 97% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/region-north.webp` | 98% | eager/high | Northern India regional skyline illustration | NO | NO |
| `bofu/context-location-online.webp` | 98% | lazy | A local search and online guidance visual showing… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the shared city/region hero (uniqueness comes from the local explanatory visuals below). Add alt, title attribute and caption naming the city.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-in-jaipur-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Jaipur hands many people a genuinely different fork than most Indian cities: a large, globally connected…
- On-image text (about 25-40 words, shortened from the page; no new claims): Why this decision already feels important / The gems, jewellery, and heritage-tourism economy is Jaipur's first… / Sitapura and Mahindra World City: a second, genuinely different… / Jaipur's areas point to different real decisions / Choose the stronger starting point for your situation
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career counselling in Jaipur for…”: Why this decision already feels…; The gems, jewellery, and……
- Title attribute: At a glance: Career counselling in Jaipur for practical clarity and…
- Caption (and keep the same point in HTML text): Jaipur hands many people a genuinely different fork than most Indian cities: a large, globally connected gems-and-jewellery and…
**V2 — Chronological timeline** (place after the section “The gems, jewellery, and heritage-tourism economy is Jaipur's first…”)
- File: `career-counselling-in-jaipur-chronological-gems-jewellery-heritage-tourism.webp` · 1600×1000 WebP under 200 KB
- Teaches: No other city sibling carries this density of gems-export and heritage-tourism trade in one place - it…
- On-image text (about 25-40 words, shortened from the page; no new claims): Jaipur runs a genuinely large gems-and-jewellery and heritage-tourism… / Formal skill-building beats informal exposure alone / No other city sibling carries this density of gems-export and heritage-tourism… / 01 Jaipur runs a genuinely large gems-and-jewellery and heritage-tourism… / That creates a specific fork a generic guidance page never addresses: whether…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “The gems, jewellery, and heritage-tourism economy…”: Jaipur runs a genuinely large…; Formal skill-building beats…; No other city…
- Title attribute: The gems, jewellery, and heritage-tourism economy is Jaipur's first…
- Caption (and keep the same point in HTML text): No other city sibling carries this density of gems-export and heritage-tourism trade in one place - it deserves a specific answer, not a…
**V3 — Asymmetrical pros-and-cons comparison** (place after the section “Sitapura and Mahindra World City: a second, genuinely different…”)
- File: `career-counselling-in-jaipur-asymmetrical-sitapura-mahindra-world-city.webp` · 1600×1000 WebP under 200 KB
- Teaches: A real, growing professional economy under its own pressures, and a genuine choice between it and the…
- On-image text (about 25-40 words, shortened from the page; no new claims): A second, genuinely distinct economy: the growing Sitapura and… / What deliberate planning can add to an IT-ITES-career decision / Jaipur has developed a real IT-ITES base around the Sitapura industrial area and the… / Many local families now weigh a software, IT-services, or BPO-and-ITES career against the… / This corridor offers a genuinely different income and growth trajectory from the… / A career in this corridor can mean software development, IT-services delivery, or… / Clarity on software, IT-services, or BPO-and-ITES roles early prevents years of unfocused…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “Sitapura and Mahindra World City: a second…”: A second, genuinely distinct…; What deliberate planning can add……
- Title attribute: Sitapura and Mahindra World City: a second, genuinely different…
- Caption (and keep the same point in HTML text): A real, growing professional economy under its own pressures, and a genuine choice between it and the heritage-trade economy.
**V4 — Asymmetrical pros-and-cons comparison** (place after the section “Jaipur's areas point to different real decisions”)
- File: `career-counselling-in-jaipur-asymmetrical-jaipur-areas-point-different.webp` · 1600×1000 WebP under 200 KB
- Teaches: A useful local page should feel grounded in how people actually live and work across Jaipur, not treat it as…
- On-image text (about 25-40 words, shortened from the page; no new claims): Johari Bazaar and the Pink City carry the gems, jewellery, and… / Sitapura and Mahindra World City carry the IT-ITES economy / Vaishali Nagar, Malviya Nagar, and C-Scheme carry a mixed, growing… / Jagatpura and the Tonk Road corridor carry the education and…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “Jaipur's areas point to different real decisions”: Johari Bazaar and the Pink City…; Sitapura and Mahindra World…
- Title attribute: Jaipur's areas point to different real decisions
- Caption (and keep the same point in HTML text): A useful local page should feel grounded in how people actually live and work across Jaipur, not treat it as one flat generic location.
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/locations/career-counselling-in-jalandhar/

**H1:** Career Counselling in Jalandhar  
**Type:** location · **Search priority:** P3 (0 clicks, 3 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `region-north.webp` is shared by 9 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `region-north.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 98% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-location-online.webp` has no title attribute and no caption.
7. Context visual reuse: `context-location-online.webp` appears on 48 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 96% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 97% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 97% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/region-north.webp` | 98% | eager/high | Northern India regional skyline illustration | NO | NO |
| `bofu/context-location-online.webp` | 98% | lazy | A local search and online guidance visual showing… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the shared city/region hero (uniqueness comes from the local explanatory visuals below). Add alt, title attribute and caption naming the city.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-in-jalandhar-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Jalandhar sits at the centre of two forces most Doaba families weigh directly: it is India's leading…
- On-image text (about 25-40 words, shortened from the page; no new claims): Why this decision already feels heavier here / The Jalandhar career reality generic advice rarely names / Prepare for IELTS and go abroad, or build from Jalandhar - the… / Family sports-goods, leather, or hand-tools export business - a… / The LPU-Phagwara corridor runs a reverse flow through the same region
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career Counselling in Jalandhar”: Why this decision already feels…; The Jalandhar career reality……
- Title attribute: At a glance: Career Counselling in Jalandhar
- Caption (and keep the same point in HTML text): Jalandhar sits at the centre of two forces most Doaba families weigh directly: it is India's leading sports-goods manufacturing and export…
**V2 — Linear process chain or roadmap** (place after the section “Prepare for IELTS and go abroad, or build from Jalandhar - the…”)
- File: `career-counselling-in-jalandhar-linear-prepare-ielts-abroad-build.webp` · 1600×1000 WebP under 200 KB
- Teaches: On most Punjab city pages, the abroad pull is one option among several.
- On-image text (about 25-40 words, shortened from the page; no new claims): The pull toward IELTS and an abroad plan is the loudest voice in the… / Building from Jalandhar is a real option, not the fallback for people… / A Canada, Australia, or UK study-and-settle plan can look like the only sensible answer… / Genuine reasons to go exist: a program that is honestly stronger for your specific field… / The weaker reason is going because staying feels like the only option nobody around you… / Jalandhar's own sports-goods and hand-tools export economy, its position inside the… / A high-value skill portfolio built from right here can unlock high income opportunities…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Linear process chain or roadmap for “Prepare for IELTS and go abroad, or build from…”: The pull toward IELTS and an…; Building from Jalandhar is a real…; A…
- Title attribute: Prepare for IELTS and go abroad, or build from Jalandhar - the…
- Caption (and keep the same point in HTML text): On most Punjab city pages, the abroad pull is one option among several.
**V3 — Skill map** (place after the section “Family sports-goods, leather, or hand-tools export business - a…”)
- File: `career-counselling-in-jalandhar-skill-family-sports-goods-leather.webp` · 1600×1000 WebP under 200 KB
- Teaches: Jalandhar's export-manufacturing base is genuinely different from Ludhiana's hosiery-and-bicycle trade or…
- On-image text (about 25-40 words, shortened from the page; no new claims): A working export unit is a real asset - and joining it should be… / Stepping away does not have to mean walking away from the family… / A sports-goods, leather, or hand-tools unit that has run for a generation and already… / It can also be a smaller operation losing ground to larger, more organised manufacturers… / The honest question is whether the specific unit, and your specific role inside it, is… / A high-value skill portfolio in export operations, quality compliance, product design… / It can also stand on its own, opening high income opportunities in a different industry…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Skill map for “Family sports-goods, leather, or hand-tools…”: A working export unit is a real…; Stepping away does not have to…; A sports-goods, leather, or…
- Title attribute: Family sports-goods, leather, or hand-tools export business - a…
- Caption (and keep the same point in HTML text): Jalandhar's export-manufacturing base is genuinely different from Ludhiana's hosiery-and-bicycle trade or Rajkot's broader SME economy.
**V4 — Asymmetrical pros-and-cons comparison** (place after the section “How this approach differs from typical career counselling”)
- File: `career-counselling-in-jalandhar-asymmetrical-approach-differs-typical-career.webp` · 1600×1000 WebP under 200 KB
- Teaches: In a region built around an abroad-migration default on one side and a family export-business default on the…
- On-image text (about 25-40 words, shortened from the page; no new claims): In a region built around an abroad-migration default on one side and a family… / The comparison below shows what separates high-leverage guidance from both. / Others Shift Future Career School Others Choosing a counsellor only because…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “How this approach differs from typical career…”: In a region built around an…; The comparison below shows what……
- Title attribute: How this approach differs from typical career counselling
- Caption (and keep the same point in HTML text): In a region built around an abroad-migration default on one side and a family export-business default on the other, the real risk is advice…
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/locations/career-counselling-in-jalgaon/

**H1:** Career counselling in Jalgaon for practical clarity and stronger next steps  
**Type:** location · **Search priority:** P3 (0 clicks, 0 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `region-west.webp` is shared by 8 page(s); acceptable reuse.
4. Hero `region-west.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 98% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-location-online.webp` has no title attribute and no caption.
7. Context visual reuse: `context-location-online.webp` appears on 48 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 96% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 96% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 97% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/region-west.webp` | 98% | eager/high | Western India regional skyline illustration | NO | NO |
| `bofu/context-location-online.webp` | 98% | lazy | A local search and online guidance visual showing… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the shared city/region hero (uniqueness comes from the local explanatory visuals below). Add alt, title attribute and caption naming the city.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-in-jalgaon-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Jalgaon hands many people a genuinely different fork than most Indian cities: India's largest banana-growing…
- On-image text (about 25-40 words, shortened from the page; no new claims): Why this decision already feels important / The banana-trade agribusiness economy is Jalgaon's first real fork / The gold and bullion trade: a second, genuinely different economy / Jalgaon's areas point to different real decisions / Choose the stronger starting point for your situation
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career counselling in Jalgaon for…”: Why this decision already feels…; The banana-trade agribusiness……
- Title attribute: At a glance: Career counselling in Jalgaon for practical clarity and…
- Caption (and keep the same point in HTML text): Jalgaon hands many people a genuinely different fork than most Indian cities: India's largest banana-growing and trading belt along the…
**V2 — Asymmetrical pros-and-cons comparison** (place after the section “The gold and bullion trade: a second, genuinely different economy”)
- File: `career-counselling-in-jalgaon-asymmetrical-gold-bullion-trade-second.webp` · 1600×1000 WebP under 200 KB
- Teaches: A real family-trade economy under its own pressures, and a genuine choice between formalising the trade and…
- On-image text (about 25-40 words, shortened from the page; no new claims): A second, genuinely distinct economy: gold and bullion trading / What a skill-first path can add to the same trade / Jalgaon is widely known in the trade press as one of India's significant gold and bullion… / Family-run jewellery and bullion businesses often pass skill down informally, through… / Formal gemology, jewellery design, and bullion-trade compliance qualifications are… / Many young people from trade families are weighing whether to continue in the family… / Gemology, jewellery design, and CAD-based design skills can move a family business from…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “The gold and bullion trade: a second, genuinely…”: A second, genuinely distinct…; What a skill-first path can add……
- Title attribute: The gold and bullion trade: a second, genuinely different economy
- Caption (and keep the same point in HTML text): A real family-trade economy under its own pressures, and a genuine choice between formalising the trade and building a different skill path.
**V3 — Asymmetrical pros-and-cons comparison** (place after the section “Jalgaon's areas point to different real decisions”)
- File: `career-counselling-in-jalgaon-asymmetrical-jalgaon-areas-point-different.webp` · 1600×1000 WebP under 200 KB
- Teaches: A useful local page should feel grounded in how people actually live and work across Jalgaon district, not…
- On-image text (about 25-40 words, shortened from the page; no new claims): The Tapi-belt talukas carry the banana and agribusiness economy / Jalgaon city's markets carry the bullion and jewellery trade / The wider district carries cotton and general agriculture alongside…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “Jalgaon's areas point to different real decisions”: The Tapi-belt talukas carry the…; Jalgaon city's markets carry…
- Title attribute: Jalgaon's areas point to different real decisions
- Caption (and keep the same point in HTML text): A useful local page should feel grounded in how people actually live and work across Jalgaon district, not treat it as one flat generic…
**V4 — Self-assessment checklist** (place after the section “Questions people ask before choosing career counselling in Jalgaon”)
- File: `career-counselling-in-jalgaon-self-questions-people-ask-before.webp` · 1600×1000 WebP under 200 KB
- Teaches: 01 Why choose online career counselling in Jalgaon instead of only looking for a nearby offline office?
- On-image text (about 25-40 words, shortened from the page; no new claims): 01 Why choose online career counselling in Jalgaon instead of only looking for… / Because the question is about your options, not the counsellor's address. / An online session fits around shop hours and lets family join.
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Self-assessment checklist for “Questions people ask before choosing career…”: 01 Why choose online career…; Because the question is about…; An online session…
- Title attribute: Questions people ask before choosing career counselling in Jalgaon
- Caption (and keep the same point in HTML text): 01 Why choose online career counselling in Jalgaon instead of only looking for a nearby offline office?
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/locations/career-counselling-in-kalyan/

**H1:** Career counselling in Kalyan for practical clarity and stronger next steps  
**Type:** location · **Search priority:** P3 (0 clicks, 3 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `city-mumbai.webp` is shared by 7 page(s); acceptable reuse.
4. Hero `city-mumbai.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 98% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-location-online.webp` has no title attribute and no caption.
7. Context visual reuse: `context-location-online.webp` appears on 48 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 96% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 96% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 97% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/city-mumbai.webp` | 98% | eager/high | Mumbai skyline illustration for career… | NO | NO |
| `bofu/context-location-online.webp` | 98% | lazy | A local search and online guidance visual showing… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the shared city/region hero (uniqueness comes from the local explanatory visuals below). Add alt, title attribute and caption naming the city.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-in-kalyan-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Kalyan-Dombivli hands many people a genuinely different fork than most Indian cities: a historic…
- On-image text (about 25-40 words, shortened from the page; no new claims): Why this decision already feels important / The railway-junction trade and warehousing economy is Kalyan's first… / The Dombivli manufacturing belt: a second, genuinely different economy / Kalyan-Dombivli's areas point to different real decisions / Choose the stronger starting point for your situation
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career counselling in Kalyan for…”: Why this decision already feels…; The railway-junction trade and……
- Title attribute: At a glance: Career counselling in Kalyan for practical clarity and…
- Caption (and keep the same point in HTML text): Kalyan-Dombivli hands many people a genuinely different fork than most Indian cities: a historic railway-junction trade and warehousing…
**V2 — Asymmetrical pros-and-cons comparison** (place after the section “The Dombivli manufacturing belt: a second, genuinely different economy”)
- File: `career-counselling-in-kalyan-asymmetrical-dombivli-manufacturing-belt-second.webp` · 1600×1000 WebP under 200 KB
- Teaches: A real industrial economy under its own pressures, and a genuine choice between formalising shop-floor…
- On-image text (about 25-40 words, shortened from the page; no new claims): A second, genuinely distinct economy: the Dombivli chemical and… / What a skill-first path can add on top of the same belt / Dombivli MIDC is one of the older industrial estates in the Mumbai Metropolitan Region… / Many local families have decades of informal shop-floor or supervisory exposure to… / Formal diploma or ITI-level qualifications in chemical technology, industrial safety, or… / Environmental-compliance and safety-audit skill is a growing, genuinely in-demand niche… / Chemical-process, instrumentation, or industrial-safety diplomas can move a career from…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “The Dombivli manufacturing belt: a second…”: A second, genuinely distinct…; What a skill-first path can add……
- Title attribute: The Dombivli manufacturing belt: a second, genuinely different economy
- Caption (and keep the same point in HTML text): A real industrial economy under its own pressures, and a genuine choice between formalising shop-floor exposure and building a different…
**V3 — Asymmetrical pros-and-cons comparison** (place after the section “Kalyan-Dombivli's areas point to different real decisions”)
- File: `career-counselling-in-kalyan-asymmetrical-kalyan-dombivli-areas-point.webp` · 1600×1000 WebP under 200 KB
- Teaches: A useful local page should feel grounded in how people actually live and work across Kalyan-Dombivli, not…
- On-image text (about 25-40 words, shortened from the page; no new claims): Kalyan station and the old town carry the wholesale-trade and… / Dombivli carries the chemical and pharmaceutical manufacturing base / The newer residential belt carries the long-distance Mumbai-commute…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “Kalyan-Dombivli's areas point to different real…”: Kalyan station and the old town…; Dombivli carries the chemical…
- Title attribute: Kalyan-Dombivli's areas point to different real decisions
- Caption (and keep the same point in HTML text): A useful local page should feel grounded in how people actually live and work across Kalyan-Dombivli, not treat it as one flat generic…
**V4 — Self-assessment checklist** (place after the section “Questions people ask before choosing career counselling in Kalyan”)
- File: `career-counselling-in-kalyan-self-questions-people-ask-before.webp` · 1600×1000 WebP under 200 KB
- Teaches: 01 Why choose online career counselling in Kalyan instead of only looking for a nearby offline office?
- On-image text (about 25-40 words, shortened from the page; no new claims): 01 Why choose online career counselling in Kalyan instead of only looking for a… / Because proximity alone does not improve the decision. / Online guidance lets you start from home, shop, or plant floor without waiting…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Self-assessment checklist for “Questions people ask before choosing career…”: 01 Why choose online career…; Because proximity alone does not…; Online guidance…
- Title attribute: Questions people ask before choosing career counselling in Kalyan
- Caption (and keep the same point in HTML text): 01 Why choose online career counselling in Kalyan instead of only looking for a nearby offline office?
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/locations/career-counselling-in-kandivali/

**H1:** Career counselling in Kandivali for practical clarity and stronger next steps  
**Type:** location · **Search priority:** P3 (0 clicks, 0 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `city-mumbai.webp` is shared by 7 page(s); acceptable reuse.
4. Hero `city-mumbai.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 98% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-location-online.webp` has no title attribute and no caption.
7. Context visual reuse: `context-location-online.webp` appears on 48 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 96% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 96% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 97% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/city-mumbai.webp` | 98% | eager/high | Mumbai skyline illustration for career… | NO | NO |
| `bofu/context-location-online.webp` | 98% | lazy | A local search and online guidance visual showing… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the shared city/region hero (uniqueness comes from the local explanatory visuals below). Add alt, title attribute and caption naming the city.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-in-kandivali-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Kandivali hands many people a genuinely different fork than most Mumbai suburbs: the Charkop industrial…
- On-image text (about 25-40 words, shortened from the page; no new claims): Why this decision already feels important / The Charkop manufacturing-estate economy is Kandivali's first real… / The Western Express Highway office corridor: a second, genuinely… / Kandivali's areas point to different real decisions / Choose the stronger starting point for your situation
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career counselling in Kandivali for…”: Why this decision already feels…; The Charkop…
- Title attribute: At a glance: Career counselling in Kandivali for practical clarity…
- Caption (and keep the same point in HTML text): Kandivali hands many people a genuinely different fork than most Mumbai suburbs: the Charkop industrial estate's small-and-medium…
**V2 — Asymmetrical pros-and-cons comparison** (place after the section “The Western Express Highway office corridor: a second, genuinely…”)
- File: `career-counselling-in-kandivali-asymmetrical-western-express-highway-office.webp` · 1600×1000 WebP under 200 KB
- Teaches: A real, growing local economy, and a genuine choice between the manufacturing base and a corporate-office…
- On-image text (about 25-40 words, shortened from the page; no new claims): A second, genuinely distinct shift: the Western Express Highway… / What a skill-first path can add to either direction / The stretch of the Western Express Highway running through Kandivali, Malad, and Goregaon… / Kandivali's proximity to the Aarey Colony and Goregaon Film City area also brings some… / Many younger residents now weigh a stable corporate-office or IT-services career along… / This is a genuinely different local decision than either a pure-manufacturing town or a… / ITI, diploma, or engineering-trade skills can move a Charkop-linked career from…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “The Western Express Highway office corridor: a…”: A second, genuinely distinct…; What a skill-first path can add……
- Title attribute: The Western Express Highway office corridor: a second, genuinely…
- Caption (and keep the same point in HTML text): A real, growing local economy, and a genuine choice between the manufacturing base and a corporate-office career.
**V3 — Asymmetrical pros-and-cons comparison** (place after the section “Kandivali's areas point to different real decisions”)
- File: `career-counselling-in-kandivali-asymmetrical-kandivali-areas-point-different.webp` · 1600×1000 WebP under 200 KB
- Teaches: A useful local page should feel grounded in how people actually live and work across Kandivali, not treat it…
- On-image text (about 25-40 words, shortened from the page; no new claims): Charkop carries the SME-manufacturing economy / The Western Express Highway belt carries the corporate-office economy / The Aarey-Film-City-adjacent pockets carry a smaller media and…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “Kandivali's areas point to different real…”: Charkop carries the…; The Western Express Highway belt…; The…
- Title attribute: Kandivali's areas point to different real decisions
- Caption (and keep the same point in HTML text): A useful local page should feel grounded in how people actually live and work across Kandivali, not treat it as one flat generic location.
**V4 — Self-assessment checklist** (place after the section “Questions people ask before choosing career counselling in Kandivali”)
- File: `career-counselling-in-kandivali-self-questions-people-ask-before.webp` · 1600×1000 WebP under 200 KB
- Teaches: 01 Why choose online career counselling in Kandivali instead of only looking for a nearby offline office?
- On-image text (about 25-40 words, shortened from the page; no new claims): 01 Why choose online career counselling in Kandivali instead of only looking… / Because a Kandivali office adds travel without improving the advice. / Online fits around shifts and keeps the session on your decision.
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Self-assessment checklist for “Questions people ask before choosing career…”: 01 Why choose online career…; Because a Kandivali office adds…; Online fits…
- Title attribute: Questions people ask before choosing career counselling in Kandivali
- Caption (and keep the same point in HTML text): 01 Why choose online career counselling in Kandivali instead of only looking for a nearby offline office?
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/locations/career-counselling-in-kanpur/

**H1:** Career Counselling in Kanpur  
**Type:** location · **Search priority:** P3 (0 clicks, 14 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `region-north.webp` is shared by 9 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `region-north.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 98% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-location-online.webp` has no title attribute and no caption.
7. Context visual reuse: `context-location-online.webp` appears on 48 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 96% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 97% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 97% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/region-north.webp` | 98% | eager/high | Northern India regional skyline illustration | NO | NO |
| `bofu/context-location-online.webp` | 98% | lazy | A local search and online guidance visual showing… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the shared city/region hero (uniqueness comes from the local explanatory visuals below). Add alt, title attribute and caption naming the city.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-in-kanpur-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Kanpur earned its old name, the Manchester of the East, on the strength of the Jajmau leather cluster and a…
- On-image text (about 25-40 words, shortened from the page; no new claims): Why this decision already feels heavier here / The Kanpur career reality generic advice rarely names / If the Kanpur search already reflects a real fork, look at it… / Kanpur's own geography shapes which version of this decision you are… / How the right support can fit where you are right now
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career Counselling in Kanpur”: Why this decision already feels…; The Kanpur career reality generic……
- Title attribute: At a glance: Career Counselling in Kanpur
- Caption (and keep the same point in HTML text): Kanpur earned its old name, the Manchester of the East, on the strength of the Jajmau leather cluster and a cotton-mill economy that once…
**V2 — Decision tree** (place after the section “Kanpur's own geography shapes which version of this decision you are…”)
- File: `career-counselling-in-kanpur-decision-kanpur-own-geography-shapes.webp` · 1600×1000 WebP under 200 KB
- Teaches: A useful local page should recognise that a home near Jajmau, a hostel near the IIT Kanpur campus, and a…
- On-image text (about 25-40 words, shortened from the page; no new claims): Jajmau and Chamanganj: the leather-and-tannery belt / Kalyanpur: the IIT Kanpur campus corridor / Fazalganj and the Armapore estate: the defence-manufacturing cluster / The old mill belt around Kalpi Road and Fazalganj-Metool / Civil Lines and Mall Road: the city's professional and commercial core
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “Kanpur's own geography shapes which version of…”: Jajmau and Chamanganj: the…; Kalyanpur: the IIT Kanpur campus…; Fazalganj and the Armapore…
- Title attribute: Kanpur's own geography shapes which version of this decision you are…
- Caption (and keep the same point in HTML text): A useful local page should recognise that a home near Jajmau, a hostel near the IIT Kanpur campus, and a house near the old mill belt are…
**V3 — Asymmetrical pros-and-cons comparison** (place after the section “How this approach differs from typical career counselling”)
- File: `career-counselling-in-kanpur-asymmetrical-approach-differs-typical-career.webp` · 1600×1000 WebP under 200 KB
- Teaches: In a city split between a leather trade in genuine transition and an elite technical institute, the real risk…
- On-image text (about 25-40 words, shortened from the page; no new claims): In a city split between a leather trade in genuine transition and an elite… / The comparison below shows what separates high-leverage guidance from both. / Others Shift Future Career School Others Choosing a counsellor only because…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “How this approach differs from typical career…”: In a city split between a leather…; The comparison below shows…
- Title attribute: How this approach differs from typical career counselling
- Caption (and keep the same point in HTML text): In a city split between a leather trade in genuine transition and an elite technical institute, the real risk is advice that either…
**V4 — Self-assessment checklist** (place after the section “”)
- File: `career-counselling-in-kanpur-self-overview.webp` · 1600×1000 WebP under 200 KB
- Teaches: 01 Clarity on the specific fork pressing you right now Whether a compliance, design, or export-skill layer…
- On-image text (about 25-40 words, shortened from the page; no new claims): Clarity on the specific fork pressing you right now / A skill direction built for achieving earlier financial freedom… / Whether a compliance, design, or export-skill layer can genuinely carry a family leather… / Whether an IIT Kanpur attempt should be your only plan, or one strong option alongside a… / How an Ordnance Factory or defence-PSU role compares honestly against a private-sector… / What a realistic technical or professional path looks like now that the cotton-mill jobs… / A high-value skill portfolio suited to whichever track fits - leather-technology and…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Self-assessment checklist for “”: Clarity on the specific fork…; A skill direction built for…; Whether a compliance, design, or…
- Title attribute: 
- Caption (and keep the same point in HTML text): 01 Clarity on the specific fork pressing you right now Whether a compliance, design, or export-skill layer can genuinely carry a family…
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/locations/career-counselling-in-kolhapur/

**H1:** Career counselling in Kolhapur for practical clarity and stronger next steps  
**Type:** location · **Search priority:** P3 (0 clicks, 5 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `region-west.webp` is shared by 8 page(s); acceptable reuse.
4. Hero `region-west.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 98% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-location-online.webp` has no title attribute and no caption.
7. Context visual reuse: `context-location-online.webp` appears on 48 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 96% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 97% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 97% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/region-west.webp` | 98% | eager/high | Western India regional skyline illustration | NO | NO |
| `bofu/context-location-online.webp` | 98% | lazy | A local search and online guidance visual showing… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the shared city/region hero (uniqueness comes from the local explanatory visuals below). Add alt, title attribute and caption naming the city.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-in-kolhapur-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Kolhapur hands many people a genuinely different fork than any other Maharashtra city: a cooperative…
- On-image text (about 25-40 words, shortened from the page; no new claims): Why this decision already feels important / The cooperative sugar and jaggery economy is Kolhapur's real… / The Kolhapuri chappal trade: a real craft-versus-modern-career tension / Kushti, the akhada tradition, and a Chhatrapati princely heritage… / Kolhapur's areas point to different real decisions
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career counselling in Kolhapur for…”: Why this decision already feels…; The cooperative sugar and…
- Title attribute: At a glance: Career counselling in Kolhapur for practical clarity and…
- Caption (and keep the same point in HTML text): Kolhapur hands many people a genuinely different fork than any other Maharashtra city: a cooperative sugar-factory and jaggery-trade…
**V2 — Asymmetrical pros-and-cons comparison** (place after the section “The Kolhapuri chappal trade: a real craft-versus-modern-career tension”)
- File: `career-counselling-in-kolhapur-asymmetrical-kolhapuri-chappal-trade-real.webp` · 1600×1000 WebP under 200 KB
- Teaches: A GI-tagged handicraft economy under genuine pressure, and a genuine choice between modernising the craft and…
- On-image text (about 25-40 words, shortened from the page; no new claims): The craft side: a GI-tagged trade under real economic pressure / The modern-skill side: what a skill-first path can add to the same… / The Kolhapuri chappal is a Geographical Indication (GI) tagged, hand-stitched leather… / Skilled karagirs (artisans) often work within family workshops, with skill passed down… / Machine-made lookalikes and thinning margins put real pressure on artisan households… / Many young people in artisan families are weighing whether to continue the craft at all… / Design, branding, and e-commerce skills can turn an existing family craft business into a…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “The Kolhapuri chappal trade: a real…”: The craft side: a GI-tagged trade…; The modern-skill side: what a…; The…
- Title attribute: The Kolhapuri chappal trade: a real craft-versus-modern-career tension
- Caption (and keep the same point in HTML text): A GI-tagged handicraft economy under genuine pressure, and a genuine choice between modernising the craft and building a different skill…
**V3 — Mistakes versus smarter move panel** (place after the section “Kushti, the akhada tradition, and a Chhatrapati princely heritage…”)
- File: `career-counselling-in-kolhapur-mistakes-kushti-akhada-tradition-chhatrapati.webp` · 1600×1000 WebP under 200 KB
- Teaches: A genuine sports-career pathway question, set against a civic identity still shaped by royal patronage of…
- On-image text (about 25-40 words, shortened from the page; no new claims): Kushti and the akhada tradition create a genuine sports-career… / The Chhatrapati princely heritage still shapes the city's civic… / A genuine sports-career pathway question, set against a civic identity still… / 01 Kushti and the akhada tradition create a genuine sports-career question… / Families connected to an akhada face a real fork that has nothing to do with…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Mistakes versus smarter move panel for “Kushti, the akhada tradition, and a Chhatrapati…”: Kushti and the akhada tradition…; The Chhatrapati princely…
- Title attribute: Kushti, the akhada tradition, and a Chhatrapati princely heritage…
- Caption (and keep the same point in HTML text): A genuine sports-career pathway question, set against a civic identity still shaped by royal patronage of wrestling, craft, and cooperative…
**V4 — Asymmetrical pros-and-cons comparison** (place after the section “Kolhapur's areas point to different real decisions”)
- File: `career-counselling-in-kolhapur-asymmetrical-kolhapur-areas-point-different.webp` · 1600×1000 WebP under 200 KB
- Teaches: A useful local page should feel grounded in how people actually live and work across Kolhapur, not treat it…
- On-image text (about 25-40 words, shortened from the page; no new claims): The sugar-belt talukas carry the cooperative and agribusiness economy / Shivaji Udyamnagar and the Kolhapur MIDC carry a real, but genuinely… / Rankala and the old city carry the heritage, craft, and civic core
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “Kolhapur's areas point to different real decisions”: The sugar-belt talukas carry the…; Shivaji Udyamnagar and the……
- Title attribute: Kolhapur's areas point to different real decisions
- Caption (and keep the same point in HTML text): A useful local page should feel grounded in how people actually live and work across Kolhapur, not treat it as one flat generic location.
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/locations/career-counselling-in-kolkata/

**H1:** Career counselling in Kolkata for the stay-or-move decision, done with real clarity  
**Type:** location · **Search priority:** P3 (0 clicks, 6 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `city-kolkata.webp` is shared by 1 page(s); acceptable reuse.
4. Hero `city-kolkata.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 98% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-location-online.webp` has no title attribute and no caption.
7. Context visual reuse: `context-location-online.webp` appears on 48 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 96% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 97% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 97% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/city-kolkata.webp` | 98% | eager/high | Kolkata skyline illustration for career… | NO | NO |
| `bofu/context-location-online.webp` | 98% | lazy | A local search and online guidance visual showing… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the shared city/region hero (uniqueness comes from the local explanatory visuals below). Add alt, title attribute and caption naming the city.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-in-kolkata-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Kolkata's economy runs on a real mix - legacy jute, tea, and manufacturing strength, a large public-sector…
- On-image text (about 25-40 words, shortened from the page; no new claims): Why this decision already feels heavier than a normal career question / The Kolkata career reality behind the stay-or-move question / Academic prestige, family expectation, and skill-first direction are… / How practical career counselling should move this decision forward / Whichever stage you are at, the stay-or-move question needs a…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career counselling in Kolkata for…”: Why this decision already feels…; The Kolkata career reality…
- Title attribute: At a glance: Career counselling in Kolkata for the stay-or-move…
- Caption (and keep the same point in HTML text): Kolkata's economy runs on a real mix - legacy jute, tea, and manufacturing strength, a large public-sector and banking presence, and an IT…
**V2 — Asymmetrical pros-and-cons comparison** (place after the section “Academic prestige, family expectation, and skill-first direction are…”)
- File: `career-counselling-in-kolkata-asymmetrical-academic-prestige-family-expectation.webp` · 1600×1000 WebP under 200 KB
- Teaches: Kolkata's strong academic and public-sector culture is a real asset.
- On-image text (about 25-40 words, shortened from the page; no new claims): The academic-prestige track and the skill-first track are not the… / A government or PSU-track family expectation deserves an honest… / Kolkata's strong academic and public-sector culture is a real asset. / The question worth answering honestly is whether it is enough on its own, or… / 01 The academic-prestige track and the skill-first track are not the same thing…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “Academic prestige, family expectation, and…”: The academic-prestige track and…; A government or PSU-track family……
- Title attribute: Academic prestige, family expectation, and skill-first direction are…
- Caption (and keep the same point in HTML text): Kolkata's strong academic and public-sector culture is a real asset.
**V3 — Asymmetrical pros-and-cons comparison** (place after the section “Whichever stage you are at, the stay-or-move question needs a…”)
- File: `career-counselling-in-kolkata-asymmetrical-whichever-stage-stay-move.webp` · 1600×1000 WebP under 200 KB
- Teaches: Student or Early-Career For school, college, fresher, and early-direction decisions Useful when stream…
- On-image text (about 25-40 words, shortened from the page; no new claims): For school, college, fresher, and early-direction decisions / For stagnation, AI pressure, and salary-ceiling decisions / Student or Early-Career For school, college, fresher, and early-direction… / Working Professional For stagnation, AI pressure, and salary-ceiling decisions… / A clearer route toward achieving earlier financial freedom through stronger…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “Whichever stage you are at, the stay-or-move…”: For school, college, fresher, and…; For stagnation, AI pressure…
- Title attribute: Whichever stage you are at, the stay-or-move question needs a…
- Caption (and keep the same point in HTML text): Student or Early-Career For school, college, fresher, and early-direction decisions Useful when stream choices, course choices, skill…
**V4 — Self-assessment checklist** (place after the section “”)
- File: `career-counselling-in-kolkata-self-overview.webp` · 1600×1000 WebP under 200 KB
- Teaches: 01 Clarity on the decision that is actually creating pressure Whether staying in Kolkata, building…
- On-image text (about 25-40 words, shortened from the page; no new claims): Clarity on the decision that is actually creating pressure / Skill direction that works whether you stay or go / A practical next step you can actually act on / Whether staying in Kolkata, building remote-first, or relocating is the stronger move for… / What the honest income ceiling looks like if you stay purely on your current track / How to weigh a genuine desire to stay near family and community against a real income and… / Whether a government, bank, or PSU-track expectation still fits your actual goals
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Self-assessment checklist for “”: Clarity on the decision that is…; Skill direction that works…; A practical next step you can…
- Title attribute: 
- Caption (and keep the same point in HTML text): 01 Clarity on the decision that is actually creating pressure Whether staying in Kolkata, building remote-first, or relocating is the…
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/locations/career-counselling-in-kota/

**H1:** Career counselling in Kota for practical clarity and stronger next steps  
**Type:** location · **Search priority:** P3 (0 clicks, 4 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `region-north.webp` is shared by 9 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `region-north.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 98% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-location-online.webp` has no title attribute and no caption.
7. Context visual reuse: `context-location-online.webp` appears on 48 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 96% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 96% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 97% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/region-north.webp` | 98% | eager/high | Northern India regional skyline illustration | NO | NO |
| `bofu/context-location-online.webp` | 98% | lazy | A local search and online guidance visual showing… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the shared city/region hero (uniqueness comes from the local explanatory visuals below). Add alt, title attribute and caption naming the city.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-in-kota-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Kota hands many people a genuinely different fork than most Indian cities: the country's largest JEE and NEET…
- On-image text (about 25-40 words, shortened from the page; no new claims): Why this decision already feels important / The JEE/NEET coaching pipeline is Kota's first real fork / Kota Stone and Kota Doria: a second, genuinely different economy / Kota's areas point to different real decisions / Choose the stronger starting point for your situation
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career counselling in Kota for…”: Why this decision already feels…; The JEE/NEET coaching pipeline…
- Title attribute: At a glance: Career counselling in Kota for practical clarity and…
- Caption (and keep the same point in HTML text): Kota hands many people a genuinely different fork than most Indian cities: the country's largest JEE and NEET coaching-industry economy…
**V2 — Asymmetrical pros-and-cons comparison** (place after the section “Kota Stone and Kota Doria: a second, genuinely different economy”)
- File: `career-counselling-in-kota-asymmetrical-kota-stone-kota-doria.webp` · 1600×1000 WebP under 200 KB
- Teaches: Real trade and craft economies under their own pressures, and a genuine choice between formalising them and…
- On-image text (about 25-40 words, shortened from the page; no new claims): A second, genuinely distinct economy: Kota Stone and Kota Doria / What a skill-first path can add to either trade / Kota district is a major national source of Kota Stone, a limestone widely used in… / Kota Doria (Kota Sari) is a GI-tagged handloom textile craft with a genuine weaving and… / Families connected to either trade often pass skill down informally, through… / Formal skill in mining-equipment operation, export-quality control, textile design, or… / Mining-operations, quality-control, or export-compliance skill can move a stone business…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “Kota Stone and Kota Doria: a second, genuinely…”: A second, genuinely distinct…; What a skill-first path can add……
- Title attribute: Kota Stone and Kota Doria: a second, genuinely different economy
- Caption (and keep the same point in HTML text): Real trade and craft economies under their own pressures, and a genuine choice between formalising them and building a different skill path.
**V3 — Asymmetrical pros-and-cons comparison** (place after the section “Kota's areas point to different real decisions”)
- File: `career-counselling-in-kota-asymmetrical-kota-areas-point-different.webp` · 1600×1000 WebP under 200 KB
- Teaches: A useful local page should feel grounded in how people actually live and work across Kota, not treat it as…
- On-image text (about 25-40 words, shortened from the page; no new claims): The coaching hubs carry the exam-preparation and hostel economy / Ramganj Mandi and nearby belts carry the Kota Stone mining and export… / Older weaving neighbourhoods carry the Kota Doria handloom craft
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “Kota's areas point to different real decisions”: The coaching hubs carry the…; Ramganj Mandi and nearby belts……
- Title attribute: Kota's areas point to different real decisions
- Caption (and keep the same point in HTML text): A useful local page should feel grounded in how people actually live and work across Kota, not treat it as one flat generic location.
**V4 — Self-assessment checklist** (place after the section “Questions people ask before choosing career counselling in Kota”)
- File: `career-counselling-in-kota-self-questions-people-ask-before.webp` · 1600×1000 WebP under 200 KB
- Teaches: 01 Why choose online career counselling in Kota instead of only looking for a nearby offline office?
- On-image text (about 25-40 words, shortened from the page; no new claims): 01 Why choose online career counselling in Kota instead of only looking for a… / Because a coaching hub is built around one route; an online session can compare… / 02 I am currently preparing for JEE or NEET in Kota.
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Self-assessment checklist for “Questions people ask before choosing career…”: 01 Why choose online career…; Because a coaching hub is built…; 02 I am currently…
- Title attribute: Questions people ask before choosing career counselling in Kota
- Caption (and keep the same point in HTML text): 01 Why choose online career counselling in Kota instead of only looking for a nearby offline office?
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/locations/career-counselling-in-lucknow/

**H1:** Career counselling in Lucknow for practical clarity and stronger next steps  
**Type:** location · **Search priority:** P3 (0 clicks, 0 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `region-north.webp` is shared by 9 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `region-north.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 98% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-location-online.webp` has no title attribute and no caption.
7. Context visual reuse: `context-location-online.webp` appears on 48 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 96% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 96% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 97% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/region-north.webp` | 98% | eager/high | Northern India regional skyline illustration | NO | NO |
| `bofu/context-location-online.webp` | 98% | lazy | A local search and online guidance visual showing… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the shared city/region hero (uniqueness comes from the local explanatory visuals below). Add alt, title attribute and caption naming the city.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-in-lucknow-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Lucknow hands many people a genuinely different fork than most Indian cities: one of the country's largest…
- On-image text (about 25-40 words, shortened from the page; no new claims): Why this decision already feels important / The UPPSC and state-exam coaching economy is Lucknow's first real fork / Chikankari and the handicraft-export trade: a second, genuinely… / Lucknow's areas point to different real decisions / Choose the stronger starting point for your situation
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career counselling in Lucknow for…”: Why this decision already feels…; The UPPSC and state-exam…
- Title attribute: At a glance: Career counselling in Lucknow for practical clarity and…
- Caption (and keep the same point in HTML text): Lucknow hands many people a genuinely different fork than most Indian cities: one of the country's largest UP-specific UPPSC and…
**V2 — Asymmetrical pros-and-cons comparison** (place after the section “Chikankari and the handicraft-export trade: a second, genuinely…”)
- File: `career-counselling-in-lucknow-asymmetrical-chikankari-handicraft-export-trade.webp` · 1600×1000 WebP under 200 KB
- Teaches: A real professional economy under its own pressures, and a genuine choice between it and the state-exam…
- On-image text (about 25-40 words, shortened from the page; no new claims): A second, genuinely distinct economy: Chikankari embroidery and the… / What deliberate planning can add to a craft-economy decision / Lucknow is globally known for Chikankari, a fine hand-embroidery craft with a real… / Many local families run or work inside Chikankari workshops, export houses, and the wider… / This can mean design, production-supervision, quality-control, or export-business roles… / Growing this into a real career or business needs genuine skill-building in design… / Clarity on design, production, quality-control, or export-business roles early prevents…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “Chikankari and the handicraft-export trade: a…”: A second, genuinely distinct…; What deliberate planning can add……
- Title attribute: Chikankari and the handicraft-export trade: a second, genuinely…
- Caption (and keep the same point in HTML text): A real professional economy under its own pressures, and a genuine choice between it and the state-exam coaching pipeline.
**V3 — Asymmetrical pros-and-cons comparison** (place after the section “Lucknow's areas point to different real decisions”)
- File: `career-counselling-in-lucknow-asymmetrical-lucknow-areas-point-different.webp` · 1600×1000 WebP under 200 KB
- Teaches: A useful local page should feel grounded in how people actually live and work across Lucknow, not treat it as…
- On-image text (about 25-40 words, shortened from the page; no new claims): Aliganj and Indira Nagar carry the coaching-institute and… / Chowk and Aminabad carry the Chikankari and handicraft-export economy / The Kaiserbagh secretariat belt carries a distinct… / Gomti Nagar and Hazratganj carry the newer office, retail, and…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “Lucknow's areas point to different real decisions”: Aliganj and Indira Nagar carry…; Chowk and Aminabad carry the……
- Title attribute: Lucknow's areas point to different real decisions
- Caption (and keep the same point in HTML text): A useful local page should feel grounded in how people actually live and work across Lucknow, not treat it as one flat generic location.
**V4 — Self-assessment checklist** (place after the section “Questions people ask before choosing career counselling in Lucknow”)
- File: `career-counselling-in-lucknow-self-questions-people-ask-before.webp` · 1600×1000 WebP under 200 KB
- Teaches: 01 Why choose online career counselling in Lucknow instead of only looking for a nearby offline office?
- On-image text (about 25-40 words, shortened from the page; no new claims): 01 Why choose online career counselling in Lucknow instead of only looking for… / Because the exam-coaching ecosystem may not tell you when to stop. / Online sessions give a candid view on your own numbers.
- Numbers: A 1-on-1 session focused on the UPPSC-and-state-exam-versus-Chikankari-and-handicraft-export fork described above is currently Rs 250 for students and Rs 3000 for working professionals.
- Alt: Self-assessment checklist for “Questions people ask before choosing career…”: 01 Why choose online career…; Because the exam-coaching…; Online sessions give a…
- Title attribute: Questions people ask before choosing career counselling in Lucknow
- Caption (and keep the same point in HTML text): 01 Why choose online career counselling in Lucknow instead of only looking for a nearby offline office?
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/locations/career-counselling-in-ludhiana/

**H1:** Career Counselling in Ludhiana  
**Type:** location · **Search priority:** P3 (0 clicks, 14 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `region-north.webp` is shared by 9 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `region-north.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 98% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-location-online.webp` has no title attribute and no caption.
7. Context visual reuse: `context-location-online.webp` appears on 48 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 96% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 97% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 97% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/region-north.webp` | 98% | eager/high | Northern India regional skyline illustration | NO | NO |
| `bofu/context-location-online.webp` | 98% | lazy | A local search and online guidance visual showing… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the shared city/region hero (uniqueness comes from the local explanatory visuals below). Add alt, title attribute and caption naming the city.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-in-ludhiana-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Ludhiana is Punjab's largest industrial city, built on a genuinely rare mix of businesses - a hosiery and…
- On-image text (about 25-40 words, shortened from the page; no new claims): The Ludhiana career reality generic advice rarely names / Why this decision already feels heavier here / Family karobar, or an independent skill-first path - the decision… / Ludhiana's own geography shapes which version of this decision you… / How this approach differs from typical career counselling
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career Counselling in Ludhiana”: The Ludhiana career reality…; Why this decision already feels……
- Title attribute: At a glance: Career Counselling in Ludhiana
- Caption (and keep the same point in HTML text): Ludhiana is Punjab's largest industrial city, built on a genuinely rare mix of businesses - a hosiery and knitwear manufacturing base that…
**V2 — Linear process chain or roadmap** (place after the section “Family karobar, or an independent skill-first path - the decision…”)
- File: `career-counselling-in-ludhiana-linear-family-karobar-independent-skill.webp` · 1600×1000 WebP under 200 KB
- Teaches: Few Indian cities put the family-business succession question this close to the surface this early.
- On-image text (about 25-40 words, shortened from the page; no new claims): Joining the family karobar is not automatically the safe choice, and… / Building an independent, skill-first path does not have to mean… / A hosiery, knitwear, or bicycle-ancillary unit that has run profitably for two… / It can also be a business quietly losing ground to larger organised players and shifting… / The honest question is whether the specific unit, and your specific role in it, is… / A high-value skill portfolio in areas like export operations, quality and compliance… / It can also stand entirely on its own, opening high income opportunities in a different…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Linear process chain or roadmap for “Family karobar, or an independent skill-first…”: Joining the family karobar is not…; Building an independent…; A hosiery…
- Title attribute: Family karobar, or an independent skill-first path - the decision…
- Caption (and keep the same point in HTML text): Few Indian cities put the family-business succession question this close to the surface this early.
**V3 — Asymmetrical pros-and-cons comparison** (place after the section “How this approach differs from typical career counselling”)
- File: `career-counselling-in-ludhiana-asymmetrical-approach-differs-typical-career.webp` · 1600×1000 WebP under 200 KB
- Teaches: In a city built around a family-manufacturing default on one side and an agricultural-family default on the…
- On-image text (about 25-40 words, shortened from the page; no new claims): In a city built around a family-manufacturing default on one side and an… / The comparison below shows what separates high-leverage guidance from both. / Others Shift Future Career School Others Choosing a counsellor only because…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “How this approach differs from typical career…”: In a city built around a…; The comparison below shows what…; Others…
- Title attribute: How this approach differs from typical career counselling
- Caption (and keep the same point in HTML text): In a city built around a family-manufacturing default on one side and an agricultural-family default on the other, the real risk is advice…
**V4 — Self-assessment checklist** (place after the section “”)
- File: `career-counselling-in-ludhiana-self-overview.webp` · 1600×1000 WebP under 200 KB
- Teaches: 01 Clarity on the specific fork pressing you right now Whether joining, modernising, or stepping back from a…
- On-image text (about 25-40 words, shortened from the page; no new claims): Clarity on the specific fork pressing you right now / A skill direction built for achieving earlier financial freedom… / Whether joining, modernising, or stepping back from a family hosiery, knitwear, or… / Whether a PAU or agri-business path is a real fit for you, or whether it is a family… / A realistic comparison between building a local or remote-first skill-first career and a… / How to raise a hard family conversation about the karobar or the farm without it reading… / A high-value skill portfolio that strengthens a family manufacturing or agricultural…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Self-assessment checklist for “”: Clarity on the specific fork…; A skill direction built for…; Whether joining, modernising, or…
- Title attribute: 
- Caption (and keep the same point in HTML text): 01 Clarity on the specific fork pressing you right now Whether joining, modernising, or stepping back from a family hosiery, knitwear, or…
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/locations/career-counselling-in-mumbai/

**H1:** Career counselling in Mumbai for finance, media, and cost-of-living-aware career clarity  
**Type:** location · **Search priority:** P3 (0 clicks, 5 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `city-mumbai.webp` is shared by 7 page(s); acceptable reuse.
4. Hero `city-mumbai.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 98% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-location-online.webp` has no title attribute and no caption.
7. Context visual reuse: `context-location-online.webp` appears on 48 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 96% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 97% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 97% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/city-mumbai.webp` | 98% | eager/high | Mumbai skyline illustration for career… | NO | NO |
| `bofu/context-location-online.webp` | 98% | lazy | A local search and online guidance visual showing… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the shared city/region hero (uniqueness comes from the local explanatory visuals below). Add alt, title attribute and caption naming the city.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-in-mumbai-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Mumbai is India's financial capital through BKC, Nariman Point, and Lower Parel, and its only real…
- On-image text (about 25-40 words, shortened from the page; no new claims): Mumbai runs on finance and media at once, in a way no other Indian… / Which part of Mumbai you're deciding from changes the real trade-off / Mumbai's cost of living makes a wrong early decision compound faster / Why this decision already feels important / How practical guidance should move the decision forward
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career counselling in Mumbai for…”: Mumbai runs on finance and media…; Which part of Mumbai you're……
- Title attribute: At a glance: Career counselling in Mumbai for finance, media, and…
- Caption (and keep the same point in HTML text): Mumbai is India's financial capital through BKC, Nariman Point, and Lower Parel, and its only real entertainment and media capital through…
**V2 — Decision tree** (place after the section “Which part of Mumbai you're deciding from changes the real trade-off”)
- File: `career-counselling-in-mumbai-decision-part-mumbai-deciding-changes.webp` · 1600×1000 WebP under 200 KB
- Teaches: A useful local page should feel grounded in how people actually live, study, and work across Mumbai rather…
- On-image text (about 25-40 words, shortened from the page; no new claims): Bandra Kurla Complex (BKC) and Nariman Point: the financial and… / Andheri, Versova, and Goregaon: the production and media belt / Powai: IIT Bombay, tech offices, and a research-and-engineering… / Lower Parel and Worli: the redeveloped corporate and media-adjacent… / The extended suburbs and satellite towns: Thane, Navi Mumbai, and…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “Which part of Mumbai you're deciding from changes…”: Bandra Kurla Complex (BKC) and…; Andheri, Versova, and Goregaon…; Powai: IIT Bombay…
- Title attribute: Which part of Mumbai you're deciding from changes the real trade-off
- Caption (and keep the same point in HTML text): A useful local page should feel grounded in how people actually live, study, and work across Mumbai rather than pretending every user is…
**V3 — Mistakes versus smarter move panel** (place after the section “Mumbai's cost of living makes a wrong early decision compound faster”)
- File: `career-counselling-in-mumbai-mistakes-mumbai-cost-living-makes.webp` · 1600×1000 WebP under 200 KB
- Teaches: Rent, commute, and daily cost of living are not background details here - they are a real input into which…
- On-image text (about 25-40 words, shortened from the page; no new claims): A wrong career turn compounds faster here because the fixed costs… / The commute itself becomes a career-decision input, not just a… / High visible income examples can distort what "normal" progression… / The pressure to "make it in Mumbai" specifically, not just make a…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Mistakes versus smarter move panel for “Mumbai's cost of living makes a wrong early…”: A wrong career turn compounds…; The commute itself becomes a…; High…
- Title attribute: Mumbai's cost of living makes a wrong early decision compound faster
- Caption (and keep the same point in HTML text): Rent, commute, and daily cost of living are not background details here - they are a real input into which career decision actually makes…
**V4 — Decision tree** (place after the section “How the right support can fit where you are right now”)
- File: `career-counselling-in-mumbai-decision-right-support-fit-where.webp` · 1600×1000 WebP under 200 KB
- Teaches: Student or Early-Career For school, college, fresher, and early-direction decisions Useful when stream…
- On-image text (about 25-40 words, shortened from the page; no new claims): For school, college, fresher, and early-direction decisions / For stagnation, AI pressure, and salary-ceiling decisions / Student or Early-Career For school, college, fresher, and early-direction… / Working Professional For stagnation, AI pressure, and salary-ceiling decisions… / A clearer route toward achieving earlier financial freedom through stronger…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “How the right support can fit where you are right…”: For school, college, fresher, and…; For stagnation, AI pressure, and…; Student or…
- Title attribute: How the right support can fit where you are right now
- Caption (and keep the same point in HTML text): Student or Early-Career For school, college, fresher, and early-direction decisions Useful when stream choices, course choices, skill…
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/locations/career-counselling-in-nagpur/

**H1:** Career counselling in Nagpur for the stay-or-move decision  
**Type:** location · **Search priority:** P3 (0 clicks, 9 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `region-central.webp` is shared by 4 page(s); acceptable reuse.
4. Hero `region-central.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 98% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-location-online.webp` has no title attribute and no caption.
7. Context visual reuse: `context-location-online.webp` appears on 48 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 96% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 96% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 97% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/region-central.webp` | 98% | eager/high | Central India regional skyline illustration | NO | NO |
| `bofu/context-location-online.webp` | 98% | lazy | A local search and online guidance visual showing… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the shared city/region hero (uniqueness comes from the local explanatory visuals below). Add alt, title attribute and caption naming the city.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-in-nagpur-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Nagpur sits at the Zero Mile Center of India - the country's literal geographic middle - and Maharashtra's…
- On-image text (about 25-40 words, shortened from the page; no new claims): The Nagpur career reality generic tier-2-city advice misses / Stay and build from Nagpur, or move to a bigger metro - the decision… / How the right support can fit where you are right now / How practical career counselling should move you forward / How this approach differs from typical career counselling
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career counselling in Nagpur for the…”: The Nagpur career reality generic…; Stay and build from…
- Title attribute: At a glance: Career counselling in Nagpur for the stay-or-move…
- Caption (and keep the same point in HTML text): Nagpur sits at the Zero Mile Center of India - the country's literal geographic middle - and Maharashtra's own government treats it as a…
**V2 — Linear process chain or roadmap** (place after the section “Stay and build from Nagpur, or move to a bigger metro - the decision…”)
- File: `career-counselling-in-nagpur-linear-stay-build-nagpur-move.webp` · 1600×1000 WebP under 200 KB
- Teaches: This is the real fork behind most Nagpur searches, and it has no equivalent framing anywhere else on this…
- On-image text (about 25-40 words, shortened from the page; no new claims): Nagpur's job market has historically pushed its strongest graduates… / MIHAN and the IT-SEZ are changing the math, but unevenly and slowly / The real question is not Nagpur vs. a metro in general - it is your… / For most of the last two decades, a Nagpur engineering, commerce, or IT graduate aiming… / That pattern is real and still true for a large share of career paths today, not… / The honest starting point is naming which specific paths this still applies to, rather… / Boeing's MIHAN facility, TAL Manufacturing Solutions, and IT-SEZ campuses for Infosys…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Linear process chain or roadmap for “Stay and build from Nagpur, or move to a bigger…”: Nagpur's job market has…; MIHAN and the IT-SEZ are changing…; The real…
- Title attribute: Stay and build from Nagpur, or move to a bigger metro - the decision…
- Caption (and keep the same point in HTML text): This is the real fork behind most Nagpur searches, and it has no equivalent framing anywhere else on this site: whether MIHAN's growing…
**V3 — Asymmetrical pros-and-cons comparison** (place after the section “How this approach differs from typical career counselling”)
- File: `career-counselling-in-nagpur-asymmetrical-approach-differs-typical-career.webp` · 1600×1000 WebP under 200 KB
- Teaches: In a city where MIHAN's real growth and Nagpur's older reputation as a talent-exporter both hold some truth…
- On-image text (about 25-40 words, shortened from the page; no new claims): In a city where MIHAN's real growth and Nagpur's older reputation as a… / The comparison below shows what separates high-leverage guidance from that. / Others Shift Future Career School Others Choosing a counsellor only because…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “How this approach differs from typical career…”: In a city where MIHAN's real…; The comparison below shows what……
- Title attribute: How this approach differs from typical career counselling
- Caption (and keep the same point in HTML text): In a city where MIHAN's real growth and Nagpur's older reputation as a talent-exporter both hold some truth, the risk is generic advice…
**V4 — Self-assessment checklist** (place after the section “”)
- File: `career-counselling-in-nagpur-self-overview.webp` · 1600×1000 WebP under 200 KB
- Teaches: 01 Clarity on the specific fork pressing you right now Whether your skill direction already has a real…
- On-image text (about 25-40 words, shortened from the page; no new claims): Clarity on the specific fork pressing you right now / Skill direction built for what Nagpur's actual economy is hiring for / Whether your skill direction already has a real opening inside MIHAN, Nagpur's IT-SEZ, or… / Whether staying close to family and building from Nagpur, or moving to Pune, Mumbai, or… / Whether a government or administrative path genuinely fits you, given Nagpur's… / What a realistic income trajectory looks like on your current path over the next few… / A high-value skill portfolio aimed at MIHAN's aerospace, logistics, and IT-SEZ roles if…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Self-assessment checklist for “”: Clarity on the specific fork…; Skill direction built for what…; Whether your skill direction…
- Title attribute: 
- Caption (and keep the same point in HTML text): 01 Clarity on the specific fork pressing you right now Whether your skill direction already has a real opening inside MIHAN, Nagpur's…
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/locations/career-counselling-in-nashik/

**H1:** Career counselling in Nashik for a genuinely four-track economy  
**Type:** location · **Search priority:** P3 (0 clicks, 0 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `region-west.webp` is shared by 8 page(s); acceptable reuse.
4. Hero `region-west.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 98% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-location-online.webp` has no title attribute and no caption.
7. Context visual reuse: `context-location-online.webp` appears on 48 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 96% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 97% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 97% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/region-west.webp` | 98% | eager/high | Western India regional skyline illustration | NO | NO |
| `bofu/context-location-online.webp` | 98% | lazy | A local search and online guidance visual showing… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the shared city/region hero (uniqueness comes from the local explanatory visuals below). Add alt, title attribute and caption naming the city.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-in-nashik-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Nashik is India's wine capital - Sula Vineyards and a real, growing viticulture and wine-tourism industry…
- On-image text (about 25-40 words, shortened from the page; no new claims): The Nashik career reality a single wine-capital headline misses / Wine, aerospace, manufacturing, or pilgrimage tourism - Nashik's real… / How the right support can fit where you are right now / Nashik's geography shapes the decision, not just the commute / How practical career counselling should move you forward
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career counselling in Nashik for a…”: The Nashik career reality a…; Wine, aerospace, manufacturing……
- Title attribute: At a glance: Career counselling in Nashik for a genuinely four-track…
- Caption (and keep the same point in HTML text): Nashik is India's wine capital - Sula Vineyards and a real, growing viticulture and wine-tourism industry around Gangapur and Dindori …
**V2 — Chronological timeline** (place after the section “Wine, aerospace, manufacturing, or pilgrimage tourism - Nashik's real…”)
- File: `career-counselling-in-nashik-chronological-wine-aerospace-manufacturing-pilgrimage.webp` · 1600×1000 WebP under 200 KB
- Teaches: Most Maharashtra city pages on this site are built around one or two economic forks.
- On-image text (about 25-40 words, shortened from the page; no new claims): Viticulture, wine-tourism, and hospitality (Gangapur, Dindori, the… / HAL Ozar aerospace manufacturing and the wider defence-linked economy / Satpur-Ambad auto-ancillary manufacturing (Mahindra & Mahindra and… / Kumbh-season and pilgrimage-linked hospitality, event, and… / Vineyard agronomy, wine-making, cellar operations, and export/quality-compliance roles as… / Hospitality, guest-experience, and event-management roles built around vineyard resorts… / A genuinely seasonal and hospitality-weighted income pattern that rewards a different…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “Wine, aerospace, manufacturing, or pilgrimage…”: Viticulture, wine-tourism, and…; HAL Ozar aerospace manufacturing…; Satpur-Ambad…
- Title attribute: Wine, aerospace, manufacturing, or pilgrimage tourism - Nashik's real…
- Caption (and keep the same point in HTML text): Most Maharashtra city pages on this site are built around one or two economic forks.
**V3 — Asymmetrical pros-and-cons comparison** (place after the section “How this approach differs from typical career counselling”)
- File: `career-counselling-in-nashik-asymmetrical-approach-differs-typical-career.webp` · 1600×1000 WebP under 200 KB
- Teaches: In a city where four genuinely different industries all have a real claim on your attention, the risk is…
- On-image text (about 25-40 words, shortened from the page; no new claims): In a city where four genuinely different industries all have a real claim on… / The comparison below shows what separates high-leverage guidance from that. / Others Shift Future Career School Others Choosing a counsellor only because…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “How this approach differs from typical career…”: In a city where four genuinely…; The comparison below shows what……
- Title attribute: How this approach differs from typical career counselling
- Caption (and keep the same point in HTML text): In a city where four genuinely different industries all have a real claim on your attention, the risk is generic advice that only knows one…
**V4 — Self-assessment checklist** (place after the section “”)
- File: `career-counselling-in-nashik-self-overview.webp` · 1600×1000 WebP under 200 KB
- Teaches: 01 Clarity on which of Nashik's real tracks actually fits you Whether viticulture, wine-making, or…
- On-image text (about 25-40 words, shortened from the page; no new claims): Clarity on which of Nashik's real tracks actually fits you / Skill direction built for what Nashik's actual economy is hiring for / Whether viticulture, wine-making, or wine-tourism hospitality genuinely fits your… / Whether HAL's Ozar aerospace-manufacturing track is a realistic, worthwhile target given… / Whether pilgrimage- and event-linked hospitality work is a genuine direction or only a… / What a realistic income trajectory looks like on your chosen track, given how… / A high-value skill portfolio aimed at HAL's aerospace-manufacturing pipeline or the…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Self-assessment checklist for “”: Clarity on which of Nashik's real…; Skill direction built for what…; Whether viticulture, wine-making…
- Title attribute: 
- Caption (and keep the same point in HTML text): 01 Clarity on which of Nashik's real tracks actually fits you Whether viticulture, wine-making, or wine-tourism hospitality genuinely fits…
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/locations/career-counselling-in-navi-mumbai/

**H1:** Career counselling in Navi Mumbai for JNPT, logistics, and airport-led growth decisions  
**Type:** location · **Search priority:** P3 (0 clicks, 0 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `city-mumbai.webp` is shared by 7 page(s); acceptable reuse.
4. Hero `city-mumbai.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 98% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-location-online.webp` has no title attribute and no caption.
7. Context visual reuse: `context-location-online.webp` appears on 48 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 96% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 97% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 97% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/city-mumbai.webp` | 98% | eager/high | Mumbai skyline illustration for career… | NO | NO |
| `bofu/context-location-online.webp` | 98% | lazy | A local search and online guidance visual showing… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the shared city/region hero (uniqueness comes from the local explanatory visuals below). Add alt, title attribute and caption naming the city.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-in-navi-mumbai-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Navi Mumbai runs on a genuinely different economy than Mumbai or Thane: Jawaharlal Nehru Port anchors a real…
- On-image text (about 25-40 words, shortened from the page; no new claims): JNPT builds a real logistics, customs, and EXIM career economy no… / Navi Mumbai's civic identity is planned, not organic - and that… / The new international airport is a growth story happening right now… / Airoli and Ghansoli carry a genuine IT-SEZ and BPO economy of their… / Which part of Navi Mumbai you're deciding from changes the real…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career counselling in Navi Mumbai…”: JNPT builds a real logistics…; Navi Mumbai's civic identity is……
- Title attribute: At a glance: Career counselling in Navi Mumbai for JNPT, logistics…
- Caption (and keep the same point in HTML text): Navi Mumbai runs on a genuinely different economy than Mumbai or Thane: Jawaharlal Nehru Port anchors a real, large logistics, customs, and…
**V2 — Linear process chain or roadmap** (place after the section “JNPT builds a real logistics, customs, and EXIM career economy no…”)
- File: `career-counselling-in-navi-mumbai-linear-jnpt-builds-real-logistics.webp` · 1600×1000 WebP under 200 KB
- Teaches: A useful page for this city has to speak to the port economy specifically - not treat Navi Mumbai as a…
- On-image text (about 25-40 words, shortened from the page; no new claims): JNPT anchors a real, large logistics and EXIM career economy that no… / This is a certification- and license-driven economy, not a… / A dedicated logistics-park and warehousing layer has grown up around…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Linear process chain or roadmap for “JNPT builds a real logistics, customs, and EXIM…”: JNPT anchors a real, large…; This is a certification- and…; A dedicated…
- Title attribute: JNPT builds a real logistics, customs, and EXIM career economy no…
- Caption (and keep the same point in HTML text): A useful page for this city has to speak to the port economy specifically - not treat Navi Mumbai as a generic Mumbai-region suburb.
**V3 — Linear process chain or roadmap** (place after the section “Navi Mumbai's civic identity is planned, not organic - and that…”)
- File: `career-counselling-in-navi-mumbai-linear-navi-mumbai-civic-identity.webp` · 1600×1000 WebP under 200 KB
- Teaches: CIDCO built this city deliberately as a satellite to Mumbai, which gives Navi Mumbai a genuinely different…
- On-image text (about 25-40 words, shortened from the page; no new claims): Navi Mumbai was deliberately planned by CIDCO, not grown organically… / That planned-city identity makes Navi Mumbai a younger, more… / A genuine wholesale-trade economy sits inside the planned-city…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Linear process chain or roadmap for “Navi Mumbai's civic identity is planned, not…”: Navi Mumbai was deliberately…; That planned-city identity makes…; A…
- Title attribute: Navi Mumbai's civic identity is planned, not organic - and that…
- Caption (and keep the same point in HTML text): CIDCO built this city deliberately as a satellite to Mumbai, which gives Navi Mumbai a genuinely different backstory, population character…
**V4 — Decision tree** (place after the section “Which part of Navi Mumbai you're deciding from changes the real…”)
- File: `career-counselling-in-navi-mumbai-decision-part-navi-mumbai-deciding.webp` · 1600×1000 WebP under 200 KB
- Teaches: A useful local page should feel grounded in how people actually live, study, and work across Navi Mumbai's…
- On-image text (about 25-40 words, shortened from the page; no new claims): Vashi and Nerul: the original CBD and civic core / CBD Belapur: the administrative seat / Airoli and Ghansoli: the IT-SEZ and BPO corridor / Kharghar: the fast-growing residential and education node / Panvel, Ulwe, and Dronagiri: the airport, expressway, and logistics…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “Which part of Navi Mumbai you're deciding from…”: Vashi and Nerul: the original CBD…; CBD Belapur: the administrative…; Airoli and Ghansoli…
- Title attribute: Which part of Navi Mumbai you're deciding from changes the real…
- Caption (and keep the same point in HTML text): A useful local page should feel grounded in how people actually live, study, and work across Navi Mumbai's planned nodes rather than…
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/locations/career-counselling-in-noida/

**H1:** Career Counselling in Noida  
**Type:** location · **Search priority:** P3 (0 clicks, 0 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `city-delhi.webp` is shared by 6 page(s); acceptable reuse.
4. Hero `city-delhi.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 98% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-location-online.webp` has no title attribute and no caption.
7. Context visual reuse: `context-location-online.webp` appears on 48 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 96% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 96% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 97% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/city-delhi.webp` | 98% | eager/high | Delhi skyline illustration for career counselling… | NO | NO |
| `bofu/context-location-online.webp` | 98% | lazy | A local search and online guidance visual showing… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the shared city/region hero (uniqueness comes from the local explanatory visuals below). Add alt, title attribute and caption naming the city.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-in-noida-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Noida runs on an economy most career advice never names - Samsung's mobile-phone manufacturing plant, one of…
- On-image text (about 25-40 words, shortened from the page; no new claims): The Noida career reality generic advice rarely names / Noida's own geography shapes which version of this decision you are in / Why online career counselling can still be the stronger route from… / Why this decision already feels heavier here / How practical career counselling should move you forward
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career Counselling in Noida”: The Noida career reality generic…; Noida's own geography shapes…; Why…
- Title attribute: At a glance: Career Counselling in Noida
- Caption (and keep the same point in HTML text): Noida runs on an economy most career advice never names - Samsung's mobile-phone manufacturing plant, one of the largest in the world…
**V2 — Decision tree** (place after the section “Noida's own geography shapes which version of this decision you are in”)
- File: `career-counselling-in-noida-decision-noida-own-geography-shapes.webp` · 1600×1000 WebP under 200 KB
- Teaches: A useful local page should recognise that a flat near the electronics-manufacturing belt, a desk near Film…
- On-image text (about 25-40 words, shortened from the page; no new claims): The Samsung and electronics-SEZ belt: Sector 81 and the wider… / Film City, Sector 16A: North India's television and media-production… / Sector 62, Sector 16, and Sector 58: the IT-BPO office corridor / Amity University and the Jaypee Institute campus belt / Greater Noida and the Buddh International Circuit: an automotive and…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “Noida's own geography shapes which version of…”: The Samsung and electronics-SEZ…; Film City, Sector 16A: North…; Sector 62, Sector 16, and…
- Title attribute: Noida's own geography shapes which version of this decision you are in
- Caption (and keep the same point in HTML text): A useful local page should recognise that a flat near the electronics-manufacturing belt, a desk near Film City, and a hostel near Amity or…
**V3 — Asymmetrical pros-and-cons comparison** (place after the section “How this approach differs from typical career counselling”)
- File: `career-counselling-in-noida-asymmetrical-approach-differs-typical-career.webp` · 1600×1000 WebP under 200 KB
- Teaches: In a city with a genuine electronics-manufacturing and media-production economy that most advice skips over…
- On-image text (about 25-40 words, shortened from the page; no new claims): In a city with a genuine electronics-manufacturing and media-production economy… / The comparison below shows what separates high-leverage guidance from that… / Others Shift Future Career School Others Choosing a counsellor only because…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “How this approach differs from typical career…”: In a city with a genuine…; The comparison below shows what…; Others…
- Title attribute: How this approach differs from typical career counselling
- Caption (and keep the same point in HTML text): In a city with a genuine electronics-manufacturing and media-production economy that most advice skips over, the real risk is guidance that…
**V4 — Self-assessment checklist** (place after the section “”)
- File: `career-counselling-in-noida-self-overview.webp` · 1600×1000 WebP under 200 KB
- Teaches: 01 Clarity on the specific fork pressing you right now Whether an electronics-manufacturing…
- On-image text (about 25-40 words, shortened from the page; no new claims): Clarity on the specific fork pressing you right now / A skill direction built for achieving earlier financial freedom… / Whether an electronics-manufacturing, production-engineering, or supply-chain role fits… / How a Film City media or post-production opportunity compares honestly against a more… / Whether a Sector 62 or Sector 16 IT-BPO offer or a Gurgaon GCC role is the stronger move… / How an Amity or Jaypee campus placement fits against the wider set of local and NCR… / A high-value skill portfolio suited to whichever track fits - hardware and production…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Self-assessment checklist for “”: Clarity on the specific fork…; A skill direction built for…; Whether an…
- Title attribute: 
- Caption (and keep the same point in HTML text): 01 Clarity on the specific fork pressing you right now Whether an electronics-manufacturing, production-engineering, or supply-chain role…
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/locations/career-counselling-in-panchkula/

**H1:** Career counselling in Panchkula for practical clarity and stronger next steps  
**Type:** location · **Search priority:** P3 (0 clicks, 0 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `region-north.webp` is shared by 9 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `region-north.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 98% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-location-online.webp` has no title attribute and no caption.
7. Context visual reuse: `context-location-online.webp` appears on 48 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 96% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 96% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 97% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/region-north.webp` | 98% | eager/high | Northern India regional skyline illustration | NO | NO |
| `bofu/context-location-online.webp` | 98% | lazy | A local search and online guidance visual showing… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the shared city/region hero (uniqueness comes from the local explanatory visuals below). Add alt, title attribute and caption naming the city.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-in-panchkula-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Panchkula hands many people a genuinely different fork than most Indian cities: a national-games-grade…
- On-image text (about 25-40 words, shortened from the page; no new claims): Why this decision already feels important / The sports-training infrastructure economy is Panchkula's first real… / Tricity office work and pilgrimage-tourism: two more genuinely… / Panchkula's areas point to different real decisions / Choose the stronger starting point for your situation
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career counselling in Panchkula for…”: Why this decision already feels…; The sports-training…; Tricity…
- Title attribute: At a glance: Career counselling in Panchkula for practical clarity…
- Caption (and keep the same point in HTML text): Panchkula hands many people a genuinely different fork than most Indian cities: a national-games-grade sports-training infrastructure and…
**V2 — Asymmetrical pros-and-cons comparison** (place after the section “Tricity office work and pilgrimage-tourism: two more genuinely…”)
- File: `career-counselling-in-panchkula-asymmetrical-tricity-office-work-pilgrimage.webp` · 1600×1000 WebP under 200 KB
- Teaches: Real, distinct local bases under their own pressures, and a genuine choice between them and a sporting…
- On-image text (about 25-40 words, shortened from the page; no new claims): A second, genuinely distinct economy: Tricity office work alongside… / What a skill-first path can add to either economy / Panchkula functions as a sector-planned satellite of the Chandigarh Tricity, with a… / The Mata Mansa Devi temple complex draws a genuine, steady pilgrimage-tourism footfall… / Panchkula also sits on the route toward Pinjore and Kalka, the gateway town for the… / Many local families weigh a stable Tricity office job against a family business built… / IT, ITES, or general office-skill certifications matter for the Tricity job market as…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “Tricity office work and pilgrimage-tourism: two…”: A second, genuinely distinct…; What a skill-first path can add……
- Title attribute: Tricity office work and pilgrimage-tourism: two more genuinely…
- Caption (and keep the same point in HTML text): Real, distinct local bases under their own pressures, and a genuine choice between them and a sporting pathway.
**V3 — Asymmetrical pros-and-cons comparison** (place after the section “Panchkula's areas point to different real decisions”)
- File: `career-counselling-in-panchkula-asymmetrical-panchkula-areas-point-different.webp` · 1600×1000 WebP under 200 KB
- Teaches: A useful local page should feel grounded in how people actually live and work across Panchkula, not treat it…
- On-image text (about 25-40 words, shortened from the page; no new claims): The stadium sector carries the sports-training and academy economy / The planned office sectors carry the Tricity job-market economy / Mansa Devi Complex and the Kalka route carry the pilgrimage and…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “Panchkula's areas point to different real…”: The stadium sector carries the…; The planned office sectors carry……
- Title attribute: Panchkula's areas point to different real decisions
- Caption (and keep the same point in HTML text): A useful local page should feel grounded in how people actually live and work across Panchkula, not treat it as one flat generic location.
**V4 — Self-assessment checklist** (place after the section “Questions people ask before choosing career counselling in Panchkula”)
- File: `career-counselling-in-panchkula-self-questions-people-ask-before.webp` · 1600×1000 WebP under 200 KB
- Teaches: 01 Why choose online career counselling in Panchkula instead of only looking for a nearby offline office?
- On-image text (about 25-40 words, shortened from the page; no new claims): 01 Why choose online career counselling in Panchkula instead of only looking… / Because training and work already fill your day; online sessions fit around… / 02 I train at one of the sports academies in Panchkula.
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Self-assessment checklist for “Questions people ask before choosing career…”: 01 Why choose online career…; Because training and work already…; 02 I train at…
- Title attribute: Questions people ask before choosing career counselling in Panchkula
- Caption (and keep the same point in HTML text): 01 Why choose online career counselling in Panchkula instead of only looking for a nearby offline office?
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/locations/career-counselling-in-paschim-vihar/

**H1:** Career counselling in Paschim Vihar for practical clarity and stronger next steps  
**Type:** location · **Search priority:** P3 (0 clicks, 4 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `city-delhi.webp` is shared by 6 page(s); acceptable reuse.
4. Hero `city-delhi.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 98% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-location-online.webp` has no title attribute and no caption.
7. Context visual reuse: `context-location-online.webp` appears on 48 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 96% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 96% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 97% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/city-delhi.webp` | 98% | eager/high | Delhi skyline illustration for career counselling… | NO | NO |
| `bofu/context-location-online.webp` | 98% | lazy | A local search and online guidance visual showing… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the shared city/region hero (uniqueness comes from the local explanatory visuals below). Add alt, title attribute and caption naming the city.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-in-paschim-vihar-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Paschim Vihar hands many people a genuinely different fork than most Delhi neighbourhoods: a strong…
- On-image text (about 25-40 words, shortened from the page; no new claims): Why this decision already feels important / The trading-family business culture is Paschim Vihar's first real fork / Defence-services aspiration near the Cantonment: a second, genuinely… / Paschim Vihar's areas point to different real decisions / Choose the stronger starting point for your situation
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career counselling in Paschim Vihar…”: Why this decision already feels…; The trading-family business……
- Title attribute: At a glance: Career counselling in Paschim Vihar for practical…
- Caption (and keep the same point in HTML text): Paschim Vihar hands many people a genuinely different fork than most Delhi neighbourhoods: a strong trading-family business culture linked…
**V2 — Asymmetrical pros-and-cons comparison** (place after the section “Defence-services aspiration near the Cantonment: a second, genuinely…”)
- File: `career-counselling-in-paschim-vihar-asymmetrical-defence-services-aspiration-near.webp` · 1600×1000 WebP under 200 KB
- Teaches: A real, respected local pattern, and a genuine choice between it and a trading-family business path.
- On-image text (about 25-40 words, shortened from the page; no new claims): A second, genuinely distinct pattern: defence-services aspiration… / What deliberate planning can add to either path / Paschim Vihar's proximity to the Delhi Cantonment area has built a real local pattern of… / Preparing seriously for a defence-services entry is a genuine multi-year commitment… / Some families weigh a defence-services attempt against continuing or formalising a family… / A defence-services path is a real, respected option, but it deserves the same fit-based… / A structured defence-services preparation plan benefits from an honest look at physical…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “Defence-services aspiration near the Cantonment…”: A second, genuinely distinct…; What deliberate planning can add……
- Title attribute: Defence-services aspiration near the Cantonment: a second, genuinely…
- Caption (and keep the same point in HTML text): A real, respected local pattern, and a genuine choice between it and a trading-family business path.
**V3 — Asymmetrical pros-and-cons comparison** (place after the section “Paschim Vihar's areas point to different real decisions”)
- File: `career-counselling-in-paschim-vihar-asymmetrical-paschim-vihar-areas-point.webp` · 1600×1000 WebP under 200 KB
- Teaches: A useful local page should feel grounded in how people actually live and work across Paschim Vihar, not treat…
- On-image text (about 25-40 words, shortened from the page; no new claims): The market-adjacent pockets carry the trading-family business economy / The Cantonment-adjacent belt carries the defence-services aspiration / The residential core carries a wider middle-class services economy
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “Paschim Vihar's areas point to different real…”: The market-adjacent pockets carry…; The Cantonment-adjacent belt……
- Title attribute: Paschim Vihar's areas point to different real decisions
- Caption (and keep the same point in HTML text): A useful local page should feel grounded in how people actually live and work across Paschim Vihar, not treat it as one flat generic…
**V4 — Self-assessment checklist** (place after the section “Questions people ask before choosing career counselling in Paschim…”)
- File: `career-counselling-in-paschim-vihar-self-questions-people-ask-before.webp` · 1600×1000 WebP under 200 KB
- Teaches: 01 Why choose online career counselling in Paschim Vihar instead of only looking for a nearby offline office?
- On-image text (about 25-40 words, shortened from the page; no new claims): 01 Why choose online career counselling in Paschim Vihar instead of only… / Because the decision depends on your odds and options, not on proximity. / Online fits around preparation or shop hours.
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Self-assessment checklist for “Questions people ask before choosing career…”: 01 Why choose online career…; Because the decision depends on…; Online fits…
- Title attribute: Questions people ask before choosing career counselling in Paschim…
- Caption (and keep the same point in HTML text): 01 Why choose online career counselling in Paschim Vihar instead of only looking for a nearby offline office?
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/locations/career-counselling-in-pitampura/

**H1:** Career counselling in Pitampura for practical clarity and stronger next steps  
**Type:** location · **Search priority:** P3 (0 clicks, 2 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `city-delhi.webp` is shared by 6 page(s); acceptable reuse.
4. Hero `city-delhi.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 98% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-location-online.webp` has no title attribute and no caption.
7. Context visual reuse: `context-location-online.webp` appears on 48 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 96% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 96% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 97% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/city-delhi.webp` | 98% | eager/high | Delhi skyline illustration for career counselling… | NO | NO |
| `bofu/context-location-online.webp` | 98% | lazy | A local search and online guidance visual showing… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the shared city/region hero (uniqueness comes from the local explanatory visuals below). Add alt, title attribute and caption naming the city.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-in-pitampura-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Pitampura hands many people a genuinely different fork than most Delhi neighbourhoods: the Netaji Subhash…
- On-image text (about 25-40 words, shortened from the page; no new claims): Why this decision already feels important / The NSP electronics-and-retail trade economy is Pitampura's first… / NSP's corporate-office economy: a second, genuinely different shift / Pitampura's areas point to different real decisions / Choose the stronger starting point for your situation
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career counselling in Pitampura for…”: Why this decision already feels…; The NSP…
- Title attribute: At a glance: Career counselling in Pitampura for practical clarity…
- Caption (and keep the same point in HTML text): Pitampura hands many people a genuinely different fork than most Delhi neighbourhoods: the Netaji Subhash Place electronics-and-retail…
**V2 — Asymmetrical pros-and-cons comparison** (place after the section “NSP's corporate-office economy: a second, genuinely different shift”)
- File: `career-counselling-in-pitampura-asymmetrical-nsp-corporate-office-economy.webp` · 1600×1000 WebP under 200 KB
- Teaches: A real, growing local economy, and a genuine choice between the retail-trade base and a corporate-office…
- On-image text (about 25-40 words, shortened from the page; no new claims): A second, genuinely distinct shift: NSP’s growing corporate-office… / What a skill-first path can add to either direction / Alongside its retail-trade identity, NSP has grown a real cluster of corporate office… / Pitampura’s TV Tower and surrounding planned-sector layout have supported this shift into… / Many younger residents now weigh a stable corporate-office career at NSP against… / This mixed identity is a genuinely different local decision than a purely retail-market… / Retail-management, supply-chain, or e-commerce skills can meaningfully strengthen a…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “NSP's corporate-office economy: a second…”: A second, genuinely distinct…; What a skill-first path can add……
- Title attribute: NSP's corporate-office economy: a second, genuinely different shift
- Caption (and keep the same point in HTML text): A real, growing local economy, and a genuine choice between the retail-trade base and a corporate-office career.
**V3 — Asymmetrical pros-and-cons comparison** (place after the section “Pitampura's areas point to different real decisions”)
- File: `career-counselling-in-pitampura-asymmetrical-pitampura-areas-point-different.webp` · 1600×1000 WebP under 200 KB
- Teaches: A useful local page should feel grounded in how people actually live and work across Pitampura, not treat it…
- On-image text (about 25-40 words, shortened from the page; no new claims): Netaji Subhash Place carries the electronics-and-retail trade economy / NSP’s office towers carry the corporate and services economy / The residential sectors around the TV Tower carry a wider…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “Pitampura's areas point to different real…”: Netaji Subhash Place carries the…; NSP’s office towers carry the…; The…
- Title attribute: Pitampura's areas point to different real decisions
- Caption (and keep the same point in HTML text): A useful local page should feel grounded in how people actually live and work across Pitampura, not treat it as one flat generic location.
**V4 — Self-assessment checklist** (place after the section “Questions people ask before choosing career counselling in Pitampura”)
- File: `career-counselling-in-pitampura-self-questions-people-ask-before.webp` · 1600×1000 WebP under 200 KB
- Teaches: 01 Why choose online career counselling in Pitampura instead of only looking for a nearby offline office?
- On-image text (about 25-40 words, shortened from the page; no new claims): 01 Why choose online career counselling in Pitampura instead of only looking… / Because the decision is about trade versus corporate fit, not the counsellor's… / Online fits around shop and office timings.
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Self-assessment checklist for “Questions people ask before choosing career…”: 01 Why choose online career…; Because the decision is about…; Online fits around…
- Title attribute: Questions people ask before choosing career counselling in Pitampura
- Caption (and keep the same point in HTML text): 01 Why choose online career counselling in Pitampura instead of only looking for a nearby offline office?
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/locations/career-counselling-in-raipur/

**H1:** Career counselling in Raipur for a state still building its own identity  
**Type:** location · **Search priority:** P3 (0 clicks, 7 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `region-central.webp` is shared by 4 page(s); acceptable reuse.
4. Hero `region-central.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 98% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-location-online.webp` has no title attribute and no caption.
7. Context visual reuse: `context-location-online.webp` appears on 48 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 96% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 97% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 97% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/region-central.webp` | 98% | eager/high | Central India regional skyline illustration | NO | NO |
| `bofu/context-location-online.webp` | 98% | lazy | A local search and online guidance visual showing… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the shared city/region hero (uniqueness comes from the local explanatory visuals below). Add alt, title attribute and caption naming the city.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-in-raipur-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Chhattisgarh became one of India's newest major states only in November 2000, and Raipur is still writing…
- On-image text (about 25-40 words, shortened from the page; no new claims): The Raipur career reality generic state-capital advice misses / Building a career in a state that is still building itself - the fork… / How this approach differs from typical career counselling / Raipur's geography shapes the decision, not just the commute / How the right support can fit where you are right now
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career counselling in Raipur for a…”: The Raipur career reality generic…; Building a career in a state…
- Title attribute: At a glance: Career counselling in Raipur for a state still building…
- Caption (and keep the same point in HTML text): Chhattisgarh became one of India's newest major states only in November 2000, and Raipur is still writing what a serious career here…
**V2 — Stat panel or bar chart (only the numbers listed)** (place after the section “The Raipur career reality generic state-capital advice misses”)
- File: `career-counselling-in-raipur-stat-raipur-career-reality-generic.webp` · 1600×1000 WebP under 200 KB
- Teaches: Raipur is a genuine state capital, but a young one - and its economy is more layered than a 'mining state…
- On-image text (about 25-40 words, shortened from the page; no new claims): Chhattisgarh is barely 25 years old as a state - and Raipur is still… / Steel, power, and mining are not backstory here - they are Raipur's… / AIIMS Raipur has given the city a real medical-education anchor most… / Naya Raipur (Atal Nagar) is Chhattisgarh building its own modern…
- Numbers: 01 Chhattisgarh is barely 25 years old as a state - and Raipur is still writing what a serious career here actually looks like Chhattisgarh was carved out of Madhya Pradesh on 1 November 2000, making it one of India's youngest major states.
- Alt: Stat panel or bar chart (only the numbers listed) for “The Raipur career reality generic state-capital…”: Chhattisgarh is barely 25 years…; Steel, power, and…
- Title attribute: The Raipur career reality generic state-capital advice misses
- Caption (and keep the same point in HTML text): Raipur is a genuine state capital, but a young one - and its economy is more layered than a 'mining state, government jobs' shorthand…
**V3 — Stat panel or bar chart (only the numbers listed)** (place after the section “Building a career in a state that is still building itself - the fork…”)
- File: `career-counselling-in-raipur-stat-building-career-state-still.webp` · 1600×1000 WebP under 200 KB
- Teaches: This is the real question behind most Raipur searches, and it has no equivalent framing anywhere else on this…
- On-image text (about 25-40 words, shortened from the page; no new claims): Chhattisgarh's own government, PSU, and professional culture is still… / The steel-power-mining backbone offers real stability, but it rewards… / AIIMS Raipur, IIM Raipur's Atal Nagar campus, and the industrial belt… / A state capital with a century of settled administrative history hands you a well-worn… / That means more genuine room to choose a nonstandard path without fighting decades of… / The honest starting point is treating Raipur as its own case, not assuming it will behave… / Bhilai Steel Plant, the NTPC and state thermal-power corridor, and Chhattisgarh's coal…
- Numbers: This is the real question behind most Raipur searches, and it has no equivalent framing anywhere else on this site: whether to build toward the steel-power-mining economy, the newer AIIMS-and-IIM-anchored medical and management layer, or a government-administr
- Alt: Stat panel or bar chart (only the numbers listed) for “Building a career in a state that is still…”: Chhattisgarh's own government…; The steel-power-mining…
- Title attribute: Building a career in a state that is still building itself - the fork…
- Caption (and keep the same point in HTML text): This is the real question behind most Raipur searches, and it has no equivalent framing anywhere else on this site: whether to build toward…
**V4 — Asymmetrical pros-and-cons comparison** (place after the section “How this approach differs from typical career counselling”)
- File: `career-counselling-in-raipur-asymmetrical-approach-differs-typical-career.webp` · 1600×1000 WebP under 200 KB
- Teaches: In a state capital where the mining-and-government reputation and the newer AIIMS-and-Naya-Raipur growth…
- On-image text (about 25-40 words, shortened from the page; no new claims): In a state capital where the mining-and-government reputation and the newer… / The comparison below shows what separates high-leverage guidance from that. / Others Shift Future Career School Others Choosing a counsellor only because…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “How this approach differs from typical career…”: In a state capital where the…; The comparison below shows what……
- Title attribute: How this approach differs from typical career counselling
- Caption (and keep the same point in HTML text): In a state capital where the mining-and-government reputation and the newer AIIMS-and-Naya-Raipur growth story both hold some truth, the…
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/locations/career-counselling-in-rajkot/

**H1:** Career Counselling in Rajkot  
**Type:** location · **Search priority:** P3 (0 clicks, 0 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `region-west.webp` is shared by 8 page(s); acceptable reuse.
4. Hero `region-west.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 98% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-location-online.webp` has no title attribute and no caption.
7. Context visual reuse: `context-location-online.webp` appears on 48 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 95% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 96% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 97% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/region-west.webp` | 98% | eager/high | Western India regional skyline illustration | NO | NO |
| `bofu/context-location-online.webp` | 98% | lazy | A local search and online guidance visual showing… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the shared city/region hero (uniqueness comes from the local explanatory visuals below). Add alt, title attribute and caption naming the city.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-in-rajkot-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Rajkot's strong manufacturing and SME base creates a specific career reality - one that generic counselling…
- On-image text (about 25-40 words, shortened from the page; no new claims):  / The Rajkot career reality that generic advice misses / Rajkot's major areas shape how people compare their next move / How practical career counselling should move you forward / Why online career counselling can still be the stronger route from…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career Counselling in Rajkot”: ; The Rajkot career reality that…; Rajkot's major areas shape how…
- Title attribute: At a glance: Career Counselling in Rajkot
- Caption (and keep the same point in HTML text): Rajkot's strong manufacturing and SME base creates a specific career reality - one that generic counselling written for metro IT grads…
**V2 — Self-assessment checklist** (place after the section “”)
- File: `career-counselling-in-rajkot-self-overview.webp` · 1600×1000 WebP under 200 KB
- Teaches: 01 You are trying to avoid expensive wrong turns Another year in the wrong degree, course, or skill direction…
- On-image text (about 25-40 words, shortened from the page; no new claims): You are trying to avoid expensive wrong turns / You want support that feels easier to trust / You already know generic advice is not enough / Another year in the wrong degree, course, or skill direction costs time and money / You want to decide with more clarity before committing further / You need to know which path is actually worth serious effort right now / You searched for career counselling in Rajkot because the city name signals something…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Self-assessment checklist for “”: You are trying to avoid expensive…; You want support that feels…; You already know generic advice…
- Title attribute: 
- Caption (and keep the same point in HTML text): 01 You are trying to avoid expensive wrong turns Another year in the wrong degree, course, or skill direction costs time and money You want…
**V3 — Asymmetrical pros-and-cons comparison** (place after the section “Rajkot's major areas shape how people compare their next move”)
- File: `career-counselling-in-rajkot-asymmetrical-rajkot-major-areas-shape.webp` · 1600×1000 WebP under 200 KB
- Teaches: A useful local page should feel grounded in how people actually live, study, and work across the city, not…
- On-image text (about 25-40 words, shortened from the page; no new claims): Industrial and business corridors shape the decision differently / A city-wide view helps separate local comfort from actual career… / A useful local page should feel grounded in how people actually live, study… / 01 Industrial and business corridors shape the decision differently Rajkot… / People comparing options from Race Course, Kalawad Road, University Road…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “Rajkot's major areas shape how people compare…”: Industrial and business corridors…; A city-wide view helps…
- Title attribute: Rajkot's major areas shape how people compare their next move
- Caption (and keep the same point in HTML text): A useful local page should feel grounded in how people actually live, study, and work across the city, not like every Rajkot user is making…
**V4 — Asymmetrical pros-and-cons comparison** (place after the section “How this approach differs from typical career counselling”)
- File: `career-counselling-in-rajkot-asymmetrical-approach-differs-typical-career.webp` · 1600×1000 WebP under 200 KB
- Teaches: In an industrial city like Rajkot, the real risk is advice that ignores your actual situation - the…
- On-image text (about 25-40 words, shortened from the page; no new claims): In an industrial city like Rajkot, the real risk is advice that ignores your… / Generic degree-first counselling misses all three. / The comparison below shows what separates high-leverage guidance from that.
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “How this approach differs from typical career…”: In an industrial city like…; Generic degree-first counselling…; The…
- Title attribute: How this approach differs from typical career counselling
- Caption (and keep the same point in HTML text): In an industrial city like Rajkot, the real risk is advice that ignores your actual situation - the manufacturing economy, the family…
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/locations/career-counselling-in-siliguri/

**H1:** Career counselling in Siliguri for a border-trade and hill-gateway city  
**Type:** location · **Search priority:** P3 (0 clicks, 2 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `region-east.webp` is shared by 4 page(s); acceptable reuse.
4. Hero `region-east.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 98% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-location-online.webp` has no title attribute and no caption.
7. Context visual reuse: `context-location-online.webp` appears on 48 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 96% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 96% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 97% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/region-east.webp` | 98% | eager/high | Eastern India regional skyline illustration | NO | NO |
| `bofu/context-location-online.webp` | 98% | lazy | A local search and online guidance visual showing… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the shared city/region hero (uniqueness comes from the local explanatory visuals below). Add alt, title attribute and caption naming the city.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-in-siliguri-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Siliguri sits inside the "Chicken's Neck" - the narrow corridor of Indian territory bordered by Nepal…
- On-image text (about 25-40 words, shortened from the page; no new claims): How the right support can fit where you are right now / The decision most people searching from Siliguri are actually facing / How this approach differs from typical career counselling / Siliguri's hill-tourism-gateway and tea-auction economy - a real fork… / How practical career counselling should move you forward
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career counselling in Siliguri for a…”: How the right support can fit…; The decision most people…; How…
- Title attribute: At a glance: Career counselling in Siliguri for a border-trade and…
- Caption (and keep the same point in HTML text): Siliguri sits inside the "Chicken's Neck" - the narrow corridor of Indian territory bordered by Nepal, Bhutan, and Bangladesh, with Sikkim…
**V2 — Self-assessment checklist** (place after the section “The decision most people searching from Siliguri are actually facing”)
- File: `career-counselling-in-siliguri-self-decision-most-people-searching.webp` · 1600×1000 WebP under 200 KB
- Teaches: This border-trade-corridor-and-hill-gateway framing has no equivalent on any other city page this site…
- On-image text (about 25-40 words, shortened from the page; no new claims): Siliguri sits inside the "Chicken's Neck" - a genuine multi-nation… / This is a border-trade and logistics career economy, not a stopover… / Getting this fork right matters because Siliguri's real choice is… / The Siliguri Corridor is the narrow strip of Indian territory that connects the entire… / Almost every truck, train, and passenger route linking the Northeast to the rest of the… / That geography builds a real, ongoing customs, freight-forwarding, warehousing, and… / Unlike a city that functions as the Northeast's own internal first-stop for people moving…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Self-assessment checklist for “The decision most people searching from Siliguri…”: Siliguri sits inside the…; This is a border-trade and…; Getting this fork…
- Title attribute: The decision most people searching from Siliguri are actually facing
- Caption (and keep the same point in HTML text): This border-trade-corridor-and-hill-gateway framing has no equivalent on any other city page this site covers, because no other city sits…
**V3 — Asymmetrical pros-and-cons comparison** (place after the section “How this approach differs from typical career counselling”)
- File: `career-counselling-in-siliguri-asymmetrical-approach-differs-typical-career.webp` · 1600×1000 WebP under 200 KB
- Teaches: In a city where the pull toward Kolkata is constant, the risk is generic advice that assumes a metro is…
- On-image text (about 25-40 words, shortened from the page; no new claims): In a city where the pull toward Kolkata is constant, the risk is generic advice… / The comparison below shows what separates high-leverage guidance from that. / Others Shift Future Career School Others Choosing a counsellor only because…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “How this approach differs from typical career…”: In a city where the pull toward…; The comparison below shows what……
- Title attribute: How this approach differs from typical career counselling
- Caption (and keep the same point in HTML text): In a city where the pull toward Kolkata is constant, the risk is generic advice that assumes a metro is always the answer without checking…
**V4 — Self-assessment checklist** (place after the section “”)
- File: `career-counselling-in-siliguri-self-overview.webp` · 1600×1000 WebP under 200 KB
- Teaches: 01 Clarity on the specific fork pressing you right now Whether your skill direction already has a real…
- On-image text (about 25-40 words, shortened from the page; no new claims): Clarity on the specific fork pressing you right now / Skill direction built for what Siliguri's actual economy is hiring for / Whether your skill direction already has a real opening inside Siliguri's border-trade… / Whether building in Siliguri itself, or moving to Kolkata for a wider metro market, is… / Whether staying close to family and North Bengal, or moving for a metro's density of… / What a realistic income trajectory looks like on your current path, given how Siliguri's… / A high-value skill portfolio aimed at freight, logistics, and customs-documentation…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Self-assessment checklist for “”: Clarity on the specific fork…; Skill direction built for what…; Whether your skill direction…
- Title attribute: 
- Caption (and keep the same point in HTML text): 01 Clarity on the specific fork pressing you right now Whether your skill direction already has a real opening inside Siliguri's…
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/locations/career-counselling-in-thane/

**H1:** Career counselling in Thane for the commute-to-Mumbai-or-stay-local decision  
**Type:** location · **Search priority:** P3 (0 clicks, 1 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `city-mumbai.webp` is shared by 7 page(s); acceptable reuse.
4. Hero `city-mumbai.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 98% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-location-online.webp` has no title attribute and no caption.
7. Context visual reuse: `context-location-online.webp` appears on 48 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 96% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 97% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 97% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/city-mumbai.webp` | 98% | eager/high | Mumbai skyline illustration for career… | NO | NO |
| `bofu/context-location-online.webp` | 98% | lazy | A local search and online guidance visual showing… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the shared city/region hero (uniqueness comes from the local explanatory visuals below). Add alt, title attribute and caption naming the city.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-in-thane-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Thane runs its own civic and economic life through the Thane Municipal Corporation, a City-of-Lakes identity…
- On-image text (about 25-40 words, shortened from the page; no new claims): Thane has its own civic and economic identity, distinct from Mumbai's / The real Thane decision: commute into Mumbai, or build a career here? / Which part of Thane you're deciding from changes the real trade-off / Thane's affordability is part of the decision, not a side note / Why this decision already feels important
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career counselling in Thane for the…”: Thane has its own civic and…; The real Thane decision…
- Title attribute: At a glance: Career counselling in Thane for the…
- Caption (and keep the same point in HTML text): Thane runs its own civic and economic life through the Thane Municipal Corporation, a City-of-Lakes identity, and a growing Wagle…
**V2 — Asymmetrical pros-and-cons comparison** (place after the section “The real Thane decision: commute into Mumbai, or build a career here?”)
- File: `career-counselling-in-thane-asymmetrical-real-thane-decision-commute.webp` · 1600×1000 WebP under 200 KB
- Teaches: No other city page on this site is built around this specific fork, because no other city sits this close to…
- On-image text (about 25-40 words, shortened from the page; no new claims): The real Thane decision is rarely 'which industry' - it is… / Neither side of that trade-off is automatically the right answer / Thane's own corridor is growing, which makes this decision more…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “The real Thane decision: commute into Mumbai, or…”: The real Thane decision is rarely…; Neither side of that…
- Title attribute: The real Thane decision: commute into Mumbai, or build a career here?
- Caption (and keep the same point in HTML text): No other city page on this site is built around this specific fork, because no other city sits this close to Mumbai's job density while…
**V3 — Decision tree** (place after the section “Which part of Thane you're deciding from changes the real trade-off”)
- File: `career-counselling-in-thane-decision-part-thane-deciding-changes.webp` · 1600×1000 WebP under 200 KB
- Teaches: A useful local page should feel grounded in how people actually live, study, and work across Thane rather…
- On-image text (about 25-40 words, shortened from the page; no new claims): Wagle Estate: industrial roots, growing IT and office-park identity / Kolshet Road and Ghodbunder Road (toward Manpada and Hiranandani… / Naupada, Thane station, and the TMC civic belt: the administrative… / Kalwa and Mumbra: the older industrial and manufacturing stretch / Lake-belt neighbourhoods around Talao Pali and Upvan: the city's…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “Which part of Thane you're deciding from changes…”: Wagle Estate: industrial roots…; Kolshet Road and Ghodbunder Road…; Naupada, Thane…
- Title attribute: Which part of Thane you're deciding from changes the real trade-off
- Caption (and keep the same point in HTML text): A useful local page should feel grounded in how people actually live, study, and work across Thane rather than pretending every user is…
**V4 — Decision tree** (place after the section “How the right support can fit where you are right now”)
- File: `career-counselling-in-thane-decision-right-support-fit-where.webp` · 1600×1000 WebP under 200 KB
- Teaches: Student or Early-Career For school, college, fresher, and early-direction decisions Useful when stream…
- On-image text (about 25-40 words, shortened from the page; no new claims): For school, college, fresher, and early-direction decisions / For stagnation, AI pressure, and salary-ceiling decisions / Student or Early-Career For school, college, fresher, and early-direction… / Working Professional For stagnation, AI pressure, and salary-ceiling decisions… / A clearer route toward achieving earlier financial freedom through stronger…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “How the right support can fit where you are right…”: For school, college, fresher, and…; For stagnation, AI pressure, and…; Student or…
- Title attribute: How the right support can fit where you are right now
- Caption (and keep the same point in HTML text): Student or Early-Career For school, college, fresher, and early-direction decisions Useful when stream choices, course choices, skill…
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/locations/career-counselling-in-trivandrum/

**H1:** Career counselling in Trivandrum for practical clarity and stronger next steps  
**Type:** location · **Search priority:** P3 (0 clicks, 14 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `region-south.webp` is shared by 3 page(s); acceptable reuse.
4. Hero `region-south.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 98% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-location-online.webp` has no title attribute and no caption.
7. Context visual reuse: `context-location-online.webp` appears on 48 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 96% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 96% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 97% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/region-south.webp` | 98% | eager/high | Southern India regional skyline illustration | NO | NO |
| `bofu/context-location-online.webp` | 98% | lazy | A local search and online guidance visual showing… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the shared city/region hero (uniqueness comes from the local explanatory visuals below). Add alt, title attribute and caption naming the city.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-in-trivandrum-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Trivandrum hands many people a genuinely rare fork: Technopark, one of India's earliest and largest IT parks…
- On-image text (about 25-40 words, shortened from the page; no new claims): Why this decision already feels important / Technopark and ISRO together are Trivandrum's first real fork / Gulf migration and Kerala PSC: two more genuinely real paths / Trivandrum's areas point to different real decisions / Choose the stronger starting point for your situation
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career counselling in Trivandrum for…”: Why this decision already feels…; Technopark and ISRO together…
- Title attribute: At a glance: Career counselling in Trivandrum for practical clarity…
- Caption (and keep the same point in HTML text): Trivandrum hands many people a genuinely rare fork: Technopark, one of India's earliest and largest IT parks, sitting alongside the Vikram…
**V2 — Linear process chain or roadmap** (place after the section “Gulf migration and Kerala PSC: two more genuinely real paths”)
- File: `career-counselling-in-trivandrum-linear-gulf-migration-kerala-psc.webp` · 1600×1000 WebP under 200 KB
- Teaches: Long-standing, well-worn local patterns that deserve honest planning, not automatic acceptance or dismissal.
- On-image text (about 25-40 words, shortened from the page; no new claims): A second, genuinely distinct pattern: Gulf migration and the Kerala… / What deliberate planning can add to either path / Gulf migration for work is a long-standing, well-established pattern across Kerala, and… / The Kerala Public Service Commission recruitment process is a widely pursued route into… / The Kerala Secretariat's presence in Trivandrum, as the state capital, adds a further… / Many young people in Trivandrum are weighing a Technopark or ISRO-linked technical career… / A Gulf-migration decision benefits from clarity on the specific trade or profession…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Linear process chain or roadmap for “Gulf migration and Kerala PSC: two more genuinely…”: A second, genuinely distinct…; What deliberate planning can add……
- Title attribute: Gulf migration and Kerala PSC: two more genuinely real paths
- Caption (and keep the same point in HTML text): Long-standing, well-worn local patterns that deserve honest planning, not automatic acceptance or dismissal.
**V3 — Asymmetrical pros-and-cons comparison** (place after the section “Trivandrum's areas point to different real decisions”)
- File: `career-counselling-in-trivandrum-asymmetrical-trivandrum-areas-point-different.webp` · 1600×1000 WebP under 200 KB
- Teaches: A useful local page should feel grounded in how people actually live and work across Trivandrum, not treat it…
- On-image text (about 25-40 words, shortened from the page; no new claims): Technopark and its surrounding sectors carry the IT and software… / The Thumba and VSSC-linked areas carry the space-research and… / The Secretariat and older city areas carry the state-administrative…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “Trivandrum's areas point to different real…”: Technopark and its surrounding…; The Thumba and VSSC-linked areas……
- Title attribute: Trivandrum's areas point to different real decisions
- Caption (and keep the same point in HTML text): A useful local page should feel grounded in how people actually live and work across Trivandrum, not treat it as one flat generic location.
**V4 — Self-assessment checklist** (place after the section “Questions people ask before choosing career counselling in Trivandrum”)
- File: `career-counselling-in-trivandrum-self-questions-people-ask-before.webp` · 1600×1000 WebP under 200 KB
- Teaches: 01 Why choose online career counselling in Trivandrum instead of only looking for a nearby offline office?
- On-image text (about 25-40 words, shortened from the page; no new claims): 01 Why choose online career counselling in Trivandrum instead of only looking… / Because the decision depends on your path and odds, not on a Trivandrum office. / Online fits around study and work.
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Self-assessment checklist for “Questions people ask before choosing career…”: 01 Why choose online career…; Because the decision depends on…; Online fits…
- Title attribute: Questions people ask before choosing career counselling in Trivandrum
- Caption (and keep the same point in HTML text): 01 Why choose online career counselling in Trivandrum instead of only looking for a nearby offline office?
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/locations/career-counselling-in-vadodara/

**H1:** Career counselling in Vadodara for PSU, chemicals, and fine-arts decisions  
**Type:** location · **Search priority:** P3 (0 clicks, 1 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `region-west.webp` is shared by 8 page(s); acceptable reuse.
4. Hero `region-west.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 98% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-location-online.webp` has no title attribute and no caption.
7. Context visual reuse: `context-location-online.webp` appears on 48 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 96% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 97% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 97% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/region-west.webp` | 98% | eager/high | Western India regional skyline illustration | NO | NO |
| `bofu/context-location-online.webp` | 98% | lazy | A local search and online guidance visual showing… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the shared city/region hero (uniqueness comes from the local explanatory visuals below). Add alt, title attribute and caption naming the city.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-in-vadodara-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Vadodara raises a career fork few other cities force this directly: whether to build toward a PSU or…
- On-image text (about 25-40 words, shortened from the page; no new claims): The PSU-and-chemicals default versus MSU's fine-arts calling - the… / Vadodara's economy and identity run on public-sector heavy industry… / PSU job security versus private-sector growth - the second, quieter… / How practical guidance should move the decision forward / How the right support can fit where you are right now
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career counselling in Vadodara for…”: The PSU-and-chemicals default…; Vadodara's economy and…
- Title attribute: At a glance: Career counselling in Vadodara for PSU, chemicals, and…
- Caption (and keep the same point in HTML text): Vadodara raises a career fork few other cities force this directly: whether to build toward a PSU or heavy-engineering-and-chemicals role…
**V2 — Asymmetrical pros-and-cons comparison** (place after the section “The PSU-and-chemicals default versus MSU's fine-arts calling - the…”)
- File: `career-counselling-in-vadodara-asymmetrical-psu-chemicals-default-versus.webp` · 1600×1000 WebP under 200 KB
- Teaches: This is the single most defining career fork in the city, and it has no equivalent framing on any other city…
- On-image text (about 25-40 words, shortened from the page; no new claims): The default in Vadodara runs through a PSU or a… / MSU's Faculty of Fine Arts is a genuinely rare, respected calling… / Naming this fork honestly is the point - neither side should win by… / Vadodara (Baroda) grew up around some of Gujarat's largest public-sector and… / That expectation is not unreasonable - these are real, large, long-running employers … / The Maharaja Sayajirao University of Baroda's Faculty of Technology and Engineering feeds… / This is a real structural difference from most of the other cities where Future Career…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “The PSU-and-chemicals default versus MSU's…”: The default in Vadodara runs…; MSU's Faculty of Fine Arts is a……
- Title attribute: The PSU-and-chemicals default versus MSU's fine-arts calling - the…
- Caption (and keep the same point in HTML text): This is the single most defining career fork in the city, and it has no equivalent framing on any other city page: a genuine choice between…
**V3 — Asymmetrical pros-and-cons comparison** (place after the section “PSU job security versus private-sector growth - the second, quieter…”)
- File: `career-counselling-in-vadodara-asymmetrical-psu-job-security-versus.webp` · 1600×1000 WebP under 200 KB
- Teaches: Even for students and professionals already committed to a technical track, Vadodara forces an honest…
- On-image text (about 25-40 words, shortened from the page; no new claims): A second, quieter fork sits underneath the first one: PSU job… / PSU security is real, but it is not automatically the higher-value… / The honest approach compares both paths on your actual situation, not…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “PSU job security versus private-sector growth …”: A second, quieter fork sits…; PSU security is real, but it is……
- Title attribute: PSU job security versus private-sector growth - the second, quieter…
- Caption (and keep the same point in HTML text): Even for students and professionals already committed to a technical track, Vadodara forces an honest comparison between a secure PSU…
**V4 — Self-assessment checklist** (place after the section “”)
- File: `career-counselling-in-vadodara-self-overview.webp` · 1600×1000 WebP under 200 KB
- Teaches: 01 Clarity on the decision actually creating pressure right now Whether a PSU or…
- On-image text (about 25-40 words, shortened from the page; no new claims): Clarity on the decision actually creating pressure right now / Skill direction that fits Vadodara's real economy / A practical next step you can act on / Whether a PSU or heavy-engineering-and-chemicals track, or an MSU fine-arts or humanities… / Whether PSU job security or private-sector growth serves your actual situation better… / What the honest income and growth ceiling looks like for the specific ladder you are… / Whether a private pharma, chemicals, or engineering role in Vadodara itself, or a move…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Self-assessment checklist for “”: Clarity on the decision actually…; Skill direction that fits…; A practical next step you can act…
- Title attribute: 
- Caption (and keep the same point in HTML text): 01 Clarity on the decision actually creating pressure right now Whether a PSU or heavy-engineering-and-chemicals track, or an MSU fine-arts…
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/locations/career-counselling-in-visakhapatnam/

**H1:** Career counselling in Visakhapatnam for practical clarity and stronger next steps  
**Type:** location · **Search priority:** P3 (0 clicks, 0 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `region-south.webp` is shared by 3 page(s); acceptable reuse.
4. Hero `region-south.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 98% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-location-online.webp` has no title attribute and no caption.
7. Context visual reuse: `context-location-online.webp` appears on 48 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 96% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 96% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 97% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/region-south.webp` | 98% | eager/high | Southern India regional skyline illustration | NO | NO |
| `bofu/context-location-online.webp` | 98% | lazy | A local search and online guidance visual showing… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP the shared city/region hero (uniqueness comes from the local explanatory visuals below). Add alt, title attribute and caption naming the city.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-in-visakhapatnam-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Visakhapatnam's economy spans port logistics, pharma, steel, defence, and a growing IT corridor — yet most…
- On-image text (about 25-40 words, shortened from the page; no new claims): Why this decision already feels important / What should get clearer before you commit harder / Choose the stronger starting point for your situation / What stronger career counselling should give you / Visakhapatnam's main areas can shape the decision differently
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career counselling in Visakhapatnam…”: Why this decision already feels…; What should get clearer…
- Title attribute: At a glance: Career counselling in Visakhapatnam for practical…
- Caption (and keep the same point in HTML text): Visakhapatnam's economy spans port logistics, pharma, steel, defence, and a growing IT corridor — yet most career advice available here is…
**V2 — Decision tree** (place after the section “What should get clearer before you commit harder”)
- File: `career-counselling-in-visakhapatnam-decision-should-get-clearer-before.webp` · 1600×1000 WebP under 200 KB
- Teaches: The practical job of counselling is to improve direction, skill decisions, and next-step quality before…
- On-image text (about 25-40 words, shortened from the page; no new claims): Visakhapatnam has a multi-sector economy — and that creates real… / The Hyderabad pull is real — but it is not always the right answer / Defence and government backgrounds create their own career transitions / The outcome should be a sharper next move tied to your actual…
- Numbers: Entry-level roles across these sectors typically start at ₹2.5–4.5 LPA locally. | Professionals who build strong digital, analytics, or pharma-adjacent skills and move into remote or Hyderabad-facing roles can reach ₹12–20 LPA within three to five years.
- Alt: Decision tree for “What should get clearer before you commit harder”: Visakhapatnam has a multi-sector…; The Hyderabad pull is real — but…; Defence and…
- Title attribute: What should get clearer before you commit harder
- Caption (and keep the same point in HTML text): The practical job of counselling is to improve direction, skill decisions, and next-step quality before confusion turns into another…
**V3 — Asymmetrical pros-and-cons comparison** (place after the section “Visakhapatnam's main areas can shape the decision differently”)
- File: `career-counselling-in-visakhapatnam-asymmetrical-visakhapatnam-main-areas-shape.webp` · 1600×1000 WebP under 200 KB
- Teaches: A useful local page should feel grounded in how people actually live, study, and work across Vizag rather…
- On-image text (about 25-40 words, shortened from the page; no new claims): Vizag decisions often come from very different parts of the city / Different areas often point to different opportunity clusters and… / A useful local page should feel grounded in how people actually live, study… / 01 Vizag decisions often come from very different parts of the city A student… / Good counselling should feel grounded in that spread instead of treating…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “Visakhapatnam's main areas can shape the decision…”: Vizag decisions often come from…; Different areas often point…
- Title attribute: Visakhapatnam's main areas can shape the decision differently
- Caption (and keep the same point in HTML text): A useful local page should feel grounded in how people actually live, study, and work across Vizag rather than pretending every user is…
**V4 — Decision tree** (place after the section “How the right support can fit where you are right now”)
- File: `career-counselling-in-visakhapatnam-decision-right-support-fit-where.webp` · 1600×1000 WebP under 200 KB
- Teaches: Student or Early-Career For school, college, fresher, and early-direction decisions Useful when stream…
- On-image text (about 25-40 words, shortened from the page; no new claims): For school, college, fresher, and early-direction decisions / For stagnation, AI pressure, and salary-ceiling decisions / Student or Early-Career For school, college, fresher, and early-direction… / Working Professional For stagnation, AI pressure, and salary-ceiling decisions… / A clearer route toward achieving earlier financial freedom through stronger…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “How the right support can fit where you are right…”: For school, college, fresher, and…; For stagnation, AI pressure, and…; Student or…
- Title attribute: How the right support can fit where you are right now
- Caption (and keep the same point in HTML text): Student or Early-Career For school, college, fresher, and early-direction decisions Useful when stream choices, course choices, skill…
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---
