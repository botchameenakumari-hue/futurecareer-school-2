# Future Career School — unified blog and service visual brief

Use this brief for every future batch. I will provide URLs, route patterns, or keyword groups after it.

## Goal

Create a premium, editorial, natural, human-designed visual system for Future Career School: practical career counselling and guidance for earlier financial freedom through holistic skill-building, high-value skills, proof of work, and a compounding skill portfolio. Avoid generic stock photography, repetitive AI aesthetics, neon gradients, holograms, fake dashboards, glossy 3D, and decorative visuals without meaning.

## Coverage

- Inspect the repository and cover every supplied blog and service route; never silently skip a page.
- State exclusions explicitly and preserve any explicit exclusion list.
- Use shared visuals only when the audience, keyword, location, or decision is genuinely shared. Create page-specific visuals when the context differs.
- Preserve existing good imagery, layouts, components, diagrams, and SVGs.

## Blog standard

For every eligible article, create 1 hero plus 5–7 supporting visuals; use up to 10 when the article needs it:

1. Natural editorial hero reflecting the article’s audience and situation; suitable for search/social previews; do not overcrowd it with text.
2. A human/context scene showing the real decision, work, learning, family, or career setting.
3. Evidence scenes showing people reviewing real work, documents, tools, job descriptions, budgets, projects, or feedback.
4. At least one raster text-bearing visual with short, accurate, legible labels or an at-a-glance summary.
5. Diagrams only where they clarify a real relationship; do not make every supporting image a flowchart, table, matrix, funnel, timeline, checklist, pyramid, Venn diagram, or process chain.

Text in images must be short, spelled correctly, factually aligned with the article, and repeated in nearby HTML text or a caption. Supporting visuals must convey the article’s context, not merely decorate it.

## Service standard

Cover service, assessment, audience, location, pricing, guidance, counselling, and session pages. Use human/contextual scenes plus informative visuals where useful. Apply the approved reuse matrix only when semantically appropriate, including Delhi and Mumbai reuse rules. Preserve `session-flow.svg`, `skill-portfolio-chain.svg`, and all contextual service diagrams; never delete working service assets.

## Art direction

Use believable Indian people, settings, gestures, objects, and work surfaces. Favor paper, wood, notebooks, job descriptions, portfolios, tools, course notes, budgets, and project artifacts. Vary people, crops, lighting, environments, and restrained palettes such as ink blue, forest green, clay, saffron, cream, charcoal, and muted olive. Avoid identical centered portraits, identical desks, fake smiles, handshake clichés, futuristic AI robots, and repeated AI-slop compositions.

## SEO and accessibility

Every image needs a meaningful filename, descriptive human-written `alt`, useful `title`, and a concise caption when it teaches. Use optimized WebP or equivalent, sensible dimensions, width/height attributes, lazy loading below the fold, and eager/fetch priority only for heroes. Do not keyword-stuff or make essential information available only inside an image.

## Responsive implementation

Preserve navigation, typography, CTAs, and existing page structure. Images must be responsive (`width: 100%; height: auto`) and safe on mobile, tablet, desktop, and wide screens. Check text cards, captions, tables, and diagrams for overflow. Wire every asset into the actual route/component; do not leave unused files in `public/`.

### Non-hero priority

Non-hero visuals should usually be explanatory graphics that help a reader understand the article without reading every paragraph: infographics, graphs, tables, Venn diagrams, flowcharts, linear process chains, chronological timelines, pyramids, funnels, matrix grids, callout quote boxes, asymmetrical pros-and-cons layouts, comparison tables, self-assessment checklists, iconic arrays, decision trees, roadmaps, skill maps, and framework cards. These are preferred formats, not exclusions. Select the format from the article’s actual idea; do not repeat one generic layout across every page. Natural human/editorial scenes may be added for emotion, realism, trust, or context, but they should complement—not replace—the explanatory non-hero visuals.

## Verification and delivery

Audit every supplied route; confirm every referenced asset exists; check alt/title/captions; inspect representative hero, photo, text-card, diagram, service, mobile, and desktop layouts; run `git diff --check`; run one full production build after all changes; check broken links, missing assets, overflow, and preserved service SVGs; commit and push directly to `main`; report exact route coverage, reuse versus unique assets, exclusions, verification, and commit hashes.

## Inputs

Pages/URLs or route patterns:

Keywords and audience/location context:

Explicit exclusions:

Reuse rules or must-preserve assets:
