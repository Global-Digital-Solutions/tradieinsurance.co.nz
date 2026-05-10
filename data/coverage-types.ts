export interface CoverageType {
  slug: string
  name: string
  icon: string
  fromPrice: string
  description: string
  keyFacts: string[]
  whoNeeds: string[]
  heroImage: string
}

export const coverageTypes: CoverageType[] = [
  {
    slug: 'public-liability',
    name: 'Public Liability',
    icon: '🛡️',
    fromPrice: 'NZ$30/month',
    heroImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80',
    description:
      'Public liability insurance protects NZ tradies if a client or third party suffers injury or property damage because of your work. It covers legal costs and compensation payments if you are sued. Virtually every tradie working on client sites or public spaces needs this cover.',
    keyFacts: [
      'Covers third-party injury and property damage claims',
      'Available from NZ$30/month for sole traders',
      'Limits typically range from $1M to $20M',
      'Most principal contractors require it before you start work',
    ],
    whoNeeds: [
      'All tradies working on client properties',
      'Sole traders and subcontractors',
      'Any business employing staff on-site',
      'Tradies required to hold cover by principal contractors',
    ],
  },
  {
    slug: 'tools-equipment',
    name: 'Tools & Equipment',
    icon: '🔧',
    fromPrice: 'NZ$25/month',
    heroImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1920&q=80',
    description:
      'Tools and equipment insurance covers your trade tools against theft, accidental damage, and loss anywhere in New Zealand. Without it, replacing a stolen toolbox or broken power tools comes straight out of your pocket. Cover can extend to hired-in equipment and gear kept on-site or in your vehicle.',
    keyFacts: [
      'Covers theft, accidental damage, and mysterious disappearance',
      'Includes tools kept in vehicles or on job sites',
      'New-for-old or market value replacement options',
      'Can be bundled with commercial vehicle cover',
    ],
    whoNeeds: [
      'Tradies with expensive power tools or specialist equipment',
      'Anyone who regularly stores tools in a ute or van',
      'Tradies working on multiple job sites simultaneously',
      'Businesses with hired or leased equipment',
    ],
  },
  {
    slug: 'commercial-vehicle',
    name: 'Commercial Vehicle',
    icon: '🚐',
    fromPrice: 'NZ$45/month',
    heroImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1920&q=80',
    description:
      'Commercial vehicle insurance covers your ute, van, or truck used for work purposes. Standard personal vehicle policies typically exclude business use, leaving you uninsured when driving to jobs. Commercial cover protects the vehicle, your tools inside, and third-party liability on the road.',
    keyFacts: [
      'Covers vehicles used for business purposes',
      'Can include goods-in-transit and tools-in-vehicle cover',
      'Third-party, fire and theft or comprehensive options available',
      'Fleet discounts available for multiple vehicles',
    ],
    whoNeeds: [
      'Any tradie using a vehicle to travel to job sites',
      'Businesses with company utes or vans',
      'Tradies transporting materials or equipment',
      'Fleet operators with multiple work vehicles',
    ],
  },
  {
    slug: 'income-protection',
    name: 'Income Protection',
    icon: '💰',
    fromPrice: 'NZ$35/month',
    heroImage: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1920&q=80',
    description:
      'Income protection insurance replaces a portion of your income if you cannot work due to illness or injury. ACC covers workplace accidents, but not illness or non-work injuries — leaving self-employed tradies exposed. Income protection fills that gap, typically replacing 75% of your pre-tax income.',
    keyFacts: [
      'Replaces up to 75% of pre-disability income',
      'Covers illness as well as injury (unlike ACC)',
      'Waiting periods typically 4, 8, or 13 weeks',
      'Benefit periods from 2 years to age 65',
    ],
    whoNeeds: [
      'Self-employed tradies without sick pay entitlement',
      'Sole traders whose business stops if they stop',
      'Tradies with mortgages or financial commitments',
      'Anyone relying solely on ACC for injury cover',
    ],
  },
  {
    slug: 'statutory-liability',
    name: 'Statutory Liability',
    icon: '⚖️',
    fromPrice: 'NZ$20/month',
    heroImage: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1920&q=80',
    description:
      'Statutory liability insurance covers fines and legal costs if you unintentionally breach New Zealand legislation such as the Health and Safety at Work Act 2015, the Resource Management Act, or the Building Act. It does not cover deliberate breaches. For tradies, WorkSafe NZ prosecution is the most common trigger.',
    keyFacts: [
      'Covers unintentional breaches of NZ legislation',
      'Includes legal defence costs and fines where insurable',
      'Critical for businesses with employees or subcontractors',
      'Does not cover deliberate or criminal acts',
    ],
    whoNeeds: [
      'Employers with health and safety obligations under HSWA',
      'Tradies working near hazardous materials or heights',
      'Businesses subject to RMA or building consent requirements',
      'Anyone with site management or principal contractor responsibilities',
    ],
  },
  {
    slug: 'professional-indemnity',
    name: 'Professional Indemnity',
    icon: '📋',
    fromPrice: 'NZ$30/month',
    heroImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1920&q=80',
    description:
      'Professional indemnity insurance protects you if a client claims your advice, design, or professional services caused them a financial loss. While less common for hands-on tradies, it is essential for those who provide design-build services, certify work, or give technical advice. It covers legal costs and damages.',
    keyFacts: [
      'Covers claims arising from professional advice or services',
      'Includes legal defence costs',
      'Claims-made policy — covers claims made during the policy period',
      'May be required by licensing bodies or principal contractors',
    ],
    whoNeeds: [
      'Tradies providing design-build or engineering services',
      'Licensed Building Practitioners (LBPs) certifying work',
      'Tradies offering technical advice or specifications',
      'Anyone working under a professional services contract',
    ],
  },
  {
    slug: 'contents-property',
    name: 'Contents & Property',
    icon: '🏗️',
    fromPrice: 'NZ$25/month',
    heroImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80',
    description:
      'Contents and property insurance covers your business premises, office contents, stock, and materials stored on-site or in a depot. If you operate from a workshop, yard, or office, this cover protects against fire, flood, theft, and accidental damage to your business assets. It can also cover materials in transit.',
    keyFacts: [
      'Covers business premises, contents, and stock',
      'Includes fire, theft, flood, and accidental damage',
      'Can extend to materials stored on job sites',
      'Business interruption cover often available as an add-on',
    ],
    whoNeeds: [
      'Tradies with a workshop, depot, or yard',
      'Businesses holding significant stock or materials',
      'Anyone storing expensive equipment at a fixed location',
      'Tradies with a home-based office or storage',
    ],
  },
  {
    slug: 'building-insurance',
    name: 'Building Insurance',
    icon: '🏢',
    fromPrice: 'NZ$40/month',
    heroImage: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1920&q=80',
    description:
      'Commercial building insurance covers the physical structure of any premises your business owns or is responsible for. This is separate from contents cover and protects the building fabric against fire, storm, flood, earthquake, and accidental damage. It is essential for tradie business owners who own their workshop or depot.',
    keyFacts: [
      'Covers the structure of commercial premises you own',
      'Includes fire, storm, flood, and natural disaster events',
      'Earthquake cover is critical in NZ given seismic activity',
      'Can cover landlord liability if you lease out part of the building',
    ],
    whoNeeds: [
      'Tradie business owners who own their workshop or yard',
      'Anyone responsible for a commercial building under a lease',
      'Businesses with significant investment in physical infrastructure',
      'Tradies operating from premises in earthquake-prone zones',
    ],
  },
]

export function getCoverageBySlug(slug: string): CoverageType | undefined {
  return coverageTypes.find((c) => c.slug === slug)
}
