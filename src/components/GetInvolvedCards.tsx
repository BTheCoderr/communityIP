import Link from "next/link";
import {
  Heart,
  Handshake,
  Lightbulb,
  Users,
  LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface InvolveCard {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  cta: string;
  stamp: string;
}

const cards: InvolveCard[] = [
  {
    icon: Lightbulb,
    title: "Inventors",
    description:
      "Take the readiness checker or apply for help to learn what IP support may fit your situation.",
    href: "/readiness-checker",
    cta: "Check readiness",
    stamp: "IDEA",
  },
  {
    icon: Users,
    title: "Volunteers",
    description:
      "Attorneys, agents, law students, and mentors can lend expertise to underserved inventors.",
    href: "/volunteer",
    cta: "Volunteer with us",
    stamp: "MENTOR",
  },
  {
    icon: Handshake,
    title: "Partners",
    description:
      "Universities, incubators, and community orgs can co-host events and refer inventors.",
    href: "/partners",
    cta: "Become a partner",
    stamp: "ACCESS",
  },
  {
    icon: Heart,
    title: "Donors",
    description:
      "Support education workshops, mentoring access, and needs-based IP programs.",
    href: "/donate",
    cta: "Support our mission",
    stamp: "PROTECT",
  },
];

export function GetInvolvedCards({ className }: { className?: string }) {
  return (
    <div className={cn("grid gap-px bg-navy-900/10 sm:grid-cols-2", className)}>
      {cards.map((card) => (
        <Link
          key={card.title}
          href={card.href}
          className="group flex flex-col bg-cream p-8 transition-colors hover:bg-cream-50"
        >
          <span className="stamp-label mb-5 w-fit border-stamp-600/50 text-stamp-600 bg-stamp-100/40 text-[9px]">
            {card.stamp}
          </span>
          <card.icon
            className="mb-4 h-7 w-7 text-blueprint-600/70"
            aria-hidden
          />
          <h3 className="font-display text-xl font-bold text-navy-900">
            {card.title}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-800/70">
            {card.description}
          </p>
          <span className="mt-5 font-mono text-xs uppercase tracking-wider text-blueprint-700 group-hover:underline">
            {card.cta} →
          </span>
        </Link>
      ))}
    </div>
  );
}
