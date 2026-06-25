"use client"

import { useState, useEffect } from "react"
import { MenuCategory } from "./menu-category"
import { CoffeeCup, Sparks, Chocolate, Bbq } from "iconoir-react"

const categories = [
  { id: "frango", label: "Frango Assado", icon: Sparks },
  { id: "espetos", label: "Espetos", icon: Bbq },
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
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80",
    },
    {
      name: "Bolo de Cenoura com Brigadeiro",
      price: "R$ 42,00",
      description: "Bolo fofinho de cenoura com cobertura generosa de brigadeiro",
      spiceLevel: 0,
      image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=600&q=80",
    },
    {
      name: "Bolo de Leite Ninho",
      price: "R$ 50,00",
      description: "Bolo de baunilha recheado e coberto com creme de leite ninho",
      spiceLevel: 0,
      image: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=600&q=80",
    },
    {
      name: "Bolo de Morango",
      price: "R$ 48,00",
      description: "Bolo branco com recheio e cobertura de morangos frescos e chantilly",
      spiceLevel: 0,
      image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&q=80",
    },
    {
      name: "Bolo Red Velvet",
      price: "R$ 52,00",
      description: "Bolo red velvet com cream cheese e decoracao especial",
      spiceLevel: 0,
      image: "https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?w=600&q=80",
    },
    {
      name: "Bolo no Pote (unidade)",
      price: "R$ 12,00",
      description: "Bolo no pote individual — varios sabores disponíveis",
      spiceLevel: 0,
      image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=600&q=80",
    },
  ],
  espetos: [
    {
      name: "Espeto de Carne Bovina",
      price: "R$ 12,00",
      description: "Espeto de carne bovina temperada na brasa",
      spiceLevel: 0,
      image: "https://tudoemcarnes.com.br/assets/img/ProdutosTC/Espetos/bovino/CARNE.avif",
    },
    {
      name: "Espeto de Linguiça",
      price: "R$ 10,00",
      description: "Linguiça toscana suculenta assada na brasa",
      spiceLevel: 1,
      image: "https://tudoemcarnes.com.br/assets/img/ProdutosTC/Espetos/suino/LINGUICA TOSCANA.avif",
    },
    {
      name: "Espeto de Kafta",
      price: "R$ 12,00",
      description: "Kafta temperada com especiarias árabes grelhada no espeto",
      spiceLevel: 1,
      image: "https://tudoemcarnes.com.br/assets/img/ProdutosTC/Espetos/bovino/KAFTA.avif",
    },
    {
      name: "Espeto de Frango",
      price: "R$ 10,00",
      description: "Frango temperado e assado lentamente na brasa",
      spiceLevel: 0,
      image: "https://tudoemcarnes.com.br/assets/img/ProdutosTC/Espetos/aves/FRANGO.avif",
    },
    {
      name: "Pão de Alho",
      price: "R$ 7,00",
      description: "Baguete crocante com manteiga de alho e ervas",
      spiceLevel: 0,
      image: "https://tudoemcarnes.com.br/assets/img/ProdutosTC/Espetos/paes/BAGUETETRADICIONAL.avif",
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

  useEffect(() => {
    if (window.location.hash === "#bolos") {
      setActiveCategory("bolos")
    }
  }, [])

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

        {/* Ancora para navegacao via header */}
        <div id="bolos" className="-mt-20 pt-20 pointer-events-none absolute" />

        {/* Category Tabs */}
        <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:justify-center sm:gap-3 mb-10 sm:mb-16">
          {categories.map((category) => {
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-3 px-2 sm:px-8 py-3 sm:py-4 rounded-2xl font-black text-xs sm:text-lg tracking-tight transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground shadow-2xl shadow-primary/50 scale-105"
                    : "bg-card border-2 border-border text-foreground hover:border-primary/50 hover:scale-105"
                }`}
              >
                <span className="leading-tight text-center">{category.label}</span>
              </button>
            )
          })}
        </div>

        {/* Menu Items */}
        <MenuCategory items={menuItems[activeCategory as keyof typeof menuItems]} />

        {/* Copa do Mundo Banner */}
        <div id="bolos" className="mt-24 relative overflow-hidden rounded-3xl border-2 border-yellow-500/40">
          {/* Background hexa.png */}
          <div className="absolute inset-0 bg-green-950" />
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
            style={{ backgroundImage: "url('/hexa.png')" }}
          />
          {/* Overlay escuro para legibilidade */}
          <div className="absolute inset-0 bg-gradient-to-b from-green-950/60 via-transparent to-green-950/60" />
          {/* Brilho dourado topo */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400" />

          <div className="relative z-10 px-6 py-14 md:py-20 flex flex-col items-center text-center gap-6">
            {/* Emojis topo */}
            <div className="flex items-center gap-3 text-4xl md:text-5xl">
              <span>🏆</span>
              <span>⚽</span>
              <span>🇧🇷</span>
              <span>⚽</span>
              <span>🏆</span>
            </div>

            {/* Titulo */}
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-yellow-400 drop-shadow-[0_2px_12px_rgba(234,179,8,0.6)] uppercase leading-tight">
              Venha Assistir o Jogo<br />
              <span className="text-white">da Copa com a Gente!</span>
            </h3>

            {/* Subtitulo */}
            <p className="text-green-200 text-lg md:text-xl max-w-2xl leading-relaxed font-medium">
              Frango assado fresquinho, espetinho na brasa e a melhor torcida da cidade.<br />
              <span className="text-yellow-300 font-bold">Aqui é Brasil! 🍗🔥</span>
            </p>

            {/* Desafio */}
            <div className="mt-4 w-full max-w-2xl bg-black/40 backdrop-blur-sm border-2 border-yellow-400/50 rounded-2xl p-6 md:p-8">
              <div className="flex items-center justify-center gap-2 mb-3">
                <span className="text-3xl">🎁</span>
                <h4 className="text-2xl font-black text-yellow-400 uppercase tracking-tight">Desafio da Copa!</h4>
                <span className="text-3xl">🎁</span>
              </div>
              <p className="text-white text-base md:text-lg font-semibold mb-1">
                O <span className="text-yellow-300">primeiro</span> que acertar o placar do próximo jogo do Brasil
              </p>
              <p className="text-green-300 text-sm md:text-base">
                La no estabelecimento antes do apito inicial!
              </p>
              <div className="mt-5 inline-flex items-center gap-2 px-5 py-2 bg-yellow-500/20 border border-yellow-400/60 rounded-full">
                <span className="text-2xl">🏅</span>
                <span className="text-yellow-300 font-black text-sm md:text-base uppercase tracking-wide">Ganha um presente super exclusivo!</span>
              </div>
              <div className="mt-5">
                <a
                  href="https://wa.me/5511954364018?text=Meu%20palpite%20para%20o%20jogo%20do%20Brasil%20%C3%A9%3A%20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-3.5 bg-green-500 hover:bg-green-400 text-white font-black text-lg rounded-2xl transition-all hover:scale-105 shadow-xl shadow-green-900/50"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.554 4.118 1.528 5.85L.057 23.27a.75.75 0 0 0 .918.919l5.444-1.472A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.846 0-3.587-.49-5.092-1.348l-.364-.214-3.232.875.876-3.208-.228-.374A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                  </svg>
                  Mandar Meu Palpite!
                </a>
              </div>
            </div>
          </div>

          {/* Brilho dourado base */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400" />
        </div>

     
      </div>
    </section>
  )
}
