import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { FloatingTool } from "@/components/FloatingTool";

export const metadata: Metadata = {
  title: "G'Secure Labs — Next-Gen Cybersecurity for Enterprises",
  description:
    "Managed Detection & Response, SOC, GRC, and VAPT services trusted by 20+ Fortune 500 companies across 30+ countries. 27 years securing the world's most demanding enterprises.",
  icons: { icon: "/favicon.svg" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-navy text-inkSoft antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingTool />
        <CookieBanner />
      </body>
    </html>
  );
}
