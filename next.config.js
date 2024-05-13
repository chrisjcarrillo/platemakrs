/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    secret: process.env.SECRET,
  },
  publicRuntimeConfig: {
    apiUrl: 'api/v1',
    secret: process.env.SECRET,
  },
  images: {
    domains: [
      'cdn.shopify.com',
      'firebasestorage.googleapis.com'
    ],
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
