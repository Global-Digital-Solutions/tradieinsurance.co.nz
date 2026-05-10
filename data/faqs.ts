export interface Faq {
  q: string
  a: string
  category: string
}

export const faqs: Faq[] = [
  {
    q: 'How much does tradie insurance cost?',
    a: 'The cost of tradie insurance varies by trade, cover type, turnover, and number of employees. Public liability for a sole trader typically starts from NZ$30/month. A comprehensive package including public liability, tools, commercial vehicle, and income protection might cost NZ$150–$350/month. Use our free quote service to get an accurate figure for your specific situation.',
    category: 'Cost',
  },
  {
    q: 'Is tradie insurance legally required?',
    a: 'Public liability insurance is not universally mandated by law for all tradies. However, most principal contractors and building contracts require subcontractors to hold public liability before starting work. Some licensed trades have additional requirements. Even where not mandatory, working without cover exposes you to potentially unlimited personal liability.',
    category: 'Requirements',
  },
  {
    q: 'Does ACC cover self-employed tradies?',
    a: 'ACC covers injuries that result from an accident — whether at work or elsewhere. Self-employed tradies pay ACC levies and receive cover for accidental injuries. However, ACC does not cover illness, which is where income protection insurance fills the gap. ACC also has caps on income replacement that may not fully replace your earnings if you are on a higher income.',
    category: 'ACC',
  },
  {
    q: 'What is the difference between public liability and professional indemnity?',
    a: 'Public liability covers claims for physical injury or property damage caused by your work. Professional indemnity covers claims arising from errors in your professional advice, design, or certification — financial losses rather than physical damage. Most tradies need public liability; professional indemnity is most important for those who design, certify, or provide specialist technical advice.',
    category: 'Cover Types',
  },
  {
    q: 'Are my tools covered when they are in my ute or van?',
    a: 'This depends on your policy. Many tools insurance policies cover tools in locked vehicles, but conditions often apply — the vehicle must be locked, tools stored out of sight, and some policies require a locked toolbox or canopy. Check your policy wording carefully and ensure your security arrangements meet the policy conditions, or a theft claim could be declined.',
    category: 'Tools',
  },
  {
    q: 'Do I need separate insurance for each vehicle in my fleet?',
    a: 'If you have multiple vehicles, a fleet policy is often more cost-effective than insuring each vehicle separately. Fleet policies simplify administration (one policy, one renewal), often offer discounts, and can be structured to allow any nominated driver to operate any vehicle. Talk to a broker about fleet options if you have three or more vehicles.',
    category: 'Vehicles',
  },
  {
    q: 'What level of public liability do I need as a tradie?',
    a: 'The right level of cover depends on your trade and client requirements. Residential trades typically need NZ$1M–$2M. Commercial building work typically requires NZ$5M–$10M. Infrastructure and large commercial projects may require NZ$20M or more. Always check your building contracts and any principal contractor requirements — and when in doubt, choose a higher limit.',
    category: 'Cover Levels',
  },
  {
    q: 'Can subcontractors be covered under my policy?',
    a: 'Some policies extend cover to subcontractors while they are working under your direction, but this is not universal. Many principal contractors require subcontractors to hold their own public liability cover. Check your policy carefully, and as a best practice, always require evidence of insurance from subcontractors you engage.',
    category: 'Subcontractors',
  },
  {
    q: 'What is statutory liability insurance and do I need it?',
    a: 'Statutory liability insurance covers your legal defence costs (and fines where insurable) if you unintentionally breach NZ legislation — most commonly the Health and Safety at Work Act 2015. It is important for any tradie with employees or working in high-risk environments. WorkSafe NZ prosecutions can result in significant fines and legal costs even for unintentional breaches.',
    category: 'Statutory Liability',
  },
  {
    q: 'How does income protection work for a self-employed tradie?',
    a: 'Income protection insurance replaces up to 75% of your pre-disability income if you cannot work due to illness or injury. For self-employed tradies, income is assessed from your recent tax returns. Benefits begin after a waiting period (typically 4, 8, or 13 weeks) and can continue for 2 years, 5 years, or to age 65 depending on the policy. It complements ACC by covering illness and filling any gaps in ACC coverage.',
    category: 'Income Protection',
  },
  {
    q: 'Does tradie insurance cover damage caused by my employees?',
    a: 'Most public liability policies extend to cover liability arising from the actions of your employees while acting in the course of their employment. However, deliberate acts and acts outside the scope of employment are typically excluded. If you have employees, make sure your policy specifically extends to their actions — and implement appropriate training and supervision.',
    category: 'Employees',
  },
  {
    q: 'What is contract works insurance and do tradies need it?',
    a: 'Contract works insurance (also called construction all-risks) covers damage to the works under construction — the partially built structure, materials on site, and temporary structures. It is separate from public liability. Who is responsible for holding it depends on the building contract — sometimes the homeowner or principal contractor holds it; other times the head contractor is required to arrange it.',
    category: 'Contract Works',
  },
  {
    q: 'Can I get tradie insurance if I have had a previous claim?',
    a: 'Yes — previous claims do not automatically disqualify you from getting tradie insurance. Insurers will assess the nature, frequency, and size of previous claims when calculating your premium and deciding whether to offer cover. A broker can help you find the best option given your claims history and may be able to access specialist insurers who are more flexible on prior claims.',
    category: 'Claims History',
  },
  {
    q: 'How quickly can I get tradie insurance arranged?',
    a: 'For standard tradie insurance requirements, cover can often be arranged within a day or two of providing your details. Some online platforms offer same-day cover for simple risk profiles. For more complex requirements — higher limits, specialist trades, or significant turnover — allow a few days for a broker to obtain and compare quotes. Do not start work on a site without confirming your cover is in force.',
    category: 'Getting Cover',
  },
  {
    q: 'What is the best way to compare tradie insurance?',
    a: 'The most effective way to compare tradie insurance is through a specialist broker who can access multiple insurers on your behalf. A broker understands the nuances of trade-specific cover, can identify gaps in standard policies, and can negotiate terms. Online comparison platforms like BizCover offer a fast alternative for simpler risk profiles. Our free quote service connects you with licensed brokers who specialise in trade insurance.',
    category: 'Comparison',
  },
]
