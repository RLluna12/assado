import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { MenuSection } from "@/components/menu-section"
import { LocationSection } from "@/components/location-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { StickyCTA } from "@/components/sticky-cta"
import { SocialButtons } from "@/components/social-buttons"

export default function Home() {
  // Structured Data for SEO (JSON-LD)
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Restaurant",
        "@id": "https://blasterchef.com.br/#restaurant",
        "name": "Ponto do Assado",
        "description": "Frango Assado fresquinho e os melhores Bolos da Sara",
        "url": "https://pontodoassado.com.br",
        "telephone": "+55-11-95436-4018",
        "servesCuisine": ["Frango Assado", "Espetinho", "Bolos"],
        "priceRange": "$$",
        "image": "logo.jpeg",
        "logo": "logo.jpeg",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Av. Barão de Mauá",
          "addressLocality": "Mauá",
          "addressRegion": "SP",
          "addressCountry": "BR"
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
            "opens": "18:00",
            "closes": "23:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Friday", "Saturday", "Sunday"],
            "opens": "18:00",
            "closes": "00:00"
          }
        ],
        "paymentAccepted": "Dinheiro, Cartao de Credito, Cartao de Debito, Pix",
        "currenciesAccepted": "BRL"
      },
      {
        "@type": "FoodEstablishment",
        "@id": "https://blasterchef.com.br/#foodestablishment",
        "name": "Ponto do Assado",
        "hasMenu": {
          "@type": "Menu",
          "hasMenuSection": [
            {
              "@type": "MenuSection",
              "name": "Pizzas",
              "description": "Pizzas artesanais com ingredientes selecionados",
              "hasMenuItem": [
                {
                  "@type": "MenuItem",
                  "name": "Margherita",
                  "description": "Molho de tomate, mussarela, tomate fresco, manjericao e azeite",
                  "offers": {
                    "@type": "Offer",
                    "price": "45.00",
                    "priceCurrency": "BRL"
                  }
                },
                {
                  "@type": "MenuItem",
                  "name": "Pizza Ponto do Assado",
                  "description": "Nossa especialidade: mussarela, pepperoni, bacon, cheddar, cebola caramelizada e molho especial",
                  "offers": {
                    "@type": "Offer",
                    "price": "68.00",
                    "priceCurrency": "BRL"
                  }
                }
              ]
            },
            {
              "@type": "MenuSection",
              "name": "Esfihas",
              "description": "Esfihas frescas com recheios variados",
              "hasMenuItem": [
                {
                  "@type": "MenuItem",
                  "name": "Esfiha de Carne",
                  "description": "Carne moida temperada com especiarias arabes",
                  "offers": {
                    "@type": "Offer",
                    "price": "6.50",
                    "priceCurrency": "BRL"
                  }
                }
              ]
            }
          ]
        }
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://blasterchef.com.br/#localbusiness",
        "name": "Ponto do Assado",
        "description": "Pizzaria e Esfiharia com rodizio aos finais de semana",
        "slogan": "Sabor que Conquista"
      },
      {
        "@type": "WebSite",
        "@id": "https://blasterchef.com.br/#website",
        "url": "https://blasterchef.com.br",
        "name": "Ponto do Assado",
        "description": "Pizzaria e Esfiharia - Pizzas, Esfihas e Rodizio",
        "publisher": {
          "@id": "https://blasterchef.com.br/#restaurant"
        },
        "inLanguage": "pt-BR"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="min-h-screen bg-background">
        <Header />
        <Hero />
        <MenuSection />
        <LocationSection />
        <ContactSection />
        <Footer />
        <StickyCTA />
        <SocialButtons />
      </main>
    </>
  )
}
