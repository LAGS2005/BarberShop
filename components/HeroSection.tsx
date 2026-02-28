'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Container from './Container';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background pt-24 pb-40">
      <Container>
        <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
          {/* Content */}
          <div className="animate-slideInUp space-y-6">
            <div className="space-y-4">
              <p className="text-primary font-semibold text-lg">Bem-vindo à Route 66</p>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight text-balance">
                Excelência em Barbearia Premium
              </h1>
              <p className="text-xl text-muted-foreground">
                Experimente o artesanato autêntico de barbearia com expertise moderna. Seu estilo, nossa paixão.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center">
              <Link
                href="/booking"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-200 hover:scale-105"
              >
                Agendar Agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-3 bg-secondary/30 text-foreground font-semibold rounded-lg border border-border hover:bg-secondary/50 transition-all duration-200"
              >
                Ver Serviços
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-12">
              <div>
                <p className="text-3xl font-bold text-primary">15+</p>
                <p className="text-sm text-muted-foreground">Anos de Experiência</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">4.9</p>
                <p className="text-sm text-muted-foreground">Avaliação</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">1000+</p>
                <p className="text-sm text-muted-foreground">Clientes Satisfeitos</p>
              </div>
            </div>
          </div>

          {/* Image Icon */}
          <div className="w-full max-w-xs h-64 animate-scaleUp">
            <div className="relative h-full bg-gradient-to-br from-secondary/30 to-secondary/10 rounded-2xl overflow-hidden border border-border/50 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="text-6xl">✂️</div>
                <p className="text-muted-foreground">Barbearia Profissional</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
