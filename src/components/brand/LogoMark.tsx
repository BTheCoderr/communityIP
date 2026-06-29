import { cn } from "@/lib/utils";

interface LogoMarkProps {
  className?: string;
  variant?: "default" | "light";
}

/** Tree-in-lightbulb mark — scales cleanly at any size */
export function LogoMark({ className, variant = "default" }: LogoMarkProps) {
  const stroke = variant === "light" ? "#FAFAF7" : "#14532D";
  const fill = variant === "light" ? "#8FAF9A" : "#6B9478";
  const bulbFill =
    variant === "light" ? "rgba(250,250,247,0.12)" : "rgba(20,83,45,0.08)";

  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-9 w-9 shrink-0 sm:h-10 sm:w-10", className)}
      aria-hidden
    >
      <rect
        x="1"
        y="1"
        width="38"
        height="38"
        rx="6"
        fill={variant === "light" ? "rgba(250,250,247,0.1)" : "#14532D"}
        stroke={variant === "light" ? "rgba(250,250,247,0.25)" : "transparent"}
        strokeWidth="1"
      />
      <path
        d="M20 8c-5.5 0-10 4.5-10 10 0 3.3 1.6 6.2 4 8.1V30h12v-3.9c2.4-1.9 4-4.8 4-8.1 0-5.5-4.5-10-10-10z"
        fill={bulbFill}
        stroke={stroke}
        strokeWidth="1.2"
      />
      <path
        d="M20 26V18"
        stroke={fill}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <ellipse cx="14" cy="17" rx="2" ry="3.5" fill={fill} transform="rotate(-25 14 17)" />
      <ellipse cx="26" cy="17" rx="2" ry="3.5" fill={fill} transform="rotate(25 26 17)" />
      <ellipse cx="20" cy="13" rx="1.8" ry="3" fill={fill} />
      <rect x="16" y="30" width="8" height="2" rx="0.5" fill={stroke} fillOpacity="0.5" />
      <rect x="17" y="33" width="6" height="1.5" rx="0.5" fill={stroke} fillOpacity="0.35" />
    </svg>
  );
}
