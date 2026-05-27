import { CTAButton } from "@/components/CTAButton";
import { Shield } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-teal-100/60 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-amber-100/50 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-teal-700">
              501(c)(3) nonprofit · IP access for underserved inventors
            </p>

            <h1 className="font-heading text-4xl font-bold leading-[1.1] tracking-tight text-slate-800 sm:text-5xl lg:text-[3.25rem] text-balance">
              Your idea matters.{" "}
              <span className="text-teal-700">
                You shouldn&apos;t have to figure out IP alone.
              </span>
            </h1>

            <p className="mt-5 text-lg leading-relaxed text-muted-foreground sm:text-xl text-balance">
              Learn about patents, trademarks, and copyrights — then get
              connected with education, mentoring, and support options you can
              actually access.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <CTAButton href="/readiness-checker" size="lg">
                Check if you&apos;re ready for IP help
              </CTAButton>
              <CTAButton href="/education" variant="secondary" size="lg">
                Explore free resources
              </CTAButton>
            </div>

            <p className="mt-5 flex items-start gap-2 text-sm text-muted-foreground">
              <Shield className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" aria-hidden />
              Educational support and intake only · Not legal advice
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-white p-7 shadow-soft sm:p-8">
            <p className="font-heading text-sm font-semibold uppercase tracking-wider text-teal-700">
              Why this platform exists
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-700">
              Entire communities are locked out of intellectual property — not
              for lack of talent, but for lack of guidance and affordable
              access.
            </p>
            <div className="mt-6 space-y-4">
              <StatRow stat="12.8%" label="of U.S. patent inventors are women" />
              <StatRow
                stat="3×"
                label="patent rate gap by race (USPTO estimates)"
              />
              <StatRow
                stat="Lost Einsteins"
                label="Talented kids from low-income backgrounds who never become inventors"
              />
            </div>
            <p className="mt-5 text-xs text-muted-foreground">
              Sources: USPTO, Stanford Equality of Opportunity Project
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatRow({ stat, label }: { stat: string; label: string }) {
  return (
    <div className="flex items-baseline gap-3 border-b border-border pb-4 last:border-0 last:pb-0">
      <span className="shrink-0 font-heading text-2xl font-bold text-teal-700 sm:text-3xl">
        {stat}
      </span>
      <span className="text-sm leading-snug text-slate-600">{label}</span>
    </div>
  );
}
