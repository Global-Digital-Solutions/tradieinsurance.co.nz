'use client'

import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import Script from 'next/script'
import { siteConfig } from '@/data/site-config'

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? '0x4AAAAAADMnsakZUoyx534R'

const tradeOptions = [
  'Builder',
  'Plumber',
  'Electrician',
  'Painter',
  'Carpenter / Woodworker',
  'Roofer',
  'Bricklayer',
  'Concreter',
  'Handyman',
  'Other Trade',
]

const coverOptions = [
  'Public Liability',
  'Tools & Equipment',
  'Commercial Vehicle',
  'Income Protection',
  'Full Package (All Cover)',
  'Not Sure – Need Advice',
]

const sizeOptions = [
  'Sole Trader',
  '2–5 Employees',
  '6–20 Employees',
  '20+ Employees',
]

interface QuoteFormProps {
  compact?: boolean
}

export default function QuoteForm({ compact = false }: QuoteFormProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({
    tradeType: '',
    coverNeeded: '',
    businessSize: '',
    name: '',
    email: '',
    phone: '',
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('')

    const fd = new FormData(e.currentTarget)
    const cfToken = fd.get('cf-turnstile-response')
    if (!cfToken) {
      setError('Please wait a moment for the security check to finish, then try again.')
      return
    }

    setLoading(true)
    try {
      const res = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          _subject: 'Tradie Insurance Quote Request — TradieInsurance.co.nz',
          cfTurnstileToken: cfToken,
        }),
      })
      if (!res.ok) throw new Error('Submission failed')
      router.push('/thank-you/')
    } catch {
      setError('Something went wrong. Please try again or email us at ' + siteConfig.email + '.')
      setLoading(false)
    }
  }

  return (
    <div className={`bg-gray-800 rounded-2xl border border-gray-700 ${compact ? 'p-6' : 'p-8'}`}>
      {!compact && (
        <div className="mb-6">
          <span className="inline-block bg-orange-500/20 border border-orange-400/40 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            Free Quote
          </span>
          <h2 className="text-2xl font-extrabold text-white mb-2">Get Your Tradie Insurance Quote</h2>
          <p className="text-gray-400 text-sm">Connect with a licensed broker in minutes — no obligation.</p>
        </div>
      )}
      {compact && (
        <h3 className="text-lg font-bold text-white mb-4">Get a Free Quote</h3>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="_honey" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Trade Type</label>
          <select
            name="tradeType"
            value={form.tradeType}
            onChange={handleChange}
            required
            className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
          >
            <option value="">Select your trade...</option>
            {tradeOptions.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Cover Needed</label>
          <select
            name="coverNeeded"
            value={form.coverNeeded}
            onChange={handleChange}
            required
            className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
          >
            <option value="">Select cover type...</option>
            {coverOptions.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Business Size</label>
          <select
            name="businessSize"
            value={form.businessSize}
            onChange={handleChange}
            required
            className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
          >
            <option value="">Select size...</option>
            {sizeOptions.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Your name"
            className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 placeholder-gray-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="you@example.com"
            className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 placeholder-gray-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            placeholder="021 123 4567"
            className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 placeholder-gray-500"
          />
        </div>

        {error && (
          <p className="text-red-400 text-sm bg-red-900/20 border border-red-500/30 rounded-lg px-3 py-2">{error}</p>
        )}

        <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer strategy="afterInteractive" />
        <div className="flex justify-center">
          <div className="cf-turnstile" data-sitekey={TURNSTILE_SITE_KEY} data-size="invisible" />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-800 text-white font-bold py-3 rounded-lg transition-colors text-sm"
        >
          {loading ? 'Submitting...' : 'Get a Quote →'}
        </button>
      </form>

      {/* Trust pills */}
      <div className="mt-4 flex flex-wrap gap-2 justify-center">
        {['Licensed Brokers', 'No Obligation', 'NZ Based', '24hr Response'].map((pill) => (
          <span key={pill} className="text-xs text-gray-400 bg-gray-700 px-2.5 py-1 rounded-full border border-gray-600">
            ✓ {pill}
          </span>
        ))}
      </div>
    </div>
  )
}
