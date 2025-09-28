import { Header } from "@/components/header"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"
import { ClinicHero } from "@/components/clinic-hero"
import { AboutClinic } from "@/components/about-clinic"
import { HomePhysiotherapySEO } from "@/components/home-physiotherapy-seo"
import { ConditionsTreated } from "@/components/conditions-treated"
import { EnhancedDoctorProfiles } from "@/components/enhanced-doctor-profiles"
import { ConditionsMumbai } from "@/components/conditions-mumbai"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <BreadcrumbNav />
      <ClinicHero />
      <AboutClinic />
      <HomePhysiotherapySEO />
      <ConditionsTreated />
      <EnhancedDoctorProfiles />
      {/* <ConditionsMumbai /> */}
    </div>
  )
}
