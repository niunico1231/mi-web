"use client"

import { Star } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    id: 1,
    quote: "Platos abundantes y muy sabrosos. Se nota el amor en cada preparación.",
    author: "María L.",
    rating: 5,
  },
  {
    id: 2,
    quote: "Atención excelente, te hacen sentir como en casa. Volvemos siempre.",
    author: "Carlos R.",
    rating: 5,
  },
  {
    id: 3,
    quote: "Ideal para disfrutar en familia. Las milanesas son espectaculares.",
    author: "Ana G.",
    rating: 5,
  },
  {
    id: 4,
    quote: "Gran cerveza tirada y las picadas son increíbles. Ambiente muy tranquilo.",
    author: "Martín P.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section
      ref={ref}
      className="py-24 lg:py-32 bg-background"
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div
          className={cn(
            "text-center max-w-3xl mx-auto mb-16 lg:mb-20 transition-all duration-1000",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <span className="text-xs uppercase tracking-widest text-primary mb-4 block">
            Lo que dicen de nosotros
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground text-editorial leading-tight">
            Experiencias <span className="text-primary">reales</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.id}
              className={cn(
                "p-8 lg:p-10 bg-card border border-border/50 transition-all duration-700 hover:border-border",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-serif text-xl lg:text-2xl text-foreground leading-relaxed mb-6">
                {`"${testimonial.quote}"`}
              </blockquote>

              {/* Author */}
              <cite className="text-sm text-muted-foreground not-italic uppercase tracking-wider">
                {testimonial.author}
              </cite>
            </article>
          ))}
        </div>

        {/* Overall Rating */}
        <div
          className={cn(
            "text-center mt-16 lg:mt-20 transition-all duration-1000 delay-500",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-card border border-border/50">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className={cn(
                    i < 4 ? "fill-accent text-accent" : "fill-accent/50 text-accent/50"
                  )}
                />
              ))}
            </div>
            <span className="text-foreground font-serif text-xl">4.7</span>
            <span className="text-muted-foreground text-sm">
              basado en 140+ reseñas
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
