import Image from "next/image";
import { partners } from "@/lib/site";
import { cn } from "@/lib/utils";

type PartnerLogosProps = {
  className?: string;
  labelClassName?: string;
  logoClassName?: string;
  align?: "left" | "center";
};

export function PartnerLogos({
  className,
  labelClassName,
  logoClassName,
  align = "left",
}: PartnerLogosProps) {
  if (!partners.items.length) {
    return null;
  }

  const isCentered = align === "center";

  return (
    <div className={className}>
      <p
        className={cn(
          "text-xs font-medium uppercase tracking-wide text-muted-foreground",
          isCentered && "text-center",
          labelClassName
        )}
      >
        {partners.label}
      </p>
      <div
        className={cn(
          "mt-3 flex flex-wrap items-center gap-x-10 gap-y-6",
          isCentered && "justify-center"
        )}
      >
        {partners.items.map((partner) => {
          const logo = (
            <Image
              src={partner.logo}
              alt={partner.name}
              width={200}
              height={90}
              className={cn("h-auto w-44", logoClassName)}
            />
          );

          return partner.url ? (
            <a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-sm transition-opacity hover:opacity-80"
            >
              {logo}
            </a>
          ) : (
            <div key={partner.name} className="inline-block">
              {logo}
            </div>
          );
        })}
      </div>
    </div>
  );
}
