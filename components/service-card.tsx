"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface ServiceStat {
  label: string;
  value: string;
}

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  servicesList?: string[];
  stats: ServiceStat[];
  image?: string;
}

export default function ServiceCard({ icon, title, description, servicesList, stats, image }: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [animationValues, setAnimationValues] = useState<number[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  // Initialize animation values when stats change
  useEffect(() => {
    setAnimationValues(stats.map(() => 0));
  }, [stats]);
  
  // Handle animation when expanded state changes
  useEffect(() => {
    // Reset and start animation when expanded
    if (isExpanded) {
      // Reset counters to 0
      setAnimationValues(stats.map(() => 0));
      
      // Clear any existing interval
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      
      // Create animation interval
      let frame = 0;
      const totalFrames = 30; // 30 frames for smooth animation
      
      intervalRef.current = setInterval(() => {
        frame++;
        
        // Calculate progress with easing (ease-out cubic)
        const progress = frame / totalFrames;
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        
        // Update all counters
        setAnimationValues(stats.map((stat) => {
          // Parse the target value (remove non-numeric characters)
          const targetValue = parseFloat(stat.value.replace(/[^0-9.]/g, ''));
          return Math.round(easedProgress * targetValue);
        }));
        
        // Stop animation when complete
        if (frame >= totalFrames) {
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
          }
        }
      }, 30); // ~30ms per frame (about 30fps)
    } else {
      // Clear interval when not expanded
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }
    
    // Cleanup
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isExpanded, stats]);
  
  // Format the displayed value
  const formatValue = (stat: ServiceStat, index: number) => {
    // Always show the original value when not expanded
    if (!isExpanded) return stat.value;
    
    // Extract numeric part and suffix
    const numericPart = parseFloat(stat.value.replace(/[^0-9.]/g, ''));
    const suffix = stat.value.replace(numericPart.toString(), '').trim();
    
    // Use the animated value with the original suffix
    return `${animationValues[index] || 0}${suffix}`;
  };
  
  return (
    <article 
      className="relative overflow-hidden rounded-xl transition-all duration-300 bg-gray-800/50 hover:bg-indigo-600/20"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {/* Image that appears when expanded */}
      <div 
        className={`relative w-full overflow-hidden transition-all duration-500 ${isExpanded ? 'h-48 opacity-100 mb-4' : 'h-0 opacity-0'}`}
      >
        {image && (
          <>
            <Image 
              src={image} 
              alt={title}
              width={600}
              height={300}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/50 to-gray-900/80"></div>
          </>
        )}
      </div>
      <div className="p-6">
        <div className="mb-3">
          {icon}
        </div>
        <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
          {title}
        </h3>
        <p className="text-indigo-200/65 mb-4">
          {description}
        </p>
        
        {/* Lista de servicios con viñetas */}
        {servicesList && servicesList.length > 0 && (
          <div className="mb-4">
            <ul className="list-disc pl-5 text-indigo-200/65 space-y-2">
              {servicesList.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>
        )}
        
        {/* Estadísticas que aparecen al hacer hover */}
        <div 
          className={`grid grid-cols-2 gap-3 transition-all duration-500 ${
            isExpanded ? 'max-h-40 opacity-100 transform translate-y-0' : 'max-h-0 opacity-0 transform translate-y-4 overflow-hidden'
          }`}
        >
          {stats.map((stat, index) => (
            <div key={index} className="bg-gray-900/50 rounded-lg p-3">
              <p className="text-indigo-300 font-semibold text-lg">{formatValue(stat, index)}</p>
              <p className="text-xs text-indigo-200/65">{stat.label}</p>
            </div>
          ))}
        </div>
        
        {/* Botón "Ver más" que aparece al hacer hover */}
        <div 
          className={`mt-4 transition-all duration-500 ${
            isExpanded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
          }`}
        >
          {/*}
          <button className="text-sm text-indigo-300 hover:text-indigo-200 flex items-center">
            Ver más detalles
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          */}
          <br/>
        </div>
      </div>
      
      {/* Efecto de brillo en el borde al hacer hover */}
      <div 
        className={`absolute inset-0 border border-transparent transition-all duration-500 ${
          isExpanded ? 'border-indigo-500/30 shadow-[0_0_15px_rgba(99,102,241,0.3)]' : ''
        }`}
      ></div>
    </article>
  );
}
