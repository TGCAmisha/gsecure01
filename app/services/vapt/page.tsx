import { ServiceDetail } from "@/components/ServiceDetail";
import { services } from "@/lib/content";
export const metadata = { title: "Vulnerability Assessment & Penetration Testing — G'Secure Labs" };
export default function Page() {
  const s = services.find((x) => x.slug === "vapt")!;
  return <ServiceDetail service={s} />;
}
