/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export — required for GitHub Pages (no Node server at runtime).
  output: "export",
  reactStrictMode: true,
  // Emit each route as a folder with index.html so GitHub Pages serves it directly.
  trailingSlash: true,
  // GitHub Pages can't run the Next.js Image Optimization API.
  images: { unoptimized: true },
};

module.exports = nextConfig;
