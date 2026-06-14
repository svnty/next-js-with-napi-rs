import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  serverExternalPackages: ["rust-lib"],
  distDir: "dist",
};

export default nextConfig;
