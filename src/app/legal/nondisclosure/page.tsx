import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { NondisclosureAgreement } from "@/components/NondisclosureAgreement";

export const metadata: Metadata = {
  title: "Nondisclosure Agreement",
  description:
    "Nondisclosure Agreement for invention disclosures to Keeley DeAngelo, LLP through Community IP intake.",
};

export default function NondisclosurePage() {
  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Link
          href="/legal"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-teal-700 hover:underline"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          Back to Legal
        </Link>

        <div className="mt-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-teal-700">
            Legal
          </p>
          <h1 className="font-heading text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
            Nondisclosure Agreement
          </h1>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            If you apply for help and disclose an invention idea for
            patentability evaluation, you may be asked to agree to this
            Nondisclosure Agreement with Keeley DeAngelo, LLP.
          </p>
        </div>

        <div className="mt-8">
          <NondisclosureAgreement />
        </div>

      </div>
    </div>
  );
}
