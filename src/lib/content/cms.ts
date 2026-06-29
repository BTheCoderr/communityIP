import homeJson from "@/content/home.json";
import siteJson from "@/content/site.json";
import aboutJson from "@/content/about.json";
import researchJson from "@/content/research.json";
import disclaimersJson from "@/content/disclaimers.json";
import teamJson from "@/content/team.json";
import boardJson from "@/content/board.json";

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin?: string;
  order?: number;
};

export const home = homeJson;

export const HERO_IMAGE = {
  src: homeJson.heroImage.src,
  alt: homeJson.heroImage.alt,
  placeholder: false as const,
};

export const mission = siteJson.mission;
export const contact = siteJson.contact;
export const board = siteJson.board;
export const donate = siteJson.donate;
export const PROGRAMS = siteJson.programs;
export const social = siteJson.social;
export const ACCESS_STATS = siteJson.accessStats;

export const SPOTFUND_URL = siteJson.donate.spotfundUrl;
export const CONTACT_EMAIL = siteJson.contact.email;
export const ORG_ADDRESS = siteJson.contact.address;

export const about = aboutJson;
export const research = researchJson;

export const DISCLAIMERS = disclaimersJson;

export const coPresidents: TeamMember[] = [...teamJson.coPresidents].sort(
  (a, b) => (a.order ?? 0) - (b.order ?? 0)
);

export const boardDirectors: TeamMember[] = [...boardJson.members].sort(
  (a, b) => (a.order ?? 0) - (b.order ?? 0)
);

export const allBoardMembers: TeamMember[] = [
  ...coPresidents.map((m) => ({ ...m, role: "Co-President" })),
  ...boardDirectors,
];

export const MISSION_STATEMENT = mission.statement;
export const MISSION_EXTENDED = mission.extended;
export const MISSION_DEMOCRATIZE = mission.democratize;
