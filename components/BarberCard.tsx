'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { Barber } from '@/lib/types';
import AnimatedSection from './AnimatedSection';

interface BarberCardProps {
  barber: Barber;
  delay?: number;
}

export default function BarberCard({ barber, delay = 0 }: BarberCardProps) {
  return (
    <AnimatedSection animation="slideInUp" delay={delay}>
      <div className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group">
        {/* Image */}
        <div className="relative h-64 overflow-hidden bg-secondary/20">
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
          <div className="w-full h-full bg-gradient-to-br from-secondary/30 to-secondary/10 flex items-center justify-center text-6xl">
            👨‍💼
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div>
            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
              {barber.name}
            </h3>
            <div className="flex items-center gap-2 mt-1">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(barber.rating) ? 'fill-primary text-primary' : 'text-muted'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">{barber.rating}</span>
            </div>
          </div>

          <p className="text-sm text-muted-foreground">{barber.bio}</p>

          <div className="space-y-2">
            <p className="text-xs font-semibold text-muted-foreground">Specialties</p>
            <div className="flex flex-wrap gap-2">
              {barber.specialties.map((specialty) => (
                <span
                  key={specialty}
                  className="px-2 py-1 text-xs bg-primary/10 text-primary rounded"
                >
                  {specialty}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-border">
            <span className="text-sm text-muted-foreground">
              {barber.yearsExperience}+ years experience
            </span>
            <Link
              href="/booking"
              className="px-3 py-1 text-sm bg-primary/10 text-primary font-medium rounded hover:bg-primary hover:text-primary-foreground transition-all duration-200"
            >
              Book
            </Link>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
