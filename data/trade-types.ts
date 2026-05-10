export interface TradeRisk {
  title: string
  desc: string
}

export interface TradeFaq {
  q: string
  a: string
}

export interface TradeClaimExample {
  title: string
  scenario: string
  outcome: string
  coverType: string
}

export interface TradeType {
  slug: string
  name: string
  icon: string
  description: string
  keyFacts?: string[]
  risks: TradeRisk[]
  faqs: TradeFaq[]
  recommendedCover: string[]
  heroImage: string
  claimExamples: TradeClaimExample[]
  legalRequirements: string[]
  costFrom: string
  costFactors: string[]
  introText: string[]
  whyNeedIt: string[]
  coverPackage: string
}

export const tradeTypes: TradeType[] = [
  {
    slug: 'builders',
    name: 'Builders',
    icon: '🏗️',
    heroImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1920&q=80',
    description:
      'Builders face some of the highest risk exposures of any trade in New Zealand. From structural defects to on-site injuries, a single claim can threaten your entire business. The right insurance package protects your livelihood, your team, and your clients.',
    keyFacts: [
      'Public liability is mandatory on most NZ building sites',
      'LBP certification may require professional indemnity',
      'Structural defects claims can arise years after completion',
      'Building contracts often specify minimum cover requirements',
    ],
    introText: [
      'Builders insurance is a suite of specialist policies designed to protect New Zealand builders from the financial consequences of property damage, personal injury, and legal claims arising from construction work. Whether you are building new homes, completing renovations, or managing a commercial construction project, the exposures are significant — a single incident on site can generate a claim worth tens of thousands of dollars. Public liability insurance for builders averages around $26.83 per month, making it one of the most cost-effective risk management tools available.',
      'Construction is New Zealand\'s most claim-intensive trade sector. The Building Act 2004 imposes ten-year liability on builders for defective work, meaning claims can arrive years or even decades after a project is complete. Add in the risks of on-site injury, tool theft, statutory compliance, and the ever-present threat of a WorkSafe prosecution, and it becomes clear that a comprehensive insurance package is not a luxury — it is a business necessity for any builder working in New Zealand today.',
    ],
    whyNeedIt: [
      'The Building Act 2004 requires Licensed Building Practitioners to disclose their insurance details to clients before signing a contract — without current cover you cannot legally take on LBP work.',
      'Structural defect claims carry a ten-year tail under NZ law, meaning a claim can arrive years after you have moved on from a project — ongoing cover is essential even between active contracts.',
      'A single on-site incident — a spark from angle grinding causing $5,300 of window damage, or a misplaced concrete pour crushing underground drainage — can easily exceed a month\'s revenue.',
      'Principal contractors and commercial clients routinely require proof of $2M–$20M public liability before allowing subcontractors on site — holding cover keeps you eligible for the best work.',
    ],
    coverPackage: 'A comprehensive builders insurance package typically includes public liability ($2M–$5M), statutory liability, tools and equipment cover, and commercial vehicle insurance — all arranged through a single licensed broker.',
    costFrom: '~$27/month',
    costFactors: [
      'Annual turnover',
      'Number of employees',
      'Cover limit selected',
      'Claims history',
    ],
    legalRequirements: [
      'Building Act 2004 — Licensed Building Practitioners must disclose insurance details to clients',
      'Building Act 2004 — ten-year liability on residential building work',
      'Health and Safety at Work Act 2015 — duty of care for all persons on site',
      'Resource Management Act — applies to earthworks, site disturbance, and discharge consents',
      'Consumer Guarantees Act — guarantees of acceptable quality apply to building work',
      'Fair Trading Act — prohibits misleading representations about your work or qualifications',
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
    claimExamples: [
      {
        title: 'Sparks from Angle Grinder Damage Windows',
        scenario: 'A builder was grinding steel near a row of residential windows on a renovation project. Sparks travelled further than expected and damaged three large panes of glass across two properties.',
        outcome: '$5,300 public liability claim paid, covering full replacement of damaged glass and remediation of surrounding frames.',
        coverType: 'Public Liability',
      },
      {
        title: 'Concrete Pour Crushes Underground Drainage',
        scenario: 'During a residential slab pour, a builder drove a concrete truck over an unmarked section of the property. The weight crushed an underground drainage pipe, causing sewage overflow into the garden.',
        outcome: '$560 public liability claim paid for emergency plumber callout and drainage pipe repair — caught early before major damage occurred.',
        coverType: 'Public Liability',
      },
      {
        title: 'Nail Through Electrical Cable Causes Fire',
        scenario: 'A builder fastening framing timber drove a nail through a concealed electrical cable. The resulting short circuit caused a small fire in the wall cavity before the homeowner smelled smoke.',
        outcome: 'Public liability cover responded, paying for smoke and fire damage remediation, rewiring, and alternative accommodation for the homeowner during repairs.',
        coverType: 'Public Liability',
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
    heroImage: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=1920&q=80',
    description:
      'Plumbers work with water, gas, and drainage systems where a mistake can cause significant property damage or health risks. Water damage in particular can be catastrophic and expensive. Specialist plumber insurance ensures you are protected against the unique risks of the trade.',
    introText: [
      'Plumbers insurance is a tailored package of policies protecting New Zealand plumbers from the financial consequences of water damage claims, gas-related incidents, and the professional liability that comes with licensed trade work. Water escapes are among the most costly property damage claims in the residential insurance market — a single faulty connection can cause tens of thousands of dollars of damage to floors, walls, and contents before it is discovered. With average public liability premiums starting around $30–$50 per month for sole traders, cover is affordable relative to the exposure.',
      'Licensed plumbers in New Zealand operate under the Plumbers, Gasfitters, and Drainlayers Act 2006, which imposes professional obligations that heighten both the standards and the liability associated with the work. Gasfitting work carries additional risk — errors in gas systems can cause explosions, fires, or carbon monoxide poisoning, with consequences that are both catastrophic and potentially criminal in their severity. A comprehensive insurance package gives you, your team, and your clients the assurance that you are operating professionally and that any claim will be met.',
    ],
    whyNeedIt: [
      'A single burst pipe or failed connection can cause NZ$50,000+ in water damage to a client\'s home — public liability is the only protection between that claim and your personal finances.',
      'Gas fitting work carries risk of explosion or carbon monoxide incidents; the scale of potential claims from gas-related events makes high-limit liability cover essential for any gasfitter.',
      'The Plumbers, Gasfitters, and Drainlayers Act requires you to be licensed — most clients and principal contractors also require proof of current insurance before you start work.',
      'Tool theft is a constant risk on multi-trade residential sites; specialist tools like pipe benders, gas analysers, and pressure test kits can cost thousands to replace out of pocket.',
    ],
    coverPackage: 'A comprehensive plumbers insurance package typically includes public liability ($2M+), professional indemnity, tools and equipment cover up to $10,000, and commercial vehicle insurance.',
    costFrom: '~$30/month',
    costFactors: [
      'Gasfitting vs water/drainage work',
      'Annual turnover',
      'Number of apprentices or employees',
      'Tools and equipment value',
    ],
    legalRequirements: [
      'Plumbers, Gasfitters, and Drainlayers Act 2006 — licensing mandatory for all registered work',
      'Health and Safety at Work Act 2015 — duty of care for confined space and trench work',
      'Building Act 2004 — plumbing work must comply with New Zealand Building Code',
      'Gas (Safety and Measurement) Regulations — gasfitters must hold current certification',
      'Consumer Guarantees Act — guarantees of acceptable quality apply to all installation work',
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
    claimExamples: [
      {
        title: 'Failed Hot Water Connection Floods Kitchen',
        scenario: 'A plumber completed a hot water cylinder installation in a residential property. A compression fitting was not fully tightened and failed overnight, flooding the kitchen and damaging hardwood flooring and cabinetry.',
        outcome: 'Public liability claim of NZ$28,000 paid, covering floor replacement, cabinet repairs, and temporary accommodation for the homeowner.',
        coverType: 'Public Liability',
      },
      {
        title: 'Subcontractor Screw Through Water Pipe',
        scenario: 'A plumbing subcontractor put a screw through a concealed water pipe during a bathroom renovation. The slow leak went undetected for several weeks, causing water damage to walls, floor framing, and a downstairs ceiling.',
        outcome: 'Public liability covered both the pipe repair and the consequential building damage, with total claim settlement of NZ$14,500.',
        coverType: 'Public Liability',
      },
      {
        title: 'Gas Leak Following Appliance Installation',
        scenario: 'After installing a gas hob, a gasfitter failed to adequately test all connections. A minor gas leak developed behind the bench, detected two days later when the homeowner noticed an odour.',
        outcome: 'Public liability covered the emergency callout, full reinspection of the gas installation, ventilation of the property, and associated costs of NZ$3,200.',
        coverType: 'Public Liability',
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
    heroImage: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1920&q=80',
    description:
      'Painters work across residential and commercial properties, often involving heights, chemicals, and access to clients\' homes. Paint spills, falls, and damage to clients\' property are all real risks. The right insurance means a single accident does not put your painting business out of action.',
    introText: [
      'Painters insurance is a package of specialist policies that protects New Zealand painters and decorators from the financial consequences of property damage, height-related incidents, and liability claims arising from their work. Painting might appear to be a lower-risk trade, but paint spills on hardwood floors, overspray incidents, and falls from ladders and scaffolding are all common causes of significant claims. Public liability insurance for painters is typically available from around NZ$30 per month for sole traders — affordable protection for real-world risks.',
      'Commercial and residential painters frequently work in occupied premises, which means accidental damage to client property, furniture, and fittings is an ever-present risk. Body corporates, building managers, and commercial clients routinely require painters to hold current public liability cover before granting access to the site. Working at heights under the Health and Safety at Work Act 2015 also carries specific obligations, and a WorkSafe prosecution following a height-related incident can result in significant fines — statutory liability cover protects you against those costs.',
    ],
    whyNeedIt: [
      'Paint spills and overspray can cause expensive damage to hardwood floors, carpet, vehicles, and neighbouring properties — a single careless moment can result in a claim worth thousands.',
      'Working at heights is consistently one of the leading causes of serious injury in the New Zealand construction sector, and height work regulations under the Health and Safety at Work Act 2015 are strictly enforced.',
      'Body corporates and commercial building managers routinely require painters to produce a certificate of currency for public liability before starting any work on their premises.',
      'Spray painting equipment, access platforms, and ladders represent a significant financial investment — tools cover ensures theft or accidental damage does not stop your business.',
    ],
    coverPackage: 'A comprehensive painters insurance package typically includes public liability ($1M–$2M), tools and equipment cover, income protection, and commercial vehicle insurance for your work van.',
    costFrom: '~$30/month',
    costFactors: [
      'Commercial vs residential work ratio',
      'Height work frequency',
      'Annual turnover',
      'Number of employees or subcontractors',
    ],
    legalRequirements: [
      'Health and Safety at Work Act 2015 — specific obligations for work at heights above 3 metres',
      'WorkSafe NZ Working at Heights guidelines — fall protection planning required',
      'Building Act 2004 — some repainting and coating work requires building consent',
      'Hazardous Substances and New Organisms Act — obligations for solvent-based and lead paint handling',
      'Consumer Guarantees Act — guarantees of acceptable quality apply to painting services',
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
    claimExamples: [
      {
        title: 'Paint Roller Spill Damages Hardwood Flooring',
        scenario: 'A painter was rolling a ceiling in a recently renovated living room. The roller cover slipped off and deposited a large quantity of white ceiling paint across newly installed hardwood flooring and a leather sofa.',
        outcome: 'Public liability claim of NZ$6,800 paid, covering professional floor cleaning, two sections of floor replacement, and sofa restoration.',
        coverType: 'Public Liability',
      },
      {
        title: 'Overspray Damages Neighbour\'s New Vehicle',
        scenario: 'A painter was spray applying an exterior coat on a windy day without adequate masking of the adjacent driveway. Overspray settled on a neighbour\'s new car parked nearby, requiring a full respray of one side.',
        outcome: 'Public liability claim of NZ$4,200 paid for vehicle repainting and detailing, with no gap payment from the painter.',
        coverType: 'Public Liability',
      },
      {
        title: 'Painter Falls from Ladder — WorkSafe Investigation',
        scenario: 'An employee painter fell from a ladder while painting eaves at 4 metres. WorkSafe NZ investigated and found inadequate fall protection controls had been in place. The business faced prosecution under the Health and Safety at Work Act.',
        outcome: 'Statutory liability cover paid for legal defence costs throughout the WorkSafe investigation and subsequent proceedings, totalling NZ$22,000.',
        coverType: 'Statutory Liability',
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
    heroImage: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=1920&q=80',
    description:
      'Carpenters and woodworkers craft everything from structural framing to bespoke joinery. Your work can be exposed to defect claims, site injuries, and damage to valuable client materials. The right cover keeps your workshop and your reputation protected.',
    introText: [
      'Carpenters and woodworkers insurance is designed to protect New Zealand tradespeople from the specific risks of structural and decorative timber work — including defect claims that can arise years after a project is complete, damage to expensive client-supplied materials, and the ever-present risk of workshop fire or machinery injury. Whether you are framing a new home, fitting bespoke kitchen joinery, or operating a timber workshop, the financial consequences of an uninsured claim can be severe. Public liability starts from around NZ$30 per month for sole traders.',
      'Structural carpenters who hold a Licensed Building Practitioner (LBP) licence carry ten-year liability under the Building Act 2004, meaning claims for defective framing or structural timber work can arrive long after the project is finished. Workshop-based woodworkers face additional risks including fire (timber is highly combustible), machinery injuries, and damage to expensive client materials during fabrication. A comprehensive insurance package addresses all of these exposures while keeping your business compliant with the requirements of principal contractors and commercial clients.',
    ],
    whyNeedIt: [
      'Structural carpenters hold ten-year liability under the Building Act 2004 — a defect claim for faulty framing or roof structure can arrive years after project completion, making ongoing cover essential.',
      'Workshop environments combine combustible materials, dust, and power machinery — a workshop fire can destroy tens of thousands of dollars of equipment, stock, and client materials in minutes.',
      'Principal contractors on commercial and residential sites require carpenters to hold current public liability cover, typically NZ$1M–$5M, before work can begin.',
      'Damage to expensive client-supplied materials — high-end hardwoods, bespoke panels, or pre-finished cabinetry — during fabrication or installation can result in claims that exceed a month\'s revenue.',
    ],
    coverPackage: 'A comprehensive carpenters insurance package includes public liability ($2M), professional indemnity for LBPs, tools and equipment cover (including workshop machinery), and contents and property insurance for your workshop.',
    costFrom: '~$32/month',
    costFactors: [
      'Structural vs finishing work',
      'LBP licence holder status',
      'Workshop premises and equipment value',
      'Annual turnover',
    ],
    legalRequirements: [
      'Building Act 2004 — LBP licensing required for restricted building work including structural carpentry',
      'Building Act 2004 — ten-year liability on residential building work',
      'Health and Safety at Work Act 2015 — machinery guarding and dust extraction obligations',
      'WorkSafe NZ — specific guidance on power tool and workshop safety',
      'Consumer Guarantees Act — guarantees of acceptable quality apply to all carpentry work',
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
    claimExamples: [
      {
        title: 'Structural Framing Defect Found During LBP Inspection',
        scenario: 'A carpenter completed structural framing on a new home. A subsequent building inspection identified non-compliant nailing patterns in multiple wall frames, requiring the framing to be partially opened up and re-nailed.',
        outcome: 'Professional indemnity and public liability together covered the remediation cost of NZ$11,400 and legal costs associated with the building consent process.',
        coverType: 'Professional Indemnity',
      },
      {
        title: 'Workshop Fire Destroys Client Joinery Order',
        scenario: 'An electrical fault in a workshop dust extraction unit started a fire after hours. The blaze destroyed the workshop\'s contents including two completed bespoke kitchen joinery orders worth NZ$28,000 in materials and labour.',
        outcome: 'Contents and property insurance covered the full replacement of workshop equipment and materials; public liability covered the client\'s losses on the incomplete orders.',
        coverType: 'Contents & Property',
      },
      {
        title: 'Scratched Window Frames During Staircase Installation',
        scenario: 'A carpenter installing a new staircase used sandpaper to adjust a balustrade near newly installed aluminium window frames. The abrasion scratched the powder-coated surface on three frames, requiring replacement.',
        outcome: 'Public liability claim of NZ$3,600 paid for window frame replacement — a claim that a contract works policy alone might not have covered due to faulty workmanship exclusions.',
        coverType: 'Public Liability',
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
    heroImage: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1920&q=80',
    description:
      'Electricians work with live power systems where errors can cause fires, electrocution, or serious property damage. The regulatory environment for electrical work in NZ is strict, and the consequences of a mistake can be severe. Specialist electrician insurance gives you the protection you need.',
    introText: [
      'Electricians insurance is a specialist package of policies that protects New Zealand electrical contractors from the elevated risks associated with live electrical systems — including fire, electrocution, and the professional liability that comes with certifying electrical installations. Faulty electrical work can cause fires that emerge years after the installation was completed, and the consequences of a large commercial electrical fire can run into millions of dollars. Public liability for electricians typically starts from around NZ$40–$60 per month, reflecting the higher-risk nature of the trade.',
      'New Zealand electricians must be registered under the Electricity Act and are subject to strict certification requirements for all electrical work. This regulatory framework means that professional indemnity insurance is increasingly important — a failed certification, an incorrectly specified circuit, or a faulty design can result in a professional liability claim as well as a public liability claim. Many commercial contracts also require electricians to carry higher limits of up to $5M or $10M public liability. A comprehensive package ensures you are protected at every level.',
    ],
    whyNeedIt: [
      'Electrical fires are one of the leading causes of commercial property damage in New Zealand — faulty wiring can cause a catastrophic loss years after installation, and the resulting claim can be enormous.',
      'Registration under the Electricity Act and certification obligations mean that professional errors carry both public liability and professional indemnity exposure simultaneously.',
      'Commercial building contracts routinely require electricians to hold $2M–$5M public liability before starting work, and some large projects require up to $10M.',
      'Specialist test equipment, cable drums, crimping tools, and thermal imaging cameras represent a major investment — tools cover protects you if they are stolen or damaged on site.',
    ],
    coverPackage: 'A comprehensive electricians insurance package includes public liability ($2M–$5M), professional indemnity, statutory liability, tools and equipment cover, and commercial vehicle insurance.',
    costFrom: '~$45/month',
    costFactors: [
      'Commercial vs residential work',
      'Annual turnover',
      'Design and certification services',
      'Number of employees',
    ],
    legalRequirements: [
      'Electricity Act 1992 — registration required for all electrical work',
      'Electricity (Safety) Regulations 2010 — certification and testing requirements for all new work',
      'Health and Safety at Work Act 2015 — specific electrical safety obligations',
      'Building Act 2004 — electrical work must comply with New Zealand Building Code',
      'WorkSafe NZ — serious harm reporting obligations for electrical incidents',
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
    claimExamples: [
      {
        title: 'Faulty Wiring Causes Kitchen Fire',
        scenario: 'An electrician completed a kitchen renovation rewire. Eighteen months later, an incorrectly terminated connection in a junction box overheated and caused a fire in the wall cavity, causing smoke and fire damage throughout the kitchen.',
        outcome: 'Public liability claim of NZ$45,000 paid, covering structural repairs, full kitchen replacement, contents damage, and temporary accommodation costs.',
        coverType: 'Public Liability',
      },
      {
        title: 'Incorrect Circuit Specification Fails Commercial Fit-Out',
        scenario: 'An electrician specified and installed circuits for a commercial kitchen fit-out. The circuits were undersized for the actual load, causing repeated tripping and damage to commercial cooking equipment.',
        outcome: 'Professional indemnity covered the cost of rectification works and equipment damage claims totalling NZ$18,000, plus legal defence costs.',
        coverType: 'Professional Indemnity',
      },
      {
        title: 'Conduit Drill Hits Hidden Water Pipe',
        scenario: 'An electrician drilling to run conduit through a commercial building\'s ceiling space drilled into a concealed chilled water pipe for the building\'s air conditioning system. Water flooded into a server room below.',
        outcome: 'Public liability claim of NZ$31,500 paid, covering water damage remediation, IT equipment replacement, and business interruption for the tenant.',
        coverType: 'Public Liability',
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
    heroImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80',
    description:
      'Bricklayers perform structural and cosmetic work that must meet strict NZ building codes. Structural failures, damage to adjacent property, and on-site injuries are key risks. The right insurance package protects your bricklaying business from day one.',
    introText: [
      'Bricklayers insurance is a specialist package of policies protecting New Zealand bricklayers and blocklayers from the risks of structural and cosmetic masonry work — including structural failure claims, damage to neighbouring properties from vibration or dust, and the physical injury risks that come with heavy materials and manual lifting. Public liability for bricklayers typically starts from around NZ$35–$55 per month, covering the most common risk scenario of damage to third-party property during or after the completion of works.',
      'Bricklaying on commercial and residential sites in New Zealand is subject to the Building Act 2004 and associated New Zealand Building Code requirements for structural masonry. Commercial bricklaying contracts routinely require contractors to hold $5M or more in public liability cover — higher than many other trades — because structural failures or property boundary damage can have significant consequences for adjacent buildings and their occupants. A comprehensive insurance package ensures you can meet these requirements and keep working on the projects that matter most.',
    ],
    whyNeedIt: [
      'Structural brickwork carries long-tail liability under New Zealand building law — a wall or retaining structure that fails years after completion can generate a claim for damages, demolition, and full reconstruction.',
      'Working near property boundaries means vibration from drilling, compaction, and heavy machinery can cause cracking to neighbouring buildings — these claims can be large and contested.',
      'Commercial bricklaying contracts regularly require NZ$5M+ public liability as a condition of engagement — holding adequate cover keeps you eligible for the most valuable contracts.',
      'Bricklaying is physically demanding, with high rates of injury from heavy lifting, manual handling, and working on scaffolding — income protection ensures your bills are covered if you cannot work.',
    ],
    coverPackage: 'A comprehensive bricklayers insurance package includes public liability ($2M–$5M), statutory liability, tools and equipment cover, and income protection for illness or injury.',
    costFrom: '~$38/month',
    costFactors: [
      'Structural vs decorative work',
      'Commercial vs residential',
      'Annual turnover',
      'Number of employees',
    ],
    legalRequirements: [
      'Building Act 2004 — structural masonry must comply with New Zealand Building Code',
      'Health and Safety at Work Act 2015 — manual handling and scaffolding obligations',
      'WorkSafe NZ — scaffolding and working at heights requirements',
      'Resource Management Act — dust and vibration obligations near neighbouring properties',
      'Consumer Guarantees Act — guarantees of acceptable quality apply to bricklaying work',
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
    claimExamples: [
      {
        title: 'Retaining Wall Failure Damages Neighbouring Property',
        scenario: 'A bricklayer constructed a block retaining wall on a sloped residential section. Eighteen months later, inadequate footings allowed the wall to lean and partially collapse onto the neighbour\'s fence and garden shed.',
        outcome: 'Public liability claim of NZ$12,800 paid for wall demolition, neighbour\'s property reinstatement, and partial reconstruction costs.',
        coverType: 'Public Liability',
      },
      {
        title: 'Construction Dust Causes Damage to Commercial Premises',
        scenario: 'Mortar mixing and bricklaying on a commercial construction site adjacent to a retail outlet generated significant dust ingress into the neighbouring premises, contaminating stock and requiring professional cleaning.',
        outcome: 'Public liability claim of NZ$5,400 paid for professional cleaning, stock replacement, and two days of business interruption for the affected retailer.',
        coverType: 'Public Liability',
      },
      {
        title: 'Worker Injury on Scaffolding — WorkSafe Investigation',
        scenario: 'A bricklaying employee suffered a serious fall from scaffolding on a commercial project. WorkSafe NZ investigated and found the scaffolding inspection records were not compliant with current requirements.',
        outcome: 'Statutory liability cover paid NZ$28,000 in legal defence costs during the WorkSafe investigation and proceedings. ACC covered the worker\'s medical costs.',
        coverType: 'Statutory Liability',
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
    heroImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1920&q=80',
    description:
      'Roofing is consistently one of the highest-risk trades in New Zealand. Working at heights, handling heavy materials, and the consequences of a leaky roof make comprehensive insurance essential. Do not work on a roof without the right cover in place.',
    introText: [
      'Roofers insurance is a specialist package of policies covering New Zealand roofing contractors against the elevated risks of height work, weather-related liability, and the consequential property damage that can flow from a faulty or incomplete roof installation. Roofing has one of the highest rates of workplace injury in the New Zealand construction sector, and the Health and Safety at Work Act 2015 imposes strict obligations on height work management. Public liability for roofers typically starts from NZ$50–$80 per month, reflecting the elevated risk profile of the trade.',
      'A leaky roof can cause catastrophic consequential damage — water ingress that penetrates ceiling linings, insulation, wall framing, electrical fittings, and floor coverings can result in claims that dwarf the original contract value. New Zealand\'s climate, with its extreme weather events from Northland to Southland, means that partially completed roofing work carries particular exposure when storms arrive unexpectedly. Roofers who hold a current insurance package, including public liability and statutory liability, are also better positioned when it comes to WorkSafe NZ compliance and principal contractor requirements.',
    ],
    whyNeedIt: [
      'Roofing consistently records the highest rates of serious fall injuries in New Zealand construction — statutory liability cover is critical if WorkSafe NZ investigates and prosecutes following an incident.',
      'A faulty roof installation that allows water ingress can cause hundreds of thousands of dollars of consequential damage to ceiling linings, framing, insulation, electrical systems, and contents.',
      'Weather events can strike during partially completed roof work — a property left open to the elements overnight can result in significant claims from homeowners or principal contractors.',
      'Commercial roofing contracts typically require $2M+ public liability as a condition of starting work, and some commercial projects specify higher limits of $5M or more.',
    ],
    coverPackage: 'A comprehensive roofers insurance package includes public liability ($2M+), statutory liability, tools and equipment cover, income protection for height-work injury risk, and commercial vehicle insurance.',
    costFrom: '~$55/month',
    costFactors: [
      'Height of work undertaken',
      'Commercial vs residential',
      'Annual turnover',
      'Number of employees',
    ],
    legalRequirements: [
      'Health and Safety at Work Act 2015 — specific obligations for all work above 3 metres',
      'WorkSafe NZ Working at Heights guidelines — mandatory fall protection planning',
      'Building Act 2004 — roofing work must comply with New Zealand Building Code E2 (External Moisture)',
      'Consumer Guarantees Act — guarantees of acceptable quality apply to all roofing installations',
      'New Zealand Building Code E2 — specific weathertightness requirements for all roof cladding',
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
    claimExamples: [
      {
        title: 'Leaking Roof Flashing Causes Extensive Water Damage',
        scenario: 'A roofer completed a re-roofing job on a residential property. The flashing around a chimney was incorrectly installed. Over the following winter, water tracked behind the flashing and into the roof space, damaging ceilings, insulation, and upper floor walls across three rooms.',
        outcome: 'Public liability claim of NZ$38,000 paid, covering ceiling replacement, reinsulation, wall lining remediation, and painting throughout the affected areas.',
        coverType: 'Public Liability',
      },
      {
        title: 'Storm Exposes Unfinished Roof Mid-Project',
        scenario: 'A roofer was midway through replacing the iron cladding on a large rural home when an unexpected storm system arrived. The uncovered section of roof allowed significant water ingress overnight, damaging an upper-floor bedroom and hallway.',
        outcome: 'Public liability claim of NZ$9,200 paid for emergency drying, carpet and flooring replacement, and ceiling repairs in the affected areas.',
        coverType: 'Public Liability',
      },
      {
        title: 'WorkSafe Prosecution Following Employee Fall',
        scenario: 'A roofing employee slipped on a wet iron roof surface and fell to the ground, sustaining serious injuries. WorkSafe NZ investigated and found that the required edge protection had not been installed before work commenced.',
        outcome: 'Statutory liability covered NZ$35,000 in legal defence costs. The business was ultimately fined — the fine itself was not insurable, but the legal defence costs were fully covered.',
        coverType: 'Statutory Liability',
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
    heroImage: 'https://images.unsplash.com/photo-1509395062183-a6c1a3e62284?auto=format&fit=crop&w=1920&q=80',
    description:
      'Concreters pour and finish foundations, driveways, and structural slabs that must last for decades. Defects can be extremely expensive to remediate and concrete work often underpins other construction. Specialist concreter insurance covers the unique risks of your trade.',
    introText: [
      'Concreters insurance is a specialist package of policies protecting New Zealand concreters and concrete contractors from the financial consequences of structural defect claims, third-party property damage during pours, and the equipment liability associated with heavy concrete pumping and formwork. Concrete is the most common building material in New Zealand construction, and defective concrete work — whether in foundations, structural slabs, or retaining walls — can be extraordinarily expensive to remediate. Public liability for concreters typically starts from NZ$40–$60 per month.',
      'Foundation and structural slab defects are particularly costly because they underpin everything built above them. A cracked or subsiding foundation can require full excavation, demolition, and reconstruction of the structure it supports. Concrete pumping and formwork operations carry additional risks — a formwork collapse during a pour can injure workers and cause significant structural damage. Commercial concreting contracts frequently require substantial liability cover, and some principal contractors require concreters to carry $5M or more in public liability before starting work.',
    ],
    whyNeedIt: [
      'Foundation defects can require demolition and full reconstruction of the structure above — remediation claims for defective concrete work can reach NZ$100,000 or more on residential projects.',
      'Concrete pumping operations carry significant liability — a pump hose failure, line blockage, or truck overrun can cause structural damage and serious injury on a busy construction site.',
      'Concrete spillage and runoff during pours can damage neighbouring properties, landscaping, and drainage systems — public liability is essential for protecting you against these claims.',
      'Commercial concreting contracts routinely require NZ$2M–$5M public liability as a condition of engagement, and statutory liability is critical given the WorkSafe exposure from formwork and excavation.',
    ],
    coverPackage: 'A comprehensive concreters insurance package includes public liability ($2M+), statutory liability, tools and equipment cover for pumps and vibrators, and commercial vehicle insurance.',
    costFrom: '~$42/month',
    costFactors: [
      'Structural vs residential/driveway work',
      'Concrete pumping operations',
      'Annual turnover',
      'Number of employees',
    ],
    legalRequirements: [
      'Building Act 2004 — concrete work must comply with New Zealand Building Code B1 (Structure)',
      'Health and Safety at Work Act 2015 — formwork, excavation, and confined space obligations',
      'WorkSafe NZ — formwork safety specific guidance applies to all structural concrete pours',
      'Resource Management Act — concrete washout water must not enter stormwater or waterways',
      'Consumer Guarantees Act — guarantees of acceptable quality apply to all concrete work',
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
    claimExamples: [
      {
        title: 'Defective Foundation Requires Full Excavation',
        scenario: 'A concreter poured foundations for a new residential build. Post-pour testing found the concrete strength was below specification due to incorrect water ratio during mixing. The foundations had to be cut out and repoured, with significant disruption to the construction programme.',
        outcome: 'Public liability claim of NZ$52,000 paid, covering demolition of defective foundations, repouring, disposal, and delay costs for the main contractor.',
        coverType: 'Public Liability',
      },
      {
        title: 'Concrete Truck Crushes Unmarked Underground Drain',
        scenario: 'During a residential driveway pour, the concrete truck reversed over a section of the property where an unmarked private stormwater drain ran. The weight of the loaded truck crushed the drain pipe, causing stormwater overflow into the neighbour\'s property after the next rain event.',
        outcome: 'Public liability claim of NZ$4,800 paid for drain excavation, replacement, and remediation of the neighbour\'s affected garden.',
        coverType: 'Public Liability',
      },
      {
        title: 'Concrete Washout Reaches Waterway — RMA Investigation',
        scenario: 'After a commercial slab pour, concrete washout water was directed to a site drain that connected to a local stream. The regional council investigated and found the discharge breached the Resource Management Act consent conditions.',
        outcome: 'Statutory liability covered NZ$19,000 in legal representation and remediation compliance costs during the RMA investigation. Note: as of late 2025, RMA fines may not be insurable — confirm with your broker.',
        coverType: 'Statutory Liability',
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
    heroImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1920&q=80',
    description:
      'Handymen tackle a wide variety of repair and maintenance tasks across residential and commercial properties. While individual jobs may seem small, the cumulative liability exposure from working in clients\' homes is significant. Handyman insurance gives you and your clients peace of mind.',
    introText: [
      'Handyman insurance is a straightforward package of policies that protects New Zealand handymen and general maintenance contractors from the liability risks that come with working in clients\' homes and commercial premises. Although individual handyman jobs are often low-value, the cumulative exposure from working in hundreds of occupied properties each year is significant — damage to flooring, fixtures, appliances, and contents can quickly add up to costly claims. Public liability for handymen is among the most affordable in the trades sector, typically starting from NZ$25–$40 per month for sole traders.',
      'Property managers and landlords across New Zealand increasingly require their maintenance contractors to hold current public liability cover before being added to their approved contractor panels. This means that handymen without insurance are effectively excluded from a large and stable source of residential work. Beyond compliance, the practical risks of working in occupied homes — where a drill can hit a pipe, a ladder can scratch a wall, or a tool left on a step can cause injury — mean that cover is simply good business sense for anyone running a professional handyman operation.',
    ],
    whyNeedIt: [
      'Working across a diverse range of jobs in clients\' homes means your liability exposure is broad — from a drill bit hitting a concealed water pipe to a ladder scratching expensive joinery, claims happen regularly.',
      'Property managers and landlords in New Zealand increasingly require proof of current public liability cover before adding handymen to their approved contractor panels.',
      'Tool theft from vehicles is one of the most common insurance claims in the trades sector — a stolen drill, impact wrench set, or multi-tool kit can cost NZ$2,000–$5,000 to replace.',
      'ACC covers workplace accidents, but not illness — income protection ensures you can still meet your financial obligations if illness keeps you off the tools for weeks or months.',
    ],
    coverPackage: 'A comprehensive handyman insurance package includes public liability ($1M–$2M), tools and equipment cover, commercial vehicle insurance, and income protection for illness or injury.',
    costFrom: '~$28/month',
    costFactors: [
      'Types of work undertaken',
      'Commercial vs residential',
      'Annual turnover',
      'Tools and equipment value',
    ],
    legalRequirements: [
      'Health and Safety at Work Act 2015 — general duty of care obligations when working in client premises',
      'Consumer Guarantees Act — guarantees of acceptable quality apply to all maintenance work',
      'Fair Trading Act — prohibits misleading claims about qualifications or the scope of work',
      'Building Act 2004 — restricted building work cannot be carried out without LBP licence',
      'Plumbers, Gasfitters, and Drainlayers Act — licensed work cannot be carried out without registration',
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
    claimExamples: [
      {
        title: 'Drill Hits Concealed Water Pipe in Wall',
        scenario: 'A handyman was drilling into a kitchen wall to mount shelving. The drill bit hit a concealed copper water pipe, causing water to escape into the wall cavity and kitchen cabinetry before the water supply could be isolated.',
        outcome: 'Public liability claim of NZ$7,400 paid, covering plumber callout, wall repair, cabinetry drying and restoration, and repainting of the affected area.',
        coverType: 'Public Liability',
      },
      {
        title: 'Ladder Scratches New Joinery During Installation',
        scenario: 'While installing a ceiling fan in a recently renovated hallway, a handyman rested a ladder against the freshly painted wall and new door architraves. The ladder feet scratched a one-metre section of painted joinery and marked the wall.',
        outcome: 'Public liability claim of NZ$1,100 paid for repainting and joinery touch-up — a small claim resolved quickly without dispute thanks to current cover.',
        coverType: 'Public Liability',
      },
      {
        title: 'Tools Stolen from Ute Overnight',
        scenario: 'A handyman\'s ute was parked outside a residential property where a two-day job was underway. Overnight, the ute was broken into and NZ$3,800 worth of power tools including a drill, circular saw, and jigsaw were stolen.',
        outcome: 'Tools and equipment insurance covered the full replacement cost of the stolen tools less the excess, allowing the handyman to resume work the following morning.',
        coverType: 'Tools & Equipment',
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
