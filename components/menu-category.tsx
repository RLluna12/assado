"use client"

import { FireFlame, CartPlus, Xmark, Expand } from "iconoir-react"
import Image from "next/image"
import { useState, useEffect } from "react"
import { useCart } from "@/contexts/cart-context"

interface MenuItem {
  name: string
  price: string
  description: string
  spiceLevel?: number
  image?: string
  imagePosition?: string
}

interface MenuCategoryProps {
  items: MenuItem[]
}

function parsePriceValue(price: string): number {
  return parseFloat(price.replace("R$", "").replace(".", "").replace(",", ".").trim())
}

function ImageLightbox({ item, onClose }: { item: MenuItem; onClose: () => void }) {
  const { addItem } = useCart()

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose() }
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative bg-card rounded-3xl overflow-hidden shadow-2xl max-w-lg w-full max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botao fechar */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 bg-black/60 hover:bg-black/80 text-white rounded-full p-1.5 transition-colors"
        >
          <Xmark className="w-5 h-5" />
        </button>

        {/* Imagem grande */}
        {item.image && (
          <div className="relative w-full" style={{ paddingBottom: "75%" }}>
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-contain bg-black"
              sizes="(max-width: 768px) 100vw, 512px"
            />
          </div>
        )}

        {/* Info */}
        <div className="p-6 flex flex-col gap-3">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-2xl font-black text-foreground tracking-tight">{item.name}</h3>
            <span className="text-xl font-black text-primary shrink-0">{item.price}</span>
          </div>
          <p className="text-muted-foreground leading-relaxed">{item.description}</p>

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

          <button
            onClick={() => {
              addItem({
                name: item.name,
                price: item.price,
                priceValue: parsePriceValue(item.price),
                image: item.image,
              })
              onClose()
            }}
            className="mt-1 w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 active:scale-95 text-white font-bold py-3 px-4 rounded-xl transition-all duration-200 shadow-md shadow-primary/20"
          >
            <CartPlus className="w-5 h-5" />
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </div>
  )
}

export function MenuCategory({ items }: MenuCategoryProps) {
  const { addItem } = useCart()
  const [lightboxItem, setLightboxItem] = useState<MenuItem | null>(null)

  return (
    <>
      {lightboxItem && (
        <ImageLightbox item={lightboxItem} onClose={() => setLightboxItem(null)} />
      )}

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {items.map((item) => (
          <div
            key={item.name}
            className="group relative bg-secondary rounded-2xl border border-border hover:border-primary transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col"
          >
            {/* Imagem clicavel */}
            {item.image && (
              <div
                className="relative w-full h-44 overflow-hidden shrink-0 cursor-zoom-in"
                onClick={() => setLightboxItem(item)}
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className={`group-hover:scale-105 transition-transform duration-500 ${item.image.startsWith("http") ? "object-contain p-3" : `object-cover ${item.imagePosition ?? "object-center"}`}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <span className="absolute bottom-3 right-3 text-lg font-black text-white bg-primary px-3 py-1 rounded-xl shadow-lg">
                  {item.price}
                </span>
                {/* Icone expandir */}
                <div className="absolute top-2 left-2 bg-black/50 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Expand className="w-4 h-4 text-white" />
                </div>
              </div>
            )}

            {/* Conteudo */}
            <div className="p-5 flex flex-col flex-1 gap-2">
              <h3
                className="text-lg font-black text-foreground tracking-tight group-hover:text-primary transition-colors cursor-pointer"
                onClick={() => setLightboxItem(item)}
              >
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
    </>
  )
}
