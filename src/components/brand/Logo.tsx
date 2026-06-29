import Link from "next/link";
import { cn } from "@/lib/utils";
import { LogoMark } from "@/components/brand/LogoMark";

interface LogoProps {
  variant?: "default" | "light";
  className?: string;
  linked?: boolean;
  /** Slightly smaller wordmark for tight mobile headers */
  compact?: boolean;
}

export function Logo({
  variant = "default",
  className,
  linked = true,
  compact = false,
}: LogoProps) {
  const brand = (
    <span
      className={cn(
        "inline-flex shrink-0 items-center gap-2.5 overflow-visible",
        className
      )}
    >
      <LogoMark
        variant={variant}
        className={cn(compact ? "h-8 w-8" : "h-9 w-9 sm:h-10 sm:w-10")}
      />
      <span
        className={cn(
          "whitespace-nowrap font-display font-semibold leading-none",
          compact
            ? "text-[0.8125rem] tracking-[0.02em]"
            : "text-[0.9375rem] tracking-[0.03em] sm:text-base sm:tracking-[0.04em] lg:text-lg",
          variant === "light" ? "text-cream" : "text-community-700"
        )}
      >
        Community IP
      </span>
    </span>
  );

  if (!linked) {
    return brand;
  }

  return (
    <Link
      href="/"
      className="inline-flex shrink-0 items-center overflow-visible"
      aria-label="Community IP — Home"
    >
      {brand}
    </Link>
  );
}
