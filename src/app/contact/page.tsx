import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { PageHeader } from "@/components/PageHeader";
import { ContactForm } from "@/components/forms/ContactForm";
import { GetInvolvedCards } from "@/components/GetInvolvedCards";
import { Mail, MapPin } from "lucide-react";
import { contact, CONTACT_EMAIL } from "@/lib/site";

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

      <div className="mt-10">
        <p className="eyebrow">How can we help?</p>
        <h2 className="mt-3 font-display text-2xl font-semibold text-forest-900">
          {contact.pathSectionTitle}
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-forest-800/75">
          {contact.pathSectionDescription}
        </p>
        <GetInvolvedCards className="mt-8" />
      </div>

      <p className="mt-8 text-sm leading-relaxed text-forest-800/75">
        {contact.instructions}
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        <div className="border-2 border-community-700/10 bg-community-50 p-6">
          <Mail className="mb-3 h-6 w-6 text-community-700" aria-hidden />
          <h2 className="font-display font-bold text-forest-900">
            {contact.emailLabel}
          </h2>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-2 inline-block font-mono text-sm text-community-700 hover:underline"
          >
            {CONTACT_EMAIL}
          </a>
        </div>
        <div className="border-2 border-community-700/10 bg-community-50 p-6">
          <MapPin className="mb-3 h-6 w-6 text-community-700" aria-hidden />
          <h2 className="font-display font-bold text-forest-900">
            {contact.locationLabel}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-forest-800/75">
            {contact.address.street}
            <br />
            {contact.address.city}, {contact.address.state} {contact.address.zip}
          </p>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="font-display text-xl font-bold text-forest-900">
          {contact.formSectionTitle}
        </h2>
        <p className="mt-2 text-sm text-forest-800/75">
          {contact.formSectionDescription}
        </p>
        <div className="mt-6">
          <ContactForm />
          <p className="mt-4 text-xs text-muted-foreground">{contact.formNote}</p>
        </div>
      </div>

      <p className="mt-8 text-sm text-forest-800/75">{contact.donateSupportText}</p>
    </PageShell>
  );
}
