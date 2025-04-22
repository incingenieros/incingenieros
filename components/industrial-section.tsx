"use client";

import { useState } from 'react';
import Image from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg";

interface TabItem {
  id: string;
  title: string;
  content: string;
  stats: { label: string; value: string }[];
  icon: React.ReactNode;
  image: string;
}

export default function IndustrialSection() {
  const [activeTab, setActiveTab] = useState<string>('diseno');
  
  const tabs: TabItem[] = [
    {
      id: 'diseno',
      title: 'Diseño Estructural',
      content: 'Desarrollo de proyectos de diseño estructural con cálculos avanzados utilizando software especializado y métodos de elementos finitos para garantizar la integridad estructural. Aplicación de normativas internacionales y optimización de materiales para lograr estructuras eficientes y seguras.',
      stats: [
        { label: 'Proyectos completados', value: '45+' },
        { label: 'Toneladas diseñadas', value: '12,000+' },
        { label: 'Software utilizados', value: '8' },
        { label: 'Años de experiencia', value: '20+' }
      ],
      image: '/images/offshore/09-estructural-fpso.jpg',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 8c-1.45 0-2.26 1.44-1.93 2.51l-3.55 3.56c-.3-.09-.74-.09-1.04 0l-2.55-2.55C12.27 10.45 11.46 9 10 9c-1.45 0-2.27 1.44-1.93 2.52l-4.56 4.55C2.44 15.74 1 16.55 1 18c0 1.1.9 2 2 2 1.45 0 2.26-1.44 1.93-2.51l4.55-4.56c.3.09.74.09 1.04 0l2.55 2.55C12.73 16.55 13.54 18 15 18c1.45 0 2.27-1.44 1.93-2.52l3.56-3.55c1.07.33 2.51-.48 2.51-1.93 0-1.1-.9-2-2-2z" />
        </svg>
      )
    },
    {
      id: 'procesos',
      title: 'Procesos Constructivos',
      content: 'Optimización de procesos constructivos en astilleros y plantas industriales, con énfasis en la secuencia de fabricación, montaje y control de calidad. Implementación de metodologías Lean Manufacturing y mejora continua para reducir tiempos y costos de producción.',
      stats: [
        { label: 'Procesos optimizados', value: '75+' },
        { label: 'Reducción de tiempos', value: '35%' },
        { label: 'Aumento productividad', value: '28%' },
        { label: 'Plantas industriales', value: '12' }
      ],
      image: '/images/offshore/10-astillero-buques.jpg',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" />
        </svg>
      )
    },
    {
      id: 'produccion',
      title: 'Optimización de Producción',
      content: 'Análisis y mejora de líneas de producción para componentes marítimos y estructuras metálicas de gran porte. Implementación de sistemas de control de producción, gestión de inventarios y planificación avanzada para maximizar la eficiencia operativa y reducir costos.',
      stats: [
        { label: 'Líneas optimizadas', value: '30+' },
        { label: 'Ahorro de costes', value: '22%' },
        { label: 'Reducción de defectos', value: '40%' },
        { label: 'ROI promedio', value: '3.2x' }
      ],
      image: '/images/offshore/11-optimizacion-produccion.jpg',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7zm-4 6h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z" />
        </svg>
      )
    },
    {
      id: 'calidad',
      title: 'Control de Calidad',
      content: 'Implementación de sistemas de control de calidad en procesos de fabricación industrial, con especial atención a soldadura, tratamientos superficiales y ensayos no destructivos. Desarrollo de procedimientos de inspección y certificación según normativas internacionales.',
      stats: [
        { label: 'Sistemas implementados', value: '25+' },
        { label: 'Procedimientos creados', value: '120+' },
        { label: 'Reducción de no conformidades', value: '65%' },
        { label: 'Certificaciones obtenidas', value: '40+' }
      ],
      image: '/images/offshore/12-control-calidad-2.jpg',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.77 4.93l1.4 1.4L8.43 19.07l-5.6-5.6 1.4-1.4 4.2 4.2L19.77 4.93m0-2.83L8.43 13.44l-4.2-4.2L0 13.47l8.43 8.43L24 6.33 19.77 2.1z" />
        </svg>
      )
    }
  ];

  const activeTabData = tabs.find(tab => tab.id === activeTab) || tabs[0];

  return (
    <section id="industrial" className="relative scroll-mt-24">
      <div
        className="pointer-events-none absolute bottom-0 right-0 -z-10 -mb-20 opacity-60"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-8 text-center md:pb-12">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Experiencia Industrial
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Fabricación y Procesos Industriales
            </h2>
            <p className="text-lg text-indigo-200/65">
              Experiencia especializada en procesos constructivos, diseño de estructuras y optimización de la producción en astilleros y plantas industriales que fabrican componentes marítimos o estructuras metálicas de gran porte.
            </p>
          </div>

          {/* Interactive tabs section */}
          <div className="mx-auto max-w-5xl">
            {/* Tab navigation */}
            <div className="mb-8 flex flex-wrap justify-center gap-2 sm:gap-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 sm:text-base ${
                    activeTab === tab.id
                      ? 'bg-indigo-600/20 text-indigo-300 shadow-[0_0_10px_rgba(99,102,241,0.3)]'
                      : 'bg-gray-800/50 text-indigo-200/65 hover:bg-indigo-600/10 hover:text-indigo-200'
                  }`}
                >
                  <span className="fill-current">{tab.icon}</span>
                  {tab.title}
                </button>
              ))}
            </div>

            {/* Active tab content */}
            <div 
              className="rounded-2xl bg-gray-800/50 p-6 transition-all duration-500 sm:p-8 overflow-hidden"
              style={{
                boxShadow: '0 0 25px rgba(99,102,241,0.15)'
              }}
            >
              {/* Image with hover effect */}
              <div className="relative w-full h-64 mb-8 overflow-hidden rounded-lg group">
                <Image
                  src={activeTabData.image}
                  alt={activeTabData.title}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-2xl font-nacelle font-semibold text-white mb-2">{activeTabData.title}</h3>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-600/80 text-white text-sm">
                      <span className="fill-current">{activeTabData.icon}</span>
                      <span>Especialidad Industrial</span>
                    </div>
                  </div>
                </div>
                
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-indigo-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 text-center p-4 bg-gray-900/80 rounded-lg max-w-xs">
                    <p className="text-white text-sm">
                      {activeTabData.content.split('.')[0]}.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid gap-8 md:grid-cols-5">
                {/* Content column */}
                <div className="md:col-span-3">
                  <h3 className="mb-4 font-nacelle text-xl font-semibold text-gray-200">
                    {activeTabData.title}
                  </h3>
                  <p className="mb-6 text-indigo-200/65">
                    {activeTabData.content}
                  </p>
                  
                  {/* Key capabilities list */}
                  <div className="mb-6">
                    <h4 className="mb-3 font-medium text-indigo-300">Capacidades clave:</h4>
                    <ul className="grid gap-2 sm:grid-cols-2">
                      {activeTab === 'diseno' && (
                        <>
                          <li className="flex items-center text-indigo-200/65">
                            <svg className="mr-2 h-4 w-4 fill-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>
                            Cálculo estructural avanzado
                          </li>
                          <li className="flex items-center text-indigo-200/65">
                            <svg className="mr-2 h-4 w-4 fill-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>
                            Análisis por elementos finitos
                          </li>
                          <li className="flex items-center text-indigo-200/65">
                            <svg className="mr-2 h-4 w-4 fill-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>
                            Diseño de estructuras metálicas
                          </li>
                          <li className="flex items-center text-indigo-200/65">
                            <svg className="mr-2 h-4 w-4 fill-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>
                            Optimización de materiales
                          </li>
                        </>
                      )}
                      
                      {activeTab === 'procesos' && (
                        <>
                          <li className="flex items-center text-indigo-200/65">
                            <svg className="mr-2 h-4 w-4 fill-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>
                            Secuenciación de fabricación
                          </li>
                          <li className="flex items-center text-indigo-200/65">
                            <svg className="mr-2 h-4 w-4 fill-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>
                            Lean Manufacturing
                          </li>
                          <li className="flex items-center text-indigo-200/65">
                            <svg className="mr-2 h-4 w-4 fill-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>
                            Planificación de producción
                          </li>
                          <li className="flex items-center text-indigo-200/65">
                            <svg className="mr-2 h-4 w-4 fill-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>
                            Mejora continua
                          </li>
                        </>
                      )}
                      
                      {activeTab === 'produccion' && (
                        <>
                          <li className="flex items-center text-indigo-200/65">
                            <svg className="mr-2 h-4 w-4 fill-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>
                            Análisis de líneas de producción
                          </li>
                          <li className="flex items-center text-indigo-200/65">
                            <svg className="mr-2 h-4 w-4 fill-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>
                            Gestión de inventarios
                          </li>
                          <li className="flex items-center text-indigo-200/65">
                            <svg className="mr-2 h-4 w-4 fill-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>
                            Planificación avanzada
                          </li>
                          <li className="flex items-center text-indigo-200/65">
                            <svg className="mr-2 h-4 w-4 fill-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>
                            Reducción de costos operativos
                          </li>
                        </>
                      )}
                      
                      {activeTab === 'calidad' && (
                        <>
                          <li className="flex items-center text-indigo-200/65">
                            <svg className="mr-2 h-4 w-4 fill-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>
                            Sistemas de control de calidad
                          </li>
                          <li className="flex items-center text-indigo-200/65">
                            <svg className="mr-2 h-4 w-4 fill-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>
                            Ensayos no destructivos
                          </li>
                          <li className="flex items-center text-indigo-200/65">
                            <svg className="mr-2 h-4 w-4 fill-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>
                            Procedimientos de inspección
                          </li>
                          <li className="flex items-center text-indigo-200/65">
                            <svg className="mr-2 h-4 w-4 fill-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>
                            Certificación según normativas
                          </li>
                        </>
                      )}
                    </ul>
                  </div>
                </div>
                
                {/* Stats column */}
                <div className="md:col-span-2">
                  <div className="grid grid-cols-2 gap-4">
                    {activeTabData.stats.map((stat, index) => (
                      <div 
                        key={index} 
                        className="rounded-lg bg-gray-900/50 p-4 text-center"
                        style={{
                          boxShadow: '0 0 15px rgba(99,102,241,0.1)'
                        }}
                      >
                        <p className="text-xl font-semibold text-indigo-300">{stat.value}</p>
                        <p className="text-xs text-indigo-200/65">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                  
                  {/* Call to action */}
                  <div className="mt-6 rounded-lg bg-indigo-600/10 p-4 text-center">
                    <p className="mb-2 text-sm text-indigo-200/80">
                      ¿Necesita mejorar sus procesos industriales?
                    </p>
                    <button className="inline-flex items-center justify-center rounded-md bg-indigo-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                      Solicitar consulta
                      <svg className="ml-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
