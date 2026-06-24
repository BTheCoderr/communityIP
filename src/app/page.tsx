import { Hero } from "@/components/Hero";
import { MissionSection } from "@/components/MissionSection";
import { AccessStatsSection } from "@/components/AccessStatsSection";
import { SectionHeading } from "@/components/SectionHeading";
import { StepCard } from "@/components/StepCard";
import { GetInvolvedCards } from "@/components/GetInvolvedCards";
import { NewsCard } from "@/components/NewsCard";
import { CTAButton } from "@/components/CTAButton";
import {
  BookOpen,
  Users,
  GraduationCap,
  HeartHandshake,
  DollarSign,
  Route,
} from "lucide-react";
import { newsPosts } from "@/lib/news";

export default function HomePage() {
  return (
    <>
      <Hero />

      <MissionSection />

      <AccessStatsSection />

      {/* How Community IP helps */}
      <section className="border-y border-border bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="How we help"
            title="A digital front door for inventors who've been left out"
            description="Community IP doesn't replace your lawyer. We help you understand your options and connect with education, mentoring, and support — subject to program capacity."
            align="center"
            className="mx-auto"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: GraduationCap,
                title: "Education",
                desc: "Plain-language guides and workshops on patents, trademarks, and copyrights.",
              },
              {
                icon: Route,
                title: "Intake & routing",
                desc: "Tell us about your idea; we help identify what kind of support may fit.",
              },
              {
                icon: Users,
                title: "Mentoring",
                desc: "Conversations with people who've navigated IP and entrepreneurship.",
              },
              {
                icon: DollarSign,
                title: "Affordable options",
                desc: "Low-cost services where available, subject to capacity.",
              },
              {
                icon: HeartHandshake,
                title: "Needs-based support",
                desc: "Funding assistance for qualifying inventors, when resources allow.",
              },
              {
                icon: BookOpen,
                title: "Referrals",
                desc: "Connections to programs like USPTO Patent Pro Bono when appropriate.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-warm-50 p-6 transition-shadow hover:shadow-card"
              >
                <item.icon
                  className="mb-3 h-6 w-6 text-teal-700"
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

      {/* How it works */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="How it works"
            title="Three steps. No jargon."
            align="center"
            className="mx-auto"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <StepCard
              step={1}
              title="Learn"
              description="Take the IP Readiness Checker or browse the Education Hub."
            />
            <StepCard
              step={2}
              title="Apply"
              description="Share your situation through our intake form for review and routing."
            />
            <StepCard
              step={3}
              title="Get connected"
              description="Our team follows up with educational next steps — supportive, not intimidating."
            />
          </div>
          <p className="mx-auto mt-6 max-w-xl text-center text-sm text-muted-foreground">
            Submitting an application does not create an attorney-client
            relationship or guarantee services or funding.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CTAButton href="/readiness-checker">Start with the readiness checker</CTAButton>
            <CTAButton href="/apply" variant="secondary">
              Apply for help
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Who we help */}
      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <SectionHeading
              eyebrow="Who we help"
              title="Built for people who ask, “Where do I even start?”"
              description="You don't need a polished prototype or a law degree. You need a place to learn and take a first step."
            />
            <ul className="grid gap-3 sm:grid-cols-2">
              {[
                "Solo inventors & first-timers",
                "Underrepresented communities in IP",
                "Small business owners",
                "Community entrepreneurs",
                "Students & young innovators",
                "Anyone before they can afford full legal help",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-border bg-warm-50 px-4 py-3 text-sm text-slate-700"
                >
                  <span className="h-2 w-2 shrink-0 rounded-full bg-teal-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Impact preview */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Impact"
            title="Early days. Real mission."
            description="Founded in 2024 by patent professionals. Accepted into Social Enterprise Greenhouse's 2025 Impact Accelerator."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { value: "2024", label: "Founded to close the IP access gap" },
              { value: "SEG '25", label: "Impact Accelerator cohort" },
              { value: "Growing", label: "Partnerships & inventor support expanding" },
            ].map((item) => (
              <div
                key={item.value}
                className="rounded-2xl border border-teal-200 bg-teal-50 p-6 text-center sm:text-left"
              >
                <p className="font-heading text-2xl font-bold text-teal-800 sm:text-3xl">
                  {item.value}
                </p>
                <p className="mt-1 text-sm text-teal-900">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News preview */}
      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="News"
            title="Latest from Community IP"
            description="Program updates, partnerships, and stories from our work to expand IP access."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[...newsPosts]
              .sort(
                (a, b) =>
                  new Date(b.date).getTime() - new Date(a.date).getTime()
              )
              .slice(0, 3)
              .map((post) => (
                <NewsCard key={post.slug} post={post} />
              ))}
          </div>
          <div className="mt-8 text-center">
            <CTAButton href="/news" variant="secondary">
              View all news
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Get involved */}
      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Get involved"
            title="Strengthen IP access with us"
            align="center"
            className="mx-auto"
          />
          <GetInvolvedCards className="mt-10" />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-3xl bg-slate-800 px-8 py-12 text-center sm:px-12 sm:py-14">
            <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl text-balance">
              Not sure what you need yet? That&apos;s okay.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-slate-300">
              Start with a question. We&apos;ll help you find a sensible next
              step — education first, always.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <CTAButton href="/readiness-checker" size="lg">
                Take the IP Readiness Checker
              </CTAButton>
              <CTAButton href="/apply" variant="secondary" size="lg">
                Apply for Help
              </CTAButton>
            </div>
            <p className="mx-auto mt-6 max-w-md text-xs leading-relaxed text-slate-400">
              Educational information and intake support only. Not legal advice.
              No attorney-client relationship is created by using this site.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
