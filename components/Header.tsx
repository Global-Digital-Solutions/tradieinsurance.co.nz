'use client'

import Link from 'next/link'
import { useState } from 'react'
import { siteConfig } from '@/data/site-config'
import { coverageTypes } from '@/data/coverage-types'
import { tradeTypes } from '@/data/trade-types'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [coverageOpen, setCoverageOpen] = useState(false)
  const [tradesOpen, setTradesOpen] = useState(false)

  return (
    <header className="bg-gray-900 border-b border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-orange-500 font-extrabold text-xl">🔧</span>
            <span className="text-white font-extrabold text-lg">
              Tradie<span className="text-orange-500">Insurance</span>
            </span>
            <span className="text-gray-400 text-sm hidden sm:inline">.co.nz</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {/* Coverage Dropdown */}
            <div className="relative" onMouseEnter={() => setCoverageOpen(true)} onMouseLeave={() => setCoverageOpen(false)}>
              <button className="text-gray-300 hover:text-white text-sm font-medium flex items-center gap-1 py-2">
                Coverage Types
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {coverageOpen && (
                <div className="absolute top-full left-0 w-64 bg-gray-800 border border-gray-700 rounded-xl shadow-xl py-2 z-50">
                  {coverageTypes.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/types/${c.slug}/`}
                      className="flex items-center gap-3 px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
                    >
                      <span>{c.icon}</span>
                      <span>{c.name}</span>
                    </Link>
                  ))}
                  <div className="border-t border-gray-700 mt-2 pt-2">
                    <Link href="/coverage/" className="flex items-center gap-3 px-4 py-2 text-sm text-orange-400 hover:text-orange-300 font-medium">
                      View All Coverage →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Trades Dropdown */}
            <div className="relative" onMouseEnter={() => setTradesOpen(true)} onMouseLeave={() => setTradesOpen(false)}>
              <button className="text-gray-300 hover:text-white text-sm font-medium flex items-center gap-1 py-2">
                Trades
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {tradesOpen && (
                <div className="absolute top-full left-0 w-56 bg-gray-800 border border-gray-700 rounded-xl shadow-xl py-2 z-50">
                  {tradeTypes.map((t) => (
                    <Link
                      key={t.slug}
                      href={`/trades/${t.slug}/`}
                      className="flex items-center gap-3 px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
                    >
                      <span>{t.icon}</span>
                      <span>{t.name}</span>
                    </Link>
                  ))}
                  <div className="border-t border-gray-700 mt-2 pt-2">
                    <Link href="/trades/" className="flex items-center gap-3 px-4 py-2 text-sm text-orange-400 hover:text-orange-300 font-medium">
                      All Trades →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/compare/" className="text-gray-300 hover:text-white text-sm font-medium">Compare</Link>
            <Link href="/blog/" className="text-gray-300 hover:text-white text-sm font-medium">Blog</Link>
            <Link href="/faqs/" className="text-gray-300 hover:text-white text-sm font-medium">FAQs</Link>
            <Link href="/about/" className="text-gray-300 hover:text-white text-sm font-medium">About</Link>
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
              className="hidden sm:flex items-center gap-2 text-gray-300 hover:text-white text-sm font-medium"
            >
              <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {siteConfig.phone}
            </a>
            <Link
              href="/contact/"
              className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold px-4 py-2 rounded-lg transition-colors"
            >
              Get Free Quote
            </Link>
            <button
              className="lg:hidden text-gray-300 hover:text-white p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-gray-800 border-t border-gray-700 px-4 py-4 space-y-2">
          <div>
            <p className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-2">Coverage Types</p>
            {coverageTypes.map((c) => (
              <Link
                key={c.slug}
                href={`/types/${c.slug}/`}
                className="flex items-center gap-2 py-1.5 text-sm text-gray-300 hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                {c.icon} {c.name}
              </Link>
            ))}
          </div>
          <div className="border-t border-gray-700 pt-2">
            <p className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-2">Trade Types</p>
            {tradeTypes.map((t) => (
              <Link
                key={t.slug}
                href={`/trades/${t.slug}/`}
                className="flex items-center gap-2 py-1.5 text-sm text-gray-300 hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                {t.icon} {t.name}
              </Link>
            ))}
          </div>
          <div className="border-t border-gray-700 pt-2 space-y-1">
            {[
              { href: '/compare/', label: 'Compare Providers' },
              { href: '/blog/', label: 'Blog' },
              { href: '/faqs/', label: 'FAQs' },
              { href: '/about/', label: 'About' },
              { href: '/contact/', label: 'Contact' },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="block py-1.5 text-sm text-gray-300 hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </Link>
            ))}
          </div>
          <div className="border-t border-gray-700 pt-2">
            <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="text-gray-300 text-sm">
              📞 {siteConfig.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
