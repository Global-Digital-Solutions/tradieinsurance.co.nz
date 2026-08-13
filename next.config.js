/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'tradieinsurance.co.nz' }],
        destination: 'https://www.tradieinsurance.co.nz/:path*',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
