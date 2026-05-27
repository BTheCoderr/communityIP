import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { DisclaimerBanner } from "@/components/DisclaimerBanner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-teal-700">
            Volunteer
          </p>
          <h1 className="font-heading text-4xl font-bold tracking-tight text-slate-800 sm:text-5xl text-balance">
            Lend your expertise to inventors who need it most
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Community IP connects volunteer patent professionals, law students,
            mentors, and business advisors with underserved inventors —
            subject to screening and program capacity.
          </p>
        </div>

        <section className="mt-16">
          <SectionHeading
            eyebrow="Why volunteer"
            title="Your skills can change someone's trajectory"
            description="Most inventors we serve are first-timers with great ideas and no access to IP guidance. Your time — even a few hours — can help someone take a meaningful first step."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {[
              {
                icon: Heart,
                title: "Direct impact",
                desc: "Help inventors from underrepresented communities protect and pursue ideas they might otherwise abandon.",
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
            description="Exact opportunities depend on program capacity and your availability. These are examples, not guarantees."
          />
          <div className="mt-8 space-y-4">
            {[
              {
                icon: Briefcase,
                title: "Pro bono case support",
                desc: "Assist with patent or trademark matters for qualifying inventors, typically through established pro bono frameworks.",
              },
              {
                icon: GraduationCap,
                title: "Education & workshops",
                desc: "Lead or co-host IP seminars for community groups, schools, or startup programs.",
              },
              {
                icon: Users,
                title: "Mentoring sessions",
                desc: "One-on-one conversations with inventors about their journey, options, and next steps — educational, not legal advice unless under proper pro bono structure.",
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
            eyebrow="Interest form"
            title="Express your interest"
            description="This is a prototype form — submissions are not yet stored. In the full platform, we'll collect your info and follow up after screening."
          />
          <div className="mt-8 max-w-xl space-y-5 rounded-3xl border border-border bg-white p-6 shadow-soft sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="v-first">First name</Label>
                <Input id="v-first" className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="v-last">Last name</Label>
                <Input id="v-last" className="mt-1.5" />
              </div>
            </div>
            <div>
              <Label htmlFor="v-email">Email</Label>
              <Input id="v-email" type="email" className="mt-1.5" />
            </div>
            <div>
              <Label htmlFor="v-type">I am a…</Label>
              <Input
                id="v-type"
                placeholder="e.g., Patent attorney, law student, mentor"
                className="mt-1.5"
              />
            </div>
            <div>
              <Label htmlFor="v-message">Tell us about your interest</Label>
              <Textarea
                id="v-message"
                placeholder="Your background, availability, and how you'd like to help..."
                className="mt-1.5"
              />
            </div>
            <Button type="button" className="w-full sm:w-auto">
              Submit interest (prototype)
            </Button>
            <p className="text-xs text-muted-foreground">
              All volunteers are subject to screening and approval. Submitting
              this form does not create any professional obligation.
            </p>
          </div>
        </section>

        <div className="mt-12">
          <DisclaimerBanner />
        </div>
      </div>
    </div>
  );
}
