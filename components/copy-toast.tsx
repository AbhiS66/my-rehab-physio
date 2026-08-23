"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

/**
 * Site-wide clipboard confirmation. Mounted ONCE in the root layout; CallButton
 * instances announce via a CustomEvent so three buttons can never stack three
 * identical toasts. The live region stays mounted with its text intact so
 * screen readers always hear the status change.
 */
export function CopyToast() {
  const [show, setShow] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  useEffect(() => {
    const onCopied = () => {
      setShow(true)
      clearTimeout(timer.current)
      timer.current = setTimeout(() => setShow(false), 3000)
    }
    window.addEventListener("mrp:number-copied", onCopied)
    return () => {
      window.removeEventListener("mrp:number-copied", onCopied)
      clearTimeout(timer.current)
    }
  }, [])

  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        "fixed bottom-6 left-1/2 z-[60] -translate-x-1/2 bg-foreground px-4 py-2 text-background shadow-lg rounded-sm transition-[opacity,transform] duration-300 ease-out motion-reduce:transition-none",
        show ? "opacity-100 translate-y-0" : "translate-y-2 opacity-0 pointer-events-none",
      )}
    >
      Phone number copied to clipboard!
    </div>
  )
}
