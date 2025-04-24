"use client";

import { useState, useEffect } from "react";
import Logo from "./logo";
import ActiveLink from "./active-link";
import LanguageSelector from "./language-selector";
import { useLanguage } from "@/contexts/language-context";

export default function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(true); // Asumimos móvil por defecto
  const [activeSection, setActiveSection] = useState('');
  const { t } = useLanguage();

  // Detectar el tamaño de la pantalla al cargar y cuando cambia
  useEffect(() => {
    // Función para verificar si estamos en móvil
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Verificar al inicio
    checkIfMobile();
    
    // Agregar listener para cambios de tamaño
    window.addEventListener('resize', checkIfMobile);
    
    // Limpiar listener
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);
  
  // Función para manejar cuando una sección se vuelve activa
  const handleSectionActive = (id: string, isActive: boolean) => {
    if (isActive) {
      setActiveSection(id);
    } else if (activeSection === id) {
      setActiveSection('');
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-2 md:pt-5">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-gray-900/75 px-3 backdrop-blur-md before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          {/* Site branding */}
          <div className="flex items-center gap-3">
            <Logo />
            <h1 className="text-lg text-white whitespace-nowrap">Ing. Francisco Arrazola Méndez</h1>
          </div>

          {/* Desktop menu - solo visible en desktop */}
          {!isMobile && (
            <nav>
              <ul className="flex items-center gap-6 text-lg">
                <li><ActiveLink href="#inicio" onActive={handleSectionActive}>{t('nav.home')}</ActiveLink></li>
                <li><ActiveLink href="#experiencia" onActive={handleSectionActive}>{t('nav.experience')}</ActiveLink></li>
                <li><ActiveLink href="#consultoria" onActive={handleSectionActive}>{t('nav.consulting')}</ActiveLink></li>
                <li><ActiveLink href="#industrial" onActive={handleSectionActive}>{t('nav.industrial')}</ActiveLink></li>
                <li><ActiveLink href="#naval" onActive={handleSectionActive}>{t('nav.naval')}</ActiveLink></li>
                <li><ActiveLink href="#testimonios" onActive={handleSectionActive}>{t('nav.success')}</ActiveLink></li>
                <li><ActiveLink href="#contacto" onActive={handleSectionActive}>{t('nav.contact')}</ActiveLink></li>
                <li className="ml-2"><LanguageSelector /></li>
              </ul>
            </nav>
          )}

          {/* Hamburger button - solo visible en móvil */}
          {isMobile && (
            <button onClick={() => setMobileNavOpen(!mobileNavOpen)}>
              <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isMobile && mobileNavOpen && (
        <div className="fixed inset-0 z-40 bg-gray-900/95">
          <div className="flex h-full flex-col overflow-y-auto pt-16 pb-6 px-6">
            {/* Close button */}
            <div className="absolute top-4 right-4">
              <button 
                className="text-white" 
                onClick={() => setMobileNavOpen(false)}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Mobile navigation */}
            <nav className="mt-8">
              <ul className="flex flex-col space-y-6 text-lg text-center">
                <li><a href="#inicio" className={`block transition duration-150 ease-in-out ${activeSection === 'inicio' ? 'text-indigo-400' : 'text-gray-300 hover:text-white'}`} onClick={() => setMobileNavOpen(false)}>{t('nav.home')}</a></li>
                <li><a href="#experiencia" className={`block transition duration-150 ease-in-out ${activeSection === 'experiencia' ? 'text-indigo-400' : 'text-gray-300 hover:text-white'}`} onClick={() => setMobileNavOpen(false)}>{t('nav.experience')}</a></li>
                <li><a href="#consultoria" className={`block transition duration-150 ease-in-out ${activeSection === 'consultoria' ? 'text-indigo-400' : 'text-gray-300 hover:text-white'}`} onClick={() => setMobileNavOpen(false)}>{t('nav.consulting')}</a></li>
                <li><a href="#industrial" className={`block transition duration-150 ease-in-out ${activeSection === 'industrial' ? 'text-indigo-400' : 'text-gray-300 hover:text-white'}`} onClick={() => setMobileNavOpen(false)}>{t('nav.industrial')}</a></li>
                <li><a href="#naval" className={`block transition duration-150 ease-in-out ${activeSection === 'naval' ? 'text-indigo-400' : 'text-gray-300 hover:text-white'}`} onClick={() => setMobileNavOpen(false)}>{t('nav.naval')}</a></li>
                <li><a href="#testimonios" className={`block transition duration-150 ease-in-out ${activeSection === 'testimonios' ? 'text-indigo-400' : 'text-gray-300 hover:text-white'}`} onClick={() => setMobileNavOpen(false)}>{t('nav.success')}</a></li>
                <li><a href="#contacto" className={`block transition duration-150 ease-in-out ${activeSection === 'contacto' ? 'text-indigo-400' : 'text-gray-300 hover:text-white'}`} onClick={() => setMobileNavOpen(false)}>{t('nav.contact')}</a></li>
                <li className="flex justify-center mt-4"><LanguageSelector /></li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
