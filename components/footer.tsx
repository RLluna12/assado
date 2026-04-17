import Link from "next/link"
import { Instagram, Phone, Mail, MapPin } from "iconoir-react"

export function Footer() {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/graphics/blasterchef-logo.jpeg"
                alt="BlasTerchef"
                className="h-12 w-12 rounded-full object-cover border-2 border-primary"
              />
              <div>
                <h3 className="text-primary font-bold text-lg tracking-wider uppercase">BlasTerchef</h3>
                <p className="text-muted-foreground text-xs tracking-widest">PIZZARIA & ESFIHARIA</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm mb-3">
              Pizzas artesanais, esfihas deliciosas e o melhor rodizio da cidade. Sabor que conquista!
            </p>
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="text-2xl">🍕</span>
              <span className="text-xs font-medium">Delivery & Rodizio</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-bold mb-4 tracking-wide">LINKS RAPIDOS</h4>
            <nav className="space-y-2">
              <Link href="#menu" className="block text-muted-foreground hover:text-primary transition-colors">
                Cardapio
              </Link>
              <Link href="#rodizio" className="block text-muted-foreground hover:text-primary transition-colors">
                Rodizio
              </Link>
              <Link href="#location" className="block text-muted-foreground hover:text-primary transition-colors">
                Localizacao
              </Link>
              <Link href="#contact" className="block text-muted-foreground hover:text-primary transition-colors">
                Contato
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-foreground font-bold mb-4 tracking-wide">CONTATO</h4>
            <div className="space-y-3">
              <a
                href="tel:+5511999999999"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                (11) 99999-9999
              </a>
              <a
                href="mailto:contato@blasterchef.com.br"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                contato@blasterchef.com.br
              </a>
              <p className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                Rua das Pizzas, 123 - Centro
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4">
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-muted-foreground text-sm">
              <p>&copy; {new Date().getFullYear()} BlasTerchef. Todos os direitos reservados.</p>
              <span className="hidden md:inline">|</span>
              <Link href="/impressum" className="hover:text-primary transition-colors">
                Termos de Uso
              </Link>
              <span>|</span>
              <Link href="/datenschutz" className="hover:text-primary transition-colors">
                Privacidade
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <img
                src="/graphics/blasterchef-logo.jpeg"
                alt="BlasTerchef"
                className="h-10 w-10 rounded-full object-cover"
              />
              <a
                href="https://www.instagram.com/blasterchef"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-foreground hover:text-primary hover:bg-secondary/80 transition-all"
                aria-label="Instagram - BlasTerchef"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
