# Content Rules — What to Write and What Not to Invent

The most expensive mistake in content creation is inventing things about the client's business. This document exists to prevent that.

---

## The golden rule

**Only state facts the client actually gave you.** You may rephrase, present beautifully, and add genuinely useful general education about a topic — but you may **never invent a deliverable, program mechanic, number, price, claim, or piece of proof** that the client didn't give you.

---

## 1. What you ARE allowed to do

- **Rephrase and present beautifully.** Strong headlines, good design, polished copy — yes.
- **Add general, true topic education.** Explaining what career coaching is, why interview prep matters, what a good resume looks like — this is general knowledge, not a claim about the business.
- **Describe the real offering using confirmed facts.**
- **Target keywords** via titles, H1s, meta, headings — keyword targeting is encouraged; making up what the service delivers is not.
- **Ask the client** when you don't know something. Say "I need X detail before I write this page."

---

## 2. What you must NEVER do (the costly list)

### Never invent deliverables or mechanics
- ❌ Session cadences: "weekly", "fortnightly", "90-day", "monthly check-ins", "12-week program" — unless the client told you
- ❌ Specific deliverables: "written action plan", "growth roadmap", "PDF workbook", "dashboard" — unless confirmed
- ❌ Program structures invented for completeness ("Phase 1: Assessment, Phase 2: Strategy…")
- ❌ Timelines and guarantees ("results in 30 days", "your first offer in 6 weeks")

### Never invent proof
- ❌ Testimonials — including paraphrased or composite ones
- ❌ Client counts, success rates, transformation stories, anecdotes ("one of our clients went from X to Y")
- ❌ Social proof numbers: "500+ professionals coached", "90% placement rate", "4.9 stars"
- ❌ Credential claims about the coach/team unless told ("certified by ICF", "10+ years experience")

### Never invent pricing
- ❌ Do not state fees, price ranges, or any pricing mechanic unless the client gave it to you
- ❌ Do not imply a price by saying something like "starting from ₹X" if you made up the number
- ❌ A general "what this type of service typically costs in India" guide is fine ONLY if clearly framed as general market context — not as your client's fees

### Never invent local presence
- ❌ "We have clients in {city}" — unless true
- ❌ "Upcoming workshops in {city}" — unless confirmed
- ❌ "Our most active region is {city}" — unless told

---

## 3. Specific to India market — common fabrication traps

These details are tempting to invent because they sound authoritative, but they are almost never given by clients and must not be made up:

- ❌ NSDC / NCVET / UGC recognition or accreditation
- ❌ "Recognised by Government of India" or any ministry
- ❌ Placement percentage / hiring partner logos
- ❌ Alumni names, company logos, batch sizes
- ❌ "ISO certified", "ISO 9001" or any certification not explicitly confirmed

---

## 4. The right response when you don't have a fact

When a page logically "needs" a number, proof point, or specific detail you don't have, the correct responses are:

1. **Ask the client:** "What results can you share? What's the typical session structure?"
2. **Write around it honestly:** "Join a focused session designed around your specific situation." (not: "Our 90-minute sessions cover your 5 key priorities")
3. **Use general framing:** "What a career coach typically does is…" clearly framed as category-level info, not specific to this business
4. **Leave a placeholder:** `[CLIENT TO PROVIDE: typical engagement duration]` — better than a lie

Never fill the gap with an approximation and hope no one checks.

---

## 5. Pre-publish checklist (run before shipping any page)

- [ ] Does every specific claim (number, mechanic, credential) trace back to a fact the client gave you?
- [ ] No invented proof: testimonials, client counts, success rates?
- [ ] No invented pricing or fee ranges?
- [ ] No invented cadence or timeline?
- [ ] Programs and services described correctly — what the client told you, nothing more?
- [ ] Contact details correct — phone, email, address from client, not guessed?
- [ ] One `<h1>` per page; unique `<title>` and meta description; canonical + JSON-LD present?
- [ ] No keyword cannibalization (one primary intent → one URL)?
- [ ] `npm run build` completes clean?

---

## 6. Why this file exists

Inventing "helpful-sounding" detail:
- **Destroys client trust** — they notice when their site claims things they never said
- **Creates legal risk** — fabricated credentials, placement rates, and success claims can be consumer law violations
- **Creates SEO risk** — if you rank for something you don't actually do, the bounce rate will tank the page

**When in doubt, say less.** A page that honestly describes a simple, real offering beats a polished page full of invented detail. Clients would rather have truthful copy that undersells slightly than confident copy that oversells.

---

## 7. Document and update this file

Whenever the client gives you new confirmed facts, add them here (or to a `PROJECT_STATE.md` equivalent). Whenever fabricated content is discovered and removed, add the removed item to a "banned" list in this file so future contributors don't re-introduce it.
