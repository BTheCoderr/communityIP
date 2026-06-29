import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2
        className={cn(
          "font-display text-3xl font-semibold text-forest-900 sm:text-4xl text-balance",
          eyebrow && "mt-3"
        )}
      >
        {title}
      </h2>
      {description && (
        <p className="prose-lead mt-4 text-balance">{description}</p>
      )}
    </div>
  );
}
