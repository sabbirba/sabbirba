const path = require("path");
const { withSentryConfig } = require("@sentry/nextjs");

const nextConfig = {
  output: "export",
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**.githubusercontent.com" },
      { protocol: "https", hostname: "**.github.com" },
      { protocol: "https", hostname: "**.amazonaws.com" },
    ],
  },
  webpack: (config) => {
    config.ignoreWarnings = [
      {
        message:
          /Critical dependency: the request of a dependency is an expression/,
      },
      {
        message:
          /Critical dependency: require function is used in a way in which dependencies cannot be statically extracted/,
      },
    ];
    return config;
  },
};
module.exports = nextConfig;
