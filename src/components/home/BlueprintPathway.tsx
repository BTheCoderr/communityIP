import { CTAButton } from "@/components/CTAButton";
import { DISCLAIMERS } from "@/lib/content/disclaimers";
import { BlueprintGrid } from "@/components/brand/BlueprintGrid";

const steps = [
  {
    num: "01",
    title: "Start with an idea",
    detail: "You don't need a prototype or a lawyer yet — just curiosity and something worth protecting.",
  },
  {
    num: "02",
    title: "Understand what kind of IP may apply",
    detail: "Patent, trademark, copyright, or trade secret? Learn the basics before making big decisions.",
  },
  {
    num: "03",
    title: "Prepare your invention story",
    detail: "Document what you've built, who it's for, and what makes it different — our readiness tools help.",
  },
  {
    num: "04",
    title: "Connect with support",
    detail: "Mentors, volunteers, and community partners who understand the IP access gap.",
  },
  {
    num: "05",
    title: "Take the next step toward protection",
    detail: "Apply for help, explore low-cost options, or get referred — subject to capacity and eligibility.",
  },
];

export function BlueprintPathway() {
  return (
    <section className="relative overflow-hidden border-b border-navy-900/10 bg-navy-900 py-20 text-cream sm:py-28">
      <BlueprintGrid dense className="absolute inset-0 opacity-[0.08]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-xl">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-blueprint-100">
            From idea to protection
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl lg:text-5xl text-balance">
            The pathway most inventors never see
          </h2>
        </div>

        <div className="relative mt-16">
          {/* Blueprint connector line */}
          <div
            className="absolute left-6 top-0 hidden h-full w-px bg-blueprint-100/30 sm:block lg:left-8"
            aria-hidden
          />

          <ol className="space-y-0">
            {steps.map((step, i) => (
              <li
                key={step.num}
                className="relative grid gap-4 border-t border-cream/10 py-8 sm:grid-cols-[4rem_1fr] sm:gap-8 lg:grid-cols-[5rem_1fr] lg:py-10"
              >
                <div className="relative flex items-start sm:justify-center">
                  <span className="relative z-10 flex h-12 w-12 items-center justify-center border-2 border-blueprint-100/40 bg-navy-900 font-mono text-sm font-bold text-stamp-600 sm:h-14 sm:w-14">
                    {step.num}
                  </span>
                  {i < steps.length - 1 && (
                    <span
                      className="absolute left-1/2 top-14 hidden h-[calc(100%+1rem)] w-px -translate-x-1/2 bg-blueprint-100/20 sm:block"
                      aria-hidden
                    />
                  )}
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold sm:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-base leading-relaxed text-cream/70">
                    {step.detail}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-cream/10 pt-10 sm:flex-row sm:items-center">
          <CTAButton href="/readiness-checker" size="lg" variant="accent">
            Start the readiness checker
          </CTAButton>
          <CTAButton
            href="/for-inventors"
            variant="secondary"
            size="lg"
            className="border-cream/30 bg-transparent text-cream hover:bg-cream/10 hover:text-cream"
          >
            For inventors
          </CTAButton>
        </div>
        <p className="mt-6 max-w-xl text-xs leading-relaxed text-cream/50">
          {DISCLAIMERS.formShort} {DISCLAIMERS.noGuarantee}
        </p>
      </div>
    </section>
  );
}
