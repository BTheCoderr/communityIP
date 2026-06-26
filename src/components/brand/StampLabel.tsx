import { cn } from "@/lib/utils";

type StampVariant = "idea" | "protect" | "mentor" | "access" | "patent" | "prototype" | "community" | "learn";

const variants: Record<StampVariant, string> = {
  idea: "text-stamp-600 border-stamp-600/60 bg-stamp-100/50",
  protect: "text-blueprint-700 border-blueprint-600/50 bg-blueprint-50",
  mentor: "text-teal-700 border-teal-600/50 bg-teal-600/10",
  access: "text-navy-900 border-navy-900/40 bg-cream-100",
  patent: "text-blueprint-800 border-blueprint-700/60 bg-blueprint-50",
  prototype: "text-stamp-600 border-stamp-600/50 bg-stamp-100/40",
  community: "text-teal-700 border-teal-600/40 bg-cream-50",
  learn: "text-blueprint-800 border-blueprint-700/40 bg-blueprint-50/80",
};

interface StampLabelProps {
  children: string;
  variant?: StampVariant;
  className?: string;
  rotate?: boolean;
}

export function StampLabel({
  children,
  variant = "access",
  className,
  rotate = true,
}: StampLabelProps) {
  return (
    <span
      className={cn(
        "stamp-label",
        variants[variant],
        !rotate && "rotate-0",
        className
      )}
    >
      {children}
    </span>
  );
}
