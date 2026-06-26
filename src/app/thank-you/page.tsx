import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { CTAButton } from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Thank you",
  description: "Your submission was received.",
  robots: { index: false },
};

const FORM_LABELS: Record<string, string> = {
  contact: "message",
  intake: "application",
  "volunteer-interest": "volunteer interest form",
  "partner-interest": "partnership inquiry",
};

export default async function ThankYouPage({
  searchParams,
}: {
  searchParams: Promise<{ form?: string }>;
}) {
  const { form } = await searchParams;
  const label = form ? FORM_LABELS[form] : "submission";

  return (
    <PageShell narrow>
      <div className="mx-auto max-w-xl py-16 text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-teal-100">
          <CheckCircle2 className="h-8 w-8 text-teal-700" aria-hidden />
        </div>
        <h1 className="font-display text-3xl font-bold text-navy-900">
          Thank you
        </h1>
        <p className="mt-4 text-base leading-relaxed text-navy-800/75">
          {label
            ? `Your ${label} was received. Our team will follow up as soon as we can.`
            : "Your submission was received. Our team will follow up as soon as we can."}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <CTAButton href="/">Return home</CTAButton>
          <Link
            href="/contact"
            className="inline-flex items-center text-sm font-medium text-blueprint-700 hover:underline"
          >
            Contact us
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
