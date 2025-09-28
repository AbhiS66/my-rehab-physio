import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Home, MapPin, Clock, Users } from "lucide-react"

export function HomePhysiotherapySEO() {
  return (
    <div className="bg-gradient-to-br from-green-50 to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Home Physiotherapy Services in Powai, Mumbai</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Professional physiotherapy treatment at your doorstep. Our expert physiotherapists provide personalized care
            in the comfort of your home across Powai, Hiranandani Gardens, Chandivali, and surrounding areas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <Home className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Home Physiotherapy Powai</h3>
            <p className="text-sm text-gray-600">Convenient at-home treatment in Powai area</p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Physiotherapy Near Hiranandani</h3>
            <p className="text-sm text-gray-600">Serving Hiranandani Gardens and nearby localities</p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Flexible Home Visits</h3>
            <p className="text-sm text-gray-600">Morning and evening slots available</p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <Users className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Expert Team</h3>
            <p className="text-sm text-gray-600">Qualified physiotherapists with home care experience</p>
          </Card>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Areas We Cover for Home Physiotherapy</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Powai & Surroundings</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Home Physiotherapy in Powai</li>
                <li>• Physiotherapy at Home Hiranandani Gardens</li>
                <li>• Home Physio Services Powai Lake</li>
                <li>• Physiotherapy Home Visits Powai Plaza</li>
                <li>• Home Treatment Near IIT Bombay</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Chandivali & Vicinity</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Home Physiotherapy Chandivali</li>
                <li>• Physio at Home Saki Vihar Road</li>
                <li>• Home Treatment New Mhada Colony</li>
                <li>• Physiotherapy Services Chandivali Studio</li>
                <li>• Home Visits Near Chandivali Junction</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Extended Coverage</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Home Physiotherapy Vile Parle West</li>
                <li>• Physio at Home JVPD Scheme</li>
                <li>• Home Treatment Andheri East</li>
                <li>• Physiotherapy Services Kanjurmarg</li>
                <li>• Home Visits Vikhroli West</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              Home Physiotherapy Powai
            </Badge>
            <Badge variant="secondary" className="bg-blue-100 text-blue-800">
              Physiotherapy at Home Mumbai
            </Badge>
            <Badge variant="secondary" className="bg-purple-100 text-purple-800">
              Home Physio Near Me
            </Badge>
            <Badge variant="secondary" className="bg-orange-100 text-orange-800">
              Female Physiotherapist Home Visits
            </Badge>
            <Badge variant="secondary" className="bg-teal-100 text-teal-800">
              Home Treatment Hiranandani
            </Badge>
          </div>
          <p className="text-lg font-semibold text-gray-900 mb-2">Book Your Home Physiotherapy Session Today</p>
          <p className="text-gray-600 mb-4">
            Call us at{" "}
            <a href="tel:+917021042122" className="text-primary font-semibold">
              +91-7021042122
            </a>{" "}
            to schedule your home visit
          </p>
        </div>
      </div>
    </div>
  )
}
