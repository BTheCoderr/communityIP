import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { CTAButton } from "@/components/CTAButton";
import { TeamMemberCard } from "@/components/TeamMemberCard";
import { ImpactMetric } from "@/components/ImpactMetric";
import { StampLabel } from "@/components/brand/StampLabel";
import { about, PROGRAMS } from "@/lib/site";
import { coPresidents, boardDirectors } from "@/lib/content/team";

export const metadata: Metadata = {
  title: "About",
  description:
    "Community IP was founded to close the intellectual property access gap for underserved inventors.",
};

export default function AboutPage() {
  return (
    <PageShell>
      <div className="max-w-3xl">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-blueprint-600">
          About
        </p>
        <h1 className="font-display text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl text-balance">
          {about.title}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-navy-800/75 text-balance">
          {about.intro}
        </p>
      </div>

      <section className="mt-16">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow={about.storyEyebrow}
              title={about.storyTitle}
            />
            <div className="mt-6 space-y-4 leading-relaxed text-navy-800/75">
              {about.story.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="patent-file p-8">
            <StampLabel variant="learn" className="mb-4">
              Programs
            </StampLabel>
            <h3 className="font-display text-lg font-bold text-navy-900">
              {about.programsSectionTitle}
            </h3>
            <ul className="mt-6 space-y-4">
              {PROGRAMS.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 border-b border-dashed border-navy-900/10 pb-4 text-sm text-navy-800/80"
                >
                  <span className="mt-1.5 h-2 w-2 shrink-0 bg-stamp-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-20">
        <SectionHeading
          eyebrow="Leadership"
          title="Co-Presidents"
          description={about.coPresidentsIntro}
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {coPresidents.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </section>

      <section className="mt-20">
        <SectionHeading
          eyebrow="Governance"
          title="Board of Directors"
          description={about.boardIntro}
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {boardDirectors.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
        <div className="mt-8">
          <CTAButton href="/board" variant="secondary">
            View full board page
          </CTAButton>
        </div>
      </section>

      <section className="mt-20">
        <SectionHeading
          eyebrow="The gap we address"
          title="Underrepresented inventors face real barriers"
        />
        <div className="mt-10 grid gap-px bg-navy-900/10 sm:grid-cols-3">
          <ImpactMetric
            value="12.8%"
            label="of U.S. patent inventors are women"
            source="USPTO"
          />
          <ImpactMetric
            value="3×"
            label="patent rate gap between white and Black Americans"
            source="Research estimates"
          />
          <ImpactMetric
            value="10×"
            label="more likely to invent in the top 1% of earners"
            source="Stanford Equality of Opportunity Project"
          />
        </div>
      </section>

      <section className="mt-20 border-2 border-blueprint-600/20 bg-blueprint-50 p-8 sm:p-10">
        <SectionHeading title="Who we serve" description={about.whoWeServe} />
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <CTAButton href="/for-inventors">For inventors</CTAButton>
          <CTAButton href="/volunteer" variant="secondary">
            Volunteer with us
          </CTAButton>
          <CTAButton href="/partners" variant="secondary">
            Partner with us
          </CTAButton>
        </div>
      </section>
    </PageShell>
  );
}
