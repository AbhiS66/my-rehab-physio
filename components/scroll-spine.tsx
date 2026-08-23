"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

/**
 * The Recovery Spine — the MovementLine signature extended into scroll-linked
 * marginalia. A fixed left-rail path draws itself as the reader descends the
 * page, with folio-numeral waypoints at the real page sections doubling as
 * anchor navigation.
 *
 * One engine, no per-frame React work:
 *  - a single passive scroll listener writes the `--spine-p` CSS variable
 *    (0→1 document progress) straight onto the two [data-spine-progress]
 *    nodes; globals.css consumes it for the draw and the header hairline;
 *  - waypoint positions are MEASURED from the live sections in exactly the
 *    coordinate system the draw uses, so tip and numerals cannot disagree;
 *  - active stop and dark-surface flip share the header scroll-spy's exact
 *    IntersectionObserver semantics, so rail and nav can never disagree.
 */

const STOPS = [
  { id: "#locations", label: "Locations" },
  { id: "#about", label: "About" },
  { id: "#conditions", label: "Conditions We Treat" },
  { id: "#team", label: "Expert Team" },
  { id: "#home-visits", label: "For Patients" },
  { id: "#contact", label: "For Hospitals" },
]

type Stop = { id: string; label: string; f: number }
type Geo = { stops: Stop[]; h: number }

/** Gentle vertical meander crossing x=14 exactly at each measured waypoint.
    Vertical tangents at every crossing keep the joins smooth; segment four
    (between numerals 03 and 04) bows deeper — the MovementLine gesture,
    scaled to the column. */
function meander(stops: Stop[], h: number): string {
  const ys = stops.map((s) => s.f * h)
  const parts = ["M 14 0"]
  ys.forEach((y, i) => {
    const prev = i === 0 ? 0 : ys[i - 1]
    const amp = i === 3 ? 9 : 5.5
    const side = i % 2 === 0 ? 1 : -1
    const dy = Math.max(1, y - prev)
    parts.push(
      `C ${(14 + side * amp).toFixed(1)} ${(prev + dy * 0.3).toFixed(1)}, ` +
        `${(14 + side * amp).toFixed(1)} ${(y - dy * 0.3).toFixed(1)}, 14 ${y.toFixed(1)}`,
    )
  })
  parts.push(`L 14 ${h.toFixed(1)}`)
  return parts.join(" ")
}

export function ScrollSpine() {
  const railRef = useRef<HTMLElement | null>(null)
  const [geo, setGeo] = useState<Geo | null>(null)
  const [active, setActive] = useState<string | null>(null)
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const rail = railRef.current
    if (!rail) return

    // --- progress plumbing ---------------------------------------------
    // Scoped writes: only the two consumers of --spine-p get invalidated.
    let nodes: HTMLElement[] | null = null
    const targets = () => {
      if (!nodes || nodes.some((n) => !n.isConnected)) {
        nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-spine-progress]"))
      }
      return nodes
    }
    let lastQ = -1
    const writeProgress = () => {
      const denom = Math.max(1, document.documentElement.scrollHeight - window.innerHeight)
      const p = Math.min(1, Math.max(0, window.scrollY / denom))
      const q = Math.round(p * 1000) // quantize: skip sub-0.1% moves, land the ends
      if (q === lastQ) return
      lastQ = q
      for (const n of targets()) n.style.setProperty("--spine-p", (q / 1000).toFixed(3))
    }

    // --- measured geometry (single source of truth) ----------------------
    let geoCache: Geo | null = null
    const measure = () => {
      const h = rail.clientHeight // 0 while hidden below xl — nothing to draw
      if (h < 100) return
      const denom = Math.max(1, document.documentElement.scrollHeight - window.innerHeight)
      const measured = STOPS.map(({ id, label }) => {
        const el = document.querySelector(id)
        if (!el) return null
        const r = el.getBoundingClientRect()
        // scroll fraction at which this section reaches mid-viewport — the
        // same coordinate system the draw tip uses
        const f = (window.scrollY + r.top - window.innerHeight / 2) / denom
        return { id, label, f: Math.min(0.98, Math.max(0.02, f)) }
      }).filter(Boolean) as Stop[]
      if (measured.length !== STOPS.length) return

      measured.sort((a, b) => a.f - b.f)
      const gap = 24 / h
      for (let i = 1; i < measured.length; i++) {
        measured[i].f = Math.max(measured[i].f, measured[i - 1].f + gap)
      }
      if (measured[measured.length - 1].f > 0.98) {
        measured[measured.length - 1].f = 0.98
        for (let i = measured.length - 2; i >= 0; i--) {
          measured[i].f = Math.min(measured[i].f, measured[i + 1].f - gap)
        }
      }

      const next: Geo = { stops: measured, h }
      const prev = geoCache
      if (prev && prev.h === next.h && prev.stops.every((s, i) => Math.abs(s.f - next.stops[i].f) < 0.0005)) {
        return
      }
      geoCache = next
      setGeo(next)
      writeProgress()
    }

    // --- observers --------------------------------------------------------
    const cleanups: (() => void)[] = []
    if (typeof IntersectionObserver !== "undefined") {
      // Active stop — identical semantics to the header scroll-spy.
      const sections = STOPS.map((s) => document.querySelector(s.id)).filter(Boolean) as Element[]
      if (sections.length) {
        const io = new IntersectionObserver(
          (entries) => {
            for (const entry of entries) {
              if (entry.isIntersecting) setActive(`#${entry.target.id}`)
            }
          },
          { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
        )
        sections.forEach((s) => io.observe(s))
        cleanups.push(() => io.disconnect())
      }

      // Dark surfaces — finale + footer form one contiguous dark stretch the
      // spine finishes across.
      const seen = new Set<Element>()
      const dio = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) seen.add(entry.target)
            else seen.delete(entry.target)
          }
          setDark(seen.size > 0)
        },
        { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
      )
      document.querySelectorAll('#contact, section[aria-labelledby="book-home-visit"]').forEach((el) => dio.observe(el))
      cleanups.push(() => dio.disconnect())
    }

    // --- refresh triggers ---------------------------------------------------
    measure()
    let raf = 0
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = 0
        writeProgress() // one frame per burst; the final event always lands
      })
    }
    window.addEventListener("scroll", onScroll, { passive: true })

    const ro = new ResizeObserver(measure)
    ro.observe(document.body) // images/fonts settling change section offsets
    const railRo = new ResizeObserver(measure)
    railRo.observe(rail) // viewport resizes change the rail's own height
    window.addEventListener("resize", measure)
    window.addEventListener("load", measure)
    const onPageShow = () => writeProgress() // bfcache restore lands mid-page
    window.addEventListener("pageshow", onPageShow)

    return () => {
      cleanups.forEach((fn) => fn())
      if (raf) cancelAnimationFrame(raf)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", measure)
      window.removeEventListener("load", measure)
      window.removeEventListener("pageshow", onPageShow)
      ro.disconnect()
      railRo.disconnect()
    }
  }, [])

  const d = geo ? meander(geo.stops, geo.h) : null
  const activeIdx = geo ? geo.stops.findIndex((s) => s.id === active) : -1

  return (
    <nav
      ref={railRef}
      data-spine-progress
      aria-label="Section progress"
      className="spine-rail fixed left-2.5 top-28 bottom-10 z-40 hidden w-7 xl:block"
    >
      {d && geo && (
        <svg
          viewBox={`0 0 28 ${geo.h}`}
          fill="none"
          aria-hidden="true"
          focusable="false"
          className="absolute inset-0 h-full w-full"
        >
          {/* ghost track — the road ahead */}
          <path
            d={d}
            stroke="currentColor"
            strokeWidth={1}
            style={{ strokeOpacity: dark ? 0.25 : 0.15 }}
            className={dark ? "text-primary-foreground" : "text-primary"}
          />
          {/* drawn spine — dashoffset consumed from --spine-p in globals.css */}
          <path
            d={d}
            pathLength={1}
            strokeWidth={1.25}
            strokeLinecap="round"
            stroke="currentColor"
            className={cn("spine-draw", dark ? "text-primary-foreground/90" : "text-primary")}
          />
        </svg>
      )}

      {/* Waypoints render only once geometry is measured — SSR emits the empty
          shell so no fictional position ever paints. */}
      {geo?.stops.map((stop, i) => {
        const isActive = active === stop.id
        const passed = activeIdx > i
        return (
          <a
            key={stop.id}
            href={stop.id}
            aria-current={isActive || undefined}
            style={{ top: `${(stop.f * 100).toFixed(2)}%` }}
            className="group absolute left-1/2 flex h-6 w-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center"
          >
            <span className="sr-only">{stop.label}</span>
            <span
              aria-hidden="true"
              className={cn(
                "relative select-none font-display text-[11px] leading-none tabular-nums transition-colors duration-300 motion-reduce:transition-none",
                isActive
                  ? "font-semibold " + (dark ? "text-primary-foreground" : "text-primary")
                  : passed
                    ? dark
                      ? "text-primary-foreground/70"
                      : "text-primary/60"
                    : dark
                      ? "text-primary-foreground/50"
                      : "text-muted-foreground/70",
              )}
            >
              {String(i + 1).padStart(2, "0")}
              {isActive && (
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute right-full top-1/2 mr-1 h-px w-2.5 -translate-y-1/2",
                    dark ? "bg-primary-foreground" : "bg-primary",
                  )}
                />
              )}
            </span>
            <span
              aria-hidden="true"
              className={cn(
                "pointer-events-none absolute left-full top-1/2 ml-1.5 -translate-y-1/2 whitespace-nowrap px-2 py-1 text-xs opacity-0 ring-1 transition-opacity duration-200 motion-reduce:transition-none group-hover:opacity-100 group-focus-visible:opacity-100",
                dark ? "bg-foreground text-background ring-background/20" : "bg-card text-foreground ring-border",
              )}
            >
              {stop.label}
            </span>
          </a>
        )
      })}
    </nav>
  )
}
