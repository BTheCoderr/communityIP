import { AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

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
        Educational information only — not legal advice. No attorney-client
        relationship is created.
      </p>
    );
  }

  return (
    <div
      className={cn(
        "flex gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4 sm:p-5",
        className
      )}
      role="note"
      aria-label="Disclaimer"
    >
      <AlertCircle
        className="mt-0.5 h-5 w-5 shrink-0 text-amber-600"
        aria-hidden
      />
      <div className="text-sm leading-relaxed text-amber-900">
        <p className="font-semibold">Important: This is not legal advice</p>
        <p className="mt-1">
          Community IP provides educational information and intake support only.
          Nothing on this platform constitutes legal advice, and submitting a
          form does not create an attorney-client relationship. We cannot
          guarantee services, funding, or legal representation.
        </p>
      </div>
    </div>
  );
}
