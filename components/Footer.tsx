'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold text-primary mb-4">Route 66</h3>
            <p className="text-muted-foreground text-sm">
              Serviços premium de barbearia com charme clássico e expertise moderna.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {[
                { name: 'Serviços', href: '/services' },
                { name: 'Nossos Barbeiros', href: '/barbers' },
                { name: 'Agendar Consulta', href: '/booking' },
                { name: 'Localização', href: '/location' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Horários</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Seg - Sex: 9:00 AM - 19:00 PM</li>
              <li>Sábado: 10:00 AM - 18:00 PM</li>
              <li>Domingo: 11:00 AM - 17:00 PM</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+15559876543" className="hover:text-primary transition-colors">
                  +55 (11) 98765-4321
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:hello@route66barber.com" className="hover:text-primary transition-colors">
                  contato@route66barber.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Avenida Route 66, São Paulo, SP</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="py-8 border-t border-border flex items-center justify-between flex-wrap gap-4">
          <div className="flex gap-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
          <p className="text-sm text-muted-foreground">
            © {currentYear} Barbearia Route 66. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
