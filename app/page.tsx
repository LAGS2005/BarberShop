import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import Container from '@/components/Container';
import ServiceCard from '@/components/ServiceCard';
import BarberCard from '@/components/BarberCard';
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

        {/* Featured Services */}
        <section className="py-24 bg-gradient-to-b from-background to-secondary/5">
          <Container>
            <AnimatedSection animation="slideInUp">
              <div className="text-center space-y-4 mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
                  Nossos Serviços Populares
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Desde cortes clássicos até experiências premium de grooming
                </p>
              </div>
            </AnimatedSection>

            <div className="flex flex-col items-center gap-8 mb-12">
              {featuredServices.map((service, index) => (
                <div key={service.id} className="w-full max-w-2xl">
                  <ServiceCard
                    service={service}
                    delay={index * 100}
                  />
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-200 hover:scale-105"
              >
                Ver Todos os Serviços
              </Link>
            </div>
          </Container>
        </section>

        {/* Our Barbers */}
        <section className="py-24">
          <Container>
            <AnimatedSection animation="slideInUp">
              <div className="text-center space-y-4 mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
                  Conheça Nossos Barbeiros Especialistas
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Profissionais qualificados dedicados ao seu look perfeito
                </p>
              </div>
            </AnimatedSection>

            <div className="flex flex-wrap justify-center gap-8">
              {featuredBarbers.map((barber, index) => (
                <div key={barber.id} className="w-full sm:w-80">
                  <BarberCard
                    barber={barber}
                    delay={index * 100}
                  />
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Testimonials */}
        <TestimonialsSection />

        {/* Why Choose Us */}
        <section className="py-24 bg-gradient-to-b from-secondary/5 to-background">
          <Container>
            <AnimatedSection animation="slideInUp">
              <div className="text-center space-y-4 mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
                  Por que Escolher Route 66
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Excelência em cada corte, sempre
                </p>
              </div>
            </AnimatedSection>

            <div className="flex flex-col gap-8 items-center">
              {[
                {
                  title: 'Barbeiros Especialistas',
                  description:
                    'Nosso time traz décadas de experiência combinada e dedicação ao ofício',
                  icon: '🎓',
                },
                {
                  title: 'Produtos Premium',
                  description:
                    'Usamos apenas produtos de qualidade superior para seu conforto e estilo',
                  icon: '✨',
                },
                {
                  title: 'Atmosfera Acolhedora',
                  description:
                    'Entre em nossa loja e experimente a verdadeira hospitalidade de barbearia',
                  icon: '🏠',
                },
              ].map((item, index) => (
                <AnimatedSection
                  key={item.title}
                  animation="slideInUp"
                  delay={index * 100}
                  className="w-full max-w-2xl"
                >
                  <div className="bg-card border border-border rounded-lg p-8 text-center hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                    <div className="text-5xl mb-4">{item.icon}</div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA Section */}
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
