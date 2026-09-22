import { publishedFrom } from '@/data/pricing'

/**
 * One sourced "from" price, shown the same way everywhere.
 *
 * Rules it exists to enforce: the figure is attributed to the insurer that
 * published it, it says what the price includes, and it never reads as a quote
 * from this site. `compact` is the inline version for a sidebar or hero box.
 */
export default function FromPrice({ compact = false }: { compact?: boolean }) {
  const { price, product, covers, basis, url, checked } = publishedFrom

  if (compact) {
    return (
      <p className="text-xs text-gray-400 leading-relaxed">
        <span className="text-orange-400 font-bold">From {price}</span> for {covers}, as published for the {product}.{' '}
        <a href={url} target="_blank" rel="noopener noreferrer" className="underline decoration-dotted hover:text-orange-300">Source</a>
      </p>
    )
  }

  return (
    <div className="bg-gray-50 border-2 border-orange-200 rounded-2xl p-5">
      <p className="text-gray-900 text-sm">
        <span className="text-2xl font-extrabold text-orange-600 align-middle mr-2">From {price}</span>
        for {covers}.
      </p>
      <p className="text-gray-500 text-xs leading-relaxed mt-2">
        {basis} Checked {checked}.{' '}
        <a href={url} target="_blank" rel="noopener noreferrer" className="underline decoration-gray-300 hover:text-orange-600">Source</a>
      </p>
    </div>
  )
}
