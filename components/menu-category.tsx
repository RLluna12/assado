import { FireFlame } from "iconoir-react"

interface MenuItem {
  name: string
  price: string
  description: string
  spiceLevel?: number
}

interface MenuCategoryProps {
  items: MenuItem[]
}

export function MenuCategory({ items }: MenuCategoryProps) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <div
          key={item.name}
          className="group relative cursor-pointer p-6 bg-secondary rounded-2xl border border-border hover:border-primary transition-all duration-300 hover:-translate-y-1"
        >
          {/* Price Badge */}
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-black text-foreground tracking-tight group-hover:text-primary transition-colors flex-1 pr-4">
              {item.name}
            </h3>
            <span className="text-xl font-black text-primary whitespace-nowrap">{item.price}</span>
          </div>

          <p className="text-muted-foreground text-sm leading-relaxed">
            {item.description}
          </p>

          {/* Spice Level Indicator */}
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
      ))}
    </div>
  )
}
