import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs text-inkSoft/55 flex items-center gap-1.5 flex-wrap">
      <Link href="/" className="hover:text-signal">Home</Link>
      {items.map((it, i) => (
        <span key={i} className="flex items-center gap-1.5">
          <ChevronRight size={12} className="opacity-50" />
          {it.href ? (
            <Link href={it.href} className="hover:text-signal">{it.label}</Link>
          ) : (
            <span className="text-inkSoft/85">{it.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
