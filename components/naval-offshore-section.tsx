"use client";

import { useState, useRef, useEffect } from 'react';
import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";

// Project type definition
interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  challenges: string[];
  solutions: string[];
  results: string[];
  image: string;
}

export default function NavalOffshoreSection() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);
  
  // Categories
  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'vessels', name: 'Buques y Embarcaciones' },
    { id: 'structures', name: 'Estructuras Marítimas' },
    { id: 'platforms', name: 'Plataformas Offshore' },
    { id: 'operations', name: 'Operaciones Marítimas' }
  ];
  
  // Generate a gradient background based on project category
  const getCategoryGradient = (category: string) => {
    switch(category) {
      case 'vessels':
        return 'bg-gradient-to-br from-blue-900 via-blue-700 to-indigo-800';
      case 'structures':
        return 'bg-gradient-to-br from-indigo-900 via-indigo-700 to-purple-800';
      case 'platforms':
        return 'bg-gradient-to-br from-purple-900 via-purple-700 to-indigo-800';
      case 'operations':
        return 'bg-gradient-to-br from-cyan-900 via-blue-800 to-indigo-900';
      default:
        return 'bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900';
    }
  };
  
  // Get icon for project category
  const getCategoryIcon = (category: string) => {
    switch(category) {
      case 'vessels':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 opacity-80" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 21c-1.39 0-2.78-.47-4-1.32-2.44 1.71-5.56 1.71-8 0C6.78 20.53 5.39 21 4 21H2v2h2c1.38 0 2.74-.35 4-.99 2.52 1.29 5.48 1.29 8 0 1.26.65 2.62.99 4 .99h2v-2h-2zM3.95 19H4c1.6 0 3.02-.88 4-2 .98 1.12 2.4 2 4 2s3.02-.88 4-2c.98 1.12 2.4 2 4 2h.05l1.89-6.68c.08-.26.06-.54-.06-.78s-.34-.42-.6-.5L20 10.62V6c0-1.1-.9-2-2-2h-3V1H9v3H6c-1.1 0-2 .9-2 2v4.62l-1.29.42c-.26.08-.48.26-.6.5s-.15.52-.06.78L3.95 19zM6 6h12v3.97L12 8 6 9.97V6z" />
          </svg>
        );
      case 'structures':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 opacity-80" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22 21H2V3h2v12.54L9.5 6 16 9.78l4-2.47V3h2v18zM20 15.54L16 18l-6.5-3.79-4.92 6.78H20v-5.45z" />
          </svg>
        );
      case 'platforms':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 opacity-80" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18 4h2v16h-2v-7h-3v7h-2V4h2v7h3V4zm-9 4H7v12H5V8H3V6h8v2z" />
          </svg>
        );
      case 'operations':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 opacity-80" viewBox="0 0 24 24" fill="currentColor">
            <path d="M15 5.1L9 3 3 5.02v16.2l6-2.33 6 2.1 6-2.02V2.77L15 5.1zm0 13.79l-6-2.11V5.11l6 2.11v11.67z" />
          </svg>
        );
      default:
        return null;
    }
  };
  
  // Sample projects data
  const projects: Project[] = [
    {
      id: 'project1',
      title: 'Diseño de Buque Multipropósito',
      category: 'vessels',
      description: 'Diseño integral y cálculo estructural de un buque multipropósito de 85 metros para operaciones de apoyo logístico en condiciones extremas del Atlántico Sur.',
      challenges: [
        'Requisitos de operación en condiciones meteorológicas severas',
        'Necesidad de versatilidad para múltiples tipos de carga',
        'Cumplimiento de normativas internacionales estrictas',
        'Optimización de consumo energético'
      ],
      solutions: [
        'Diseño hidrodinámico avanzado para mejorar comportamiento en mala mar',
        'Sistemas modulares de carga para adaptación rápida a diferentes misiones',
        'Implementación de análisis por elementos finitos para validación estructural',
        'Sistemas de propulsión híbridos para reducción de consumo'
      ],
      results: [
        'Reducción del 22% en consumo de combustible',
        'Capacidad operativa en condiciones de hasta estado de mar 7',
        'Certificación completa por sociedad de clasificación internacional',
        'Versatilidad para 5 configuraciones diferentes de carga'
      ],
      image: '/images/offshore/01-buque-multiproposito.jpg'
    },
    {
      id: 'project2',
      title: 'Análisis Estructural de Muelle Offshore',
      category: 'structures',
      description: 'Evaluación y refuerzo estructural de un muelle offshore para operaciones de carga/descarga en condiciones de oleaje moderado, con optimización de la vida útil de la estructura.',
      challenges: [
        'Estructura existente con signos de fatiga y corrosión',
        'Necesidad de mantener operaciones durante la intervención',
        'Exposición a ambiente marino altamente corrosivo',
        'Requisitos de carga incrementados respecto al diseño original'
      ],
      solutions: [
        'Modelado 3D completo de la estructura existente',
        'Análisis de fatiga y vida residual de componentes críticos',
        'Diseño de refuerzos estructurales instalables sin interrumpir operaciones',
        'Sistema de protección catódica avanzado para extender vida útil'
      ],
      results: [
        'Extensión de vida útil por 25 años adicionales',
        'Incremento de capacidad de carga en un 35%',
        'Reducción de mantenimiento anual en un 40%',
        'Cero días de interrupción de operaciones durante implementación'
      ],
      image: '/images/offshore/02-muelle-offshore.jpg'
    },
    {
      id: 'project3',
      title: 'Optimización de Plataforma Semisumergible',
      category: 'platforms',
      description: 'Rediseño y optimización de una plataforma semisumergible para operaciones de perforación en aguas profundas, con mejoras en estabilidad y comportamiento dinámico.',
      challenges: [
        'Operación en profundidades de hasta 2,500 metros',
        'Condiciones ambientales extremas en zona de huracanes',
        'Requisitos estrictos de estabilidad y movimientos',
        'Necesidad de minimizar peso manteniendo integridad estructural'
      ],
      solutions: [
        'Rediseño de pontones y columnas para mejorar comportamiento hidrodinámico',
        'Análisis avanzado de interacción fluido-estructura',
        'Optimización topológica para reducción de peso en componentes críticos',
        'Implementación de sistema de lastre activo para control de estabilidad'
      ],
      results: [
        'Reducción de movimientos verticales en un 28%',
        'Disminución de peso estructural en un 15%',
        'Mejora de capacidad operativa en condiciones extremas',
        'Extensión de ventana operativa en un 35% anual'
      ],
      image: '/images/offshore/03-plataforma-offshore.jpg'
    },
    {
      id: 'project4',
      title: 'Sistema de Fondeo para Operaciones en Aguas Profundas',
      category: 'operations',
      description: 'Diseño y análisis de un sistema de fondeo innovador para operaciones de instalación de equipos submarinos en aguas profundas con corrientes intensas.',
      challenges: [
        'Profundidades de operación de hasta 1,800 metros',
        'Corrientes submarinas de hasta 2.5 nudos',
        'Requisito de precisión de posicionamiento submétrica',
        'Condiciones meteorológicas variables y severas'
      ],
      solutions: [
        'Diseño de sistema híbrido de posicionamiento dinámico y fondeo',
        'Modelado numérico avanzado de comportamiento de líneas en corrientes',
        'Desarrollo de algoritmos predictivos para compensación de movimientos',
        'Implementación de sensores de tensión y posición en tiempo real'
      ],
      results: [
        'Precisión de posicionamiento de ±0.5 metros',
        'Operatividad en corrientes de hasta 3.2 nudos',
        'Reducción de tiempo de instalación en un 40%',
        'Minimización de riesgos operacionales'
      ],
      image: '/images/offshore/04-aguas-profundas.jpg'
    },
    {
      id: 'project5',
      title: 'Conversión de Buque Tanque a FPSO',
      category: 'vessels',
      description: 'Proyecto de conversión de un buque tanque convencional a una unidad FPSO (Floating Production, Storage and Offloading) para operaciones de producción petrolífera offshore.',
      challenges: [
        'Estructura existente no diseñada para producción estacionaria',
        'Necesidad de integrar módulos de proceso de gran peso',
        'Requisitos de estancia en posición por 25 años',
        'Condiciones ambientales severas en ubicación final'
      ],
      solutions: [
        'Análisis estructural completo y refuerzo de zonas críticas',
        'Diseño de estructuras de soporte para módulos de proceso',
        'Implementación de sistema de torreta para fondeo permanente',
        'Modificación de sistemas para operación continua de larga duración'
      ],
      results: [
        'Conversión exitosa completada en 18 meses',
        'Capacidad de producción de 120,000 barriles diarios',
        'Certificación para operación estacionaria por 25 años',
        'Resistencia a condiciones de tormenta centenaria'
      ],
      image: '/images/offshore/05-buque-fpso.jpg'
    },
    {
      id: 'project6',
      title: 'Diseño de Estructura Jacket para Parque Eólico',
      category: 'structures',
      description: 'Diseño y análisis de estructuras tipo jacket para soportar aerogeneradores offshore de 8MW en un parque eólico marino con profundidades variables.',
      challenges: [
        'Profundidades de agua entre 35 y 50 metros',
        'Cargas dinámicas combinadas de viento, olas y operación de turbinas',
        'Suelos marinos de características variables',
        'Requisito de vida útil de 30 años con mínimo mantenimiento'
      ],
      solutions: [
        'Diseño paramétrico adaptable a diferentes profundidades',
        'Análisis dinámico acoplado de interacción estructura-turbina',
        'Optimización de configuración de pilotes según características del suelo',
        'Sistema de protección contra corrosión de larga duración'
      ],
      results: [
        'Reducción de material estructural en un 18% respecto a diseños convencionales',
        'Frecuencias naturales optimizadas para evitar resonancias',
        'Procedimientos de instalación simplificados',
        'Certificación completa para condiciones extremas del Mar del Norte'
      ],
      image: '/images/offshore/06-jacket-eolico.jpg'
    },
    {
      id: 'project7',
      title: 'Plataforma Autoelevable para Energías Renovables',
      category: 'platforms',
      description: 'Diseño de una plataforma autoelevable especializada para instalación de aerogeneradores offshore, con capacidad para operar en profundidades variables y condiciones adversas.',
      challenges: [
        'Capacidad de elevación para componentes de gran peso (hasta 1,200 toneladas)',
        'Operación en profundidades de 15 a 60 metros',
        'Estabilidad durante operaciones de precisión',
        'Movilidad y posicionamiento en diferentes condiciones de mar'
      ],
      solutions: [
        'Sistema de patas reforzadas con penetración variable',
        'Grúa principal con compensación activa de movimientos',
        'Diseño de casco optimizado para navegación y estabilidad',
        'Sistemas avanzados de posicionamiento y nivelación'
      ],
      results: [
        'Capacidad de instalación de turbinas de hasta 12MW',
        'Operatividad en condiciones de hasta estado de mar 4',
        'Tiempo de despliegue reducido en un 30%',
        'Versatilidad para diferentes tipos de fundaciones'
      ],
      image: '/images/offshore/07--plataforma-autoelevable.jpg'
    },
    {
      id: 'project8',
      title: 'Operaciones de Instalación Submarina',
      category: 'operations',
      description: 'Planificación y dirección técnica de operaciones de instalación de equipos submarinos para un campo de producción petrolífera en aguas profundas.',
      challenges: [
        'Profundidad de agua de 1,500 metros',
        'Ventana meteorológica limitada',
        'Coordinación de múltiples embarcaciones y equipos',
        'Instalación de precisión de equipos de gran tamaño'
      ],
      solutions: [
        'Desarrollo de procedimientos detallados de instalación',
        'Análisis dinámico de operaciones críticas',
        'Implementación de sistema de monitoreo en tiempo real',
        'Planificación contingente para diferentes escenarios'
      ],
      results: [
        'Instalación completada en tiempo récord (15% menos del planificado)',
        'Cero incidentes de seguridad',
        'Precisión de posicionamiento dentro de tolerancias',
        'Minimización de tiempo de embarcaciones especializadas'
      ],
      image: '/images/offshore/08-exploracion-submarina.jpg'
    }
  ];
  
  // Filter projects based on active category
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);
  
  // Handle click outside modal to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setIsModalOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  // Handle escape key to close modal
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsModalOpen(false);
      }
    };
    
    document.addEventListener('keydown', handleEscKey);
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, []);
  
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);
  
  return (
    <section id="naval" className="relative scroll-mt-24">
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShapeGray}
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
                Especialidad Naval y Offshore
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Ingeniería Naval y Tecnología Offshore
            </h2>
            <p className="text-lg text-indigo-200/65">
              Experiencia especializada en diseño y cálculo de buques, estructuras marítimas, plataformas offshore y operaciones en ambientes oceánicos exigentes. Soluciones técnicas avanzadas para los desafíos más complejos del sector marítimo.
            </p>
          </div>
          
          {/* Category filter */}
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-indigo-600/20 text-indigo-300 shadow-[0_0_10px_rgba(99,102,241,0.3)]'
                    : 'bg-gray-800/50 text-indigo-200/65 hover:bg-indigo-600/10 hover:text-indigo-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {/* Projects grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-xl bg-gray-800/50 transition-all duration-300 hover:bg-indigo-600/20 hover:shadow-[0_0_15px_rgba(99,102,241,0.3)]"
                onClick={() => {
                  setSelectedProject(project);
                  setIsModalOpen(true);
                }}
              >
                <div className="aspect-[4/3] w-full overflow-hidden relative group">
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    width={400}
                    height={300}
                    className="object-cover w-full h-full transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                    <span className="text-white font-medium text-sm">
                      Ver detalles del proyecto
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="mb-1 font-nacelle text-lg font-semibold text-gray-200 transition-colors group-hover:text-indigo-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-indigo-200/65 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="inline-block rounded-full bg-indigo-600/10 px-3 py-1 text-xs font-medium text-indigo-300">
                      {categories.find(c => c.id === project.category)?.name}
                    </span>
                    <button className="flex items-center text-xs text-indigo-300 transition-colors group-hover:text-indigo-200">
                      Ver detalles
                      <svg className="ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                {/* Hover effect */}
                <div className="absolute inset-0 border border-transparent transition-all duration-500 group-hover:border-indigo-500/30"></div>
              </div>
            ))}
          </div>
          
          {/* Project details modal */}
          {isModalOpen && selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/80 p-4">
              <div 
                ref={modalRef}
                className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-xl bg-gray-800 p-6 shadow-[0_0_30px_rgba(99,102,241,0.3)] sm:p-8"
              >
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="font-nacelle text-xl font-semibold text-gray-200 sm:text-2xl">
                    {selectedProject.title}
                  </h3>
                  <button 
                    onClick={() => setIsModalOpen(false)}
                    className="rounded-full bg-gray-700/50 p-2 text-indigo-200/65 transition-colors hover:bg-indigo-600/20 hover:text-indigo-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="mb-6 aspect-video w-full overflow-hidden rounded-lg relative">
                  <Image 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    width={800}
                    height={450}
                    className="object-cover w-full h-full transition-all duration-700 hover:scale-105"
                  />
                  <div className="absolute top-0 right-0 bg-indigo-600/80 text-white text-xs px-3 py-1 rounded-bl-lg">
                    {categories.find(c => c.id === selectedProject.category)?.name}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="mb-2 font-medium text-indigo-300">Descripción del Proyecto</h4>
                  <p className="text-indigo-200/65">
                    {selectedProject.description}
                  </p>
                </div>
                
                <div className="grid gap-6 md:grid-cols-3">
                  <div>
                    <h4 className="mb-2 font-medium text-indigo-300">Desafíos</h4>
                    <ul className="space-y-2">
                      {selectedProject.challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start text-sm text-indigo-200/65">
                          <svg className="mr-2 mt-1 h-3 w-3 flex-shrink-0 fill-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                          </svg>
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="mb-2 font-medium text-indigo-300">Soluciones</h4>
                    <ul className="space-y-2">
                      {selectedProject.solutions.map((solution, index) => (
                        <li key={index} className="flex items-start text-sm text-indigo-200/65">
                          <svg className="mr-2 mt-1 h-3 w-3 flex-shrink-0 fill-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                          </svg>
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="mb-2 font-medium text-indigo-300">Resultados</h4>
                    <ul className="space-y-2">
                      {selectedProject.results.map((result, index) => (
                        <li key={index} className="flex items-start text-sm text-indigo-200/65">
                          <svg className="mr-2 mt-1 h-3 w-3 flex-shrink-0 fill-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                          </svg>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <button 
                    onClick={() => setIsModalOpen(false)}
                    className="inline-flex items-center justify-center rounded-md bg-indigo-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Cerrar detalles
                  </button>
                </div>
              </div>
            </div>
          )}
          
          {/* Call to action */}
          <div className="mt-12 text-center">
            <p className="mb-4 text-indigo-200/65">
              ¿Necesita soluciones especializadas para su proyecto marítimo o offshore?
            </p>
            <button className="inline-flex items-center justify-center rounded-md bg-indigo-500 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              Solicitar consulta técnica
              <svg className="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
