import { CallButton } from "@/components/call-button"
import { Reveal } from "@/components/reveal"

const CONDITIONS = [
  {
    num: "01",
    term: "Neuro-Physiotherapy",
    body: "for stroke rehabilitation, paralysis treatment, Bell's Palsy, neurological conditions, and nerve pain management with specialized neurological recovery techniques.",
  },
  {
    num: "02",
    term: "Ortho-Physiotherapy",
    body: "for arthritis, sciatica, lower back pain, knee pain, cervical spondylosis, neck pain, shoulder pain, frozen shoulder, and musculoskeletal disorders.",
  },
  {
    num: "03",
    term: "Sports Physiotherapy",
    body: "for sports injuries, athletic performance enhancement, tennis elbow, ACL injuries, sports rehabilitation, and injury prevention for athletes and active individuals.",
  },
  {
    num: "04",
    term: "Cardio-Pulmonary Physiotherapy",
    body: "for respiratory conditions, COPD management, cardiac rehabilitation, breathing exercises, and cardiovascular health improvement.",
  },
  {
    num: "05",
    term: "Physiotherapy Treatment",
    body: "for comprehensive pain management, mobility improvement, strength training, and functional rehabilitation across all age groups.",
  },
  {
    num: "06",
    term: "Physiotherapy Rehabilitation",
    body: "including post-operative care, post-surgical recovery, joint replacement rehabilitation, and specialized recovery programs.",
  },
]

export function ConditionsTreated() {
  return (
    <section
      id="conditions"
      className="relative bg-muted/40 border-y border-border py-16 lg:py-24 px-5 sm:px-8 overflow-hidden"
    >
      {/* Oversized editorial anchor */}
      <span
        aria-hidden="true"
        className="pointer-events-none select-none absolute font-display text-[16rem] lg:text-[24rem] leading-none text-primary/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        6
      </span>

      <div className="relative max-w-6xl mx-auto">
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 lg:mb-14">
            <div className="flex items-start gap-5 lg:gap-7 max-w-2xl">
              <span aria-hidden="true" className="font-display text-7xl lg:text-8xl leading-none text-primary">
                6
              </span>
              <div>
                <h2 className="text-3xl sm:text-4xl text-foreground leading-tight">
                  Conditions Treated at My Rehab Physio Mumbai Clinics
                </h2>
                <p className="text-muted-foreground mt-4">
                  Consult some of the top physiotherapy treatment doctors in Mumbai to avail top-notch physiotherapy
                  for a variety of conditions including:
                </p>
              </div>
            </div>
            <div className="shrink-0">
              <CallButton label="Book a Consultation" />
            </div>
          </div>
        </Reveal>

        {/* Editorial ledger — all six conditions visible, dictionary-style */}
        <ul className="border-t border-border">
          {CONDITIONS.map((condition, i) => (
            <Reveal
              key={condition.num}
              as="li"
              delay={i * 40}
              className="group grid sm:grid-cols-12 gap-x-6 gap-y-1.5 py-6 lg:py-7 border-b border-border items-baseline transition-colors hover:bg-background/70 sm:-mx-4 sm:px-4 sm:rounded-md"
            >
              <span
                aria-hidden="true"
                className="sm:col-span-1 font-display text-lg text-primary/70 tabular-nums"
              >
                {condition.num}
              </span>
              <h3 className="sm:col-span-4 font-display text-xl lg:text-2xl text-foreground leading-snug">
                {condition.term}
              </h3>
              <p className="sm:col-span-7 text-muted-foreground leading-relaxed">{condition.body}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
