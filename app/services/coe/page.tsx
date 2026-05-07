import { ServiceDetail } from "@/components/ServiceDetail";
import { services } from "@/lib/content";
export const metadata = { title: "Center of Excellence — G'Secure Labs" };
export default function Page() {
  const s = services.find((x) => x.slug === "coe")!;
  return <ServiceDetail service={s} />;
}
