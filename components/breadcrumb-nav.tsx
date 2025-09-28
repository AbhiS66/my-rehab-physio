import { ChevronRight } from "lucide-react"

export function BreadcrumbNav() {
  return (
    <div className="bg-gray-50 py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center text-sm text-gray-600">
          <a href="#" className="hover:text-primary">
            Home
          </a>
          <ChevronRight className="w-4 h-4 mx-2" />
          <a href="#" className="hover:text-primary">
            Physiotherapy Clinics
          </a>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-gray-900">Mumbai - Powai, Vile Parle, Chandivali</span>
        </nav>
      </div>
    </div>
  )
}
