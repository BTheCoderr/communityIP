import { CTAButton } from "@/components/CTAButton";
import { DISCLAIMERS } from "@/lib/content/disclaimers";

export function HomeFinalCta() {
  return (
    <section className="bg-community-700 py-16 sm:py-20">
      <div className="section-narrow text-center">
        <h2 className="font-display text-3xl font-semibold text-cream sm:text-4xl text-balance">
          {DISCLAIMERS.ctaHeading}
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-lg leading-relaxed text-cream/80">
          {DISCLAIMERS.ctaBody}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <CTAButton href="/apply" size="lg">
            Get IP Help
          </CTAButton>
          <CTAButton
            href="/contact"
            variant="secondary"
            size="lg"
            className="border-cream/30 bg-transparent text-cream hover:bg-cream/10 hover:text-cream"
          >
            Contact Community IP
          </CTAButton>
        </div>
        <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-cream/55">
          {DISCLAIMERS.ctaLegal}
        </p>
      </div>
    </section>
  );
}
