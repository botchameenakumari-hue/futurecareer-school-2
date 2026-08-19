 # Cowork Kickoff Prompt — FutureCareerSchool

Status: Active

## Before you paste anything

The single biggest source of "wrong project" mistakes is opening a generic new
Cowork session and just typing keywords into it. Prevent that at the source:

1. Open a **new** Cowork session with its working directory explicitly set to:
   `C:\Users\Asus\Documents\futurecareer-school-2`
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
C:\Users\Asus\Documents\futurecareer-school-2 (brand: FutureCareerSchool,
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

STEP D — Keep this file current: if the task builds a new MOFU or BOFU page,
add its slug as a one-line bullet to the "Live commercial pages" list below
before finishing, so the next batch of keywords sees it as precedent too.

## Live commercial pages (keep updated — append after every new MOFU/BOFU page; last synced against site.ts on 2026-07-07)
- MOFU: career-counselling-benefits (is career counselling worth it / what
  are its benefits — close variant)
- MOFU: career-counselling-fees (career counselling fees / how much does
  career counselling cost — close variants; keeps the general cost-breakdown
  framing. See affordable-career-counselling below for the dedicated
  value/worth-it judgment angle.)
- MOFU: affordable-career-counselling (dedicated value-for-money judgment page
  distinct from career-counselling-fees's price-list framing: compares the
  fee against private-coach assessment fees, the cost of a wrong decision, and
  the free layer, plus an honest "is cheap the same as low quality" objection)
- MOFU: career-counselling-cost (dedicated page for "how much does career
  counselling cost" as a factual-answer-seeking query: a market cost-breakdown
  across provider pricing patterns — assessment-led, package/subscription-
  style, and single-session transparent pricing — plus what actually drives
  the price, before landing on FCS's exact numbers; distinct from
  career-counselling-fees, which centers on FCS's own package/subscription
  structure rather than a market-wide cost comparison)
- MOFU: career-counselling-subscription (dedicated page for the "career
  counselling subscription" search itself: what a recurring-billing
  subscription model means, the honest confirmation that no such
  auto-renewing product exists here, the genuine trade-off between a
  subscription and a one-time continuous-guidance package, and how the
  package mirrors year-long ongoing support without auto-billing; distinct
  from career-counselling-fees, which centers on the full cost breakdown
  across every plan rather than the billing-model question)
- MOFU: career-counselling-package (also covers "career coaching package
  online" — a dedicated structure/composition page distinct from both
  career-counselling-fees and career-counselling-subscription: what is
  actually bundled into a single 1-on-1 session versus the continuous-
  guidance package, group-size caps (10 or fewer), session cadence across
  the year, and who each structure suits, not a restated price list or a
  billing-model explainer)
- MOFU: best-career-counselling-platform (evaluating and comparing career
  counselling platforms/providers — credentialing, personalization vs
  templated reports, assessment quality, pricing transparency, one-off vs
  continuing support, and honest outcome framing; distinct from
  career-counselling-benefits (value/worth-it question) and
  career-counselling-fees (cost question))
- MOFU: career-guidance-platform-review (adds the "guidance" + "review"
  wording missing from best-career-counselling-platform's title/URL;
  genuinely distinct framing — an honest self-review of Future Career
  School itself against the same six evaluation criteria, explicitly
  stating there are no star ratings or testimonials to show rather than
  inventing any, plus real limitations/who it's not a fit for — versus
  best-career-counselling-platform's general how-to-evaluate-any-provider
  checklist, which doesn't turn that checklist on Future Career School in
  this much specific detail)
- MOFU: best-online-career-guidance (evaluation framing scoped specifically to
  the online-delivery format rather than the provider/platform as a whole:
  live two-way video vs a recorded or scripted "session," verifying who is
  actually guiding you without an in-person meeting, careful handling of
  personal/family information exchanged only on a screen, and consistency
  across cities/time zones, plus an explicit online-vs-in-person trade-off
  table; distinct from best-career-counselling-platform, which evaluates the
  provider generally — counsellor credentials, personalization, assessment
  quality, pricing transparency, session format, outcome honesty — regardless
  of delivery channel)
- MOFU: best-career-counsellor (also covers the close variant "top career
  counsellors" — evaluating the individual counsellor/professional, not the
  platform: their training and background, breadth of experience across life
  stages, personalized vs templated advice, staying current vs recycled
  advice, pushing one outcome vs helping the reader decide, and honesty about
  their own limits; includes a "best career counselling for students"
  sub-angle; distinct from best-career-counselling-platform, which evaluates
  the company/provider rather than the person)
- MOFU: best-career-assessment-platform (evaluating career assessment
  quality broadly, across personality, interest, skill, and aptitude
  testing: what the test is based on, free vs paid and what the paywall
  buys, current/AI-powered vs a generic decades-old personality quiz, an
  actionable next step vs just a label, and life-stage fit; distinct from
  best-career-counselling-platform, which evaluates the counselling
  service/process rather than the test itself, from best-career-aptitude-test
  below, which narrows specifically to the aptitude/reasoning dimension, and
  from the direct-intent assessment product pages under /services/assessments/,
  which are specific tests rather than an evaluation framework)
- MOFU: best-career-aptitude-test (narrower than best-career-assessment-platform:
  focuses specifically on aptitude as reasoning/ability — numerical, verbal,
  logical, spatial, in the DBDA/CII tradition — versus personality or interest
  testing that often gets bundled under the same "assessment" label; how to
  tell a credible aptitude read from a gimmick, free vs paid on the aptitude
  dimension specifically, and where Future Career School's free assessments
  land on that dimension without overselling them as a formal standardised
  battery)
- MOFU: career-counselling-vs-career-coaching (the genuine terminology
  distinction between counselling — assessment-driven, decision-focused,
  often shorter — and coaching — ongoing, goal-execution and accountability-
  focused — plus how Future Career School blends both under one plan rather
  than forcing a label choice; distinct from every "X for Y audience" page
  since this is a pure term-comparison page, and written to complement, not
  contradict, existing pages that treat counselling/coaching as interchangeable
  labels for the same service)
- MOFU: top-career-coaching-services (dedicated coaching-specific evaluation
  page, distinct from best-career-counselling-platform: leans into the
  "coaching" side of the counselling-vs-coaching distinction — a real,
  recurring accountability cadence, a structured plan tied to goals instead
  of a single pep talk, whether the plan gets revisited over time, who is
  actually coaching you, and pricing/outcome honesty — rather than
  best-career-counselling-platform's broader counselling-process criteria
  (who counsels you, personalization, assessment quality); "top" + "coaching"
  + "services" were missing from that sibling's title/URL)
- MOFU: compare-career-counselling-services (also covers "which career
  counselling service is best" — dedicated side-by-side comparison-matrix
  page, distinct from best-career-counselling-platform: a literal four-column
  table comparing service *types* (independent counsellor, school/college-tied
  counsellor, coaching/ed-tech platform, Future Career School) across the same
  seven criteria row by row, versus best-career-counselling-platform's
  six-criteria checklist for evaluating one single platform in isolation;
  "compare" + "services" were missing from that sibling's title/URL)
- BOFU direct-intent: career-guidance, career-counselling,
  career-counselling-online, career-guidance-online, career-coach-near-me
- BOFU direct-intent: virtual-career-counselling ("virtual" treated as its own
  search term from "online" per the site owner's decision, deliberately not
  merged with career-counselling-online: leans into the video-call mechanic
  itself — face-to-face framing over live video, screen-sharing through
  assessment results during the call, and joining from anywhere including
  outside India — with its own comparison rows, objections about trusting a
  video call over an in-person meeting, step-flow, and FAQ, distinct from
  career-counselling-online's broader "online across India, no local office
  needed" framing)
- BOFU direct-intent: professional-career-guidance ("professional" describes
  the credentialed/expert-led quality and rigor of the guidance process itself
  — structured psychometric mapping, a repeatable decision framework, and
  organization-run delivery — not the working-professional audience; distinct
  from career-guidance (practical-direction framing) and from
  working-professional-career-guidance (audience-specific stagnation/pivot
  framing for people already employed))
- BOFU direct-intent: career-counselling-service (provider-evaluation/service-
  purchase framing for the same career counselling service family: what is
  included, how the process is structured end-to-end from booking to outcome,
  and what to check about a provider's credibility and pricing transparency
  before paying; distinct from career-counselling, which frames the same
  service around decision clarity versus generic advice rather than around
  evaluating the service itself as a purchase)
- BOFU direct-intent: career-guidance-service (evaluating career guidance as a
  purchasable offering: service structure, named deliverables per phase,
  price transparency, and a service-evaluation checklist and objection set,
  rather than career-guidance's practical-direction/decision-clarity framing)
- BOFU audience/situation-segment: student-career-guidance,
  career-guidance-after-12th, career-guidance-after-12th-online,
  working-professional-career-guidance, career-guidance-for-low-board-scores,
  career-counselling-session (session-format intent: one-on-one career
  counselling, group career counselling session)
- BOFU audience/situation-segment: career-counselling-for-12th-students (also
  covers "career coaching for students after 12th" — results-day decision-
  counselling framing: the specific pressure window right after 12th results
  are declared, when real marks/rank are known, admission forms and cutoff
  rounds are already open, and student-parent disagreement peaks; works from
  the actual number in hand rather than hypothetical planning, distinct from
  career-guidance-after-12th (broad course/degree/skill decision at any point
  after 12th, not tied to the results-day moment) and from
  career-guidance-after-12th-online (same broad decision, reframed around
  removing location/travel friction rather than results-day timing))
- BOFU audience/situation-segment: career-counselling-for-students (dedicated
  decision-resolution counselling page distinct from student-career-guidance:
  framed around resolving one specific, already-narrowed stream, subject, or
  course decision through a structured 1-on-1 session ending in a direct
  recommendation, rather than student-career-guidance's broader ongoing
  direction across school-to-postgraduate stages; "counselling" treated as a
  distinct enough term from "guidance" per the site owner's directive since
  the sibling page's title/URL uses "guidance" only)
- BOFU audience/situation-segment: career-planning-session-online (long-horizon
  roadmap/goal-setting intent, distinct from career-counselling-session:
  framed around building a structured multi-year plan with milestones and a
  sequenced skill portfolio across time, not resolving one immediate
  decision; same underlying 1-on-1-plus-continuous-guidance product as
  career-counselling-session, reframed around planning-over-time and online
  delivery mechanics rather than session-format or single-decision framing)
- BOFU audience/situation-segment: career-counselling-consultation
  (commitment-level intent, distinct from career-counselling-session: framed
  around the low-commitment, diagnostic nature of a single first conversation
  you can book without signing up for an ongoing program — what happens on
  the call, no-pressure/no-bait-and-switch objection handling specific to
  "consultation" offers, and how it can lead into the fuller structured
  session or continuous guidance afterward as a separate choice; distinct
  from free-career-counselling-session, which is about the free-vs-paid cost
  breakdown rather than the commitment level of booking)
- BOFU audience/situation-segment: one-on-one-career-coaching-session (also
  covers "1-on-1 career coaching session" - a dedicated coaching-framed
  session page distinct from career-counselling-session on two axes: it
  leads with the private/individual format as an explicit guarantee - never
  a group setting, at any point - rather than presenting 1-on-1 alongside a
  group-continuation option, and it frames the conversation around
  goal-execution and accountability - action plan, skill-direction moves,
  and a follow-through point - rather than career-counselling-session's
  decision/shortlist framing for someone still choosing a path)
- BOFU audience/situation-segment: group-career-counselling-session (the
  small-group/batch format component of continuous guidance - up to 10
  students per group, included alongside the first 1-on-1 session inside the
  existing continuous-guidance plan, not a separate standalone product or
  price; distinct from career-counselling-session and
  one-on-one-career-coaching-session, which both guarantee a private/
  individual format)
- BOFU audience/situation-segment: career-mentoring-program (also covers the
  close variant "career mentor online" - the same continuous-guidance product
  as career-counselling-session, presented through an ongoing-relationship
  lens instead of a single-decision lens: why an ongoing relationship helps
  as the market, opportunities, and plans keep changing, what the mentoring
  cadence looks like session-to-session across a year, and accountability/
  check-in framing; distinct from career-counselling-session, which frames
  the same 1-on-1-plus-small-group offering around one focused consultation
  for a single decision rather than a continuing relationship)
- BOFU audience/situation-segment: career-counselling-for-arts-students
  (arts-stream-specific decision support: countering the "arts has no
  future" stigma with real paths across law, design, media, civil services,
  humanities research, and psychology)
- BOFU audience/situation-segment: career-counselling-for-pcb-students
  (PCB-stream-specific decision support: NEET/medical-seat pressure, repeat-
  attempt decisions, and real non-medical paths a Biology, Chemistry, and
  Physics background supports — biotech, pharmacy, allied health, research)
- BOFU audience/situation-segment: career-counselling-for-freshers (recent
  graduates transitioning from study to first job/work — offer evaluation,
  service vs product company, year-one skill direction, first-job-didn't-
  work-out recovery, resume/portfolio from zero experience; distinct from
  student-career-guidance and working-professional-career-guidance)
- BOFU direct-intent (coaching cluster): career-coaching-for-freshers
  (student-only coaching-methodology page distinct from career-counselling-
  for-freshers: ongoing job-search execution and accountability — a dated
  outreach cadence, interview-round follow-through carried between rounds,
  and a first-90-days plan through probation — versus career-counselling-
  for-freshers's single-session decision support on offer evaluation,
  company type, and resume-from-zero-experience. Written to stay consistent
  with career-counselling-vs-career-coaching and parallel in framing to the
  career-coaching-for-professionals flagship, but freshers/student-only.)
- BOFU audience/situation-segment: career-counselling-for-class-10-students
  (pre-11th stream-selection decision — Science PCM/PCB, Commerce with/
  without Maths, or Arts; marks-vs-fit reasoning, parent-led decision
  dynamics, and stream-switch cost, distinct from the after-12th course/
  college decision and from the already-in-stream arts/PCB pages)
- BOFU audience/situation-segment: career-counselling-for-commerce-students
  (commerce-stream-specific decision support: CA vs CS vs CMA vs B.Com vs
  BBA path clarity, finance vs accounting vs analytics direction, and
  whether commerce itself was the right stream vs science/arts)
- BOFU audience/situation-segment: career-counselling-for-engineering-students
  (engineering/B.Tech-specific decision support: branch or specialization
  regret, service company vs product company offer decisions, higher
  studies vs starting work, and pivots away from core technical roles;
  distinct from student-career-guidance and the after-12th/class-10 pages)
- BOFU audience/situation-segment: career-counselling-for-it-professionals
  (employed-IT-professional-specific decision support: layoff/hiring-
  slowdown anxiety, AI-driven role disruption risk, service-company burnout
  vs product-company/startup moves, technical-to-management pivots either
  direction, and upskilling-within-stack vs domain-switch decisions;
  distinct from working-professional-career-guidance (industry-agnostic)
  and career-counselling-for-engineering-students (students, not employed
  professionals))
- BOFU audience/situation-segment: career-coaching-for-it-professionals
  (employed-IT-professional-specific execution support: turning an
  already-decided tech pivot, promotion push, or skill upgrade into a
  sequenced action plan with ongoing accountability and follow-through
  check-ins; deliberately distinct from career-counselling-for-it-
  professionals, which is decision-support framing for someone still
  weighing layoff/AI-disruption risk or a stay-vs-pivot choice)
- BOFU audience/situation-segment: career-counselling-for-low-cgpa-students
  (college/undergraduate CGPA-specific decision support: on-campus placement
  eligibility cutoffs vs off-campus/referral routes, MBA/MS minimum-CGPA
  eligibility, how product vs service-company recruiters actually weigh
  CGPA against projects/portfolio, and final-year recovery strategy; distinct
  from career-guidance-for-low-board-scores (12th board/school-leaving stage)
  since this targets the later college/placement-and-higher-studies stage)
- BOFU audience/situation-segment: career-counselling-for-students-with-backlogs
  (backlog-clearance-specific decision support: how many active/pending
  backlogs actually risk placement eligibility, university promotion caps and
  maximum clearance windows before a degree lapses, IT-services vs product-
  company treatment of a live backlog at the joining-letter stage rather than
  the interview stage, whether to disclose a backlog in interviews, and
  catch-up clearance sequencing alongside parallel skill-building; distinct
  from career-counselling-for-low-cgpa-students since a backlog is an
  unfinished subject requiring re-exam/clearance, not a weighted-average
  concern)
- BOFU audience/situation-segment: career-counselling-for-women (real decision
  points women career-changers and starters in India actually face: career
  breaks and re-entry planning around marriage/childcare, family- and safety-
  pressure-influenced field or stream choices vs genuine aptitude and interest,
  and the confidence gap in negotiating or switching roles; mixed-audience
  page since it spans stream-choice pressure through career-break re-entry
  and negotiation confidence; distinct from student-career-guidance,
  working-professional-career-guidance, and the other audience-segment pages)
- BOFU audience/situation-segment: career-counselling-for-parents (written to
  the parent as the buyer/decision-maker booking counselling for their child:
  credibility and trust questions before paying, whether the child will
  actually engage, how a parent knows it is working, and how to involve the
  child without deciding the outcome for them; distinct from
  student-career-guidance (speaks to the student directly) and from the
  TOFU /blog/parents/ cluster (informational content for parents researching,
  not a booking-ready commercial page))
- BOFU audience/situation-segment: career-guidance-for-confused-students (confusion
  as a general state - option overload, conflicting family/peer/internet advice,
  and fear of choosing wrong - spanning post-10th, post-12th, degree/specialisation
  choice, first job, and career switch, rather than being locked to one stage like
  career-guidance-after-12th or career-guidance-for-low-board-scores)
- BOFU audience/situation-segment: career-counselling-for-dropouts (students who
  left school, college, or a course partway without a plan to return, usually
  due to financial pressure, a family or personal crisis, or repeated academic
  setbacks: real routes to return and complete the same path, reroute through
  flexible completion options like open schooling/open universities, or build
  a skill-first path without going back at all; reframing the story for
  employers, family shame and pressure dynamics, and the financial pressure
  that often causes dropping out - distinct from a planned gap year, which is
  an intentional pause with an expected return date)
- BOFU audience/situation-segment: career-guidance-after-gap-year (students on a
  planned pause after 12th or after a degree, with an intention to resume: using
  the remaining time productively through skills, internships, or focused exam
  prep instead of letting it drift; building a credible account of the gap year
  for colleges, employers, and family; re-entry anxiety after time off; and the
  explicit distinction between a planned gap year and falling behind or dropping
  out - distinct from career-counselling-for-dropouts, which covers an
  unplanned, no-return-date discontinuation, not an intentional pause)
- BOFU audience/situation-segment: career-coaching-for-layoff-recovery (already-
  laid-off recovery support, industry-agnostic, distinct from
  career-counselling-for-it-professionals: financial runway and severance
  budget triage, a first-30-days action sequence, explaining the layoff in
  interviews without sounding defensive, taking the first offer vs holding
  out, and telling a genuine pivot opportunity apart from a panic-driven
  return to the same role; the IT-professionals page covers anxiety about a
  possible future layoff for employed IT staff specifically, while this page
  covers the acute aftermath once a layoff has already happened, in any
  industry)
- BOFU city-intent: locations/career-counselling-in-visakhapatnam,
  locations/career-counselling-in-rajkot
- BOFU direct-contact intent: career-counselling-helpline (talk to a career
  counsellor directly via WhatsApp/phone before booking — not a formal
  24/7 call-centre claim)
- BOFU direct-intent: career-counselling-workshop (structured, workshop-style
  guided counselling process — decision-focused single-session framing; not a
  separate certificate/seminar product; see career-development-workshop-online
  below for the dedicated skill-building/growth variant)
- BOFU direct-intent: career-development-workshop-online (dedicated page,
  deliberately split from career-counselling-workshop: leans into the
  skills/development-growth angle — what you build and practice, a high-value
  skill portfolio, proof of work, and ongoing skill-building through
  continuous guidance — versus career-counselling-workshop's narrower
  structured-decision-session framing; not a separate certificate/seminar
  product, same underlying guidance service)
- BOFU price-qualified intent: free-career-counselling-session (free career
  counselling session / trial career counselling session — honestly reframed:
  assessments and resources are free, the 1-on-1 session itself is a paid,
  limited-time-discounted session, not a free or trial product)
- BOFU audience/situation-segment: career-counselling-for-first-generation-graduates
  (first-generation graduates - first in their immediate family to complete a
  college degree - navigating career decisions with no family precedent:
  translating vague "get a good job" family pressure into a concrete plan,
  unwritten corporate/interview norms nobody at home could explain, building a
  professional network and resume from zero, and reframing the background as a
  strength rather than something to hide; distinct from tier-2-college-students
  (college prestige/reputation) and career-counselling-for-low-cgpa-students
  (academic performance), since this gap exists regardless of grades or
  college tier)
- BOFU audience/situation-segment: career-counselling-for-nri-students (Indian-
  origin students living abroad, or Indian students who studied abroad
  weighing options in India: the India-versus-abroad decision itself, foreign-
  degree-versus-Indian-job-market credential recognition confusion in either
  direction, reconnecting with the Indian job market's current hiring norms
  after years away, and family pressure to "come back home" or "stay settled
  abroad"; distinct from student-career-guidance and working-professional-
  career-guidance since the core decision pressure is the country/market
  choice and credential-recognition gap, not stream, stage, or role alone)
- BOFU audience/situation-segment: career-counselling-for-upsc-aspirants
  (UPSC/civil-services-specific decision support, distinct from every other
  live segment as a high-stakes, multi-year, attempt- and age-limited exam-
  prep audience: whether to attempt UPSC at all versus other paths, the real
  opportunity cost of each attempt, judging when another attempt is still
  worth it versus switching direction, what to do after hitting the attempt
  or age limit, converting UPSC-prep skills - analytical ability, writing,
  current-affairs depth, discipline - into non-government careers, and
  family/prestige pressure specific to this exam; explicitly decision
  support about the UPSC path, not UPSC exam coaching; mixed-audience page
  spanning students preparing and working professionals who quit jobs to
  prepare)
- BOFU audience/situation-segment: career-guidance-after-engineering-without-placement
  (the specific post-graduation "no offer in hand" crisis for engineering
  graduates: off-campus job search strategy once the campus placement window
  is closed, resume-gap anxiety and how to answer it in interviews, referral
  routes vs cold off-campus applications, fast-track upskilling to close the
  shortlist gap, whether a non-core/service-company role is a genuine bridge
  or a detour, and family pressure when peers already have offers; distinct
  from career-counselling-for-engineering-students (broader branch/
  specialization and still-studying or general engineering career questions)
  and career-counselling-for-freshers (broader fresher stage assuming an
  offer or multiple offers already exist, regardless of branch))
- BOFU audience/situation-segment: career-counselling-for-mba-graduates
  (MBA-degree-specific decision support tied to the postgraduate credential
  itself: specialization-vs-actual-role mismatch, whether a tier-2/tier-3
  B-school MBA delivered the expected ROI or salary jump, choosing between
  functional tracks - consulting, product, marketing, finance, ops - and
  using the MBA network/credential more deliberately; distinct from
  career-counselling-for-it-professionals (IT-industry-specific, not tied to
  a postgraduate degree) and working-professional-career-guidance
  (industry-agnostic, any working professional, no degree-ROI or
  specialization angle))
- BOFU audience/situation-segment: career-counselling-for-ca-aspirants
  (CA-specific decision support for people already in the Chartered
  Accountancy pipeline - actively attempting Foundation, Intermediate, or
  Final - distinct from career-counselling-for-commerce-students (broader
  pre-commitment CA-vs-CS-vs-CMA-vs-B.Com/BBA choice): the real multi-attempt
  norm and low pass-rate reality spoken to directionally rather than with
  invented exact figures, judging whether another attempt is still worth it
  versus exiting into finance/accounting-adjacent roles using partial CA
  credentials, sunk-cost thinking versus a forward-looking decision, family
  and social pressure specific to CA as a commerce-household prestige marker,
  and balancing articleship/training work against repeated exam attempts)
- BOFU audience/situation-segment: career-counselling-for-neet-aspirants (NEET-
  specific decision support for people already actively attempting NEET -
  possibly a repeat attempter, drop-year student, or someone inside NEET
  coaching - distinct from career-counselling-for-pcb-students (broader
  pre-commitment PCB-stream page covering whether to even pursue medicine and
  general non-medical PCB paths): the coaching-factory/drop-year culture and
  its mental-health cost, deciding between one more attempt and exiting into
  para-medical, allied-health, biotech, or pharmacy paths using sunk-cost
  decision framing borrowed from the same trap seen in CA-aspirant repeat
  attempts, and how to structure the NEET-exit conversation with parents who
  have already paid for years of coaching fees)
- BOFU audience/situation-segment: career-counselling-for-tier-2-college-students
  (college brand/reputation-specific decision support: fewer and narrower
  campus recruiters, a thinner in-college alumni network inside hiring
  teams, and recruiter brand bias at the resume-screen stage; treating
  off-campus applications as a primary channel rather than a backup,
  building proof of work that outweighs the college line on a resume, and
  setting a realistic but non-discouraging expectation versus tier 1 peers;
  distinct from career-counselling-for-low-cgpa-students (academic
  performance) and career-counselling-for-first-generation-graduates
  (family precedent gap), since this pressure exists regardless of grades
  or family background and is specifically about college prestige/
  reputation in recruiting)
- BOFU audience/situation-segment: career-coaching-for-career-change (deliberate
  industry-, function-, or track-switch decision support for professionals
  considering leaving their current field entirely, regardless of which
  industry they are coming from: telling a genuine mismatch apart from a
  reaction to one bad job or manager, transferable-skills mapping across
  industries, income-dip tolerance and runway planning, sequencing the
  switch while employed vs quitting first, and a realistic multi-month
  timeline; distinct from career-counselling-for-it-professionals
  (IT-industry-specific pivots within/out of IT) and
  working-professional-career-guidance (general stagnation/growth, not
  necessarily a full industry or track switch))
- BOFU audience/situation-segment: executive-career-coaching (senior/
  leadership-track decision support: leadership track vs deep individual-
  expert track, honest board/C-suite readiness self-assessment separating a
  real capability gap from a confidence gap, executive presence and personal-
  brand visibility at senior levels, and second-half-of-career planning after
  a decade-plus plateau; uses the same working-professional guidance plan and
  pricing as the rest of the site, not a separate executive tier; distinct
  from working-professional-career-guidance (general, any seniority) and
  career-counselling-for-mba-graduates (degree-ROI-specific, not seniority-
  specific))
- BOFU audience/situation-segment: career-counselling-for-government-exam-aspirants
  (broader government-recruitment-exam decision support spanning SSC, IBPS/SBI
  banking exams, state PSCs, railway recruitment, and defense exams, distinct
  from career-counselling-for-upsc-aspirants which is scoped to civil services
  specifically: choosing which exam combination is actually worth preparing
  for given each exam's own eligibility and attempt-limit rules, the
  multiple-exams-simultaneously strategy many aspirants use as a hedge and
  when it compounds preparation versus spreads it too thin, the financial and
  psychological cost of the SSC/banking/PSC coaching-hub culture across exam
  types, and converting partial preparation - general awareness, reasoning,
  quantitative aptitude - into private-sector or skill-based roles if the
  aspirant exits government-exam preparation)
- BOFU audience/situation-segment: career-coaching-for-entrepreneurs (founder/
  entrepreneur decision support strictly within career-guidance territory, not
  startup-strategy or business consulting: whether to keep pursuing the
  venture, return to employment, or run both; translating founder experience
  into a resume and interview narrative employers value; deciding whether a
  side venture is ready to go full-time or should stay part-time while
  employed; and the identity/pride questions around going back to a job after
  being a founder, using founder skills - ownership, resourcefulness,
  resilience - as a genuine strength in a job search; distinct from
  career-coaching-for-career-change (industry/function switch between
  employers, not founder-vs-employment) and working-professional-career-
  guidance (general stagnation/growth, not the venture-vs-employment
  decision))
- BOFU audience/situation-segment: career-coaching-for-mid-career-professionals
  (also covers career counselling for mid-career professionals - the specific
  plateau at roughly 8-15 years in: promotions slowing or being passed over,
  the golden-handcuffs pull of a comfortable salary against flat growth, the
  deeper-specialize-vs-pivot-now decision at a stage harder to call than early
  career but easier than late career, reassessing a skill stack that was
  cutting-edge a decade ago, and family/financial obligations that make a
  reset feel riskier now than earlier; distinct from
  working-professional-career-guidance (broad, any seniority, general
  stagnation/AI-pressure/pivot topics with no specific career-stage plateau
  framing), career-coaching-for-career-change (a full deliberate industry- or
  function-switch decision, not the narrower specialize-deeper-vs-pivot fork
  within or near the current field), and executive-career-coaching
  (senior/leadership-track readiness and positioning questions at the top of
  a career, not the earlier mid-career plateau))
- BOFU audience/situation-segment: career-counselling-for-working-professionals
  (genuine counselling/decision-support framing - a structured,
  assessment-informed session built to resolve one specific fork such as
  stay-vs-pivot, specialize-vs-generalize, or accept-an-offer-vs-wait, closing
  with a risk-adjusted recommendation rather than ongoing multi-lever
  direction; distinct from working-professional-career-guidance (broader
  "guidance" framing spanning stagnation, AI pressure, positioning, personal
  branding, and income growth as ongoing support, not one resolved decision)
  and career-coaching-for-mid-career-professionals (tied to the specific
  8-15-year promotions-slowed plateau, not any career stage))
- BOFU price-qualified intent: trial-career-counselling-session (dedicated
  page distinct from free-career-counselling-session: leans into the
  try-before-you-commit / risk-reversal angle rather than the free-vs-paid
  cost-transparency angle - what a trial session actually lets you test
  (process fit, skill-direction quality, counsellor fit), how it de-risks
  choosing Future Career School over a package booked sight-unseen, and how
  it bridges into the paid continuous-guidance package afterward)
- BOFU audience/situation-segment: career-coaching-for-engineering-students
  (coaching-methodology framing distinct from career-counselling-for-
  engineering-students: assumes the branch/company/higher-studies direction
  is already roughly set and targets the follow-through gap instead — a
  sequenced skill-building action plan, ongoing weekly/small-group
  accountability across the year, and carrying that plan through placement
  prep; the sibling page instead resolves the still-open branch, offer, or
  higher-studies decision itself)
- BOFU audience/situation-segment: career-counselling-for-adults-online
  (broader-than-employment-status framing distinct from
  working-professional-career-guidance: built for any adult past school or
  college age making a career or skill decision — employed, between roles,
  restarting after a career break, or self-employed — not only someone with a
  current job title, with explicit fully-online delivery as its own emphasis)
- BOFU audience/situation-segment: career-coaching-for-women (coaching-
  methodology framing distinct from career-counselling-for-women: assumes the
  field, return-to-work, or switch decision is already made and targets the
  follow-through gap instead — staying accountable to a return-to-work plan
  once real life resumes, executing an already-chosen field switch, practising
  negotiation and visibility as a repeated skill, and a coaching cadence built
  around real family/household time constraints; the sibling page instead
  resolves the still-open field-choice, re-entry, or negotiation-confidence
  decision itself)
- BOFU audience/situation-segment: career-guidance-for-women-returning-to-work
  (dedicated single-issue re-entry page distinct from career-counselling-for-
  women (broader page spanning field/stream choice, break/re-entry, and
  negotiation confidence as three separate decision points) and from
  career-coaching-for-women (follow-through/accountability once the return
  decision is already made): leans fully into the return-to-work situation
  itself — break-length-specific gap explanation, deciding what actually went
  stale versus what still transfers, confidence rebuilding treated separately
  from the skill refresh, and targeting a genuine re-entry level instead of
  an automatic step down; working-professional-only audience and pricing)
- BOFU direct-intent (flagship): career-coaching-for-professionals (the
  flagship page for the "coaching" terminology cluster, parallel in weight to
  career-guidance and career-counselling; working-professional-only audience.
  Differentiation: coaching = ongoing, goal-execution and accountability-
  oriented — a concrete action plan, milestone check-ins, and plan
  adjustment over time — versus career-counselling-for-working-professionals
  (resolves one specific fork in a single session, then closes) and
  working-professional-career-guidance (broader ongoing support across many
  topics, not framed around the coaching-execution methodology specifically).
  Not locked to one career stage or plateau, unlike career-coaching-for-mid-
  career-professionals (8-15-year plateau only). Written to stay consistent
  with, not contradict, career-counselling-vs-career-coaching)
- BOFU direct-intent: hire-a-career-coach (dedicated page distinct from
  career-coach-near-me: "hire" = transactional/procurement intent, evaluated
  like a hiring decision — leans into credentials checks, the step-by-step
  hiring/engagement process, and what you get once you hire, versus
  career-coach-near-me's locational "is this available near me" framing;
  mixed student/working-professional audience and pricing)
- BOFU direct-intent: career-coach-online (also covers "career coach India
  online"; dedicated page distinct from career-guidance-online, whose title/
  URL never used "coach": leans into coaching methodology specifically —
  ongoing execution plan, scheduled accountability check-ins, and plan
  adjustment over time, delivered online — versus career-guidance-online's
  broader online decision-support framing across path, skill, and risk;
  mixed student/working-professional audience and pricing. The
  career-guidance-online FAQ line implying coach-online intent was fully
  covered there was tightened to point here instead)
- BOFU direct-intent: career-guidance-expert-online (dedicated page distinct
  from career-guidance-online and professional-career-guidance: leans into
  credibility/expertise verification specifically for the online-delivery
  trust gap — how to check the process behind an "expert" you have only met
  on a screen (verifiable reasoning, assessment integration, consistent
  process, skill-first depth) — versus career-guidance-online's broader
  online-across-India delivery framing and professional-career-guidance's
  general process-rigor framing regardless of format; mixed student/working-
  professional audience and pricing)
- MOFU: best-career-guidance-website (evaluates the website itself as a
  property — real readable content vs signup-gated marketing pages, named
  authors, pricing shown on the page, and free tools that give a real result
  vs lead-gen quizzes — distinct from best-career-counselling-platform, which
  evaluates the counselling process/provider behind the site rather than the
  site as content)
- MOFU: best-career-counselling-for-students (student-scoped evaluation
  framework distinct from best-career-counselling-platform's general,
  audience-agnostic six-criteria checklist and from best-career-counsellor's
  brief students-add-on subsection: a full standalone set of four
  student-specific checks — age-appropriate engagement, how parent
  involvement is handled without erasing the student's own voice, awareness
  of board exam/subject-selection/admission-deadline timing, and credibility
  on the actual stream or subject choice rather than generic "follow your
  passion" reassurance; student-only pricing, not mixed audience; distinct
  from the BOFU siblings student-career-guidance (broad ongoing direction,
  Service schema, direct sell) and career-counselling-for-students
  (resolving one already-narrowed decision via a structured session))
- MOFU: best-skill-development-platform (evaluating skill-training/course
  platforms like bootcamps and course marketplaces on proof-of-work,
  curriculum currency, support, pricing transparency, and outcome honesty,
  plus where career guidance's skill-direction role fits before picking one;
  explicitly states Future Career School is not a skill-teaching/course-
  delivery platform itself — distinct from best-career-counselling-platform
  (evaluates counselling providers) and best-career-assessment-platform
  (evaluates aptitude/assessment tests): a different core concept, skill
  delivery vs counselling vs assessment)
- MOFU: career-counselling-benefits-for-students (adds the missing "students"
  audience-segment word to career-counselling-benefits's title/H1/URL;
  scopes the benefits discussion specifically to what career counselling
  helps a student decide — stream/subject/course choice, college
  shortlisting against a real admission and entrance-exam timeline, parent
  involvement in approving the plan, and catching a wrong-turn degree while
  it is still cheap to redirect — rather than career-counselling-benefits's
  audience-agnostic research summary, which also covers working
  professionals; pricing scoped to the student plan only, with a direct
  link back to the general benefits page)

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
