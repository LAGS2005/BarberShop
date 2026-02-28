'use client';

import Link from 'next/link';
import { Clock, DollarSign } from 'lucide-react';
import { Service } from '@/lib/types';
import AnimatedSection from './AnimatedSection';

interface ServiceCardProps {
  service: Service;
  delay?: number;
}

export default function ServiceCard({ service, delay = 0 }: ServiceCardProps) {
  return (
    <AnimatedSection animation="slideInUp" delay={delay}>
      <div className="h-full bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group cursor-pointer">
        <div className="space-y-4">
          <div>
            <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-3">
              {service.category}
            </span>
            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
              {service.name}
            </h3>
          </div>

          <p className="text-muted-foreground text-sm">{service.description}</p>

          <div className="flex items-center gap-4 pt-4 border-t border-border">
            <div className="flex items-center gap-2 text-sm">
              <Clock className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">{service.duration} min</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <DollarSign className="h-4 w-4 text-primary" />
              <span className="font-semibold text-foreground">${service.price}</span>
            </div>
          </div>

          <Link
            href="/booking"
            className="mt-4 w-full inline-flex items-center justify-center px-4 py-2 bg-primary/10 text-primary font-medium rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-200"
          >
            Book Now
          </Link>
        </div>
      </div>
    </AnimatedSection>
  );
}
