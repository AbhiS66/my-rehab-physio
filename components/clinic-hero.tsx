import { Star, MapPin, Clock, Phone } from "lucide-react"
import { Card } from "@/components/ui/card"

export function ClinicHero() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            My Rehab Physio - Best Physiotherapy Clinic in Mumbai | Powai, Vile Parle, Chandivali
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            Expert physiotherapy treatment in Mumbai with specialized team for Neuro, Ortho, Sports & Cardio-Pulmonary
            Physiotherapy
          </p>

          {/* Google Reviews */}
          <div className="flex items-center mb-6">
            <img src="/google-logo.png" alt="Google" className="h-6 mr-3" />
            <span className="text-lg font-semibold mr-2">REVIEWS</span>
            <div className="flex items-center">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <a
                href="https://g.co/kgs/ZBMUoyZ"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 text-sm text-gray-600 hover:text-primary"
              >
                See our reviews on Google
              </a>
            </div>
          </div>

          {/* Clinic Image */}
          <div className="mb-8">
            <img
              src="/modern-physiotherapy-clinic-interior-with-equipmen.jpg"
              alt="My Rehab Physio Interior"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-start">
              <MapPin className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900">Multiple Locations</h3>
                <div className="text-sm text-gray-600 space-y-2">
                  <p>
                    <strong>Powai (Main):</strong> Hill Side Avenue, Hiranandani Gardens, Powai, Mumbai 400076
                  </p>
                  <p>
                    <strong>Vile Parle West:</strong> Narsee Monjee Bhavan, 7, N S Road No. 7, JVPD Scheme, Mumbai
                    400049
                  </p>
                  <p>
                    <strong>Chandivali:</strong> Saki Vihar Rd, New Mhada Colony, Chandivali, Powai, Mumbai 400072
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-start">
              <Clock className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900">Timings</h3>
                <p className="text-sm text-gray-600">
                  Monday - Saturday
                  <br />
                  Home visits available
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Phone className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900">Contact</h3>
                <p className="text-sm text-gray-600">+91-7021042122</p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="font-semibold text-gray-900 mb-3">Home Physiotherapy Coverage Areas</h3>
            <p className="text-sm text-gray-600 mb-4">
              We provide comprehensive physiotherapy services and home visits across Mumbai including Powai, Hiranandani
              Gardens, Chandivali, Vile Parle West, JVPD Scheme, Saki Vihar Road, Andheri East, Kanjurmarg, Vikhroli,
              and surrounding areas. Our qualified physiotherapists offer personalized home treatment for your
              convenience and comfort.
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs text-gray-500">
              <span>• Home Physiotherapy Powai</span>
              <span>• Physiotherapy at Home Hiranandani</span>
              <span>• Home Physio Chandivali</span>
              <span>• Female Physiotherapist Home Visits</span>
              <span>• Physio Near IIT Bombay</span>
              <span>• Home Treatment Saki Vihar Road</span>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <Card className="p-6 mb-6">
            <div className="mb-4">
              <h3 className="font-semibold text-gray-900 mb-3">Our Powai Location</h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.8234567890123!2d72.9176!3d19.1197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8556b2b1234%3A0x5678901234567890!2sHill%20Side%20Avenue%2C%20Hiranandani%20Gardens%2C%20Powai%2C%20Mumbai%2C%20Maharashtra%20400076!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="My Rehab Physio Powai Location"
                className="rounded-lg"
              />
            </div>
          </Card>

          {/* Services */}
          <Card className="p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Our Services</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                <span className="text-sm text-gray-700">Physiotherapy Clinic Near Me</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                <span className="text-sm text-gray-700">Female Physiotherapist Near by Me</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                <span className="text-sm text-gray-700">Physio Near Me</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                <span className="text-sm text-gray-700">Physiotherapy at Home</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
