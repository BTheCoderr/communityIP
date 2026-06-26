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
    <div className={cn("bg-cream p-8", className)}>
      {Icon && (
        <Icon className="mb-3 h-6 w-6 text-blueprint-700" aria-hidden />
      )}
      <p className="font-display text-4xl font-bold text-navy-900 sm:text-5xl">
        {value}
      </p>
      <p className="mt-2 text-sm font-medium leading-relaxed text-navy-800/80">
        {label}
      </p>
      {source && (
        <p className="mt-3 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
          {source}
        </p>
      )}
    </div>
  );
}
