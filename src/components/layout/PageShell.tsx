import { cn } from "@/lib/utils";

interface PageShellProps {
  children: React.ReactNode;
  className?: string;
  narrow?: boolean;
}

export function PageShell({ children, className, narrow }: PageShellProps) {
  return (
    <div
      className={cn(
        "border-b border-navy-900/10 bg-cream py-16 sm:py-24",
        className
      )}
    >
      <div
        className={cn(
          "mx-auto px-4 sm:px-6",
          narrow ? "max-w-3xl" : "max-w-6xl"
        )}
      >
        {children}
      </div>
    </div>
  );
}
