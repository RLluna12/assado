"use client"

import { useState } from "react"
import { MenuCategory } from "./menu-category"
import { CoffeeCup, Sparks, Chocolate } from "iconoir-react"

const categories = [
  { id: "frango", label: "Frango Assado", icon: Sparks },
  { id: "bolos", label: "Bolos da Sara", icon: Chocolate },
  { id: "drinks", label: "Bebidas", icon: CoffeeCup },
]

const menuItems = {
  frango: [
    {
      name: "Frango Assado Inteiro",
      price: "R$ 39,90",
      description: "Frango inteiro assado no bafo, temperado com ervas e alho",
      spiceLevel: 0,
      image: "/frango.jpg",
    },
    {
      name: "Meio Frango Assado",
      price: "R$ 22,90",
      description: "Metade do frango assado, suculento e crocante por fora",
      spiceLevel: 0,
      image: "/frango.jpg",
    },
    {
      name: "Frango + 2 Acompanhamentos",
      price: "R$ 49,90",
      description: "Frango inteiro + arroz e farofa ou mandioca frita",
      spiceLevel: 0,
      image: "/frango.jpg",
    },
    {
      name: "Combo Familia",
      price: "R$ 79,90",
      description: "2 Frangos inteiros + arroz + farofa + mandioca frita + refrigerante 2L",
      spiceLevel: 0,
      image: "/frango.jpg",
    },
    {
      name: "Porcao de Coxinha de Asa",
      price: "R$ 18,90",
      description: "Porcao com 6 coxinhas de asa assadas temperadas",
      spiceLevel: 1,
      image: "/frango.jpg",
    },
    {
      name: "Porcao de Sobrecoxa",
      price: "R$ 24,90",
      description: "Porcao com 4 sobrecoxas assadas",
      spiceLevel: 0,
      image: "/frango.jpg",
    },
  ],
  bolos: [
    {
      name: "Bolo de Chocolate",
      price: "R$ 45,00",
      description: "Bolo de chocolate com cobertura de ganache e granulado",
      spiceLevel: 0,
      image: "/frango1.png",
    },
    {
      name: "Bolo de Cenoura com Brigadeiro",
      price: "R$ 42,00",
      description: "Bolo fofinho de cenoura com cobertura generosa de brigadeiro",
      spiceLevel: 0,
      image: "/frango1.png",
    },
    {
      name: "Bolo de Leite Ninho",
      price: "R$ 50,00",
      description: "Bolo de baunilha recheado e coberto com creme de leite ninho",
      spiceLevel: 0,
      image: "/frango1.png",
    },
    {
      name: "Bolo de Morango",
      price: "R$ 48,00",
      description: "Bolo branco com recheio e cobertura de morangos frescos e chantilly",
      spiceLevel: 0,
      image: "/frango1.png",
    },
    {
      name: "Bolo Red Velvet",
      price: "R$ 52,00",
      description: "Bolo red velvet com cream cheese e decoracao especial",
      spiceLevel: 0,
      image: "/frango1.png",
    },
    {
      name: "Bolo no Pote (unidade)",
      price: "R$ 12,00",
      description: "Bolo no pote individual — varios sabores disponíveis",
      spiceLevel: 0,
      image: "/frango1.png",
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
  const [activeCategory, setActiveCategory] = useState("frango")

  return (
    <section id="menu" className="py-20 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-primary tracking-tighter mb-4">
            NOSSO CARDAPIO
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto font-medium">
            Frango assado fresquinho e os melhores bolos da Sara
          </p>
        </div>

        {/* Category Tabs */}
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

        {/* Bolos da Sara Highlight */}
        <div id="bolos" className="mt-24">
          <h3 className="text-4xl md:text-5xl font-black text-primary mb-4 tracking-tighter text-center">
            BOLOS DA SARA
          </h3>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Feitos com amor, sob encomenda ou na hora
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { name: "Bolo para Festas", description: "Personalizado para qualquer ocasiao — aniversario, casamento, formaturas e mais", emoji: "🎂" },
              { name: "Bolo no Pote", description: "Bolo cremoso em pote individual, varios sabores. Perfeito para presentear", emoji: "🍮" },
              { name: "Encomendas", description: "Encomende com antecedencia e receba o bolo dos seus sonhos", emoji: "📦" },
            ].map((item) => (
              <div
                key={item.name}
                className="group relative cursor-pointer p-6 bg-secondary rounded-2xl border-2 border-border hover:border-primary transition-all"
              >
                <div className="text-center">
                  <div className="text-5xl mb-4">{item.emoji}</div>
                  <h4 className="text-xl font-black text-foreground mb-2 tracking-tight group-hover:text-primary transition-colors">{item.name}</h4>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Acompanhamentos */}
        <div className="mt-16">
          <h3 className="text-4xl md:text-5xl font-black text-primary mb-12 tracking-tighter text-center">
            ACOMPANHAMENTOS
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {[
              { name: "Arroz", price: "R$ 8,00" },
              { name: "Farofa", price: "R$ 8,00" },
              { name: "Mandioca Frita", price: "R$ 10,00" },
              { name: "Vinagrete", price: "R$ 5,00" },
              { name: "Molho de Alho", price: "R$ 3,00" },
            ].map((item) => (
              <div
                key={item.name}
                className="group cursor-pointer p-4 bg-secondary rounded-xl border border-border hover:border-primary transition-all"
              >
                <div className="text-center">
                  <p className="text-foreground font-bold text-sm mb-1 group-hover:text-primary transition-colors">
                    {item.name}
                  </p>
                  <p className="text-primary font-black text-lg">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
