import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "default" | "light";
  className?: string;
  iconOnly?: boolean;
  linked?: boolean;
}

export function Logo({
  variant = "default",
  className,
  iconOnly = false,
  linked = true,
}: LogoProps) {
  const src =
    variant === "light"
      ? "/brand/community-ip-logo-light.svg"
      : iconOnly
        ? "/brand/community-ip-icon.svg"
        : "/brand/community-ip-logo.svg";

  const width = iconOnly ? 40 : variant === "light" ? 240 : 220;
  const height = iconOnly ? 40 : 52;

  const image = (
    <Image
      src={src}
      alt="Community IP"
      width={width}
      height={height}
      className={cn("h-auto w-auto", iconOnly ? "h-10 w-10" : "h-11 sm:h-12", className)}
      priority
    />
  );

  if (!linked) return image;

  return (
    <Link href="/" className="group inline-flex shrink-0 items-center">
      {image}
    </Link>
  );
}
