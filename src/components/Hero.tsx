import { CTAButton } from "@/components/CTAButton";
import { Shield, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-teal-100/60 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-amber-100/50 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-4 py-1.5 text-sm font-medium text-teal-800">
              <Sparkles className="h-4 w-4" aria-hidden />
              501(c)(3) nonprofit · Founded by patent professionals
            </div>

            <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-slate-800 sm:text-5xl lg:text-[3.25rem] text-balance">
              Your idea matters. You shouldn&apos;t have to figure out IP alone.
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl text-balance">
              Community IP helps underserved inventors and entrepreneurs learn
              about patents, trademarks, and copyrights, then connect with
              education, mentoring, and support options they can actually
              access.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <CTAButton href="/readiness-checker" size="lg">
                Check if you&apos;re ready for IP help
              </CTAButton>
              <CTAButton href="/education" variant="secondary" size="lg">
                Explore free resources
              </CTAButton>
            </div>

            <p className="mt-6 flex items-start gap-2 text-sm text-muted-foreground">
              <Shield className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" aria-hidden />
              501(c)(3) nonprofit · Educational support and intake only · No
              legal advice
            </p>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-border bg-white p-8 shadow-soft">
              <p className="font-heading text-sm font-semibold uppercase tracking-wider text-teal-700">
                The access gap is real
              </p>
              <div className="mt-6 space-y-6">
                <StatRow
                  stat="12.8%"
                  label="of U.S. patent inventors are women"
                />
                <StatRow
                  stat="3×"
                  label="higher patent rate for white Americans vs. Black Americans"
                />
                <StatRow
                  stat="10×"
                  label="more likely to invent if born in the top 1% of earners"
                />
              </div>
              <p className="mt-6 rounded-xl bg-warm-100 p-4 text-sm leading-relaxed text-slate-700">
                Researchers call talented kids from low-income backgrounds who
                never become inventors{" "}
                <strong className="text-slate-800">&ldquo;Lost Einsteins.&rdquo;</strong>{" "}
                Community IP exists to change that story.
              </p>
              <p className="mt-3 text-xs text-muted-foreground">
                Sources: USPTO, Stanford Equality of Opportunity Project
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatRow({ stat, label }: { stat: string; label: string }) {
  return (
    <div className="flex items-baseline gap-4 border-b border-border pb-4 last:border-0 last:pb-0">
      <span className="font-heading text-3xl font-bold text-teal-700">
        {stat}
      </span>
      <span className="text-sm leading-snug text-slate-600">{label}</span>
    </div>
  );
}
