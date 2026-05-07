import Link from "next/link";
import { Linkedin, Twitter, Youtube, Facebook, Mail, MapPin } from "lucide-react";
import { Logo } from "./Logo";
import { navigation } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-navy-deep border-t border-white/5 mt-20">
      <div className="container-x py-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
        <div className="col-span-2 lg:col-span-2">
          <Logo />
          <p className="text-sm text-inkSoft/60 mt-4 max-w-xs leading-relaxed">
            Next-generation cybersecurity for enterprises. 27 years protecting the world&apos;s most demanding organizations across 30+ countries.
          </p>
          <div className="flex gap-3 mt-5">
            {[
              { Icon: Linkedin, href: "#", label: "LinkedIn" },
              { Icon: Twitter, href: "#", label: "Twitter" },
              { Icon: Youtube, href: "#", label: "YouTube" },
              { Icon: Facebook, href: "#", label: "Facebook" }
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-9 h-9 rounded-md border border-white/10 grid place-items-center text-inkSoft/70 hover:text-signal hover:border-signal/40 transition"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <FooterCol title="Services" items={navigation.services} />
        <FooterCol title="Industries" items={navigation.industries} />
        <FooterCol
          title="Company"
          items={[...navigation.company, ...navigation.resources]}
        />
      </div>

      <div className="border-t border-white/5">
        <div className="container-x py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-inkSoft/55">
          <div>© {new Date().getFullYear()} G&apos;Secure Labs · A Gateway Group Company. All rights reserved.</div>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-signal">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-signal">Terms of Use</Link>
            <a href="mailto:consult@gsecurelabs.com" className="hover:text-signal flex items-center gap-1.5">
              <Mail size={12} /> consult@gsecurelabs.com
            </a>
            <span className="hidden md:flex items-center gap-1.5">
              <MapPin size={12} /> Kista · Stockholm · Sweden
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: { name: string; href: string }[] }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-wider text-inkSoft/50 mb-3 font-mono">{title}</div>
      <ul className="space-y-2">
        {items.map((i) => (
          <li key={i.href}>
            <Link href={i.href} className="text-sm text-inkSoft/75 hover:text-signal transition">
              {i.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
