import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import Container from '@/components/Container';
import TestimonialsSection from '@/components/TestimonialsSection';
import AnimatedSection from '@/components/AnimatedSection';
import { mockServices, mockBarbers } from '@/lib/mockData';
import Link from 'next/link';

export default function Home() {
  const featuredServices = mockServices.slice(0, 3);
  const featuredBarbers = mockBarbers.slice(0, 4);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Testimonials */}
        <TestimonialsSection />

        {/* Avaliações dos Clientes */}
        <section className="py-24 bg-gradient-to-b from-primary/10 to-primary/5">
          <Container>
            <AnimatedSection animation="scaleUp" className="max-w-2xl mx-auto">
              <div className="text-center space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
                  Pronto para Seu Corte Perfeito?
                </h2>
                <p className="text-lg text-muted-foreground">
                  Agende sua consulta agora e experimente a diferença Route 66
                </p>
                <Link
                  href="/booking"
                  className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-200 hover:scale-105"
                >
                  Agendar Agora
                </Link>
              </div>
            </AnimatedSection>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
