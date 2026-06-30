import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Regina's original Community IP logo: green badge, tree-in-lightbulb icon,
 * COMMUNITY IP wordmark below. Source: community-ip-original-logo.png
 */
const LOGO_ASSETS = {
  /** Full original logo (green background + icon + wordmark) */
  full: "/brand/community-ip-original-logo-400.png",
  /** Cropped icon mark from original — mobile header */
  mark: "/brand/community-ip-mark.png",
} as const;

export interface BrandLogoProps {
  className?: string;
  linked?: boolean;
  /** Icon-only mark for narrow mobile headers */
  iconOnly?: boolean;
}

export function BrandLogo({
  className,
  linked = true,
  iconOnly = false,
}: BrandLogoProps) {
  const brand = (
    <span
      className={cn(
        "inline-flex shrink-0 items-center overflow-visible",
        className
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={iconOnly ? LOGO_ASSETS.mark : LOGO_ASSETS.full}
        alt="Community IP"
        className={cn(
          "block max-w-none shrink-0 object-contain",
          iconOnly
            ? "h-9 w-9 rounded-md sm:h-10 sm:w-10"
            : "h-10 w-auto sm:h-11 md:h-12"
        )}
        style={{ width: iconOnly ? undefined : "auto", maxWidth: "none" }}
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
