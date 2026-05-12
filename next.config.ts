import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  async redirects() {
    return [
      {
        source: "/vs/klue",
        destination: "/vs-klue",
        permanent: true,
      },
      {
        source: "/vs/kompyte",
        destination: "/vs-kompyte",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
