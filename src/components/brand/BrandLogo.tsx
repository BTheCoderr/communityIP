import Link from "next/link";
import { cn } from "@/lib/utils";
import { LogoMark } from "@/components/brand/LogoMark";

export interface BrandLogoProps {
  variant?: "default" | "light";
  className?: string;
  linked?: boolean;
  /** Icon only — use on very tight mobile headers when full label won't fit */
  iconOnly?: boolean;
}

export function BrandLogo({
  variant = "default",
  className,
  linked = true,
  iconOnly = false,
}: BrandLogoProps) {
  const brand = (
    <span
      className={cn(
        "inline-flex shrink-0 items-center gap-2.5 overflow-visible sm:gap-3",
        className
      )}
    >
      <LogoMark
        variant={variant}
        className="h-8 w-8 shrink-0 sm:h-9 sm:w-9"
      />
      {!iconOnly ? (
        <span
          className={cn(
            "shrink-0 whitespace-nowrap font-display text-sm font-semibold leading-none tracking-wide sm:text-base lg:text-lg",
            variant === "light" ? "text-cream" : "text-community-700"
          )}
        >
          Community IP
        </span>
      ) : null}
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
