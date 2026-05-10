import type { Metadata } from 'next'
import Link from 'next/link'
import { siteConfig } from '@/data/site-config'

export const metadata: Metadata = {
  title: 'Disclaimer | TradieInsurance.co.nz',
  description: 'Disclaimer for TradieInsurance.co.nz — important information about our referral service, our relationship with brokers, and what we are and are not.',
  alternates: { canonical: `${siteConfig.url}/disclaimer/` },
}

export default function DisclaimerPage() {
  return (
    <>
      <div className="bg-gray-900 border-b border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-white">Disclaimer</span>
          </nav>
          <h1 className="text-4xl font-extrabold text-white mb-2">Disclaimer</h1>
          <p className="text-gray-400 text-sm">Last updated: 10 May 2026</p>
        </div>
      </div>
      <div className="bg-white py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose-tradie">
          <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6 mb-8">
            <p className="font-bold text-gray-900 mb-2">Important Notice</p>
            <p className="text-gray-700">TradieInsurance.co.nz is an information and referral service. We are NOT a licensed financial adviser, insurance broker, or insurer. We do not provide financial advice. The information on this website is general in nature only.</p>
          </div>

          <h2>1. We Are a Referral Service, Not a Regulated Financial Adviser</h2>
          <p>TradieInsurance.co.nz operates as a referral and comparison information service. This website does not provide financial advice and is not regulated under the Financial Markets Conduct Act 2013 (FMCA) as a financial advice provider.</p>
          <p>The licensed insurance brokers and financial advisers we refer you to ARE regulated under the FMCA. They hold Financial Advice Provider (FAP) licences issued by the Financial Markets Authority (FMA) and are required to comply with the obligations of that licensing regime, including providing personalised financial advice and disclosing any conflicts of interest.</p>

          <h2>2. General Information Only</h2>
          <p>All information on this website about insurance products, premiums, coverage types, legal requirements, and provider comparisons is general information only. It is not tailored to your individual circumstances and should not be relied upon as financial advice.</p>
          <p>Insurance needs vary significantly by trade, business size, contract requirements, and individual circumstances. Always seek advice from a licensed financial adviser before making insurance decisions.</p>

          <h2>3. Premium and Cost Estimates</h2>
          <p>Any premium ranges or cost estimates mentioned on this website are indicative only, based on typical market conditions at the time of writing. Actual premiums will vary based on your specific risk profile, trade, turnover, claims history, and insurer. Always obtain a formal quote from a licensed broker before making a decision.</p>

          <h2>4. Provider Information</h2>
          <p>Information about insurance providers on this website is based on publicly available information and is provided for general comparison purposes only. It does not constitute an endorsement of any provider. Provider offerings, ratings, and pricing change over time — always verify current information with the provider or a licensed broker.</p>

          <h2>5. Regulatory Compliance Guidance</h2>
          <p>Information on this website about regulatory requirements (such as WorkSafe NZ obligations, HSWA requirements, or licensing requirements for specific trades) is general guidance only. Laws and regulations can change. Always seek specific legal or professional advice for your compliance obligations.</p>

          <h2>6. Remuneration Disclosure</h2>
          <p>TradieInsurance.co.nz receives a referral fee from insurance brokers when we refer you to them and you proceed with a policy. This is disclosed upfront so you can make an informed choice. The brokers we refer you to will provide their own remuneration disclosure as required by the FMCA.</p>

          <h2>7. No Warranty</h2>
          <p>To the maximum extent permitted by law, TradieInsurance.co.nz makes no warranties, express or implied, regarding the accuracy, completeness, or suitability of information on this website for any particular purpose.</p>

          <h2>8. Contact</h2>
          <p>For any questions about this disclaimer or our service, contact us at <a href={`mailto:${siteConfig.email}`} className="text-orange-500">{siteConfig.email}</a>.</p>
        </div>
      </div>
    </>
  )
}
