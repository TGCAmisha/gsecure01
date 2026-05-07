import { IndustryDetail } from "@/components/IndustryDetail";
import { industries } from "@/lib/content";
export const metadata = { title: "Energy & Utilities Cybersecurity — G'Secure Labs" };
export default function Page() { return <IndustryDetail industry={industries.find((i) => i.slug === "energy")!} />; }
