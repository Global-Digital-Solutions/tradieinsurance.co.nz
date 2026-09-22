import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import QuoteForm from '@/components/QuoteForm'
import { tradeTypes, getTradeBySlug } from '@/data/trade-types'
import { coverageTypes } from '@/data/coverage-types'
import { siteConfig } from '@/data/site-config'
import { metaDescription } from '@/lib/meta'

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
  const title = `${trade.name} Insurance NZ | Specialist Cover`
  const description = metaDescription(
    trade.metaDescription ??
      `${trade.name} insurance in NZ: the cover ${trade.name.toLowerCase()} need, what sets the price, and the rules that apply. Connect with a specialist broker.`,
  )
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: `${siteConfig.url}/trades/${slug}/` },
    openGraph: {
      type: 'website',
      title,
      description,
      url: `${siteConfig.url}/trades/${slug}/`,
      siteName: 'TradieInsurance.co.nz',
      locale: 'en_NZ',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
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

// What an insurer prices each cover on. Replaces the old "from $X/month"
// figures, which had no source and were shown as if they were quotes.
const pricedOn: Record<string, string> = {
  'public-liability': 'Limit of indemnity, turnover or wages, the work you do, claims history',
  'tools-equipment': 'Sum insured, where tools are kept overnight, security, excess',
  'statutory-liability': 'Limit chosen, turnover, number of staff',
  'professional-indemnity': 'Fee income, the advice or design you provide, limit chosen',
  'commercial-vehicle': 'Vehicle value, drivers, how the vehicle is used, excess',
  'income-protection': 'Age, occupation, benefit amount, wait and benefit periods',
  'contents-property': 'Sum insured, location, construction, security',
  'building-insurance': 'Sum insured, location, construction, natural hazard exposure',
}

// Sources shown on every trade page, for the statutory liability box.
const STANDARD_SOURCES = [
  { label: 'Health and Safety at Work Act 2015, section 29: Insurance against fines unlawful', url: 'https://www.legislation.govt.nz/act/public/2015/0070/latest/DLM6375600.html' },
  { label: 'MinterEllison: Another ban on insuring against fines, key changes to the RMA', url: 'https://minterellison.co.nz/insights/another-ban-on-insuring-against-fines-key-changes' },
]

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
      { '@type': 'ListItem', position: 3, name: `${trade.name} Insurance`, item: `${siteConfig.url}/trades/${slug}/` },
    ],
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${siteConfig.url}/trades/${slug}/#service`,
    name: `${trade.name} Insurance`,
    description: `Insurance for New Zealand ${trade.name.toLowerCase()}, arranged through specialist brokers: public liability, tools, commercial vehicle, statutory liability and more.`,
    provider: { '@id': `${siteConfig.url}/#organization` },
    areaServed: { '@type': 'Country', name: 'New Zealand' },
    url: `${siteConfig.url}/trades/${slug}/`,
    serviceType: 'Insurance Broker Referral',
  }

  // The two questions UK trade-insurance pages are built around ("what does it
  // cover", "how much does it cost"), answered from this trade's own data.
  const lower = trade.name.toLowerCase()
  const coverNames = recommended.map((c) => c.name.toLowerCase())
  const listed = coverNames.length > 1 ? `${coverNames.slice(0, -1).join(', ')} and ${coverNames[coverNames.length - 1]}` : coverNames[0]
  const faqs = [
    ...trade.faqs,
    {
      q: `What does ${lower} insurance cover?`,
      a: `${trade.name} insurance is usually a combination of covers rather than one policy. The covers ${lower} most often ask about are ${listed}. What each one pays for, and what it leaves out, is set by the policy wording, so the wording is the document to compare.`,
    },
    {
      q: `How much does ${lower} insurance cost?`,
      a: `There is no fixed price. Each insurer sets the premium on the details of the business, including ${trade.costFactors.map((f) => f.toLowerCase()).join(', ')}. The way to find out is to be quoted on your own numbers.`,
    },
  ]

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  const sources = [...(trade.sources ?? []), ...STANDARD_SOURCES].filter((s, i, all) => all.findIndex((x) => x.url === s.url) === i)
  const cite = (i?: number) =>
    i === undefined || !trade.sources?.[i] ? null : (
      <a href={trade.sources[i].url} target="_blank" rel="noopener noreferrer" className="underline decoration-dotted underline-offset-2 hover:text-orange-600">
        Source
      </a>
    )

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── STICKY MOBILE CTA BAR ── */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur border-t border-gray-700 px-4 py-3 flex items-center gap-3 shadow-2xl">
        <a
          href="#get-quote"
          className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-extrabold py-3 rounded-xl text-center text-sm transition-colors shadow-lg"
        >
          Get a Quote →
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
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}
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
              <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-5 leading-tight">{trade.name} Insurance</h1>
              <p className="text-gray-200 text-xl max-w-2xl leading-relaxed mb-6">
                {trade.heroLead ?? `Insurance for ${trade.name.toLowerCase()}: the covers commonly held, what the rules ask of the trade, and a specialist broker to arrange it.`}
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {['Specialist trade brokers', 'No obligation', 'All trades'].map((b) => (
                  <span key={b} className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                    <span className="text-orange-400">✓</span> {b}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <a href="#get-quote" className="bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-sm px-7 py-3.5 rounded-xl transition-colors shadow-lg shadow-orange-500/30">
                  Get a Quote →
                </a>
                <Link href="/coverage/" className="bg-white/10 hover:bg-white/20 text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-colors border border-white/30">
                  View All Coverage
                </Link>
              </div>
            </div>
            {/* Hero: the covers this trade usually asks about (replaces an unsourced "from $X" price). */}
            <div className="w-full lg:w-72 bg-gray-800/80 border border-gray-600 rounded-2xl p-6 backdrop-blur-sm">
              <p className="text-gray-400 text-xs uppercase tracking-widest font-bold mb-3">Cover {trade.name.toLowerCase()} usually ask about</p>
              <ul className="space-y-2 mb-5">
                {recommended.map((c) => (
                  <li key={c.slug}>
                    <Link href={`/types/${c.slug}/`} className="flex items-center justify-between text-sm text-white hover:text-orange-300 transition-colors">
                      <span>{c.name}</span><span className="text-orange-400">›</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <a href="#get-quote" className="block w-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm py-2.5 rounded-lg text-center transition-colors">
                Talk to a broker →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── TRUST BAR ── */}
      <div className="bg-orange-500 py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            {['✓ Specialist Trade Brokers', '✓ No Obligation', '✓ All NZ Trades'].map((pill) => (
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
            {trade.stats && (
              <div className="grid sm:grid-cols-3 gap-5 mb-8">
                {trade.stats.map((st, i) => (
                  <div key={st.label} className={i === 0 ? 'bg-orange-500 rounded-2xl p-6 shadow-lg shadow-orange-500/20 text-white' : i === 1 ? 'bg-gray-900 rounded-2xl p-6 text-white' : 'bg-gray-50 border-2 border-orange-200 rounded-2xl p-6 text-gray-900'}>
                    <div className={`text-3xl font-extrabold mb-1 ${i === 1 ? 'text-orange-400' : i === 2 ? 'text-orange-500' : ''}`}>{st.value}</div>
                    <div className="text-sm font-bold mb-2">{st.label}</div>
                    <p className={`text-xs leading-relaxed ${i === 2 ? 'text-gray-600' : 'opacity-80'}`}>{st.note} {cite(st.source)}</p>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* ── INLINE CTA 1 — after intro ── */}
          <div className="bg-gray-900 rounded-2xl p-6 mb-16 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-white font-extrabold text-lg mb-1">Want to talk it through?</p>
              <p className="text-gray-400 text-sm">A specialist broker can check your contracts and current cover. No obligation.</p>
            </div>
            <a href="#get-quote" className="whitespace-nowrap bg-orange-500 hover:bg-orange-600 text-white font-extrabold px-8 py-3 rounded-xl transition-colors text-sm shadow-lg shadow-orange-500/30 flex-shrink-0">
              Get a Quote →
            </a>
          </div>

          {/* ── WHY NEED IT ── */}
          <section className="mb-6">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Why {trade.name} Carry Insurance</h2>
            {/* The contract point is made once, in the callout below, so a trade's own
                "contracts require it" item is not repeated here. */}
            <div className="grid lg:grid-cols-3 gap-5 mb-8">
              {trade.whyNeedIt.filter((w) => !/head contractor|certificate of currency/i.test(w)).map((reason, i) => (
                <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-2xl p-5 border-2 border-gray-100 hover:border-orange-200 transition-colors">
                  <span className="w-8 h-8 rounded-full bg-orange-500 text-white font-extrabold text-sm flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md">0{i + 1}</span>
                  <p className="text-gray-700 text-sm leading-relaxed">{reason}</p>
                </div>
              ))}
            </div>
            {/* Applies to every trade: cover is rarely a legal requirement, but it is a contract one. */}
            <div className="bg-orange-50 border-l-4 border-orange-500 rounded-r-2xl p-5 mb-5">
              <p className="text-orange-900 font-bold mb-1">Not required by law. Required to get the work.</p>
              <p className="text-orange-800 text-sm">Insurance is not mandatory for most {trade.name.toLowerCase()}, but construction companies, head contractors and commercial clients routinely require public liability before you start, often at a set minimum limit with a certificate of currency. Cover protects your client as well as your business: if your work causes damage or injury, there is a policy to pay the claim.</p>
            </div>
            {trade.legalCallout ? (
              <div className="bg-blue-900/10 border-l-4 border-blue-500 rounded-r-2xl p-5 mb-0">
                <p className="text-blue-900 font-bold mb-1">{trade.legalCallout.title}</p>
                <p className="text-blue-800 text-sm">{trade.legalCallout.body} {cite(trade.legalCallout.source)}</p>
              </div>
            ) : (
              <div className="bg-blue-900/10 border-l-4 border-blue-500 rounded-r-2xl p-5 mb-0">
                <p className="text-blue-900 font-bold mb-1">Health and Safety at Work Act 2015</p>
                <p className="text-blue-800 text-sm">Every New Zealand business has a duty to ensure the health and safety of workers and others affected by its work. Fines under the Act cannot be insured, but statutory liability insurance can pay the legal costs of responding to a WorkSafe investigation or prosecution.</p>
              </div>
            )}
          </section>

          {/* ── INLINE CTA 2 — after why need it ── */}
          <div className="mt-8 mb-16 flex flex-col sm:flex-row gap-3">
            <a href="#get-quote" className="flex-1 sm:flex-none bg-orange-500 hover:bg-orange-600 text-white font-extrabold px-8 py-3.5 rounded-xl transition-colors text-sm text-center shadow-lg shadow-orange-500/20">
              Get My {trade.name} Insurance Quote →
            </a>
            <span className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-gray-100 text-gray-600 px-6 py-3.5 rounded-xl text-sm">
              <span className="text-green-600 font-bold">✓</span> Specialist brokers · No obligation
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
              <p className="text-gray-400 text-sm max-w-xl">What each cover typically includes and leaves out. Wordings differ between insurers, so check the policy itself.</p>
            </div>
            <a href="#get-quote" className="whitespace-nowrap bg-orange-500 hover:bg-orange-600 text-white font-extrabold px-6 py-3 rounded-xl transition-colors text-sm shadow-lg shadow-orange-500/30 flex-shrink-0">
              Get a Quote →
            </a>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {recommended.map((c) => (
              <div key={c.slug} className="bg-gray-800 border-2 border-gray-700 hover:border-orange-500/50 rounded-2xl p-6 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div>
                      <h3 className="font-extrabold text-white">{c.name}</h3>
                    </div>
                  </div>
                  <Link href={`/types/${c.slug}/`} className="text-xs text-orange-400 hover:text-orange-300 font-bold whitespace-nowrap transition-colors">Details →</Link>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">{c.description.split('.')[0]}.</p>
                <div className="grid grid-cols-2 gap-4 border-t border-gray-700 pt-4">
                  <div>
                    <p className="text-xs font-extrabold text-green-400 mb-2.5 flex items-center gap-1">✓ TYPICALLY COVERED</p>
                    <ul className="space-y-1.5">
                      {(coverWhatsCovered[c.slug] || []).map((item, i) => (
                        <li key={i} className="text-xs text-gray-300 flex items-start gap-1.5 leading-relaxed">
                          <span className="text-green-400 flex-shrink-0 mt-0.5 font-bold">✓</span>{item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-extrabold text-red-400 mb-2.5 flex items-center gap-1">✗ TYPICALLY EXCLUDED</p>
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
                <span className="inline-block bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">Claim Scenarios</span>
                <h2 className="text-3xl font-extrabold text-gray-900 mb-2">What Can Go Wrong?</h2>
                <p className="text-gray-600 text-sm max-w-xl">The kinds of claims {trade.name.toLowerCase()} face. Scenarios are illustrative, and whether a policy responds depends on its wording.</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              {trade.claimExamples.map((claim, i) => (
                <div key={i} className="bg-gray-50 border-2 border-gray-100 rounded-2xl p-6 hover:border-orange-200 hover:shadow-md transition-all">
                  <h3 className="font-extrabold text-gray-900 mb-2 text-sm leading-snug">{claim.title}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed mb-4">{claim.scenario}</p>
                  <div className="bg-green-50 border-l-4 border-green-500 rounded-r-xl px-4 py-3">
                    <p className="text-green-800 text-xs font-extrabold mb-0.5">Where cover may respond: {claim.coverType}</p>
                    <p className="text-green-700 text-xs leading-relaxed">{claim.outcome}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── INLINE CTA 3 — after claims (high intent moment) ── */}
          <div className="mt-8 mb-16 bg-orange-500 rounded-2xl p-8 text-center shadow-xl shadow-orange-500/20">
            <h3 className="text-2xl font-extrabold text-white mb-2">Talk to a Broker Before the Next Job</h3>
            <p className="text-orange-100 mb-6 max-w-xl mx-auto">A specialist broker can go through how a policy would respond to claims like these. No obligation.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="#get-quote" className="bg-white text-orange-600 hover:bg-orange-50 font-extrabold px-8 py-3 rounded-xl transition-colors text-sm shadow-md">
                Get a Quote →
              </a>
              <Link href="/contact/" className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm border border-orange-400">
                How It Works →
              </Link>
            </div>
          </div>

          {/* ── COST TABLE ── */}
          <section className="mb-6">
            <span className="inline-block bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">Cost</span>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">How Much Does {trade.name} Insurance Cost?</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">There is no fixed price for {trade.name.toLowerCase()} insurance. Each insurer rates your business on the details below, so two {trade.name.toLowerCase()} with the same cover can pay very different premiums. The way to find out what yours will cost is to be quoted on your actual numbers.</p>
            <div className="overflow-x-auto rounded-2xl border-2 border-gray-200 shadow-md mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-900">
                    <th className="text-left px-5 py-4 text-white font-bold border-r border-gray-700">Cover Type</th>
                    <th className="text-left px-5 py-4 text-white font-semibold text-xs">What the insurer prices it on</th>
                  </tr>
                </thead>
                <tbody>
                  {recommended.map((c, i) => (
                    <tr key={c.slug} className={`${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'} border-b border-gray-200 last:border-b-0`}>
                      <td className="px-5 py-4 border-r border-gray-200">
                        <Link href={`/types/${c.slug}/`} className="font-extrabold text-gray-900 hover:text-orange-600">{c.name}</Link>
                      </td>
                      <td className="px-5 py-4 text-gray-700 text-xs">{pricedOn[c.slug] ?? 'Sum insured or limit, and your business details'}</td>
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
              <p className="text-white font-extrabold mb-1">Get priced on your actual numbers</p>
              <p className="text-gray-400 text-sm">A specialist broker takes your turnover, staff and the work you do, and arranges quotes to match.</p>
            </div>
            <a href="#get-quote" className="whitespace-nowrap bg-orange-500 hover:bg-orange-600 text-white font-extrabold px-8 py-3 rounded-xl transition-colors text-sm flex-shrink-0 shadow-lg shadow-orange-500/20">
              Get a Quote →
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
              <p className="font-extrabold text-amber-900 mb-2 flex items-center gap-2"><span className="text-amber-500">⚠</span> Fines you cannot insure</p>
              <p className="text-amber-800 text-sm leading-relaxed">Since 20 August 2025, fines under the Resource Management Act cannot be insured, and the maximum fines rose to $1 million for individuals and $10 million for companies. Defence costs and court-ordered remediation can still be insured. Insuring against fines under the Health and Safety at Work Act 2015 is also unlawful. Statutory liability cover still matters for defence costs, but check what your policy now pays for.</p>
            </div>
          </section>

          {/* ── RECOMMENDED PACKAGE ── */}
          <section className="mb-16">
            <span className="inline-block bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">Typical Package</span>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Cover {trade.name} Commonly Hold</h2>
            <div className="bg-orange-50 border-l-4 border-orange-500 rounded-r-2xl p-6 mb-8">
              <p className="text-orange-900 font-extrabold mb-2">A typical {trade.name.toLowerCase()} package</p>
              <p className="text-orange-800 text-sm leading-relaxed">{trade.coverPackage}</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {recommended.map((c) => (
                <Link key={c.slug} href={`/types/${c.slug}/`} className="group bg-white border-2 border-gray-100 hover:border-orange-300 rounded-2xl p-4 transition-all hover:shadow-lg">
                  <p className="font-extrabold text-gray-900 group-hover:text-orange-600 text-sm transition-colors">{c.name}</p>
                  <p className="text-gray-500 text-xs mt-0.5">What it covers →</p>
                </Link>
              ))}
            </div>
          </section>

          {/* ── FAQS ── */}
          <section className="mb-6">
            <span className="inline-block bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">FAQs</span>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6">{trade.name} Insurance FAQs</h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
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
              <p className="text-gray-500 text-sm">A specialist broker can answer trade-specific questions before you commit to anything.</p>
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
                {trade.name} Insurance Quotes
              </span>
              <h2 className="text-3xl font-extrabold text-white mb-5 leading-tight">
                Get the Right {trade.name} Insurance
              </h2>
              <p className="text-gray-300 leading-relaxed mb-8">
                Tell us about your business and a specialist broker who works with {trade.name.toLowerCase()} will be in touch. They look at your contracts, the work you do and the cover you already hold, then recommend cover and arrange quotes. No obligation.
              </p>

              {/* Why us list */}
              <div className="space-y-4 mb-8">
                {[
                  { title: 'One form, not ten phone calls', desc: 'Tell us once. The broker does the running around with insurers.' },
                  { title: 'Cover matched to your trade', desc: `A broker who works with ${trade.name.toLowerCase()} knows where standard policies leave gaps.` },
                  { title: 'Advice before you buy', desc: 'Ask what a policy does and does not cover before you commit.' },
                  { title: 'No obligation', desc: 'Review what you are offered in your own time.' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <span className="text-orange-400 font-bold flex-shrink-0 mt-0.5">✓</span>
                    <div>
                      <p className="text-white font-bold text-sm">{item.title}</p>
                      <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-2 mb-8">
                {['Registered Financial Service Providers', 'No Obligation', 'All Trades', 'NZ Based'].map((pill) => (
                  <span key={pill} className="text-xs text-gray-300 bg-gray-700 border border-gray-600 px-3 py-1.5 rounded-full flex items-center gap-1.5">
                    <span className="text-orange-400">✓</span> {pill}
                  </span>
                ))}
              </div>

              {/* Contact */}
              <div className="bg-gray-900/50 border border-gray-600 rounded-2xl p-5">
                <p className="text-gray-300 text-xs font-bold uppercase tracking-widest mb-3">Got Questions?</p>
                <p className="text-white font-bold text-sm mb-3">Email our team with any question about cover.</p>
                <a href={`mailto:${siteConfig.email}`} className="text-orange-400 hover:text-orange-300 font-bold text-sm transition-colors block mb-3">
                  {siteConfig.email}
                </a>
                <div className="flex flex-wrap gap-1.5">
                  {['Registered FSP', 'No Obligation'].map((b) => (
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

      {/* ── RELATED GUIDES ── */}
      {(() => {
        const tradeGuideMap: Record<string, { href: string; label: string }[]> = {
          builders: [
            { href: '/blog/other-trades-defective-workmanship-cover/', label: 'Defective Workmanship by Other Trades' },
            { href: '/blog/builder-insurance-checklist-nz/', label: 'Builder Insurance Checklist' },
            { href: '/blog/building-amendment-bill-liability-insurance-2026/', label: 'Building Liability Reform' },
            { href: '/tradie-insurance/public-liability-tradies-nz/', label: 'Public Liability for Tradies' },
            { href: '/tradie-insurance/tool-insurance-nz/', label: 'Tool Insurance Guide' },
          ],
        }
        const defaultGuides = [
          { href: '/tradie-insurance/best-tradie-insurance/', label: 'Best Tradie Insurance' },
          { href: '/tradie-insurance/compare-tradie-insurance/', label: 'Compare Tradie Insurance' },
          { href: '/tradie-insurance/public-liability-tradies-nz/', label: 'Public Liability for Tradies' },
          { href: '/tradie-insurance/tool-insurance-nz/', label: 'Tool Insurance Guide' },
          { href: '/tradie-insurance/tradie-insurance-cost-nz/', label: 'How Much Does It Cost?' },
        ]
        const guides = tradeGuideMap[trade.slug] ?? defaultGuides
        return (
          <div className="bg-orange-50 border-t border-orange-100 py-10">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-lg font-extrabold text-gray-900 mb-4">Related Insurance Guides</h2>
              <div className="flex flex-wrap gap-3">
                {guides.map((g) => (
                  <Link
                    key={g.href}
                    href={g.href}
                    className="text-sm font-semibold text-orange-600 hover:text-orange-800 bg-white border border-orange-200 hover:border-orange-400 px-4 py-2 rounded-lg transition-all"
                  >
                    {g.label} →
                  </Link>
                ))}
                {trade.slug !== 'sole-trader' && (
                  <Link href="/tradie-insurance/tradie-insurance-sole-trader/" className="text-sm font-semibold text-orange-600 hover:text-orange-800 bg-white border border-orange-200 hover:border-orange-400 px-4 py-2 rounded-lg transition-all">
                    Sole Trader Insurance →
                  </Link>
                )}
              </div>
            </div>
          </div>
        )
      })()}

      {/* ── SOURCES ── */}
      <div className="bg-white border-t border-gray-100 py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-sm font-extrabold text-gray-900 uppercase tracking-widest mb-3">Sources</h2>
          <ul className="space-y-1.5 text-sm">
            {sources.map((src) => (
              <li key={src.url}>
                <a href={src.url} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-orange-600 underline decoration-gray-300 underline-offset-2">{src.label}</a>
              </li>
            ))}
          </ul>
          <p className="text-xs text-gray-400 mt-4">General information, not advice. Cover depends on the policy wording and the insurer&apos;s assessment.</p>
        </div>
      </div>

      {/* ── BOTTOM CTA ── */}
      <div className="bg-gray-900 py-10 border-t border-gray-800 pb-24 lg:pb-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 text-xs">Premiums are set by each insurer on your details. Insurance arranged by licensed financial advisers under applicable New Zealand legislation. This is a referral service — the referred advisers hold their own Financial Advice Provider licences.</p>
        </div>
      </div>
    </>
  )
}
