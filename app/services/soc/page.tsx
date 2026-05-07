import { ServiceDetail } from "@/components/ServiceDetail";
import { services } from "@/lib/content";
export const metadata = { title: "Security Operations Center (SOC) — G'Secure Labs" };
export default function Page() {
  const s = services.find((x) => x.slug === "soc")!;
  return <ServiceDetail service={s} />;
}
