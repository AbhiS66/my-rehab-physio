import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function PhysiotherapistProfile() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Meet Our Expert Physiotherapy Team in Mumbai
        </h2>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="p-6">
            <div className="text-center">
              <img
                src="/specialist-portrait.png"
                alt="Dr. Avdhoot Shimpi"
                className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Dr. Avdhoot Shimpi (PT)</h3>
              <Badge variant="secondary" className="bg-green-100 text-green-800 mb-3">
                Ortho-Physiotherapist
              </Badge>
              <p className="text-gray-700 text-sm">
                Specialized in orthopedic physiotherapy with expertise in musculoskeletal conditions, post-operative
                rehabilitation, and sports injury management.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <div className="text-center">
              <img
                src="/specialist-portrait.png"
                alt="Dr. Prajna Shetty"
                className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Dr. Prajna Shetty (PT)</h3>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800 mb-3">
                Neuro-Physiotherapist
              </Badge>
              <p className="text-gray-700 text-sm">
                Expert in neurological rehabilitation with focus on stroke recovery, paralysis treatment, and
                neurological condition management.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <div className="text-center">
              <img
                src="/specialist-portrait.png"
                alt="Dr. Prerana Patil"
                className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Dr. Prerana Patil (PT)</h3>
              <Badge variant="secondary" className="bg-orange-100 text-orange-800 mb-3">
                Sports Physiotherapist
              </Badge>
              <p className="text-gray-700 text-sm">
                Specialized in sports physiotherapy, athletic performance enhancement, and sports injury prevention and
                rehabilitation.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
