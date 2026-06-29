import { ACCESS_STATS } from "@/lib/site";
import { StampLabel } from "@/components/brand/StampLabel";
import { BlueprintGrid } from "@/components/brand/BlueprintGrid";

export function AccessGapReport() {
  return (
    <section className="section-editorial relative overflow-hidden border-b border-navy-900/10 bg-cream-50">
      <BlueprintGrid className="absolute inset-0 opacity-50" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-blueprint-600">
              Access Gap Report · 2024–2025
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-900 sm:text-4xl">
              Who gets to invent?
            </h2>
          </div>
          <StampLabel variant="protect" className="self-start sm:self-auto">
            Research
          </StampLabel>
        </div>

        {/* Primary stats — big editorial numbers */}
        <div className="mt-14 grid gap-8 border-t-2 border-navy-900/15 pt-14 lg:grid-cols-2">
          <div className="relative">
            <p className="font-display text-7xl font-bold tabular-nums text-navy-900 sm:text-8xl lg:text-9xl">
              20<span className="text-community-600">%</span>
            </p>
            <p className="mt-4 max-w-sm font-display text-2xl font-semibold leading-snug text-navy-800">
              Only 20% of inventors are people of color.
            </p>
            <p className="mt-3 font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Source: USPTO / industry estimates
            </p>
            {/* Visual bar */}
            <div className="mt-8 h-3 w-full max-w-md overflow-hidden bg-navy-900/10">
              <div className="h-full w-[20%] bg-community-600" />
            </div>
          </div>

          <div className="relative">
            <p className="font-display text-7xl font-bold tabular-nums text-navy-900 sm:text-8xl lg:text-9xl">
              12.8<span className="text-sage-600">%</span>
            </p>
            <p className="mt-4 max-w-sm font-display text-2xl font-semibold leading-snug text-navy-800">
              Only 12.8% of inventors are women.
            </p>
            <p className="mt-3 font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Source: USPTO Progress and Potential report
            </p>
            <div className="mt-8 h-3 w-full max-w-md overflow-hidden bg-navy-900/10">
              <div className="h-full w-[12.8%] bg-sage-600" />
            </div>
          </div>
        </div>

        {/* Lost Einsteins callout */}
        <div className="patent-file mt-16 p-8 sm:p-10">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-blueprint-700">
            Lost Einsteins · Stanford Equality of Opportunity Project, 2017
          </p>
          <blockquote className="mt-6 font-display text-xl font-semibold leading-relaxed text-navy-900 sm:text-2xl lg:text-3xl text-balance">
            &ldquo;The top 5% highest-scoring low-income kids were less likely to
            eventually become inventors than below-average math students from
            affluent families.&rdquo;
          </blockquote>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-navy-800/75">
            The study&apos;s authors call these kids{" "}
            <span className="font-annotate text-2xl text-community-600">
              Lost Einsteins
            </span>
            — talented young people who never get the access or exposure to
            become inventors.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
            <span className="border border-navy-900/15 px-3 py-1.5">USPTO</span>
            <span className="border border-navy-900/15 px-3 py-1.5">
              Stanford Equality of Opportunity Project
            </span>
          </div>
        </div>

        {/* Additional metrics row */}
        <div className="mt-12 grid gap-px bg-navy-900/10 sm:grid-cols-2">
          {ACCESS_STATS.metrics.slice(1, 3).map((m) => (
            <div key={m.label} className="bg-cream-50 p-6 sm:p-8">
              <p className="font-display text-4xl font-bold text-navy-900">
                {m.value}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-navy-800/80">
                {m.label}
              </p>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                {m.source}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
