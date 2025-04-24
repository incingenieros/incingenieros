"use client";

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/language-context';

interface LanguageOption {
  code: string;
  name: string;
  flag: string;
}

export default function LanguageSelector() {
  const { locale, setLocale, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages: LanguageOption[] = [
    { code: 'es', name: 'Español', flag: '/images/flags/es.svg' },
    { code: 'en', name: 'Inglés', flag: '/images/flags/en.svg' },
    { code: 'ca', name: 'Catalán', flag: '/images/flags/ca.svg' }
  ];

  const currentFlag = languages.find(lang => lang.code === locale)?.flag || languages[0].flag;

  const changeLanguage = (language: string) => {
    setLocale(language as 'es' | 'en' | 'ca');
    setIsOpen(false);
  };

  // Cerrar el menú cuando se hace clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center h-8 w-8 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-150"
        aria-label="Seleccionar idioma"
      >
        <Image 
          src={currentFlag} 
          alt={locale} 
          width={16} 
          height={16} 
          className="rounded-full" 
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5 z-50">
          <div className="py-1" role="menu" aria-orientation="vertical">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => changeLanguage(language.code)}
                className={`flex items-center px-4 py-2 text-sm w-full text-left ${
                  locale === language.code ? 'bg-gray-700 text-indigo-400' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
                role="menuitem"
              >
                <Image 
                  src={language.flag} 
                  alt={language.code} 
                  width={16} 
                  height={16} 
                  className="mr-3 rounded-full" 
                />
                <span>{language.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}