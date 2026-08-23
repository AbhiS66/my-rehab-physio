const FEATURES = [
  { title: "Multiple Locations", detail: "Powai, Vile Parle, Chandivali", num: "01" },
  { title: "Expert Team", detail: "Qualified Physiotherapists", num: "02" },
  { title: "Specialized Care", detail: "Neuro, Ortho, Sports, Cardio", num: "03" },
  { title: "Home Visits", detail: "Convenient At-Home Care", num: "04" },
]

export function AboutClinic() {
  return (
    <section id="about" className="bg-background">
      <div className="grid lg:grid-cols-12 gap-0">
        {/* Narrative */}
        <div className="lg:col-span-7 px-5 sm:px-8 lg:pl-12 xl:pl-20 py-16 lg:py-24">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
            About the clinic
          </p>
          <h2 className="text-3xl sm:text-4xl text-foreground leading-tight mb-8">
            About My Rehab Physio - Your Trusted Experts in Movement, Recovery & Well-being
          </h2>

          <div className="space-y-5 text-muted-foreground leading-relaxed lg:max-w-xl">
            <p>
              Struggling with pain or an injury? At My Rehab Physio, we're here to help you get back to what you love
              doing so you can fulfil your dreams. Whether you need to get back to the gym, play sports, run a marathon
              or simply do your work, our expert team is dedicated to guiding you every step of the way.
            </p>
            <p>
              Conveniently located in the heart of Mumbai with multiple locations in Vile Parle West, Powai, and
              Chandivali, we offer a wide range of services, including neuro physiotherapy, ortho physiotherapy, sports
              physiotherapy, and cardio-pulmonary physiotherapy – all designed to help you recover, move better, and
              stay active.
            </p>
            <p className="text-foreground font-medium">
              Everything we do is focused on getting you out of pain and back to what you love doing.
            </p>
            <p>
              Our comprehensive approach to physiotherapy and wellness in Mumbai ensures that each patient receives
              personalized care tailored to their specific needs and recovery goals. We also offer convenient home visit
              services for your comfort and convenience.
            </p>
          </div>

          <ul className="mt-10 flex flex-wrap gap-y-2 text-sm uppercase tracking-widest text-muted-foreground" role="list">
            {[
              "Best Physiotherapy Clinic Mumbai",
              "Home Physiotherapy Services",
              "Female Physiotherapist Available",
              "Physio Near Me",
              "Expert Neuro Rehabilitation",
            ].map((badge, i) => (
              <li key={badge} className={i > 0 ? "lg:border-l lg:border-border lg:pl-4 lg:ml-4" : ""}>
                {badge}
              </li>
            ))}
          </ul>

          {/* Offset interior photo, tucked against the terracotta panel */}
          <figure className="mt-12 max-w-[19rem]">
            <img
              src="/modern-physiotherapy-clinic-interior-with-equipmen.jpg"
              alt="Inside the My Rehab Physio clinic, Powai"
              className="w-full aspect-[4/3] object-cover rounded-xl ring-1 ring-border"
              loading="lazy"
            />
            <figcaption className="mt-3 border-l-2 border-primary pl-3 text-xs uppercase tracking-widest text-muted-foreground">
              Inside our Powai clinic
            </figcaption>
          </figure>
        </div>

        {/* Editorial numbered panel */}
        <div className="lg:col-span-5 lg:border-l border-border bg-primary text-primary-foreground lg:py-24 py-12 px-5 sm:px-8 lg:px-12">
          <p className="text-sm uppercase tracking-widest mb-8">
            What you can expect
          </p>
          <ul className="space-y-11" role="list">
            {FEATURES.map((f) => (
              <li key={f.num} className="grid grid-cols-[auto_1fr] items-baseline gap-x-7">
                <span aria-hidden="true" className="font-display text-6xl lg:text-7xl leading-none opacity-70">
                  {f.num}
                </span>
                <div className="border-t border-primary-foreground/25 pt-4">
                  <h3 className="font-display text-2xl font-semibold text-primary-foreground leading-tight">{f.title}</h3>
                  <p className="text-sm text-primary-foreground/95 mt-1.5 leading-relaxed">{f.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}