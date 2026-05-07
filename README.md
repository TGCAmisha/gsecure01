# G'Secure Labs — Redesign

A design-only redesign of [gsecurelabs.com](https://www.gsecurelabs.com/) for internal leadership review.

Built with Next.js 15, Tailwind CSS, and Framer Motion. Deployed on Vercel.

## What's inside

- **23 fully interlinked pages** — homepage, 7 service pages, 4 industry pages, case studies (listing + detail templates), insights (listing + detail templates), about, contact, partners, careers, news room, privacy, terms
- **Animated homepage** — wireframe globe linking the 14 G'Secure office locations, particle network background, animated metric counters, scrolling client logo marquee, scroll-triggered reveals
- **Design system** — single-source tokens (Tailwind config + globals.css), Inter + JetBrains Mono typography, navy/signal-green/cyan/orange palette
- **Hybrid aesthetic** — dark "operations console" for homepage and service pages, light editorial treatment for About, Insights, Case Studies
- **Accessibility** — WCAG 2.2 AA contrast, `prefers-reduced-motion` respected, semantic HTML, breadcrumbs

## Routes

```
/                                  Homepage
/services                          Services index
/services/mdr                      Managed Detection & Response
/services/soc                      Security Operations Center
/services/grc                      Governance, Risk & Compliance
/services/vapt                     Vulnerability Assessment & Pen Testing
/services/application-security     Application Security Testing
/services/essential                G'Secure Essential
/services/coe                      Center of Excellence
/industries                        Industries index
/industries/healthcare             Healthcare practice
/industries/finance                Financial services practice
/industries/energy                 Energy & utilities practice
/industries/telecom                Telecommunications practice
/case-studies                      Case studies listing
/case-studies/[slug]               Case study detail
/insights                          Insights / blog listing
/insights/[slug]                   Insight article detail
/about                             About
/contact                           Contact
/partners                          Technology partners
/careers                           Careers
/news                              News Room
/privacy                           Privacy Policy
/terms                             Terms of Use
```

## Run locally

```bash
npm install
npm run dev
```

## Deploy

Pushed to `main` → Vercel auto-deploys.

## Notes

- Content reused from the existing G'Secure Labs site. Where the current site has no metric, named quote, or client logo, fields are clearly marked as `[placeholder]` for production replacement.
- Animated globe is decorative — visualizing G'Secure's 14 actual office locations. No real-time telemetry claim.
- Yesterday's static-HTML build was archived to the `archive/g-1` branch before this rebuild.
