"use client";

import { useState, useEffect, useRef } from 'react';

interface CounterProps {
  end: number;
  duration: number;
  label: string;
  suffix?: string;
  icon: React.ReactNode;
}

interface AnimatedCountersProps {
  className?: string;
}

const Counter = ({ end, duration, label, suffix = "", icon }: CounterProps) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    // Iniciar la animación inmediatamente si el elemento ya está visible
    if (typeof window !== 'undefined') {
      const isElementInViewport = () => {
        if (!countRef.current) return false;
        const rect = countRef.current.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
      };

      // Si el elemento ya está visible, iniciar la animación inmediatamente
      if (isElementInViewport() && !hasAnimated.current) {
        hasAnimated.current = true;
        animateCounter();
      }
    }

    // Configurar el observador para detectar cuando el elemento entre en el viewport
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animateCounter();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, []);

  const animateCounter = () => {
    const startTime = Date.now();
    const startValue = 0;
    
    const updateCounter = () => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - startTime;
      
      if (elapsedTime < duration) {
        const progress = elapsedTime / duration;
        // Función de easing para un efecto más natural
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        const currentCount = Math.floor(startValue + easedProgress * (end - startValue));
        setCount(currentCount);
        requestAnimationFrame(updateCounter);
      } else {
        setCount(end);
      }
    };
    
    requestAnimationFrame(updateCounter);
  };

  return (
    <div className="flex items-center space-x-2">
      <div className="flex flex-col items-end">
        <div ref={countRef} className="text-xl font-bold text-white text-right">
          {count}{suffix}
        </div>
        <div className="text-xs text-white/80 text-right">{label}</div>
      </div>
      <div className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500/30 text-white">
        <span className="scale-75">{icon}</span>
      </div>
    </div>
  );
};

export default function AnimatedCounters({ className = "" }: AnimatedCountersProps) {
  return (
    <div className={`${className} flex justify-end`}>
      <div className="flex flex-col space-y-4 items-end">
        <Counter 
          end={20} 
          duration={2000} 
          label="Años de Experiencia" 
          suffix="+" 
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-days">
              <path d="M8 2v4"/>
              <path d="M16 2v4"/>
              <rect width="18" height="18" x="3" y="4" rx="2"/>
              <path d="M3 10h18"/>
              <path d="M8 14h.01"/>
              <path d="M12 14h.01"/>
              <path d="M16 14h.01"/>
              <path d="M8 18h.01"/>
              <path d="M12 18h.01"/>
              <path d="M16 18h.01"/>
            </svg>
          }
        />
        <Counter 
          end={150} 
          duration={2500} 
          label="Proyectos Terminados" 
          suffix="+" 
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-circle">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <path d="m9 11 3 3L22 4"/>
            </svg>
          }
        />
        <Counter 
          end={5000} 
          duration={3000} 
          label="Horas de Consultoría" 
          suffix="+" 
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
          }
        />
        <Counter 
          end={12} 
          duration={1500} 
          label="Países" 
          suffix="" 
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              <path d="M2 12h20"/>
            </svg>
          }
        />
      </div>
    </div>
  );
}
