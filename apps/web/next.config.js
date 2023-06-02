/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds and Linting.
 */
!process.env.SKIP_ENV_VALIDATION && import("./src/env.mjs");

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  transpilePackages: ["config", "@packages/weaviate"],
  eslint: { ignoreDuringBuilds: false },
  typescript: { ignoreBuildErrors: false },
};

module.exports = nextConfig;
