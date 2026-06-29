import {
  Heart,
  Handshake,
  Lightbulb,
  Users,
  LucideIcon,
} from "lucide-react";

export interface AudiencePath {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  cta: string;
  stamp: string;
}

export const AUDIENCE_PATHS: AudiencePath[] = [
  {
    icon: Lightbulb,
    title: "Inventors who need help",
    description:
      "Apply for intake support to learn what education, mentoring, or IP guidance may fit your situation.",
    href: "/apply",
    cta: "Get IP Help",
    stamp: "INVENTOR",
  },
  {
    icon: Users,
    title: "Volunteers who want to support",
    description:
      "Attorneys, agents, law students, and mentors can lend expertise to underserved inventors.",
    href: "/volunteer",
    cta: "Volunteer with Community IP",
    stamp: "VOLUNTEER",
  },
  {
    icon: Handshake,
    title: "Partners who want to collaborate",
    description:
      "Universities, incubators, and community organizations can co-host events and refer inventors.",
    href: "/partners",
    cta: "Partner with Community IP",
    stamp: "PARTNER",
  },
  {
    icon: Heart,
    title: "Funders who want to support the mission",
    description:
      "Support education workshops, mentoring access, and needs-based IP programs for underserved inventors.",
    href: "/donate",
    cta: "Support the Mission",
    stamp: "DONOR",
  },
];
