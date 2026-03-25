"use client"

import Link from "next/link"
import { MapPin, Clock, Phone, Instagram, Facebook, Mail } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

export function ContactSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section
      id="contacto"
      ref={ref}
      className="py-24 lg:py-32 bg-card"
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
            Visitanos
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground text-editorial leading-tight mb-6">
            Te esperamos en <span className="text-primary">Mamaluni</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Ubicados en el corazón de Munro, a pocas cuadras de la estación.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Map */}
          <div
            className={cn(
              "relative aspect-square lg:aspect-auto lg:h-full min-h-[400px] overflow-hidden transition-all duration-1000",
              isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            )}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3287.5677654532956!2d-58.52467632433!3d-34.52366125141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb1373f0ce8d5%3A0x2f3f2f5c5f5f5f5f!2sAv.%20Bartolom%C3%A9%20Mitre%202148%2C%20Munro%2C%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1699999999999!5m2!1ses!2sar"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(100%) invert(92%) contrast(90%)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Mamaluni"
              className="absolute inset-0"
            />
          </div>

          {/* Contact Info */}
          <div
            className={cn(
              "transition-all duration-1000 delay-200",
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            )}
          >
            <div className="space-y-8">
              {/* Address */}
              <div className="flex gap-5">
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-primary/10 text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-foreground mb-2">Dirección</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Av. Bartolomé Mitre 2148<br />
                    B1605 Munro, Buenos Aires<br />
                    Argentina
                  </p>
                  <Link
                    href="https://www.google.com/maps/dir//Av.+Bartolom%C3%A9+Mitre+2148,+Munro,+Buenos+Aires"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-sm text-primary hover:text-primary/80 transition-colors uppercase tracking-wider"
                  >
                    Cómo llegar →
                  </Link>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-5">
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-primary/10 text-primary">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-foreground mb-2">Horarios</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Lunes a Viernes: 8:00 - 00:00<br />
                    Sábados: 9:00 - 01:00<br />
                    Domingos: 9:00 - 00:00
                  </p>
                  <p className="text-sm text-muted-foreground/70 mt-2 italic">
                    * Los horarios pueden variar en feriados
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div className="flex gap-5">
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-primary/10 text-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-foreground mb-2">Contacto</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Reservas y consultas por WhatsApp
                  </p>
                  <Link
                    href="https://wa.me/5491100000000?text=Hola!%20Quiero%20hacer%20una%20reserva%20en%20Mamaluni"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-3 px-6 py-3 bg-[#25D366] text-white text-sm uppercase tracking-wider hover:bg-[#25D366]/90 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    WhatsApp
                  </Link>
                </div>
              </div>

              {/* Social */}
              <div className="pt-8 border-t border-border">
                <h3 className="font-serif text-xl text-foreground mb-4">Seguinos</h3>
                <div className="flex gap-4">
                  <Link
                    href="https://www.instagram.com/mamaluni.catering/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </Link>
                  <Link
                    href="https://www.facebook.com/mamaluni"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook size={20} />
                  </Link>
                  <Link
                    href="mailto:info@mamaluni.com.ar"
                    className="w-12 h-12 flex items-center justify-center border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
                    aria-label="Email"
                  >
                    <Mail size={20} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
