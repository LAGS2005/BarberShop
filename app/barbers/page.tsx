import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Container from '@/components/Container';
import BarberCard from '@/components/BarberCard';
import AnimatedSection from '@/components/AnimatedSection';
import { mockBarbers } from '@/lib/mockData';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Nossos Barbeiros - Barbearia Route 66',
  description: 'Conheça nossos barbeiros especialistas. Cada um traz anos de experiência e se especializa em diferentes técnicas, desde cortes clássicos até designs modernos.',
  keywords: 'barbeiros, profissionais, time de barbearia, expertise',
};

export default function BarbersPage() {
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
                  Conheça Nossos Barbeiros
                </h1>
                <p className="text-lg text-muted-foreground">
                  Nosso time de barbeiros especialistas traz anos de experiência e paixão pelo ofício. Conheça os profissionais que cuidarão do seu look.
                </p>
              </div>
            </AnimatedSection>
          </Container>
        </section>

        {/* Barbers Grid */}
        <section className="py-24">
          <Container>
            <div className="flex flex-wrap justify-center gap-8">
              {mockBarbers.map((barber, index) => (
                <div key={barber.id} className="w-full sm:w-80">
                  <BarberCard
                    barber={barber}
                    delay={index * 100}
                  />
                </div>
              ))}
            </div>

            {/* About Section */}
            <AnimatedSection animation="slideInUp" className="mt-24 max-w-2xl mx-auto bg-secondary/10 rounded-lg p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
                Artesanato Especializado
              </h2>
              <div className="space-y-4 text-muted-foreground text-center">
                <p>
                  Cada barbeiro em nosso time é um profissional dedicado que se orgulha de seu trabalho. Com especialidades que variam de degradês clássicos até designs modernos, arte de barba até barbear quente, temos a expertise para trazer sua visão à vida.
                </p>
                <p>
                  Nossos barbeiros passam por treinamento contínuo para estar atualizado com as técnicas e tendências mais recentes. Seja você procurando por um corte clássico ou algo de ponta, nosso time está pronto para entregar resultados excepcionais.
                </p>
              </div>
            </AnimatedSection>

            {/* CTA */}
            <AnimatedSection animation="scaleUp" className="mt-24 max-w-2xl mx-auto">
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-12 text-center space-y-4">
                <h3 className="text-2xl font-bold text-foreground">Agende com Seu Barbeiro Favorito</h3>
                <p className="text-muted-foreground">
                  Escolha um barbeiro e agende sua consulta conforme sua conveniência
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
