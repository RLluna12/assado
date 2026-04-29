"use client"

import { useState } from "react"
import { MenuCategory } from "./menu-category"
import { PizzaSlice, CoffeeCup, Sparks, HexagonDice } from "iconoir-react"

const categories = [
  { id: "pizzas", label: "Pizzas", icon: PizzaSlice },
  { id: "esfihas", label: "Esfihas", icon: HexagonDice },
  { id: "especiais", label: "Especiais", icon: Sparks },
  { id: "drinks", label: "Bebidas", icon: CoffeeCup },
]

const menuItems = {
  pizzas: [
    {
      name: "Margherita",
      price: "R$ 45,00",
      description: "Molho de tomate, mussarela, tomate fresco, manjericao e azeite",
      spiceLevel: 0,
      image: "/graphics/pizza-margherita.jpg",
    },
    {
      name: "Calabresa",
      price: "R$ 48,00",
      description: "Molho de tomate, mussarela, calabresa fatiada e cebola",
      spiceLevel: 1,
      image: "/graphics/pizza-calabresa.jpg",
    },
    {
      name: "Frango com Catupiry",
      price: "R$ 52,00",
      description: "Molho de tomate, mussarela, frango desfiado e catupiry",
      spiceLevel: 0,
      image: "/graphics/pizza-frango-catupiry.jpg",
    },
    {
      name: "Portuguesa",
      price: "R$ 55,00",
      description: "Molho de tomate, mussarela, presunto, ovos, cebola, azeitona e oregano",
      spiceLevel: 0,
      image: "/graphics/pizza-portuguesa.jpg",
    },
    {
      name: "Quatro Queijos",
      price: "R$ 58,00",
      description: "Molho de tomate, mussarela, provolone, gorgonzola e parmesao",
      spiceLevel: 0,
      image: "/graphics/pizza-quatro-queijos.jpg",
    },
    {
      name: "Pepperoni",
      price: "R$ 55,00",
      description: "Molho de tomate, mussarela e pepperoni importado",
      spiceLevel: 2,
      image: "/graphics/pizza-pepperoni.jpg",
    },
    {
      name: "Bacon Crocante",
      price: "R$ 58,00",
      description: "Molho de tomate, mussarela, bacon crocante e cheddar",
      spiceLevel: 1,
      image: "/graphics/pizza-bacon.jpg",
    },
    {
      name: "Napolitana",
      price: "R$ 50,00",
      description: "Molho de tomate, mussarela, tomate, parmesao e manjericao",
      spiceLevel: 0,
      image: "/graphics/pizza-napolitana.jpg",
    },
  ],
  esfihas: [
    {
      name: "Esfiha de Carne",
      price: "R$ 6,50",
      description: "Carne moida temperada com especiarias arabes, cebola e tomate",
      spiceLevel: 1,
      image: "/graphics/esfiha-carne.jpg",
    },
    {
      name: "Esfiha de Frango",
      price: "R$ 6,50",
      description: "Frango desfiado temperado com temperos especiais",
      spiceLevel: 0,
      image: "/graphics/esfiha-frango.jpg",
    },
    {
      name: "Esfiha de Queijo",
      price: "R$ 6,00",
      description: "Recheio cremoso de queijos especiais",
      spiceLevel: 0,
      image: "/graphics/esfiha-queijo.jpg",
    },
    {
      name: "Esfiha de Calabresa",
      price: "R$ 7,00",
      description: "Calabresa fatiada com cebola e temperos",
      spiceLevel: 1,
      image: "/graphics/esfiha-carne.jpg",
    },
    {
      name: "Esfiha de Catupiry",
      price: "R$ 6,50",
      description: "Catupiry cremoso com toque de oregano",
      spiceLevel: 0,
      image: "/graphics/esfiha-queijo.jpg",
    },
    {
      name: "Esfiha 4 Queijos",
      price: "R$ 7,50",
      description: "Mussarela, catupiry, provolone e parmesao",
      spiceLevel: 0,
      image: "/graphics/esfiha-queijo.jpg",
    },
    {
      name: "Esfiha de Chocolate",
      price: "R$ 7,00",
      description: "Chocolate ao leite derretido - perfeita para sobremesa",
      spiceLevel: 0,
      image: "/graphics/esfiha-frango.jpg",
    },
    {
      name: "Esfiha de Brigadeiro",
      price: "R$ 7,50",
      description: "Brigadeiro cremoso com granulado",
      spiceLevel: 0,
      image: "/graphics/esfiha-frango.jpg",
    },
  ],
  especiais: [
    {
      name: "Pizza BlasTerchef",
      price: "R$ 68,00",
      description: "Nossa especialidade: mussarela, pepperoni, bacon, cheddar, cebola caramelizada e molho especial da casa",
      spiceLevel: 2,
      image: "/graphics/pizza-blasterchef.jpg",
    },
    {
      name: "Pizza Suprema",
      price: "R$ 65,00",
      description: "Mussarela, calabresa, presunto, champignon, palmito, azeitona e cebola",
      spiceLevel: 1,
      image: "/graphics/pizza-portuguesa.jpg",
    },
    {
      name: "Calzone Recheado",
      price: "R$ 45,00",
      description: "Massa dobrada recheada com presunto, mussarela e tomate",
      spiceLevel: 0,
      image: "/graphics/calzone.jpg",
    },
    {
      name: "Pizza Doce Romeu e Julieta",
      price: "R$ 48,00",
      description: "Mussarela, goiabada cascao e queijo minas",
      spiceLevel: 0,
      image: "/graphics/pizza-margherita.jpg",
    },
  ],
  drinks: [
    { name: "Coca Cola 2L", price: "R$ 12,00", description: "Refrigerante 2 litros", image: "/graphics/bebidas.jpg" },
    { name: "Guarana Antarctica 2L", price: "R$ 10,00", description: "Refrigerante 2 litros", image: "/graphics/bebidas.jpg" },
    { name: "Suco Natural", price: "R$ 8,00", description: "Laranja, Limao ou Maracuja", image: "/graphics/bebidas.jpg" },
    { name: "Agua Mineral", price: "R$ 4,00", description: "Com ou sem gas - 500ml", image: "/graphics/bebidas.jpg" },
    { name: "Cerveja Heineken", price: "R$ 12,00", description: "Long neck 330ml", image: "/graphics/bebidas.jpg" },
    { name: "Cerveja Brahma", price: "R$ 8,00", description: "Lata 350ml", image: "/graphics/bebidas.jpg" },
  ],
}

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("pizzas")

  return (
    <section id="menu" className="py-20 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Restaurant Style */}
        <div className="text-center mb-12">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-primary tracking-tighter mb-4">
            NOSSO CARDAPIO
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto font-medium">
            Pizzas artesanais, esfihas fresquinhas e sabores que conquistam
          </p>
        </div>

        {/* Rodizio Banner - Eye-Catching */}
        <div id="rodizio" className="mb-16 relative overflow-hidden rounded-3xl border-4 border-primary">
          {/* Foto do restaurante */}
          <div className="relative h-64 md:h-80 w-full overflow-hidden">
            <img
              src="/graphics/restaurante.png"
              alt="BlasTerchef - Ambiente do restaurante"
              className="w-full h-full object-cover object-center"
            />
            {/* Overlay escuro para legibilidade */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />

            {/* Texto sobre a imagem */}
            <div className="absolute inset-0 flex flex-col items-center justify-end p-8 text-center">
              <p className="text-4xl md:text-6xl font-black text-primary tracking-tighter drop-shadow-lg">
                RODIZIO
              </p>
              <p className="text-lg md:text-2xl font-bold text-white mt-1">
                Pizzas &amp; Esfihas a vontade
              </p>
              <div className="mt-3 flex flex-col sm:flex-row items-center gap-3">
                <span className="bg-primary text-white font-black text-xl md:text-2xl px-6 py-2 rounded-full shadow-lg">
                  R$ 49,90 por pessoa
                </span>
                <span className="text-white/80 text-sm md:text-base font-medium">
                  Sex, Sab e Dom — 18h as 23h
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Category Tabs - Bold Restaurant Style */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`group flex items-center gap-3 px-8 py-4 rounded-2xl font-black text-lg tracking-tight transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground shadow-2xl shadow-primary/50 scale-105"
                    : "bg-card border-2 border-border text-foreground hover:border-primary/50 hover:scale-105"
                }`}
              >
                <Icon className="w-6 h-6" />
                <span>{category.label}</span>
              </button>
            )
          })}
        </div>

        {/* Menu Items */}
        <MenuCategory items={menuItems[activeCategory as keyof typeof menuItems]} />

        {/* Combo Section */}
        <div className="mt-24 space-y-16">
          {/* Combos Section */}
          <div>
            <h3 className="text-4xl md:text-5xl font-black text-primary mb-12 tracking-tighter text-center">
              COMBOS PROMOCIONAIS
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                { name: "Combo Familia", description: "1 Pizza Grande + 10 Esfihas + 2L Refrigerante", price: "R$ 89,90" },
                { name: "Combo Casal", description: "1 Pizza Media + 6 Esfihas + 1L Refrigerante", price: "R$ 59,90" },
                { name: "Combo Individual", description: "1 Pizza Broto + 3 Esfihas + Lata", price: "R$ 35,90" },
              ].map((item) => (
                <div
                  key={item.name}
                  className="group relative cursor-pointer p-6 bg-secondary rounded-2xl border-2 border-border hover:border-primary transition-all"
                >
                  <div className="text-center">
                    <div className="text-5xl mb-4">🍕</div>
                    <h4 className="text-xl font-black text-foreground mb-2 tracking-tight group-hover:text-primary transition-colors">{item.name}</h4>
                    <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
                    <p className="text-2xl font-black text-primary">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Molhos Section */}
        <div className="mt-16">
          <h3 className="text-4xl md:text-5xl font-black text-primary mb-12 tracking-tighter text-center">
            MOLHOS EXTRAS
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {[
              { name: "Ketchup", price: "Gratis" },
              { name: "Mostarda", price: "Gratis" },
              { name: "Azeite Temperado", price: "R$ 3,00" },
              { name: "Molho de Alho", price: "R$ 3,00" },
              { name: "Pimenta Calabresa", price: "R$ 3,00" },
            ].map((dip) => (
              <div
                key={dip.name}
                className="group cursor-pointer p-4 bg-secondary rounded-xl border border-border hover:border-primary transition-all"
              >
                <div className="text-center">
                  <p className="text-foreground font-bold text-sm mb-1 group-hover:text-primary transition-colors">
                    {dip.name}
                  </p>
                  <p className="text-primary font-black text-lg">{dip.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
