"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

type Locale = 'es' | 'en' | 'ca';

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const defaultLocale: Locale = 'es';

const LanguageContext = createContext<LanguageContextType>({
  locale: defaultLocale,
  setLocale: () => {},
  t: () => ''
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocale] = useState<Locale>(defaultLocale);
  const [translations, setTranslations] = useState<Record<string, any>>({});

  // Cargar las traducciones cuando cambia el idioma
  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const response = await fetch(`/locales/${locale}/translations.json`);
        if (!response.ok) {
          console.warn(`No se pudo cargar el archivo de traducciones para ${locale}. Usando valores predeterminados.`);
          return;
        }
        const data = await response.json();
        setTranslations(data);
        
        // Guardar la preferencia de idioma en localStorage
        localStorage.setItem('language', locale);
        
        // Actualizar el atributo lang del HTML
        document.documentElement.lang = locale;
      } catch (error) {
        console.error('Error loading translations:', error);
        // No interrumpir la aplicación si hay un error al cargar traducciones
      }
    };

    loadTranslations();
  }, [locale]);

  // Cargar la preferencia de idioma guardada al iniciar
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Locale;
    if (savedLanguage && ['es', 'en', 'ca'].includes(savedLanguage)) {
      setLocale(savedLanguage);
    }
  }, []);

  // Función para obtener traducciones
  const t = (key: string) => {
    const keys = key.split('.');
    let result: any = translations;
    
    for (const k of keys) {
      if (result && result[k]) {
        result = result[k];
      } else {
        return key; // Devolver la clave si no se encuentra la traducción
      }
    }
    
    // Si el resultado es un string con placeholders como {year}, reemplazarlos
    if (typeof result === 'string') {
      return result.replace(/{(\w+)}/g, (match: string, placeholder: string) => {
        if (placeholder === 'year') {
          return new Date().getFullYear().toString();
        }
        return match;
      });
    }
    
    return typeof result === 'string' ? result : key;
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
