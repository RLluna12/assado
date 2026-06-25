import { MapPin, Clock } from "iconoir-react"

export function LocationSection() {
  return (
    <section id="location" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary tracking-tight mb-4">
            LOCALIZAÇÃO
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Av. Barão de Mauá — venha nos visitar em Mauá/SP!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Mapa embed */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-border aspect-video lg:aspect-square">
            <iframe
              title="BlasTerchef no Google Maps"
              src="https://www.google.com/maps?q=Av.+Bar%C3%A3o+de+Mau%C3%A1,+Mau%C3%A1+SP&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "360px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>

          {/* Informacoes */}
          <div className="space-y-6">
            {/* Endereco */}
            <div className="p-7 bg-card border border-border rounded-2xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">Nosso Endereco</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Av. Barão de Mauá, Número 4713<br />
                    Mauá - SP
                  </p>
                  <a
                    href="https://maps.google.com/?q=Av.+Bar%C3%A3o+de+Mau%C3%A1,+4713,+Mau%C3%A1+SP"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-sm font-bold text-primary hover:underline"
                  >
                    Abrir no Google Maps &rarr;
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/15 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Horario de Funcionamento</h3>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between gap-4">
                      <span className="text-muted-foreground">Segunda a Sabado</span>
                      <span className="text-foreground font-semibold">11:00 – 20:00</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span className="text-muted-foreground">Domingo</span>
                      <span className="text-destructive font-bold">Aberto das 06h - 14h</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
