import Link from "next/link";
import { cn } from "@/lib/utils";
import { LogoMark } from "@/components/brand/LogoMark";

interface LogoProps {
  variant?: "default" | "light";
  className?: string;
  linked?: boolean;
  responsive?: boolean;
}

export function Logo({
  variant = "default",
  className,
  linked = true,
}: LogoProps) {
  const content = (
    <span
      className={cn(
        "inline-flex min-w-0 items-center gap-2 sm:gap-2.5",
        className
      )}
    >
      <LogoMark variant={variant} />
      <span
        className={cn(
          "font-display text-sm font-semibold leading-tight tracking-[0.03em] sm:text-base sm:tracking-[0.05em] lg:text-lg",
          variant === "light" ? "text-cream" : "text-community-700"
        )}
      >
        Community IP
      </span>
    </span>
  );

  if (!linked) return content;

  return (
    <Link
      href="/"
      className="inline-flex min-w-0 shrink-0 items-center"
      aria-label="Community IP — Home"
    >
      {content}
    </Link>
  );
}
