/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Change the output directory for production builds
  distDir: 'out',
  // This enables static HTML export
  output: 'export'
}

module.exports = nextConfig