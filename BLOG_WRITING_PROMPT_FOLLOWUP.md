# Blog Writing Prompt Follow-Up

Status: Active

The same anti-slop public-copy rule also exists separately in `CLIENT_FACING_COPY_RULE.md` for non-blog public pages.

Please double check whether you have implemented all the instructions given in the last prompt.
But make sure you add more relevant, useful, or actionable topics or subtopics or H2, H3 just using your common sense or based on the user's or reader's relevant needs.
You haven't been as exhaustive as I expected in terms of the number of relevant topics or subtopics you have covered in just this article.
We have to beat all the existing top ranking articles, remember?

Additional follow-up checks:
- do not assume the first-pass research was enough; expand the source set again if needed
- if the article still feels based on only a small number of websites, continue broad research before calling the follow-up complete
- add more updated, practical, and relevant information only after checking a much wider source base
- for broad or competitive topics, keep collecting role signals, official facts, salary context, degree or exam requirements, hiring patterns, and practical decision factors from many relevant websites
- if the article uses any named framework or protocol, verify that the first introduction clearly uses the exact same name and that later references point back to it consistently
- do not leave a later mention like `the 4-Checkpoint Protocol` hanging if the earlier section only used vague wording such as `four filters`
- if the first sentence still does not answer the query or prove relevance immediately, rewrite it
- if the first 2 to 3 sentences still feel slow, generic, or definition-heavy, tighten them until the reader gets the answer before scrolling
- if the keyword is awkward in the exact form, use a close natural variation near the start instead of forcing unnatural phrasing
- if a long article still opens without a short scannable answer layer, add or strengthen the `.key-takeaways` box near the top
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
  - verify using the preview eval: `[...document.querySelectorAll('table')].map(t => ({ overflows: t.getBoundingClientRect().width > window.innerWidth, hasLabel: !!t.querySelector('td[data-label]') }))` — every entry should show `overflows: false`
  - never leave a published table that horizontally cuts off columns at 360–430px; stack it or simplify it
- attack wall-of-text during the follow-up (this is a common, serious failure):
  - if prose runs the full page width, restore the constrained reading column; never let text span 1000px+ lines
  - if the article opens without a short scannable summary, add a `.key-takeaways` box near the top
  - if FAQs render as a long always-open stack, convert them to the `.faq-accordion` `<details>` accordion (open the first item only)
  - if any other long reference block is a wall, collapse it into `.accordion` disclosure
  - if paragraphs or card text are dense, split them, shorten them, and add breathing room
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
- actually render and verify mobile during the follow-up, do not assume it:
  - run the dev server and view the real page near 390px width
  - confirm there is no horizontal page overflow
  - confirm grids are single column, tables are stacked or fully readable, and nothing is cut off
  - fix any failure, and if it is a recurring baseline, fix it in `src/layouts/BlogPostLayout.astro`
- if the article still looks visually flat or awkward on mobile, keep improving the design before considering the follow-up complete
