import { GetInvolvedCards } from "@/components/GetInvolvedCards";

export function GetInvolvedBand() {
  return (
    <section className="section-editorial bg-cream border-b border-navy-900/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-blueprint-600">
            Join the movement
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-navy-900 sm:text-4xl text-balance">
            Inventors, volunteers, partners, and donors — there&apos;s a place for you
          </h2>
        </div>
        <GetInvolvedCards className="mt-12" />
      </div>
    </section>
  );
}
