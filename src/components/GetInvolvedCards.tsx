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
  accent?: "teal" | "amber";
}

const cards: InvolveCard[] = [
  {
    icon: Lightbulb,
    title: "Inventors",
    description:
      "Take the readiness checker or apply for help to learn what IP support may fit your situation.",
    href: "/readiness-checker",
    cta: "Check readiness",
    accent: "teal",
  },
  {
    icon: Users,
    title: "Volunteers",
    description:
      "Attorneys, agents, law students, and mentors can lend expertise to underserved inventors.",
    href: "/volunteer",
    cta: "Volunteer with us",
    accent: "amber",
  },
  {
    icon: Handshake,
    title: "Partners",
    description:
      "Universities, incubators, and community orgs can co-host events and refer inventors.",
    href: "/partners",
    cta: "Become a partner",
    accent: "teal",
  },
  {
    icon: Heart,
    title: "Donors",
    description:
      "Support education workshops, mentoring access, and needs-based IP programs.",
    href: "/donate",
    cta: "Support our mission",
    accent: "amber",
  },
];

export function GetInvolvedCards({ className }: { className?: string }) {
  return (
    <div className={cn("grid gap-6 sm:grid-cols-2", className)}>
      {cards.map((card) => (
        <Link
          key={card.title}
          href={card.href}
          className="group flex flex-col rounded-2xl border border-border bg-white p-6 shadow-card transition-all hover:border-teal-200 hover:shadow-soft"
        >
          <div
            className={cn(
              "mb-4 flex h-12 w-12 items-center justify-center rounded-xl",
              card.accent === "amber"
                ? "bg-amber-50 text-amber-600"
                : "bg-teal-50 text-teal-700"
            )}
          >
            <card.icon className="h-6 w-6" aria-hidden />
          </div>
          <h3 className="font-heading text-lg font-bold text-slate-800">
            {card.title}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
            {card.description}
          </p>
          <span className="mt-4 text-sm font-semibold text-teal-700 group-hover:underline">
            {card.cta} →
          </span>
        </Link>
      ))}
    </div>
  );
}
