"use client"

import React, { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function ConditionsTreated() {
  const [showToast, setShowToast] = useState(false)

  const handleCallClick = (e: React.MouseEvent) => {
    const isMobile = window.innerWidth <= 768
    const phoneNumber = "+917021042122"

    if (isMobile) return // let tel: link work normally

    // Prevent navigation on desktop
    e.preventDefault()

    navigator.clipboard.writeText(phoneNumber).then(() => {
      setShowToast(true)
      setTimeout(() => setShowToast(false), 3000)
    })
  }

  const conditions = [
    "Neuro-Physiotherapy for stroke rehabilitation, paralysis treatment, Bell's Palsy, neurological conditions, and nerve pain management with specialized neurological recovery techniques.",
    "Ortho-Physiotherapy for arthritis, sciatica, lower back pain, knee pain, cervical spondylosis, neck pain, shoulder pain, frozen shoulder, and musculoskeletal disorders.",
    "Sports Physiotherapy for sports injuries, athletic performance enhancement, tennis elbow, ACL injuries, sports rehabilitation, and injury prevention for athletes and active individuals.",
    "Cardio-Pulmonary Physiotherapy for respiratory conditions, COPD management, cardiac rehabilitation, breathing exercises, and cardiovascular health improvement.",
    "Physiotherapy Treatment for comprehensive pain management, mobility improvement, strength training, and functional rehabilitation across all age groups.",
    "Physiotherapy Rehabilitation including post-operative care, post-surgical recovery, joint replacement rehabilitation, and specialized recovery programs.",
  ]

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Conditions Treated at My Rehab Physio Mumbai Clinics
        </h2>

        <Card className="p-8">
          <ul className="space-y-4">
            {conditions.map((condition, index) => (
              <li key={index} className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <p className="text-gray-700 leading-relaxed">{condition}</p>
              </li>
            ))}
          </ul>

          <div className="mt-8 text-center">
            <a
              href="tel:+917021042122"
              onClick={handleCallClick}
              className="inline-block"
            >
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3">
                Book a Consultation
              </Button>
            </a>
          </div>
        </Card>

        {/* Toast */}
        {showToast && (
          <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded shadow-lg z-50 transition-opacity duration-300">
            Phone number copied to clipboard!
          </div>
        )}
      </div>
    </div>
  )
}
