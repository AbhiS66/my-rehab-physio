import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/mrp-logo.jpg" alt="My Rehab Physio Logo" className="h-12 w-auto" />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-primary font-medium">
              About
            </a>
            <a href="#" className="text-gray-700 hover:text-primary font-medium">
              Locations
            </a>
            <a href="#" className="text-gray-700 hover:text-primary font-medium">
              Conditions We Treat
            </a>
            <a href="#" className="text-gray-700 hover:text-primary font-medium">
              For Patients
            </a>
            <a href="#" className="text-gray-700 hover:text-primary font-medium">
              For Hospitals
            </a>
          </nav>

          {/* Contact Button */}
          <Button className="bg-primary hover:bg-primary/90 text-white">
            <Phone className="w-4 h-4 mr-2" />
            Call +91-7021042122
          </Button>
        </div>
      </div>
    </header>
  )
}
