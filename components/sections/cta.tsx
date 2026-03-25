"use client"

import Link from "next/link"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

export function CTASection() {
  const { ref, isInView } = useInView({ threshold: 0.2 })

  return (
    <section
      ref={ref}
      className="py-24 lg:py-32 bg-background relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-foreground/20 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-foreground/20 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-foreground/20 rounded-full" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div
          className={cn(
            "text-center max-w-4xl mx-auto transition-all duration-1000",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <span className="text-xs uppercase tracking-widest text-primary mb-6 block">
            Te esperamos
          </span>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-foreground text-editorial leading-tight mb-8">
            Hoy es un buen día <br />
            <span className="text-primary">para comer bien</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
            Vení a disfrutar de porciones generosas, sabores auténticos y 
            un ambiente donde siempre te sentís bienvenido.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#platos"
              className="px-10 py-5 bg-primary text-primary-foreground text-sm uppercase tracking-widest hover:bg-primary/90 transition-all duration-300 hover-lift"
            >
              Ver menú
            </Link>
            <Link
              href="https://www.google.com/maps/dir//Av.+Bartolom%C3%A9+Mitre+2148,+Munro,+Buenos+Aires"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 border border-foreground/30 text-foreground text-sm uppercase tracking-widest hover:border-foreground hover:bg-foreground/5 transition-all duration-300 hover-lift"
            >
              Visitanos
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
