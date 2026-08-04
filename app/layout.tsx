import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { siteConfig } from '@/data/site-config'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'Tradie Insurance NZ | TradieInsurance.co.nz',
    template: '%s | TradieInsurance.co.nz',
  },
  description: 'Compare tradie insurance. Public liability from NZ$30/month, tools cover, commercial vehicle, income protection & more. Quotes from licensed brokers.',
  keywords: ['tradie insurance NZ', 'public liability tradie', 'tool insurance NZ', 'builder insurance NZ', 'tradie insurance quote', 'tradieinsurance.co.nz'],
  authors: [{ name: 'TradieInsurance.co.nz', url: siteConfig.url }],
  creator: 'TradieInsurance.co.nz',
  publisher: 'TradieInsurance.co.nz',
  openGraph: {
    type: 'website',
    locale: 'en_NZ',
    url: siteConfig.url,
    siteName: 'TradieInsurance.co.nz',
    title: 'Tradie Insurance NZ | Compare Public Liability, Tools & More',
    description: 'Compare tradie insurance. Public liability from NZ$30/month. Quotes from licensed brokers.',
    images: [{ url: `${siteConfig.url}/og-image.png`, width: 1200, height: 630, alt: 'TradieInsurance.co.nz' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tradie Insurance NZ | TradieInsurance.co.nz',
    description: 'Compare tradie insurance. Quotes from licensed brokers.',
    images: [`${siteConfig.url}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
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
  logo: {
    '@type': 'ImageObject',
    url: `${siteConfig.url}/android-chrome-192x192.png`,
    width: 192,
    height: 192,
  },
  contactPoint: {
    '@type': 'ContactPoint',
    email: siteConfig.email,
    contactType: 'customer service',
    areaServed: 'NZ',
    availableLanguage: 'English',
  },
  areaServed: {
    '@type': 'Country',
    name: 'New Zealand',
  },
  inLanguage: 'en-NZ',
  description: 'Specialist tradie insurance comparison and referral service — connecting tradies with licensed insurance brokers.',
  sameAs: [],
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
