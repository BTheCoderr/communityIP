import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { CTAButton } from "@/components/CTAButton";
import { InterestForm } from "@/components/forms/InterestForm";
import {
  Building2,
  Rocket,
  Users,
  Landmark,
  Building,
  Scale,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "Partner with Community IP — universities, incubators, community organizations, foundations, and corporate sponsors.",
};

const partnerTypes = [
  {
    icon: Building2,
    title: "Universities",
    description:
      "Co-host IP education events, connect student inventors, and integrate Community IP into entrepreneurship programs.",
  },
  {
    icon: Rocket,
    title: "Incubators & accelerators",
    description:
      "Refer founders who need IP guidance, co-develop workshops, and strengthen your cohort's IP literacy.",
  },
  {
    icon: Users,
    title: "Community organizations",
    description:
      "Bring IP education to the neighborhoods you serve — especially women, BIPOC, and youth programs.",
  },
  {
    icon: Landmark,
    title: "Foundations",
    description:
      "Fund needs-based IP support, education programs, and capacity building for underserved inventors.",
  },
  {
    icon: Building,
    title: "Corporate sponsors",
    description:
      "Support events, mentoring programs, and operations while demonstrating commitment to innovation equity.",
  },
  {
    icon: Scale,
    title: "Law firms",
    description:
      "Provide pro bono capacity, host education events, and connect attorneys with screened inventor intake.",
  },
];

export default function PartnersPage() {
  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <PageHeader
          eyebrow="Partners"
          title="Help us expand IP access together"
          description="Community IP is building a network of partners who share our belief that every inventor deserves a fair shot — through events, referrals, and shared resources."
        />

        <section className="mt-16">
          <SectionHeading
            title="Partnership opportunities"
            description="We work with organizations across sectors to reach inventors where they are."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {partnerTypes.map((partner) => (
              <div
                key={partner.title}
                className="rounded-2xl border border-border bg-white p-6 shadow-card"
              >
                <partner.icon
                  className="mb-4 h-6 w-6 text-teal-700"
                  aria-hidden
                />
                <h3 className="font-heading font-bold text-slate-800">
                  {partner.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {partner.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20 rounded-3xl border border-teal-200 bg-teal-50 p-8 sm:p-10">
          <SectionHeading
            title="What collaboration could look like"
            description="Partnership models vary — here are common ways organizations work with us."
          />
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              "Co-host IP education events or seminars",
              "Refer inventors through our intake process",
              "Provide venue, outreach, or in-kind support",
              "Sponsor needs-based inventor programs",
              "Connect volunteer professionals",
              "Share impact stories and community reach",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl bg-white/60 px-4 py-3 text-sm text-teal-900"
              >
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-teal-600" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-20">
          <SectionHeading
            eyebrow="Get started"
            title="Tell us about your organization"
            description="Share your interest and we'll follow up to explore a fit."
          />
          <div className="mt-8">
            <InterestForm type="partner" />
          </div>
        </section>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <CTAButton href="/donate">Support financially</CTAButton>
          <CTAButton href="/about" variant="secondary">
            Learn about our mission
          </CTAButton>
        </div>

      </div>
    </div>
  );
}
