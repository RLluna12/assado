"use client"

import { ArrowDown, FastArrowRight, Phone } from "iconoir-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-black">
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-red-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col items-center text-center">

        {/* Logo */}
        <img
          src="/graphics/blasterchef-logo.jpeg"
          alt="BlasTerchef Logo"
          className="h-24 w-24 rounded-full object-cover border-4 border-primary shadow-2xl shadow-primary/40 mb-6"
        />

        {/* Main Title */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight mb-3">
          <span className="text-primary">BLAS</span>
          <span className="text-foreground">TER</span>
          <span className="text-primary">CHEF</span>
        </h1>

        {/* Tagline */}
        <p className="text-xl sm:text-2xl text-muted-foreground font-light tracking-wide mb-6">
          Pizzaria &amp; Esfiharia
        </p>

        {/* Pizza Hero Image */}
        <div className="relative w-full max-w-lg mx-auto my-2">
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse scale-75" />
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a-cheesy-delicious-pizza-with-tasty-pepperoni-on-a-transparent-background-png-7ZL16pwVcbclQshrKCHdhziDyXxbwB.webp"
            alt="Pizza de Pepperoni BlasTerchef"
            className="relative w-full object-contain drop-shadow-[0_0_80px_rgba(220,38,38,0.7)] animate-float"
          />
        </div>

        {/* Description */}
        <p className="text-base sm:text-lg text-foreground/80 max-w-xl mb-8 leading-relaxed">
          Pizzas artesanais, esfihas deliciosas e o melhor rodizio da cidade. Sabor que conquista em cada fatia!
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 w-full max-w-sm sm:max-w-none">
          <a
            href="tel:+5511999999999"
            className="flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-bold tracking-wider rounded-lg hover:bg-primary/90 transition-all shadow-2xl shadow-primary/50 w-full sm:w-auto justify-center"
          >
            <Phone className="w-5 h-5" />
            LIGUE AGORA
          </a>
          <Link
            href="#menu"
            className="group flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary font-bold tracking-wider rounded-lg hover:bg-primary hover:text-primary-foreground transition-all w-full sm:w-auto justify-center"
          >
            VER CARDAPIO
            <FastArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <p className="text-3xl sm:text-4xl font-bold text-primary">20+</p>
            <p className="text-xs sm:text-sm text-muted-foreground tracking-wide">PIZZAS</p>
          </div>
          <div className="text-center">
            <p className="text-3xl sm:text-4xl font-bold text-primary">15+</p>
            <p className="text-xs sm:text-sm text-muted-foreground tracking-wide">ESFIHAS</p>
          </div>
          <div className="text-center">
            <p className="text-3xl sm:text-4xl font-bold text-primary">100%</p>
            <p className="text-xs sm:text-sm text-muted-foreground tracking-wide">SABOR</p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <ArrowDown className="w-6 h-6 text-primary" />
        </div>
      </div>
    </section>
  )
}
