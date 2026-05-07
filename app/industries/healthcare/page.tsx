import { IndustryDetail } from "@/components/IndustryDetail";
import { industries } from "@/lib/content";
export const metadata = { title: "Healthcare Cybersecurity — G'Secure Labs" };
export default function Page() { return <IndustryDetail industry={industries.find((i) => i.slug === "healthcare")!} />; }
