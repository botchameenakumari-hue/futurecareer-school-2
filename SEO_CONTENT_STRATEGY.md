# SEO Content Strategy

Status: Active internal SEO strategy file

Use this file as the strategy layer for content quality, keyword targeting, internal linking, and bottom-of-funnel/service-page decisions.
This file is internal documentation only.
Do not copy its architecture explanations into public website copy.

## Core URL Architecture

Future Career School should use subfolders and parent-child hierarchy instead of placing every new page directly off the root domain.

Good examples for this project:
- `/services/assessments/`
- `/services/career-counselling-and-career-guidance/`
- `/blog/career-guidance/how-to-choose-a-career-after-12th/`
- future planned examples like `/services/counselling/students/class-8-10/`

Avoid flat URL sprawl:
- `/career-counselling-for-class-10-students/`
- `/best-career-guidance-mumbai/`
- `/career-test-after-12th/`

Why subfolders matter:
- they create cleaner user navigation
- they help Google understand context through visible URL paths
- they make analytics filtering easier by business branch or content silo
- they scale better when the site grows to hundreds or thousands of URLs
- they support cleaner internal linking between parent, child, and sibling pages

## Parent-Child Hierarchy

When a topic has variations, create a parent topic and then child pages.
Do not stuff all modifiers into one long slug.

Good pattern:
- `/services/counselling/students/`
- `/services/counselling/students/class-8-10/`
- `/services/counselling/students/class-11-12/`

Weak pattern:
- `/career-counselling-for-class-8-10-students/`
- `/career-counselling-for-class-11-12-students/`

The parent page should explain the broad topic and link to all major child variations.
The child pages should link back up to the parent and laterally to closely related siblings when it helps the reader.

## Two-Click Internal Linking Rule

Important public pages should not be buried too deep.
Whenever a child or variation page is published, it should be reachable from a hub page that is reachable from the homepage or main navigation.

Practical rule:
- homepage or global navigation links to a major hub
- the hub links to the live child pages
- child pages link back to the hub

For Future Career School:
- `/services/` should link to live service pages like `/services/assessments/` and `/services/career-counselling-and-career-guidance/`
- `/blog/` and category pages should link to published articles
- `/career-resources/` should support deep links by audience, topic, and type
- footer links should support important crawl paths without pretending planned pages are live

## Internal PageRank and Link Flow

Use internal links intentionally.
Every page should have a job in the site structure.

Upward flow:
- child pages link to the parent hub
- assessment articles link to `/services/assessments/`
- guidance, counselling, coaching, and decision articles link to `/services/career-counselling-and-career-guidance/`

Lateral flow:
- sibling pages in the same silo can link to each other when genuinely useful
- do not force unrelated cross-links just for SEO

Hub flow:
- hub pages should summarize the branch and guide users to the next useful page
- hubs should not be thin placeholders
- hubs can exist before every child page exists, but they must still have real user value

## Link Building and Link Juice

A logical subfolder structure significantly improves backlink strategy and niche authority.

In SEO, "link juice" refers to the authority transferred from a backlink to your website.

If all pages sit directly off the root domain, link juice flowing into the homepage spreads thin across every page.
When pages are organized into specific subfolders, any backlink pointing to that subfolder concentrates link juice within all the related pages inside it, making each page more powerful.

### Anchor Text and Subfolder Authority

A backlink with targeted anchor text pointing to a subfolder makes every page inside that subfolder more authoritative for that niche.

For example:
- A backlink with anchor text "career counselling" pointing to `/services/career-counselling-and-career-guidance/` boosts all related pages under that branch.
- A backlink with anchor text "career assessments" pointing to `/services/assessments/` boosts all test and assessment pages under it.

### Backlink Strategy

Build a natural backlink profile by alternating link-building across:
- The homepage (brand authority)
- Specific high-competition pages (direct page authority)
- Distinct subfolder hubs (topical niche authority)

This keeps the backlink profile natural and builds simultaneous authority at multiple levels.

### Proven Real-World Examples

These examples show how strong subfolder topical grouping outperforms flat URL structures:

**Affiliate Mattress Space (NapLab)**
- NapLab competes for "best mattress" — one of the most competitive affiliate keywords.
- They created an 18,000-word hub page at `/best-mattress/` (the hub also serves as the subfolder root).
- They then nested specific variations: `/best-mattress/memory-foam/`, `/best-mattress/side-sleepers/`, etc.
- Result: that single subfolder ranks for over 2,600 keywords in the top three Google positions.

**Legal SEO (Chicago Law Firm)**
- A law firm ranking for "Chicago car accident lawyer" uses the exact phrase as a subfolder: `/chicago-car-accident-lawyer/`.
- They then built specific child pages for every accident variation: `/hit-and-run/`, `/rear-end-accident/`, `/t-bone/`, etc.
- The parent subfolder concentrates topical authority; the children capture every specific variation.

**Application to Future Career School**
- `/services/assessments/` is the subfolder hub; build child pages for `/psychometric/`, `/aptitude/`, `/skill-assessment/` under it.
- `/blog/career-guidance/` is the hub; every article inside it reinforces career guidance topical authority.
- Backlinks to `/services/assessments/` benefit all assessment child pages, not just the hub.

## Non-Commodity Content Standard

Generic content is not enough.
The site should avoid commodity content that only repeats broad public advice.

Good content should be:
- unique: it brings a specific point of view, framework, example, or decision lens competitors do not have
- specific: it speaks to real situations, trade-offs, constraints, and outcomes
- authentic: it shows practical judgment, lived decision logic, or concrete examples instead of generic tips

For this business, strong content should use:
- practical career decision frameworks
- market-fit thinking
- skill-building and proof-of-work advice
- India-aware context without becoming narrow or slang-heavy
- AI-era implications for all career paths
- continuous guidance positioning
- assessment and test CTAs where relevant

## Keyword Relevance Still Matters

Authentic content still needs exact search relevance.

For any target keyword, include it naturally in:
- SEO title tag
- URL slug
- H1
- first sentence or the very beginning of the introduction
- meta description
- at least one H2 when natural
- image file names and alt text when images are used

Do not keyword-stuff.
Use the primary keyword clearly, then use semantic variations naturally.

## Title Strategy

For top-of-funnel and informational blog content:
- usually start with the target keyword for clear relevance
- add a specific benefit, trade-off, or real-world angle when it improves click value
- vary title formats across articles

### Informational Title Formula

For top-of-funnel content, use this formula to stand out from generic competitor articles:

`[Target Keyword] + [specific real-world result, case study, or unique angle]`

Examples for this site's keywords:
- "How to choose a career after 12th: The real constraints no counselor talks about"
- "Career guidance: What actually moved the needle and what wasted time"
- "How to choose a stream after 10th: The 4-checkpoint test before you commit"
- "High income skills: The 3 gaps that stall salary growth for most professionals"
- "How to get an internship with no experience: What worked vs what the guides skip"
- "Salary negotiation: The single reframe that changed what I asked for"
- "How to become a data analyst: The honest roadmap without a CS degree"
- "Career change: How to switch fields without quitting your job or losing income"

The keyword at the start establishes search relevance.
The specific angle at the end gives the reader a reason to click over generic articles.
Do not copy these formats exactly — generate a fresh, specific angle for each keyword.

### Avoiding Obvious Formatting Patterns

Do not make every blog title follow the exact same formula.
Google's systems detect and penalise sites that use rigid, repetitive title patterns.

Specific risks:
- Always using a colon + specific angle on every article
- Always using the same pipe-separated format
- Every title starting with "How to" or "The"

Mix formats naturally:
- Use dashes instead of colons sometimes
- Place the keyword in the middle of the title sometimes
- Occasionally omit the specific angle when the keyword alone is strong enough
- Use questions, declarative statements, and numbered structures across different articles

For bottom-of-funnel service pages:
- use the formula: `[Target Keyword] | [Benefit or Searcher's Goal] | [Brand Name]`
- keep the title readable and click-worthy
- lead with the exact keyword when the page is targeting high-intent search

## AI and Scaled Content Risk

Do not use AI to mass-produce thin templated pages.
Google's scaled-content abuse policies can affect sites that publish many near-duplicate pages with little unique value.

Rules:
- do not create dozens of city pages with mostly identical copy
- do not create keyword-variation pages unless each page has real unique usefulness
- do not publish placeholder pages just to reserve URLs
- do not add planned or noindex pages to the XML sitemap
- do not create pages that only exist to capture long-tail traffic without solving the user's problem

## Doorway Page Prevention (Strict Multi-Layer Approach)

Doorway pages are Google's #1 scaled-content penalty target. Sites publishing 50+ location pages, audience variations, or stage variations with 70%+ duplicate content face significant ranking drops and possible manual actions.

### Why This Matters Right Now

Google's 2024 guidance on scaled-content abuse specifically flags:
- Location pages with 80%+ identical copy (only city name changed)
- Service variation pages with identical structure but keyword swaps
- Pages created primarily for search ranking, not user value
- Near-duplicate page at scale (sites with 100+ pages that share 70%+ content)
- Thin pages designed to capture long-tail traffic without solving problems

Future Career School plans to publish location pages at scale. **Without strict uniqueness rules, this will trigger penalties.**

### Location Page Rules (Applies to 50+ City Pages)

**Every location page MUST have:**

1. **Minimum 30% genuinely unique content** (not shared with other location pages):
   - Original local context block (300–500 words, no generic rewrites or city-name swaps)
   - Unique local challenge or opportunity specific to that city's job market
   - Local industry breakdown, top employers, or career growth patterns unique to that location
   - Unique objections and FAQ questions (not rewrites with city names swapped)
   - Original internal links to supporting local content when available
   - Local educational institutions and their career outcomes (specific to that city)
   - Cost of living, salary benchmarks, or income potential by career stage (city-specific data)

2. **Varied section structure and treatment:**
   - Not all location pages follow the same section order
   - Rotate which comparison rows are emphasized (all 6 rows on Bangalore, 4 selected rows on Rajkot)
   - Different lead section: one city page leads with local industry landscape, another leads with problem framing
   - At least one unique section per page that doesn't appear on nearby city pages

3. **Original hero copy:**
   - Hero should reference something specific about that city's market
   - Not: "Career counselling in [City] for students and professionals..."
   - Better: "Rajkot's manufacturing economy and SME landscape create skill gaps that generic online advice doesn't address. Here's how [specific value] helps."

4. **Unique internal linking:**
   - Link to city-specific blog articles or resources when available
   - Do NOT link every city page to the same 5 generic resources
   - Add at least one link unique to this city's theme (local education hub, industry association, city-specific article)

5. **Uniqueness audit before publishing:**
   - Measure: unique words / total page words ≥ 30%
   - Compare to nearest city page: highlight unique sections
   - Ask: "If I removed the city name, would this page still feel completely different from the similar-sized city page?"
   - If answer is NO, add more unique content before publishing

**Location page minimum standards:**
- 2,500–3,500 words
- 30%+ unique content (verified by paragraph-level comparison)
- 300+ word local context block (no generic rewrites)
- Minimum 3 unique FAQ questions specific to that city
- At least 1 internal link not used on other city pages
- No assessment CTA in hero or prominent sections
- Section treatment differs from at least 1 nearby city page

### Service Variation Pages (Non-Location, Multiple Audiences/Stages)

Even without location variations, pages targeting different audiences or stages can become doorway traps.

**For "Career Guidance [Audience/Stage]" variations:**

1. **Distinct problem framing per variation:**
   - Student after 12th: "You have 3 weeks to choose a course, but nobody's told you the real constraints"
   - Working professional: "You're stuck in a role that doesn't match your skills or income expectations"
   - Do NOT use identical problem framing with only audience labels swapped

2. **Audience-specific objections (not rewrites):**
   - After 12th students object: "I don't know which course to pick", "My score limits my options", "My parents disagree"
   - Working professionals object: "I'm too late to change", "Upskilling feels impossible while employed", "I don't know if I should quit first"
   - These are fundamentally different concerns. Treat them as such.

3. **Distinct FAQ by audience:**
   - Do NOT rewrite the same 6 FAQ questions with audience names changed
   - After 12th page FAQ: "How do I choose between engineering and commerce?", "What if my board score is low?"
   - Professional page FAQ: "Can I change careers at 30+?", "How long does upskilling take while working?"
   - Different audience = different questions

4. **Varied section order and emphasis:**
   - One page leads with "Understanding Your Options", another leads with "Decision Pressure"
   - One page emphasizes comparison matrix, another emphasizes process framework
   - Different visual and narrative rhythm

5. **Unique examples and storytelling:**
   - Use examples specific to the audience (if case studies or blog content exists for that segment)
   - After 12th examples: course-selection dilemmas, board-score anxiety, degree vs skill emphasis
   - Professional examples: role stagnation, skill obsolescence, income plateaus
   - Examples should NOT be generic enough to work for both audiences

**Service variation page minimum standards:**
- 2,200–3,000 words
- 30%+ unique content (audience-specific problem framing, objections, examples)
- Distinct section order from nearest sibling audience/stage page
- Minimum 3 unique FAQ questions not on sibling pages
- At least 1 unique example or use case specific to this audience
- No assessment CTA in hero or prominent sections
- Page would feel fundamentally different even if audience label was removed

### Red Flags: Content That Will Get Penalized

Do NOT publish pages that meet these conditions:

- [ ] 70%+ of page content is identical to or directly paraphrased from a sibling page
- [ ] All sections use the exact same order and naming as a nearby sibling
- [ ] Problem framing reads like a generic template with only city/audience name changed
- [ ] No original objections, examples, or decision criteria unique to this keyword
- [ ] All FAQ questions are rewrites of the sibling page's questions with keyword swaps
- [ ] Assessment CTA appears in hero section for non-assessment-intent keywords
- [ ] Page has zero unique internal links not shared with sibling pages
- [ ] Entire page would read identically with city/audience name removed
- [ ] Local context block is generic (could apply to any city or region)
- [ ] Page feels like a variable-substitution template

**Failing ANY of these = do not publish**

### If Location Pages Are Created Later

**Implementation rules:**

1. Create a useful `/locations/` parent directory:
   - Hub page that explains location-based guidance approach
   - Index of all city pages with real introductions (not just links)
   - Geographic organization or filtering system
   - Links to parent service page (`/services/career-counselling-and-career-guidance/`)

2. Place pages correctly:
   - `/services/career-counselling-and-career-guidance/locations/` as parent
   - `/services/career-counselling-and-career-guidance/locations/<city-slug>/` as child
   - Do NOT create flat `/career-counselling-<city>/` routes

3. Build uniqueness-first approach:
   - BEFORE creating city pages at scale, create local-context database (employers, industries, institutions per city)
   - Create city-specific blog content first (feeds the location pages)
   - Publish location pages in waves: 5-10 cities, verify Google's response, then scale
   - Monitor Google Search Console for duplicate-content warnings

4. Link strategy:
   - Parent location page links to all live city pages with real descriptions
   - Each city page links back up to parent
   - City pages link laterally to DIFFERENT sibling cities (not all to the same set)
   - City pages link to city-specific blog content (if available)

5. Update sitemap and routes:
   - Add to `src/config/site.ts` only when ready to publish
   - Add to XML sitemap only when pages are complete and unique
   - No noindex pages in sitemap (signals doubt to Google)
   - Use priority tag to deprioritize location pages slightly if they're new (0.75–0.8)

### If Service Variation Pages Are Created Later

1. **Place under correct parent branch:**
   - `/services/career-counselling-and-career-guidance/<variation>/` 
   - Not flat routes like `/career-guidance-for-students/`

2. **Make each variation solve a distinct search intent:**
   - "Career guidance after 12th" targets a specific life stage decision
   - "Career guidance online" targets delivery-method intent
   - "Career guidance for working professionals" targets mid-career intent
   - Do NOT create pages that only differ by a label if the underlying guidance is identical

3. **Enforce minimum uniqueness:**
   - 30% original content per variation (audience-specific objections, examples, problem framing)
   - Different FAQ questions (not rewrites)
   - Distinct problem framing (not generic template)

4. **Link back to parent:**
   - Each variation page links to parent service hub
   - Parent links to all variations
   - Consider adding a "comparison" or "choose your path" section on parent that helps users pick their variation

### Measurement and Accountability

Before publishing location or variation pages at scale:

1. **Audit process:**
   - Compare each page to its nearest sibling
   - Measure % unique content
   - Verify red flags checklist
   - Get explicit approval if any page is <30% unique

2. **Monitoring:**
   - Track Google Search Console for duplicate-content warnings
   - Monitor rankings for 30 days after publishing location pages
   - Set alert if any location page drops 20+ positions (signals duplicate-content penalty)
   - Track average CTR by page type (doorway pages typically have lower CTR)

3. **Standards by volume:**
   - 1–5 pages: Manual review, can be stricter
   - 6–20 pages: Automated uniqueness check, 30%+ threshold
   - 21–50 pages: Strict regional hubs, significant unique content per page, staggered publishing
   - 50+ pages: Must have external blog content supporting pages, regional clustering, strict audit before each wave

### Non-Commodity Content Standard (Applies to All Variations)

Generic content that only repeats public advice will not survive at scale.

Every BOFU page, especially location and variation pages, must have:

- **Unique perspective:** A decision framework, insight, or approach competitors do not offer
- **Specific situations:** Real constraints, trade-offs, and outcomes (not generic tips)
- **Authentic judgment:** Practical wisdom, not motivational filler
- **Market-fit thinking:** India-aware context, AI-era implications, skill-first approach
- **Original examples:** Examples that could NOT be reused on sibling pages

If a page reads like it could be swapped for another with minimal changes, it's commodity content and will be penalized.

## Technical On-Page Rules

Every public indexable page should have:
- one H1
- logical H2 and H3 structure
- title tag
- meta description
- canonical URL
- mobile-friendly layout
- internal links to relevant hubs
- structured data when useful
- server-rendered critical content

Do not rely on JavaScript for critical indexable content.
JavaScript interactions are fine for filters and tools, but important SEO copy and links should exist in the server-rendered HTML.

## Human-First Structure

Do not organize content for AI chunking.
Organize it for humans.

Use:
- short sections
- clear headings
- helpful lists and tables
- direct answers early
- practical examples
- CTAs that match the reader's stage

Avoid:
- shallow generic advice
- formal filler
- repeated title templates
- long paragraphs that hide the answer
- public explanations of internal SEO architecture

## Authority, Intent, and Relevance

The core SEO rule for this project:
- build authority
- satisfy the user's intent
- make pages relevant to exact target keywords
- publish only pages that are useful enough to deserve indexing

Search pages should help the user make a better decision, not just exist to target a keyword.
