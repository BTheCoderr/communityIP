/**
 * Homepage copy and hero image — edit here to update the front page.
 * See README.md → "Updating content"
 */

export const home = {
  headlineLine1: "Your idea matters.",
  headlineLine2: "You shouldn't have to figure out IP alone.",
  subheadline:
    "Community IP helps underserved inventors understand intellectual property, connect with support, and take the next step toward protecting their ideas.",
  ctaPrimary: "Get IP Help",
  ctaSecondary: "Support the Mission",
  nonprofitTag: "501(c)(3) nonprofit · IP access for underserved inventors",
} as const;

export const HERO_IMAGE = {
  src: "/images/hero/inventor-workbench.jpg",
  alt: "Young inventor building and testing a prototype at a worktable",
  placeholder: false as const,
} as const;
