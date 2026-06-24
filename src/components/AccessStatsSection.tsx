import { SectionHeading } from "@/components/SectionHeading";
import { ImpactMetric } from "@/components/ImpactMetric";
import { ACCESS_STATS } from "@/lib/site";

export function AccessStatsSection() {
  return (
    <section className="border-y border-border bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="The access gap"
          title={ACCESS_STATS.headline}
          description={ACCESS_STATS.intro}
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ACCESS_STATS.metrics.map((metric) => (
            <ImpactMetric
              key={metric.label}
              value={metric.value}
              label={metric.label}
              source={metric.source}
            />
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-teal-200 bg-teal-50 p-6 sm:p-8">
          <p className="text-base leading-relaxed text-teal-900">
            {ACCESS_STATS.lostEinsteins}
          </p>
        </div>
      </div>
    </section>
  );
}
