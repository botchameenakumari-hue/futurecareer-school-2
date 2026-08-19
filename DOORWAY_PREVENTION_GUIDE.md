# Doorway Prevention & Scaled Content Abuse Prevention Guide

**Status:** Critical implementation guide for preventing Google penalties at scale

**Date:** May 2026

**Applies to:** All BOFU service pages, blog articles, location pages, audience variations, and stage-specific content

---

## Executive Summary

FutureCareerSchool plans to publish hundreds of location pages, audience variations, and stage-specific BOFU pages. Without strict uniqueness enforcement, this scale will trigger Google's doorway-page and scaled-content-abuse penalties.

**The rules in this guide prevent that by establishing:**

1. **30% minimum unique content threshold** (not 20%) for every page
2. **Strict local SEO differentiation** (local context blocks, unique objections, local data)
3. **Non-local page variation** (different section orders, unique examples, audience-specific frameworks)
4. **Assessment mention restrictions** (no hero CTAs for non-assessment keywords)
5. **Blog-scale quality gates** (40% unique for competitive keyword categories)
6. **Pre-publishing audit process** (verify uniqueness before going live)

---

## What Was Updated

### 1. BOFU_PAGE_PROMPT.md (Main BOFU Guidelines)

**Major addition: "Anti-Doorway Rules (Critical — Strictly Enforced)" section**

**Key changes:**
- Expanded from 13 lines to 300+ lines of detailed guidance
- Added 30% minimum unique content threshold for all BOFU pages
- Added separate rules for LOCAL BOFU pages (city, location, regional)
- Added separate rules for NON-LOCAL BOFU pages (audience, stage, concept variations)
- Added minimum content depth table by page type
- Added red flags checklist (do not publish if ANY flag is true)
- Added quality checkpoints before completion

**Specific requirements for location pages:**
- 300–500 word original local context block (minimum)
- Unique local objections and FAQ (not generic rewrites)
- Original local examples and challenges specific to that city
- Varied section structure (not all city pages identical order)
- Unique internal links to local supporting content
- Clear online-across-India wording without implying a fake local-only office model
- Natural integration of the city's main areas or neighbourhoods where useful, not random locality stuffing

**Specific requirements for non-local variations:**
- Distinct problem framing per audience or stage
- Unique objections and decision criteria (not audience-label swaps)
- Different section structure from nearby sibling pages
- Unique examples specific to that audience/stage
- Audience-specific FAQ (not generic question rewrites)

### 2. BOFU_PAGE_PROMPT.md (Assessment Mention Rules — NEW Section)

**Added comprehensive "Assessment Mention Rules (Strict)" section**

**Key rules:**
- **Assessment-intent keywords:** Full assessment CTA and sections allowed ✅
- **Non-assessment keywords:** NO assessment CTA in hero, NO full assessment sections, ONE contextual inline mention only ✅
- Assessment mentions only inside larger sections (deliverables, process) using `AssessmentSupportNote` component
- Final CTA must prioritize the service CTA (Get Counselling, Get Guidance) not the assessment CTA
- User searching "career counselling" should find counselling-first flow, not assessment-first

**Why:** Google flags bait-and-switch (advertising service X, delivering assessment-first flow) as doorway pattern

**Audit checklist included** to verify assessment compliance before publishing

### 3. BOFU_PAGE_PROMPT_FOLLOWUP.md (Follow-Up Improvements)

**Added "Doorway Page Prevention Audit (Critical in Follow-Up)" section**

**Key additions:**
- Uniqueness verification workflow (measure % unique content per page)
- Assessment mention compliance checklist (for non-assessment keywords)
- Template fatigue check (is this page structurally identical to nearby sibling?)
- Content depth verification (2,200+ words, substantial sections)
- Final standard now includes: "page should pass all doorway-prevention audits"

**Measurement requirement:** Unique words / total page words = % unique (must be ≥ 30%)

### 4. SEO_CONTENT_STRATEGY.md (SEO and Anti-Spam Rules)

**Major expansion: "Doorway Page Prevention (Strict Multi-Layer Approach)" section**

**Key additions:**
- Changed from 15 lines to 400+ lines of detailed guidance
- Added context on Google's 2024 penalties and scaled-content abuse signals
- Detailed location page rules (minimum 30% unique, varied sections, original hero copy, unique links)
- Detailed service-variation rules (distinct intent, audience-specific objections, varied FAQ)
- Implementation rules for if location pages are created (parent directory, linking strategy, sitemap rules)
- Measurement and accountability section (audit process, monitoring, standards by volume)
- Red flags checklist and uniqueness audit process

**Location page minimum standards** (new table):
- 2,500–3,500 words
- 30%+ unique content
- 300+ word local context block
- Minimum 3 unique FAQ questions
- At least 1 unique internal link
- No assessment CTA in hero or prominent sections

**Scaled-content warning:** Sites with 50+ location pages where 70%+ are identical face "possible manual actions" and significant ranking drops

### 5. BLOG_WORKFLOW.md (Blog Publishing Rules)

**Major expansion: "Anti-Spam and Anti-Doorway Rules (Applies to Blog Content at Scale)" section**

**Key additions:**
- Changed from 15 lines to 300+ lines
- Added high-risk patterns for blog content at scale (keyword-variation articles, stream/degree articles, location-specific articles, list articles)
- Added minimum content standards table for blog articles by type (2,000–2,500+ words, 30–40% unique)
- Added red flags for blog content
- Added blog article uniqueness audit process
- Added monitoring guidance for scale (duplicate warnings in GSC, CTR monitoring, alert thresholds)

**Specific requirements:**
- Career options articles: 2,200+ words, 40% unique (original examples, salary data, market demand)
- Stream selection articles: 2,000+ words, 35% unique (original pros/cons, unique pain points)
- Career roadmaps: 2,500+ words, 40% unique (original skill sequence, tools, projects, timeline)
- Location guides (if created): 2,200+ words, 40% unique local context

---

## How These Rules Work Together

### For BOFU Service Pages at Scale

**Before publishing ANY page:**

1. **Identify the page type:**
   - Location page? → Apply "Local BOFU Rules" from BOFU_PAGE_PROMPT.md
   - Audience/stage page? → Apply "Non-Local BOFU Rules" from BOFU_PAGE_PROMPT.md
   - Both type of page? → Apply BOTH rule sets

2. **Build the page with required elements:**
   - Original problem framing (unique to this keyword's intent)
   - Original objections and examples (not reusable on sibling pages)
   - Original internal links (at least 1 unique to this page's theme)
   - Assessment mentions ONLY if assessment-intent keyword (use Assessment Mention Rules table)

3. **Run pre-publishing audit:**
   - Compare to nearest sibling page
   - Highlight unique content blocks
   - Measure % unique (must be ≥ 30%)
   - Check red flags checklist (all must pass)
   - Verify assessment compliance (if non-assessment keyword)

4. **Before going live:**
   - Run BOFU_PAGE_PROMPT_FOLLOWUP.md audit
   - Verify doorway-prevention checks
   - Ensure uniqueness ≥ 30%
   - Confirm no red flags triggered

### For Blog Articles at Scale

**Before publishing a category with 20+ articles:**

1. **Research first:**
   - Collect broad source set
   - Avoid recycling the same research across keyword variations
   - Build original insights specific to each keyword

2. **Build with required elements:**
   - Unique examples/case studies (specific to this article's keyword)
   - Original frameworks/step-by-step guidance (not copied from sibling articles)
   - Original decision criteria or constraints addressed
   - Research depth appropriate to the keyword

3. **Pre-publishing audit per article:**
   - Measure % unique content
   - Check against red flags (do not publish if ANY flag true)
   - Verify section structure differs from at least 1 sibling article
   - Confirm examples are specific to this keyword

4. **Monitor at scale:**
   - Track Google Search Console for duplicate-content warnings
   - Monitor CTR (doorway content typically 20%+ lower)
   - Set alerts for 15+ position drops within 30 days

---

## Minimum Unique Content Thresholds

### BOFU Pages (Service, Guidance, Counselling)

| Page Type | Minimum Unique | Minimum Total Words | Key Unique Elements |
|-----------|-----------------|--------|---|
| **Location page** | 30% | 2,500–3,500 | Local context block (300+ words), unique local objections, unique FAQ |
| **Audience-specific** (e.g., student, professional) | 30% | 2,200–3,000 | Audience-unique objections, examples, decision filters |
| **Stage-specific** (e.g., after 12th) | 30% | 2,200–3,000 | Stage-unique problem framing, constraints, examples |
| **Concept/variant** (e.g., guidance vs coaching) | 25% | 2,000–2,800 | Distinct intent framing only; avoid near-duplicates |

### Blog Articles (Informational Content)

| Article Type | Minimum Unique | Minimum Total Words | Key Unique Elements |
|---|---|---|---|
| **Career options** | 40% | 2,200+ | Original job examples, salary data, market demand, unique entrance-exam context |
| **Stream/degree selection** | 35% | 2,000+ | Original decision criteria, unique audience pain points |
| **Career roadmap** | 40% | 2,500+ | Original skill sequence, tools, projects, timelines |
| **Location guide** | 40% | 2,200+ | Original local industry landscape, companies, institutions |
| **Decision/how-to** | 30% | 2,000+ | Original decision protocol, frameworks, examples |

---

## Assessment Mention Restrictions (Quick Reference)

### Assessment-Intent Keywords ✅ FULL PERMISSION

Examples: "career aptitude test", "career assessment", "stream selector test"

- Assessment CTA can be hero primary CTA
- Full section explaining assessment is OK
- Multiple mentions and links are appropriate
- Assessment-first narrative makes sense

### Non-Assessment Keywords ❌ STRICT LIMITS

Examples: "career counselling", "career guidance", "career coaching"

| Element | Allowed? | Notes |
|---------|----------|-------|
| **Hero CTA** | ❌ NO | Must be service verb: "Get Counselling", not "Take Assessment" |
| **Hero/prominent mentions** | ❌ NO | No assessment headline, badge, or copy in first screen |
| **Full assessment section** | ❌ NO | No standalone assessment-only section in first 3 sections |
| **Contextual inline note** | ✅ ONE only | Inside larger section (deliverables, process) using AssessmentSupportNote |
| **Final CTA primary button** | ❌ NO | Primary button = service (Get Counselling), not assessment |
| **Final CTA secondary link** | ✅ OK | "Or explore free assessments" allowed as secondary link only |
| **Lower-page mentions** | ✅ ONE only | Bottom 40% of page, inside resource list or FAQ context |

**Why:** Google flags "bait-and-switch" (advertising service, delivering assessment-first flow) as doorway pattern

---

## Red Flags: DO NOT PUBLISH

### BOFU Pages

Do NOT publish if ANY of these are true:

- [ ] More than 70% of copy is shared/paraphrased from another BOFU page
- [ ] Page reads as template with only city/audience names swapped
- [ ] All sections use identical order and structure as nearby sibling
- [ ] No original problem framing unique to this keyword's intent
- [ ] Zero unique examples, objections, or decision filters not on sibling pages
- [ ] No internal links to supporting content unique to this page's theme
- [ ] Page would read identically with city/audience name removed
- [ ] Assessment CTA appears in hero for non-assessment-intent keyword
- [ ] No genuine local context (for location pages) or audience context
- [ ] Copy reads auto-generated or like variable-swapped template

### Blog Articles

Do NOT publish if ANY of these are true:

- [ ] 70%+ of article content matches a keyword-variation article
- [ ] All articles in category use identical outline/section structure
- [ ] Examples could be swapped to sibling article without losing relevance
- [ ] Article feels like template with only job/location/stream name changed
- [ ] All articles use same salary data without local/industry context
- [ ] No original research or unique insights vs top-ranking competitors
- [ ] Article structure/framework copied with only keyword substitution
- [ ] Category has 30+ articles with 75%+ duplicate structural patterns

---

## Pre-Publishing Audit Workflow

### Step 1: Compare to Nearest Sibling

Find the most similar page that's already published:
- If location page → compare to another city location
- If audience page → compare to other audience variation
- If stage page → compare to other stage variant
- If blog article → compare to nearby keyword-variation article

### Step 2: Highlight Unique Content

In your draft page, highlight ALL text that:
- Does NOT appear on the sibling page
- Is NOT a rewrite or paraphrase of sibling content
- Is ORIGINAL to this keyword's intent

### Step 3: Measure Uniqueness

Count: **Unique highlighted words / Total page words = % Unique**

Must be ≥ 30% for BOFU pages, ≥ 30–40% for competitive blog articles

### Step 4: Check Red Flags

Go through ALL red flags for your page type.

If ANY flag is true → DO NOT PUBLISH. Fix the issue first.

### Step 5: Verify Section Structure (BOFU Only)

- Does this page follow identical section order as sibling?
- If YES → Redesign at least 2 sections or reorder them

### Step 6: Verify Objections and FAQ (BOFU Only)

- Are top 3 objections identical to sibling page?
- Are FAQ questions generic rewrites with keyword names swapped?
- If YES to either → Replace with unique objections/questions for THIS keyword

### Step 7: Verify Assessment Compliance (Non-Assessment Keywords Only)

Use Assessment Mention Restrictions table above:
- Hero CTA is service verb (Get Counselling), not assessment? ✅
- No assessment section in first 3 sections? ✅
- Assessment mention limited to 1 contextual inline note? ✅
- Final CTA primary = service, not assessment? ✅

### Step 8: Approve and Publish

Only after ALL steps pass → Publish with confidence

---

## Monitoring for Doorway Penalties

### Warning Signs (Check Monthly)

1. **Google Search Console:**
   - Duplicate content warnings (red flag for location/variation pages)
   - Avg CTR drop of 20%+ (doorway content typically underperforms)

2. **Ranking Changes:**
   - Any page drops 15+ positions within 30 days of publishing (penalty signal)
   - Entire category loses 3-5 positions on 40%+ of pages

3. **Traffic Changes:**
   - New pages get zero organic traffic after 60 days (might indicate suppression)
   - Bounce rate 5-10% higher than comparable pages (users not finding what they searched for)

4. **Content Patterns:**
   - Category has 30+ articles but all use same outline structure
   - All location pages read almost identically with only city names different
   - All audience pages have same objections, just with audience labels swapped

### If Warning Signs Appear

1. **Stop publishing** in that category/page type
2. **Audit existing pages** using uniqueness measurement (% unique content)
3. **Identify pages < 30% unique** → Mark for update or removal
4. **Add original content** to pages that fail threshold
5. **Vary structure** of remaining pages
6. **Resume publishing** only after audit is complete

---

## Scale Thresholds by Page Type

| Volume | Strictness | Monitoring | Publishing Strategy |
|---|---|---|---|
| **1–5 pages** | Manual review possible | None required | Can be stricter on requirements |
| **6–20 pages** | Automated uniqueness check, 30%+ threshold | Spot checks | Medium oversight |
| **21–50 pages** | Strict audit before each page | Weekly GSC checks | Staggered publishing, pre-audit required |
| **50+ pages** | VERY strict audit, 35%+ unique for scale | Monthly GSC review, monthly CTR analysis | Wave-based publishing (5-10 per wave), audit between waves |

---

## Additional Advanced Rules (Critical for Scale)

### Keyword Cannibalization Prevention

**Do NOT create multiple similar pages targeting the same user intent.**

Example of WRONG approach:
- `/services/career-counselling/locations/career-counselling-in-rajkot/`
- AND `/services/career-guidance/locations/career-guidance-in-rajkot/`
- Both pages rank for "career counselling in Rajkot" (cannibalize each other)
- Google doesn't know which is the "main" page
- Authority is split between two URLs
- Both pages lose ranking power

**Correct approach:**
- Keep unified parent: `/services/career-counselling-and-career-guidance/locations/`
- Single page: `/services/career-counselling-and-career-guidance/locations/career-counselling-in-rajkot/`
- Use service-neutral language: "Career Counselling and Guidance in Rajkot" (covers both intents)
- Page serves BOTH intents (users searching "career guidance in rajkot" and "career counselling in rajkot" both land here)

**Sitemap rule:**
- Only one URL per user intent in sitemap
- If you have two near-duplicate pages, one must be noindex or redirect
- Never have 2+ URLs for the same city/intent in your sitemap

**Internal linking rule:**
- Do NOT create links from both /career-counselling/ and /career-guidance/ to the same city page
- Link ONLY from the parent hub (unified location parent page)
- This signals to Google that one URL is the "main" location page

### Consolidated Pages vs Separate Pages Rule

**For commercial services that are identical:**

If the service truth is the same (career counselling = guidance = coaching = strategy in your case):

- ✅ **DO:** Use one unified parent and one page per location
  - Parent: `/services/career-counselling-and-career-guidance/`
  - Locations: `/services/career-counselling-and-career-guidance/locations/`
  - Cities: `/services/career-counselling-and-career-guidance/locations/<city>/`

- ❌ **DON'T:** Create separate branches for each service variant
  - DON'T create `/services/career-counselling/locations/<city>/` AND `/services/career-guidance/locations/<city>/`
  - DON'T create `/services/career-coaching/locations/<city>/` as separate from above
  - This dilutes authority, creates cannibalizing pages, and wastes crawl budget

**If services become genuinely different in the future:**

ONLY create separate branches if:
- The service is fundamentally different (e.g., "skills assessment" is truly different from "career counselling")
- Different audience (e.g., "corporate training" vs "student guidance" with completely different content)
- Different CTAs and business outcomes
- Different guidance process

Then:
- Each service gets its own parent hub
- Each service gets its own location pages
- No overlap in keywords or intent
- Clear internal linking separation

### Content Consolidation Rule

**As you scale to 50+ pages, periodically consolidate near-duplicate content.**

Example:
- Page 1: "Career Guidance in Rajkot" (published month 1)
- Page 15: "Career Counselling in Rajkot" (published month 3)
- These 2 pages are 85% identical, compete for same intent

**Consolidation action:**
1. Merge the two pages into ONE stronger page
2. Keep URL of the higher-performing page
3. 301 redirect the lower-performing URL to the main page
4. Update internal links to point to the consolidated page
5. Result: Single authoritative page for that intent

This is better than keeping two similar pages because:
- Authority concentrates on one URL
- No internal competition
- Better ranking potential
- Google prefers consolidated, authoritative pages over scattered thin pages

### Regional Hub Structure (For 30+ Location Pages)

Instead of flat location pages, create regional clusters:

```
/services/career-counselling-and-career-guidance/locations/
  /locations/north-india/          (regional hub)
    /locations/north-india/delhi/
    /locations/north-india/ncr/
    /locations/north-india/jaipur/
  /locations/south-india/          (regional hub)
    /locations/south-india/bangalore/
    /locations/south-india/hyderabad/
    /locations/south-india/rajkot/   (wait, rajkot is west, not south — example only)
  /locations/west-india/           (regional hub)
    /locations/west-india/mumbai/
    /locations/west-india/pune/
    /locations/west-india/rajkot/
```

**Benefits:**
- Topical clustering (regional pages reinforce each other)
- Reduced duplicate patterns (each region has 3-5 cities, not 50 flat pages)
- Stronger internal linking structure
- Easier to vary content (different industries per region)
- Reduces "thin page at scale" risk perception

**Hub page requirements:**
- Regional hub page (e.g., `/locations/west-india/`) is NOT thin placeholder
- Hub explains regional career landscape, industries, opportunities
- Hub links to all child city pages
- Hub gets prioritized in sitemap (0.85 priority) vs city pages (0.80)

### Sitemap Priority Strategy

**For scaled location/variation pages:**

```
Priority 1.0: Homepage
Priority 0.95: Main services hub
Priority 0.90: Parent guidance page (/services/career-counselling-and-career-guidance/)
Priority 0.85: Regional hubs (if applicable)
Priority 0.80: Location pages (/locations/<city>/)
Priority 0.80: Blog category hubs
Priority 0.75: Blog articles
Priority 0.70: Less important pages
```

**Reasoning:**
- Google crawls higher-priority pages more frequently
- Lower priorities signal "these pages are less important to our core business"
- Location pages get lower priority because they're variations, not core unique content
- This prevents Google from thinking location pages are doorways (by deprioritizing them)

### Content Decay & Refresh Strategy

**As pages age, they drift in quality. Implement a refresh schedule:**

**By page type:**
- **Location pages:** Refresh every 6 months (update local data, add new companies, check salary benchmarks)
- **Blog articles:** Refresh every 9-12 months (update research, add new examples, verify data)
- **Audience pages:** Refresh every 6 months (market conditions change fast)
- **Stage pages:** Refresh every 9 months (education and market landscape shift)

**During refresh:**
- Verify uniqueness is still ≥ 30% (compare to current siblings)
- Update local data if published >6 months ago
- Add new examples or case studies to keep content fresh
- Improve mobile rendering if outdated
- Verify internal links are still relevant
- Run through red flags checklist again

**Publish dates matter:**
- Visible publish date signals freshness to Google
- Update to publish date when you refresh substantially
- Pages with old publish dates (2+ years) look stale even if content is good

### Cross-Linking Penalties Avoidance

**Do NOT overlink between similar pages:**

❌ **WRONG (creates internal competition):**
```
Every location page links to:
- 5 other location pages (creates confusion)
- Parent page (good)
- Multiple audience pages (competing for same intent)
```

✅ **RIGHT (clear hierarchy):**
```
Each location page links to:
- Parent location hub (up)
- 1-2 nearby city pages only if genuinely related (lateral, minimal)
- Parent service page (up)
- 1 unique supporting resource (blog, tool)
- Audience-specific CTA if relevant (down to specific audience page)
```

**Rule:**
- Limit lateral links between similar pages
- Prefer vertical links (up to parent, down to audience)
- Avoid linking to every related page (that's for site search/filters, not content links)

### Monitoring: Expanded Metrics

Beyond GSC duplicate warnings, also monitor:

1. **Internal PageRank flow:**
   - Are location pages getting crawled less frequently than parent?
   - (Check via GSC crawl statistics)
   - If location pages crawled 50% less → possible penalty signal

2. **Ranking distribution:**
   - How many location pages rank in top 10 for their keyword?
   - If <30% of pages rank top 10 → might indicate doorway perception
   - If >70% → good sign (pages are differentiated and valuable)

3. **Click-through by page type:**
   - Location pages CTR should be comparable to non-location pages
   - If location pages get 30%+ lower CTR → users might think pages are thin/unhelpful
   - Lower CTR than expected = risk signal

4. **Bounce rate variance:**
   - Location pages should have similar bounce rate to comparable pages
   - If location pages have 10%+ higher bounce rate → content might not match intent
   - High bounce + low ranking = doorway signal

5. **Conversion rate:**
   - Track CTA clicks per page type
   - If location pages have 50% lower conversion than expected → might indicate wrong content
   - Doorway pages typically have poor engagement metrics

---

## Key Takeaways

1. **30% unique minimum:** Every BOFU page must have ≥ 30% genuinely unique content not shared with sibling pages
2. **Local context blocks:** Location pages need 300+ words of original local context (not generic rewrites)
3. **Vary structure:** Not all location/audience pages should follow identical section order
4. **Assessment strict limits:** Non-assessment keywords = NO hero assessment CTA, ONE contextual mention only
5. **Blog scale risk:** 50+ articles in a category need ≥ 40% unique content per article, varied research, distinct examples
6. **Pre-publish audit:** Every page must pass uniqueness measurement and red flags checklist before going live
7. **Monitor at scale:** Track GSC duplicate warnings, CTR drops, and ranking changes monthly when publishing 20+ pages

---

## Files Updated

1. **BOFU_PAGE_PROMPT.md** — Added Anti-Doorway Rules (300+ lines) + Assessment Mention Rules (200+ lines)
2. **BOFU_PAGE_PROMPT_FOLLOWUP.md** — Added Doorway Prevention Audit section to follow-up checklist
3. **SEO_CONTENT_STRATEGY.md** — Expanded Doorway Page Prevention from 15 lines to 400+ lines
4. **BLOG_WORKFLOW.md** — Expanded Anti-Spam and Anti-Doorway Rules from 15 lines to 300+ lines
5. **DOORWAY_PREVENTION_GUIDE.md** — This document (comprehensive reference guide)

---

## Next Steps

1. **Review all updated files** before publishing any new BOFU pages or blog articles at scale
2. **Share this guide** with any writers or agents creating location pages, audience variations, or blog content
3. **Use the pre-publishing audit workflow** before every new page goes live
4. **Set up monitoring** in Google Search Console to track duplicate-content warnings and CTR changes
5. **Plan waves:** For 50+ location pages, publish in 5-10 page waves with audit period between waves
