import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImpactMetricProps {
  value: string;
  label: string;
  source?: string;
  icon?: LucideIcon;
  className?: string;
}

export function ImpactMetric({
  value,
  label,
  source,
  icon: Icon,
  className,
}: ImpactMetricProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-white p-6 shadow-card",
        className
      )}
    >
      {Icon && (
        <Icon className="mb-3 h-6 w-6 text-teal-700" aria-hidden />
      )}
      <p className="font-heading text-3xl font-bold text-teal-800 sm:text-4xl">
        {value}
      </p>
      <p className="mt-2 text-sm font-medium leading-relaxed text-slate-700">
        {label}
      </p>
      {source && (
        <p className="mt-2 text-xs text-muted-foreground">{source}</p>
      )}
    </div>
  );
}
