import type { Metadata } from 'next'
import Link from 'next/link'
import { faqs } from '@/data/faqs'
import { siteConfig } from '@/data/site-config'

export const metadata: Metadata = {
  title: { absolute: 'Tradie Insurance FAQs | TradieInsurance.co.nz' },
  description: 'Answers to the most common questions about NZ tradie insurance — cost, cover types, ACC, requirements, and how to get the right cover for your trade.',
  alternates: { canonical: `${siteConfig.url}/faqs/` },
  openGraph: {
    type: 'website',
    title: 'Tradie Insurance FAQs | TradieInsurance.co.nz',
    description: 'Common NZ tradie insurance questions answered — cost, cover types, ACC, requirements and how to get the right cover.',
    url: `${siteConfig.url}/faqs/`,
    siteName: 'TradieInsurance.co.nz',
    locale: 'en_NZ',
    images: [{ url: `${siteConfig.url}/og-image.png`, width: 1200, height: 630, alt: 'Tradie Insurance FAQs' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tradie Insurance FAQs',
    description: 'Common NZ tradie insurance questions answered in plain English.',
    images: [`${siteConfig.url}/og-image.png`],
  },
}

export default function FaqsPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  }

  const categories = [...new Set(faqs.map((f) => f.category))]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-gray-900 border-b border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-white">FAQs</span>
          </nav>
          <span className="inline-block bg-orange-500/20 border border-orange-400/40 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">FAQs</span>
          <h1 className="text-4xl font-extrabold text-white mb-4">Tradie Insurance FAQs</h1>
          <p className="text-gray-300 text-xl max-w-2xl leading-relaxed">
            Answers to tradies&apos; most common insurance questions — in plain English.
          </p>
        </div>
      </div>

      <div className="bg-white py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {categories.map((cat) => (
            <section key={cat} className="mb-12">
              <h2 className="text-lg font-bold text-orange-600 uppercase tracking-widest mb-6 pb-2 border-b border-orange-100">
                {cat}
              </h2>
              <div className="space-y-4">
                {faqs
                  .filter((f) => f.category === cat)
                  .map((faq, i) => (
                    <div key={i} className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-orange-200 transition-colors">
                      <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.q}</h3>
                      <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
              </div>
            </section>
          ))}

          <div className="bg-gray-900 rounded-2xl p-8 text-center mt-8">
            <h2 className="text-xl font-bold text-white mb-3">Still Have Questions?</h2>
            <p className="text-gray-400 mb-6">Connect with a specialist tradie insurance broker who can answer your specific questions — for free.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-xl transition-colors">
                Get Free Advice →
              </Link>
              <Link href="/compare/" className="inline-block bg-gray-700 hover:bg-gray-600 text-white font-bold px-6 py-3 rounded-xl transition-colors">
                Compare Providers →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
