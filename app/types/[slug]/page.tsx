import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import QuoteForm from '@/components/QuoteForm'
import { coverageTypes, getCoverageBySlug } from '@/data/coverage-types'
import { siteConfig } from '@/data/site-config'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return coverageTypes.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const coverage = getCoverageBySlug(slug)
  if (!coverage) return {}
  return {
    title: `${coverage.name} Insurance NZ | Tradie Cover from ${coverage.fromPrice}`,
    description: `${coverage.name} insurance for NZ tradies. ${coverage.description.split('.')[0]}. Get free quotes from licensed NZ brokers.`,
    alternates: { canonical: `${siteConfig.url}/types/${slug}/` },
  }
}

export default async function CoverageTypePage({ params }: Props) {
  const { slug } = await params
  const coverage = getCoverageBySlug(slug)
  if (!coverage) notFound()

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url + '/' },
      { '@type': 'ListItem', position: 2, name: 'Coverage Types', item: siteConfig.url + '/coverage/' },
      { '@type': 'ListItem', position: 3, name: coverage.name, item: `${siteConfig.url}/types/${slug}/` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div
        className="relative border-b border-gray-700"
        style={{
          backgroundImage: `url(${coverage.heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gray-900/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <nav className="text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/coverage/" className="hover:text-white">Coverage Types</Link>
            <span className="mx-2">›</span>
            <span className="text-white">{coverage.name}</span>
          </nav>
          <span className="inline-block bg-orange-500/20 border border-orange-400/40 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-5">
            {coverage.icon} {coverage.name}
          </span>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-5 leading-tight">
            {coverage.name} Insurance for Tradies
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl leading-relaxed mb-5">{coverage.description.split('.')[0]}.</p>
          <div className="flex flex-wrap items-center gap-4">
            <span className="bg-orange-500 text-white font-extrabold text-sm px-4 py-2 rounded-lg">From {coverage.fromPrice}</span>
            <Link href="/contact/" className="bg-white text-gray-900 hover:bg-orange-50 font-bold text-sm px-6 py-2 rounded-lg transition-colors">
              Get Free Quote →
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-10">
              {/* Key Facts */}
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Key Facts About {coverage.name} Insurance</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {coverage.keyFacts.map((fact, i) => (
                    <div key={i} className="flex items-start gap-3 bg-orange-50 rounded-xl p-4 border border-orange-100">
                      <span className="text-orange-500 font-bold mt-0.5">✓</span>
                      <p className="text-gray-700 text-sm">{fact}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Who Needs It */}
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Who Needs {coverage.name} Cover?</h2>
                <div className="space-y-3">
                  {coverage.whoNeeds.map((w, i) => (
                    <div key={i} className="flex items-start gap-3 bg-gray-50 rounded-xl p-4 border border-gray-100">
                      <span className="text-orange-500 text-xl">🔧</span>
                      <p className="text-gray-700">{w}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Related Coverage */}
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Other Coverage Types to Consider</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {coverageTypes
                    .filter((c) => c.slug !== coverage.slug)
                    .slice(0, 4)
                    .map((c) => (
                      <Link
                        key={c.slug}
                        href={`/types/${c.slug}/`}
                        className="group flex items-center gap-3 bg-white border border-gray-200 hover:border-orange-300 rounded-xl p-4 transition-all hover:shadow-sm"
                      >
                        <span className="text-2xl">{c.icon}</span>
                        <div>
                          <p className="font-bold text-gray-900 group-hover:text-orange-600 transition-colors text-sm">{c.name}</p>
                          <p className="text-gray-500 text-xs">From {c.fromPrice}</p>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <QuoteForm compact />
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-3">Need Help Deciding?</h3>
                <p className="text-gray-600 text-sm mb-4">Our specialist brokers can assess your specific situation and recommend the right level of cover for your trade.</p>
                <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-orange-500 font-bold text-sm">
                  📞 {siteConfig.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
