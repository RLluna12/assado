import type React from "react"
import type { Metadata, Viewport } from "next"
import { Oswald, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { CartProvider } from "@/contexts/cart-context"
import { CartDrawer } from "@/components/cart-drawer"
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
  metadataBase: new URL('https://blasterchef.com.br'),
  title: {
    default: 'BlasTerchef | Pizzaria & Esfiharia - Rodizio de Pizzas e Esfihas',
    template: '%s | BlasTerchef'
  },
  description:
    "BlasTerchef - A melhor pizzaria e esfiharia da cidade! Pizzas artesanais, esfihas deliciosas e rodizio aos finais de semana. Delivery disponivel. Peca ja!",
  keywords: [
    "pizzaria",
    "esfiharia",
    "rodizio de pizza",
    "rodizio de esfiha",
    "pizza delivery",
    "esfiha delivery",
    "pizza artesanal",
    "blasterchef",
    "pizzaria delivery",
    "melhor pizza",
    "esfiha de carne",
    "pizza margherita",
    "pizza calabresa",
    "rodizio",
    "buffet de pizza",
    "pizza para festa"
  ],
  authors: [{ name: 'BlasTerchef' }],
  creator: 'BlasTerchef',
  publisher: 'BlasTerchef',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'BlasTerchef | Pizzaria & Esfiharia',
    description: 'Pizzas artesanais, esfihas deliciosas e o melhor rodizio da cidade. Delivery disponivel!',
    url: 'https://blasterchef.com.br',
    siteName: 'BlasTerchef',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/graphics/pizza-hero.jpeg',
        width: 1200,
        height: 630,
        alt: 'BlasTerchef - Pizzaria & Esfiharia',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BlasTerchef | Pizzaria & Esfiharia',
    description: 'Pizzas artesanais, esfihas deliciosas e rodizio aos finais de semana!',
    images: ['/graphics/pizza-hero.jpeg'],
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
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  generator: 'v0.app'
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
        <link rel="canonical" href="https://blasterchef.com.br" />
      </head>
      <body className={`${oswald.variable} ${playfair.variable} font-sans antialiased`}>
        <CartProvider>
          {children}
          <CartDrawer />
        </CartProvider>
        <Analytics />
      </body>
    </html>
  )
}
