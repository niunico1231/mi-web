"use client"

import Image from "next/image"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

const atmosphereImages = [
  {
    id: 1,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed%20%283%29-s32T8lfGH3Q2BW6HQV9SVOZ2JvNwxt.jpg",
    alt: "Interior del bar con iluminación cálida y plantas",
    span: "col-span-2 row-span-2",
  },
  {
    id: 2,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed%20%281%29-DcNQbp13RaAiiJ7NLmKUaMQJjHez6j.jpg",
    alt: "Barra con máquina de café y decoración moderna",
    span: "col-span-1 row-span-1",
  },
  {
    id: 3,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lvexJjiCu5fKoN0qofXpNYJ9cWXqnx.png",
    alt: "Fachada de Mamaluni con mesas en la vereda",
    span: "col-span-1 row-span-1",
  },
]

export function AtmosphereSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section
      id="ambiente"
      ref={ref}
      className="py-24 lg:py-32 bg-card"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content Column */}
          <div
            className={cn(
              "order-2 lg:order-1 transition-all duration-1000",
              isInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            )}
          >
            <span className="text-xs uppercase tracking-widest text-primary mb-4 block">
              Nuestro espacio
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground text-editorial leading-tight mb-8">
              Un lugar para disfrutar <span className="text-primary">sin apuro</span>
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Diseñamos cada rincón de Mamaluni para que te sientas cómodo. 
                Iluminación cálida, música que acompaña sin molestar, y mesas 
                donde las conversaciones fluyen naturalmente.
              </p>
              <p>
                Ya sea que vengas a almorzar con tu familia, a tomar unas cervezas 
                con amigos, o a disfrutar de un café tranquilo, nuestro espacio 
                se adapta a vos.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-6 mt-12 pt-12 border-t border-border">
              <div>
                <span className="text-2xl text-accent mb-2 block">01</span>
                <h4 className="font-serif text-lg text-foreground mb-1">Ambiente íntimo</h4>
                <p className="text-sm text-muted-foreground">Perfecto para cada ocasión</p>
              </div>
              <div>
                <span className="text-2xl text-accent mb-2 block">02</span>
                <h4 className="font-serif text-lg text-foreground mb-1">Terraza exterior</h4>
                <p className="text-sm text-muted-foreground">Mesas al aire libre</p>
              </div>
              <div>
                <span className="text-2xl text-accent mb-2 block">03</span>
                <h4 className="font-serif text-lg text-foreground mb-1">Cerveza tirada</h4>
                <p className="text-sm text-muted-foreground">Siempre fresca y lista</p>
              </div>
              <div>
                <span className="text-2xl text-accent mb-2 block">04</span>
                <h4 className="font-serif text-lg text-foreground mb-1">WiFi gratis</h4>
                <p className="text-sm text-muted-foreground">Trabajá o relajate</p>
              </div>
            </div>
          </div>

          {/* Images Grid */}
          <div
            className={cn(
              "order-1 lg:order-2 transition-all duration-1000 delay-200",
              isInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            )}
          >
            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              {atmosphereImages.map((image, index) => (
                <div
                  key={image.id}
                  className={cn(
                    "relative overflow-hidden group",
                    image.span,
                    index === 0 ? "aspect-square" : "aspect-[4/3]"
                  )}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-background/10 group-hover:bg-background/0 transition-colors duration-500" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
