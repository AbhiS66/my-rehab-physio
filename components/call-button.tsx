"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import { cn } from "@/lib/utils"

/**
 * Shared call-to-action. On phones the tel: link dials directly; on desktop it
 * copies the number and confirms with the site-wide toast. The toast's live
 * region stays mounted so screen readers always announce the status change.
 */
export function CallButton({
  label = "+91-7021042122",
  variant = "solid",
  className,
}: {
  label?: string
  variant?: "solid" | "light"
  className?: string
}) {
  const [showToast, setShowToast] = useState(false)

  const handleClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.innerWidth <= 768) return // let the tel: link dial normally
    try {
      await navigator.clipboard.writeText("+917021042122")
    } catch {
      return // clipboard unavailable — let the tel: link through instead
    }
    e.preventDefault()
    setShowToast(true)
    setTimeout(() => setShowToast(false), 3000)
  }

  return (
    <>
      <Button
        asChild
        size="lg"
        className={cn(
          "rounded-md font-semibold tracking-wide",
          variant === "solid"
            ? "bg-primary text-primary-foreground hover:bg-primary/90"
            : "bg-primary-foreground text-primary hover:bg-primary-foreground/90",
        )}
      >
        <a href="tel:+917021042122" onClick={handleClick}>
          <Phone className="w-4 h-4 mr-2" />
          {label}
        </a>
      </Button>
      <div
        role="status"
        aria-live="polite"
        className={cn(
          "fixed bottom-6 left-1/2 -translate-x-1/2 bg-foreground text-background px-4 py-2 rounded shadow-lg z-50 transition-opacity duration-300",
          showToast ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
      >
        {showToast ? "Phone number copied to clipboard!" : ""}
      </div>
    </>
  )
}
