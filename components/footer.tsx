import Link from "next/link"
import { Instagram, Facebook, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 lg:py-16 bg-card border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link
              href="#inicio"
              className="font-serif text-2xl tracking-wide text-foreground hover:text-primary transition-colors duration-300"
            >
              mamaluni
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              La comida casera, elevada.<br />
              Restobar • Restaurante • Cafetería • Catering
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-foreground mb-4">
              Navegación
            </h4>
            <nav className="space-y-3">
              <Link
                href="#inicio"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Inicio
              </Link>
              <Link
                href="#platos"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Platos
              </Link>
              <Link
                href="#ambiente"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Ambiente
              </Link>
              <Link
                href="#eventos"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Eventos
              </Link>
              <Link
                href="#contacto"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Contacto
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-foreground mb-4">
              Contacto
            </h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>Av. Bartolomé Mitre 2148</p>
              <p>B1605 Munro, Buenos Aires</p>
              <p>Argentina</p>
              <Link
                href="mailto:info@mamaluni.com.ar"
                className="block hover:text-foreground transition-colors"
              >
                info@mamaluni.com.ar
              </Link>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-foreground mb-4">
              Horarios
            </h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>Lunes a Viernes: 8:00 - 00:00</p>
              <p>Sábados: 9:00 - 01:00</p>
              <p>Domingos: 9:00 - 00:00</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Mamaluni. Todos los derechos reservados.
          </p>

          {/* Social */}
          <div className="flex items-center gap-4">
            <Link
              href="https://www.instagram.com/mamaluni.catering/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </Link>
            <Link
              href="https://www.facebook.com/mamaluni"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </Link>
            <Link
              href="mailto:info@mamaluni.com.ar"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
