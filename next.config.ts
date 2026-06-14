import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["rust-lib"],
};

export default nextConfig;
