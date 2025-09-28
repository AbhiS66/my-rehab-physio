import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, GraduationCap, Users, Clock } from "lucide-react"

export function EnhancedDoctorProfiles() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Expert Physiotherapy Team</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our highly qualified physiotherapists bring years of experience and specialized training to provide the best
            care for your recovery and wellness journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Dr. Avdhoot Shimpi */}
          <Card className="p-8 hover:shadow-xl transition-shadow">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Dr. Avdhoot Shimpi</h3>
              <p className="text-gray-600 mb-3">BPTh, MPTh (Orthopedics)</p>
              <Badge variant="secondary" className="bg-green-100 text-green-800 mb-4">
                Senior Orthopedic Physiotherapist
              </Badge>
            </div>

            <div className="space-y-4">
              <div className="flex items-start">
                <GraduationCap className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Education & Qualifications</h4>
                  <p className="text-sm text-gray-600">
                    Master's in Orthopedic Physiotherapy from Mumbai University. Certified in Manual Therapy and Sports
                    Rehabilitation.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Award className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Specializations</h4>
                  <p className="text-sm text-gray-600">
                    Post-operative rehabilitation, joint replacement recovery, arthritis management, back pain
                    treatment, sports injury rehabilitation, and manual therapy techniques.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Experience</h4>
                  <p className="text-sm text-gray-600">
                    8+ years of clinical experience with expertise in treating complex orthopedic conditions.
                    Specialized training in home physiotherapy services.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Users className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Patient Focus</h4>
                  <p className="text-sm text-gray-600">
                    Known for personalized treatment plans and excellent patient communication. Fluent in Hindi,
                    Marathi, and English.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Dr. Prajna Shetty */}
          <Card className="p-8 hover:shadow-xl transition-shadow">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Dr. Prajna Shetty</h3>
              <p className="text-gray-600 mb-3">BPTh, MPTh (Neurology)</p>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800 mb-4">
                Senior Neurological Physiotherapist
              </Badge>
            </div>

            <div className="space-y-4">
              <div className="flex items-start">
                <GraduationCap className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Education & Qualifications</h4>
                  <p className="text-sm text-gray-600">
                    Master's in Neurological Physiotherapy. Certified in NDT (Neuro-Developmental Treatment) and PNF
                    techniques.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Award className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Specializations</h4>
                  <p className="text-sm text-gray-600">
                    Stroke rehabilitation, paralysis treatment, Parkinson's disease management, spinal cord injury
                    recovery, balance training, and pediatric neurological conditions.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Experience</h4>
                  <p className="text-sm text-gray-600">
                    7+ years specializing in neurological rehabilitation with extensive experience in home-based
                    neuro-physiotherapy treatments.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Users className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Patient Focus</h4>
                  <p className="text-sm text-gray-600">
                    Compassionate approach to neurological recovery with family-centered care. Experienced in motivating
                    patients through challenging rehabilitation journeys.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Dr. Prerana Patil */}
          <Card className="p-8 hover:shadow-xl transition-shadow">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Dr. Prerana Patil</h3>
              <p className="text-gray-600 mb-3">BPTh, MPTh (Sports Medicine)</p>
              <Badge variant="secondary" className="bg-orange-100 text-orange-800 mb-4">
                Senior Sports Physiotherapist
              </Badge>
            </div>

            <div className="space-y-4">
              <div className="flex items-start">
                <GraduationCap className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Education & Qualifications</h4>
                  <p className="text-sm text-gray-600">
                    Master's in Sports Medicine & Physiotherapy. Certified in Dry Needling, Kinesio Taping, and Athletic
                    Performance Enhancement.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Award className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Specializations</h4>
                  <p className="text-sm text-gray-600">
                    Sports injury rehabilitation, ACL reconstruction recovery, shoulder impingement, tennis elbow,
                    running injuries, and performance optimization for athletes.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Experience</h4>
                  <p className="text-sm text-gray-600">
                    6+ years in sports physiotherapy with experience treating professional athletes and weekend
                    warriors. Expert in injury prevention strategies.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Users className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Patient Focus</h4>
                  <p className="text-sm text-gray-600">
                    Dedicated to helping athletes return to peak performance. Provides comprehensive injury prevention
                    education and movement analysis.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 mb-4">
            All our physiotherapists are available for both clinic visits and home consultations across Mumbai
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="outline">Licensed Physiotherapists</Badge>
            <Badge variant="outline">Home Visit Specialists</Badge>
            <Badge variant="outline">Multilingual Team</Badge>
            <Badge variant="outline">Insurance Accepted</Badge>
          </div>
        </div>
      </div>
    </div>
  )
}
