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
        community: {
          DEFAULT: "#1B6B44",
          50: "#F0F7F4",
          100: "#D9EDE3",
          200: "#B3DBC7",
          300: "#7DBF9A",
          400: "#4A9B6E",
          500: "#2E8B57",
          600: "#1B6B44",
          700: "#14532D",
          800: "#0F4124",
          900: "#0A2E19",
        },
        sage: {
          DEFAULT: "#8FAF9A",
          100: "#E8F0EA",
          200: "#C5D9CB",
          500: "#8FAF9A",
          600: "#6B9478",
          700: "#527A60",
        },
        forest: {
          DEFAULT: "#14261C",
          800: "#1A2E24",
          900: "#14261C",
        },
        cream: {
          DEFAULT: "#FAFAF7",
          50: "#FDFDF9",
          100: "#FAFAF7",
          200: "#F0F2EE",
        },
        navy: {
          DEFAULT: "#14532D",
          800: "#0F4124",
          900: "#14532D",
          950: "#0A2E19",
        },
        blueprint: {
          DEFAULT: "#1B6B44",
          50: "#F0F7F4",
          100: "#D9EDE3",
          600: "#1B6B44",
          700: "#14532D",
          800: "#0F4124",
        },
        stamp: {
          DEFAULT: "#6B9478",
          100: "#E8F0EA",
          600: "#527A60",
        },
        teal: {
          DEFAULT: "#4A9B6E",
          50: "#F0F7F4",
          100: "#D9EDE3",
          200: "#B3DBC7",
          300: "#7DBF9A",
          600: "#4A9B6E",
          700: "#1B6B44",
          800: "#14532D",
          900: "#0F4124",
        },
      },
      fontFamily: {
        sans: ['"Source Sans 3"', "system-ui", "sans-serif"],
        display: ['"Source Serif 4"', "Georgia", "serif"],
        annotate: ['"Source Sans 3"', "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "monospace"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        soft: "0 1px 3px 0 rgba(20, 83, 45, 0.06), 0 1px 2px -1px rgba(20, 83, 45, 0.06)",
        card: "0 4px 14px -2px rgba(20, 83, 45, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
