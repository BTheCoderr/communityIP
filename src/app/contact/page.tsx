import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { PageHeader } from "@/components/PageHeader";
import { ContactForm } from "@/components/forms/ContactForm";
import { DisclaimerBanner } from "@/components/DisclaimerBanner";
import { CTAButton } from "@/components/CTAButton";
import { Mail, MapPin } from "lucide-react";
import { contact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Community IP.",
};

export default function ContactPage() {
  return (
    <PageShell narrow>
      <PageHeader
        eyebrow="Contact"
        title={contact.title}
        description={contact.intro}
      />

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <div className="border-2 border-navy-900/10 bg-cream-50 p-6">
          <Mail className="mb-3 h-6 w-6 text-blueprint-700" aria-hidden />
          <h2 className="font-display font-bold text-navy-900">Email</h2>
          <a
            href={`mailto:${contact.email}`}
            className="mt-2 inline-block font-mono text-sm text-blueprint-700 hover:underline"
          >
            {contact.email}
          </a>
        </div>
        <div className="border-2 border-navy-900/10 bg-cream-50 p-6">
          <MapPin className="mb-3 h-6 w-6 text-blueprint-700" aria-hidden />
          <h2 className="font-display font-bold text-navy-900">Location</h2>
          <p className="mt-2 text-sm leading-relaxed text-navy-800/75">
            {contact.address.street}
            <br />
            {contact.address.city}, {contact.address.state} {contact.address.zip}
          </p>
        </div>
      </div>

      <div className="mt-10">
        <ContactForm />
        <p className="mt-4 text-xs text-muted-foreground">{contact.formNote}</p>
      </div>

      <div className="mt-10 border-2 border-navy-900/10 bg-blueprint-50 p-6 sm:p-8">
        <h2 className="font-display text-lg font-bold text-navy-900">
          Looking for help with your idea?
        </h2>
        <p className="mt-2 text-sm text-navy-800/75">
          For inventor support, use our readiness checker or intake form.
        </p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <CTAButton href="/readiness-checker">IP Readiness Checker</CTAButton>
          <CTAButton href="/apply" variant="secondary">
            Apply for Help
          </CTAButton>
        </div>
      </div>

      <div className="mt-10">
        <DisclaimerBanner />
      </div>
    </PageShell>
  );
}
