# SEO Architecture — URL Structure & Anti-Cannibalization

The single most important SEO decision you make is the URL architecture. Get it right before you write a word of content.

---

## Core principle: one keyword intent → one URL

Every URL owns exactly one cluster of keywords. No two pages compete for the same search intent. Violating this (keyword cannibalization) makes Google uncertain which page to rank and both pages rank worse.

---

## 1. Silo structure

Organise pages into topical silos. A silo is a hub page + a set of modifier-child pages.

```
/silo-name/                    ← HUB — ranks for the head term
  modifier-a/                  ← CHILD — ranks for "head term + modifier a"
  modifier-b/                  ← CHILD — ranks for "head term + modifier b"
  ...
```

Example for a career-guidance site:

```
/career-coaching/              HUB — "career coaching india", "career coach"
  online/                      "online career coaching"
  fresh-graduates/             "career coaching for freshers"
  professionals/               "career coaching for working professionals"
  fees/                        "career coaching fees", "how much does career coaching cost"
  career-coach-vs-mentor/      comparison intent (separate page = separate intent)

/resume-writing/               HUB — "resume writing services india"
  ats-resume/                  "ATS-friendly resume"
  linkedin-profile/            "LinkedIn profile optimisation"

/interview-preparation/        HUB — "interview preparation coaching"
  it-sector/                   "interview prep for IT jobs"
  ...

/career-coach/                 LOCAL HUB — "career coach in india", "career coach near me"
  mumbai/
  bangalore/
  delhi/
  hyderabad/
  ...

/industries/                   or /career-for/
  engineering/
  mba-graduates/
  career-change/
  ...
```

---

## 2. Anti-cannibalization rules

### Rule 1 — one intent, one URL
Map every keyword in your research to exactly one target URL. No keyword appears in two rows pointing to different URLs.

### Rule 2 — entity split
These are different entities and must live in different silos:
- "career **coaching**" (the service) → `/career-coaching/`
- "career **coach**" (the person / near-me local) → `/career-coach/`
- "career **mentorship**" → `/career-mentorship/` (if you offer that separately)

Titles and H1s never mix the entities. The hub page `/career-coaching/` says "career coaching" everywhere; it never also tries to rank for "career coach in Delhi."

### Rule 3 — modifier split
The **hub** holds the bare head term. Children only rank for **head + their modifier**:
- Hub `/career-coaching/` ranks for "career coaching India"
- Child `/career-coaching/online/` ranks for "online career coaching" — never the bare "career coaching"
- Hub links to children with modifier anchors ("online career coaching")
- Children link to the hub with near-exact head-term anchors ("career coaching")

### Rule 4 — comparison pages are separate
"Career coaching vs mentoring", "career coach vs recruiter" — these are comparison-intent queries and must live on dedicated pages. Never answer "vs" queries on a money/service page; the mixed intent dilutes both.

### Rule 5 — problem queries belong to their closest topical silo
Informational/problem queries like "how to get a job after gap year", "resume rejected by ATS" map to the most relevant silo hub or child — NOT the homepage. This keeps the homepage for navigational + branded queries only.

### Rule 6 — city pages vs industry pages
- City pages own: "career coach in {city}", "best career coach in {city}"
- Industry/audience pages own: "career coaching for {audience}", "coach for {role}"
- A "{audience} in {city}" long-tail belongs to the **city page** (city-qualified), NOT the industry page

### Rule 7 — canonical + trailing slash everywhere
Use `build.format: 'directory'` in Astro. Every URL has a trailing slash. One canonical version only — never let `https://` and `http://`, `www.` and non-www, or `/path` and `/path/` compete.

### Rule 8 — no doorway pages
Don't create `/career-coaching/{city}` pages for every city-audience combination unless Google Search Console shows real demand for those exact queries. Thin, forced combinations are doorway pages and get penalised.

---

## 3. Page intent by template type

| Page type | Search intent | Schema |
|---|---|---|
| Silo hub | Commercial (buy/hire) | Service + FAQPage + Breadcrumb |
| Modifier child | Commercial narrowed | Service + FAQPage + Breadcrumb |
| City page | Local commercial | Service (areaServed=city) + FAQPage + Breadcrumb |
| Industry/audience page | Commercial narrowed | Service + FAQPage + Breadcrumb |
| Fees page | MOFU → BOFU | FAQPage + Breadcrumb |
| Comparison page | MOFU | Article + FAQPage + Breadcrumb |
| Guide / "how to" | Informational | Article + FAQPage |
| Programs / offerings | BOFU | Service + FAQPage |
| Homepage | Brand + head terms | Organization + WebSite |

---

## 4. Title and H1 formulas

**Hub page:**
- Title: `{Head Term} in India | {Brand}` (≤ 60 chars)
- H1: `{Head Term} for {target audience}`

**Child page:**
- Title: `{Modifier} {Head Term} | {Brand}`
- H1: `{Modifier} {Head Term}`

**City page:**
- Title: `Career Coach in {City} | {Brand}`
- H1: `Career Coach in {City}`

**Rule:** the primary keyword appears in the `<title>`, `<h1>`, and the first paragraph of the page. Never keyword-stuff; one natural use each is sufficient.

---

## 5. Internal linking

- Hub links DOWN to every child with the modifier phrase as anchor text
- Children link UP to their hub with near-exact head-term anchor text
- Related pages link across silos using descriptive anchors
- Footer contains a full link directory (every hub, every key child, every city)
- Breadcrumbs on every page — provides both UX and crawlable internal link hierarchy

**Never use "click here" or "learn more" as anchor text.** Always describe the destination.

---

## 6. Expansion strategy (after launch)

Launch with the silos you have content for. Expand in waves:

1. **Wave 1:** Core silos — hubs + most important children + priority cities
2. **Wave 2:** Secondary cities, more modifiers, comparison pages
3. **Wave 3:** Only after GSC shows impression/click signal — long-tail combinations, blog/TOFU layer

Track which clusters are getting impressions in Google Search Console. Expand into the ones showing demand, not the ones you think should have demand.
