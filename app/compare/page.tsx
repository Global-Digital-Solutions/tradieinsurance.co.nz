import type { Metadata } from 'next'
import Link from 'next/link'
import { providers } from '@/data/providers'
import { siteConfig } from '@/data/site-config'

export const metadata: Metadata = {
  title: { absolute: 'Compare Tradie Insurance Providers | TradieInsurance.co.nz' },
  description: 'Compare NZ tradie insurance providers side by side. Detailed coverage tables, pricing, ratings and expert profiles for BizCover, AMI, Builtin, Gallagher, FMG and Vero.',
  alternates: { canonical: `${siteConfig.url}/compare/` },
  openGraph: {
    type: 'website',
    title: 'Compare NZ Tradie Insurance Providers | TradieInsurance.co.nz',
    description: 'Side-by-side comparison of BizCover, AMI, Builtin, Gallagher, FMG and Vero — coverage, pricing, and ratings.',
    url: `${siteConfig.url}/compare/`,
    siteName: 'TradieInsurance.co.nz',
    locale: 'en_NZ',
    images: [{ url: `${siteConfig.url}/og-image.png`, width: 1200, height: 630, alt: 'Compare NZ Tradie Insurance Providers' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compare NZ Tradie Insurance Providers',
    description: 'Side-by-side comparison of NZ tradie insurance providers — coverage, pricing, and ratings.',
    images: [`${siteConfig.url}/og-image.png`],
  },
}

const coverColumns = [
  { key: 'publicLiability', label: 'Public Liability' },
  { key: 'tools', label: 'Tools & Equipment' },
  { key: 'vehicle', label: 'Commercial Vehicle' },
  { key: 'income', label: 'Income Protection' },
  { key: 'employersLiability', label: 'Employers Liability' },
  { key: 'statutoryLiability', label: 'Statutory Liability' },
  { key: 'contractWorks', label: 'Contract Works' },
  { key: 'cyber', label: 'Cyber Insurance' },
] as const

export default function ComparePage() {
  return (
    <>
      {/* Hero */}
      <div
        className="relative border-b border-gray-700"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gray-900/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <nav className="text-sm text-gray-300 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-white">Compare Providers</span>
          </nav>
          <span className="inline-block bg-orange-500/20 border border-orange-400/40 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-5">
            2026 Provider Comparison
          </span>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-5 leading-tight max-w-3xl">
            Compare NZ Tradie Insurance Providers
          </h1>
          <p className="text-white text-xl max-w-2xl leading-relaxed mb-8 opacity-90">
            Detailed side-by-side comparison of BizCover, AMI, Builtin, Gallagher, FMG, and Vero — coverage types, pricing, online quoting, and what each provider does best.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact/" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm">
              Get Broker Quotes →
            </Link>
            <a href="#provider-cards" className="bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm border border-white/30">
              View All Providers ↓
            </a>
          </div>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Detailed Comparison Table — sits directly under hero */}
          <div id="comparison-table" className="mb-16 scroll-mt-20">
            <div className="mb-8">
              <span className="inline-block bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">Coverage Comparison</span>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-3">Side-by-Side Coverage Table</h2>
              <p className="text-gray-500 text-lg">Which cover types each provider offers — scroll right on mobile.</p>
            </div>
            <div className="overflow-x-auto rounded-2xl border-2 border-orange-400 shadow-lg">
              <table className="w-full border-collapse text-sm min-w-[900px]">
                <thead>
                  <tr className="bg-gray-900">
                    <th className="text-left px-5 py-4 text-white font-bold w-36 sticky left-0 bg-gray-900 border-r border-gray-700">Provider</th>
                    <th className="px-4 py-4 text-white font-semibold text-center text-xs border-r border-gray-700">Starting Price</th>
                    <th className="px-4 py-4 text-white font-semibold text-center text-xs border-r border-gray-700">Cover Levels</th>
                    <th className="px-4 py-4 text-white font-semibold text-center text-xs border-r border-gray-700">Online Quote</th>
                    {coverColumns.map((c, idx) => (
                      <th key={c.key} className={`px-4 py-4 text-white font-semibold text-center text-xs ${idx < coverColumns.length - 1 ? 'border-r border-gray-700' : ''}`}>{c.label}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {providers.map((p, i) => (
                    <tr key={p.slug} className={`transition-colors border-b ${p.topRated ? 'bg-orange-50 border-orange-200 hover:bg-orange-100/60' : `${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-orange-50/30 border-gray-200`}`}>
                      <td className={`px-5 py-4 border-r ${p.topRated ? 'bg-orange-50 border-orange-200 border-l-4 border-l-orange-500' : `border-gray-200 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`} sticky left-0`}>
                        <div className="font-extrabold text-gray-900 text-sm leading-tight">{p.name}</div>
                        {p.topRated && (
                          <span className="text-xs text-orange-600 font-bold">⭐ Highly Recommended</span>
                        )}
                      </td>
                      <td className={`px-4 py-4 text-center border-r ${p.topRated ? 'border-orange-200' : 'border-gray-200'}`}>
                        <span className="text-orange-600 font-bold text-xs">{p.startingPrice}</span>
                      </td>
                      <td className={`px-4 py-4 text-center border-r ${p.topRated ? 'border-orange-200' : 'border-gray-200'}`}>
                        <span className="text-gray-600 text-xs">{p.coverLevels}</span>
                      </td>
                      <td className={`px-4 py-4 text-center border-r ${p.topRated ? 'border-orange-200' : 'border-gray-200'}`}>
                        {p.onlineQuote
                          ? <span className="text-green-500 font-bold text-base">✓</span>
                          : <span className="text-gray-300 text-base">—</span>}
                      </td>
                      {coverColumns.map((c, idx) => (
                        <td key={c.key} className={`px-4 py-4 text-center ${idx < coverColumns.length - 1 ? `border-r ${p.topRated ? 'border-orange-200' : 'border-gray-200'}` : ''}`}>
                          {p[c.key]
                            ? <span className="text-green-500 font-bold text-base">✓</span>
                            : <span className={`text-base ${p.topRated ? 'text-orange-200' : 'text-gray-200'}`}>—</span>}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-3">✓ = available as standard or optional add-on. — = not offered. Coverage subject to policy terms and conditions. Pricing indicative only.</p>
          </div>

          {/* Quick summary cards */}
          <div id="provider-cards" className="mb-16 scroll-mt-20">
            <div className="mb-8">
              <span className="inline-block bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">Provider Overview</span>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-3">Provider Snapshot</h2>
              <p className="text-gray-500 text-lg">Quick comparison across pricing, ratings, and cover availability.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {providers.map((p) => (
                <div key={p.slug} className={`rounded-2xl border-2 p-5 transition-all hover:shadow-lg ${p.topRated ? 'border-orange-400 bg-orange-50 shadow-sm' : 'border-gray-200 bg-white hover:border-orange-200'}`}>
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="font-extrabold text-gray-900 text-base">{p.name}</div>
                      <div className="flex items-center gap-1 mt-0.5">
                        {[1,2,3,4,5].map((s) => (
                          <span key={s} className={`text-sm ${s <= Math.round(p.rating) ? 'text-orange-500' : 'text-gray-200'}`}>★</span>
                        ))}
                        <span className="text-gray-500 text-xs ml-1">{p.rating}/5</span>
                      </div>
                    </div>
                    {p.badge && (
                      <span className={`text-xs font-bold px-2 py-1 rounded-lg shrink-0 ml-2 ${p.topRated ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-600'}`}>
                        {p.badge.replace('⭐ ', '')}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed line-clamp-2">{p.description.split('.')[0]}.</p>
                  <div className="space-y-1.5 mb-4">
                    <div className="flex items-center gap-2 text-xs">
                      <span className="text-gray-400 w-20 shrink-0">Starting:</span>
                      <span className="font-bold text-orange-600">{p.startingPrice}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="text-gray-400 w-20 shrink-0">Cover levels:</span>
                      <span className="text-gray-700">{p.coverLevels}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="text-gray-400 w-20 shrink-0">Online quote:</span>
                      <span className={`font-bold ${p.onlineQuote ? 'text-green-600' : 'text-gray-400'}`}>{p.onlineQuote ? '✓ Yes' : 'Broker only'}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {p.publicLiability && <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">PL</span>}
                    {p.tools && <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">Tools</span>}
                    {p.vehicle && <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">Vehicle</span>}
                    {p.employersLiability && <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">Employers</span>}
                    {p.statutoryLiability && <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">Statutory</span>}
                    {p.contractWorks && <span className="text-xs bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full">Contract Works</span>}
                    {p.cyber && <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">Cyber</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Provider Profiles */}
          <div className="mb-16">
            <div className="mb-8">
              <span className="inline-block bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">Provider Profiles</span>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-3">In-Depth Provider Reviews</h2>
              <p className="text-gray-500 text-lg">What each provider does well, what to watch for, and who they suit best.</p>
            </div>
            <div className="space-y-6">
              {providers.map((p) => (
                <div key={p.slug} className={`rounded-2xl border-2 overflow-hidden ${p.topRated ? 'border-orange-300 shadow-md' : 'border-gray-200'}`}>
                  <div className={`px-6 py-4 flex flex-wrap items-center gap-4 border-b ${p.topRated ? 'bg-orange-50 border-orange-200' : 'bg-gray-50 border-gray-200'}`}>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-xl font-extrabold text-gray-900">{p.name}</h3>
                        {p.badge && <span className={`text-xs font-bold px-3 py-1 rounded-full ${p.topRated ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700'}`}>{p.badge}</span>}
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        {[1,2,3,4,5].map((s) => (
                          <span key={s} className={`text-sm ${s <= Math.round(p.rating) ? 'text-orange-500' : 'text-gray-200'}`}>★</span>
                        ))}
                        <span className="text-gray-500 text-sm ml-1">{p.rating}/5</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div>
                        <div className="text-xs text-gray-400 uppercase tracking-wide">Starting Price</div>
                        <div className="font-extrabold text-orange-600">{p.startingPrice}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-400 uppercase tracking-wide">Best For</div>
                        <div className="font-bold text-gray-700 text-xs max-w-40">{p.bestFor}</div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 leading-relaxed mb-6">{p.description}</p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-extrabold text-gray-900 text-sm mb-3 flex items-center gap-2">
                          <span className="text-green-500">✓</span> Key Features
                        </h4>
                        <ul className="space-y-2">
                          {p.keyFeatures.map((f, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                              <span className="text-orange-400 mt-0.5 shrink-0">›</span>
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-extrabold text-gray-900 text-sm mb-3 flex items-center gap-2">
                          <span className="text-amber-500">⚠</span> Watch Out For
                        </h4>
                        <p className="text-sm text-gray-600 leading-relaxed bg-amber-50 border border-amber-100 rounded-xl p-4">{p.watchOut}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          <span className="text-xs bg-gray-100 text-gray-500 px-3 py-1.5 rounded-lg">
                            {p.website}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* How to choose section */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-12 border-2 border-gray-200">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-6">How to Choose the Right Provider</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Sole trader, simple cover needed',
                  rec: 'BizCover or AMI',
                  detail: 'Get instant online quotes from BizCover for public liability, or use AMI\'s Tradies Bundle if you also need vehicle cover.',
                  icon: '👤',
                },
                {
                  title: 'Builder, LBP, or construction specialist',
                  rec: 'Builtin Insurance',
                  detail: 'Builtin understands building contracts, LBP requirements, contract works, and WorkSafe liability better than any generalist.',
                  icon: '🏗️',
                },
                {
                  title: 'Trade business with 3+ employees',
                  rec: 'Gallagher or Builtin',
                  detail: 'Complex risks need broker advice. Gallagher\'s SMARTpak and Builtin\'s tailored packages both include employers liability and statutory cover.',
                  icon: '👷',
                },
                {
                  title: 'Rural or provincial tradie',
                  rec: 'FMG Insurance',
                  detail: 'FMG specialises in rural NZ and has staff and service in regions where other insurers have minimal presence.',
                  icon: '🌾',
                },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border-2 border-gray-200 hover:border-orange-200 transition-colors">
                  <div className="text-2xl mb-3">{item.icon}</div>
                  <h3 className="font-extrabold text-gray-900 text-sm mb-1">{item.title}</h3>
                  <p className="text-orange-600 font-bold text-sm mb-2">→ {item.rec}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gray-900 rounded-2xl p-10 text-center">
            <h2 className="text-3xl font-extrabold text-white mb-4">Not Sure Which Provider Suits You?</h2>
            <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
              Our free broker matching service gets you competitive quotes from the right providers for your trade, turnover, and risk profile. No cost, no obligation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-xl transition-colors shadow-lg shadow-orange-500/30">
                Get a Quote →
              </Link>
              <Link href="/contact/" className="bg-gray-700 hover:bg-gray-600 text-white font-bold px-8 py-3 rounded-xl transition-colors border border-gray-600">
                How It Works →
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
