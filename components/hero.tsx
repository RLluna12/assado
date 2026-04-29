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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center md:text-left order-2 md:order-1">
            {/* Logo Badge */}
            <div className="inline-flex items-center gap-3 mb-6">
              <img
                src="/graphics/blasterchef-logo.jpeg"
                alt="BlasTerchef Logo"
                className="h-20 w-20 rounded-full object-cover border-4 border-primary"
              />
            </div>

            {/* Main Title */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4">
              <span className="text-primary">BLAS</span>
              <span className="text-foreground">TER</span>
              <span className="text-primary">CHEF</span>
            </h1>

            {/* Tagline */}
            <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-light tracking-wide mb-8 max-w-2xl mx-auto">
              Pizzaria & Esfiharia
            </p>

            {/* Description */}
            <p className="text-base sm:text-lg text-foreground/80 max-w-xl mx-auto mb-10 leading-relaxed">
              Pizzas artesanais, esfihas deliciosas e o melhor rodizio da cidade. Sabor que conquista em cada fatia!
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <a
                href="tel:+5511999999999"
                className="group flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-bold tracking-wider rounded-lg hover:bg-primary/90 transition-all shadow-2xl shadow-primary/50 w-full sm:w-auto justify-center"
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

            {/* Rodizio Badge - Large & Prominent */}
            <div className="max-w-xl mx-auto mb-16 p-6 md:p-8 bg-primary/10 rounded-2xl border-2 border-primary/30 backdrop-blur-sm">
              <div className="flex items-center justify-center gap-4 md:gap-6">
                <div className="text-6xl">🍕</div>
                <div className="text-left">
                  <p className="text-primary font-black text-2xl md:text-3xl lg:text-4xl mb-1">RODIZIO</p>
                  <p className="text-foreground font-bold text-base md:text-lg lg:text-xl">Pizzas & Esfihas a Vontade</p>
                  <p className="text-muted-foreground text-sm md:text-base mt-1">Sexta a Domingo</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-lg mx-auto md:mx-0">
              <div className="text-center md:text-left">
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">20+</p>
                <p className="text-xs sm:text-sm text-muted-foreground tracking-wide">PIZZAS</p>
              </div>
              <div className="text-center md:text-left">
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">15+</p>
                <p className="text-xs sm:text-sm text-muted-foreground tracking-wide">ESFIHAS</p>
              </div>
              <div className="text-center md:text-left">
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">100%</p>
                <p className="text-xs sm:text-sm text-muted-foreground tracking-wide">SABOR</p>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Pizza */}
          <div className="order-1 md:order-2 relative">
            <div className="relative w-full h-[400px] md:h-[600px] flex items-center justify-center">
              {/* Glow Effects */}
              <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent animate-pulse" />

              {/* Pizza - Main Hero Image */}
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a-cheesy-delicious-pizza-with-tasty-pepperoni-on-a-transparent-background-png-7ZL16pwVcbclQshrKCHdhziDyXxbwB.webp"
                alt="Pizza de Pepperoni BlasTerchef"
                className="w-full h-full object-contain drop-shadow-[0_0_80px_rgba(220,38,38,0.6)] animate-float"
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-primary" />
        </div>
      </div>
    </section>
  )
}
