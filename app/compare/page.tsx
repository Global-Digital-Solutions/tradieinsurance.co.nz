import type { Metadata } from 'next'
import Link from 'next/link'
import { providers } from '@/data/providers'
import { siteConfig } from '@/data/site-config'

export const metadata: Metadata = {
  title: 'Compare NZ Tradie Insurance Providers 2026 | AMI vs State vs Builtin',
  description: 'Compare the top NZ tradie insurance providers. Side-by-side comparison of coverage, ratings, and specialties. Find the best provider for your trade.',
  alternates: { canonical: `${siteConfig.url}/compare/` },
}

export default function ComparePage() {
  const coverTypes = [
    { key: 'publicLiability', label: 'Public Liability' },
    { key: 'tools', label: 'Tools & Equipment' },
    { key: 'vehicle', label: 'Commercial Vehicle' },
    { key: 'income', label: 'Income Protection' },
  ] as const

  return (
    <>
      <div className="bg-gray-900 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-white">Compare Providers</span>
          </nav>
          <span className="inline-block bg-orange-500/20 border border-orange-400/40 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Provider Comparison
          </span>
          <h1 className="text-4xl font-extrabold text-white mb-4">Compare NZ Tradie Insurance Providers</h1>
          <p className="text-gray-300 text-xl max-w-2xl leading-relaxed">
            Side-by-side comparison of the leading NZ tradie insurance providers — so you can make an informed choice.
          </p>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Comparison Table */}
          <div className="overflow-x-auto mb-14">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-900">
                  <th className="text-left px-6 py-4 text-white font-bold w-40">Provider</th>
                  <th className="px-6 py-4 text-white font-bold text-center">Rating</th>
                  <th className="px-6 py-4 text-white font-bold text-center">Best For</th>
                  {coverTypes.map((ct) => (
                    <th key={ct.key} className="px-6 py-4 text-white font-bold text-center">{ct.label}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {providers.map((p, i) => (
                  <tr key={p.slug} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 border-b border-gray-100">
                      <div className="flex items-center gap-3">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={p.logo} alt={p.name} className="h-7 w-auto object-contain" />
                        <span className="font-bold text-gray-900">{p.name}</span>
                        {p.rating >= 4.5 && <span className="text-xs bg-orange-100 text-orange-600 px-1.5 py-0.5 rounded font-bold">Top Rated</span>}
                      </div>
                    </td>
                    <td className="px-6 py-4 border-b border-gray-100 text-center">
                      <div className="flex items-center justify-center gap-1">
                        <span className="text-orange-500">★</span>
                        <span className="font-bold text-gray-900">{p.rating}</span>
                        <span className="text-gray-400">/5</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 border-b border-gray-100 text-center text-gray-600 text-xs max-w-32">{p.bestFor}</td>
                    {coverTypes.map((ct) => (
                      <td key={ct.key} className="px-6 py-4 border-b border-gray-100 text-center">
                        {p[ct.key] ? (
                          <span className="text-green-500 text-lg">✓</span>
                        ) : (
                          <span className="text-gray-300 text-lg">—</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Provider Cards */}
          <h2 className="text-2xl font-extrabold text-gray-900 mb-8">Provider Profiles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
            {providers.map((p) => (
              <div key={p.slug} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.logo} alt={p.name} className="h-8 w-auto object-contain" />
                  <div>
                    <h3 className="font-bold text-gray-900">{p.name}</h3>
                    <div className="flex items-center gap-1 text-sm">
                      <span className="text-orange-500">★</span>
                      <span className="text-gray-600">{p.rating}/5</span>
                    </div>
                  </div>
                  {p.rating >= 4.5 && <span className="ml-auto text-xs bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full font-bold">Top Rated</span>}
                </div>
                <p className="text-gray-600 text-sm mb-4">{p.description}</p>
                <p className="text-xs text-gray-500">
                  <strong className="text-gray-700">Best for:</strong> {p.bestFor}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.publicLiability && <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">Public Liability</span>}
                  {p.tools && <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">Tools</span>}
                  {p.vehicle && <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">Vehicle</span>}
                  {p.income && <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">Income Protection</span>}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-900 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-extrabold text-white mb-4">Get Quotes from Multiple Providers</h2>
            <p className="text-gray-400 mb-6">Our free broker matching service gets you competitive quotes from the right providers for your specific trade. No cost, no obligation.</p>
            <Link href="/contact/" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-xl transition-colors">
              Start Comparing →
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
