"use client"

import { useEffect, useState } from "react"
import { Phone } from "lucide-react"

/**
 * Slim sticky call bar on mobile only. Appears once the user scrolls past the
 * hero so someone in pain never has to scroll back up to find the number.
 */
export function MobileCallBar() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setShow((window.scrollY || document.documentElement.scrollTop) > 420)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 lg:hidden transition-transform duration-300 ease-out ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <a
        href="tel:+917021042122"
        className="flex items-center justify-center gap-2 bg-primary text-primary-foreground py-4 text-base font-semibold shadow-[0_-8px_30px_-10px_rgba(60,28,15,0.5)]"
      >
        <Phone className="w-4 h-4" />
        Call now · +91-7021042122
      </a>
    </div>
  )
}