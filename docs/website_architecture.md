# WEBSITE ARCHITECTURE
## Final Information Architecture — LOCKED
### Supersedes: Phase 2 Specification §01–02, Phase 3 Review (single-page mandate)

> This document is the source of truth for site structure. Strategy, positioning, the Explorer philosophy, the workflow database, and the trust/conversion model are treated as complete and are not re-argued here — they are inherited from Brand & Positioning Foundation, Experience & Discovery Architecture, Project Memory, and the Master Design Strategy Document.
>
> **Explicit override:** Phase 2 §01 ("single-page experience... no traditional site map") and §02 ("Navigation is a word that does not apply here") are retired by deliberate decision, not by error correction. This document replaces them. Where Phase 2/3 content describes mechanics that still apply inside a page (the Gallery, the Eclipse, the Explorer, the Signal panel, scramble/silence/reveal mechanics, the visual and motion language, the content register), those mechanics are preserved and re-homed onto specific pages below. Where Phase 2/3 content depends on the absence of navigation or the absence of secondary pages, it is discarded.

---

# 1. WEBSITE PURPOSE

**What the website exists to do:**
Help operational business leaders in Gujarat and Western India identify where AI creates measurable value inside their specific business, while establishing the company as the authority capable of guiding that implementation — and converting that recognition into a qualified WhatsApp-initiated conversation.

**The belief the website must create, in sequence:**
1. These people understand my business.
2. These people understand my industry.
3. These people have already mapped where AI applies inside companies like mine.
4. These are the people I should talk to before making AI decisions.

**Who it serves:**
- **Primary:** Founders, Managing Directors, CEOs, Operations Heads, Plant Heads, GMs at 20–500 employee operational businesses — manufacturing, textile, pharma, FMCG, distribution, logistics, packaging, engineering, chemicals, export — based in Gujarat and broader India.
- **Secondary:** Finance, Sales, HR, IT, and department heads at the same companies, arriving via internal referral or shared link.

**What action it should drive:**
A WhatsApp-initiated conversation, reached only after the visitor has formed independent conviction — never a cold form fill, never a pushed call booking.

**What it must never become:** an AI education site, a tools catalog, a generic agency portfolio, a SaaS marketing site, or a lead-gen funnel that pressures before it proves understanding.

---

# 2. SITE MAP

The single-page model is retired. The site is now a defined set of pages, each earning a specific job in the trust sequence (Layer 1–7) and the emotional journey (Recognition → Curiosity → Diagnostic Recognition → Possibility → Validation → Strategic Desire → Conversation Readiness) described in Experience & Discovery Architecture. The Explorer remains the centerpiece — now a dedicated page rather than a homepage section — because its scale (104 systems, 8 clusters, 12 industries) requires room the homepage cannot give it without diluting the homepage's own job: conviction in under 90 seconds.

## 2.1 Homepage `/`

**Purpose:** Recognition and Curiosity (Journey Stages 1–2). Prove operational understanding immediately, establish authority, and create one inevitable next action: enter the Explorer.

**Target visitor:** All traffic types — cold search, warm WhatsApp referral, industry-page arrivals who want the full context.

**Structure (inherits the Gallery → Eclipse cinematic logic from Phase 2 §03, now scoped to the homepage only):**
- **Gallery (Act 1):** The four-word hero (`VISIBILITY. COORDINATION. PREDICTION. CONTROL.`), the operational-state subline, the `104 AI SYSTEMS · 12 INDUSTRIES · ALREADY PROVEN` proof line — unchanged from Phase 2 §03.
- **Eclipse (Act 2):** Retained as a scroll transition, but it now transitions into a homepage preview of the constellation — a static or lightly interactive teaser (10–15 representative nodes across 3–4 clusters, not the full 104) — rather than the full Explorer. The teaser's only job is to make the Explorer page feel inevitable, not to deliver the Explorer experience itself.
- **Operational Reality Strip:** A new homepage section (absent from Phase 2 because Phase 2 had no homepage/Explorer separation) — 4–6 short, industry-agnostic operational pain statements (reporting delays, missed follow-ups, inventory blind spots, forecasting failures) styled in the Signal's "reality sentence" register. This is Diagnostic Recognition (Stage 3) compressed onto the homepage, seeding the "how do they already know this?" reaction before the visitor ever reaches an industry page or the Explorer.
- **Authority Proof Strip:** Anonymized deployment proof line, same register as Phase 2 §05 Section 4 (`[Industry] · [Region] · operational since [year]`), plus the counter (`DEPLOYED ACROSS N INDUSTRY CATEGORIES`).
- **Closing CTA block:** Single dominant CTA into the Explorer. Secondary CTA into WhatsApp for visitors already convinced.

**Primary CTA:** `ENTER THE INTELLIGENCE MAP` → Explorer page.
**Secondary CTA:** `BEGIN THE ASSESSMENT` (WhatsApp) — present but visually subordinate; most homepage visitors are not yet at Conversation Readiness.

## 2.2 Explorer `/explorer`

**Purpose:** The centerpiece. Possibility, Validation, and Strategic Desire (Stages 4–6). This is where the visitor moves from "interesting" to "I need to know what this means for us."

**Target visitor:** Visitors who have passed Recognition on the homepage, or warm visitors arriving via direct link who want to skip straight to the substance.

**Structure:** The full constellation as specified in Phase 2 §04 — 104 nodes, 8 operational intelligence clusters plus Management Synthesis center, kinetic lines, pan/zoom, industry filter (one industry at a time), cluster hover labels via manually-defined polygon zones, index/list view toggle for mobile and for visitors who prefer search over spatial browsing.

**The Signal:** Unchanged in mechanics from Phase 2 §05 — scramble, 0.9s silence, reality sentence, outcomes with count-up numbers, mechanism (AI HANDLES / YOU HANDLE), proof, in-panel conversion. Opens as an overlay panel on top of the Explorer page; closing it returns to the constellation, not to a different page. The Signal does not need its own URL — it is a state of the Explorer page, addressable via a query parameter (`/explorer?node=node-id`) so individual systems are linkable and shareable, which a single-page architecture could not offer.

**Why Explorer is a dedicated page, not a homepage section or hybrid:**
A homepage section forces a compromise between two incompatible jobs — quick conviction (homepage) and deep, unhurried exploration (Explorer). Phase 2's single-page model solved this by making the entire site one continuous descent, which works only if there is no other page to escape to. Once secondary pages exist (industry pages, proof, contact), visitors need a stable, linkable, bookmarkable destination for "the map" — something they return to, send to colleagues, and reference in conversation with their own team before talking to us. A dedicated page also allows the Explorer to be entered directly from industry pages pre-filtered to the visitor's industry, which a homepage section cannot do cleanly.

**How users enter:** From homepage primary CTA; from any industry page's "See this industry's systems" CTA (enters pre-filtered); from direct/shared links to specific nodes; from the global navigation.

**How users leave:** Close File returns to the constellation. The persistent CTA (see §6) and the in-panel CTA both route to the Contact page or open the WhatsApp deep link directly — Explorer does not trap the visitor; conversion is one click away at all times once Surface 2 conditions are met.

**Primary CTA:** In-panel `BEGIN ASSESSMENT` (Surface 1, after Proof) and persistent top-right `BEGIN THE ASSESSMENT` (Surface 2, after second panel opened this session) — both route to Contact or direct WhatsApp.
**Secondary CTA:** `← CLOSE FILE` / `≡ LIST VIEW` ↔ `◈ MAP VIEW` — exploration controls, not conversion.

## 2.3 Industry Pages `/industries/[industry]`

One page per primary industry: Manufacturing, Textile, Pharma, FMCG, Distribution, Logistics, Packaging, Engineering, Chemicals, Export. (Trading and Food Processing, named in Phase 2's industry filter list, are folded into Manufacturing/FMCG/Distribution rather than given dedicated pages — ten focused pages outperform twelve thin ones for both SEO and content production cost.)

**Purpose:** Recognition for industry-specific search traffic; Specificity (Trust Layer 3) and Pattern Recognition (Trust Layer 4). These pages exist primarily for search — a Gujarat textile manufacturer searching "AI for textile manufacturing" should land somewhere built for them, not a generic homepage.

**Target visitor:** Cold search traffic with industry-specific intent. This is the primary SEO acquisition surface for the site.

**Structure:**
- Industry-specific reality strip (3–5 operational pain statements unique to that industry, pulled from the workflow database — e.g., for Textile: yarn quality variance, dye-lot consistency, loom downtime).
- A curated subset preview (8–12 nodes) of the constellation filtered to that industry, presented as a static or lightly interactive grid — not the full pan/zoom Explorer, to keep page weight and cognitive load low for a cold, search-originated visitor.
- One or two anonymized proof lines specific to that industry.
- A single industry-specific reality-sentence-style headline that does the Diagnostic Recognition job in one line.

**Primary CTA:** `SEE ALL [INDUSTRY] SYSTEMS` → Explorer, pre-filtered to that industry.
**Secondary CTA:** `BEGIN THE ASSESSMENT` (WhatsApp) — present for visitors with enough prior trust (referral traffic) to convert without visiting the Explorer at all.

## 2.4 Proof `/proof`

**Purpose:** Validation (Stage 5) and Trust Layer 6–7 (Proof, Social Validation) as a standalone, linkable destination. In the single-page model, proof lived only inside each Signal panel. A dedicated page exists because warm visitors and referral traffic often want evidence before they explore — they do not want to hunt through 104 systems to find it.

**Target visitor:** Warm visitors, referral traffic, and visitors deep in their own internal evaluation who need something to forward to a colleague or include in a board memo.

**Structure:** Aggregated deployment proof across all industries (anonymized, same register as Phase 2 §05 Section 4 and §11 rules — geographically specific, temporally anchored, industry-accurate, no fabricated names or logos), organized by cluster or industry, with the accuracy-counter rule from §11 strictly enforced. No testimonial quotes presented as primary trust-builders — per Experience & Discovery Architecture, testimonials reinforce trust that already exists; they do not create it. If testimonials are used, they appear after the deployment proof, not before it.

**Primary CTA:** `EXPLORE THE SYSTEMS BEHIND THIS PROOF` → Explorer.
**Secondary CTA:** `BEGIN THE ASSESSMENT` (WhatsApp).

## 2.5 About `/about`

**Purpose:** Trust Layer 1–2 reinforcement for visitors who specifically want to know who is behind the authority claim — a smaller fraction of traffic, but a necessary one for due-diligence-minded buyers (a 52-year-old founder from Surat will, at some point, ask "who actually runs this"). This page exists for credibility completeness, not as a primary conversion surface.

**Target visitor:** Late-stage visitors performing final diligence before initiating contact; occasionally early-stage skeptical visitors checking legitimacy before engaging further.

**Structure:** The Strategic Differentiator ("Most AI companies ask what can AI do — we ask what business problem is worth solving"), the Authority Position, brand personality made visible through register rather than stated as adjectives, and a short statement of method (how the workflow database was built — this is the moat described in Project Memory Breakthrough 06, and naming its existence, without exposing its contents, is itself a trust signal).

**Primary CTA:** `BEGIN THE ASSESSMENT` (WhatsApp).
**Secondary CTA:** `EXPLORE THE INTELLIGENCE MAP` → Explorer.

## 2.6 Insights `/insights` and `/insights/[slug]`

**Purpose:** SEO authority surface and ongoing search acquisition beyond the fixed industry pages. Exists to capture long-tail, problem-specific search intent ("how to reduce inventory forecasting errors in textile manufacturing") that a fixed industry page cannot cover exhaustively, and to give the site a mechanism for adding fresh, indexable content over time without touching the Explorer or core pages.

**Target visitor:** Cold search traffic with a specific operational question, often earlier in their thinking than industry-page visitors (problem-aware, not yet solution-aware).

**Structure:** Index page lists articles by cluster (Production Intelligence, Supply Chain Intelligence, etc.) and by industry. Each article follows the brand's content register (Brand & Positioning Foundation, Experience & Discovery Architecture) — operational-reality-first, no AI jargon leading any sentence, specific over generic. Articles end by routing into the relevant cluster or node inside the Explorer, never into a generic "contact us."

**Primary CTA (per article):** Deep link into the Explorer, pre-filtered or pre-opened to the specific relevant node/cluster.
**Secondary CTA:** `BEGIN THE ASSESSMENT` (WhatsApp).

## 2.7 Contact `/contact`

**Purpose:** Conversation Readiness (Stage 7). The single conversion destination for visitors not converting via the in-panel or persistent Explorer CTAs.

**Target visitor:** Any visitor who has reached internal conviction, from any page.

**Structure:** Retains Phase 2 §08/§10 decisions in full — no `<form>` element, fields limited to Name, Company & City, WhatsApp Number, and an optional challenge/context field, no email field (per the locked reasoning: email implies a nurture sequence, this is a pre-qualified conversation initiator, not a content funnel), no Calendly/calendar booking. Success state retains the typographic echo of the reality sentence (`YOUR REQUEST HAS BEEN RECEIVED.`) and the receipt-plus-expectation pattern.

**Primary CTA:** `SEND REQUEST` (submit).
**Secondary CTA:** `← RETURN TO EXPLORATION` (post-submission, back to Explorer) — the one place "return" is used, per the locked register exception in Phase 3.

---

# 3. NAVIGATION

The absence-of-navigation decision is retired along with the single-page mandate — a multi-page site cannot function without wayfinding. Navigation is rebuilt in the same disciplined, register-appropriate spirit Phase 2 applied to everything else: minimal, precise, never decorative.

## 3.1 Desktop Navigation

Fixed top bar, transparent over the Gallery (matching the Gallery's `#ffffff` background with `#000000` text), transitioning to a solid `#0a0a0a` bar with `#ffffff` text once the visitor scrolls past the hero on any page (the Eclipse-style color transition from Phase 2 §02–03 is preserved as a cross-page motion signature, not just a homepage device).

**Layout, left to right:**
- Wordmark, fixed left, small-caps, weight 700 — unchanged typographic treatment from Phase 2 §02.
- Center-right cluster: `EXPLORER` · `INDUSTRIES` (hover reveals a flyout listing the 10 industry pages) · `PROOF` · `INSIGHTS` · `ABOUT`
- Far right: `BEGIN THE ASSESSMENT` button — visually distinct (filled, not text-only), present on every page from load, not appearing-after-scroll as in the retired Phase 2 §02 spec. With navigation now possible, conversion no longer depends on a single contextual trigger; it is simply always available, consistent with a normal site's persistent-CTA convention.

**Navigation hierarchy:** Two levels only. Top-level items route to their own pages; only `INDUSTRIES` carries a flyout, because ten destinations cannot reasonably live as ten top-level items. No third level — industry flyout items go straight to their page, not to a further submenu.

**Sticky behavior:** The bar is sticky on every page except during the homepage's Gallery viewport, where it remains fixed-but-minimal (wordmark only, per Phase 2 §02's original Gallery treatment) until the visitor scrolls — preserving the Gallery's intentional silence while still making the bar present, so the visitor is never without a way out.

## 3.2 Mobile Navigation

Wordmark left, single hamburger icon right. Hamburger opens a full-screen `#0a0a0a` overlay menu (not a slide-out drawer) listing: Explorer, Industries (expands inline to show the 10 industries, not a separate screen), Proof, Insights, About, and a bottom-anchored `BEGIN THE ASSESSMENT` button that is always visible without scrolling within the open menu.

The Explorer's mobile behavior (defaulting to Index/List view, per Phase 2 §09's locked decision) is preserved unchanged — that decision was about the Explorer's internal interaction model, not about site-level navigation, and remains correct.

## 3.3 CTA Placement

- **Persistent, every page, top nav bar:** `BEGIN THE ASSESSMENT` — always present, no longer state-gated by scroll position or session behavior, since a multi-page site does not have a single continuous "session depth" the way the Phase 2 single-page model did.
- **In-page, contextual:** Each page also carries its own primary CTA (see §2) suited to where that visitor is in the journey — e.g., an industry page's primary push is into the Explorer, not straight to Contact, because that visitor has not yet earned Strategic Desire.
- **In-panel, inside the Signal:** Surface 1 from Phase 2 §05/§10 is preserved exactly — appears after Proof, inside the panel, as the highest-conviction conversion moment on the entire site.
- **Persistent Explorer-only escalation:** Surface 2 from Phase 2 §10 — the heightened, more direct CTA state that activates after a visitor opens their second Signal panel in one session — is preserved as an Explorer-page-specific behavior layered on top of the always-present nav CTA. This resolves Phase 3's RESET 01 by removing the contradiction entirely: the nav-level CTA is no longer Eclipse-triggered (there is no Eclipse-triggered CTA anymore, because the nav bar's CTA is simply always there), and the second-panel-triggered escalation becomes a visual intensification (e.g., subtle pulse or color shift) of the existing nav CTA rather than a second, separately-triggered element. One element, one set of states, no contradiction.

## 3.4 Explorer Access

Explorer is reachable from: global navigation (every page, every time), homepage primary CTA, every industry page's primary CTA (pre-filtered), every Insights article's primary CTA (pre-opened to the relevant node), and the Proof page's primary CTA. It is the single most-linked destination in the site's internal graph, by design — consistent with Project Memory's framing of the Explorer as "the trust engine... the conversion engine."

---

# 4. USER JOURNEYS

## 4.1 Cold Visitor Journey

Entry: organic search (industry page or Insights article) or unbranded direct traffic (homepage).

`Industry Page or Insights Article (Recognition via specific operational pain) → Explorer, pre-filtered (Diagnostic Recognition + Possibility, multiple Signal panels opened) → Proof page (Validation, optional — many will get sufficient proof inside Signal panels and skip this) → Contact (Conversation Readiness)`

Per Experience & Discovery Architecture's Cold Traffic model (`Recognition → Understanding → Discovery → Proof → Conversation`), trust is earned slowly. Cold visitors should never see the nav-bar CTA as the first thing demanding attention — its always-present-but-visually-subordinate treatment (text button, not filled, until the visitor has engaged) respects this pacing. Cold-traffic landing pages (industry pages, Insights articles) never open with a Contact CTA as their primary action — only ever into the Explorer.

## 4.2 Warm WhatsApp Visitor Journey

Entry: a shared WhatsApp link, typically pointing to the homepage, a specific industry page, or a specific Explorer node (`/explorer?node=...`).

Per Experience & Discovery Architecture's Warm Traffic model (`Discovery → Validation → Conversation`), this visitor already carries borrowed trust from whoever shared the link. The journey is shorter:

`Direct entry to Explorer node or industry page (immediate Discovery — they already trust the referrer) → 1–2 more Signal panels opened (Validation) → Contact, often via the in-panel CTA directly, skipping the Proof page entirely`

Design implication: deep links into specific Explorer nodes must work flawlessly and load fast — this is the highest-conversion-probability entry path on the site, and it depends entirely on the Explorer's node-level URL addressability established in §2.2.

## 4.3 Industry-Specific Visitor Journey

Entry: search for an industry-plus-AI query, landing on the matching `/industries/[industry]` page.

`Industry Page (immediate Recognition — the page is built for exactly their industry) → Explorer pre-filtered to that industry (Diagnostic Recognition deepens — every node they see is relevant) → either Proof page or directly to Contact, depending on how many Signal panels they open`

This journey is the primary justification for Industry Pages existing as dedicated pages rather than being folded into homepage industry-filter logic: a search visitor's first click should land them somewhere built specifically for them, not on a generic homepage they then have to self-filter from.

## 4.4 Returning Visitor Journey

Entry: direct return (bookmark, browser history, typed URL), typically to the homepage or Explorer.

Returning visitors retain the session-scoped Signal compression behavior from Phase 2 §05 (faster scramble, shorter silence, on repeat opens of the same node within a session) — this remains correct and is unaffected by the multi-page restructure, since it is a Signal-internal, session-storage-scoped behavior, not a site-navigation behavior.

For visitors returning after their session has expired (a new day, a cleared session): the full first-encounter experience plays again for every node, exactly as Phase 2 specified — but they now also have the option to skip straight to Contact via the always-present nav CTA if their prior visit already produced conviction. The multi-page model gives returning, already-convinced visitors a faster path to conversion than the single-page model could, since they no longer have to re-scroll through the Gallery and Eclipse to reach a CTA.

---

# 5. SEO ARCHITECTURE

## 5.1 Pages by Function

**Authority pages** (establish depth and expertise, secondary SEO value, primary trust value): Explorer, Proof, About.

**Search pages** (primary SEO acquisition surface, built to rank for specific intent): the 10 Industry Pages, and the Insights index plus all article pages. These are the pages where the meta description discipline from Phase 2 §01 — *"the keyword the target visitor searches is not 'AI company,' it is 'where should I implement AI in my manufacturing business'"* — is applied most aggressively. Each industry page's title tag and meta description target that industry's specific phrasing (e.g., Textile page: *"Where AI creates measurable value in textile manufacturing — yarn quality, dye-lot consistency, loom uptime, and 11 other systems already deployed across Gujarat textile operations."*).

**Conversion pages** (primary job is to convert, not to rank): Contact, and the Explorer's Signal panel CTAs. These are not optimized for organic discovery; they are optimized for the visitor who already arrived with intent.

**Hybrid:** Homepage carries brand-term SEO value (anyone searching the company name lands here) and is the top of the conversion funnel for branded traffic, but is not the primary unbranded-search acquisition surface — that job belongs to Industry Pages and Insights.

## 5.2 Internal Linking Strategy

- Every Industry Page links into the Explorer pre-filtered to that industry (high-value internal link, passes relevance directly).
- Every Insights article links into the Explorer pre-opened to the specific relevant node or cluster — this is the mechanism that lets long-tail content compound into Explorer authority over time, per Project Memory Breakthrough 06's framing of the workflow database as the moat: every new indexed article is another path into the moat.
- The Explorer links back out to relevant Industry Pages from within each Signal panel (e.g., a Textile-relevant node's panel includes a link to the Textile industry page) — this closes the loop and lets a visitor who entered cold via one industry's content discover adjacent industries.
- Proof page links into the Explorer by cluster, giving search engines (and visitors) a second, differently-organized path into the same 104 nodes.
- About and Contact are linked from global navigation only — they do not need to receive contextual internal links, since their job is credibility-completion and conversion, not content depth.

## 5.3 Sitemap and Crawl Priority

`/`, the 10 `/industries/[industry]` pages, and `/insights/[slug]` articles are the highest crawl-priority pages. `/explorer` is crawlable but its primary value is delivered to logged-session human visitors via interaction, not to search engines via static content — its meta description and Open Graph image (per Phase 2 §01's locked decision: a high-quality screenshot of the full constellation at overview zoom) carry its SEO weight, not its interactive body.

---

# 6. EXPLORER PLACEMENT

**Decision: Dedicated page, with a homepage teaser.**

This is not a hybrid in the sense of duplicating functionality across two surfaces — it is a single source of truth (the `/explorer` page) with a deliberately limited preview surfaced on the homepage to create inevitability, exactly as the homepage's Eclipse-into-teaser structure in §2.1 describes.

**Why not a homepage section (as Phase 2 originally specified):** Phase 2's model worked because the entire site was the homepage — there was no competing page for the Explorer to be "dedicated" relative to. Once Industry Pages, Proof, Insights, and Contact exist as real destinations, a homepage-embedded Explorer becomes one section of many competing for scroll attention, weakens the homepage's primary job (Recognition and Curiosity in under 90 seconds), and prevents the Explorer from being linked to directly, bookmarked, pre-filtered from an industry page, or deep-linked to a specific node from external content — all of which are required by §2.2, §2.3, and §5.2 above.

**Why not pure hybrid (full Explorer duplicated on homepage AND as its own page):** Duplication creates two sources of truth for node data, doubles maintenance cost, and confuses the internal linking strategy (which page does an Industry Page's CTA point to?). A single full Explorer with a homepage teaser gets the inevitability benefit of hybrid without the duplication cost.

**How users enter:** See §2.2 and §3.4 — navigation, homepage teaser CTA, industry page CTAs (pre-filtered), Insights CTAs (pre-opened to node), Proof page CTA, direct/shared deep links.

**How users leave:** Close File (returns to constellation, same page); navigation to any other page (Explorer state is not preserved across page navigation — a returning visitor restarts at the constellation overview, which is acceptable since the constellation overview is itself a meaningful, re-orienting experience, not a loading state); Surface 1 or Surface 2 CTA click (routes to Contact or opens WhatsApp directly).

---

# 7. CONVERSION ARCHITECTURE

## 7.1 Primary Conversion Path

`Any entry point → Explorer (pre-filtered or general) → Signal panel(s) opened → Surface 1 in-panel CTA (after Proof section) → Contact page → WhatsApp-initiated conversation`

This path is primary because it is the only path that delivers full conviction before asking for contact — consistent with Truth 02 and Truth 10 in Project Memory ("Visitors must believe 'these people understand my business' before 'these people understand AI'"; "Authority is created through understanding, not self-promotion").

## 7.2 Secondary Conversion Path

`Industry Page or Proof Page or About Page → nav-bar persistent CTA → Contact page → WhatsApp-initiated conversation`

This path exists for visitors who arrive already warm (referral, prior research, repeat visitors) and do not need the Explorer to reach conviction — forcing them through it would be friction, not trust-building. The nav-bar CTA's always-present, page-agnostic placement (§3.3) is what makes this path possible in a way the single-page model could not, since Phase 2's CTA only existed after the Eclipse, deep into the one continuous scroll.

## 7.3 CTA Hierarchy

1. **In-panel Surface 1** (`BEGIN ASSESSMENT` button, after Proof, inside Signal) — highest conviction, most direct copy. Per Phase 2 §05's locked CTA copy hierarchy, this stays exactly as specified: headline `Begin the assessment.`, subline `Your business. Your industry. Your AI opportunity map.`
2. **Explorer-page escalated nav CTA** (Surface 2 visual intensification after second panel opened) — second-highest conviction, same copy, heightened visual treatment.
3. **Global nav-bar CTA** (`BEGIN THE ASSESSMENT`, every page, default state) — always available, lower visual dominance until escalated.
4. **In-page contextual CTAs** (Industry Page → Explorer; Insights → Explorer; Proof → Explorer) — these are not conversion CTAs in the WhatsApp sense; they are progression CTAs that move a visitor deeper into the trust sequence. They should never be confused with or styled identically to the WhatsApp conversion CTA — different visual weight, different copy register (`SEE ALL TEXTILE SYSTEMS` vs. `BEGIN THE ASSESSMENT`).

## 7.4 WhatsApp Strategy

Retained in full from Phase 2 §10's locked reasoning: WhatsApp Number is the required contact field; no email field exists anywhere in the conversion flow. The reasoning — *"Email implies a nurture sequence. This experience is not a top-of-funnel content play. It is a pre-qualified conversation initiator"* — applies identically in the multi-page model, since the conviction-before-contact philosophy (§7.1) is unchanged by the navigation restructure. WhatsApp is the single channel name field across the Contact page form and any direct WhatsApp deep-link buttons (e.g., a WhatsApp icon button available alongside the Contact page, for visitors who prefer to skip the form entirely and message directly).

## 7.5 Booking Strategy

No Calendly, no calendar booking, no "schedule a 30-minute call" pattern anywhere on the site — retained unchanged from Phase 2 §10's locked decision. The register reasoning (*"The classified intelligence register does not book a '30-minute discovery call.' It receives a consultation request"*) is a brand-voice decision independent of page architecture and survives the multi-page restructure intact. The Contact page form is the sole structured conversion mechanism; everything past submission is a human-initiated WhatsApp conversation, not an automated booking flow.

---

# 8. WHAT THIS DOCUMENT DELIBERATELY DOES NOT COVER

Consistent with Project Memory's "What Remains Undecided" section, the following stay in design and implementation, not architecture: exact visual treatment of the navigation bar beyond the structural decisions above, exact homepage teaser interaction fidelity, exact Industry Page visual layout, exact Insights article template, and all motion/typography/color specifics not already locked in Phase 2's visual and motion language sections (which remain valid wherever they describe a mechanic — scramble, silence, hover states, kinetic lines — rather than a page-level structural decision).

---

*This document is LOCKED. It is the input for Phase 4 (Page-Level Specification).*
