import type React from "react"
import type { Metadata, Viewport } from "next"
import { Oswald, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { CartProvider } from "@/contexts/cart-context"
import { CartDrawer } from "@/components/cart-drawer"
import { Header } from "@/components/header"
import "./globals.css"

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  metadataBase: new URL('https://pontodoassado.com.br'),
  title: {
    default: 'Ponto do Assado | Frango Assado na Brasa & Sobremesas da Sara',
    template: '%s | Ponto do Assado'
  },
  description:
    "Ponto do Assado - O melhor frango assado na brasa de São Paulo! Frangos suculentos, bolos artesanais da Sara e sobremesas irresistíveis. Venha nos visitar!",
  keywords: [
    "frango assado",
    "frango na brasa",
    "ponto do assado",
    "frango assado sp",
    "bolo artesanal",
    "sobremesas",
    "frangos assados",
    "restaurante frango",
    "frango delivery",
    "melhor frango assado",
    "Sara bolos",
    "frango na brasa São Paulo",
    "assado",
    "churrasco",
    "comida caseira"
  ],
  authors: [{ name: 'Ponto do Assado' }],
  creator: 'Ponto do Assado',
  publisher: 'Ponto do Assado',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Ponto do Assado | Frango Assado na Brasa',
    description: 'O melhor frango assado na brasa de São Paulo. Bolos artesanais da Sara e sobremesas irresistíveis!',
    url: 'https://pontodoassado.com.br',
    siteName: 'Ponto do Assado',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: 'logo.png',
        width: 400,
        height: 400,
        alt: 'Ponto do Assado Logo',
      },
      {
        url: 'logo.png',
        width: 1200,
        height: 630,
        alt: 'Ponto do Assado - Frango Assado na Brasa',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ponto do Assado | Frango Assado na Brasa',
    description: 'O melhor frango assado na brasa de São Paulo. Bolos artesanais da Sara!',
    images: ['logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/logo.png', type: 'image/jpeg' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: 'logo.png',
    shortcut: 'logo.png',
  }
}

export const viewport: Viewport = {
  themeColor: "#dc2626",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="bg-background">
      <head>
        <link rel="canonical" href="https://pontodoassado.com.br" />
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </head>
      <body className={`${oswald.variable} ${playfair.variable} font-sans antialiased`}>
        <CartProvider>
          <Header />
          {children}
          <CartDrawer />
        </CartProvider>
        <Analytics />
      </body>
    </html>
  )
}
