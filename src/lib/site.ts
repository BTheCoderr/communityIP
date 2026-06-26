/**
 * Site-wide constants — sourced from WordPress content (see content/wordpress.ts)
 */
export {
  mission,
  about,
  donate,
  contact,
  board,
} from "@/lib/content/wordpress";

export { home, HERO_IMAGE } from "@/lib/content/home";
export { DISCLAIMERS } from "@/lib/content/disclaimers";
export {
  coPresidents,
  boardDirectors,
  allBoardMembers,
} from "@/lib/content/team";

export const MISSION_STATEMENT =
  "Community IP's mission is to help underserved inventors obtain intellectual property.";

export const MISSION_EXTENDED =
  "Community IP wants to change the access gap. Started by two patent professionals in 2024, our goal is to help the vast, untapped well of talent by providing intellectual-property support to inventors who are historically underrepresented.";

export const MISSION_DEMOCRATIZE =
  "Community IP will democratize access to intellectual property by offering expert patent services to innovators who might otherwise be unable to afford them — alongside education, mentoring, and needs-based support, subject to program capacity.";

export const SPOTFUND_URL = "https://spot.fund/lrsnklsc";

export const CONTACT_EMAIL = "hello@communityip.org";

export const ORG_ADDRESS = {
  street: "62 Baxter St",
  city: "Charlestown",
  state: "RI",
  zip: "02813",
};

export const PROGRAMS = [
  "Raising awareness by hosting events and seminars about IP, specifically for women and younger adults",
  "Offering low-cost IP services",
  "Mentoring and supporting entrepreneurs and business owners in underrepresented communities",
  "Providing needs-based funding for IP projects",
] as const;

export const ACCESS_STATS = {
  headline: "Only 20% of inventors are people of color. Only 12.8% are women.",
  intro:
    "Entire sectors of the population are under-represented in intellectual property. These creative people are capable of doing something world-changing, but lack the time or resources to develop their inventions.",
  lostEinsteins:
    "Even the best students at under-resourced schools don't have the success of mediocre students of higher income. A 2017 paper by Stanford University's Equality of Opportunity Project found that the top 5% highest-scoring low-income kids were less likely to eventually become inventors than below-average math students from affluent families. The study's authors call these kids \"Lost Einsteins.\"",
  metrics: [
    {
      value: "12.8%",
      label: "of all inventors named on U.S. patents are women",
      source: "USPTO Progress and Potential report",
    },
    {
      value: "3×",
      label: "more likely for white Americans to invent than Black Americans",
      source: "Harvard University research cited by USPTO",
    },
    {
      value: "10×",
      label: "more likely to invent if born in the top 1% of earners vs. below-median income",
      source: "USPTO / Equality of Opportunity Project",
    },
    {
      value: "~20%",
      label: "of inventors are people of color",
      source: "Community IP / industry estimates",
    },
  ],
} as const;
