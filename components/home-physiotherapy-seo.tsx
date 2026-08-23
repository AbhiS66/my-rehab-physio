import { MovementLine } from "@/components/movement-line"
import { Reveal } from "@/components/reveal"

const FEATURES = [
  { title: "Home Physiotherapy Powai", body: "Convenient at-home treatment in Powai area" },
  { title: "Physiotherapy Near Hiranandani", body: "Serving Hiranandani Gardens and nearby localities" },
  { title: "Flexible Home Visits", body: "Morning and evening slots available" },
  { title: "Expert Team", body: "Qualified physiotherapists with home care experience" },
]

const AREAS = [
  {
    heading: "Powai & Surroundings",
    items: [
      "Home Physiotherapy in Powai",
      "Physiotherapy at Home Hiranandani Gardens",
      "Home Physio Services Powai Lake",
      "Physiotherapy Home Visits Powai Plaza",
      "Home Treatment Near IIT Bombay",
    ],
  },
  {
    heading: "Chandivali & Vicinity",
    items: [
      "Home Physiotherapy Chandivali",
      "Physio at Home Saki Vihar Road",
      "Home Treatment New Mhada Colony",
      "Physiotherapy Services Chandivali Studio",
      "Home Visits Near Chandivali Junction",
    ],
  },
  {
    heading: "Extended Coverage",
    items: [
      "Home Physiotherapy Vile Parle West",
      "Physio at Home JVPD Scheme",
      "Home Treatment Andheri East",
      "Physiotherapy Services Kanjurmarg",
      "Home Visits Vikhroli West",
    ],
  },
]

const FINALE_BADGES = [
  "Home Physiotherapy Powai",
  "Physiotherapy at Home Mumbai",
  "Home Physio Near Me",
  "Female Physiotherapist Home Visits",
  "Home Treatment Hiranandani",
]

const LABEL = "text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground"

export function HomePhysiotherapySEO() {
  return (
    <>
      <section id="home-visits" className="bg-secondary/40 py-16 lg:py-24 px-5 sm:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Asymmetric header — intro offset right */}
          <Reveal>
            <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-12">
              <div className="lg:col-span-7">
                <p className={`${LABEL} !text-primary mb-4`}>Physiotherapy at home</p>
                <h2 className="text-3xl sm:text-4xl text-foreground leading-tight max-w-xl">
                  Home Physiotherapy Services in Powai, Mumbai
                </h2>
              </div>
              <p className="lg:col-span-5 text-muted-foreground leading-relaxed lg:border-l lg:border-border lg:pl-8">
                Professional physiotherapy treatment at your doorstep. Our expert physiotherapists provide personalized
                care in the comfort of your home across Powai, Hiranandani Gardens, Chandivali, and surrounding areas.
              </p>
            </div>
          </Reveal>

          {/* Features — definition ledger, same grammar as the doctor detail ledgers */}
          <Reveal delay={60}>
            <dl className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-8 mb-14 lg:mb-16">
              {FEATURES.map((feature) => (
                <div key={feature.title} className="border-t-2 border-primary/30 pt-4">
                  <dt className="font-display text-lg font-semibold text-foreground leading-snug mb-1.5">
                    {feature.title}
                  </dt>
                  <dd className="text-sm text-muted-foreground leading-relaxed">{feature.body}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          {/* Areas — editorial index with counts */}
          <Reveal>
            <div className="flex items-baseline justify-between gap-6 mb-10">
              <h3 className="font-display text-2xl lg:text-3xl text-foreground">
                Areas We Cover for Home Physiotherapy
              </h3>
              <span
                aria-hidden="true"
                className="font-display text-5xl lg:text-6xl leading-none text-primary/25 shrink-0"
              >
                15
              </span>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
            {AREAS.map((group, gi) => (
              <Reveal key={group.heading} delay={gi * 40}>
                <div>
                  <h4 className="font-display text-lg text-foreground border-b border-border pb-3 mb-4 flex items-baseline justify-between gap-3">
                    {group.heading}
                    <span aria-hidden="true" className="text-xs text-primary/60 font-sans tracking-[0.2em]">
                      0{gi + 1}
                    </span>
                  </h4>
                  <ul className="space-y-2.5" role="list">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start text-sm text-muted-foreground">
                        <span aria-hidden="true" className="w-1 h-1 rounded-full bg-primary mt-[7px] mr-3 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Finale — full-bleed terracotta, the page's loudest moment. Staged as
          one descending beat; the giant number lands last. */}
      <section aria-labelledby="book-home-visit" className="relative bg-primary text-primary-foreground overflow-hidden">
        <Reveal className="absolute -right-16 -bottom-12 h-72 w-72 lg:h-[26rem] lg:w-[26rem]">
          <MovementLine draw="view" className="h-full w-full text-primary-foreground/20" />
        </Reveal>
        <div className="relative max-w-6xl mx-auto px-5 sm:px-8 py-20 lg:py-28 grain">
          <Reveal>
            <ul
              className="flex flex-wrap gap-x-4 gap-y-2 text-xs uppercase tracking-[0.2em] text-primary-foreground/95 mb-8 lg:mb-10"
              role="list"
            >
              {FINALE_BADGES.map((tag) => (
                <li key={tag} className="flex items-center">
                  <span aria-hidden="true" className="w-1 h-1 bg-primary-foreground/70 rounded-full mr-2.5 shrink-0" />
                  {tag}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={100}>
            <h2
              id="book-home-visit"
              className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.02] tracking-tight max-w-3xl mb-6"
            >
              Book Your Home Physiotherapy Session Today
            </h2>
          </Reveal>
          <Reveal delay={220}>
            <p className="text-primary-foreground text-lg max-w-xl mb-10 lg:mb-12">
              Call us to schedule your home visit
            </p>
          </Reveal>

          {/* The number — display-sized but proportionate; underline sweeps in on hover/focus. */}
          <Reveal delay={320}>
            <a
              href="tel:+917021042122"
              className="group relative inline-block font-display text-3xl sm:text-5xl lg:text-6xl leading-none tracking-tight whitespace-nowrap"
            >
              <span className="transition-opacity duration-300 group-hover:opacity-90">+91-7021042122</span>
              <span
                aria-hidden="true"
                className="absolute left-0 -bottom-1.5 lg:-bottom-2 h-[3px] w-full origin-left scale-x-0 bg-primary-foreground transition-transform duration-500 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100 motion-reduce:transition-none"
              />
            </a>
          </Reveal>
          <Reveal delay={420}>
            <p className="mt-6 text-sm text-primary-foreground/95">Monday – Saturday · Home visits available</p>
          </Reveal>
        </div>
      </section>
    </>
  )
}
