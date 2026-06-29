import Link from "next/link";
import { CTAButton } from "@/components/CTAButton";
import { ACCESS_STATS } from "@/lib/site";
import { ArrowRight } from "lucide-react";

export function ResearchTeaser() {
  return (
    <section className="border-b border-community-700/10 bg-community-50/60 py-16 sm:py-20">
      <div className="section-wide">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div>
            <p className="eyebrow">Research</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-forest-900 sm:text-4xl text-balance">
              Who gets to invent?
            </h2>
            <p className="prose-lead mt-4">{ACCESS_STATS.intro}</p>
            <Link href="/research" className="link-arrow mt-6 text-sm">
              Read the access gap report
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-community-700/10 bg-white p-6">
              <p className="font-display text-4xl font-semibold text-forest-900">
                20<span className="text-community-600">%</span>
              </p>
              <p className="mt-2 text-sm leading-relaxed text-forest-800/75">
                of inventors are people of color
              </p>
            </div>
            <div className="rounded-xl border border-community-700/10 bg-white p-6">
              <p className="font-display text-4xl font-semibold text-forest-900">
                12.8<span className="text-sage-600">%</span>
              </p>
              <p className="mt-2 text-sm leading-relaxed text-forest-800/75">
                of inventors are women
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <CTAButton href="/research" variant="secondary">
            Explore research
          </CTAButton>
          <CTAButton href="/apply">Get IP Help</CTAButton>
        </div>
      </div>
    </section>
  );
}
