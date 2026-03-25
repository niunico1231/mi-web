"use client"

import Image from "next/image"
import Link from "next/link"
import { Calendar, Music, Users, Utensils } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

const services = [
  {
    icon: Music,
    title: "Shows en Vivo",
    description: "Tributos musicales, humor y entretenimiento para noches especiales.",
  },
  {
    icon: Users,
    title: "Eventos Privados",
    description: "Reservá el espacio para cumpleaños, reuniones empresariales o celebraciones.",
  },
  {
    icon: Utensils,
    title: "Catering Mamaluni",
    description: "Llevamos nuestra cocina a tu evento con la misma calidad y abundancia.",
  },
]

export function EventsSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section
      id="eventos"
      ref={ref}
      className="py-24 lg:py-32 bg-background"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div
            className={cn(
              "transition-all duration-1000",
              isInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            )}
          >
            <span className="text-xs uppercase tracking-widest text-primary mb-4 block">
              Eventos & Catering
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground text-editorial leading-tight mb-8">
              Tu próximo evento, <span className="text-primary">nuestra pasión</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Desde shows íntimos hasta grandes celebraciones, Mamaluni te acompaña 
              con la mejor gastronomía y un servicio que hace que cada momento sea especial.
            </p>

            {/* Services */}
            <div className="space-y-6 mb-10">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className={cn(
                    "flex gap-5 p-6 bg-card border border-border/50 transition-all duration-700 hover:border-primary/30",
                    isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  )}
                  style={{ transitionDelay: `${index * 100 + 200}ms` }}
                >
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-primary/10 text-primary">
                    <service.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground text-sm uppercase tracking-widest hover:bg-primary/90 transition-all duration-300 hover-lift"
              >
                <Calendar size={18} />
                Consultar catering
              </Link>
              <Link
                href="https://www.instagram.com/mamaluni.catering/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border border-foreground/30 text-foreground text-sm uppercase tracking-widest hover:border-foreground hover:bg-foreground/5 transition-all duration-300 hover-lift"
              >
                Ver eventos
              </Link>
            </div>
          </div>

          {/* Image */}
          <div
            className={cn(
              "relative aspect-[4/5] overflow-hidden transition-all duration-1000 delay-200",
              isInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            )}
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed%20%283%29-s32T8lfGH3Q2BW6HQV9SVOZ2JvNwxt.jpg"
              alt="Interior de Mamaluni preparado para eventos"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            
            {/* Floating card */}
            <div className="absolute bottom-8 left-8 right-8 p-6 bg-card/95 backdrop-blur-sm border border-border/50">
              <p className="font-serif text-xl text-foreground mb-2">
                @mamaluni.catering
              </p>
              <p className="text-sm text-muted-foreground">
                Seguinos en Instagram para ver nuestros próximos eventos
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
