import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata = { title: "Terms of Use — G'Secure Labs" };

export default function TermsPage() {
  return (
    <section className="bg-cream text-navy editorial pt-32 md:pt-40 pb-20">
      <div className="container-x max-w-3xl">
        <Breadcrumbs items={[{ label: "Terms of Use" }]} />
        <h1 className="text-display-md md:text-display-lg font-semibold tracking-tight leading-[1.05] mt-6">
          Terms of Use
        </h1>
        <p className="text-sm text-navy/55 mt-3 font-mono uppercase tracking-wider">Last updated · April 2026</p>

        <div className="prose prose-lg max-w-none mt-10 text-navy/85">
          <p className="text-lg leading-relaxed">
            By accessing this website, you agree to the following terms. These terms govern your use of www.gsecurelabs.com and all related content.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">1. Use of content</h2>
          <p className="leading-relaxed">
            All content — including text, graphics, logos, and case studies — is owned by G&apos;Secure Labs or its licensors. You may view and share content for personal, non-commercial use with attribution. Reproduction for commercial purposes requires written permission.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">2. Trademarks</h2>
          <p className="leading-relaxed">
            G&apos;Secure Labs, the G&apos;Secure logo, and Gateway Group are trademarks of the Gateway Corporation. Third-party trademarks remain the property of their respective owners.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">3. No warranty</h2>
          <p className="leading-relaxed">
            Information on this site is provided for general informational purposes and does not constitute professional advice. We make reasonable efforts to keep the content accurate but provide no warranty as to completeness or current applicability.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">4. Limitation of liability</h2>
          <p className="leading-relaxed">
            To the maximum extent permitted by law, G&apos;Secure Labs is not liable for any indirect, incidental, or consequential damages arising from your use of this site or reliance on its content.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">5. Governing law</h2>
          <p className="leading-relaxed">
            These terms are governed by the laws of Sweden and any disputes shall be resolved in the courts of Stockholm.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">6. Changes</h2>
          <p className="leading-relaxed">
            We may update these terms from time to time. The current version is always available at this URL with the &quot;last updated&quot; date shown above.
          </p>

          <p className="leading-relaxed mt-10 text-sm text-navy/55 italic">
            [These terms are a redesign placeholder. The production terms will be drafted by G&apos;Secure Labs&apos; legal team.]
          </p>
        </div>
      </div>
    </section>
  );
}
