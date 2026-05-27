import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { StepCard } from "@/components/StepCard";
import { ImpactMetric } from "@/components/ImpactMetric";
import { GetInvolvedCards } from "@/components/GetInvolvedCards";
import { CTAButton } from "@/components/CTAButton";
import { DisclaimerBanner } from "@/components/DisclaimerBanner";
import {
  BookOpen,
  Users,
  GraduationCap,
  HeartHandshake,
  DollarSign,
} from "lucide-react";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Problem */}
      <section className="border-y border-border bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="The problem"
            title="Brilliant ideas shouldn't die from lack of access"
            description="Entire communities are locked out of intellectual property — not because they lack talent, but because they lack guidance, resources, and someone in their corner."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <ImpactMetric
              value="12.8%"
              label="of inventors named on U.S. patents are women"
              source="USPTO data"
            />
            <ImpactMetric
              value="3×"
              label="higher patent rate for white Americans compared to Black Americans"
              source="USPTO / research estimates"
            />
            <ImpactMetric
              value="Lost Einsteins"
              label="Talented kids from low-income backgrounds who never become inventors"
              source="Stanford Equality of Opportunity Project"
            />
          </div>
        </div>
      </section>

      {/* Why IP access matters */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <SectionHeading
              eyebrow="Why it matters"
              title="Intellectual property isn't just for big companies"
              description="A patent, trademark, or copyright can help an inventor license a product, launch a business, or simply know their work is protected. But the system is confusing, expensive, and full of dead ends — especially if you've never met a patent attorney."
            />
            <div className="rounded-3xl border border-border bg-white p-8 shadow-soft">
              <p className="text-lg leading-relaxed text-slate-700">
                When whole communities are locked out of IP, we all lose the
                inventions, businesses, and creative works that could have
                been. Closing the access gap isn&apos;t just fair — it&apos;s
                how we unlock innovation that benefits everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Community IP helps */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="How we help"
            title="We meet you where you are"
            description="Community IP doesn't replace your lawyer. We help you understand your options and connect with resources that fit your situation — subject to program capacity."
            align="center"
            className="mx-auto"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: GraduationCap,
                title: "Education",
                desc: "Workshops, seminars, and plain-language guides on patents, trademarks, and copyrights.",
              },
              {
                icon: BookOpen,
                title: "Intake & routing",
                desc: "Tell us about your idea; we help identify what kind of support may fit your situation.",
              },
              {
                icon: DollarSign,
                title: "Affordable options",
                desc: "Low-cost IP services where available, subject to program capacity.",
              },
              {
                icon: Users,
                title: "Mentoring",
                desc: "Guidance from professionals and entrepreneurs who've navigated IP themselves.",
              },
              {
                icon: HeartHandshake,
                title: "Needs-based support",
                desc: "Funding assistance for qualifying inventors, subject to available resources.",
              },
              {
                icon: BookOpen,
                title: "Referrals",
                desc: "Connections to partner programs like USPTO Patent Pro Bono when appropriate.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-warm-50 p-6"
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
        </div>
      </section>

      {/* Who we help */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Who we help"
            title="If you've ever thought, “I don't know where to start,” you're who we built this for"
          />
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              "Solo inventors and first-time innovators",
              "Women and people of color historically underrepresented in IP",
              "Small business owners protecting a brand or product",
              "Young adults and community entrepreneurs",
              "Anyone who needs guidance before they can afford full legal services",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-border bg-white p-4 text-sm text-slate-700"
              >
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-teal-600" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-muted-foreground">
            You don&apos;t need a polished prototype or a law degree. You need
            a place to start.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="How it works"
            title="Three steps. No jargon required."
            align="center"
            className="mx-auto"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <StepCard
              step={1}
              title="Learn"
              description="Browse our Education Hub or take the IP Readiness Checker to understand what you might need."
            />
            <StepCard
              step={2}
              title="Apply"
              description="Share your situation through our intake form. We'll review and route you to education, mentoring, or referrals."
            />
            <StepCard
              step={3}
              title="Get connected"
              description="Our team follows up with next steps — always educational and supportive, never intimidating."
            />
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-muted-foreground">
            Submitting an application does not create an attorney-client
            relationship and does not guarantee services or funding.
          </p>
        </div>
      </section>

      {/* Impact preview */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Impact"
            title="Early days. Real mission. Growing community."
            description="Community IP was founded in 2024 and accepted into Social Enterprise Greenhouse's 2025 Impact Accelerator. We're building partnerships and opening the door for inventors who've been overlooked."
          />
          <div className="mt-10 rounded-3xl border border-teal-200 bg-teal-50 p-8 sm:p-10">
            <div className="grid gap-8 sm:grid-cols-3">
              <div>
                <p className="font-heading text-3xl font-bold text-teal-800">
                  2024
                </p>
                <p className="mt-1 text-sm text-teal-900">Founded by patent professionals</p>
              </div>
              <div>
                <p className="font-heading text-3xl font-bold text-teal-800">
                  SEG 2025
                </p>
                <p className="mt-1 text-sm text-teal-900">
                  Social Enterprise Greenhouse Accelerator
                </p>
              </div>
              <div>
                <p className="font-heading text-3xl font-bold text-teal-800">
                  Growing
                </p>
                <p className="mt-1 text-sm text-teal-900">
                  Partnerships, events, and inventor support expanding
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get involved */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Get involved"
            title="There's more than one way to strengthen IP access"
            align="center"
            className="mx-auto"
          />
          <GetInvolvedCards className="mt-12" />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-3xl bg-slate-800 px-8 py-12 text-center sm:px-12 sm:py-16">
            <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl text-balance">
              Ready to protect what you&apos;ve created — or learn what that
              even means?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-300">
              You don&apos;t have to have it all figured out. Start with a
              question. We&apos;ll help you find the next step.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <CTAButton href="/apply" size="lg">
                Apply for Help
              </CTAButton>
              <CTAButton href="/readiness-checker" variant="secondary" size="lg">
                Take the IP Readiness Checker
              </CTAButton>
            </div>
            <div className="mt-8">
              <DisclaimerBanner
                className="mx-auto max-w-lg border-slate-600 bg-slate-700/50 text-left [&_p]:text-amber-100 [&_svg]:text-amber-400"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
