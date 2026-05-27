import Link from "next/link";
import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CTAButtonProps extends ButtonProps {
  href?: string;
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
