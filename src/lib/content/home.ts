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

/**
 * Homepage hero image — swap src when the original WordPress "boy maker" image is available.
 *
 * TODO: Replace placeholder with original Community IP boy maker image from WordPress.
 *       Drop the file in public/images/hero/ and update `src` below.
 */
export const HERO_IMAGE = {
  src: "/images/hero/placeholder.svg",
  alt: "Young inventor working on a project — placeholder until original Community IP hero image is added",
  placeholder: true as const,
} as const;
