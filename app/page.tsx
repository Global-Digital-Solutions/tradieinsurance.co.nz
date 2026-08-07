import type { Metadata } from 'next'
import Link from 'next/link'
import QuoteForm from '@/components/QuoteForm'
import USPBar from '@/components/USPBar'
import { coverageTypes } from '@/data/coverage-types'
import { tradeTypes } from '@/data/trade-types'
import { providers } from '@/data/providers'
import { faqs } from '@/data/faqs'
import { blogPosts } from '@/data/blog-posts'
import { siteConfig } from '@/data/site-config'

export const metadata: Metadata = {
  title: { absolute: 'Tradie Insurance | Compare Quotes from Licensed Brokers' },
  description: 'Compare NZ tradie insurance. Public liability from $30/month, tools cover, commercial vehicle & income protection. Quotes from licensed NZ brokers.',
  alternates: { canonical: siteConfig.url + '/' },
}

const steps = [
  { num: '1', title: 'Tell Us About Your Trade', desc: 'Share your trade type, what cover you need, and your business size using our simple form.' },
  { num: '2', title: 'We Match You with a Broker', desc: 'We connect you with a specialist insurance broker who understands your trade\'s specific risks.' },
  { num: '3', title: 'Compare & Choose', desc: 'Your broker presents options from multiple insurers. You choose the best fit for your needs and budget.' },
]

export default function HomePage() {
  const topFaqs = faqs.slice(0, 5)
  const latestPosts = blogPosts.slice(0, 3)

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: topFaqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://tradieinsurance.co.nz/#service',
    name: 'Tradie Insurance Broker Referral',
    description: 'Free broker matching service connecting tradies with licensed insurance advisers for public liability, tools, vehicle, income protection and more.',
    provider: { '@id': 'https://tradieinsurance.co.nz/#organization' },
    areaServed: { '@type': 'Country', name: 'New Zealand' },
    url: 'https://tradieinsurance.co.nz/',
    serviceType: 'Insurance Broker Referral',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'NZD', description: 'Free broker matching — no fee to you' },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {/* Hero */}
      <section
        className="relative py-16 lg:py-24"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gray-900/75" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-start justify-between">
            <div className="flex-1 pt-4 lg:pt-10">
              <span className="inline-block bg-orange-500/20 border border-orange-400/40 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
                Specialist Tradie Insurance
              </span>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
                Tradie Insurance <span className="text-orange-500">Made Simple</span>
              </h1>
              <p className="text-white text-xl leading-relaxed mb-5">
                Public liability from <strong className="text-orange-400">$30/month</strong>. Tools, vehicle, income protection & more. Get quotes from licensed brokers — no obligation.
              </p>
              <p className="text-gray-200 text-base leading-relaxed mb-8">
                You&apos;re an expert in your trade — leave the insurance to us. Our licensed brokers take the time to understand your specific work, contracts, and risks. That means cover built around your business, not a generic policy with gaps or charges for things you&apos;ll never need. Most tradies who use our free matching service pay <strong className="text-orange-400">15–30% less</strong> than going direct.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <span className="text-orange-500">✓</span> Free broker matching
                </div>
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <span className="text-orange-500">✓</span> All trades covered
                </div>
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <span className="text-orange-500">✓</span> Licensed advisers only
                </div>
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <span className="text-orange-500">✓</span> quick response
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact/" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm">
                  Get a Quote →
                </Link>
                <Link href="/coverage/" className="bg-gray-700 hover:bg-gray-600 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm">
                  Explore Coverage
                </Link>
              </div>
            </div>
            <div className="w-full mx-auto lg:ml-auto lg:mr-0 max-w-sm">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>


      <USPBar />

      {/* Coverage Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">Coverage Types</span>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Every Type of Tradie Cover</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">From public liability to income protection — find the right insurance for your trade and business.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {coverageTypes.map((c) => (
              <Link
                key={c.slug}
                href={`/types/${c.slug}/`}
                className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* Orange top accent bar */}
                <div className="h-1.5 bg-orange-500 w-full" />
                <div className="p-6 flex flex-col flex-1">
                  <div className="text-4xl mb-4">{c.icon}</div>
                  <h3 className="text-lg font-extrabold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors leading-snug">{c.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 flex-1">{c.description.split('.')[0]}.</p>
                  <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-orange-500 font-extrabold text-sm">From {c.fromPrice}</span>
                    <span className="text-orange-400 text-lg group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/coverage/" className="inline-block bg-gray-900 hover:bg-orange-500 text-white font-bold px-8 py-3 rounded-xl transition-colors text-sm shadow-md">
              View All Coverage Types →
            </Link>
          </div>
        </div>
      </section>

      {/* Trade Types */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-orange-500/20 border border-orange-400/40 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">Trade Types</span>
            <h2 className="text-4xl font-extrabold text-white mb-4">Insurance for Every Trade</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Different trades carry different risks. Find cover tailored to your specific trade type.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {tradeTypes.map((t) => (
              <Link
                key={t.slug}
                href={`/trades/${t.slug}/`}
                className="group bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-orange-500 rounded-2xl p-6 flex items-center gap-5 transition-all duration-200 hover:shadow-lg hover:shadow-orange-500/10"
              >
                <span className="text-4xl flex-shrink-0 group-hover:scale-110 transition-transform duration-200">{t.icon}</span>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-extrabold text-white mb-1 group-hover:text-orange-400 transition-colors">{t.name}</h3>
                  <p className="text-gray-400 text-sm line-clamp-1">{t.description.split('.')[0]}.</p>
                </div>
                <span className="text-gray-600 group-hover:text-orange-400 group-hover:translate-x-1 transition-all text-lg flex-shrink-0">→</span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/trades/" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-xl transition-colors text-sm shadow-lg shadow-orange-500/30">
              All Trade Types →
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-orange-500/20 border border-orange-400/40 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">How It Works</span>
            <h2 className="text-3xl font-extrabold text-white mb-4">Get Covered in 3 Simple Steps</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Our free service connects you with the right broker quickly — so you can focus on the tools, not the paperwork.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((s) => (
              <div key={s.num} className="text-center">
                <div className="w-14 h-14 rounded-full bg-orange-500 text-white font-extrabold text-xl flex items-center justify-center mx-auto mb-4">
                  {s.num}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
                <p className="text-gray-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/contact/" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-xl transition-colors">
              Start Now — It&apos;s Free
            </Link>
          </div>
        </div>
      </section>

      {/* Provider Strip */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-400 text-xs font-bold uppercase tracking-widest mb-8">Providers Our Brokers Access</p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {providers.map((p) => (
              <div
                key={p.slug}
                className="px-5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl hover:border-orange-300 hover:bg-orange-50 transition-all"
              >
                <span className="font-extrabold text-gray-600 text-sm tracking-tight">{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">Latest Articles</span>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Tradie Insurance Guides & News</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {latestPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}/`}
                className="group bg-white border border-gray-200 hover:border-orange-200 rounded-2xl overflow-hidden transition-all hover:shadow-lg"
              >
                {post.image && (
                  <div className="w-full h-44 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-6">
                  <span className="inline-block bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-widest px-2 py-0.5 rounded-full mb-3">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>{post.readTime}</span>
                    <span>{new Date(post.date).toLocaleDateString('en-NZ', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/blog/" className="inline-block bg-gray-900 hover:bg-gray-700 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm">
              View All Articles →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">FAQs</span>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Common Tradie Insurance Questions</h2>
          </div>
          <div className="space-y-4">
            {topFaqs.map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/faqs/" className="inline-block bg-gray-900 hover:bg-gray-700 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm">
              View All FAQs →
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Resources */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">Resources</span>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Popular Tradie Insurance Guides</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">Specific cover advice for your trade, city, or insurance need.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { href: '/tradie-insurance/cheap-tradie-insurance/', label: 'Cheap Tradie Insurance' },
              { href: '/tradie-insurance/best-tradie-insurance/', label: 'Best Tradie Insurance' },
              { href: '/tradie-insurance/compare-tradie-insurance/', label: 'Compare Tradie Insurance' },
              { href: '/tradie-insurance/tradie-insurance-auckland/', label: 'Tradie Insurance Auckland' },
              { href: '/tradie-insurance/tradie-insurance-wellington/', label: 'Tradie Insurance Wellington' },
              { href: '/tradie-insurance/tradie-insurance-christchurch/', label: 'Tradie Insurance Christchurch' },
              { href: '/tradie-insurance/builder-insurance-nz/', label: 'Builder Insurance' },
              { href: '/tradie-insurance/public-liability-tradies-nz/', label: 'Public Liability for Tradies' },
              { href: '/tradie-insurance/tool-insurance-nz/', label: 'Tool Insurance' },
              { href: '/tradie-insurance/tradie-insurance-cost-nz/', label: 'Tradie Insurance Cost' },
              { href: '/tradie-insurance/tradie-insurance-sole-trader/', label: 'Sole Trader Insurance' },
              { href: '/tradie-insurance/tradie-insurance-small-business/', label: 'Small Business Insurance' },
              { href: '/tradie-insurance/tradie-insurance-hamilton/', label: 'Tradie Insurance Hamilton' },
              { href: '/tradie-insurance/tradie-insurance-tauranga/', label: 'Tradie Insurance Tauranga' },
              { href: '/tradie-insurance/tradie-insurance-dunedin/', label: 'Tradie Insurance Dunedin' },
              { href: '/tradie-insurance/tradie-insurance-rotorua/', label: 'Tradie Insurance Rotorua' },
              { href: '/tradie-insurance/tradie-insurance-whangarei/', label: 'Tradie Insurance Whangārei' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-3 bg-gray-50 hover:bg-orange-50 border border-gray-200 hover:border-orange-300 rounded-xl px-5 py-3.5 transition-all group"
              >
                <span className="text-orange-500 text-sm font-bold group-hover:translate-x-0.5 transition-transform">→</span>
                <span className="text-gray-700 font-medium text-sm group-hover:text-orange-700">{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-16 bg-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Ready to Get Covered?</h2>
          <p className="text-orange-100 text-lg mb-8">
            Join thousands of tradies who have found the right insurance through our free broker matching service.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Link href="/contact/" className="bg-white text-orange-600 hover:bg-orange-50 font-bold px-8 py-3 rounded-xl transition-colors">
              Get a Quote →
            </Link>
            <Link href="/compare/" className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-8 py-3 rounded-xl transition-colors border border-orange-400">
              Compare Providers
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {['✓ Registered Financial Service Providers', '✓ Free Service', '✓ No Obligation', '✓ Quick Response', '✓ NZ Based'].map((b) => (
              <span key={b} className="text-orange-200 text-xs font-semibold">{b}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
