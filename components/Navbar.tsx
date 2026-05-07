"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X, Search } from "lucide-react";
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
      <div className="container-x flex items-center justify-between h-16 lg:h-20">
        <Logo />

        <nav className="hidden lg:flex items-center gap-1" onMouseLeave={() => setOpen(null)}>
          <NavItem
            label="Services"
            id="services"
            open={open}
            setOpen={setOpen}
            columns={[
              { title: "Enterprise Solutions", items: navigation.services.slice(0, 5) },
              { title: "Foundations", items: navigation.services.slice(5) }
            ]}
          />
          <NavItem
            label="Industries"
            id="industries"
            open={open}
            setOpen={setOpen}
            columns={[{ title: "Sectors we serve", items: navigation.industries }]}
          />
          <NavItem
            label="Resources"
            id="resources"
            open={open}
            setOpen={setOpen}
            columns={[{ title: "Knowledge", items: navigation.resources }]}
          />
          <NavItem
            label="Company"
            id="company"
            open={open}
            setOpen={setOpen}
            columns={[{ title: "About G'Secure", items: navigation.company }]}
          />
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <button className="p-2 text-inkSoft/70 hover:text-signal transition" aria-label="Search">
            <Search size={18} />
          </button>
          <Link href="/contact" className="btn btn-primary text-sm">
            Talk to Sales
          </Link>
        </div>

        <button
          className="lg:hidden p-2 text-inkSoft"
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
            className="lg:hidden bg-navy-deep border-t border-white/5 overflow-hidden"
          >
            <div className="container-x py-6 space-y-6">
              {[
                { title: "Services", items: navigation.services },
                { title: "Industries", items: navigation.industries },
                { title: "Resources", items: navigation.resources },
                { title: "Company", items: navigation.company }
              ].map((g) => (
                <div key={g.title}>
                  <div className="text-xs uppercase tracking-wider text-inkSoft/50 mb-2">{g.title}</div>
                  <div className="flex flex-col gap-1">
                    {g.items.map((it) => (
                      <Link
                        key={it.href}
                        href={it.href}
                        className="py-1.5 text-inkSoft hover:text-signal"
                        onClick={() => setMobileOpen(false)}
                      >
                        {it.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
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

type NavCol = { title: string; items: { name: string; href: string }[] };

function NavItem({
  label,
  id,
  open,
  setOpen,
  columns
}: {
  label: string;
  id: string;
  open: string | null;
  setOpen: (s: string | null) => void;
  columns: NavCol[];
}) {
  const isOpen = open === id;
  return (
    <div className="relative" onMouseEnter={() => setOpen(id)}>
      <button
        className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition ${
          isOpen ? "text-signal" : "text-inkSoft/85 hover:text-inkSoft"
        }`}
      >
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
            <div className="glass-strong rounded-xl p-5 min-w-[460px] grid grid-cols-2 gap-4 shadow-2xl">
              {columns.map((c) => (
                <div key={c.title}>
                  <div className="text-[11px] uppercase tracking-wider text-signal/80 mb-2 font-mono">
                    {c.title}
                  </div>
                  <ul className="space-y-1">
                    {c.items.map((i) => (
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
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
