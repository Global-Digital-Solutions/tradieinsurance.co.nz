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
      'Builders face some of the highest risk exposures of any trade. From structural defects to on-site injuries, a single claim can threaten your entire business. The right insurance package protects your livelihood, your team, and your clients.',
    keyFacts: [
      'Public liability is mandatory on most NZ building sites',
      'LBP certification may require professional indemnity',
      'Structural defects claims can arise years after completion',
      'Building contracts often specify minimum cover requirements',
    ],
    introText: [
      'Builders insurance is a suite of specialist policies designed to protect New Zealand builders from the financial consequences of property damage, personal injury, and legal claims arising from construction work. Whether you are building new homes, completing renovations, or managing a commercial construction project, the exposures are significant — a single incident on site can generate a claim worth tens of thousands of dollars. Public liability insurance for builders averages around $26.83 per month, making it one of the most cost-effective risk management tools available.',
      'Construction is New Zealand\'s most claim-intensive trade sector. The Building Act 2004 imposes ten-year liability on builders for defective work, meaning claims can arrive years or even decades after a project is complete. Add in the risks of on-site injury, tool theft, statutory compliance, and the ever-present threat of a WorkSafe prosecution, and it becomes clear that a comprehensive insurance package is not a luxury — it is a business necessity for any builder working today.',
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
        q: 'Do builders legally need insurance?',
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
      'Licensed plumbers operate under the Plumbers, Gasfitters, and Drainlayers Act 2006, which imposes professional obligations that heighten both the standards and the liability associated with the work. Gasfitting work carries additional risk — errors in gas systems can cause explosions, fires, or carbon monoxide poisoning, with consequences that are both catastrophic and potentially criminal in their severity. A comprehensive insurance package gives you, your team, and your clients the assurance that you are operating professionally and that any claim will be met.',
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
        q: 'What insurance does a plumber need?',
        a: 'At minimum, NZ plumbers should carry public liability insurance. Those doing gasfitting work should also consider professional indemnity. Tools cover and commercial vehicle insurance round out a comprehensive package.',
      },
      {
        q: 'How much does plumber insurance cost?',
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
        desc: 'Falls from scaffolding or ladders can injure workers or damage property below. Height work is one of the leading causes of workplace injuries.',
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
        q: 'What insurance do painters need?',
        a: 'NZ painters typically need public liability insurance as a minimum. If you employ staff, employer\'s liability and WorkSafe compliance are important. Tools cover for spray equipment and ladders is also recommended.',
      },
      {
        q: 'Is painter insurance expensive?',
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
        q: 'What insurance do carpenters need?',
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
      'Electricians work with live power systems where errors can cause fires, electrocution, or serious property damage. The regulatory environment for electrical work is strict, and the consequences of a mistake can be severe. Specialist electrician insurance gives you the protection you need.',
    introText: [
      'Electricians insurance is a specialist package of policies that protects New Zealand electrical contractors from the elevated risks associated with live electrical systems — including fire, electrocution, and the professional liability that comes with certifying electrical installations. Faulty electrical work can cause fires that emerge years after the installation was completed, and the consequences of a large commercial electrical fire can run into millions of dollars. Public liability for electricians typically starts from around NZ$40–$60 per month, reflecting the higher-risk nature of the trade.',
      'New Zealand electricians must be registered under the Electricity Act and are subject to strict certification requirements for all electrical work. This regulatory framework means that professional indemnity insurance is increasingly important — a failed certification, an incorrectly specified circuit, or a faulty design can result in a professional liability claim as well as a public liability claim. Many commercial contracts also require electricians to carry higher limits of up to $5M or $10M public liability. A comprehensive package ensures you are protected at every level.',
    ],
    whyNeedIt: [
      'Electrical fires are one of the leading causes of commercial property damage — faulty wiring can cause a catastrophic loss years after installation, and the resulting claim can be enormous.',
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
        q: 'What insurance do electricians need?',
        a: 'NZ electricians should carry public liability insurance as a minimum. Those doing design or certification work need professional indemnity. Tools cover and commercial vehicle insurance complete a solid package.',
      },
      {
        q: 'How much does electrician insurance cost?',
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
      'Bricklaying on commercial and residential sites is subject to the Building Act 2004 and associated New Zealand Building Code requirements for structural masonry. Commercial bricklaying contracts routinely require contractors to hold $5M or more in public liability cover — higher than many other trades — because structural failures or property boundary damage can have significant consequences for adjacent buildings and their occupants. A comprehensive insurance package ensures you can meet these requirements and keep working on the projects that matter most.',
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
        q: 'What insurance do bricklayers need?',
        a: 'NZ bricklayers need public liability as a minimum. Structural work may also require professional indemnity. Tools cover for trowels, levels, and specialist equipment is also recommended.',
      },
      {
        q: 'How much does bricklayer insurance cost?',
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
      'Roofing is consistently one of the highest-risk trades. Working at heights, handling heavy materials, and the consequences of a leaky roof make comprehensive insurance essential. Do not work on a roof without the right cover in place.',
    introText: [
      'Roofers insurance is a specialist package of policies covering New Zealand roofing contractors against the elevated risks of height work, weather-related liability, and the consequential property damage that can flow from a faulty or incomplete roof installation. Roofing has one of the highest rates of workplace injury in the New Zealand construction sector, and the Health and Safety at Work Act 2015 imposes strict obligations on height work management. Public liability for roofers typically starts from NZ$50–$80 per month, reflecting the elevated risk profile of the trade.',
      'A leaky roof can cause catastrophic consequential damage — water ingress that penetrates ceiling linings, insulation, wall framing, electrical fittings, and floor coverings can result in claims that dwarf the original contract value. New Zealand\'s climate, with its extreme weather events from Northland to Southland, means that partially completed roofing work carries particular exposure when storms arrive unexpectedly. Roofers who hold a current insurance package, including public liability and statutory liability, are also better positioned when it comes to WorkSafe NZ compliance and principal contractor requirements.',
    ],
    whyNeedIt: [
      'Roofing consistently records the highest rates of serious fall injuries construction — statutory liability cover is critical if WorkSafe NZ investigates and prosecutes following an incident.',
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
        q: 'What insurance do roofers need?',
        a: 'Roofers should carry public liability and statutory liability as a minimum. Given the height work risks, income protection is also strongly recommended. Tools and commercial vehicle cover round out a comprehensive package.',
      },
      {
        q: 'Is roofing insurance expensive?',
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
      'Concreters insurance is a specialist package of policies protecting New Zealand concreters and concrete contractors from the financial consequences of structural defect claims, third-party property damage during pours, and the equipment liability associated with heavy concrete pumping and formwork. Concrete is the most common building material construction, and defective concrete work — whether in foundations, structural slabs, or retaining walls — can be extraordinarily expensive to remediate. Public liability for concreters typically starts from NZ$40–$60 per month.',
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
        desc: 'Formwork failure during a pour can cause serious injury and major property damage. This is a well-documented risk construction.',
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
        q: 'What insurance do concreters need?',
        a: 'NZ concreters need public liability as a minimum, with higher limits for commercial and structural work. Tools and equipment cover for pumps and vibrators is important. Statutory liability is recommended given WorkSafe exposure.',
      },
      {
        q: 'How much does concreter insurance cost?',
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
      'Property managers and landlords across the country increasingly require their maintenance contractors to hold current public liability cover before being added to their approved contractor panels. This means that handymen without insurance are effectively excluded from a large and stable source of residential work. Beyond compliance, the practical risks of working in occupied homes — where a drill can hit a pipe, a ladder can scratch a wall, or a tool left on a step can cause injury — mean that cover is simply good business sense for anyone running a professional handyman operation.',
    ],
    whyNeedIt: [
      'Working across a diverse range of jobs in clients\' homes means your liability exposure is broad — from a drill bit hitting a concealed water pipe to a ladder scratching expensive joinery, claims happen regularly.',
      'Property managers and landlords increasingly require proof of current public liability cover before adding handymen to their approved contractor panels.',
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
        q: 'Does a handyman need insurance?',
        a: 'While not always legally required, public liability is strongly recommended for any handyman working in client homes. Many property managers and landlords require it. It is also simply good business practice.',
      },
      {
        q: 'How much does handyman insurance cost?',
        a: 'Handyman insurance is generally affordable given the moderate risk profile. Public liability typically starts from around NZ$25–$40/month for sole traders with modest turnover.',
      },
      {
        q: 'Can a handyman get insurance for all types of work?',
        a: 'Yes, but it is important to disclose all the types of work you do when getting cover. Some specialist tasks (like electrical or plumbing beyond basic maintenance) may require separate licensed trade cover.',
      },
    ],
    recommendedCover: ['public-liability', 'tools-equipment', 'commercial-vehicle', 'income-protection'],
  },
  {
    slug: 'gasfitters',
    name: 'Gasfitters',
    icon: '🔥',
    heroImage: 'https://images.unsplash.com/photo-1558618047-3c8c2b8ad6e2?auto=format&fit=crop&w=1920&q=80',
    description:
      'Gasfitting is one of the most tightly regulated trades in New Zealand — and one of the highest-risk. Errors in gas systems can cause explosions, fires, or carbon monoxide poisoning. Specialist gasfitter insurance protects your licence, your livelihood, and your clients.',
    keyFacts: [
      'Gasfitting requires a separate licence under the Plumbers, Gasfitters, and Drainlayers Act 2006',
      'Gas-related incidents carry catastrophic claim potential — explosion, fire, and CO poisoning',
      'Professional indemnity is essential for certified gasfitters who sign off work',
      'Gasfitting licence holders carry personal liability for certified installations',
    ],
    introText: [
      'Gasfitter insurance is a specialist package of policies designed to protect New Zealand gasfitters from the serious financial consequences of gas-related incidents, professional liability, and the regulatory exposure that comes with holding a gasfitting licence. Unlike general plumbing work, gasfitting carries the risk of explosion, fire, and carbon monoxide poisoning — events that can cause devastating property damage and loss of life. This elevated risk profile means that public liability limits and professional indemnity cover are more critical for gasfitters than for many other trades.',
      'Licensed gasfitters operate under the Plumbers, Gasfitters, and Drainlayers Act 2006, and their certifications carry personal legal weight. A certification error or a failed connection that results in a gas-related incident can expose a gasfitter to both civil liability claims and regulatory action. Professional indemnity insurance covers the legal costs and damages arising from such professional errors, while public liability addresses third-party injury and property damage claims. Together, these form the essential foundation of any gasfitter\'s insurance programme.',
    ],
    whyNeedIt: [
      'Gas-related incidents — including explosions, fires, and carbon monoxide exposure — carry potentially catastrophic claim values that can far exceed other trade liability events.',
      'Gasfitting licence holders personally certify gas installations; a certification error can generate a professional indemnity claim in addition to a public liability claim.',
      'The Plumbers, Gasfitters, and Drainlayers Act 2006 imposes licensing obligations that most clients and principal contractors require you to evidence alongside current insurance.',
      'Specialist gas testing and diagnostic equipment represents a significant investment — tools cover ensures theft or damage does not stop your business.',
    ],
    coverPackage: 'A comprehensive gasfitter insurance package includes public liability ($2M+), professional indemnity, tools and equipment cover, statutory liability, and commercial vehicle insurance.',
    costFrom: '~$45/month',
    costFactors: [
      'Domestic vs commercial gas work',
      'Annual turnover',
      'Professional indemnity limit required',
      'Number of employees or apprentices',
    ],
    legalRequirements: [
      'Plumbers, Gasfitters, and Drainlayers Act 2006 — separate gasfitting licence required for all gas work',
      'Gas (Safety and Measurement) Regulations 2010 — certification and testing obligations for every gas installation',
      'Health and Safety at Work Act 2015 — duty of care for confined space and gas hazard work',
      'Consumer Guarantees Act — guarantees of acceptable quality apply to all gas installations',
      'Building Act 2004 — gasfitting work must comply with New Zealand Building Code G10 (piped gas)',
    ],
    risks: [
      {
        title: 'Gas Explosion or Fire',
        desc: 'A faulty gas connection or incorrectly installed appliance causes an explosion or fire. The resulting property and personal injury claims can be catastrophic in scale.',
      },
      {
        title: 'Carbon Monoxide Poisoning',
        desc: 'An incomplete gas combustion issue leads to CO exposure in a home or commercial premises. These claims carry serious personal injury consequences and can be fatal.',
      },
      {
        title: 'Professional Certification Liability',
        desc: 'An error in your gas certification is later identified following a fault. Professional indemnity covers legal costs and damages arising from the certification failure.',
      },
    ],
    claimExamples: [
      {
        title: 'Gas Leak Following Hob Installation Causes Fire',
        scenario: 'A gasfitter installed a new gas hob in a residential kitchen. A compression fitting was incorrectly tightened, allowing a slow gas leak to develop behind the bench. When the homeowner lit the hob two days later, residual gas ignited and caused a flash fire that damaged cabinetry and the splashback.',
        outcome: 'Public liability claim of NZ$22,000 paid, covering cabinetry replacement, splashback reinstatement, and repainting of the affected kitchen area.',
        coverType: 'Public Liability',
      },
      {
        title: 'CO Alarm Triggers Investigation of Gasfitter Work',
        scenario: 'A CO alarm activated in a residential property eighteen months after a gas heater installation. Inspection found an incomplete flue connection that allowed partial combustion gases to enter the living area. The homeowner sought compensation for medical checks and temporary relocation.',
        outcome: 'Public liability covered NZ$8,400 in temporary accommodation, medical costs, and full reinspection and remediation of the gas installation.',
        coverType: 'Public Liability',
      },
      {
        title: 'Certification Error on Commercial Gas System',
        scenario: 'A gasfitter certified a commercial kitchen gas system. A post-installation audit by the building owner\'s engineer found the regulator specification was incorrect for the load, creating an overpressure risk requiring full replacement.',
        outcome: 'Professional indemnity covered NZ$14,600 in rectification costs and legal fees arising from the certification dispute.',
        coverType: 'Professional Indemnity',
      },
    ],
    faqs: [
      {
        q: 'What insurance does a gasfitter need?',
        a: 'NZ gasfitters should carry public liability as a minimum, with professional indemnity strongly recommended given their certification obligations. Tools cover and commercial vehicle insurance complete the package.',
      },
      {
        q: 'How much does gasfitter insurance cost?',
        a: 'Gasfitting carries higher risk than general plumbing, so premiums reflect this. Public liability for a sole trader gasfitter typically starts from around NZ$45–$70/month. A full package can cost NZ$150–$300/month.',
      },
      {
        q: 'Does gasfitter insurance cover carbon monoxide incidents?',
        a: 'Public liability covers third-party personal injury and property damage claims arising from your work, which includes CO incidents. Confirm with your broker that your policy has no exclusions for gas-related events.',
      },
    ],
    recommendedCover: ['public-liability', 'professional-indemnity', 'tools-equipment', 'statutory-liability', 'commercial-vehicle'],
  },
  {
    slug: 'tilers',
    name: 'Tilers',
    icon: '🪨',
    heroImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80',
    description:
      'Tilers work with expensive materials on surfaces that must be both functional and visually perfect. Waterproofing failures, tile damage, and grouting errors can generate costly claims. The right tiler insurance protects your reputation and your business.',
    keyFacts: [
      'Waterproofing failures in wet areas can cause extensive consequential water damage',
      'Expensive imported tiles can be difficult to match — damage during installation can mean full room replacement',
      'Commercial tiling contracts often require proof of public liability cover',
      'Body corporates and building managers routinely require certificates of currency',
    ],
    introText: [
      'Tiler insurance is a specialist package of policies protecting New Zealand tilers and tiling contractors from the financial consequences of tile damage, waterproofing failures, and property damage claims that arise from residential and commercial tiling work. While tiling may appear lower risk than some trades, the combination of expensive imported materials, critical waterproofing compliance in wet areas, and the difficulty of matching tiles in a partial claim scenario means that a single incident can generate a claim that exceeds the value of the original contract. Public liability for tilers typically starts from around NZ$30–$50 per month.',
      'Waterproofing is one of the most critical obligations a tiler carries. Under the New Zealand Building Code, all wet areas — including showers, bathrooms, and laundries — must be correctly waterproofed before tiling. A waterproofing failure that allows moisture to penetrate into walls, floors, and framing can cause extensive consequential damage that is expensive to remediate. Commercial tiling projects add further complexity, with body corporates, building managers, and principal contractors routinely requiring tilers to hold current insurance before accessing the site.',
    ],
    whyNeedIt: [
      'Waterproofing failures in wet areas can cause concealed water damage to wall framing, flooring, and downstairs ceilings — remediation costs can reach NZ$20,000–$50,000 in severe cases.',
      'Imported and bespoke tiles are often difficult to source again — damaging part of a tile run during installation may require full room replacement to achieve a matching finish.',
      'Commercial clients and body corporates routinely require tilers to produce a certificate of currency for public liability before starting work on their premises.',
      'Adhesive and grouting errors can cause tiles to fail, crack, or delaminate over time — resulting in workmanship defect claims well after project completion.',
    ],
    coverPackage: 'A comprehensive tiler insurance package includes public liability ($1M–$2M), tools and equipment cover, income protection, and commercial vehicle insurance for your work van.',
    costFrom: '~$30/month',
    costFactors: [
      'Commercial vs residential work ratio',
      'Annual turnover',
      'Number of employees',
      'Wet area vs dry area work split',
    ],
    legalRequirements: [
      'Health and Safety at Work Act 2015 — duty of care for all work activities and site conditions',
      'Building Act 2004 — waterproofing in wet areas must comply with NZ Building Code E3',
      'Consumer Guarantees Act — guarantees of acceptable quality apply to all tiling work',
      'Building Act 2004 — some bathroom and wet area work may require building consent',
    ],
    risks: [
      {
        title: 'Waterproofing Failure',
        desc: 'Incorrect waterproofing in a shower or wet area allows moisture ingress, causing concealed structural damage. Remediation often involves full tile removal and reconstruction.',
      },
      {
        title: 'Tile Damage During Installation',
        desc: 'Expensive or imported tiles are damaged during cutting or laying. Matching replacement tiles may be unavailable, requiring full room replacement.',
      },
      {
        title: 'Grouting and Adhesion Failure',
        desc: 'Tiles delaminate or grout fails after completion. Workmanship defect claims require remediation at the tiler\'s cost.',
      },
    ],
    claimExamples: [
      {
        title: 'Shower Waterproofing Failure Causes Structural Damage',
        scenario: 'A tiler completed a new ensuite installation including waterproofing and floor-to-ceiling tiling. A year later, the homeowner noticed damp patches in the bedroom wall. Investigation revealed inadequate waterproofing at the shower wall-floor junction had allowed water to penetrate into the wall framing and subfloor over many months.',
        outcome: 'Public liability claim of NZ$31,000 paid, covering full tile removal, framing remediation, replastering, re-waterproofing, and retiling of the entire ensuite.',
        coverType: 'Public Liability',
      },
      {
        title: 'Imported Tiles Damaged During Cutting',
        scenario: 'A tiler was cutting a batch of hand-made Spanish porcelain floor tiles for a high-end residential kitchen. A blade adjustment fault on the tile saw caused several large-format tiles to shatter. The tiles could not be reordered within the project timeframe, requiring the full floor specification to be changed.',
        outcome: 'Public liability claim of NZ$7,200 paid for the damaged tiles, the cost of a modified tile specification, and additional labour to rectify the floor design.',
        coverType: 'Public Liability',
      },
      {
        title: 'Commercial Bathroom Tile Delamination',
        scenario: 'Tiles in a commercial bathroom began lifting and cracking eighteen months after installation, attributed to incorrect adhesive selection for a heated floor system beneath. The building owner required full replacement of the affected tiles across multiple cubicles.',
        outcome: 'Public liability covered NZ$9,800 in tile removal, adhesive remediation, and full retiling of the commercial bathroom area.',
        coverType: 'Public Liability',
      },
    ],
    faqs: [
      {
        q: 'What insurance do tilers need?',
        a: 'NZ tilers should carry public liability as a minimum. Tools cover for cutting and mixing equipment is also recommended. If you do significant commercial work, income protection rounds out a solid package.',
      },
      {
        q: 'Does tiler insurance cover waterproofing failures?',
        a: 'Public liability covers third-party property damage arising from your work, which includes consequential damage from waterproofing failures. Confirm with your broker that completed works and waterproofing scenarios are not excluded.',
      },
      {
        q: 'How much does tiler insurance cost?',
        a: 'Tiling is a moderate-risk trade. Public liability for a sole trader tiler typically starts from around NZ$30–$50/month. A full package including tools and vehicle cover might cost NZ$90–$180/month.',
      },
    ],
    recommendedCover: ['public-liability', 'tools-equipment', 'commercial-vehicle', 'income-protection'],
  },
  {
    slug: 'glaziers',
    name: 'Glaziers',
    icon: '🪟',
    heroImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1920&q=80',
    description:
      'Glaziers handle one of the most fragile and hazardous materials in construction. Glass breakage during handling, installation injuries, and thermal or structural failures all create real liability exposure. Specialist glazier insurance covers the risks that come with working with glass.',
    keyFacts: [
      'Glass breakage during handling or transport is one of the most common glazier claims',
      'Large-format glass panes carry significant value and handling risk',
      'Double-glazing and frameless glass installations carry long-tail thermal failure claims',
      'Building Code compliance for glass safety is a legal obligation for all glaziers',
    ],
    introText: [
      'Glazier insurance is a specialist package of policies protecting New Zealand glaziers and glass installation contractors from the financial consequences of glass breakage, personal injury claims, and the professional liability that can arise from window failures in commercial and residential buildings. Glass is an expensive and unforgiving material — a single large-format pane of double-glazed or toughened glass can cost several thousand dollars, and breakage during handling, transport, or installation is a frequent occurrence. Public liability for glaziers typically starts from around NZ$40–$60 per month.',
      'Commercial glazing work carries additional complexity: frameless glass facades, structural glazing, and large curtain-wall installations require precision engineering and create long-tail liability if thermal or structural failures develop. The New Zealand Building Code (B1 and E2) sets specific requirements for glazing performance in buildings, and non-compliant installations can result in both regulatory action and civil liability claims. A comprehensive insurance package ensures glaziers are protected at every stage, from the moment glass leaves the supplier to years after installation.',
    ],
    whyNeedIt: [
      'Glass breakage during handling is frequent and expensive — a large double-glazed unit can cost NZ$1,500–$5,000 to replace, and an uninsured series of breakages can seriously impact cashflow.',
      'Glass cuts and injuries are a constant risk during installation; statutory liability cover is important if WorkSafe NZ investigates a workplace injury involving glass handling.',
      'Thermal or structural failures in double-glazed or laminated glass can appear months or years after installation, generating long-tail workmanship claims that require professional indemnity or completed works cover.',
      'Commercial clients and property managers routinely require glaziers to hold current public liability cover before accessing their premises for window replacements or installations.',
    ],
    coverPackage: 'A comprehensive glazier insurance package includes public liability ($1M–$2M), tools and equipment cover, statutory liability, and commercial vehicle insurance for your delivery and installation vehicle.',
    costFrom: '~$40/month',
    costFactors: [
      'Commercial vs residential glazing work',
      'Structural glazing and curtain-wall work',
      'Annual turnover',
      'Number of employees',
    ],
    legalRequirements: [
      'Health and Safety at Work Act 2015 — specific obligations for manual handling of heavy glass panels',
      'Building Act 2004 — NZ Building Code B1 (Structure) and E2 (External Moisture) apply to glazing work',
      'NZ Building Code F2 — safety glazing requirements for all hazardous locations',
      'Consumer Guarantees Act — guarantees of acceptable quality apply to all glazing installations',
      'WorkSafe NZ glass handling guidelines — manual handling risk controls required for large panes',
    ],
    risks: [
      {
        title: 'Glass Breakage During Handling',
        desc: 'Large glass panes are fragile and heavy. Breakage during transport, unloading, or installation is a common and costly event. Tools and materials cover addresses these losses.',
      },
      {
        title: 'Personal Injury from Glass',
        desc: 'Glass cuts can cause serious injuries to glaziers, clients, or bystanders during installation. Statutory and public liability cover protects against injury-related claims.',
      },
      {
        title: 'Double-Glazing Unit Failure',
        desc: 'A sealed double-glazing unit fails and fogs or loses its thermal performance. Workmanship defect or completed works cover responds to remediation claims.',
      },
    ],
    claimExamples: [
      {
        title: 'Large Glass Pane Breaks During Unloading',
        scenario: 'A glazier was unloading a large double-glazed unit from a delivery vehicle at a residential site. The panel slipped from its cradle and struck the concrete driveway, shattering completely. The unit was custom-sized for the opening and had a lead time of three weeks.',
        outcome: 'Tools and equipment cover paid NZ$3,800 for the replacement glass unit, with the project delay coordinated with the client at no further cost.',
        coverType: 'Tools & Equipment',
      },
      {
        title: 'Window Frame Installation Damages Surrounding Cladding',
        scenario: 'During a window replacement in a heritage villa, a glazier used an angle grinder to remove the old frame. The tool slipped and cut a section of the adjoining weatherboard cladding and sill, requiring a carpenter to complete repairs before the new window could be fitted.',
        outcome: 'Public liability claim of NZ$2,600 paid for carpentry repairs, sill replacement, and repainting of the affected facade section.',
        coverType: 'Public Liability',
      },
      {
        title: 'Commercial Glazing Unit Fails Thermal Inspection',
        scenario: 'Double-glazed units installed in a commercial office building were found to have seal failures causing internal condensation across multiple windows eight months after installation. The building manager required full replacement of all affected units.',
        outcome: 'Public liability and completed works cover responded to the NZ$18,500 claim for replacement units, installation, and associated scaffolding costs.',
        coverType: 'Public Liability',
      },
    ],
    faqs: [
      {
        q: 'What insurance do glaziers need?',
        a: 'NZ glaziers should carry public liability as a minimum. Tools and materials cover for glass in transit is also important. Statutory liability is recommended given the manual handling injury risk.',
      },
      {
        q: 'Does glazier insurance cover glass breakage?',
        a: 'Tools and equipment or materials-in-transit cover typically covers glass breakage during transport and handling. Public liability covers damage caused to third-party property during installation. Check your specific policy with your broker.',
      },
      {
        q: 'How much does glazier insurance cost?',
        a: 'Glazier insurance typically starts from around NZ$40–$60/month for public liability. A full package including tools and vehicle cover might cost NZ$120–$220/month depending on business size.',
      },
    ],
    recommendedCover: ['public-liability', 'tools-equipment', 'statutory-liability', 'commercial-vehicle'],
  },
  {
    slug: 'landscapers',
    name: 'Landscapers',
    icon: '🌿',
    heroImage: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1920&q=80',
    description:
      'Landscapers work with heavy machinery, underground services, and living materials that can generate complex liability claims. From retaining wall failures to underground service strikes, the risks of landscaping are greater than many clients appreciate. The right insurance protects you and your business.',
    keyFacts: [
      'Underground service strikes during earthworks are a frequent and costly landscaping claim',
      'Retaining walls over 1.5m require building consent under the Building Act',
      'Plant death or replacement claims can arise from poor installation advice',
      'Heavy machinery on residential properties carries significant property damage risk',
    ],
    introText: [
      'Landscaper insurance is a tailored package of policies protecting New Zealand landscapers, garden designers, and earthworks contractors from the financial consequences of underground service strikes, retaining wall failures, machinery damage to property, and plant warranty claims. Landscaping sits at the intersection of garden artistry and light civil construction, meaning the risk exposures are broader than many clients or tradies appreciate. A single earthworks operation that strikes a power or gas line can generate a claim for tens of thousands of dollars. Public liability for landscapers typically starts from around NZ$32–$50 per month.',
      'Landscapers who design and construct retaining walls, irrigation systems, or complex drainage are increasingly required to carry professional indemnity insurance, particularly for commercial projects. The Resource Management Act adds a further layer of obligation for earthworks near waterways, boundaries, or sensitive environments. Machinery damage to paths, driveways, and garden structures is a constant risk when operating bobcats, skid steers, and excavators in confined residential spaces. A comprehensive insurance package ensures every aspect of landscaping risk is addressed.',
    ],
    whyNeedIt: [
      'Striking an unmarked underground power, gas, or water service during earthworks can generate claims for service reinstatement, consequential damage, and utility company costs — often NZ$10,000 or more.',
      'Retaining walls that fail can damage neighbouring properties, driveways, and structures — and walls over 1.5m require building consent, with the builder liable for structural performance.',
      'Heavy machinery operating in residential gardens can damage driveways, paths, irrigation systems, and existing landscaping — public liability covers these third-party property claims.',
      'Plant death and replacement claims can arise when plants fail to establish, particularly on high-value landscaping projects where the client has specified premium species.',
    ],
    coverPackage: 'A comprehensive landscaper insurance package includes public liability ($1M–$2M), tools and equipment cover for machinery and hand tools, statutory liability, and commercial vehicle insurance.',
    costFrom: '~$32/month',
    costFactors: [
      'Earthworks and machinery use',
      'Retaining wall and structural work',
      'Annual turnover',
      'Number of employees',
    ],
    legalRequirements: [
      'Health and Safety at Work Act 2015 — duties for machinery operation, trenching, and manual handling',
      'Resource Management Act — earthworks near waterways, boundaries, or indigenous vegetation require resource consent',
      'Building Act 2004 — retaining walls over 1.5m require building consent and must comply with Building Code',
      'Consumer Guarantees Act — guarantees of acceptable quality apply to landscaping services and plant supply',
      'Local authority bylaws — many councils have specific rules around earthworks volumes and sediment control',
    ],
    risks: [
      {
        title: 'Underground Service Strike',
        desc: 'Excavation work hits a concealed power, gas, or water line. The resulting claim includes service reinstatement, consequential damage, and potential utility company costs.',
      },
      {
        title: 'Retaining Wall Failure',
        desc: 'A retaining structure fails due to design or construction error. Damage to neighbouring properties, vehicles, and gardens can be extensive.',
      },
      {
        title: 'Machinery Damage to Client Property',
        desc: 'A bobcat or excavator damages a driveway, path, or garden feature during a job. Public liability covers the repair or reinstatement cost.',
      },
    ],
    claimExamples: [
      {
        title: 'Excavator Strikes Unmarked Gas Main',
        scenario: 'A landscaper was excavating to install a new garden bed and retaining wall system in a residential property. The excavator bucket struck an unmarked private gas line running to an outbuilding. The gas company was called to isolate and reinstate the line, and the outbuilding was taken out of service for two days.',
        outcome: 'Public liability claim of NZ$11,400 paid for gas line reinstatement, loss of use costs, and garden reinstatement in the affected area.',
        coverType: 'Public Liability',
      },
      {
        title: 'Bobcat Damages New Concrete Driveway',
        scenario: 'During a garden makeover project, a landscaper tracked a bobcat across a section of newly laid concrete driveway to access the rear garden. The steel tracks left deep impressions in the curing surface, requiring the driveway section to be broken out and repoured.',
        outcome: 'Public liability claim of NZ$5,200 paid for driveway remediation and repouring of the affected section.',
        coverType: 'Public Liability',
      },
      {
        title: 'Retaining Wall Failure Damages Neighbours Garden',
        scenario: 'A landscaper constructed a timber retaining wall on a sloped section using treated posts. Eighteen months later, inadequate post depth and drainage allowed the wall to lean and partially collapse into the neighbouring garden, damaging fencing and a garden shed.',
        outcome: 'Public liability claim of NZ$8,900 paid for wall demolition and reconstruction, neighbour\'s fence replacement, and shed remediation.',
        coverType: 'Public Liability',
      },
    ],
    faqs: [
      {
        q: 'What insurance do landscapers need?',
        a: 'NZ landscapers should carry public liability as a minimum. Those doing earthworks or machinery work should also carry statutory liability. Tools cover for machinery and equipment is important for larger operations.',
      },
      {
        q: 'Does landscaper insurance cover underground service strikes?',
        a: 'Public liability covers third-party property damage from underground service strikes, including reinstatement costs and consequential losses. Always call Before-U-Dig before starting any excavation work.',
      },
      {
        q: 'How much does landscaper insurance cost?',
        a: 'Landscaper insurance typically starts from around NZ$32–$55/month for public liability. A full package including machinery and vehicle cover can cost NZ$100–$220/month depending on business scale.',
      },
    ],
    recommendedCover: ['public-liability', 'tools-equipment', 'statutory-liability', 'commercial-vehicle'],
  },
  {
    slug: 'drain-layers',
    name: 'Drain Layers',
    icon: '🚿',
    heroImage: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1920&q=80',
    description:
      'Drain layers are licensed under the Plumbers, Gasfitters, and Drainlayers Act 2006 and carry serious liability for stormwater, sewage, and drainage systems. A drainage failure can cause contamination and structural damage. Specialist drain layer insurance protects your licence and your business.',
    keyFacts: [
      'Drain laying requires a licence under the Plumbers, Gasfitters, and Drainlayers Act 2006',
      'Drainage failures can cause sewage contamination and significant structural damage',
      'Strikes on existing drainage and services are a constant excavation risk',
      'Resource Management Act obligations apply to all discharge near waterways',
    ],
    introText: [
      'Drain layer insurance is a specialist package of policies protecting New Zealand licensed drain layers from the financial consequences of drainage failures, underground service strikes, contamination events, and the professional liability that comes with certifying drainage installations. Drainage work underpins the function of every building and property it serves — a failed drain can cause sewage contamination, stormwater flooding, and significant structural damage to buildings and their foundations. Public liability for drain layers typically starts from around NZ$40–$60 per month, reflecting the serious nature of potential claims.',
      'Licensed drain layers operate under the Plumbers, Gasfitters, and Drainlayers Act 2006, and their work is inspected and approved by local authorities as part of the building consent process. This regulatory framework means that errors carry both civil liability and potential regulatory consequences. Excavation work for new drainage constantly risks striking existing water, gas, power, and communication services — and discharge from drain laying operations to stormwater systems or waterways can trigger Resource Management Act obligations. A comprehensive insurance programme addresses all of these exposures.',
    ],
    whyNeedIt: [
      'A failed sewage drain can cause contamination of soils, waterways, and neighbouring properties — remediation costs for a significant contamination event can reach tens of thousands of dollars.',
      'Excavation for new drainage constantly risks striking existing underground services — power, gas, water, and telecoms — and service reinstatement claims can be substantial.',
      'The Plumbers, Gasfitters, and Drainlayers Act 2006 requires licensing for all drain laying work, and most principal contractors require proof of current insurance before allowing drain layers on site.',
      'Structural drain failures that develop after completion can cause subsidence, building movement, and expensive remediation — public liability with completed works cover is essential.',
    ],
    coverPackage: 'A comprehensive drain layer insurance package includes public liability ($2M+), statutory liability, tools and equipment cover, and commercial vehicle insurance.',
    costFrom: '~$40/month',
    costFactors: [
      'Residential vs commercial drainage work',
      'Depth and complexity of excavation',
      'Annual turnover',
      'Number of employees',
    ],
    legalRequirements: [
      'Plumbers, Gasfitters, and Drainlayers Act 2006 — licensing mandatory for all drain laying work',
      'Resource Management Act — discharge to water, stormwater, or ground may require resource consent',
      'Health and Safety at Work Act 2015 — specific obligations for trench and excavation work',
      'Local authority trade waste and drainage bylaws — control discharges and connections to public systems',
      'Building Act 2004 — drainage work must comply with NZ Building Code G13 (foul water) and E1 (surface water)',
    ],
    risks: [
      {
        title: 'Sewage Contamination',
        desc: 'A failed or incorrectly connected drain causes sewage to escape into soils, landscaping, or a neighbouring property. Remediation claims can be large and complex.',
      },
      {
        title: 'Underground Service Strike',
        desc: 'Excavation for drainage hits a concealed power, gas, or water service. Reinstatement and consequential damage costs can be significant.',
      },
      {
        title: 'Structural Drain Failure',
        desc: 'A drain collapses or fails after completion, causing subsidence or building movement. Completed works cover responds to these long-tail claims.',
      },
    ],
    claimExamples: [
      {
        title: 'New Drain Incorrectly Connected to Stormwater System',
        scenario: 'A drain layer connected a new household sewer line to the stormwater system by mistake during a subdivision drainage project. The error was identified at the next council inspection, requiring full excavation and reconnection to the correct system.',
        outcome: 'Public liability claim of NZ$14,200 paid for excavation, pipe replacement, correct connection, and reinstatement of the affected section of landscaping.',
        coverType: 'Public Liability',
      },
      {
        title: 'Excavator Strikes Unmarked Water Main',
        scenario: 'During excavation to install stormwater drainage, a drain layer\'s excavator struck a council water main that had not been marked on the as-built drawings. Water flooded the trench and disrupted supply to twelve neighbouring properties.',
        outcome: 'Public liability claim of NZ$9,600 paid for emergency water main repairs, trench remediation, and council costs for emergency service to affected properties.',
        coverType: 'Public Liability',
      },
      {
        title: 'Drain Collapse Causes Garden Subsidence',
        scenario: 'A residential drain installed without adequate bedding material collapsed under vehicle loads eighteen months after completion. The resulting void caused subsidence in the driveway and damage to a section of garden path adjacent to the affected pipe run.',
        outcome: 'Public liability claim of NZ$7,800 paid for pipe replacement, trench reinstatement, driveway repair, and reinstatement of the subsided garden path.',
        coverType: 'Public Liability',
      },
    ],
    faqs: [
      {
        q: 'What insurance does a drain layer need?',
        a: 'NZ drain layers need public liability as a minimum, with statutory liability also recommended given the excavation and RMA risks. Tools cover for machinery and commercial vehicle insurance complete a solid package.',
      },
      {
        q: 'Does drain layer insurance cover contamination events?',
        a: 'Public liability covers third-party property damage and remediation costs from contamination arising from your work. Some policies have specific conditions around pollution — confirm the scope with your broker.',
      },
      {
        q: 'How much does drain layer insurance cost?',
        a: 'Drain layer insurance typically starts from around NZ$40–$60/month for public liability. A comprehensive package with tools and vehicle cover can cost NZ$130–$250/month depending on business size and work type.',
      },
    ],
    recommendedCover: ['public-liability', 'statutory-liability', 'tools-equipment', 'commercial-vehicle'],
  },
  {
    slug: 'scaffolders',
    name: 'Scaffolders',
    icon: '🏗️',
    heroImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1920&q=80',
    description:
      'Scaffolders erect and dismantle the temporary structures that keep construction sites safe — but scaffolding itself carries some of the most serious liability exposures in the trade sector. Collapse, falls, and tool drops can all cause catastrophic harm. Specialist scaffolding insurance is non-negotiable.',
    keyFacts: [
      'Scaffolding is regulated under HSWA and the WorkSafe NZ Approved Code of Practice',
      'Scaffold collapse or failure can cause catastrophic injury and property damage claims',
      'Statutory liability is critical given WorkSafe\'s active enforcement of scaffolding standards',
      'Commercial scaffold hire arrangements require specific insurance terms',
    ],
    introText: [
      'Scaffolding insurance is a specialist package of policies protecting New Zealand scaffolding contractors from the serious financial consequences of scaffold failure, height-related injuries, falling object incidents, and the regulatory liability that comes with one of construction\'s most closely scrutinised trades. WorkSafe NZ enforces scaffolding standards under the Health and Safety at Work Act 2015 and the Approved Code of Practice for Scaffolding, and prosecutions following scaffold-related incidents are well-documented. Public liability for scaffolders typically starts from around NZ$55–$90 per month, reflecting the elevated risk profile.',
      'The liability exposure for scaffolding contractors is unique because the scaffold they erect is relied upon by other trades for the duration of a project. If a scaffold erected by a scaffolding contractor fails while being used by a carpenter or roofer, the scaffolding contractor is exposed to significant liability claims — not just from the injured party, but potentially from the principal contractor as well. Statutory liability insurance is particularly critical for scaffolders, as WorkSafe investigations following height-related incidents almost always examine the scaffold installation and its compliance with current standards.',
    ],
    whyNeedIt: [
      'Scaffold collapse can cause catastrophic personal injury and property damage — claims arising from a structural scaffold failure can reach millions of dollars in serious cases.',
      'Tools and materials dropped from height by workers on your scaffold can injure people or damage property below — your public liability responds to those third-party claims.',
      'WorkSafe NZ actively prosecutes scaffolding non-compliance; statutory liability covers your legal defence costs if an incident triggers a WorkSafe investigation and prosecution.',
      'Principal contractors routinely require scaffolding subcontractors to carry NZ$2M–$10M public liability and statutory liability before scaffold can be erected on their projects.',
    ],
    coverPackage: 'A comprehensive scaffolders insurance package includes public liability ($2M–$5M), statutory liability, tools and equipment cover for scaffold components, and commercial vehicle insurance.',
    costFrom: '~$55/month',
    costFactors: [
      'Scale and height of scaffold systems erected',
      'Commercial vs residential projects',
      'Annual turnover',
      'Number of employees',
    ],
    legalRequirements: [
      'Health and Safety at Work Act 2015 — primary duty of care for all scaffolding erection and dismantling',
      'WorkSafe NZ Approved Code of Practice for Scaffolding — sets specific technical standards for all scaffold types',
      'Building Act 2004 — scaffold affecting public spaces may require building consent',
      'Health and Safety at Work (General Risk and Workplace Management) Regulations 2016 — specific provisions for working at heights',
      'Local authority bylaws — Auckland, Wellington, and Christchurch have specific rules for scaffold over public footpaths and roads',
    ],
    risks: [
      {
        title: 'Scaffold Collapse',
        desc: 'A scaffold failure causes injury to workers or damage to property. These events can generate catastrophic claims and trigger immediate WorkSafe investigation.',
      },
      {
        title: 'Falling Objects',
        desc: 'Tools, materials, or scaffold components fall from height and injure a person or damage property below. Public liability covers these third-party claims.',
      },
      {
        title: 'WorkSafe Prosecution',
        desc: 'Following a height-related incident on your scaffold, WorkSafe investigates and prosecutes for health and safety breaches. Statutory liability covers legal defence costs.',
      },
    ],
    claimExamples: [
      {
        title: 'Tool Drop From Scaffold Damages Vehicle Below',
        scenario: 'A worker using a scaffolding contractor\'s erected scaffold dropped a hammer from the third lift. The hammer landed on a parked car below, causing significant bonnet and windscreen damage. The scaffolding contractor was named in the subsequent claim as the party responsible for the scaffolding structure.',
        outcome: 'Public liability claim of NZ$6,400 paid for vehicle repair, with the scaffolding contractor\'s insurer managing the claim and recovery from the worker\'s employer.',
        coverType: 'Public Liability',
      },
      {
        title: 'Scaffold Inspection Finds Non-Compliant Installation',
        scenario: 'During a WorkSafe site visit following a separate incident, inspectors identified that scaffold erected by a subcontractor had incorrectly spaced transoms and missing base plates on a commercial building project. An improvement notice was issued and work was halted while the scaffold was rectified.',
        outcome: 'Statutory liability covered NZ$18,000 in legal costs during the WorkSafe investigation and compliance proceedings. The scaffolding contractor bore the cost of scaffold rectification.',
        coverType: 'Statutory Liability',
      },
      {
        title: 'Scaffold Damage to Heritage Building Facade',
        scenario: 'During erection of a scaffold system against a heritage-listed commercial building, a scaffold tube slipped and struck the brick facade, dislodging ornamental stonework from the parapet and damaging a section of window surrounds.',
        outcome: 'Public liability claim of NZ$12,300 paid for stonework restoration by a specialist heritage contractor and window surround reinstatement.',
        coverType: 'Public Liability',
      },
    ],
    faqs: [
      {
        q: 'What insurance do scaffolders need?',
        a: 'NZ scaffolders should carry public liability and statutory liability as a minimum — both are critical given the WorkSafe enforcement environment. Tools cover for scaffold components and commercial vehicle insurance complete the package.',
      },
      {
        q: 'Is scaffolding insurance expensive?',
        a: 'Scaffolding is a high-risk trade, so premiums are higher than most other trades. Public liability for a sole trader scaffolder typically starts from around NZ$55–$90/month. A full package can cost NZ$200–$400/month.',
      },
      {
        q: 'Who is liable if someone is injured on my scaffold?',
        a: 'Liability depends on the specific circumstances — the scaffolding contractor has responsibilities for the structure itself, while the worker\'s employer has responsibilities for safe use. Your public liability and statutory liability policies address both the civil claims and regulatory consequences.',
      },
    ],
    recommendedCover: ['public-liability', 'statutory-liability', 'tools-equipment', 'commercial-vehicle', 'income-protection'],
  },
]

export function getTradeBySlug(slug: string): TradeType | undefined {
  return tradeTypes.find((t) => t.slug === slug)
}
