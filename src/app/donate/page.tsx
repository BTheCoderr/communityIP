import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { CTAButton } from "@/components/CTAButton";
import { DisclaimerBanner } from "@/components/DisclaimerBanner";
import { StampLabel } from "@/components/brand/StampLabel";
import { donate, SPOTFUND_URL } from "@/lib/site";
import {
  GraduationCap,
  HeartHandshake,
  Users,
  Settings,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support Community IP's mission to help underserved inventors access intellectual property education and support.",
};

export default function DonatePage() {
  return (
    <PageShell>
      <PageHeader eyebrow="Donate" title={donate.title} description={donate.intro} />

      <section className="patent-file mt-12 p-8 sm:p-10">
        <StampLabel variant="protect" className="mb-4">
          Spotfund
        </StampLabel>
        <p className="max-w-2xl leading-relaxed text-navy-800/80">
          {donate.spotfundCampaignNote}
        </p>
        <p className="mt-4 max-w-2xl leading-relaxed text-navy-800/80">
          {donate.spotfundClosing}
        </p>
      </section>

      <section className="mt-16">
        <SectionHeading eyebrow="Your impact" title="What your donation helps fund" />
        <div className="mt-10 grid gap-px bg-navy-900/10 sm:grid-cols-2">
          {[
            {
              icon: GraduationCap,
              title: "Education workshops",
              description:
                "Free IP seminars and resources for inventors, students, and community groups.",
            },
            {
              icon: HeartHandshake,
              title: "Needs-based IP support",
              description:
                "Financial assistance for qualifying inventors facing IP costs — subject to funding and eligibility.",
            },
            {
              icon: Users,
              title: "Mentoring access",
              description:
                "Connecting inventors with volunteer professionals for guidance through the IP journey.",
            },
            {
              icon: Settings,
              title: "Program operations",
              description:
                "Intake, events, volunteer coordination, and the platform that makes IP access scalable.",
            },
          ].map((item) => (
            <div key={item.title} className="bg-cream p-8">
              <item.icon
                className="mb-4 h-7 w-7 text-stamp-600"
                aria-hidden
              />
              <h3 className="font-display text-lg font-bold text-navy-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-800/70">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20 border-2 border-stamp-600/30 bg-stamp-100/30 p-8 text-center sm:p-12">
        <h2 className="font-display text-2xl font-bold text-navy-900 sm:text-3xl">
          Make a donation
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-navy-800/75">
          Support Community IP through Spotfund — secure online giving for our
          501(c)(3) programs.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <CTAButton href={SPOTFUND_URL} size="lg" variant="accent">
            {donate.ctaPrimary}
          </CTAButton>
          <CTAButton href="/contact" variant="secondary" size="lg">
            {donate.ctaSecondary}
          </CTAButton>
        </div>
        <p className="mt-6 text-xs text-muted-foreground">
          501(c)(3) organization. Consult your tax advisor regarding
          deductibility.
        </p>
      </section>

      <section className="mt-16 bg-navy-900 p-8 sm:p-10">
        <SectionHeading
          title="Other ways to give"
          description="Not ready to donate? You can still make a difference."
          className="[&_h2]:text-cream [&_p]:text-cream/70"
        />
        <div className="mt-8 grid gap-px bg-cream/10 sm:grid-cols-3">
          {[
            { title: "Volunteer", href: "/volunteer", desc: "Share your IP expertise" },
            { title: "Partner", href: "/partners", desc: "Co-host events or refer inventors" },
            { title: "Spread the word", href: "/for-inventors", desc: "Share with an inventor" },
          ].map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group flex flex-col bg-navy-800/50 p-5 transition-colors hover:bg-navy-800"
            >
              <span className="font-display font-bold text-cream">{item.title}</span>
              <span className="mt-1 text-xs text-cream/50">{item.desc}</span>
              <ArrowRight className="mt-3 h-4 w-4 text-stamp-600 transition-transform group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </section>

      <div className="mt-12">
        <DisclaimerBanner />
      </div>
    </PageShell>
  );
}
