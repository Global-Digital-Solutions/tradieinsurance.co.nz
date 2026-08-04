import Link from 'next/link'
import { siteConfig } from '@/data/site-config'
import { coverageTypes } from '@/data/coverage-types'
import { tradeTypes } from '@/data/trade-types'

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand + CTA */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-white font-extrabold text-lg">
                Tradie<span className="text-orange-500">Insurance</span>
              </span>
              <span className="text-gray-400 text-sm">.co.nz</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Specialist tradie insurance comparison and broker referral service. Connecting tradies with licensed advisers since 2020.
            </p>
            <Link
              href="/contact/"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm px-4 py-2 rounded-lg transition-colors mb-4"
            >
              Get a Quote
            </Link>
            <div className="text-sm text-gray-400 space-y-2">
              <p>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">
                  ✉️ {siteConfig.email}
                </a>
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {['Licensed Advisers', 'Free Service', 'NZ Based'].map((b) => (
                  <span key={b} className="text-xs text-gray-500 border border-gray-700 rounded-full px-2 py-0.5">✓ {b}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Coverage Types */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-4">Coverage Types</h3>
            <ul className="space-y-2">
              {coverageTypes.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/types/${c.slug}/`}
                    className="text-gray-400 hover:text-orange-400 text-sm transition-colors"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/coverage/" className="text-orange-400 hover:text-orange-300 text-sm font-medium">
                  All Coverage →
                </Link>
              </li>
            </ul>
          </div>

          {/* Trade Types */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-4">Trade Types</h3>
            <ul className="space-y-2">
              {tradeTypes.map((t) => (
                <li key={t.slug}>
                  <Link
                    href={`/trades/${t.slug}/`}
                    className="text-gray-400 hover:text-orange-400 text-sm transition-colors"
                  >
                    {t.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/trades/" className="text-orange-400 hover:text-orange-300 text-sm font-medium">
                  All Trades →
                </Link>
              </li>
            </ul>
          </div>

          {/* Blog / Resources */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/blog/" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">Blog</Link></li>
              <li><Link href="/blog/tradie-insurance-guide-nz/" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">NZ Tradie Insurance Guide</Link></li>
              <li><Link href="/blog/builder-insurance-checklist-nz/" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">Builder Insurance Checklist</Link></li>
              <li><Link href="/blog/public-liability-tradies-explained/" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">Public Liability Explained</Link></li>
              <li><Link href="/blog/tool-insurance-nz-guide/" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">Tool Insurance Guide</Link></li>
              <li><Link href="/blog/income-protection-self-employed-nz/" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">Income Protection Guide</Link></li>
              <li><Link href="/blog/worksafe-nz-tradies-compliance/" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">WorkSafe NZ Compliance</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/compare/" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">Compare Providers</Link></li>
              <li><Link href="/tradie-insurance/cheap-tradie-insurance/" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">Cheap Tradie Insurance</Link></li>
              <li><Link href="/tradie-insurance/tradie-insurance-cost-nz/" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">Insurance Costs NZ</Link></li>
              <li><Link href="/tradie-insurance/tradie-insurance-sole-trader/" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">Sole Trader Insurance</Link></li>
              <li><Link href="/faqs/" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">FAQs</Link></li>
              <li><Link href="/about/" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">About Us</Link></li>
              <li><Link href="/contact/" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-gray-500 text-xs leading-relaxed mb-4">
            <strong className="text-gray-400">Disclaimer:</strong> TradieInsurance.co.nz is an information and referral service only. We connect you with licensed insurance brokers and advisers who are regulated under the Financial Markets Conduct Act 2013 (FMCA). TradieInsurance.co.nz itself is not a registered financial adviser and does not provide financial advice. All insurance recommendations and quotations are provided by the referred licensed advisers, not by this website. See our{' '}
            <Link href="/disclaimer/" className="hover:text-orange-400 underline">full disclaimer</Link>.
          </p>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-gray-500 text-xs">
              © {new Date().getFullYear()} TradieInsurance.co.nz — All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 text-xs">
              <Link href="/privacy/" className="text-gray-500 hover:text-orange-400 transition-colors">Privacy Policy</Link>
              <Link href="/terms/" className="text-gray-500 hover:text-orange-400 transition-colors">Terms of Use</Link>
              <Link href="/disclaimer/" className="text-gray-500 hover:text-orange-400 transition-colors">Disclaimer</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
