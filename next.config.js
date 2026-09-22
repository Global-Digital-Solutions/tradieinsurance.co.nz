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
      // Merged into the builders trade page (Sept 2026): two pages were
      // competing for "builders insurance nz".
      { source: '/tradie-insurance/builder-insurance-nz/', destination: '/trades/builders/', permanent: true },
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
