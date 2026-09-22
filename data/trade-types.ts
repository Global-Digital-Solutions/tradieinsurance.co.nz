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
  /** Optional, used by the rewritten pages. `source` is an index into `sources`. */
  metaDescription?: string
  heroLead?: string
  stats?: { value: string; label: string; note: string; source?: number }[]
  legalCallout?: { title: string; body: string; source?: number }
  sources?: { label: string; url: string }[]
}

export const tradeTypes: TradeType[] = [
  {
    slug: 'builders',
    name: 'Builders',
    icon: '🏗️',
    heroImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1920&q=80',
    // Every factual claim on this page is sourced (see `sources`). Rewritten
    // September 2026 as the model for the other trade pages: no prices, no
    // invented claim amounts, and the legal points taken from MBIE.
    metaDescription:
      'Builders insurance in NZ: public liability, contract works, defective workmanship and what your disclosure statement must say about your cover. Talk to a specialist broker.',
    heroLead:
      'What New Zealand builders need to insure, what the Building Act asks you to disclose about that insurance, and where standard policies stop.',
    description:
      'Builders insurance for New Zealand builders: public liability, contract works, defective workmanship, tools and statutory liability, read against the disclosure, defect repair and warranty obligations in the Building Act.',
    stats: [
      { value: '$30,000', label: 'Disclosure threshold', note: 'Residential work at or above this (incl GST) needs a written contract and a disclosure statement that sets out your insurance.', source: 0 },
      { value: '12 months', label: 'Defect repair period', note: 'After completion you must fix defects, including in work done by your subcontractors.', source: 2 },
      { value: '10 years', label: 'Implied warranties', note: 'Implied warranties on residential building work run for up to 10 years, written contract or not.', source: 2 },
    ],
    introText: [
      'Builders insurance is not one policy. It is usually public liability for injury to other people and damage to their property, contract works cover for the job itself while it is being built, tools and vehicle cover, and statutory liability for the cost of defending a prosecution. Which of those you need, and at what limits, depends on whether you contract directly with homeowners, work as a labour-only subcontractor, or run a building company with staff.',
      'Residential building in New Zealand also puts obligations on the builder who signs with the client. For work of $30,000 or more, including GST, the contractor must give the homeowner a disclosure statement that sets out the insurance they hold, with the amount of cover and any relevant exclusions. The contractor must fix defects that appear in the first 12 months, including defects in subcontractors\' work, and implied warranties run for up to 10 years. Your insurance should be checked against those obligations, not just against the risk of a spark or a dropped beam.',
    ],
    whyNeedIt: [
      'Contracts require it, even where the law does not. Head contractors, developers and commercial clients routinely make public liability a condition of the contract, set a minimum limit, and ask for a certificate of currency before you go on site. Without cover you are shut out of that work, and your client is left exposed if something goes wrong.',
      'Your insurance goes on the disclosure statement. For residential work of $30,000 or more, the homeowner sees your cover amounts and relevant exclusions before the job starts. Knowingly giving false or misleading information, or leaving information out, can mean a fine of up to $50,000 for an individual or $150,000 for a company.',
      'You answer for your subbies\' defects. In the 12 months after completion, the builder who contracted with the homeowner has to fix defects, including in work done by subcontractors. Public liability generally pays for damage your work causes, not the cost of putting the faulty work itself right, so check how your policy treats defective workmanship.',
      'The job is at risk until handover. A fire, storm or theft on site can wipe out weeks of work and materials before the client takes the building over. Contract works insurance covers the works in progress; public liability does not cover your own job.',
    ],
    legalCallout: {
      title: 'Building Act: what you must disclose',
      body: 'For residential building work of $30,000 or more (including GST), the building contractor must give the homeowner a disclosure statement. It must include the insurance policies the contractor has, or intends to have, for the work, with the amount of cover and any relevant exclusions, and any guarantees or warranties offered. This duty sits with the contractor who signs with the homeowner, not with subcontractors engaged by that contractor.',
      source: 0,
    },
    coverPackage:
      'For a builder contracting directly with homeowners: public liability at a limit that meets your contracts, a defective workmanship extension that responds to subcontractors\' work, contract works cover where the contract makes the works your responsibility, statutory liability, and cover for tools and vehicles. Labour-only subcontractors usually need less, but should check what the head contractor\'s policy does and does not extend to them.',
    costFrom: '',
    costFactors: [
      'Annual turnover and wages',
      'Residential, commercial or both',
      'Use of subcontractors',
      'Public liability limit',
      'Value of contract works',
      'Claims history',
    ],
    legalRequirements: [
      'Building Act 2004: residential building work of $30,000 or more (incl GST) must have a written contract, and the contractor must provide a disclosure statement and consumer checklist.',
      'Building Act 2004: implied warranties apply to residential building work for up to 10 years, whether the contract is written or verbal.',
      'Building Act 2004: a 12-month defect repair period runs from completion, and covers defects in subcontractors\' work.',
      'Restricted building work (primary structure, weathertightness and fire safety design) must be carried out or supervised by a Licensed Building Practitioner, as it has been since 1 March 2012.',
      'Health and Safety at Work Act 2015: you owe a duty to workers and others on and around your site. Insurance against fines under the Act is unlawful (section 29).',
      'Resource Management Act 1991: earthworks, sediment and discharges from site can be prosecuted. Fines imposed after 20 August 2025 cannot be insured.',
    ],
    risks: [
      {
        title: 'Defects in subcontracted work',
        desc: 'A subbie\'s work fails after handover and the homeowner looks to you, because your name is on the contract.',
      },
      {
        title: 'Damage to the works before handover',
        desc: 'Fire, storm or theft damages the partly built job and materials on site. Contract works cover is designed for this.',
      },
      {
        title: 'Damage to neighbouring property',
        desc: 'Excavation, demolition or hot work damages a neighbour\'s property or buried services. Public liability responds, subject to its terms.',
      },
    ],
    claimExamples: [
      {
        title: 'A subbie\'s flashing leaks after handover',
        scenario: 'Eight months after a renovation, the homeowner reports water coming in around a new window. The flashing was installed by a subcontractor, but the homeowner\'s contract is with the builder, and it is inside the 12-month defect repair period.',
        outcome: 'Public liability may pay for resulting damage to linings and contents. Redoing the flashing itself is usually excluded unless the policy has a defective workmanship extension that responds to subcontractors\' work.',
        coverType: 'Public liability and defective workmanship',
      },
      {
        title: 'A storm hits an open frame',
        scenario: 'A new build is framed and wrapped but not yet clad when a storm tears off the building wrap and soaks the framing and the materials stacked on site.',
        outcome: 'This is what contract works insurance is for: loss of or damage to the works and materials on site before handover. Whether the builder or the owner insures the works is set by the contract.',
        coverType: 'Contract works',
      },
      {
        title: 'A nail through a concealed cable',
        scenario: 'Fixing framing during an alteration, a builder drives a nail through a cable hidden in the wall. The short circuit starts a small fire in the cavity.',
        outcome: 'Public liability generally responds to damage to the client\'s property caused by your work, such as fire and smoke damage to the wall and contents, subject to the excess and the policy terms.',
        coverType: 'Public liability',
      },
    ],
    faqs: [
      {
        q: 'Do builders legally need insurance in NZ?',
        a: 'Not by law, but in practice you need it to get the work. Head contractors, developers and commercial clients routinely make public liability a condition of the contract and ask for proof of cover before you start. The Building Act adds a disclosure duty: for residential work of $30,000 or more, the contractor must tell the homeowner what insurance they hold, including the amount of cover and relevant exclusions. Cover protects your client as well as you, because it means a claim can actually be paid.',
      },
      {
        q: 'Does public liability cover defective workmanship?',
        a: 'Generally not the cost of fixing the faulty work itself. Public liability responds to injury to other people and damage to their property caused by your business. Some insurers offer a defective workmanship extension, often with its own sub-limit, and wordings differ on work done by subcontractors. Ask to see how your wording treats both.',
      },
      {
        q: 'What is contract works insurance and who arranges it?',
        a: 'Contract works insurance covers the building work in progress and the materials on site against loss or damage, such as fire, storm, theft and vandalism, until handover. Whether the builder or the owner arranges it is set by the insurance clause in the building contract, so check that clause before work starts.',
      },
      {
        q: 'Does being a Licensed Building Practitioner mean I am covered?',
        a: 'No. An LBP licence shows you are competent to carry out or supervise restricted building work. It is not insurance, and it does not pay for damage, defects or legal costs. Your insurance position is what goes on the disclosure statement.',
      },
      {
        q: 'What limit of public liability should a builder have?',
        a: 'Start with your contracts. Head contractors and commercial clients commonly set a minimum limit, and residential clients will see your limit on the disclosure statement. Beyond that, the right limit depends on the value of the properties you work on or next to, and the worst damage your work could realistically cause. A broker can set a limit against those.',
      },
      {
        q: 'Is ACC enough for a builder?',
        a: 'ACC covers injury to people, including you, but it does not pay for damage to property, the cost of defending a claim, or loss of the works you are building. It also does not cover income lost to illness.',
      },
    ],
    sources: [
      { label: 'MBIE Building Performance: Consumer protection, disclosure and checklist', url: 'https://www.building.govt.nz/projects-and-consents/why-contracts-are-valuable/consumer-protection-disclosure-and-checklist' },
      { label: 'MBIE Building Performance: Contracts for your building project', url: 'https://www.building.govt.nz/projects-and-consents/why-contracts-are-valuable/contracts-for-your-building-project' },
      { label: 'MBIE Building Performance: Implied warranties and defects', url: 'https://www.building.govt.nz/projects-and-consents/why-contracts-are-valuable/implied-warranties-and-defects' },
      { label: 'Licensed Building Practitioners: LBP scheme overview', url: 'https://www.lbp.govt.nz/about-us/about-the-lbp-scheme/overview/' },
    ],
    recommendedCover: ['public-liability', 'statutory-liability', 'tools-equipment', 'commercial-vehicle'],
  },
  {
    slug: 'plumbers',
    name: 'Plumbers',
    icon: '🔧',
    heroImage: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=1920&q=80',
    metaDescription:
      'Plumbers insurance in NZ: public liability, faulty workmanship limits, hot work conditions and the insurance condition on PGDB self-certification.',
    heroLead:
      'Insurance for plumbers, read against the rules for sanitary plumbing: Board licensing, the self-certification endorsement, homeowner disclosure and where a liability policy stops.',
    description:
      'Plumbers insurance for New Zealand plumbers: public liability, statutory liability, tools and vehicles, read against PGDB licensing, the self-certification endorsement and the Building Act disclosure and warranty rules.',
    stats: [
      { value: '7 Sep 2026', label: 'Self-certification starts', note: 'Endorsed certifying plumbers can self-certify eligible consented work. Appropriate insurance is a condition of the endorsement.', source: 0 },
      { value: '$30,000', label: 'Disclosure threshold', note: 'A plumber contracting directly with a homeowner on work of this value or more (incl GST) must disclose their insurance.', source: 5 },
      { value: '$10,000', label: 'Maximum Board fine', note: 'The most the Board can fine a registered person for a disciplinary offence, on top of costs.', source: 4 },
    ],
    introText: [
      'Sanitary plumbing is regulated because of the risk it poses to public health and safety. Fixing or unfixing any pipe that supplies water, or any trap, waste, soil, vent or overflow pipe, is outside what a homeowner may do, and the Plumbers, Gasfitters, and Drainlayers Board registers and licenses the people who can. Insurance for a plumbing business usually combines public liability for injury to others and damage to their property, statutory liability for legal costs arising from unintentional breaches of statute, and cover for tools, stock and vehicles.',
      'Two sets of rules in New Zealand bring insurance into the plumber\'s paperwork. From 7 September 2026, certifying plumbers can apply to the Board for an endorsement to self-certify eligible consented work, and one condition of that endorsement is holding appropriate insurance that is sufficient to cover the work being certified. Separately, a plumber dealing directly with a homeowner is a building contractor under the Building Act, so on work of $30,000 or more (including GST) the homeowner receives a disclosure statement setting out the plumber\'s insurance, with the amount of cover and any relevant exclusions.',
    ],
    whyNeedIt: [
      'Contracts require it, even where the law does not. No law makes a plumber hold public liability insurance, but head contractors, builders and commercial clients routinely make it a condition of the contract, set a minimum limit, and ask for a certificate of currency before work starts. Without cover a business is shut out of that work, and the client is left exposed if something goes wrong.',
      'Self-certification carries an insurance condition. The Board\'s 2026 Notice makes appropriate insurance, sufficient to cover the work being certified, a minimum standard for the endorsement. The Board does not prescribe an insurer, a policy type, a wording or a minimum amount of cover, and it asks applicants to confirm with their insurer that cover suits both carrying out and certifying the work.',
      'A leak costs more than the joint. Public liability is built to respond to damage a plumbing fault causes to other property, such as ceilings, floors and contents. Wordings commonly exclude the cost of redoing the work itself: NZI\'s Broadform Liability wording, for example, excludes the cost of repairing or rectifying work done by or for the insured, while keeping cover for resulting damage to other property.',
      'Brazing on site is hot work. Some liability wordings exclude hot work away from the insured\'s own premises unless set conditions are met, such as a clearance of at least 10 metres from combustible material, extinguishers kept beside the work, and an examination of the area straight after the work and again an hour later.',
    ],
    legalCallout: {
      title: 'Self-certification: the insurance condition',
      body: 'From 7 September 2026, a certifying plumber can certify eligible sanitary plumbing only with a current endorsement from the Plumbers, Gasfitters, and Drainlayers Board, and only for work covered by a building consent that allows self-certification. To apply, the Board\'s Notice requires the plumber to be currently licensed as a Certifying Plumber, to hold appropriate insurance that is sufficient to cover the work they will be certifying, to have documented business systems and quality assurance processes, and to complete the Board\'s self-certification training.',
      source: 1,
    },
    coverPackage:
      'For a plumbing business dealing with homeowners and builders: public liability at a limit that meets contract requirements, with any hot work conditions read before brazing on site; statutory liability; and cover for tools, stock and vehicles. For endorsed self-certifying plumbers, the Board places the onus on the practitioner to take reasonable steps to ensure insurance is appropriate for the work they certify, including employed plumbers relying on their employer\'s policy.',
    costFrom: '',
    costFactors: [
      'Annual turnover and wages',
      'Residential, commercial or new-build work',
      'Self-certification endorsement and volume of certified work',
      'Hot work such as brazing on site',
      'Public liability limit and exclusions',
      'Claims history',
    ],
    legalRequirements: [
      'Plumbers, Gasfitters, and Drainlayers Act 2006: sanitary plumbing is regulated work. A certifying plumber is responsible for testing, verifying and supervising the work of plumbers, restricted plumbers, trainees and exempted persons.',
      'Plumbers, Gasfitters, and Drainlayers Act 2006: doing work a practitioner is not authorised to do, or negligent or non-compliant work, is a disciplinary offence. The Board can suspend or cancel a licence, or impose a fine of up to $10,000 plus costs.',
      'Self-certification Notice 2026: from 7 September 2026, an endorsed self-certifying plumber must hold appropriate insurance sufficient to cover the work they certify, inspect work in person, and issue a certificate of compliance for all work they certify.',
      'Building Act 2004: where building consent is required, sanitary plumbing is inspected by the building consent authority or, for eligible work, self-certified by an endorsed plumber, who must issue a certificate of compliance and supporting documents within 10 working days.',
      'Building Act 2004: a plumber dealing directly with a homeowner is a building contractor. For work of $30,000 or more (incl GST), a disclosure statement must set out the insurance held, with the amount of cover and relevant exclusions. Residential building work carries implied warranties for up to 10 years, and defects that emerge within 12 months must be fixed.',
      'Building Act 2004: automatic backflow preventers connected to a potable water supply are a specified system. The building owner must have them tested, maintained and reported on under the compliance schedule, including inspections by independent qualified persons (IQPs), for the annual building warrant of fitness.',
    ],
    risks: [
      {
        title: 'Water damage from a failed joint',
        desc: 'A fitting lets go after the plumber has left, and water runs through ceilings, floors and contents before anyone notices.',
      },
      {
        title: 'Fire from hot work',
        desc: 'Brazing inside a wall or ceiling space ignites building paper, framing or insulation. Hot work conditions in the liability wording decide whether cover applies.',
      },
      {
        title: 'Certifying consented work',
        desc: 'An endorsed plumber certifies work that later turns out not to comply. The certificate of compliance is the plumber\'s, and the Board requires insurance appropriate to that certification.',
      },
    ],
    claimExamples: [
      {
        title: 'A basin joint separates overnight',
        scenario: 'A plumber replaces a vanity in an upstairs bathroom. Two days later a compression joint under the basin separates and water runs through the floor into the lounge ceiling below.',
        outcome: 'Public liability may respond to the damage to the ceiling, carpet and contents, subject to the excess and the policy terms. The cost of remaking the joint itself is usually excluded as faulty workmanship.',
        coverType: 'Public liability',
      },
      {
        title: 'Brazing sets fire to building paper',
        scenario: 'Brazing a copper line inside an opened-up wall, a plumber ignites the building paper behind the lining. The fire spreads into the framing before it is put out.',
        outcome: 'Public liability generally responds to fire damage to the client\'s property, provided any hot work conditions in the wording were met. Where a wording excludes hot work away from the insured\'s premises unless conditions such as clearance, extinguishers and a later check of the area are followed, a breach can leave the claim outside cover.',
        coverType: 'Public liability',
      },
      {
        title: 'A self-certified bathroom leaks inside the wall',
        scenario: 'An endorsed plumber self-certifies the sanitary plumbing in a new bathroom. After the code compliance certificate is issued, a leak inside the wall is traced to a joint that did not comply, and the homeowner also complains to the Board.',
        outcome: 'Public liability may respond to resulting damage to linings and floors. Remaking the non-compliant joint is usually excluded unless the policy says otherwise, and any fine the Board imposes is excluded by standard liability wordings, which exclude fines and penalties.',
        coverType: 'Public liability and statutory liability',
      },
    ],
    faqs: [
      {
        q: 'Do plumbers legally need insurance in NZ?',
        a: 'No law requires a plumber to hold public liability insurance. Insurance enters the picture in two places: the self-certification endorsement, which the Board grants only to certifying plumbers who hold appropriate insurance for the work they certify, and the Building Act disclosure statement, which shows a homeowner the plumber\'s insurance on work of $30,000 or more. Head contractors and commercial clients also routinely make public liability a condition of the contract.',
      },
      {
        q: 'What insurance does the Board require for self-certification?',
        a: 'Insurance that is appropriate for the work the plumber intends to carry out and self-certify. The Board does not prescribe a particular insurer, type of policy, wording or minimum amount of cover. An employed plumber does not necessarily need their own policy, but remains personally responsible for making sure the insurance in place covers the work they certify.',
      },
      {
        q: 'Does public liability cover faulty plumbing work?',
        a: 'Generally not the cost of redoing the faulty work itself. Public liability responds to injury to other people and damage to their property caused by the business, so a leak that damages a ceiling is a typical public liability claim while remaking the joint is typically excluded. Wordings differ, and some offer optional extensions.',
      },
      {
        q: 'Who tests backflow preventers?',
        a: 'Where an automatic backflow preventer is on a building\'s compliance schedule, it is tested and reported on for the annual building warrant of fitness, including inspections by an independent qualified person (IQP). Errors in an inspection report can fall outside public liability, which in wordings such as NZI\'s excludes errors or omissions in service or advice given.',
      },
      {
        q: 'Is ACC enough for a plumber?',
        a: 'ACC is a no-fault scheme for people injured in an accident, and it does not cover illness. It is not a substitute for public liability, which responds to damage to other people\'s property, or for cover for tools and vehicles.',
      },
    ],
    sources: [
      { label: 'Plumbers, Gasfitters, and Drainlayers Board: Self-certification', url: 'https://www.pgdb.co.nz/manage_your_licence/self_certification/' },
      { label: 'PGDB: Self-certification by Plumbers and Drainlayers Notice 2026', url: 'https://www.pgdb.co.nz/media/ogua55un/plumbers-gasfitters-and-drainlayers-self-certification-by-plumbers-and-drainlayers-notice-2026.pdf' },
      { label: 'PGDB: Self-certification webinar questions and answers, 8 September 2026', url: 'https://www.pgdb.co.nz/media/zd4o4uhr/self-certification-webinar-08092026-a-and-as.pdf' },
      { label: 'Plumbers, Gasfitters, and Drainlayers Board: Advice for consumers', url: 'https://www.pgdb.co.nz/advice_for_consumers/' },
      { label: 'Plumbers, Gasfitters, and Drainlayers Board: Disciplinary hearings', url: 'https://www.pgdb.co.nz/complaints_and_disciplinary_processes/disciplinary_processes/' },
      { label: 'MBIE Building Performance: Consumer protection, disclosure and checklist', url: 'https://www.building.govt.nz/projects-and-consents/why-contracts-are-valuable/consumer-protection-disclosure-and-checklist' },
      { label: 'MBIE Building Performance: Implied warranties and defects', url: 'https://www.building.govt.nz/projects-and-consents/why-contracts-are-valuable/implied-warranties-and-defects' },
      { label: 'MBIE Building Performance: Self-certification for plumbing and drainlaying, homeowners and consumers', url: 'https://www.building.govt.nz/projects-and-consents/self-certification-schemes/plumbers-and-drainlayers-scheme/homeowners-and-consumers' },
      { label: 'MBIE Building Performance: Specified systems and compliance schedules', url: 'https://www.building.govt.nz/managing-buildings/managing-your-bwof/specified-systems-and-compliance-schedules' },
      { label: 'NZI Liability Broadform policy wording (NZ5060/10, March 2018)', url: 'https://www.nzi.co.nz/content/dam/insurance-brands-nz/nzi/nz/en/documents/nzi/liability/nzi-liability-broadform-pw-nz5060-10-0318.pdf' },
      { label: 'NZI LiabilityOne policy document (NZ7397/1)', url: 'https://www.nzi.co.nz/content/dam/insurance-brands-nz/nzi/nz/en/documents/nzi/liability/nz-liability-one-nz7397-1-0123.pdf' },
      { label: 'ACC: What we cover', url: 'https://www.acc.co.nz/im-injured/what-we-cover/' },
    ],
    recommendedCover: ['public-liability', 'statutory-liability', 'tools-equipment', 'commercial-vehicle'],
  },
  {
    slug: 'painters',
    name: 'Painters',
    icon: '🎨',
    heroImage: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1920&q=80',
    metaDescription:
      'Painters insurance in NZ: public liability, lead paint and asbestos rules, working at height, blow torch work, and where standard liability cover stops.',
    heroLead:
      'What painters and decorators insure, which lead paint, asbestos and working at height rules shape the job, and where standard liability policies stop.',
    description:
      'Painters insurance for New Zealand painters and decorators: public liability, statutory liability, tools and vehicles, read against WorkSafe and Health New Zealand guidance on lead-based paint, asbestos and working at height.',
    stats: [
      { value: '1980s', label: 'Presume lead paint', note: 'WorkSafe advises presuming that a building built in the 1980s or earlier has been painted with lead-based paint.', source: 0 },
      { value: '1 Jan 2000', label: 'Asbestos cut-off', note: 'Buildings built before this date are likely to contain asbestos. Soffits, wall linings and textured ceilings are on WorkSafe\'s list for painters.', source: 1 },
      { value: '350kPa', label: 'Water blaster limit', note: 'The Asbestos Regulations prohibit water blasters above this pressure on asbestos, apart from narrow exceptions.', source: 1 },
    ],
    introText: [
      'Painters insurance is usually a small set of covers: public liability for injury to other people and damage to their property, statutory liability for the cost of defending a prosecution, and cover for tools, ladders, spray gear and the work vehicle. The right mix depends on whether the business paints new builds as a subcontractor, repaints occupied homes for private clients, or holds commercial maintenance contracts with a crew.',
      'Painting is not one of the seven Licensed Building Practitioner classes, so most of the legal weight on a New Zealand painter comes from health and safety law. Much repaint work is on older housing, and WorkSafe advises presuming that a building built in the 1980s or earlier has lead-based paint, while buildings built before 1 January 2000 are likely to contain asbestos. Surface preparation on those buildings, work at height and paint stripping with heat each carry their own rules, and each is treated in its own way in a liability wording.',
    ],
    whyNeedIt: [
      'Contracts require it, even where the law does not. Head contractors, property managers and commercial clients routinely make public liability a condition of the contract, set a minimum limit, and ask for a certificate of currency before work starts. Without cover a painter is shut out of that work, and the client is left exposed if something goes wrong.',
      'Lead dust travels. Health New Zealand guidance on removing lead-based paint covers catching debris on groundsheets, keeping windows and doors shut on exterior jobs and stopping flakes spreading to other properties. Contaminating a client\'s home or a neighbour\'s section is a third-party property claim, and a wording such as Vero\'s excludes pollution unless it comes from an identifiable, sudden and accidental release.',
      'Asbestos can be excluded outright. WorkSafe treats cleaning or preparing an asbestos-containing surface for repainting as asbestos-related work with its own controls. Vero\'s published Combined Broadform wording excludes claims arising from asbestos in both its broadform liability and statutory liability sections.',
      'Blow torch work comes with conditions. Stripping paint with a blow torch adds a fire risk, and Health New Zealand notes it also produces lead fumes. Where a wording covers work with a naked flame away from the insured\'s premises, that cover can depend on set precautions, such as clearing combustibles, keeping an extinguisher at hand and checking the area half an hour after work stops.',
    ],
    legalCallout: {
      title: 'Asbestos: the rules for preparing old surfaces',
      body: 'Buildings built before 1 January 2000 are likely to contain asbestos-containing materials, and WorkSafe lists wall linings, window flashings, soffits, textured ceilings and sprayed coatings as places painters may find it. Cleaning or preparing an asbestos-containing surface for repainting is asbestos-related work: it does not need a removal licence, but it does need the right equipment, training and controls. The Asbestos Regulations prohibit using water blasters and pressure washers above 350kPa (with narrow exceptions), compressed air, brooms and domestic vacuum cleaners on asbestos.',
      source: 1,
    },
    coverPackage:
      'For a painter working in occupied homes: public liability at a limit that meets client and head contractor requirements, statutory liability, and cover for tools, ladders, spray equipment and the work vehicle. For businesses that strip old paint or work on pre-2000 buildings, the pollution and asbestos exclusions, any conditions on naked-flame work, and any paints and cladding products memorandum (which, in Vero\'s wording, removes cover for damage to a surface the insured\'s supplied product is applied to) are the parts of the wording that bear most directly on the work.',
    costFrom: '',
    costFactors: [
      'Annual turnover and wages',
      'Residential repaints, new builds or commercial work',
      'Share of work on pre-2000 buildings',
      'Spray application and paint stripping methods',
      'Work at height and scaffold use',
      'Public liability limit',
    ],
    legalRequirements: [
      'Health and Safety at Work Act 2015: fall risks must be managed from any height. WorkSafe notes there is no minimum height threshold in New Zealand, and names painters among the businesses that regularly access roofs and high points.',
      'Construction work with a risk of falling 5 metres or more must be notified to WorkSafe at least 24 hours before it starts. Exclusions include work on a residential building up to and including two full storeys.',
      'Health and Safety at Work (Asbestos) Regulations 2016: tradespeople who work with or near asbestos-containing materials must follow a prescribed risk management process, and must not use water blasters, compressed air, brooms or domestic vacuum cleaners on asbestos.',
      'Asbestos removal: up to and including 10m² of non-friable asbestos over the whole project can be removed without a licence. Larger amounts of non-friable asbestos need at least a Class B licence, and any friable asbestos needs a Class A licence.',
      'Lead-based paint: WorkSafe publishes guidelines with the Ministry of Health on managing and removing lead-based paint. Health New Zealand says abrasive blasting is not to be used on properties and structures built or painted before 1970.',
      'Health and Safety at Work Act 2015, section 29: insurance cannot be used to pay fines or infringement fees under the Act, although it can be used for reparation a court orders.',
    ],
    risks: [
      {
        title: 'Lead dust on a client\'s property',
        desc: 'Sanding, scraping or water blasting old paint spreads lead dust and flakes through a home or onto a neighbour\'s section. Whether clean-up is covered turns on the pollution wording.',
      },
      {
        title: 'Disturbing hidden asbestos',
        desc: 'A textured ceiling or old soffit being prepared for paint turns out to contain asbestos. Wordings such as Vero\'s exclude claims arising from asbestos.',
      },
      {
        title: 'Falls and dropped objects',
        desc: 'A fall from a ladder or scaffold, or a tin dropped onto a car below. ACC covers injury; public liability is designed for damage to other people\'s property.',
      },
    ],
    claimExamples: [
      {
        title: 'Overspray across the street',
        scenario: 'Spraying the exterior of a house on a breezy afternoon, a painter\'s overspray drifts onto cars parked on the street and a neighbour\'s glass balustrade.',
        outcome: 'Public liability generally responds to damage to other people\'s property caused by the business, subject to the excess and the policy terms.',
        coverType: 'Public liability',
      },
      {
        title: 'A blow torch and old building paper',
        scenario: 'Stripping paint from a villa\'s weatherboards with a blow torch, a painter ignites old building paper behind the boards. The fire is put out, but the wall and part of the room behind are damaged.',
        outcome: 'Public liability may respond to the fire damage to the client\'s house. Where the wording covers naked-flame work away from the insured\'s premises only if set precautions were followed, the claim can turn on whether they were.',
        coverType: 'Public liability',
      },
      {
        title: 'Paint flakes in the neighbour\'s garden',
        scenario: 'A painter water blasts a 1950s house before repainting. Flakes of old paint land across the neighbour\'s lawn and vegetable garden, and the neighbour asks for the soil to be tested and cleaned up.',
        outcome: 'This is a third-party property claim, but whether public liability responds depends on the pollution wording. A wording such as Vero\'s excludes pollutants unless the release is identifiable, sudden, accidental and unexpected, and some policies carry a separate clean-up costs exclusion.',
        coverType: 'Public liability',
      },
    ],
    faqs: [
      {
        q: 'Do painters legally need insurance in NZ?',
        a: 'Public liability insurance is generally not a legal requirement for a painting business. In practice, construction companies, head contractors, property managers and commercial clients routinely require it before work starts, often with a minimum limit and a certificate of currency. The legal duties that do apply to painters come mostly from health and safety law, including the rules on asbestos and working at height.',
      },
      {
        q: 'Is there a licence for painters?',
        a: 'Painting is not one of the seven Licensed Building Practitioner classes (Design, Site, Carpentry, Roofing, External Plastering, Brick and Blocklaying, and Foundations). One point to watch: on residential buildings, waterproof coatings to solid walls and roofs exposed to airborne moisture are listed as restricted building work, which must be carried out or supervised by an appropriately licensed LBP.',
      },
      {
        q: 'Does public liability cover damage to the surface being painted?',
        a: 'Generally not the cost of redoing the work itself. Liability wordings exclude the cost of correcting the insured\'s own work, and Vero\'s wording has a paints and cladding products memorandum that, where it applies, removes cover for damage to any surface the insured\'s supplied product is applied to. Damage to other property, such as carpet, furniture or a neighbour\'s car, is what public liability is designed for.',
      },
      {
        q: 'Are lead paint and asbestos claims covered?',
        a: 'They are treated separately. Vero\'s published Combined Broadform wording, for example, excludes any claim arising from asbestos in its liability and statutory liability sections, and excludes pollution unless it comes from an identifiable, sudden, accidental and unexpected release. Whether lead dust from sanding meets that test depends on the facts and the wording.',
      },
      {
        q: 'What does statutory liability do for a painter?',
        a: 'Statutory liability pays fines under an Act and defence costs arising from a prosecution, subject to its exclusions and not where the breach was intentional. Fines and infringement fees under the Health and Safety at Work Act 2015 cannot legally be insured, so for a WorkSafe prosecution the cover is mainly defence costs.',
      },
      {
        q: 'Is ACC enough for a painter?',
        a: 'ACC covers people injured in accidents, including a self-employed painter, and weekly compensation for the self-employed is usually up to 80% of declared earnings. It does not cover illness or sickness, and it is an injury scheme: damage to other people\'s property and the cost of defending a claim sit outside it.',
      },
    ],
    sources: [
      { label: 'WorkSafe: Managing lead-based paint', url: 'https://www.worksafe.govt.nz/topic-and-industry/hazardous-substances/guidance/substances/managing-lead-based-paint/' },
      { label: 'WorkSafe: Working with or near asbestos (guidance for tradespeople)', url: 'https://www.worksafe.govt.nz/topic-and-industry/asbestos/asbestos-information-for-tradespeople/working-with-or-near-asbestos/' },
      { label: 'WorkSafe: Asbestos licensing overview', url: 'https://www.worksafe.govt.nz/topic-and-industry/asbestos/licensing/overview/' },
      { label: 'Health New Zealand: Lead-based paint', url: 'https://www.healthnz.govt.nz/health-topics/keeping-healthy/healthy-homes-environments/hazardous-substances/lead/lead-based-paint' },
      { label: 'WorkSafe: Working at height in New Zealand', url: 'https://www.worksafe.govt.nz/topic-and-industry/working-at-height/working-at-height-in-nz/' },
      { label: 'WorkSafe: Particular hazardous work (notifiable works)', url: 'https://www.worksafe.govt.nz/notifications/report-scheduled-or-completed-work/hazardous-work/' },
      { label: 'WorkSafe: Introduction to the Health and Safety at Work Act 2015', url: 'https://www.worksafe.govt.nz/managing-health-and-safety/getting-started/introduction-hswa-special-guide/' },
      { label: 'Licensed Building Practitioners: Licensing classes', url: 'https://www.lbp.govt.nz/become-an-lbp/licensing-classes/' },
      { label: 'MBIE Building Performance: Restricted building work', url: 'https://www.building.govt.nz/projects-and-consents/planning-a-successful-build/scope-and-design/choosing-the-right-people-for-your-type-of-building-work/use-licensed-professionals-for-restricted-building-work/restricted-building-work' },
      { label: 'Vero: Combined Broadform, Employers and Statutory Liability policy wording', url: 'https://www.vero.co.nz/documents/business/vero-combined-broadform-liability-07-24.pdf' },
      { label: 'ACC: Weekly compensation for self-employed', url: 'https://www.acc.co.nz/im-injured/financial-support/weekly-compensation/weekly-compensation-for-self-employed' },
    ],
    recommendedCover: ['public-liability', 'statutory-liability', 'tools-equipment', 'commercial-vehicle'],
  },
  {
    slug: 'carpenters-woodworkers',
    name: 'Carpenters & Woodworkers',
    icon: '🪵',
    heroImage: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=1920&q=80',
    metaDescription:
      'Carpenters and woodworkers insurance in NZ: public and products liability, defective work and tools, against LBP licensing and Building Act warranties.',
    heroLead:
      'What carpenters, joiners and woodworkers insure, how restricted building work and the Building Act warranties shape that cover, and where a standard liability policy stops.',
    description:
      'Insurance for carpenters, joiners and woodworkers: public and products liability, defective workmanship, tools and workshop cover, and statutory liability, set against LBP licensing, restricted building work and the implied warranties on residential building work.',
    stats: [
      { value: '1 March 2012', label: 'Restricted building work', note: 'Since this date, critical structural and weathertightness work on homes can only be carried out or supervised by an LBP.', source: 0 },
      { value: '12 months', label: 'Defect repair period', note: 'Defects that emerge within 12 months of completion must be fixed by the builder the homeowner contracted with.', source: 2 },
      { value: '10 years', label: 'Implied warranties', note: 'Implied warranties on residential building work run for up to 10 years, whether the contract is written or verbal.', source: 2 },
    ],
    introText: [
      'Carpentry covers a wide spread of work: framing and fit-out on building sites, decks and pergolas for homeowners, and joinery, cabinetry and furniture made in a workshop and installed or delivered later. The insurance follows the work. A site carpenter is mainly exposed to claims for damage and injury arising from the job, while a joinery or furniture workshop also carries risk from the products it sells once they leave the door, and from fire or theft in the workshop itself.',
      'Much residential carpentry is also regulated. Work on the primary structure of a house and on its weathertightness is restricted building work, which only a Licensed Building Practitioner in the appropriate class can carry out or supervise, and Carpentry is one of the seven LBP licence classes. Residential building work in New Zealand carries implied warranties for up to 10 years, and a contractor who signs directly with a homeowner must disclose the insurance they hold for work of $30,000 or more, or whenever the homeowner asks.',
    ],
    whyNeedIt: [
      'Contracts require it, even where the law does not. No law generally requires a carpenter to hold public liability insurance, but construction companies, head contractors and commercial clients routinely make it a condition of the contract before work starts, often with a minimum limit and a certificate of currency.',
      'The faulty work and the damage it causes are treated differently. Published liability wordings exclude the cost of performing, completing or correcting the work itself, while still responding to resulting damage to other property the carpenter was not working on. A defective workmanship extension, where one is offered, narrows that gap and carries its own limit.',
      'Workshop products leave the building. Furniture, joinery and cabinetry can cause damage after delivery. Broadform liability wordings include products, meaning goods the business has made, installed or repaired once they are out of its control, and products claims usually share one limit for the policy year.',
      'Wood dust is a recognised health hazard. WorkSafe links inhaled wood dust to occupational asthma and lung cancer and expects businesses to control it at the source. Insurance cannot be used to pay a fine under the Health and Safety at Work Act, but statutory liability cover can meet defence costs.',
    ],
    legalCallout: {
      title: 'Restricted building work and the LBP licence',
      body: 'Restricted building work is building or design work on a residential house or a small to medium apartment building that relates to its primary structure or its external moisture management, together with the design of fire safety systems in multi-unit buildings. It must be carried out or supervised by a Licensed Building Practitioner in the appropriate class, and it is not limited to work that needs a building consent.',
      source: 1,
    },
    coverPackage:
      'For a carpenter or joiner working on homes: public liability at a limit that meets the contracts signed, a defective workmanship extension, statutory liability, and cover for tools and the work vehicle. A joinery or furniture workshop adds products liability, usually part of a broadform policy, and cover for the workshop, its machinery and stock. Labour-only subcontractors can check what the head contractor\'s policy does and does not extend to them.',
    costFrom: '',
    costFactors: [
      'Site carpentry, workshop joinery or both',
      'Share of work that is restricted building work',
      'Turnover and number of staff',
      'Public and products liability limit',
      'Value of tools, machinery and workshop stock',
      'Claims history',
    ],
    legalRequirements: [
      'Building Act 2004: restricted building work on houses and small to medium apartment buildings must be carried out or supervised by a Licensed Building Practitioner licensed in the appropriate class, such as Carpentry.',
      'LBP scheme: each LBP who carries out or supervises restricted building work completes a record of work when their part is done, and gives a copy to the owner and the council for work under a building consent.',
      'Building Act 2004: implied warranties apply to residential building work for up to 10 years, and defects that emerge within 12 months of completion must be fixed.',
      'Building Act 2004: a contractor must give the homeowner a disclosure statement, including the insurance held, for work of $30,000 or more (incl GST), or whenever the homeowner asks.',
      'Health and Safety at Work Act 2015: businesses must manage the risks from wood dust, and fall risks from any height, as there is no minimum height threshold. Insurance cannot be used to pay fines or infringement fees under the Act (section 29).',
    ],
    risks: [
      {
        title: 'Resulting damage from a failed fixing',
        desc: 'A fitted unit, stair or deck component fails and damages other property. Resulting damage is the liability claim; redoing the carpentry itself sits outside standard public liability.',
      },
      {
        title: 'Fire or theft in the workshop',
        desc: 'A fire or break-in destroys machinery, timber stock and jobs awaiting delivery. Liability wordings exclude property the business owns or holds, so this falls to property and contents cover.',
      },
      {
        title: 'Damage to services inside walls',
        desc: 'A fixing goes through a concealed pipe or cable. Public liability responds to resulting damage, subject to its terms, but repairs to water pipes are plumbing work for an authorised person.',
      },
    ],
    claimExamples: [
      {
        title: 'A wall cabinet comes down',
        scenario: 'Two weeks after a joiner installs kitchen wall cabinets, one pulls away from the wall and falls, breaking the benchtop and a coffee machine below it.',
        outcome: 'Public liability may respond to the benchtop and the coffee machine, as resulting damage to property the joiner was not working on. Refixing the cabinet itself is usually excluded unless the policy has a defective workmanship extension.',
        coverType: 'Public liability and defective workmanship',
      },
      {
        title: 'A screw through a water pipe',
        scenario: 'Fixing a new wall panel in a bathroom renovation, a carpenter drives a screw into a water supply pipe hidden in the framing. Water runs into the floor before it is noticed.',
        outcome: 'Public liability generally responds to the resulting water damage to the client\'s flooring and linings, subject to the excess and the policy terms. The pipe repair itself is plumbing work for an authorised plumber.',
        coverType: 'Public liability',
      },
      {
        title: 'A fire in the joinery shop',
        scenario: 'Overnight, a fire starts in a joinery workshop and destroys the machinery, the timber stock and two finished kitchens waiting to be delivered.',
        outcome: 'Liability cover does not respond to the business\'s own property or property in its care. Property or contents cover for the workshop, machinery and stock is designed for this; how customers\' finished work is treated depends on that policy\'s terms.',
        coverType: 'Contents and property',
      },
    ],
    faqs: [
      {
        q: 'Do carpenters legally need insurance in NZ?',
        a: 'No law generally requires a carpenter to hold public liability insurance. What the Building Act does require is disclosure: a contractor who signs with a homeowner must set out the insurance they hold in a disclosure statement for work of $30,000 or more, or whenever the homeowner asks. Separately, construction companies, head contractors and commercial clients routinely make public liability a condition of the contract before work starts.',
      },
      {
        q: 'Is an LBP licence a form of insurance?',
        a: 'No. The LBP scheme assesses and records a practitioner\'s skills and licenses them to carry out or supervise restricted building work. The Building Practitioners Board can hear complaints about negligent or incompetent work, but a licence does not pay for damage, defects or legal costs.',
      },
      {
        q: 'Is a joinery workshop covered for the furniture it sells?',
        a: 'Broadform liability wordings include products liability, which responds to injury or damage caused by goods the business made, installed or repaired after they leave its control. Products claims usually share one limit for the policy year, and the cost of repairing or replacing the faulty product itself is excluded.',
      },
      {
        q: 'Does public liability cover the part of the house being worked on?',
        a: 'Wordings differ. Some exclude property in the business\'s care, custody or control but carve back premises where the business is working, and they exclude the cost of correcting the work itself while covering resulting damage to other parts. Reading the defective work and the care, custody or control clauses together shows where the line sits.',
      },
      {
        q: 'What does WorkSafe say about wood dust?',
        a: 'WorkSafe\'s guidance says inhaled wood dust can cause occupational asthma and lung cancer, and that glues, resins and treatment chemicals in some wood products increase the risk. It gives preference to controls such as local exhaust ventilation and on-tool extraction over masks alone, and says workers routinely exposed to wood dust should have health monitoring.',
      },
      {
        q: 'Is ACC enough for a self-employed carpenter?',
        a: 'ACC is injury cover. For self-employed people, weekly compensation is usually up to 80% of the earnings declared to Inland Revenue, and usually starts from day 8 after the injury. ACC does not cover illness or sickness, and it is not liability insurance for damage the business causes to other people\'s property.',
      },
    ],
    sources: [
      { label: 'Licensed Building Practitioners: LBP scheme overview', url: 'https://www.lbp.govt.nz/about-us/about-the-lbp-scheme/overview/' },
      { label: 'Licensed Building Practitioners: Restricted Building Work', url: 'https://www.lbp.govt.nz/for-lbps/restricted-building-work/' },
      { label: 'MBIE Building Performance: Implied warranties and defects', url: 'https://www.building.govt.nz/projects-and-consents/why-contracts-are-valuable/implied-warranties-and-defects' },
      { label: 'MBIE Building Performance: Consumer protection, disclosure and checklist', url: 'https://www.building.govt.nz/projects-and-consents/why-contracts-are-valuable/consumer-protection-disclosure-and-checklist' },
      { label: 'Licensed Building Practitioners: Construction process and records of work', url: 'https://www.lbp.govt.nz/for-lbps/restricted-building-work/construction-process/' },
      { label: 'WorkSafe: Wood dust, controlling the risks', url: 'https://www.worksafe.govt.nz/topic-and-industry/dust/wood-dust-controlling-the-risks/' },
      { label: 'WorkSafe: Working at height in New Zealand', url: 'https://www.worksafe.govt.nz/topic-and-industry/working-at-height/working-at-height-in-nz/' },
      { label: 'WorkSafe: Introduction to the Health and Safety at Work Act 2015', url: 'https://www.worksafe.govt.nz/managing-health-and-safety/getting-started/introduction-hswa-special-guide/' },
      { label: 'Plumbers, Gasfitters and Drainlayers Board: Advice for consumers', url: 'https://www.pgdb.co.nz/advice_for_consumers/' },
      { label: 'Vero: Combined Broadform, Employers and Statutory Liability policy wording', url: 'https://www.vero.co.nz/documents/business/vero-combined-broadform-liability-07-24.pdf' },
      { label: 'ACC: Weekly compensation for self-employed people', url: 'https://www.acc.co.nz/im-injured/financial-support/weekly-compensation/weekly-compensation-for-self-employed' },
      { label: 'ACC: Injuries we don\'t cover', url: 'https://www.acc.co.nz/im-injured/what-we-cover/injuries-we-dont-cover' },
    ],
    recommendedCover: ['public-liability', 'tools-equipment', 'contents-property', 'statutory-liability'],
  },
  {
    slug: 'electricians',
    name: 'Electricians',
    icon: '⚡',
    heroImage: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1920&q=80',
    // Every factual claim on this page is sourced (see `sources`). Rewritten
    // September 2026 to the builders model: no prices, no invented claim amounts.
    metaDescription:
      'Electricians insurance in NZ: public liability, statutory liability and tools, read against EWRB licensing and certification rules. Talk to a broker.',
    heroLead:
      'How insurance fits around a practising licence, certificates of compliance and the liability an electrician carries once the power is on.',
    description:
      'Electricians insurance for New Zealand electrical workers and contractors: public liability, statutory liability, tools and vehicles, set against the licensing and certification rules for prescribed electrical work.',
    stats: [
      { value: '2 years', label: 'Practising licence term', note: 'A practising licence must be renewed every 2 years, with a Board-approved competence programme completed in that time.', source: 0 },
      { value: '20 days', label: 'Certification deadline', note: 'Certification documents must be issued no later than 20 days after the electrical work is completed.', source: 1 },
      { value: '7 years', label: 'Record keeping', note: 'The EWRB refers to the required 7 years of storage for certification documents.', source: 2 },
    ],
    introText: [
      'An electrician\'s insurance usually starts with public liability for injury to other people and damage to their property, then adds statutory liability for the cost of defending a prosecution, and cover for tools, test gear and vehicles. The mix depends on whether the business does domestic work, commercial fit-outs, solar or high-risk mains work, and whether it employs other electrical workers.',
      'Electrical work in New Zealand is also licensed and certified. Prescribed electrical work is regulated under the Electricity Act 1992 and the Electricity (Safety) Regulations 2010, and every electrical worker must hold a practising licence to carry it out. Certification must be completed for all prescribed electrical work, and a Certificate of Compliance confirms who was responsible for the work. Those documents record the electrician\'s name against the job, which is part of why the liability side of the business deserves as much attention as the licence.',
    ],
    whyNeedIt: [
      'Contracts ask for it, even where the law does not. Public liability insurance is generally not a legal requirement, but construction companies, head contractors and commercial clients routinely make it a condition of the contract, set a minimum limit, and ask for a certificate of currency before work starts.',
      'Your certificate puts your name on the work. The EWRB describes a Certificate of Compliance as an important legal document that confirms who was responsible for the work and that it has been done lawfully and tested. If a fire or shock is later traced back to an installation, that paper trail points to the electrician who signed it.',
      'Faulty work and the damage it causes are treated differently. In at least one published liability wording, the cost of correcting your own work is excluded, while legal liability for resulting damage to other property you were not working on can still be covered. Checking how a policy words that split matters more for electricians than most trades, because an electrical fault can damage a whole building.',
      'Electrical accidents are reported and investigated. The law requires accidents caused by electricity that result in deaths, serious injuries or significant damage to property to be reported to WorkSafe, and Energy Safety can refer potential offences under the Electricity Act for enforcement. Statutory liability can help with defence costs, but fines under the Health and Safety at Work Act cannot be insured.',
    ],
    legalCallout: {
      title: 'Electricity (Safety) Regulations: certifying the work',
      body: 'Under the Electricity (Safety) Regulations 2010, an electrical worker must give copies of certification documents to the person or company that contracted or authorised the work, as soon as possible and no later than 20 days after completing it. A Certificate of Compliance must be issued for fixed wiring work, including new power points. Some work, particularly on the main switchboard, the main cable and the main earth, must also be inspected, and the electrical worker is responsible for arranging a licensed electrical inspector.',
      source: 1,
    },
    coverPackage:
      'For an electrical contractor working directly for homeowners and businesses: public liability at a limit that meets your contracts, with attention to how the wording treats resulting damage from faulty work and damage to underground services, statutory liability for defence costs, and cover for tools, test equipment and vehicles. Contractors doing mains, solar or other high-risk work, or who employ other electrical workers, usually have more to check against their contracts.',
    costFrom: '',
    costFactors: [
      'Annual turnover and wages',
      'Domestic, commercial or industrial work',
      'High-risk work such as mains and solar',
      'Public liability limit',
      'Number of licensed and trainee workers',
      'Claims history',
    ],
    legalRequirements: [
      'Electricity Act 1992 and Electricity (Safety) Regulations 2010: prescribed electrical work is regulated work, and all electrical workers must hold a practising licence to carry it out. The licence must be renewed every 2 years.',
      'Electricity (Safety) Regulations 2010: certification must be completed for all prescribed electrical work, and certification documents must be issued no later than 20 days after the work is completed.',
      'A Certificate of Compliance is issued for fixed wiring work. High-risk work must be independently inspected by a licensed electrical inspector, and it is not legally complete until the Certificate of Compliance and Record of Inspection are issued.',
      'Electricity Act 1992: carrying out prescribed electrical work when not authorised is an offence. The EWRB states individuals can be fined up to $50,000 and corporations up to $250,000.',
      'Electricity Act 1992: accidents caused by electricity that result in deaths, serious injuries or significant damage to property must be reported to WorkSafe (Energy Safety).',
      'Health and Safety at Work Act 2015: it is an offence to offer or enter into insurance that pays a fine or infringement fee under the Act (section 29).',
    ],
    risks: [
      {
        title: 'Fire traced to an installation',
        desc: 'A fault in new or altered wiring starts a fire in a client\'s home or business, and the Certificate of Compliance identifies who did the work.',
      },
      {
        title: 'Damage to underground services',
        desc: 'Trenching for a sub-main or cable run cuts a water pipe, gas line or fibre. Some liability wordings restrict cover for underground services unless their position was checked first.',
      },
      {
        title: 'Shock or arc flash on site',
        desc: 'Live work or a missed isolation injures someone and damages equipment. The accident is notifiable, and an investigation can follow.',
      },
    ],
    claimExamples: [
      {
        title: 'A loose connection starts a fire',
        scenario: 'Some months after an electrician adds circuits to a kitchen renovation, a loose termination in a junction box overheats and starts a fire in the ceiling space, damaging the kitchen and contents.',
        outcome: 'Public liability generally responds to the resulting damage to the client\'s property, subject to the policy terms. The cost of redoing the faulty connection itself is usually excluded as defective work.',
        coverType: 'Public liability',
      },
      {
        title: 'A spade through a water main',
        scenario: 'Digging a trench for a cable to a detached garage, an electrician\'s worker cuts a buried water pipe that was not on any plan, flooding part of the client\'s section and a neighbour\'s garage.',
        outcome: 'Public liability may respond, but some wordings exclude damage to underground services unless reasonable steps were taken beforehand to find them, and a separate excess can apply.',
        coverType: 'Public liability',
      },
      {
        title: 'An investigation after a shock',
        scenario: 'A client\'s employee receives an electric shock from a switchboard an electrical contractor has just worked on. The accident is notified to WorkSafe and the contractor is later charged.',
        outcome: 'Statutory liability may respond to defence costs. A fine imposed under the Health and Safety at Work Act cannot be insured, although insurance can be used for reparation ordered by the court.',
        coverType: 'Statutory liability',
      },
    ],
    faqs: [
      {
        q: 'Do electricians legally need insurance in NZ?',
        a: 'The law requires a practising licence to carry out prescribed electrical work. Insurance is generally not legally required. In practice, construction companies, head contractors and commercial clients routinely require public liability before work starts, often at a stated minimum limit.',
      },
      {
        q: 'Is a Certificate of Compliance a form of insurance?',
        a: 'No. A Certificate of Compliance confirms who was responsible for the work, that it was done lawfully and tested, and that the information in it is correct. It does not pay for damage if the work later fails. It is, however, the document that links a job to the electrician who did it.',
      },
      {
        q: 'Does public liability cover faulty wiring?',
        a: 'Generally not the cost of fixing the faulty work itself. Liability wordings such as Vero\'s published broadform wording exclude the cost of correcting your own work, while still covering legal liability for resulting damage to other property you were not working on. Some insurers offer a defective workmanship extension. The exact wording matters.',
      },
      {
        q: 'What can the Electrical Workers Registration Board do after a complaint?',
        a: 'If the Board finds a registered worker guilty of a disciplinary offence, penalties can include training or examinations, costs, suspension or cancellation of a licence or registration, and publication of the worker\'s name. Non-registered workers and companies can be referred to the courts for prosecution.',
      },
      {
        q: 'Can insurance pay a WorkSafe fine?',
        a: 'Not a fine or infringement fee under the Health and Safety at Work Act. Section 29 makes it an offence to offer or enter into insurance that pays one. Statutory liability policies can still help with defence costs, and insurance can be used for reparation ordered by the court.',
      },
      {
        q: 'Is ACC enough for an electrician?',
        a: 'ACC provides no-fault personal injury cover, including for self-employed people, and weekly compensation of up to 80% of earnings while injured. It does not cover illness or non-work-related disease. A claim for damage to a client\'s building, or the cost of defending a prosecution, is not a personal injury claim.',
      },
    ],
    sources: [
      { label: 'Electrical Workers Registration Board: Practising Licence', url: 'https://www.ewrb.govt.nz/licences/practising-licence/' },
      { label: 'Electrical Workers Registration Board: Documentation from your electrical worker', url: 'https://www.ewrb.govt.nz/for-consumers/documentation-from-your-electrician/' },
      { label: 'Electrical Workers Registration Board: What paperwork do I need to complete?', url: 'https://www.ewrb.govt.nz/resources-2/toolbox/what-paperwork-do-i-need-to-complete/' },
      { label: 'Electrical Workers Registration Board: Prosecutions of non-licensed work', url: 'https://www.ewrb.govt.nz/about-us/news-and-notices/prosecutions-of-non-licensed-work/' },
      { label: 'Electrical Workers Registration Board: Board hearings', url: 'https://www.ewrb.govt.nz/complaints/board-hearings/' },
      { label: 'WorkSafe: Electricity or gas event notification', url: 'https://www.worksafe.govt.nz/notifications/report-an-unsafe-or-unhealthy-work-situation/electrical-and-gas/' },
      { label: 'WorkSafe: Introduction to the Health and Safety at Work Act 2015', url: 'https://www.worksafe.govt.nz/managing-health-and-safety/getting-started/introduction-hswa-special-guide/' },
      { label: 'Vero: Combined Broadform, Employers and Statutory Liability policy wording (07/24)', url: 'https://www.vero.co.nz/documents/business/vero-combined-broadform-liability-07-24.pdf' },
      { label: 'ACC: Getting to know ACC, overview for employers and the self-employed', url: 'https://www.acc.co.nz/assets/business/acc4871-business-overview.pdf' },
      { label: 'WorkSafe Energy Safety: Accident and accident notification definitions', url: 'https://www.worksafe.govt.nz/topic-and-industry/energy-safety/electrical-and-gas-accidents/definitions/' },
      { label: 'WorkSafe Energy Safety: Arc flash causes injury and property damage', url: 'https://www.worksafe.govt.nz/topic-and-industry/energy-safety/electrical-and-gas-accidents/accident-summaries/arc-flash-causes-injury-and-property-damage/' },
    ],
    recommendedCover: ['public-liability', 'statutory-liability', 'tools-equipment', 'commercial-vehicle'],
  },
  {
    slug: 'bricklayers',
    name: 'Bricklayers',
    icon: '🧱',
    heroImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80',
    metaDescription:
      'Bricklayers insurance in NZ: public liability, the Brick and Blocklaying LBP licence, restricted building work, silica dust rules and where cover stops.',
    heroLead:
      'What bricklayers and blocklayers insure, how the Brick and Blocklaying licence and restricted building work apply, the silica dust rules, and where standard liability policies stop.',
    description:
      'Bricklayers insurance for New Zealand brick and block layers: public liability, statutory liability, tools and vehicles, read against the LBP scheme, restricted building work, implied warranties and WorkSafe silica dust guidance.',
    stats: [
      { value: '2', label: 'Brick and blocklaying areas of practice', note: 'Brick or masonry veneer, and structural masonry.', source: 0 },
      { value: '$750', label: 'Unlicensed RBW infringement', note: 'Instant fine a council can issue when a non-LBP carries out restricted building work without appropriate supervision.', source: 1 },
      { value: '5 metres', label: 'Scaffold notification', note: 'Erecting or dismantling scaffolding with a risk of falling this far must be notified to WorkSafe 24 hours ahead.', source: 2 },
    ],
    introText: [
      'Bricklayers insurance usually combines public liability for injury to other people and damage to their property, statutory liability for the cost of defending a prosecution, and cover for saws, mixers, tools and vehicles. How it is set up depends on whether the business lays veneer on new houses for a builder, builds structural block walls, or takes on repairs and alterations to existing masonry.',
      'Brick and blocklaying is one of the seven Licensed Building Practitioner classes in New Zealand, with two areas of practice: brick or masonry veneer, and structural masonry. Restricted building work covers the primary structure and the external moisture management system of houses and small to medium apartment buildings, and masonry sits inside the LBP scheme through this class. Cutting brick, block, concrete and mortar also releases respirable crystalline silica, which causes silicosis, a disease WorkSafe describes as progressive and deadly.',
    ],
    whyNeedIt: [
      'Contracts require it, even where the law does not. Builders, head contractors and commercial clients routinely make public liability a condition of the subcontract, set a minimum limit, and ask for a certificate of currency before a bricklayer starts.',
      'Masonry work can affect the neighbours. Excavating for footings or removing old masonry can undermine a neighbouring wall or structure. Vero\'s published wording, for example, excludes damage caused by vibration or the withdrawal or weakening of support in its main cover, then adds it back through an extension with its own limit and excess.',
      'Defects surface after completion. Implied warranties on residential building work apply for up to 10 years, and a builder who contracted with the homeowner has an obligation to fix defects that emerge within 12 months of completion. A bricklayer subcontracted to that builder answers to the builder under the subcontract. Public liability generally does not pay to redo the masonry itself.',
      'Silica dust is a regulated hazard. A masonry business must eliminate, or minimise so far as is reasonably practicable, workers\' exposure to respirable crystalline silica. WorkSafe\'s guidance is that tools for cutting, grinding or polishing concrete and masonry supply water to the blade or carry on-tool extraction.',
    ],
    legalCallout: {
      title: 'Restricted building work: masonry',
      body: 'On houses and small to medium apartment buildings, restricted building work (RBW) covers work on the primary structure, meaning the structural elements that resist vertical and horizontal loads, and on the external moisture management system. RBW must be carried out or supervised by an LBP licensed in the appropriate class, and the Brick and Blocklaying licence has two areas of practice: brick or masonry veneer, and structural masonry. LBPs must not carry out or supervise RBW outside their licence class. A council can issue a $750 infringement fee to a non-licensed person doing RBW unsupervised, and a conviction can bring a fine of up to $50,000.',
      source: 0,
    },
    coverPackage:
      'For a bricklayer contracting on residential work: public liability at a limit that meets builder and client requirements, read against how the wording treats vibration and weakening of support, underground services and defective work, statutory liability, and cover for saws, mixers, tools and vehicles. Where excavation is part of the job, the underground services clause matters: some wordings only respond if reasonable steps were taken to locate services before work began.',
    costFrom: '',
    costFactors: [
      'Annual turnover and wages',
      'Veneer, structural masonry or both',
      'Residential or commercial work',
      'Excavation, demolition and retaining work',
      'Public liability limit',
      'Claims history',
    ],
    legalRequirements: [
      'Building Act 2004: restricted building work on the primary structure and external moisture management system of houses and small to medium apartment buildings must be carried out or supervised by an LBP licensed in the appropriate class.',
      'Each LBP who carries out or supervises restricted building work must complete a record of work when their part is complete, for the owner and, for consented work, the council.',
      'Building Act 2004: implied warranties apply to residential building work for up to 10 years, whether the contract is written or verbal, and defects that emerge within 12 months of completion must be fixed by the builder.',
      'Building Act 2004: for residential building work of $30,000 or more (incl GST), the contractor dealing with the homeowner must provide a disclosure statement setting out their insurance; subcontractors engaged by that contractor do not.',
      'Health and Safety at Work Act 2015: a business must eliminate or minimise workers\' exposure to respirable crystalline silica, and monitor workplace conditions where exposure warrants it.',
      'Erecting or dismantling scaffolding with a risk of falling 5 metres or more must be notified to WorkSafe at least 24 hours before work starts.',
    ],
    risks: [
      {
        title: 'Undermining a neighbour\'s wall',
        desc: 'Excavation or removal of old masonry weakens the support for a neighbouring wall or structure. Some wordings exclude this and add it back with a separate limit.',
      },
      {
        title: 'Silica dust from cutting',
        desc: 'Dry cutting brick, block or concrete releases respirable crystalline silica. WorkSafe guidance points to water on the blade or on-tool extraction.',
      },
      {
        title: 'Defects in veneer or structural masonry',
        desc: 'Cracking or moisture problems appear after completion. Redoing the masonry itself is generally excluded from public liability as the insured\'s own work.',
      },
    ],
    claimExamples: [
      {
        title: 'Digging footings beside a boundary wall',
        scenario: 'Excavating for a new block retaining wall, a bricklayer undermines the footing of the neighbour\'s brick garden wall, which cracks and leans.',
        outcome: 'Damage caused by the withdrawal or weakening of support is excluded in some wordings and added back in others, in Vero\'s case through an extension with its own limit and excess. Whether public liability responds depends on that clause.',
        coverType: 'Public liability',
      },
      {
        title: 'Cutting slurry on a neighbour\'s paving',
        scenario: 'Cutting block with a wet saw on a windy day, a bricklayer\'s slurry and mortar spatter a neighbour\'s new paving and the car parked on it.',
        outcome: 'Public liability generally responds to damage to other people\'s property caused by the business, subject to the excess and the policy terms.',
        coverType: 'Public liability',
      },
      {
        title: 'Veneer cracks after handover',
        scenario: 'Ten months after a new house is finished, the owner notices cracking through the brick veneer near a window. The bricklayer was subcontracted by the builder.',
        outcome: 'The builder has an obligation to fix defects that emerge within 12 months and may look to the bricklayer under the subcontract. Relaying the veneer is usually excluded from public liability as the cost of correcting the insured\'s own work; resulting damage to other parts of the house may be covered.',
        coverType: 'Public liability and defective workmanship',
      },
    ],
    faqs: [
      {
        q: 'Do bricklayers legally need insurance in NZ?',
        a: 'Public liability insurance is generally not a legal requirement for a bricklaying business. In practice, construction companies, head contractors and commercial clients routinely require it before work starts, often with a minimum limit and a certificate of currency. What the law does require is that restricted building work is carried out or supervised by an appropriately licensed LBP.',
      },
      {
        q: 'Which masonry work needs an LBP?',
        a: 'On houses and small to medium apartment buildings (under 10 metres, with no commercial units), work on the primary structure or the external moisture management system is restricted building work, whether or not it needs a building consent. It must be carried out or supervised by an LBP in the appropriate class, such as Brick and Blocklaying, which has two areas of practice: brick or masonry veneer, and structural masonry.',
      },
      {
        q: 'What are the silica dust rules for cutting brick and block?',
        a: 'WorkSafe lists concrete, bricks, mortar and fibre cement among the construction materials that release respirable crystalline silica when cut, ground or drilled. A business must eliminate or minimise exposure; WorkSafe\'s guidance covers water suppression, on-tool extraction, H-class vacuums, exclusion zones and fit-tested respirators, which it says should not be the first or only control.',
      },
      {
        q: 'Does public liability cover damage to a neighbour\'s wall?',
        a: 'It can, but vibration and weakening of support can be dealt with separately. Vero\'s wording, for example, excludes that damage in its main cover and adds it back through an extension with its own limit and excess. Damage to buried services is also treated separately in some wordings, which respond only if reasonable steps were taken to locate the services first.',
      },
      {
        q: 'Do the disclosure rules apply to a subcontract bricklayer?',
        a: 'No. For residential building work of $30,000 or more including GST, or on request for smaller jobs, the contractor who deals with the homeowner must disclose the insurance they hold, with the amount of cover and relevant exclusions. Subcontractors hired by that contractor do not need to provide a disclosure statement.',
      },
      {
        q: 'Is ACC enough for a bricklayer?',
        a: 'ACC covers people injured in accidents, including a self-employed bricklayer, and weekly compensation for the self-employed is usually up to 80% of declared earnings. ACC does not cover illness, or injuries that happen over time, unless an activity at work is causing them. It is an injury scheme: damage to other people\'s property and the cost of defending a claim sit outside it.',
      },
    ],
    sources: [
      { label: 'Licensed Building Practitioners: Licensing classes', url: 'https://www.lbp.govt.nz/become-an-lbp/licensing-classes/' },
      { label: 'Licensed Building Practitioners: Offences and penalties', url: 'https://www.lbp.govt.nz/about-us/about-the-lbp-scheme/offences-and-penalties/' },
      { label: 'WorkSafe: Particular hazardous work (notifiable works)', url: 'https://www.worksafe.govt.nz/notifications/report-scheduled-or-completed-work/hazardous-work/' },
      { label: 'Licensed Building Practitioners: Restricted Building Work (RBW)', url: 'https://www.lbp.govt.nz/for-lbps/restricted-building-work/' },
      { label: 'Licensed Building Practitioners: Construction process and record of work', url: 'https://www.lbp.govt.nz/for-lbps/restricted-building-work/construction-process/' },
      { label: 'WorkSafe: Silica dust in the workplace', url: 'https://www.worksafe.govt.nz/topic-and-industry/dust/silica-dust-in-the-workplace/' },
      { label: 'MBIE Building Performance: Implied warranties and defects', url: 'https://www.building.govt.nz/projects-and-consents/why-contracts-are-valuable/implied-warranties-and-defects' },
      { label: 'MBIE Building Performance: Consumer protection, disclosure and checklist', url: 'https://www.building.govt.nz/projects-and-consents/why-contracts-are-valuable/consumer-protection-disclosure-and-checklist' },
      { label: 'Vero: Combined Broadform, Employers and Statutory Liability policy wording', url: 'https://www.vero.co.nz/documents/business/vero-combined-broadform-liability-07-24.pdf' },
      { label: 'ACC: Injuries we don\'t cover', url: 'https://www.acc.co.nz/im-injured/what-we-cover/injuries-we-dont-cover' },
      { label: 'ACC: Weekly compensation for self-employed', url: 'https://www.acc.co.nz/im-injured/financial-support/weekly-compensation/weekly-compensation-for-self-employed' },
    ],
    recommendedCover: ['public-liability', 'statutory-liability', 'tools-equipment', 'commercial-vehicle'],
  },
  {
    slug: 'roofers',
    name: 'Roofers',
    icon: '🏠',
    heroImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1920&q=80',
    metaDescription:
      'Roofers insurance in NZ: public liability, the Roofing LBP licence, restricted building work, fall and asbestos rules, torch-on work and where cover stops.',
    heroLead:
      'What roofers insure, how the Roofing licence and restricted building work apply, the fall, asbestos and hot work rules, and where standard liability policies stop.',
    description:
      'Roofers insurance for New Zealand roofers: public liability, statutory liability, tools and vehicles, read against the Roofing LBP licence, restricted building work, WorkSafe working at height duties and the asbestos rules for old roofs.',
    stats: [
      { value: '7', label: 'Roofing areas of practice', note: 'From concrete or clay tile and profiled metal to membranes, torch-on, liquid membrane and shingle or slate.', source: 0 },
      { value: '5 metres', label: 'WorkSafe notification', note: 'Construction work with a risk of falling this far must be notified 24 hours ahead, with exclusions including residential buildings up to two full storeys.', source: 4 },
      { value: '$50,000', label: 'Maximum fine, unlicensed RBW', note: 'On conviction for carrying out or supervising restricted building work without the appropriate licence or supervision.', source: 2 },
    ],
    introText: [
      'Roofers insurance usually combines public liability for injury to other people and damage to their property, statutory liability for the cost of defending a prosecution, and cover for tools, ladders, access equipment and vehicles. How it is set up depends on whether the business re-roofs occupied homes, installs roofs on new builds for a head contractor, or specialises in membranes and torch-on work.',
      'Roofing is one of the seven Licensed Building Practitioner classes in New Zealand, with seven areas of practice, and roof cladding systems on residential buildings are restricted building work. Roofing specialists are also among the businesses WorkSafe names in its guidance on working at height, which it describes as a leading cause of serious injury and death in New Zealand. Older roofs add asbestos: WorkSafe lists Super 6 sheeting and decramastic roof tiles among the asbestos-containing products roofers may meet.',
    ],
    whyNeedIt: [
      'Contracts require it, even where the law does not. Builders, head contractors and commercial clients routinely make public liability a condition of the contract, set a minimum limit, and ask for a certificate of currency before a roofer goes up.',
      'An open roof puts the client\'s property at risk. Rain getting into a partly stripped roof and damaging ceilings and contents is a claim for damage to the client\'s property. Public liability is the cover designed for that, but wordings exclude the cost of redoing the roofer\'s own work, and some, such as Vero\'s, exclude claims arising from a building\'s failure to prevent or manage the penetration of water.',
      'Hot work comes with conditions. Torch-on roof membrane is one of the Roofing licence\'s areas of practice. Where a liability wording covers naked-flame work away from the insured\'s premises, that cover can depend on set precautions: clearing combustibles for a safe distance, keeping an extinguisher beside the work, never leaving lit equipment unattended, and checking for signs of fire half an hour after work stops.',
      'Falls carry legal duties. Under the Health and Safety at Work Act, fall risks must be managed from any height, and WorkSafe\'s guidance is that any potential fall of more than one metre be managed with physical barriers or fall restraint. A prosecution after a fall brings defence costs, which statutory liability can meet; the fine itself cannot legally be insured.',
    ],
    legalCallout: {
      title: 'Restricted building work: roofing',
      body: 'On houses and small to medium apartment buildings, roof and wall cladding systems are restricted building work (RBW), including building wrap, fixings, skylights, ventilators, penetrations, flashings and seals. RBW must be carried out or supervised by an LBP licensed in the appropriate class. The Roofing licence has seven areas of practice: concrete or clay tile, profiled metal roof and wall cladding, metal tile, roof membrane, torch-on roof membrane, liquid membrane, and shingle or slate. Each LBP who carries out or supervises RBW must provide a record of work when their part is complete.',
      source: 0,
    },
    coverPackage:
      'For a roofer working on occupied homes: public liability at a limit that meets contract requirements, read against any conditions on hot work and any exclusion for water getting into the building, statutory liability, and cover for tools, ladders, access equipment and vehicles. For torch-on work, the fire precautions attached to naked-flame cover are part of the cover itself, so they matter as much as the limit.',
    costFrom: '',
    costFactors: [
      'Annual turnover and wages',
      'Re-roofing, new builds or commercial work',
      'Torch-on and other hot work',
      'Working heights and access methods',
      'Public liability limit',
      'Claims history',
    ],
    legalRequirements: [
      'Building Act 2004: restricted building work on roof and wall cladding systems of houses and small to medium apartment buildings must be carried out or supervised by an LBP licensed in the appropriate class, as it has been since 1 March 2012.',
      'Each LBP who carries out or supervises restricted building work must complete a record of work when their part is complete, for the owner and, for consented work, the council.',
      'Building Act 2004: for residential building work of $30,000 or more (incl GST), the contractor dealing with the homeowner must provide a disclosure statement that sets out their insurance, including the amount of cover and relevant exclusions.',
      'Health and Safety at Work Act 2015: fall risks must be managed from any height; there is no minimum height threshold in New Zealand.',
      'Construction work with a risk of falling 5 metres or more, and erecting or dismantling scaffolding with that risk, must be notified to WorkSafe at least 24 hours before work starts, subject to listed exclusions.',
      'Health and Safety at Work (Asbestos) Regulations 2016: water blasters and pressure washers above 350kPa, compressed air, brooms and domestic vacuum cleaners must not be used on asbestos, apart from narrow exceptions for water blasters.',
    ],
    risks: [
      {
        title: 'Rain into an open roof',
        desc: 'Weather reaches a stripped or partly clad roof and damages ceilings and contents. How the wording treats water entering the building decides the claim.',
      },
      {
        title: 'Falls from the edge or through the roof',
        desc: 'Unprotected edges and brittle roofing that cannot take a worker\'s weight are both fall risks WorkSafe guidance addresses. ACC covers injury; statutory liability can meet defence costs if WorkSafe prosecutes.',
      },
      {
        title: 'Fire from torch-on work',
        desc: 'A torch ignites fascia, soffit or roof framing. Cover for naked-flame work can depend on the precautions the wording lists having been followed.',
      },
    ],
    claimExamples: [
      {
        title: 'Overnight rain through a stripped roof',
        scenario: 'A crew strips half the iron from a villa and tarps it for the night. The tarp lifts in a squall and rain soaks the ceilings and carpet in two bedrooms.',
        outcome: 'Public liability may respond to the damage to the ceilings and contents, subject to the excess and to how the wording treats water entering the building.',
        coverType: 'Public liability',
      },
      {
        title: 'Torch-on membrane ignites a fascia',
        scenario: 'Laying a torch-on membrane on a flat roof, a roofer\'s torch ignites the timber fascia at the roof edge. The fire spreads into the soffit before it is put out.',
        outcome: 'Public liability generally responds to fire damage to the client\'s building. Where naked-flame cover depends on precautions, such as clearing combustibles, keeping an extinguisher beside the work and checking the area half an hour after work stops, the claim can turn on whether those were followed.',
        coverType: 'Public liability',
      },
      {
        title: 'Water blasting an old roof',
        scenario: 'Asked to clean and repaint a 1970s shed roof, a roofer water blasts the sheets before finding out they are asbestos cement. Debris spreads across the client\'s and the neighbour\'s sections.',
        outcome: 'Water blasters above 350kPa are prohibited on asbestos under the Asbestos Regulations. Clean-up and property claims arising from asbestos are excluded under wordings such as Vero\'s, which also excludes asbestos from its statutory liability section, so defence costs for a prosecution may not be covered either.',
        coverType: 'Public liability and statutory liability',
      },
    ],
    faqs: [
      {
        q: 'Do roofers legally need insurance in NZ?',
        a: 'Public liability insurance is generally not a legal requirement for a roofing business. In practice, construction companies, head contractors and commercial clients routinely require it before work starts, often with a minimum limit and a certificate of currency. For residential work of $30,000 or more, the contractor dealing with the homeowner must also disclose the insurance they hold.',
      },
      {
        q: 'Which roofing work needs an LBP?',
        a: 'On houses and small to medium apartment buildings (under 10 metres, with no commercial units), work on the roof cladding system is restricted building work. It must be carried out or supervised by an LBP licensed in the appropriate class, such as Roofing. Restricted building work is not limited to consented work, and a Carpentry LBP may be able to do some of it. Site LBPs cannot supervise or sign off restricted building work.',
      },
      {
        q: 'Do roofers have to notify WorkSafe before working at height?',
        a: 'Construction work with a risk of falling 5 metres or more must be notified to WorkSafe at least 24 hours in advance. The listed exclusions include work in connection with a residential building up to and including two full storeys, and maintenance and repair work of a minor or routine nature. The duty to manage fall risks applies at every height, notified or not.',
      },
      {
        q: 'Does public liability cover rain damage during a re-roof?',
        a: 'It can cover resulting damage to the client\'s property, such as ceilings and contents, subject to the wording. Some wordings exclude claims arising from a building\'s failure to prevent or manage the penetration of water, and the cost of redoing the roofer\'s own work is generally excluded. The exclusions section of the wording decides the answer.',
      },
      {
        q: 'Does the disclosure statement apply to a subcontract roofer?',
        a: 'No. The disclosure duty sits with the contractor who contracts with the homeowner: for work of $30,000 or more including GST, or on request for smaller jobs, that contractor must disclose the insurance they hold, with the amount of cover and relevant exclusions. Subcontractors hired by that contractor do not provide one.',
      },
      {
        q: 'Can insurance pay a WorkSafe fine?',
        a: 'No. Section 29 of the Health and Safety at Work Act 2015 makes it an offence to offer or enter into insurance that pays a fine or infringement fee under the Act. Statutory liability can meet defence costs, and the law allows insurance to pay reparation a court orders, although individual wordings may limit that.',
      },
    ],
    sources: [
      { label: 'Licensed Building Practitioners: Licensing classes', url: 'https://www.lbp.govt.nz/become-an-lbp/licensing-classes/' },
      { label: 'MBIE Building Performance: Restricted building work', url: 'https://www.building.govt.nz/projects-and-consents/planning-a-successful-build/scope-and-design/choosing-the-right-people-for-your-type-of-building-work/use-licensed-professionals-for-restricted-building-work/restricted-building-work' },
      { label: 'Licensed Building Practitioners: Offences and penalties', url: 'https://www.lbp.govt.nz/about-us/about-the-lbp-scheme/offences-and-penalties/' },
      { label: 'Licensed Building Practitioners: Construction process and record of work', url: 'https://www.lbp.govt.nz/for-lbps/restricted-building-work/construction-process/' },
      { label: 'WorkSafe: Particular hazardous work (notifiable works)', url: 'https://www.worksafe.govt.nz/notifications/report-scheduled-or-completed-work/hazardous-work/' },
      { label: 'WorkSafe: Working at height in New Zealand', url: 'https://www.worksafe.govt.nz/topic-and-industry/working-at-height/working-at-height-in-nz/' },
      { label: 'WorkSafe: Working with or near asbestos (guidance for tradespeople)', url: 'https://www.worksafe.govt.nz/topic-and-industry/asbestos/asbestos-information-for-tradespeople/working-with-or-near-asbestos/' },
      { label: 'Licensed Building Practitioners: Restricted Building Work (RBW)', url: 'https://www.lbp.govt.nz/for-lbps/restricted-building-work/' },
      { label: 'Licensed Building Practitioners: LBP scheme overview', url: 'https://www.lbp.govt.nz/about-us/about-the-lbp-scheme/overview/' },
      { label: 'MBIE Building Performance: Consumer protection, disclosure and checklist', url: 'https://www.building.govt.nz/projects-and-consents/why-contracts-are-valuable/consumer-protection-disclosure-and-checklist' },
      { label: 'Vero: Combined Broadform, Employers and Statutory Liability policy wording', url: 'https://www.vero.co.nz/documents/business/vero-combined-broadform-liability-07-24.pdf' },
      { label: 'WorkSafe: Introduction to the Health and Safety at Work Act 2015', url: 'https://www.worksafe.govt.nz/managing-health-and-safety/getting-started/introduction-hswa-special-guide/' },
    ],
    recommendedCover: ['public-liability', 'statutory-liability', 'tools-equipment', 'commercial-vehicle'],
  },
  {
    slug: 'concreters',
    name: 'Concreters',
    icon: '🏗️',
    heroImage: 'https://images.unsplash.com/photo-1509395062183-a6c1a3e62284?auto=format&fit=crop&w=1920&q=80',
    metaDescription:
      'Concreters insurance in NZ: public liability, underground services, vibration and faulty pours, plus LBP Foundations, silica and stormwater rules.',
    heroLead:
      'What concreters insure, where liability policies draw lines around buried services, vibration and faulty pours, and the silica, excavation and stormwater rules that sit alongside.',
    description:
      'Insurance for concreters and concrete placers: public liability with underground services and vibration terms, defective workmanship, plant and tools, and statutory liability, set against LBP Foundations licensing, WorkSafe silica and excavation guidance, and stormwater discharge rules.',
    stats: [
      { value: '1.5 m', label: 'Notifiable excavation', note: 'WorkSafe must be told at least 24 hours before work in an excavation more than 1.5 m deep that is deeper than it is wide at the top.', source: 4 },
      { value: '$750', label: 'Stormwater fine', note: 'Letting contaminants such as concrete slurry into a stormwater drain can bring a $750 fine under the RMA and further court action.', source: 7 },
      { value: '2', label: 'Foundations practice areas', note: 'The LBP Foundations class covers concrete foundation walls and slab-on-ground, and concrete or timber pile foundations.', source: 0 },
    ],
    introText: [
      'Concreting runs from house slabs and foundations to driveways, paths, retaining walls and decorative finishes, and most of it involves digging, cutting, compacting or pumping close to other people\'s property. That shapes the insurance. The main exposures are damage to buried services and neighbouring structures, a pour that cracks or is set out wrongly, dust and slurry leaving the site, and plant and tools carried from job to job.',
      'Foundations form part of a building\'s primary structure, so on houses they are restricted building work, and Foundations is one of the LBP licence classes. Concreters in New Zealand also work under WorkSafe guidance on respirable crystalline silica, which is created when concrete is cut, ground or drilled, and under the Resource Management Act, which treats concrete slurry in a stormwater drain as a discharge that can be fined.',
    ],
    whyNeedIt: [
      'Contracts require it, even where the law does not. No law generally requires a concreter to hold public liability insurance, but construction companies, head contractors and commercial clients routinely make it a condition of the contract before work starts, often with a minimum limit and a certificate of currency.',
      'Buried services can be a named exclusion. Some published liability wordings exclude damage to underground services, pipes and cables unless the business took all reasonable steps before work began to establish where they were, and then apply a separate excess. WorkSafe\'s guidance is to assume services are present and have them located and confirmed by the service owner, because plans can be inaccurate.',
      'Vibration and loss of support are commonly excluded. Compaction, breaking out and excavation can crack a neighbour\'s wall or undermine a boundary. Liability wordings exclude damage caused by vibration or the weakening of support unless an extension applies, and that extension carries its own limit and excess.',
      'The faulty pour itself is not the liability claim. Public liability wordings exclude the cost of correcting the work, such as breaking out and replacing concrete that has cracked or been poured at the wrong level, while responding to resulting damage to other property. Defective workmanship extensions, where offered, carry their own limit.',
    ],
    legalCallout: {
      title: 'WorkSafe: silica dust from concrete',
      body: 'WorkSafe lists concrete drilling, cutting, grinding, mixing, handling and dry shovelling among the work that exposes people to respirable crystalline silica, which can cause silicosis, lung cancer and chronic obstructive pulmonary disease. A business must eliminate the risk so far as is reasonably practicable, or otherwise minimise it, for example with water suppression or on-tool extraction, and WorkSafe\'s guidance is to provide health monitoring for workers who may be exposed.',
      source: 3,
    },
    coverPackage:
      'For a concreting business: public liability at a limit that meets the contracts signed, with the underground services terms and a vibration and weakening of support extension checked against the work done, a defective workmanship extension, statutory liability, and cover for tools, plant and the work vehicles.',
    costFrom: '',
    costFactors: [
      'Residential, commercial or civil work',
      'Excavation depth and use of cutting and breaking plant',
      'Work close to boundaries and buried services',
      'Public liability limit and extensions (vibration, underground services)',
      'Value of plant, tools and vehicles',
      'Claims history',
    ],
    legalRequirements: [
      'Building Act 2004: foundations are part of a building\'s primary structure, so on houses and small to medium apartment buildings they are restricted building work, carried out or supervised by an LBP in the appropriate class.',
      'Health and Safety at Work Act 2015: a business must eliminate, or minimise, worker exposure to respirable crystalline silica from cutting, grinding and drilling concrete.',
      'WorkSafe must be notified at least 24 hours before work in an excavation more than 1.5 m deep that is deeper than it is wide at the top, and any excavated face more than 1.5 m high must be shored so far as is reasonably practicable.',
      'Resource Management Act 1991: discharging contaminants such as concrete slurry to a stormwater drain can bring a $750 fine and further court action.',
      'Building Act 2004: implied warranties apply to residential building work for up to 10 years, whether the contract is written or verbal.',
      'Insurance cannot be used to pay fines or infringement fees under the Health and Safety at Work Act (section 29).',
    ],
    risks: [
      {
        title: 'Striking a buried service',
        desc: 'A digger bucket, concrete saw or driven peg hits a power cable, gas line or water main. Cover depends on the policy\'s underground services terms and the steps taken to locate services first.',
      },
      {
        title: 'Cracking next door',
        desc: 'Compaction or breaking out cracks a neighbour\'s wall, paving or foundations. Whether the damage is covered turns on a vibration and weakening of support extension.',
      },
      {
        title: 'A slab or driveway that fails',
        desc: 'A slab cracks, falls the wrong way or is poured at the wrong level. Replacing the concrete itself is generally outside public liability.',
      },
    ],
    claimExamples: [
      {
        title: 'A saw cut through a power cable',
        scenario: 'Cutting out a strip of an old driveway for a new drain, a concreter\'s saw clips a low-voltage cable that the property plans did not show. Power to the house is lost until the cable is repaired.',
        outcome: 'Some wordings exclude damage to underground services unless reasonable steps were taken before work began to establish where they were, and then apply a separate excess. Evidence of the plans, locate and mark-outs obtained before cutting goes to whether that condition was met.',
        coverType: 'Public liability (underground services)',
      },
      {
        title: 'Compaction cracks a neighbour\'s wall',
        scenario: 'Compacting basecourse for a new driveway along a boundary, a plate compactor sets off cracking in the neighbour\'s brick garden wall.',
        outcome: 'Damage caused by vibration is excluded under some broadform wordings unless a vibration and weakening of support extension applies. Where it does, the extension may respond up to its own limit, after its own excess.',
        coverType: 'Public liability (vibration extension)',
      },
      {
        title: 'Slurry in the stormwater',
        scenario: 'After a pour, equipment is washed down on the street and slurry runs into a stormwater drain. The council investigates the discharge.',
        outcome: 'Public liability wordings exclude fines and penalties, so an RMA fine is not something they pay. Liability wordings also commonly exclude pollution unless it comes from a sudden, accidental and unexpected release, so any clean-up claim depends on how the discharge happened.',
        coverType: 'Public liability (pollution terms)',
      },
    ],
    faqs: [
      {
        q: 'Do concreters legally need insurance in NZ?',
        a: 'No law generally requires a concreter to hold public liability insurance. In practice, construction companies, head contractors and commercial clients routinely require it before work starts, and a contractor who signs directly with a homeowner must set out the insurance they hold in a disclosure statement for residential work of $30,000 or more, or whenever the homeowner asks.',
      },
      {
        q: 'What counts as reasonable steps to find underground services?',
        a: 'The policy wording decides, but WorkSafe\'s excavation guidance gives the practical picture: assume services are present, get plans from each service owner, have services located and confirmed, mark them out, and use detectors and careful digging as the work gets closer. The beforeUdig service lets anyone planning to break ground request information on the location of cables and pipes. WorkSafe has also warned that permit-to-dig systems should cover pegs and stakes driven into the ground, not only digging.',
      },
      {
        q: 'Does public liability cover cracked or faulty concrete?',
        a: 'Not the cost of fixing the concrete itself. Liability wordings exclude the cost of performing, completing or correcting the work, while responding to resulting damage to other property the business was not working on. A defective workmanship extension, where offered, can respond to accidental damage caused by faulty workmanship, up to its own limit.',
      },
      {
        q: 'What does WorkSafe say about silica dust from concrete?',
        a: 'Silica is found in concrete, bricks, stone, sand and clay, and respirable crystalline silica dust is created when those materials are cut, ground, drilled or otherwise disturbed. WorkSafe lists concrete drilling, cutting, grinding, mixing and dry shovelling among the higher-risk tasks and describes silicosis as permanent. Its guidance favours water suppression and on-tool extraction, and warns against dry sweeping and using compressed air to clear dust.',
      },
      {
        q: 'When is concreting restricted building work?',
        a: 'When it forms part of the primary structure of a house or small to medium apartment building, such as foundations, it is restricted building work and must be carried out or supervised by a Licensed Building Practitioner in the appropriate class. The LBP Foundations class has areas of practice for concrete foundation walls and slab-on-ground, and for concrete or timber piles.',
      },
    ],
    sources: [
      { label: 'Licensed Building Practitioners: Licensing classes', url: 'https://www.lbp.govt.nz/become-an-lbp/licensing-classes/' },
      { label: 'Licensed Building Practitioners: LBP scheme overview', url: 'https://www.lbp.govt.nz/about-us/about-the-lbp-scheme/overview/' },
      { label: 'Licensed Building Practitioners: Restricted Building Work', url: 'https://www.lbp.govt.nz/for-lbps/restricted-building-work/' },
      { label: 'WorkSafe: Silica dust in the workplace', url: 'https://www.worksafe.govt.nz/topic-and-industry/dust/silica-dust-in-the-workplace/' },
      { label: 'WorkSafe: Excavation safety good practice guidelines', url: 'https://www.worksafe.govt.nz/topic-and-industry/excavation/excavation-safety-gpg/' },
      { label: 'WorkSafe: Risk involved when working near buried power cables', url: 'https://www.worksafe.govt.nz/about-us/news-and-media/risk-involved-when-working-near-buried-power-cables/' },
      { label: 'beforeUdig: Locating underground services', url: 'https://www.beforeudig.co.nz/' },
      { label: 'Licensed Building Practitioners: Outside drains, don\'t pollute our waterways', url: 'https://www.lbp.govt.nz/for-lbps/skills-maintenance/codewords/outside-drains-dont-pollute-our-waterways/' },
      { label: 'MBIE Building Performance: Implied warranties and defects', url: 'https://www.building.govt.nz/projects-and-consents/why-contracts-are-valuable/implied-warranties-and-defects' },
      { label: 'MBIE Building Performance: Consumer protection, disclosure and checklist', url: 'https://www.building.govt.nz/projects-and-consents/why-contracts-are-valuable/consumer-protection-disclosure-and-checklist' },
      { label: 'WorkSafe: Introduction to the Health and Safety at Work Act 2015', url: 'https://www.worksafe.govt.nz/managing-health-and-safety/getting-started/introduction-hswa-special-guide/' },
      { label: 'Vero: Combined Broadform, Employers and Statutory Liability policy wording', url: 'https://www.vero.co.nz/documents/business/vero-combined-broadform-liability-07-24.pdf' },
    ],
    recommendedCover: ['public-liability', 'tools-equipment', 'commercial-vehicle', 'statutory-liability'],
  },
  {
    slug: 'handymen',
    name: 'Handymen',
    icon: '🛠️',
    heroImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1920&q=80',
    metaDescription:
      'Handyman insurance in NZ: public liability, tools and vehicle cover, and the consent, electrical and plumbing limits on the work a handyman can legally do.',
    heroLead:
      'What handymen insure, which jobs the Building Act and the electrical and plumbing rules keep for licensed trades, and where a standard liability policy stops.',
    description:
      'Insurance for handymen and property maintenance businesses: public liability, defective workmanship, tools and vehicle cover and statutory liability, set against Schedule 1 exempt building work, the limits on electrical and plumbing work, and the Building Act\'s consumer protections.',
    stats: [
      { value: '10 years', label: 'Implied warranties', note: 'Implied warranties apply to residential building work for up to 10 years, regardless of the cost of the job.', source: 0 },
      { value: '$30,000', label: 'Disclosure threshold', note: 'From this amount (incl GST) a disclosure statement is compulsory; below it, the homeowner can still ask for one.', source: 1 },
      { value: '1.5 m', label: 'Deck exemption', note: 'A deck or platform needs no building consent if it is not possible to fall more than 1.5 m from it, even if it collapses.', source: 2 },
    ],
    introText: [
      'A handyman business takes the jobs that are too small or too varied for a single trade: repairs and maintenance, hanging doors, replacing rotten boards, small decks and fences, shelving and flat-pack assembly, and odd jobs around rental properties. That spread is the main insurance issue. One liability policy has to respond to a dropped tool in one house and a leaking seal in the next, and liability wordings cover occurrences in connection with the business.',
      'Most handyman work does not need a building consent. Schedule 1 of the Building Act lets repairs and like-for-like replacement, low decks and fences up to set heights go ahead without one, but exempt work must still comply with the Building Code. Other jobs are closed to anyone without the right registration: in New Zealand, anyone other than a homeowner who carries out prescribed electrical work must be registered with the Electrical Workers Registration Board, and sanitary plumbing, gasfitting and drainlaying are reserved for people authorised under the Plumbers, Gasfitters, and Drainlayers Act.',
    ],
    whyNeedIt: [
      'Contracts require it, even where the law does not. No law generally requires a handyman to hold public liability insurance, but construction companies, head contractors and commercial clients routinely make it a condition of the contract before work starts, often with a minimum limit and a certificate of currency.',
      'Small jobs still carry the Building Act protections. Implied warranties apply to residential building work regardless of the cost of the project, and a homeowner can ask any contractor they hire directly for a disclosure statement setting out the insurance held, whatever the size of the job.',
      'Resulting damage is the usual claim. A slipped ladder, a drill through a hidden pipe or a poorly sealed window can damage the client\'s property. Liability wordings generally respond to that resulting damage but not to the cost of redoing the handyman\'s own work.',
      'Working outside the rules affects cover. MBIE notes that non-compliant building work may affect insurance cover on the building, and liability wordings commonly require the insured to comply with all obligations and regulations in any applicable legislation.',
    ],
    legalCallout: {
      title: 'Schedule 1: work that needs no building consent',
      body: 'Schedule 1 of the Building Act 2004 lists building work that does not need a building consent, including repair and maintenance using a comparable product, replacement of a product in the same position, decks and platforms from which it is not possible to fall more than 1.5 metres, and fences up to 2.5 metres high. The repair exemption does not extend to sanitary plumbing or drainlaying, or to complete or substantial replacement of parts that contribute to structure or fire safety, and all exempt work must still comply with the Building Code.',
      source: 2,
    },
    coverPackage:
      'For a sole-trader handyman: public liability at a limit that meets the contracts signed, a defective workmanship extension, cover for tools and the work vehicle, and statutory liability. Income protection sits alongside ACC, which covers injury but not illness or sickness.',
    costFrom: '',
    costFactors: [
      'Range of jobs done (repairs, carpentry, decks, fences, painting)',
      'Owner-occupied, rental or commercial clients',
      'Turnover and whether staff are employed',
      'Public liability limit',
      'Value of tools and the work vehicle',
      'Claims history',
    ],
    legalRequirements: [
      'Building Act 2004, Schedule 1: exempt building work, such as like-for-like repairs, low decks and fences up to 2.5 m, needs no building consent but must still comply with the Building Code and other laws.',
      'Electricity Act 1992: anyone other than a homeowner who carries out prescribed electrical work must be registered with the Electrical Workers Registration Board, and electrical workers paid for their work must hold a practising licence. The homeowner allowance applies to owners who live in the property and are not paid.',
      'Plumbers, Gasfitters, and Drainlayers Act 2006: sanitary plumbing, gasfitting and drainlaying must be done by authorised people, or under the supervision of a certifying tradesperson.',
      'Building Act 2004: implied warranties apply to residential building work regardless of cost, and a contractor must give a disclosure statement for work of $30,000 or more (incl GST), or whenever the homeowner asks.',
      'Health and Safety at Work Act 2015: fall risks must be managed at any height, including work from ladders. Insurance cannot be used to pay fines or infringement fees under the Act (section 29).',
    ],
    risks: [
      {
        title: 'Damage to the client\'s property',
        desc: 'A ladder, tool or fitting damages a car, floor or fixture. Public liability responds to damage to other people\'s property, subject to the excess and the policy terms.',
      },
      {
        title: 'Work that was not exempt',
        desc: 'If building work that needed a consent is done without one, the owner may have to apply for a certificate of acceptance. Liability cover does not pay to redo or certify the work.',
      },
      {
        title: 'Falls from ladders and roofs',
        desc: 'Gutter, window and roof jobs carry a fall risk at any height. ACC, not public liability, covers the handyman\'s own injury.',
      },
    ],
    claimExamples: [
      {
        title: 'A ladder slides onto a car',
        scenario: 'Cleaning gutters at a rental property, a handyman\'s ladder slides sideways and falls across the tenant\'s car parked in the drive.',
        outcome: 'Public liability generally responds to damage to a third party\'s property, such as the car, subject to the excess. Any injury to the handyman is a matter for ACC.',
        coverType: 'Public liability',
      },
      {
        title: 'A resealed window leaks',
        scenario: 'A handyman replaces a cracked pane and reseals the window frame. At the next heavy rain, water gets in around the frame and stains the wall lining and carpet.',
        outcome: 'Public liability may pay for resulting damage to the lining and carpet. Redoing the seal itself is usually excluded unless the policy has a defective workmanship extension.',
        coverType: 'Public liability and defective workmanship',
      },
      {
        title: 'Moving a power point',
        scenario: 'Asked to move a power point while fitting shelves in a rental, a handyman does the wiring himself. A fault later causes a small fire inside the wall.',
        outcome: 'The homeowner allowance for this kind of wiring applies only to an owner who lives in the property and is not paid, and landlords and tenants cannot do electrical work in a rented property. Because liability wordings commonly require compliance with all applicable legislation, cover for the fire damage may not respond.',
        coverType: 'Public liability',
      },
    ],
    faqs: [
      {
        q: 'Do handymen legally need insurance in NZ?',
        a: 'No law generally requires a handyman to hold public liability insurance. The Building Act does require a contractor who signs with a homeowner to disclose the insurance they hold, in a disclosure statement, for work of $30,000 or more or whenever the homeowner asks. Separately, construction companies, head contractors and commercial clients routinely make public liability a condition of the contract before work starts.',
      },
      {
        q: 'What building work can a handyman do without a consent?',
        a: 'Schedule 1 of the Building Act exempts, among other things, repair and maintenance with comparable products, like-for-like replacement in the same position, decks and platforms from which it is not possible to fall more than 1.5 metres, and fences up to 2.5 metres. The building owner is responsible for deciding whether work is exempt, and exempt work must still comply with the Building Code.',
      },
      {
        q: 'Can a handyman do electrical work?',
        a: 'Only within narrow limits. The law lets homeowners do some electrical work on a home they own and live in, without payment. Anyone else who carries out prescribed electrical work must be registered with the Electrical Workers Registration Board, and WorkSafe says landlords and tenants cannot do electrical work in a rented property unless they are registered and licensed.',
      },
      {
        q: 'Can a handyman do plumbing?',
        a: 'Only at the margins. The Plumbers, Gasfitters and Drainlayers Board\'s guidance on DIY plumbing lists installing appliances such as dishwashers and washing machines, and replacing or repairing taps, ball cocks and plugs, as work that can be done, and fixing or unfixing pipes, traps, waste and soil pipes and water supply pipes as work that cannot. For any plumbing, gasfitting or drainlaying work, the Board\'s advice is that the person doing it is licensed to do so.',
      },
      {
        q: 'Does public liability cover poor workmanship?',
        a: 'Generally not the cost of redoing the work. Liability wordings exclude the cost of performing, completing or correcting the work, while responding to resulting damage to other property. A defective workmanship extension, where offered, responds to accidental damage caused by faulty workmanship, up to its own limit.',
      },
      {
        q: 'Is ACC enough for a self-employed handyman?',
        a: 'ACC covers injury. For self-employed people, weekly compensation is usually up to 80% of the earnings declared to Inland Revenue and usually starts from day 8 after the injury. ACC does not cover illness or sickness, which is where income protection is used.',
      },
    ],
    sources: [
      { label: 'MBIE Building Performance: Implied warranties and defects', url: 'https://www.building.govt.nz/projects-and-consents/why-contracts-are-valuable/implied-warranties-and-defects' },
      { label: 'MBIE Building Performance: Consumer protection, disclosure and checklist', url: 'https://www.building.govt.nz/projects-and-consents/why-contracts-are-valuable/consumer-protection-disclosure-and-checklist' },
      { label: 'MBIE: Building work that does not require a building consent (Schedule 1 guidance, January 2026)', url: 'https://www.building.govt.nz/assets/Uploads/projects-and-consents/building-work-consent-not-required-guidance.pdf' },
      { label: 'WorkSafe: Getting electrical work done', url: 'https://www.worksafe.govt.nz/managing-health-and-safety/consumers/safe-living-with-electricity/getting-electrical-work-done/' },
      { label: 'WorkSafe: Doing your own electrical work', url: 'https://www.worksafe.govt.nz/managing-health-and-safety/consumers/safe-living-with-electricity/getting-electrical-work-done/doing-your-own-electrical-work/' },
      { label: 'Plumbers, Gasfitters and Drainlayers Board: Advice for consumers', url: 'https://www.pgdb.co.nz/advice_for_consumers/' },
      { label: 'WorkSafe: Working at height in New Zealand', url: 'https://www.worksafe.govt.nz/topic-and-industry/working-at-height/working-at-height-in-nz/' },
      { label: 'WorkSafe: Introduction to the Health and Safety at Work Act 2015', url: 'https://www.worksafe.govt.nz/managing-health-and-safety/getting-started/introduction-hswa-special-guide/' },
      { label: 'Vero: Combined Broadform, Employers and Statutory Liability policy wording', url: 'https://www.vero.co.nz/documents/business/vero-combined-broadform-liability-07-24.pdf' },
      { label: 'ACC: Weekly compensation for self-employed people', url: 'https://www.acc.co.nz/im-injured/financial-support/weekly-compensation/weekly-compensation-for-self-employed' },
      { label: 'ACC: Injuries we don\'t cover', url: 'https://www.acc.co.nz/im-injured/what-we-cover/injuries-we-dont-cover' },
    ],
    recommendedCover: ['public-liability', 'tools-equipment', 'commercial-vehicle', 'income-protection'],
  },
  {
    slug: 'gasfitters',
    name: 'Gasfitters',
    icon: '🔥',
    heroImage: 'https://images.unsplash.com/photo-1558618047-3c8c2b8ad6e2?auto=format&fit=crop&w=1920&q=80',
    metaDescription:
      'Gasfitters insurance in NZ: public liability, statutory liability and how gas certificates, risk categories and PGDB discipline bear on cover.',
    heroLead:
      'How gasfitting certification, Board licensing and the gas safety regulations shape the insurance a gasfitter carries, and where a liability policy stops.',
    description:
      'Gasfitters insurance for New Zealand gasfitters: public liability, statutory liability, tools and vehicles, read against PGDB licensing and the certification rules in the Gas (Safety and Measurement) Regulations 2010.',
    stats: [
      { value: '20 working days', label: 'Certificate deadline', note: 'A certifying gasfitter must provide the gasfitting certificate within this time of the work being connected to the gas supply.', source: 0 },
      { value: '7 years', label: 'Record keeping', note: 'Gasfitters must keep a copy of every gasfitting certificate they issue for seven years.', source: 0 },
      { value: '$10,000', label: 'Maximum Board fine', note: 'The most the Board can fine a registered person for a disciplinary offence, such as a false or missing gas certificate.', source: 5 },
    ],
    introText: [
      'Gasfitting is regulated because of the risk it poses to public health and safety. Installing, altering or repairing gas appliances, fixing gas pipes and flues, and commissioning appliances are all outside what a homeowner may do, and every piece of gasfitting falls into a risk category that sets how it is certified. Insurance for a gasfitting business usually combines public liability for injury to others and damage to their property, statutory liability for legal costs arising from unintentional breaches of statute, and cover for tools, test equipment and vehicles.',
      'The certificates are legal documents under the Gas (Safety and Measurement) Regulations 2010. General and high-risk gasfitting needs a Certificate of Compliance and a Gas Safety Certificate, and high-risk work must also be entered on the Electricity and Gas High-risk Database by the certifying gasfitter. The Board notes that homeowners may need these certificates when they sell a property or for insurance purposes, which is one reason a missing or wrong certificate can turn into a dispute long after the job.',
    ],
    whyNeedIt: [
      'Contracts require it, even where the law does not. No law makes a gasfitter hold public liability insurance, but head contractors, builders and commercial clients routinely make it a condition of the contract, set a minimum limit, and ask for a certificate of currency before work starts. Without cover a business is shut out of that work, and the client is left exposed if something goes wrong.',
      'A gas fault can damage far more than the appliance. Every person who installs a gas appliance or fittings must ensure, as far as reasonably practicable, that they are safe. Public liability is the cover designed for injury to other people and damage to their property caused by the business, subject to its terms and exclusions.',
      'The certificate is a legal return. Failing to provide a return required by law, such as a gas certificate, or providing a false or misleading one, is a disciplinary offence under the Act, and the Board can impose a fine of up to $10,000. Liability wordings such as NZI\'s exclude fines and penalties.',
      'Brazing on site is hot work. Some liability wordings exclude hot work away from the insured\'s own premises unless set conditions are met, such as a clearance of at least 10 metres from combustible material, extinguishers kept beside the work, and an examination of the area straight after the work and again an hour later.',
    ],
    legalCallout: {
      title: 'Gasfitting certificates',
      body: 'A certifying gasfitter must provide a signed gasfitting certificate where gasfitting work has been done at a consumer\'s property, within 20 working days of the work being connected to the gas supply, and must keep a copy for seven years. The certifier need not be the person who did the work, but must be satisfied it was carried out in accordance with the law and the compliance documents. Under the Building Act 2004 the same certificate is recognised as an Energy Works Certificate.',
      source: 0,
    },
    coverPackage:
      'For a gasfitting business: public liability at a limit that meets contract requirements, with any hot work conditions read before brazing on site; statutory liability for the legal costs of an unintentional breach of statute; and cover for tools, test equipment and vehicles. A certifying gasfitter who signs off other people\'s work must be satisfied that the work was carried out lawfully, and is responsible for the work of the people they supervise.',
    costFrom: '',
    costFactors: [
      'Share of high-risk work such as additions and alterations',
      'Residential, commercial or industrial gas',
      'LPG, caravan and marine work',
      'Annual turnover and wages',
      'Public liability limit and exclusions',
      'Claims history',
    ],
    legalRequirements: [
      'Plumbers, Gasfitters, and Drainlayers Act 2006: gasfitting is regulated work. A certifying gasfitter is responsible for testing, verifying and supervising the work of gasfitters, restricted gasfitters, trainees and exempted persons.',
      'Gas (Safety and Measurement) Regulations 2010: gasfitting is low-risk, general or high-risk. General and high-risk work needs a Certificate of Compliance, all work needs a Gas Safety Certificate, and high-risk work must be entered on the Electricity and Gas High-risk Database.',
      'Gas (Safety and Measurement) Regulations 2010: a certifying gasfitter must provide the gasfitting certificate within 20 working days of the work being connected to the gas supply, and keep a copy for seven years.',
      'Gas (Safety and Measurement) Amendment Regulations 2025: compliance with the amendments is required from 12 November 2026. Until then WorkSafe has told gasfitters to continue working as normal.',
      'Every person who installs a gas appliance or fittings must ensure, as far as reasonably practicable, that the appliance or fittings are safe.',
      'Plumbers, Gasfitters, and Drainlayers Act 2006: failing to provide a return required by law, such as a gas certificate, or providing a false or misleading return, is a disciplinary offence. The Board can impose a fine of up to $10,000 plus costs.',
    ],
    risks: [
      {
        title: 'Fire or explosion after connection',
        desc: 'A leak at a joint or fitting ignites after the job is connected, damaging the client\'s property and possibly neighbouring property.',
      },
      {
        title: 'Flue and ventilation faults',
        desc: 'Commissioning includes checking combustion and ventilation. An appliance commissioned without adequate ventilation can put occupants at risk.',
      },
      {
        title: 'Certificate errors',
        desc: 'A missing, late or inaccurate certificate is a disciplinary matter in its own right, and can surface when the property is sold or an insurer asks for it.',
      },
    ],
    claimExamples: [
      {
        title: 'A union weeps after a hob swap',
        scenario: 'A gasfitter replaces a gas hob in a kitchen renovation. A union behind the unit is not fully tightened, gas collects in the cabinet, and a spark from the rangehood switch ignites it, damaging the kitchen.',
        outcome: 'Public liability may respond to the fire damage to the kitchen and contents, subject to the excess and the policy terms. The cost of redoing the connection itself is usually excluded as faulty workmanship.',
        coverType: 'Public liability',
      },
      {
        title: 'A certificate is never issued',
        scenario: 'A busy gasfitter connects a new water heater but does not issue the certificate. When the house is sold, the buyer\'s lawyer asks for it, and a complaint reaches the Board.',
        outcome: 'Standard liability wordings exclude fines and penalties, so a Board fine is not something public liability pays. Statutory liability cover is designed for legal costs from unintentional breaches of statute; whether it responds to a Board disciplinary process depends on the wording.',
        coverType: 'Statutory liability',
      },
      {
        title: 'Brazing near ceiling insulation',
        scenario: 'Extending a gas line through a ceiling space, a gasfitter brazes a joint close to insulation, which smoulders and later catches.',
        outcome: 'Public liability generally responds to fire damage to the client\'s property, provided any hot work conditions in the wording were met, such as the clearance distance and the check of the area after the work finishes.',
        coverType: 'Public liability',
      },
    ],
    faqs: [
      {
        q: 'Do gasfitters legally need insurance in NZ?',
        a: 'No law requires a gasfitter to hold public liability insurance. Where a gasfitter contracts directly with a homeowner on work of $30,000 or more (including GST), the Building Act requires a disclosure statement setting out the insurance held, with the amount of cover and relevant exclusions. Head contractors and commercial clients also routinely make public liability a condition of the contract.',
      },
      {
        q: 'What is the difference between a Certificate of Compliance and a Gas Safety Certificate?',
        a: 'The Certificate of Compliance confirms the work is compliant and lawful before connection, and gasfitting is not treated as complete until one is issued. The Gas Safety Certificate follows connection and verifies the installation is safe to use. They can be combined into one document.',
      },
      {
        q: 'Can a certifying gasfitter certify work someone else did?',
        a: 'Yes. The gasfitter who provides the certificate need not have done the work, but must be satisfied it was carried out in accordance with the law and the compliance documents. The certifier carries responsibility for that sign-off.',
      },
      {
        q: 'Does public liability pay a Board fine?',
        a: 'No. Liability wordings such as NZI\'s exclude any fine or penalty imposed under contract or statute. Statutory liability policies are built around legal costs arising from unintentional breaches of statute, and each wording sets out which proceedings it responds to.',
      },
      {
        q: 'What changes on 12 November 2026?',
        a: 'That is the date from which compliance with the Gas (Safety and Measurement) Amendment Regulations 2025 is required. WorkSafe has said gasfitters can continue working as normal until then and that it will provide further information.',
      },
    ],
    sources: [
      { label: 'Plumbers, Gasfitters, and Drainlayers Board: Advice for consumers', url: 'https://www.pgdb.co.nz/advice_for_consumers/' },
      { label: 'WorkSafe Energy Safety: Practitioner guide to certification of gasfitting', url: 'https://www.worksafe.govt.nz/dmsdocument/2617-practitioner-guide-to-the-regulatory-changes-for-certification-of-gasfitting/' },
      { label: 'WorkSafe: Gas regulations', url: 'https://www.worksafe.govt.nz/laws-and-regulations/regulations/gas-regulations/' },
      { label: 'WorkSafe: Gas', url: 'https://www.worksafe.govt.nz/topic-and-industry/gas/' },
      { label: 'WorkSafe Energy Safety: Electricity and Gas High-risk Database', url: 'https://www.worksafe.govt.nz/topic-and-industry/energy-safety/electricity-and-gas-high-risk-database/' },
      { label: 'Plumbers, Gasfitters, and Drainlayers Board: Disciplinary hearings', url: 'https://www.pgdb.co.nz/complaints_and_disciplinary_processes/disciplinary_processes/' },
      { label: 'NZI Liability Broadform policy wording (NZ5060/10, March 2018)', url: 'https://www.nzi.co.nz/content/dam/insurance-brands-nz/nzi/nz/en/documents/nzi/liability/nzi-liability-broadform-pw-nz5060-10-0318.pdf' },
      { label: 'NZI LiabilityOne policy document (NZ7397/1)', url: 'https://www.nzi.co.nz/content/dam/insurance-brands-nz/nzi/nz/en/documents/nzi/liability/nz-liability-one-nz7397-1-0123.pdf' },
      { label: 'MBIE Building Performance: Consumer protection, disclosure and checklist', url: 'https://www.building.govt.nz/projects-and-consents/why-contracts-are-valuable/consumer-protection-disclosure-and-checklist' },
    ],
    recommendedCover: ['public-liability', 'statutory-liability', 'tools-equipment', 'commercial-vehicle'],
  },
  {
    slug: 'tilers',
    name: 'Tilers',
    icon: '🪨',
    heroImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80',
    metaDescription:
      'Tilers insurance in NZ: public liability for leaks and damage, Building Code E3 wet-area rules, silica dust from cutting stone, and asbestos in old floors.',
    heroLead:
      'What tilers insure, how the Building Code treats wet areas and waterproofing, the dust and asbestos rules on older jobs, and where standard liability policies stop.',
    description:
      'Tilers insurance for New Zealand wall and floor tilers: public liability, statutory liability, tools and vehicles, read against Building Code clause E3, WorkSafe silica dust guidance and the asbestos rules for old floor coverings.',
    stats: [
      { value: 'E3', label: 'Building Code clause', note: 'Clause E3 (internal moisture) requires surfaces in wet areas to be impervious and easily cleaned.', source: 0 },
      { value: '~90%', label: 'Silica in engineered stone', note: 'WorkSafe compares this with around 2% in natural stone such as marble and limestone.', source: 2 },
      { value: '1 Jan 2000', label: 'Asbestos cut-off', note: 'Buildings built before this date are likely to contain asbestos. Vinyl, underlay and flooring adhesive are on WorkSafe\'s list for tilers.', source: 3 },
    ],
    introText: [
      'Tilers insurance usually means public liability for injury to other people and damage to their property, statutory liability for the cost of defending a prosecution, and cover for cutters, grinders, tools and the work vehicle. What that cover has to deal with depends on whether the business only lays tile over a substrate and membrane prepared by others, or also installs the waterproofing underneath.',
      'In New Zealand, Building Code clause E3 requires surfaces in wet areas to be impervious and easily cleaned, and its acceptable solution E3/AS2 cites an industry code of practice for internal wet-area membrane systems. E3/AS2 treats tiling as over-surface finishing work outside its scope, so the membrane and the tile finish are looked at separately. Tiling is not one of the seven Licensed Building Practitioner classes. Leaks from showers, dust from cutting stone and asbestos in old floor coverings are where the trade-specific rules sit.',
    ],
    whyNeedIt: [
      'Contracts require it, even where the law does not. Builders, head contractors and commercial clients routinely make public liability a condition of the subcontract, set a minimum limit, and ask for a certificate of currency before a tiler starts.',
      'A leak damages more than the shower. Water escaping from a wet area can damage framing, floors and, in apartments, the unit below. Public liability is written for damage to other property, but it excludes the cost of redoing the insured\'s own work, and some wordings, such as Vero\'s, exclude claims arising from a building\'s failure to prevent or manage the penetration of water.',
      'Cutting stone is regulated dust work. WorkSafe lists stone, including engineered stone, and fibre cement among the materials that release respirable crystalline silica when cut or ground. A tiling business must eliminate or minimise that exposure, and WorkSafe\'s guidance points to wet cutting or on-tool extraction and an H-class vacuum, including in clients\' homes.',
      'Old floors can hide asbestos. WorkSafe lists vinyl tiles, sheet flooring, underlay and flooring adhesive as asbestos-containing materials tilers may encounter. Laying new flooring over existing asbestos flooring is asbestos-related work with its own controls; removing old asbestos tiles before retiling is removal work.',
    ],
    legalCallout: {
      title: 'Building Code E3: wet areas and membranes',
      body: 'Clause E3 (internal moisture) requires surfaces in wet areas to be impervious and easily cleaned, and includes provisions for the disposal of overflow water. Acceptable Solution E3/AS2, effective 5 November 2020, deems internal wet-area membrane systems installed to the WMAI Code of Practice for Internal Wet Area Membrane Systems to comply with clauses E3.3.2 to E3.3.6. It treats over-surface finishing work, such as tiling, as outside its scope: where a finish has to be easy to clean to comply, that must be shown by other means. The building consent authority must be satisfied on reasonable grounds that a membrane installation meets the Building Code.',
      source: 1,
    },
    coverPackage:
      'For a tiler working in bathrooms and kitchens: public liability at a limit that meets builder and client requirements, read against how the wording treats water damage and defective workmanship, statutory liability, and cover for cutters, tools and the vehicle. Tilers who also install waterproofing membranes carry more of the leak exposure than those who tile over a membrane laid by someone else, and the contract with the builder or homeowner sets who answers for what.',
    costFrom: '',
    costFactors: [
      'Annual turnover and wages',
      'Whether waterproofing membranes are installed',
      'Residential, apartment or commercial work',
      'Stone and engineered stone work',
      'Public liability limit',
      'Claims history',
    ],
    legalRequirements: [
      'Building Code clause E3: surfaces in wet areas must be impervious and easily cleaned, with provisions covering ventilation and the disposal of overflow water.',
      'E3/AS2 (effective 5 November 2020): internal wet-area membranes installed to the WMAI Code of Practice comply with clauses E3.3.2 to E3.3.6; tiling is outside its scope, so compliance of the finish is shown by other means.',
      'All building work must meet the performance standards of the Building Code, whether or not it is restricted building work or needs a building consent.',
      'Health and Safety at Work Act 2015: a business must eliminate, or minimise so far as is reasonably practicable, workers\' exposure to respirable crystalline silica, and monitor workplace conditions where the exposure warrants it.',
      'Health and Safety at Work (Asbestos) Regulations 2016: tools that release asbestos into the air are prohibited unless designed or used to capture or suppress fibres. Removing more than 10m² of non-friable asbestos, or any friable asbestos, needs a WorkSafe licence.',
      'Health and Safety at Work Act 2015, section 29: insurance cannot be used to pay fines or infringement fees under the Act.',
    ],
    risks: [
      {
        title: 'A leaking shower or wet area',
        desc: 'A membrane or junction fails and water damages framing, floors or the unit below. Relaying the shower is the insured\'s own work; resulting damage elsewhere is a liability claim.',
      },
      {
        title: 'Damage to fixtures near the job',
        desc: 'A new vanity, bath or benchtop is cracked while tiling around it. Whether it is covered can turn on whether it was part of the work being done.',
      },
      {
        title: 'Silica dust in an occupied home',
        desc: 'Dry cutting stone indoors spreads respirable crystalline silica. WorkSafe guidance points to wet cutting or extraction and an H-class vacuum, not a household one.',
      },
    ],
    claimExamples: [
      {
        title: 'A shower leaks into the apartment below',
        scenario: 'Nine months after a bathroom renovation in an apartment, water from the new tiled shower appears as a stain on the ceiling of the unit below. The tiler laid both the membrane and the tiles.',
        outcome: 'Public liability may respond to the damage to the unit below, subject to the wording, including any exclusion for a building\'s failure to prevent water penetration. Lifting and relaying the shower is usually excluded as the cost of correcting the insured\'s own work.',
        coverType: 'Public liability and defective workmanship',
      },
      {
        title: 'A cracked vanity top',
        scenario: 'Grinding a tile edge beside a new stone vanity, a tiler drops the grinder and cracks the vanity top, which another trade installed the day before.',
        outcome: 'The vanity was not part of the tiler\'s work, so this is damage to separate property. Public liability generally responds, subject to the excess and the policy terms.',
        coverType: 'Public liability',
      },
      {
        title: 'Old vinyl under the bathroom floor',
        scenario: 'Preparing a 1960s bathroom for new tiles, a tiler starts lifting sheet vinyl and finds a fibrous backing. Work stops, and testing confirms asbestos.',
        outcome: 'Removing asbestos-containing flooring is removal work. It needs a licence unless it is 10m² or less of non-friable material, and friable material needs a Class A licence. Claims arising from asbestos, including clean-up, are excluded under liability wordings such as Vero\'s.',
        coverType: 'Public liability and statutory liability',
      },
    ],
    faqs: [
      {
        q: 'Do tilers legally need insurance in NZ?',
        a: 'Public liability insurance is generally not a legal requirement for a tiling business. In practice, construction companies, head contractors and commercial clients routinely require it before work starts, often with a minimum limit and a certificate of currency.',
      },
      {
        q: 'Is there an LBP licence for tilers?',
        a: 'No. The seven Licensed Building Practitioner classes are Design, Site, Carpentry, Roofing, External Plastering, Brick and Blocklaying, and Foundations. Restricted building work is defined around the primary structure, external moisture management and fire safety design. Tiling work still has to meet the Building Code, including clause E3 in wet areas.',
      },
      {
        q: 'Who is responsible for the waterproofing under the tiles?',
        a: 'The contract sets that. The Building Code framework treats the membrane and the finish separately: E3/AS2 covers internal wet-area membrane systems and treats tiling as outside its scope. Where one business installs both membrane and tiles, both sit with that business under its contract.',
      },
      {
        q: 'Does public liability cover a leaking shower?',
        a: 'It may cover resulting damage to other property, such as floors, framing or a unit below, but it generally does not pay to redo the tiler\'s own work. Some wordings also exclude claims arising from a building\'s failure to prevent or manage water penetration, which can remove cover for leak damage altogether. The exclusions section of the wording decides the answer.',
      },
      {
        q: 'What are the silica dust rules for cutting tile and stone?',
        a: 'WorkSafe says respirable crystalline silica is created when materials containing silica, such as stone and engineered stone, are cut, ground, drilled or polished. Businesses must eliminate or minimise exposure; WorkSafe\'s guidance covers keeping material wet, on-tool water or extraction, H-class vacuums rather than household ones, and fit-tested respirators, which WorkSafe calls the least effective control and says should not be the first or only one.',
      },
      {
        q: 'Is ACC enough for a tiler?',
        a: 'ACC covers people injured in accidents, including a self-employed tiler, and weekly compensation for the self-employed is usually up to 80% of declared earnings. ACC does not cover illness, or injuries that happen over time, unless an activity at work is causing them. It is an injury scheme: damage to other people\'s property and the cost of defending a claim sit outside it.',
      },
    ],
    sources: [
      { label: 'MBIE Building Performance: E3 Internal moisture', url: 'https://www.building.govt.nz/building-code-compliance/e-moisture/e3-internal-moisture' },
      { label: 'MBIE: Acceptable Solution E3/AS2, Internal wet-area membrane systems (1st edition)', url: 'https://www.building.govt.nz/assets/Uploads/building-code-compliance/e-moisture/e3-internal-moisture/asvm/e3-internal-moisture-as2-1st-edition.pdf' },
      { label: 'WorkSafe: Silica dust in the workplace', url: 'https://www.worksafe.govt.nz/topic-and-industry/dust/silica-dust-in-the-workplace/' },
      { label: 'WorkSafe: Working with or near asbestos (guidance for tradespeople)', url: 'https://www.worksafe.govt.nz/topic-and-industry/asbestos/asbestos-information-for-tradespeople/working-with-or-near-asbestos/' },
      { label: 'WorkSafe: Asbestos licensing overview', url: 'https://www.worksafe.govt.nz/topic-and-industry/asbestos/licensing/overview/' },
      { label: 'Licensed Building Practitioners: Licensing classes', url: 'https://www.lbp.govt.nz/become-an-lbp/licensing-classes/' },
      { label: 'Licensed Building Practitioners: Restricted Building Work (RBW)', url: 'https://www.lbp.govt.nz/for-lbps/restricted-building-work/' },
      { label: 'Licensed Building Practitioners: Restricted building work guide for homeowners', url: 'https://www.lbp.govt.nz/for-homeowners/when-you-need-an-lbp/' },
      { label: 'Vero: Combined Broadform, Employers and Statutory Liability policy wording', url: 'https://www.vero.co.nz/documents/business/vero-combined-broadform-liability-07-24.pdf' },
      { label: 'WorkSafe: Introduction to the Health and Safety at Work Act 2015', url: 'https://www.worksafe.govt.nz/managing-health-and-safety/getting-started/introduction-hswa-special-guide/' },
      { label: 'ACC: Injuries we don\'t cover', url: 'https://www.acc.co.nz/im-injured/what-we-cover/injuries-we-dont-cover' },
      { label: 'ACC: Weekly compensation for self-employed', url: 'https://www.acc.co.nz/im-injured/financial-support/weekly-compensation/weekly-compensation-for-self-employed' },
    ],
    recommendedCover: ['public-liability', 'statutory-liability', 'tools-equipment', 'commercial-vehicle'],
  },
  {
    slug: 'glaziers',
    name: 'Glaziers',
    icon: '🪟',
    heroImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1920&q=80',
    // Every factual claim on this page is sourced (see `sources`). Rewritten
    // September 2026 to the builders model: no prices, no invented claim amounts.
    metaDescription:
      'Glaziers insurance in NZ: public liability, defective workmanship and statutory liability, read against Building Code F2, NZS 4223 and disclosure rules.',
    heroLead:
      'What glaziers insure, how safety glass rules and residential contract obligations bear on the job, and where public liability stops.',
    description:
      'Glaziers insurance for New Zealand glaziers and glass businesses: public liability, defective workmanship, statutory liability, tools and vehicles, read against Building Code clause F2, NZS 4223.3 and the Building Act consumer protection rules.',
    stats: [
      { value: '2000 mm', label: 'Human impact zone', note: 'NZS 4223.3 covers glazing wholly or partly within 2000 mm of floor or ground level that is not protected from human impact.', source: 1 },
      { value: '$30,000', label: 'Disclosure threshold', note: 'Residential building work of $30,000 or more (incl GST) needs a disclosure statement setting out the contractor\'s insurance.', source: 2 },
      { value: '12 months', label: 'Defect repair period', note: 'Defects that emerge within 12 months of completion must be fixed by the contractor.', source: 3 },
    ],
    introText: [
      'Glass is heavy, sharp and unforgiving when it breaks, and a glazier handles it in other people\'s homes, shops and building sites. Glaziers insurance usually combines public liability for injury to others and damage to their property, a defective workmanship extension where available, statutory liability, and cover for tools, racks and vehicles.',
      'Much of the risk sits in the Building Code. Acceptable Solution F2/AS1 requires safety glass in certain locations such as doors, balustrades and bathrooms, and NZS 4223.3 sets requirements for glazing in areas of human impact. Glaziers who contract directly with homeowners for residential work of $30,000 or more must also give a disclosure statement that includes their insurance, and implied warranties and a 12-month defect repair period apply to residential building work.',
    ],
    whyNeedIt: [
      'Builders and commercial clients require it. Public liability insurance is generally not a legal requirement, but construction companies, head contractors and commercial clients routinely require it before work starts, often with a minimum limit and a certificate of currency.',
      'The wrong glass can injure someone years later. Where F2/AS1 is used, safety glass is required in locations such as doors, balustrades and bathrooms, and building officials check for it at inspection. Installing ordinary glass where safety glass was required is a defect in the glazier\'s own work, and it can also lead to injury.',
      'Your insurance can go on a disclosure statement. For residential building work of $30,000 or more, including GST, the contractor must disclose the insurance they hold, with the amount of cover and relevant exclusions. Knowingly giving false or misleading information can mean a fine of up to $50,000 for an individual or $150,000 for an organisation.',
      'Faulty work and resulting damage are treated differently. Liability wordings such as Vero\'s published broadform wording exclude the cost of correcting your own work, while covering resulting damage to other property you were not working on. A defective workmanship extension can widen that, so the wording matters.',
    ],
    legalCallout: {
      title: 'Safety glass under clause F2 and NZS 4223.3',
      body: 'Building consent applicants who use Acceptable Solution F2/AS1 to show compliance with Building Code clause F2 are required to use safety glass in certain locations, such as doors, balustrades and bathrooms, and building officials inspecting the work should satisfy themselves that safety glass has been used. Each safety glass panel must be permanently marked with the manufacturer or supplier, the type of safety glazing material, the Standard it was tested to and its impact classification. Removable labels do not count as permanent marking.',
      source: 0,
    },
    coverPackage:
      'For a glazier working directly for homeowners and businesses: public liability at a limit that meets your contracts, a defective workmanship extension where available, statutory liability for defence costs, and cover for tools, glass racks and vehicles. Glaziers working on commercial facades or at height, or supplying glass they have cut and processed, usually have more to check against their contracts.',
    costFrom: '',
    costFactors: [
      'Residential, commercial or both',
      'Installation, repairs or glass processing',
      'Work at height and on facades',
      'Public liability limit',
      'Annual turnover and wages',
      'Claims history',
    ],
    legalRequirements: [
      'Building Code clause F2: where Acceptable Solution F2/AS1 is used, safety glass is required in locations such as doors, balustrades and bathrooms, and each panel must be permanently marked.',
      'NZS 4223.3 is a means of compliance with Building Code clauses B1, F2 and F4, and covers glazing within 2000 mm of floor or ground level that is not protected from human impact.',
      'Building Act 2004: residential building work of $30,000 or more (incl GST) requires the contractor to give a disclosure statement that sets out the insurance they hold, with the amount of cover and relevant exclusions.',
      'Building Act 2004: implied warranties apply to all contracts for residential building work for up to 10 years, and defects that emerge within 12 months of completion must be fixed.',
      'Health and Safety at Work Act 2015: a business must eliminate risks so far as is reasonably practicable, or minimise them. It is an offence to offer or enter into insurance that pays a fine or infringement fee under the Act (section 29).',
    ],
    risks: [
      {
        title: 'Glass breakage and injury',
        desc: 'A pane breaks during handling or installation, or glass that should have been safety glass breaks later and injures someone.',
      },
      {
        title: 'Damage to the client\'s property',
        desc: 'A dropped pane or tool damages floors, joinery or fittings in the building where the glazier is working.',
      },
      {
        title: 'Defects after installation',
        desc: 'A window or shower screen leaks or fails after handover, inside the defect repair period or the implied warranty period.',
      },
    ],
    claimExamples: [
      {
        title: 'Ordinary glass in a bathroom',
        scenario: 'A glazier replaces a broken pane next to a bath with standard annealed glass. A year later a family member slips, falls against the pane and is cut when it breaks.',
        outcome: 'Public liability may respond to a claim for the injury, subject to its terms, alongside ACC\'s personal injury cover. Replacing the pane with safety glass is the glazier\'s own work and is usually excluded unless a defective workmanship extension applies.',
        coverType: 'Public liability and defective workmanship',
      },
      {
        title: 'A dropped pane cracks a tiled floor',
        scenario: 'Lifting a large pane into a new sliding door frame, two glaziers lose their grip. The pane shatters on the client\'s new tiled floor and chips the kitchen joinery.',
        outcome: 'Public liability generally responds to damage to other property the glaziers were not working on, such as the tiles and joinery, subject to the excess. The cost of the replacement glass itself is usually excluded.',
        coverType: 'Public liability',
      },
      {
        title: 'A workshop injury and a WorkSafe investigation',
        scenario: 'A worker is injured while clearing a jam on a glass cutting machine that has no isolation to stop it restarting. WorkSafe investigates the business.',
        outcome: 'ACC covers the worker\'s injury. Statutory liability may respond to defence costs if the business is charged. Fines under the Health and Safety at Work Act cannot be insured.',
        coverType: 'Statutory liability',
      },
    ],
    faqs: [
      {
        q: 'Do glaziers legally need insurance in NZ?',
        a: 'Insurance is generally not legally required. For residential building work of $30,000 or more, the Building Act does require the contractor to disclose the insurance they hold in a disclosure statement. In practice, construction companies, head contractors and commercial clients routinely require public liability before work starts.',
      },
      {
        q: 'Where is safety glass required?',
        a: 'Where Acceptable Solution F2/AS1 is used to show compliance with clause F2, safety glass is required in certain locations such as doors, balustrades and bathrooms. NZS 4223.3 sets the detailed requirements for glazing in areas subject to human impact, including glazing within 2000 mm of the floor or ground.',
      },
      {
        q: 'How is safety glass identified?',
        a: 'Each panel must be permanently marked with the name, trademark or code of the manufacturer or supplier, the type of safety glazing material, the Standard it was tested to, such as AS/NZS 2208, and its impact classification. Removable labels are not suitable as permanent marking.',
      },
      {
        q: 'Does public liability cover a leaking window I installed?',
        a: 'Generally not the cost of fixing the window itself. Liability wordings such as Vero\'s published broadform wording exclude the cost of correcting your own work, while covering resulting damage to other property, such as wall linings and floor coverings. A defective workmanship extension can widen this. The exact wording matters.',
      },
      {
        q: 'Do subcontract glaziers need to give a disclosure statement?',
        a: 'MBIE says a subcontractor hired by the main contractor does not need to provide a disclosure statement. The duty sits with the contractor who contracts with the homeowner for residential work of $30,000 or more.',
      },
      {
        q: 'Is ACC enough for a glazier?',
        a: 'ACC provides no-fault personal injury cover, including for self-employed people, and weekly compensation of up to 80% of earnings while injured. A claim for damage to a client\'s floor or joinery is not a personal injury claim.',
      },
    ],
    sources: [
      { label: 'MBIE Building Performance: Making sure you have safety glass', url: 'https://www.building.govt.nz/building-code-compliance/f-safety-of-users/f2-hazardous-building-materials/making-sure-you-have-safety-glass' },
      { label: 'MBIE Building CodeHub: NZS 4223.3:2016 Glazing in buildings, human impact safety requirements', url: 'https://codehub.building.govt.nz/resources/4223-32016-nzs' },
      { label: 'MBIE Building Performance: Consumer protection, disclosure and checklist', url: 'https://www.building.govt.nz/projects-and-consents/why-contracts-are-valuable/consumer-protection-disclosure-and-checklist' },
      { label: 'MBIE Building Performance: Implied warranties and defects', url: 'https://www.building.govt.nz/projects-and-consents/why-contracts-are-valuable/implied-warranties-and-defects' },
      { label: 'WorkSafe: Enforceable undertaking accepted from Woods Glass', url: 'https://www.worksafe.govt.nz/about-us/news-and-media/worksafe-accepts-enforceable-undertaking-from-woods-glass-new-zealand-limited/' },
      { label: 'Vero: Combined Broadform, Employers and Statutory Liability policy wording (07/24)', url: 'https://www.vero.co.nz/documents/business/vero-combined-broadform-liability-07-24.pdf' },
      { label: 'WorkSafe: Introduction to the Health and Safety at Work Act 2015', url: 'https://www.worksafe.govt.nz/managing-health-and-safety/getting-started/introduction-hswa-special-guide/' },
      { label: 'ACC: Getting to know ACC, overview for employers and the self-employed', url: 'https://www.acc.co.nz/assets/business/acc4871-business-overview.pdf' },
    ],
    recommendedCover: ['public-liability', 'statutory-liability', 'tools-equipment', 'commercial-vehicle'],
  },
  {
    slug: 'landscapers',
    name: 'Landscapers',
    icon: '🌿',
    heroImage: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1920&q=80',
    metaDescription:
      'Landscapers insurance in NZ: public liability, underground services, retaining walls, spraying and tree work, and the consent and WorkSafe rules.',
    heroLead:
      'What landscapers insure, where retaining walls, digging, spraying and tree work meet consent and safety rules, and where a standard liability policy stops.',
    description:
      'Insurance for landscapers and landscape construction businesses: public liability with underground services, weakening of support and pollution terms, tools, plant and vehicles, and statutory liability, set against the Schedule 1 retaining wall limits, WorkSafe excavation and tree work guidance, and regional spraying rules.',
    stats: [
      { value: '1.5 m', label: 'Retaining wall exemption', note: 'A retaining wall holding back no more than 1.5 m of ground, with no surcharge such as a driveway, needs no building consent.', source: 0 },
      { value: '1 m', label: 'Fall from a wall', note: 'Where there is a fall of 1 m or more from a retaining wall, a safety barrier may be required under Building Code clause F4.', source: 0 },
    ],
    introText: [
      'Landscaping is building work with soil, stone and plants. A single job can include excavation, retaining walls, paths and paving, decks, fences, irrigation, planting, spraying and tree work, often on a finished property with neighbours on every side. The claims that follow landscapers tend to come from the ground: services hit while digging, walls and banks that move, and runoff or spray that leaves the site.',
      'Much of this work is exempt from building consent under Schedule 1 of the Building Act, but the exemptions have limits. A retaining wall is exempt only if it retains no more than 1.5 metres of ground and carries no surcharge from things such as driveways, buildings or sloping ground above it, and exempt work must still meet the Building Code. Agrichemical spraying is governed by regional council plans, and WorkSafe\'s code for tree work expects the people doing it to be suitably qualified.',
    ],
    whyNeedIt: [
      'Contracts require it, even where the law does not. No law generally requires a landscaper to hold public liability insurance, but construction companies, head contractors and commercial clients routinely make it a condition of the contract before work starts, often with a minimum limit and a certificate of currency.',
      'Trenches and post holes find services. Some published liability wordings exclude damage to underground services, pipes and cables unless all reasonable steps were taken before work began to establish where they were, and then apply a separate excess. WorkSafe\'s guidance is to assume services are present and have them located and confirmed by the service owner.',
      'A wall that moves can take a neighbour\'s land with it. Damage caused by the withdrawal or weakening of support of land is a common liability exclusion, bought back by an extension with its own limit, and the cost of rebuilding the landscaper\'s own wall is generally outside public liability.',
      'Spray drift is treated as pollution. Liability wordings define chemicals as pollutants and exclude pollution unless it comes from a sudden, accidental and unexpected release. Regional councils set rules for spraying and spray drift in their regional plans, and some require commercial operators to be qualified or certified.',
    ],
    legalCallout: {
      title: 'Schedule 1: retaining walls without consent',
      body: 'Exemption 20 in Schedule 1 of the Building Act 2004 covers building work on a retaining wall that retains not more than 1.5 metres depth of ground and does not support any surcharge or additional load, such as vehicles. MBIE\'s guidance treats driveways, parking spaces, swimming pools, buildings, other retaining walls and sloping ground above the wall as surcharge. A wall outside those limits, or the part of a wall that exceeds 1.5 metres, needs a building consent, and exempt work must still comply with the Building Code.',
      source: 0,
    },
    coverPackage:
      'For a landscaping business: public liability at a limit that meets the contracts signed, with the underground services terms and a vibration and weakening of support extension checked against the digging and retaining work done, a defective workmanship extension, statutory liability, and cover for tools, plant, trailers and vehicles.',
    costFrom: '',
    costFactors: [
      'Mix of hard landscaping, planting and maintenance',
      'Excavation, retaining walls and use of machinery',
      'Spraying and tree work',
      'Public liability limit and extensions',
      'Value of plant, tools, trailers and vehicles',
      'Claims history',
    ],
    legalRequirements: [
      'Building Act 2004, Schedule 1 exemption 20: a retaining wall that retains no more than 1.5 m of ground and supports no surcharge needs no building consent; exemption 41 covers some rural walls up to 3 m designed or reviewed by a Chartered Professional Engineer.',
      'Building Act 2004, Schedule 1: decks and platforms are exempt only where it is not possible to fall more than 1.5 m, and fences only up to 2.5 m; all exempt work must still comply with the Building Code and laws such as the Resource Management Act 1991.',
      'WorkSafe must be notified at least 24 hours before work in an excavation more than 1.5 m deep that is deeper than it is wide at the top, and before any commercial tree felling.',
      'Regional council plans set rules for agrichemical spraying and spray drift, and some councils require commercial operators to be qualified or certified.',
      'WorkSafe\'s code of practice for arboriculture expects people doing tree work to be suitably qualified, and says no one should work alone aloft or with a chainsaw.',
      'Insurance cannot be used to pay fines or infringement fees under the Health and Safety at Work Act (section 29).',
    ],
    risks: [
      {
        title: 'Services hit while digging',
        desc: 'Trenching for irrigation, drainage or lighting cuts a cable or pipe. Cover depends on the policy\'s underground services terms and the steps taken to locate services first.',
      },
      {
        title: 'A retaining wall or bank that moves',
        desc: 'A wall leans or a cut bank slumps onto a neighbour\'s property. Loss of support is commonly excluded unless an extension applies.',
      },
      {
        title: 'Spray or runoff off site',
        desc: 'Herbicide drifts onto a neighbour\'s garden, or sediment washes into a drain. Pollution exclusions and council rules both come into play.',
      },
    ],
    claimExamples: [
      {
        title: 'An irrigation trench cuts a fibre cable',
        scenario: 'Trenching for an irrigation line with a mini digger, a landscaper cuts a fibre cable running under the front lawn. The street loses its connection until the cable is repaired.',
        outcome: 'Where the wording has an underground services condition, cover depends on whether reasonable steps were taken before work started to establish where services were. If they were, public liability may respond after the separate underground services excess.',
        coverType: 'Public liability (underground services)',
      },
      {
        title: 'A new wall leans after heavy rain',
        scenario: 'Months after a landscaper builds a timber retaining wall at the back of a section, heavy rain saturates the ground. The wall leans and soil spills through the neighbour\'s fence onto their lawn and garden shed.',
        outcome: 'Public liability may respond to damage to the neighbour\'s fence and shed, subject to any weakening of support exclusion and extension. Rebuilding the wall itself is usually excluded unless a defective workmanship extension applies.',
        coverType: 'Public liability and defective workmanship',
      },
      {
        title: 'Spray drift reaches the neighbour\'s garden',
        scenario: 'Spraying weeds along a boundary on a breezy day, a landscaper\'s herbicide drifts onto the neighbour\'s hedge and vegetable garden.',
        outcome: 'Herbicide is a chemical, and liability wordings commonly exclude pollutants unless the release was sudden, accidental and unexpected. Whether a drift event falls inside that carve-back depends on the wording and the facts, and spray drift can also be reported to the regional council.',
        coverType: 'Public liability (pollution terms)',
      },
    ],
    faqs: [
      {
        q: 'Do landscapers legally need insurance in NZ?',
        a: 'No law generally requires a landscaper to hold public liability insurance. In practice, construction companies, head contractors and commercial clients routinely require it before work starts, often with a minimum limit and proof of cover.',
      },
      {
        q: 'Can a landscaper build a retaining wall without a building consent?',
        a: 'Yes, within the limits of exemption 20: the wall retains no more than 1.5 metres of ground and supports no surcharge, such as a driveway, parking space, building, pool, another retaining wall or sloping ground above it. MBIE\'s guidance gives the example of a wall that ranges from 900 mm to 1.8 metres high, where the part over 1.5 metres needs a consent. Exempt walls must still comply with the Building Code.',
      },
      {
        q: 'Does public liability cover damage to underground services?',
        a: 'It depends on the wording. Some exclude damage to underground services, pipes and cables unless the business took all reasonable steps before starting to establish where they were, and then apply a separate excess. WorkSafe\'s guidance is to assume services are present, get plans, have services located and confirmed by the service owner, and dig with care as work gets closer, and the beforeUdig service takes requests for the location of cables and pipes.',
      },
      {
        q: 'Is spray drift covered?',
        a: 'Liability wordings commonly exclude pollution, including chemicals, unless it comes from an identifiable, sudden, accidental and unexpected release at a specific time and place. Some spray drift incidents may meet that test and others may not. Regional councils also set their own spraying rules, which vary by region.',
      },
      {
        q: 'What does WorkSafe expect for tree work?',
        a: 'WorkSafe\'s code of practice for arboriculture says people doing tree work should be suitably qualified, with competency outcomes documented, and that no one should work alone aloft or with a chainsaw. Commercial tree felling is also work that must be notified to WorkSafe at least 24 hours before it starts.',
      },
    ],
    sources: [
      { label: 'MBIE: Building work that does not require a building consent (Schedule 1 guidance, January 2026)', url: 'https://www.building.govt.nz/assets/Uploads/projects-and-consents/building-work-consent-not-required-guidance.pdf' },
      { label: 'WorkSafe: Excavation safety good practice guidelines', url: 'https://www.worksafe.govt.nz/topic-and-industry/excavation/excavation-safety-gpg/' },
      { label: 'WorkSafe: Risk involved when working near buried power cables', url: 'https://www.worksafe.govt.nz/about-us/news-and-media/risk-involved-when-working-near-buried-power-cables/' },
      { label: 'beforeUdig: Locating underground services', url: 'https://www.beforeudig.co.nz/' },
      { label: 'Hawke\'s Bay Regional Council: Agrichemical use', url: 'https://www.hbrc.govt.nz/environment/air-quality/agrichemical-use/' },
      { label: 'Bay of Plenty Regional Council: Spray drift', url: 'https://www.boprc.govt.nz/environment/pollution/spray-drift/' },
      { label: 'WorkSafe: Safety and health in arboriculture', url: 'https://www.worksafe.govt.nz/topic-and-industry/forestry/health-and-safety-in-the-arboriculture-industry/safety-and-health-in-arboriculture/' },
      { label: 'Vero: Combined Broadform, Employers and Statutory Liability policy wording', url: 'https://www.vero.co.nz/documents/business/vero-combined-broadform-liability-07-24.pdf' },
      { label: 'WorkSafe: Introduction to the Health and Safety at Work Act 2015', url: 'https://www.worksafe.govt.nz/managing-health-and-safety/getting-started/introduction-hswa-special-guide/' },
    ],
    recommendedCover: ['public-liability', 'tools-equipment', 'commercial-vehicle', 'statutory-liability'],
  },
  {
    slug: 'drain-layers',
    name: 'Drain Layers',
    icon: '🚿',
    heroImage: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1920&q=80',
    metaDescription:
      'Drainlayers insurance in NZ: public liability, underground services conditions, notifiable trenches and the insurance condition on self-certification.',
    heroLead:
      'How drainlaying licensing, excavation rules and buried services shape the insurance a drainlayer carries, and where standard liability cover stops.',
    description:
      'Drainlayers insurance for New Zealand drainlayers: public liability, underground services cover, statutory liability, plant and vehicles, read against PGDB licensing, self-certification and WorkSafe excavation rules.',
    stats: [
      { value: '1.5 metres', label: 'Notifiable trench depth', note: 'Work in a trench deeper than this, and deeper than it is wide at the top, must be notified to WorkSafe.', source: 4 },
      { value: '24 hours', label: 'Notice to WorkSafe', note: 'The minimum notice employers and the person controlling the site must give for particular hazardous work.', source: 4 },
      { value: '7 Sep 2026', label: 'Self-certification starts', note: 'Endorsed certifying drainlayers can self-certify eligible consented work. Appropriate insurance is a condition of the endorsement.', source: 1 },
    ],
    introText: [
      'Drains are the underground pipes that carry foul water or stormwater to an onsite wastewater system or a sewer, and installing, altering or repairing them is regulated under the Plumbers, Gasfitters, and Drainlayers Act. Insurance for a drainlaying business usually combines public liability for injury to others and damage to their property, statutory liability, and cover for plant, tools and vehicles.',
      'Most of the risk is in the ground. WorkSafe advises treating every site as having underground services, and some liability wordings exclude damage to underground cables and pipes unless the insured first checked with the owner, sighted a plan or used a competent third party to locate them. Trenches more than 1.5 metres deep that are deeper than they are wide must be notified to WorkSafe 24 hours ahead. From 7 September 2026, endorsed certifying drainlayers in New Zealand can also self-certify eligible consented work, with appropriate insurance a condition of the endorsement.',
    ],
    whyNeedIt: [
      'Contracts require it, even where the law does not. No law makes a drainlayer hold public liability insurance, but head contractors, builders and commercial clients routinely make it a condition of the contract, set a minimum limit, and ask for a certificate of currency before work starts. Without cover a business is shut out of that work, and the client is left exposed if something goes wrong.',
      'Buried services come with conditions. NZI\'s Broadform Liability wording, for example, excludes liability in connection with underground cables, pipes and other facilities, and restores cover only where the insured inquired with the authorities or owners, sighted a plan of their location, or used a competent third party to confirm it. Service plans can be wrong, so how the business locates services matters to the claim.',
      'The trench can damage more than the drain. Excavation can undermine nearby structures, and a collapse can happen quickly. Public liability responds to damage to other people\'s property, subject to its terms, while the cost of relaying the drainlayer\'s own faulty work is commonly excluded.',
      'Self-certification carries an insurance condition. The Board\'s 2026 Notice makes appropriate insurance, sufficient to cover the work being certified, a minimum standard for the endorsement. The Board does not prescribe an insurer, a policy type or a minimum amount of cover.',
    ],
    legalCallout: {
      title: 'Trenches deeper than 1.5 metres',
      body: 'Under the Health and Safety in Employment Regulations 1995, employers and the person who controls a place of work must give WorkSafe at least 24 hours\' notice of particular hazardous work. That includes work in any pit, shaft, trench or other excavation where a person works in a space more than 1.5 metres deep that is deeper than it is wide at the top, and work in any excavation where a person works with ground cover overhead.',
      source: 4,
    },
    coverPackage:
      'For a drainlaying business: public liability with an underground services extension whose conditions match how the business locates services, statutory liability, and cover for plant, tools and vehicles. For endorsed self-certifying drainlayers, the Board places the onus on the practitioner to take reasonable steps to ensure insurance is appropriate for the work they certify, and asks applicants to confirm this with their insurer.',
    costFrom: '',
    costFactors: [
      'Depth of excavation and use of mobile plant',
      'Work near roads and third-party services',
      'Residential, subdivision or commercial work',
      'Self-certification endorsement and volume of certified work',
      'Public liability limit and exclusions',
      'Claims history',
    ],
    legalRequirements: [
      'Plumbers, Gasfitters, and Drainlayers Act 2006: installing, altering or repairing a drain, including connecting a drain to an onsite wastewater system, is regulated drainlaying. A certifying drainlayer is responsible for testing, verifying and supervising the work of others.',
      'Building Act 2004: where building consent is required, drainlaying is checked by the building consent authority or, for eligible work from 7 September 2026, self-certified by an endorsed drainlayer, who must issue a certificate of compliance and supporting documents within 10 working days.',
      'Self-certification Notice 2026: an endorsed self-certifying drainlayer must hold appropriate insurance sufficient to cover the work they certify, and can certify only work they did or supervised.',
      'Health and Safety in Employment Regulations 1995: 24 hours\' notice to WorkSafe of work in a trench more than 1.5 metres deep and deeper than its width at the top, or in an excavation with ground cover overhead.',
      'Health and Safety at Work Act 2015: all excavation work must comply with the Act and its regulations, including the Health and Safety at Work (General Risk and Workplace Management) Regulations 2016.',
      'Plumbers, Gasfitters, and Drainlayers Act 2006: negligent, non-compliant or unauthorised work is a disciplinary offence, and the Board can impose a fine of up to $10,000 plus costs.',
    ],
    risks: [
      {
        title: 'Striking underground services',
        desc: 'An excavator bucket or trencher hits a power cable, gas main, water main or fibre line that was unmarked or wrongly marked.',
      },
      {
        title: 'Collapse and undermining',
        desc: 'A trench wall slumps or undermines a neighbouring structure, a driveway or a boundary wall.',
      },
      {
        title: 'Defects after handover',
        desc: 'A poorly graded or badly jointed drain causes a blockage or backflow months later.',
      },
    ],
    claimExamples: [
      {
        title: 'A bucket finds a fibre cable',
        scenario: 'Digging a new stormwater connection, a drainlayer\'s excavator cuts a fibre cable running across the property that did not appear on the plan held on site.',
        outcome: 'Public liability may respond to the cost of repairing the cable where the policy covers underground services. Wordings that exclude underground services usually restore cover only where the insured checked with the owner, sighted a plan or used a competent locator beforehand, so a strike without those steps is usually excluded unless the wording says otherwise.',
        coverType: 'Public liability (underground services)',
      },
      {
        title: 'A trench wall slumps toward a neighbour\'s garage',
        scenario: 'After heavy rain, the wall of an open sewer trench near the boundary slumps and the ground beneath a neighbour\'s garage slab settles and cracks.',
        outcome: 'Public liability generally responds to damage to the neighbour\'s property caused by the work, subject to the excess and the policy terms.',
        coverType: 'Public liability',
      },
      {
        title: 'A new sewer connection backs up',
        scenario: 'Months after a renovation, a joint in the new sewer line sags and wastewater backs up into a downstairs shower, damaging flooring and linings.',
        outcome: 'Public liability may respond to resulting damage to the house. The cost of digging up and relaying the faulty section is usually excluded as the drainlayer\'s own faulty work.',
        coverType: 'Public liability',
      },
    ],
    faqs: [
      {
        q: 'Do drainlayers legally need insurance in NZ?',
        a: 'No law requires a drainlayer to hold public liability insurance. Insurance does become a condition of the self-certification endorsement, which the Board grants only to certifying drainlayers who hold appropriate insurance for the work they certify. A drainlayer contracting directly with a homeowner on work of $30,000 or more must also disclose the insurance held. Head contractors and commercial clients routinely make public liability a condition of the contract.',
      },
      {
        q: 'Does public liability cover damage to underground services?',
        a: 'It depends on the wording. Some wordings exclude underground cables and pipes outright and give the cover back only where the insured checked with the owner or authority, sighted a plan, or used a competent third party to locate the services before digging.',
      },
      {
        q: 'What insurance does the Board require for self-certification?',
        a: 'Insurance that is appropriate for the work the drainlayer intends to carry out and self-certify. The Board does not prescribe a particular insurer, type of policy, wording or minimum amount of cover, and says premiums and conditions are matters for insurers.',
      },
      {
        q: 'Does drainlaying include council pipes?',
        a: 'No. Under the Board\'s description, drainlaying does not include pipes in the control of the Crown or a local authority, or open jointed or perforated drains for collecting groundwater.',
      },
      {
        q: 'Does public liability cover a trench collapse?',
        a: 'It may cover damage a collapse causes to other people\'s property, subject to the policy terms. It does not cover the cost of redoing the drainlayer\'s own work, which wordings commonly exclude as faulty workmanship.',
      },
    ],
    sources: [
      { label: 'Plumbers, Gasfitters, and Drainlayers Board: Advice for consumers', url: 'https://www.pgdb.co.nz/advice_for_consumers/' },
      { label: 'Plumbers, Gasfitters, and Drainlayers Board: Self-certification', url: 'https://www.pgdb.co.nz/manage_your_licence/self_certification/' },
      { label: 'PGDB: Self-certification by Plumbers and Drainlayers Notice 2026', url: 'https://www.pgdb.co.nz/media/ogua55un/plumbers-gasfitters-and-drainlayers-self-certification-by-plumbers-and-drainlayers-notice-2026.pdf' },
      { label: 'PGDB: Self-certification webinar questions and answers, 8 September 2026', url: 'https://www.pgdb.co.nz/media/zd4o4uhr/self-certification-webinar-08092026-a-and-as.pdf' },
      { label: 'WorkSafe: Particular hazardous work (notifiable works)', url: 'https://www.worksafe.govt.nz/notifications/report-scheduled-or-completed-work/hazardous-work/' },
      { label: 'WorkSafe: Excavation safety good practice guidelines', url: 'https://www.worksafe.govt.nz/topic-and-industry/excavation/excavation-safety-gpg/' },
      { label: 'NZI Liability Broadform policy wording (NZ5060/10, March 2018)', url: 'https://www.nzi.co.nz/content/dam/insurance-brands-nz/nzi/nz/en/documents/nzi/liability/nzi-liability-broadform-pw-nz5060-10-0318.pdf' },
      { label: 'MBIE Building Performance: Consumer protection, disclosure and checklist', url: 'https://www.building.govt.nz/projects-and-consents/why-contracts-are-valuable/consumer-protection-disclosure-and-checklist' },
      { label: 'MBIE Building Performance: Self-certification for plumbing and drainlaying, homeowners and consumers', url: 'https://www.building.govt.nz/projects-and-consents/self-certification-schemes/plumbers-and-drainlayers-scheme/homeowners-and-consumers' },
      { label: 'Plumbers, Gasfitters, and Drainlayers Board: Disciplinary hearings', url: 'https://www.pgdb.co.nz/complaints_and_disciplinary_processes/disciplinary_processes/' },
    ],
    recommendedCover: ['public-liability', 'statutory-liability', 'tools-equipment', 'commercial-vehicle'],
  },
  {
    slug: 'scaffolders',
    name: 'Scaffolders',
    icon: '🏗️',
    heroImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1920&q=80',
    // Every factual claim on this page is sourced (see `sources`). Rewritten
    // September 2026 to the builders model: no prices, no invented claim amounts.
    metaDescription:
      'Scaffolding insurance in NZ: public liability, statutory liability and equipment cover, read against certificates of competence and notifiable work.',
    heroLead:
      'What scaffolding businesses insure, the certificate of competence and notification rules above five metres, and where liability cover stops.',
    description:
      'Scaffolding insurance for New Zealand scaffolders: public liability, statutory liability, scaffold equipment and vehicles, read against WorkSafe scaffolding guidance, certificates of competence and notifiable hazardous work.',
    stats: [
      { value: '5 m', label: 'Certificate of competence', note: 'Erecting, altering, repairing or dismantling a scaffold with any part 5 m or more above ground needs the appropriate certificate of competence.', source: 0 },
      { value: '24 hours', label: 'Notice to WorkSafe', note: 'Erecting or dismantling scaffolding with a risk of falling 5 m or more needs 24 hours\' notice to WorkSafe.', source: 1 },
      { value: '4 years', label: 'Certificate validity', note: 'Certificates of competence are issued by SARNZ under delegated authority from WorkSafe and are valid for four years.', source: 0 },
    ],
    introText: [
      'A scaffold is a temporary structure that other trades, clients and the public walk under, work on and rely on. Scaffolding insurance is usually public liability for injury to others and damage to their property, with statutory liability, cover for scaffold equipment and vehicles, and attention to what happens when a scaffold is left on site for others to use.',
      'Scaffolding in New Zealand is regulated by the Health and Safety at Work Act 2015 and the Health and Safety in Employment Regulations 1995, which define basic, advanced and suspended scaffolding. Anyone erecting, altering, repairing or dismantling a scaffold with any part five metres or more above the ground must hold the appropriate certificate of competence, and scaffolds with a fall risk of five metres or more are notifiable to WorkSafe. WorkSafe has prosecuted a business after a worker fell from a mobile scaffold that had not been erected or checked by a competent person.',
    ],
    whyNeedIt: [
      'Head contractors will not let you on site without it. Public liability insurance is generally not a legal requirement, but construction companies, head contractors and commercial clients routinely require it before work starts, usually with a minimum limit and a certificate of currency.',
      'The public is underneath the work. WorkSafe guidance covers falling objects, work near footpaths and roads, and keeping pedestrians away from the work. A dropped tube or board that hits a passer-by or a parked car is a classic public liability claim.',
      'Power lines and scaffolds do not mix. For low voltage lines into a property, a scaffold must stay at least four metres away unless the property owner gives written consent, and without consent the power must be isolated for anything closer. Contact with a line can cause injury and damage.',
      'Prosecutions follow collapses and falls. After a WorkSafe prosecution, a company was fined $200,000 when a worker fell from a mobile scaffold that had not been erected correctly. Statutory liability can help with defence costs, but fines under the Health and Safety at Work Act cannot be insured.',
    ],
    legalCallout: {
      title: 'Certificates of competence and notifiable scaffolds',
      body: 'Anyone who erects, alters, repairs or dismantles a scaffold of which any part is five metres or more above the ground must hold the appropriate class of certificate of competence for that type of scaffold. The Health and Safety in Employment Regulations split scaffolding into basic, advanced and suspended. Certificates are issued by SARNZ under delegated authority from WorkSafe and are valid for four years. Erecting or dismantling scaffolding with a risk of falling five metres or more must also be notified to WorkSafe at least 24 hours before work starts.',
      source: 0,
    },
    coverPackage:
      'For a scaffolding business: public liability at a limit that meets your contracts, with attention to how the wording treats damage to the building being scaffolded and damage from vibration or loss of support, statutory liability for defence costs, and cover for scaffold equipment in the yard, in transit and on hire, plus vehicles. Businesses erecting public access or suspended scaffolds usually have more to check against their contracts.',
    costFrom: '',
    costFactors: [
      'Heights and types of scaffold erected',
      'Residential, commercial or civil work',
      'Scaffolds over footpaths and roads',
      'Public liability limit',
      'Value of scaffold equipment',
      'Claims history',
    ],
    legalRequirements: [
      'Health and Safety in Employment Regulations 1995: anyone erecting, altering, repairing or dismantling a scaffold with any part 5 m or more above ground must hold the appropriate certificate of competence (basic, advanced or suspended).',
      'Erecting or dismantling scaffolding with a risk of falling 5 m or more is particular hazardous work that must be notified to WorkSafe at least 24 hours in advance.',
      'Health and Safety at Work Act 2015: businesses on a shared site have overlapping duties and must consult, co-operate and co-ordinate with each other. They cannot contract out of their duties.',
      'NZECP 34 and WorkSafe guidance: scaffolding must be kept at least 4 m from a low voltage overhead line into a property unless the property owner has given written consent, or the power has been isolated.',
      'Work near roads must be approved by the local authority or road owner, and scaffolds for public access need resource and building consent.',
      'Health and Safety at Work Act 2015: it is an offence to offer or enter into insurance that pays a fine or infringement fee under the Act (section 29).',
    ],
    risks: [
      {
        title: 'Falling objects',
        desc: 'Tubes, clips, boards or debris fall from a scaffold onto people, vehicles or property below.',
      },
      {
        title: 'Collapse or wind damage',
        desc: 'A scaffold fails under load or wind, damaging the building it is tied to and neighbouring property.',
      },
      {
        title: 'Fall from height',
        desc: 'A worker or another trade falls from a scaffold that was not erected, altered or checked correctly, leading to injury and a WorkSafe investigation.',
      },
    ],
    claimExamples: [
      {
        title: 'A clip lands on a car',
        scenario: 'Dismantling a scaffold on a street-front shop, a scaffolder drops a coupler that falls onto a parked car and cracks the windscreen and bonnet.',
        outcome: 'Public liability generally responds to damage to third party property caused by the work, subject to the excess and the policy terms.',
        coverType: 'Public liability',
      },
      {
        title: 'Wind takes the sheeting',
        scenario: 'A sheeted scaffold on a two-storey house catches a strong gust. Several bays pull away from their ties, damaging the client\'s cladding and a neighbour\'s fence.',
        outcome: 'Public liability may respond to the damage to the neighbour\'s fence and the client\'s building, subject to its terms. Damage to the scaffolder\'s own equipment is not a liability claim and falls to equipment cover, if held.',
        coverType: 'Public liability and equipment',
      },
      {
        title: 'A fall and a prosecution',
        scenario: 'A painter falls from a scaffold after a missing guardrail was not replaced. WorkSafe investigates and charges both the scaffolding business and the head contractor.',
        outcome: 'Statutory liability may respond to defence costs. Fines under the Health and Safety at Work Act cannot be insured, although insurance can be used for reparation ordered by the court.',
        coverType: 'Statutory liability',
      },
    ],
    faqs: [
      {
        q: 'Do scaffolders legally need insurance in NZ?',
        a: 'Insurance is generally not legally required. What the law does require is a certificate of competence for scaffolds with any part five metres or more above the ground, and notice to WorkSafe for scaffolds with a fall risk of five metres or more. In practice, construction companies, head contractors and commercial clients routinely require public liability before work starts.',
      },
      {
        q: 'Who can erect a scaffold under five metres?',
        a: 'WorkSafe guidance says scaffolds up to five metres, measured to the highest component, can be erected by a competent person, meaning someone with the knowledge and skills for the task gained through training, qualification, experience or a combination. NZQA unit standards may help show competence.',
      },
      {
        q: 'When is a scaffold notifiable?',
        a: 'Erecting or dismantling scaffolding with a risk of falling five metres or more must be notified to WorkSafe at least 24 hours in advance. For notification, the height is measured from the highest platform a person could fall from, so a low platform beside a deep void can still be notifiable.',
      },
      {
        q: 'Does public liability cover damage to the building being scaffolded?',
        a: 'It depends on the wording and the cause. Liability wordings such as Vero\'s published broadform wording exclude the cost of correcting your own work, and some exclude or limit damage caused by vibration or the weakening of support. Damage to other parts of the building resulting from an accident can still be covered. The exact wording matters.',
      },
      {
        q: 'Can insurance pay a WorkSafe fine?',
        a: 'Not a fine or infringement fee under the Health and Safety at Work Act. Section 29 makes it an offence to offer or enter into insurance that pays one. Statutory liability can still help with defence costs, and insurance can be used for reparation ordered by the court.',
      },
      {
        q: 'Is ACC enough for a scaffolder?',
        a: 'ACC provides no-fault personal injury cover, including for self-employed people, and weekly compensation of up to 80% of earnings while injured. A claim for damage to a car, a neighbour\'s fence or a client\'s building is not a personal injury claim.',
      },
    ],
    sources: [
      { label: 'WorkSafe: Scaffolding in New Zealand, good practice guidelines', url: 'https://www.worksafe.govt.nz/topic-and-industry/working-at-height/scaffolding-in-new-zealand/' },
      { label: 'WorkSafe: Particular hazardous work (notifiable works)', url: 'https://www.worksafe.govt.nz/notifications/report-scheduled-or-completed-work/hazardous-work/' },
      { label: 'WorkSafe: Working near low voltage overhead electric lines', url: 'https://www.worksafe.govt.nz/topic-and-industry/electricity/working-near-low-voltage-overhead-electric-lines/' },
      { label: 'WorkSafe: Scaffold will only keep workers safe if erected by a competent person', url: 'https://www.worksafe.govt.nz/about-us/news-and-media/scaffold-will-only-keep-workers-safe-if-erected-by-a-competent-person/' },
      { label: 'WorkSafe: Introduction to the Health and Safety at Work Act 2015', url: 'https://www.worksafe.govt.nz/managing-health-and-safety/getting-started/introduction-hswa-special-guide/' },
      { label: 'Vero: Combined Broadform, Employers and Statutory Liability policy wording (07/24)', url: 'https://www.vero.co.nz/documents/business/vero-combined-broadform-liability-07-24.pdf' },
      { label: 'ACC: Getting to know ACC, overview for employers and the self-employed', url: 'https://www.acc.co.nz/assets/business/acc4871-business-overview.pdf' },
    ],
    recommendedCover: ['public-liability', 'statutory-liability', 'tools-equipment', 'commercial-vehicle'],
  },
  {
    slug: 'fencers',
    name: 'Fencers',
    icon: '🪵',
    heroImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1920&q=80',
    metaDescription:
      'Fencing contractor insurance in NZ: public liability, underground services and boundary risks, pool barrier rules and the 2.5 m building consent exemption.',
    heroLead:
      'What fencing contractors insure, how boundary, pool barrier and consent rules shape the work, and where a standard liability policy stops.',
    description:
      'Insurance for fencing contractors: public liability with underground services terms, defective workmanship, tools, plant and vehicles, and statutory liability, set against the Schedule 1 fence exemption, the residential pool barrier rules and the Fencing Act.',
    stats: [
      { value: '2.5 m', label: 'Fence exemption', note: 'Fences and garden walls up to 2.5 m above the supporting ground need no building consent, unless they restrict access to a residential pool.', source: 0 },
      { value: '400 mm', label: 'Pool barrier trigger', note: 'Residential pools capable of holding 400 mm or more of water must have a physical barrier.', source: 1 },
      { value: '3 years', label: 'Pool inspections', note: 'Residential pools must be inspected every three years by the council or an independently qualified pool inspector.', source: 1 },
    ],
    introText: [
      'Fencing looks simple and is full of other people\'s property: the client\'s, the neighbour\'s over the boundary, and the utilities under the ground where every post goes in. A fencing contractor\'s main liability exposures come from those three, alongside the tools, post drivers, augers and trailers carried from job to job.',
      'The consent rules are mostly light. In New Zealand, a fence or garden wall up to 2.5 metres high needs no building consent, although district plans often require a resource consent for fences over a certain height, usually two metres, and boundary fences sit under the Fencing Act 1978. Pool fencing is the exception: a fence that restricts access to a residential pool is outside the exemption, needs a building consent, and must meet Building Code clause F9, which is designed to prevent unsupervised access by children under five.',
    ],
    whyNeedIt: [
      'Contracts require it, even where the law does not. No law generally requires a fencer to hold public liability insurance, but construction companies, head contractors and commercial clients routinely make it a condition of the contract before work starts, often with a minimum limit and a certificate of currency.',
      'Every post is a services risk. WorkSafe\'s guidance is to assume there are services at the site and have them located and confirmed by the service owner, and it has warned that pins, stakes and waratahs driven into the ground can strike buried cables just as digging can. Some liability wordings exclude underground services damage unless reasonable steps were taken to find them first.',
      'The boundary is part of the job. A council guide to the Fencing Act notes that a boundary fence must be built on the correct legal boundary line. A fence in the wrong place is a problem with the work itself, and public liability wordings exclude the cost of correcting the work.',
      'Pool barriers carry a higher standard. A pool fence needs a building consent, pools are inspected every three years, and gates must open away from the pool and be self-closing and self-latching. Rework on a barrier that fails inspection is generally outside public liability unless a defective workmanship extension applies.',
    ],
    legalCallout: {
      title: 'Schedule 1: fences, and the pool exception',
      body: 'Exemption 21 in Schedule 1 of the Building Act 2004 covers building work on a fence or hoarding not exceeding 2.5 metres above the supporting ground, and MBIE\'s guidance says this includes garden walls. It does not include a fence or hoarding that restricts access to a residential pool; MBIE\'s guidance says a new pool fence needs a building consent and has to be installed before the pool is filled. Boundary fences must also meet the Fencing Act 1978, and district plans may require a resource consent for taller fences.',
      source: 0,
    },
    coverPackage:
      'For a fencing contractor: public liability at a limit that meets the contracts signed, with the underground services terms checked against post-hole and post-driving work, a defective workmanship extension, statutory liability, and cover for tools, post drivers, augers, trailers and vehicles.',
    costFrom: '',
    costFactors: [
      'Residential, rural or commercial fencing',
      'Pool barrier work',
      'Use of post drivers, augers and diggers',
      'Public liability limit',
      'Value of plant, tools, trailers and vehicles',
      'Claims history',
    ],
    legalRequirements: [
      'Building Act 2004, Schedule 1 exemption 21: fences and hoardings up to 2.5 m above the supporting ground need no building consent; fences restricting access to a residential pool are excluded and need consent.',
      'Building Code clause F9: residential pools capable of holding 400 mm or more of water must have a physical barrier to prevent unsupervised access by children under five, and must be inspected every three years.',
      'Pool gates must open away from the pool area and be self-closing and self-latching.',
      'Fencing Act 1978: neighbours are generally obliged to contribute to the cost of an adequate boundary fence, provided the procedures in the Act are followed.',
      'Health and Safety at Work Act 2015: WorkSafe\'s guidance is to assume underground services are present and have them located and confirmed before breaking ground. Insurance cannot be used to pay fines or infringement fees under the Act (section 29).',
    ],
    risks: [
      {
        title: 'A post or waratah through a service',
        desc: 'An auger, post driver or waratah strikes a power cable, gas line or water pipe. Cover depends on the underground services terms and the steps taken to locate services first.',
      },
      {
        title: 'A fence on the wrong line',
        desc: 'A fence is built off the legal boundary and has to come down. Rebuilding it is the cost of correcting the work, not a liability claim.',
      },
      {
        title: 'A pool barrier that fails inspection',
        desc: 'A gate does not self-close or self-latch, or the barrier does not meet F9. The rework falls to the contractor, usually outside public liability.',
      },
    ],
    claimExamples: [
      {
        title: 'A post driver hits a gas line',
        scenario: 'Driving posts for a boundary fence on a lifestyle block, a contractor\'s post driver punctures a buried gas line that was not on the plans the owner supplied. The area is cleared while the line is isolated and repaired.',
        outcome: 'Some wordings exclude underground services damage unless reasonable steps were taken beforehand to establish where services were, and then apply a separate excess. Whether plans were obtained from the service owners and the line located and marked goes to that condition.',
        coverType: 'Public liability (underground services)',
      },
      {
        title: 'A fence built over the line',
        scenario: 'A neighbour\'s survey shows a new paling fence sits inside their property. The fence has to be taken down and rebuilt on the correct line, and the neighbour\'s garden edging was damaged during the build.',
        outcome: 'Rebuilding the fence is the cost of correcting the work, which public liability wordings exclude. Damage to the neighbour\'s garden edging may respond as damage to other property, subject to the excess.',
        coverType: 'Public liability',
      },
      {
        title: 'A pool gate that does not latch',
        scenario: 'At the building consent inspection for a new pool barrier, the gate does not self-latch reliably. The pool owner asks the fencer to fix it before the pool can be filled.',
        outcome: 'Fixing the gate is rework on the contractor\'s own job and is usually excluded unless a defective workmanship extension applies. The standard the gate has to meet comes from Building Code clause F9 and the building consent, not from the insurance.',
        coverType: 'Defective workmanship',
      },
    ],
    faqs: [
      {
        q: 'Do fencers legally need insurance in NZ?',
        a: 'No law generally requires a fencing contractor to hold public liability insurance. In practice, construction companies, head contractors and commercial clients routinely require it before work starts, often with a minimum limit and proof of cover.',
      },
      {
        q: 'Does a fence need a building consent?',
        a: 'Not if it is no more than 2.5 metres high above the supporting ground, measured from the top of the fence to the ground directly below, and it does not restrict access to a residential pool. District plans may still require a resource consent for fences over a certain height, usually two metres, and all fences must still comply with the Building Code.',
      },
      {
        q: 'What are the rules for pool fencing?',
        a: 'Building Code clause F9 requires residential pools that can hold 400 mm or more of water to have a physical barrier that prevents unsupervised access by children under five. A building consent is needed before a pool barrier is installed, gates must open away from the pool and be self-closing and self-latching, and pools are inspected every three years by the council or an independently qualified pool inspector.',
      },
      {
        q: 'Does public liability cover hitting underground services?',
        a: 'It depends on the wording. Some exclude damage to underground services, pipes and cables unless all reasonable steps were taken before work to establish where they were, and then apply a separate excess. WorkSafe has warned that permit-to-dig systems should cover items driven into the ground, such as pins, stakes and waratahs, as well as digging.',
      },
      {
        q: 'Who pays for a boundary fence?',
        a: 'Under the Fencing Act 1978, the general rule is that neighbours contribute to the cost of an adequate fence between their properties, provided the procedures in the Act are followed. A fencing covenant can mean one neighbour does not have to contribute, and the Act does not apply to some land, such as roads.',
      },
      {
        q: 'Is ACC enough for a self-employed fencer?',
        a: 'ACC covers injury. For self-employed people, weekly compensation is usually up to 80% of the earnings declared to Inland Revenue and usually starts from day 8 after the injury. It does not cover illness or sickness, and it is not liability insurance for damage the business causes to other people\'s property.',
      },
    ],
    sources: [
      { label: 'MBIE: Building work that does not require a building consent (Schedule 1 guidance, January 2026)', url: 'https://www.building.govt.nz/assets/Uploads/projects-and-consents/building-work-consent-not-required-guidance.pdf' },
      { label: 'MBIE Building Performance: F9 Restricting access to residential pools', url: 'https://www.building.govt.nz/building-code-compliance/f-safety-of-users/pool-safety' },
      { label: 'MBIE Building Performance: Safety guidance for pool owners', url: 'https://www.building.govt.nz/building-code-compliance/f-safety-of-users/pool-safety/guidance-for-pool-owners' },
      { label: 'New Plymouth District Council: Fences', url: 'https://www.npdc.govt.nz/home-and-property/property/fences/' },
      { label: 'WorkSafe: Excavation safety good practice guidelines', url: 'https://www.worksafe.govt.nz/topic-and-industry/excavation/excavation-safety-gpg/' },
      { label: 'WorkSafe: Risk involved when working near buried power cables', url: 'https://www.worksafe.govt.nz/about-us/news-and-media/risk-involved-when-working-near-buried-power-cables/' },
      { label: 'Vero: Combined Broadform, Employers and Statutory Liability policy wording', url: 'https://www.vero.co.nz/documents/business/vero-combined-broadform-liability-07-24.pdf' },
      { label: 'WorkSafe: Introduction to the Health and Safety at Work Act 2015', url: 'https://www.worksafe.govt.nz/managing-health-and-safety/getting-started/introduction-hswa-special-guide/' },
      { label: 'ACC: Weekly compensation for self-employed people', url: 'https://www.acc.co.nz/im-injured/financial-support/weekly-compensation/weekly-compensation-for-self-employed' },
      { label: 'ACC: Injuries we don\'t cover', url: 'https://www.acc.co.nz/im-injured/what-we-cover/injuries-we-dont-cover' },
    ],
    recommendedCover: ['public-liability', 'tools-equipment', 'commercial-vehicle', 'statutory-liability'],
  },
  {
    slug: 'plasterers',
    name: 'Plasterers',
    icon: '🏗️',
    heroImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80',
    metaDescription:
      'Plasterers insurance in NZ: public liability, the External Plastering LBP licence, restricted building work, asbestos in old ceilings and leak exclusions.',
    heroLead:
      'What plasterers insure, how the External Plastering licence and restricted building work apply to cladding, and where standard liability policies stop.',
    description:
      'Plasterers insurance for New Zealand solid and interior plasterers: public liability, statutory liability, tools and vehicles, read against the LBP scheme, restricted building work, implied warranties and WorkSafe asbestos rules.',
    stats: [
      { value: '2', label: 'External plastering areas of practice', note: 'Solid plastering, and proprietary plaster cladding systems (PPCS).', source: 0 },
      { value: '$750', label: 'Unlicensed RBW infringement', note: 'Instant fine a council can issue when a non-LBP carries out restricted building work without appropriate supervision.', source: 1 },
      { value: '10 years', label: 'Implied warranties', note: 'Implied warranties on residential building work apply for up to 10 years, written contract or not.', source: 2 },
    ],
    introText: [
      'Plasterers insurance usually combines public liability for injury to other people and damage to their property, statutory liability for the cost of defending a prosecution, and cover for tools, mixers, scaffold gear and vehicles. How much weight each carries depends on the work: solid plaster and proprietary plaster cladding systems on the outside of homes, interior linings and stopping, or repairs to older ceilings and walls.',
      'External plastering is one of the seven Licensed Building Practitioner classes in New Zealand, which cover roles the scheme treats as crucial to a building\'s performance. On residential buildings, roof and wall cladding systems, including surface treatments such as waterproof coatings, are restricted building work that must be carried out or supervised by an appropriately licensed LBP. Inside, the issue is different: WorkSafe lists textured ceilings, wall linings, fire-rated plasterboard and sprayed coatings as places plasterers may meet asbestos.',
    ],
    whyNeedIt: [
      'Contracts require it, even where the law does not. Builders, head contractors and commercial clients routinely make public liability a condition of the subcontract, set a minimum limit, and ask for a certificate of currency before a plasterer goes on site.',
      'Cladding claims can arrive years later. Implied warranties on residential building work apply for up to 10 years and include that the work will be done competently and consistent with the Building Code. Some liability wordings, such as Vero\'s, exclude claims arising from a building\'s failure to prevent or manage the penetration of moisture, so a leaking cladding may sit outside public liability altogether.',
      'The licence brings its own obligations. An LBP who carries out or supervises restricted building work must provide a record of work when their part is complete, and can be the subject of a complaint to the Building Practitioners Board for negligent or incompetent work. A licence is a statement of competence, not insurance.',
      'Old ceilings can hide asbestos. Buildings built before 1 January 2000 are likely to contain asbestos-containing materials. Removing an asbestos-containing textured ceiling is removal work under WorkSafe guidance, and Vero\'s published wording excludes claims arising from asbestos.',
    ],
    legalCallout: {
      title: 'Restricted building work: external plastering',
      body: 'On houses and small to medium apartment buildings, work on the external moisture management system is restricted building work (RBW). Building Performance lists roof and wall cladding systems within it, down to flashings, joints and junctions, and surface treatments such as waterproof coatings. RBW must be carried out or supervised by an LBP licensed in the appropriate class, and the External Plastering licence covers two areas of practice: solid plastering and proprietary plaster cladding systems. A council can issue a $750 infringement fee to a non-licensed person carrying out RBW unsupervised, and a conviction can bring a fine of up to $50,000.',
      source: 3,
    },
    coverPackage:
      'For a plasterer working on exterior cladding: public liability at a limit that meets builder and client requirements, read against how the wording treats moisture and weathertightness claims, statutory liability, and cover for tools, mixers and vehicles. A defective workmanship extension, where one is available, can respond to accidental damage to property the plasterer is working on that the standard wording excludes. Interior plasterers carry less weathertightness exposure but more contact with pre-2000 linings, which brings the asbestos exclusion into view.',
    costFrom: '',
    costFactors: [
      'Annual turnover and wages',
      'Exterior cladding, interior linings or both',
      'Proprietary cladding systems used',
      'Residential or commercial work',
      'Public liability limit',
      'Claims history',
    ],
    legalRequirements: [
      'Building Act 2004: restricted building work on houses and small to medium apartment buildings, including cladding systems, must be carried out or supervised by an LBP licensed in the appropriate class.',
      'Each LBP who carries out or supervises restricted building work must complete a record of work when their part is complete, and give a copy to the owner and the council for consented work.',
      'Councils can issue instant fines of $750 to a non-licensed person doing restricted building work unsupervised, and $500 to an LBP working outside their licence class. A conviction under section 85 of the Building Act carries a fine of up to $50,000.',
      'Building Act 2004: implied warranties apply to residential building work for up to 10 years. For work of $30,000 or more (incl GST), the contractor who deals with the homeowner must provide a disclosure statement setting out their insurance; subcontractors engaged by that contractor do not.',
      'Health and Safety at Work (Asbestos) Regulations 2016: power tools, brooms and other equipment that release asbestos into the air are prohibited on asbestos unless designed or used to capture or suppress the fibres. Removal beyond 10m² of non-friable asbestos, or of any friable asbestos, needs a WorkSafe licence.',
      'Health and Safety at Work Act 2015, section 29: insurance cannot be used to pay fines or infringement fees under the Act.',
    ],
    risks: [
      {
        title: 'Water getting in behind the cladding',
        desc: 'A plaster system cracks or a junction fails and water reaches the framing. The claim may surface years later, and moisture exclusions can limit what liability cover pays.',
      },
      {
        title: 'Damage to the work itself',
        desc: 'Standard wordings exclude the cost of correcting the insured\'s own work. Resulting damage to separate parts of the building that were not being worked on is treated differently.',
      },
      {
        title: 'Asbestos in old ceilings and linings',
        desc: 'Sanding or cutting a textured ceiling or old lining that contains asbestos contaminates the house. Asbestos claims are excluded under wordings such as Vero\'s.',
      },
    ],
    claimExamples: [
      {
        title: 'Cracked plaster lets water in',
        scenario: 'Two years after a plaster cladding system is finished on a new house, the owner finds wet framing and damaged interior linings below a window junction.',
        outcome: 'Redoing the plaster itself is usually excluded as the cost of correcting the insured\'s own work. Damage to the interior linings may fall within public liability as damage to other parts of the building, unless the wording excludes claims arising from a failure to keep out moisture, as Vero\'s does.',
        coverType: 'Public liability and defective workmanship',
      },
      {
        title: 'A scaffold plank and a neighbour\'s car',
        scenario: 'While a crew strips scaffold after plastering a two-storey house, a plank slips and dents a neighbour\'s car parked on the other side of the boundary fence.',
        outcome: 'Public liability generally responds to damage to other people\'s property caused by the business, subject to the excess and the policy terms.',
        coverType: 'Public liability',
      },
      {
        title: 'Sanding a textured ceiling',
        scenario: 'Asked to flatten a textured lounge ceiling in a 1970s house, a plasterer starts sanding without having it tested. The ceiling contains asbestos and dust spreads through the house.',
        outcome: 'Claims arising from asbestos, including clean-up and loss of use of property, are excluded under wordings such as Vero\'s, which applies the exclusion in its statutory liability section as well. Using a sander on asbestos also breaches the Asbestos Regulations unless the equipment captures or suppresses the fibres.',
        coverType: 'Public liability and statutory liability',
      },
    ],
    faqs: [
      {
        q: 'Do plasterers legally need insurance in NZ?',
        a: 'Public liability insurance is generally not a legal requirement. In practice, construction companies, head contractors and commercial clients routinely require it before work starts, often with a minimum limit and a certificate of currency. What the law does require of an external plasterer is that restricted building work is done or supervised by an appropriately licensed LBP.',
      },
      {
        q: 'Which plastering work needs an LBP?',
        a: 'On houses and small to medium apartment buildings, work on roof and wall cladding systems, including plaster claddings and waterproof coatings, is restricted building work. It must be carried out or supervised by an LBP in the appropriate class, such as External Plastering, which has two areas of practice: solid plastering and proprietary plaster cladding systems. Interior stopping and linings are not an LBP licence class, and Site LBPs cannot supervise or sign off restricted building work.',
      },
      {
        q: 'Does public liability cover a leaking cladding?',
        a: 'Often only in part, and sometimes not at all. Public liability excludes the cost of redoing the insured\'s own work, and some wordings exclude claims arising from a building\'s failure to prevent or manage the penetration of moisture. A defective workmanship extension may respond to damage to property being worked on. The exclusions section of the wording decides the answer.',
      },
      {
        q: 'What is a record of work?',
        a: 'A record of building work, also called a memorandum, is written by each LBP who carried out or supervised part of the restricted building work, and details what they did. It goes to the owner and, for consented work, the council, and the owner needs every record of work to apply for a code compliance certificate. Failing to provide one is a ground for a complaint to the Building Practitioners Board.',
      },
      {
        q: 'Can a plasterer remove an old textured ceiling?',
        a: 'If the ceiling contains asbestos, removing it is asbestos removal work rather than minor asbestos-related work. Up to and including 10m² of non-friable asbestos over a whole project can be removed without a licence, with the right controls; more than that needs a licence, and friable asbestos needs a Class A licence. WorkSafe says that before a building is refurbished or demolished, all asbestos must be positively identified, removed and the building given clearance.',
      },
      {
        q: 'Is ACC enough for a plasterer?',
        a: 'ACC covers people injured in accidents, including a self-employed plasterer, and weekly compensation for the self-employed is usually up to 80% of declared earnings. It does not cover illness or sickness, and it is an injury scheme: damage to other people\'s property, defects in the work and the cost of defending a claim sit outside it.',
      },
    ],
    sources: [
      { label: 'Licensed Building Practitioners: Licensing classes', url: 'https://www.lbp.govt.nz/become-an-lbp/licensing-classes/' },
      { label: 'Licensed Building Practitioners: Offences and penalties', url: 'https://www.lbp.govt.nz/about-us/about-the-lbp-scheme/offences-and-penalties/' },
      { label: 'MBIE Building Performance: Implied warranties and defects', url: 'https://www.building.govt.nz/projects-and-consents/why-contracts-are-valuable/implied-warranties-and-defects' },
      { label: 'MBIE Building Performance: Restricted building work', url: 'https://www.building.govt.nz/projects-and-consents/planning-a-successful-build/scope-and-design/choosing-the-right-people-for-your-type-of-building-work/use-licensed-professionals-for-restricted-building-work/restricted-building-work' },
      { label: 'Licensed Building Practitioners: Restricted Building Work (RBW)', url: 'https://www.lbp.govt.nz/for-lbps/restricted-building-work/' },
      { label: 'Licensed Building Practitioners: Construction process and record of work', url: 'https://www.lbp.govt.nz/for-lbps/restricted-building-work/construction-process/' },
      { label: 'MBIE Building Performance: Consumer protection, disclosure and checklist', url: 'https://www.building.govt.nz/projects-and-consents/why-contracts-are-valuable/consumer-protection-disclosure-and-checklist' },
      { label: 'WorkSafe: Working with or near asbestos (guidance for tradespeople)', url: 'https://www.worksafe.govt.nz/topic-and-industry/asbestos/asbestos-information-for-tradespeople/working-with-or-near-asbestos/' },
      { label: 'WorkSafe: Asbestos licensing overview', url: 'https://www.worksafe.govt.nz/topic-and-industry/asbestos/licensing/overview/' },
      { label: 'Vero: Combined Broadform, Employers and Statutory Liability policy wording', url: 'https://www.vero.co.nz/documents/business/vero-combined-broadform-liability-07-24.pdf' },
      { label: 'WorkSafe: Introduction to the Health and Safety at Work Act 2015', url: 'https://www.worksafe.govt.nz/managing-health-and-safety/getting-started/introduction-hswa-special-guide/' },
      { label: 'ACC: Weekly compensation for self-employed', url: 'https://www.acc.co.nz/im-injured/financial-support/weekly-compensation/weekly-compensation-for-self-employed' },
    ],
    recommendedCover: ['public-liability', 'statutory-liability', 'tools-equipment', 'commercial-vehicle'],
  },
  {
    slug: 'hvac-technicians',
    name: 'HVAC Technicians',
    icon: '❄️',
    heroImage: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1920&q=80',
    metaDescription:
      'HVAC and heat pump insurance in NZ: public liability, professional indemnity, hot work conditions, refrigerant rules and electrical licensing.',
    heroLead:
      'How refrigerant rules, electrical licensing and warrant of fitness inspections shape insurance for HVAC and heat pump businesses, and where liability cover stops.',
    description:
      'HVAC insurance for New Zealand heat pump, air conditioning and refrigeration technicians: public liability, professional indemnity, statutory liability, tools and vehicles, read against refrigerant, electrical and building rules.',
    stats: [
      { value: 'A3', label: 'Hydrocarbon refrigerants', note: 'R290, R600a and R1270 are all classed A3, high flammability.', source: 0 },
      { value: '5 metres', label: 'Notifiable fall height', note: 'Construction work with a risk of falling this far or more must be notified to WorkSafe, with exclusions including residential buildings up to two full storeys.', source: 4 },
    ],
    introText: [
      'HVAC work puts refrigerants, electrical connections and roof or ceiling access into the same job. Insurance for an HVAC business usually combines public liability for injury to others and damage to their property, statutory liability for legal costs arising from unintentional breaches of statute, professional indemnity where systems are designed or specified, and cover for tools, recovery equipment and vehicles.',
      'Several regulators touch the work. The Electrical Workers Registration Board licenses the people who can carry out prescribed electrical work. WorkSafe treats a leak of hydrocarbon refrigerant as a serious fire or explosion risk, and under the Electricity (Safety) Regulations 2010 an installation is deemed unsafe if it is retrofitted with a refrigerant other than the one it was designed for. The Ozone Layer Protection Act 1996 makes it an offence to knowingly release controlled substances while installing, servicing, operating or dismantling equipment. In buildings with a compliance schedule, mechanical ventilation and air conditioning systems are specified systems inspected for the annual building warrant of fitness.',
    ],
    whyNeedIt: [
      'Contracts require it, even where the law does not. No law makes a HVAC business hold public liability insurance, but head contractors, builders and commercial clients routinely make it a condition of the contract, set a minimum limit, and ask for a certificate of currency before work starts. Without cover a business is shut out of that work, and the client is left exposed if something goes wrong.',
      'Refrigerant choices carry fire risk. Hydrocarbon refrigerants such as R290 are classed as highly flammable, and equipment using them must be designed and installed for that refrigerant. A fire traced to an installation is the kind of damage to other people\'s property that public liability is designed for, subject to its terms.',
      'Brazing on site is hot work. Some liability wordings exclude hot work away from the insured\'s own premises unless set conditions are met, such as a clearance of at least 10 metres from combustible material, extinguishers kept beside the work, and an examination of the area straight after the work and again an hour later.',
      'Design and advice sit outside public liability. Wordings such as NZI\'s exclude errors or omissions in service or advice given, restoring cover only for advice given without charge, so a claim that a system was sized or specified wrongly is usually excluded from public liability.',
    ],
    legalCallout: {
      title: 'Flammable refrigerants and retrofits',
      body: 'Under the Health and Safety at Work (Hazardous Substances) Regulations 2017, air conditioning, heat pump or refrigeration equipment operating on a hydrocarbon refrigerant must comply with AS/NZS 5149:2016; domestic refrigerators, domestic heat pumps and room air conditioners are instead covered by the appliance standard AS/NZS 60335. Under the Electricity (Safety) Regulations 2010, an installation is deemed unsafe if it is retrofitted with a refrigerant other than the one it was designed to operate on, unless the equipment has been adapted to operate safely or was designed for that refrigerant.',
      source: 0,
    },
    coverPackage:
      'For an HVAC business: public liability at a limit that meets contract requirements, with hot work conditions checked against how brazing is done on site; professional indemnity where the business designs, sizes or specifies systems; statutory liability; and cover for tools, recovery equipment and vehicles.',
    costFrom: '',
    costFactors: [
      'Domestic heat pumps, commercial HVAC or refrigeration',
      'Refrigerant types handled, including flammable refrigerants',
      'Design and specification work',
      'Work at height and on roofs',
      'Public liability limit and exclusions',
      'Claims history',
    ],
    legalRequirements: [
      'Electricity Act 1992 and Electricity (Safety) Regulations 2010: prescribed electrical work, including work on electrical installations and appliances, is carried out or supervised by people registered with, and holding a current practising licence from, the Electrical Workers Registration Board.',
      'Health and Safety at Work (Hazardous Substances) Regulations 2017: air conditioning, heat pump and refrigeration equipment using a hydrocarbon refrigerant must comply with AS/NZS 5149:2016. Domestic heat pumps and room air conditioners follow AS/NZS 60335.',
      'Electricity (Safety) Regulations 2010: an installation retrofitted with a refrigerant other than the one it was designed for is deemed unsafe, unless it has been adapted to operate safely or was designed for that refrigerant.',
      'Ozone Layer Protection Act 1996: it is an offence to knowingly release controlled substances during installation, servicing, operating or dismantling of equipment, and hydrofluorocarbons cannot be imported or exported except under a permit.',
      'Building Act 2004: mechanical ventilation and air conditioning systems are specified systems. The building owner must have them tested, maintained and reported on under the compliance schedule, including inspections by independent qualified persons (IQPs), for the annual building warrant of fitness.',
      'Health and Safety in Employment Regulations 1995: 24 hours\' notice to WorkSafe of construction work with a risk of falling 5 metres or more, excluding among other things residential buildings up to two full storeys and work from a ladder only.',
    ],
    risks: [
      {
        title: 'Fire from brazing or refrigerant',
        desc: 'Brazing in a ceiling space, or a leak of flammable refrigerant, starts a fire in the client\'s building.',
      },
      {
        title: 'Water damage from condensate',
        desc: 'A blocked or poorly fixed condensate drain from an indoor unit leaks into ceilings, walls and contents.',
      },
      {
        title: 'Design and sizing complaints',
        desc: 'A system specified by the business fails to heat or cool the building as promised, and the client claims the cost of replacing it.',
      },
    ],
    claimExamples: [
      {
        title: 'Brazing in a ceiling space',
        scenario: 'Joining refrigerant pipework for a ducted system, a technician brazes close to ceiling insulation, which smoulders and later catches alight.',
        outcome: 'Public liability generally responds to fire damage to the client\'s property, provided any hot work conditions in the wording were met, such as the clearance distance, extinguishers at hand and the check of the area after the work finishes.',
        coverType: 'Public liability',
      },
      {
        title: 'A condensate line slips off',
        scenario: 'A few weeks after a high-wall heat pump is installed, the condensate drain comes loose inside the wall and water runs down the cavity, staining linings and lifting flooring.',
        outcome: 'Public liability may respond to the resulting damage to the house, subject to the excess and the policy terms. Refitting the drain itself is usually excluded as faulty workmanship.',
        coverType: 'Public liability',
      },
      {
        title: 'An office system that never keeps up',
        scenario: 'An HVAC contractor designs and installs air conditioning for an office fit-out. In the first summer the system cannot hold temperature, and the client\'s engineer says it was undersized.',
        outcome: 'Public liability is usually excluded for errors in advice and design. Professional indemnity may respond to the client\'s claim, where the business holds it, subject to its terms.',
        coverType: 'Professional indemnity',
      },
    ],
    faqs: [
      {
        q: 'Do HVAC technicians legally need insurance in NZ?',
        a: 'No law requires an HVAC technician to hold public liability insurance. Where the business contracts directly with a homeowner on work of $30,000 or more (including GST), the Building Act requires a disclosure statement setting out the insurance held, with the amount of cover and relevant exclusions. Head contractors and commercial clients routinely make public liability a condition of the contract.',
      },
      {
        q: 'Can an HVAC technician do the electrical connection?',
        a: 'Only where they are authorised to do prescribed electrical work. That means being registered with the Electrical Workers Registration Board and holding a current practising licence, and the work they can do depends on their registration class.',
      },
      {
        q: 'Can an existing system be converted to a hydrocarbon refrigerant?',
        a: 'WorkSafe says a system retrofitted with a refrigerant other than the one it was designed for is deemed unsafe under the Electricity (Safety) Regulations 2010, unless it has been adapted to operate safely or was designed for that refrigerant. WorkSafe also states that retrofitting with a hydrocarbon refrigerant must not be undertaken unless the person has carried out a full redesign of the refrigerant system and a process safety review.',
      },
      {
        q: 'Is venting refrigerant an offence?',
        a: 'Knowingly releasing controlled substances during installation, servicing, operating or dismantling of equipment is an offence under the Ozone Layer Protection Act 1996. Liability wordings such as NZI\'s exclude fines and penalties.',
      },
      {
        q: 'Does public liability cover a system that was sized wrongly?',
        a: 'Generally not. Wordings such as NZI\'s exclude errors or omissions in service or advice given, except advice given without charge. Claims about design, sizing or specification fall to professional indemnity cover, where the business holds it.',
      },
    ],
    sources: [
      { label: 'WorkSafe technical bulletin: Hydrocarbon refrigerants', url: 'https://www.worksafe.govt.nz/about-us/news-and-media/hydrocarbon-refrigerants/' },
      { label: 'Ministry for the Environment: Ozone Layer Protection Act 1996', url: 'https://environment.govt.nz/acts-and-regulations/acts/ozone-layer-protection-act-1996/' },
      { label: 'Electrical Workers Registration Board: Prescribed electrical work', url: 'https://www.ewrb.govt.nz/licences/licence-information/prescribed-electrical-work-pew/' },
      { label: 'MBIE Building Performance: Specified systems and compliance schedules', url: 'https://www.building.govt.nz/managing-buildings/managing-your-bwof/specified-systems-and-compliance-schedules' },
      { label: 'WorkSafe: Particular hazardous work (notifiable works)', url: 'https://www.worksafe.govt.nz/notifications/report-scheduled-or-completed-work/hazardous-work/' },
      { label: 'NZI Liability Broadform policy wording (NZ5060/10, March 2018)', url: 'https://www.nzi.co.nz/content/dam/insurance-brands-nz/nzi/nz/en/documents/nzi/liability/nzi-liability-broadform-pw-nz5060-10-0318.pdf' },
      { label: 'NZI LiabilityOne policy document (NZ7397/1)', url: 'https://www.nzi.co.nz/content/dam/insurance-brands-nz/nzi/nz/en/documents/nzi/liability/nz-liability-one-nz7397-1-0123.pdf' },
      { label: 'MBIE Building Performance: Consumer protection, disclosure and checklist', url: 'https://www.building.govt.nz/projects-and-consents/why-contracts-are-valuable/consumer-protection-disclosure-and-checklist' },
    ],
    recommendedCover: ['public-liability', 'professional-indemnity', 'statutory-liability', 'tools-equipment', 'commercial-vehicle'],
  },
  {
    slug: 'arborists',
    name: 'Arborists',
    icon: '🌳',
    heroImage: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1920&q=80',
    // Every factual claim on this page is sourced (see `sources`). Rewritten
    // September 2026 to the builders model: no prices, no invented claim amounts.
    metaDescription:
      'Arborist insurance in NZ: public liability for falling limbs, underground services and power lines, plus statutory liability, tools and vehicles.',
    heroLead:
      'What tree work businesses insure, the power line and protected tree rules that shape the job, and where standard liability cover stops.',
    description:
      'Arborist insurance for New Zealand tree surgeons and tree work businesses: public liability, statutory liability, tools, chippers and vehicles, read against WorkSafe tree work codes, power line approach distances and council tree rules.',
    stats: [
      { value: '4 metres', label: 'Power line approach', note: 'Without written consent from the line owner, people must stay at least 4 m from lines up to 110 kV under the arboriculture code.', source: 1 },
      { value: '24 hours', label: 'Notice for tree felling', note: 'Commercial logging or tree felling is particular hazardous work that needs 24 hours\' notice to WorkSafe.', source: 4 },
      { value: '$250,000', label: 'Protected tree fine', note: 'Auckland Council says it may fine up to $250,000 under the Resource Management Act for unconsented work on protected trees.', source: 5 },
    ],
    introText: [
      'Tree work combines height, chainsaws, heavy falling timber and other people\'s property, often all on one site. Arborist insurance is usually public liability for injury to others and damage to their property, with statutory liability, cover for chainsaws, climbing gear and chippers, and vehicle cover alongside it.',
      'WorkSafe describes arboriculture as climbing, pruning, trimming, maintaining and removing trees, and notes that working at height adds to the risk of harm. In New Zealand, tree work near power lines is governed by minimum approach distances and line owner consent, and councils protect some trees through district plan rules. Each of those shapes what can go wrong, and what a policy is asked to respond to.',
    ],
    whyNeedIt: [
      'Contracts ask for it, even where the law does not. Public liability insurance is generally not a legal requirement, but construction companies, head contractors and commercial clients routinely require it before work starts, often with a minimum limit.',
      'Falling timber lands on other people\'s property. A limb that swings or drops the wrong way can hit a roof, fence, car or neighbour\'s building. Public liability is designed for that kind of third party damage, subject to its terms.',
      'Stump grinding and digging meet buried services. The arboriculture code of practice says work that may affect underground services, such as stump removal, shall be notified to the appropriate authority. Some liability wordings exclude damage to underground services unless reasonable steps were taken to locate them first.',
      'Power lines change the rules. Under the arboriculture code, people must not approach closer than four metres to lines up to 110 kV without the line owner\'s written consent, and never closer than six metres to lines over 110 kV. Contact with a line can injure the crew and damage the network owner\'s assets.',
    ],
    legalCallout: {
      title: 'Tree work near power lines',
      body: 'WorkSafe\'s arboriculture code of practice says all power lines must be treated as live unless an authorised person or competent electrical worker says otherwise. People must not approach closer than four metres to power lines up to and including 110 kV unless they have written consent and safety conditions from the line owner, and must never approach closer than six metres to lines over 110 kV. Mobile plant is subject to the same four metre limit without consent. WorkSafe notes this code has not been updated for the Health and Safety at Work Act 2015, but may still contain relevant practices.',
      source: 1,
    },
    coverPackage:
      'For an arborist working on residential and commercial sites: public liability at a limit that meets your contracts, with attention to how the wording treats underground services and damage caused by vibration or loss of support, statutory liability for defence costs, and cover for chainsaws, climbing equipment, chippers, stump grinders and vehicles. Crews working near power lines or roads usually have more to check against their contracts and consents.',
    costFrom: '',
    costFactors: [
      'Climbing, felling and removal work',
      'Work near power lines',
      'Chippers, stump grinders and EWPs',
      'Public liability limit',
      'Annual turnover and number of crew',
      'Claims history',
    ],
    legalRequirements: [
      'Health and Safety at Work Act 2015: a business must eliminate risks so far as is reasonably practicable, or minimise them if they cannot be eliminated. WorkSafe\'s arboriculture codes of practice set out preferred practices for tree work.',
      'Commercial logging or tree felling is particular hazardous work, and WorkSafe must be given 24 hours\' notice before it starts.',
      'Power lines: people and mobile plant must not approach closer than four metres to lines up to 110 kV without the line owner\'s written consent and safety conditions, and people must never approach closer than six metres to lines over 110 kV.',
      'Electricity (Hazards from Trees) Regulations 2003: set distances within which trees must not encroach on conductors, and rules on who is responsible for cutting or trimming them.',
      'Resource Management Act 1991: work on trees protected by district plan rules can require resource consent. Auckland Council says it may fine up to $250,000 for unconsented work near a protected tree.',
      'Health and Safety at Work Act 2015: it is an offence to offer or enter into insurance that pays a fine or infringement fee under the Act (section 29).',
    ],
    risks: [
      {
        title: 'Timber falls on property',
        desc: 'A limb or section of trunk lands on a house, vehicle, fence or neighbouring building during pruning or removal.',
      },
      {
        title: 'Buried services damaged',
        desc: 'A stump grinder or excavator hits a water pipe, drain, cable or fibre duct. Cover can depend on whether the services were located first.',
      },
      {
        title: 'Contact with a power line',
        desc: 'A branch, rope or piece of plant comes too close to a live line, injuring a worker or damaging the line.',
      },
    ],
    claimExamples: [
      {
        title: 'A lowered section hits a roof',
        scenario: 'Dismantling a large tree in a back garden, a crew lowers a section of trunk on a rope. The rigging point shifts and the section swings into the neighbour\'s roof, breaking tiles and damaging the ceiling below.',
        outcome: 'Public liability generally responds to damage to the neighbour\'s property caused by the work, subject to the excess and the policy terms.',
        coverType: 'Public liability',
      },
      {
        title: 'A stump grinder finds a pipe',
        scenario: 'Grinding out a stump close to a boundary, an arborist cuts a shallow water supply pipe that runs beneath it, flooding the section.',
        outcome: 'Public liability may respond, but some wordings exclude damage to underground services unless reasonable steps were taken beforehand to establish where they were, and a separate excess can apply.',
        coverType: 'Public liability',
      },
      {
        title: 'A branch brings down a service line',
        scenario: 'Pruning near a house, a cut branch falls across the overhead line that runs from the street to the building, pulling it from its fitting and damaging the gutter and fascia.',
        outcome: 'Public liability may respond to damage to the owner\'s property, subject to the policy terms. Work near lines is also governed by approach distances and consent, which are relevant when a claim is assessed.',
        coverType: 'Public liability',
      },
    ],
    faqs: [
      {
        q: 'Do arborists legally need insurance in NZ?',
        a: 'Insurance is generally not legally required. The legal obligations come from health and safety law, the electricity rules on approach distances, and council rules on protected trees. In practice, construction companies, head contractors and commercial clients routinely require public liability before work starts.',
      },
      {
        q: 'How close can an arborist work to power lines?',
        a: 'Under WorkSafe\'s arboriculture code, people must not approach closer than four metres to lines up to and including 110 kV without written consent and safety conditions from the line owner, and must never approach closer than six metres to lines over 110 kV. Mobile plant is also limited to four metres without consent.',
      },
      {
        q: 'Who is responsible for trees growing into power lines?',
        a: 'The Electricity (Hazards from Trees) Regulations 2003 set the distances within which trees must not encroach on electrical conductors, set rules on who is responsible for cutting or trimming them, and assign liability if those rules are breached. Disputes between tree owners and line owners can go to arbitration.',
      },
      {
        q: 'Does public liability cover damage to underground pipes and cables?',
        a: 'It depends on the wording. One published wording excludes damage to underground services unless the insured took all reasonable steps before work started to establish their position and to avoid damage, and then applies a separate excess.',
      },
      {
        q: 'What if a tree turns out to be protected?',
        a: 'Some trees are protected by district plan rules, and working on them can require resource consent. Auckland Council says it may fine up to $250,000 under the Resource Management Act for unconsented work near a protected tree. Checking a tree\'s status is part of planning the job.',
      },
      {
        q: 'Is ACC enough for an arborist?',
        a: 'ACC provides no-fault personal injury cover, including for self-employed people, and weekly compensation of up to 80% of earnings while injured. A claim for damage to a client\'s or neighbour\'s property is not a personal injury claim.',
      },
    ],
    sources: [
      { label: 'WorkSafe: Health and safety in the arboriculture industry', url: 'https://www.worksafe.govt.nz/topic-and-industry/forestry/health-and-safety-in-the-arboriculture-industry/' },
      { label: 'WorkSafe: Approved code of practice, safety and health in arboriculture', url: 'https://www.worksafe.govt.nz/topic-and-industry/forestry/health-and-safety-in-the-arboriculture-industry/safety-and-health-in-arboriculture/' },
      { label: 'WorkSafe: Approved code of practice, maintenance of trees around power lines', url: 'https://www.worksafe.govt.nz/topic-and-industry/forestry/maintenance-of-trees-around-powerlines/' },
      { label: 'WorkSafe: Electricity (Hazards from Trees) Regulations 2003', url: 'https://www.worksafe.govt.nz/laws-and-regulations/regulations/electrical-regulations/electricity-hazards-from-trees-regulations-2003/' },
      { label: 'WorkSafe: Particular hazardous work (notifiable works)', url: 'https://www.worksafe.govt.nz/notifications/report-scheduled-or-completed-work/hazardous-work/' },
      { label: 'Auckland Council: Working on or around protected trees', url: 'https://www.aucklandcouncil.govt.nz/en/building-and-consents/working-on-around-trees/working-on-around-protected-trees.html' },
      { label: 'Vero: Combined Broadform, Employers and Statutory Liability policy wording (07/24)', url: 'https://www.vero.co.nz/documents/business/vero-combined-broadform-liability-07-24.pdf' },
      { label: 'WorkSafe: Introduction to the Health and Safety at Work Act 2015', url: 'https://www.worksafe.govt.nz/managing-health-and-safety/getting-started/introduction-hswa-special-guide/' },
      { label: 'ACC: Getting to know ACC, overview for employers and the self-employed', url: 'https://www.acc.co.nz/assets/business/acc4871-business-overview.pdf' },
    ],
    recommendedCover: ['public-liability', 'tools-equipment', 'statutory-liability', 'commercial-vehicle'],
  },
  {
    slug: 'welders',
    name: 'Welders',
    icon: '🔧',
    heroImage: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1920&q=80',
    // Every factual claim on this page is sourced (see `sources`). Rewritten
    // September 2026 to the builders model: no prices, no invented claim amounts.
    metaDescription:
      'Welders insurance in NZ: public and products liability, hot work conditions, statutory liability and tools, read against WorkSafe welding guidance.',
    heroLead:
      'What welders and fabricators insure, how hot work conditions in liability policies work, and what WorkSafe expects around fume and fire.',
    description:
      'Welders insurance for New Zealand welders, fabricators and engineering shops: public and products liability, hot work conditions, statutory liability and tools, read against WorkSafe guidance on welding fume and fire risk.',
    stats: [
      { value: 'Group 1', label: 'Welding fume', note: 'The International Agency for Research on Cancer classifies all welding fume, including from mild steel, as a Group 1 carcinogen.', source: 0 },
      { value: '30 minutes', label: 'Fire watch', note: 'WorkSafe guidance says a fire watcher should stay on watch for at least 30 minutes after hot work finishes.', source: 0 },
      { value: '6 metres', label: 'Clearance in one wording', note: 'One insurer\'s hot work extension requires combustibles to be cleared at least 6 metres from welding or cutting, or covered.', source: 2 },
    ],
    introText: [
      'Welding insurance is usually built around public liability, with products liability for items a fabricator makes and supplies, plus statutory liability, tools and equipment, and vehicle cover. Where the welding happens matters as much as what is welded: a workshop, a client\'s factory floor and a construction site each carry different fire and injury risks.',
      'Welding and hot work away from the workshop bring their own conditions. WorkSafe guidance for New Zealand welding businesses says sparks, drips of metal and slag can travel a considerable distance and start fires, and sets out controls such as hot work permits and a fire watcher. At least one published liability wording attaches similar precautions to cover for hot work away from the insured\'s premises, so the way a crew works on site can decide whether a claim is covered.',
    ],
    whyNeedIt: [
      'Clients and head contractors ask for it. Public liability insurance is generally not a legal requirement, but construction companies, head contractors and commercial clients routinely require it before work starts, often with a minimum limit and a certificate of currency.',
      'Hot work cover comes with conditions. One published liability wording covers heat work away from the insured\'s premises only if precautions are followed each time, including clearing combustibles for at least six metres, keeping a suitable extinguisher at hand and checking for signs of fire half an hour after work stops.',
      'Fabricated work leaves the workshop. A bracket, balustrade or frame that fails after installation can injure people or damage property long after the job is finished. One published liability wording covers products claims with a single limit for all products claims in each period of insurance.',
      'Fume and fire are regulated hazards. WorkSafe says there is no known safe level of exposure to any type of welding fume, and that fires and explosions, many fatal, have been caused by welding and hot work near flammable materials. A prosecution brings defence costs, and fines under the Health and Safety at Work Act cannot be insured.',
    ],
    legalCallout: {
      title: 'WorkSafe on welding fume and fire',
      body: 'Since 2019 the International Agency for Research on Cancer has classified all welding fume, including from mild steel, as a substance that may cause cancer, and WorkSafe states there is no known safe level of exposure. Under the Health and Safety at Work Act a business must eliminate risks so far as is reasonably practicable, or minimise them if they cannot be eliminated. For hot work, WorkSafe guidance includes clearing ignition sources, using a hot work permit and keeping a fire watcher on watch for at least 30 minutes after work finishes.',
      source: 0,
    },
    coverPackage:
      'For a welding or fabrication business: public liability at a limit that meets your contracts, products liability for items you make and supply, a clear understanding of the hot work conditions in your wording, statutory liability for defence costs, and cover for welding plant, tools and vehicles. Businesses doing site work in occupied buildings or hazardous areas usually have more to check against their contracts.',
    costFrom: '',
    costFactors: [
      'Workshop, site work or both',
      'Hot work away from your premises',
      'Products made and supplied',
      'Public liability limit',
      'Annual turnover and wages',
      'Claims history',
    ],
    legalRequirements: [
      'Health and Safety at Work Act 2015: a business must eliminate risks to health and safety so far as is reasonably practicable, and if that is not possible, minimise them so far as is reasonably practicable.',
      'WorkSafe must be notified of notifiable injuries and illnesses and notifiable incidents, such as an electric shock, arising from the work.',
      'A business must have a written emergency plan for the workplace, and an adequate number of workers must be trained in first aid or have access to trained people.',
      'Gas cylinders, including cryogenic containers, must meet the requirements of regulation 15.7(1) of the Hazardous Substances Regulations before being supplied or used.',
      'Health and Safety at Work Act 2015: it is an offence to offer or enter into insurance that pays a fine or infringement fee under the Act (section 29).',
    ],
    risks: [
      {
        title: 'Fire from hot work on site',
        desc: 'Sparks or slag from welding, cutting or grinding ignite combustible material in a client\'s building or a neighbouring property.',
      },
      {
        title: 'Failure of a fabricated product',
        desc: 'A weld on a supplied bracket, frame or balustrade fails after installation and injures someone or damages property.',
      },
      {
        title: 'Worker exposure to fume and gases',
        desc: 'Welding produces toxic fumes and gases, and fume is a known carcinogen. Exposure can lead to WorkSafe action as well as ill health.',
      },
    ],
    claimExamples: [
      {
        title: 'Slag falls into a ceiling space',
        scenario: 'Welding a steel beam connection in an occupied warehouse, a welder lets slag drop through a gap in the floor onto stored cardboard below. A fire starts after the crew has left.',
        outcome: 'Public liability may respond to the damage to the client\'s building and stock, but only if the hot work conditions in the wording were met, such as clearing combustibles, having an extinguisher at hand and checking for fire afterwards.',
        coverType: 'Public liability (hot work)',
      },
      {
        title: 'A fabricated bracket gives way',
        scenario: 'A steel bracket made in a fabricator\'s workshop and fitted by a builder fails months later, dropping a heavy fixture onto a parked vehicle.',
        outcome: 'Products liability generally responds to the damage to the vehicle, subject to the policy\'s products aggregate limit. The cost of remaking or replacing the bracket itself is usually excluded.',
        coverType: 'Products liability',
      },
      {
        title: 'A prosecution after an injury',
        scenario: 'A worker is burned while cutting a drum that held a flammable substance. WorkSafe investigates and charges the business.',
        outcome: 'Statutory liability may respond to defence costs. Fines under the Health and Safety at Work Act cannot be insured, although insurance can be used for reparation ordered by the court.',
        coverType: 'Statutory liability',
      },
    ],
    faqs: [
      {
        q: 'Do welders legally need insurance in NZ?',
        a: 'Insurance is generally not legally required. The legal duties come from the Health and Safety at Work Act. In practice, construction companies, head contractors and commercial clients routinely require public liability before work starts.',
      },
      {
        q: 'What is a hot work condition?',
        a: 'Some liability wordings only cover welding, cutting or other heat work away from your premises if listed precautions are followed on each occasion. In one published wording these include clearing combustible material for at least six metres or covering it with fireproof blankets, keeping a suitable extinguisher next to the work, and checking for signs of fire half an hour after each period of work.',
      },
      {
        q: 'Does public liability cover a weld that fails?',
        a: 'Generally not the cost of redoing the weld or remaking the item. Liability wordings such as Vero\'s published broadform wording exclude the cost of correcting your own work or replacing your own products, while covering legal liability for resulting injury or damage to other property.',
      },
      {
        q: 'What does WorkSafe say about welding fume?',
        a: 'WorkSafe states that since 2019 all welding fume, including from mild steel, has been classified by the International Agency for Research on Cancer as a substance that may cause cancer, and that there is currently no known safe level of exposure to any type of welding fume.',
      },
      {
        q: 'Can insurance pay a WorkSafe fine?',
        a: 'Not a fine or infringement fee under the Health and Safety at Work Act. Section 29 makes it an offence to offer or enter into insurance that pays one. Statutory liability can still help with defence costs, and insurance can be used for reparation ordered by the court.',
      },
      {
        q: 'Is ACC enough for a welder?',
        a: 'ACC provides no-fault personal injury cover and can cover conditions that develop over time because of the work someone does. It does not cover illness or non-work-related disease. A claim for fire damage to a client\'s building is not a personal injury claim.',
      },
    ],
    sources: [
      { label: 'WorkSafe: Health and safety in welding', url: 'https://www.worksafe.govt.nz/topic-and-industry/welding/health-safety-in-welding/' },
      { label: 'WorkSafe: Toolbox talk 1, welding work health effects', url: 'https://www.worksafe.govt.nz/topic-and-industry/welding/toolbox-talk-1-welding-work-health-effects/' },
      { label: 'Vero: Combined Broadform, Employers and Statutory Liability policy wording (07/24)', url: 'https://www.vero.co.nz/documents/business/vero-combined-broadform-liability-07-24.pdf' },
      { label: 'WorkSafe: Introduction to the Health and Safety at Work Act 2015', url: 'https://www.worksafe.govt.nz/managing-health-and-safety/getting-started/introduction-hswa-special-guide/' },
      { label: 'ACC: Injuries we cover', url: 'https://www.acc.co.nz/im-injured/what-we-cover/injuries-we-cover' },
      { label: 'ACC: Getting to know ACC, overview for employers and the self-employed', url: 'https://www.acc.co.nz/assets/business/acc4871-business-overview.pdf' },
    ],
    recommendedCover: ['public-liability', 'statutory-liability', 'tools-equipment', 'commercial-vehicle'],
  },
  {
    slug: 'irrigation-specialists',
    name: 'Irrigation Specialists',
    icon: '💧',
    heroImage: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1920&q=80',
    metaDescription:
      'Irrigation installer insurance in NZ: public liability, underground services and property-worked-on limits, and the backflow rules for irrigation.',
    heroLead:
      'What irrigation installers insure, how backflow and buried-services rules bear on the work, and where a standard liability policy stops.',
    description:
      'Irrigation insurance for New Zealand irrigation installers: public liability, underground services cover, tools, plant and vehicles, read against council backflow rules and building warrant of fitness inspections.',
    stats: [
      { value: 'Medium', label: 'Backflow risk rating', note: 'Watercare lists garden irrigation systems as a medium-risk activity needing a double-check valve.', source: 0 },
      { value: 'Annual', label: 'Backflow device testing', note: 'Testable backflow devices on medium and high-risk connections are tested every year.', source: 0 },
    ],
    introText: [
      'Irrigation work combines trenching, a connection to a water supply, and a system that runs unattended once it is handed over. Insurance for an irrigation business usually combines public liability for injury to others and damage to their property, statutory liability, and cover for tools, trenching plant and vehicles.',
      'Where a system draws from a drinking-water supply, water suppliers treat it as a backflow risk. Watercare classes garden irrigation systems as medium risk, needing a double-check valve tested annually, and Whakatāne District Council lists in-ground irrigation among the features that make a domestic property medium or high risk. Automatic backflow preventers connected to a potable supply are also a specified system under the Building Act, inspected under the building\'s compliance schedule for its annual building warrant of fitness.',
    ],
    whyNeedIt: [
      'Contracts require it, even where the law does not. No law makes a irrigation installer hold public liability insurance, but head contractors, builders and commercial clients routinely make it a condition of the contract, set a minimum limit, and ask for a certificate of currency before work starts. Without cover a business is shut out of that work, and the client is left exposed if something goes wrong.',
      'The client\'s grounds are the worksite. Liability wordings commonly exclude property in the insured\'s control and property being worked on unless an optional extension is added, so damage to the lawn, paths or garden the crew is working on is not automatically covered.',
      'Trenching meets buried services. WorkSafe advises assuming there are underground services on every site, and some liability wordings exclude underground cables and pipes unless the insured checked with the owner, sighted a plan or used a competent third party to locate them.',
      'Design and advice sit outside public liability. Wordings such as NZI\'s exclude errors or omissions in service or advice given, restoring cover only for advice given without charge, and optional extensions can exclude defects in design, plans or specifications.',
    ],
    legalCallout: {
      title: 'Backflow protection on irrigation',
      body: 'Backflow devices protect the drinking-water network from contamination. Watercare lists garden irrigation systems as a medium-risk activity requiring a double-check valve, with annual testing, and requires a backflow device for anyone installing an irrigation meter. In Auckland the property owner is responsible for maintaining and annually testing the boundary device, while Auckland Council oversees testing of internal devices under the Building Act.',
      source: 0,
    },
    coverPackage:
      'For an irrigation installer: public liability with an underground services extension and, where available, an extension for property being worked on; statutory liability; and cover for tools, trenching plant and vehicles. Businesses that design systems for a fee face the advice and design exclusions in standard liability wordings, which is where professional indemnity cover sits.',
    costFrom: '',
    costFactors: [
      'Residential, commercial or rural work',
      'Trenching and use of mobile plant',
      'Connections to a mains water supply',
      'Design work charged for',
      'Public liability limit and exclusions',
      'Claims history',
    ],
    legalRequirements: [
      'Water supplier rules: Watercare classes garden irrigation systems as a medium backflow risk, requiring a double-check valve tested annually, and requires a backflow device for an irrigation meter.',
      'Building Act 2004: automatic backflow preventers connected to a potable water supply are a specified system, tested, maintained and reported on under the compliance schedule, including inspections by independent qualified persons (IQPs), for the annual building warrant of fitness.',
      'Council rules vary: Selwyn District Council states that to keep a building warrant of fitness current, all backflow devices must be inspected and tested annually by an IQP. Whakatāne District Council owns and tests boundary devices and recovers the cost from medium and high-risk properties.',
      'Plumbers, Gasfitters, and Drainlayers Board: fixing or unfixing any pipe that supplies, or is intended to supply, water is on the Board\'s list of plumbing a homeowner cannot do.',
      'Health and Safety at Work Act 2015: excavation work, including trenching, must comply with the Act and its regulations. WorkSafe guidance is to locate and confirm underground services with the service owner before digging.',
    ],
    risks: [
      {
        title: 'Cutting a buried service',
        desc: 'A trencher or spade cuts a power cable, gas line, water main or fibre cable along the line of a new irrigation run.',
      },
      {
        title: 'Water damage from a failed fitting',
        desc: 'A split fitting or a valve that fails to close discharges water unnoticed against a foundation, under a deck or into a neighbour\'s property.',
      },
      {
        title: 'Damage to the client\'s grounds',
        desc: 'Machinery ruts a lawn, cracks a path or damages plantings in the area being worked on, which standard wordings often exclude.',
      },
    ],
    claimExamples: [
      {
        title: 'A trencher cuts a power cable',
        scenario: 'Laying a new line across a front lawn, an installer\'s trencher cuts the house\'s underground power supply cable, which was not where the site plan showed it.',
        outcome: 'Public liability may respond to the cost of repairing the cable where the policy covers underground services. Wordings that exclude underground services usually restore cover only where the insured checked with the owner, sighted a plan or used a competent locator, so a strike without those steps is usually excluded unless the wording says otherwise.',
        coverType: 'Public liability (underground services)',
      },
      {
        title: 'A fitting fails under a deck',
        scenario: 'A week after installation, a fitting on the mainline splits beneath a timber deck. Water runs for several days before it is found, soaking the subfloor and damaging flooring inside.',
        outcome: 'Public liability may respond to the resulting damage to the house, subject to the excess and the policy terms. Replacing the failed fitting itself is usually excluded as faulty workmanship.',
        coverType: 'Public liability',
      },
      {
        title: 'Ruts across the lawn being worked on',
        scenario: 'A compact loader used to move pipe and fittings leaves deep ruts and breaks edging across the lawn the crew is installing sprinklers into.',
        outcome: 'Damage to the property being worked on is usually excluded unless the policy includes an extension for property being worked on. Damage to a neighbour\'s lawn is a more typical public liability claim.',
        coverType: 'Public liability (property worked on)',
      },
    ],
    faqs: [
      {
        q: 'Do irrigation installers legally need insurance in NZ?',
        a: 'No law requires an irrigation installer to hold public liability insurance. Head contractors, landscapers, councils and commercial clients routinely make public liability a condition of the contract, set a minimum limit and ask for a certificate of currency before work starts.',
      },
      {
        q: 'Does an irrigation system need a backflow device?',
        a: 'Watercare lists garden irrigation systems as medium risk, needing a double-check valve, and requires a backflow device for anyone installing an irrigation meter. Requirements vary between councils.',
      },
      {
        q: 'Who tests backflow devices?',
        a: 'It depends on where the device sits and on the council. In Auckland the property owner is responsible for annually testing the boundary device. Where a device is on a building\'s compliance schedule, it is inspected for the building warrant of fitness, and Selwyn District Council states that must be done annually by an independent qualified person (IQP).',
      },
      {
        q: 'Does public liability cover damage to the lawn being worked on?',
        a: 'Often not. Wordings commonly exclude property in the insured\'s control and property being worked on. Some insurers offer an optional extension for property being worked on.',
      },
      {
        q: 'Does public liability cover a system design that does not work?',
        a: 'Generally not. Wordings such as NZI\'s exclude errors or omissions in service or advice given, except advice given without charge, and extensions can exclude defects in design, plans or specifications. Professional indemnity is the cover built for charged advice and design.',
      },
    ],
    sources: [
      { label: 'Watercare: Backflow', url: 'https://www.watercare.co.nz/home/about-us/what-we-do/water-collection-treatment-and-monitoring/backflow' },
      { label: 'Whakatāne District Council: Backflow prevention', url: 'https://www.whakatane.govt.nz/services/water-services/water/backflow-prevention' },
      { label: 'Selwyn District Council: Backflow prevention requirements', url: 'https://www.selwyn.govt.nz/services/water/water-supplies/water-quality-in-selwyn-district/backflow-prevention-requirements' },
      { label: 'MBIE Building Performance: Specified systems and compliance schedules', url: 'https://www.building.govt.nz/managing-buildings/managing-your-bwof/specified-systems-and-compliance-schedules' },
      { label: 'Plumbers, Gasfitters, and Drainlayers Board: Advice for consumers', url: 'https://www.pgdb.co.nz/advice_for_consumers/' },
      { label: 'WorkSafe: Excavation safety good practice guidelines', url: 'https://www.worksafe.govt.nz/topic-and-industry/excavation/excavation-safety-gpg/' },
      { label: 'NZI Liability Broadform policy wording (NZ5060/10, March 2018)', url: 'https://www.nzi.co.nz/content/dam/insurance-brands-nz/nzi/nz/en/documents/nzi/liability/nzi-liability-broadform-pw-nz5060-10-0318.pdf' },
    ],
    recommendedCover: ['public-liability', 'tools-equipment', 'statutory-liability', 'professional-indemnity', 'commercial-vehicle'],
  },
]

export function getTradeBySlug(slug: string): TradeType | undefined {
  return tradeTypes.find((t) => t.slug === slug)
}
