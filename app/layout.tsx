import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { siteConfig } from '@/data/site-config'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'Tradie Insurance NZ | Compare Public Liability, Tools & More | TradieInsurance.co.nz',
    template: '%s | TradieInsurance.co.nz',
  },
  description: 'Compare NZ tradie insurance. Public liability from NZ$30/month, tools cover, commercial vehicle, income protection & more. Free quotes from licensed NZ brokers.',
  keywords: ['tradie insurance NZ', 'public liability tradie', 'tool insurance NZ', 'builder insurance NZ', 'tradie insurance quote'],
  authors: [{ name: 'TradieInsurance.co.nz' }],
  creator: 'TradieInsurance.co.nz',
  openGraph: {
    type: 'website',
    locale: 'en_NZ',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: 'Tradie Insurance NZ | Compare Public Liability, Tools & More',
    description: 'Compare NZ tradie insurance. Public liability from NZ$30/month. Free quotes from licensed brokers.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tradie Insurance NZ | TradieInsurance.co.nz',
    description: 'Compare NZ tradie insurance. Free quotes from licensed brokers.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteConfig.url,
  },
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${siteConfig.url}/#organization`,
  name: 'TradieInsurance.co.nz',
  url: siteConfig.url,
  logo: `${siteConfig.url}/android-chrome-192x192.png`,
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: siteConfig.phone,
    contactType: 'customer service',
    areaServed: 'NZ',
    availableLanguage: 'English',
  },
  areaServed: {
    '@type': 'Country',
    name: 'New Zealand',
  },
  description: 'NZ tradie insurance comparison and referral service — connecting tradies with licensed insurance brokers.',
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteConfig.url}/#website`,
  url: siteConfig.url,
  name: 'TradieInsurance.co.nz',
  publisher: { '@id': `${siteConfig.url}/#organization` },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${siteConfig.url}/blog/?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-NZ">
      <head>
        <script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${siteConfig.adsenseId}`}
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
