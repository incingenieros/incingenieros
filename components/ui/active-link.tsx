'use client';

import { useState, useEffect } from 'react';

interface ActiveLinkProps {
  href: string;
  children: React.ReactNode;
  onActive?: (id: string, isActive: boolean) => void;
}

// Almacena el ID de la sección activa actualmente
let activeSection = '';

export default function ActiveLink({ href, children, onActive }: ActiveLinkProps) {
  const [isActive, setIsActive] = useState(false);
  const sectionId = href.replace('#', '');

  useEffect(() => {
    const handleScroll = () => {
      const targetElement = document.getElementById(sectionId);
      
      if (targetElement) {
        const rect = targetElement.getBoundingClientRect();
        const headerOffset = 100; // Altura aproximada del header + margen
        
        // Una sección está activa si su parte superior está cerca o por encima de la parte superior de la ventana (con offset)
        // y su parte inferior está por debajo de la parte superior de la ventana
        const isVisible = rect.top <= headerOffset && rect.bottom > headerOffset;
        
        // Si esta sección está visible y no era la activa anteriormente
        if (isVisible && activeSection !== sectionId) {
          activeSection = sectionId;
          setIsActive(true);
          if (onActive) onActive(sectionId, true);
        } 
        // Si esta sección era la activa pero ya no está visible
        else if (!isVisible && activeSection === sectionId) {
          activeSection = '';
          setIsActive(false);
          if (onActive) onActive(sectionId, false);
        }
        // Si esta sección no es la activa actualmente
        else if (activeSection !== sectionId && isActive) {
          setIsActive(false);
        }
      }
    };

    // Ejecutar al montar y cuando se hace scroll
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    
    // Limpiar el event listener al desmontar
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionId, isActive, onActive]);

  return (
    <a
      href={href}
      className={`transition duration-150 ease-in-out ${
        isActive ? 'text-indigo-400' : 'text-gray-300 hover:text-white'
      }`}
    >
      {children}
    </a>
  );
}
