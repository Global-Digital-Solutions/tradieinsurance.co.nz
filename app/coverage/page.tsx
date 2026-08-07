import type { Metadata } from 'next'
import Link from 'next/link'
import { coverageTypes } from '@/data/coverage-types'
import { siteConfig } from '@/data/site-config'

export const metadata: Metadata = {
  title: { absolute: 'Tradie Insurance Coverage Types | TradieInsurance.co.nz' },
  description: 'Explore all NZ tradie insurance coverage types — public liability, tools, commercial vehicle, income protection & more. Find the right cover for your trade.',
  alternates: { canonical: `${siteConfig.url}/coverage/` },
  openGraph: {
    type: 'website',
    title: 'Tradie Insurance Coverage Types | TradieInsurance.co.nz',
    description: 'Every type of NZ tradie insurance explained — public liability, tools, commercial vehicle, income protection & more.',
    url: `${siteConfig.url}/coverage/`,
    siteName: 'TradieInsurance.co.nz',
    locale: 'en_NZ',
    images: [{ url: `${siteConfig.url}/og-image.png`, width: 1200, height: 630, alt: 'TradieInsurance.co.nz Coverage Types' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tradie Insurance Coverage Types',
    description: 'Every type of NZ tradie insurance explained — find the right cover for your trade.',
    images: [`${siteConfig.url}/og-image.png`],
  },
}

export default function CoveragePage() {
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Tradie Insurance Coverage Types',
    description: 'All NZ tradie insurance coverage types available through TradieInsurance.co.nz',
    url: `${siteConfig.url}/coverage/`,
    numberOfItems: coverageTypes.length,
    itemListElement: coverageTypes.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: `${c.name} Insurance`,
      url: `${siteConfig.url}/types/${c.slug}/`,
      description: c.description.split('.')[0],
    })),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url + '/' },
      { '@type': 'ListItem', position: 2, name: 'Coverage Types', item: `${siteConfig.url}/coverage/` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="bg-gray-900 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-white">Coverage Types</span>
          </nav>
          <span className="inline-block bg-orange-500/20 border border-orange-400/40 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Coverage Hub
          </span>
          <h1 className="text-4xl font-extrabold text-white mb-4">Tradie Insurance Coverage Types</h1>
          <p className="text-gray-300 text-xl max-w-2xl leading-relaxed">
            From public liability to income protection — every type of tradie insurance explained in plain English.
          </p>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coverageTypes.map((c) => (
              <Link
                key={c.slug}
                href={`/types/${c.slug}/`}
                className="group bg-white border-2 border-gray-100 hover:border-orange-300 rounded-2xl p-6 transition-all hover:shadow-lg"
              >
                <div className="text-4xl mb-4">{c.icon}</div>
                <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">{c.name}</h2>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed">{c.description.split('.')[0]}.</p>
                <div className="flex items-center justify-between">
                  <span className="text-orange-500 font-bold text-sm">From {c.fromPrice}</span>
                  <span className="text-orange-500 text-sm group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 bg-gray-900 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-extrabold text-white mb-4">Not Sure Which Cover You Need?</h2>
            <p className="text-gray-400 mb-6">Our specialist brokers will assess your trade and recommend the right package — for free.</p>
            <Link href="/contact/" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-xl transition-colors">
              Get Free Advice →
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
