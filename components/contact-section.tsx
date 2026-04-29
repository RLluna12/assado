import { Phone, MapPin, Instagram, Clock } from "iconoir-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary tracking-tight mb-4">CONTATO</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Faca seu pedido ou reserve sua mesa para o rodizio. Estamos esperando voce!
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
                href="tel:+5514998100810"
                className="text-2xl md:text-3xl font-black text-primary hover:text-primary/80 transition-colors"
              >
                (14) 99810-0810
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
                href="https://www.instagram.com/blasterchef"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg md:text-xl font-bold text-primary hover:text-primary/80 transition-colors"
              >
                @blasterchef
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
              <p className="text-muted-foreground text-sm mb-2">Endereco</p>
              <p className="text-base font-bold text-foreground leading-snug">
                R. Darzizo Crivelaro, 170
              </p>
              <p className="text-sm text-muted-foreground">Centro, Iacanga - SP</p>
              <p className="text-xs text-muted-foreground">Em frente ao Lago</p>
            </div>
            <a
              href="https://maps.google.com/?q=R.+Darzizo+Crivelaro,+170,+Iacanga+SP"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-primary hover:underline"
            >
              Ver no Maps
            </a>
          </div>
        </div>

        {/* Horarios + Diferenciais */}
        <div className="max-w-4xl mx-auto mt-12 grid sm:grid-cols-2 gap-6">
          {/* Horarios */}
          <div className="p-8 bg-primary/10 rounded-2xl border-2 border-primary/30">
            <div className="flex items-center gap-3 mb-5">
              <Clock className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-bold text-foreground">Horario de Funcionamento</h3>
            </div>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between text-muted-foreground">
                <span>Segunda-feira</span>
                <span className="text-destructive font-semibold">Fechado</span>
              </li>
              <li className="flex justify-between text-muted-foreground">
                <span>Terca a Quinta</span>
                <span className="font-semibold text-foreground">19:00 – 22:30</span>
              </li>
              <li className="flex justify-between text-muted-foreground">
                <span>Sexta-feira</span>
                <span className="font-semibold text-foreground">19:00 – 23:30</span>
              </li>
              <li className="flex justify-between text-muted-foreground">
                <span>Sabado</span>
                <span className="font-semibold text-foreground">19:00 – 23:30</span>
              </li>
              <li className="flex justify-between text-muted-foreground">
                <span>Domingo</span>
                <span className="font-semibold text-foreground">19:00 – 22:30</span>
              </li>
            </ul>
          </div>

          {/* Diferenciais */}
          <div className="p-8 bg-card rounded-2xl border-2 border-border">
            <h3 className="text-xl font-bold text-foreground mb-5">Por que nos escolher?</h3>
            <ul className="space-y-3">
              {[
                "Ambiente familiar aconchegante",
                "Espaco kids completo",
                "Estacionamento proprio",
                "Vista deslumbrante para o Lago",
                "Cardapio infantil",
                "Buffet a vontade",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
