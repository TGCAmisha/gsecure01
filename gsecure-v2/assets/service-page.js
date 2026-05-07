// Data for every service detail page
const SERVICE_DATA = {
  'mdr': {
    eyebrow: 'Managed Detection & Response',
    title: ['Detect, investigate, respond — ', 'in minutes', ' not days.'],
    lead: '24×7 AI-driven detection across endpoints, network, cloud, identity and IoT — backed by an SOC of senior analysts and threat hunters.',
    overviewHeading: ['A complete', ' MDR stack ', 'engineered for the modern enterprise.'],
    overviewBody: 'G\'Secure MDR fuses telemetry, threat intelligence and human expertise to give you the fastest possible time to detect, time to investigate, and time to respond. Built on best-in-class XDR platforms, tuned for your environment, and operated by a global team that never sleeps.',
    features: [
      ['shield','Endpoint Protection','Behavioral analytics across every workstation, server and cloud workload.'],
      ['eye','24×7 Monitoring','Continuous visibility from a global SOC — every shift, every signal.'],
      ['flow','Network Detection','Lateral movement, exfiltration and anomaly detection at the wire.'],
      ['globe','Threat Intelligence','Curated, contextualized intel feeding every alert and investigation.'],
      ['search','Threat Hunting','Hypothesis-driven hunts to find what alerts miss.'],
      ['lock','Auto-Containment','Automated response playbooks across endpoint, identity and network.'],
    ],
    checklist: [
      'Pre-tuned detection content mapped to MITRE ATT&CK',
      'Custom rules per industry and environment',
      'Integrated SOAR for response orchestration',
      'Vendor-agnostic — bring your own EDR or SIEM',
      'Monthly threat reports and quarterly business reviews',
      'Onboarding in under 14 days',
    ],
    pillars: [
      ['target','Detection','Sub-1-minute alerting on critical detections.'],
      ['flow','Investigation','Triage, correlation and enrichment in 10 minutes.'],
      ['lock','Response','Containment in 45 minutes — automated and analyst-led.'],
    ],
    values: [
      ['Reduce dwell time','Cut adversary dwell time from months to minutes.'],
      ['Lower TCO','One service replaces SIEM ops, SOC staffing and tooling sprawl.'],
      ['Compliance-ready','Evidence and reporting aligned to ISO 27001, SOC 2, DORA and NIS2.'],
      ['Outcome SLAs','Detect in 1 min · Investigate in 10 · Respond in 45.'],
    ]
  },
  'soc': {
    eyebrow:'Security Operations Center',
    title:['A ', '24×7 SOC ', 'as your front line.'],
    lead:'Always-on cyber defense — staffed by senior analysts, instrumented with XDR + SOAR, and tuned to your environment.',
    overviewHeading:['Operations,', ' not alerts.'],
    overviewBody:'Our SOC is built around outcomes — closed incidents, contained adversaries, hardened environments. Not ticket counts. Every analyst is supported by automation, threat intelligence, and a defined response playbook.',
    features:[
      ['eye','Continuous Monitoring','Every alert, every endpoint, every minute.'],
      ['flow','SIEM & XDR Operations','Operate, tune, and evolve detection content over time.'],
      ['search','Triage & Investigation','Senior analysts on every shift — Tier 1 to Tier 3.'],
      ['lock','Incident Response','Containment, eradication and recovery led by IR specialists.'],
      ['target','Use-case Engineering','Custom detections per environment and threat model.'],
      ['globe','Reporting & Metrics','Dashboards, MBRs and audit-ready evidence.'],
    ],
    checklist:['Tier 1/2/3 analyst coverage','Follow-the-sun staffing','SOAR-driven playbooks','Threat intel integrated','Quarterly purple-team exercises','Audit-ready reporting'],
    pillars:[['eye','Visibility','Single pane across security stack.'],['flow','Velocity','Fast triage, fast response.'],['lock','Validation','Continuous tuning and purple-teaming.']],
    values:[['Predictable cost','Fixed monthly subscription — no per-alert pricing.'],['Senior staffing','Average analyst tenure 6+ years.'],['Proven playbooks','Tested across 100+ enterprises.'],['Compliance fit','Aligned to leading frameworks.']]
  },
  'grc': {
    eyebrow:'Governance, Risk & Compliance',
    title:['Translate compliance into ', 'measurable risk reduction', '.'],
    lead:'Policies, controls, audits and reporting — engineered to satisfy regulators and reduce real risk.',
    overviewHeading:['GRC that ', 'moves the needle', '.'],
    overviewBody:'We help CISOs build risk programs that map directly to business outcomes. Policy reviews, gap assessments, control implementation, audit prep, and ongoing operations — across ISO 27001, SOC 2, PCI DSS, HIPAA, GDPR, DORA and NIS2.',
    features:[
      ['check','Risk Assessment','Quantified risk register tied to business impact.'],
      ['file','Policy Development','Auditable policies aligned to leading frameworks.'],
      ['target','Control Implementation','Operational controls — not shelfware.'],
      ['eye','Compliance Audits','Internal audit programs and audit-prep services.'],
      ['globe','Privacy & Data Protection','GDPR, DPDP and regional privacy compliance.'],
      ['lock','Third-Party Risk','Vendor risk management and supply-chain security.'],
    ],
    checklist:['ISO 27001 / SOC 2 / PCI DSS','GDPR / DORA / NIS2','HIPAA / HITRUST','Risk quantification','Vendor / TPRM','Audit-prep & evidence'],
    pillars:[['file','Govern','Policies, standards, accountability.'],['check','Assess','Risks measured, mapped, prioritized.'],['lock','Comply','Evidence ready, audits passed.']],
    values:[['Audit-ready','Evidence and artifacts always current.'],['Risk-quantified','Move from heat-maps to dollars.'],['Framework-mapped','One control set, many regulations.'],['Embedded','We operate with you, not above you.']]
  },
  'vapt': {
    eyebrow:'Vulnerability Assessment & Pen Testing',
    title:['Find weaknesses ', 'before adversaries', ' do.'],
    lead:'Manual + automated security testing across applications, infrastructure, cloud, mobile and APIs.',
    overviewHeading:['Adversary-grade', ' testing — ', 'enterprise-grade reporting.'],
    overviewBody:'Our offensive team operates under engagement rules tuned to your risk tolerance. Web apps, internal/external networks, cloud, mobile, APIs, IoT, and red-team simulations — all delivered with prioritized, exploitable findings.',
    features:[
      ['target','Web Application Pen-Test','OWASP Top 10 + business-logic and chained vulnerabilities.'],
      ['flow','Network Pen-Test','Internal and external infrastructure under controlled conditions.'],
      ['globe','Cloud Pen-Test','AWS, Azure, GCP misconfigurations and identity attacks.'],
      ['box','Mobile Pen-Test','iOS and Android apps + backend APIs.'],
      ['search','Red Team','Goal-based simulated breach testing.'],
      ['lock','Vulnerability Management','Continuous scanning and remediation tracking.'],
    ],
    checklist:['Manual + automated testing','Chained / business-logic findings','Exploit-grade reporting','Remediation guidance','Re-test included','OSCP / OSEP / CRTE staff'],
    pillars:[['target','Discover','Surface unknown attack paths.'],['search','Validate','Prove exploitability — not noise.'],['lock','Remediate','Prioritized fixes with re-test.']],
    values:[['Senior operators','Lead testers with offensive certifications.'],['Real exploits','Findings proven, not theoretical.'],['Business context','Risk ranked by impact, not CVSS alone.'],['Continuous testing','Annual or rolling cadence.']]
  },
  'edr': {
    eyebrow:'Endpoint Detection & Response',
    title:['Endpoint resilience, ', 'cloud-delivered', '.'],
    lead:'Behavioral protection, hunting and response across every endpoint — workstation, server and cloud workload.',
    overviewHeading:['Stop ', 'endpoint-borne threats ', 'before they spread.'],
    overviewBody:'Best-in-class EDR platforms deployed, tuned and operated by G\'Secure. Behavioral detection, automatic isolation, deep forensic visibility, and a managed service wrapper that never sleeps.',
    features:[['target','Behavioral Detection','ML-driven detection beyond signatures.'],['lock','Auto-Isolation','Contain compromised hosts in seconds.'],['eye','Forensic Visibility','Deep telemetry for retrospective analysis.'],['flow','Cloud Workloads','Linux, Windows, containers, Kubernetes.'],['search','Threat Hunting','Endpoint-focused hunts on rolling cadence.'],['file','Reporting','Executive and technical dashboards.']],
    checklist:['Vendor-agnostic deployment','Tuning and policy management','24×7 response operations','Forensic data retention','Integration with SIEM/SOAR','Compliance reporting'],
    pillars:[['target','Detect','Behavioral, ML-driven detection.'],['lock','Contain','Auto-isolation in seconds.'],['eye','Investigate','Full forensic context retained.']],
    values:[['Best-in-class platforms','SentinelOne, CrowdStrike, MS Defender.'],['Managed lifecycle','Deployment to operations.'],['Reduced dwell time','Endpoint compromises contained fast.'],['Predictable cost','Per-endpoint licensing rolled in.']]
  },
  'ndr': {
    eyebrow:'Network Detection & Response',
    title:['See ', 'every packet', ' that matters.'],
    lead:'Network-layer detection of lateral movement, exfiltration and stealthy adversaries — even when endpoints are dark.',
    overviewHeading:['NDR that ', 'completes ', 'your detection picture.'],
    overviewBody:'When attackers evade endpoints, the network sees them. Our NDR service deploys sensors across on-prem, cloud and hybrid environments — fed into our SOC for 24×7 analysis.',
    features:[['flow','Lateral Movement','Detect east-west attacker traversal.'],['globe','Exfil Detection','C2 and data-theft pattern recognition.'],['eye','Encrypted Traffic Analysis','Behavioral analysis without decryption.'],['target','Anomaly Detection','ML-driven baselines per segment.'],['search','Hunt Workspaces','Analyst-driven retrospective hunts.'],['lock','Response Integration','Automated containment via firewall/EDR.']],
    checklist:['On-prem, cloud, hybrid coverage','Encrypted traffic visibility','PCAP retention','Integration with SOC','Threat intel enrichment','Custom detection content'],
    pillars:[['flow','Visibility','Every flow, every segment.'],['eye','Analytics','Behavioral, not signature-only.'],['lock','Response','Auto-block and isolate.']],
    values:[['Endpoint-agnostic','See what endpoints can\'t.'],['Cloud-native','VPC traffic mirroring, K8s.'],['ML-driven','Adaptive baselines.'],['SOC-integrated','Single pane with EDR + SIEM.']]
  },
  'ueba': {
    eyebrow:'User & Entity Behavior Analytics',
    title:['Insider threats — ', 'detected by behavior', ', not rules.'],
    lead:'Spot account compromise, privilege misuse and malicious insiders by modeling normal — and surfacing the abnormal.',
    overviewHeading:['Behavior-driven', ' detection ', 'across users, hosts and apps.'],
    overviewBody:'UEBA models normal activity for every user and entity. When behavior deviates — unusual access, anomalous data movement, rare admin actions — we surface it for investigation.',
    features:[['user','User Profiling','Per-user behavioral baselines.'],['eye','Account Compromise','Detect credential theft and use.'],['target','Privilege Abuse','Surface unusual admin actions.'],['flow','Data Movement','Anomalous file or DB access.'],['search','Insider Risk','Patterns of malicious or negligent insiders.'],['lock','Response Integration','Auto-restrict suspicious accounts.']],
    checklist:['User and entity baselining','Identity-system integration','SIEM correlation','Risk scoring per identity','Insider risk programs','Investigation workflows'],
    pillars:[['user','Profile','Baseline normal behavior.'],['target','Detect','Surface meaningful anomalies.'],['lock','Respond','Restrict, investigate, recover.']],
    values:[['Catch what rules miss','Behavior catches novel attacks.'],['Identity-centric','Modern attacks abuse identities.'],['Reduced noise','Risk-scored alerts.'],['Insider-aware','Malicious + negligent insider focus.']]
  },
  'threat-intelligence': {
    eyebrow:'Threat Intelligence',
    title:['Intelligence ', 'operationalized', ' — not just delivered.'],
    lead:'Curated, contextualized threat intelligence integrated into your SOC, IR and risk programs.',
    overviewHeading:['Intelligence ', 'that drives action', '.'],
    overviewBody:'Strategic, tactical and operational intelligence — sourced, vetted and tuned to your environment. Delivered through your SIEM, SOAR, EDR and executive briefings.',
    features:[['globe','Strategic Intel','Adversary trends and CISO-level briefings.'],['target','Tactical Intel','TTP and campaign analysis.'],['flow','Operational Intel','IoCs feeding SIEM/EDR/firewall.'],['eye','Brand Monitoring','Phishing, impersonation, leaked credentials.'],['search','Dark Web Monitoring','Surface, deep and dark-web sources.'],['lock','Vulnerability Intel','Exploit trends prioritized by exposure.']],
    checklist:['Strategic / tactical / operational','Brand & exec protection','Dark-web monitoring','SIEM/SOAR/EDR feeds','Custom RFI service','Executive briefings'],
    pillars:[['target','Collect','Source from premium + open feeds.'],['eye','Curate','Vet, contextualize, score.'],['flow','Operationalize','Push to detection + response.']],
    values:[['Reduced noise','Vetted intel only.'],['Context-rich','Tied to your industry and threat model.'],['Always integrated','Feeds and dashboards out of the box.'],['Proactive','Brief leadership before attacks land.']]
  },
  'cyber-threat-hunting': {
    eyebrow:'Cyber Threat Hunting',
    title:['Find what your alerts ', 'never trigger', '.'],
    lead:'Hypothesis-driven hunts by senior threat hunters — uncover dormant adversaries and detection blind spots.',
    overviewHeading:['Proactive ', 'hunting, ', 'continuous improvement.'],
    overviewBody:'Detection rules cover the known. Threat hunters cover the unknown. Every engagement produces both findings and new detection content for your SOC.',
    features:[['search','Hypothesis-driven Hunts','MITRE ATT&CK aligned.'],['target','Adversary Emulation','Test your detections against real TTPs.'],['eye','Telemetry Reviews','Endpoint, network, identity, cloud.'],['flow','Detection Engineering','New rules from every hunt.'],['globe','Threat Landscape Mapping','Hunts tuned to your industry.'],['lock','Findings to Action','Tickets, runbooks, mitigations.']],
    checklist:['Quarterly or continuous cadence','MITRE-aligned hunts','Adversary emulation','Detection content created','Runbook updates','Knowledge transfer'],
    pillars:[['search','Hypothesize','Pick a TTP, hunt the gaps.'],['target','Hunt','Telemetry, tools, expertise.'],['flow','Codify','Findings → detections.']],
    values:[['Find the unknown','Beyond rule-based detection.'],['Improve over time','Each hunt strengthens your SOC.'],['Industry-tuned','Hunts mapped to your sector\'s adversaries.'],['Knowledge transfer','Your team learns alongside us.']]
  },
  'security-monitoring': {
    eyebrow:'Cyber Security Monitoring',
    title:['Continuous visibility ', 'across your stack', '.'],
    lead:'Single-pane monitoring across endpoint, network, cloud and identity — operated 24×7 from our global SOC.',
    overviewHeading:['One pane. ', 'Every signal. ', 'Always on.'],
    overviewBody:'Modern environments generate billions of events. We collect, correlate, prioritize and respond — so your team focuses on outcomes, not alerts.',
    features:[['eye','Unified Telemetry','Endpoint, network, cloud, identity, SaaS.'],['flow','Correlation','Multi-source detection rules.'],['target','Prioritization','Risk-scored alerts.'],['search','Investigation','Full context per alert.'],['lock','Response','Automated playbooks where safe.'],['globe','Reporting','Daily, weekly, monthly cadences.']],
    checklist:['24×7 coverage','Multi-cloud + on-prem','Identity & SaaS','Tier 1-3 staffing','SOAR-driven response','Audit-ready logs'],
    pillars:[['eye','Collect','From every layer.'],['flow','Correlate','Across data sources.'],['lock','Act','Fast, validated response.']],
    values:[['Single pane','One view, everywhere.'],['Reduced fatigue','Risk-scored, deduplicated alerts.'],['Outcome focus','Closed incidents, not noise.'],['Cost predictable','Subscription-based.']]
  },
  'forensic-analysis': {
    eyebrow:'Forensic Analysis',
    title:['Truth, ', 'reconstructed', ' — incident by incident.'],
    lead:'Digital forensics and incident response — uncover what happened, how, and what to do next.',
    overviewHeading:['DFIR ', 'engineered ', 'for enterprise scale.'],
    overviewBody:'When incidents happen, hours matter. Our DFIR team mobilizes fast — preserves evidence, reconstructs the attack, contains the adversary, and produces audit- and litigation-ready reports.',
    features:[['file','Disk & Memory Forensics','Endpoint and server analysis.'],['flow','Network Forensics','Packet, NetFlow and proxy analysis.'],['globe','Cloud Forensics','AWS, Azure, GCP, M365, GWS.'],['eye','Mobile Forensics','iOS and Android device analysis.'],['search','Malware Reverse Engineering','Static and dynamic analysis.'],['lock','IR Retainers','24-hour response SLAs.']],
    checklist:['24-hour response SLA','Chain-of-custody','Audit / litigation reports','Cloud + on-prem coverage','Malware RE','Insurance-ready'],
    pillars:[['file','Preserve','Forensically sound collection.'],['search','Analyze','What, when, who, how.'],['lock','Recover','Containment to closure.']],
    values:[['Litigation-ready','Reports admissible in court.'],['Insurance-aligned','Coordinate with cyber insurers.'],['Fast mobilization','Boots-on within 24 hours.'],['Full coverage','Endpoint to cloud to mobile.']]
  },
  'auto-containment': {
    eyebrow:'Auto-Containment',
    title:['Response that ', 'happens automatically', '.'],
    lead:'SOAR-driven playbooks contain threats in seconds — across endpoint, identity, network and cloud.',
    overviewHeading:['Containment, ', 'orchestrated', '.'],
    overviewBody:'Manual response is too slow for modern attacks. Our SOAR platform automates the safe, repetitive parts of incident response — isolating hosts, disabling accounts, blocking IOCs — while analysts focus on judgment calls.',
    features:[['lock','Endpoint Isolation','EDR-driven host containment.'],['user','Account Disablement','Identity-system response.'],['flow','Network Blocking','Firewall and proxy auto-action.'],['globe','Cloud Quarantine','Workload + IAM containment.'],['target','Playbook Library','Pre-built and custom workflows.'],['eye','Audit Trail','Every action logged and reversible.']],
    checklist:['EDR / IDP / firewall integration','Pre-built playbooks','Custom workflow design','Reversible actions','Approval gates','Full audit trail'],
    pillars:[['target','Detect','Trigger from any source.'],['lock','Contain','Action across the stack.'],['eye','Validate','Analyst review and rollback.']],
    values:[['Faster response','Seconds, not minutes.'],['Reduced fatigue','Analysts focus on judgment.'],['Consistent','Same playbook every time.'],['Reversible','Always an undo path.']]
  }
};

function renderServicePage(slug) {
  const d = SERVICE_DATA[slug];
  if (!d) return '<p>Service not found</p>';
  const featuresHtml = d.features.map(([icon,t,desc])=>`
    <div class="card p-6 reveal relative overflow-hidden">
      <div class="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-orange to-brand-bright opacity-0 group-hover:opacity-100 transition"></div>
      <div class="w-11 h-11 rounded-lg bg-gradient-to-br from-brand-orange to-brand-bright grid place-items-center text-white mb-4">${svgIcon(icon)}</div>
      <h3 class="text-white font-bold text-lg mb-2">${t}</h3>
      <p class="text-brand-body text-[14px]">${desc}</p>
    </div>`).join('');
  const checkHtml = d.checklist.map(c=>`<li class="flex items-start gap-3 py-2"><span class="w-5 h-5 rounded-full bg-brand-orange/15 text-brand-orange grid place-items-center mt-0.5 shrink-0"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="m5 12 5 5L20 7"/></svg></span><span class="text-brand-body text-[14.5px]">${c}</span></li>`).join('');
  const pillarsHtml = d.pillars.map(([icon,t,desc])=>`<div class="card p-8 text-center reveal"><div class="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-brand-orange to-brand-bright grid place-items-center text-white mb-5"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">${ICONS[icon]||''}</svg></div><h3 class="text-white font-bold text-xl mb-2">${t}</h3><p class="text-brand-body text-[14px]">${desc}</p></div>`).join('');
  const valuesHtml = d.values.map(([t,desc],i)=>`<div class="reveal flex gap-5 p-5 rounded-xl hover:bg-white/[.03] transition group"><div class="font-mono text-3xl font-black text-brand-orange/70 group-hover:text-brand-orange shrink-0">${String(i+1).padStart(2,'0')}</div><div><h4 class="text-white font-bold text-lg mb-1">${t}</h4><p class="text-brand-body text-[14px]">${desc}</p></div></div>`).join('');

  return `
  <section class="relative pt-12 pb-20 overflow-hidden">
    <div class="absolute inset-0 grid-mask"></div>
    <div class="orb orb-orange drift1" style="width:420px;height:420px;top:-100px;right:-60px"></div>
    <div class="orb orb-blue drift2" style="width:460px;height:460px;bottom:-180px;left:-80px"></div>
    <div class="relative max-w-7xl mx-auto px-6">
      <div class="text-[12px] text-brand-mute font-mono mb-6 reveal"><a href="index.html" class="hover:text-brand-orange">Home</a> / <a href="services.html" class="hover:text-brand-orange">Services</a> / <span class="text-brand-orange">${d.eyebrow}</span></div>
      <div class="eyebrow text-brand-orange mb-5 reveal">${d.eyebrow}</div>
      <h1 class="h-mega text-white max-w-4xl reveal">${d.title[0]}<span class="grad-text">${d.title[1]}</span>${d.title[2]||''}</h1>
      <p class="mt-6 text-brand-body text-[17px] max-w-2xl reveal">${d.lead}</p>
      <div class="mt-8 flex flex-wrap gap-3 reveal"><a href="contact.html" class="btn btn-orange">Talk to an Expert</a><a href="security-assessment.html" class="btn btn-ghost">Get a Callback</a></div>
    </div>
  </section>

  <section class="relative py-20 border-t border-white/5"><div class="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
    <div class="reveal"><div class="eyebrow text-brand-orange mb-3">Overview</div><h2 class="h-section text-white">${d.overviewHeading[0]}<span class="grad-text">${d.overviewHeading[1]}</span>${d.overviewHeading[2]||''}</h2><p class="mt-5 text-brand-body">${d.overviewBody}</p></div>
    <div class="card card-elev p-8 reveal relative overflow-hidden"><div class="orb orb-orange" style="width:240px;height:240px;top:-80px;right:-80px;opacity:.4"></div>
      <svg viewBox="0 0 400 280" class="w-full">
        <defs><linearGradient id="dashG" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0077d0"/><stop offset="100%" stop-color="#faa61a"/></linearGradient></defs>
        <rect x="20" y="20" width="360" height="240" rx="8" fill="rgba(255,255,255,.02)" stroke="rgba(255,255,255,.08)"/>
        <circle cx="80" cy="80" r="22" fill="rgba(0,119,208,.2)" stroke="#0077d0" stroke-width="1.5"/>
        <circle cx="200" cy="60" r="18" fill="rgba(250,166,26,.2)" stroke="#faa61a" stroke-width="1.5"/>
        <circle cx="320" cy="100" r="20" fill="rgba(0,119,208,.2)" stroke="#0077d0" stroke-width="1.5"/>
        <circle cx="120" cy="200" r="20" fill="rgba(250,166,26,.2)" stroke="#faa61a" stroke-width="1.5"/>
        <circle cx="280" cy="200" r="22" fill="rgba(0,119,208,.2)" stroke="#0077d0" stroke-width="1.5"/>
        <line x1="80" y1="80" x2="200" y2="60" stroke="url(#dashG)" stroke-width="1" stroke-dasharray="3 3"/>
        <line x1="200" y1="60" x2="320" y2="100" stroke="url(#dashG)" stroke-width="1" stroke-dasharray="3 3"/>
        <line x1="80" y1="80" x2="120" y2="200" stroke="url(#dashG)" stroke-width="1" stroke-dasharray="3 3"/>
        <line x1="320" y1="100" x2="280" y2="200" stroke="url(#dashG)" stroke-width="1" stroke-dasharray="3 3"/>
        <line x1="120" y1="200" x2="280" y2="200" stroke="url(#dashG)" stroke-width="1" stroke-dasharray="3 3"/>
        <line x1="200" y1="60" x2="120" y2="200" stroke="url(#dashG)" stroke-width="1" stroke-dasharray="3 3"/>
        <line x1="200" y1="60" x2="280" y2="200" stroke="url(#dashG)" stroke-width="1" stroke-dasharray="3 3"/>
      </svg>
    </div>
  </div></section>

  <section class="relative py-24 bg-brand-surface/30 border-y border-white/5"><div class="max-w-7xl mx-auto px-6">
    <div class="max-w-2xl mb-12 reveal"><div class="eyebrow text-brand-orange mb-3">Features</div><h2 class="h-section text-white">What's <span class="grad-text">included</span>.</h2></div>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5">${featuresHtml}</div>
  </div></section>

  <section class="relative py-24"><div class="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
    <div class="reveal"><div class="eyebrow text-brand-orange mb-3">Capabilities</div><h2 class="h-section text-white mb-4">Everything you'd expect — and <span class="grad-text">a few things you wouldn't</span>.</h2><p class="text-brand-body">A purpose-built operating model, not a checklist of tools.</p></div>
    <div class="card p-8 reveal"><ul class="divide-y divide-white/5">${checkHtml}</ul></div>
  </div></section>

  <section class="relative py-24 bg-brand-surface/30 border-y border-white/5"><div class="max-w-7xl mx-auto px-6">
    <div class="text-center mb-14 reveal"><div class="eyebrow text-brand-orange mb-3">Pillars</div><h2 class="h-section text-white">Three pillars, <span class="grad-text">one outcome</span>.</h2></div>
    <div class="grid md:grid-cols-3 gap-5">${pillarsHtml}</div>
  </div></section>

  <section class="relative py-24"><div class="max-w-7xl mx-auto px-6">
    <div class="max-w-2xl mb-12 reveal"><div class="eyebrow text-brand-orange mb-3">Why It Matters</div><h2 class="h-section text-white">Outcomes <span class="grad-text">we deliver</span>.</h2></div>
    <div class="grid md:grid-cols-2 gap-3">${valuesHtml}</div>
  </div></section>

  <section class="relative py-20 border-t border-white/5"><div class="max-w-7xl mx-auto px-6">
    <div class="text-center mb-10 reveal"><div class="eyebrow text-brand-orange mb-3">Industries</div><h2 class="h-section text-white">Built for <span class="grad-text">every sector</span>.</h2></div>
    <div class="flex flex-wrap gap-3 justify-center reveal">
      ${['Healthcare','Banking & Finance','Professional Services','Manufacturing','SaaS & Tech','Public Sector','Telecom','Retail','Energy & Utilities','Logistics'].map(i=>`<span class="chip"><span class="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>${i}</span>`).join('')}
    </div>
  </div></section>`;
}
