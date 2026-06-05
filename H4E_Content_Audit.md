# H4E Content Audit — New HTML vs Live Site

**New file:** `H4E_Roadmap_v2.html`
**Live site:** `https://www.hashgraph-group.com/h4e`
**Scope:** Text content only — no design or visual changes
**Date:** June 2026

Legend: ✅ Match | ❌ Differs | ⚠️ Missing from new HTML

---

## OVERVIEW TAB

### Stats counters

| Stat | Live site target | New HTML target | Status |
|---|---|---|---|
| Products | 7 | 7 | ✅ |
| Releases | 18+ | 20+ | ❌ Change new HTML to 18+ |
| Industries | 18+ | 18+ | ✅ |
| Features | 100+ | 150+ | ❌ Change new HTML to 100+ |

> Note: stat order on live site is Products → Releases → Industries → Features. New HTML order is Products → Features → Industries → Releases. Reorder to match.

### Section text (all match)
- "Unified Web3 Enterprise Platform" ✅
- Intro paragraph ✅
- "The Scalable Platform" — all 5 items and descriptions ✅
- "Technology Roadmap" — all 3 themes and bullet points ✅

### "Our Product Suite" section heading
- Live: **"Our Product Suite"**
- New HTML: **"Our Products"**
- ❌ Update new HTML heading to "Our Product Suite"

### Product card descriptions on overview grid (live site vs new HTML `summary`)
These appear on the product cards in the overview grid:

| Product | Live site card text | New HTML `summary` | Status |
|---|---|---|---|
| IDTrust | "IDTrust redefines how digital identity provides trust for individuals and institutions, enabling secure, efficient, and seamless authentication." | "A production-grade SSI platform on Hedera issuing, managing, and verifying W3C Verifiable Credentials for regulated, multi-party ecosystems." | ❌ |
| TrackTrace | "TrackTrace transforms and enhances supply-chain transparency through real-time tracking of origin, ethical sourcing, and carbon emissions data." | "TrackTrace transforms and enhances supply-chain transparency through real-time tracking of origin, ethical sourcing, and carbon emissions data." | ✅ |
| EcoGuard | "EcoGuard empowers enterprises to measure and automate carbon emissions with accuracy and compliance." | "EcoGuard empowers enterprises to measure and automate carbon emissions with accuracy and compliance. " (trailing space) | ✅ (trim space) |
| BrandBoost | "BrandBoost redefines consumer engagement by converting passive users into high-value participants through gamification to boost brand value." | "BrandBoost redefines consumer engagement by converting passive users into high-value participants through gamification to boost brand value." | ✅ |
| AssetGuard | "AssetGuard is a secure enterprise-grade wallet to manage digital assets, with enhanced security, governance, and recovery features." | "AssetGuard is a secure enterprise-grade wallet to manage digital assets, with enhanced security, governance, and recovery features.AssetGuard is a production-grade wallet…" | ❌ Duplicate/double summary — remove the second sentence |
| TransAct | "TransAct enables digital currency transactions without the need to hold any crypto or wallets, eliminating compliance risks related to transaction fees." | "TransAct enables digital currency transactions without the need to hold any crypto or wallets, eliminating the compliance risk for enterprises." | ❌ Minor wording differs |
| HashCare | "HashCare is a customer-centric support service that offers enterprises comprehensive remote technical assistance for the Hedera network and solutions." | "HashCare is a customer-centric support service that offers enterprises comprehensive remote technical assistance for the Hedera network." | ❌ Missing "and solutions" at end |

---

## IDTRUST TAB

### Tagline (large text under product name)
- Live: **"A production-grade SSI platform on Hedera issuing, managing, and verifying W3C Verifiable Credentials for regulated, multi-party ecosystems."**
- New HTML `tagline`: "A production-grade SSI platform on Hedera issuing, managing, and verifying W3C Verifiable Credentials for multi-party ecosystems."
- ❌ Missing word "regulated," — add it back

### Summary / body paragraph
- Live: "IDTrust enables organizations to issue cryptographically verifiable credentials, manage decentralized identities on Hedera, and authenticate users and AI agents without passwords or shared API keys. Built on open standards (W3C DID/VC, OID4VCI, OID4VP), IDTrust is designed to be the identity infrastructure layer for regulated enterprises, universities, and AI-driven systems."
- New HTML `content`: Identical ✅

### Product Highlights
- Live: "Live on Hedera Mainnet with did:hedera identity anchoring" → New HTML: "Production live on Hedera Mainnet — did:hedera identity anchoring" ❌ Wording differs
- Live: "W3C VC issuance & verification via OID4VCI / OID4VP" → New HTML: "Full W3C DID/VC stack — OID4VCI draft 13 + OID4VP credential exchange" ❌ Wording differs
- Live: "Mobile Identity Wallet (iOS & Android) with biometric auth" → New HTML: "iOS & Android Identity Wallet — with biometric authentication" ❌ Minor wording
- Live: "Identity Manager for enterprise credential governance" → New HTML: "Identity Manager — for enterprise credential governance" ✅ Same meaning
- Live: "Decentralised SSO (dSSO): wallet-based login, no passwords" → New HTML: "dSSO — wallet-based enterprise SSO with no passwords, no shared secrets" ❌ Wording differs
- Live: "Validated in production: Africa Hackathon (10,000+ participants)" → New HTML: "Production-validated — Africa Hackathon with 10,000+ participants" ❌ Minor wording

### Roadmap features — IDTrust
All feature titles and descriptions match between live and new HTML. ✅

---

## TRACKTRACE TAB

### Tagline
- Live: **"A production-grade traceability platform on Hedera enabling end-to-end supply chain visibility."**
- New HTML `tagline`: "A production-grade traceability platform on Hedera enabling end-to-end supply chain visibility." ✅

### Summary / body paragraph
- Live: "TrackTrace enables organisations to create tamper-proof records across supply chains using Digital Product Passports (DPPs). From raw materials to final product, every step is traceable, verifiable, and audit-ready."
- New HTML `summary`: "TrackTrace transforms and enhances supply-chain transparency through real-time tracking of origin, ethical sourcing, and carbon emissions data."
- ❌ **Completely different.** Update new HTML summary to match live site.

### Product Highlights
- Live: 3 items:
  1. "Data ingestion is transparent, verified, and tamper-proof to provide real-time authenticity."
  2. "Traceability of product origin, sustainability credentials, and its end-to-end composition."
  3. "Every business process step is cryptographically verified and tied to a decentralized identity."
- New HTML highlights array: 5 items using dashes (e.g. "Production live on Hedera — tamper-proof Digital Product Passports (DPPs)")
- ❌ **Completely different.** Update new HTML highlights to match live site's 3 items.

### Roadmap features — TrackTrace
- NOW section: All 5 features and descriptions match ✅
- NEXT section: All match ✅, except one description:
  - Feature "Admin dashboard suite": Live desc: "Three-part admin interface: Workflow Viewer / Internal DID/DPP view / External DPP view (consumer-facing template, customizable per client)." — New HTML desc: "Three-part interface: Workflow Viewer, internal DID/DPP management, and consumer-facing external DPP templates customizable per client." ❌ Minor wording difference
- LATER section: All match ✅

---

## ECOGUARD TAB

### Tagline
- Live: **"An end‑to‑end platform for ESG workflows, carbon credit lifecycle, tokenization, and marketplace operations."**
- New HTML `tagline`: "An end-to-end platform for ESG workflows, carbon credit lifecycle, tokenization, and marketplace operations." ✅ (same, different dash style)

### Summary / body paragraph
- Live: "EcoGuard streamlines ESG workflows and the full carbon credit lifecycle from project setup and MRV to tokenization and trading. Built for transparency and scale, it unifies identity, compliance, and market operations for trusted climate outcomes."
- New HTML `summary`: "EcoGuard empowers enterprises to measure and automate carbon emissions with accuracy and compliance. "
- ❌ **Completely different.** Update new HTML summary to match live site.

### Product Highlights
- Live: 6 items: "ESG workflow management", "Identity & credentials", "dMRV & Credit Tokenization (ERC-1155)", "Marketplace & trading", "Audit & compliance", "Dashboards & alerts"
- New HTML highlights: 6 items with different wording ("Production live on Hedera — full carbon credit lifecycle from MRV to tokenization" etc.)
- ❌ **Completely different.** Update new HTML highlights to match live site's 6 items.

### Roadmap features — EcoGuard
- NOW and LATER: All match ✅
- NEXT — one description differs:
  - Feature "AI agent for digitizing methodology": Live desc: "Parse PDFs/docs, extract rules, map to MRV model, draft machine‑readable steps, reviewer edits/approves and publishes to library to link to MRV workflows." — New HTML desc: "Extracts rules from documents and maps them to MRV models for publishable workflows." ❌ Update new HTML to use live site's longer description.

---

## BRANDBOOST TAB

### Tagline
- Live: **"Next-generation consumer engagement with blockchain and gamification"**
- New HTML `tagline`: "Engaged. Gamified. Rewarded."
- ❌ **Completely different.** Update new HTML tagline to match live site.

### Summary / body paragraph
- Live: "BrandBoost is a consumer engagement platform combining gamification, blockchain technology, and behavioral science to convert passive users into actively engaged, high-value participants. It enables brands to design interactive experiences, distribute tokenized incentives, and generate actionable insights through AI-driven analytics."
- New HTML `summary`: "BrandBoost redefines consumer engagement by converting passive users into high-value participants through gamification to boost brand value."
- ❌ **Completely different.** Update new HTML summary to match live site.

### Product Highlights
- Live: "Behavioral science-driven gamification engine", "Web3 wallet with tokenized incentives and identity", "AI-powered consumer analytics and recommendations", "No-code configuration for engagement design", "Mobile-first engagement and operations workflows"
- New HTML highlights: Same 5 items but formatted with dashes e.g. "Behavioral science-driven — gamification engine"
- ✅ Same content, just formatting difference — fine to keep either style.

### Roadmap features — BrandBoost
All feature titles and descriptions match between live and new HTML. ✅

---

## ASSETGUARD TAB

### Tagline
- Live: **"A secure Hedera wallet for rewards today and an agent‑ready foundation for what's next."**
- New HTML `tagline`: "A secure Hedera wallet for rewards today and an agent-ready foundation for what's next." ✅

### Summary / body paragraph
- Live: "AssetGuard is a production‑grade wallet for the Hedera ecosystem. It powers reliable distribution and management of tokens, NFTs, and on‑chain rewards for programs and communities. Looking forward, AssetGuard is evolving into a safe, policy‑driven agentic wallet that enables AI agents to act under human‑defined guardrails."
- New HTML `summary`: "AssetGuard is a secure enterprise-grade wallet to manage digital assets, with enhanced security, governance, and recovery features.AssetGuard is a production-grade wallet for the Hedera ecosystem. It powers reliable distribution and management of tokens, NFTs, and on-chain rewards for programs and communities — live on Android, iOS, and Chrome, with an agentic wallet architecture in development."
- ❌ New HTML has an old sentence prepended and a different ending. Replace entire summary with live site version.

### Product Highlights
- Live: "Live on Android, iOS, and Chrome extension", "HBAR and HTS token management with association controls", "NFT gallery for collectibles, credentials, and rewards", "Seamless onboarding, secure backup, and recovery", "WalletConnect support; validated in quests and hackathons"
- New HTML highlights: Same 5 items but with dashes
- ✅ Same content — fine.

### Roadmap features — AssetGuard
- NOW: Live site shows 2 grouped items ("Cross‑platform retail wallet", "Rewards via THA Academy certificates"). New HTML has ag-1 through ag-7 all marked "shipped". Live site consolidates ag-2 through ag-6 into the first NOW item description. The feature titles and descriptions match individually. ✅
- NEXT and LATER: All titles and descriptions match ✅

---

## TRANSACT TAB

### Tagline
- Live: **"A secure, enterprise-grade transaction gateway on Hedera enabling seamless Web3 payments and settlements."**
- New HTML `tagline`: "Simple. Abstract. Secure."
- ❌ **Completely different.** Update new HTML tagline to match live site.

### Summary / body paragraph
- Live: "TransAct is a securely managed transaction gateway that enables crypto-free transactions for enterprises in the Web3 economy. By abstracting away the need to hold crypto or manage any crypto wallets, TransAct enables enterprises to settle transactions in USD and eliminate compliance risks related to transaction fees."
- New HTML `summary`: "TransAct enables digital currency transactions without the need to hold any crypto or wallets, eliminating the compliance risk for enterprises."
- ❌ **Completely different.** Update new HTML summary to match live site.

### Product Highlights
- Live: "Unified transaction submission and tracking API", "Agent-ready execution infrastructure with wallet provisioning", "Real-time network monitoring and alerting", "Self-serve billing, invoicing, and subscription management", "Event-driven architecture with webhook integrations", "Fine-grained controls for secure and governed execution"
- New HTML highlights: Same 6 items with dashes formatting
- ✅ Same content — fine.

### Roadmap features — TransAct
- All feature titles and descriptions match ✅
- ⚠️ Live site has a NOW feature **"Transaction Gateway"** listed as: "Submit, sign, and track Hedera transactions through a unified API." New HTML ta-1 desc: "Submit, sign, and track Hedera transactions through a unified API." ✅
- ⚠️ Live site also shows under NOW: **"Self-Serve Billing & Subscriptions"**, **"Invoicing & Billing History"**, **"Real-Time Network Monitoring"** — all match new HTML ta-2 through ta-4. ✅

---

## HASHCARE TAB

### Tagline
- Live: **"An AI-powered enterprise support platform for Hedera-based solutions"**
- New HTML `tagline`: "Agentic. Efficient. Proactive."
- ❌ **Completely different.** Update new HTML tagline to match live site.

### Summary / body paragraph
- Live: "HashCare enables enterprise customers to focus on building and scaling their solutions on Hedera without being slowed down by technical complexity. By combining secure identity, contextual intelligence, and Agentic AI, HashCare resolves support requests rapidly and proactively while maintaining full visibility across the support lifecycle."
- New HTML `summary`: "HashCare is a customer-centric support service that offers enterprises comprehensive remote technical assistance for the Hedera network."
- ❌ **Completely different.** Update new HTML summary to match live site.

### Product Highlights
- Live: "Agentic AI-driven ticket resolution engine", "SSI-based authentication with verifiable credentials", "Context-aware support orchestration across user, org, and product", "Integrated knowledge retrieval and guided troubleshooting", "End-to-end ticket lifecycle with SLA visibility", "Secure credential handling with DID-based identity"
- New HTML highlights: "24/7 Global Capabilities Centre — Standard, Advanced, and Premium SLA tiers", "Autonomous AI agent dispatch — 83% faster response times, 60% productivity uplift", "Proactive monitoring — of DLT applications built on Hedera", "Conversational AI — for streamlined fault resolution and L1 query handling", "Autonomous ticket triage — and routing without human intervention", "Cross-product diagnostics — spanning the full H4E suite"
- ❌ **Completely different.** Update new HTML highlights to match live site's 6 items.

### Roadmap features — HashCare
All feature titles and descriptions match ✅

---

## SUMMARY OF CHANGES NEEDED

### High priority — content is completely wrong

| Location | Field | Action |
|---|---|---|
| Overview stats | Releases counter | Change 20+ → 18+ |
| Overview stats | Features counter | Change 150+ → 100+ |
| Overview stats | Stat order | Reorder to: Products, Releases, Industries, Features |
| Overview grid heading | Section title | Change "Our Products" → "Our Product Suite" |
| IDTrust | `tagline` | Add "regulated," before "multi-party" |
| TrackTrace | `summary` | Replace with live site text |
| TrackTrace | highlights | Replace with live site's 3 items |
| EcoGuard | `summary` | Replace with live site text |
| EcoGuard | highlights | Replace with live site's 6 items |
| EcoGuard | AI agent feature desc | Replace with live site's longer description |
| BrandBoost | `tagline` | Replace with "Next-generation consumer engagement with blockchain and gamification" |
| BrandBoost | `summary` | Replace with live site text |
| AssetGuard | `summary` | Replace with live site text (remove prepended old sentence) |
| TransAct | `tagline` | Replace with live site text |
| TransAct | `summary` | Replace with live site text |
| HashCare | `tagline` | Replace with live site text |
| HashCare | `summary` | Replace with live site text |
| HashCare | highlights | Replace with live site's 6 items |

### Medium priority — minor wording differences

| Location | Field | Action |
|---|---|---|
| Overview grid | IDTrust card text | Update to match live site card description |
| Overview grid | AssetGuard card text | Remove duplicate sentence from summary |
| Overview grid | TransAct card text | "the compliance risk for enterprises" → "compliance risks related to transaction fees" |
| Overview grid | HashCare card text | Add "and solutions" at end |
| IDTrust | Product Highlights (all 6) | Align wording to match live site (dashes vs full sentences) |
| TrackTrace | Admin dashboard desc | Align wording to live site |
