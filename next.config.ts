import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      afterFiles: [
        // Short influencer URLs: /tigeroo → /ref/tigeroo
        { source: "/:affiliate", destination: "/ref/:affiliate" },
      ],
    };
  },
};

export default nextConfig;
