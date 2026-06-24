import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { ContactForm } from "@/components/forms/ContactForm";
import { DisclaimerBanner } from "@/components/DisclaimerBanner";
import { Mail, MapPin } from "lucide-react";
import { CONTACT_EMAIL, ORG_ADDRESS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Community IP.",
};

export default function ContactPage() {
  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <PageHeader
          eyebrow="Contact"
          title="Contact us"
          description="Questions about our programs, partnerships, or how to get started? Send us a message — we're a small team and do our best to respond promptly."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-border bg-white p-6 shadow-card">
            <Mail className="mb-3 h-6 w-6 text-teal-700" aria-hidden />
            <h2 className="font-heading font-bold text-slate-800">Email</h2>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-2 inline-block text-sm font-semibold text-teal-700 hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
          <div className="rounded-2xl border border-border bg-white p-6 shadow-card">
            <MapPin className="mb-3 h-6 w-6 text-teal-700" aria-hidden />
            <h2 className="font-heading font-bold text-slate-800">Location</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {ORG_ADDRESS.street}
              <br />
              {ORG_ADDRESS.city}, {ORG_ADDRESS.state} {ORG_ADDRESS.zip}
            </p>
          </div>
        </div>

        <div className="mt-10">
          <ContactForm />
        </div>

        <div className="mt-10 rounded-3xl border border-border bg-warm-50 p-6 sm:p-8">
          <h2 className="font-heading text-lg font-bold text-slate-800">
            Looking for help with your idea?
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            For inventor support, use our readiness checker or intake form.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/readiness-checker"
              className="inline-flex h-11 items-center justify-center rounded-xl bg-teal-700 px-6 text-sm font-semibold text-white hover:bg-teal-800"
            >
              IP Readiness Checker
            </Link>
            <Link
              href="/apply"
              className="inline-flex h-11 items-center justify-center rounded-xl border-2 border-teal-700 px-6 text-sm font-semibold text-teal-800 hover:bg-teal-50"
            >
              Apply for Help
            </Link>
          </div>
        </div>

        <div className="mt-10">
          <DisclaimerBanner />
        </div>
      </div>
    </div>
  );
}
