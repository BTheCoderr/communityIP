import Link from "next/link";
import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CTAButtonProps extends ButtonProps {
  href?: string;
}

function isExternal(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

export function CTAButton({
  href,
  children,
  variant = "default",
  size = "default",
  className,
  ...props
}: CTAButtonProps) {
  if (href) {
    if (isExternal(href)) {
      return (
        <Button
          variant={variant}
          size={size}
          className={cn(className)}
          asChild
        >
          <a href={href} target="_blank" rel="noopener noreferrer">
            {children}
          </a>
        </Button>
      );
    }

    return (
      <Button
        variant={variant}
        size={size}
        className={cn(className)}
        asChild
      >
        <Link href={href}>{children}</Link>
      </Button>
    );
  }

  return (
    <Button variant={variant} size={size} className={cn(className)} {...props}>
      {children}
    </Button>
  );
}
