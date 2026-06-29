import { mission } from "@/lib/site";

export function MissionBlock() {
  return (
    <section className="border-b border-community-700/10 bg-community-700 text-cream">
      <div className="section-wide py-16 sm:py-24">
        <p className="text-sm font-semibold uppercase tracking-wide text-sage-200">
          Our mission
        </p>
        <blockquote className="mt-4 font-display text-3xl font-semibold leading-snug sm:text-4xl lg:text-[2.75rem] text-balance">
          {mission.statement}
        </blockquote>
        <div className="mt-8 h-px w-16 bg-cream/25" />
        <p className="prose-lead mt-8 max-w-3xl text-cream/85">
          {mission.extended}
        </p>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-cream/70">
          {mission.democratize}
        </p>
        <p className="mt-8 text-sm font-medium text-sage-200">
          {mission.nonprofitNote}
        </p>
      </div>
    </section>
  );
}
