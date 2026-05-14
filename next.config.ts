import type { NextConfig } from "next";

const config: NextConfig = {
  reactStrictMode: true,
  bundlePagesRouterDependencies: true,
  async redirects() {
    return [
      {
        source: "/de/fruehzugang",
        destination: "/de/early-access",
        permanent: true,
      },
      {
        // The /test preview URL is now the production homepage.
        source: "/test",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default config;
