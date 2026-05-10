export interface TradeRisk {
  title: string
  desc: string
}

export interface TradeFaq {
  q: string
  a: string
}

export interface TradeType {
  slug: string
  name: string
  icon: string
  description: string
  keyFacts: string[]
  risks: TradeRisk[]
  faqs: TradeFaq[]
  recommendedCover: string[]
}

export const tradeTypes: TradeType[] = [
  {
    slug: 'builders',
    name: 'Builders',
    icon: '🏗️',
    description:
      'Builders face some of the highest risk exposures of any trade in New Zealand. From structural defects to on-site injuries, a single claim can threaten your entire business. The right insurance package protects your livelihood, your team, and your clients.',
    keyFacts: [
      'Public liability is mandatory on most NZ building sites',
      'LBP certification may require professional indemnity',
      'Structural defects claims can arise years after completion',
      'Building contracts often specify minimum cover requirements',
    ],
    risks: [
      {
        title: 'Structural Defect Claims',
        desc: 'A client discovers a defect in your work years later and seeks compensation. Without cover, legal costs alone can be devastating.',
      },
      {
        title: 'On-Site Injury',
        desc: 'A visitor or passerby is injured on your building site. Public liability covers their claim and your legal defence.',
      },
      {
        title: 'Tool Theft',
        desc: 'Your tools are stolen from a job site overnight. Tools cover replaces them so you can keep working without financial hardship.',
      },
    ],
    faqs: [
      {
        q: 'Do builders legally need insurance in NZ?',
        a: 'Public liability is not legally required for all builders, but most principal contractors and building contracts require it. LBPs must meet professional standards that often necessitate PI cover.',
      },
      {
        q: 'What level of public liability do builders need?',
        a: 'Most NZ building contracts require at least NZ$1M–$2M public liability. Some large commercial contracts require $5M–$20M cover. Your broker can advise on the right limit.',
      },
      {
        q: 'Is ACC enough cover for builders?',
        a: 'ACC covers work-related injuries only. It does not cover illness, non-work injuries, third-party property damage, or income lost due to business disruption. Income protection and public liability fill those critical gaps.',
      },
    ],
    recommendedCover: ['public-liability', 'tools-equipment', 'commercial-vehicle', 'statutory-liability'],
  },
  {
    slug: 'plumbers',
    name: 'Plumbers',
    icon: '🔧',
    description:
      'Plumbers work with water, gas, and drainage systems where a mistake can cause significant property damage or health risks. Water damage in particular can be catastrophic and expensive. Specialist plumber insurance ensures you are protected against the unique risks of the trade.',
    keyFacts: [
      'A single burst pipe claim can exceed NZ$50,000 in water damage',
      'Gasfitting work carries additional liability for gas-related incidents',
      'Plumbers are required to be licensed under the Plumbers, Gasfitters, and Drainlayers Act',
      'Many residential and commercial clients require proof of cover before engagement',
    ],
    risks: [
      {
        title: 'Water Damage Claims',
        desc: 'A faulty installation causes water damage to a client\'s home or business. Repair costs and consequential losses can run into tens of thousands.',
      },
      {
        title: 'Gas Fitting Liability',
        desc: 'Errors in gas fitting work can cause explosions, fires, or carbon monoxide incidents. These claims can be extremely serious and costly.',
      },
      {
        title: 'Professional Liability',
        desc: 'Advice on drainage design or product selection that leads to failure. Professional indemnity covers legal costs and damages.',
      },
    ],
    faqs: [
      {
        q: 'What insurance does a plumber need in NZ?',
        a: 'At minimum, NZ plumbers should carry public liability insurance. Those doing gasfitting work should also consider professional indemnity. Tools cover and commercial vehicle insurance round out a comprehensive package.',
      },
      {
        q: 'How much does plumber insurance cost in NZ?',
        a: 'A basic public liability policy for a sole-trader plumber typically starts from around NZ$30–$50 per month. A full package with tools and vehicle cover might cost NZ$100–$200 per month depending on turnover and risk profile.',
      },
      {
        q: 'Does plumber insurance cover water damage I cause?',
        a: 'Yes — public liability insurance covers damage to third-party property caused by your work, including water damage. Check your policy for any exclusions around pre-existing damage or faulty materials supplied by others.',
      },
    ],
    recommendedCover: ['public-liability', 'tools-equipment', 'commercial-vehicle', 'professional-indemnity'],
  },
  {
    slug: 'painters',
    name: 'Painters',
    icon: '🎨',
    description:
      'Painters work across residential and commercial properties, often involving heights, chemicals, and access to clients\' homes. Paint spills, falls, and damage to clients\' property are all real risks. The right insurance means a single accident does not put your painting business out of action.',
    keyFacts: [
      'Paint damage to flooring, fixtures, or vehicles can be costly to remediate',
      'Working at heights increases injury and property damage risk',
      'Spray painting creates overspray risk to surrounding properties',
      'Many body corporates and building managers require proof of liability cover',
    ],
    risks: [
      {
        title: 'Paint Damage',
        desc: 'Paint spills on hardwood floors, carpets, or a client\'s car can lead to significant replacement or repair costs. Public liability covers these claims.',
      },
      {
        title: 'Working at Heights',
        desc: 'Falls from scaffolding or ladders can injure workers or damage property below. Height work is one of the leading causes of workplace injuries in NZ.',
      },
      {
        title: 'Overspray Incidents',
        desc: 'Spray painting on a windy day can affect neighbouring properties or vehicles. Liability cover protects you from overspray damage claims.',
      },
    ],
    faqs: [
      {
        q: 'What insurance do painters need in NZ?',
        a: 'NZ painters typically need public liability insurance as a minimum. If you employ staff, employer\'s liability and WorkSafe compliance are important. Tools cover for spray equipment and ladders is also recommended.',
      },
      {
        q: 'Is painter insurance expensive in NZ?',
        a: 'Painting is generally considered a moderate-risk trade, so insurance is reasonably priced. Public liability for a sole trader painter typically starts from around NZ$30/month.',
      },
      {
        q: 'Does painter insurance cover damage caused by my work?',
        a: 'Yes — public liability insurance covers property damage caused to third parties by your work. Always check your policy for exclusions around gradual damage or pre-existing conditions.',
      },
    ],
    recommendedCover: ['public-liability', 'tools-equipment', 'commercial-vehicle', 'income-protection'],
  },
  {
    slug: 'carpenters-woodworkers',
    name: 'Carpenters & Woodworkers',
    icon: '🪵',
    description:
      'Carpenters and woodworkers craft everything from structural framing to bespoke joinery. Your work can be exposed to defect claims, site injuries, and damage to valuable client materials. The right cover keeps your workshop and your reputation protected.',
    keyFacts: [
      'Structural carpentry work carries long-tail liability for defect claims',
      'Workshop machinery and specialist tools represent significant investment',
      'Joinery work in high-end homes can involve very valuable materials',
      'Subcontracting relationships require appropriate contractor cover',
    ],
    risks: [
      {
        title: 'Workmanship Defect Claims',
        desc: 'A structural frame or joinery installation develops faults after completion. The client seeks compensation for remediation costs and consequential losses.',
      },
      {
        title: 'Workshop Injury or Fire',
        desc: 'Woodworking machinery poses serious injury risk. Fire in a timber workshop can destroy the business. Property and liability cover are essential.',
      },
      {
        title: 'Damage to Client Materials',
        desc: 'You accidentally damage expensive timber or materials supplied by the client. Public liability covers the replacement cost.',
      },
    ],
    faqs: [
      {
        q: 'What insurance do carpenters need in NZ?',
        a: 'NZ carpenters should carry public liability as a minimum. Structural carpenters should consider professional indemnity, especially if they are LBPs. Tools cover is important for those with significant tool investment.',
      },
      {
        q: 'Do carpenters need insurance for workshop work?',
        a: 'Yes — if you operate a workshop, you need contents and property insurance to cover your machinery, tools, and stock. Liability cover for anyone visiting your workshop is also essential.',
      },
      {
        q: 'How much liability cover does a carpenter need?',
        a: 'Most residential carpentry work requires NZ$1M–$2M public liability. Commercial work typically requires NZ$2M–$5M. Your broker can assess your specific requirements.',
      },
    ],
    recommendedCover: ['public-liability', 'tools-equipment', 'contents-property', 'professional-indemnity'],
  },
  {
    slug: 'electricians',
    name: 'Electricians',
    icon: '⚡',
    description:
      'Electricians work with live power systems where errors can cause fires, electrocution, or serious property damage. The regulatory environment for electrical work in NZ is strict, and the consequences of a mistake can be severe. Specialist electrician insurance gives you the protection you need.',
    keyFacts: [
      'Faulty electrical work can cause fires years after installation',
      'Electricians must be registered under the Electricity Act',
      'Electrical fires are one of the leading causes of commercial property damage in NZ',
      'Some contracts require electricians to carry PI cover for design elements',
    ],
    risks: [
      {
        title: 'Fire or Electrocution Claims',
        desc: 'Wiring errors that cause a fire or electrocution can result in catastrophic claims. Public liability cover is absolutely critical for electricians.',
      },
      {
        title: 'Professional Liability',
        desc: 'An electrical design or certification error leads to a failed inspection or system fault. Professional indemnity covers the cost of remediation and legal defence.',
      },
      {
        title: 'Equipment Loss',
        desc: 'Specialist test equipment, cable drums, and tools represent a major investment. Tools insurance covers theft or accidental damage.',
      },
    ],
    faqs: [
      {
        q: 'What insurance do electricians need in NZ?',
        a: 'NZ electricians should carry public liability insurance as a minimum. Those doing design or certification work need professional indemnity. Tools cover and commercial vehicle insurance complete a solid package.',
      },
      {
        q: 'How much does electrician insurance cost in NZ?',
        a: 'Electricians are considered a higher-risk trade due to fire and electrocution hazards. Public liability typically starts from around NZ$40–$60/month. A full package can cost NZ$150–$300/month depending on turnover.',
      },
      {
        q: 'Does electrician insurance cover faulty wiring claims?',
        a: 'Yes — public liability covers third-party claims arising from your work, including damage caused by faulty wiring. Check your policy for any workmanship defect exclusions and consider a defects liability extension.',
      },
    ],
    recommendedCover: ['public-liability', 'professional-indemnity', 'tools-equipment', 'statutory-liability'],
  },
  {
    slug: 'bricklayers',
    name: 'Bricklayers',
    icon: '🧱',
    description:
      'Bricklayers perform structural and cosmetic work that must meet strict NZ building codes. Structural failures, damage to adjacent property, and on-site injuries are key risks. The right insurance package protects your bricklaying business from day one.',
    keyFacts: [
      'Structural brickwork failures can lead to significant long-tail claims',
      'Working near boundaries increases risk of damage to neighbouring properties',
      'Mortar and construction dust can cause damage to surrounding areas',
      'Bricklayers on commercial sites often need $5M+ public liability',
    ],
    risks: [
      {
        title: 'Structural Failure',
        desc: 'A brick wall or retaining structure fails after completion, causing property damage or injury. The resulting claim could be substantial.',
      },
      {
        title: 'Damage to Neighbouring Property',
        desc: 'Vibration, dust, or falling materials damage a neighbouring building or vehicle. Public liability covers your legal liability.',
      },
      {
        title: 'On-Site Injury',
        desc: 'Heavy materials, scaffolding, and physical exertion make bricklaying a physically demanding and injury-prone trade.',
      },
    ],
    faqs: [
      {
        q: 'What insurance do bricklayers need in NZ?',
        a: 'NZ bricklayers need public liability as a minimum. Structural work may also require professional indemnity. Tools cover for trowels, levels, and specialist equipment is also recommended.',
      },
      {
        q: 'How much does bricklayer insurance cost in NZ?',
        a: 'Bricklayer insurance typically starts from around NZ$35–$55/month for basic public liability. A comprehensive package including tools and vehicle cover might cost NZ$120–$220/month.',
      },
      {
        q: 'Do bricklayers need income protection?',
        a: 'Yes — bricklaying is a physically demanding trade and illness or injury can stop your income immediately. Income protection replaces up to 75% of your income if you cannot work, complementing your ACC cover.',
      },
    ],
    recommendedCover: ['public-liability', 'tools-equipment', 'statutory-liability', 'income-protection'],
  },
  {
    slug: 'roofers',
    name: 'Roofers',
    icon: '🏠',
    description:
      'Roofing is consistently one of the highest-risk trades in New Zealand. Working at heights, handling heavy materials, and the consequences of a leaky roof make comprehensive insurance essential. Do not work on a roof without the right cover in place.',
    keyFacts: [
      'Roofing has one of the highest rates of workplace injury in the NZ construction sector',
      'A leaky roof can cause hundreds of thousands in consequential damage',
      'Height work regulations under HSWA are strictly enforced by WorkSafe NZ',
      'Many building contracts require roofers to carry NZ$2M+ public liability',
    ],
    risks: [
      {
        title: 'Fall Injuries',
        desc: 'Falls from roofs are one of the leading causes of serious injury in the NZ construction industry. Statutory liability protects you if WorkSafe prosecutes after an incident.',
      },
      {
        title: 'Consequential Water Damage',
        desc: 'A faulty roof installation leads to water ingress and significant internal damage. Public liability covers the consequential property damage claims.',
      },
      {
        title: 'Storm Damage During Works',
        desc: 'A property left with an incomplete roof is damaged by rain or wind. Liability cover addresses the client\'s claim for the resulting damage.',
      },
    ],
    faqs: [
      {
        q: 'What insurance do roofers need in NZ?',
        a: 'Roofers should carry public liability and statutory liability as a minimum. Given the height work risks, income protection is also strongly recommended. Tools and commercial vehicle cover round out a comprehensive package.',
      },
      {
        q: 'Is roofing insurance expensive in NZ?',
        a: 'Roofing is a high-risk trade, so premiums are higher than some other trades. Public liability for a sole trader roofer typically starts from around NZ$50–$80/month.',
      },
      {
        q: 'Does WorkSafe NZ require roofers to have insurance?',
        a: 'WorkSafe does not mandate insurance directly, but the Health and Safety at Work Act requires businesses to manage risks — and statutory liability insurance protects you if WorkSafe prosecution follows an incident.',
      },
    ],
    recommendedCover: ['public-liability', 'statutory-liability', 'income-protection', 'tools-equipment'],
  },
  {
    slug: 'concreters',
    name: 'Concreters',
    icon: '🏗️',
    description:
      'Concreters pour and finish foundations, driveways, and structural slabs that must last for decades. Defects can be extremely expensive to remediate and concrete work often underpins other construction. Specialist concreter insurance covers the unique risks of your trade.',
    keyFacts: [
      'Foundation defects can lead to major structural remediation claims',
      'Concrete pumping and formwork collapse are significant liability risks',
      'Chemical burns from concrete are a real workers\' health hazard',
      'Large commercial concreting contracts require substantial liability cover',
    ],
    risks: [
      {
        title: 'Structural Defect Claims',
        desc: 'A defective concrete pour leads to cracking or structural failure. Remediation costs can be enormous, especially in foundation work.',
      },
      {
        title: 'Formwork Collapse',
        desc: 'Formwork failure during a pour can cause serious injury and major property damage. This is a well-documented risk in NZ construction.',
      },
      {
        title: 'Surface Damage',
        desc: 'Concrete spillage on driveways, landscaping, or client property during a pour. Public liability covers clean-up and remediation costs.',
      },
    ],
    faqs: [
      {
        q: 'What insurance do concreters need in NZ?',
        a: 'NZ concreters need public liability as a minimum, with higher limits for commercial and structural work. Tools and equipment cover for pumps and vibrators is important. Statutory liability is recommended given WorkSafe exposure.',
      },
      {
        q: 'How much does concreter insurance cost in NZ?',
        a: 'Concreter insurance typically starts from around NZ$40–$60/month for public liability. A full package with equipment and vehicle cover might cost NZ$150–$250/month.',
      },
      {
        q: 'Do concreters need professional indemnity?',
        a: 'If you provide design-and-pour services or specify concrete mixes for structural applications, professional indemnity is worth considering. For straightforward placement and finishing work, public liability is the primary requirement.',
      },
    ],
    recommendedCover: ['public-liability', 'tools-equipment', 'statutory-liability', 'commercial-vehicle'],
  },
  {
    slug: 'handymen',
    name: 'Handymen',
    icon: '🛠️',
    description:
      'Handymen tackle a wide variety of repair and maintenance tasks across residential and commercial properties. While individual jobs may seem small, the cumulative liability exposure from working in clients\' homes is significant. Handyman insurance gives you and your clients peace of mind.',
    keyFacts: [
      'Handymen often work alone without safety spotters or site supervision',
      'Working in occupied homes increases the risk of damage to client belongings',
      'A diverse range of tasks means a diverse range of liability exposures',
      'Many property managers require handymen to hold public liability cover',
    ],
    risks: [
      {
        title: 'Property Damage',
        desc: 'You accidentally damage a client\'s flooring, fixtures, or belongings while completing a job. Public liability covers the repair or replacement cost.',
      },
      {
        title: 'Injury on Client Premises',
        desc: 'A client or family member is injured because of your work or an unsafe condition you created. Liability cover handles their claim.',
      },
      {
        title: 'Tool Theft from Vehicle',
        desc: 'Your tools are stolen from your ute while parked at a job. Tools insurance lets you replace them quickly and keep working.',
      },
    ],
    faqs: [
      {
        q: 'Does a handyman need insurance in NZ?',
        a: 'While not always legally required, public liability is strongly recommended for any handyman working in client homes. Many property managers and landlords require it. It is also simply good business practice.',
      },
      {
        q: 'How much does handyman insurance cost in NZ?',
        a: 'Handyman insurance is generally affordable given the moderate risk profile. Public liability typically starts from around NZ$25–$40/month for sole traders with modest turnover.',
      },
      {
        q: 'Can a handyman get insurance for all types of work?',
        a: 'Yes, but it is important to disclose all the types of work you do when getting cover. Some specialist tasks (like electrical or plumbing beyond basic maintenance) may require separate licensed trade cover.',
      },
    ],
    recommendedCover: ['public-liability', 'tools-equipment', 'commercial-vehicle', 'income-protection'],
  },
]

export function getTradeBySlug(slug: string): TradeType | undefined {
  return tradeTypes.find((t) => t.slug === slug)
}
