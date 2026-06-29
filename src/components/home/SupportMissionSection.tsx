import { CTAButton } from "@/components/CTAButton";
import { donate, SPOTFUND_URL } from "@/lib/site";
import { home } from "@/lib/content/home";

export function SupportMissionSection() {
  const { supportSection } = home;

  return (
    <section className="border-b border-community-700/10 bg-white py-16 sm:py-20">
      <div className="section-narrow text-center">
        <p className="eyebrow">{supportSection.eyebrow}</p>
        <h2 className="mt-3 font-display text-3xl font-semibold text-forest-900 sm:text-4xl text-balance">
          {donate.title}
        </h2>
        <p className="prose-lead mx-auto mt-5 max-w-2xl">
          {supportSection.description}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <CTAButton href={SPOTFUND_URL} size="lg">
            {donate.ctaPrimary}
          </CTAButton>
          <CTAButton href="/donate" variant="secondary" size="lg">
            {donate.ctaSecondary}
          </CTAButton>
        </div>
        <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
          {supportSection.footnote}
        </p>
      </div>
    </section>
  );
}
