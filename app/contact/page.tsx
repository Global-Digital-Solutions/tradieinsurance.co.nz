import type { Metadata } from 'next'
import Link from 'next/link'
import QuoteForm from '@/components/QuoteForm'
import { siteConfig } from '@/data/site-config'

export const metadata: Metadata = {
  title: 'Get a Free Tradie Insurance Quote | Contact TradieInsurance.co.nz',
  description: 'Get a free NZ tradie insurance quote. Connect with a licensed broker today. Fill in our form and we will match you with the right specialist within 24 hours.',
  alternates: { canonical: `${siteConfig.url}/contact/` },
}

export default function ContactPage() {
  return (
    <>
      <div className="bg-gray-900 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-white">Contact & Quote</span>
          </nav>
          <span className="inline-block bg-orange-500/20 border border-orange-400/40 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Free Quote
          </span>
          <h1 className="text-4xl font-extrabold text-white mb-4">Get Your Free Tradie Insurance Quote</h1>
          <p className="text-gray-300 text-xl max-w-2xl leading-relaxed">
            Fill in our simple form and we will match you with a specialist NZ broker who can find the right cover for your trade — within 24 hours.
          </p>
        </div>
      </div>

      <div className="bg-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <QuoteForm />
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Other Ways to Reach Us</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 bg-gray-50 rounded-2xl p-5 border border-gray-100">
                    <span className="text-2xl">📞</span>
                    <div>
                      <p className="font-bold text-gray-900">Phone</p>
                      <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="text-orange-500 hover:text-orange-600 font-medium">
                        {siteConfig.phone}
                      </a>
                      <p className="text-gray-500 text-sm mt-1">Mon–Fri, 8am–6pm NZST</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-gray-50 rounded-2xl p-5 border border-gray-100">
                    <span className="text-2xl">✉️</span>
                    <div>
                      <p className="font-bold text-gray-900">Email</p>
                      <a href={`mailto:${siteConfig.email}`} className="text-orange-500 hover:text-orange-600 font-medium">
                        {siteConfig.email}
                      </a>
                      <p className="text-gray-500 text-sm mt-1">We respond within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-extrabold text-gray-900 mb-4">What Happens Next?</h2>
                <div className="space-y-4">
                  {[
                    { num: '1', text: 'We receive your enquiry and assess your trade type and cover needs' },
                    { num: '2', text: 'We match you with the most appropriate specialist broker in our network' },
                    { num: '3', text: 'Your broker contacts you (usually within 24 hours) to discuss requirements' },
                    { num: '4', text: 'You receive comparative quotes and choose the best option for your needs' },
                  ].map((s) => (
                    <div key={s.num} className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-full bg-orange-500 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                        {s.num}
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{s.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-orange-50 rounded-2xl p-6 border border-orange-100">
                <p className="text-sm text-gray-600 leading-relaxed">
                  <strong className="text-gray-900">Our service is free.</strong> We receive a referral fee from the broker — you pay nothing extra. All brokers in our network are licensed under the Financial Markets Conduct Act 2013 and regulated by the Financial Markets Authority (FMA).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
