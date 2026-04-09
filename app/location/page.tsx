import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Container from '@/components/Container';
import AnimatedSection from '@/components/AnimatedSection';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Localização e Horários - Barbearia Route 66',
  description: 'Visite-nos em Avenida Route 66, 123, São Paulo, SP. Veja nossos horários, informações de contato e direções para nossa barbearia.',
  keywords: 'localização, horários, endereço, contato, direções',
};

export default function LocationPage() {
  const businessInfo = {
    address: 'Avenida Route 66, 123',
    city: 'São Paulo',
    state: 'SP',
    zip: '01234-567',
    phone: '+55 (11) 98765-4321',
    email: 'contato@route66barber.com',
    hours: {
      'Segunda - Sexta': '9:00 AM - 19:00 PM',
      'Sábado': '10:00 AM - 18:00 PM',
      'Domingo': '11:00 AM - 17:00 PM',
    },
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
                  Visite-Nos
                </h1>
                <p className="text-lg text-muted-foreground">
                  Localizada na histórica Route 66, somos fáceis de encontrar e prontos para servi-lo
                </p>
              </div>
            </AnimatedSection>
          </Container>
        </section>

        {/* Location Content */}
        <section className="py-24">
          <Container>
            <div className="flex flex-col items-center gap-12">
              {/* Map Placeholder */}
              <AnimatedSection animation="slideInUp">
                <div className="bg-secondary/20 border border-border rounded-lg overflow-hidden h-full min-h-96">
                  <iframe
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: '400px' }}
                    loading="lazy"
                    allowFullScreen
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3157.8766905844236!2d-89.6501373!3d39.7817203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x887f9d9d9d9d9d9d%3A0x9d9d9d9d9d9d9d9d!2sSpringfield%2C%20IL!5e0!3m2!1sen!2sus!4v1234567890"
                  ></iframe>
                </div>
              </AnimatedSection>

              {/* Contact Info */}
              <AnimatedSection animation="slideInUp" delay={100}>
                <div className="space-y-8">
                  {/* Address */}
                  <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors w-full max-w-2xl">
                    <div className="flex items-start gap-4">
                      <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Endereço</h3>
                        <p className="text-muted-foreground">
                          {businessInfo.address}
                          <br />
                          {businessInfo.city}, {businessInfo.state} {businessInfo.zip}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors w-full max-w-2xl">
                    <div className="flex items-start gap-4">
                      <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Ligue para Nós</h3>
                        <a
                          href={`tel:${businessInfo.phone}`}
                          className="text-primary hover:text-primary/80 transition-colors font-medium"
                        >
                          {businessInfo.phone}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors w-full max-w-2xl">
                    <div className="flex items-start gap-4">
                      <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Envie um Email</h3>
                        <a
                          href={`mailto:${businessInfo.email}`}
                          className="text-primary hover:text-primary/80 transition-colors font-medium"
                        >
                          {businessInfo.email}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp Contact */}
                  <a
                    href="https://wa.me/5511987654321"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors flex items-start gap-4 group w-full max-w-2xl"
                  >
                    <MessageCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Chat no WhatsApp</h3>
                      <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                        Envie-nos uma mensagem para respostas rápidas
                      </p>
                    </div>
                  </a>
                </div>
              </AnimatedSection>
            </div>
          </Container>
        </section>

        {/* Hours */}
        <section className="py-24 bg-secondary/5">
          <Container>
            <AnimatedSection animation="slideInUp" className="max-w-2xl mx-auto">
              <div className="w-full">
                <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
                  Horário de Funcionamento
                </h2>

                <div className="bg-card border border-border rounded-lg p-8 space-y-4">
                  {Object.entries(businessInfo.hours).map(([day, time]) => (
                    <div key={day} className="flex items-center justify-between pb-4 border-b border-border last:border-0 last:pb-0">
                      <div className="flex items-center gap-3">
                        <Clock className="h-5 w-5 text-primary" />
                        <span className="font-semibold text-foreground">{day}</span>
                      </div>
                      <span className="text-muted-foreground">{time}</span>
                    </div>
                  ))}
                </div>

                <p className="text-center text-sm text-muted-foreground mt-6">
                  Fechado nos feriados importantes. Nos ligue se não tem certeza!
                </p>
              </div>
            </AnimatedSection>
          </Container>
        </section>

        {/* Parking & Accessibility */}
        <section className="py-24 bg-secondary/5">
          <Container>
            <div className="flex flex-col gap-6 max-w-2xl mx-auto">
              {[
                {
                  title: 'Estacionamento Gratuito',
                  description: 'Amplo estacionamento gratuito disponível em nosso lote',
                  icon: '🅿️',
                },
                {
                  title: 'Acessível a Cadeirantes',
                  description: 'Entrada e instalações totalmente acessíveis',
                  icon: '♿',
                },
              ].map((item) => (
                <AnimatedSection key={item.title} animation="slideInUp">
                  <div className="bg-card border border-border rounded-lg p-6 text-center">
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </Container>
        </section>

        {/* Directions CTA */}
        <section className="py-24">
          <Container>
            <AnimatedSection animation="scaleUp" className="max-w-2xl mx-auto">
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-12 text-center space-y-4">
                <h3 className="text-2xl font-bold text-foreground">Pronto para Visitar?</h3>
                <p className="text-muted-foreground">
                  Estamos convenientemente localizados na Route 66. Visitantes sem agendamento são bem-vindos, mas agendar com antecedência garante seu horário preferido.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <a
                    href={`https://www.google.com/maps/search/${businessInfo.address}+${businessInfo.city}+${businessInfo.state}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-200 hover:scale-105"
                  >
                    Obter Direções
                  </a>
                  <Link
                    href="/booking"
                    className="inline-flex items-center justify-center px-8 py-3 bg-secondary/30 text-foreground font-semibold rounded-lg border border-border hover:bg-secondary/50 transition-all duration-200"
                  >
                    Agendar Consulta
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
