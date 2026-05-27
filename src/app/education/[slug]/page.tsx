import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/PageHeader";
import { CTAButton } from "@/components/CTAButton";
import { DisclaimerBanner } from "@/components/DisclaimerBanner";
import { educationResources, getResourceBySlug } from "@/lib/education";
import { ArrowLeft, Clock } from "lucide-react";

export function generateStaticParams() {
  return educationResources.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);
  if (!resource) return { title: "Resource not found" };
  return {
    title: resource.title,
    description: resource.description,
  };
}

export default async function EducationArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);
  if (!resource) notFound();

  const Icon = resource.icon;

  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Link
          href="/education"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-teal-700 hover:underline"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          Back to Education Hub
        </Link>

        <div className="mt-8">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
              <Icon className="h-5 w-5" aria-hidden />
            </div>
            <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700">
              {resource.category}
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="h-3.5 w-3.5" aria-hidden />
              {resource.readingTime}
            </span>
          </div>

          <h1 className="font-heading text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl text-balance">
            {resource.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            {resource.description}
          </p>
        </div>

        <div className="mt-8 rounded-2xl border border-teal-200 bg-teal-50 p-5">
          <p className="text-sm font-semibold text-teal-900">Why this matters</p>
          <p className="mt-1 text-sm leading-relaxed text-teal-800">
            {resource.whyItMatters}
          </p>
        </div>

        <div className="prose-section mt-10 space-y-8">
          {resource.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-heading text-xl font-bold text-slate-800">
                {section.heading}
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {section.body}
              </p>
            </section>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-border bg-white p-6 shadow-soft sm:p-8">
          <h2 className="font-heading text-lg font-bold text-slate-800">
            Ready for a next step?
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            This guide is educational only. For personalized intake support,
            take the readiness checker or apply for help.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <CTAButton href="/readiness-checker">Take the readiness checker</CTAButton>
            <CTAButton href="/apply" variant="secondary">
              Apply for help
            </CTAButton>
          </div>
        </div>

        <div className="mt-8">
          <DisclaimerBanner />
        </div>
      </div>
    </div>
  );
}
