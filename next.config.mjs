// next.config.mjs
import pkg from "next";

const { nextConfig } = pkg;

const config = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["example.com"],
  },
  webpack(config, options) {
    // Customize the webpack configuration here
    return config;
  },
  // Add other configurations here
};

export default config;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   typescript: {
//     ignoreBuildErrors: true,
//   },
//   eslint: {
//     ignoreBuildErrors: true,
//   },
// };
