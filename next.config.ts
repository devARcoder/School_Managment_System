import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images:{
    remotePatterns:[
      {hostname: "images.pexels.com"}
    ]
  }
  // reactCompiler: true,
};

export default nextConfig;
