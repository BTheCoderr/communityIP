/**
 * Leadership and board — edit names, roles, bios, and image paths here.
 * Headshots live in public/team/
 * See README.md → "Updating content"
 */

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin?: string;
}

export const coPresidents: TeamMember[] = [
  {
    id: "ashley-gregory",
    name: "Ashley Gregory",
    role: "Co-President",
    image: "/team/ashley-gregory.jpg",
    bio: "", // TODO: add bio when provided
    linkedin: "https://www.linkedin.com/in/ashleygregory97/",
  },
  {
    id: "scott-keeley",
    name: "Scott Keeley",
    role: "Co-President",
    image: "/team/scott-keeley.jpg",
    bio: "", // TODO: add bio when provided
    linkedin: "https://www.linkedin.com/in/scott-keeley-7a1a4089/",
  },
];

/** Board directors (excluding co-presidents shown separately on About) */
export const boardDirectors: TeamMember[] = [
  {
    id: "phil-auger",
    name: "Phil Auger",
    role: "Board of Directors", // TODO: confirm title if different
    image: "/team/phil-auger.jpg",
    bio: "",
    linkedin: "https://www.linkedin.com/in/phil-a-964391234/",
  },
  {
    id: "bill-cole",
    name: "Bill Cole",
    role: "Board of Directors",
    image: "/team/bill-cole.jpg",
    bio: "",
    linkedin: "https://www.linkedin.com/in/bill-cole-50605715/",
  },
  {
    id: "paul-mcnamara",
    name: "Paul McNamara",
    role: "Board of Directors",
    image: "/team/paul-mcnamara.jpg",
    bio: "",
    linkedin: "https://www.linkedin.com/in/paul-mcnamara-3632b219/",
  },
  {
    id: "holly-platter",
    name: "Holly Platter",
    role: "Board of Directors",
    image: "/team/holly-platter.jpg",
    bio: "",
    linkedin: "https://www.linkedin.com/in/hollyplatter/",
  },
  {
    id: "micah-reyes",
    name: "Micah Reyes",
    role: "Board of Directors",
    image: "/team/micah-reyes.jpg",
    bio: "",
    linkedin: "https://www.linkedin.com/in/micah-reyes-793696147/",
  },
];

/** Full board including co-presidents — for /board page */
export const allBoardMembers: TeamMember[] = [
  ...coPresidents.map((m) => ({ ...m, role: "Co-President" })),
  ...boardDirectors,
];
