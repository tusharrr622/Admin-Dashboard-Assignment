import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/admin/dashboard", // Proxy request from /api to the external API
        destination: "https://api.socialverseapp.com/admin/dashboard", // External API URL
      },
    ];
  },
};

export default nextConfig;
