"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import type { Service } from "@/lib/content";
import { getIcon } from "@/lib/icons";

export function ServiceCard({ service, index = 0 }: { service: Service; index?: number }) {
  const Icon = getIcon(service.icon);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
    >
      <Link
        href={`/services/${service.slug}`}
        className="group glass card-hover rounded-xl p-6 lg:p-7 h-full flex flex-col relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-40 h-40 bg-signal/0 group-hover:bg-signal/8 transition-all duration-500 blur-3xl rounded-full -mr-10 -mt-10" />
        <div className="relative">
          <div className="w-11 h-11 rounded-md bg-signal/10 border border-signal/25 grid place-items-center text-signal mb-5 group-hover:scale-105 transition">
            <Icon size={20} strokeWidth={1.6} />
          </div>
          <div className="text-[11px] uppercase tracking-wider text-signal/85 font-mono mb-1">
            {service.short}
          </div>
          <h3 className="text-xl font-semibold text-inkSoft mb-2 leading-tight">{service.name}</h3>
          <p className="text-sm text-inkSoft/65 leading-relaxed mb-5">{service.tagline}</p>
          <div className="flex items-center text-sm text-inkSoft/80 group-hover:text-signal transition mt-auto">
            <span>Explore service</span>
            <ArrowUpRight size={15} className="ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
