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
    // Trade slug redirects: ad campaign URLs like /tradie-insurance/plumbers/
    // redirect to the existing /trades/ pages
    const tradeRedirects = [
      'builders', 'plumbers', 'painters', 'carpenters-woodworkers', 'electricians',
      'bricklayers', 'roofers', 'concreters', 'handymen', 'gasfitters', 'tilers',
      'glaziers', 'landscapers', 'drain-layers', 'scaffolders', 'fencers',
      'plasterers', 'hvac-technicians', 'arborists', 'welders', 'irrigation-specialists',
    ].map((slug) => ({
      source: `/tradie-insurance/${slug}`,
      destination: `/trades/${slug}/`,
      permanent: true,
    }))

    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'tradieinsurance.co.nz' }],
        destination: 'https://www.tradieinsurance.co.nz/:path*',
        permanent: true,
      },
      ...tradeRedirects,
    ]
  },
}

module.exports = nextConfig
