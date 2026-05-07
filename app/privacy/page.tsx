import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata = { title: "Privacy Policy — G'Secure Labs" };

export default function PrivacyPage() {
  return (
    <section className="bg-cream text-navy editorial pt-32 md:pt-40 pb-20">
      <div className="container-x max-w-3xl">
        <Breadcrumbs items={[{ label: "Privacy Policy" }]} />
        <h1 className="text-display-md md:text-display-lg font-semibold tracking-tight leading-[1.05] mt-6">
          Privacy Policy
        </h1>
        <p className="text-sm text-navy/55 mt-3 font-mono uppercase tracking-wider">Last updated · April 2026</p>

        <div className="prose prose-lg max-w-none mt-10 text-navy/85">
          <p className="text-lg leading-relaxed">
            G&apos;Secure Labs (a Gateway Group Company) is committed to protecting the privacy of every visitor, customer, and prospect. This policy explains what data we collect, why we collect it, and the rights you have under GDPR and equivalent regimes.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">1. Information we collect</h2>
          <p className="leading-relaxed">
            We collect contact information (name, email, company, country) when you submit a form, basic technical data (IP address, browser, referrer) for analytics, and any information you choose to share with us in the body of an inquiry.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">2. How we use it</h2>
          <p className="leading-relaxed">
            We use this information to respond to inquiries, deliver requested content, improve our services, and meet our legal obligations. We do not sell your data, and we do not share it with third parties except as required to deliver services you have engaged us for.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">3. Cookies & analytics</h2>
          <p className="leading-relaxed">
            We use a minimal set of cookies for site operation and anonymous analytics. You can decline non-essential cookies via the consent banner shown on first visit, and update your choice at any time.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">4. Your rights</h2>
          <p className="leading-relaxed">
            Under GDPR, you have the right to access, correct, port, or delete the personal data we hold about you, and the right to object to processing. To exercise these rights, contact us at <a className="text-cta underline" href="mailto:privacy@gsecurelabs.com">privacy@gsecurelabs.com</a>.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">5. Data retention</h2>
          <p className="leading-relaxed">
            We retain inquiry data for as long as it is needed to address your request, plus a limited period for legal and audit obligations. Customer engagement data is retained for the term of the engagement plus seven years.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">6. Contact</h2>
          <p className="leading-relaxed">
            For privacy-related questions or to file a complaint, contact our Data Protection Officer at <a className="text-cta underline" href="mailto:dpo@gsecurelabs.com">dpo@gsecurelabs.com</a>. You may also lodge a complaint with your national supervisory authority.
          </p>

          <p className="leading-relaxed mt-10 text-sm text-navy/55 italic">
            [This privacy policy is a redesign placeholder. The production policy will be drafted by G&apos;Secure Labs&apos; legal team and reflect the actual data practices of the organization.]
          </p>
        </div>
      </div>
    </section>
  );
}
