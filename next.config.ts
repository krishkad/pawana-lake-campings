import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export", // required for static export in Next.js 13+
  trailingSlash: true
};

export default nextConfig;
