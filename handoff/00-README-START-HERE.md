# Hand-off: FutureCareerSchool keyword-authority work (read this first)

Written 2026-10-23 at the end of the first chat so a new chat can continue without losing anything. Everything described here is in the repo `botchameenakumari-hue/futurecareer-school-2`, branch **main** (the owner wants all pushes on `main` only, no pull requests).

Companion files in this folder:
- `01-IMAGES-NEEDED.md` : every live URL that still needs images, with the full image brief for each.
- `02-PENDING-WORK.md` : what is still to build or decide.
- `tools/` : the helper scripts and the agent briefs used in the first chat.

## 1. The project and the owner

- Site: FutureCareerSchool, `futurecareerschool.com`, an Astro 4 static site, hosted on Hostinger. **There is no automatic deploy; the owner deploys by hand.**
- The business sells career counselling, guidance, coaching, assessments to students, freshers and working professionals across India. Blog pages are TOFU (information); service pages are MOFU/BOFU (commercial).
- The owner is non-technical on code and wants decisions explained plainly. They said: "Whatever helps for SEO is my favorite" and "take your call" on technical choices. They want quality over speed ("do not compromise on quality or output give full throttle").

## 2. The owner's non-negotiable instructions (apply to every page)

1. **Follow `COWORK_KICKOFF_PROMPT.md` completely for any new page.** One independent agent per keyword; STEP 0 duplicate/variant check; classify TOFU/blog vs MOFU vs BOFU; read the main prompt file and its follow-up IN FULL; run **three separate, logged follow-up passes** (Pass 1 structure/copy/technical, Pass 2 perspectives and accuracy, Pass 3 uniqueness and final render); show the pass log; spot-verify the agent's claims yourself; report classification, sources, passes, build and `check:public-copy` results. (The kickoff prompt mentions a Windows path `D:\New\futurecareer-school-2`; in the cloud the repo is `/home/user/futurecareer-school-2`.)
2. **Blog pages use `BLOG_WRITING_PROMPT.md` + `BLOG_WRITING_PROMPT_FOLLOWUP.md`.** MOFU uses `MOFU_PAGE_PROMPT*.md`, BOFU uses `BOFU_PAGE_PROMPT*.md`. These files already contain the owner's perspectives (below) because we edited them in this chat.
3. **Owner's perspectives** (already encoded in the prompt files; summary):
   - College is a small part of career success. Heuristic: spend about **10%** of the education budget on the degree; above about 20% needs course-specific evidence; avoid education debt unless a credential is legally required. Skills first, degree second for most careers; degrees matter for regulated careers.
   - Information is free (YouTube, official docs, reputable low-cost courses) but judge each course; a pile of certificates is not a skill portfolio.
   - **Growth/scalability lens**: label every career, course or route option with one of the exact labels **"Scalable"**, **"Scalable with a business layer"**, **"Not so scalable"** (from `src/config/scalability.mjs`), with a one-line reason and the business layer. Lead with the most scalable option; never remove a crowded option, mark it and show the risk; flag multi-stage competition; surface any ownership path; address AI leverage and AI disruption honestly.
   - **Basic sales and marketing knowledge** is part of the growth lens: who pays, how they find and trust you, one first sales/marketing skill; promise no income; say plainly when a route is employer-only.
   - Mindset: think big, ownership over salary, show work early, English communication, networking, AI/tech knowledge, work style including remote. Frameworks: the 4-Checkpoint Protocol and the 3 Gates; core skill + multiplier skill + visible proof.
   - Pay figures: only indicative ranges with a named source and the shared pay caution; never a promise. Never hardcode a day or week count for a test or sprint.
   - Voice: plain mentor-like English, no em dashes, never say reader/visitor/user/searcher/buyer in public copy, no developer or SEO commentary on the page, answer-first lead + key-takeaways box, FAQs in the accordion.
4. **Length policy (owner decision):** no blanket 2,000-word minimum. Classify each blog page as pillar, standard or focused; length follows the decision. Pages must be 30-40% unique versus nearby pages (40% for career-options siblings). Never pad.
5. **Doorway/duplicate rule:** if the keyword is an exact match of a live page, or the nearest pages already answer the same intent so fully that a new page would be under the unique floor, **stop and expand the existing page instead**. Several planned pages were stopped this way (listed in `02-PENDING-WORK.md`).
6. **Do not invent facts.** If a number cannot be verified, leave it out or label it. Many official sites were unreachable for the agents; unverified figures were removed or softened (see Section 7).

## 3. What was done in the first chat (in order)

1. Read Reports 01, 02, 03 (`reports/keyword-authority/`). They came from the owner's keyword Google Sheets and the Search Console export.
2. **Report 1 retitle/expand pass** (~40 existing pages): additive retitles and new sections/FAQs; slugs and URLs unchanged; nothing removed. Logged in `reports/keyword-authority/04-report-01-retitle-and-expand-log.md`.
3. Double-check pass for false positives; fixed 7 unstyled blocks, one over-length meta description; hardened low-confidence content (MPT pay now uses only the official Level 6 figure; YouTube RPM replaced by a method).
4. Assessments: all 351 test-type Search Console queries matched to the 29 existing assessment pages; **no new assessment needed**; wording added to `src/config/assessmentPages.ts`.
5. Homepage title/description changed (`src/pages/index.astro`); Contact page left unchanged (owner agreed).
6. Prompt files updated with the sales/marketing lens, the new length policy, etc. (BLOG_WRITING_PROMPT*.md, BLOG_WORKFLOW.md, BOFU/MOFU prompts and follow-ups, DOORWAY_PREVENTION_GUIDE.md, SEO_CONTENT_STRATEGY.md, ASSESSMENT_PAGE_PROMPT.md, COWORK_KICKOFF_PROMPT.md, docs/content-rules.md, src/config/scalability.mjs).
7. **39 new blog pages built** (9 P1 + 7 P2 + 7 P3 + 16 "is X a good career" pages), each with `docs/dossiers/<slug>.md` (STEP 0, sources, fact ledger, image brief) and `docs/dossiers/<slug>.passlog.md` (three separate pass entries). All registered in `src/config/blog.ts`; 100+ existing sibling pages got an inbound link to them.
8. **Expansions of existing pages** where a new page would have been a duplicate: career options after JEE, career after MBA in marketing, business-analyst career path, "is MBA/BBA/BCA a good career option" (log: `docs/dossiers/expansion-jee-mba-ba.passlog.md`, `expansion-mba-bba-bca.passlog.md`).
9. Corrections to older pages found along the way: ICAI fee total (Rs 49,000 per the ICAI FAQ), NFSU fee is per semester, polytechnic-to-B.Tech lateral-entry branch rule softened, YouTube Partner Programme bar rising from 1 Feb 2027.
10. Search Console baseline (13 Jul to 12 Oct 2026) saved in `reports/keyword-authority/search-console-baseline-2026-07-13-to-2026-10-12/`: 2,689 clicks, 212,914 impressions. Re-measure the new pages 6-8 weeks after indexing.

Final verification at the end of the first chat (main branch): `pnpm exec astro build` OK; `check-public-copy` passed on 1,109 rendered files; 0 broken blog links; internal URL check passed; 0 pages with fewer than 4 inbound links; scalability coverage contract passed. `git status` clean.

## 4. How the work is organised in the repo

- Pages: `src/pages/blog/<category>/<slug>/index.astro` using `BlogPostLayout`. Registry: `BLOG_PUBLISHED_POSTS` in `src/config/blog.ts` (the sitemap derives from it). Single-career pages also get a line in `POST_SCALE` in `src/config/scalability.mjs`. Bottom CTA auto-chosen by `src/config/blogSalesLinks.ts` or passed as `salesHref` / `salesLabel` on the page.
- Every `td` needs `data-label`. Apostrophes inside single-quoted JS strings must be escaped (one unescaped apostrophe broke the whole build once).
- Checks to run after any change: `pnpm exec astro build`, then `node scripts/check-public-copy.mjs`, `check-blog-links.mjs`, `check-internal-urls.mjs`, `check-inbound-links.mjs`, `check-scalability-coverage.mjs`. `audit-images.mjs --strict` will fail the new pages until images are added.
- Commit style: end commit messages with the attribution trailers your session specifies. Push with `git push origin main`.

## 5. Working method that worked (reuse it)

- One background agent per keyword, with the brief in `tools/P2_BRIEF.md` plus a short page spec (keyword, slug, category, author alternating "Shivanshi Sehgal" / "Allu Vagdevi", sibling pages to read, what concept is missing versus the nearest page). Tell agents to read both prompt files truly in full (one agent skimmed 25% of the main prompt; the lead should insist).
- Run **at most about 3 agents at once**; the account hit its usage limit repeatedly with 4-5. When agents fail with a rate-limit error their work is saved; resume them with SendMessage after the reset.
- The lead (you) then: spot-checks the agent's file (em dashes, banned words, `td` labels, links exist), **removes figures the agent could not verify** (they often came from search snippets), registers the page (`tools/addpost.py`), adds a POST_SCALE line if it is a single-career guide, adds inbound sibling links (`tools/linkp.py`), builds and runs the checks, commits only the files for that page, pushes.
- Agents must not edit `blog.ts`, `scalability.mjs`, `site.ts` or sibling pages; the lead does that centrally.
- Do not commit other agents' unfinished drafts (the stop-hook complains about untracked files; ignore until the page is verified).

## 6. Pages the owner has seen and decisions already made

- Retitles are additive only (slug, URL, existing target words unchanged). Confirmed by the owner.
- Sibling links from existing pages to new pages: owner said "whatever helps for SEO"; done.
- B.Tech overlap with `engineering-career-options`: both kept and cross-linked.
- Medium-confidence facts: left on pages with "confirm on the official site" wording; each dossier has a ledger. Owner asked for plain explanation (given): agents could not open many official sites, so some facts came from news summaries.
- Images: the owner will make them and has asked for the URL list (`01-IMAGES-NEEDED.md`). "Then we can write them later" = the owner will supply images and ask for them to be added to the pages.

## 7. Known caveats to carry forward

- The agents often could not open official sites (ICSI, DGCA, UPSC, NTA PDFs, AmbitionBox, Payscale). Pay and date figures are labelled "reported" where they remain. Before promoting a page, re-check date-sensitive facts (exam dates, fees, cut-offs, YouTube/UGC/RERA rules). Each dossier's fact ledger lists confidence and where to re-verify.
- Facts we removed because they were unverified: SAP exam fee, Savills data-centre numbers, Semicon 2.0 counts, real-estate developer pay and quarter sales numbers, ethical-hacking AmbitionBox row, TIFR dates and fellowship amounts, IndiGo cancellation count.
- Nothing was viewed in a real browser at phone width; layout relies on `data-label` stacking.
- The petroleum page's agent skimmed part of the main prompt; all other agents reported reading it fully.

## 8. Start prompt to paste into the new chat

> This session works only on the repo at /home/user/futurecareer-school-2 (FutureCareerSchool, futurecareerschool.com, branch main, push to main only). First read, in this order: `handoff/00-README-START-HERE.md`, `handoff/02-PENDING-WORK.md`, `COWORK_KICKOFF_PROMPT.md`, `handoff/tools/P2_BRIEF.md`, `BLOG_WRITING_PROMPT.md` and `BLOG_WRITING_PROMPT_FOLLOWUP.md` (in full). Then continue with the pending pages in `02-PENDING-WORK.md`, following the kickoff protocol exactly (one independent agent per keyword, STEP 0 duplicate check, three separate logged follow-up passes, spot-verify claims, run build and the checks, push to main). Images for the pages in `handoff/01-IMAGES-NEEDED.md` will be supplied by me later.
