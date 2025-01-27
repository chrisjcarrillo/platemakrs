/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://v2.platemakrs.com/'
      },
      {
        source: '/hassle-free',
        destination: 'https://v2.platemakrs.com/we-design-it'
      },
      {
        source: '/editor',
        has: [
          {
            type: 'query',
            key: 'presetTemplate',
            // the page value will not be available in the
            // destination since value is provided and doesn't
            // use a named capture group e.g. (?<page>home)
            value: '1',
          },
          {
            type: 'query',
            key: 'step',
            // the page value will not be available in the
            // destination since value is provided and doesn't
            // use a named capture group e.g. (?<page>home)
            value: '1',
          },
          {
            type: 'query',
            key: 'pm_source',
            // the page value will not be available in the
            // destination since value is provided and doesn't
            // use a named capture group e.g. (?<page>home)
            value: 'fb',
          },
        ],
        destination: 'https://v2.platemakrs.com/editor/plates/car/premade',
        permanent: true,
      },
      {
        source: '/editor',
        has: [
          {
            type: 'query',
            key: 'presetTemplate',
            // the page value will not be available in the
            // destination since value is provided and doesn't
            // use a named capture group e.g. (?<page>home)
            value: '69',
          },
          {
            type: 'query',
            key: 'step',
            // the page value will not be available in the
            // destination since value is provided and doesn't
            // use a named capture group e.g. (?<page>home)
            value: '1',
          },
          {
            type: 'query',
            key: 'preset',
            // the page value will not be available in the
            // destination since value is provided and doesn't
            // use a named capture group e.g. (?<page>home)
            value: 'true',
          },
          {
            type: 'query',
            key: 'vehicleType',
            // the page value will not be available in the
            // destination since value is provided and doesn't
            // use a named capture group e.g. (?<page>home)
            value: 'Car',
          },
        ],
        destination: 'https://v2.platemakrs.com/editor/plates/car/premade',
        permanent: true,
      },
      {
        source: '/editor',
        has: [
          {
            type: 'query',
            key: 'presetTemplate',
            // the page value will not be available in the
            // destination since value is provided and doesn't
            // use a named capture group e.g. (?<page>home)
            value: '1',
          },
          {
            type: 'query',
            key: 'step',
            // the page value will not be available in the
            // destination since value is provided and doesn't
            // use a named capture group e.g. (?<page>home)
            value: '1',
          },
          {
            type: 'query',
            key: 'vehicleType',
            // the page value will not be available in the
            // destination since value is provided and doesn't
            // use a named capture group e.g. (?<page>home)
            value: 'Car',
          },
        ],
        destination: 'https://v2.platemakrs.com/editor/plates/car/premade',
        permanent: true,
      },
      { 
        source: '/black-red-moto',
        destination: '/editor?presetTemplate=76&step=1&preset=true&vehicleType=Motorcycle',
        permanent: true,
      },
      { 
        source: '/black-white-moto',
        destination: '/editor?presetTemplate=1&step=1&preset=true&vehicleType=Motorcycle',
        permanent: true,
      },
      { 
        source: '/black-white-car',
        destination: '/editor?presetTemplate=69&step=1&preset=true&vehicleType=Car',
        permanent: true,
      },
      { 
        source: '/black-red-car',
        destination: '/editor?presetTemplate=72&step=1&preset=true&vehicleType=Car',
        permanent: true,
      },
      { 
        source: '/black-yellow-car',
        destination: '/editor?presetTemplate=73&step=1&preset=true&vehicleType=Car',
        permanent: true,
      },
      { 
        source: '/black-red-white-car',
        destination: '/editor?presetTemplate=74&step=1&preset=true&vehicleType=Car',
        permanent: true,
      },
      { 
        source: '/black-white-red-car',
        destination: '/editor?presetTemplate=75&step=1&preset=true&vehicleType=Car',
        permanent: true,
      },
      { 
        source: '/trump-1',
        destination: '/editor?presetTemplate=77&step=1&preset=true&vehicleType=Car',
        permanent: true,
      },
      { 
        source: '/trump-2',
        destination: '/editor?presetTemplate=78&step=1&preset=true&vehicleType=Car',
        permanent: true,
      },
      { 
        source: '/trump-3',
        destination: '/editor?presetTemplate=79&step=1&preset=true&vehicleType=Car',
        permanent: true,
      },
      { 
        source: '/trump-4',
        destination: '/editor?presetTemplate=80&step=1&preset=true&vehicleType=Car',
        permanent: true,
      },
      { 
        source: '/trump-5',
        destination: '/editor?presetTemplate=81&step=1&preset=true&vehicleType=Car',
        permanent: true,
      },
    ]
  }
}

module.exports = nextConfig


// Injected content via Sentry wizard below

const { withSentryConfig } = require("@sentry/nextjs");

module.exports = withSentryConfig(
  module.exports,
  {
    // For all available options, see:
    // https://github.com/getsentry/sentry-webpack-plugin#options

    org: "platemakrs",
    project: "platemakrs-prod",
    // authToken: process.env.SENTRY_AUTH_TOKEN,

    // Only print logs for uploading source maps in CI
    silent: !process.env.CI,

    // For all available options, see:
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

    // Upload a larger set of source maps for prettier stack traces (increases build time)
    widenClientFileUpload: true,

    // Route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
    // This can increase your server load as well as your hosting bill.
    // Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
    // side errors will fail.
    tunnelRoute: "/monitoring",

    // Hides source maps from generated client bundles
    hideSourceMaps: true,

    // Automatically tree-shake Sentry logger statements to reduce bundle size
    disableLogger: true,

    // Enables automatic instrumentation of Vercel Cron Monitors. (Does not yet work with App Router route handlers.)
    // See the following for more information:
    // https://docs.sentry.io/product/crons/
    // https://vercel.com/docs/cron-jobs
    automaticVercelMonitors: true,
  }
);
