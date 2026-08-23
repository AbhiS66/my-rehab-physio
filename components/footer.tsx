import { MapPin, Clock, Phone, ArrowRight } from "lucide-react"

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

export function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 lg:py-20">
        {/* Top row */}
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Brand + phone */}
          <div className="lg:col-span-4">
            <div className="flex items-center mb-5">
              <img src="/mrp-logo.jpg" alt="My Rehab Physio Logo" className="h-12 w-auto" />
            </div>
            <p className="text-background/70 leading-relaxed mb-7 max-w-xs">
              Neuro, Ortho, Sports & Cardio-Pulmonary physiotherapy at home and across our Mumbai clinics.
            </p>
            <a
              href="tel:+917021042122"
              className="inline-flex items-center gap-2 bg-background text-foreground font-semibold rounded-md px-6 py-3 text-sm hover:bg-muted transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call +91-7021042122
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Locations */}
          <div className="lg:col-span-4">
            <h3 className="font-display text-lg mb-5 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              Our locations
            </h3>
            <ul className="space-y-5">
              {LOCATIONS.map((loc) => (
                <li key={loc.name}>
                  <p className="font-medium mb-0.5">{loc.name}</p>
                  <p className="text-sm text-background/70 leading-relaxed">{loc.address}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours + areas */}
          <div className="lg:col-span-4">
            <h3 className="font-display text-lg mb-5 flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              Clinic hours
            </h3>
            <p className="text-sm text-background/70 leading-relaxed mb-6">
              Monday – Saturday
              <br />
              Home visits available
            </p>

            <h3 className="font-display text-lg mb-4">Coverage areas</h3>
            <p className="text-sm text-background/70 leading-relaxed">{AREAS.join(" · ")}</p>
          </div>
        </div>
      </div>

      <div className="border-t border-background/15">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-background/60">
          <p>© {new Date().getFullYear()} My Rehab Physio. All rights reserved.</p>
          <p>Home physiotherapy in Powai, Mumbai · Physiotherapy at home</p>
        </div>
      </div>
    </footer>
  )
}