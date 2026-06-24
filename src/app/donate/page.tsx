import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { CTAButton } from "@/components/CTAButton";
import { DisclaimerBanner } from "@/components/DisclaimerBanner";
import { Button } from "@/components/ui/button";
import { SPOTFUND_URL } from "@/lib/site";
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
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <PageHeader
          eyebrow="Donate"
          title="Help inventors take their first step"
          description="Community IP is a 501(c)(3) nonprofit. Your support helps us reach underserved inventors with education, mentoring, and needs-based IP programs — subject to available capacity."
        />

        <section className="mt-16">
          <SectionHeading
            eyebrow="Your impact"
            title="What your donation helps fund"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
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
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-white p-6 shadow-card"
              >
                <item.icon
                  className="mb-4 h-6 w-6 text-amber-600"
                  aria-hidden
                />
                <h3 className="font-heading font-bold text-slate-800">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <div className="rounded-3xl border border-amber-200 bg-amber-50 p-8 text-center sm:p-12">
            <h2 className="font-heading text-2xl font-bold text-slate-800 sm:text-3xl">
              Make a donation
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
              Support Community IP through Spotfund — secure online giving for
              our 501(c)(3) programs.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                size="lg"
                className="bg-amber-600 hover:bg-amber-700"
                asChild
              >
                <a
                  href={SPOTFUND_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contribute via Spotfund
                </a>
              </Button>
              <CTAButton href="/partners" variant="secondary" size="lg">
                Explore partnership
              </CTAButton>
            </div>
            <p className="mt-6 text-xs text-muted-foreground">
              501(c)(3) organization. Consult your tax advisor regarding
              deductibility.
            </p>
          </div>
        </section>

        <section className="mt-16 rounded-3xl bg-slate-800 p-8 sm:p-10">
          <SectionHeading
            title="Other ways to give"
            description="Not ready to donate? You can still make a difference."
            className="[&_h2]:text-white [&_p]:text-slate-300"
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { title: "Volunteer", href: "/volunteer", desc: "Share your IP expertise" },
              { title: "Partner", href: "/partners", desc: "Co-host events or refer inventors" },
              { title: "Spread the word", href: "/for-inventors", desc: "Share with an inventor" },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group flex flex-col rounded-2xl border border-slate-600 bg-slate-700/50 p-5 transition-colors hover:border-teal-500 hover:bg-slate-700"
              >
                <span className="font-heading font-bold text-white">
                  {item.title}
                </span>
                <span className="mt-1 text-xs text-slate-400">{item.desc}</span>
                <ArrowRight className="mt-3 h-4 w-4 text-teal-400 transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </section>

        <div className="mt-12">
          <DisclaimerBanner />
        </div>
      </div>
    </div>
  );
}
