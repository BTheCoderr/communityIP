/**
 * Content extracted from communityip.org WordPress (DreamHost).
 * Source: live WP site (2024–2025), blog posts, Spotfund, and board page.
 * Re-import: place WordPress WXR at data/wordpress-export.xml and run
 *   npm run import:wordpress
 */

export const WP_SOURCE = "communityip.org WordPress" as const;

/** Homepage & site-wide mission (original WP copy) */
export const mission = {
  statement:
    "Community IP's mission is to help underserved inventors obtain intellectual property.",
  extended:
    "Community IP wants to change the access gap. Started by two patent professionals in 2024, our goal is to help the vast, untapped well of talent by providing intellectual-property support to inventors who are historically underrepresented.",
  democratize:
    "Community IP will democratize access to intellectual property by offering expert patent services to innovators who might otherwise be unable to afford them — alongside education, mentoring, and needs-based support, subject to program capacity.",
  nonprofitNote: "Community IP is a 501(c)(3) organization.",
} as const;

/** About page — synthesized from WP homepage mission blocks */
export const about = {
  title: "Closing the IP access gap, one inventor at a time",
  intro: `${mission.statement} Founded in 2024 by patent professionals, Community IP is a 501(c)(3) nonprofit closing the gap for inventors left behind — not for lack of ideas, but for lack of access, guidance, and affordable support.`,
  story: [
    "Intellectual property was designed to protect innovation — but the system has never been equally accessible. Women, people of color, and low-income inventors patent at dramatically lower rates. Not because they lack talent, but because they lack the networks, resources, and knowledge that others take for granted.",
    "Community IP was created to change that. We believe every inventor deserves a fair shot at understanding and pursuing IP protection — starting with education, mentoring, and community support, not intimidation.",
    mission.extended,
    "In 2025, we were accepted into Social Enterprise Greenhouse's Impact Accelerator, joining a cohort of mission-driven ventures working toward a more equitable economy.",
  ],
  whoWeServe:
    "Community IP is for inventors and entrepreneurs who have been historically underrepresented in intellectual property — and anyone who needs a supportive, educational first step.",
} as const;

/** Donate / Spotfund (original WP + Spotfund campaign) */
export const donate = {
  title: "Help more inventors get through the first door",
  intro:
    "Community IP is a 501(c)(3) nonprofit. Your support helps us reach underserved inventors with education, mentoring, and needs-based IP programs — subject to available capacity.",
  spotfundUrl: "https://spot.fund/lrsnklsc",
  spotfundCampaignNote:
    "Community IP wants to change this. Started by two patent professionals in 2024, Community IP's goal is to help the vast, untapped well of talent by providing intellectual-property support to inventors who are historically underrepresented.",
  spotfundClosing:
    "Community IP will democratize access to intellectual property by offering expert patent services to innovators who might otherwise be unable to afford them.",
  ctaPrimary: "Contribute via Spotfund",
  ctaSecondary: "Support Community IP",
} as const;

/** Contact page (original WP) */
export const contact = {
  title: "Contact us",
  intro:
    "Questions about our programs, partnerships, or how to get started? Send us a message — we're a small team and do our best to respond promptly.",
  email: "hello@communityip.org",
  address: {
    street: "62 Baxter St",
    city: "Charlestown",
    state: "RI",
    zip: "02813",
  },
  formNote:
    "For inventor support, use Apply for Help. Submitting a form does not create an attorney-client relationship.",
} as const;

/** Board of Directors (original WP /board-of-directors/) */
export const board = {
  title: "Board of Directors",
  intro:
    "Community IP is guided by leaders committed to expanding intellectual property access for underserved inventors and entrepreneurs.",
} as const;

/** Homepage hero (rebrand uses this; sourced from WP mission framing) */
export { home, HERO_IMAGE } from "@/lib/content/home";
export { DISCLAIMERS } from "@/lib/content/disclaimers";
export { coPresidents, boardDirectors, allBoardMembers } from "@/lib/content/team";
