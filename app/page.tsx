import { Header } from "@/components/header"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"
import { ClinicHero } from "@/components/clinic-hero"
import { AboutClinic } from "@/components/about-clinic"
import { ConditionsTreated } from "@/components/conditions-treated"
import { EnhancedDoctorProfiles } from "@/components/enhanced-doctor-profiles"
import { HomePhysiotherapySEO } from "@/components/home-physiotherapy-seo"
import { Footer } from "@/components/footer"
import { MobileCallBar } from "@/components/mobile-call-bar"
import { Reveal } from "@/components/reveal"

export default function Home() {
  return (
    <div className="min-h-screen bg-background pb-16 lg:pb-0">
      <Header />
      <BreadcrumbNav />
      <main id="main" tabIndex={-1}>
        <ClinicHero />

        <Reveal>
          <AboutClinic />
        </Reveal>

        <ConditionsTreated />
        <EnhancedDoctorProfiles />
        <HomePhysiotherapySEO />
      </main>
      <Footer />
      <MobileCallBar />
    </div>
  )
}
