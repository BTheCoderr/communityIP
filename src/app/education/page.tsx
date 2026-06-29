import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ResourceCard } from "@/components/ResourceCard";
import { CTAButton } from "@/components/CTAButton";
import { DisclaimerBanner } from "@/components/DisclaimerBanner";
import { educationResources } from "@/lib/education";

export const metadata: Metadata = {
  title: "Education Hub",
  description:
    "Free, beginner-friendly intellectual property resources from Community IP.",
};

export default function EducationPage() {
  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <PageHeader
          eyebrow="Education Hub"
          title="Learn IP basics — no law degree required"
          description="Start here before you spend money or make big decisions. These guides explain patents, trademarks, and copyrights in plain language."
        />

        <div className="mt-10 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4">
          <p className="text-sm leading-relaxed text-amber-900">
            <strong className="font-semibold">New to IP?</strong> Start with{" "}
            <span className="font-medium">Patent vs Trademark vs Copyright</span>,
            then explore the topic that fits what you&apos;re building.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {educationResources.map((resource) => (
            <ResourceCard
              key={resource.slug}
              title={resource.title}
              description={resource.description}
              href={`/education/${resource.slug}`}
              category={resource.category}
              icon={resource.icon}
              readingTime={resource.readingTime}
              whyItMatters={resource.whyItMatters}
            />
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-community-200 bg-community-50 p-8 sm:p-10">
          <h2 className="font-heading text-2xl font-bold text-forest-900">
            Ready for personalized guidance?
          </h2>
          <p className="mt-2 max-w-xl text-muted-foreground">
            After reading, apply for help so our team can review your situation
            and suggest next steps.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <CTAButton href="/apply">Get IP Help</CTAButton>
            <CTAButton href="/contact" variant="secondary">
              Contact Community IP
            </CTAButton>
          </div>
        </div>

        <div className="mt-10">
          <DisclaimerBanner />
        </div>
      </div>
    </div>
  );
}
