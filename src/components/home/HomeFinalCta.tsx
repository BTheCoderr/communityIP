import { CTAButton } from "@/components/CTAButton";
import { DISCLAIMERS } from "@/lib/content/disclaimers";

export function HomeFinalCta() {
  return (
    <section className="border-b border-community-700/10 bg-community-700 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="font-display text-3xl font-bold text-cream sm:text-4xl text-balance">
          {DISCLAIMERS.ctaHeading}
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-lg text-cream/75">
          {DISCLAIMERS.ctaBody}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <CTAButton href="/apply" size="lg" variant="accent">
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
        <p className="mx-auto mt-6 max-w-md text-xs leading-relaxed text-cream/50">
          {DISCLAIMERS.ctaLegal}
        </p>
      </div>
    </section>
  );
}
