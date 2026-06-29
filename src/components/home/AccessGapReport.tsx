import { ACCESS_STATS, research } from "@/lib/content/cms";

export function AccessGapReport() {
  return (
    <section className="section-editorial border-b border-community-700/10 bg-white">
      <div className="section-wide">
        <p className="eyebrow">{research.reportEyebrow}</p>
        <h2 className="mt-3 font-display text-3xl font-semibold text-forest-900 sm:text-4xl">
          {research.reportTitle}
        </h2>

        <div className="mt-12 grid gap-10 border-t border-community-700/10 pt-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="font-display text-6xl font-semibold tabular-nums text-forest-900 sm:text-7xl">
              20<span className="text-community-600">%</span>
            </p>
            <p className="mt-4 max-w-sm text-xl font-medium leading-snug text-forest-800">
              Only 20% of inventors are people of color.
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              Source: USPTO / industry estimates
            </p>
            <div className="mt-6 h-2 w-full max-w-md overflow-hidden rounded-full bg-community-100">
              <div className="h-full w-[20%] rounded-full bg-community-600" />
            </div>
          </div>

          <div>
            <p className="font-display text-6xl font-semibold tabular-nums text-forest-900 sm:text-7xl">
              12.8<span className="text-sage-600">%</span>
            </p>
            <p className="mt-4 max-w-sm text-xl font-medium leading-snug text-forest-800">
              Only 12.8% of inventors are women.
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              Source: USPTO Progress and Potential report
            </p>
            <div className="mt-6 h-2 w-full max-w-md overflow-hidden rounded-full bg-community-100">
              <div className="h-full w-[12.8%] rounded-full bg-sage-600" />
            </div>
          </div>
        </div>

        <div className="mt-14 rounded-2xl border border-community-700/10 bg-community-50 p-8 sm:p-10">
          <p className="text-sm font-semibold text-community-700">
            {research.lostEinsteinsSource}
          </p>
          <blockquote className="mt-5 font-display text-xl font-medium leading-relaxed text-forest-900 sm:text-2xl text-balance">
            &ldquo;{research.lostEinsteinsQuote}&rdquo;
          </blockquote>
          <p className="mt-5 max-w-3xl leading-relaxed text-forest-800/80">
            {research.lostEinsteinsNote}
          </p>
          <p className="mt-6 text-xs text-muted-foreground">
            {ACCESS_STATS.lostEinsteins}
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {ACCESS_STATS.metrics.slice(1, 3).map((m) => (
            <div
              key={m.label}
              className="rounded-xl border border-community-700/10 bg-cream p-6 sm:p-8"
            >
              <p className="font-display text-4xl font-semibold text-forest-900">
                {m.value}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-forest-800/80">
                {m.label}
              </p>
              <p className="mt-3 text-xs text-muted-foreground">{m.source}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
