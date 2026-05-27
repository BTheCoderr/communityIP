import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { ResourceCard } from "@/components/ResourceCard";
import { CTAButton } from "@/components/CTAButton";
import { DisclaimerBanner } from "@/components/DisclaimerBanner";
import {
  FileText,
  Tag,
  Copyright,
  Share2,
  ClipboardList,
  Scale,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Education Hub",
  description:
    "Free, beginner-friendly intellectual property resources from Community IP.",
};

const resources = [
  {
    title: "Patent Basics",
    description:
      "What patents protect, how they work, and when they might make sense for your invention — explained in plain language.",
    category: "Patents",
    icon: FileText,
    readingTime: "8 min read",
  },
  {
    title: "Trademark Basics",
    description:
      "Learn how trademarks protect brand names, logos, and business identity — and how they're different from patents.",
    category: "Trademarks",
    icon: Tag,
    readingTime: "6 min read",
  },
  {
    title: "Copyright Basics",
    description:
      "Understand what copyright protects, how it applies to creative work, and what you can do without filing anything.",
    category: "Copyright",
    icon: Copyright,
    readingTime: "6 min read",
  },
  {
    title: "Before You Share Your Idea",
    description:
      "Why public disclosure matters for inventors, what counts as sharing, and why timing can be important to understand.",
    category: "Getting started",
    icon: Share2,
    readingTime: "5 min read",
  },
  {
    title: "What to Prepare Before Asking for IP Help",
    description:
      "A practical checklist of information and documents that can help you get the most from intake support.",
    category: "Getting started",
    icon: ClipboardList,
    readingTime: "5 min read",
  },
  {
    title: "Patent vs Trademark vs Copyright",
    description:
      "The most common question we hear — what's the difference, and which one (if any) applies to what you're building?",
    category: "Getting started",
    icon: Scale,
    readingTime: "7 min read",
  },
];

export default function EducationPage() {
  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-teal-700">
            Education Hub
          </p>
          <h1 className="font-heading text-4xl font-bold tracking-tight text-slate-800 sm:text-5xl text-balance">
            Learn IP basics — no law degree required
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Free, beginner-friendly guides to help you understand patents,
            trademarks, and copyrights before you take your next step.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => (
            <ResourceCard
              key={resource.title}
              title={resource.title}
              description={resource.description}
              category={resource.category}
              icon={resource.icon}
              readingTime={resource.readingTime}
            />
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-teal-200 bg-teal-50 p-8 sm:p-10">
          <SectionHeading
            title="Ready for personalized guidance?"
            description="After reading, take the IP Readiness Checker or apply for help to connect with intake support."
          />
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <CTAButton href="/readiness-checker">Take the readiness checker</CTAButton>
            <CTAButton href="/apply" variant="secondary">
              Apply for help
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
