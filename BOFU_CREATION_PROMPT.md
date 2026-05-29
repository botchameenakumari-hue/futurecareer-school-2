# BOFU Page Creation Prompt (Streamlined)

Use this prompt to request a new BOFU page. It avoids redundancy with the markdown guidelines.

---

## Initial Creation Prompt

```
Create a BOFU page for this keyword: [keyword]

Follow the mandatory read order in BOFU_PAGE_PROMPT.md (starting with DOORWAY_PREVENTION_GUIDE.md).
All rules for content, CTAs, anti-doorway requirements, and assessment mentions are in those files — implement accordingly.
```

**Why this works:**
- No redundancy (rules are in BOFU_PAGE_PROMPT.md, not repeated here)
- Clear action (create page for this keyword)
- Clear reference (follow read order = agent reads all needed files automatically)
- Trusts the guidelines (no need to restate them)

---

## Follow-Up Improvement Prompt

```
Apply BOFU_PAGE_PROMPT_FOLLOWUP.md to improve this page.
Follow the improvement checklist, doorway-prevention audit, and quality standards in that file.
```

**Why this works:**
- Single reference (BOFU_PAGE_PROMPT_FOLLOWUP.md contains all the rules)
- No redundancy (improvement methods are already documented)
- Clear scope (improve the page following the file's guidelines)

---

## Alternative Longer Version (If You Want More Context)

If you want to add brief context without redundancy:

```
Create a BOFU page for this keyword: [keyword]

This is a [location / audience-specific / stage-specific / assessment / etc] page.
Follow the mandatory read order in BOFU_PAGE_PROMPT.md (starting with DOORWAY_PREVENTION_GUIDE.md).
Implement all content, CTA, anti-doorway, and assessment rules from those files.
```

The `[keyword type]` helps the agent understand which anti-doorway rules apply (local vs non-local, assessment vs non-assessment).

---

## What NOT to Repeat in Your Prompt

Remove these from your prompts (they're already in the markdown files):

- ❌ "Do not invent business facts, offers, guarantees, pricing, timelines, or outcomes." → Already in BOFU_PAGE_PROMPT.md "Non-Negotiable Truth Rule"
- ❌ "Use the approved business content bank and CTA rules from BOFU_PAGE_PROMPT.md" → Already in BOFU_PAGE_PROMPT.md (it IS the source of truth)
- ❌ "Update service routes, sitemap, and memory/docs if the service taxonomy expands." → Already in BLOG_WORKFLOW.md "Page Publishing Checklist"
- ❌ "Add only relevant depth, clearer buyer decision support..." → Already explicitly in BOFU_PAGE_PROMPT_FOLLOWUP.md "Follow-Up Content Checks"
- ❌ "Update any jump nav, anchor nav, or table of contents if sections change." → Already in BOFU_PAGE_PROMPT_FOLLOWUP.md "SEO and Structure Checks"
- ❌ "Keep all existing content intact unless I explicitly ask to rewrite or remove something." → Implied by "apply follow-up prompt"

---

## What TO Keep in Your Prompt

Keep these because they're unique to the user's instruction:

- ✅ "Create a BOFU page for this keyword: [keyword]" → Only the user knows the keyword
- ✅ "Apply BOFU_PAGE_PROMPT_FOLLOWUP.md" → Only the user decides when to do follow-up pass
- ✅ "[keyword type]" context (e.g., "This is a location page") → Helps agent choose right rules section
- ✅ Any user-specific preferences not in the guidelines

---

## Recommended Updated Prompts

**For Initial Creation:**
```
Create a BOFU page for this keyword: [keyword]
Follow the mandatory read order in BOFU_PAGE_PROMPT.md, starting with DOORWAY_PREVENTION_GUIDE.md.
```

**For Follow-Up Improvements:**
```
Apply BOFU_PAGE_PROMPT_FOLLOWUP.md to improve this page.
```

That's it. Clean, no redundancy, trusts the guidelines.
