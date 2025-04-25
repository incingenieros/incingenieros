"use client";

import { useState } from 'react';
import Image from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg";
import { useLanguage } from "@/contexts/language-context";

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
  const { locale } = useLanguage();
  
  const getDisenoCarta = (): TabItem => {
    if (locale === "en") {
      return {
        id: 'diseno',
        title: 'Structural Design',
        content: 'Development of structural design projects with advanced calculations using specialized software and finite element methods to ensure structural integrity. Application of international standards and material optimization to achieve efficient and safe structures.',
        stats: [
          { label: 'Completed projects', value: '45+' },
          { label: 'Designed tonnage', value: '12,000+' },
          { label: 'Software used', value: '8' },
          { label: 'Years of experience', value: '20+' }
        ],
        image: '/images/offshore/09-estructural-fpso.jpg',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21 8c-1.45 0-2.26 1.44-1.93 2.51l-3.55 3.56c-.3-.09-.74-.09-1.04 0l-2.55-2.55C12.27 10.45 11.46 9 10 9c-1.45 0-2.27 1.44-1.93 2.52l-4.56 4.55C2.44 15.74 1 16.55 1 18c0 1.1.9 2 2 2 1.45 0 2.26-1.44 1.93-2.51l4.55-4.56c.3.09.74.09 1.04 0l2.55 2.55C12.73 16.55 13.54 18 15 18c1.45 0 2.27-1.44 1.93-2.52l3.56-3.55c1.07.33 2.51-.48 2.51-1.93 0-1.1-.9-2-2-2z" />
          </svg>
        )
      };
    } else if (locale === "ca") {
      return {
        id: 'diseno',
        title: 'Disseny Estructural',
        content: 'Desenvolupament de projectes de disseny estructural amb càlculs avançats utilitzant programari especialitzat i mètodes d\'elements finits per garantir la integritat estructural. Aplicació de normatives internacionals i optimització de materials per aconseguir estructures eficients i segures.',
        stats: [
          { label: 'Projectes completats', value: '45+' },
          { label: 'Tones dissenyades', value: '12,000+' },
          { label: 'Programari utilitzat', value: '8' },
          { label: 'Anys d\'experiència', value: '20+' }
        ],
        image: '/images/offshore/09-estructural-fpso.jpg',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21 8c-1.45 0-2.26 1.44-1.93 2.51l-3.55 3.56c-.3-.09-.74-.09-1.04 0l-2.55-2.55C12.27 10.45 11.46 9 10 9c-1.45 0-2.27 1.44-1.93 2.52l-4.56 4.55C2.44 15.74 1 16.55 1 18c0 1.1.9 2 2 2 1.45 0 2.26-1.44 1.93-2.51l4.55-4.56c.3.09.74.09 1.04 0l2.55 2.55C12.73 16.55 13.54 18 15 18c1.45 0 2.27-1.44 1.93-2.52l3.56-3.55c1.07.33 2.51-.48 2.51-1.93 0-1.1-.9-2-2-2z" />
          </svg>
        )
      };
    } else {
      return {
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
      };
    }
  };

  const getProcesosCarta = (): TabItem => {
    if (locale === "en") {
      return {
        id: 'procesos',
        title: 'Construction Processes',
        content: 'Optimization of construction processes in shipyards and industrial plants, with emphasis on manufacturing sequence, assembly and quality control. Implementation of Lean Manufacturing methodologies and continuous improvement to reduce production times and costs.',
        stats: [
          { label: 'Optimized processes', value: '75+' },
          { label: 'Time reduction', value: '35%' },
          { label: 'Productivity increase', value: '28%' },
          { label: 'Industrial plants', value: '12' }
        ],
        image: '/images/offshore/10-astillero-buques.jpg',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" />
          </svg>
        )
      };
    } else if (locale === "ca") {
      return {
        id: 'procesos',
        title: 'Processos Constructius',
        content: 'Optimització de processos constructius en drassanes i plantes industrials, amb èmfasi en la seqüència de fabricació, muntatge i control de qualitat. Implementació de metodologies Lean Manufacturing i millora contínua per reduir temps i costos de producció.',
        stats: [
          { label: 'Processos optimitzats', value: '75+' },
          { label: 'Reducció de temps', value: '35%' },
          { label: 'Augment productivitat', value: '28%' },
          { label: 'Plantes industrials', value: '12' }
        ],
        image: '/images/offshore/10-astillero-buques.jpg',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" />
          </svg>
        )
      };
    } else {
      return {
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
      };
    }
  };

  const getProduccionCarta = (): TabItem => {
    if (locale === "en") {
      return {
        id: 'produccion',
        title: 'Production Optimization',
        content: 'Analysis and improvement of production lines for maritime components and large metal structures. Implementation of production control systems, inventory management and advanced planning to maximize operational efficiency and reduce costs.',
        stats: [
          { label: 'Optimized lines', value: '30+' },
          { label: 'Cost savings', value: '22%' },
          { label: 'Defect reduction', value: '40%' },
          { label: 'Average ROI', value: '3.2x' }
        ],
        image: '/images/offshore/11-optimizacion-produccion.jpg',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7zm-4 6h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z" />
          </svg>
        )
      };
    } else if (locale === "ca") {
      return {
        id: 'produccion',
        title: 'Optimització de Producció',
        content: 'Anàlisi i millora de línies de producció per a components marítims i estructures metàl·liques de gran port. Implementació de sistemes de control de producció, gestió d\'inventaris i planificació avançada per maximitzar l\'eficiència operativa i reduir costos.',
        stats: [
          { label: 'Línies optimitzades', value: '30+' },
          { label: 'Estalvi de costos', value: '22%' },
          { label: 'Reducció de defectes', value: '40%' },
          { label: 'ROI mitjà', value: '3.2x' }
        ],
        image: '/images/offshore/11-optimizacion-produccion.jpg',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7zm-4 6h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z" />
          </svg>
        )
      };
    } else {
      return {
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
      };
    }
  };

  const getCalidadCarta = (): TabItem => {
    if (locale === "en") {
      return {
        id: 'calidad',
        title: 'Quality Control',
        content: 'Implementation of quality control systems in industrial manufacturing processes, with special attention to welding, surface treatments and non-destructive testing. Development of inspection and certification procedures according to international standards.',
        stats: [
          { label: 'Implemented systems', value: '25+' },
          { label: 'Created procedures', value: '120+' },
          { label: 'Reduction of non-conformities', value: '65%' },
          { label: 'Certifications obtained', value: '40+' }
        ],
        image: '/images/offshore/12-control-calidad-2.jpg',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.77 4.93l1.4 1.4L8.43 19.07l-5.6-5.6 1.4-1.4 4.2 4.2L19.77 4.93m0-2.83L8.43 13.44l-4.2-4.2L0 13.47l8.43 8.43L24 6.33 19.77 2.1z" />
          </svg>
        )
      };
    } else if (locale === "ca") {
      return {
        id: 'calidad',
        title: 'Control de Qualitat',
        content: 'Implementació de sistemes de control de qualitat en processos de fabricació industrial, amb especial atenció a soldadura, tractaments superficials i assajos no destructius. Desenvolupament de procediments d\'inspecció i certificació segons normatives internacionals.',
        stats: [
          { label: 'Sistemes implementats', value: '25+' },
          { label: 'Procediments creats', value: '120+' },
          { label: 'Reducció de no conformitats', value: '65%' },
          { label: 'Certificacions obtingudes', value: '40+' }
        ],
        image: '/images/offshore/12-control-calidad-2.jpg',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.77 4.93l1.4 1.4L8.43 19.07l-5.6-5.6 1.4-1.4 4.2 4.2L19.77 4.93m0-2.83L8.43 13.44l-4.2-4.2L0 13.47l8.43 8.43L24 6.33 19.77 2.1z" />
          </svg>
        )
      };
    } else {
      return {
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
      };
    }
  };

  const tabs: TabItem[] = [
    getDisenoCarta(),
    getProcesosCarta(),
    getProduccionCarta(),
    getCalidadCarta()
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
                {locale === "es" ? "Experiencia Industrial" : 
                 locale === "en" ? "Industrial Experience" : 
                 "Experiència Industrial"}
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              {locale === "es" ? "Fabricación y Procesos Industriales" : 
               locale === "en" ? "Manufacturing and Industrial Processes" : 
               "Fabricació i Processos Industrials"}
            </h2>
            <p className="text-lg text-indigo-200/65">
              {locale === "es" ? "Experiencia especializada en procesos constructivos, diseño de estructuras y optimización de la producción en astilleros y plantas industriales que fabrican componentes marítimos o estructuras metálicas de gran porte." : 
               locale === "en" ? "Specialized experience in construction processes, structural design and production optimization in shipyards and industrial plants that manufacture maritime components or large metal structures." : 
               "Experiència especialitzada en processos constructius, disseny d'estructures i optimització de la producció en drassanes i plantes industrials que fabriquen components marítims o estructures metàl·liques de gran port."}
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
                  {locale === "es" ? tab.title : 
                   locale === "en" ? (tab.id === 'diseno' ? 'Structural Design' : 
                                    tab.id === 'procesos' ? 'Construction Processes' : 
                                    tab.id === 'produccion' ? 'Production Optimization' : 
                                    tab.id === 'calidad' ? 'Quality Control' : tab.title) : 
                   tab.id === 'diseno' ? 'Disseny Estructural' : 
                   tab.id === 'procesos' ? 'Processos Constructius' : 
                   tab.id === 'produccion' ? 'Optimització de Producció' : 
                   tab.id === 'calidad' ? 'Control de Qualitat' : tab.title}
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
                      <span>
                        {locale === "es" ? "Especialidad Industrial" :
                         locale === "en" ? "Industrial Specialty" :
                         "Especialitat Industrial"}
                      </span>
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
                    <h4 className="mb-3 font-medium text-indigo-300">
                      {locale === "es" ? "Capacidades clave:" : 
                       locale === "en" ? "Key capabilities:" : 
                       "Capacitats clau:"}
                    </h4>
                    <ul className="grid gap-2 sm:grid-cols-2">
                      {activeTab === 'diseno' && (
                        <>
                          <li className="flex items-center text-indigo-200/65">
                            <svg className="mr-2 h-4 w-4 fill-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>
                            {locale === "es" ? "Cálculo estructural avanzado" :
                             locale === "en" ? "Advanced structural calculation" :
                             "Càlcul estructural avançat"}
                          </li>
                          <li className="flex items-center text-indigo-200/65">
                            <svg className="mr-2 h-4 w-4 fill-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>
                            {locale === "es" ? "Análisis por elementos finitos" :
                             locale === "en" ? "Finite element analysis" :
                             "Anàlisi per elements finits"}
                          </li>
                          <li className="flex items-center text-indigo-200/65">
                            <svg className="mr-2 h-4 w-4 fill-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>
                            {locale === "es" ? "Diseño de estructuras metálicas" :
                             locale === "en" ? "Design of metal structures" :
                             "Disseny d'estructures metàl·liques"}
                          </li>
                          <li className="flex items-center text-indigo-200/65">
                            <svg className="mr-2 h-4 w-4 fill-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>
                            {locale === "es" ? "Optimización de materiales" :
                             locale === "en" ? "Material optimization" :
                             "Optimització de materials"}
                          </li>
                        </>
                      )}
                      
                      {activeTab === 'procesos' && (
                        <>
                          <li className="flex items-center text-indigo-200/65">
                            <svg className="mr-2 h-4 w-4 fill-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>
                            {locale === "es" ? "Secuenciación de fabricación" :
                             locale === "en" ? "Manufacturing sequencing" :
                             "Seqüència de fabricació"}
                          </li>
                          <li className="flex items-center text-indigo-200/65">
                            <svg className="mr-2 h-4 w-4 fill-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>
                            {locale === "es" ? "Lean Manufacturing" :
                             locale === "en" ? "Lean Manufacturing" :
                             "Lean Manufacturing"}
                          </li>
                          <li className="flex items-center text-indigo-200/65">
                            <svg className="mr-2 h-4 w-4 fill-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>
                            {locale === "es" ? "Planificación de producción" :
                             locale === "en" ? "Production planning" :
                             "Planificació de producció"}
                          </li>
                          <li className="flex items-center text-indigo-200/65">
                            <svg className="mr-2 h-4 w-4 fill-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>
                            {locale === "es" ? "Mejora continua" :
                             locale === "en" ? "Continuous improvement" :
                             "Millora contínua"}
                          </li>
                        </>
                      )}
                      
                      {activeTab === 'produccion' && (
                        <>
                          <li className="flex items-center text-indigo-200/65">
                            <svg className="mr-2 h-4 w-4 fill-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>
                            {locale === "es" ? "Análisis de líneas de producción" :
                             locale === "en" ? "Production line analysis" :
                             "Anàlisi de línies de producció"}
                          </li>
                          <li className="flex items-center text-indigo-200/65">
                            <svg className="mr-2 h-4 w-4 fill-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>
                            {locale === "es" ? "Gestión de inventarios" :
                             locale === "en" ? "Inventory management" :
                             "Gestió d'inventaris"}
                          </li>
                          <li className="flex items-center text-indigo-200/65">
                            <svg className="mr-2 h-4 w-4 fill-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>
                            {locale === "es" ? "Planificación avanzada" :
                             locale === "en" ? "Advanced planning" :
                             "Planificació avançada"}
                          </li>
                          <li className="flex items-center text-indigo-200/65">
                            <svg className="mr-2 h-4 w-4 fill-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>
                            {locale === "es" ? "Reducción de costos operativos" :
                             locale === "en" ? "Operational cost reduction" :
                             "Reducció de costos operatius"}
                          </li>
                        </>
                      )}
                      
                      {activeTab === 'calidad' && (
                        <>
                          <li className="flex items-center text-indigo-200/65">
                            <svg className="mr-2 h-4 w-4 fill-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>
                            {locale === "es" ? "Sistemas de control de calidad" :
                             locale === "en" ? "Quality control systems" :
                             "Sistemes de control de qualitat"}
                          </li>
                          <li className="flex items-center text-indigo-200/65">
                            <svg className="mr-2 h-4 w-4 fill-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>
                            {locale === "es" ? "Ensayos no destructivos" :
                             locale === "en" ? "Non-destructive testing" :
                             "Assajos no destructius"}
                          </li>
                          <li className="flex items-center text-indigo-200/65">
                            <svg className="mr-2 h-4 w-4 fill-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>
                            {locale === "es" ? "Procedimientos de inspección" :
                             locale === "en" ? "Inspection procedures" :
                             "Procediments d'inspecció"}
                          </li>
                          <li className="flex items-center text-indigo-200/65">
                            <svg className="mr-2 h-4 w-4 fill-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>
                            {locale === "es" ? "Certificación según normativas" :
                             locale === "en" ? "Certification according to regulations" :
                             "Certificació segons normatives"}
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
                      {locale === "es" ? "¿Necesita mejorar sus procesos industriales?" :
                       locale === "en" ? "Need to improve your industrial processes?" :
                       "Necessiteu millorar els vostres processos industrials?"}
                    </p>
                    <a 
                      href="#contacto"
                      onClick={(e) => {
                        e.preventDefault();
                        // Navegar a la sección Contacto
                        window.location.href = '#contacto';
                        // Hacer scroll al formulario y enfocarlo
                        setTimeout(() => {
                          const formulario = document.querySelector('#contacto h3');
                          if (formulario && formulario.textContent?.includes('Envíanos un mensaje')) {
                            formulario.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            // Enfocar el primer campo del formulario
                            const nombreInput = document.querySelector('#nombre');
                            if (nombreInput) {
                              (nombreInput as HTMLInputElement).focus();
                            }
                          }
                        }, 500);
                      }}
                      className="inline-flex items-center justify-center rounded-md bg-indigo-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      {locale === "es" ? "Solicitar consulta" :
                       locale === "en" ? "Request consultation" :
                       "Sol·licitar consulta"}
                      <svg className="ml-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" />
                      </svg>
                    </a>
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
