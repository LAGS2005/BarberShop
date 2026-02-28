'use client';

import { Star } from 'lucide-react';
import { mockReviews } from '@/lib/mockData';
import Container from './Container';
import AnimatedSection from './AnimatedSection';

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-secondary/10">
      <Container>
        <AnimatedSection animation="slideInUp">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
              O Que Nossos Clientes Dizem
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Leia depoimentos de nossos clientes satisfeitos
            </p>
          </div>
        </AnimatedSection>

        <div className="flex flex-col items-center gap-6 max-w-2xl mx-auto w-full">
          {mockReviews.map((review, index) => (
            <AnimatedSection
              key={review.id}
              animation="slideInUp"
              delay={index * 100}
              className="w-full"
            >
              <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < review.rating
                          ? 'fill-primary text-primary'
                          : 'text-muted'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 text-sm line-clamp-4">
                  "{review.text}"
                </p>
                <div>
                  <p className="font-semibold text-foreground">{review.userName}</p>
                  <p className="text-xs text-muted-foreground">{review.date}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
