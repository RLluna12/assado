"use client"

import { useState, useEffect } from "react"

export function SocialButtons() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    // Show on mount too
    setIsVisible(true)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed right-4 bottom-24 z-50 flex flex-col gap-3">
      {/* WhatsApp */}
      <a
        href="https://wa.me/5511999999999?text=Ola%2C%20gostaria%20de%20fazer%20um%20pedido!"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chamar no WhatsApp"
        className="group flex items-center gap-2 justify-end"
      >
        <span className="bg-background text-foreground text-xs font-semibold px-2 py-1 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-border">
          WhatsApp
        </span>
        <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="w-6 h-6"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12.004 2C6.479 2 2 6.479 2 12.004c0 1.765.463 3.423 1.268 4.87L2.05 21.95l5.227-1.194A9.966 9.966 0 0012.004 22C17.521 22 22 17.521 22 12.004 22 6.479 17.521 2 12.004 2zm0 18.18a8.174 8.174 0 01-4.17-1.146l-.299-.178-3.1.708.72-3.017-.195-.31A8.174 8.174 0 013.824 12c0-4.512 3.668-8.18 8.18-8.18s8.18 3.668 8.18 8.18-3.668 8.18-8.18 8.18z" />
          </svg>
        </div>
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/blasterchef"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Ver no Instagram"
        className="group flex items-center gap-2 justify-end"
      >
        <span className="bg-background text-foreground text-xs font-semibold px-2 py-1 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-border">
          Instagram
        </span>
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          style={{
            background: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="w-6 h-6"
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
          </svg>
        </div>
      </a>

      {/* Google Maps */}
      <a
        href="https://maps.google.com/?q=BlasTerchef+Pizzaria"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Ver no Google Maps"
        className="group flex items-center gap-2 justify-end"
      >
        <span className="bg-background text-foreground text-xs font-semibold px-2 py-1 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-border">
          Como Chegar
        </span>
        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform border border-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-7 h-7"
          >
            <path fill="#4285F4" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
            <path fill="#34A853" d="M12 2C8.13 2 5 5.13 5 9c0 .67.08 1.33.22 1.97L12 22s7-7.75 7-13c0-3.87-3.13-7-7-7z" opacity=".3"/>
            <circle fill="white" cx="12" cy="9" r="2.5" />
          </svg>
        </div>
      </a>
    </div>
  )
}
