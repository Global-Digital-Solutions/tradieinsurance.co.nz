import type { Metadata } from 'next'
import Link from 'next/link'
import { siteConfig } from '@/data/site-config'

export const metadata: Metadata = {
  title: 'Terms of Use | TradieInsurance.co.nz',
  description: 'Terms of Use for TradieInsurance.co.nz — the terms governing your use of our NZ tradie insurance referral website.',
  alternates: { canonical: `${siteConfig.url}/terms/` },
}

export default function TermsPage() {
  return (
    <>
      <div className="bg-gray-900 border-b border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-white">Terms of Use</span>
          </nav>
          <h1 className="text-4xl font-extrabold text-white mb-2">Terms of Use</h1>
          <p className="text-gray-400 text-sm">Last updated: 10 May 2026</p>
        </div>
      </div>
      <div className="bg-white py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose-tradie">
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing and using TradieInsurance.co.nz (the &quot;Website&quot;), you agree to be bound by these Terms of Use. If you do not agree, please do not use the Website.</p>

          <h2>2. Nature of Service</h2>
          <p>TradieInsurance.co.nz is an information and referral service only. We do not provide financial advice, act as an insurance broker, or sell insurance products directly. We connect users with licensed New Zealand insurance brokers and advisers who are regulated under the Financial Markets Conduct Act 2013 (FMCA).</p>
          <p>The information on this website is general in nature and does not constitute financial advice. You should seek advice from a licensed financial adviser before making any insurance decisions.</p>

          <h2>3. Accuracy of Information</h2>
          <p>We endeavour to keep the information on this Website accurate and up to date. However, we make no representation or warranty as to the accuracy, completeness, or currency of any information on the Website. Insurance products, premiums, and requirements can change — always confirm current details with the broker or insurer.</p>

          <h2>4. Referral Process</h2>
          <p>When you submit a quote request, you consent to us sharing your contact details and insurance requirements with a licensed insurance broker in our referral network. That broker may contact you by phone, email, or other means to discuss your requirements. We receive a referral fee if you proceed with a policy arranged through the broker.</p>

          <h2>5. Third-Party Links and Services</h2>
          <p>This Website may contain links to third-party websites. We are not responsible for the content, accuracy, or privacy practices of those websites. Referral to a broker through this Website does not constitute an endorsement of that broker&apos;s services beyond matching you based on your stated requirements.</p>

          <h2>6. Limitation of Liability</h2>
          <p>To the maximum extent permitted by law, TradieInsurance.co.nz and its operators shall not be liable for any direct, indirect, incidental, consequential, or special damages arising from your use of the Website or from any insurance decisions made on the basis of information found on this Website.</p>

          <h2>7. Intellectual Property</h2>
          <p>All content on this Website, including text, graphics, and design, is owned by or licensed to TradieInsurance.co.nz. You may not reproduce, distribute, or use this content without written permission, except for personal, non-commercial purposes.</p>

          <h2>8. Governing Law</h2>
          <p>These Terms of Use are governed by the laws of New Zealand. Any disputes will be subject to the exclusive jurisdiction of the New Zealand courts.</p>

          <h2>9. Changes to Terms</h2>
          <p>We may update these Terms of Use from time to time. Continued use of the Website after changes are posted constitutes acceptance of the revised terms.</p>

          <h2>10. Contact</h2>
          <p>For questions about these terms, contact us at <a href={`mailto:${siteConfig.email}`} className="text-orange-500">{siteConfig.email}</a>.</p>
        </div>
      </div>
    </>
  )
}
