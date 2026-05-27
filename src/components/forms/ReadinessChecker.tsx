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
}

function getResult(answers: Answers): Result {
  const { protect, disclosed, helpType, concern, urgency } = answers;

  if (protect === "unsure" || helpType === "unsure") {
    return {
      title: "Start with education",
      summary:
        "Based on your answers, learning the basics may be the best first step. Understanding patents, trademarks, and copyrights will help you ask better questions and make informed decisions — without rushing into anything.",
      nextStep:
        "Explore our Education Hub to learn what type of IP might apply to your situation, then apply for help when you're ready.",
      resources: [
        { title: "Patent vs Trademark vs Copyright", href: "/education" },
        { title: "Before You Share Your Idea", href: "/education" },
        { title: "What to Prepare Before Asking for IP Help", href: "/education" },
      ],
    };
  }

  if (disclosed === "yes" && protect === "invention") {
    return {
      title: "Timing may matter — learn your options soon",
      summary:
        "You've shared your invention publicly, which can affect patent options in some situations. We can't give legal advice, but we recommend learning about disclosure soon and connecting with support that fits your needs.",
      nextStep:
        "Read about public disclosure, then apply for help so our team can review your situation and suggest educational resources or referrals.",
      resources: [
        { title: "Before You Share Your Idea", href: "/education" },
        { title: "Patent Basics", href: "/education" },
        { title: "What to Prepare Before Asking for IP Help", href: "/education" },
      ],
    };
  }

  if (protect === "brand" || helpType === "trademark") {
    return {
      title: "Brand protection may be your focus",
      summary:
        "If you're building a business identity, trademark basics are a good place to start. Trademarks protect names, logos, and branding — different from patents, which protect inventions.",
      nextStep:
        "Learn trademark basics, then apply for help if you'd like our team to review your situation.",
      resources: [
        { title: "Trademark Basics", href: "/education" },
        { title: "Patent vs Trademark vs Copyright", href: "/education" },
        { title: "What to Prepare Before Asking for IP Help", href: "/education" },
      ],
    };
  }

  if (protect === "creative" || helpType === "copyright") {
    return {
      title: "Copyright may apply to your work",
      summary:
        "Original creative works — like writing, art, music, and software — may be protected by copyright. It's often simpler than patent protection, but understanding the basics still helps.",
      nextStep:
        "Start with our copyright guide, then apply if you'd like personalized intake support.",
      resources: [
        { title: "Copyright Basics", href: "/education" },
        { title: "Patent vs Trademark vs Copyright", href: "/education" },
        { title: "What to Prepare Before Asking for IP Help", href: "/education" },
      ],
    };
  }

  if (helpType === "funding" || concern === "cost") {
    return {
      title: "You may be a fit for needs-based support",
      summary:
        "Community IP offers needs-based programs subject to available capacity and funding. We can't guarantee support, but our intake process helps us understand your situation and connect you with options that may fit.",
      nextStep:
        "Apply for help and indicate your interest in needs-based support. Our team will review and follow up.",
      resources: [
        { title: "What to Prepare Before Asking for IP Help", href: "/education" },
        { title: "Patent Basics", href: "/education" },
        { title: "Before You Share Your Idea", href: "/education" },
      ],
    };
  }

  if (urgency === "urgent") {
    return {
      title: "Let's connect you with support soon",
      summary:
        "You've indicated you need help quickly. While we can't guarantee immediate services, applying now helps our team prioritize your intake review and suggest next steps.",
      nextStep:
        "Apply for help today. Include as much detail as you can about your situation and timeline.",
      resources: [
        { title: "What to Prepare Before Asking for IP Help", href: "/education" },
        { title: "Patent Basics", href: "/education" },
        { title: "Before You Share Your Idea", href: "/education" },
      ],
    };
  }

  return {
    title: "You're ready to take the next step",
    summary:
      "Based on your answers, you have a clearer picture of what you're working on. Community IP can help you learn more and connect with education, mentoring, or support options — subject to program capacity.",
    nextStep:
      "Apply for help so our team can review your situation and suggest appropriate resources or referrals.",
    resources: [
      { title: "Patent Basics", href: "/education" },
      { title: "What to Prepare Before Asking for IP Help", href: "/education" },
      { title: "Patent vs Trademark vs Copyright", href: "/education" },
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
              <Button variant="secondary" onClick={handleRestart}>
                Start over
              </Button>
            </div>
          </div>

          <DisclaimerBanner />
        </div>
      )}
    </div>
  );
}
