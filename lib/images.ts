// Seeded Lorem Picsum URLs — deterministic, always load, real photography.
// We apply a brand-tinted overlay on top in the BrandImage component so visuals stay cohesive.

export function pic(seed: string, w = 1600, h = 900): string {
  return `https://picsum.photos/seed/${encodeURIComponent(seed)}/${w}/${h}`;
}

export const heroImages = {
  homepage: pic("gsecure-soc-operations-2", 1600, 1200),
  servicesIndex: pic("gsecure-services-overview", 1600, 900),
  mdr: pic("gsecure-mdr-detection-engineer", 1400, 1000),
  soc: pic("gsecure-soc-control-room", 1400, 1000),
  grc: pic("gsecure-grc-compliance-audit", 1400, 1000),
  vapt: pic("gsecure-vapt-pentest-keyboard", 1400, 1000),
  appsec: pic("gsecure-appsec-code-review", 1400, 1000),
  essential: pic("gsecure-essential-startup-team", 1400, 1000),
  coe: pic("gsecure-coe-architecture-board", 1400, 1000),
  healthcare: pic("gsecure-healthcare-hospital-network", 1400, 1000),
  finance: pic("gsecure-finance-trading-floor", 1400, 1000),
  energy: pic("gsecure-energy-grid-control", 1400, 1000),
  telecom: pic("gsecure-telecom-fiber-network", 1400, 1000),
  about: pic("gsecure-about-team-collaboration", 1400, 900),
  careers: pic("gsecure-careers-team-culture", 1400, 900),
  contact: pic("gsecure-contact-office-meeting", 1400, 900)
};

export function caseImage(slug: string) {
  return pic(`gsecure-case-${slug}`, 1200, 800);
}

export function insightImage(slug: string) {
  return pic(`gsecure-insight-${slug}`, 1200, 800);
}
