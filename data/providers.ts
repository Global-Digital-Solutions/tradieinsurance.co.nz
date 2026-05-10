export interface Provider {
  name: string
  slug: string
  rating: number
  badge?: string
  bestFor: string
  startingPrice: string
  coverLevels: string
  onlineQuote: boolean
  publicLiability: boolean
  tools: boolean
  vehicle: boolean
  income: boolean
  employersLiability: boolean
  statutoryLiability: boolean
  contractWorks: boolean
  cyber: boolean
  description: string
  keyFeatures: string[]
  watchOut: string
  phone?: string
  website: string
}

export const providers: Provider[] = [
  {
    name: 'BizCover',
    slug: 'bizcover',
    rating: 4.3,
    badge: 'Best for Online Quotes',
    bestFor: 'Sole traders wanting instant online quotes',
    startingPrice: 'From ~$30/mo',
    coverLevels: '$1M – $20M public liability',
    onlineQuote: true,
    publicLiability: true,
    tools: true,
    vehicle: false,
    income: false,
    employersLiability: false,
    statutoryLiability: false,
    contractWorks: false,
    cyber: false,
    description: 'BizCover is an online comparison platform aggregating quotes from multiple NZ insurers. It\'s fast, transparent, and ideal for sole traders who want instant pricing. Public liability averages $30/month for most trade businesses.',
    keyFeatures: [
      'Instant online quotes — no broker meeting required',
      'Compare multiple insurers side by side',
      '6 public liability levels from $1M to $20M',
      'Public liability from ~$30/month average',
      'Certificate of currency emailed immediately',
      'Covers most trade types including builders, plumbers, electricians',
    ],
    watchOut: 'Limited to public liability and basic cover types. No commercial vehicle, income protection, or complex risk packages. Not suitable for employers or larger trade businesses.',
    phone: '0800 249 268',
    website: 'bizcover.co.nz',
  },
  {
    name: 'AMI Insurance',
    slug: 'ami',
    rating: 4.1,
    badge: 'Best Bundle',
    bestFor: 'Tradies wanting vehicle + tools bundled',
    startingPrice: 'From ~$25/mo',
    coverLevels: '$1M – $10M public liability',
    onlineQuote: true,
    publicLiability: true,
    tools: true,
    vehicle: true,
    income: false,
    employersLiability: true,
    statutoryLiability: true,
    contractWorks: false,
    cyber: false,
    description: 'AMI offers a dedicated Tradies Bundle combining public liability, tools cover, and commercial vehicle insurance. One of NZ\'s most recognised insurers with strong claims service and nationwide branches.',
    keyFeatures: [
      'Tradies Bundle — public liability + tools + vehicle in one policy',
      'Business vehicle cover for utes and vans',
      'Employers liability if you have staff',
      'Statutory liability for unintentional legislation breaches',
      'Bundle from ~$25/month starting point',
      'Phone and branch support nationwide',
    ],
    watchOut: 'Bundle pricing works best when you need multiple covers. Pure public liability may be cheaper elsewhere. No income protection or contract works cover.',
    phone: '0800 100 200',
    website: 'ami.co.nz',
  },
  {
    name: 'Builtin Insurance',
    slug: 'builtin',
    rating: 4.6,
    badge: '⭐ Top Rated — Construction Specialist',
    bestFor: 'Builders, LBPs, and construction tradies',
    startingPrice: 'Quote required',
    coverLevels: '$1M – $20M+ custom',
    onlineQuote: false,
    publicLiability: true,
    tools: true,
    vehicle: true,
    income: true,
    employersLiability: true,
    statutoryLiability: true,
    contractWorks: true,
    cyber: false,
    description: 'Builtin is NZ\'s specialist construction and trade insurance broker, part of the Steadfast Group. With negotiated rates across leading insurers, Builtin understands builders\' unique risks — from LBP liability to contract works cover — better than any generalist provider.',
    keyFeatures: [
      'NZ\'s dedicated construction industry specialist',
      'Covers fines under Building Act, RMA, Health & Safety at Work Act',
      'Contract works cover for projects under construction',
      'Access to Steadfast Group negotiated insurer rates',
      'Expert claims advocacy on your behalf',
      'Employers liability for teams with multiple staff',
      'Statutory liability including WorkSafe NZ prosecutions',
    ],
    watchOut: 'Requires a broker conversation rather than instant online quotes. Best suited to trades with more complex needs. May not be the cheapest option for very simple sole-trader cover.',
    phone: '0800 BUILTIN',
    website: 'builtininsurance.co.nz',
  },
  {
    name: 'Gallagher Insurance',
    slug: 'gallagher',
    rating: 4.4,
    badge: 'Best for Larger Businesses',
    bestFor: 'Trade businesses with employees and complex risks',
    startingPrice: 'Quote required',
    coverLevels: '$2M – $20M+ custom',
    onlineQuote: false,
    publicLiability: true,
    tools: true,
    vehicle: true,
    income: true,
    employersLiability: true,
    statutoryLiability: true,
    contractWorks: true,
    cyber: true,
    description: 'Gallagher is one of NZ\'s largest insurance brokers with 40+ years arranging trade cover. Their SMARTpak package bundles legal liability, tools, vehicle, and plant machinery in one policy. They act on your behalf — not the insurer\'s — at claims time.',
    keyFeatures: [
      'SMARTpak: liability + tools + vehicle + plant in one package',
      'Cyber insurance available for digital business risks',
      'Contract works cover for projects in progress',
      '40+ years specialist trades experience in NZ',
      'Brokers work for you — not the insurer — at claim time',
      'Nationwide branches across NZ',
      'Employers liability and income protection available',
    ],
    watchOut: 'Premium broker service comes with more complex advice process. Better for businesses with $500K+ turnover or multiple employees. Overkill for simple sole-trader cover.',
    phone: '0800 425 524',
    website: 'ajg.co.nz',
  },
  {
    name: 'FMG Insurance',
    slug: 'fmg',
    rating: 4.2,
    badge: 'Best for Rural & Provincial',
    bestFor: 'Provincial and rural tradies outside main centres',
    startingPrice: 'Quote required',
    coverLevels: '$1M – $10M public liability',
    onlineQuote: false,
    publicLiability: true,
    tools: true,
    vehicle: true,
    income: false,
    employersLiability: false,
    statutoryLiability: false,
    contractWorks: true,
    cyber: true,
    description: 'FMG is NZ\'s leading rural mutual insurer. While primarily known for farming, FMG actively covers rural and provincial tradies — mechanics, engineers, and builders working outside the main centres. Their care, custody and control cover extends to $250,000.',
    keyFeatures: [
      'Specialist cover for rural and provincial tradies',
      'Care, custody and control cover up to $250,000',
      'Business interruption cover after a major loss',
      'Contract works cover for construction projects',
      'Cyber liability available for existing commercial clients',
      'Mutual insurer — profits stay in NZ',
      'Strong service in Waikato, Bay of Plenty, Manawatu, Southland',
    ],
    watchOut: 'Best suited to rural/provincial work. Less competitive for Auckland and Wellington urban tradies. No online quoting — requires a phone conversation or branch visit.',
    phone: '0800 366 466',
    website: 'fmg.co.nz',
  },
  {
    name: 'Vero Insurance',
    slug: 'vero',
    rating: 4.0,
    bestFor: 'All-in-one tradie policy through a broker',
    startingPrice: 'From ~$40/mo',
    coverLevels: '$1M – $10M public liability',
    onlineQuote: false,
    publicLiability: true,
    tools: true,
    vehicle: true,
    income: false,
    employersLiability: true,
    statutoryLiability: true,
    contractWorks: false,
    cyber: false,
    description: 'Vero offers an all-in-one tradie insurance package available through brokers. Part of the Suncorp Group, Vero has strong financial backing and a comprehensive policy wording that covers most trade risks in a single document.',
    keyFeatures: [
      'All-in-one tradie policy — one document, one renewal',
      'Public liability, tools, and vehicle in single package',
      'Employers and statutory liability extensions available',
      'Suncorp Group financial strength (A+ rated)',
      'Available through most NZ insurance brokers',
      'Competitive for small-to-medium trade businesses',
    ],
    watchOut: 'Only available through brokers — no direct online quotes. Policy terms can vary depending on which broker arranges cover. Not available direct to consumer.',
    website: 'vero.co.nz',
  },
]

export function getProviderBySlug(slug: string): Provider | undefined {
  return providers.find((p) => p.slug === slug)
}
