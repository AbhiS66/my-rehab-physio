"use client"

import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

/**
 * Shared call-to-action. On phones the tel: link dials directly; on desktop it
 * copies the number and announces via a CustomEvent handled by the single
 * site-wide <CopyToast /> mounted in the root layout.
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
  const handleClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.innerWidth <= 768) return // let the tel: link dial normally
    try {
      await navigator.clipboard.writeText("+917021042122")
    } catch {
      return // clipboard unavailable — let the tel: link through instead
    }
    e.preventDefault()
    window.dispatchEvent(new CustomEvent("mrp:number-copied"))
  }

  return (
    <Button
      asChild
      size="lg"
      className={cn(
        "rounded-sm font-semibold uppercase tracking-[0.08em]",
        variant === "solid"
          ? "bg-primary text-primary-foreground hover:bg-primary/90"
          : "bg-primary-foreground text-primary hover:bg-primary-foreground/90",
        className,
      )}
    >
      <a href="tel:+917021042122" onClick={handleClick}>
        <Phone className="w-4 h-4 mr-2" />
        {label}
      </a>
    </Button>
  )
}
