// IDTrust roadmap data — lifted from H4E_Roadmap.html (Product 1)
window.IDTRUST = {
  name: "IDTrust",
  tagline: "Production-grade SSI platform on Hedera — issuing, managing and verifying W3C Verifiable Credentials.",
  color: "#8B6FFF",
  quarters: ["Q1 '25","Q2 '25","Q3 '25","Q4 '25","Q1 '26","Q2 '26","Q3 '26","Q4 '26","Q1 '27","Q2 '27","Q3 '27","Q4 '27"],
  nowIndex: 5, // Q2 '26 = NOW
  statuses: {
    shipped:   { label: "Shipped",     color: "#22C55E" },
    progress:  { label: "In Progress", color: "#605EFF" },
    planned:   { label: "Planned",     color: "#A1A1AA" },
    exploring: { label: "Exploring",   color: "#F59E0B" }
  },
  themes: {
    sovereign:  { label: "Sovereign Data",        color: "#8B6FFF", short: "Sovereign" },
    ai:         { label: "AI-First Enterprise",   color: "#605EFF", short: "AI" },
    governance: { label: "Autonomous Governance", color: "#3DA9FC", short: "Governance" }
  },
  features: [
    { id:"id-1",  title:"Identity Wallet v1.0",          status:"shipped",   theme:"sovereign",  qStart:0,  qSpan:1, desc:"iOS & Android wallet with biometric auth." },
    { id:"id-2",  title:"Identity Manager",              status:"shipped",   theme:"governance", qStart:1,  qSpan:1, desc:"Enterprise credential schema management." },
    { id:"id-3",  title:"Issuer Service (OID4VCI)",      status:"shipped",   theme:"governance", qStart:1,  qSpan:1, desc:"Production issuer, multi-issuer, OID4VCI." },
    { id:"id-4",  title:"Verifier Service (OID4VP)",     status:"shipped",   theme:"sovereign",  qStart:2,  qSpan:1, desc:"Policy-driven credential verification." },
    { id:"id-5",  title:"dSSO — Decentralised SSO",      status:"shipped",   theme:"sovereign",  qStart:3,  qSpan:1, desc:"Wallet-based login replacing passwords." },
    { id:"id-6",  title:"Auxiliary Services",            status:"shipped",   theme:"governance", qStart:4,  qSpan:1, desc:"Revocation, audit, resolver, trust registry." },
    { id:"id-7",  title:"DID SDK v2.0",                  status:"progress",  theme:"sovereign",  qStart:5,  qSpan:1, desc:"did:hedera 2.0, multi-controller DIDs." },
    { id:"id-8",  title:"Agentic Identity",              status:"progress",  theme:"ai",         qStart:5,  qSpan:2, desc:"VCs for AI agents; delegation chains." },
    { id:"id-9",  title:"IDTrust Client SDK v1.0",       status:"progress",  theme:"sovereign",  qStart:5,  qSpan:1, desc:"Client SDK for DIDs, VCs and dSSO." },
    { id:"id-10", title:"Identity Wallet v2.0",          status:"progress",  theme:"sovereign",  qStart:6,  qSpan:1, desc:"Multi-wallet, sharing flows, MDM." },
    { id:"id-11", title:"DID Management Service v2.0",   status:"progress",  theme:"governance", qStart:6,  qSpan:1, desc:"Centralised DID ops, caching, resolver." },
    { id:"id-12", title:"Delegate to Agent",             status:"progress",  theme:"ai",         qStart:6,  qSpan:1, desc:"Scoped, time-bound delegation to agents." },
    { id:"id-13", title:"Cloud Identity Wallet v1.0",    status:"progress",  theme:"governance", qStart:6,  qSpan:2, desc:"Enterprise-custodied web wallet." },
    { id:"id-14", title:"Unified Documentation v1.0",    status:"progress",  theme:"governance", qStart:7,  qSpan:1, desc:"Consolidated dev + integration docs." },
    { id:"id-15", title:"SD-JWT Selective Disclosure",   status:"planned",   theme:"sovereign",  qStart:8,  qSpan:2, desc:"IETF SD-JWT alongside W3C VC." },
    { id:"id-16", title:"dSSO v2.0",                     status:"planned",   theme:"sovereign",  qStart:8,  qSpan:1, desc:"Faster, broader protocol support." },
    { id:"id-17", title:"Organisation Management & RBAC",status:"planned",   theme:"governance", qStart:8,  qSpan:2, desc:"Org DIDs, multi-sig, RBAC." },
    { id:"id-18", title:"AI credential workflows",       status:"planned",   theme:"ai",         qStart:9,  qSpan:1, desc:"Conversational schema + policy setup." },
    { id:"id-19", title:"Federated Issuer Model",        status:"planned",   theme:"governance", qStart:9,  qSpan:2, desc:"Cross-org credential recognition." },
    { id:"id-20", title:"Unified Documentation v2.0",    status:"planned",   theme:"governance", qStart:10, qSpan:1, desc:"Advanced + agentic dev docs." },
    { id:"id-21", title:"eIDAS 2.0 / EUID",              status:"planned",   theme:"sovereign",  qStart:10, qSpan:2, desc:"EUDI Wallet interop + trust anchor." }
  ]
};
