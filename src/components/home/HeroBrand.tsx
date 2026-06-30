import { CTAButton } from "@/components/CTAButton";
import { home } from "@/lib/content/home";
import { HeroImage } from "@/components/home/HeroImage";

export function HeroBrand() {
  return (
    <section className="border-b border-community-700/10 bg-cream">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="min-w-0">
            <p className="eyebrow">{home.nonprofitTag}</p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-forest-900 sm:text-5xl text-balance">
              {home.heroTitle}
              <span className="mt-2 block text-community-700">
                {home.heroSubtitle}
              </span>
            </h1>
            <p className="prose-lead mt-6 max-w-xl">{home.subheadline}</p>
            {home.practitionerNote ? (
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-forest-800/75">
                {home.practitionerNote}
              </p>
            ) : null}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <CTAButton href={home.ctaPrimary.href} size="lg">
                {home.ctaPrimary.label}
              </CTAButton>
              <CTAButton href={home.ctaSecondary.href} variant="secondary" size="lg">
                {home.ctaSecondary.label}
              </CTAButton>
            </div>
          </div>

          <div className="mx-auto w-full min-w-0 max-w-xl lg:max-w-none">
            <HeroImage />
          </div>
        </div>
      </div>
    </section>
  );
}
