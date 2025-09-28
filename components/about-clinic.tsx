import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Users, Award, Heart } from "lucide-react"

export function AboutClinic() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            About My Rehab Physio - Your Trusted Experts in Movement, Recovery & Well-being
          </h2>

          <div className="prose max-w-none text-gray-700 leading-relaxed mb-8">
            <p className="mb-4">
              Struggling with pain or an injury? At My Rehab Physio, we're here to help you get back to what you love
              doing so you can fulfil your dreams. Whether you need to get back to the gym, play sports, run a marathon
              or simply do your work, our expert team is dedicated to guiding you every step of the way.
            </p>

            <p className="mb-4">
              Conveniently located in the heart of Mumbai with multiple locations in Vile Parle West, Powai, and
              Chandivali, we offer a wide range of services, including neuro physiotherapy, ortho physiotherapy, sports
              physiotherapy, and cardio-pulmonary physiotherapy – all designed to help you recover, move better, and
              stay active.
            </p>

            <p className="mb-4">
              <strong>Everything we do is focused on getting you out of pain and back to what you love doing.</strong>
            </p>

            <p className="mb-6">
              Our comprehensive approach to physiotherapy and wellness in Mumbai ensures that each patient receives
              personalized care tailored to their specific needs and recovery goals. We also offer convenient home visit
              services for your comfort and convenience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
              <MapPin className="w-8 h-8 text-primary mr-3" />
              <div>
                <h3 className="font-semibold text-gray-900 text-sm">Multiple Locations</h3>
                <p className="text-xs text-gray-600">Powai, Vile Parle, Chandivali</p>
              </div>
            </div>

            <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
              <Users className="w-8 h-8 text-primary mr-3" />
              <div>
                <h3 className="font-semibold text-gray-900 text-sm">Expert Team</h3>
                <p className="text-xs text-gray-600">Qualified Physiotherapists</p>
              </div>
            </div>

            <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
              <Award className="w-8 h-8 text-primary mr-3" />
              <div>
                <h3 className="font-semibold text-gray-900 text-sm">Specialized Care</h3>
                <p className="text-xs text-gray-600">Neuro, Ortho, Sports, Cardio</p>
              </div>
            </div>

            <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
              <Heart className="w-8 h-8 text-primary mr-3" />
              <div>
                <h3 className="font-semibold text-gray-900 text-sm">Home Visits</h3>
                <p className="text-xs text-gray-600">Convenient At-Home Care</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              Best Physiotherapy Clinic Mumbai
            </Badge>
            <Badge variant="secondary" className="bg-blue-100 text-blue-800">
              Home Physiotherapy Services
            </Badge>
            <Badge variant="secondary" className="bg-purple-100 text-purple-800">
              Female Physiotherapist Available
            </Badge>
            <Badge variant="secondary" className="bg-orange-100 text-orange-800">
              Physiotherapy Near Me
            </Badge>
            <Badge variant="secondary" className="bg-teal-100 text-teal-800">
              Expert Neuro Rehabilitation
            </Badge>
          </div>
        </Card>
      </div>
    </div>
  )
}
