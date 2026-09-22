'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

/**
 * Exit intent, site-wide (mounted once in app/layout.tsx).
 *
 * The message is one specific, true thing most tradies have not thought about,
 * rather than a generic "need cover?": on residential work the contractor who
 * signed with the client carries the defect repair obligation, including for
 * work done by subcontractors (MBIE, building.govt.nz), and standard public
 * liability generally does not pay to put faulty work right. It links to the
 * article that explains it properly.
 *
 * Wording rules this copy is held to:
 * - It never says WE cover anything. This site refers enquiries; the adviser
 *   and the insurer decide what cover is available.
 * - It never promises cover for other trades' work. Whether a defective
 *   workmanship extension responds to work by subcontractors depends on the
 *   wording (QBE, for example, treats uninsured labour-only subcontractors as
 *   employees; others require subbies to hold their own cover). So the ask is
 *   "find out whether yours does", which is true for every reader.
 * - Change this copy only alongside the article, so the two stay in step.
 */

const STORAGE_KEY = 'exitPopupLastShown'
const COOLDOWN_DAYS = 7
const ARTICLE = '/blog/other-trades-defective-workmanship-cover/'

// Pages where an interruption is wrong: the form itself, and the page people
// land on after using it.
const SUPPRESS = ['/contact/', '/thank-you/']

function hasRecentlyShown(): boolean {
  try {
    const val = localStorage.getItem(STORAGE_KEY)
    if (!val) return false
    return Date.now() - parseInt(val, 10) < COOLDOWN_DAYS * 24 * 60 * 60 * 1000
  } catch { return false }
}

function alreadyShownThisSession(): boolean {
  try { return !!sessionStorage.getItem(STORAGE_KEY) } catch { return false }
}

function markShown() {
  try {
    localStorage.setItem(STORAGE_KEY, Date.now().toString())
    sessionStorage.setItem(STORAGE_KEY, '1')
  } catch { /* ignore */ }
}

function DesktopPopup({ onClose, onArticle }: { onClose: () => void; onArticle: boolean }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="exit-popup-title"
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors text-xl leading-none"
          aria-label="Close"
        >✕</button>

        <p className="text-xs font-bold uppercase tracking-widest text-orange-600 mb-3">Did you know?</p>

        <h2 id="exit-popup-title" className="text-2xl font-extrabold text-gray-900 mb-3 leading-tight">
          If a trade you brought on gets it wrong, the client comes to you.
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed mb-3">
          On residential work, the contractor who signed with the client has to fix defects in the first 12
          months, including a subcontractor&apos;s. Standard public liability often won&apos;t pay to put faulty
          work right.
        </p>
        <p className="text-gray-600 text-sm leading-relaxed mb-6">
          Some policies can be extended to cover defective workmanship by the trades you engage. Find out
          whether yours does, before a subbie&apos;s mistake becomes your claim.
        </p>

        <div className="flex flex-col gap-3">
          <Link
            href="/contact/"
            onClick={onClose}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-xl text-center transition-colors text-sm"
          >
            Check my cover →
          </Link>
          {!onArticle && (
            <Link
              href={ARTICLE}
              onClick={onClose}
              className="w-full text-orange-700 hover:text-orange-800 font-semibold text-sm text-center py-1 transition-colors"
            >
              How it works
            </Link>
          )}
          <button
            onClick={onClose}
            className="w-full text-gray-400 hover:text-gray-600 text-xs py-2 transition-colors"
          >
            Not now
          </button>
        </div>

        <p className="text-xs text-gray-400 text-center mt-4">
          Registered Financial Service Providers · No obligation
        </p>
      </div>
    </div>
  )
}

function MobileStickyBar({ onClose }: { onClose: () => void }) {
  // Kept to roughly 48px at 390px — half the first version, which stacked an
  // eyebrow over a three-line message and took 95–113px of a phone screen.
  // One run of small text, a compact button, no second line of chrome.
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-900 border-t-2 border-orange-500 shadow-2xl">
      <div className="flex items-center gap-2 px-3 py-2">
        <p className="flex-1 min-w-0 text-xs leading-tight text-white">
          {/* Dropped below 380px (small Androids) so the line still fits in two rows. */}
          <span className="hidden font-bold text-orange-400 min-[380px]:inline">Did you know? </span>
          <span className="font-semibold">A subbie&apos;s mistake can be your claim.</span>
        </p>
        <Link
          href="/contact/"
          onClick={onClose}
          className="shrink-0 whitespace-nowrap bg-orange-500 hover:bg-orange-600 text-white font-bold py-1.5 px-3 rounded-lg text-xs transition-colors"
        >
          Check my cover
        </Link>
        <button
          onClick={onClose}
          aria-label="Dismiss"
          className="shrink-0 text-gray-500 hover:text-gray-300 text-base leading-none p-1 transition-colors"
        >✕</button>
      </div>
    </div>
  )
}

export default function ExitIntentPopup() {
  const pathname = usePathname() || '/'
  const suppressed = SUPPRESS.some((p) => pathname.startsWith(p))
  const [showPopup, setShowPopup] = useState(false)
  const [showBar, setShowBar] = useState(false)

  useEffect(() => {
    if (suppressed) return
    if (alreadyShownThisSession()) return
    if (hasRecentlyShown()) return

    const isMobile = window.innerWidth < 768 || 'ontouchstart' in window

    if (isMobile) {
      const onScroll = () => {
        const pct = window.scrollY / Math.max(document.body.scrollHeight - window.innerHeight, 1)
        if (pct >= 0.4) {
          setShowBar(true)
          markShown()
          window.removeEventListener('scroll', onScroll)
        }
      }
      window.addEventListener('scroll', onScroll, { passive: true })
      return () => window.removeEventListener('scroll', onScroll)
    }

    // Desktop: armed after 8 seconds, then fires when the pointer leaves
    // through the top of the window. The earlier version waited 20 seconds
    // and only counted exits through the top-RIGHT half, which missed anyone
    // heading for the back button, the tab strip or the address bar on the
    // left — most real exits.
    let armed = false
    const armTimer = setTimeout(() => { armed = true }, 8000)
    const onLeave = (e: MouseEvent) => {
      if (!armed || e.clientY > 0 || e.relatedTarget) return
      setShowPopup(true)
      markShown()
      document.removeEventListener('mouseout', onLeave)
    }
    document.addEventListener('mouseout', onLeave)
    return () => {
      clearTimeout(armTimer)
      document.removeEventListener('mouseout', onLeave)
    }
  }, [suppressed])

  if (suppressed) return null
  if (showPopup) return <DesktopPopup onClose={() => setShowPopup(false)} onArticle={pathname.startsWith(ARTICLE)} />
  if (showBar) return <MobileStickyBar onClose={() => setShowBar(false)} />
  return null
}
