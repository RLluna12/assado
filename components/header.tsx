"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, Xmark, MapPin, Cart } from "iconoir-react"
import { useCart } from "@/contexts/cart-context"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { count, setIsOpen: setCartOpen } = useCart()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/graphics/blasterchef-logo.jpeg"
              alt="BlasTerchef"
              className="h-12 md:h-14 w-12 md:w-14 rounded-full object-cover border-2 border-primary"
            />
            <div className="hidden sm:block">
              <h1 className="text-primary font-bold text-xl md:text-2xl tracking-wider uppercase">BlasTerchef</h1>
              <p className="text-muted-foreground text-xs tracking-widest">PIZZARIA & ESFIHARIA</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#menu"
              className="text-foreground hover:text-primary transition-colors font-medium tracking-wide"
            >
              Cardapio
            </Link>
            <Link
              href="#rodizio"
              className="text-foreground hover:text-primary transition-colors font-medium tracking-wide"
            >
              Rodizio
            </Link>
            <Link
              href="#location"
              className="text-foreground hover:text-primary transition-colors font-medium tracking-wide"
            >
              Localizacao
            </Link>
            <Link
              href="#contact"
              className="text-foreground hover:text-primary transition-colors font-medium tracking-wide"
            >
              Contato
            </Link>
            <div className="flex items-center gap-2 text-accent">
              <MapPin className="w-5 h-5" />
              <span className="text-sm font-medium">Delivery</span>
            </div>
          </nav>

          {/* Botao carrinho */}
          <button
            onClick={() => setCartOpen(true)}
            className="relative p-2.5 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all border border-primary/20 hover:border-primary/40"
            aria-label="Abrir carrinho"
          >
            <Cart className="w-5 h-5" />
            {count > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-primary text-white text-xs font-black w-5 h-5 rounded-full flex items-center justify-center shadow">
                {count > 9 ? "9+" : count}
              </span>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <Xmark className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link
                href="#menu"
                className="text-foreground hover:text-primary transition-colors font-medium tracking-wide py-2"
                onClick={() => setIsOpen(false)}
              >
                Cardapio
              </Link>
              <Link
                href="#rodizio"
                className="text-foreground hover:text-primary transition-colors font-medium tracking-wide py-2"
                onClick={() => setIsOpen(false)}
              >
                Rodizio
              </Link>
              <Link
                href="#location"
                className="text-foreground hover:text-primary transition-colors font-medium tracking-wide py-2"
                onClick={() => setIsOpen(false)}
              >
                Localizacao
              </Link>
              <Link
                href="#contact"
                className="text-foreground hover:text-primary transition-colors font-medium tracking-wide py-2"
                onClick={() => setIsOpen(false)}
              >
                Contato
              </Link>
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center gap-2 text-accent">
                  <MapPin className="w-5 h-5" />
                  <span className="text-sm font-medium">Delivery Disponivel</span>
                </div>
                <img
                  src="/graphics/blasterchef-logo.jpeg"
                  alt="BlasTerchef"
                  className="h-10 w-10 rounded-full object-cover"
                />
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
