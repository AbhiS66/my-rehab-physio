import { Reveal } from "@/components/reveal"

type DoctorDetail = { label: string; text: string }

type Doctor = {
  initials: string
  name: string
  degree: string
  badge: string
  details: DoctorDetail[]
  languages?: string[]
  photo?: { src: string; alt: string }
}

const DOCTORS: Doctor[] = [
  {
    initials: "AS",
    name: "Dr. Avdhoot Shimpi",
    photo: { src: "/dr-avdhoot-shimpi.jpg", alt: "Portrait of Dr. Avdhoot Shimpi" },
    degree: "BPTh (Orthopedics)",
    badge: "Senior Orthopedic Physiotherapist",
    languages: ["Hindi", "Marathi", "English"],
    details: [
      {
        label: "Education & Qualifications",
        text: "Bachelor's in Orthopedic Physiotherapy from Mumbai University. Certified in Manual Therapy and Sports Rehabilitation.",
      },
      {
        label: "Specializations",
        text: "Post-operative rehabilitation, joint replacement recovery, arthritis management, back pain treatment, sports injury rehabilitation, and manual therapy techniques.",
      },
      {
        label: "Experience",
        text: "5+ years of clinical experience with expertise in treating complex orthopedic conditions. Specialized training in home physiotherapy services.",
      },
      {
        label: "Patient Focus",
        text: "Known for personalized treatment plans and excellent patient communication. Fluent in Hindi, Marathi, and English.",
      },
    ],
  },
  {
    initials: "PS",
    name: "Dr. Prajna Shetty",
    degree: "BPTh (Neurology)",
    badge: "Senior Neurological Physiotherapist",
    details: [
      {
        label: "Education & Qualifications",
        text: "Bachelor's in Neurological Physiotherapy. Expert in NDT (Neuro-Developmental Treatment) and PNF techniques.",
      },
      {
        label: "Specializations",
        text: "Stroke rehabilitation, paralysis treatment, Parkinson's disease management, spinal cord injury recovery, balance training, and pediatric neurological conditions.",
      },
      {
        label: "Experience",
        text: "5+ years specializing in neurological rehabilitation with extensive experience in home-based neuro-physiotherapy treatments.",
      },
      {
        label: "Patient Focus",
        text: "Compassionate approach to neurological recovery with family-centered care. Experienced in motivating patients through challenging rehabilitation journeys.",
      },
    ],
  },
  {
    initials: "PP",
    name: "Dr. Prerana Patil",
    degree: "BPTh",
    badge: "Senior Sports Physiotherapist",
    details: [
      {
        label: "Education & Qualifications",
        text: "Bachelor's in Physiotherapy. Certified in Dry Needling, Kinesio Taping, and Athletic Performance Enhancement.",
      },
      {
        label: "Specializations",
        text: "Sports injury rehabilitation, ACL reconstruction recovery, shoulder impingement, tennis elbow, running injuries, and performance optimization for athletes.",
      },
      {
        label: "Experience",
        text: "5+ years in sports physiotherapy with experience treating professional athletes and weekend warriors. Expert in injury prevention strategies.",
      },
      {
        label: "Patient Focus",
        text: "Dedicated to helping athletes return to peak performance. Provides comprehensive injury prevention education and movement analysis.",
      },
    ],
  },
]

const LABEL = "text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground"

export function EnhancedDoctorProfiles() {
  return (
    <section id="team" className="bg-background py-20 lg:py-28 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Asymmetric section header — intro offset right */}
        <Reveal>
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-12 lg:mb-14">
            <div className="lg:col-span-7">
              <p className={`${LABEL} !text-primary mb-4`}>The humans behind your recovery</p>
              <h2 className="text-[2rem] sm:text-[2.5rem] lg:text-[3rem] text-foreground leading-tight max-w-xl">
                Meet Our Expert Physiotherapy Team
              </h2>
            </div>
            <p className="lg:col-span-5 text-muted-foreground leading-relaxed lg:border-l lg:border-border lg:pl-8">
              Our highly qualified physiotherapists bring years of experience and specialized training to provide the
              best care for your recovery and wellness journey.
            </p>
          </div>
        </Reveal>

        {/* Dossier rows — identity rail alternates sides, oversized initials watermark.
            Rail lands first; the four ledger cells cascade in after it. */}
        <div>
          {DOCTORS.map((doc, i) => (
            <article
              key={doc.name}
              className={`relative grid lg:grid-cols-12 gap-x-8 gap-y-6 py-12 lg:py-14 ${
                i > 0 ? "border-t border-border" : ""
              }`}
            >
              {/* Identity rail */}
              <Reveal className={`lg:col-span-4 relative ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <span
                  aria-hidden="true"
                  className={`ghost-settle pointer-events-none select-none absolute -top-8 font-display text-[7rem] lg:text-[9rem] leading-none text-primary/[0.08] ${
                    i % 2 === 0 ? "-right-2" : "-left-2"
                  }`}
                >
                  {doc.initials}
                </span>
                <p aria-hidden="true" className="font-display text-sm text-primary/80 mb-3 tabular-nums">
                  0{i + 1}
                </p>
                {doc.photo && (
                  <img
                    src={doc.photo.src}
                    alt={doc.photo.alt}
                    width={300}
                    height={230}
                    loading="lazy"
                    className="mb-6 w-44 max-w-full aspect-[4/3] object-cover object-top rounded-none ring-1 ring-border shadow-sm grayscale hover:[filter:none] transition-[filter] duration-700"
                  />
                )}
                <h3 className="font-display text-4xl lg:text-5xl text-foreground leading-[1.05]">{doc.name}</h3>
                <p className="text-muted-foreground mt-2">{doc.degree}</p>
                <p className="mt-5 inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                  {doc.badge}
                </p>
                {doc.languages && (
                  <p className="mt-6">
                    <span className={`${LABEL} block mb-2`}>Languages</span>
                    <span className="text-sm text-foreground">{doc.languages.join(" · ")}</span>
                  </p>
                )}
              </Reveal>

              {/* Detail ledger */}
              <dl
                className={`lg:col-span-8 grid sm:grid-cols-2 gap-x-10 gap-y-7 relative ${
                  i % 2 === 1 ? "lg:order-1" : ""
                }`}
              >
                {doc.details.map((detail, di) => (
                  <Reveal key={detail.label} delay={120 + di * 80} className="border-t border-border pt-4">
                    <dt className={`${LABEL} mb-2`}>{detail.label}</dt>
                    <dd className="text-sm text-foreground/85 leading-relaxed">{detail.text}</dd>
                  </Reveal>
                ))}
              </dl>
            </article>
          ))}
        </div>

        <Reveal>
          <div className="mt-10 lg:mt-12 border-t border-border pt-8 flex flex-col lg:flex-row lg:items-start justify-between gap-6">
            <p className="font-display text-xl lg:text-2xl text-foreground leading-snug max-w-xl">
              All our physiotherapists are available for both clinic visits and home consultations across Mumbai
            </p>
            <ul
              className="flex flex-wrap gap-x-5 gap-y-2 text-xs uppercase tracking-widest text-muted-foreground lg:justify-end lg:max-w-md lg:pt-1.5"
              role="list"
            >
              {["Licensed Physiotherapists", "Home Visit Specialists", "Multilingual Team", "Insurance Accepted"].map(
                (badge, i) => (
                  <li key={badge} className={i > 2 ? "" : "border-r border-border pr-5"}>
                    {badge}
                  </li>
                ),
              )}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
