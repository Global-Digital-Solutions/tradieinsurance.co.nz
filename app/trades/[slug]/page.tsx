import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import QuoteForm from '@/components/QuoteForm'
import { tradeTypes, getTradeBySlug } from '@/data/trade-types'
import { coverageTypes } from '@/data/coverage-types'
import { siteConfig } from '@/data/site-config'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return tradeTypes.map((t) => ({ slug: t.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const trade = getTradeBySlug(slug)
  if (!trade) return {}
  return {
    title: `${trade.name} Insurance NZ | Specialist Tradie Cover`,
    description: `${trade.name} insurance in New Zealand. Get specialist cover from licensed brokers — public liability from ${trade.costFrom}. Free quotes, 24hr response.`,
    alternates: { canonical: `${siteConfig.url}/trades/${slug}/` },
  }
}

const claimIcons: Record<string, string> = {
  'Public Liability': '🛡️',
  'Statutory Liability': '⚖️',
  'Professional Indemnity': '📋',
  'Tools & Equipment': '🔧',
  'Income Protection': '💰',
}

const coverNotCovered: Record<string, string[]> = {
  'public-liability': ['Damage to your own property or equipment', 'Deliberate or intentional acts'],
  'tools-equipment': ['Wear and tear or mechanical breakdown', 'Tools left unattended in an unsecured vehicle (standard policy)'],
  'statutory-liability': ['Deliberate or criminal breaches of legislation', 'HSWA fines (defence costs only — fines not insurable by law)'],
  'professional-indemnity': ['Bodily injury or property damage (covered by PL)', 'Known circumstances not disclosed at inception'],
  'commercial-vehicle': ['Personal use accidents where business use not disclosed', 'Mechanical breakdown or wear and tear'],
  'income-protection': ['Self-inflicted injury', 'Pre-existing conditions (subject to underwriting)'],
  'contents-property': ['Gradual deterioration or wear and tear', 'Unoccupied premises for extended periods (check policy)'],
  'building-insurance': ['Gradual water damage or seepage', 'Earthquake damage without natural disaster extension'],
}

const coverWhatsCovered: Record<string, string[]> = {
  'public-liability': ['Third-party bodily injury claims', 'Third-party property damage', 'Underground services damage'],
  'tools-equipment': ['Theft from locked vehicle or site', 'Accidental damage anywhere', 'Hired-in equipment (optional extension)'],
  'statutory-liability': ['Legal defence costs for unintentional regulatory breaches', 'Fines where legally insurable', 'WorkSafe NZ investigation costs'],
  'professional-indemnity': ['Claims arising from professional advice or design errors', 'Legal defence costs', 'Rectification costs for professional errors'],
  'commercial-vehicle': ['Collision damage (comprehensive options available)', 'Third-party vehicle and property damage', 'Tools in vehicle (combined policy)'],
  'income-protection': ['Up to 75% of pre-disability income', 'Illness and non-work injury (unlike ACC)', 'Benefit periods from 2 years to age 65'],
  'contents-property': ['Fire, theft, flood, and accidental damage', 'Business contents and stock', 'Materials stored on job sites (extension available)'],
  'building-insurance': ['Fire, storm, and flood damage', 'Earthquake and natural disaster events', 'Malicious damage and vandalism'],
}

export default async function TradeTypePage({ params }: Props) {
  const { slug } = await params
  const trade = getTradeBySlug(slug)
  if (!trade) notFound()

  const recommended = trade.recommendedCover
    .map((s) => coverageTypes.find((c) => c.slug === s))
    .filter(Boolean) as typeof coverageTypes

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url + '/' },
      { '@type': 'ListItem', position: 2, name: 'Trade Types', item: siteConfig.url + '/trades/' },
      { '@type': 'ListItem', position: 3, name: trade.name, item: `${siteConfig.url}/trades/${slug}/` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* ── STICKY MOBILE CTA BAR ── */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur border-t border-gray-700 px-4 py-3 flex items-center gap-3 shadow-2xl">
        <a
          href="#get-quote"
          className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-extrabold py-3 rounded-xl text-center text-sm transition-colors shadow-lg"
        >
          Get Free Quote →
        </a>
        <Link
          href="/contact/"
          className="bg-gray-700 hover:bg-gray-600 text-white font-bold px-4 py-3 rounded-xl text-sm border border-gray-600 transition-colors"
        >
          Learn More
        </Link>
      </div>

      {/* ── HERO ── */}
      <div
        className="relative border-b border-gray-700"
        style={{ backgroundImage: `url(${trade.heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-gray-900/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <nav className="text-sm text-gray-300 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/trades/" className="hover:text-white transition-colors">Trades</Link>
            <span className="mx-2">›</span>
            <span className="text-white">{trade.name}</span>
          </nav>
          <div className="flex flex-col lg:flex-row items-start gap-10">
            <div className="flex-1">
              <div className="text-5xl mb-5">{trade.icon}</div>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-5 leading-tight">{trade.name} Insurance</h1>
              <p className="text-gray-200 text-xl max-w-2xl leading-relaxed mb-6">
                Specialist cover for New Zealand {trade.name.toLowerCase()}. Licensed advisers, free service, 24-hour response.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {['Free broker matching', 'All NZ trades covered', 'Licensed advisers only', '24hr response'].map((b) => (
                  <span key={b} className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                    <span className="text-orange-400">✓</span> {b}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <a href="#get-quote" className="bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-sm px-7 py-3.5 rounded-xl transition-colors shadow-lg shadow-orange-500/30">
                  Get Free Quote →
                </a>
                <Link href="/coverage/" className="bg-white/10 hover:bg-white/20 text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-colors border border-white/30">
                  View All Coverage
                </Link>
              </div>
            </div>
            {/* Hero pricing callout */}
            <div className="w-full lg:w-64 bg-gray-800/80 border border-gray-600 rounded-2xl p-6 backdrop-blur-sm">
              <p className="text-gray-400 text-xs uppercase tracking-widest font-bold mb-3">Public Liability from</p>
              <p className="text-orange-400 font-extrabold text-4xl mb-1">{trade.costFrom}</p>
              <p className="text-gray-500 text-xs mb-5">Indicative only — subject to assessment</p>
              <div className="space-y-2.5 mb-5">
                {[
                  { label: 'Cover range', val: '$1M – $20M' },
                  { label: 'Response time', val: '24 hours' },
                  { label: 'Service cost', val: 'Free' },
                ].map((r) => (
                  <div key={r.label} className="flex items-center justify-between text-xs">
                    <span className="text-gray-400">{r.label}</span>
                    <span className="text-white font-bold">{r.val}</span>
                  </div>
                ))}
              </div>
              <a href="#get-quote" className="block w-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm py-2.5 rounded-lg text-center transition-colors">
                Get My Quote →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── TRUST BAR ── */}
      <div className="bg-orange-500 py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            {['✓ Licensed & Regulated Advisers', '✓ 100% Free Service', '✓ No Obligation', '✓ All NZ Trades Covered', '✓ 24hr Broker Response'].map((pill) => (
              <span key={pill} className="text-white text-xs font-bold tracking-wide">{pill}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

          {/* ── WHAT IS ── */}
          <section className="mb-6">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6">What is {trade.name} Insurance?</h2>
            <div className="grid lg:grid-cols-2 gap-6 mb-10">
              {trade.introText.map((para, i) => (
                <p key={i} className="text-gray-700 leading-relaxed">{para}</p>
              ))}
            </div>
            <div className="grid sm:grid-cols-3 gap-5 mb-8">
              <div className="bg-orange-500 rounded-2xl p-6 text-center shadow-lg shadow-orange-500/20">
                <div className="text-3xl font-extrabold text-white mb-2">{trade.costFrom}</div>
                <div className="text-sm font-bold text-orange-100">Public Liability from</div>
                <div className="text-xs text-orange-200 mt-1">indicative, subject to assessment</div>
              </div>
              <div className="bg-gray-900 rounded-2xl p-6 text-center">
                <div className="text-3xl font-extrabold text-orange-400 mb-2">$1M–$20M</div>
                <div className="text-sm font-bold text-white">Typical PL Limit Range</div>
                <div className="text-xs text-gray-400 mt-1">6 cover levels available</div>
              </div>
              <div className="bg-gray-50 border-2 border-orange-200 rounded-2xl p-6 text-center">
                <div className="text-3xl font-extrabold text-orange-500 mb-2">24hrs</div>
                <div className="text-sm font-bold text-gray-700">Broker Response Time</div>
                <div className="text-xs text-gray-500 mt-1">Most tradies covered in 24–48hrs</div>
              </div>
            </div>
          </section>

          {/* ── INLINE CTA 1 — after intro ── */}
          <div className="bg-gray-900 rounded-2xl p-6 mb-16 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-white font-extrabold text-lg mb-1">Ready to get covered?</p>
              <p className="text-gray-400 text-sm">Compare quotes from top insurers — free, no obligation.</p>
            </div>
            <a href="#get-quote" className="whitespace-nowrap bg-orange-500 hover:bg-orange-600 text-white font-extrabold px-8 py-3 rounded-xl transition-colors text-sm shadow-lg shadow-orange-500/30 flex-shrink-0">
              Get Free Quote →
            </a>
          </div>

          {/* ── WHY NEED IT ── */}
          <section className="mb-6">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Why Do {trade.name} Need Insurance?</h2>
            <div className="grid sm:grid-cols-2 gap-5 mb-8">
              {trade.whyNeedIt.map((reason, i) => (
                <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-2xl p-5 border-2 border-gray-100 hover:border-orange-200 transition-colors">
                  <span className="w-8 h-8 rounded-full bg-orange-500 text-white font-extrabold text-sm flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md">0{i + 1}</span>
                  <p className="text-gray-700 text-sm leading-relaxed">{reason}</p>
                </div>
              ))}
            </div>
            {slug === 'builders' ? (
              <div className="bg-blue-900/10 border-l-4 border-blue-500 rounded-r-2xl p-5 mb-0">
                <p className="text-blue-900 font-bold mb-1">Building Act Requirement</p>
                <p className="text-blue-800 text-sm">The Building Act 2004 requires Licensed Building Practitioners to disclose their insurance details to clients before signing a building contract. Operating without current cover may put your LBP licence at risk.</p>
              </div>
            ) : (
              <div className="bg-blue-900/10 border-l-4 border-blue-500 rounded-r-2xl p-5 mb-0">
                <p className="text-blue-900 font-bold mb-1">Health and Safety at Work Act 2015</p>
                <p className="text-blue-800 text-sm">All New Zealand businesses have a duty to ensure the health and safety of workers and others affected by their work. Statutory liability insurance protects you if WorkSafe NZ investigates or prosecutes following an incident on your site.</p>
              </div>
            )}
          </section>

          {/* ── INLINE CTA 2 — after why need it ── */}
          <div className="mt-8 mb-16 flex flex-col sm:flex-row gap-3">
            <a href="#get-quote" className="flex-1 sm:flex-none bg-orange-500 hover:bg-orange-600 text-white font-extrabold px-8 py-3.5 rounded-xl transition-colors text-sm text-center shadow-lg shadow-orange-500/20">
              Get My Free {trade.name} Insurance Quote →
            </a>
            <span className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-gray-100 text-gray-600 px-6 py-3.5 rounded-xl text-sm">
              <span className="text-green-600 font-bold">✓</span> Licensed advisers · Free service · No obligation
            </span>
          </div>

        </div>
      </div>

      {/* ── COVER TYPES — dark bg ── */}
      <div className="bg-gray-900 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="inline-block bg-orange-500/20 border border-orange-400/40 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">Cover Types</span>
              <h2 className="text-3xl font-extrabold text-white mb-2">Cover Types for {trade.name}</h2>
              <p className="text-gray-400 text-sm max-w-xl">Your licensed adviser will recommend the right combination for your business size and risk profile.</p>
            </div>
            <a href="#get-quote" className="whitespace-nowrap bg-orange-500 hover:bg-orange-600 text-white font-extrabold px-6 py-3 rounded-xl transition-colors text-sm shadow-lg shadow-orange-500/30 flex-shrink-0">
              Get Quotes →
            </a>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {recommended.map((c) => (
              <div key={c.slug} className="bg-gray-800 border-2 border-gray-700 hover:border-orange-500/50 rounded-2xl p-6 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-500/20 border border-orange-500/30 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                      {c.icon}
                    </div>
                    <div>
                      <h3 className="font-extrabold text-white">{c.name}</h3>
                      <span className="text-orange-400 text-xs font-bold">From {c.fromPrice} <span className="text-gray-500 font-normal">(indicative)</span></span>
                    </div>
                  </div>
                  <Link href={`/types/${c.slug}/`} className="text-xs text-orange-400 hover:text-orange-300 font-bold whitespace-nowrap transition-colors">Details →</Link>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">{c.description.split('.')[0]}.</p>
                <div className="grid grid-cols-2 gap-4 border-t border-gray-700 pt-4">
                  <div>
                    <p className="text-xs font-extrabold text-green-400 mb-2.5 flex items-center gap-1">✓ COVERED</p>
                    <ul className="space-y-1.5">
                      {(coverWhatsCovered[c.slug] || []).map((item, i) => (
                        <li key={i} className="text-xs text-gray-300 flex items-start gap-1.5 leading-relaxed">
                          <span className="text-green-400 flex-shrink-0 mt-0.5 font-bold">✓</span>{item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-extrabold text-red-400 mb-2.5 flex items-center gap-1">✗ NOT COVERED</p>
                    <ul className="space-y-1.5">
                      {(coverNotCovered[c.slug] || []).map((item, i) => (
                        <li key={i} className="text-xs text-gray-400 flex items-start gap-1.5 leading-relaxed">
                          <span className="text-red-400 flex-shrink-0 mt-0.5">✗</span>{item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

          {/* ── REAL CLAIMS ── */}
          <section className="mb-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8">
              <div>
                <span className="inline-block bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">Real-World Claims</span>
                <h2 className="text-3xl font-extrabold text-gray-900 mb-2">What Can Go Wrong?</h2>
                <p className="text-gray-600 text-sm max-w-xl">Based on real incidents in the NZ trades sector. Details are illustrative.</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              {trade.claimExamples.map((claim, i) => (
                <div key={i} className="bg-gray-50 border-2 border-gray-100 rounded-2xl p-6 hover:border-orange-200 hover:shadow-md transition-all">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-2xl mb-4">
                    {claimIcons[claim.coverType] || '🛡️'}
                  </div>
                  <h3 className="font-extrabold text-gray-900 mb-2 text-sm leading-snug">{claim.title}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed mb-4">{claim.scenario}</p>
                  <div className="bg-green-50 border-l-4 border-green-500 rounded-r-xl px-4 py-3">
                    <p className="text-green-800 text-xs font-extrabold mb-0.5">{claim.coverType} covered:</p>
                    <p className="text-green-700 text-xs leading-relaxed">{claim.outcome}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── INLINE CTA 3 — after claims (high intent moment) ── */}
          <div className="mt-8 mb-16 bg-orange-500 rounded-2xl p-8 text-center shadow-xl shadow-orange-500/20">
            <h3 className="text-2xl font-extrabold text-white mb-2">Don&apos;t Wait Until a Claim Happens</h3>
            <p className="text-orange-100 mb-6 max-w-xl mx-auto">Get specialist {trade.name.toLowerCase()} insurance in place today — free broker matching, no obligation.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="#get-quote" className="bg-white text-orange-600 hover:bg-orange-50 font-extrabold px-8 py-3 rounded-xl transition-colors text-sm shadow-md">
                Get My Free Quote →
              </a>
              <Link href="/contact/" className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm border border-orange-400">
                How It Works →
              </Link>
            </div>
          </div>

          {/* ── COST TABLE ── */}
          <section className="mb-6">
            <span className="inline-block bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">Pricing</span>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">How Much Does {trade.name} Insurance Cost?</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">The cost of {trade.name.toLowerCase()} insurance depends on your annual turnover, number of employees, claims history, and the level of cover you select. The table below provides indicative starting prices only.</p>
            <div className="overflow-x-auto rounded-2xl border-2 border-gray-200 shadow-md mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-900">
                    <th className="text-left px-5 py-4 text-white font-bold border-r border-gray-700">Cover Type</th>
                    <th className="text-left px-5 py-4 text-white font-semibold text-xs border-r border-gray-700">Starting Price</th>
                    <th className="text-left px-5 py-4 text-white font-semibold text-xs border-r border-gray-700">Typical Cover Level</th>
                    <th className="text-left px-5 py-4 text-white font-semibold text-xs">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {recommended.map((c, i) => (
                    <tr key={c.slug} className={`${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-orange-50/40 transition-colors border-b border-gray-200 last:border-b-0`}>
                      <td className="px-5 py-4 border-r border-gray-200">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">{c.icon}</span>
                          <span className="font-extrabold text-gray-900">{c.name}</span>
                        </div>
                      </td>
                      <td className="px-5 py-4 border-r border-gray-200">
                        <span className="text-orange-600 font-extrabold text-base">{c.fromPrice}</span>
                      </td>
                      <td className="px-5 py-4 border-r border-gray-200 text-gray-700 text-xs">
                        {c.slug === 'public-liability' ? '$1M–$20M' : c.slug === 'statutory-liability' ? '$250k–$1M' : c.slug === 'professional-indemnity' ? '$500k–$2M' : c.slug === 'income-protection' ? 'Up to 75% income' : 'Per policy'}
                      </td>
                      <td className="px-5 py-4 text-gray-400 text-xs">Subject to individual assessment</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex flex-wrap gap-3 mb-8">
              {trade.costFactors.map((f) => (
                <span key={f} className="bg-orange-50 border border-orange-200 text-orange-800 text-xs font-bold px-4 py-2 rounded-full flex items-center gap-1.5">
                  <span className="text-orange-500">›</span> {f}
                </span>
              ))}
            </div>
          </section>

          {/* ── INLINE CTA 4 — after cost table ── */}
          <div className="mb-16 bg-gray-900 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-white font-extrabold mb-1">Get an accurate quote for your business</p>
              <p className="text-gray-400 text-sm">Our brokers compare multiple insurers to find the best rate for your trade and turnover.</p>
            </div>
            <a href="#get-quote" className="whitespace-nowrap bg-orange-500 hover:bg-orange-600 text-white font-extrabold px-8 py-3 rounded-xl transition-colors text-sm flex-shrink-0 shadow-lg shadow-orange-500/20">
              Compare Quotes Free →
            </a>
          </div>

          {/* ── LEGAL REQUIREMENTS ── */}
          <section className="mb-16">
            <span className="inline-block bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">Compliance</span>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Legal &amp; Licensing Requirements</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {trade.legalRequirements.map((req, i) => (
                <div key={i} className="flex items-start gap-3 bg-gray-50 rounded-xl p-5 border-2 border-gray-100 hover:border-orange-200 transition-colors">
                  <span className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-extrabold flex-shrink-0 mt-0.5">✓</span>
                  <p className="text-gray-700 text-sm leading-relaxed">{req}</p>
                </div>
              ))}
            </div>
            <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6">
              <p className="font-extrabold text-amber-900 mb-2 flex items-center gap-2"><span className="text-amber-500">⚠</span> Important: Statutory Liability and RMA Fines</p>
              <p className="text-amber-800 text-sm leading-relaxed">As of late 2025, statutory liability insurance may no longer cover fines under the Resource Management Act. Additionally, fines under the Health and Safety at Work Act 2015 cannot be insured by law — however, legal defence costs for WorkSafe NZ investigations and prosecutions remain insurable. Discuss the current scope of statutory liability cover with your licensed adviser before relying on it for RMA compliance.</p>
            </div>
          </section>

          {/* ── RECOMMENDED PACKAGE ── */}
          <section className="mb-16">
            <span className="inline-block bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">Recommended</span>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Recommended Cover Package</h2>
            <div className="bg-orange-50 border-l-4 border-orange-500 rounded-r-2xl p-6 mb-8">
              <p className="text-orange-900 font-extrabold mb-2">{trade.name} Insurance Package</p>
              <p className="text-orange-800 text-sm leading-relaxed">{trade.coverPackage}</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {recommended.map((c) => (
                <Link key={c.slug} href={`/types/${c.slug}/`} className="group flex items-center gap-3 bg-white border-2 border-gray-100 hover:border-orange-300 rounded-2xl p-4 transition-all hover:shadow-lg">
                  <div className="w-10 h-10 bg-orange-50 border border-orange-100 rounded-xl flex items-center justify-center text-xl flex-shrink-0 group-hover:bg-orange-100 transition-colors">
                    {c.icon}
                  </div>
                  <div>
                    <p className="font-extrabold text-gray-900 group-hover:text-orange-600 text-sm transition-colors">{c.name}</p>
                    <p className="text-orange-500 text-xs font-bold mt-0.5">From {c.fromPrice}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* ── FAQS ── */}
          <section className="mb-6">
            <span className="inline-block bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">FAQs</span>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6">{trade.name} Insurance FAQs</h2>
            <div className="space-y-3">
              {trade.faqs.map((faq, i) => (
                <div key={i} className="bg-gray-50 border-2 border-gray-100 hover:border-orange-200 rounded-2xl p-6 transition-colors">
                  <h3 className="font-extrabold text-gray-900 mb-2 flex items-start gap-2">
                    <span className="text-orange-500 flex-shrink-0">Q.</span>{faq.q}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed pl-6">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── INLINE CTA 5 — after FAQs ── */}
          <div className="mt-8 mb-0 bg-gray-50 border-2 border-orange-200 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-gray-900 font-extrabold mb-1">Still have questions? Talk to a specialist.</p>
              <p className="text-gray-500 text-sm">Our licensed brokers answer trade-specific questions before you commit to anything.</p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <a href="#get-quote" className="bg-orange-500 hover:bg-orange-600 text-white font-extrabold px-6 py-3 rounded-xl transition-colors text-sm">
                Get Quote →
              </a>
              <Link href="/contact/" className="bg-white hover:bg-gray-100 text-gray-900 font-bold px-5 py-3 rounded-xl transition-colors text-sm border-2 border-gray-200">
                Contact Us
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* ── GET QUOTE SECTION (anchor target) ── */}
      <div id="get-quote" className="bg-gray-800 py-16 scroll-mt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-start">

            {/* Left — trust copy */}
            <div className="flex-1">
              <span className="inline-block bg-orange-500/20 border border-orange-400/40 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-5">
                Free {trade.name} Insurance Quotes
              </span>
              <h2 className="text-3xl font-extrabold text-white mb-5 leading-tight">
                Get the Right {trade.name} Insurance — Without Overpaying
              </h2>
              <p className="text-gray-300 leading-relaxed mb-8">
                Our free broker matching service connects you with a specialist who knows {trade.name.toLowerCase()} risks inside out. They compare multiple insurers and find cover that fits your contracts, your business size, and your budget.
              </p>

              {/* Why us list */}
              <div className="space-y-4 mb-8">
                {[
                  { icon: '⏱️', title: 'Saves you hours of research', desc: 'One form, multiple quotes. No need to call every insurer yourself.' },
                  { icon: '💰', title: 'Saves money vs going direct', desc: 'Brokers access negotiated rates and compare the full market for you.' },
                  { icon: '🎯', title: 'Cover matched to your trade', desc: `Specialist ${trade.name.toLowerCase()} cover — not a generic policy with gaps.` },
                  { icon: '🔒', title: 'No obligation, no pressure', desc: 'Review the quotes in your own time. Our brokers advise — they don\'t sell.' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <span className="text-xl flex-shrink-0 mt-0.5">{item.icon}</span>
                    <div>
                      <p className="text-white font-bold text-sm">{item.title}</p>
                      <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-2 mb-8">
                {['Licensed under FMA', 'No Obligation', 'Free Service', 'All Trades', 'NZ Based', '24hr Response'].map((pill) => (
                  <span key={pill} className="text-xs text-gray-300 bg-gray-700 border border-gray-600 px-3 py-1.5 rounded-full flex items-center gap-1.5">
                    <span className="text-orange-400">✓</span> {pill}
                  </span>
                ))}
              </div>

              {/* Contact */}
              <div className="bg-gray-900/50 border border-gray-600 rounded-2xl p-5">
                <p className="text-gray-300 text-xs font-bold uppercase tracking-widest mb-3">Got Questions?</p>
                <p className="text-white font-bold text-sm mb-3">Email our team and we&apos;ll get back to you within 24 hours.</p>
                <a href={`mailto:${siteConfig.email}`} className="text-orange-400 hover:text-orange-300 font-bold text-sm transition-colors block mb-3">
                  {siteConfig.email}
                </a>
                <div className="flex flex-wrap gap-1.5">
                  {['Licensed FMA', 'Free Service', 'No Obligation'].map((b) => (
                    <span key={b} className="text-xs text-gray-400 bg-gray-800 border border-gray-600 px-2 py-1 rounded-full">✓ {b}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div className="w-full lg:w-auto lg:min-w-[380px] lg:max-w-sm">
              <QuoteForm />
            </div>
          </div>
        </div>
      </div>

      {/* ── BOTTOM CTA ── */}
      <div className="bg-gray-900 py-10 border-t border-gray-800 pb-24 lg:pb-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 text-xs">All prices indicative only and subject to individual insurer assessment. Insurance arranged by licensed financial advisers under applicable New Zealand legislation. This is a referral service — the referred advisers hold their own Financial Advice Provider licences.</p>
        </div>
      </div>
    </>
  )
}
