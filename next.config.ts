import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Next 16 writes AGENTS.md/CLAUDE.md on each run; not wanted in this repo.
  agentRules: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.communityip.org",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
