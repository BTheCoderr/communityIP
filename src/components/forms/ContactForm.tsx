"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { DISCLAIMERS } from "@/lib/content/disclaimers";
import { contactPage } from "@/lib/site";
import {
  submitNetlifyFormElement,
  NETLIFY_FORM_ERROR,
} from "@/lib/netlify-forms";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const labels = contactPage.formLabels;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const ok = await submitNetlifyFormElement(form);

    setLoading(false);

    if (ok) {
      setSubmitted(true);
      form.reset();
    } else {
      setError(NETLIFY_FORM_ERROR);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-3xl border border-community-200 bg-community-50 p-8 text-center">
        <CheckCircle2
          className="mx-auto h-10 w-10 text-community-700"
          aria-hidden
        />
        <h3 className="mt-4 font-heading text-lg font-bold text-forest-900">
          {labels.successTitle}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          {labels.successMessage}
        </p>
      </div>
    );
  }

  return (
    <form
      name="contact"
      method="POST"
      action="/thank-you"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-5 rounded-3xl border border-border bg-white p-6 shadow-soft sm:p-8"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          Don&apos;t fill this out: <input name="bot-field" />
        </label>
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="firstName">{labels.firstName}</Label>
          <Input id="firstName" name="firstName" required className="mt-1.5" />
        </div>
        <div>
          <Label htmlFor="lastName">{labels.lastName}</Label>
          <Input id="lastName" name="lastName" required className="mt-1.5" />
        </div>
      </div>
      <div>
        <Label htmlFor="email">{labels.email}</Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          className="mt-1.5"
        />
      </div>
      <div>
        <Label htmlFor="phone">{labels.phone}</Label>
        <Input id="phone" name="phone" type="tel" className="mt-1.5" />
      </div>
      <div>
        <Label htmlFor="message">{labels.message}</Label>
        <Textarea
          id="message"
          name="message"
          required
          maxLength={180}
          placeholder={labels.messagePlaceholder}
          className="mt-1.5"
        />
        <p className="mt-1 text-xs text-muted-foreground">{labels.messageHelp}</p>
      </div>

      {error && (
        <p className="text-sm text-red-600" role="alert">
          {error}
        </p>
      )}

      <Button type="submit" disabled={loading} className="w-full sm:w-auto">
        {loading ? "Sending…" : labels.submit}
      </Button>
      <p className="text-xs text-muted-foreground">
        {DISCLAIMERS.contactFormNote}
      </p>
    </form>
  );
}
