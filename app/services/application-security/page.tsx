import { ServiceDetail } from "@/components/ServiceDetail";
import { services } from "@/lib/content";
export const metadata = { title: "Application Security Testing — G'Secure Labs" };
export default function Page() {
  const s = services.find((x) => x.slug === "application-security")!;
  return <ServiceDetail service={s} />;
}
