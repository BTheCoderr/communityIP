"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Progress } from "@/components/ui/progress";
import { DisclaimerBanner } from "@/components/DisclaimerBanner";
import { CTAButton } from "@/components/CTAButton";
import { generateReferenceNumber } from "@/lib/utils";
import { NondisclosureAgreement } from "@/components/NondisclosureAgreement";
import { NDA_AGREE_LABEL } from "@/lib/nondisclosure";

const STEPS = [
  "Disclaimer",
  "Contact Info",
  "About You",
  "Nondisclosure",
  "Your Idea",
  "Disclosure",
  "Help Needed",
  "Urgency",
  "Consent",
] as const;

interface FormData {
  consentEducational: boolean;
  consentPrivacy: boolean;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  preferredContact: string;
  personaType: string;
  incomeRange: string;
  seekingFunding: string;
  ideaTitle: string;
  ideaDescription: string;
  ideaStage: string;
  industry: string;
  publiclyDisclosed: string;
  disclosureDetails: string;
  offeredForSale: string;
  priorFilings: string;
  priorFilingsDetails: string;
  supportTypes: string[];
  primaryNeed: string;
  urgency: string;
  preferredSupport: string;
  additionalInfo: string;
  consentAccurate: boolean;
  consentContact: boolean;
  consentNda: boolean;
}

const initialFormData: FormData = {
  consentEducational: false,
  consentPrivacy: false,
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  city: "",
  state: "",
  preferredContact: "email",
  personaType: "",
  incomeRange: "",
  seekingFunding: "",
  ideaTitle: "",
  ideaDescription: "",
  ideaStage: "",
  industry: "",
  publiclyDisclosed: "",
  disclosureDetails: "",
  offeredForSale: "",
  priorFilings: "",
  priorFilingsDetails: "",
  supportTypes: [],
  primaryNeed: "",
  urgency: "",
  preferredSupport: "",
  additionalInfo: "",
  consentAccurate: false,
  consentContact: false,
  consentNda: false,
};

const supportOptions = [
  { id: "patent", label: "Patent guidance or support" },
  { id: "trademark", label: "Trademark or brand protection" },
  { id: "copyright", label: "Copyright guidance" },
  { id: "business", label: "Business formation guidance" },
  { id: "education", label: "IP education or workshops" },
  { id: "mentoring", label: "Mentoring" },
  { id: "funding", label: "Needs-based funding for IP costs" },
  { id: "referral", label: "Referral to another program" },
  { id: "unsure", label: "Not sure — I need guidance" },
];

export function IntakeWizard() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [referenceNumber, setReferenceNumber] = useState("");

  const progress = submitted ? 100 : ((step + 1) / STEPS.length) * 100;

  const updateField = <K extends keyof FormData>(
    field: K,
    value: FormData[K]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleSupportType = (id: string) => {
    setFormData((prev) => ({
      ...prev,
      supportTypes: prev.supportTypes.includes(id)
        ? prev.supportTypes.filter((t) => t !== id)
        : [...prev.supportTypes, id],
    }));
  };

  const canProceed = (): boolean => {
    switch (step) {
      case 0:
        return formData.consentEducational && formData.consentPrivacy;
      case 1:
        return (
          !!formData.firstName &&
          !!formData.lastName &&
          !!formData.email &&
          !!formData.city &&
          !!formData.state
        );
      case 2:
        return !!formData.personaType;
      case 3:
        return formData.consentNda;
      case 4:
        return !!formData.ideaTitle && !!formData.ideaDescription;
      case 5:
        return !!formData.publiclyDisclosed && !!formData.priorFilings;
      case 6:
        return formData.supportTypes.length > 0;
      case 7:
        return !!formData.urgency && !!formData.preferredSupport;
      case 8:
        return formData.consentAccurate && formData.consentContact;
      default:
        return true;
    }
  };

  const handleNext = () => {
    if (step < STEPS.length - 1) {
      setStep(step + 1);
    } else {
      setReferenceNumber(generateReferenceNumber());
      setSubmitted(true);
    }
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  if (submitted) {
    return (
      <div className="mx-auto max-w-xl">
        <div className="rounded-3xl border border-teal-200 bg-white p-8 shadow-soft sm:p-10">
          <div className="text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-teal-100">
              <CheckCircle2 className="h-8 w-8 text-teal-700" aria-hidden />
            </div>
            <h2 className="font-heading text-2xl font-bold text-slate-800">
              Application received
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Save your reference number for your records
            </p>
            <p className="mt-2 font-heading text-3xl font-bold tracking-wide text-teal-700">
              {referenceNumber}
            </p>
          </div>

          <div className="mt-8 space-y-4 rounded-2xl bg-warm-50 p-5 text-left">
            <p className="text-sm font-semibold text-slate-800">
              What happens next
            </p>
            <ol className="space-y-3 text-sm leading-relaxed text-muted-foreground">
              <li className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-100 text-xs font-bold text-teal-800">
                  1
                </span>
                Our team reviews your submission within 5–7 business days.
              </li>
              <li className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-100 text-xs font-bold text-teal-800">
                  2
                </span>
                We may suggest educational resources, mentoring, or referrals
                — subject to program capacity.
              </li>
              <li className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-100 text-xs font-bold text-teal-800">
                  3
                </span>
                You&apos;ll receive a follow-up by your preferred contact
                method if we need more information.
              </li>
            </ol>
          </div>

          <p className="mt-6 text-center text-xs leading-relaxed text-muted-foreground">
            This submission does not create an attorney-client relationship
            and does not guarantee services, funding, or representation.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <CTAButton href="/education" variant="secondary">
              Explore resources while you wait
            </CTAButton>
            <CTAButton href="/">Return home</CTAButton>
          </div>
        </div>
        <div className="mt-6">
          <DisclaimerBanner variant="compact" />
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-8">
        <div className="mb-2 flex items-center justify-between text-sm text-muted-foreground">
          <span>
            Step {step + 1} of {STEPS.length}: {STEPS[step]}
          </span>
          <span>{Math.round(progress)}%</span>
        </div>
        <Progress value={progress} />
      </div>

      <div className="rounded-3xl border border-border bg-white p-6 shadow-soft sm:p-8">
        {step === 0 && (
          <div className="space-y-6">
            <div>
              <h2 className="font-heading text-xl font-bold text-slate-800">
                Before you begin
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                This form helps Community IP understand your situation so we can
                connect you with educational resources and support options. This
                is not legal advice, and submitting this form does not create an
                attorney-client relationship.
              </p>
            </div>
            <DisclaimerBanner />
            <div className="space-y-4">
              <label className="flex items-start gap-3 cursor-pointer">
                <Checkbox
                  checked={formData.consentEducational}
                  onCheckedChange={(checked) =>
                    updateField("consentEducational", checked === true)
                  }
                  className="mt-0.5"
                />
                <span className="text-sm leading-relaxed text-slate-700">
                  I understand this is educational and intake support only — not
                  legal advice.
                </span>
              </label>
              <label className="flex items-start gap-3 cursor-pointer">
                <Checkbox
                  checked={formData.consentPrivacy}
                  onCheckedChange={(checked) =>
                    updateField("consentPrivacy", checked === true)
                  }
                  className="mt-0.5"
                />
                <span className="text-sm leading-relaxed text-slate-700">
                  I agree to the{" "}
                  <Link href="/legal" className="font-medium text-teal-700 underline underline-offset-2">
                    privacy policy
                  </Link>{" "}
                  and consent to Community IP storing my information for intake
                  purposes.
                </span>
              </label>
            </div>
          </div>
        )}

        {step === 1 && (
          <div className="space-y-5">
            <h2 className="font-heading text-xl font-bold text-slate-800">
              Contact information
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="firstName">First name *</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => updateField("firstName", e.target.value)}
                  className="mt-1.5"
                />
              </div>
              <div>
                <Label htmlFor="lastName">Last name *</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => updateField("lastName", e.target.value)}
                  className="mt-1.5"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => updateField("email", e.target.value)}
                className="mt-1.5"
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone (optional)</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => updateField("phone", e.target.value)}
                className="mt-1.5"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="city">City *</Label>
                <Input
                  id="city"
                  value={formData.city}
                  onChange={(e) => updateField("city", e.target.value)}
                  className="mt-1.5"
                />
              </div>
              <div>
                <Label htmlFor="state">State *</Label>
                <Input
                  id="state"
                  value={formData.state}
                  onChange={(e) => updateField("state", e.target.value)}
                  className="mt-1.5"
                />
              </div>
            </div>
            <div>
              <Label>Preferred contact method</Label>
              <RadioGroup
                value={formData.preferredContact}
                onValueChange={(v) => updateField("preferredContact", v)}
                className="mt-2"
              >
                <label className="flex items-center gap-2">
                  <RadioGroupItem value="email" />
                  <span className="text-sm">Email</span>
                </label>
                <label className="flex items-center gap-2">
                  <RadioGroupItem value="phone" />
                  <span className="text-sm">Phone</span>
                </label>
              </RadioGroup>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-5">
            <h2 className="font-heading text-xl font-bold text-slate-800">
              About you
            </h2>
            <div>
              <Label>I am a… *</Label>
              <RadioGroup
                value={formData.personaType}
                onValueChange={(v) => updateField("personaType", v)}
                className="mt-2"
              >
                {[
                  "Solo inventor",
                  "Small business owner",
                  "Student",
                  "Nonprofit founder",
                  "Other",
                ].map((option) => (
                  <label key={option} className="flex items-center gap-2">
                    <RadioGroupItem value={option} />
                    <span className="text-sm">{option}</span>
                  </label>
                ))}
              </RadioGroup>
            </div>
            <div>
              <Label>Household income range (optional)</Label>
              <RadioGroup
                value={formData.incomeRange}
                onValueChange={(v) => updateField("incomeRange", v)}
                className="mt-2"
              >
                {[
                  "Under $35,000",
                  "$35,000 – $75,000",
                  "$75,000 – $150,000",
                  "Over $150,000",
                  "Prefer not to say",
                ].map((option) => (
                  <label key={option} className="flex items-center gap-2">
                    <RadioGroupItem value={option} />
                    <span className="text-sm">{option}</span>
                  </label>
                ))}
              </RadioGroup>
            </div>
            <div>
              <Label>Are you seeking needs-based financial support?</Label>
              <RadioGroup
                value={formData.seekingFunding}
                onValueChange={(v) => updateField("seekingFunding", v)}
                className="mt-2"
              >
                {["Yes", "No", "Not sure"].map((option) => (
                  <label key={option} className="flex items-center gap-2">
                    <RadioGroupItem value={option} />
                    <span className="text-sm">{option}</span>
                  </label>
                ))}
              </RadioGroup>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-5">
            <h2 className="font-heading text-xl font-bold text-slate-800">
              Nondisclosure Agreement
            </h2>
            <p className="text-sm text-muted-foreground">
              Before you describe your invention, please read and agree to this
              Nondisclosure Agreement with Keeley DeAngelo, LLP.{" "}
              <Link
                href="/legal/nondisclosure"
                className="font-medium text-teal-700 underline underline-offset-2"
                target="_blank"
              >
                View full agreement
              </Link>
            </p>
            <NondisclosureAgreement compact />
            <label className="flex items-start gap-3 cursor-pointer rounded-xl border border-border bg-warm-50 p-4">
              <Checkbox
                checked={formData.consentNda}
                onCheckedChange={(checked) =>
                  updateField("consentNda", checked === true)
                }
                className="mt-0.5"
              />
              <span className="text-sm leading-relaxed text-slate-700">
                <span className="font-semibold text-slate-800">AGREE — </span>
                {NDA_AGREE_LABEL}
              </span>
            </label>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-5">
            <h2 className="font-heading text-xl font-bold text-slate-800">
              Your idea or business
            </h2>
            <div>
              <Label htmlFor="ideaTitle">Short title for your idea *</Label>
              <Input
                id="ideaTitle"
                placeholder="e.g., Portable water filtration device"
                value={formData.ideaTitle}
                onChange={(e) => updateField("ideaTitle", e.target.value)}
                className="mt-1.5"
              />
            </div>
            <div>
              <Label htmlFor="ideaDescription">
                Describe your invention, product, or business *
              </Label>
              <Textarea
                id="ideaDescription"
                placeholder="Tell us what you're working on in a few sentences..."
                value={formData.ideaDescription}
                onChange={(e) =>
                  updateField("ideaDescription", e.target.value)
                }
                className="mt-1.5"
              />
            </div>
            <div>
              <Label>What stage are you at?</Label>
              <RadioGroup
                value={formData.ideaStage}
                onValueChange={(v) => updateField("ideaStage", v)}
                className="mt-2"
              >
                {[
                  "Idea only",
                  "Prototype or working model",
                  "Already selling or marketing",
                  "Other",
                ].map((option) => (
                  <label key={option} className="flex items-center gap-2">
                    <RadioGroupItem value={option} />
                    <span className="text-sm">{option}</span>
                  </label>
                ))}
              </RadioGroup>
            </div>
            <div>
              <Label htmlFor="industry">Industry or category (optional)</Label>
              <Input
                id="industry"
                placeholder="e.g., Health tech, Food & beverage, Apparel"
                value={formData.industry}
                onChange={(e) => updateField("industry", e.target.value)}
                className="mt-1.5"
              />
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="space-y-5">
            <h2 className="font-heading text-xl font-bold text-slate-800">
              Public disclosure & prior filings
            </h2>
            <p className="text-sm text-muted-foreground">
              This helps us route you to the right resources. We are not giving
              legal advice — just gathering information for intake.
            </p>
            <div>
              <Label>Have you publicly shared this idea? *</Label>
              <RadioGroup
                value={formData.publiclyDisclosed}
                onValueChange={(v) => updateField("publiclyDisclosed", v)}
                className="mt-2"
              >
                {["No", "Yes", "Not sure"].map((option) => (
                  <label key={option} className="flex items-center gap-2">
                    <RadioGroupItem value={option} />
                    <span className="text-sm">{option}</span>
                  </label>
                ))}
              </RadioGroup>
            </div>
            {formData.publiclyDisclosed === "Yes" && (
              <div>
                <Label htmlFor="disclosureDetails">
                  When and how did you share it?
                </Label>
                <Textarea
                  id="disclosureDetails"
                  value={formData.disclosureDetails}
                  onChange={(e) =>
                    updateField("disclosureDetails", e.target.value)
                  }
                  className="mt-1.5"
                />
              </div>
            )}
            <div>
              <Label>Have you sold or offered to sell this invention?</Label>
              <RadioGroup
                value={formData.offeredForSale}
                onValueChange={(v) => updateField("offeredForSale", v)}
                className="mt-2"
              >
                {["No", "Yes", "Not sure"].map((option) => (
                  <label key={option} className="flex items-center gap-2">
                    <RadioGroupItem value={option} />
                    <span className="text-sm">{option}</span>
                  </label>
                ))}
              </RadioGroup>
            </div>
            <div>
              <Label>
                Have you filed a patent, trademark, or copyright before? *
              </Label>
              <RadioGroup
                value={formData.priorFilings}
                onValueChange={(v) => updateField("priorFilings", v)}
                className="mt-2"
              >
                {["No", "Yes", "Not sure"].map((option) => (
                  <label key={option} className="flex items-center gap-2">
                    <RadioGroupItem value={option} />
                    <span className="text-sm">{option}</span>
                  </label>
                ))}
              </RadioGroup>
            </div>
            {formData.priorFilings === "Yes" && (
              <div>
                <Label htmlFor="priorFilingsDetails">Please describe</Label>
                <Textarea
                  id="priorFilingsDetails"
                  value={formData.priorFilingsDetails}
                  onChange={(e) =>
                    updateField("priorFilingsDetails", e.target.value)
                  }
                  className="mt-1.5"
                />
              </div>
            )}
          </div>
        )}

        {step === 6 && (
          <div className="space-y-5">
            <h2 className="font-heading text-xl font-bold text-slate-800">
              What kind of help do you need?
            </h2>
            <p className="text-sm text-muted-foreground">
              Select all that apply. *
            </p>
            <div className="space-y-3">
              {supportOptions.map((option) => (
                <label
                  key={option.id}
                  className="flex items-start gap-3 cursor-pointer rounded-xl border border-border p-4 hover:bg-teal-50/50"
                >
                  <Checkbox
                    checked={formData.supportTypes.includes(option.id)}
                    onCheckedChange={() => toggleSupportType(option.id)}
                    className="mt-0.5"
                  />
                  <span className="text-sm text-slate-700">{option.label}</span>
                </label>
              ))}
            </div>
            {formData.supportTypes.length > 1 && (
              <div>
                <Label htmlFor="primaryNeed">
                  What is your primary need? (optional)
                </Label>
                <Input
                  id="primaryNeed"
                  placeholder="e.g., Patent guidance"
                  value={formData.primaryNeed}
                  onChange={(e) => updateField("primaryNeed", e.target.value)}
                  className="mt-1.5"
                />
              </div>
            )}
          </div>
        )}

        {step === 7 && (
          <div className="space-y-5">
            <h2 className="font-heading text-xl font-bold text-slate-800">
              Urgency & preferences
            </h2>
            <div>
              <Label>How soon do you need help? *</Label>
              <RadioGroup
                value={formData.urgency}
                onValueChange={(v) => updateField("urgency", v)}
                className="mt-2"
              >
                {[
                  "Within 2 weeks",
                  "Within 1–3 months",
                  "No rush — still exploring",
                ].map((option) => (
                  <label key={option} className="flex items-center gap-2">
                    <RadioGroupItem value={option} />
                    <span className="text-sm">{option}</span>
                  </label>
                ))}
              </RadioGroup>
            </div>
            <div>
              <Label>Preferred type of support *</Label>
              <RadioGroup
                value={formData.preferredSupport}
                onValueChange={(v) => updateField("preferredSupport", v)}
                className="mt-2"
              >
                {[
                  "Self-serve education",
                  "One-on-one mentoring",
                  "Low-cost services",
                  "Pro bono referral",
                  "Needs-based funding application",
                ].map((option) => (
                  <label key={option} className="flex items-center gap-2">
                    <RadioGroupItem value={option} />
                    <span className="text-sm">{option}</span>
                  </label>
                ))}
              </RadioGroup>
            </div>
            <div>
              <Label htmlFor="additionalInfo">
                Anything else we should know? (optional)
              </Label>
              <Textarea
                id="additionalInfo"
                value={formData.additionalInfo}
                onChange={(e) => updateField("additionalInfo", e.target.value)}
                className="mt-1.5"
              />
            </div>
          </div>
        )}

        {step === 8 && (
          <div className="space-y-6">
            <h2 className="font-heading text-xl font-bold text-slate-800">
              Review & submit
            </h2>
            <DisclaimerBanner />
            <p className="text-sm leading-relaxed text-muted-foreground">
              Community IP provides educational information and intake support.
              We are not your attorneys. Submitting this application does not
              guarantee services, funding, or pro bono representation. Our team
              will review your submission and respond within 5–7 business days.
            </p>
            <div className="space-y-4">
              <label className="flex items-start gap-3 cursor-pointer">
                <Checkbox
                  checked={formData.consentAccurate}
                  onCheckedChange={(checked) =>
                    updateField("consentAccurate", checked === true)
                  }
                  className="mt-0.5"
                />
                <span className="text-sm leading-relaxed text-slate-700">
                  I confirm the information provided is accurate to the best of
                  my knowledge.
                </span>
              </label>
              <label className="flex items-start gap-3 cursor-pointer">
                <Checkbox
                  checked={formData.consentContact}
                  onCheckedChange={(checked) =>
                    updateField("consentContact", checked === true)
                  }
                  className="mt-0.5"
                />
                <span className="text-sm leading-relaxed text-slate-700">
                  I consent to be contacted by Community IP about my application.
                </span>
              </label>
            </div>
          </div>
        )}

        <div className="mt-8 space-y-3">
          {!canProceed() && (
            <p className="text-center text-sm text-amber-700" role="status">
              Please complete all required fields to continue.
            </p>
          )}
          <div className="flex items-center justify-between gap-4">
          {step > 0 ? (
            <Button variant="ghost" onClick={handleBack} className="gap-2">
              <ArrowLeft className="h-4 w-4" aria-hidden />
              Back
            </Button>
          ) : (
            <div />
          )}
          <Button
            onClick={handleNext}
            disabled={!canProceed()}
            className="gap-2"
          >
            {step === STEPS.length - 1 ? "Submit application" : "Continue"}
            {step < STEPS.length - 1 && (
              <ArrowRight className="h-4 w-4" aria-hidden />
            )}
          </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
