const path = require("path");

const nextConfig = {
  output: "export",
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    // Skip ESLint during production builds to speed up build times.
    // Linting should be run in CI or locally with `npm run lint`.
    ignoreDuringBuilds: true,
  },
};
module.exports = nextConfig;
