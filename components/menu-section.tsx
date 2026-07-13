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
      image: "/sofrango.jpg",
    },
    {
      name: "Frango + 2 Acompanhamentos",
      price: "R$ 49,99",
      description: "Frango inteiro + arroz e farofa ou mandioca frita",
      spiceLevel: 0,
      image: "/frango2.jpg",
    },
    {
      name: "Coxa",
      price: "R$ 18,90",
      description: "Porcao com 6 coxinhas de asa assadas temperadas",
      spiceLevel: 1,
      image: "/coxa.jpg",
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
      image: "/espeto_carne.png",
    },
    {
      name: "Espeto de Linguiça",
      price: "R$ 10,00",
      description: "Linguiça toscana suculenta assada na brasa",
      spiceLevel: 1,
      image: "/linguica.jpg",
      imagePosition: "object-bottom",
    },
    {
      name: "Espeto de Kafta",
      price: "R$ 12,00",
      description: "Kafta temperada com especiarias árabes grelhada no espeto",
      spiceLevel: 1,
      image: "espeto_kafta.png",
    },
    {
      name: "Espeto de Frango",
      price: "R$ 10,00",
      description: "Frango temperado e assado lentamente na brasa",
      spiceLevel: 0,
      image: "espeto_frango.png",
    },
    {
      name: "Pão de Alho",
      price: "R$ 7,00",
      description: "Baguete crocante com manteiga de alho e ervas",
      spiceLevel: 0,
      image: "/pao de alho.jpg",
    },
  ],
  drinks: [
     // Refrigerantes
    { name: "Coca-Cola", price: "R$ 6,00", description: "Lata 350ml", image: "https://savegnagoio.vtexassets.com/arquivos/ids/435101-800-auto?v=638424126588370000&width=800&height=auto&aspect=true" },
    { name: "Pepsi", price: "R$ 7,00", description: "Lata 350ml", image: "https://savegnagoio.vtexassets.com/arquivos/ids/464756-800-auto?v=638732629983900000&width=800&height=auto&aspect=true" },
    { name: "Fanta", price: "R$ 6,00", description: "Lata 350ml", image: "https://savegnagoio.vtexassets.com/arquivos/ids/348216-800-auto?v=638080337081170000&width=800&height=auto&aspect=true" },
    { name: "Tubaína", price: "R$ 5,00", description: "Lata 350ml", image: "https://savegnagoio.vtexassets.com/arquivos/ids/353153-800-auto?v=638080418416900000&width=800&height=auto&aspect=true" },
    { name: "Soda Limonada", price: "R$ 6,00", description: "Lata 350ml", image: "https://savegnagoio.vtexassets.com/arquivos/ids/363166-800-auto?v=638080725350970000&width=800&height=auto&aspect=true" },
    // Águas
    { name: "Água Sem Gás", price: "R$ 2,50", description: "Crystal 500ml", image: "https://savegnagoio.vtexassets.com/arquivos/ids/371356-800-auto?v=638082769300370000&width=800&height=auto&aspect=true" },
    { name: "Água Com Gás", price: "R$ 3,50", description: "Crystal 500ml", image: "https://savegnagoio.vtexassets.com/arquivos/ids/448433-800-auto?v=638525888996100000&width=800&height=auto&aspect=true" },
       // Energéticos
    { name: "Monster Energy", price: "R$ 12,00", description: "Lata 473ml", image: "https://savegnagoio.vtexassets.com/arquivos/ids/464580-800-auto?v=638727187105200000&width=800&height=auto&aspect=true" },
    { name: "Red Bull Tradicional", price: "R$ 12,00", description: "Lata 250ml", image: "https://savegnagoio.vtexassets.com/arquivos/ids/499626-800-auto?v=639147878684930000&width=800&height=auto&aspect=true" },
    { name: "Red Bull Zero", price: "R$ 12,00", description: "Lata 250ml", image: "https://savegnagoio.vtexassets.com/arquivos/ids/499627-800-auto?v=639147878687270000&width=800&height=auto&aspect=true" },
    // Proteínas
    { name: "YoPRO Chocolate", price: "R$ 10,00", description: "Bebida láctea 250ml", image: "https://savegnagoio.vtexassets.com/arquivos/ids/465338-800-auto?v=638738647621200000&width=800&height=auto&aspect=true" },
    { name: "YoPRO Doce de Leite", price: "R$ 10,00", description: "Bebida láctea 250ml", image: "https://savegnagoio.vtexassets.com/arquivos/ids/464913-800-auto?v=638736037638270000&width=800&height=auto&aspect=true" },
   
    // Cervejas
    { name: "Império Puro Malte", price: "R$ 5,00", description: "Lata 269ml", image: "https://covabra.vtexassets.com/arquivos/ids/548931-800-auto?v=638925414393530000&width=800&height=auto&aspect=true" },
    { name: "Petra Puro Malte", price: "R$ 5,00", description: "Lata 350ml", image: "https://savegnagoio.vtexassets.com/arquivos/ids/366329-800-auto?v=638080898743470000&width=800&height=auto&aspect=true" },
    { name: "Original", price: "R$ 5,00", description: "Lata 350ml", image: "https://savegnagoio.vtexassets.com/arquivos/ids/451131-800-auto?v=639041724363700000&width=800&height=auto&aspect=true" },
    { name: "Brahma Duplo Malte", price: "R$ 6,00", description: "Lata 350ml", image: "https://savegnagoio.vtexassets.com/arquivos/ids/448774-800-auto?v=639136935519500000&width=800&height=auto&aspect=true" },
    { name: "Spaten", price: "R$ 8,00", description: "Long Neck 330ml", image: "https://savegnagoio.vtexassets.com/arquivos/ids/450675-800-auto?v=638889019148470000&width=800&height=auto&aspect=true" },
    { name: "Budweiser", price: "R$ 9,00", description: "Long Neck 330ml", image: "https://savegnagoio.vtexassets.com/arquivos/ids/448755-800-auto?v=638525949249530000&width=800&height=auto&aspect=true" },
    { name: "Heineken", price: "R$ 10,00", description: "Long Neck 330ml", image: "https://savegnagoio.vtexassets.com/arquivos/ids/496166-800-auto?v=639114377317630000&width=800&height=auto&aspect=true" },


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

        {/* Video Banner */}
        <div id="bolos" className="mt-24 relative overflow-hidden rounded-3xl h-[110vw] sm:h-auto sm:[aspect-ratio:16/9]">
          <video
            src="/videofrente.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" />
          {/* Texto */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 gap-4">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tighter drop-shadow-lg uppercase leading-tight">
              Frango Assado<br />
              <span className="text-primary">na Brasa</span>
            </h2>
            <p className="text-white/80 text-base sm:text-lg md:text-xl font-medium max-w-md">
              Sabor de verdade, feito na hora
            </p>
            <a
              href="https://wa.me/5511954364018"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-2 bg-primary hover:bg-primary/90 active:scale-95 text-white font-black text-base sm:text-lg px-7 py-3.5 rounded-2xl shadow-xl shadow-primary/30 transition-all duration-200"
            >
              Peça Agora
            </a>
          </div>
        </div>

     
      </div>
    </section>
  )
}
