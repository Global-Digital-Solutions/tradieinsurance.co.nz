import type { Metadata } from 'next'
import Link from 'next/link'
import { siteConfig } from '@/data/site-config'

/**
 * /compare/ — rebuilt September 2026.
 *
 * This page used to be a table of named insurers with starting prices,
 * "cover levels" and a "Highly Recommended" badge. None of it was sourced,
 * and rating insurers is not something a referral site should do. It is now a
 * neutral guide to comparing policies: what to check in a wording, why it
 * matters, and the question to ask. No insurer names, ratings or prices.
 * The URL is kept so whatever it ranks for carries over.
 */

const title = 'How to Compare Tradie Insurance in NZ | What to Check'
const description =
  'How to compare tradie insurance policies in NZ: limits, excesses, defective workmanship, subcontractors, tools and statutory liability. What to check and what to ask.'

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: `${siteConfig.url}/compare/` },
  openGraph: {
    type: 'article',
    title,
    description,
    url: `${siteConfig.url}/compare/`,
    siteName: 'TradieInsurance.co.nz',
    locale: 'en_NZ',
    images: [{ url: `${siteConfig.url}/og-image.png`, width: 1200, height: 630, alt: 'How to compare tradie insurance' }],
  },
  twitter: { card: 'summary_large_image', title, description, images: [`${siteConfig.url}/og-image.png`] },
}

const checks = [
  {
    item: 'Limit of indemnity',
    why: 'The most the policy pays for one claim, or in total for the year. Your contracts may set a minimum, and residential clients see it on your disclosure statement.',
    ask: 'Is the limit per claim or in the aggregate, and does it meet every contract I work under?',
  },
  {
    item: 'Excess',
    why: 'What you pay towards each claim. A lower premium often comes with a higher excess, and some covers carry separate, higher excesses.',
    ask: 'What is the standard excess, and are there higher excesses for particular claims?',
  },
  {
    item: 'Defective workmanship',
    why: 'Public liability generally pays for damage your work causes, not the cost of putting the faulty work itself right. Some policies add a defective workmanship extension, often with its own sub-limit.',
    ask: 'Is defective workmanship covered, and what is the sub-limit?',
  },
  {
    item: 'Work by subcontractors',
    why: 'On residential work, the contractor who signed with the homeowner must fix defects in the first 12 months, including in subcontractors\' work. Wordings differ on how they treat subbies, and some require subbies to hold their own cover.',
    ask: 'Does the policy respond to my subcontractors\' work, and on what conditions?',
  },
  {
    item: 'Underground services',
    why: 'Digging, drilling and heavy vehicles can damage cables and pipes you cannot see. Some policies exclude this, or cover it only if you checked plans first.',
    ask: 'Is damage to underground services covered, and what do I have to do before I dig?',
  },
  {
    item: 'Property you are working on',
    why: 'Damage to the specific part of a property you are working on, or to property in your care, is often limited or excluded.',
    ask: 'How does the policy treat damage to the property I am working on?',
  },
  {
    item: 'Contract works',
    why: 'Public liability does not cover your own job. Contract works cover protects the works and materials on site until handover. The building contract says who has to insure them.',
    ask: 'Does my contract make me responsible for insuring the works?',
  },
  {
    item: 'Tools: settlement and security',
    why: 'New-for-old replaces with new; indemnity pays the depreciated value. Many policies set conditions for tools left in vehicles overnight.',
    ask: 'Is settlement new-for-old, and what security conditions apply to tools in my vehicle?',
  },
  {
    item: 'Statutory liability',
    why: 'Fines under the Health and Safety at Work Act cannot be insured, and neither can RMA fines imposed after 20 August 2025. Defence costs still can.',
    ask: 'What does this policy pay for now that fines are uninsurable?',
  },
  {
    item: 'Professional indemnity: claims made',
    why: 'Professional indemnity is usually written on a claims-made basis: it responds to claims made while the policy is in force, so a lapse can leave earlier work uncovered.',
    ask: 'Is there a retroactive date, and what happens if I change insurer or stop trading?',
  },
]

const faqs = [
  {
    q: 'Is the cheapest tradie insurance the best value?',
    a: 'Only if it covers what you need. Two policies with the same limit can differ on excesses, defective workmanship, subcontractors and underground services. Compare those first, then price.',
  },
  {
    q: 'Is tradie insurance required by law in NZ?',
    a: 'Generally not by law. But construction companies, head contractors and commercial clients routinely require public liability before you start, often at a set minimum limit with a certificate of currency. For residential work of $30,000 or more, the contractor must also disclose their insurance to the homeowner.',
  },
  {
    q: 'What is a certificate of currency?',
    a: 'A document from your insurer or broker confirming that a policy is in force, with its limits and period of cover. Head contractors commonly ask for one before you go on site.',
  },
  {
    q: 'Should I use a broker or buy direct?',
    a: 'Buying direct can be quick when your needs are simple. A broker can put your details to more than one insurer, explain differences in wordings, and help if you need to claim. Either way, read the wording, not just the summary.',
  },
]

const sources = [
  { label: 'MBIE Building Performance: Consumer protection, disclosure and checklist', url: 'https://www.building.govt.nz/projects-and-consents/why-contracts-are-valuable/consumer-protection-disclosure-and-checklist' },
  { label: 'MBIE Building Performance: Implied warranties and defects', url: 'https://www.building.govt.nz/projects-and-consents/why-contracts-are-valuable/implied-warranties-and-defects' },
  { label: 'Health and Safety at Work Act 2015, section 29: Insurance against fines unlawful', url: 'https://www.legislation.govt.nz/act/public/2015/0070/latest/DLM6375600.html' },
  { label: 'MinterEllison: Another ban on insuring against fines, key changes to the RMA', url: 'https://minterellison.co.nz/insights/another-ban-on-insuring-against-fines-key-changes' },
]

export default function ComparePage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  }
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url + '/' },
      { '@type': 'ListItem', position: 2, name: 'How to Compare Tradie Insurance', item: `${siteConfig.url}/compare/` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <div
        className="relative border-b border-gray-700"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gray-900/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <nav className="text-sm text-gray-300 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-white">Compare</span>
          </nav>
          <span className="inline-block bg-orange-500/20 border border-orange-400/40 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-5">
            Buyer&apos;s guide
          </span>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-5 leading-tight max-w-3xl">
            How to Compare Tradie Insurance
          </h1>
          <p className="text-white text-xl max-w-2xl leading-relaxed mb-8 opacity-90">
            Two policies with the same limit and a similar premium can pay out very differently. Here is what to check in the wording, and the question to ask about each.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#checklist" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm">
              The checklist ↓
            </a>
            <Link href="/contact/" className="bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm border border-white/30">
              Talk to a broker
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <section className="mb-14 grid gap-6 lg:grid-cols-2">
            <div className="min-w-0">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Compare the cover, then the price</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                A premium only tells you what a policy costs. It does not tell you what it pays for. The differences that matter show up at claim time: a sub-limit on defective workmanship, an exclusion for underground services, a condition on tools left in the ute overnight.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Put the policies you are considering side by side against the checklist below. If a summary does not answer a question, ask for the full wording.
              </p>
            </div>
            <div className="min-w-0 bg-orange-50 border-l-4 border-orange-500 rounded-r-2xl p-6">
              <p className="text-orange-900 font-extrabold mb-2">Not required by law. Required to get the work.</p>
              <p className="text-orange-800 text-sm leading-relaxed">
                Insurance is not mandatory for most trades, but construction companies, head contractors and commercial clients routinely require public liability before you start. For residential work of $30,000 or more (incl GST), the contractor must also give the homeowner a disclosure statement setting out their insurance, the amount of cover and any relevant exclusions.
              </p>
            </div>
          </section>

          <section id="checklist" className="mb-14 scroll-mt-20">
            <span className="inline-block bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">Checklist</span>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6">What to check in a tradie insurance policy</h2>
            <div className="space-y-4">
              {checks.map((c, i) => (
                <div key={c.item} className="bg-gray-50 border-2 border-gray-100 rounded-2xl p-5 sm:p-6">
                  <div className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-orange-500 text-white font-extrabold text-sm flex items-center justify-center flex-shrink-0">{i + 1}</span>
                    <div className="min-w-0">
                      <h3 className="font-extrabold text-gray-900 mb-1">{c.item}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-3">{c.why}</p>
                      <p className="text-sm text-gray-900"><span className="font-bold text-orange-600">Ask: </span>{c.ask}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="mb-14 bg-gray-900 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-white font-extrabold text-lg mb-1">Want someone to check these for you?</p>
              <p className="text-gray-400 text-sm">A specialist tradie broker can compare wordings against your contracts. No obligation.</p>
            </div>
            <Link href="/contact/" className="whitespace-nowrap bg-orange-500 hover:bg-orange-600 text-white font-extrabold px-8 py-3 rounded-xl transition-colors text-sm flex-shrink-0">
              Get a Quote →
            </Link>
          </div>

          <section className="mb-14">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Before you compare: know what your trade needs</h2>
            <p className="text-gray-700 leading-relaxed mb-5">
              The checklist applies to every trade, but which items matter most depends on the work. Start with the page for your trade or the cover you are looking at.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { href: '/trades/builders/', label: 'Builders' },
                { href: '/trades/', label: 'All trades' },
                { href: '/types/public-liability/', label: 'Public liability' },
                { href: '/types/tools-equipment/', label: 'Tools & equipment' },
                { href: '/types/statutory-liability/', label: 'Statutory liability' },
                { href: '/blog/other-trades-defective-workmanship-cover/', label: 'Defective workmanship by other trades' },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="text-sm font-semibold text-orange-600 hover:text-orange-800 bg-white border border-orange-200 hover:border-orange-400 px-4 py-2 rounded-lg transition-all">
                  {l.label} →
                </Link>
              ))}
            </div>
          </section>

          <section className="mb-14">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Questions tradies ask</h2>
            <div className="space-y-3">
              {faqs.map((f) => (
                <div key={f.q} className="bg-gray-50 border-2 border-gray-100 rounded-2xl p-6">
                  <h3 className="font-extrabold text-gray-900 mb-2">{f.q}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="border-t border-gray-100 pt-8">
            <h2 className="text-sm font-extrabold text-gray-900 uppercase tracking-widest mb-3">Sources</h2>
            <ul className="space-y-1.5 text-sm">
              {sources.map((s) => (
                <li key={s.url}>
                  <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-orange-600 underline decoration-gray-300 underline-offset-2">{s.label}</a>
                </li>
              ))}
            </ul>
            <p className="text-xs text-gray-400 mt-4">General information, not advice. Cover depends on the policy wording and the insurer&apos;s assessment.</p>
          </section>
        </div>
      </div>
    </>
  )
}
