import Link from "next/link";
import { ArrowRight, BookOpen, Clock, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ResourceCardProps {
  title: string;
  description: string;
  href?: string;
  category?: string;
  readingTime?: string;
  whyItMatters?: string;
  icon?: LucideIcon;
  className?: string;
}

export function ResourceCard({
  title,
  description,
  href = "#",
  category,
  readingTime = "5 min read",
  whyItMatters,
  icon: Icon = BookOpen,
  className,
}: ResourceCardProps) {
  const content = (
    <>
      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
          <Icon className="h-5 w-5" aria-hidden />
        </div>
        {category && (
          <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700">
            {category}
          </span>
        )}
      </div>
      <h3 className="font-heading text-lg font-bold text-slate-800">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
      {whyItMatters && (
        <p className="mt-3 text-xs leading-relaxed text-slate-600 line-clamp-2">
          <span className="font-semibold text-teal-800">Why read this: </span>
          {whyItMatters}
        </p>
      )}
      <div className="mt-4 flex items-center justify-between">
        <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
          <Clock className="h-3.5 w-3.5" aria-hidden />
          {readingTime}
        </span>
        {href !== "#" && (
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-teal-700 group-hover:gap-2 transition-all">
            Read guide
            <ArrowRight className="h-4 w-4" aria-hidden />
          </span>
        )}
      </div>
    </>
  );

  if (href === "#") {
    return (
      <article
        className={cn(
          "flex flex-col rounded-2xl border border-border bg-white p-6 shadow-card",
          className
        )}
      >
        {content}
      </article>
    );
  }

  return (
    <Link
      href={href}
      className={cn(
        "group flex flex-col rounded-2xl border border-border bg-white p-6 shadow-card transition-all hover:border-teal-200 hover:shadow-soft",
        className
      )}
    >
      {content}
    </Link>
  );
}
