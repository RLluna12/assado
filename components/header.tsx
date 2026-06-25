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
              src="logo.png"
              alt="BlasTerchef"
              className="h-12 md:h-14 w-12 md:w-14 rounded-full object-cover border-2 border-primary"
            />
            <div className="hidden sm:block">
              <h1 className="text-primary font-bold text-xl md:text-2xl tracking-wider uppercase">Ponto do Assado</h1>
              <p className="text-muted-foreground text-xs tracking-widest">FRANGO ASSADO & BOLOS DA SARA</p>
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
              href="#bolos"
              className="text-foreground hover:text-primary transition-colors font-medium tracking-wide"
            >
              Doces
            </Link>
            <Link
              href="#location"
              className="text-foreground hover:text-primary transition-colors font-medium tracking-wide"
            >
              Localização
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

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/5511954364018?text=Ola%2C%20gostaria%20de%20fazer%20um%20pedido!"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-green-500 hover:bg-green-600 text-white text-sm font-semibold transition-colors shadow-sm"
            aria-label="Chamar no WhatsApp"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.554 4.118 1.528 5.85L.057 23.27a.75.75 0 0 0 .918.919l5.444-1.472A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.846 0-3.587-.49-5.092-1.348l-.364-.214-3.232.875.876-3.208-.228-.374A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
            </svg>
            <span className="hidden md:inline">WhatsApp</span>
          </a>

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
                href="#bolos"
                className="text-foreground hover:text-primary transition-colors font-medium tracking-wide py-2"
                onClick={() => setIsOpen(false)}
              >
                Doces
              </Link>
              <Link
                href="#location"
                className="text-foreground hover:text-primary transition-colors font-medium tracking-wide py-2"
                onClick={() => setIsOpen(false)}
              >
                Localização
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
                  src="/logo.png"
                  alt="Ponto do Assado"
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
