import Link from "next/link"
import { Instagram, Phone, MapPin } from "iconoir-react"

export function Footer() {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo.png"
                alt="Ponto do Assado"
                className="h-12 w-12 rounded-full object-cover border-2 border-primary"
              />
              <div>
                <h3 className="text-primary font-bold text-lg tracking-wider uppercase">Ponto do Assado</h3>
                <p className="text-muted-foreground text-xs tracking-widest">FRANGO ASSADO & BOLOS DA SARA</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm mb-2">
              Frango assado fresquinho todo dia e os irresistiveis bolos da Sara sob encomenda.
            </p>
            <p className="text-xs text-muted-foreground">Mauá - SP</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-bold mb-4 tracking-wide">LINKS RAPIDOS</h4>
            <nav className="space-y-2">
              <Link href="#menu" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Cardapio
              </Link>
              <Link href="#bolos" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Bolos da Sara
              </Link>
              <Link href="#location" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Localizacao
              </Link>
              <Link href="#contact" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Contato
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-foreground font-bold mb-4 tracking-wide">CONTATO</h4>
            <div className="space-y-3">
              <a
                href="tel:+5511954364018"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                (11) 95436-4018
              </a>
              <a
                href="https://www.instagram.com/pontodoassado"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <Instagram className="w-4 h-4 flex-shrink-0" />
                @pontodoassado
              </a>
              <a
                href="https://maps.google.com/?q=Av.+Bar%C3%A3o+de+Mau%C3%A1,+Mau%C3%A1+SP"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Av. Barão de Mauá<br />Mauá - SP</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-muted-foreground text-sm">
              <p>&copy; {new Date().getFullYear()} Ponto do Assado. Todos os direitos reservados.</p>
              <span className="hidden md:inline">|</span>
              <Link href="/impressum" className="hover:text-primary transition-colors">
                Termos de Uso
              </Link>
              <span>|</span>
              <Link href="/datenschutz" className="hover:text-primary transition-colors">
                Privacidade
              </Link>
            </div>
            <div className="flex items-center gap-3">
              {/* WhatsApp */}
              <a
                href="https://wa.me/5511954364018?text=Ola%2C%20gostaria%20de%20fazer%20um%20pedido!"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Ponto do Assado"
                className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center hover:scale-110 transition-transform shadow"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12.004 2C6.479 2 2 6.479 2 12.004c0 1.765.463 3.423 1.268 4.87L2.05 21.95l5.227-1.194A9.966 9.966 0 0012.004 22C17.521 22 22 17.521 22 12.004 22 6.479 17.521 2 12.004 2zm0 18.18a8.174 8.174 0 01-4.17-1.146l-.299-.178-3.1.708.72-3.017-.195-.31A8.174 8.174 0 013.824 12c0-4.512 3.668-8.18 8.18-8.18s8.18 3.668 8.18 8.18-3.668 8.18-8.18 8.18z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/pontodoassado"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Ponto do Assado"
                className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow"
                style={{ background: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)" }}
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              {/* Google Maps */}
              <a
                href="https://maps.google.com/?q=Av.+Bar%C3%A3o+de+Mau%C3%A1,+Mau%C3%A1+SP"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Maps Ponto do Assado"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform shadow border border-gray-100"
              >
                <MapPin className="w-5 h-5 text-[#EA4335]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
