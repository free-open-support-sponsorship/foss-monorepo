const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    poweredByHeader: false,
    reactStrictMode: true,
    transpilePackages: ['ui'],
};

module.exports = withBundleAnalyzer(nextConfig);
