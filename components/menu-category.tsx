"use client"

import { FireFlame, CartPlus } from "iconoir-react"
import Image from "next/image"
import { useCart } from "@/contexts/cart-context"

interface MenuItem {
  name: string
  price: string
  description: string
  spiceLevel?: number
  image?: string
}

interface MenuCategoryProps {
  items: MenuItem[]
}

function parsePriceValue(price: string): number {
  return parseFloat(price.replace("R$", "").replace(".", "").replace(",", ".").trim())
}

export function MenuCategory({ items }: MenuCategoryProps) {
  const { addItem } = useCart()

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {items.map((item) => (
        <div
          key={item.name}
          className="group relative bg-secondary rounded-2xl border border-border hover:border-primary transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col"
        >
          {/* Imagem */}
          {item.image && (
            <div className="relative w-full h-44 overflow-hidden shrink-0">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <span className="absolute bottom-3 right-3 text-lg font-black text-white bg-primary px-3 py-1 rounded-xl shadow-lg">
                {item.price}
              </span>
            </div>
          )}

          {/* Conteudo */}
          <div className="p-5 flex flex-col flex-1 gap-2">
            <h3 className="text-lg font-black text-foreground tracking-tight group-hover:text-primary transition-colors">
              {item.name}
            </h3>

            <p className="text-muted-foreground text-sm leading-relaxed flex-1">
              {item.description}
            </p>

            {item.spiceLevel !== undefined && item.spiceLevel > 0 && (
              <div className="flex items-center gap-1">
                {Array.from({ length: 3 }).map((_, i) => (
                  <FireFlame
                    key={i}
                    className={`w-4 h-4 ${i < item.spiceLevel! ? "text-primary fill-primary" : "text-border"}`}
                  />
                ))}
              </div>
            )}

            {/* Botao adicionar ao carrinho */}
            <button
              onClick={() =>
                addItem({
                  name: item.name,
                  price: item.price,
                  priceValue: parsePriceValue(item.price),
                  image: item.image,
                })
              }
              className="mt-2 w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 active:scale-95 text-white font-bold text-sm py-2.5 px-4 rounded-xl transition-all duration-200 shadow-md shadow-primary/20"
            >
              <CartPlus className="w-4 h-4" />
              Adicionar ao Carrinho
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
