import { FireFlame } from "iconoir-react"
import Image from "next/image"

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

export function MenuCategory({ items }: MenuCategoryProps) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {items.map((item) => (
        <div
          key={item.name}
          className="group relative cursor-pointer bg-secondary rounded-2xl border border-border hover:border-primary transition-all duration-300 hover:-translate-y-1 overflow-hidden"
        >
          {/* Imagem do item */}
          {item.image && (
            <div className="relative w-full h-44 overflow-hidden">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Overlay gradiente para ler o preco */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              {/* Preco sobre a imagem */}
              <span className="absolute bottom-3 right-3 text-lg font-black text-white bg-primary px-3 py-1 rounded-xl shadow-lg">
                {item.price}
              </span>
            </div>
          )}

          {/* Conteudo textual */}
          <div className="p-5">
            <h3 className="text-lg font-black text-foreground tracking-tight group-hover:text-primary transition-colors mb-2">
              {item.name}
            </h3>

            <p className="text-muted-foreground text-sm leading-relaxed">
              {item.description}
            </p>

            {/* Nivel de picancia */}
            {item.spiceLevel !== undefined && item.spiceLevel > 0 && (
              <div className="flex items-center gap-1 mt-3">
                {Array.from({ length: 3 }).map((_, i) => (
                  <FireFlame
                    key={i}
                    className={`w-4 h-4 ${i < item.spiceLevel! ? "text-primary fill-primary" : "text-border"}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
