"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X, Search, Globe2 } from "lucide-react";
import { Logo } from "./Logo";
import { navigation } from "@/lib/content";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-navy-deep/85 backdrop-blur-lg border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between h-16 lg:h-20 gap-4">
        <Logo />

        <nav className="hidden xl:flex items-center gap-0.5" onMouseLeave={() => setOpen(null)}>
          {/* 1. Services — mega-menu with 3 columns including industries */}
          <Dropdown id="services" label="Services" open={open} setOpen={setOpen} width="min-w-[700px]">
            <div className="grid grid-cols-3 gap-5">
              <DropdownColumn
                title="Enterprise Solutions"
                items={navigation.services.slice(0, 4)}
              />
              <DropdownColumn
                title="Foundations"
                items={[
                  ...navigation.services.slice(4),
                ]}
              />
              <DropdownColumn title="By Industry" items={navigation.industries} accent="cyan" />
            </div>
          </Dropdown>

          {/* 2. Resources */}
          <Dropdown id="resources" label="Resources" open={open} setOpen={setOpen} width="min-w-[260px]">
            <DropdownColumn title="Knowledge & tools" items={navigation.resources} />
          </Dropdown>

          {/* 3. Partners — direct */}
          <DirectLink href="/partners" label="Partners" />

          {/* 4. About Us — direct */}
          <DirectLink href="/about" label="About Us" />

          {/* 5. Contact Us — direct */}
          <DirectLink href="/contact" label="Contact Us" />

          {/* 6. Global */}
          <Dropdown id="global" label="Global" icon={<Globe2 size={13} />} open={open} setOpen={setOpen} width="min-w-[400px]">
            <div className="space-y-5">
              <div>
                <div className="text-[11px] uppercase tracking-wider text-signal/80 mb-2 font-mono">
                  Regions
                </div>
                <div className="space-y-1">
                  {navigation.global.regions.map((r) => (
                    <Link
                      key={r.name}
                      href={r.href}
                      className="block px-3 py-2 rounded-md hover:bg-white/5 text-sm transition group"
                    >
                      <div className="text-inkSoft group-hover:text-signal font-medium">{r.name}</div>
                      <div className="text-[11px] text-inkSoft/55 mt-0.5">{r.note}</div>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="pt-4 border-t border-white/5">
                <div className="text-[11px] uppercase tracking-wider text-signal/80 mb-2 font-mono">
                  Language
                </div>
                <div className="grid grid-cols-2 gap-1">
                  {navigation.global.languages.map((l) => (
                    <Link
                      key={l.code}
                      href={l.href}
                      className="flex items-center justify-between px-3 py-2 rounded-md hover:bg-white/5 transition group"
                    >
                      <span className="text-sm text-inkSoft/85 group-hover:text-signal">{l.name}</span>
                      <span className="text-[10px] font-mono text-inkSoft/45 tracking-wider">{l.code}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </Dropdown>
        </nav>

        <div className="hidden xl:flex items-center gap-3 shrink-0">
          <button className="p-2 text-inkSoft/70 hover:text-signal transition" aria-label="Search">
            <Search size={18} />
          </button>
          <Link href="/contact" className="btn btn-primary text-sm">
            Talk to Sales
          </Link>
        </div>

        <button
          className="xl:hidden p-2 text-inkSoft"
          onClick={() => setMobileOpen((m) => !m)}
          aria-label="Open menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-navy-deep border-t border-white/5 overflow-hidden"
          >
            <div className="container-x py-6 space-y-6 max-h-[80vh] overflow-y-auto">
              <MobileGroup title="Services" items={navigation.services} onNav={() => setMobileOpen(false)} />
              <MobileGroup title="By Industry" items={navigation.industries} onNav={() => setMobileOpen(false)} />
              <MobileGroup title="Resources" items={navigation.resources} onNav={() => setMobileOpen(false)} />
              <div>
                <div className="text-xs uppercase tracking-wider text-inkSoft/50 mb-2 font-mono">Company</div>
                <div className="flex flex-col gap-1">
                  <Link href="/partners" className="py-1.5 text-inkSoft hover:text-signal" onClick={() => setMobileOpen(false)}>Partners</Link>
                  <Link href="/about" className="py-1.5 text-inkSoft hover:text-signal" onClick={() => setMobileOpen(false)}>About Us</Link>
                  <Link href="/contact" className="py-1.5 text-inkSoft hover:text-signal" onClick={() => setMobileOpen(false)}>Contact Us</Link>
                </div>
              </div>
              <MobileGroup title="Global · Regions" items={navigation.global.regions} onNav={() => setMobileOpen(false)} />
              <Link href="/contact" className="btn btn-primary w-full justify-center" onClick={() => setMobileOpen(false)}>
                Talk to Sales
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Dropdown({
  id,
  label,
  icon,
  open,
  setOpen,
  children,
  width = "min-w-[300px]"
}: {
  id: string;
  label: string;
  icon?: React.ReactNode;
  open: string | null;
  setOpen: (s: string | null) => void;
  children: React.ReactNode;
  width?: string;
}) {
  const isOpen = open === id;
  return (
    <div className="relative" onMouseEnter={() => setOpen(id)}>
      <button
        className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium transition ${
          isOpen ? "text-signal" : "text-inkSoft/85 hover:text-inkSoft"
        }`}
      >
        {icon}
        {label}
        <ChevronDown size={14} className={`transition ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.18 }}
            className="absolute left-1/2 -translate-x-1/2 top-full pt-3"
          >
            <div className={`glass-strong rounded-xl p-5 ${width} shadow-2xl`}>{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function DropdownColumn({
  title,
  items,
  accent = "signal"
}: {
  title: string;
  items: { name: string; href: string }[];
  accent?: "signal" | "cyan";
}) {
  const accentClass = accent === "cyan" ? "text-cyan/85" : "text-signal/80";
  return (
    <div>
      <div className={`text-[11px] uppercase tracking-wider mb-2 font-mono ${accentClass}`}>
        {title}
      </div>
      <ul className="space-y-1">
        {items.map((i) => (
          <li key={i.href}>
            <Link
              href={i.href}
              className="block px-3 py-2 rounded-md text-inkSoft/90 hover:text-signal hover:bg-white/5 text-sm transition"
            >
              {i.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function DirectLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="px-3 py-2 text-sm font-medium text-inkSoft/85 hover:text-signal transition"
    >
      {label}
    </Link>
  );
}

function MobileGroup({
  title,
  items,
  onNav
}: {
  title: string;
  items: { name: string; href: string }[];
  onNav: () => void;
}) {
  return (
    <div>
      <div className="text-xs uppercase tracking-wider text-inkSoft/50 mb-2 font-mono">{title}</div>
      <div className="flex flex-col gap-1">
        {items.map((it) => (
          <Link
            key={it.href}
            href={it.href}
            className="py-1.5 text-inkSoft hover:text-signal"
            onClick={onNav}
          >
            {it.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
