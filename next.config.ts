import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: process.env.NODE_ENV === 'development'
          ? 'https://ainch-git-main-reynos-projects-547cde8f.vercel.app/api/:path*'
          : '/api/index.py',
      },
    ];
  },
};

export default nextConfig;
