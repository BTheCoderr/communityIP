"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  submitNetlifyFormElement,
  NETLIFY_FORM_ERROR,
} from "@/lib/netlify-forms";

interface InterestFormProps {
  type: "volunteer" | "partner";
}

export function InterestForm({ type }: InterestFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const formName = type === "volunteer" ? "volunteer-interest" : "partner-interest";

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
      <div className="max-w-xl border-2 border-community-600/20 bg-community-50 p-8 text-center">
        <CheckCircle2
          className="mx-auto h-10 w-10 text-community-700"
          aria-hidden
        />
        <h3 className="mt-4 font-display text-lg font-bold text-navy-900">
          Thank you for your interest
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-navy-800/75">
          {type === "volunteer"
            ? "We'll review your inquiry and follow up if there's a fit — subject to screening and program capacity."
            : "We'll review your partnership inquiry and reach out to explore collaboration."}
        </p>
      </div>
    );
  }

  return (
    <form
      name={formName}
      method="POST"
      action="/thank-you"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="max-w-xl space-y-5 border-2 border-navy-900/10 bg-cream p-6 sm:p-8"
    >
      <input type="hidden" name="form-name" value={formName} />
      <p className="hidden">
        <label>
          Don&apos;t fill this out: <input name="bot-field" />
        </label>
      </p>

      {type === "partner" ? (
        <>
          <div>
            <Label htmlFor="orgName">Organization name</Label>
            <Input id="orgName" name="orgName" required className="mt-1.5" />
          </div>
          <div>
            <Label htmlFor="contactName">Contact name</Label>
            <Input
              id="contactName"
              name="contactName"
              required
              className="mt-1.5"
            />
          </div>
        </>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="firstName">First name</Label>
            <Input
              id="firstName"
              name="firstName"
              required
              className="mt-1.5"
            />
          </div>
          <div>
            <Label htmlFor="lastName">Last name</Label>
            <Input id="lastName" name="lastName" required className="mt-1.5" />
          </div>
        </div>
      )}
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" required className="mt-1.5" />
      </div>
      <div>
        <Label htmlFor="role">
          {type === "volunteer" ? "I am a…" : "Partnership type"}
        </Label>
        <Input
          id="role"
          name="role"
          required
          placeholder={
            type === "volunteer"
              ? "e.g., Patent attorney, law student, mentor"
              : "e.g., Event co-host, referral partner, sponsor"
          }
          className="mt-1.5"
        />
      </div>
      <div>
        <Label htmlFor="message">Tell us about your interest</Label>
        <Textarea
          id="message"
          name="message"
          required
          placeholder={
            type === "volunteer"
              ? "Your background, availability, and how you'd like to help..."
              : "How you'd like to collaborate with Community IP..."
          }
          className="mt-1.5"
        />
      </div>

      {error && (
        <p className="text-sm text-red-600" role="alert">
          {error}
        </p>
      )}

      <Button type="submit" disabled={loading} className="w-full sm:w-auto">
        {loading ? "Submitting…" : "Submit interest"}
      </Button>
      <p className="text-xs leading-relaxed text-muted-foreground">
        {type === "volunteer"
          ? "All volunteers are subject to screening and approval. Submitting this form does not create any professional obligation or attorney-client relationship."
          : "Submitting this form does not create a binding partnership agreement. Our team will follow up to discuss options."}
      </p>
    </form>
  );
}
