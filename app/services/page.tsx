import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Container from '@/components/Container';
import ServiceCard from '@/components/ServiceCard';
import AnimatedSection from '@/components/AnimatedSection';
import { mockServices } from '@/lib/mockData';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Serviços - Barbearia Route 66',
  description: 'Explore nosso cardápio completo de serviços profissionais de barbearia incluindo cortes, barbear quente, aparação de barba e pacotes premium de grooming.',
  keywords: 'serviços de barbearia, cortes, barbear, aparação de barba, grooming',
};

export default function ServicesPage() {
  const servicesByCategory = {
    haircut: mockServices.filter(s => s.category === 'haircut'),
    shave: mockServices.filter(s => s.category === 'shave'),
    grooming: mockServices.filter(s => s.category === 'grooming'),
    styling: mockServices.filter(s => s.category === 'styling'),
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Page Header */}
        <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
          <Container>
            <AnimatedSection animation="slideInUp" className="max-w-3xl mx-auto text-center">
              <div className="space-y-4">
                <Link href="/" className="text-sm text-primary hover:text-primary/80 transition-colors inline-block">
                  ← Voltar para Início
                </Link>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
                  Nossos Serviços
                </h1>
                <p className="text-lg text-muted-foreground">
                  Explore nosso cardápio completo de serviços profissionais de barbearia projetados para mantê-lo em seu melhor
                </p>
              </div>
            </AnimatedSection>
          </Container>
        </section>

        {/* Services Grid */}
        <section className="py-24">
          <Container>
            <div className="space-y-20">
              {Object.entries(servicesByCategory).map(([category, services]) => {
                const categoryLabel = {
                  haircut: 'Cortes',
                  shave: 'Barbear',
                  grooming: 'Grooming',
                  styling: 'Estilos Premium'
                }[category] || category;

                return services.length > 0 && (
                  <div key={category}>
                    <AnimatedSection animation="slideInUp">
                      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
                        {categoryLabel}
                      </h2>
                    </AnimatedSection>

                    <div className="flex flex-col items-center gap-8">
                      {services.map((service, index) => (
                        <div key={service.id} className="w-full max-w-2xl">
                          <ServiceCard
                            service={service}
                            delay={index * 100}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <AnimatedSection animation="scaleUp" className="mt-24 max-w-2xl mx-auto">
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-12 text-center space-y-4">
                <h3 className="text-2xl font-bold text-foreground">Pronto para Agendar?</h3>
                <p className="text-muted-foreground">
                  Selecione seu serviço e agende sua consulta com nossos barbeiros especialistas
                </p>
                <Link
                  href="/booking"
                  className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-200 hover:scale-105"
                >
                  Agendar Consulta
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
