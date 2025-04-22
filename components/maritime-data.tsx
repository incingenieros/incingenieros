"use client";

import { useState, useEffect } from "react";

interface MaritimeData {
  location: string;
  waveHeight: string;
  windSpeed: string;
  waterTemp: string;
  visibility: string;
  currentDirection: string;
  tide: string;
  lastUpdated: string;
}

export default function MaritimeData() {
  const [data, setData] = useState<MaritimeData>({
    location: "Tarragona",
    waveHeight: "1.2 m",
    windSpeed: "3 nudos NO",
    waterTemp: "11°C",
    visibility: "24.1 km",
    currentDirection: "1.0 nudos S",
    tide: "Subiendo(1.9m)",
    lastUpdated: new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' }) + " a.m."
  });

  // En una implementación real, aquí se haría una llamada a una API
  // para obtener datos marítimos en tiempo real
  useEffect(() => {
    // Simulamos actualización de datos cada 5 minutos
    const interval = setInterval(() => {
      // En una implementación real, aquí se actualizarían los datos desde la API
      setData(prevData => ({
        ...prevData,
        lastUpdated: new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' }) + 
          (new Date().getHours() < 12 ? " a.m." : " p.m.")
      }));
    }, 300000); // 5 minutos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute top-0 left-0 right-0 z-30 bg-gray-800/40 backdrop-blur-sm border-b border-gray-600/20 overflow-x-auto">
      <div className="grid grid-rows-2 max-w-screen-2xl mx-auto px-2">
        {/* Fila 1: Nombres */}
        <div className="grid grid-cols-7 gap-x-4 items-center justify-between py-0.1 border-b border-gray-600/50">
          <div className="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-anchor w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-cyan-300"><path d="M12 22V8"></path><path d="M5 12H2a10 10 0 0 0 20 0h-3"></path><circle cx="12" cy="5" r="3"></circle></svg>
            <span className="text-xs font-medium text-cyan-400">{data.location}</span>
          </div>

          <div className="text-center">
            <span className="text-xs text-cyan-400">Altura Olas</span>
          </div>
          
          <div className="text-center">
            <span className="text-xs text-cyan-400">Velocidad Viento</span>
          </div>
          
          <div className="text-center">
            <span className="text-xs text-cyan-400">Temperatura Agua</span>
          </div>
          
          <div className="text-center">
            <span className="text-xs text-cyan-400">Visibilidad</span>
          </div>
          
          <div className="text-center">
            <span className="text-xs text-cyan-400">Dirección de Corriente</span>
          </div>
          
          <div className="text-center">
            <span className="text-xs text-cyan-400">Marea</span>
          </div>
        </div>
        
        {/* Fila 2: Datos */}
        <div className="grid grid-cols-7 gap-x-4 items-center justify-between py-0.5">
          <div className="flex items-center gap-3">
            <svg className="h-4 w-4 text-cyan-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            <span className="text-xs text-cyan-400">{data.lastUpdated}</span>
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
