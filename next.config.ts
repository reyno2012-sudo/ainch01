import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return process.env.NODE_ENV === 'development'
      ? [
        {
          source: '/api/:path*',
          destination: 'https://ainch-git-main-reynos-projects-547cde8f.vercel.app/api/:path*',
        },
      ]
      : [];
  },
};

export default nextConfig;
