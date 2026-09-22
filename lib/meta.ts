/**
 * Fit a meta description into the ~155 characters search engines show.
 *
 * 24 pages were over 160 (SE Ranking, 22 Sep 2026): mostly weekly articles,
 * whose excerpt doubles as the description and is written as a two- or
 * three-sentence summary. Rather than ask every new article to carry a second,
 * shorter field, the description is cut here: whole sentences first, and only
 * if the first sentence alone is too long, at a word boundary with an ellipsis.
 * The excerpt shown on the page itself is untouched.
 */
export function metaDescription(text: string, max = 155): string {
  const clean = text.replace(/\s+/g, ' ').trim()
  if (clean.length <= max) return clean

  const sentences = clean.match(/[^.!?]+[.!?]+(\s|$)/g) ?? []
  let out = ''
  for (const s of sentences) {
    if ((out + s).trim().length > max) break
    out += s
  }
  if (out.trim().length >= 70) return out.trim()

  const cut = clean.slice(0, max - 1)
  return cut.slice(0, cut.lastIndexOf(' ')).replace(/[,;:\s]+$/, '') + '…'
}
