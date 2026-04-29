/** @type {import('next').NextConfig} */

const { version } = require('./package.json');
const { withSentryConfig } = require('@sentry/nextjs');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  output: 'export',

  images: {
    unoptimized: true,
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.ya?ml$/,
      use: 'yaml-loader',
    });
    return config;
  },

  env: {
    NEXT_PUBLIC_VERSION: version,
  },

  reactStrictMode: true,
};

const sentryOptions = {
  org: 'hyperlane',
  project: 'warp-ui',
  authToken: process.env.SENTRY_AUTH_TOKEN,
  hideSourceMaps: true,
  bundleSizeOptimizations: {
    excludeDebugStatements: true,
    excludeReplayIframe: true,
    excludeReplayShadowDom: true,
  },
};

module.exports = withBundleAnalyzer(withSentryConfig(nextConfig, sentryOptions));
