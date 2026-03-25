import type { Metadata, Viewport } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Mamaluni | La comida casera, elevada",
  description:
    "Restobar en Munro, Buenos Aires. Porciones abundantes, sabores reales y un lugar al que siempre querés volver. Restaurante, cafetería y catering para eventos.",
  keywords: [
    "restaurante munro",
    "restobar buenos aires",
    "comida casera",
    "catering eventos",
    "picadas",
    "milanesas",
    "cerveza tirada",
  ],
  openGraph: {
    title: "Mamaluni | La comida casera, elevada",
    description:
      "Porciones abundantes, sabores reales y un lugar al que siempre querés volver.",
    type: "website",
    locale: "es_AR",
  },
}

export const viewport: Viewport = {
  themeColor: "#0d0d0d",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
