import { ACCESS_STATS, research } from "@/lib/content/cms";

export function AccessGapReport() {
  const { lostEinsteinsSection } = research;

  return (
    <section className="section-editorial border-b border-community-700/10 bg-white">
      <div className="section-wide">
        <p className="eyebrow">{research.reportEyebrow}</p>
        <h2 className="mt-3 font-display text-3xl font-semibold text-forest-900 sm:text-4xl">
          {research.reportTitle}
        </h2>

        <div className="mt-12 grid gap-10 border-t border-community-700/10 pt-12 lg:grid-cols-2 lg:gap-16">
          {research.chartSections.map((chart) => (
            <div key={chart.caption}>
              <p className="font-display text-6xl font-semibold tabular-nums text-forest-900 sm:text-7xl">
                {chart.value.replace("%", "")}
                <span className="text-community-600">%</span>
              </p>
              <p className="mt-4 max-w-sm text-xl font-medium leading-snug text-forest-800">
                {chart.caption}
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                Source: {chart.source}
              </p>
              <div className="mt-6 h-2 w-full max-w-md overflow-hidden rounded-full bg-community-100">
                <div
                  className="h-full rounded-full bg-community-600"
                  style={{ width: `${chart.percent}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-community-700/10 bg-community-50 p-8 sm:p-10">
          <p className="text-sm font-semibold text-community-700">
            {lostEinsteinsSection.source}
          </p>
          <blockquote className="mt-5 font-display text-xl font-medium leading-relaxed text-forest-900 sm:text-2xl text-balance">
            &ldquo;{lostEinsteinsSection.quote}&rdquo;
          </blockquote>
          <p className="mt-5 max-w-3xl leading-relaxed text-forest-800/80">
            {lostEinsteinsSection.note}
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

        {research.sources.length > 0 && (
          <div className="mt-10 border-t border-community-700/10 pt-8">
            <p className="text-sm font-semibold text-forest-900">Sources</p>
            <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
              {research.sources.map((source) => (
                <li key={source}>{source}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
