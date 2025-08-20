import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Source_Sans_3 as Source_Sans_Pro } from "next/font/google"
import "./globals.css"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair-display",
})

const sourceSansPro = Source_Sans_Pro({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-source-sans-pro",
})

export const metadata: Metadata = {
  title: "GoCyberCheck - 사이버보안 평가 도구",
  description: "기업을 위한 전문적인 사이버보안 평가 및 컴플라이언스 검사 도구",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className={`dark ${playfairDisplay.variable} ${sourceSansPro.variable}`}>
      <head>
        <style>{`
          :root {
            /* Base dark theme */
            --background: #000000 !important;
            --foreground: #FAFAFA !important;
            --card: #111111 !important;
            --card-foreground: #FAFAFA !important;
            --popover: #050505 !important;
            --popover-foreground: #FAFAFA !important;
            --secondary: #27272A !important;
            --secondary-foreground: #FAFAFA !important;
            --muted: #27272A !important;
            --muted-foreground: #A1A1AA !important;
            --border: #27272A !important;
            --input: #27272A !important;
            --ring: #A1A1AA !important;

            /* --- Color Conflict Resolution --- */
            /* For Header Text & Gradient: Make primary a light color */
            --primary: #FAFAFA !important;
            /* For Gradient & Accents: Use new blue color */
            --accent: #38bdf8 !important;
            /* For text on buttons that might use primary background */
            --primary-foreground: #FAFAFA !important;
          }
          body {
            /* Improve readability */
            font-weight: 500 !important;
          }
          /* For CTA Section: Force its background to be dark */
          .bg-primary {
            background-color: #000000 !important;
          }
          /* For Contact Sales button in CTA */
          section.bg-primary button[variant="outline"] {
            color: var(--foreground) !important;
            border-color: var(--foreground) !important;
          }
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
