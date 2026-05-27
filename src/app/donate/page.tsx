import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { CTAButton } from "@/components/CTAButton";
import { DisclaimerBanner } from "@/components/DisclaimerBanner";
import { Button } from "@/components/ui/button";
import {
  GraduationCap,
  HeartHandshake,
  Users,
  Settings,
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
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-teal-700">
            Donate
          </p>
          <h1 className="font-heading text-4xl font-bold tracking-tight text-slate-800 sm:text-5xl text-balance">
            Help inventors protect what they create
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Community IP is a 501(c)(3) nonprofit. Your donation helps us reach
            underserved inventors with education, mentoring, and needs-based IP
            support — subject to available program capacity.
          </p>
        </div>

        <section className="mt-16">
          <SectionHeading
            eyebrow="Your impact"
            title="What donations support"
            description="Every contribution helps us build infrastructure and programs that make IP accessible to communities historically left out."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {[
              {
                icon: GraduationCap,
                title: "Education workshops",
                description:
                  "Free IP seminars and resources for inventors, students, and community groups who can't afford traditional IP education.",
              },
              {
                icon: HeartHandshake,
                title: "Needs-based IP support",
                description:
                  "Financial assistance for qualifying inventors facing IP filing costs — subject to available funding and eligibility review.",
              },
              {
                icon: Users,
                title: "Mentoring access",
                description:
                  "Connecting inventors with volunteer professionals for guidance, coaching, and support through the IP journey.",
              },
              {
                icon: Settings,
                title: "Program operations",
                description:
                  "Intake systems, event coordination, volunteer management, and the platform that makes IP access scalable.",
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
              Online giving will be available soon. Community IP currently
              accepts contributions through Spotfund and direct outreach.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                Donate now (coming soon)
              </Button>
              <CTAButton href="/partners" variant="secondary" size="lg">
                Explore partnership
              </CTAButton>
            </div>
            <p className="mt-6 text-xs text-muted-foreground">
              Community IP is a 501(c)(3) organization. Consult your tax advisor
              regarding deductibility of donations.
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
              { title: "Spread the word", href: "/for-inventors", desc: "Share with an inventor who needs help" },
            ].map((item) => (
              <CTAButton
                key={item.title}
                href={item.href}
                variant="secondary"
                className="h-auto flex-col items-start gap-1 p-5 text-left"
              >
                <span className="font-heading font-bold">{item.title}</span>
                <span className="text-xs font-normal text-muted-foreground">
                  {item.desc}
                </span>
              </CTAButton>
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
