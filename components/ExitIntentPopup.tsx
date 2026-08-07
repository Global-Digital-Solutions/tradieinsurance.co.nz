'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function ExitIntentPopup() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem('exitPopupShown')) return

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setShow(true)
        sessionStorage.setItem('exitPopupShown', '1')
      }
    }

    document.addEventListener('mouseleave', handleMouseLeave)
    return () => document.removeEventListener('mouseleave', handleMouseLeave)
  }, [])

  if (!show) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
      onClick={() => setShow(false)}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={() => setShow(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors text-xl leading-none"
          aria-label="Close"
        >
          ✕
        </button>

        {/* Orange accent bar */}
        <div className="w-12 h-1 bg-orange-500 rounded-full mb-5" />

        <h2 className="text-2xl font-extrabold text-gray-900 mb-3 leading-tight">
          Not sure which cover is right for your trade?
        </h2>

        <p className="text-gray-600 text-sm leading-relaxed mb-6">
          Our specialists give honest, no-obligation advice — matched to your specific trade, contracts, and business size. No generic policies. No pressure.
        </p>

        <div className="flex flex-col gap-3">
          <Link
            href="/contact/"
            onClick={() => setShow(false)}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-xl text-center transition-colors text-sm"
          >
            Get a Quote — It's Free
          </Link>
          <button
            onClick={() => setShow(false)}
            className="w-full text-gray-400 hover:text-gray-600 text-xs py-2 transition-colors"
          >
            I&apos;ll come back later
          </button>
        </div>

        <p className="text-xs text-gray-400 text-center mt-4">
          Licensed advisers · No obligation · 24hr response
        </p>
      </div>
    </div>
  )
}
