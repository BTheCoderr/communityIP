import { cn } from "@/lib/utils";

interface BlueprintGridProps {
  className?: string;
  dense?: boolean;
  children?: React.ReactNode;
}

export function BlueprintGrid({
  className,
  dense = false,
  children,
}: BlueprintGridProps) {
  return (
    <div
      className={cn(
        dense ? "blueprint-grid-dense" : "blueprint-grid",
        className
      )}
    >
      {children}
    </div>
  );
}
