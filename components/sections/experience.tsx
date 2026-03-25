"use client"

import Image from "next/image"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

export function ExperienceSection() {
  const { ref, isInView } = useInView({ threshold: 0.2 })

  return (
    <section
      id="experiencia"
      ref={ref}
      className="py-24 lg:py-32 bg-background"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <div
            className={cn(
              "relative aspect-[4/5] overflow-hidden transition-all duration-1000",
              isInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            )}
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed-KfPmnXQxnnbKPye5mgo1IijvvJWoVH.jpg"
              alt="Tostadas con palta y huevos revueltos"
              fill
              className="object-cover img-zoom"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
          </div>

          {/* Content Column */}
          <div
            className={cn(
              "lg:pl-8 transition-all duration-1000 delay-200",
              isInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            )}
          >
            <span className="text-xs uppercase tracking-widest text-primary mb-4 block">
              Nuestra esencia
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground text-editorial leading-tight mb-8">
              Donde la tradición <br />
              <span className="text-primary">se encuentra</span> <br />
              con el sabor.
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                En Mamaluni, cada plato cuenta una historia. Somos más que un restaurante: 
                somos un punto de encuentro donde las familias, los amigos y las parejas 
                vienen a compartir momentos únicos.
              </p>
              <p>
                Nuestras recetas viajan desde las cocinas de nuestras abuelas hasta tu mesa, 
                con porciones que hablan de generosidad y sabores que te hacen sentir en casa.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-border">
              <div>
                <span className="block font-serif text-4xl text-accent">+140</span>
                <span className="text-sm text-muted-foreground uppercase tracking-wider">
                  Reseñas
                </span>
              </div>
              <div>
                <span className="block font-serif text-4xl text-accent">4.7</span>
                <span className="text-sm text-muted-foreground uppercase tracking-wider">
                  Rating
                </span>
              </div>
              <div>
                <span className="block font-serif text-4xl text-accent">100%</span>
                <span className="text-sm text-muted-foreground uppercase tracking-wider">
                  Casero
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
