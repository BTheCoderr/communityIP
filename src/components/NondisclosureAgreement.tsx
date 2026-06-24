import { ndaSections, NDA_AGREE_LABEL, NDA_TITLE } from "@/lib/nondisclosure";
import { cn } from "@/lib/utils";

interface NondisclosureAgreementProps {
  compact?: boolean;
  className?: string;
}

export function NondisclosureAgreement({
  compact = false,
  className,
}: NondisclosureAgreementProps) {
  return (
    <div className={cn("rounded-2xl border border-border bg-warm-50", className)}>
      <div
        className={cn(
          "overflow-y-auto px-5 py-4 sm:px-6 sm:py-5",
          compact ? "max-h-64" : "max-h-[28rem]"
        )}
      >
        <h3 className="font-heading text-lg font-bold text-slate-800">
          {NDA_TITLE}
        </h3>

        <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate-700">
          {ndaSections.map((section) => {
            if (section.type === "intro") {
              return <p key="intro">{section.text}</p>;
            }

            return (
              <div key={section.number}>
                <p>
                  <span className="font-semibold text-slate-800">
                    {section.number}.{" "}
                  </span>
                  {section.text}
                </p>
                {section.subItems && (
                  <ol className="mt-2 list-inside list-decimal space-y-1 pl-2 text-slate-600">
                    {section.subItems.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ol>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="border-t border-border bg-white px-5 py-4 sm:px-6">
        <p className="text-sm font-medium leading-relaxed text-slate-800">
          {NDA_AGREE_LABEL}
        </p>
      </div>
    </div>
  );
}
