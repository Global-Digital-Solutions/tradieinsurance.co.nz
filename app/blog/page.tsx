import type { Metadata } from 'next'
import Link from 'next/link'
import { blogPosts } from '@/data/blog-posts'
import { siteConfig } from '@/data/site-config'

export const metadata: Metadata = {
  title: { absolute: 'Tradie Insurance Blog | TradieInsurance.co.nz' },
  description: 'NZ tradie insurance guides, tips, and industry news. Everything you need to know about tradie insurance — from public liability to WorkSafe compliance.',
  alternates: { canonical: `${siteConfig.url}/blog/` },
  openGraph: {
    type: 'website',
    title: 'Tradie Insurance Blog | TradieInsurance.co.nz',
    description: 'NZ tradie insurance guides, tips, and industry news — from public liability to WorkSafe compliance.',
    url: `${siteConfig.url}/blog/`,
    siteName: 'TradieInsurance.co.nz',
    locale: 'en_NZ',
    images: [{ url: `${siteConfig.url}/og-image.png`, width: 1200, height: 630, alt: 'TradieInsurance.co.nz Blog' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tradie Insurance Blog',
    description: 'NZ tradie insurance guides, industry news, and expert tips.',
    images: [`${siteConfig.url}/og-image.png`],
  },
}

export default function BlogPage() {
  return (
    <>
      <div className="bg-gray-900 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-white">Blog</span>
          </nav>
          <span className="inline-block bg-orange-500/20 border border-orange-400/40 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Insights & Guides
          </span>
          <h1 className="text-4xl font-extrabold text-white mb-4">Tradie Insurance Blog</h1>
          <p className="text-gray-300 text-xl max-w-2xl leading-relaxed">
            Expert guides, checklists, and industry news to help tradies make informed insurance decisions.
          </p>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}/`}
                className="group bg-white border border-gray-200 hover:border-orange-200 rounded-2xl overflow-hidden transition-all hover:shadow-lg"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-block bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-widest px-2 py-0.5 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-gray-400 text-xs">{post.readTime}</span>
                  </div>
                  <h2 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>{post.author}</span>
                    <span>{new Date(post.date).toLocaleDateString('en-NZ', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
