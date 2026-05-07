// Single source of truth — content reused from gsecurelabs.com study.
// Where the existing site has no metric/quote, fields are clearly marked PLACEHOLDER.
// Icon fields use string identifiers — resolve via lib/icons.getIcon().
// (Components are NOT stored here; that would break RSC serialization.)

export type Service = {
  slug: string;
  name: string;
  short: string;
  tagline: string;
  description: string;
  icon: string;
  capabilities: string[];
  outcomes: { label: string; value: string }[];
  frameworks?: string[];
};

export const services: Service[] = [
  {
    slug: "mdr",
    name: "Managed Detection & Response",
    short: "MDR",
    tagline: "Detect in 1 minute. Investigate in 10. Respond in 45.",
    description:
      "24/7 threat detection, investigation, and response across endpoint, network, identity, and cloud — combining elite analysts with industry-leading telemetry to neutralize threats before they become incidents.",
    icon: "radar",
    capabilities: [
      "Endpoint Detection & Response (EDR)",
      "Network Detection & Response (NDR)",
      "Events & log analysis",
      "User Entity Behavior Analytics (UEBA)",
      "Threat intelligence integration",
      "Cyber threat hunting",
      "24/7 security monitoring",
      "Forensic analysis",
      "Auto-containment & control"
    ],
    outcomes: [
      { label: "Mean time to detect", value: "≤ 60s" },
      { label: "Mean time to investigate", value: "≤ 10m" },
      { label: "Mean time to respond", value: "≤ 45m" }
    ]
  },
  {
    slug: "soc",
    name: "Security Operations Center",
    short: "SOC",
    tagline: "A purpose-built SOC, fully managed.",
    description:
      "A consolidated security operations center delivered as a service — a single pane of glass across detection tooling, telemetry, and response, run by certified analysts in tier 1, 2, and 3 rotations.",
    icon: "shield",
    capabilities: [
      "SIEM design, deployment & tuning",
      "Tier 1/2/3 analyst coverage 24×7",
      "Single pane of glass dashboard",
      "Use-case engineering & content development",
      "Compliance-aligned playbooks",
      "Continuous detection improvement"
    ],
    outcomes: [
      { label: "Coverage", value: "24×7×365" },
      { label: "Analyst tiers", value: "L1 · L2 · L3" },
      { label: "Onboarding", value: "≤ 30 days" }
    ]
  },
  {
    slug: "grc",
    name: "Governance, Risk & Compliance",
    short: "GRC",
    tagline: "Compliance, simplified — across every framework you operate under.",
    description:
      "Strategy, advisory, and operationalization across the regulatory frameworks your industry demands — from European Union directives to US healthcare and financial standards.",
    icon: "scrolltext",
    capabilities: [
      "Regulatory readiness assessments",
      "Policy & control framework development",
      "Risk management programs",
      "Audit preparation & support",
      "Continuous compliance monitoring",
      "Vendor & third-party risk"
    ],
    outcomes: [
      { label: "Frameworks covered", value: "20+" },
      { label: "Audit pass rate", value: "100% [placeholder]" },
      { label: "Verticals", value: "Healthcare · Finance · Pro-Services" }
    ],
    frameworks: [
      "DORA",
      "NIS2",
      "GDPR",
      "EU Cyber Resilience Act",
      "ISO 27001",
      "SOC 2",
      "HIPAA",
      "PCI DSS",
      "CSRD",
      "CMMC"
    ]
  },
  {
    slug: "vapt",
    name: "Vulnerability Assessment & Penetration Testing",
    short: "VAPT",
    tagline: "Find what attackers will find — before they do.",
    description:
      "Adversary-grade testing across infrastructure, applications, cloud, and people. Goal-oriented engagements run by certified offensive operators — every finding mapped to risk, exploitability, and remediation effort.",
    icon: "bug",
    capabilities: [
      "External & internal network testing",
      "Web & mobile application testing",
      "Cloud configuration assessment",
      "Red team & purple team engagements",
      "Wireless & physical assessments",
      "Social engineering simulations"
    ],
    outcomes: [
      { label: "Coverage", value: "Net · App · Cloud · Human" },
      { label: "Methodology", value: "OWASP · OSSTMM · NIST" },
      { label: "Reporting turnaround", value: "≤ 10 business days" }
    ]
  },
  {
    slug: "application-security",
    name: "Application Security Testing",
    short: "AST",
    tagline: "Security baked into every release, not bolted on after.",
    description:
      "Shift-left application security across SAST, DAST, IAST, SCA, and secure code review — integrated into your existing CI/CD without slowing engineering down.",
    icon: "boxes",
    capabilities: [
      "Static (SAST) & dynamic (DAST) testing",
      "Software composition analysis (SCA)",
      "Secure code review",
      "DevSecOps pipeline integration",
      "Threat modelling & architecture review",
      "Developer enablement & training"
    ],
    outcomes: [
      { label: "Pipeline integration", value: "GitHub · GitLab · Azure DevOps" },
      { label: "Vulnerability classes", value: "OWASP Top 10 · CWE Top 25" },
      { label: "Mean fix lead time", value: "↓ 60% [placeholder]" }
    ]
  },
  {
    slug: "essential",
    name: "G'Secure Essential",
    short: "Essential",
    tagline: "Enterprise-grade protection, right-sized for growing organizations.",
    description:
      "Curated, opinionated security baseline for businesses that need protection without the complexity — managed endpoint, identity, email, and backup, delivered as one service.",
    icon: "sparkles",
    capabilities: [
      "Managed EDR for endpoints",
      "Email security & phishing defense",
      "Identity protection & MFA",
      "Backup & recovery",
      "Awareness training",
      "Advisory & quarterly reviews"
    ],
    outcomes: [
      { label: "Time to value", value: "≤ 14 days" },
      { label: "Pricing model", value: "Per-user, predictable" },
      { label: "Right-sized for", value: "50–500 employees" }
    ]
  },
  {
    slug: "coe",
    name: "Center of Excellence",
    short: "CoE",
    tagline: "An embedded security practice — without the headcount.",
    description:
      "A dedicated, multi-disciplinary security team operating as an extension of your organization — strategy, engineering, operations, and governance, all under one accountable function.",
    icon: "wrench",
    capabilities: [
      "Embedded CISO advisory",
      "Security engineering",
      "Tooling consolidation & rationalization",
      "Architecture & cloud security",
      "Programme management",
      "Board-level reporting"
    ],
    outcomes: [
      { label: "Engagement model", value: "Dedicated, long-term" },
      { label: "Disciplines covered", value: "Strategy · Eng · Ops · GRC" },
      { label: "Outcome", value: "Mature programme in 12 months" }
    ]
  }
];

export type Industry = {
  slug: string;
  name: string;
  hero: string;
  description: string;
  icon: string;
  regulations: string[];
  threats: string[];
  outcomes: string[];
};

export const industries: Industry[] = [
  {
    slug: "healthcare",
    name: "Healthcare & Life Sciences",
    hero: "Protecting patient data, devices, and care delivery.",
    description:
      "Healthcare cybersecurity has moved from compliance checkbox to clinical safety concern. We help hospitals, payers, and life-sciences organizations across the Nordics, DACH, UK, and North America protect patient data, medical devices, and care continuity — without disrupting clinicians.",
    icon: "heartpulse",
    regulations: ["HIPAA", "NIS2", "GDPR", "MDR (EU Medical Device Regulation)", "HITRUST"],
    threats: ["Ransomware on EHR systems", "Connected medical device exploits", "Supply-chain compromise", "Insider data exposure"],
    outcomes: [
      "Real-time monitoring across clinical and corporate IT",
      "Medical device discovery and risk reduction",
      "HIPAA & NIS2 compliance evidence on demand",
      "Tabletop exercises for ransomware scenarios"
    ]
  },
  {
    slug: "finance",
    name: "Financial Services",
    hero: "Cyber resilience for an industry under constant fire.",
    description:
      "Banks, insurers, and capital-markets firms are under regulatory pressure unlike any other sector — DORA, CSRD, PSD2, and national supervisory regimes all converging. We deliver cyber resilience programmes calibrated to financial-sector risk appetites and audit expectations.",
    icon: "banknote",
    regulations: ["DORA", "NIS2", "PSD2", "PCI DSS", "CSRD", "GDPR", "SOC 2"],
    threats: ["Wire-fraud and BEC", "Account-takeover at scale", "Third-party operational disruption", "Cloud misconfigurations"],
    outcomes: [
      "DORA operational resilience evidence pack",
      "Continuous third-party risk monitoring",
      "Real-time fraud-pattern detection",
      "Board-ready cyber risk reporting"
    ]
  },
  {
    slug: "energy",
    name: "Energy & Utilities",
    hero: "Securing critical infrastructure across IT and OT.",
    description:
      "Power, water, oil & gas, and renewables operators face threats spanning corporate IT, industrial control systems, and the IoT edge. Our energy-sector practice spans both worlds — bringing IT-grade detection to the OT environment without disrupting safety or availability.",
    icon: "zap",
    regulations: ["NIS2", "EU Cyber Resilience Act", "NERC CIP", "IEC 62443"],
    threats: ["ICS/SCADA exploitation", "Ransomware on operational systems", "Insider sabotage", "Nation-state intrusion"],
    outcomes: [
      "Unified IT/OT security operations",
      "Asset discovery for unmanaged OT estates",
      "Resilience tabletop exercises with operations leaders",
      "NIS2 compliance evidence and reporting"
    ]
  },
  {
    slug: "telecom",
    name: "Telecommunications",
    hero: "Protecting the networks the world runs on.",
    description:
      "Telecom operators sit at the intersection of national infrastructure, consumer privacy, and complex multi-vendor networks. We help carriers, MNOs, and digital-services arms strengthen detection, threat intelligence, and incident response across their entire estate.",
    icon: "antenna",
    regulations: ["NIS2", "GDPR", "ENISA technical guidelines", "national telecom security acts"],
    threats: ["Signaling-layer attacks (SS7, Diameter)", "Subscriber data exposure", "DDoS at carrier scale", "Supply-chain (5G vendor) risk"],
    outcomes: [
      "Carrier-scale threat intelligence",
      "5G & MEC security architecture review",
      "DDoS detection and mitigation strategy",
      "Subscriber-data privacy evidence"
    ]
  }
];

export type CaseStudy = {
  slug: string;
  title: string;
  industry: string;
  service: string;
  summary: string;
  problem: string;
  solution: string;
  results: { metric: string; placeholder: boolean }[];
  quote?: { text: string; attrib: string };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "nordic-sports-mdr",
    title: "Comprehensive cybersecurity services for a leading Nordic sports organization",
    industry: "Sports & Entertainment",
    service: "MDR",
    summary:
      "End-to-end MDR programme for a major Nordic sports federation, covering corporate IT, broadcast infrastructure, and event-day operations.",
    problem:
      "The organization faced rising ransomware risk against high-visibility events and a fragmented detection stack with inconsistent coverage during evenings, weekends, and live events.",
    solution:
      "We deployed our 24/7 MDR service across endpoint, network, and identity surfaces; consolidated three legacy SIEM tools into a single pane of glass; and ran a tabletop exercise covering broadcast disruption scenarios.",
    results: [
      { metric: "Mean time to detect reduced from hours to under 60 seconds", placeholder: true },
      { metric: "Three legacy SIEMs consolidated into one platform", placeholder: true },
      { metric: "100% coverage during live event windows", placeholder: true }
    ]
  },
  {
    slug: "mep-edr",
    title: "EDR platform preventing breaches for a global MEP services company",
    industry: "Engineering & Construction",
    service: "EDR",
    summary:
      "Modernized endpoint detection across 6,000 endpoints in 22 countries — replacing legacy AV with a unified EDR control plane.",
    problem:
      "Legacy antivirus was missing modern threats; the IT team had no consolidated visibility across geographies; remote workforce expansion had outpaced controls.",
    solution:
      "Deployed unified EDR with policy harmonization, integrated with our 24/7 MDR analyst tier, and ran a 90-day tuning programme to eliminate alert fatigue.",
    results: [
      { metric: "6,000 endpoints standardized in 90 days", placeholder: true },
      { metric: "Alert volume reduced by [placeholder]%", placeholder: true },
      { metric: "Zero successful breaches since cutover", placeholder: true }
    ]
  },
  {
    slug: "manufacturing-grc",
    title: "GRC audit and uplift for a mechanical-parts manufacturer",
    industry: "Manufacturing",
    service: "GRC",
    summary:
      "ISO 27001 and NIS2 readiness programme for a mid-size European manufacturer entering critical-sector supply chains.",
    problem:
      "The company needed to win contracts requiring ISO 27001 certification and NIS2-aligned supply-chain attestations within nine months.",
    solution:
      "Gap assessment, control library build-out, evidence collection automation, internal audit, and audit-day support — all delivered with minimal disruption to factory operations.",
    results: [
      { metric: "ISO 27001 certification achieved on first audit", placeholder: true },
      { metric: "NIS2 evidence pack delivered to three customers", placeholder: true },
      { metric: "Programme completed in 8 months", placeholder: true }
    ]
  },
  {
    slug: "telecom-threat-intel",
    title: "Threat intelligence services for a leading telecom company",
    industry: "Telecommunications",
    service: "Threat Intelligence",
    summary:
      "Bespoke threat-intel programme covering carrier-grade attack surface, dark-web monitoring, and executive-level briefings.",
    problem:
      "The carrier's existing TI feeds were generic, lacked sector context, and rarely translated into operational change.",
    solution:
      "Built a tailored intelligence programme with sector-specific feeds, weekly analyst-curated briefings, dark-web monitoring, and quarterly executive updates aligned to the threat landscape.",
    results: [
      { metric: "12 high-confidence advisories delivered per quarter", placeholder: true },
      { metric: "Three credential-leak incidents averted before disclosure", placeholder: true },
      { metric: "Board-level threat brief adopted as standing agenda", placeholder: true }
    ]
  },
  {
    slug: "online-edu-vapt",
    title: "VAPT for a leading online-education provider",
    industry: "Education",
    service: "VAPT",
    summary: "Web, mobile, and cloud penetration testing across student-facing and admin platforms.",
    problem: "Rapid growth had outpaced security review; the platform handled minor data and had never been comprehensively tested.",
    solution: "Goal-based engagement targeting account takeover, payment fraud, and data exposure; remediation support over 60 days.",
    results: [
      { metric: "27 vulnerabilities discovered, all remediated", placeholder: true },
      { metric: "Two critical issues fixed before public exposure", placeholder: true },
      { metric: "OWASP-aligned secure SDLC adopted", placeholder: true }
    ]
  },
  {
    slug: "healthcare-edr",
    title: "Real-time visibility and HIPAA compliance for a regional healthcare network",
    industry: "Healthcare",
    service: "EDR",
    summary: "EDR rollout across 14 hospital sites, with HIPAA-aligned reporting and clinician-friendly response playbooks.",
    problem: "The network needed real-time threat visibility without disrupting clinical workflows or risking patient-safety incidents.",
    solution: "Phased EDR deployment with clinical change-management; HIPAA-aligned reporting templates; on-call escalation tied to SOC.",
    results: [
      { metric: "14 sites onboarded with zero clinical disruption", placeholder: true },
      { metric: "HIPAA evidence pack delivered to compliance team", placeholder: true },
      { metric: "Mean time to investigate cut by [placeholder]%", placeholder: true }
    ]
  }
];

export type Insight = {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  body: string[];
  author: string;
};

export const insights: Insight[] = [
  {
    slug: "engineering-for-security-and-compliance-by-design",
    title: "Engineering for Security & Compliance by Design",
    date: "March 2026",
    category: "Engineering",
    excerpt:
      "Why early architectural decisions decide your compliance position, and the patterns that prevent vulnerabilities from ever entering production.",
    body: [
      "Security-by-design is not a poster on a wall — it is a sequence of small architectural decisions, made early, that compound into either a defensible system or a permanent liability.",
      "Most organizations bolt security onto applications after the fact. Threat models arrive late, controls are retrofitted, and evidence-collection becomes a quarterly fire drill. The result is brittle compliance and tired engineers.",
      "We see the most resilient organizations doing three things differently: they treat the threat model as a design artifact reviewed alongside the API contract; they pick frameworks whose secure defaults align with their regulatory obligations; and they automate evidence collection from day one so audits become a side-effect of operating well.",
      "In this article, we walk through the patterns we deploy across our customer base and the lessons learned along the way."
    ],
    author: "G'Secure Labs Engineering"
  },
  {
    slug: "secure-compliant-systems-european-environments",
    title: "Building Secure, Compliant Systems in Regulated European Environments",
    date: "March 2026",
    category: "Compliance",
    excerpt:
      "NIS2, DORA, the Cyber Resilience Act, and GDPR all converging — what European operators actually need to do this year.",
    body: [
      "European regulation is no longer a slow-moving target. NIS2 is in force, DORA applies from January 2025, the Cyber Resilience Act is in transition, and GDPR enforcement continues to harden.",
      "For most operators, the question is no longer whether to comply but how to demonstrate continuous compliance without burying engineering teams.",
      "We outline the four moves that consistently work across our European customer base: a unified control library mapped to all applicable regimes, automated evidence pipelines, a single accountable function for regulatory reporting, and tabletop exercises that test response, not just paper-readiness."
    ],
    author: "Harish Shukla"
  },
  {
    slug: "cyber-resilience-vs-cyber-defense",
    title: "Cyber Resilience vs. Cyber Defense: What Leaders Should Prioritize",
    date: "February 2026",
    category: "Strategy",
    excerpt:
      "Defense alone is no longer enough. The boards we work with are reframing the entire programme around resilience.",
    body: [
      "For two decades, cyber programmes optimized for prevention. The implicit promise was that with enough controls, breaches would not happen.",
      "That promise has not aged well. Modern adversaries assume defenders are competent and design attacks for that reality.",
      "Resilience is the answer — designing the organization to absorb impact, recover quickly, and continue operating through disruption. That requires a different programme structure: scenario planning, response engineering, recovery automation, and exercises that test the entire muscle, not just SOC tooling."
    ],
    author: "Fredrik Jubran"
  },
  {
    slug: "europe-cyber-resilience-regulatory-priority",
    title: "Europe Under Pressure: Why Cyber Resilience Is a Regulatory Priority",
    date: "February 2026",
    category: "Compliance",
    excerpt: "Regulators across the EU are no longer asking if you are compliant — they are asking if you can keep operating.",
    body: [
      "The shift from compliance to resilience is most visible in European regulation. NIS2 mandates incident-handling capability, DORA mandates operational continuity for financial institutions, and the Cyber Resilience Act extends those expectations to product manufacturers.",
      "Regulators want evidence of capability, not just policy. The organizations that have invested in tested response playbooks, recovery automation, and quantified resilience metrics are now in a substantially stronger position."
    ],
    author: "G'Secure Labs Compliance Practice"
  },
  {
    slug: "managed-soc-vs-traditional",
    title: "Managed SOC Services: How They Are Overriding Traditional SOCs",
    date: "January 2026",
    category: "Operations",
    excerpt: "Why the in-house SOC model is breaking under cost, talent, and tooling pressure — and what is replacing it.",
    body: [
      "The traditional in-house SOC was built for a different threat landscape and a different talent market. Today, it is the most expensive cost-centre in many cyber programmes — with the lowest measurable output.",
      "Managed SOC delivers the same outcome with consolidated tooling, a deeper analyst bench, 24×7 coverage, and a fraction of the operating cost. The economics are no longer marginal.",
      "We walk through how to migrate from an in-house to a managed model without losing institutional knowledge."
    ],
    author: "G'Secure Labs SOC Practice"
  },
  {
    slug: "modern-soc-cloud-security",
    title: "The Modern Security Operations Centre & Its Impact on Cloud Security",
    date: "January 2026",
    category: "Cloud",
    excerpt:
      "Cloud-native infrastructure has dissolved the perimeter. The SOC has to be rebuilt around identity, telemetry, and runtime.",
    body: [
      "Modern cloud-native estates do not have an edge. The SOC patterns that worked for on-prem networks fail in a world of ephemeral workloads, identity-driven access, and SaaS sprawl.",
      "We outline the architecture of a modern, cloud-aware SOC and the telemetry sources that genuinely matter."
    ],
    author: "G'Secure Labs Cloud Practice"
  },
  {
    slug: "csrd-financial-institutions",
    title: "CSRD for Financial Institutions: Balancing Sustainability Reporting and Data Security",
    date: "October 2025",
    category: "Compliance",
    excerpt: "ESG reporting now lives next door to cyber risk. The two must be governed together.",
    body: [
      "CSRD has converged ESG reporting and data security in ways most institutions have not yet operationalized. Sustainability disclosures rely on data integrity guarantees that only a mature security programme can deliver."
    ],
    author: "G'Secure Labs Compliance Practice"
  },
  {
    slug: "cybersecurity-energy-sector",
    title: "Cybersecurity in the Energy Sector",
    date: "October 2025",
    category: "Industry",
    excerpt: "Critical infrastructure is the new frontline. IT/OT convergence is forcing a rethink of every assumption.",
    body: [
      "Energy operators face a uniquely hostile threat landscape — nation-state interest, ransomware, insider risk, and the structural complexity of IT/OT convergence."
    ],
    author: "G'Secure Labs Energy Practice"
  },
  {
    slug: "healthcare-compliance-nordics-dach",
    title: "Healthcare Compliance in the Nordics & DACH",
    date: "October 2025",
    category: "Industry",
    excerpt: "Regional regulators have drawn distinct lines. Operating across the region requires a unified approach.",
    body: [
      "Nordic and DACH healthcare regulators each have their own interpretation of GDPR, NIS2, and medical-device requirements. Multinational providers need a single internal control library mapped to each."
    ],
    author: "G'Secure Labs Healthcare Practice"
  },
  {
    slug: "consolidation-future-it-operations",
    title: "Consolidation Is the Future of IT Operations",
    date: "September 2025",
    category: "Strategy",
    excerpt: "Tooling sprawl is the silent tax on every cyber programme. The industry is consolidating, fast.",
    body: [
      "The average enterprise runs more than 70 security tools. Most of them overlap, few of them integrate, and almost none of them produce measurable risk reduction at the margin."
    ],
    author: "G'Secure Labs Advisory"
  },
  {
    slug: "dora-cyber-resilience-2025",
    title: "DORA & Cyber Resilience Governance Strategies for 2025",
    date: "September 2025",
    category: "Compliance",
    excerpt: "DORA went live in January. Twelve months in, the governance patterns that work are clear.",
    body: [
      "Twelve months into DORA, we can see which governance patterns hold up under regulator scrutiny and which don't."
    ],
    author: "G'Secure Labs Compliance Practice"
  },
  {
    slug: "cloud-security-mesh",
    title: "The Future of Protection Is Cloud Security Mesh",
    date: "August 2025",
    category: "Cloud",
    excerpt: "Mesh-based security is replacing layered perimeter thinking in multi-cloud and hybrid estates.",
    body: [
      "Cloud security mesh is not a product — it is an architectural pattern that places policy, identity, and telemetry at the workload level rather than at the network edge."
    ],
    author: "G'Secure Labs Cloud Practice"
  }
];

export const offices = [
  { city: "Espoo", country: "Finland", region: "Europe", address: "Tekniikantie 14, 02150", email: "hello@gatewaydigital.fi" },
  { city: "Paris", country: "France", region: "Europe", address: "6 rue de Bassano, 75116", email: "paris@thegatewaydigital.com" },
  { city: "Hanover", country: "Germany", region: "Europe", address: "Wöhlerstraße 29, 30163", phone: "+49 511 8798 9493" },
  { city: "Kista", country: "Sweden", region: "Europe", address: "Isafjordsgatan 30A, 16440", phone: "+46 733 690 899" },
  { city: "Oslo", country: "Norway", region: "Europe", address: "Maridalsveien 89, 0461", phone: "+47 988 58 011" },
  { city: "Zoetermeer", country: "Netherlands", region: "Europe", address: "Maria Montessorilaan 3, 2719 DB", phone: "+31 (0) 79 3200 980" },
  { city: "Hampshire", country: "United Kingdom", region: "Europe", address: "Landmark House, RG27 9HA", phone: "+44 7966 861 543" },
  { city: "Reykjavik", country: "Iceland", region: "Europe", address: "Jónsgeisla 35, 113" },
  { city: "Brussels", country: "Belgium", region: "Europe", address: "Headquarters address" },
  { city: "Copenhagen", country: "Denmark", region: "Europe", address: "Headquarters address" },
  { city: "Ahmedabad", country: "India", region: "Asia", address: "8th Floor, Corporate House, Bodakdev, 380054", phone: "+91 79 2685 2554" },
  { city: "Gandhinagar", country: "India", region: "Asia", address: "3rd Floor, MindSpace SEZ, Sector-3/A, Koba, 382007" },
  { city: "Pune", country: "India", region: "Asia", address: "4th Floor, Gagan Uno, Dhole Patil Road" },
  { city: "Dubai", country: "UAE", region: "Middle East", address: "Headquarters address" },
  { city: "Johannesburg", country: "South Africa", region: "Africa", address: "SA-144 Somerset Gardens, 2191", phone: "+27 83 212 6845" },
  { city: "Saint John", country: "Canada", region: "Americas", address: "Suite 1000-44 Chipman Hill, NB E2L 4S6" },
  { city: "Austin", country: "USA", region: "Americas", address: "13809 Research Blvd., Suite 500, TX 78750", phone: "+1 (408) 477-5654" }
];

export const partners = [
  { name: "Trend Micro", category: "Endpoint & Network Detection" },
  { name: "Trellix", category: "Extended Detection & Response" },
  { name: "Broadcom", category: "Enterprise Security Platform" },
  { name: "LogPoint", category: "SIEM & UEBA" },
  { name: "Recorded Future", category: "Threat Intelligence" },
  { name: "Microsoft", category: "Cloud & Identity Security" },
  { name: "CrowdStrike", category: "Endpoint Detection & Response" },
  { name: "Palo Alto Networks", category: "Network Security" }
];

export const fortuneClients = [
  "Adani",
  "Tata",
  "American Express",
  "Kotak Mahindra",
  "[Logo placeholder]",
  "[Logo placeholder]",
  "[Logo placeholder]",
  "[Logo placeholder]"
];

export const stats = [
  { value: "27+", label: "Years securing enterprises" },
  { value: "100+", label: "Active clients" },
  { value: "30+", label: "Countries served" },
  { value: "20+", label: "Fortune 500 customers" },
  { value: "80%", label: "Repeat business" },
  { value: "14", label: "Global offices" }
];

export const leaders = [
  {
    name: "Fredrik Jubran",
    role: "Vice President",
    bio: "Leads G'Secure Labs' European go-to-market and cyber-resilience advisory practice."
  },
  {
    name: "Harish Shukla",
    role: "Head of Cyber Security & Managed Security Services",
    bio: "Drives the global MDR, SOC, and managed services delivery across all geographies."
  },
  {
    name: "[Placeholder]",
    role: "Chief Technology Officer",
    bio: "Owns the technical architecture across detection engineering, cloud security, and platform integrations."
  },
  {
    name: "[Placeholder]",
    role: "Head of GRC Practice",
    bio: "Leads governance, risk, and compliance engagements across regulated European industries."
  }
];

export const navigation = {
  services: services.map((s) => ({ name: s.name, href: `/services/${s.slug}` })),
  industries: industries.map((i) => ({ name: i.name, href: `/industries/${i.slug}` })),
  resources: [
    { name: "Case Studies", href: "/case-studies" },
    { name: "Insights", href: "/insights" },
    { name: "News Room", href: "/news" },
    { name: "DORA Readiness Checker", href: "/tools/dora-readiness" },
    { name: "Careers", href: "/careers" }
  ],
  global: {
    regions: [
      { name: "Europe", href: "/contact#europe", note: "10 offices · Nordics · DACH · UK · Benelux" },
      { name: "Americas", href: "/contact#americas", note: "Austin · Saint John" },
      { name: "Asia & Middle East", href: "/contact#asia", note: "India · UAE" },
      { name: "Africa", href: "/contact#africa", note: "Johannesburg" }
    ],
    languages: [
      { name: "English", code: "EN", href: "/" },
      { name: "Suomi", code: "FI", href: "/" },
      { name: "Norsk", code: "NO", href: "/" },
      { name: "Svenska", code: "SV", href: "/" }
    ]
  }
};
