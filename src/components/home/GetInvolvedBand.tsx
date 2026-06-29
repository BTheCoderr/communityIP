import { GetInvolvedCards } from "@/components/GetInvolvedCards";

export function GetInvolvedBand() {
  return (
    <section className="section-editorial border-b border-community-700/10 bg-cream">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-community-600">
            How to get involved
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-forest-900 sm:text-4xl text-balance">
            Clear paths for inventors, volunteers, partners, and funders
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-forest-800/75">
            Community IP is a nonprofit access organization. Choose the path
            that fits you — no platform account required.
          </p>
        </div>
        <GetInvolvedCards className="mt-12" />
      </div>
    </section>
  );
}
