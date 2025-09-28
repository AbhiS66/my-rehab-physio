import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "My Rehab Physio - Best Home Physiotherapy in Powai, Mumbai | Physiotherapy at Home",
  description:
    "Expert home physiotherapy services in Powai, Hiranandani Gardens, Chandivali & Mumbai. Female physiotherapist available. Neuro, Ortho, Sports & Cardio-Pulmonary Physiotherapy at home. Best physiotherapy clinic near me. Call +91-7021042122",
  keywords:
    "home physiotherapy Powai, physiotherapy at home Mumbai, physiotherapy near me, physio near me, female physiotherapist near me, home physiotherapy Hiranandani Gardens, physiotherapy at home Chandivali, best physiotherapy clinic Powai, home physio services Mumbai, physiotherapy home visits, physio at home Saki Vihar Road, home treatment physiotherapy, My Rehab Physio, neuro physiotherapy at home, ortho physiotherapy home visits, sports physiotherapy at home, physiotherapy clinic near IIT Bombay, home physiotherapy Vile Parle West, physio home services Andheri East",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
