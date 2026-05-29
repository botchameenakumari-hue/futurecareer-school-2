# Client-Facing Copy Rule

Use this file whenever a task involves writing or editing public website copy and the task is not already covered by the blog or BOFU prompt files.

## Core Rule

Public website copy must speak to the visitor, not to the developer, editor, prompt, agent, or business owner.

If a sentence would make more sense in an assistant response than on the page itself, do not put it in the page.

## Non-Negotiable Rules

- Write for the reader's decision, doubt, problem, or next step.
- Make the visitor feel they are in the right place from the first line or first screen whenever the page type allows it.
- Do not explain the page structure to the reader.
- Do not explain the site's SEO, indexing, URL hierarchy, or scaling logic to the reader.
- Do not use route instructions as public copy unless the user truly needs navigation help in that moment.
- Do not use planning language, prompt language, or architecture commentary in visible page copy.
- Do not leave placeholder-style progress notes in public copy unless the user explicitly wants them visible.

## Avoid This Kind of Copy

Do not write public-facing lines like:

- `use this page when...`
- `go back to the parent page...`
- `hub page`
- `support page`
- `related page`
- `stage page`
- `this section can grow cleanly`
- `indexable`
- `noindex`
- `SEO-compatible`
- `this page is for...`
- `why this page exists`
- `keep this page focused`
- `broader service model`
- `free first layer`
- `assessment-first decision`

Also avoid similar wording that sounds like:

- route instructions
- site architecture commentary
- workflow commentary
- content strategy notes
- developer or agent reminders

## What To Write Instead

Replace internal or structural copy with:

- user benefit
- practical clarity
- decision support
- stronger positioning
- stronger skill direction
- useful next-step context
- audience-relevant outcomes

Also:
- answer the obvious query early instead of burying it
- if the page is long or easy to skim past, use a short direct summary near the top when it helps
- if the exact keyword or label is awkward, use a close natural variation instead of robotic phrasing

For link-card descriptions, explain:

- what the destination helps with
- who it is useful for
- what decision it supports

Do not explain:

- where the destination sits in the site structure
- why it exists as a separate page
- how it fits the taxonomy

## Applies To

This rule applies to all visible public copy, including:

- hero subtitles
- section subtitles
- card descriptions
- helper notes
- link-directory descriptions
- CTA support lines
- assessment blurbs
- parent-page summaries
- related-links sections
- "coming soon" notes

## Quick Test Before Finalizing

Before keeping any line, ask:

1. Does this help the visitor understand a benefit, decision, or next step?
2. Or is this really something that should have been said in the assistant response instead?

If the second answer is true, remove or rewrite it.

After changing public pages that use this rule, run `npm run check:public-copy` after build and fix any rendered-copy failures before shipping.
