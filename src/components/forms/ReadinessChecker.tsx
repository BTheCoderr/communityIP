"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { DisclaimerBanner } from "@/components/DisclaimerBanner";
import { CTAButton } from "@/components/CTAButton";
import { cn } from "@/lib/utils";

type Answers = Record<string, string>;

interface Question {
  id: string;
  question: string;
  helper?: string;
  options: { value: string; label: string }[];
}

const questions: Question[] = [
  {
    id: "protect",
    question: "What are you trying to protect?",
    options: [
      { value: "invention", label: "A product or invention" },
      { value: "brand", label: "A brand name, logo, or business identity" },
      { value: "creative", label: "Original creative work (art, writing, music)" },
      { value: "business", label: "A business idea or startup concept" },
      { value: "unsure", label: "I'm not sure yet" },
    ],
  },
  {
    id: "disclosed",
    question: "Have you publicly shared your idea?",
    helper:
      "This includes social media, pitch events, websites, or telling people outside a trusted circle.",
    options: [
      { value: "no", label: "No, I haven't shared it publicly" },
      { value: "yes", label: "Yes, I've shared it publicly" },
      { value: "unsure", label: "I'm not sure what counts" },
    ],
  },
  {
    id: "filed",
    question: "Have you filed anything before?",
    options: [
      { value: "no", label: "No, nothing filed yet" },
      { value: "patent", label: "Yes, a patent application" },
      { value: "trademark", label: "Yes, a trademark application" },
      { value: "copyright", label: "Yes, a copyright registration" },
      { value: "unsure", label: "I'm not sure" },
    ],
  },
  {
    id: "selling",
    question: "Are you already selling or marketing it?",
    options: [
      { value: "no", label: "No, still in idea or development stage" },
      { value: "planning", label: "Planning to, but not yet" },
      { value: "yes", label: "Yes, I'm already selling or marketing" },
    ],
  },
  {
    id: "helpType",
    question: "What kind of help are you looking for?",
    options: [
      { value: "education", label: "Education — I want to understand my options" },
      { value: "patent", label: "Patent-related guidance or support" },
      { value: "trademark", label: "Trademark or brand protection help" },
      { value: "copyright", label: "Copyright guidance" },
      { value: "mentoring", label: "Mentoring from someone who's been through this" },
      { value: "funding", label: "Needs-based funding for IP costs" },
      { value: "unsure", label: "Not sure — I need help figuring it out" },
    ],
  },
  {
    id: "concern",
    question: "What is your biggest concern?",
    options: [
      { value: "cost", label: "Cost — I can't afford traditional IP services" },
      { value: "timing", label: "Timing — I'm worried I waited too long" },
      { value: "understanding", label: "Understanding — I don't know where to start" },
      { value: "trust", label: "Trust — I want to make sure this is legitimate" },
      { value: "complexity", label: "Complexity — the process feels overwhelming" },
    ],
  },
  {
    id: "urgency",
    question: "How soon do you need help?",
    options: [
      { value: "urgent", label: "Within the next 2 weeks" },
      { value: "soon", label: "Within 1–3 months" },
      { value: "flexible", label: "No rush — I'm still exploring" },
    ],
  },
];

interface Result {
  title: string;
  summary: string;
  nextStep: string;
  resources: { title: string; href: string }[];
  profileLabel?: string;
}

const RESOURCE_LINKS = {
  patentBasics: { title: "Patent Basics", href: "/education/patent-basics" },
  trademarkBasics: { title: "Trademark Basics", href: "/education/trademark-basics" },
  copyrightBasics: { title: "Copyright Basics", href: "/education/copyright-basics" },
  beforeShare: { title: "Before You Share Your Idea", href: "/education/before-you-share" },
  whatToPrepare: { title: "What to Prepare Before Asking for IP Help", href: "/education/what-to-prepare" },
  comparison: { title: "Patent vs Trademark vs Copyright", href: "/education/patent-vs-trademark-vs-copyright" },
} as const;

function getProfileLabel(answers: Answers): string {
  const labels: Record<string, string> = {
    invention: "product or invention",
    brand: "brand or business identity",
    creative: "original creative work",
    business: "business or startup concept",
    unsure: "idea you're still defining",
  };
  return labels[answers.protect] || "project";
}

function getResult(answers: Answers): Result {
  const { protect, disclosed, helpType, concern, urgency } = answers;
  const profileLabel = getProfileLabel(answers);

  if (protect === "unsure" || helpType === "unsure") {
    return {
      title: "Start with education",
      profileLabel,
      summary:
        `You're working on a ${profileLabel} — and it's completely normal not to know which type of IP applies yet. Learning the basics first can help you ask better questions and make calmer, informed decisions.`,
      nextStep:
        "Browse the Education Hub, starting with our comparison guide. Apply for help anytime you'd like intake support.",
      resources: [
        RESOURCE_LINKS.comparison,
        RESOURCE_LINKS.beforeShare,
        RESOURCE_LINKS.whatToPrepare,
      ],
    };
  }

  if (disclosed === "yes" && protect === "invention") {
    return {
      title: "Learn about disclosure before your next step",
      profileLabel,
      summary:
        "You shared that your invention has been public. Disclosure timing can be an important topic for inventors to understand — we can't assess your specific situation, but learning soon may help you have clearer conversations later.",
      nextStep:
        "Read our guide on sharing ideas, then apply for help if you'd like our team to review your situation for educational routing.",
      resources: [
        RESOURCE_LINKS.beforeShare,
        RESOURCE_LINKS.patentBasics,
        RESOURCE_LINKS.whatToPrepare,
      ],
    };
  }

  if (protect === "brand" || helpType === "trademark") {
    return {
      title: "Brand protection may be worth exploring",
      profileLabel,
      summary:
        "Based on your answers, trademark basics may be a helpful starting point. Trademarks relate to names, logos, and how customers recognize your business — a different path from patents.",
      nextStep:
        "Read Trademark Basics, then apply for help if you'd like intake support tailored to your situation.",
      resources: [
        RESOURCE_LINKS.trademarkBasics,
        RESOURCE_LINKS.comparison,
        RESOURCE_LINKS.whatToPrepare,
      ],
    };
  }

  if (protect === "creative" || helpType === "copyright") {
    return {
      title: "Copyright basics may be relevant",
      profileLabel,
      summary:
        "Original creative work — writing, art, music, software — often connects to copyright. It's a different process from patents, and understanding the basics can help you decide what to explore next.",
      nextStep:
        "Start with Copyright Basics, then apply for help when you're ready for intake support.",
      resources: [
        RESOURCE_LINKS.copyrightBasics,
        RESOURCE_LINKS.comparison,
        RESOURCE_LINKS.whatToPrepare,
      ],
    };
  }

  if (helpType === "funding" || concern === "cost") {
    return {
      title: "You may want to explore needs-based options",
      profileLabel,
      summary:
        "Community IP offers needs-based programs subject to available capacity and funding. We can't guarantee support, but our intake process helps us understand your situation and share options that may fit.",
      nextStep:
        "Apply for help and note your interest in needs-based support. Our team will review and follow up.",
      resources: [
        RESOURCE_LINKS.whatToPrepare,
        RESOURCE_LINKS.patentBasics,
        RESOURCE_LINKS.beforeShare,
      ],
    };
  }

  if (urgency === "urgent") {
    return {
      title: "We'll note your timeline in intake review",
      profileLabel,
      summary:
        "You indicated you need help soon. While we can't guarantee immediate services, applying now helps our team understand your timeline when reviewing your submission.",
      nextStep:
        "Apply for help with as much detail as you can. Explore resources below while you wait.",
      resources: [
        RESOURCE_LINKS.whatToPrepare,
        RESOURCE_LINKS.patentBasics,
        RESOURCE_LINKS.beforeShare,
      ],
    };
  }

  return {
    title: "You're ready for a thoughtful next step",
    profileLabel,
    summary:
      `Based on your answers about your ${profileLabel}, you have a clearer picture of where you are. Community IP can help you learn more and explore education, mentoring, or support options — subject to program capacity.`,
    nextStep:
      "Apply for help so our team can review your situation and suggest appropriate educational resources or referrals.",
    resources: [
      RESOURCE_LINKS.patentBasics,
      RESOURCE_LINKS.whatToPrepare,
      RESOURCE_LINKS.comparison,
    ],
  };
}

export function ReadinessChecker() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [showResult, setShowResult] = useState(false);

  const currentQuestion = questions[step];
  const progress = showResult
    ? 100
    : ((step + 1) / questions.length) * 100;

  const handleSelect = (value: string) => {
    const newAnswers = { ...answers, [currentQuestion.id]: value };
    setAnswers(newAnswers);

    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleBack = () => {
    if (showResult) {
      setShowResult(false);
      setStep(questions.length - 1);
    } else if (step > 0) {
      setStep(step - 1);
    }
  };

  const handleRestart = () => {
    setStep(0);
    setAnswers({});
    setShowResult(false);
  };

  const result = showResult ? getResult(answers) : null;

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-8">
        <div className="mb-2 flex items-center justify-between text-sm text-muted-foreground">
          <span>
            {showResult
              ? "Your results"
              : `Question ${step + 1} of ${questions.length}`}
          </span>
          <span>{Math.round(progress)}%</span>
        </div>
        <Progress value={progress} />
      </div>

      {!showResult && currentQuestion && (
        <div className="rounded-3xl border border-border bg-white p-6 shadow-soft sm:p-8">
          <h2 className="font-heading text-xl font-bold text-slate-800 sm:text-2xl">
            {currentQuestion.question}
          </h2>
          {currentQuestion.helper && (
            <p className="mt-2 text-sm text-muted-foreground">
              {currentQuestion.helper}
            </p>
          )}

          <div className="mt-6 space-y-3">
            {currentQuestion.options.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => handleSelect(option.value)}
                className={cn(
                  "w-full rounded-xl border-2 border-border bg-warm-50 px-5 py-4 text-left text-sm font-medium text-slate-700 transition-all hover:border-teal-300 hover:bg-teal-50 hover:text-teal-900",
                  answers[currentQuestion.id] === option.value &&
                    "border-teal-700 bg-teal-50 text-teal-900"
                )}
              >
                {option.label}
              </button>
            ))}
          </div>

          {step > 0 && (
            <Button
              variant="ghost"
              onClick={handleBack}
              className="mt-6 gap-2"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              Back
            </Button>
          )}
        </div>
      )}

      {showResult && result && (
        <div className="space-y-6">
          <div className="rounded-3xl border border-teal-200 bg-white p-6 shadow-soft sm:p-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-teal-100">
              <CheckCircle2 className="h-6 w-6 text-teal-700" aria-hidden />
            </div>
            <h2 className="font-heading text-2xl font-bold text-slate-800">
              {result.title}
            </h2>
            <p className="mt-1 text-sm text-teal-700">
              Based on your answers about your {result.profileLabel}
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {result.summary}
            </p>

            <div className="mt-6 rounded-xl bg-teal-50 p-5">
              <p className="text-sm font-semibold text-teal-900">
                Recommended next step
              </p>
              <p className="mt-1 text-sm leading-relaxed text-teal-800">
                {result.nextStep}
              </p>
            </div>

            <div className="mt-6">
              <p className="text-sm font-semibold text-slate-800">
                Suggested resources
              </p>
              <ul className="mt-3 space-y-2">
                {result.resources.map((resource) => (
                  <li key={resource.title}>
                    <Link
                      href={resource.href}
                      className="inline-flex items-center gap-1 text-sm font-medium text-teal-700 hover:underline"
                    >
                      {resource.title}
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CTAButton href="/apply" className="flex-1">
                Apply for Help
              </CTAButton>
              <CTAButton href="/education" variant="secondary" className="flex-1">
                Browse Education Hub
              </CTAButton>
            </div>
            <div className="mt-3">
              <Button variant="ghost" onClick={handleRestart} className="w-full sm:w-auto">
                Start over
              </Button>
            </div>
          </div>

          <p className="text-center text-xs leading-relaxed text-muted-foreground">
            These results are general suggestions to help you explore next
            steps — not a legal opinion on your specific situation.
          </p>

          <DisclaimerBanner />
        </div>
      )}
    </div>
  );
}
