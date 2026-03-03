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
        </div>
      </Container>
    </section>
  );
}
