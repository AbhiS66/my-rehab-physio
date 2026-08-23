import { ArrowRight, Phone } from "lucide-react"

const LOCATIONS = [
  {
    name: "Powai (Main)",
    address: "Hill Side Avenue, Hiranandani Gardens, Powai, Mumbai 400076",
  },
  {
    name: "Vile Parle West",
    address: "Narsee Monjee Bhavan, 7, N S Road No. 7, JVPD Scheme, Mumbai 400049",
  },
  {
    name: "Chandivali",
    address: "Saki Vihar Rd, New Mhada Colony, Chandivali, Powai, Mumbai 400072",
  },
]

const AREAS = [
  "Powai",
  "Hiranandani Gardens",
  "Chandivali",
  "Vile Parle West",
  "JVPD Scheme",
  "Saki Vihar Road",
  "Andheri East",
  "Kanjurmarg",
  "Vikhroli",
]

const LABEL = "text-xs font-semibold uppercase tracking-[0.22em] text-background/50"

export function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-foreground text-background">
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-20 pt-16 lg:pt-20 pb-14">
        {/* Colophon grid — brand/phone, indexed locations ledger, hours + coverage */}
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Brand + phone */}
          <div className="lg:col-span-4">
            <div className="flex items-center mb-6">
              <img src="/mrp-logo.jpg" alt="My Rehab Physio Logo" className="h-12 w-auto" />
            </div>
            <p className="text-background/70 leading-relaxed mb-8 max-w-xs">
              Neuro, Ortho, Sports &amp; Cardio-Pulmonary physiotherapy at home and across our Mumbai clinics.
            </p>
            <a
              href="tel:+917021042122"
              className="group inline-flex items-center gap-2.5 bg-background text-foreground font-semibold uppercase tracking-[0.08em] rounded-sm px-6 py-3 text-sm transition-colors hover:bg-muted"
            >
              <Phone className="w-4 h-4" />
              Call +91-7021042122
              <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-1 motion-reduce:group-hover:translate-x-0" />
            </a>
          </div>

          {/* Locations as an indexed ledger */}
          <div className="lg:col-span-5">
            <p className={`${LABEL} mb-6`}>Our locations</p>
            <ul role="list">
              {LOCATIONS.map((loc, i) => (
                <li key={loc.name} className={`grid grid-cols-[auto_1fr] items-baseline gap-x-5 py-4 ${i > 0 ? "border-t border-background/15" : ""}`}>
                  <span aria-hidden="true" className="font-display text-sm text-primary tabular-nums">
                    0{i + 1}
                  </span>
                  <div>
                    <p className="font-display text-xl mb-1">{loc.name}</p>
                    <p className="text-sm text-background/70 leading-relaxed">{loc.address}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours + coverage */}
          <div className="lg:col-span-3">
            <p className={`${LABEL} mb-6`}>Clinic hours</p>
            <p className="text-sm text-background/70 leading-relaxed">
              Monday – Saturday
              <br />
              <span className="text-background">Home visits available</span>
            </p>

            <p className={`${LABEL} mt-10 mb-4`}>Coverage areas</p>
            <p className="text-sm text-background/70 leading-relaxed">{AREAS.join(" · ")}</p>
          </div>
        </div>
      </div>

      {/* Cropped wordmark — the colophon signature: giant type sinking behind the
          legal strip, top band visible, bottom clipped */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none relative h-[0.6em] overflow-hidden font-display font-semibold leading-none tracking-tight text-[clamp(3.5rem,11vw,10rem)] whitespace-nowrap text-background/[0.08]"
      >
        <span className="block pl-5 sm:pl-8">My Rehab Physio</span>
      </div>

      <div className="relative border-t border-background/15 bg-foreground">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-20 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-background/60">
          <p>© {new Date().getFullYear()} My Rehab Physio. All rights reserved.</p>
          <p>Home physiotherapy in Powai, Mumbai · Physiotherapy at home</p>
        </div>
      </div>
    </footer>
  )
}
