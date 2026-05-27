import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { CTAButton } from "@/components/CTAButton";
import { DisclaimerBanner } from "@/components/DisclaimerBanner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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
      "Bring IP education to the neighborhoods and communities you serve — especially women, BIPOC, and youth programs.",
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
      "Support events, mentoring programs, and operational capacity while demonstrating commitment to innovation equity.",
  },
  {
    icon: Scale,
    title: "Law firms",
    description:
      "Provide pro bono capacity, host CLE-eligible events, and connect attorneys with screened inventor cases.",
  },
];

export default function PartnersPage() {
  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-teal-700">
            Partners
          </p>
          <h1 className="font-heading text-4xl font-bold tracking-tight text-slate-800 sm:text-5xl text-balance">
            Help us expand IP access together
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Community IP is building a network of partners who share our belief
            that every inventor deserves a fair shot. Whether you refer
            inventors, co-host events, or provide funding — we want to hear
            from you.
          </p>
        </div>

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
            title="Why partner with Community IP?"
            description="We're a mission-driven 501(c)(3) accepted into Social Enterprise Greenhouse's 2025 Impact Accelerator — building the infrastructure to serve inventors at scale."
          />
          <ul className="mt-6 space-y-3">
            {[
              "Reach underserved inventors who aren't accessing traditional IP services",
              "Co-brand education events and workshops",
              "Refer inventors through a structured intake process",
              "Demonstrate measurable social impact in innovation equity",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm text-teal-900"
              >
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-teal-600" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-20">
          <SectionHeading
            eyebrow="Partner interest"
            title="Let's explore a partnership"
            description="This is a prototype form — submissions are not yet stored."
          />
          <div className="mt-8 max-w-xl space-y-5 rounded-3xl border border-border bg-white p-6 shadow-soft sm:p-8">
            <div>
              <Label htmlFor="org">Organization name</Label>
              <Input id="org" className="mt-1.5" />
            </div>
            <div>
              <Label htmlFor="contact">Contact name</Label>
              <Input id="contact" className="mt-1.5" />
            </div>
            <div>
              <Label htmlFor="p-email">Email</Label>
              <Input id="p-email" type="email" className="mt-1.5" />
            </div>
            <div>
              <Label htmlFor="p-type">Partnership type</Label>
              <Input
                id="p-type"
                placeholder="e.g., Event co-host, Referral partner, Sponsor"
                className="mt-1.5"
              />
            </div>
            <div>
              <Label htmlFor="p-message">Tell us about your interest</Label>
              <Textarea id="p-message" className="mt-1.5" />
            </div>
            <Button type="button" className="w-full sm:w-auto">
              Submit interest (prototype)
            </Button>
          </div>
        </section>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <CTAButton href="/donate">Support financially</CTAButton>
          <CTAButton href="/about" variant="secondary">
            Learn about our mission
          </CTAButton>
        </div>

        <div className="mt-10">
          <DisclaimerBanner />
        </div>
      </div>
    </div>
  );
}
