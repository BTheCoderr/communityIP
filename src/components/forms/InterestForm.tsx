"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface InterestFormProps {
  type: "volunteer" | "partner";
}

export function InterestForm({ type }: InterestFormProps) {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="max-w-xl rounded-3xl border border-teal-200 bg-teal-50 p-8 text-center">
        <CheckCircle2
          className="mx-auto h-10 w-10 text-teal-700"
          aria-hidden
        />
        <h3 className="mt-4 font-heading text-lg font-bold text-slate-800">
          Thank you for your interest
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {type === "volunteer"
            ? "We'll review your inquiry and follow up if there's a fit — subject to screening and program capacity."
            : "We'll review your partnership inquiry and reach out to explore collaboration."}
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-xl space-y-5 rounded-3xl border border-border bg-white p-6 shadow-soft sm:p-8">
      {type === "partner" ? (
        <>
          <div>
            <Label htmlFor="org">Organization name</Label>
            <Input id="org" className="mt-1.5" />
          </div>
          <div>
            <Label htmlFor="contact">Contact name</Label>
            <Input id="contact" className="mt-1.5" />
          </div>
        </>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="first">First name</Label>
            <Input id="first" className="mt-1.5" />
          </div>
          <div>
            <Label htmlFor="last">Last name</Label>
            <Input id="last" className="mt-1.5" />
          </div>
        </div>
      )}
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" className="mt-1.5" />
      </div>
      <div>
        <Label htmlFor="role">
          {type === "volunteer" ? "I am a…" : "Partnership type"}
        </Label>
        <Input
          id="role"
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
          placeholder={
            type === "volunteer"
              ? "Your background, availability, and how you'd like to help..."
              : "How you'd like to collaborate with Community IP..."
          }
          className="mt-1.5"
        />
      </div>
      <Button
        type="button"
        className="w-full sm:w-auto"
        onClick={() => setSubmitted(true)}
      >
        Submit interest
      </Button>
      <p className="text-xs leading-relaxed text-muted-foreground">
        {type === "volunteer"
          ? "All volunteers are subject to screening and approval. Submitting this form does not create any professional obligation or attorney-client relationship."
          : "Submitting this form does not create a binding partnership agreement. Our team will follow up to discuss options."}
      </p>
    </div>
  );
}
