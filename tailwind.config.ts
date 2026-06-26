import type { Config } from "tailwindcss";

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
        navy: {
          DEFAULT: "#0F172A",
          800: "#1E293B",
          900: "#0F172A",
          950: "#0A0F1A",
        },
        cream: {
          DEFAULT: "#F5F1E8",
          50: "#FAF8F4",
          100: "#F5F1E8",
          200: "#EBE4D6",
        },
        blueprint: {
          DEFAULT: "#3D6982",
          50: "#EEF4F7",
          100: "#D4E4ED",
          600: "#3D6982",
          700: "#2F5368",
          800: "#243F50",
        },
        stamp: {
          DEFAULT: "#C17F3A",
          100: "#F5E6D3",
          600: "#C17F3A",
        },
        teal: {
          DEFAULT: "#4A7C7E",
          600: "#4A7C7E",
          700: "#3D6668",
        },
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', "system-ui", "sans-serif"],
        display: ['"Fraunces"', "Georgia", "serif"],
        annotate: ['"Caveat"', "cursive"],
        mono: ["ui-monospace", "SFMono-Regular", "monospace"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 2px)",
      },
      boxShadow: {
        file: "6px 6px 0 0 rgba(15, 23, 42, 0.15)",
        stamp: "3px 3px 0 0 rgba(15, 23, 42, 0.2)",
      },
    },
  },
  plugins: [],
};

export default config;
