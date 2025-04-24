"use client";

import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/language-context";

interface MaritimeData {
  location: string;
  waveHeight: string;
  windSpeed: string;
  waterTemp: string;
  visibility: string;
  currentDirection: string;
  tide: string;
  lastUpdated: string;
  date: string;
}

export default function MaritimeData() {
  const { locale } = useLanguage();
  
  // Referencia para almacenar los datos base que no cambian con el idioma
  const baseDataRef = useRef({
    location: "Tarragona",
    waveHeight: "1.2 m",
    windSpeedValue: "3",
    windDirection: "NO",
    waterTemp: "11°C",
    visibility: "24.1 km",
    currentSpeedValue: "1.0",
    currentDirection: "S",
    tideValue: "1.9m",
    tideDirection: "up", // 'up' o 'down'
    lastTime: "",
    lastDate: ""
  });
  
  // Configurar el formato de fecha y hora según el idioma
  const getLocaleFormat = () => {
    switch(locale) {
      case 'en': return 'en-US';
      case 'ca': return 'ca-ES';
      default: return 'es-ES';
    }
  };
  
  // Traducción de direcciones
  const getDirectionTranslation = (dir: string) => {
    switch(dir) {
      case "NO": return locale === "es" ? "NO" : locale === "en" ? "NW" : "NO";
      case "SO": return locale === "es" ? "SO" : locale === "en" ? "SW" : "SO";
      case "O": return locale === "es" ? "O" : locale === "en" ? "W" : "O";
      default: return dir; // N, NE, E, SE, S mantienen la misma abreviatura
    }
  };
  
  // Traducción de unidades
  const getKnotsTranslation = () => {
    return locale === "es" ? "nudos" : locale === "en" ? "knots" : "nusos";
  };
  
  // Traducción de mareas
  const getTideTranslation = (direction: string) => {
    if (direction === "up") {
      return locale === "es" ? "Subiendo" : locale === "en" ? "Rising" : "Pujant";
    } else {
      return locale === "es" ? "Bajando" : locale === "en" ? "Falling" : "Baixant";
    }
  };
  
  // Función para obtener los datos traducidos
  const getTranslatedData = () => {
    const now = new Date();
    
    // Solo actualizar la hora si no hay una hora guardada
    if (!baseDataRef.current.lastTime) {
      baseDataRef.current.lastTime = now.toLocaleTimeString(getLocaleFormat(), { hour: '2-digit', minute: '2-digit' });
      baseDataRef.current.lastDate = now.toLocaleDateString(getLocaleFormat(), { day: '2-digit', month: 'short', year: 'numeric' });
    }
    
    return {
      location: baseDataRef.current.location,
      waveHeight: baseDataRef.current.waveHeight,
      windSpeed: `${baseDataRef.current.windSpeedValue} ${getKnotsTranslation()} ${getDirectionTranslation(baseDataRef.current.windDirection)}`,
      waterTemp: baseDataRef.current.waterTemp,
      visibility: baseDataRef.current.visibility,
      currentDirection: `${baseDataRef.current.currentSpeedValue} ${getKnotsTranslation()} ${getDirectionTranslation(baseDataRef.current.currentDirection)}`,
      tide: `${getTideTranslation(baseDataRef.current.tideDirection)}(${baseDataRef.current.tideValue})`,
      lastUpdated: baseDataRef.current.lastTime,
      date: baseDataRef.current.lastDate
    };
  };
  
  const [data, setData] = useState<MaritimeData>(getTranslatedData());
  
  // Estado para controlar la animación de actualización
  const [isUpdating, setIsUpdating] = useState(false);
  
  // Referencia para el intervalo de actualización de datos
  const dataIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Función para generar datos aleatorios ligeramente diferentes
  const generateRandomData = () => {
    // Actualizar los datos base con valores aleatorios
    baseDataRef.current = {
      ...baseDataRef.current,
      waveHeight: ["1.0 m", "1.2 m", "1.3 m", "1.1 m", "0.9 m"][Math.floor(Math.random() * 5)],
      windSpeedValue: ["3", "4", "2", "3", "5"][Math.floor(Math.random() * 5)],
      windDirection: ["NO", "NO", "N", "N", "NE"][Math.floor(Math.random() * 5)],
      waterTemp: ["11°C", "11.5°C", "10.8°C", "11.2°C", "10.5°C"][Math.floor(Math.random() * 5)],
      visibility: ["24.1 km", "23.8 km", "24.5 km", "22.9 km", "25.0 km"][Math.floor(Math.random() * 5)],
      currentSpeedValue: ["1.0", "1.1", "0.9", "1.2", "0.8"][Math.floor(Math.random() * 5)],
      currentDirection: ["S", "S", "SE", "SO", "S"][Math.floor(Math.random() * 5)],
      tideValue: ["1.9m", "2.0m", "1.8m", "1.7m", "1.6m"][Math.floor(Math.random() * 5)],
      tideDirection: ["up", "up", "up", "down", "down"][Math.floor(Math.random() * 5)]
    };
    
    // Devolver los datos traducidos
    return {
      waveHeight: baseDataRef.current.waveHeight,
      windSpeed: `${baseDataRef.current.windSpeedValue} ${getKnotsTranslation()} ${getDirectionTranslation(baseDataRef.current.windDirection)}`,
      waterTemp: baseDataRef.current.waterTemp,
      visibility: baseDataRef.current.visibility,
      currentDirection: `${baseDataRef.current.currentSpeedValue} ${getKnotsTranslation()} ${getDirectionTranslation(baseDataRef.current.currentDirection)}`,
      tide: `${getTideTranslation(baseDataRef.current.tideDirection)}(${baseDataRef.current.tideValue})`,
    };
  };

  // Actualizar cuando cambia el idioma (solo traduce, no cambia los datos)
  useEffect(() => {
    // Actualizar solo las traducciones, manteniendo los mismos valores numéricos
    setData(getTranslatedData());
  }, [locale]);
  
  // Actualizar la hora cada minuto
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Actualizar la hora y fecha en baseDataRef
      baseDataRef.current.lastTime = now.toLocaleTimeString(getLocaleFormat(), { hour: '2-digit', minute: '2-digit' });
      baseDataRef.current.lastDate = now.toLocaleDateString(getLocaleFormat(), { day: '2-digit', month: 'short', year: 'numeric' });
      
      // Activar efecto de actualización
      setIsUpdating(true);
      
      // Actualizar datos con un ligero retraso para el efecto visual
      setTimeout(() => {
        const newRandomData = generateRandomData();
        setData(prevData => ({
          ...prevData,
          ...newRandomData,
          lastUpdated: baseDataRef.current.lastTime,
          date: baseDataRef.current.lastDate
        }));
        
        // Desactivar efecto de actualización
        setTimeout(() => setIsUpdating(false), 500);
      }, 300);
    };
    
    // Actualizar inmediatamente al cargar
    updateTime();
    
    // Configurar intervalo para actualizar cada minuto
    const timeInterval = setInterval(updateTime, 60000); // 1 minuto
    
    return () => {
      clearInterval(timeInterval);
      if (dataIntervalRef.current) clearInterval(dataIntervalRef.current);
    };
  }, []); // Eliminamos la dependencia de locale para que no se ejecute cuando cambia el idioma

  return (
    <div className="absolute top-0 left-0 right-0 z-30 bg-gray-800/40 backdrop-blur-sm border-b border-gray-600/20 overflow-x-auto transition-all duration-500 ease-in-out">
      <div className={`grid grid-rows-2 max-w-screen-2xl mx-auto px-2 transition-all duration-500 ${isUpdating ? 'opacity-70' : 'opacity-100'}`}>
        {/* Fila 1: Nombres */}
        <div className="grid grid-cols-7 gap-x-4 items-center justify-between py-0.1 border-b border-gray-600/50">
          <div className="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-anchor w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-cyan-300"><path d="M12 22V8"></path><path d="M5 12H2a10 10 0 0 0 20 0h-3"></path><circle cx="12" cy="5" r="3"></circle></svg>
            <span className="text-xs font-medium text-cyan-400">{data.location}</span>
          </div>

          <div className="text-center">
            <span className="text-xs text-cyan-400">
              {locale === "es" ? "Altura Olas" : 
               locale === "en" ? "Wave Height" : 
               "Alçada Ones"}
            </span>
          </div>
          
          <div className="text-center">
            <span className="text-xs text-cyan-400">
              {locale === "es" ? "Velocidad Viento" : 
               locale === "en" ? "Wind Speed" : 
               "Velocitat Vent"}
            </span>
          </div>
          
          <div className="text-center">
            <span className="text-xs text-cyan-400">
              {locale === "es" ? "Temperatura Agua" : 
               locale === "en" ? "Water Temp" : 
               "Temperatura Aigua"}
            </span>
          </div>
          
          <div className="text-center">
            <span className="text-xs text-cyan-400">
              {locale === "es" ? "Visibilidad" : 
               locale === "en" ? "Visibility" : 
               "Visibilitat"}
            </span>
          </div>
          
          <div className="text-center">
            <span className="text-xs text-cyan-400">
              {locale === "es" ? "Dirección de Corriente" : 
               locale === "en" ? "Current Direction" : 
               "Direcció de Corrent"}
            </span>
          </div>
          
          <div className="text-center">
            <span className="text-xs text-cyan-400">
              {locale === "es" ? "Marea" : 
               locale === "en" ? "Tide" : 
               "Marea"}
            </span>
          </div>
        </div>
        
        {/* Fila 2: Datos */}
        <div className="grid grid-cols-7 gap-x-4 items-center justify-between py-0.5">
          <div className="flex items-center gap-3">
            <svg className="h-4 w-4 text-cyan-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            <div className="flex flex-col">
              <span className={`text-xs text-cyan-400 transition-all duration-500 ${isUpdating ? 'transform -translate-y-1 opacity-0' : 'transform translate-y-0 opacity-100'}`}>{data.lastUpdated}</span>
              <span className="text-[10px] text-cyan-300/70">{data.date}</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-waves w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1 sm:mr-2 text-cyan-300"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path></svg>
            <span className="text-xs text-white">{data.waveHeight}</span>
          </div>
          
          <div className="flex items-center justify-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wind w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1 sm:mr-2 text-cyan-300"><path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"></path><path d="M9.6 4.6A2 2 0 1 1 11 8H2"></path><path d="M12.6 19.4A2 2 0 1 0 14 16H2"></path></svg>
            <span className="text-xs text-white">{data.windSpeed}</span>
          </div>
          
          <div className="flex items-center justify-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-thermometer w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1 sm:mr-2 text-cyan-300"><path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"></path></svg>
            <span className="text-xs text-white">{data.waterTemp}</span>
          </div>
          
          <div className="flex items-center justify-center gap-1">
            <svg className="h-4 w-4 text-cyan-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            <span className="text-xs text-white">{data.visibility}</span>
          </div>
          
          <div className="flex items-center justify-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-navigation w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1 sm:mr-2 text-cyan-300"><polygon points="3 11 22 2 13 21 11 13 3 11"></polygon></svg>
            <span className="text-xs text-white">{data.currentDirection}</span>
          </div>
          
          <div className="flex items-center justify-center gap-1">
            <svg className="h-4 w-4 text-cyan-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            <span className="text-xs text-white">{data.tide}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
