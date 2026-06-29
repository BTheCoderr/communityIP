import Link from "next/link";
import { cn } from "@/lib/utils";
import { AUDIENCE_PATHS } from "@/lib/content/audiences";

export function GetInvolvedCards({ className }: { className?: string }) {
  return (
    <div className={cn("grid gap-px bg-community-700/10 sm:grid-cols-2", className)}>
      {AUDIENCE_PATHS.map((card) => (
        <Link
          key={card.title}
          href={card.href}
          className="group flex flex-col bg-cream p-8 transition-colors hover:bg-community-50"
        >
          <span className="stamp-label mb-5 w-fit border-sage-600/50 bg-sage-100/40 text-[9px] text-sage-700">
            {card.stamp}
          </span>
          <card.icon
            className="mb-4 h-7 w-7 text-community-600/80"
            aria-hidden
          />
          <h3 className="font-display text-xl font-bold text-forest-900">
            {card.title}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-forest-800/70">
            {card.description}
          </p>
          <span className="mt-5 font-mono text-xs uppercase tracking-wider text-community-700 group-hover:underline">
            {card.cta} →
          </span>
        </Link>
      ))}
    </div>
  );
}
