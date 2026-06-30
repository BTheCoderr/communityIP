import Link from "next/link";
import { cn } from "@/lib/utils";

/** Original Community IP horizontal logo — icon between COMMUNITY and IP */
const LOGO_ASSETS = {
  default: {
    full: "/brand/community-ip-full-logo.svg",
    mark: "/brand/community-ip-logo-mark.svg",
  },
  light: {
    full: "/brand/community-ip-full-logo-light.svg",
    mark: "/brand/community-ip-logo-mark-light.svg",
  },
} as const;

export interface BrandLogoProps {
  variant?: "default" | "light";
  className?: string;
  linked?: boolean;
  /** Icon-only mark for mobile headers */
  iconOnly?: boolean;
}

export function BrandLogo({
  variant = "default",
  className,
  linked = true,
  iconOnly = false,
}: BrandLogoProps) {
  const assets = LOGO_ASSETS[variant];

  const brand = (
    <span
      className={cn(
        "inline-flex shrink-0 items-center overflow-visible",
        className
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={iconOnly ? assets.mark : assets.full}
        alt="Community IP"
        className={cn(
          "block max-w-none shrink-0 object-contain object-left",
          iconOnly
            ? "h-9 w-9 sm:h-10 sm:w-10"
            : "h-9 w-auto sm:h-10 md:h-11"
        )}
        style={iconOnly ? undefined : { width: "auto", maxWidth: "none" }}
        decoding="async"
      />
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
