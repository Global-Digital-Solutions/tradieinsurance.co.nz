import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import QuoteForm from '@/components/QuoteForm'
import { tradeTypes, getTradeBySlug } from '@/data/trade-types'
import { coverageTypes } from '@/data/coverage-types'
import { siteConfig } from '@/data/site-config'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return tradeTypes.map((t) => ({ slug: t.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const trade = getTradeBySlug(slug)
  if (!trade) return {}
  return {
    title: `${trade.name} Insurance NZ | Specialist Tradie Cover`,
    description: `${trade.name} insurance in New Zealand. ${trade.description.split('.')[0]}. Get free quotes from licensed brokers.`,
    alternates: { canonical: `${siteConfig.url}/trades/${slug}/` },
  }
}

export default async function TradeTypePage({ params }: Props) {
  const { slug } = await params
  const trade = getTradeBySlug(slug)
  if (!trade) notFound()

  const recommended = trade.recommendedCover
    .map((s) => coverageTypes.find((c) => c.slug === s))
    .filter(Boolean) as typeof coverageTypes

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url + '/' },
      { '@type': 'ListItem', position: 2, name: 'Trade Types', item: siteConfig.url + '/trades/' },
      { '@type': 'ListItem', position: 3, name: trade.name, item: `${siteConfig.url}/trades/${slug}/` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="bg-gray-900 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/trades/" className="hover:text-white">Trades</Link>
            <span className="mx-2">›</span>
            <span className="text-white">{trade.name}</span>
          </nav>
          <div className="text-4xl mb-4">{trade.icon}</div>
          <h1 className="text-4xl font-extrabold text-white mb-4">{trade.name} Insurance NZ</h1>
          <p className="text-gray-300 text-xl max-w-2xl leading-relaxed">{trade.description}</p>
        </div>
      </div>

      <div className="bg-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">

              {/* Key Facts */}
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Key Insurance Facts for NZ {trade.name}</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {trade.keyFacts.map((fact, i) => (
                    <div key={i} className="flex items-start gap-3 bg-orange-50 rounded-xl p-4 border border-orange-100">
                      <span className="text-orange-500 font-bold mt-0.5">✓</span>
                      <p className="text-gray-700 text-sm">{fact}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Risks */}
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Key Risks for {trade.name}</h2>
                <div className="space-y-4">
                  {trade.risks.map((risk, i) => (
                    <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                      <h3 className="font-bold text-gray-900 mb-2">⚠️ {risk.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{risk.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommended Cover */}
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Recommended Cover for {trade.name}</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {recommended.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/types/${c.slug}/`}
                      className="group flex items-start gap-3 bg-white border-2 border-gray-100 hover:border-orange-200 rounded-2xl p-5 transition-all hover:shadow-md"
                    >
                      <span className="text-2xl">{c.icon}</span>
                      <div>
                        <p className="font-bold text-gray-900 group-hover:text-orange-600 transition-colors">{c.name}</p>
                        <p className="text-gray-500 text-xs mt-1">From {c.fromPrice}</p>
                        <p className="text-gray-500 text-xs mt-1 line-clamp-2">{c.description.split('.')[0]}.</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* FAQs */}
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-6">{trade.name} Insurance FAQs</h2>
                <div className="space-y-4">
                  {trade.faqs.map((faq, i) => (
                    <div key={i} className="bg-white border border-gray-200 rounded-2xl p-6">
                      <h3 className="font-bold text-gray-900 mb-3">{faq.q}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <QuoteForm compact />
              <div className="bg-gray-900 rounded-2xl p-6">
                <h3 className="font-bold text-white mb-3">Other Trade Types</h3>
                <ul className="space-y-1.5">
                  {tradeTypes
                    .filter((t) => t.slug !== slug)
                    .map((t) => (
                      <li key={t.slug}>
                        <Link href={`/trades/${t.slug}/`} className="text-gray-400 hover:text-orange-400 text-sm transition-colors flex items-center gap-2">
                          {t.icon} {t.name}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
