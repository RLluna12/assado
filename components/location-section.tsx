import { MapPin, Clock, Calendar } from "iconoir-react"

export function LocationSection() {
  return (
    <section id="location" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary tracking-tight mb-4">
            LOCALIZACAO
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Em frente ao Lago de Iacanga — um cenario unico para uma refeicao inesquecivel.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Mapa embed */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-border aspect-video lg:aspect-square">
            <iframe
              title="BlasTerchef no Google Maps"
              src="https://www.google.com/maps?q=R.+Darzizo+Crivelaro,+170,+Iacanga+SP+17180-001&output=embed"
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
                    R. Darzizo Crivelaro, 170<br />
                    Centro — Iacanga, SP<br />
                    CEP 17180-001<br />
                    <span className="text-primary font-semibold">Em frente ao Lago</span>
                  </p>
                  <a
                    href="https://maps.google.com/?q=R.+Darzizo+Crivelaro,+170,+Iacanga+SP"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-sm font-bold text-primary hover:underline"
                  >
                    Abrir no Google Maps &rarr;
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/15 rounded-full flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">Rodizio Especial</h3>
                  <p className="text-muted-foreground">
                    Pizzas &amp; Esfihas a vontade — Sexta, Sabado e Domingo a partir das 19h!
                  </p>
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
                      <span className="text-muted-foreground">Segunda-feira</span>
                      <span className="text-destructive font-bold">Fechado</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span className="text-muted-foreground">Terca a Quinta</span>
                      <span className="text-foreground font-semibold">19:00 – 22:30</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span className="text-muted-foreground">Sexta-feira</span>
                      <span className="text-foreground font-semibold">19:00 – 23:30</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span className="text-muted-foreground">Sabado</span>
                      <span className="text-foreground font-semibold">19:00 – 23:30</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span className="text-muted-foreground">Domingo</span>
                      <span className="text-foreground font-semibold">19:00 – 22:30</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Diferenciais rapidos */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Espaco Kids" },
                { label: "Estacionamento" },
                { label: "Vista pro Lago" },
                { label: "Buffet a Vontade" },
              ].map(({ label }) => (
                <div
                  key={label}
                  className="p-4 bg-primary/10 border border-primary/20 rounded-xl text-center"
                >
                  <p className="text-sm font-bold text-primary">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
