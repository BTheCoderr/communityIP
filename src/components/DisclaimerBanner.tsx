import { AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { DISCLAIMERS } from "@/lib/content/disclaimers";

interface DisclaimerBannerProps {
  className?: string;
  variant?: "default" | "compact";
}

export function DisclaimerBanner({
  className,
  variant = "default",
}: DisclaimerBannerProps) {
  if (variant === "compact") {
    return (
      <p
        className={cn(
          "text-xs leading-relaxed text-muted-foreground",
          className
        )}
      >
        {DISCLAIMERS.compact}
      </p>
    );
  }

  return (
    <div
      className={cn(
        "flex gap-3 border-2 border-stamp-600/30 bg-stamp-100/40 p-4 sm:p-5",
        className
      )}
      role="note"
      aria-label="Disclaimer"
    >
      <AlertCircle
        className="mt-0.5 h-5 w-5 shrink-0 text-stamp-600"
        aria-hidden
      />
      <div className="text-sm leading-relaxed text-navy-900">
        <p className="font-semibold">Important information</p>
        <p className="mt-1 text-navy-800/80">{DISCLAIMERS.full}</p>
        <p className="mt-3 text-navy-800/70">{DISCLAIMERS.noGuarantee}</p>
      </div>
    </div>
  );
}
