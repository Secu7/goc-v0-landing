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
            --background: #000000 !important;
            --foreground: #FFFFFF !important;
            --card: #111111 !important;
            --card-foreground: #FFFFFF !important;
            --primary: #000000 !important;
            --primary-foreground: #FFFFFF !important;
            --secondary: #111111 !important;
            --secondary-foreground: #FFFFFF !important;
            --muted: #111111 !important;
            --muted-foreground: #A1A1AA !important;
            --border: #27272A !important;
          }
          body {
            background-color: #000000 !important;
          }
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
