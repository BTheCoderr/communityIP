import type { Config } from "tailwindcss";

/** Sampled from public/brand/community-ip-original-logo-400.png */
const BRAND = {
  green: "#0B5F40",
  greenDark: "#084A32",
  greenSoft: "#E8F2ED",
  cream: "#FAF8F3",
  ink: "#14261C",
  muted: "#5C7268",
} as const;

const communityScale = {
  DEFAULT: BRAND.green,
  50: "#EEF6F2",
  100: "#D5EAE0",
  200: "#ABD5C1",
  300: "#7BB99E",
  400: "#4A9476",
  500: BRAND.green,
  600: "#0A5539",
  700: BRAND.greenDark,
  800: "#063D28",
  900: "#042A1C",
};

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        border: "hsl(var(--border))",
        ring: "hsl(var(--ring))",
        brand: {
          green: BRAND.green,
          "green-dark": BRAND.greenDark,
          "green-soft": BRAND.greenSoft,
          cream: BRAND.cream,
          ink: BRAND.ink,
          muted: BRAND.muted,
        },
        community: communityScale,
        forest: {
          DEFAULT: BRAND.ink,
          800: "#1A3228",
          900: BRAND.ink,
        },
        cream: {
          DEFAULT: BRAND.cream,
          50: "#FDFCF9",
          100: BRAND.cream,
          200: "#F0EDE6",
        },
        navy: {
          DEFAULT: BRAND.greenDark,
          800: "#063D28",
          900: BRAND.ink,
          950: "#042A1C",
        },
        blueprint: {
          DEFAULT: BRAND.green,
          50: communityScale[50],
          100: communityScale[100],
          600: BRAND.green,
          700: BRAND.greenDark,
          800: "#063D28",
        },
        sage: {
          DEFAULT: BRAND.muted,
          100: BRAND.greenSoft,
          200: "#C5D9CB",
          500: "#7BB99E",
          600: BRAND.muted,
          700: "#4A5E56",
        },
        stamp: {
          DEFAULT: BRAND.muted,
          100: BRAND.greenSoft,
          600: "#4A5E56",
        },
        teal: communityScale,
        slate: {
          600: BRAND.muted,
          700: "#4A5E56",
          800: BRAND.ink,
          900: BRAND.ink,
        },
        warm: {
          50: BRAND.cream,
        },
      },
      fontFamily: {
        sans: ['"Source Sans 3"', "system-ui", "sans-serif"],
        display: ['"Source Serif 4"', "Georgia", "serif"],
        heading: ['"Source Serif 4"', "Georgia", "serif"],
        annotate: ['"Source Sans 3"', "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "monospace"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        soft: "0 1px 3px 0 rgba(11, 95, 64, 0.06), 0 1px 2px -1px rgba(11, 95, 64, 0.06)",
        card: "0 4px 14px -2px rgba(11, 95, 64, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
