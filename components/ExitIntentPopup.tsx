'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const STORAGE_KEY = 'exitPopupLastShown'
const COOLDOWN_DAYS = 7

function hasRecentlyShown(): boolean {
  try {
    const val = localStorage.getItem(STORAGE_KEY)
    if (!val) return false
    return Date.now() - parseInt(val, 10) < COOLDOWN_DAYS * 24 * 60 * 60 * 1000
  } catch { return false }
}

function markShown() {
  try {
    localStorage.setItem(STORAGE_KEY, Date.now().toString())
    sessionStorage.setItem(STORAGE_KEY, '1')
  } catch { /* ignore */ }
}

function DesktopPopup({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
      onClick={onClose}
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

        <div className="w-12 h-1 bg-orange-500 rounded-full mb-5" />

        <h2 className="text-2xl font-extrabold text-gray-900 mb-3 leading-tight">
          Not sure which cover is right for your trade?
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed mb-6">
          Our specialists match tradies with the right cover for their trade, tools, and contracts — with no jargon and no obligation. Registered Financial Service Providers who know the NZ trades market.
        </p>

        <div className="flex flex-col gap-3">
          <Link
            href="/contact/"
            onClick={onClose}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-xl text-center transition-colors text-sm"
          >
            Get a Quote →
          </Link>
          <button
            onClick={onClose}
            className="w-full text-gray-400 hover:text-gray-600 text-xs py-2 transition-colors"
          >
            I&apos;ll come back later
          </button>
        </div>

        <p className="text-xs text-gray-400 text-center mt-4">
          Registered Financial Service Providers · No obligation · Reply within 1 business day
        </p>
      </div>
    </div>
  )
}

function MobileStickyBar({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-900 border-t-2 border-orange-500 shadow-2xl">
      <div className="flex items-center gap-3 px-4 py-3">
        <div className="flex-1 min-w-0">
          <p className="text-white font-semibold text-sm leading-tight">Ready to get your trade covered?</p>
          <p className="text-gray-400 text-xs mt-0.5">No obligation · Registered advisers</p>
        </div>
        <Link
          href="/contact/"
          className="shrink-0 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-xl text-sm transition-colors"
        >
          Get a Quote →
        </Link>
        <button
          onClick={onClose}
          aria-label="Dismiss"
          className="shrink-0 text-gray-500 hover:text-gray-300 text-lg leading-none p-1 transition-colors"
        >✕</button>
      </div>
    </div>
  )
}

export default function ExitIntentPopup() {
  const [showPopup, setShowPopup] = useState(false)
  const [showBar, setShowBar] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return
    if (hasRecentlyShown()) return

    const isMobile = window.innerWidth < 768 || 'ontouchstart' in window

    if (isMobile) {
      const onScroll = () => {
        const pct = window.scrollY / Math.max(document.body.scrollHeight - window.innerHeight, 1)
        if (pct >= 0.4) {
          setShowBar(true)
          window.removeEventListener('scroll', onScroll)
        }
      }
      window.addEventListener('scroll', onScroll, { passive: true })
      return () => window.removeEventListener('scroll', onScroll)
    } else {
      let activated = false
      const activationTimer = setTimeout(() => { activated = true }, 20000)

      const handleMouseLeave = (e: MouseEvent) => {
        if (!activated) return
        if (e.clientY <= 10 && e.clientX > window.innerWidth * 0.5) {
          setShowPopup(true)
          markShown()
        }
      }

      document.addEventListener('mouseleave', handleMouseLeave)
      return () => {
        clearTimeout(activationTimer)
        document.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [])

  const dismissBar = () => { setShowBar(false); markShown() }
  const dismissPopup = () => { setShowPopup(false) }

  if (showPopup) return <DesktopPopup onClose={dismissPopup} />
  if (showBar)   return <MobileStickyBar onClose={dismissBar} />
  return null
}
