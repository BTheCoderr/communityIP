import Link from "next/link";
import { StampLabel } from "@/components/brand/StampLabel";
import {
  BookOpen,
  ClipboardCheck,
  Users,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";

const journeys = [
  {
    stamp: "learn" as const,
    label: "01 · Learn",
    title: "Understand IP before you spend a dollar",
    description:
      "Plain-language guides, workshops, and awareness events on patents, trademarks, and copyrights — built for first-time inventors, not law students.",
    href: "/education",
    cta: "Browse education",
    icon: BookOpen,
    note: "Start here if you're asking \"what even is a patent?\"",
  },
  {
    stamp: "idea" as const,
    label: "02 · Prepare",
    title: "Know where you stand",
    description:
      "Use the IP Readiness Checker, learn invention basics, and get clear next-step guidance before you commit time or money.",
    href: "/readiness-checker",
    cta: "Take the readiness checker",
    icon: ClipboardCheck,
    note: "No account required",
  },
  {
    stamp: "mentor" as const,
    label: "03 · Connect",
    title: "Find people who've been there",
    description:
      "Mentorship, volunteers, patent professionals, and community partners who help underserved inventors navigate the path forward.",
    href: "/volunteer",
    cta: "Explore connections",
    icon: Users,
    note: "Volunteers & partners welcome",
  },
  {
    stamp: "protect" as const,
    label: "04 · Support",
    title: "Get through the first door",
    description:
      "Low-cost services and needs-based funding when available — subject to program capacity and eligibility.",
    href: "/apply",
    cta: "Apply for help",
    icon: HeartHandshake,
    note: "Support depends on availability",
  },
];

export function InventorJourney() {
  return (
    <section className="section-editorial bg-cream border-b border-navy-900/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-blueprint-600">
            How Community IP helps
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-navy-900 sm:text-4xl lg:text-5xl text-balance">
            An inventor&apos;s journey — not a menu of services
          </h2>
          <p className="mt-5 text-lg text-navy-800/75">
            We meet you where you are — with education, mentoring, and support
            when we can, subject to program capacity.
          </p>
        </div>

        <div className="mt-16 space-y-0">
          {journeys.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="group grid gap-6 border-t-2 border-navy-900/10 py-10 transition-colors hover:bg-cream-50 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:gap-10 lg:py-12"
            >
              <div className="flex items-start gap-4 sm:flex-col sm:items-start">
                <StampLabel variant={item.stamp}>{item.stamp}</StampLabel>
                <item.icon
                  className="hidden h-8 w-8 text-blueprint-600/60 sm:block"
                  aria-hidden
                />
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  {item.label}
                </p>
                <h3 className="mt-2 font-display text-2xl font-bold text-navy-900 group-hover:text-blueprint-700 sm:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-navy-800/75">
                  {item.description}
                </p>
                <p className="mt-3 font-annotate text-xl text-stamp-600/90">
                  {item.note}
                </p>
              </div>
              <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-blueprint-700 group-hover:underline">
                {item.cta}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
