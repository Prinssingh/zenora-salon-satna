import type { NextConfig } from "next";

const nextConfig: NextConfig = {


  images: {
    unoptimized: true,
    remotePatterns: [
        {
          protocol: "https",
          hostname: "www.tfptechnologies.in",
        },]
  },
  output: "export",
  trailingSlash: true,
};

export default nextConfig;
