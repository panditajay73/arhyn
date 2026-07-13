/** @type {import('next').NextConfig} */
const isGithubPages = process.env.DEPLOY_TARGET === "gh-pages";

// If deploying to https://<user>.github.io/<repo>/,
// set NEXT_PUBLIC_BASE_PATH="/<repo>"
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
  output: "export",

  images: {
    unoptimized: true,
  },

  trailingSlash: true,

  basePath: isGithubPages ? basePath : "",

  assetPrefix: isGithubPages ? basePath : undefined,

  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;