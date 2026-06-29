import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { AudienceCard } from "@/components/AudienceCard";
import { StepCard } from "@/components/StepCard";
import { CTAButton } from "@/components/CTAButton";
import { DisclaimerBanner } from "@/components/DisclaimerBanner";
import {
  Lightbulb,
  Store,
  Palette,
  HelpCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "For Inventors",
  description:
    "Community IP helps underserved inventors understand IP options and connect with education, mentoring, and support.",
};

export default function ForInventorsPage() {
  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-community-700">
            For Inventors
          </p>
          <h1 className="font-heading text-4xl font-bold tracking-tight text-forest-900 sm:text-5xl text-balance">
            You have an idea. We help you figure out what comes next.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Whether you&apos;re building a product, launching a brand, or
            creating original work, Community IP helps you understand your IP
            options and connect with support — without the intimidation of a
            traditional law firm.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CTAButton href="/apply" size="lg">
              Get IP Help
            </CTAButton>
            <CTAButton href="/education" variant="secondary" size="lg">
              Browse education
            </CTAButton>
          </div>
        </div>

        <section className="mt-16">
          <SectionHeading
            title="What best describes your situation?"
            description="Choose the path that fits you. Each one leads to education and intake support tailored to your needs."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <AudienceCard
              icon={Lightbulb}
              title="I have an invention"
              description="You've created or are developing a product, device, or process and want to understand patent options and next steps."
              href="/apply"
              cta="Get IP Help"
            />
            <AudienceCard
              icon={Store}
              title="I have a brand or business name"
              description="You're building a business identity and want to learn about trademark protection for your name, logo, or brand."
              href="/education/trademark-basics"
              cta="Learn trademark basics"
            />
            <AudienceCard
              icon={Palette}
              title="I created original work"
              description="You've made creative work — art, writing, music, software — and want to understand copyright basics."
              href="/education/copyright-basics"
              cta="Learn copyright basics"
            />
            <AudienceCard
              icon={HelpCircle}
              title="I'm not sure what I need"
              description="That's okay. Most people start here. Our education resources and intake team help you learn before you commit."
              href="/education"
              cta="Browse free resources"
            />
          </div>
        </section>

        <section className="mt-20">
          <SectionHeading
            eyebrow="What you may need"
            title="IP support comes in many forms"
            description="Community IP may connect you with one or more of these — subject to program capacity and eligibility."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Patent education & guidance",
              "Trademark basics",
              "Copyright basics",
              "Business formation info",
              "IP workshops & seminars",
              "One-on-one mentoring",
              "Needs-based funding info",
              "Referrals to partner programs",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-border bg-white px-4 py-3 text-sm font-medium text-forest-800"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <SectionHeading eyebrow="Your path" title="How to get started" />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <StepCard
              step={1}
              title="Learn the basics"
              description="Visit our Education Hub for plain-language guides on patents, trademarks, and copyrights."
            />
            <StepCard
              step={2}
              title="Apply for help"
              description="Submit an intake form so our team can review your situation and suggest next steps."
            />
            <StepCard
              step={3}
              title="Connect with support"
              description="When available, we may connect you with mentoring, workshops, or needs-based support."
            />
          </div>
        </section>

        <div className="mt-16">
          <DisclaimerBanner />
        </div>
      </div>
    </div>
  );
}
