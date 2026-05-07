import { ServiceDetail } from "@/components/ServiceDetail";
import { services } from "@/lib/content";
export const metadata = { title: "Governance, Risk & Compliance — G'Secure Labs" };
export default function Page() {
  const s = services.find((x) => x.slug === "grc")!;
  return <ServiceDetail service={s} />;
}
