import { CTAButton } from "@/components/CTAButton";
import { DISCLAIMERS } from "@/lib/content/disclaimers";

export function HomeFinalCta() {
  return (
    <section className="border-b border-navy-900/10 bg-navy-900 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="font-display text-3xl font-bold text-cream sm:text-4xl text-balance">
          {DISCLAIMERS.ctaHeading}
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-lg text-cream/75">
          {DISCLAIMERS.ctaBody}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <CTAButton href="/readiness-checker" size="lg" variant="accent">
            Take the IP Readiness Checker
          </CTAButton>
          <CTAButton
            href="/apply"
            variant="secondary"
            size="lg"
            className="border-cream/30 bg-transparent text-cream hover:bg-cream/10 hover:text-cream"
          >
            Apply for Help
          </CTAButton>
        </div>
        <p className="mx-auto mt-6 max-w-md text-xs leading-relaxed text-cream/50">
          {DISCLAIMERS.ctaLegal}
        </p>
      </div>
    </section>
  );
}
