import { ServiceDetail } from "@/components/ServiceDetail";
import { services } from "@/lib/content";
export const metadata = { title: "Managed Detection & Response (MDR) — G'Secure Labs" };
export default function Page() {
  const s = services.find((x) => x.slug === "mdr")!;
  return <ServiceDetail service={s} />;
}
