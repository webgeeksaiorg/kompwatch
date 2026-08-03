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
      {
        source: "/vs-kompetar",
        destination: "/compare/kompwatch-vs-kompetar",
        permanent: true,
      },
      // /compare hub cards link to /vs-{slug} but these three competitors
      // only have /compare/kompwatch-vs-{slug} routes on disk. Redirect to
      // the canonical comparison page so hub cards don't 404.
      {
        source: "/vs-ravenseer",
        destination: "/compare/kompwatch-vs-ravenseer",
        permanent: true,
      },
      {
        source: "/vs-competely",
        destination: "/compare/kompwatch-vs-competely",
        permanent: true,
      },
      {
        source: "/vs-spyglass",
        destination: "/compare/kompwatch-vs-spyglass",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
