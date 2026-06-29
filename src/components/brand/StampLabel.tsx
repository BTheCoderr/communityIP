import { cn } from "@/lib/utils";

type StampVariant = "idea" | "protect" | "mentor" | "access" | "patent" | "prototype" | "community" | "learn";

const variants: Record<StampVariant, string> = {
  idea: "text-sage-700 border-sage-600/50 bg-sage-100/60",
  protect: "text-community-700 border-community-600/50 bg-community-50",
  mentor: "text-community-600 border-community-500/50 bg-community-50",
  access: "text-forest-900 border-community-700/40 bg-community-50",
  patent: "text-community-800 border-community-700/60 bg-community-50",
  prototype: "text-sage-700 border-sage-600/50 bg-sage-100/50",
  community: "text-community-700 border-community-600/40 bg-cream-50",
  learn: "text-community-800 border-community-700/40 bg-community-50/80",
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
