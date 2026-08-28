# Codex Handoff Prompt

Copy the prompt below into Codex from the root of the NKP4 website repository.

---

Before making any changes, read every file in:

`/docs/nkp4-site/`

Treat those documents as the source of truth for:

- NKP4 positioning
- Nielsen Aragon's founder story
- company relationships
- portfolio facts
- tone of voice
- design philosophy
- content hierarchy
- website goals

Do not invent missing facts. If something is listed in `09-OPEN-QUESTIONS.md`, preserve the gap or use a clearly temporary placeholder rather than fabricating content.

## Primary website objective

NKP4.com is Nielsen Aragon's holding-company website and primary professional networking / credibility destination.

It should be the URL he can share after someone:

- meets him
- sees him on social media
- hears him speak
- receives an introduction
- wants to understand what he builds or operates
- wants to contact him

The site is not intended to show off. Its job is to provide quiet credibility by documenting the work clearly.

A visitor should quickly understand:

1. who Nielsen is
2. what NKP4 is
3. what he has built
4. what he currently operates
5. what he has invested in
6. what services are available
7. how he thinks about building companies
8. how to contact him

## Important structural principle

Do not turn the website into a résumé or LinkedIn clone.

Nielsen's career should be presented as an arc:

**Bay Area → technology → operator → founder → NKP4**

Career logos and experience should support the story rather than dominate it.

## Primary design reference

Mark Cuban Companies:
https://markcubancompanies.com/

Use MCC as inspiration for:

- portfolio-first presentation
- founder + company relationship
- one central hub for multiple businesses and investments
- simple company discovery
- business-directory clarity

Do NOT clone MCC.

Do not copy its exact layout, styling, wording, components, or branding.

## Secondary references

Tiny:
https://tiny.com/

Use for:
- human voice
- founder/operator storytelling
- concise company descriptions

Exor:
https://www.exor.com/

Use for:
- typography
- restraint
- whitespace
- mature holding-company presentation

Pioneer Square Labs:
https://www.psl.com/

Use for:
- presenting multiple companies as one ecosystem

Red Sea Ventures:
https://www.redseaventures.com/

Use for:
- navigation and contact simplicity

## Core NKP4 ideas

**Build. Operate. Equip. Invest.**

**Accountability → Predictability → Profitability → Scalability**

Internal philosophy:

**Don't just sell the apple. Sell the seeds.**

Interpretation:

The companies are the visible output. NKP4's deeper value is the experience, systems, technology, operating knowledge, pattern recognition, and resources that can be applied repeatedly across businesses.

## Current known portfolio

### NKP4 Technology
Operating Company · AI & Technology Consulting

### SureHelp Inc.
Founder & Operator · Insurtech

### Manifest Network
Investment · Web3 / Proof of Authority

Use `/docs/nkp4-site/05-PORTFOLIO.md` for factual descriptions.

## Tone

Use plain English.

Be:
- confident
- understated
- direct
- human
- useful

Avoid:
- generic VC / PE jargon
- inflated claims
- fake metrics
- “world-class”
- “global conglomerate”
- “transformational ecosystem”
- empty AI language
- LinkedIn-style résumé copy

Let the work establish credibility.

## First task

Do not immediately redesign the entire site.

First audit the current repository and existing website.

Return:

1. current tech stack and relevant architecture
2. current pages and navigation
3. current homepage sections
4. components that appear reusable
5. content that conflicts with the NKP4 documentation
6. what should stay
7. what should change
8. proposed homepage narrative and section order
9. proposed information architecture
10. an implementation plan broken into small, reviewable phases

Pay particular attention to mobile because this website will often be opened from a phone immediately after networking or an introduction.

Do not make large destructive changes in this first pass.

After the audit, wait for approval of the direction before implementing the full redesign.

## After direction is approved

Implement incrementally.

Recommended order:

1. navigation / global shell
2. hero
3. portfolio
4. Build / Operate / Equip / Invest
5. founder arc
6. operating philosophy
7. contact
8. supporting pages
9. metadata / OpenGraph / SEO
10. responsive polish / performance

Keep portfolio data structured and reusable rather than hardcoding the same facts across multiple components.
