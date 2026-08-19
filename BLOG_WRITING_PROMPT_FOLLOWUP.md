# Blog Writing Prompt Follow-Up

Status: Active

**Use this as the second-pass audit after `BLOG_WRITING_PROMPT.md`. It reinforces the main prompt; it does not replace it.**

## Google Analytics Verification (Mandatory)

Before considering the page complete, confirm that it uses `src/layouts/BaseLayout.astro`, which
already supplies `src/components/GoogleAnalytics.astro` and
`src/components/ConsentBanner.astro`. Do not copy or directly import either component into the page.
In the rendered HTML, verify that the shared Analytics initialization and consent controls each
appear exactly once, with no page-level Google tag or static `gtag.js` request before consent.

Please double check whether you have implemented all the instructions given in the last prompt.
But make sure you add more relevant, useful, or actionable topics or subtopics or H2, H3 just using your common sense or based on the user's or reader's relevant needs.
You haven't been as exhaustive as I expected in terms of the number of relevant topics or subtopics you have covered in just this article.
We have to beat all the existing top ranking articles, remember?

Additional follow-up checks:
- [ ] Answer-first SEO check: the first sentence or lead paragraph directly answers the keyword, not only defines the topic or introduces the article.
- [ ] Every informational article has a `.key-takeaways`, `short version`, or visually equivalent answer-summary block near the top, ideally immediately after the lead paragraph and before jump navigation, routine internal links, or CTAs.
- [ ] The top summary gives the answer in 2-3 tight sentences. If bullets are used, they still need to deliver the main answer, the decision filter, and the next practical step without becoming a table of contents.
- [ ] The page does not open with only a jump nav, `What this article covers`, blog-category link, CTA, or generic definition before giving the answer. Add a lead answer and short-version block first when needed.
- [ ] After the lead answer and short-version block, use 1-3 short framing paragraphs when they help deepen the answer; do not add framing merely to delay the useful content.
- [ ] The article opening (first paragraph and key-takeaways box) carries at least one core positioning advantage — earlier financial freedom, high-income skill portfolio, or unlocking high income opportunities — when the topic fits. These must not appear only in the CTA section. An opening without a positioning signal is under-positioned.
- [ ] At least one positioning signal appears in a heading, tile label, bolded sentence, or support line a skimmer would see — not buried inside long prose only (scannability check).
- [ ] Positioning appears at minimum in: (1) the article opening, (2) a mid-article skill-building or decision section, and (3) the CTA section. If positioning is only in the CTA, the article body is a positioning dead zone — add one signal earlier.
- check that any FCS positioning in CTAs, CTA support lines, or business description sections carries at least one core positioning advantage: earlier financial freedom, high-income skill portfolio, or unlocking high income opportunities — not just a generic service description
- if the article touches on skill-building, verify that the holistic skill approach is visible where relevant: right skill mix for the person, proof of work, communication, market positioning, personal fit, and financial reality — not just a list of technical skills
- if the article mentions degrees or the degree debate, make sure the framing is skill-first but not harshly anti-degree: degrees have a place, the problem is degree-only thinking without skill-building alongside it
- if the article recommends college spending, test it against the conservative 10%-of-total-education-budget benchmark and show the reader what the remaining budget could fund; label 10% as a strict planning heuristic, not a universal research fact
- if spending materially above the 10% benchmark is recommended, justify it using course-specific evidence such as accreditation or licensing need, current teaching quality, lab or clinical access, internships, verified placement outcomes, peer or alumni access, and realistic income after total cost and debt — not general college prestige
- if self-learning is viable for the field, put high-quality YouTube learning and the best relevant online-course platforms first, then compare other current free or affordable routes such as official documentation, open courseware, books, communities, apprenticeships, internships, and real projects; assess individual courses rather than endorsing an entire platform, and require evidence of learning through work, feedback, judgment, or outcomes rather than course collection
- if the profession requires an accredited degree, licence, supervised practice, laboratories, clinical training, or another formal gate, say so clearly and do not present internet learning as a substitute for that requirement
- if the keyword is about the best course, online course, certification, bootcamp, coaching program, diploma, or another learning product, apply every relevant college rule: avoid overspending, compare free and affordable alternatives first, test the subject before committing heavily, check whether the credential is genuinely needed, and protect the learner's wider education budget and financial security
- supplied-perspective usage audit:
  - verify that every supplied perspective relevant to the keyword has been applied
  - when a relevant perspective forms part of the direct answer, verify that it appears naturally in at least one answer-first block near the top
  - when a relevant perspective provides secondary context, verify that it appears in the section where that context becomes useful
  - verify that relevant perspectives have been adapted to the supplied keyword instead of being inserted as generic or stock wording
  - combine overlapping ideas when needed to prevent repetition without removing their meaning
- AI-future perspective audit:
  - show AI as practical leverage combined with deep domain knowledge, workflow design, verification, privacy judgment, and ongoing learning—not as a generic tool list or replacement panic
  - if using `10x`, `100x`, `future-proof`, or similar language, frame it as conditional potential rather than a promised multiplier or guaranteed outcome
  - connect AI use to a valuable domain problem and visible result; tool familiarity alone is not proof of high-income potential
- career/course/degree/skill perspective audit (also applies to "is this a good career", "should I choose this career", "career scope" and similar career-choice queries, not only explicit course/degree keywords):
  - do not judge a path only by whether it gives a first job; compare fit, time to useful income, growth, ceiling, portability, cost, resilience, and realistic consulting, freelance, private-practice, product, content, or business leverage
  - show how domain knowledge can combine with communication, people skills, suitable language ability, AI fluency, market positioning, and relevant personal branding or content; use confidential or non-public proof formats where public posting does not fit
  - make clear that normal college is not a complete career system; preserve money and time for current learning, tools, projects, feedback, experience, networking, and future upskilling
  - retain the 10% education-budget starting heuristic; treat spending above roughly 20% as a serious caution requiring course-specific evidence, while clearly labelling both as planning heuristics rather than universal facts
- growth, scalability, and AI-leverage audit (career/good-career/career-choice keywords):
  - verify the article gives a real, researched verdict rather than a safely neutral or reflexively positive one; if the honest answer is mixed, narrow, or cautionary, the article says so instead of softening it
  - verify growth potential is explicitly addressed: does this career have real headroom to scale to significantly higher income or seniority, or is it structurally capped — and is that stated plainly, with a reason
  - verify the article names the specific moves, specialisations, or leverage paths (ownership, consulting, freelance, positioning) that separate the strongest outcomes in this field from the median, not just "work hard and grow"
  - verify concrete scaling actions or skills are named to add to this career; a generic "keep upskilling" line alone is insufficient
  - verify AI leverage is addressed specifically for this career: what to learn, how to start, and the realistic options — or a plain statement that AI leverage is currently minimal for this field if that is the honest read
  - verify AI/market disruption risk is addressed honestly, naming the specific pressure (automation of a sub-task, market saturation, technology substitution) rather than a vague hedge, or stating plainly that the risk is currently low
  - verify a staged AI-leverage path is given where relevant: what to do now versus what becomes possible later as tools and adoption mature
  - verify genuinely better or significantly better adjacent career alternatives are named where they exist, with the concrete reason they beat this option; confirm no alternative is named just to pad the section when none is actually meaningfully better
- study-abroad perspective audit:
  - treat large education loans as high risk when repayment depends on uncertain visas, foreign jobs, exchange rates, or exceptional starting pay
  - if a top-five or top-tier threshold is used, label it as a deliberately strict screening heuristic and still verify the chosen program's course-specific outcomes, total cost, visa pathway, and downside
  - compare a debt-light/local alternative and test any 10%-25% budget range against actual family security
  - do not count a hoped-for scholarship as guaranteed funding; check renewal terms, living costs, work restrictions, visa rules, currency risk, and the funding-gap plan
- medicine/dentistry/allied-health perspective audit:
  - show the whole training and earning runway, postgraduate-seat competition, supervised experience, setup cost, local demand, and time to patient trust where relevant
  - state the true minimum qualification and registration requirement; do not falsely claim that postgraduate study is legally mandatory for every doctor or dentist
  - do not romanticise clinic ownership; compare capital, compliance, referrals, patient flow, break-even time, and working under an established practice first
  - for pharmacy and paramedical paths, discuss common early pay and ceiling constraints plus realistic specialisation or ownership routes; for psychology and nutrition, include credibility, ethical scope, and client-building requirements
- stream-selection perspective audit:
  - before recommending PCB or another biology-heavy route, test genuine interest, workload fit, long training, competitive entry/postgraduate routes, cost, and credible backups
  - when a genuinely undecided student can sustain mathematics and has no biology-only goal, consider PCM as the broader default while naming the medicine, dentistry, veterinary, and some agriculture/life-science routes it closes
  - do not present either PCM or PCB as universal; decide through interest, ability, eligibility, cost, time to income, backup options, and the skill portfolio built alongside the stream
- government-jobs perspective audit:
  - compare selection probability, attempts, preparation time, foregone income, transferability of exam study, and backup employability
  - require a parallel skill, proof, or income route that survives an unsuccessful exam attempt
  - explain structured pay and limited scalable upside honestly, but do not claim that ethical financial freedom is literally impossible; saving and investing still matter and service-specific outside-work rules must be verified
  - discuss bureaucracy, transfers, hierarchy, pressure, or corruption exposure only when relevant to the specific role; never imply that every department or employee is corrupt
- business-builder perspective audit (freelancing, consulting, solopreneurship, creator/gig income, family/small business):
  - verify the value-drivers, specific-beats-broad positioning, clear-offer, and productized-work ideas under "Why Someone Actually Says Yes" have been applied wherever relevant, adapted to the specific keyword rather than pasted generically
  - verify "Know the Numbers Before You Try to Scale" (acquisition cost vs long-term value, revenue vs profit, delegation, owned distribution), "Keeping People Around," and "Earning Word of Mouth" have been applied wherever relevant
  - verify the Practical Business-Builder Playbook has been applied wherever relevant: value-based/productized pricing over hourly by default, a referral-and-warm-outreach client-acquisition order before cold outreach, written scope/deposit/change-request discipline, India GST and Udyam/MSME basics when the article touches setting up or running paid work, and systems/process-documentation thinking over founder-does-everything hustle
  - verify the newer Playbook additions are applied where relevant: precise positioning (who it's for, what they'd do instead, why this is better), handling price pushback and rate increases, building a durable/hard-to-copy edge, and financial discipline as income grows (treating payments as already spoken for, automating savings, not confusing revenue with security)
  - do not hardcode specific GST thresholds, rates, or MSME benefit figures as permanently fixed; instruct verification against current official sources at time of writing
  - do not treat platform-only income (a single marketplace, single social platform) as a stable end state; flag platform dependence and point toward an owned channel or direct client relationships
  - keep this content in plain, generalized language — do not let it read as lifted from any single named business author, book, or branded framework; synthesize ideas in the site's own voice
- for every course recommendation, judge the specific course rather than its platform name; check instructor credibility, recency, syllabus depth, practice, feedback, project quality, support, refund terms, independent reviews, and credible learner outcomes
- make the paid value explicit: if the underlying information is already free, identify what the learner is paying for — structure, expert feedback, accountability, supervised practice, assessment, community, equipment, placement access, or a genuinely valued credential
- reject generic “best course” rankings driven by popularity, star ratings, provider prestige, or affiliate value; match the course to starting level, goal, learning style, time, budget, language, feedback needs, and target role
- make every recommended course lead to a practical output or verified capability; do not treat course completion or certificate collection as sufficient proof
- do not assume the first-pass research was enough; expand the source set again if needed
- if the article still feels based on only a small number of websites, continue broad research before calling the follow-up complete
- add more updated, practical, and relevant information only after checking a much wider source base
- for broad or competitive topics, keep collecting role signals, official facts, salary context, degree or exam requirements, hiring patterns, and practical decision factors from many relevant websites
- people-first quality audit:
  - does the article contain original analysis, synthesis, reporting, or practical clarity beyond a generic rewrite?
  - would a real student, parent, fresher, professional, or career changer save, share, or recommend it?
  - could the person finish the piece without needing an immediate second search for the basics?
  - does it feel unique and non-commodity on its own, rather than like a phrasing variation leading to the same CTA?
  - if the answer to most of these is no, the article still needs substance
- research and fact audit:
  - verify changing facts against current official or primary sources
  - use wider source diversity for role signals, hiring reality, salary context, and practical decision factors
  - do not force a named source family or statistic when the keyword does not need it
  - if a claim is not well-supported, verify harder or leave it out
- Review-schema audit:
  - keep `BlogPosting` as the main schema for an ordinary informational blog
  - add `Review` schema only when the visible article genuinely reviews one specific named item supported by the applicable structured-data rules
  - verify that the reviewed item, author, review text, and any marked-up rating are also clearly visible on the page
  - never invent a rating, reviewer, testimonial, aggregate score, or dummy review section to qualify for Review schema
  - never use self-serving `Review` or `AggregateRating` markup for Future Career School, its own services, or testimonials displayed on its own website
  - validate any genuine Review markup with Google's Rich Results Test before publishing
- plain-language audit:
  - student- and parent-facing articles should read in very plain English
  - the first 120 words should mostly use words a Class 8-10 student already knows
  - keep one main idea per sentence where possible
  - explain jargon quickly
  - if a student, parent, or tired working professional could not paraphrase the first paragraph after one read, rewrite it simpler
- proof and money-risk audit:
  - if the article calls a path high-value, it should explain the human edge, urgent problem, ceiling, and depth, not just pay
  - if the article compares careers, degrees, or salary outcomes, starting salary should not be treated as the whole decision
  - if the article mentions pay bands or high-paying roles, clarify stage, employer type, proof, timeline, and whether the outcome is median, strong, or exceptional
  - if the article recommends an expensive, prestige-heavy, abroad, or 1%-path route, include the backup skill, backup proof, or backup income path
  - if the article helps the person choose a skill, give a concrete low-risk test instead of vague exploration
- audience-specific substance audit:
  - when the article targets a specific life stage or pressure, include the person's weekly reality, expensive mistake, proof format, and first small test where relevant
  - name a safer adjacent path or multiplier skill when that changes the decision quality
  - if removing those audience-specific details would leave the article mostly unchanged, the article is still too generic
  - if public proof is part of the article, prefer one primary proof shelf built deeply before adding more platforms
  - if outreach is part of the article, the first message should include one specific observation, one relevant work link or proof point, and one small question
- if the article uses any named framework or protocol, verify that the first introduction clearly uses the exact same name and that later references point back to it consistently
- do not leave a later mention like `the 4-Checkpoint Protocol` hanging if the earlier section only used vague wording such as `four filters`
- if the first sentence still does not answer the query or prove relevance immediately, rewrite it
- if the first 2 to 3 sentences still feel slow, generic, or definition-heavy, tighten them until the reader gets the answer before scrolling
- if the keyword is awkward in the exact form, use a close natural variation near the start instead of forcing unnatural phrasing
- if any informational article still opens without a short scannable answer layer, add or strengthen the `.key-takeaways` box near the top; do not reserve this only for long articles
- improve the page design as part of the follow-up pass when needed:
  - fix cramped card padding
  - improve mobile spacing
  - create clearer text hierarchy and contrast
  - avoid an article where all text feels like the same visual weight and same color
  - if the same design weakness would likely repeat in future posts, update `src/layouts/BlogPostLayout.astro` instead of patching only the current article
- kill the "flat grey card" look during the follow-up:
  - if a card grid uses one uniform border, background, and single accent colour for every card, add cycling accent colours, an accent strip or coloured dot per card, and a subtle hover lift
  - if inline sub-lines like `Best for:` or `Watch out:` are blending into body text, move them into distinct tinted rows (teal for fit/positive, gold for caution) with matching coloured labels
  - if two consecutive sections use the same component treatment, vary one of them
  - rely on the shared layout's H2 kicker and `.lead-para` styling for section rhythm instead of re-inventing it per article
- audit tables during the follow-up:
  - **every table** must have `data-label` attributes on every `<td>` regardless of column count — even 2-column tables overflow at 390px when content is text-heavy. Check every table, not just wide ones
  - verify in code that every table is wrapped and every `<td>` has an accurate `data-label`, then verify the rendered article at approximately 390px; every table must remain fully readable and the page must not overflow horizontally
  - never leave a published table that horizontally cuts off columns at 360–430px; stack it or simplify it
- attack wall-of-text during the follow-up (this is a common, serious failure):
  - if prose runs the full page width, restore the constrained reading column; never let text span 1000px+ lines
  - if the article opens without a short scannable summary, add a `.key-takeaways` box near the top; a lead paragraph alone is not enough when the article is informational and competitive
  - if FAQs render as a long always-open stack, convert them to the `.faq-accordion` `<details>` accordion (open the first item only)
  - if any other long reference block is a wall, collapse it into `.accordion` disclosure
  - if paragraphs or card text are dense, split them, shorten them, and add breathing room
  - keep every paragraph to a maximum of 1-3 sentences
  - confirm the page reads as scannable chunks a low-attention reader can move through, not one unbroken column
- improve article UX and readability, not just content quantity:
  - if new sections are added, update the jump navigation so the article remains easy to scan
  - make anchor navigation feel intentional: section targets should land cleanly below sticky headers, not feel broken
  - improve long-article wayfinding with section rhythm, summary blocks, comparison blocks, and clear visual transitions between major ideas
  - avoid overusing one component type for many consecutive sections; vary the treatment when it improves readability
  - reduce paragraph fatigue: split dense stretches, surface the takeaway, and make next actions obvious
  - if an article now depends on several parent, sibling, or next-step links, do not leave them scattered only inside random body paragraphs; add a dedicated standalone related-links section
- improve article UI and scalability, not just one-page cosmetics:
  - strengthen spacing consistency between sections, cards, tables, FAQs, and notes
  - keep table wrappers, grids, and FAQ patterns scalable for future longer articles
  - prefer reusable CSS patterns when the same visual block appears more than once inside the article
  - if a repeated visual pattern is emerging across multiple blog posts, move it toward shared layout or shared component logic instead of duplicating one-off styles forever
- do a public-copy slop sweep before finishing:
  - remove lines that sound like developer commentary, content-planning notes, or page narration instead of reader help
  - fix related-link descriptions, CTA helper text, jump-nav labels, and card blurbs when they explain structure instead of value
  - if the same weak phrasing would repeat across articles, update the shared blog layout or shared blog component instead of patching only one post
  - run `npm run check:public-copy` after build and fix any rendered-copy failures before considering the article done
- improve mobile-first experience deliberately:
  - check narrow-screen readability around 360px to 430px widths
  - ensure multi-column blocks collapse cleanly before they feel cramped
  - protect tap comfort, line length, and visual breathing room on phones
  - long tables should remain readable with overflow wrappers, and if still too dense, convert the information into cards or simpler blocks
- verify mobile rendering before finishing:
  - confirm table wrappers, accurate `data-label` attributes, responsive grid classes, and the absence of fixed-width article content in code
  - run a clean build and the public-copy check
  - render the completed article at approximately 390px
  - confirm that `document.documentElement.scrollWidth` does not exceed `document.documentElement.clientWidth`
  - visually confirm that tables, grids, cards, text, links, buttons, accordions, and CTAs remain readable and usable
  - also verify approximately 360px and 430px when the article contains an unusually wide table, custom grid, or page-specific visual component
  - fix every failure before publishing; correct `src/layouts/BlogPostLayout.astro` when the problem would otherwise affect later articles
- if the article still looks visually flat or awkward on mobile, keep improving the design before considering the follow-up complete

## Blog Article Uniqueness Audit (mandatory once the article's category has 20+ published articles)

This audit exists because Google's scaled-content-abuse and doorway-page policies target informational
blog content published at high volume, not just commercial pages. Run it as part of the follow-up pass
whenever the article's blog category (per `src/config/blog.ts`) already has, or will have after this
article, roughly 20 or more published articles. Below that volume it is still good practice, just less
strictly mandatory.

Minimum uniqueness bar: at least 30% of the article's content (examples, frameworks, data, decision
criteria) must be original to this keyword and not swappable into the nearest sibling article without
losing relevance. Career-options articles specifically need 40% unique content per the minimum-content-
standards table earlier in the main prompt — treat that number as the bar for this category, and 30% as
the floor for everything else.

Work through these six checks against the nearest sibling article in the same category:

1. **Compare to the nearest sibling article** (same category, closest keyword). Does this article solve
   a genuinely different problem or take a distinct angle? If not, reframe it around a unique constraint
   or audience pressure before publishing.
2. **Check section structure.** A shared outline (Overview / Who it's for / Roadmap / Mistakes / FAQ) is
   fine if each section's actual content differs. It is not fine if the outline and the content are both
   identical with only the keyword swapped.
3. **Check examples and case studies.** Could the top 3 examples be moved into a sibling article without
   losing relevance? If yes, make them specific to this keyword.
4. **Check research depth.** Does the article cite sources and data unique to this keyword, or is it
   generic career advice with the keyword inserted? Recycled research across sibling keywords reads thin.
5. **Measure unique content.** Roughly estimate: unique words (original insights, examples, data, framing)
   divided by total article words. Must be ≥ 30% (≥ 40% for career-options). If it falls short, add more
   original research, examples, or decision criteria rather than padding length.
6. **Check internal links.** Does this article link to at least one sibling or resource not linked from
   every other article in the category, or are all internal links boilerplate and identical across the
   category?

**Do not publish if any of these are true** (red flags, carried over from the minimum-content-standards
section above): 70%+ of the article matches a nearby keyword-variation article; all articles in the
category share an identical outline AND identical content within it; examples could be swapped to a
sibling article with no relevance loss; the article reads as a template with only the keyword changed;
every article in the category reuses the same salary/data figures without unique context; there is no
original research or insight beyond what a top-ranking competitor already has; the category already has
30+ articles with 75%+ duplicate structural patterns.

**Publishing strategy scales with category size** — the audit above is not optional past a point:

| Category volume | Strictness | Publishing approach |
|---|---|---|
| 1–19 articles | Good practice, not mandatory | Normal pace |
| 20–49 articles | Mandatory audit before each new article (this section) | Normal pace, audit every time |
| 50+ articles | Mandatory audit, and the uniqueness floor rises to ≥ 40% for every article type in the category, not only career-options | Staggered/wave publishing (a handful at a time), with an audit checkpoint between waves rather than publishing continuously |

**Ongoing monitoring once a category passes 20+ published articles** (worth doing periodically, not just
per-article):
- track Google Search Console for duplicate-content warnings on that category
- watch average CTR by article type (doorway-style content typically runs 20%+ lower CTR than genuinely original content)
- treat any article dropping 15+ SERP positions within 30 days of publishing as a possible duplicate-content penalty signal
- also treat it as a signal if the whole category loses 3-5 ranking positions across 40%+ of its articles at once, if new articles get zero organic traffic 60 days after publishing, or if bounce rate on the category runs 5-10%+ higher than comparable categories
- **if any warning sign appears:** stop publishing new articles in that category, audit every existing article's uniqueness percentage, mark anything below its required floor (30% general / 40% career-options / 40% category-wide once 50+) for a content update, vary any repeated structure across the flagged articles, and only resume publishing once the audit is complete and fixes are live
