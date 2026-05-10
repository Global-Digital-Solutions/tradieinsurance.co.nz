import type { Metadata } from 'next'
import Link from 'next/link'
import { siteConfig } from '@/data/site-config'

export const metadata: Metadata = {
  title: 'Privacy Policy | TradieInsurance.co.nz',
  description: 'Privacy Policy for TradieInsurance.co.nz — how we collect, use, and protect your personal information under the Privacy Act 2020.',
  alternates: { canonical: `${siteConfig.url}/privacy/` },
}

export default function PrivacyPage() {
  return (
    <>
      <div className="bg-gray-900 border-b border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-white">Privacy Policy</span>
          </nav>
          <h1 className="text-4xl font-extrabold text-white mb-2">Privacy Policy</h1>
          <p className="text-gray-400 text-sm">Last updated: 10 May 2026</p>
        </div>
      </div>
      <div className="bg-white py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose-tradie">
          <h2>1. Who We Are</h2>
          <p>TradieInsurance.co.nz is operated as an insurance referral and comparison service for New Zealand tradies. Our website is located at {siteConfig.url} and our contact email is {siteConfig.email}.</p>

          <h2>2. Our Commitment to Your Privacy</h2>
          <p>We are committed to protecting your personal information in accordance with the Privacy Act 2020 (NZ). This policy explains what information we collect, why we collect it, how we use it, and your rights in relation to it.</p>

          <h2>3. Information We Collect</h2>
          <p>When you use our website or submit a quote request, we may collect:</p>
          <ul>
            <li>Name, email address, and phone number</li>
            <li>Information about your trade type, business size, and insurance requirements</li>
            <li>Technical information about your device and browser (via analytics tools)</li>
            <li>IP address and general location data</li>
          </ul>

          <h2>4. How We Use Your Information</h2>
          <p>We use your personal information to:</p>
          <ul>
            <li>Match you with appropriate specialist insurance brokers in our referral network</li>
            <li>Share your details with the selected broker so they can contact you with quotes</li>
            <li>Improve our website and services using aggregated, anonymised analytics data</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>5. Sharing Your Information</h2>
          <p>We will share your personal information with the licensed insurance broker we match you with. That broker will use your information to provide insurance quotes and services. They have their own privacy obligations under the Privacy Act 2020 and their Financial Advice Provider (FAP) licence conditions.</p>
          <p>We do not sell your personal information to third parties for marketing purposes.</p>

          <h2>6. Third-Party Services</h2>
          <p>Our website uses third-party services including Google Analytics (for website analytics) and Google AdSense (for advertising). These services may collect information about your visit in accordance with their own privacy policies. You can opt out of Google Analytics tracking using the Google Analytics Opt-out Browser Add-on.</p>

          <h2>7. Data Retention</h2>
          <p>We retain your personal information for as long as necessary to provide our services and comply with our legal obligations. Enquiry data is typically retained for up to 7 years for record-keeping purposes.</p>

          <h2>8. Your Rights Under the Privacy Act 2020</h2>
          <p>Under the Privacy Act 2020, you have the right to:</p>
          <ul>
            <li>Request access to personal information we hold about you</li>
            <li>Request correction of inaccurate personal information</li>
            <li>Complain to the Privacy Commissioner if you believe we have breached the Privacy Act</li>
          </ul>
          <p>To exercise these rights, contact us at {siteConfig.email}.</p>

          <h2>9. Cookies</h2>
          <p>Our website uses cookies to improve your experience and enable analytics. By continuing to use our site, you consent to our use of cookies. You can disable cookies in your browser settings, though this may affect website functionality.</p>

          <h2>10. Contact Us</h2>
          <p>For privacy-related enquiries, contact us at: <a href={`mailto:${siteConfig.email}`} className="text-orange-500">{siteConfig.email}</a> or call {siteConfig.phone}.</p>
        </div>
      </div>
    </>
  )
}
