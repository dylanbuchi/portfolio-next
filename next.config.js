/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    domains: ['user-images.githubusercontent.com'],
  },
  env: {
    getFormIoEndpoint: process.env.YOUR_FORM_END_POINT,
  },
};

module.exports = nextConfig;
