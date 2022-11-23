/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'res.strapi.com'],
  },
}

module.exports = nextConfig
