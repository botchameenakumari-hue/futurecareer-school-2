# Image audit — blog category: stream-selection

4 pages. Pages are ordered by search priority (P1 first). Submit one page section at a time together with `docs/image-audit/00-READ-FIRST.md`.

### /blog/stream-selection/cuet-vs-jee-which-is-better-for-career/

**H1:** CUET vs JEE which is better for career: an honest, exam-by-exam answer  
**Category:** stream-selection · **Words:** 4617 · **H2 sections:** 16 · **Search priority:** P1 (1 clicks, 1756 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 3 other articles, with identical alt text and captions, so they say nothing specific about “CUET vs JEE which is better for career: an honest…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/stream-selection/cuet-vs-jee-which-is-better-for-career*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“Cuet”, “Jee Which Is Better For…”, “Why this question keeps…”, “The quick answer”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 91%, 91%, 92%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `stream-selection-editorial-cover.webp`, `stream-selection-context.webp`, `stream-selection-filters.webp`, `stream-selection-family.webp`, `stream-selection-sequence.webp`, `stream-selection-test.webp`, `stream-selection-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `cuet-vs-jee-which-is-better-for-career.webp`, `cuet-vs-jee-which-is-better-for-career-detail.webp`, `cuet-vs-jee-which-is-better-for-career-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `cuet-vs-jee-which-is-better-for-career-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `cuet-vs-jee-which-is-better-for-career-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Close desk-level detail with a partly visible person of an Indian student or adult at a home desk, a classroom desk after hours. Props that belong to “CUET vs JEE which is better for career: an honest, exam-by-exam answer”: notebooks, a laptop and printed course or job information. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: CUET vs JEE which is better for career: an honest, exam-by-exam answer
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 6 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `cuet-vs-jee-which-is-better-for-career-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: CUET vs JEE which is better for career depends on whether you want engineering or a wider degree path.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Why "CUET vs JEE which is better for career" keeps coming up every… / The quick answer: match the exam to the career, not the exam's… / What CUET and JEE actually test / CUET vs JEE at a glance / Which one is actually harder
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “CUET vs JEE which is better for career: an honest, exam-by-exam answer”
- Title attribute: At a glance: CUET vs JEE which is better for career: an honest…
- Caption (also keep the key point in the HTML text): CUET vs JEE which is better for career depends on whether you want engineering or a wider degree path.
**V2 — Asymmetrical pros-and-cons comparison** (place after the H2 “Why "CUET vs JEE which is better for career" keeps coming up every year” #why)
- File: `cuet-vs-jee-which-is-better-for-career-asymmetrical-cuet-jee-better-career.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: The question sounds like it needs a single winner.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): "JEE is for smart students, CUET is for everyone else." / "Engineering always pays more, so always choose JEE if you can." / "CUET is the safe backup, not a real decision on its own." / "Whichever exam you pick now locks your whole career."
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Asymmetrical pros-and-cons comparison for “Why "CUET vs JEE which is better for career" keeps…”: "JEE is for smart students, CUET is…; "Engineering always pays…
- Title attribute: Why "CUET vs JEE which is better for career" keeps coming up every…
- Caption (also keep the key point in the HTML text): The question sounds like it needs a single winner.
**V3 — Asymmetrical pros-and-cons comparison** (place after the H2 “The real cost difference nobody puts on the brochure” #cost-reality)
- File: `cuet-vs-jee-which-is-better-for-career-asymmetrical-real-cost-difference-nobody.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Families rarely compare these two numbers side by side, but they should.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Families rarely compare these two numbers side by side, but they should. / A serious two-year JEE coaching commitment in a hub city like Kota can run… / Dropout rates in full-time offline coaching batches sit near 20%, and studies…
- Numbers: use ONLY these facts from the article (exact values, no new ones): A serious two-year JEE coaching commitment in a hub city like Kota can run ₹4-12 lakh once hostel, food, and study material are added on top of tuition, with structured online coaching cutting that to roughly ₹1.5-4 lakh. | Dropout rates in full-time offline coaching batches sit near 20%, and studies on Kota's coaching ecosystem have flagged serious stress and mental-health concerns among aspirants — this is a real cost, not only a financial one. | The exam fee itself is ₹1000 per subject for general-category candidates, and because the syllabus mirrors your Class 12 boards, most students can prepare using their existing study plan plus NCERT revision, with coaching as an optional add-on rather than an a
- Alt: Asymmetrical pros-and-cons comparison for “The real cost difference nobody puts on the brochure”: Families rarely compare these two…; A serious two-year JEE…
- Title attribute: The real cost difference nobody puts on the brochure
- Caption (also keep the key point in the HTML text): Families rarely compare these two numbers side by side, but they should.
**V4 — Stat panel or bar chart (only the numbers listed)** (place after the H2 “Your real odds, by the numbers” #odds)
- File: `cuet-vs-jee-which-is-better-for-career-stat-real-odds-numbers.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Respect for an exam should come from understanding the real math, not the family reputation attached to it.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Roughly 15 lakh candidates registered across both JEE Main 2025 sessions, with about… / Combined seats across IITs (18,160), NITs (24,525), and IIITs (9,940) total roughly… / CUET UG saw around 13.5 lakh candidates register in its most recent cycle, but the total…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Roughly 15 lakh candidates registered across both JEE Main 2025 sessions, with about 12.3-14.5 lakh actually appearing. | Combined seats across IITs (18,160), NITs (24,525), and IIITs (9,940) total roughly 52,600 — a national ratio worse than 1-in-25 once branch and category preferences are factored in, and only the top roughly 2.5 lakh JEE Main candidates even qualify to attempt | CUET UG saw around 13.5 lakh candidates register in its most recent cycle, but the total seat count across 200-plus participating universities and every course they offer is far larger than JEE's combined technical-seat pool, which is the main reason CUET's ef
- Alt: Stat panel or bar chart (only the numbers listed) for “Your real odds, by the numbers”: Roughly 15 lakh candidates registered…; Combined seats across IITs…
- Title attribute: Your real odds, by the numbers
- Caption (also keep the key point in the HTML text): Respect for an exam should come from understanding the real math, not the family reputation attached to it.
**V5 — Comparison table** (place after the H2 “What each path actually pays once you look past the label” #career-outcomes)
- File: `cuet-vs-jee-which-is-better-for-career-comparison-each-path-actually-pays.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: This is where families compare the wrong number.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Path | Typical entry-level… | Reality check / Row: IIT engineering graduate | ₹14-24 LPA average across… | Strong outcomes are real… / Row: NIT engineering graduate | ₹6-12 LPA typical branch… | Outcome depends heavily… / Row: Delhi University /… | ₹5-9.5 LPA average across… | Wide spread — a plain… / Row: Generic BCom/BA without… | ₹2.5-4.5 LPA entry-level | This is the outcome…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Path Typical entry-level income Reality check IIT engineering graduate ₹14-24 LPA average across branches; Computer Science offers averaging ₹30+ LPA Strong outcomes are real, but concentrated in CS/branch-specific placements at top-tier IITs — not a flat numb | NIT engineering graduate ₹6-12 LPA typical branch range; ₹23 LPA average has been reported at some top NITs in strong placement years Outcome depends heavily on branch and NIT tier — a Computer Science seat at a top NIT usually outperforms a core-branch seat a | Delhi University / CUET-linked degree ₹5-9.5 LPA average across top DU colleges; up to ₹40-45 LPA for standout offers at colleges like SRCC or Hindu College Wide spread — a plain BA/BCom with no added skill sits on the low end, while a strong college plus real
- Alt: Comparison table for “What each path actually pays once you look past the…”: Path | Typical entry-level… | Reality…; IIT engineering graduate | ₹14-24 LPA…; NIT…
- Title attribute: What each path actually pays once you look past the label
- Caption (also keep the key point in the HTML text): This is where families compare the wrong number.
**V6 — Chronological timeline** (place after the H2 “When JEE is genuinely the right call” #jee-fit)
- File: `cuet-vs-jee-which-is-better-for-career-chronological-jee-genuinely-right-call.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: JEE fits when You want a specifically technical career — engineering, architecture, applied research, or a…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): You want a specifically technical career — engineering, architecture, applied research… / You already have a genuinely strong grip on Physics, Chemistry, and Maths going into… / You and your family have honestly budgeted for 1-2 years of serious preparation… / You are attempting JEE mainly because it is the "default" path for a Science-stream… / You dislike sitting with unsolved numerical problems for long stretches, but assume…
- Numbers: use ONLY these facts from the article (exact values, no new ones): You and your family have honestly budgeted for 1-2 years of serious preparation, including the real financial and emotional cost, not just the exam fee. | Only a JEE Advanced qualification, reserved for the top roughly 2.5 lakh JEE Main rank holders, gets you into an IIT.
- Alt: Chronological timeline for “When JEE is genuinely the right call”: You want a specifically technical…; You already have a genuinely strong…; You and your family…
- Title attribute: When JEE is genuinely the right call
- Caption (also keep the key point in the HTML text): JEE fits when You want a specifically technical career — engineering, architecture, applied research, or a deep-tech path — and are not choosing…

**Done when:** hero + 6 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/stream-selection/engineering-vs-other-streams-which-is-better-career-india/

**H1:** Engineering vs other streams which is better career India: an honest comparison  
**Category:** stream-selection · **Words:** 4959 · **H2 sections:** 14 · **Search priority:** P1 (2 clicks, 316 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 3 other articles, with identical alt text and captions, so they say nothing specific about “Engineering vs other streams which is better career India…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/stream-selection/engineering-vs-other-streams-which-is-better-career-india*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“Engineering”, “Other Streams Which Is…”, “Why this comparison…”, “The quick answer”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 91%, 91%, 92%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `stream-selection-editorial-cover.webp`, `stream-selection-context.webp`, `stream-selection-filters.webp`, `stream-selection-family.webp`, `stream-selection-sequence.webp`, `stream-selection-test.webp`, `stream-selection-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `engineering-vs-other-streams-which-is-better-career-india.webp`, `engineering-vs-other-streams-which-is-better-career-india-detail.webp`, `engineering-vs-other-streams-which-is-better-career-india-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `engineering-vs-other-streams-which-is-better-career-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `engineering-vs-other-streams-which-is-better-career-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Over-the-shoulder shot of a Class 11-12 student with a parent or sibling nearby, a family dining table in the evening. Props that belong to “Engineering vs other streams which is better career India: an honest comparison”: a circuit board, graph paper, a laptop with CAD or code, a notebook. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: Engineering vs other streams which is better career India: an honest…
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 6 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `engineering-vs-other-streams-which-is-better-career-india-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Engineering vs other streams which is better career India depends on fit, not fame.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Why "engineering vs other streams which is better career India" keeps… / The quick answer: match the stream to how you think, not to its… / Engineering vs other streams: what each path actually is / What engineering actually pays and costs in India / The employability gap nobody puts on the brochure
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “Engineering vs other streams which is better career India: an honest…”
- Title attribute: At a glance: Engineering vs other streams which is better career…
- Caption (also keep the key point in the HTML text): Engineering vs other streams which is better career India depends on fit, not fame.
**V2 — Asymmetrical pros-and-cons comparison** (place after the H2 “Why "engineering vs other streams which is better career India" keeps coming up” #why)
- File: `engineering-vs-other-streams-which-is-better-career-india-asymmetrical-engineering-other-streams-better.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: The question sounds like it needs one universal winner.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): "Engineering is for smart students, everything else is a backup." / "Engineering always pays more, so always choose it if you can get in." / "Commerce, arts, and design are safe fallbacks, not real decisions on their own." / "Whichever stream you pick now locks your whole career."
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Asymmetrical pros-and-cons comparison for “Why "engineering vs other streams which is better…”: "Engineering is for smart students…; "Engineering always pays more…
- Title attribute: Why "engineering vs other streams which is better career India" keeps…
- Caption (also keep the key point in the HTML text): The question sounds like it needs one universal winner.
**V3 — Comparison table** (place after the H2 “What engineering actually pays and costs in India” #engineering-reality)
- File: `engineering-vs-other-streams-which-is-better-career-india-comparison-engineering-actually-pays-costs.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Start with the honest range, not the highlight reel.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Factor | Engineering | Other major streams… / Row: What it gets you into | B.Tech/B.E. across CSE… | CA/CS/CMA… / Row: Main entrance route | JEE Main + JEE Advanced… | CUET for most central… / Row: 2026 seat competition | Roughly 67,323 combined… | CUET-linked universities… / Row: Typical 4-year cost… | ₹4-16 lakh at a private… | CA has almost no tuition… / Row: Fresher salary range… | ₹4-8 LPA at most… | CA freshers: ₹6-14 LPA…
- Numbers: use ONLY these facts from the article (exact values, no new ones): across CSE, mechanical, civil, electrical, ECE and newer branches like AI/ML, data science CA/CS/CMA, BBA/BCom/finance, law (CLAT-linked NLUs), design (NID/NIFT/UCEED), medicine (NEET-linked), humanities and social sciences Main entrance route JEE Main + JEE A
- Alt: Comparison table for “What engineering actually pays and costs in India”: Factor | Engineering | Other major…; What it gets you into | B.Tech/B.E.…; Main entrance…
- Title attribute: What engineering actually pays and costs in India
- Caption (also keep the key point in the HTML text): Start with the honest range, not the highlight reel.
**V4 — Asymmetrical pros-and-cons comparison** (place after the H2 “The AI question every engineering-vs-other-stream comparison now needs” #ai-risk)
- File: `engineering-vs-other-streams-which-is-better-career-india-asymmetrical-question-every-engineering-other.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: This did not exist as a serious factor five years ago, and it is now central to the decision.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Engineering: the syllabus-market gap widens further if a graduate leaves with only… / Commerce and CA: routine bookkeeping and basic reporting are increasingly automated… / Law: AI already handles first drafts of standard contracts; the value shifts toward… / Design: AI generates first-pass visuals fast; the value shifts toward research, taste…
- Numbers: use ONLY these facts from the article (exact values, no new ones): AI tools can already handle an estimated 20-40% of common technical functions — coding, generating test cases, documentation, boilerplate scaffolding — which is measurably shrinking the size of entry-level engineering teams at many companies. | India's IT sector is already showing entry-level coding and testing roles contracting by an estimated 20-25% in some segments, while demand grows for engineers who can design systems, integrate AI tools, and own more complex, judgment-heavy work.
- Alt: Asymmetrical pros-and-cons comparison for “The AI question every engineering-vs-other-stream…”: Engineering: the syllabus-market gap…; Commerce and CA: routine…
- Title attribute: The AI question every engineering-vs-other-stream comparison now needs
- Caption (also keep the key point in the HTML text): This did not exist as a serious factor five years ago, and it is now central to the decision.
**V5 — Comparison table** (place after the H2 “What the other streams actually pay once you look past the label” #other-streams)
- File: `engineering-vs-other-streams-which-is-better-career-india-comparison-other-streams-actually-pay.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: This is where families compare the wrong number.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Path | Typical entry-level… | Reality check / Row: CA (Chartered Accountancy) | ₹6-14 LPA typical fresher… | Long, sequential… / Row: NLU law graduate… | ₹14-20 LPA average at top… | Highly selective at the… / Row: UX/UI design (NID/NIFT or… | ₹3-5 LPA entry-level… | Portfolio quality often… / Row: Generic BCom/BA without… | ₹2.5-4.5 LPA entry-level | This is the outcome…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Path Typical entry-level income Reality check CA (Chartered Accountancy) ₹6-14 LPA typical fresher range, ₹12.88 LPA often used as a better benchmark Long, sequential qualification (multiple years across foundation, intermediate, articleship, and final exams), | NLU law graduate (CLAT-linked) ₹14-20 LPA average at top NLUs; ₹15-25 LPA at Tier 1 law firms for standout profiles Highly selective at the top NLUs, but non-NLU law graduates average far lower (₹3-8 LPA) — institution tier matters as much here as it does in e | UX/UI design (NID/NIFT or self-taught) ₹3-5 LPA entry-level; ₹8-20 LPA at product companies with a strong portfolio Portfolio quality often matters more than the design school name — a strong self-built portfolio can outperform a weak institutional pedigree.
- Alt: Comparison table for “What the other streams actually pay once you look past…”: Path | Typical entry-level… | Reality…; CA (Chartered Accountancy) | ₹6-14…; NLU law…
- Title attribute: What the other streams actually pay once you look past the label
- Caption (also keep the key point in the HTML text): This is where families compare the wrong number.
**V6 — Linear process chain or roadmap** (place after the H2 “Use The 4-Checkpoint Protocol before you commit to either path” #checkpoint)
- File: `engineering-vs-other-streams-which-is-better-career-india-linear-use-checkpoint-protocol-before.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: The 4-Checkpoint Protocol turns a family debate about prestige into an actual decision process.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): The 4-Checkpoint Protocol turns a family debate about prestige into an actual… / Run whichever path you are seriously leaning toward through all four… / 01 Biology Do you actually enjoy sitting with one hard numerical problem for 40…
- Numbers: use ONLY these facts from the article (exact values, no new ones): 03 Market Ask what each route actually leads to in 4-6 years, not what sounds more respectable at a family function. | AI can already handle 20-40% of common coding tasks like test generation, documentation, and boilerplate.
- Alt: Linear process chain or roadmap for “Use The 4-Checkpoint Protocol before you commit to…”: The 4-Checkpoint Protocol turns a…; Run whichever path you are…
- Title attribute: Use The 4-Checkpoint Protocol before you commit to either path
- Caption (also keep the key point in the HTML text): The 4-Checkpoint Protocol turns a family debate about prestige into an actual decision process.

**Done when:** hero + 6 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/stream-selection/which-stream-to-choose-in-11th/

**H1:** Which stream to choose in 11th for good career: a fit-first decision guide  
**Category:** stream-selection · **Words:** 4119 · **H2 sections:** 16 · **Search priority:** P1 (4 clicks, 1041 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 3 other articles, with identical alt text and captions, so they say nothing specific about “Which stream to choose in 11th for good career: a fit-first…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/stream-selection/which-stream-to-choose-in-11th*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“Why this decision feels…”, “NEP: streams are no…”, “Science, Commerce, Arts…”, “What each stream…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 90%, 91%, 92%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `stream-selection-editorial-cover.webp`, `stream-selection-context.webp`, `stream-selection-filters.webp`, `stream-selection-family.webp`, `stream-selection-sequence.webp`, `stream-selection-test.webp`, `stream-selection-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `which-stream-to-choose-in-11th.webp`, `which-stream-to-choose-in-11th-detail.webp`, `which-stream-to-choose-in-11th-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `which-stream-to-choose-in-11th-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `which-stream-to-choose-in-11th-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Candid side profile near a window of a Class 11-12 student with a parent or sibling nearby, a family dining table in the evening. Props that belong to “Which stream to choose in 11th for good career: a fit-first decision guide”: notebooks, a laptop and printed course or job information. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: Which stream to choose in 11th for good career: a fit-first decision…
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 5 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `which-stream-to-choose-in-11th-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Which stream to choose in 11th for good career depends on fit, not fame.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Why choosing a stream in 11th feels heavier than it should / NEP 2020 changed the rules: streams are no longer sealed walls / Science, Commerce, and Arts at a glance / What each stream actually pays once you look past the label / When Science is genuinely the right call in 11th
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “Which stream to choose in 11th for good career: a fit-first decision…”
- Title attribute: At a glance: Which stream to choose in 11th for good career: a…
- Caption (also keep the key point in the HTML text): Which stream to choose in 11th for good career depends on fit, not fame.
**V2 — Comparison table** (place after the H2 “What each stream actually pays once you look past the label” #income-reality)
- File: `which-stream-to-choose-in-11th-comparison-each-stream-actually-pays.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Families compare streams by prestige.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Stream | Typical entry-level… | Reality check / Row: Science (PCM route) | ₹3.5–8 LPA (engineering)… | Wide range because… / Row: Science (PCB route) | ₹5–8 LPA (nursing… | MBBS has a genuine income… / Row: Commerce | ₹3.5–7 LPA (B.Com/BBA-led… | One of the widest income… / Row: Arts / Humanities | ₹3–6 LPA entry; ₹10–15+… | The stream itself is not…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Stream Typical entry-level income Reality check Science (PCM route) ₹3.5–8 LPA (engineering); ₹6–20+ LPA for strong software/product roles after skill-building Wide range because outcome depends heavily on college tier and whether the student builds proof of w | Science (PCB route) ₹5–8 LPA (nursing, physiotherapy, pharmacy, biotech); meaningfully higher only after MBBS (5.5 years) plus years of further specialisation MBBS has a genuine income ceiling later, but the entry road is long, expensive, and reachable for onl | Commerce ₹3.5–7 LPA (B.Com/BBA-led roles); ₹12–13 LPA average starting for newly qualified CAs One of the widest income spreads in the country: a plain B.Com with no further skill stays on the low end, while CA, CS, CMA, or a strong finance-analytics skill sta
- Alt: Comparison table for “What each stream actually pays once you look past the…”: Stream | Typical entry-level… |…; Science (PCM route) | ₹3.5–8 LPA…; Science (PCB…
- Title attribute: What each stream actually pays once you look past the label
- Caption (also keep the key point in the HTML text): Families compare streams by prestige.
**V3 — Chronological timeline** (place after the H2 “When Science is genuinely the right call in 11th” #science-fit)
- File: `which-stream-to-choose-in-11th-chronological-science-genuinely-right-call.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Science fits when You still want engineering, medicine, research, data, or a genuinely technical degree kept…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): You still want engineering, medicine, research, data, or a genuinely technical degree… / You can handle a heavier subject load honestly, not just in image but in the actual… / You are willing to build visible proof of work (a project, a portfolio, an internship)… / You are picking it mainly because relatives call it the safest or most respectable option. / You dislike maths or biology at a working level but hope motivation will appear once the…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Chronological timeline for “When Science is genuinely the right call in 11th”: You still want engineering, medicine…; You can handle a heavier subject load…; You…
- Title attribute: When Science is genuinely the right call in 11th
- Caption (also keep the key point in the HTML text): Science fits when You still want engineering, medicine, research, data, or a genuinely technical degree kept alive.
**V4 — Chronological timeline** (place after the H2 “When Commerce is genuinely the right call in 11th” #commerce-fit)
- File: `which-stream-to-choose-in-11th-chronological-commerce-genuinely-right-call.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Commerce fits when You are interested in business, finance, markets, accounting, or ownership-style thinking.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): You are interested in business, finance, markets, accounting, or ownership-style thinking. / You want a stream that stays flexible across degrees, professional exams (CA/CS/CMA), and… / You are willing to add spreadsheets, communication, and market-facing skills early… / Families treat it as "what you take when you could not get into Science." / Nobody explains that CA vacancies are currently outnumbering qualified candidates, or…
- Numbers: use ONLY these facts from the article (exact values, no new ones): A newly qualified Chartered Accountant currently averages ₹12-13 LPA starting, and CA placement demand has outnumbered qualified candidates in recent recruitment rounds — Commerce is not a fallback stream, it is one of the more direct routes to a strong income
- Alt: Chronological timeline for “When Commerce is genuinely the right call in 11th”: You are interested in business…; You want a stream that stays flexible…; You are…
- Title attribute: When Commerce is genuinely the right call in 11th
- Caption (also keep the key point in the HTML text): Commerce fits when You are interested in business, finance, markets, accounting, or ownership-style thinking.
**V5 — Mistakes versus smarter move panel** (place after the H2 “Mistakes that cost students a full year” #mistakes)
- File: `which-stream-to-choose-in-11th-mistakes-mistakes-cost-students-full.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: 01 Treating Science as the automatic best answer Science is strong for the right student.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): 01 Treating Science as the automatic best answer Science is strong for the… / It is an expensive two years of burnt time and confidence when picked only for… / 02 Assuming Commerce or Arts is a consolation prize A weak-fit "prestige"…
- Numbers: use ONLY these facts from the article (exact values, no new ones): 03 Choosing only by Class 10 marks Marks matter for cutoffs and school options, but they say nothing about how you actually learn or what kind of work you can sustain for two years straight. | 04 Ignoring the real entrance-exam odds Roughly 23 lakh students registered for NEET in 2026 for about 1.29 lakh MBBS seats nationally — near 17-to-1 overall and 35-to-1 or worse for government seats.
- Alt: Mistakes versus smarter move panel for “Mistakes that cost students a full year”: 01 Treating Science as the automatic…; It is an expensive two years of burnt…; 02…
- Title attribute: Mistakes that cost students a full year
- Caption (also keep the key point in the HTML text): 01 Treating Science as the automatic best answer Science is strong for the right student.

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/stream-selection/career-options-after-10th/

**H1:** Career options after 10th: the real paths beyond science pressure  
**Category:** stream-selection · **Words:** 4520 · **H2 sections:** 23 · **Search priority:** P2 (0 clicks, 29 impressions)  
**Status: RED — NO IMAGES** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**

**Current images**
No images at all are rendered on this route.

**Required actions**
1. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
2. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `career-options-after-10th-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `career-options-after-10th-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Wide three-quarter shot of a Class 10 student with a parent beside them, a living-room sofa with notebooks on a low table. Props that belong to “Career options after 10th: the real paths beyond science pressure”: notebooks, a laptop and printed course or job information. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: Career options after 10th: the real paths beyond science pressure
- Caption: one sentence tying the scene to the article's decision.
3. CREATE 6 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `career-options-after-10th-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Career options after 10th include science, commerce, humanities, diploma, and ITI routes.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Why career options after 10th feel more confusing than they should / Career options after 10th: the 5 real route families / Class 11 and 12 vs diploma vs ITI: what actually changes / Choose your route by work style, not only by marks or pressure / What if you still have no clear interest after 10th
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “Career options after 10th: the real paths beyond science pressure”
- Title attribute: At a glance: Career options after 10th: the real paths beyond science…
- Caption (also keep the key point in the HTML text): Career options after 10th include science, commerce, humanities, diploma, and ITI routes.
**V2 — Comparison table** (place after the H2 “Class 11 and 12 vs diploma vs ITI: what actually changes” #compare)
- File: `career-options-after-10th-comparison-class-diploma-iti-actually.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: These are not tiny variations of the same decision.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Route | Best for | Reality check / Row: Class 11 and 12 academic… | Students who still need… | Gives more time and… / Row: Diploma or polytechnic… | Students who already lean… | Can be a smart route, but… / Row: ITI or vocational route | Students who prefer… | Not a second-class path.…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Comparison table for “Class 11 and 12 vs diploma vs ITI: what actually…”: Route | Best for | Reality check; Class 11 and 12 academic… | Students…; Diploma or…
- Title attribute: Class 11 and 12 vs diploma vs ITI: what actually changes
- Caption (also keep the key point in the HTML text): These are not tiny variations of the same decision.
**V3 — Decision tree by situation** (place after the H2 “What if you still have no clear interest after 10th” #no-interest)
- File: `career-options-after-10th-decision-still-have-clear-interest.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: That does not mean you are behind.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Do not mistake confusion for weakness. After 10th, many students still do not know the… / Choose the route that preserves fit and flexibility. If you are unclear, prefer the… / Test subjects and tasks, not only labels. Compare a maths-heavy task, a commerce-style… / Build one skill in parallel whatever route you choose. Communication, digital fluency, AI…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Decision tree by situation for “What if you still have no clear interest after 10th”: Do not mistake confusion for…; Choose the route that preserves fit…; Test…
- Title attribute: What if you still have no clear interest after 10th
- Caption (also keep the key point in the HTML text): That does not mean you are behind.
**V4 — Chronological timeline** (place after the H2 “When science makes sense after 10th and when it is being forced” #science)
- File: `career-options-after-10th-chronological-science-makes-sense-after.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: If you were looking for a career chart after 10th in science, this is really the same decision laid out as a…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): You still want engineering, medicine, research, data, or deep technical paths alive. / You can handle maths or biology honestly, not just in image but in workload too. / You are willing to build real skill and not treat the stream as an automatic guarantee. / You are choosing it mainly because relatives call it safe. / You dislike the subject load but hope prestige will fix motivation later.
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Chronological timeline for “When science makes sense after 10th and when it is…”: You still want engineering, medicine…; You can handle maths or biology…; You are…
- Title attribute: When science makes sense after 10th and when it is being forced
- Caption (also keep the key point in the HTML text): If you were looking for a career chart after 10th in science, this is really the same decision laid out as a chart: which route families below…
**V5 — Chronological timeline** (place after the H2 “When commerce makes sense after 10th” #commerce)
- File: `career-options-after-10th-chronological-commerce-makes-sense-after.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Commerce fits when You are interested in business, finance, accounting, sales, analytics, or ownership…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): You are interested in business, finance, accounting, sales, analytics, or ownership… / You want a route that can stay flexible across degrees, certifications, and skill-first… / You are willing to learn spreadsheets, communication, and market-facing skills early. / People treat it as what students take only after rejecting science. / Families ignore how many business and money-linked careers actually grow from it.
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Chronological timeline for “When commerce makes sense after 10th”: You are interested in business…; You want a route that can stay…; You are willing to learn…
- Title attribute: When commerce makes sense after 10th
- Caption (also keep the key point in the HTML text): Commerce fits when You are interested in business, finance, accounting, sales, analytics, or ownership thinking.
**V6 — Stat panel or bar chart (only the numbers listed)** (place after the H2 “Specific ITI trades in high demand right now” #iti-trades)
- File: `career-options-after-10th-stat-specific-iti-trades-high.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: India has over 14,000 ITIs (about 2,200 government and 12,100 private).
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): High-demand ITI trades and their entry salary / What you can do after ITI besides a direct job / Electrician: One of the most consistently in-demand trades. Entry salary ₹1.5–3 LPA… / Welder / Fabricator: Strong demand in shipbuilding, automotive, and construction. Entry… / COPA (Computer Operator and Programming Assistant): Entry into IT support, data entry… / Mechanic (Motor Vehicle / Diesel): Steady demand from auto industry and fleet operators.… / Fitter: Core manufacturing trade. Used in production lines, engineering firms, and…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Entry salary ₹1.5–3 LPA; master electricians in industrial work earn ₹4–8 LPA. | Entry ₹1.5–2.5 LPA; senior welders in aerospace or specialty work earn ₹5–10 LPA. | Entry ₹1.8–3 LPA; grows with seniority and sector.
- Alt: Stat panel or bar chart (only the numbers listed) for “Specific ITI trades in high demand right now”: High-demand ITI trades and their…; What you can do after ITI…
- Title attribute: Specific ITI trades in high demand right now
- Caption (also keep the key point in the HTML text): India has over 14,000 ITIs (about 2,200 government and 12,100 private).

**Done when:** hero + 6 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---
