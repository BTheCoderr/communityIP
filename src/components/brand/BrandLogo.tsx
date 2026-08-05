import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteLogo } from "@/lib/content/cms";

/**
 * Regina's original Community IP logo: green badge, tree-in-lightbulb icon,
 * COMMUNITY IP wordmark below. Source: community-ip-original-logo-400.png
 */
const LOGO_MARK = "/brand/community-ip-mark.png";

export interface BrandLogoProps {
  className?: string;
  linked?: boolean;
  /** Icon-only mark for very narrow headers (< 320px) */
  iconOnly?: boolean;
  /** Footer: logo on exact brand-green surface so badge edges blend */
  variant?: "default" | "footer";
  /** Override logo src (defaults to CMS site settings) */
  src?: string;
}

export function BrandLogo({
  className,
  linked = true,
  iconOnly = false,
  variant = "default",
  src,
}: BrandLogoProps) {
  const logoSrc = src ?? siteLogo;
  const isFooter = variant === "footer";

  const brand = (
    <span
      className={cn(
        "inline-flex shrink-0 items-center overflow-visible",
        isFooter && "rounded-md bg-brand-green",
        className
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={iconOnly ? LOGO_MARK : logoSrc}
        alt="Community IP"
        className={cn(
          "block max-w-none shrink-0 object-contain",
          iconOnly
            ? "h-9 w-9 rounded-md"
            : isFooter
              ? "h-12 w-auto sm:h-14"
              : "h-11 w-auto min-[480px]:h-12 md:h-[3.25rem]"
        )}
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
      className={cn(
        "inline-flex shrink-0 items-center overflow-visible",
        isFooter && "rounded-md bg-brand-green"
      )}
      aria-label="Community IP — Home"
    >
      {brand}
    </Link>
  );
}
