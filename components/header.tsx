"use client"

import { useEffect, useState } from "react"
import { CallButton } from "@/components/call-button"
import { Phone } from "lucide-react"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Expert Team", href: "#team" },
  { label: "Locations", href: "#locations" },
  { label: "Conditions We Treat", href: "#conditions" },
  { label: "For Patients", href: "#home-visits" },
  { label: "For Hospitals", href: "#contact" },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState<string | null>(null)

  // Elevation once the page moves — the bar separates from the content.
  useEffect(() => {
    const onScroll = () => setScrolled((window.scrollY || 0) > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Scroll-spy: the nav link of the section crossing mid-viewport holds its
  // underline open, so the bar always answers "where am I".
  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.querySelector(l.href)).filter(Boolean) as Element[]
    if (!sections.length || typeof IntersectionObserver === "undefined") return

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    )
    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])

  const linkCls = (href: string) =>
    cn(
      "relative px-3 py-2 text-sm font-medium transition-colors after:absolute after:left-3 after:right-3 after:bottom-0.5 after:h-px after:bg-primary after:origin-left after:scale-x-0 after:transition-transform after:duration-300",
      active === href
        ? "text-primary after:scale-x-100"
        : "text-muted-foreground hover:text-foreground hover:after:scale-x-100 focus-visible:after:scale-x-100 focus-visible:text-foreground focus-visible:outline-none",
    )

  return (
    <header
      className={cn(
        "bg-background/95 backdrop-blur border-b border-border sticky top-0 z-50 transition-shadow duration-300",
        scrolled && "shadow-[0_14px_36px_-24px_rgba(60,28,15,0.45)]",
      )}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-20">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#top" className="flex items-center shrink-0">
            <img src="/mrp-logo.jpg" alt="My Rehab Physio Logo" className="h-12 w-auto" />
          </a>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center" aria-label="Primary">
            <ul className="flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className={linkCls(link.href)}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact — tap-to-call on mobile, copy-to-clipboard on desktop */}
          <CallButton className="hidden sm:inline-flex" />
          <a
            href="tel:+917021042122"
            aria-label="Call My Rehab Physio"
            className="sm:hidden inline-flex items-center justify-center w-10 h-10 rounded-sm bg-primary text-primary-foreground transition-colors active:bg-primary/90"
          >
            <Phone className="w-4.5 h-4.5" />
          </a>
        </div>
      </div>

      {/* Masthead double rule — the newspaper device: accent bar over hairline */}
      <div aria-hidden="true" className="h-[3px] bg-primary" />

      {/* Index-rule progress hairline — additive 1px rule that fills with scroll
          progress (--spine-p written by components/scroll-spine.tsx; fallback
          0 means absence, so no-JS/print see today's exact header) */}
      <div aria-hidden="true" data-spine-progress className="spine-fill" />

      {/* Mobile trust strip */}
      <div className="lg:hidden border-t border-border">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-1.5 flex items-center justify-between text-[11px] text-muted-foreground">
          <span>Powai · Vile Parle · Chandivali</span>
          <span>Mon–Sat · Home visits</span>
        </div>
      </div>
    </header>
  )
}
