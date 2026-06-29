import Link from "next/link";
import { cn } from "@/lib/utils";
import { AUDIENCE_PATHS } from "@/lib/content/audiences";
import { ArrowRight } from "lucide-react";

export function GetInvolvedCards({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "grid gap-5 sm:grid-cols-2 lg:gap-6",
        className
      )}
    >
      {AUDIENCE_PATHS.map((card) => (
        <Link
          key={card.title}
          href={card.href}
          className="nonprofit-card group flex flex-col"
        >
          <card.icon
            className="mb-4 h-6 w-6 text-community-600"
            aria-hidden
          />
          <h3 className="font-display text-xl font-semibold text-forest-900">
            {card.title}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-forest-800/75">
            {card.description}
          </p>
          <span className="link-arrow mt-5 text-sm">
            {card.cta}
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden
            />
          </span>
        </Link>
      ))}
    </div>
  );
}
