import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

/**
 * Flat config — Next.js 16 removed `next lint`, so ESLint runs via its own CLI.
 */
const config = [
  ...nextCoreWebVitals,
  {
    ignores: [".next/**", "out/**", "node_modules/**", "public/**"],
  },
];

export default config;
