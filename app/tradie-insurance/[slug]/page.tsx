import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import QuoteForm from '@/components/QuoteForm'
import { landingPages, getLandingPageBySlug } from '@/data/landing-pages'
import { tradeTypes, getTradeBySlug } from '@/data/trade-types'
import { siteConfig } from '@/data/site-config'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const landingSlugs = landingPages.map((p) => ({ slug: p.slug }))
  const tradeSlugs = tradeTypes.map((t) => ({ slug: t.slug }))
  return [...landingSlugs, ...tradeSlugs]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const page = getLandingPageBySlug(slug)
  if (page) {
    return {
      title: { absolute: page.metaTitle },
      description: page.metaDesc,
      alternates: { canonical: `${siteConfig.url}/tradie-insurance/${slug}/` },
      openGraph: {
        type: 'website',
        title: page.metaTitle,
        description: page.metaDesc,
        url: `${siteConfig.url}/tradie-insurance/${slug}/`,
        siteName: 'TradieInsurance.co.nz',
        locale: 'en_NZ',
        images: [{ url: `${siteConfig.url}/og-image.png`, width: 1200, height: 630, alt: page.title }],
      },
      twitter: {
        card: 'summary_large_image',
        title: page.metaTitle,
        description: page.metaDesc,
        images: [`${siteConfig.url}/og-image.png`],
      },
    }
  }

  const trade = getTradeBySlug(slug)
  if (trade) {
    const metaTitle = `${trade.name} Insurance NZ — Get a Quote | TradieInsurance.co.nz`
    const metaDesc = `${trade.name} insurance from ${trade.costFrom}/month. ${trade.description.split('.')[0]}. Get a quote from a licensed NZ broker.`
    return {
      title: { absolute: metaTitle },
      description: metaDesc,
      alternates: { canonical: `${siteConfig.url}/tradie-insurance/${slug}/` },
      openGraph: {
        type: 'website',
        title: metaTitle,
        description: metaDesc,
        url: `${siteConfig.url}/tradie-insurance/${slug}/`,
        siteName: 'TradieInsurance.co.nz',
        locale: 'en_NZ',
        images: [{ url: `${siteConfig.url}/og-image.png`, width: 1200, height: 630, alt: `${trade.name} Insurance NZ` }],
      },
      twitter: {
        card: 'summary_large_image',
        title: metaTitle,
        description: metaDesc,
        images: [`${siteConfig.url}/og-image.png`],
      },
    }
  }

  return {}
}

export default async function LandingPage({ params }: Props) {
  const { slug } = await params

  // --- Landing page path (existing) ---
  const page = getLandingPageBySlug(slug)
  if (page) {
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url + '/' },
        { '@type': 'ListItem', position: 2, name: page.title, item: `${siteConfig.url}/tradie-insurance/${slug}/` },
      ],
    }

    const serviceSchema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${siteConfig.url}/tradie-insurance/${slug}/#service`,
      name: page.title,
      description: page.metaDesc,
      provider: { '@id': `${siteConfig.url}/#organization` },
      areaServed: { '@type': 'Country', name: 'New Zealand' },
      url: `${siteConfig.url}/tradie-insurance/${slug}/`,
      serviceType: 'Insurance Broker Referral',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'NZD', description: 'Free broker matching service' },
    }

    return (
      <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

        <div className="bg-gray-900 border-b border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <nav className="text-sm text-gray-400 mb-4">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">›</span>
              <span className="text-white">{page.title}</span>
            </nav>
            <h1 className="text-4xl font-extrabold text-white mb-4">{page.hero}</h1>
            <p className="text-gray-300 text-xl max-w-2xl leading-relaxed">{page.intro}</p>
          </div>
        </div>

        <div className="bg-white py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2">
                <div className="prose-tradie space-y-10">
                  {page.sections.map((s, i) => (
                    <div key={i}>
                      <h2 className="text-2xl font-extrabold text-gray-900 mb-4">{s.heading}</h2>
                      <div className="text-gray-600 leading-relaxed space-y-3">
                        {s.body.split('\n\n').map((para, j) => {
                          if (para.startsWith('- ')) {
                            const items = para.split('\n').filter(l => l.startsWith('- '))
                            return (
                              <ul key={j} className="list-disc list-inside space-y-1">
                                {items.map((item, k) => (
                                  <li key={k} className="text-gray-600">
                                    {item.replace(/^- /, '').replace(/\*\*(.*?)\*\*/g, '$1')}
                                  </li>
                                ))}
                              </ul>
                            )
                          }
                          return (
                            <p key={j} className="text-gray-600">
                              {para.replace(/\*\*(.*?)\*\*/g, '$1')}
                            </p>
                          )
                        })}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 bg-orange-50 rounded-2xl p-8 border border-orange-100">
                  <h2 className="text-2xl font-extrabold text-gray-900 mb-3">Ready to Get Covered?</h2>
                  <p className="text-gray-600 mb-6">Use our free service to connect with a specialist tradie insurance broker — no cost, no obligation.</p>
                  <Link href="/contact/" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-xl transition-colors">
                    Get a Quote →
                  </Link>
                </div>
              </div>

              <div className="space-y-6">
                <QuoteForm compact />
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-3">Related Resources</h3>
                  <ul className="space-y-2">
                    <li><Link href="/coverage/" className="text-orange-500 hover:text-orange-600 text-sm">All Coverage Types →</Link></li>
                    <li><Link href="/trades/" className="text-orange-500 hover:text-orange-600 text-sm">All Trade Types →</Link></li>
                    <li><Link href="/compare/" className="text-orange-500 hover:text-orange-600 text-sm">Compare Providers →</Link></li>
                    <li><Link href="/faqs/" className="text-orange-500 hover:text-orange-600 text-sm">Insurance FAQs →</Link></li>
                    <li><Link href="/blog/" className="text-orange-500 hover:text-orange-600 text-sm">Blog & Guides →</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }

  // --- Trade type ad landing page path ---
  const trade = getTradeBySlug(slug)
  if (!trade) notFound()

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url + '/' },
      { '@type': 'ListItem', position: 2, name: `${trade.name} Insurance`, item: `${siteConfig.url}/tradie-insurance/${slug}/` },
    ],
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${siteConfig.url}/tradie-insurance/${slug}/#service`,
    name: `${trade.name} Insurance NZ`,
    description: trade.description,
    provider: { '@id': `${siteConfig.url}/#organization` },
    areaServed: { '@type': 'Country', name: 'New Zealand' },
    url: `${siteConfig.url}/tradie-insurance/${slug}/`,
    serviceType: 'Insurance Broker Referral',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'NZD', description: 'Free broker matching service' },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* HERO */}
      <div className="bg-gray-900 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/trades/" className="hover:text-white">Trades</Link>
            <span className="mx-2">›</span>
            <span className="text-white">{trade.name} Insurance</span>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block bg-orange-500/20 border border-orange-400/30 text-orange-300 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
              From {trade.costFrom}/month
            </span>
          </div>
          <h1 className="text-4xl font-extrabold text-white mb-4">{trade.name} Insurance</h1>
          <p className="text-gray-300 text-xl max-w-2xl leading-relaxed">{trade.description}</p>
        </div>
      </div>

      <div className="bg-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">

            {/* MAIN CONTENT */}
            <div className="lg:col-span-2 space-y-10">

              {/* Why you need it */}
              {trade.whyNeedIt && trade.whyNeedIt.length > 0 && (
                <div>
                  <h2 className="text-2xl font-extrabold text-gray-900 mb-5">Why {trade.name} Need Insurance</h2>
                  <ul className="space-y-3">
                    {trade.whyNeedIt.map((reason, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-sm mt-0.5">{i + 1}</span>
                        <p className="text-gray-600 leading-relaxed">{reason}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Cover types */}
              {trade.recommendedCover && trade.recommendedCover.length > 0 && (
                <div>
                  <h2 className="text-2xl font-extrabold text-gray-900 mb-5">Recommended Cover for {trade.name}</h2>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {trade.recommendedCover.map((cover, i) => (
                      <div key={i} className="flex items-center gap-3 bg-gray-50 rounded-xl p-4 border border-gray-200">
                        <span className="text-orange-500 font-bold flex-shrink-0">✓</span>
                        <span className="text-gray-700 font-medium text-sm">{cover}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Key risks */}
              {trade.risks && trade.risks.length > 0 && (
                <div>
                  <h2 className="text-2xl font-extrabold text-gray-900 mb-5">Key Risks for {trade.name}</h2>
                  <div className="space-y-4">
                    {trade.risks.slice(0, 4).map((risk, i) => (
                      <div key={i} className="bg-red-50 border border-red-100 rounded-xl p-4">
                        <h3 className="font-bold text-gray-900 text-sm mb-1">{risk.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{risk.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Cover package blurb */}
              {trade.coverPackage && (
                <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6">
                  <h2 className="text-lg font-extrabold text-gray-900 mb-2">Typical Cover Package</h2>
                  <p className="text-gray-600 leading-relaxed">{trade.coverPackage}</p>
                </div>
              )}

              {/* CTA */}
              <div className="bg-gray-900 rounded-2xl p-8">
                <h2 className="text-2xl font-extrabold text-white mb-3">Get a Quote Today</h2>
                <p className="text-gray-300 mb-6">Connect with a licensed NZ broker who specialises in {trade.name.toLowerCase()} insurance — no cost, no obligation.</p>
                <Link href="/contact/" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-xl transition-colors">
                  Get a Quote →
                </Link>
                <p className="text-gray-500 text-xs mt-3">Licensed NZ brokers · No spam · Quotes within 1 business day</p>
              </div>

              {/* Full detail link */}
              <p className="text-sm text-gray-500">
                Want the full detail?{' '}
                <Link href={`/trades/${slug}/`} className="text-orange-500 hover:text-orange-600 font-medium">
                  Read our complete {trade.name} insurance guide →
                </Link>
              </p>
            </div>

            {/* SIDEBAR */}
            <div className="space-y-6">
              <QuoteForm compact />

              {/* Cost card */}
              <div className="bg-orange-50 border border-orange-100 rounded-2xl p-5">
                <div className="text-xs font-bold uppercase tracking-widest text-orange-600 mb-1">Cover from</div>
                <div className="text-3xl font-extrabold text-gray-900">{trade.costFrom}</div>
                <div className="text-xs text-gray-500 mt-1">per month · indicative only</div>
                {trade.costFactors && trade.costFactors.length > 0 && (
                  <>
                    <div className="text-xs font-semibold text-gray-700 mt-4 mb-2">Premium factors:</div>
                    <ul className="space-y-1">
                      {trade.costFactors.map((f, i) => (
                        <li key={i} className="text-xs text-gray-600 flex items-center gap-1.5">
                          <span className="text-orange-400">·</span>{f}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-3">Related Resources</h3>
                <ul className="space-y-2">
                  <li><Link href={`/trades/${slug}/`} className="text-orange-500 hover:text-orange-600 text-sm">{trade.name} Insurance Guide →</Link></li>
                  <li><Link href="/coverage/" className="text-orange-500 hover:text-orange-600 text-sm">All Coverage Types →</Link></li>
                  <li><Link href="/trades/" className="text-orange-500 hover:text-orange-600 text-sm">All Trade Types →</Link></li>
                  <li><Link href="/compare/" className="text-orange-500 hover:text-orange-600 text-sm">Compare Providers →</Link></li>
                  <li><Link href="/faqs/" className="text-orange-500 hover:text-orange-600 text-sm">Insurance FAQs →</Link></li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
