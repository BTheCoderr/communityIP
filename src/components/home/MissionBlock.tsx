import { mission } from "@/lib/site";
import { StampLabel } from "@/components/brand/StampLabel";

export function MissionBlock() {
  return (
    <section className="relative border-b-2 border-navy-900/10 bg-navy-900 text-cream">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28">
        <StampLabel variant="access" className="mb-8 border-cream/40 text-cream bg-navy-800/50">
          Our Mission
        </StampLabel>
        <blockquote className="font-display text-3xl font-bold leading-snug tracking-tight sm:text-4xl lg:text-5xl text-balance">
          {mission.statement}
        </blockquote>
        <div className="editorial-rule mt-10 bg-gradient-to-r from-cream/0 via-cream/30 to-cream/0" />
        <p className="mt-10 max-w-3xl text-lg leading-relaxed text-cream/80 sm:text-xl">
          {mission.extended}
        </p>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-cream/70">
          {mission.democratize}
        </p>
        <p className="mt-8 font-mono text-xs uppercase tracking-wider text-stamp-600">
          {mission.nonprofitNote}
        </p>
      </div>
    </section>
  );
}
