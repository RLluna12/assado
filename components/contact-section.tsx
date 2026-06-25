import { Phone, MapPin, Instagram, Clock } from "iconoir-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary tracking-tight mb-4">CONTATO</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Faca seu pedido. Estamos esperando você!
          </p>
        </div>

        {/* Contact Cards */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Phone Card */}
          <div className="p-8 bg-secondary rounded-2xl flex flex-col items-center text-center space-y-4 border-2 border-border hover:border-primary transition-colors">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
              <Phone className="w-8 h-8 text-primary-foreground" />
            </div>
            <div>
              <p className="text-muted-foreground text-sm mb-2">Telefone / WhatsApp</p>
              <a
                href="tel:+5511954364018"
                className="text-2xl md:text-3xl font-black text-primary hover:text-primary/80 transition-colors"
              >
                (11) 95436-4018
              </a>
            </div>
            <p className="text-sm text-muted-foreground">Pedidos e Reservas</p>
          </div>

          {/* Instagram Card */}
          <div className="p-8 bg-secondary rounded-2xl flex flex-col items-center text-center space-y-4 border-2 border-border hover:border-primary transition-colors">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
              <Instagram className="w-8 h-8 text-primary-foreground" />
            </div>
            <div>
              <p className="text-muted-foreground text-sm mb-2">Instagram</p>
              <a
                href="https://www.instagram.com/__pontodoassado"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg md:text-xl font-bold text-primary hover:text-primary/80 transition-colors"
              >
                @__pontodoassado
              </a>
            </div>
            <p className="text-sm text-muted-foreground">Siga-nos no Instagram</p>
          </div>

          {/* Address Card */}
          <div className="p-8 bg-secondary rounded-2xl flex flex-col items-center text-center space-y-4 border-2 border-border hover:border-primary transition-colors">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
              <MapPin className="w-8 h-8 text-primary-foreground" />
            </div>
            <div>
              <p className="text-muted-foreground text-sm mb-2">Endereço</p>
              <p className="text-base font-bold text-foreground leading-snug">
                Av. Barão de Mauá, 4713
              </p>
              <p className="text-sm text-muted-foreground">Mauá - SP</p>
            </div>
            <a
              href="https://maps.google.com/?q=Av.+Bar%C3%A3o+de+Mau%C3%A1,+4713,+Mau%C3%A1+SP"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-primary hover:underline"
            >
              Ver no Maps
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
