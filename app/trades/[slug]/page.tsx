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
  'tools-equipment': ['Theft from locked vehicle or site', 'Accidental damage anywhere in New Zealand', 'Hired-in equipment (optional extension)'],
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

      {/* HERO */}
      <div className="relative border-b border-gray-700" style={{ backgroundImage: `url(${trade.heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gray-900/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <nav className="text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/trades/" className="hover:text-white">Trades</Link>
            <span className="mx-2">›</span>
            <span className="text-white">{trade.name}</span>
          </nav>
          <div className="text-5xl mb-5">{trade.icon}</div>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-5 leading-tight">{trade.name} Insurance</h1>
          <p className="text-gray-300 text-xl max-w-2xl leading-relaxed mb-8">Specialist cover for New Zealand {trade.name.toLowerCase()}. Licensed advisers, free service, 24-hour response.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact/" className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm px-6 py-3 rounded-lg transition-colors">Get Free Quote →</Link>
            <Link href="/coverage/" className="bg-white/10 hover:bg-white/20 text-white font-bold text-sm px-6 py-3 rounded-lg transition-colors border border-white/20">View Coverage Types</Link>
          </div>
        </div>
      </div>

      {/* TRUST BAR */}
      <div className="bg-orange-500 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
            {['✓ Licensed Advisers', '✓ Free Service', '✓ 24hr Response', '✓ All Trades Covered'].map((pill) => (
              <span key={pill} className="text-white font-bold text-sm">{pill}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

          {/* WHAT IS */}
          <section className="mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6">What is {trade.name} Insurance?</h2>
            <div className="grid lg:grid-cols-2 gap-6 mb-10">
              {trade.introText.map((para, i) => (
                <p key={i} className="text-gray-700 leading-relaxed">{para}</p>
              ))}
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6 text-center">
                <div className="text-3xl font-extrabold text-orange-500 mb-2">{trade.costFrom}</div>
                <div className="text-sm font-bold text-gray-700">Public Liability from</div>
                <div className="text-xs text-gray-500 mt-1">indicative only, subject to insurer assessment</div>
              </div>
              <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6 text-center">
                <div className="text-3xl font-extrabold text-orange-500 mb-2">$1M–$20M</div>
                <div className="text-sm font-bold text-gray-700">Typical PL Limit Range</div>
                <div className="text-xs text-gray-500 mt-1">6 cover levels available</div>
              </div>
              <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6 text-center">
                <div className="text-3xl font-extrabold text-orange-500 mb-2">#1</div>
                <div className="text-sm font-bold text-gray-700">Most Common Cover</div>
                <div className="text-xs text-gray-500 mt-1">Public liability for {trade.name.toLowerCase()}</div>
              </div>
            </div>
          </section>

          {/* WHY NEED IT */}
          <section className="mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Why Do {trade.name} Need Insurance?</h2>
            <div className="grid sm:grid-cols-2 gap-5 mb-8">
              {trade.whyNeedIt.map((reason, i) => (
                <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-2xl p-5 border border-gray-100">
                  <span className="text-orange-500 font-extrabold text-lg mt-0.5 flex-shrink-0">0{i + 1}</span>
                  <p className="text-gray-700 text-sm leading-relaxed">{reason}</p>
                </div>
              ))}
            </div>
            {slug === 'builders' && (
              <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-2xl p-5">
                <p className="text-blue-900 font-bold mb-1">Building Act Requirement</p>
                <p className="text-blue-800 text-sm">The Building Act 2004 requires Licensed Building Practitioners to disclose their insurance details to clients before signing a building contract. Operating without current cover may put your LBP licence at risk.</p>
              </div>
            )}
            {slug !== 'builders' && (
              <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-2xl p-5">
                <p className="text-blue-900 font-bold mb-1">Health and Safety at Work Act 2015</p>
                <p className="text-blue-800 text-sm">All New Zealand businesses have a duty to ensure the health and safety of workers and others affected by their work. Statutory liability insurance protects you if WorkSafe NZ investigates or prosecutes following an incident on your site.</p>
              </div>
            )}
          </section>
        </div>
      </div>

      {/* COVER TYPES — dark bg */}
      <div className="bg-gray-900 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white mb-3">Cover Types for {trade.name}</h2>
          <p className="text-gray-400 mb-10">Your licensed adviser will recommend the right combination for your business size and risk profile.</p>
          <div className="grid sm:grid-cols-2 gap-6">
            {recommended.map((c) => (
              <div key={c.slug} className="bg-gray-800 border border-gray-700 rounded-2xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{c.icon}</span>
                    <div>
                      <h3 className="font-bold text-white">{c.name}</h3>
                      <span className="text-orange-400 text-xs font-bold">From {c.fromPrice} <span className="text-gray-500 font-normal">(indicative)</span></span>
                    </div>
                  </div>
                  <Link href={`/types/${c.slug}/`} className="text-xs text-orange-400 hover:text-orange-300 font-bold whitespace-nowrap">Learn more →</Link>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{c.description.split('.')[0]}.</p>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-xs font-bold text-green-400 mb-2">WHAT&apos;S COVERED</p>
                    <ul className="space-y-1">
                      {(coverWhatsCovered[c.slug] || []).map((item, i) => (
                        <li key={i} className="text-xs text-gray-300 flex items-start gap-1.5"><span className="text-green-400 flex-shrink-0 mt-0.5">✓</span>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-red-400 mb-2">NOT COVERED</p>
                    <ul className="space-y-1">
                      {(coverNotCovered[c.slug] || []).map((item, i) => (
                        <li key={i} className="text-xs text-gray-400 flex items-start gap-1.5"><span className="text-red-400 flex-shrink-0 mt-0.5">✗</span>{item}</li>
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

          {/* REAL CLAIMS */}
          <section className="mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-3">Real Claims — What Can Go Wrong?</h2>
            <p className="text-gray-600 mb-8">These claim scenarios are based on real-world incidents in the New Zealand trades sector. Details are illustrative.</p>
            <div className="grid sm:grid-cols-3 gap-6">
              {trade.claimExamples.map((claim, i) => (
                <div key={i} className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
                  <div className="text-3xl mb-3">{claimIcons[claim.coverType] || '🛡️'}</div>
                  <h3 className="font-bold text-gray-900 mb-2 text-sm">{claim.title}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed mb-4">{claim.scenario}</p>
                  <div className="bg-green-50 border border-green-100 rounded-xl px-3 py-2">
                    <p className="text-green-800 text-xs font-bold mb-0.5">{claim.coverType}</p>
                    <p className="text-green-700 text-xs leading-relaxed">{claim.outcome}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>

      {/* MID-PAGE CTA */}
      <div className="bg-orange-500 py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-white mb-3">Get Your {trade.name} Insurance Quote</h2>
            <p className="text-orange-100">Connect with a licensed New Zealand adviser in minutes — no obligation, completely free.</p>
          </div>
          <QuoteForm />
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

          {/* COST */}
          <section className="mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">How Much Does {trade.name} Insurance Cost?</h2>
            <p className="text-gray-600 mb-8">The cost of {trade.name.toLowerCase()} insurance depends on several factors including your annual turnover, number of employees, claims history, and the level of cover you select. The table below provides indicative starting prices only — all premiums are subject to individual insurer assessment.</p>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-900 text-white">
                    <th className="text-left p-4 rounded-tl-xl">Cover Type</th>
                    <th className="text-left p-4">Starting Price</th>
                    <th className="text-left p-4">Typical Cover Level</th>
                    <th className="text-left p-4 rounded-tr-xl">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {recommended.map((c, i) => (
                    <tr key={c.slug} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="p-4 font-medium text-gray-900">{c.name}</td>
                      <td className="p-4 text-orange-600 font-bold">{c.fromPrice}</td>
                      <td className="p-4 text-gray-600">{c.slug === 'public-liability' ? '$1M–$20M' : c.slug === 'statutory-liability' ? '$250k–$1M' : c.slug === 'professional-indemnity' ? '$500k–$2M' : c.slug === 'income-protection' ? 'Up to 75% income' : 'Per policy'}</td>
                      <td className="p-4 text-gray-500 text-xs">Indicative only, subject to assessment</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex flex-wrap gap-3">
              {trade.costFactors.map((f) => (
                <span key={f} className="bg-orange-50 border border-orange-200 text-orange-800 text-sm font-medium px-4 py-2 rounded-full">{f}</span>
              ))}
            </div>
          </section>

          {/* LEGAL REQUIREMENTS */}
          <section className="mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Legal &amp; Licensing Requirements</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {trade.legalRequirements.map((req, i) => (
                <div key={i} className="flex items-start gap-3 bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <span className="text-orange-500 font-bold mt-0.5 flex-shrink-0">✓</span>
                  <p className="text-gray-700 text-sm">{req}</p>
                </div>
              ))}
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
              <p className="font-bold text-amber-900 mb-2">Important: Statutory Liability and RMA Fines</p>
              <p className="text-amber-800 text-sm leading-relaxed">As of late 2025, statutory liability insurance may no longer cover fines under the Resource Management Act. Additionally, fines under the Health and Safety at Work Act 2015 cannot be insured by law — however, legal defence costs for WorkSafe NZ investigations and prosecutions remain insurable. Discuss the current scope of statutory liability cover with your licensed adviser before relying on it for RMA compliance.</p>
            </div>
          </section>

          {/* RECOMMENDED PACKAGE */}
          <section className="mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Recommended Cover Package</h2>
            <div className="bg-orange-50 border-l-4 border-orange-500 rounded-r-2xl p-6 mb-8">
              <p className="text-orange-900 font-bold mb-2">{trade.name} Insurance Package</p>
              <p className="text-orange-800 text-sm leading-relaxed">{trade.coverPackage}</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {recommended.map((c) => (
                <Link key={c.slug} href={`/types/${c.slug}/`} className="group flex items-center gap-3 bg-white border-2 border-gray-100 hover:border-orange-200 rounded-2xl p-4 transition-all hover:shadow-md">
                  <span className="text-2xl flex-shrink-0">{c.icon}</span>
                  <div>
                    <p className="font-bold text-gray-900 group-hover:text-orange-600 text-sm transition-colors">{c.name}</p>
                    <p className="text-gray-500 text-xs mt-0.5">From {c.fromPrice}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* FAQS */}
          <section className="mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6">{trade.name} Insurance FAQs</h2>
            <div className="space-y-4">
              {trade.faqs.map((faq, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-2xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3">{faq.q}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>

      {/* BOTTOM CTA */}
      <div className="bg-gray-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4">Ready to Protect Your {trade.name} Business?</h2>
          <p className="text-gray-400 mb-8 text-lg">Talk to a licensed New Zealand adviser today. Free service, no obligation, 24-hour response.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl transition-colors border border-white/20 text-lg">
              📞 {siteConfig.phone}
            </a>
            <Link href="/contact/" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl transition-colors text-lg">
              Get Free Quote →
            </Link>
          </div>
          <p className="text-gray-600 text-xs mt-6">All prices indicative only and subject to individual insurer assessment. Insurance arranged by licensed financial advisers under applicable New Zealand legislation.</p>
        </div>
      </div>
    </>
  )
}
