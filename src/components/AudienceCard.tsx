import Link from "next/link";
import { ArrowRight, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface AudienceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  cta?: string;
  className?: string;
}

export function AudienceCard({
  icon: Icon,
  title,
  description,
  href,
  cta = "Learn more",
  className,
}: AudienceCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group flex flex-col border-2 border-navy-900/10 bg-cream p-6 transition-colors hover:border-blueprint-600/30 hover:bg-cream-50",
        className
      )}
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center border border-navy-900/10 bg-blueprint-50 text-blueprint-700">
        <Icon className="h-6 w-6" aria-hidden />
      </div>
      <h3 className="font-display text-lg font-bold text-navy-900">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-800/70">
        {description}
      </p>
      <span className="mt-4 inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-blueprint-700 transition-all group-hover:gap-2">
        {cta}
        <ArrowRight className="h-4 w-4" aria-hidden />
      </span>
    </Link>
  );
}
