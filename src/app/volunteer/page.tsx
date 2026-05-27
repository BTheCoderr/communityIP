import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { DisclaimerBanner } from "@/components/DisclaimerBanner";
import { InterestForm } from "@/components/forms/InterestForm";
import {
  Scale,
  GraduationCap,
  Briefcase,
  Heart,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Volunteer",
  description:
    "Volunteer your IP expertise with Community IP — patent attorneys, agents, law students, mentors, and advisors welcome.",
};

export default function VolunteerPage() {
  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <PageHeader
          eyebrow="Volunteer"
          title="Lend your expertise to inventors who need it most"
          description="Community IP connects volunteer patent professionals, law students, mentors, and business advisors with underserved inventors — subject to screening and program capacity."
        />

        <section className="mt-16">
          <SectionHeading
            eyebrow="Why volunteer"
            title="Your skills can change someone's trajectory"
            description="Most inventors we serve are first-timers with great ideas and no access to IP guidance. Even a few hours can help someone take a meaningful first step."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {[
              {
                icon: Heart,
                title: "Direct impact",
                desc: "Help inventors from underrepresented communities explore and pursue ideas they might otherwise set aside.",
              },
              {
                icon: Users,
                title: "Structured support",
                desc: "Community IP handles intake, screening, and coordination so you can focus on what you do best.",
              },
              {
                icon: GraduationCap,
                title: "Flexible commitment",
                desc: "Volunteer on your schedule — mentoring, education sessions, or pro bono case support.",
              },
              {
                icon: Scale,
                title: "Pro bono experience",
                desc: "Law students and early-career professionals gain real-world IP exposure in a mission-driven setting.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-white p-6 shadow-card"
              >
                <item.icon
                  className="mb-4 h-6 w-6 text-teal-700"
                  aria-hidden
                />
                <h3 className="font-heading font-bold text-slate-800">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <SectionHeading
            eyebrow="Who can help"
            title="We welcome a range of professionals"
          />
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "Patent attorneys",
              "Patent agents",
              "Law students",
              "IP paralegals",
              "Trademark professionals",
              "Business mentors",
              "Community advisors",
              "Entrepreneurs",
            ].map((role) => (
              <span
                key={role}
                className="rounded-full border border-teal-200 bg-teal-50 px-4 py-2 text-sm font-medium text-teal-800"
              >
                {role}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <SectionHeading
            eyebrow="Commitment"
            title="What volunteering could look like"
            description="Exact opportunities depend on program capacity and your availability. Examples below — not guarantees."
          />
          <div className="mt-8 space-y-4">
            {[
              {
                icon: Briefcase,
                title: "Pro bono case support",
                desc: "Assist qualifying inventors through established pro bono frameworks, where applicable and subject to screening.",
              },
              {
                icon: GraduationCap,
                title: "Education & workshops",
                desc: "Lead or co-host IP seminars for community groups, schools, or startup programs.",
              },
              {
                icon: Users,
                title: "Mentoring sessions",
                desc: "One-on-one conversations about options and next steps — educational in nature unless under an approved pro bono structure.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-4 rounded-2xl border border-border bg-white p-6"
              >
                <item.icon
                  className="mt-1 h-6 w-6 shrink-0 text-teal-700"
                  aria-hidden
                />
                <div>
                  <h3 className="font-heading font-bold text-slate-800">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <SectionHeading
            eyebrow="Get started"
            title="Express your interest"
            description="Tell us about your background and how you'd like to help. All volunteers are screened before participating."
          />
          <div className="mt-8">
            <InterestForm type="volunteer" />
          </div>
        </section>

        <div className="mt-12">
          <DisclaimerBanner />
        </div>
      </div>
    </div>
  );
}
