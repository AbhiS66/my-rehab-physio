"use client"

import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [showToast, setShowToast] = useState(false)
const handleCallClick = (e: React.MouseEvent) => {
  const isMobile = window.innerWidth <= 768;
  const phoneNumber = "+917021042122";

  if (isMobile) {
    // Create a temporary <a> tag with tel: link
    const tempLink = document.createElement("a");
    tempLink.href = `tel:${phoneNumber}`;
    tempLink.style.display = "none"; // Hide it
    document.body.appendChild(tempLink);
    tempLink.click(); // Trigger the call
    document.body.removeChild(tempLink); // Clean up
    return;
  }

  // Prevent navigation on desktop
  e.preventDefault();

  // Copy to clipboard on desktop
  navigator.clipboard.writeText(phoneNumber).then(() => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  });
};


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
          <Button onClick={handleCallClick} className="bg-primary hover:bg-primary/90 text-white">
            <Phone className="w-4 h-4 mr-2" />
            Call +91-7021042122
          </Button>

        {/* Toast */}
        {showToast && (
          <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded shadow-lg z-50 transition-opacity duration-300">
            Phone number copied to clipboard!
          </div>
        )}
        </div>
      </div>
    </header>
  )
}
