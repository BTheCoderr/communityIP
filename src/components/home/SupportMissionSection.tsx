import { CTAButton } from "@/components/CTAButton";
import { donate, SPOTFUND_URL } from "@/lib/site";
import { BlueprintGrid } from "@/components/brand/BlueprintGrid";
import { StampLabel } from "@/components/brand/StampLabel";

export function SupportMissionSection() {
  return (
    <section className="relative overflow-hidden border-b border-navy-900/10 bg-blueprint-50 py-20 sm:py-28">
      <BlueprintGrid className="absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <StampLabel variant="protect" className="mb-6">
          Support
        </StampLabel>
        <h2 className="font-display text-3xl font-bold text-navy-900 sm:text-4xl lg:text-5xl text-balance">
          {donate.title}
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-navy-800/80">
          Your contribution funds education workshops, mentoring access, and
          needs-based IP support for inventors who might otherwise be left out
          — subject to program capacity.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <CTAButton href={SPOTFUND_URL} size="lg" variant="accent">
            {donate.ctaPrimary}
          </CTAButton>
          <CTAButton href="/donate" variant="secondary" size="lg">
            {donate.ctaSecondary}
          </CTAButton>
        </div>
        <p className="mx-auto mt-8 max-w-md text-xs leading-relaxed text-muted-foreground">
          Donations support our nonprofit mission. Contributions are not tax
          advice — consult your advisor. Program support depends on availability
          and eligibility.
        </p>
      </div>
    </section>
  );
}
