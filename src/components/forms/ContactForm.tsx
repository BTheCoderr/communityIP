"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { DISCLAIMERS } from "@/lib/content/disclaimers";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(
          formData as unknown as Record<string, string>
        ).toString(),
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        setError(
          "Something went wrong. Please email hello@communityip.org directly."
        );
      }
    } catch {
      setError(
        "Something went wrong. Please email hello@communityip.org directly."
      );
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-3xl border border-teal-200 bg-teal-50 p-8 text-center">
        <CheckCircle2
          className="mx-auto h-10 w-10 text-teal-700"
          aria-hidden
        />
        <h3 className="mt-4 font-heading text-lg font-bold text-slate-800">
          Message sent
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Thank you for reaching out. Our team will respond as soon as we can.
        </p>
      </div>
    );
  }

  return (
    <form
      name="contact"
      method="POST"
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
          <Label htmlFor="firstName">First name</Label>
          <Input id="firstName" name="firstName" required className="mt-1.5" />
        </div>
        <div>
          <Label htmlFor="lastName">Last name</Label>
          <Input id="lastName" name="lastName" required className="mt-1.5" />
        </div>
      </div>
      <div>
        <Label htmlFor="email">Email *</Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          className="mt-1.5"
        />
      </div>
      <div>
        <Label htmlFor="phone">Phone (optional)</Label>
        <Input id="phone" name="phone" type="tel" className="mt-1.5" />
      </div>
      <div>
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          name="message"
          required
          maxLength={180}
          placeholder="How can we help?"
          className="mt-1.5"
        />
        <p className="mt-1 text-xs text-muted-foreground">Max 180 characters</p>
      </div>

      {error && (
        <p className="text-sm text-red-600" role="alert">
          {error}
        </p>
      )}

      <Button type="submit" disabled={loading} className="w-full sm:w-auto">
        {loading ? "Sending…" : "Send message"}
      </Button>
      <p className="text-xs text-muted-foreground">
        {DISCLAIMERS.contactFormNote}
      </p>
    </form>
  );
}
