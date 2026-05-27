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
        "group flex flex-col rounded-2xl border border-border bg-white p-6 shadow-card transition-all hover:border-teal-200 hover:shadow-soft",
        className
      )}
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-700 transition-colors group-hover:bg-teal-100">
        <Icon className="h-6 w-6" aria-hidden />
      </div>
      <h3 className="font-heading text-lg font-bold text-slate-800">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-teal-700 group-hover:gap-2 transition-all">
        {cta}
        <ArrowRight className="h-4 w-4" aria-hidden />
      </span>
    </Link>
  );
}
