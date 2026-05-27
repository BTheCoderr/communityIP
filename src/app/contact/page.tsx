import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { DisclaimerBanner } from "@/components/DisclaimerBanner";
import { Mail, MapPin } from "lucide-react";

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
          title="We'd love to hear from you"
          description="Questions about our programs, partnerships, or how to get started? Reach out — we're a small team and do our best to respond promptly."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-border bg-white p-6 shadow-card">
            <Mail className="mb-3 h-6 w-6 text-teal-700" aria-hidden />
            <h2 className="font-heading font-bold text-slate-800">Email</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              For general inquiries, partnerships, or press:
            </p>
            <a
              href="mailto:hello@communityip.org"
              className="mt-2 inline-block text-sm font-semibold text-teal-700 hover:underline"
            >
              hello@communityip.org
            </a>
          </div>
          <div className="rounded-2xl border border-border bg-white p-6 shadow-card">
            <MapPin className="mb-3 h-6 w-6 text-teal-700" aria-hidden />
            <h2 className="font-heading font-bold text-slate-800">Location</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Community IP serves inventors nationally. We&apos;re building
              partnerships across Southern New England and beyond.
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-border bg-white p-6 shadow-soft sm:p-8">
          <h2 className="font-heading text-lg font-bold text-slate-800">
            Looking for help with your idea?
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            For inventor support, start with our readiness checker or intake
            form — that helps us route you faster.
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
