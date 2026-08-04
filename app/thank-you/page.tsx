import type { Metadata } from 'next'
import Link from 'next/link'
import { siteConfig } from '@/data/site-config'

export const metadata: Metadata = {
  title: { absolute: 'Thank You | TradieInsurance.co.nz' },
  description: 'Thank you for your tradie insurance quote request. A specialist NZ broker will be in touch within 24 hours.',
  robots: { index: false, follow: false },
}

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-3xl font-extrabold text-white mb-4">Quote Request Received!</h1>
        <p className="text-gray-300 text-lg mb-4">
          Thank you for your enquiry. A specialist tradie insurance broker will contact you within 24 hours to discuss your requirements and provide comparative quotes.
        </p>
        <p className="text-gray-400 mb-8">
          If you have any questions in the meantime, email us at{' '}
          <a href={`mailto:${siteConfig.email}`} className="text-orange-400 hover:text-orange-300">
            {siteConfig.email}
          </a>
          {' '}and we&apos;ll get back to you promptly.
        </p>
        <div className="bg-gray-800 rounded-2xl p-6 mb-8 text-left">
          <h2 className="text-white font-bold mb-3">What Happens Next?</h2>
          <ol className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-start gap-2"><span className="text-orange-500 font-bold">1.</span> We review your enquiry and match you with the right specialist broker</li>
            <li className="flex items-start gap-2"><span className="text-orange-500 font-bold">2.</span> Your broker contacts you within 24 hours to discuss your requirements</li>
            <li className="flex items-start gap-2"><span className="text-orange-500 font-bold">3.</span> You receive comparative quotes from multiple insurers</li>
            <li className="flex items-start gap-2"><span className="text-orange-500 font-bold">4.</span> Choose the best option and get covered — often same day</li>
          </ol>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-xl transition-colors">
            Return to Home
          </Link>
          <Link href="/blog/" className="bg-gray-700 hover:bg-gray-600 text-white font-bold px-6 py-3 rounded-xl transition-colors">
            Read Our Guides
          </Link>
        </div>
      </div>
    </div>
  )
}
