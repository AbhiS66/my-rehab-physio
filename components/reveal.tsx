"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"

/**
 * Scroll-triggered fade + slide-up reveal. Calm and clinical: ~300ms, no bounce.
 * Renders as a div by default, or as `li` so it can wrap list items without
 * breaking ul semantics. Content is never hidden from users who opt out of
 * motion (it renders instantly under prefers-reduced-motion), browsers without
 * scripting (globals.css), or print (globals.css).
 */
export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode
  className?: string
  delay?: number
  as?: "div" | "li"
}) {
  const ref = useRef<HTMLDivElement | HTMLLIElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Reduced motion: skip the animation entirely — content is just there.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true)
      return
    }

    let io: IntersectionObserver
    try {
      io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true)
            io.unobserve(el)
          }
        },
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
      )
      io.observe(el)
    } catch {
      setVisible(true) // no IntersectionObserver — show content unconditionally
      return
    }
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      data-reveal=""
      className={cn(
        "transition-all duration-300 ease-out will-change-transform motion-reduce:transition-none",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        className,
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}
