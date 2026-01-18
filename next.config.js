/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  images: {
    unoptimized: true
  },
  experimental: {
    appDir: true
  },
  // Enable static exports for better Vercel performance
  output: 'export',
  // Disable server-side features we don't need
  serverComponentsExternalPackages: [],
  // Optimize for production
  compiler: {
    styledComponents: true,
    emotion: true
  }
}

module.exports = nextConfig