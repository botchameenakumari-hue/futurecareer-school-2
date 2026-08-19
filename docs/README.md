# Docs Index — FutureCareerSchool Supplementary Reference

**Primary playbooks are in the project root** — read those first:

| Primary playbook | Use for |
|---|---|
| `PROJECT_MEMORY.md` | Orientation: brand, domain, stack, IA, source-of-truth order |
| `SEO_ARCHITECTURE.md` | URL/silo rules, internal linking, schema, canonical, anti-doorway |
| `SEO_CONTENT_STRATEGY.md` | Content quality, keyword placement, title strategy |
| `BLOG_WORKFLOW.md` | Complete blog operating guide (read order, research depth, publish checklist) |
| `BLOG_WRITING_PROMPT.md` | Blog article writing guide |
| `BOFU_PAGE_PROMPT.md` | Service / BOFU page creation |
| `CLIENT_FACING_COPY_RULE.md` | Tone guardrail for all public copy |
| `DOORWAY_PREVENTION_GUIDE.md` | Uniqueness rules, scale thresholds, red flags |

---

## Supplementary files in this folder

These docs extract and generalise patterns from the broader project. Read the primary playbooks first; these are quick-reference summaries and additions.

| File | What it adds |
|---|---|
| [seo-technical.md](seo-technical.md) | Quick-reference: head meta checklist, JSON-LD schema patterns, robots.txt, .htaccess |
| [seo-architecture.md](seo-architecture.md) | Anti-cannibalization rules summary, silo pattern, title formulas |
| [page-generation.md](page-generation.md) | How pages are structured in this project (individual .astro files, LIVE_INDEXABLE_ROUTES, layout types) |
| [keyword-research.md](keyword-research.md) | Keyword CSV format, expansion axes, intent/funnel definitions, GSC feedback loop |
| [content-rules.md](content-rules.md) | Generic content integrity rules (see `CLIENT_FACING_COPY_RULE.md` for project-specific rules) |
| [build-verification.md](build-verification.md) | PowerShell SEO audit script, deployment checklist |

## Quick rules

1. **One keyword intent → one URL.** Never two pages for the same search term.
2. **Only state facts you know to be true.** No invented deliverables, proof, or pricing.
3. **Verify by `npm run verify`** (build + public-copy check). Build output is the truth.
4. **Every page needs:** unique title (≤60 chars), unique description (130–160 chars), one H1, canonical, JSON-LD.
5. **Add URL to `LIVE_INDEXABLE_ROUTES`** in `site.ts` after the page is live and ready to index.
