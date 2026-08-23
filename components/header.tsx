"use client"

import { CallButton } from "@/components/call-button"
import { Phone } from "lucide-react"

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Locations", href: "#locations" },
  { label: "Conditions We Treat", href: "#conditions" },
  { label: "For Patients", href: "#home-visits" },
  { label: "For Hospitals", href: "#contact" },
]

export function Header() {
  return (
    <header className="bg-background/95 backdrop-blur border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  <a
                    href={link.href}
                    className="relative px-3 py-2 text-sm text-muted-foreground hover:text-foreground font-medium transition-colors after:absolute after:left-3 after:right-3 after:bottom-0.5 after:h-px after:bg-primary after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact — tap-to-call on mobile, copy-to-clipboard on desktop */}
          <CallButton className="hidden sm:inline-block" />
          <a
            href="tel:+917021042122"
            aria-label="Call My Rehab Physio"
            className="sm:hidden inline-flex items-center justify-center w-10 h-10 rounded-md bg-primary text-primary-foreground"
          >
            <Phone className="w-4.5 h-4.5" />
          </a>
        </div>
      </div>

      {/* Mobile trust strip */}
      <div className="lg:hidden border-t border-border">
        <div className="max-w-7xl mx-auto px-4 py-1.5 flex items-center justify-between text-[11px] text-muted-foreground">
          <span>Powai · Vile Parle · Chandivali</span>
          <span>Mon–Sat · Home visits</span>
        </div>
      </div>
    </header>
  )
}
