import type React from "react"
import type { Metadata } from "next"
import { Fraunces, Karla } from "next/font/google"
import "./globals.css"

const karla = Karla({
  subsets: ["latin"],
  variable: "--font-karla",
})

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["SOFT", "WONK", "opsz"],
  style: ["normal", "italic"],
})

export const metadata: Metadata = {
  title: "My Rehab Physio - Best Home Physiotherapy in Powai, Mumbai | Physiotherapy at Home",
  description:
    "Expert home physiotherapy services in Powai, Hiranandani Gardens, Chandivali & Mumbai. Female physiotherapist available. Neuro, Ortho, Sports & Cardio-Pulmonary Physiotherapy at home. Best physiotherapy clinic near me. Call +91-7021042122",
  keywords:
    "home physiotherapy Powai, physiotherapy at home Mumbai, physiotherapy near me, physio near me, female physiotherapist near me, home physiotherapy Hiranandani Gardens, physiotherapy at home Chandivali, best physiotherapy clinic Powai, home physio services Mumbai, physiotherapy home visits, physio at home Saki Vihar Road, home treatment physiotherapy, My Rehab Physio, neuro physiotherapy at home, ortho physiotherapy home visits, sports physiotherapy at home, physiotherapy clinic near IIT Bombay, home physiotherapy Vile Parle West, physio home services Andheri East",
  openGraph: {
    title: "My Rehab Physio - Best Home Physiotherapy in Powai, Mumbai | Physiotherapy at Home",
    description:
      "Expert home physiotherapy services in Powai, Hiranandani Gardens, Chandivali & Mumbai. Female physiotherapist available. Call +91-7021042122",
    type: "website",
  },
}

/* Local-business structured data — only facts published on the site itself. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: "My Rehab Physio",
  url: "https://www.myrehabphysio.in/",
  telephone: "+91-7021042122",
  sameAs: ["https://g.co/kgs/ZBMUoyZ"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Hill Side Avenue, Hiranandani Gardens",
    addressLocality: "Powai, Mumbai",
    addressRegion: "Maharashtra",
    postalCode: "400076",
    addressCountry: "IN",
  },
  location: [
    {
      "@type": "Place",
      name: "My Rehab Physio — Powai (Main)",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Hill Side Avenue, Hiranandani Gardens, Powai",
        addressLocality: "Mumbai",
        postalCode: "400076",
        addressCountry: "IN",
      },
    },
    {
      "@type": "Place",
      name: "My Rehab Physio — Vile Parle West",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Narsee Monjee Bhavan, 7, N S Road No. 7, JVPD Scheme",
        addressLocality: "Mumbai",
        postalCode: "400049",
        addressCountry: "IN",
      },
    },
    {
      "@type": "Place",
      name: "My Rehab Physio — Chandivali",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Saki Vihar Rd, New Mhada Colony, Chandivali, Powai",
        addressLocality: "Mumbai",
        postalCode: "400072",
        addressCountry: "IN",
      },
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${karla.variable} ${fraunces.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:bg-primary focus:text-primary-foreground focus:px-3 focus:py-2 focus:rounded-md text-sm font-semibold"
        >
          Skip to main content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  )
}
