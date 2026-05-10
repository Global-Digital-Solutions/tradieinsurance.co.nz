import type { Metadata } from 'next'
import Link from 'next/link'
import { tradeTypes } from '@/data/trade-types'
import { siteConfig } from '@/data/site-config'

export const metadata: Metadata = {
  title: 'Tradie Insurance by Trade Type NZ | All Trades Covered',
  description: 'Find insurance for every NZ trade — builders, plumbers, electricians, painters, roofers & more. Specialist cover matched to your trade\'s specific risks.',
  alternates: { canonical: `${siteConfig.url}/trades/` },
}

export default function TradesPage() {
  return (
    <>
      <div className="bg-gray-900 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-white">Trade Types</span>
          </nav>
          <span className="inline-block bg-orange-500/20 border border-orange-400/40 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Trade Types
          </span>
          <h1 className="text-4xl font-extrabold text-white mb-4">Insurance for Every NZ Trade</h1>
          <p className="text-gray-300 text-xl max-w-2xl leading-relaxed">
            Different trades carry different risks. Find cover designed specifically for your trade type.
          </p>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tradeTypes.map((t) => (
              <Link
                key={t.slug}
                href={`/trades/${t.slug}/`}
                className="group bg-white border-2 border-gray-100 hover:border-orange-200 rounded-2xl p-6 transition-all hover:shadow-lg"
              >
                <div className="text-4xl mb-4">{t.icon}</div>
                <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">{t.name}</h2>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed">{t.description.split('.')[0]}.</p>
                <div className="flex flex-wrap gap-2">
                  {t.recommendedCover.slice(0, 3).map((slug) => (
                    <span key={slug} className="text-xs bg-orange-50 text-orange-600 px-2 py-0.5 rounded-full border border-orange-100 capitalize">
                      {slug.replace(/-/g, ' ')}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 bg-orange-500 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-extrabold text-white mb-4">Can&apos;t Find Your Trade?</h2>
            <p className="text-orange-100 mb-6">We cover all NZ trades. Contact us and we will match you with a specialist broker who understands your specific requirements.</p>
            <Link href="/contact/" className="inline-block bg-white text-orange-600 hover:bg-orange-50 font-bold px-8 py-3 rounded-xl transition-colors">
              Get Free Quote →
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
