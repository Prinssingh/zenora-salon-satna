import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  reactCompiler: true,
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
