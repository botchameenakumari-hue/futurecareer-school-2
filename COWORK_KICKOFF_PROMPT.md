 # Cowork Kickoff Prompt — FutureCareerSchool

Status: Active

## Before you paste anything

The single biggest source of "wrong project" mistakes is opening a generic new
Cowork session and just typing keywords into it. Prevent that at the source:

1. Open a **new** Cowork session with its working directory explicitly set to:
   `D:\New\futurecareer-school-2`
2. Do not reuse a session/tab that has touched `future-skill-school` (or any
   other project) in this conversation.
3. Never mix FutureCareerSchool keywords and Future Skill School keywords in
   the same session.

Only after the session is rooted in the correct folder, paste the kickoff
message below as your **first** message.

You only need to give bare keywords — no tagging required. The session first
checks whether each keyword (or a close variant of it) already has a live
page anywhere on the site, then classifies it (TOFU/blog, MOFU, or BOFU) by
checking the actual live routes in `src/config/site.ts` rather than guessing
from a fixed example list. If you already know a keyword's stage and want to
force it, you can optionally tag it — see the note at the bottom of the
keyword list.

---

## Kickoff message to paste (fill in the keyword list at the bottom)

```
This session works ONLY on the project at
D:\New\futurecareer-school-2 (brand: FutureCareerSchool,
domain: futurecareerschool.com). Do not read or write files from any other
project directory, even if one is mentioned elsewhere.

Before doing anything else, confirm you are in the right project by listing
the line counts of these files (they must all exist at this path):
- BLOG_WRITING_PROMPT.md
- BLOG_WRITING_PROMPT_FOLLOWUP.md
- MOFU_PAGE_PROMPT.md
- MOFU_PAGE_PROMPT_FOLLOWUP.md
- BOFU_PAGE_PROMPT.md
- BOFU_PAGE_PROMPT_FOLLOWUP.md
- src/config/site.ts
- src/config/bofu.ts

If any of these are missing, stop and tell me — do not substitute a file from
memory or from another project.

For each keyword below, spawn one independent background task (not a shared
task working through the list). Do not combine multiple keywords into one task.

STEP 0 — Duplicate/variant check (run this first, for every keyword, before
classifying funnel stage): the site now has enough pages that a "new" keyword
might already be covered, and this only gets more likely as more keywords are
added — do not rely on the human giving you the list to remember what already
exists.
1. Grep `src/config/blog.ts` for `title:` and `slug:` to get the existing
   blog post inventory (metadata only — do not read full article bodies for
   this check). Grep `src/config/site.ts` for `/services/` and `/blog/` to
   get every live commercial and blog route. Once these lists grow large,
   grep first for the 2-3 most distinctive words in the target keyword (skip
   filler words like "career", "India", "best", "how to") to shortlist
   candidates instead of reading either file in full.
2. Compare the target keyword against that inventory using this test: strip
   filler words (India, career, best, how to, guide, etc.) and compare what's
   left — the substantive/content words — against the closest existing live
   page's title, H1, and URL slug.
   - (a) EXACT MATCH ONLY: every substantive word is present with the same
     meaning, and only reordering, singular/plural, or punctuation differs
     (e.g. "career counselling fees" vs "fees for career counselling", or
     "career coaching vs career counselling" vs "career counselling vs career
     coaching"). This is the only case where a keyword is treated as already
     covered.
   - (b) DISTINCT: anything else. At least one substantive word or concept is
     missing from that page's title/H1/URL, OR the word is a different
     concept even if colloquially similar (e.g. "counselling" vs "coaching"
     vs "guidance"; "service" vs "platform"; "hire" vs "near me"; "cost" vs
     "package" vs "subscription" vs "affordable"; "online" vs "virtual").
     Default to this bucket whenever in doubt — do not assume Google treats
     near-synonyms as interchangeable just because a human reader would. A
     keyword meaning something slightly different from an existing page's
     main keyword gets its own page, even if the difference looks small.
3. If (a): STOP. Do not build a new page. Report clearly: "This keyword
   already has a live page at <path> — exact match." Wait for a decision
   unless the human has already pre-authorized proceeding for the whole
   batch.
4. If (b): this keyword gets its own page. Before building, name the
   specific word/concept missing from the nearest existing page's title/H1/
   URL, and write content that actually reflects that difference — distinct
   problem framing, objections, and FAQ, not the same page with the keyword
   swapped in. A separate URL is required, but a copy-pasted page is not
   acceptable — see the doorway-risk note below.
5. Continue to STEP A below to classify the funnel stage.

Note on doorway pages: building a dedicated page for every distinct keyword
does not by itself violate Google's doorway-page policy. That policy targets
pages that exist only to rank for a search term and then funnel every visitor
to the same generic destination with little or no unique content — the
safeguard is genuine content differentiation per page (point 4 above, plus
the uniqueness/doorway audit already built into each template's follow-up
pass), not fewer pages or fewer URLs. At high volume, even genuinely
differentiated pages can start to look like a "scaled content" pattern to
Google's quality systems if the differentiation is too thin, so treat the
uniqueness audit as mandatory on every page, not optional — especially as
this list of pages keeps growing.

For each task, classify the keyword's funnel stage using the test below. This
requires one live check plus common sense — do not classify from memory of a
static example list, because the business keeps shipping new commercial pages
and yesterday's example can go stale.

STEP A — Know the business: Future Career School sells one practical service
family (career counselling, career guidance, career coaching, career
strategy, assessments) to students, freshers, and working professionals,
delivered online across India. Beyond the generic hub, it runs three kinds of
commercial pages: (1) direct-intent pages naming the service itself
("career guidance", "career counselling", "career counselling online",
"career coach near me"), (2) audience/situation-segment pages that pair
"career guidance" (or a close variant) with a specific group or moment the
business has chosen to target commercially — e.g. after 12th, working
professionals, students generally, low board scores — these read as plain
situational phrases and are easy to mistake for informational content, and
(3) city/location-intent pages ("career counselling in <city>"). All three
are commercial (MOFU/BOFU), not blog topics, even when the wording looks
purely informational at a glance.

STEP B — Check the live ground truth, not a static list: grep
`src/config/site.ts` for `/services/career-counselling-and-career-guidance/`
before finalizing any call that isn't obviously TOFU. This file is always
current — every new page gets added here the moment it ships — unlike prose
descriptions in other files, which can lag behind it. If the keyword closely
matches, or is a plausible new instance of, an existing live page's audience
segment, comparison type, or naming pattern, that live precedent outweighs a
generic dictionary definition of TOFU/MOFU/BOFU — classify accordingly even
if the wording isn't a literal match to any example phrase.

STEP C — Apply the funnel test (general rule, then the specifics below):
- TOFU: the keyword is purely informational and its core subject is NOT
  Future Career School's own service or a directly comparable competitor
  service — e.g. a career choice, stream, exam, degree, college, coaching
  institute, parenting decision, or any other outside topic. These belong on
  the blog, not as a service page, even when the wording looks like it could
  be commercial at a glance.
- MOFU: the keyword is an information-seeking question or evaluative query
  whose core subject IS Future Career School's own service, a directly
  comparable competitor service, or a specific audience/situation/location
  segment the business already targets commercially per Step A/B — e.g.
  "X vs Y", "is X worth it", "X benefits", "X fees/cost", "best X service",
  "how to choose X", "how does X work", or any other question about
  understanding/evaluating the service itself (ours or a competitor's)
  before committing.
- BOFU: the keyword shows direct intent to take the service right now —
  ready to hire/book/pay — or matches an existing audience/situation/city
  BOFU page from Step B.

State the classification and a one-sentence reason, then write the page by
reading the matching file in full and following it exactly:
- TOFU/blog → BLOG_WRITING_PROMPT.md. If this batch is adding many articles
  into the same blog category, pay particular attention to its Anti-Spam and
  Anti-Doorway Rules section (minimum content standards, red flags) before
  writing.
- MOFU → MOFU_PAGE_PROMPT.md
- BOFU → BOFU_PAGE_PROMPT.md

After the first draft is written, run at least 2, ideally 3, full follow-up
passes using the matching follow-up file below. Each pass is a complete, fresh,
independent re-application of the whole follow-up file end to end — not a
partial pass, not a thematic slice of it, and not a rubber-stamp re-read. Do
not assume an earlier pass caught everything; each later pass exists
specifically to catch what the previous one missed, including re-checking
compliance against the main prompt file itself, not only adding new content.
- TOFU/blog → BLOG_WRITING_PROMPT_FOLLOWUP.md
- MOFU → MOFU_PAGE_PROMPT_FOLLOWUP.md
- BOFU → BOFU_PAGE_PROMPT_FOLLOWUP.md

If a keyword below is tagged with [blog], [mofu], or [bofu], treat that as an
explicit override — skip classification and use the tagged main prompt file
directly. Untagged keywords must be classified first.

Do not skip, shorten, or paraphrase any step of the main prompt file or the
follow-up file, and do not skip any of the 2-3 required follow-up passes. Read
every file in full each time — do not use any cached/bundled skill shorthand
instead.

Keywords:
1. <keyword>
2. <keyword>
...

Report back per keyword: classification + reason, sources used, confirmation
of how many follow-up passes ran (minimum 2, ideally 3) and what each pass
caught or fixed, and pass/fail of `npm run check:public-copy` and
`npm run build`.
```
