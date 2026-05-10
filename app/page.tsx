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
  title: 'Tradie Insurance NZ | Compare Public Liability, Tools & More | TradieInsurance.co.nz',
  description: 'Compare NZ tradie insurance. Public liability from NZ$30/month, tools cover, commercial vehicle, income protection & more. Free quotes from licensed NZ brokers.',
  alternates: { canonical: siteConfig.url + '/' },
}

const steps = [
  { num: '1', title: 'Tell Us About Your Trade', desc: 'Share your trade type, what cover you need, and your business size using our simple form.' },
  { num: '2', title: 'We Match You with a Broker', desc: 'We connect you with a specialist NZ insurance broker who understands your trade\'s specific risks.' },
  { num: '3', title: 'Compare & Choose', desc: 'Your broker presents options from multiple insurers. You choose the best fit for your needs and budget.' },
]

export default function HomePage() {
  const topFaqs = faqs.slice(0, 5)
  const latestPosts = blogPosts.slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="bg-gray-900 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-orange-500/20 border border-orange-400/40 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
                NZ Specialist Tradie Insurance
              </span>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
                Tradie Insurance <span className="text-orange-500">Made Simple</span> for NZ Tradies
              </h1>
              <p className="text-gray-300 text-xl leading-relaxed mb-8">
                Public liability from <strong className="text-orange-400">NZ$30/month</strong>. Tools, vehicle, income protection & more. Get free quotes from licensed NZ brokers — no obligation.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <span className="text-orange-500">✓</span> Free broker matching
                </div>
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <span className="text-orange-500">✓</span> All NZ trades covered
                </div>
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <span className="text-orange-500">✓</span> Licensed advisers only
                </div>
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <span className="text-orange-500">✓</span> 24hr response
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact/" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm">
                  Get Free Quote →
                </Link>
                <Link href="/coverage/" className="bg-gray-700 hover:bg-gray-600 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm">
                  Explore Coverage
                </Link>
              </div>
            </div>
            <div>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      <USPBar />

      {/* Coverage Types */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">Coverage Types</span>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Every Type of Tradie Cover</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">From public liability to income protection — find the right insurance for your trade and business.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coverageTypes.map((c) => (
              <Link
                key={c.slug}
                href={`/types/${c.slug}/`}
                className="group bg-white border-2 border-gray-100 hover:border-orange-200 rounded-2xl p-6 transition-all hover:shadow-lg"
              >
                <div className="text-3xl mb-3">{c.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">{c.name}</h3>
                <p className="text-gray-500 text-sm mb-3 leading-relaxed line-clamp-2">{c.description.split('.')[0]}.</p>
                <p className="text-orange-500 font-bold text-sm">From {c.fromPrice}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/coverage/" className="inline-block bg-gray-900 hover:bg-gray-700 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm">
              View All Coverage Types →
            </Link>
          </div>
        </div>
      </section>

      {/* Trade Types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">Trade Types</span>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Insurance for Every NZ Trade</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Different trades carry different risks. Find cover tailored to your specific trade type.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tradeTypes.map((t) => (
              <Link
                key={t.slug}
                href={`/trades/${t.slug}/`}
                className="group bg-white border border-gray-200 hover:border-orange-300 rounded-2xl p-6 flex items-start gap-4 transition-all hover:shadow-md"
              >
                <span className="text-3xl flex-shrink-0">{t.icon}</span>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-orange-600 transition-colors">{t.name}</h3>
                  <p className="text-gray-500 text-sm line-clamp-2">{t.description.split('.')[0]}.</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/trades/" className="inline-block bg-gray-900 hover:bg-gray-700 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm">
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
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm font-medium uppercase tracking-widest mb-8">Providers Our Brokers Access</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {providers.map((p) => (
              <div key={p.slug} className="flex items-center gap-2 text-gray-600 font-bold text-sm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.logo}
                  alt={p.name}
                  className="h-8 w-auto object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all"
                />
                <span className="hidden sm:inline">{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">FAQs</span>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Common Tradie Insurance Questions</h2>
          </div>
          <div className="space-y-4">
            {topFaqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-200 p-6">
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

      {/* Blog */}
      <section className="py-16 bg-white">
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
                className="group bg-white border border-gray-200 hover:border-orange-200 rounded-2xl p-6 transition-all hover:shadow-md"
              >
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

      {/* CTA Strip */}
      <section className="py-16 bg-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Ready to Get Covered?</h2>
          <p className="text-orange-100 text-lg mb-8">
            Join thousands of NZ tradies who have found the right insurance through our free broker matching service.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact/" className="bg-white text-orange-600 hover:bg-orange-50 font-bold px-8 py-3 rounded-xl transition-colors">
              Get Free Quote →
            </Link>
            <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-8 py-3 rounded-xl transition-colors border border-orange-400">
              Call {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
