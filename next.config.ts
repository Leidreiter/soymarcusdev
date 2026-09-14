import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  distDir: process.env.NODE_ENV === "production" ? ".next" : ".build-next",
};

export default nextConfig;
