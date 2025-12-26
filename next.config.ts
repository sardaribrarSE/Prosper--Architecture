import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "panel.prosperarchitects.com",
        pathname: "/public/image/work/**",
      },
    ],
  },
};

export default nextConfig;
