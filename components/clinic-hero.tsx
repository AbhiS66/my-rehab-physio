import { ArrowUpRight, Clock, MapPin, Phone } from "lucide-react"
import { CallButton } from "@/components/call-button"
import { MovementLine } from "@/components/movement-line"

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

const SERVICES = [
  "Physiotherapy Clinic Near Me",
  "Female Physiotherapist Near by Me",
  "Physio Near Me",
  "Physiotherapy at Home",
]

const COVERAGE_TAGS = [
  "Home Physiotherapy Powai",
  "Physiotherapy at Home Hiranandani",
  "Home Physio Chandivali",
  "Female Physiotherapist Home Visits",
  "Physio Near IIT Bombay",
  "Home Treatment Saki Vihar Road",
]

const LABEL =
  "text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground"

export function ClinicHero() {
  return (
    <section id="top" className="relative bg-background overflow-hidden">
      <MovementLine className="absolute -left-12 bottom-40 h-64 w-64 lg:h-96 lg:w-96 text-primary/10" />

      <div className="relative grid lg:grid-cols-12">
        {/* Narrative column */}
        <div className="lg:col-span-7 px-5 sm:px-8 lg:pl-12 xl:pl-20 pt-12 pb-12 lg:pt-16 lg:pb-12">
          <div className="lg:max-w-xl">
            {/* Google reviews */}
            <div className="flex items-center gap-2.5 mb-6 flex-wrap">
              <img src="/google-logo.png" alt="Google" className="h-5 w-auto" />
              <span className={LABEL}>Reviews</span>
              <span aria-hidden="true" className="text-border">
                ·
              </span>
              <a
                href="https://g.co/kgs/ZBMUoyZ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-muted-foreground underline underline-offset-4 decoration-border hover:text-primary transition-colors"
              >
                See our reviews on Google
                <ArrowUpRight className="w-3.5 h-3.5 ml-0.5" />
              </a>
            </div>

            {/* H1 + subhead */}
            <h1 className="text-[2.5rem] sm:text-5xl lg:text-[3.75rem] leading-[1.04] text-foreground mb-5">
              My Rehab Physio - Best Physiotherapy Clinic in Mumbai{" "}
              <span className="mt-2 block text-primary italic">
                <span className="not-italic">|</span> Powai, Vile Parle, Chandivali
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 max-w-lg">
              Expert physiotherapy treatment in Mumbai with specialized team for Neuro, Ortho, Sports &amp;
              Cardio-Pulmonary Physiotherapy
            </p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-4 mb-9">
              <CallButton label="Call +91-7021042122" />
              <a
                href="#conditions"
                className="text-sm font-semibold text-foreground underline underline-offset-8 decoration-primary/40 hover:decoration-primary transition-colors"
              >
                Browse conditions we treat
              </a>
            </div>
          </div>

          {/* At-a-glance cluster — addresses, hours, phone without scrolling */}
          <dl className="lg:max-w-3xl grid sm:grid-cols-3 gap-x-8 gap-y-8 border-t border-border pt-7">
              <div>
                <dt className={`${LABEL} flex items-center gap-2 mb-3`}>
                  <MapPin className="w-3.5 h-3.5 text-primary" />
                  Locations
                </dt>
                <dd className="space-y-3">
                  {LOCATIONS.map((loc) => (
                    <p key={loc.name} className="text-sm leading-snug">
                      <span className="font-semibold text-foreground">{loc.name}: </span>
                      <span className="text-muted-foreground">{loc.address}</span>
                    </p>
                  ))}
                </dd>
              </div>
              <div>
                <dt className={`${LABEL} flex items-center gap-2 mb-3`}>
                  <Clock className="w-3.5 h-3.5 text-primary" />
                  Timings
                </dt>
                <dd className="text-sm text-muted-foreground leading-relaxed">
                  Monday – Saturday
                  <br />
                  <span className="text-foreground font-medium">Home visits available</span>
                </dd>
              </div>
              <div>
                <dt className={`${LABEL} flex items-center gap-2 mb-3`}>
                  <Phone className="w-3.5 h-3.5 text-primary" />
                  Contact
                </dt>
                <dd>
                  <a
                    href="tel:+917021042122"
                    className="font-display text-xl lg:text-2xl tracking-tight whitespace-nowrap text-foreground hover:text-primary transition-colors"
                  >
                    +91-7021042122
                  </a>
                </dd>
              </div>
            </dl>
        </div>

        {/* Image — bleeds to the right viewport edge */}
        <div className="lg:col-span-5 relative min-h-[300px] sm:min-h-[380px] lg:min-h-[600px]">
          <img
            src="/modern-physiotherapy-clinic-interior-with-equipmen.jpg"
            alt="My Rehab Physio clinic interior, Powai"
            className="absolute inset-0 w-full h-full object-cover object-[72%_center] lg:rounded-l-[2rem]"
          />
          <div className="absolute left-5 bottom-5 hidden lg:flex items-center gap-2.5 bg-card/95 backdrop-blur rounded-md px-4 py-3 ring-1 ring-border shadow-sm">
            <Clock className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Mon – Sat · Home visits available</span>
          </div>
        </div>
      </div>

      {/* Data strip — map, services, coverage (the hero sidebar) */}
      <div id="locations" className="relative border-t border-border bg-secondary/50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-10 lg:py-12 grid gap-10 lg:grid-cols-12">
          <figure className="lg:col-span-5">
            <div className="h-56 lg:h-60 rounded-lg overflow-hidden ring-1 ring-border">
              <iframe
                src="https://www.google.com/maps?q=Hill+Side+Avenue,+Hiranandani+Gardens,+Powai,+Mumbai+400076&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="My Rehab Physio Powai Location"
              />
            </div>
            <figcaption className="mt-2.5 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Our Powai location — Hill Side Avenue, Hiranandani Gardens
            </figcaption>
          </figure>

          <div className="lg:col-span-3">
            <p className={`${LABEL} mb-4`}>Services at our clinics</p>
            <ul className="space-y-2.5" role="list">
              {SERVICES.map((service) => (
                <li key={service} className="flex items-center text-sm text-foreground">
                  <span className="w-1 h-1 bg-primary rounded-full mr-3 shrink-0" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <p className={`${LABEL} mb-4`}>Home physiotherapy coverage</p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              We provide comprehensive physiotherapy services and home visits across Mumbai including Powai,
              Hiranandani Gardens, Chandivali, Vile Parle West, JVPD Scheme, Saki Vihar Road, Andheri East,
              Kanjurmarg, Vikhroli, and surrounding areas. Our qualified physiotherapists offer personalized home
              treatment for your convenience and comfort.
            </p>
            <ul className="flex flex-wrap gap-2" role="list">
              {COVERAGE_TAGS.map((tag) => (
                <li
                  key={tag}
                  className="text-xs text-muted-foreground border border-border rounded-full px-3 py-1 bg-background/60"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
