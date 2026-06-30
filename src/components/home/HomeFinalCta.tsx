import { CTAButton } from "@/components/CTAButton";
import { home } from "@/lib/content/home";

export function HomeFinalCta() {
  const { finalCta } = home;

  return (
    <section className="bg-community-700 py-16 sm:py-20">
      <div className="section-narrow text-center">
        <h2 className="font-display text-3xl font-semibold text-cream sm:text-4xl text-balance">
          {finalCta.heading}
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-lg leading-relaxed text-cream/80">
          {finalCta.body}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <CTAButton href="/apply" size="lg">
            {finalCta.primaryLabel}
          </CTAButton>
          <CTAButton
            href="/contact"
            variant="secondary"
            size="lg"
            className="border-cream/30 bg-transparent text-cream hover:bg-cream/10 hover:text-cream"
          >
            {finalCta.secondaryLabel}
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
