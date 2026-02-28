import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Container from '@/components/Container';
import BookingForm from '@/components/BookingForm';
import AnimatedSection from '@/components/AnimatedSection';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Agendar Consulta - Barbearia Route 66',
  description: 'Agende sua próxima consulta na Barbearia Route 66. Agendamento online fácil com sua escolha de serviço e barbeiro.',
  keywords: 'agendar consulta, agendar, agendamento de barbearia',
};

export default function BookingPage() {
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
                  Agende Sua Consulta
                </h1>
                <p className="text-lg text-muted-foreground">
                  Agende sua próxima experiência de grooming na Barbearia Route 66 em apenas alguns passos
                </p>
              </div>
            </AnimatedSection>
          </Container>
        </section>

        {/* Booking Form */}
        <section className="py-24">
          <Container>
            <div className="max-w-2xl mx-auto">
              <AnimatedSection animation="slideInUp">
                <div className="bg-card border border-border rounded-lg p-8 md:p-12">
                  <BookingForm />
                </div>
              </AnimatedSection>

              {/* Info Cards */}
              <div className="flex flex-col gap-6 mt-12">
                {[
                  {
                    title: 'Agendamento Fácil',
                    description: 'Processo de agendamento rápido e simples em 3 passos',
                    icon: '📋',
                  },
                  {
                    title: 'Barbeiros Especialistas',
                    description: 'Escolha entre nossos barbeiros experientes',
                    icon: '✂️',
                  },
                  {
                    title: 'Horários Flexíveis',
                    description: 'Agende em um horário que funciona para você',
                    icon: '⏰',
                  },
                ].map((item, index) => (
                  <AnimatedSection
                    key={item.title}
                    animation="slideInUp"
                    delay={index * 100}
                  >
                    <div className="bg-secondary/10 border border-border rounded-lg p-6 text-center">
                      <div className="text-4xl mb-3">{item.icon}</div>
                      <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-secondary/5">
          <Container>
            <AnimatedSection animation="slideInUp" className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
                Perguntas Frequentes
              </h2>
            </AnimatedSection>

            <div className="max-w-2xl mx-auto space-y-4">
              {[
                {
                  q: 'Com quanto tempo de antecedência devo agendar?',
                  a: 'Recomendamos agendar com pelo menos alguns dias de antecedência, especialmente nos fins de semana. Visitantes sem agendamento são sempre bem-vindos, mas agendar garante seu horário preferido.',
                },
                {
                  q: 'Posso mudar minha consulta?',
                  a: 'Sim, você pode modificar seu agendamento até 24 horas antes de sua consulta. Entre em contato conosco por telefone ou e-mail para mudanças.',
                },
                {
                  q: 'Qual é sua política de cancelamento?',
                  a: 'Cancelamentos feitos com 24 horas de antecedência são gratuitos. Cancelamentos atrasados podem estar sujeitos a uma taxa.',
                },
                {
                  q: 'Vocês aceitam visitantes sem agendamento?',
                  a: 'Com certeza! Embora recomendemos agendar com antecedência, acolhemos clientes sem agendamento conforme a disponibilidade.',
                },
              ].map((item, index) => (
                <AnimatedSection
                  key={index}
                  animation="slideInUp"
                  delay={index * 100}
                >
                  <details className="group cursor-pointer">
                    <summary className="flex items-center justify-between px-6 py-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors">
                      <span className="font-semibold text-foreground">{item.q}</span>
                      <span className="text-muted-foreground group-open:text-primary transition-colors">▼</span>
                    </summary>
                    <div className="px-6 py-4 text-muted-foreground text-sm border-t border-border">
                      {item.a}
                    </div>
                  </details>
                </AnimatedSection>
              ))}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
