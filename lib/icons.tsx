import {
  Radar,
  Shield,
  ScrollText,
  Bug,
  Boxes,
  Sparkles,
  Wrench,
  HeartPulse,
  Banknote,
  Zap,
  Antenna
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  radar: Radar,
  shield: Shield,
  scrolltext: ScrollText,
  bug: Bug,
  boxes: Boxes,
  sparkles: Sparkles,
  wrench: Wrench,
  heartpulse: HeartPulse,
  banknote: Banknote,
  zap: Zap,
  antenna: Antenna
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? Shield;
}
