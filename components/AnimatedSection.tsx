'use client';

import { useEffect, useRef, useState } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: 'fadeIn' | 'slideInUp' | 'slideInDown' | 'scaleUp';
  delay?: number;
  className?: string;
}

export default function AnimatedSection({
  children,
  animation = 'fadeIn',
  delay = 0,
  className = '',
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`${isVisible ? `animate-${animation}` : 'opacity-0'} ${className}`}
    >
      {children}
    </div>
  );
}
