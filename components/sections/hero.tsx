"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Star, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed%20%282%29-mbjAewcQNdeuA8Qm07xxrUUIY61UpK.jpg"
          alt="Picada frita abundante de Mamaluni"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Dark overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
        <div
          className={cn(
            "max-w-4xl mx-auto transition-all duration-1000 delay-300",
            isLoaded
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          )}
        >
          {/* Rating badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/80 backdrop-blur-sm border border-border/50 mb-8">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={cn(
                    i < 4 ? "fill-accent text-accent" : "fill-accent/50 text-accent/50"
                  )}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              4.7 <span className="text-muted-foreground/60">(140+ reseñas)</span>
            </span>
          </div>

          {/* Main headline */}
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-foreground text-editorial leading-tight mb-6">
            <span className="block">La comida casera,</span>
            <span className="block text-primary">elevada.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Porciones abundantes, sabores reales y un lugar al que siempre querés volver.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#platos"
              className="group px-8 py-4 bg-primary text-primary-foreground text-sm uppercase tracking-widest hover:bg-primary/90 transition-all duration-300 hover-lift"
            >
              Ver menú
            </Link>
            <Link
              href="#contacto"
              className="px-8 py-4 border border-foreground/30 text-foreground text-sm uppercase tracking-widest hover:border-foreground hover:bg-foreground/5 transition-all duration-300 hover-lift"
            >
              Reservar mesa
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={cn(
          "absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-700",
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}
      >
        <Link
          href="#experiencia"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className="text-xs uppercase tracking-widest">Descubrí más</span>
          <ChevronDown size={20} className="animate-bounce" />
        </Link>
      </div>
    </section>
  )
}
