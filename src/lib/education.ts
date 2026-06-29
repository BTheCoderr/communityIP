import {
  FileText,
  Tag,
  Copyright,
  Share2,
  ClipboardList,
  Scale,
  LucideIcon,
} from "lucide-react";

export interface EducationResource {
  slug: string;
  title: string;
  description: string;
  whyItMatters: string;
  category: string;
  icon: LucideIcon;
  readingTime: string;
  sections: { heading: string; body: string }[];
}

export const educationResources: EducationResource[] = [
  {
    slug: "patent-basics",
    title: "Patent Basics",
    description:
      "What patents protect, how they work, and when they might be worth exploring — explained in plain language.",
    whyItMatters:
      "Many inventors assume they need a patent before doing anything else. Understanding the basics helps you ask better questions and avoid costly mistakes.",
    category: "Patents",
    icon: FileText,
    readingTime: "8 min read",
    sections: [
      {
        heading: "What is a patent?",
        body: "A patent is a form of intellectual property that may protect new inventions — products, processes, or designs — for a limited time. It does not guarantee commercial success, but it may give you exclusive rights to make, use, or sell your invention in the country where the patent is granted.",
      },
      {
        heading: "What patents do not do",
        body: "Patents do not protect ideas alone — they generally protect specific implementations. They are not automatic; you typically need to apply through a formal process. Community IP can help you learn about options, but we cannot tell you whether your invention is patentable.",
      },
      {
        heading: "When to learn more",
        body: "If you have a product, device, or process you believe is new and useful, patent basics are worth understanding early — especially before publicly sharing details. Apply for intake support when you're ready for personalized guidance.",
      },
    ],
  },
  {
    slug: "trademark-basics",
    title: "Trademark Basics",
    description:
      "How trademarks protect brand names, logos, and business identity — and why they're different from patents.",
    whyItMatters:
      "If customers know you by a name or logo, that identity may be one of your most valuable assets. Trademarks are often the right starting point for business owners.",
    category: "Trademarks",
    icon: Tag,
    readingTime: "6 min read",
    sections: [
      {
        heading: "What is a trademark?",
        body: "A trademark protects words, phrases, symbols, or designs that identify the source of goods or services — like your business name, logo, or tagline. It helps customers distinguish your brand from others in the marketplace.",
      },
      {
        heading: "Trademark vs. patent",
        body: "Patents generally protect inventions. Trademarks protect branding. If you're launching a business or selling under a specific name, trademark basics may be more relevant than patent basics.",
      },
      {
        heading: "Common first steps",
        body: "Many entrepreneurs start by searching whether similar names or marks already exist, then learning about registration options. Community IP can help you understand options and connect with intake support when appropriate.",
      },
    ],
  },
  {
    slug: "copyright-basics",
    title: "Copyright Basics",
    description:
      "What copyright protects, how it applies to creative work, and what creators should know early on.",
    whyItMatters:
      "If you write, design, record, or code original work, copyright may already apply in some form. Knowing the basics helps you understand your options.",
    category: "Copyright",
    icon: Copyright,
    readingTime: "6 min read",
    sections: [
      {
        heading: "What is copyright?",
        body: "Copyright protects original creative works — like writing, art, music, photography, and software — from unauthorized copying and distribution. In the U.S., copyright often exists automatically when a work is created and fixed in a tangible form.",
      },
      {
        heading: "Registration vs. protection",
        body: "Registration can provide additional benefits in some situations, but it is not always required for basic protection to exist. The details depend on your work and goals — a licensed attorney can advise you on your specific situation.",
      },
      {
        heading: "Who this guide is for",
        body: "Artists, authors, musicians, developers, and anyone creating original content can benefit from understanding copyright basics before sharing or licensing their work.",
      },
    ],
  },
  {
    slug: "before-you-share",
    title: "Before You Share Your Idea",
    description:
      "Why public disclosure matters for inventors, what counts as sharing, and why timing can be important to understand.",
    whyItMatters:
      "Many inventors share ideas on social media, at pitch events, or with friends before understanding how disclosure can affect IP options. This guide helps you think before you share.",
    category: "Getting started",
    icon: Share2,
    readingTime: "5 min read",
    sections: [
      {
        heading: "What counts as public disclosure?",
        body: "Public disclosure can include posting online, presenting at a public event, publishing details, or offering to sell — depending on context. If you're unsure whether something counts, that uncertainty itself is a signal to learn more before sharing further.",
      },
      {
        heading: "Why timing can matter",
        body: "For some inventions, public disclosure may affect patent options in certain countries or situations. Community IP can help you understand why this topic matters and what questions to ask before sharing further.",
      },
      {
        heading: "Practical habits",
        body: "Keep dated records of your development process. Be thoughtful about who you share with and how. When in doubt, pause and learn before a public announcement.",
      },
    ],
  },
  {
    slug: "what-to-prepare",
    title: "What to Prepare Before Asking for IP Help",
    description:
      "A practical checklist so you can get the most from intake support and conversations.",
    whyItMatters:
      "Coming prepared — even with rough notes — helps our team understand your situation faster and suggest more useful next steps.",
    category: "Getting started",
    icon: ClipboardList,
    readingTime: "5 min read",
    sections: [
      {
        heading: "Describe your idea clearly",
        body: "Write a short plain-language summary: what it is, who it's for, and what problem it solves. You don't need technical jargon — clarity matters more than polish.",
      },
      {
        heading: "Note your timeline",
        body: "Have you shared the idea publicly? Are you already selling? Have you filed anything before? Honest answers help with routing, even if you're not sure what counts.",
      },
      {
        heading: "Know what you're asking for",
        body: "Are you looking for education, mentoring, affordable services, or needs-based support? It's okay to say \"I'm not sure\" — that's what our intake form is for.",
      },
    ],
  },
  {
    slug: "patent-vs-trademark-vs-copyright",
    title: "Patent vs Trademark vs Copyright",
    description:
      "Patents, trademarks, and copyrights protect different kinds of work. Understanding the difference can help you decide what questions to ask and what next step may be appropriate.",
    whyItMatters:
      "Choosing the wrong type of IP to focus on can waste time and resources. This overview helps you orient before diving deeper.",
    category: "Getting started",
    icon: Scale,
    readingTime: "7 min read",
    sections: [
      {
        heading: "Quick comparison",
        body: "Patents can protect eligible inventions, products, systems, methods, and improvements. Trademarks protect brand identifiers like names and logos. Copyright protects original creative expression. Many businesses use more than one type over time.",
      },
      {
        heading: "Which may apply to you?",
        body: "Built a new device or process? Start with patent basics. Launching a brand or business name? Look at trademarks. Created art, writing, music, or code? Copyright may be relevant. Still unsure? Apply for intake support.",
      },
      {
        heading: "You can use more than one",
        body: "A single business might eventually pursue trademarks for its brand, copyrights for its content, and patents for its products. You don't have to figure it all out at once — start with what you're building today.",
      },
    ],
  },
];

export function getResourceBySlug(slug: string) {
  return educationResources.find((r) => r.slug === slug);
}
