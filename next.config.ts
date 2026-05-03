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
    ];
  },
};

export default config;
