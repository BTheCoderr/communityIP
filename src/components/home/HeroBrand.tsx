import { CTAButton } from "@/components/CTAButton";
import { home } from "@/lib/content/home";
import { DISCLAIMERS } from "@/lib/content/disclaimers";
import { BlueprintGrid } from "@/components/brand/BlueprintGrid";
import { StampLabel } from "@/components/brand/StampLabel";
import { HeroImage } from "@/components/home/HeroImage";

export function HeroBrand() {
  return (
    <section className="relative overflow-hidden border-b-2 border-navy-900/10 bg-cream">
      <BlueprintGrid dense className="absolute inset-0 opacity-60" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="grid grid-cols-1 items-start gap-12 xl:grid-cols-2 xl:gap-16">
          <div className="relative z-10 min-w-0">
            <StampLabel variant="access" className="mb-6">
              Access to IP
            </StampLabel>
            <h1 className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-navy-900 sm:text-5xl lg:text-[3.75rem]">
              {home.headlineLine1}
              <span className="mt-2 block text-blueprint-700">
                {home.headlineLine2}
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy-800/80 sm:text-xl">
              {home.subheadline}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <CTAButton href="/apply" size="lg">
                {home.ctaPrimary}
              </CTAButton>
              <CTAButton href="/donate" variant="secondary" size="lg">
                {home.ctaSecondary}
              </CTAButton>
            </div>
            <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
              {DISCLAIMERS.heroLine}
            </p>
          </div>

          <div className="relative mx-auto w-full min-w-0 max-w-lg xl:max-w-none">
            <HeroImage />
          </div>
        </div>
      </div>
    </section>
  );
}
