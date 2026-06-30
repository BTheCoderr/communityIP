import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "default" | "light";
  className?: string;
  linked?: boolean;
  /** Icon-only mark for tight mobile headers */
  compact?: boolean;
}

export function Logo({
  variant = "default",
  className,
  linked = true,
  compact = false,
}: LogoProps) {
  const iconSrc = "/brand/community-ip-icon.svg";
  const fullSrc =
    variant === "light"
      ? "/brand/community-ip-logo-light.svg"
      : "/brand/community-ip-logo.svg";

  const brand = (
    <span
      className={cn(
        "inline-flex shrink-0 items-center overflow-visible",
        className
      )}
    >
      {compact ? (
        <Image
          src={iconSrc}
          alt="Community IP"
          width={40}
          height={40}
          className="h-8 w-8 shrink-0 sm:h-9 sm:w-9"
          priority
        />
      ) : (
        <Image
          src={fullSrc}
          alt="Community IP"
          width={200}
          height={50}
          className="h-9 w-auto max-w-none shrink-0 sm:h-10"
          priority
        />
      )}
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
