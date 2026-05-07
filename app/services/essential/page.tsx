import { ServiceDetail } from "@/components/ServiceDetail";
import { services } from "@/lib/content";
export const metadata = { title: "G'Secure Essential — G'Secure Labs" };
export default function Page() {
  const s = services.find((x) => x.slug === "essential")!;
  return <ServiceDetail service={s} />;
}
