import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { CTAButton } from "@/components/CTAButton";
import { DisclaimerBanner } from "@/components/DisclaimerBanner";
import { ImpactMetric } from "@/components/ImpactMetric";
import { MISSION_STATEMENT, PROGRAMS } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Community IP was founded to close the intellectual property access gap for underserved inventors.",
};

export default function AboutPage() {
  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-teal-700">
            About
          </p>
          <h1 className="font-heading text-4xl font-bold tracking-tight text-slate-800 sm:text-5xl text-balance">
            Closing the IP access gap, one inventor at a time
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {MISSION_STATEMENT} Founded in 2024 by patent professionals, Community
            IP is a 501(c)(3) nonprofit closing the gap for inventors left
            behind — not for lack of ideas, but for lack of access, guidance,
            and affordable support.
          </p>
        </div>

        <section className="mt-16">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Our story"
                title="Built by people who've seen the gap firsthand"
              />
              <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Intellectual property was designed to protect innovation — but
                  the system has never been equally accessible. Women, people of
                  color, and low-income inventors patent at dramatically lower
                  rates. Not because they lack talent, but because they lack the
                  networks, resources, and knowledge that others take for
                  granted.
                </p>
                <p>
                  Community IP was created to change that. We believe every
                  inventor deserves a fair shot at understanding and pursuing IP
                  protection — starting with education, mentoring, and community
                  support, not intimidation.
                </p>
                <p>
                  In 2025, we were accepted into Social Enterprise
                  Greenhouse&apos;s Impact Accelerator, joining a cohort of
                  mission-driven ventures working toward a more equitable
                  economy.
                </p>
              </div>
            </div>
            <div className="rounded-3xl border border-border bg-white p-8 shadow-soft">
              <h3 className="font-heading text-lg font-bold text-slate-800">
                What we focus on
              </h3>
              <ul className="mt-6 space-y-4">
                {PROGRAMS.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-slate-700"
                  >
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-teal-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-20">
          <SectionHeading
            eyebrow="The gap we address"
            title="Underrepresented inventors face real barriers"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
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

        <section className="mt-20 rounded-3xl border border-teal-200 bg-teal-50 p-8 sm:p-10">
          <SectionHeading
            title="Who we serve"
            description="Community IP is for inventors and entrepreneurs who have been historically underrepresented in intellectual property — and anyone who needs a supportive, educational first step."
          />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CTAButton href="/board">Board of Directors</CTAButton>
            <CTAButton href="/for-inventors">For inventors</CTAButton>
            <CTAButton href="/volunteer" variant="secondary">
              Volunteer with us
            </CTAButton>
            <CTAButton href="/partners" variant="secondary">
              Partner with us
            </CTAButton>
          </div>
        </section>

        <div className="mt-12">
          <DisclaimerBanner />
        </div>
      </div>
    </div>
  );
}
