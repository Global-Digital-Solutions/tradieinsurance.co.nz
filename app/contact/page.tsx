import type { Metadata } from 'next'
import Link from 'next/link'
import HoldingPanel from '@/components/HoldingPanel'
import { siteConfig } from '@/data/site-config'

export const metadata: Metadata = {
  title: { absolute: 'Get a Quote | TradieInsurance.co.nz' },
  description: 'Request a NZ tradie insurance quote. Connect with a licensed broker today. Fill in our form and we will match you with the right specialist within 24 hours.',
  alternates: { canonical: `${siteConfig.url}/contact/` },
}

const benefits = [
  {
    icon: '⏱️',
    title: 'Save Time',
    desc: 'Stop spending hours comparing policies online. We do the legwork — one form connects you to multiple insurers through a specialist broker who knows your trade.',
  },
  {
    icon: '💰',
    title: 'Save Money',
    desc: 'Brokers access rates not available direct to the public. Many tradies save 15–30% versus going direct. You only pay what your trade actually needs.',
  },
  {
    icon: '🎯',
    title: 'Right Cover, First Time',
    desc: 'Generic policies often leave tradies underinsured. Our brokers tailor cover to your specific trade, contracts, and risk profile — no gaps, no overpaying.',
  },
  {
    icon: '🛡️',
    title: 'Licensed Experts',
    desc: 'Every broker in our network is a Registered Financial Service Provider. You\'re getting qualified, specialist advice — not a sales call.',
  },
]

const steps = [
  { num: '1', title: 'Tell Us About Your Trade', desc: 'Fill in the form — trade type, cover needed, and business size. Takes under 2 minutes.' },
  { num: '2', title: 'We Match You Instantly', desc: 'We connect you with a specialist broker who understands your specific trade risks and contracts.' },
  { num: '3', title: 'Get Competitive Quotes', desc: 'Your broker sources quotes from multiple insurers — you compare options and choose the best value.' },
  { num: '4', title: 'Get Covered & Get Back to Work', desc: 'Once you\'re happy, cover is arranged quickly. Most policies can be in place within 24–48 hours.' },
]

const stats = [
  { value: '10,000+', label: 'Tradies matched' },
  { value: '$30/mo', label: 'PL from' },
  { value: '24hrs', label: 'Broker response' },
  { value: '100%', label: 'Free service' },
]

const faqs = [
  {
    q: 'Is this service really free?',
    a: 'Yes. We receive a referral fee from the broker — you pay nothing extra for the matching service. Our goal is to connect you with the right broker, not sell you a policy.',
  },
  {
    q: 'How quickly will a broker contact me?',
    a: 'Most tradies hear from a broker within 24 hours on business days. For urgent cover, call us directly and we can expedite the process.',
  },
  {
    q: 'Will I be pressured to buy?',
    a: 'No. There is zero obligation. You can take the quotes away, think it over, and come back when you\'re ready. Our brokers are advisers, not salespeople.',
  },
  {
    q: 'What trades do you cover?',
    a: 'All trades — builders, plumbers, electricians, painters, roofers, concreters, landscapers, HVAC technicians, and many more. If you work in the trades, we can help.',
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero with form */}
      <section
        className="relative py-8 lg:py-24"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
      >
        <div className="absolute inset-0 bg-gray-900/88" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm mb-5 lg:mb-8" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}>
            <Link href="/" className="text-orange-400 hover:text-orange-300 font-medium transition-colors">Home</Link>
            <span className="mx-2 text-white/60">›</span>
            <span className="text-white font-semibold">Get a Quote</span>
          </nav>
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-start justify-between">
            {/* Left — value proposition (stacks below form on mobile) */}
            <div className="flex-1 lg:max-w-lg order-2 lg:order-1">
              <span className="hidden lg:inline-block bg-orange-500/20 border border-orange-400/40 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
                Free Broker Matching
              </span>
              <h1 className="hidden lg:block text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
                Stop Overpaying for <span className="text-orange-500">Tradie Insurance</span>
              </h1>
              <p className="hidden lg:block text-white text-xl leading-relaxed mb-8 drop-shadow">
                Our free service matches you with a specialist broker who finds the right cover for your trade — without the hours of research, comparison, and guesswork.
              </p>

              {/* Key benefits list — desktop only */}
              <div className="hidden lg:block space-y-3 mb-8">
                {[
                  'Save 15–30% versus going direct',
                  'Quotes from multiple top insurers',
                  'Cover tailored to your specific trade',
                  'Licensed advisers — zero obligation',
                  'Most tradies covered within 24–48 hours',
                ].map((b) => (
                  <div key={b} className="flex items-center gap-3 text-white font-medium text-sm">
                    <span className="w-5 h-5 rounded-full bg-orange-500 text-white text-xs flex items-center justify-center flex-shrink-0 font-bold shadow-md">✓</span>
                    {b}
                  </div>
                ))}
              </div>

              {/* Stats — compact strip on mobile, grid on desktop */}
              <div className="grid grid-cols-4 gap-2 lg:gap-4">
                {stats.map((s) => (
                  <div key={s.label} className="bg-gray-800/90 border border-gray-600 rounded-lg lg:rounded-xl px-1.5 lg:px-4 py-1.5 lg:py-3 text-center shadow-lg">
                    <div className="text-orange-400 font-extrabold text-sm lg:text-xl leading-tight">{s.value}</div>
                    <div className="text-gray-300 text-[9px] lg:text-xs mt-0.5 font-medium leading-tight">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — form (shown first on mobile) */}
            <div className="w-full lg:w-[420px] lg:flex-shrink-0 order-1 lg:order-2">
              <HoldingPanel />
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <div className="bg-orange-500 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-2">
            {['✓ Licensed & Regulated Brokers', '✓ 100% Free Service', '✓ No Obligation', '✓ All Trades Covered', '✓ NZ Based Team', '✓ Quick Broker Response'].map((t) => (
              <span key={t} className="text-white text-xs font-bold tracking-wide">{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Why use us — 4 benefit cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">Why Tradies Choose Us</span>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">The Smarter Way to Arrange Tradie Insurance</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">Going direct to an insurer means one quote. Going through us means a specialist broker comparing the whole market — on your behalf, for free.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-orange-200 hover:shadow-md transition-all">
                <div className="text-4xl mb-4">{b.icon}</div>
                <h3 className="text-lg font-extrabold text-gray-900 mb-2">{b.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-orange-500/20 border border-orange-400/40 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">How It Works</span>
            <h2 className="text-3xl font-extrabold text-white mb-4">Covered in 4 Simple Steps</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">From enquiry to policy — most tradies are covered within 24–48 hours.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={s.num} className="relative">
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-7 left-[calc(100%-0px)] w-full h-0.5 bg-orange-500/30 z-0" style={{ width: 'calc(100% - 3.5rem)', left: '3.5rem' }} />
                )}
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-full bg-orange-500 text-white font-extrabold text-xl flex items-center justify-center mb-5 shadow-lg shadow-orange-500/30">
                    {s.num}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="#quote-form" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-xl transition-colors shadow-lg shadow-orange-500/30">
              Start Now — It&apos;s Free →
            </a>
          </div>
        </div>
      </section>

      {/* What our brokers access */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">Expert Matching</span>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-5">Your Broker Works For <em>You</em> — Not the Insurer</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Unlike going direct to an insurer, a broker's job is to find the best outcome for you. They compare policies from multiple insurers, explain the differences in plain English, and recommend the cover that actually matches your trade's risk profile.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Many tradies overpay by buying cover they don't need — or worse, they underpay and find out too late that their policy had a gap. A specialist broker makes sure neither happens.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Providers compared', value: '6+ major insurers' },
                  { label: 'Trade types covered', value: 'All NZ trades' },
                  { label: 'Average response', value: 'Within 24 hours' },
                  { label: 'Cost to you', value: '$0 — completely free' },
                ].map((item) => (
                  <div key={item.label} className="bg-white rounded-xl p-4 border border-gray-200">
                    <div className="text-xs text-gray-400 uppercase tracking-wide mb-1">{item.label}</div>
                    <div className="font-extrabold text-gray-900 text-sm">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-red-500 font-bold text-sm">✗</span>
                  </div>
                  <div>
                    <h3 className="font-extrabold text-gray-900 mb-1">Going Direct</h3>
                    <ul className="space-y-1.5 text-sm text-gray-500">
                      <li>One insurer, one set of rates</li>
                      <li>Generic policy wording — not trade-specific</li>
                      <li>No one to negotiate on your behalf at claim time</li>
                      <li>Hours spent researching, comparing, reading fine print</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-orange-50 rounded-2xl border-2 border-orange-300 p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-extrabold text-gray-900 mb-1">Using TradieInsurance.co.nz</h3>
                    <ul className="space-y-1.5 text-sm text-gray-700">
                      <li className="flex items-center gap-2"><span className="text-orange-500">›</span> Multiple insurers compared on your behalf</li>
                      <li className="flex items-center gap-2"><span className="text-orange-500">›</span> Cover tailored to your exact trade and contracts</li>
                      <li className="flex items-center gap-2"><span className="text-orange-500">›</span> Broker advocates for you if a claim arises</li>
                      <li className="flex items-center gap-2"><span className="text-orange-500">›</span> 2 minutes to fill in the form — broker does the rest</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-gray-900 rounded-2xl p-6">
                <p className="text-white font-extrabold text-sm mb-4">Why trust our service?</p>
                <div className="space-y-3">
                  {[
                    { icon: '🏆', text: 'Registered Financial Service Providers' },
                    { icon: '💸', text: 'Completely free — no hidden fees' },
                    { icon: '🔒', text: 'Your data is never sold or shared' },
                    { icon: '🎯', text: 'Matched to specialists in your trade' },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-3 text-sm">
                      <span className="text-lg flex-shrink-0">{item.icon}</span>
                      <p className="text-gray-300">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mid-page form anchor + second form */}
      <section id="quote-form" className="py-20 bg-gray-800 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Left — reassurance */}
            <div className="flex-1">
              <span className="inline-block bg-orange-500/20 border border-orange-400/40 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6">Get Matched Now</span>
              <h2 className="text-3xl font-extrabold text-white mb-6 leading-tight">
                Tell Us What You Need — We&apos;ll Handle the Rest
              </h2>
              <div className="space-y-5 mb-8">
                {[
                  { icon: '🔒', title: 'Your details are safe', desc: 'We only share your information with the matched broker. No spam lists, no third-party marketing.' },
                  { icon: '📋', title: 'No obligation whatsoever', desc: 'Receiving a quote commits you to nothing. Compare, decide in your own time, and walk away if it\'s not right for you.' },
                  { icon: '⚡', title: 'Fast response guaranteed', desc: 'Most enquiries are matched within the hour during business hours. Same-day response on urgent requests.' },
                  { icon: '🏆', title: 'Registered service providers', desc: 'Every broker in our network is a Registered Financial Service Provider. You\'re getting specialist advice, not a sales call.' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4 bg-gray-700/40 rounded-xl p-4 border border-gray-600/50">
                    <span className="text-2xl flex-shrink-0">{item.icon}</span>
                    <div>
                      <p className="font-extrabold text-white text-sm mb-1">{item.title}</p>
                      <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <p className="text-gray-300 text-sm leading-relaxed">
                  <strong className="text-white">How we're paid:</strong> Our referral service is funded by a fee from the broker — not by you. This means you always get unbiased matching based on your needs, not on who pays us the most. All brokers in our network are Registered Financial Service Providers.
                </p>
              </div>
            </div>
            {/* Right — form */}
            <div className="w-full lg:w-[420px] lg:flex-shrink-0">
              <HoldingPanel />
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">Common Questions</span>
            <h2 className="text-2xl font-extrabold text-gray-900">Quick Answers Before You Submit</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl border border-gray-200 p-6">
                <h3 className="font-extrabold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA strip */}
      <section className="py-14 bg-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-3">Ready to Get the Right Cover?</h2>
          <p className="text-orange-100 text-lg mb-8">
            Join thousands of tradies who found better cover at a better price — in minutes.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#quote-form" className="bg-white text-orange-600 hover:bg-orange-50 font-bold px-8 py-3 rounded-xl transition-colors shadow-md">
              Get a Quote →
            </a>
            <Link href="/compare/" className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-8 py-3 rounded-xl transition-colors border border-orange-400">
              Compare Providers →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
