"use client"

import Image from "next/image"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

const dishes = [
  {
    id: 1,
    name: "Picada Frita",
    description: "Empanadas, rabas, croquetas, spring rolls y más. Para compartir.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed%20%282%29-mbjAewcQNdeuA8Qm07xxrUUIY61UpK.jpg",
    featured: true,
  },
  {
    id: 2,
    name: "Pescado a la Parrilla",
    description: "Filete de pescado con hierbas frescas, limón y papas doradas.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed%20%284%29-ICoGE5lwGr7oFuBxu1sKtymiBFBc2I.jpg",
    featured: false,
  },
  {
    id: 3,
    name: "Tostadas con Palta",
    description: "Pan artesanal, palta cremosa y huevos revueltos. Perfecto para el brunch.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed-KfPmnXQxnnbKPye5mgo1IijvvJWoVH.jpg",
    featured: false,
  },
]

export function DishesSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section
      id="platos"
      ref={ref}
      className="py-24 lg:py-32 bg-card"
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div
          className={cn(
            "text-center max-w-3xl mx-auto mb-16 lg:mb-24 transition-all duration-1000",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <span className="text-xs uppercase tracking-widest text-primary mb-4 block">
            Nuestros platos
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground text-editorial leading-tight mb-6">
            Sabores que <span className="text-primary">enamoran</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Cada plato es una celebración de ingredientes frescos, técnicas tradicionales 
            y porciones que demuestran nuestra generosidad.
          </p>
        </div>

        {/* Dishes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {dishes.map((dish, index) => (
            <article
              key={dish.id}
              className={cn(
                "group relative overflow-hidden transition-all duration-700",
                dish.featured ? "md:col-span-2 lg:col-span-1" : "",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              )}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                  <h3 className="font-serif text-2xl lg:text-3xl text-foreground mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    {dish.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    {dish.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Differentiators */}
        <div
          className={cn(
            "grid md:grid-cols-3 gap-8 mt-20 lg:mt-28 pt-16 border-t border-border transition-all duration-1000 delay-500",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center border border-accent/30 rounded-full">
              <svg className="w-7 h-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h3 className="font-serif text-xl text-foreground mb-3">Porciones Abundantes</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Servimos como si fueras de la familia. Siempre vas a quedar satisfecho.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center border border-accent/30 rounded-full">
              <svg className="w-7 h-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="font-serif text-xl text-foreground mb-3">Sabor Casero Auténtico</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Recetas de toda la vida, preparadas con ingredientes frescos cada día.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center border border-accent/30 rounded-full">
              <svg className="w-7 h-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="font-serif text-xl text-foreground mb-3">Atención Cálida</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Te hacemos sentir bienvenido desde el primer momento que entrás.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
