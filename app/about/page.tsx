import type { Metadata } from 'next'
import Link from 'next/link'
import { siteConfig } from '@/data/site-config'

export const metadata: Metadata = {
  title: { absolute: 'About TradieInsurance.co.nz | NZ Broker Referral Service' },
  description: 'About TradieInsurance.co.nz — NZ\'s specialist tradie insurance comparison and referral service. We connect tradies with licensed NZ insurance brokers.',
  alternates: { canonical: `${siteConfig.url}/about/` },
  openGraph: {
    type: 'website',
    title: 'About TradieInsurance.co.nz | NZ Broker Referral Service',
    description: 'About TradieInsurance.co.nz — NZ\'s specialist tradie insurance comparison and referral service. We connect tradies with Registered Financial Service Providers.',
    url: `${siteConfig.url}/about/`,
    siteName: 'TradieInsurance.co.nz',
    locale: 'en_NZ',
    images: [{ url: `${siteConfig.url}/og-image.png`, width: 1200, height: 630, alt: 'TradieInsurance.co.nz' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About TradieInsurance.co.nz',
    description: 'NZ\'s specialist tradie insurance referral service — connecting tradies with Registered Financial Service Providers.',
    images: [`${siteConfig.url}/og-image.png`],
  },
}

const differences = [
  {
    icon: '🎯',
    title: 'Trade-Specific Focus',
    desc: 'We only deal with tradie insurance — not home, car, or pet insurance. That focus means we understand your trade\'s risks and requirements better than a generalist.',
  },
  {
    icon: '🤝',
    title: 'Licensed Broker Network',
    desc: 'Every broker in our network is a Registered Financial Service Provider specialising in trade and construction insurance. You get genuine expertise, not a call centre script.',
  },
  {
    icon: '🆓',
    title: 'Truly Free Service',
    desc: 'There is no catch. We are paid a referral fee by brokers — you pay nothing extra and the competition between brokers keeps pricing competitive.',
  },
  {
    icon: '⚡',
    title: 'Fast Turnaround',
    desc: 'We aim to connect you with a broker within 24 hours of your enquiry. Standard cover can often be arranged the same day for straightforward requirements.',
  },
]

export default function AboutPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url + '/' },
      { '@type': 'ListItem', position: 2, name: 'About', item: `${siteConfig.url}/about/` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="bg-gray-900 border-b border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-white">About</span>
          </nav>
          <span className="inline-block bg-orange-500/20 border border-orange-400/40 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">Who We Are</span>
          <h1 className="text-4xl font-extrabold text-white mb-4">About TradieInsurance.co.nz</h1>
          <p className="text-gray-300 text-xl leading-relaxed max-w-2xl">
            NZ&apos;s specialist tradie insurance comparison service — connecting tradies with licensed insurance brokers to find the best cover at competitive prices.
          </p>
        </div>
      </div>

      <div className="bg-white py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <section className="mb-14">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              tradies are the backbone of the construction and maintenance industry, but too many work without adequate insurance — either because they do not know what they need, or have not had time to compare the market properly.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              TradieInsurance.co.nz was built to fix that. We provide clear, unbiased information about insurance options for every trade type, and connect you with specialist brokers who can arrange the right cover quickly and efficiently.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our goal is simple: get qualified tradies speaking with the right broker, so they end up with cover that actually protects their business — not just the cheapest policy that leaves gaps.
            </p>
          </section>

          <section className="mb-14">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-8">How We&apos;re Different</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {differences.map((d) => (
                <div key={d.title} className="flex gap-4 bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center flex-shrink-0 text-2xl">
                    {d.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{d.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{d.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-14">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">How Our Service Works</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              TradieInsurance.co.nz is a referral service. We do not sell insurance directly or act as a financial adviser. Instead, we connect you with Registered Financial Service Providers who specialise in trade and construction insurance.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              When you submit a quote request, we assess your trade type and cover needs, then match you with the most appropriate specialist broker in our network. That broker contacts you to discuss your requirements in detail and provides comparative quotes from multiple insurers.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We receive a referral fee from the broker if you proceed — you pay nothing additional. The broker is remunerated by commission from the insurer.
            </p>
          </section>

          <section className="bg-gray-900 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-extrabold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-gray-400 mb-6">Connect with a specialist tradie insurance broker — it takes 2 minutes and costs nothing.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-xl transition-colors">
                Get a Quote →
              </Link>
              <Link href="/compare/" className="inline-block bg-gray-700 hover:bg-gray-600 text-white font-bold px-8 py-3 rounded-xl transition-colors">
                Compare Providers →
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
