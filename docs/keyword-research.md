# Keyword Research — Methodology & CSV Format

---

## 1. Research approach

Start with 3–5 root seed terms that define what the business does. Expand every seed across every dimension searchers actually use.

### Expansion axes for an Indian career / education market

| Axis | Examples |
|---|---|
| Entity | coach / coaching / mentor / mentorship / counselor / guide / advisor |
| Qualifier | best, top, certified, experienced, affordable, trusted, No.1 |
| Mode | online, virtual, on Zoom, near me, in India, one-on-one, group |
| Audience | fresh graduate, working professional, IT professional, MBA, engineer, student |
| Money | fees, cost, charges, price, packages, how much |
| Problem (EN) | how to get a job, career stuck, no growth, salary not increasing |
| Problem (Hinglish) | job kaise milega, career kaise banaye, promotion nahi mil raha |
| Topic | resume writing, interview prep, career change, salary negotiation, LinkedIn |
| Industry | IT/tech, banking, FMCG, consulting, government jobs, startup |
| City | Mumbai, Delhi, Bangalore, Hyderabad, Chennai, Pune, Kolkata… |

### Volume tiers (directional only — validate with GSC after launch)

| Tier | Approximate India searches/month |
|---|---|
| H | 1,000+ |
| M | 100–1,000 |
| L | 10–100 |
| LT | Long-tail — under 10 but often high-converting |

**Don't over-weight volume at this stage.** Long-tail keywords (LT) are often the fastest to rank for and convert better because intent is specific.

---

## 2. CSV format

One master CSV, or one CSV per silo. Identical columns across all files.

```
keyword,intent,funnel,volume_tier,language,cluster,target_url
```

### Column definitions

| Column | Values | Notes |
|---|---|---|
| `keyword` | the exact keyword phrase | Lowercase. Use the exact form people search. |
| `intent` | `navigational` / `informational` / `commercial` / `transactional` / `local` | What the searcher wants to DO |
| `funnel` | `TOFU` / `MOFU` / `BOFU` | Where they are in the decision journey |
| `volume_tier` | `H` / `M` / `L` / `LT` | Directional estimate |
| `language` | `EN` / `HI-EN` (Hinglish) / `HI` | Which language form |
| `cluster` | kebab-case cluster name, e.g. `coaching-online` | Groups synonyms targeting the same URL |
| `target_url` | the exact URL this keyword maps to, e.g. `/career-coaching/online/` | One keyword → one URL, always |

### Example rows

```csv
keyword,intent,funnel,volume_tier,language,cluster,target_url
career coaching india,commercial,BOFU,H,EN,coaching-hub,/career-coaching/
best career coach india,commercial,BOFU,M,EN,coaching-hub,/career-coaching/
online career coaching,commercial,BOFU,M,EN,coaching-online,/career-coaching/online/
career coaching fees india,commercial,MOFU,M,EN,coaching-fees,/career-coaching/fees/
how to choose a career coach,informational,MOFU,L,EN,coaching-hub,/career-coaching/
career coach in mumbai,local,BOFU,M,EN,city-mumbai,/career-coach/mumbai/
career kaise banaye,informational,TOFU,M,HI-EN,coaching-hub,/career-coaching/
job kaise milega,informational,TOFU,H,HI-EN,career-guide,/career-guide/
resume writing service india,commercial,BOFU,M,EN,resume-hub,/resume-writing/
```

---

## 3. Intent definitions

**Navigational** — the person is looking for a specific brand or site. Target with brand pages and your homepage.

**Informational** — they want to learn something. Map to guides, articles, FAQ-rich pages.

**Commercial** — they're evaluating options and may hire soon. Your service pages.

**Transactional** — they've decided and want to act (book, enroll, contact). Your contact, booking, or program pages.

**Local** — they want a provider in a specific city. City landing pages.

---

## 4. Funnel stages

**TOFU (Top of Funnel)** — awareness: "what is career coaching", "career kaise banaye"  
**MOFU (Middle of Funnel)** — consideration: "career coaching vs mentoring", "how to choose a career coach", "career coaching fees"  
**BOFU (Bottom of Funnel)** — decision: "career coaching online india", "best career coach in mumbai", "book career counselling session"

Prioritise BOFU first. They're harder to rank for but convert. Build MOFU pages to capture comparison traffic. TOFU last — blog/content layer once you have BOFU/MOFU covered.

---

## 5. Cluster naming convention

A cluster groups all synonyms that target the same URL. Use consistent kebab-case:

```
coaching-hub           → /career-coaching/
coaching-online        → /career-coaching/online/
coaching-fees          → /career-coaching/fees/
coaching-freshers      → /career-coaching/fresh-graduates/
city-mumbai            → /career-coach/mumbai/
city-bangalore         → /career-coach/bangalore/
resume-hub             → /resume-writing/
interview-hub          → /interview-preparation/
```

Every keyword in the same cluster must point to the same `target_url`. If two keywords in the same cluster need different URLs, they're actually different clusters.

---

## 6. Where to get keyword data

**Free:**
- Google Search Console (after launch — best signal you have)
- Google Keyword Planner (free with Ads account)
- Google autocomplete + "People also ask" + related searches
- Answer the Public (limited free uses)

**Paid (optional):**
- Ahrefs, SEMrush, Moz — for volume estimates and competitor gap analysis

**For Indian market specifically:**
- Check both English and Hinglish forms manually — many high-volume Hinglish queries are missing from most tools
- Search the term in Google (India IP if possible) and read the autocomplete + PAA boxes

---

## 7. After launch — GSC feedback loop

1. Submit sitemap to Google Search Console
2. After 4–8 weeks, check Queries report: which keywords are getting impressions?
3. Pages with impressions but low clicks: optimise title + description (CTR)
4. Keywords getting impressions on the wrong page: fix internal links or create a dedicated page
5. Impressions with zero clicks + high position = your title isn't compelling enough
6. New queries you didn't plan for: do they deserve their own URL, or can you add content to an existing page?

**Never change a URL's primary keyword assignment based on a single week of data.** Wait for at least 4–6 weeks of impressions before concluding a page is mis-targeted.
