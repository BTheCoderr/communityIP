import Link from "next/link";
import { CTAButton } from "@/components/CTAButton";
import { home } from "@/lib/content/home";
import { ACCESS_STATS } from "@/lib/site";
import { ArrowRight } from "lucide-react";

export function ResearchTeaser() {
  const { researchTeaser } = home;
  const teaserMetrics = ["~20%", "12.8%"]
    .map((value) => ACCESS_STATS.metrics.find((m) => m.value === value))
    .filter((m): m is NonNullable<typeof m> => Boolean(m));

  return (
    <section className="border-b border-community-700/10 bg-community-50/60 py-16 sm:py-20">
      <div className="section-wide">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div>
            <p className="eyebrow">{researchTeaser.eyebrow}</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-forest-900 sm:text-4xl text-balance">
              {researchTeaser.title}
            </h2>
            <p className="prose-lead mt-4">{ACCESS_STATS.intro}</p>
            <Link href="/research" className="link-arrow mt-6 text-sm">
              {researchTeaser.linkText}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {teaserMetrics.map((metric) => (
              <div
                key={metric.value}
                className="rounded-xl border border-community-700/10 bg-white p-6"
              >
                <p className="font-display text-4xl font-semibold text-forest-900">
                  {metric.value.replace("%", "").replace("~", "")}
                  <span className="text-community-600">%</span>
                </p>
                <p className="mt-2 text-sm leading-relaxed text-forest-800/75">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <CTAButton href="/research" variant="secondary">
            {researchTeaser.primaryCta}
          </CTAButton>
          <CTAButton href="/apply">{researchTeaser.secondaryCta}</CTAButton>
        </div>
      </div>
    </section>
  );
}
