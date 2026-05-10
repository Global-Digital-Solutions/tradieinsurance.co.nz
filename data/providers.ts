export interface Provider {
  name: string
  slug: string
  rating: number
  bestFor: string
  publicLiability: boolean
  tools: boolean
  vehicle: boolean
  income: boolean
  logo: string
  description: string
}

export const providers: Provider[] = [
  {
    name: 'AMI',
    slug: 'ami',
    rating: 4.2,
    bestFor: 'Bundled business and vehicle cover',
    publicLiability: true,
    tools: true,
    vehicle: true,
    income: false,
    logo: 'https://logo.clearbit.com/ami.co.nz',
    description: 'One of NZ\'s most recognised insurers. Strong commercial vehicle and business cover with good claims service.',
  },
  {
    name: 'State Insurance',
    slug: 'state',
    rating: 4.0,
    bestFor: 'Standard risk trade businesses',
    publicLiability: true,
    tools: true,
    vehicle: true,
    income: false,
    logo: 'https://logo.clearbit.com/stateinsurance.co.nz',
    description: 'Long-established NZ insurer offering competitive pricing for straightforward trade risk profiles.',
  },
  {
    name: 'FMG',
    slug: 'fmg',
    rating: 4.1,
    bestFor: 'Rural and provincial tradies',
    publicLiability: true,
    tools: true,
    vehicle: true,
    income: true,
    logo: 'https://logo.clearbit.com/fmg.co.nz',
    description: 'Mutual insurer specialising in rural NZ. Excellent service for tradies in provincial and agricultural areas.',
  },
  {
    name: 'Builtin',
    slug: 'builtin',
    rating: 4.5,
    bestFor: 'Specialist construction and trade cover',
    publicLiability: true,
    tools: true,
    vehicle: true,
    income: true,
    logo: 'https://logo.clearbit.com/builtin.co.nz',
    description: 'NZ\'s specialist construction insurer. Deep trade expertise and policies designed specifically for builders and tradies.',
  },
  {
    name: 'BizCover',
    slug: 'bizcover',
    rating: 4.0,
    bestFor: 'Fast online quotes and purchase',
    publicLiability: true,
    tools: true,
    vehicle: false,
    income: false,
    logo: 'https://logo.clearbit.com/bizcoveronline.co.nz',
    description: 'Online comparison platform aggregating quotes from multiple insurers. Fast and convenient for simple cover needs.',
  },
  {
    name: 'Gallagher',
    slug: 'gallagher',
    rating: 4.3,
    bestFor: 'Larger trade businesses and complex risks',
    publicLiability: true,
    tools: true,
    vehicle: true,
    income: true,
    logo: 'https://logo.clearbit.com/gallagher.com',
    description: 'Global brokerage with strong NZ presence. Best for larger operations needing professional advisory services.',
  },
]
