import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import QuoteForm from '@/components/QuoteForm'
import { blogPosts, getBlogBySlug } from '@/data/blog-posts'
import { siteConfig } from '@/data/site-config'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogBySlug(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `${siteConfig.url}/blog/${slug}/` },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt,
      url: `${siteConfig.url}/blog/${slug}/`,
      publishedTime: post.date,
      authors: [post.author],
    },
  }
}

function renderContent(content: string) {
  const lines = content.split('\n')
  const elements: React.ReactNode[] = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i]

    if (line.startsWith('## ')) {
      elements.push(<h2 key={i} className="text-2xl font-extrabold text-gray-900 mt-10 mb-4">{line.replace('## ', '')}</h2>)
    } else if (line.startsWith('### ')) {
      elements.push(<h3 key={i} className="text-xl font-bold text-gray-900 mt-8 mb-3">{line.replace('### ', '')}</h3>)
    } else if (line.startsWith('| ')) {
      // Table
      const tableLines: string[] = []
      while (i < lines.length && lines[i].startsWith('|')) {
        tableLines.push(lines[i])
        i++
      }
      const [header, , ...rows] = tableLines
      const headers = header.split('|').filter(Boolean).map(h => h.trim())
      elements.push(
        <div key={i} className="overflow-x-auto my-6">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr>{headers.map((h, j) => <th key={j} className="bg-gray-100 text-left px-4 py-2 font-bold border border-gray-200">{h}</th>)}</tr>
            </thead>
            <tbody>
              {rows.map((row, j) => (
                <tr key={j}>
                  {row.split('|').filter(Boolean).map((cell, k) => (
                    <td key={k} className="px-4 py-2 border border-gray-200 text-gray-600">{cell.trim()}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
      continue
    } else if (line.startsWith('- ')) {
      const items: string[] = []
      while (i < lines.length && lines[i].startsWith('- ')) {
        items.push(lines[i].replace('- ', ''))
        i++
      }
      elements.push(
        <ul key={i} className="list-disc list-inside space-y-1 my-4 text-gray-600">
          {items.map((item, j) => <li key={j}>{item.replace(/\*\*(.*?)\*\*/g, '$1')}</li>)}
        </ul>
      )
      continue
    } else if (line.trim() === '') {
      // skip
    } else {
      const text = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      elements.push(<p key={i} className="text-gray-600 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: text }} />)
    }
    i++
  }
  return elements
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getBlogBySlug(slug)
  if (!post) notFound()

  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3)

  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: post.author,
      url: siteConfig.url,
    },
    publisher: {
      '@type': 'Organization',
      name: 'TradieInsurance.co.nz',
      url: siteConfig.url,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteConfig.url}/blog/${slug}/`,
    },
    url: `${siteConfig.url}/blog/${slug}/`,
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url + '/' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: siteConfig.url + '/blog/' },
      { '@type': 'ListItem', position: 3, name: post.title, item: `${siteConfig.url}/blog/${slug}/` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="bg-gray-900 border-b border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/blog/" className="hover:text-white">Blog</Link>
            <span className="mx-2">›</span>
            <span className="text-white">{post.title}</span>
          </nav>
          <span className="inline-block bg-orange-500/20 border border-orange-400/40 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            {post.category}
          </span>
          <h1 className="text-4xl font-extrabold text-white mb-4 leading-tight">{post.title}</h1>
          <p className="text-gray-300 text-lg mb-6">{post.excerpt}</p>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span>By {post.author}</span>
            <span>·</span>
            <span>{new Date(post.date).toLocaleDateString('en-NZ', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>

      <div className="bg-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            <article className="lg:col-span-2">
              {renderContent(post.content)}

              <div className="mt-10 bg-orange-50 rounded-2xl p-8 border border-orange-100">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Need Tradie Insurance?</h3>
                <p className="text-gray-600 mb-4">Connect with a licensed NZ broker for free — no obligation, no cost.</p>
                <Link href="/contact/" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-xl transition-colors">
                  Get Free Quote →
                </Link>
              </div>

              {/* Related Posts */}
              <div className="mt-12">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Related Articles</h3>
                <div className="grid sm:grid-cols-3 gap-4">
                  {relatedPosts.map((p) => (
                    <Link key={p.slug} href={`/blog/${p.slug}/`} className="group border border-gray-200 hover:border-orange-200 rounded-xl p-4 transition-all hover:shadow-sm">
                      <span className="text-xs text-orange-500 font-bold uppercase">{p.category}</span>
                      <h4 className="text-sm font-bold text-gray-900 mt-1 group-hover:text-orange-600 transition-colors line-clamp-2">{p.title}</h4>
                    </Link>
                  ))}
                </div>
              </div>
            </article>

            <aside className="space-y-6">
              <QuoteForm compact />
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-3">Browse by Trade</h3>
                <ul className="space-y-1.5">
                  {['builders', 'plumbers', 'electricians', 'painters', 'roofers', 'carpenters-woodworkers'].map((t) => (
                    <li key={t}>
                      <Link href={`/trades/${t}/`} className="text-orange-500 hover:text-orange-600 text-sm capitalize transition-colors">
                        {t.replace(/-/g, ' ')} →
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  )
}
