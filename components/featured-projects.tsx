"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import MaritimeData from "./maritime-data";
import { useLanguage } from "@/contexts/language-context";

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  link: string;
  targetCategory?: string;
}

interface CarouselSlide {
  image: StaticImageData;
  title: string;
  description: string;
}

interface FeaturedProjectsProps {
  images: StaticImageData[];
  imageWidth: number;
  imageHeight: number;
  imageAlt: string;
}

export default function FeaturedProjects({
  images,
  imageWidth,
  imageHeight,
  imageAlt,
}: FeaturedProjectsProps) {
  const router = useRouter();
  const { locale } = useLanguage();
  
  // Traducciones para el carrusel
  const carouselContent = {
    slide1: {
      title: {
        es: "Experiencia y Excelencia en Ingeniería Naval",
        en: "Experience and Excellence in Naval Engineering",
        ca: "Experiència i Excel·lència en Enginyeria Naval"
      },
      description: {
        es: "Más de dos décadas diseñando soluciones innovadoras para la industria marítima y offshore.",
        en: "Over two decades designing innovative solutions for the maritime and offshore industry.",
        ca: "Més de dues dècades dissenyant solucions innovadores per a la indústria marítima i offshore."
      }
    },
    slide2: {
      title: {
        es: "Diseño y Cálculo Estructural",
        en: "Structural Design and Calculation",
        ca: "Disseny i Càlcul Estructural"
      },
      description: {
        es: "Especialización en análisis estructural y diseño de embarcaciones de alto rendimiento.",
        en: "Specialization in structural analysis and design of high-performance vessels.",
        ca: "Especialització en anàlisi estructural i disseny d'embarcacions d'alt rendiment."
      }
    },
    slide3: {
      title: {
        es: "Consultoría Marítima Integral",
        en: "Comprehensive Maritime Consulting",
        ca: "Consultoria Marítima Integral"
      },
      description: {
        es: "Asesoramiento técnico para optimización de procesos y cumplimiento normativo internacional.",
        en: "Technical advice for process optimization and international regulatory compliance.",
        ca: "Assessorament tècnic per a optimització de processos i compliment normatiu internacional."
      }
    },
    slide4: {
      title: {
        es: "Proyectos Offshore y Plataformas",
        en: "Offshore Projects and Platforms",
        ca: "Projectes Offshore i Plataformes"
      },
      description: {
        es: "Desarrollo de soluciones para la industria energética marítima y plataformas offshore.",
        en: "Development of solutions for the maritime energy industry and offshore platforms.",
        ca: "Desenvolupament de solucions per a la indústria energètica marítima i plataformes offshore."
      }
    }
  };
  
  // Traducciones para los proyectos destacados
  const projectsContent = {
    project1: {
      title: {
        es: "Diseño de Embarcación Offshore",
        en: "Offshore Vessel Design",
        ca: "Disseny d'Embarcació Offshore"
      },
      description: {
        es: "Diseño y cálculos estructurales para plataforma de trabajo en alta mar",
        en: "Design and structural calculations for offshore work platform",
        ca: "Disseny i càlculs estructurals per a plataforma de treball en alta mar"
      },
      category: {
        es: "Diseño Naval",
        en: "Naval Design",
        ca: "Disseny Naval"
      }
    },
    project2: {
      title: {
        es: "Optimización de Sistemas de Propulsión",
        en: "Propulsion Systems Optimization",
        ca: "Optimització de Sistemes de Propulsió"
      },
      description: {
        es: "Mejora de eficiencia en sistemas de propulsión para buques comerciales",
        en: "Efficiency improvement in propulsion systems for commercial vessels",
        ca: "Millora d'eficiència en sistemes de propulsió per a vaixells comercials"
      },
      category: {
        es: "Ingeniería Marina",
        en: "Marine Engineering",
        ca: "Enginyeria Marina"
      }
    },
    project3: {
      title: {
        es: "Análisis Estructural de Buque Carguero",
        en: "Structural Analysis of Cargo Ship",
        ca: "Anàlisi Estructural de Vaixell de Càrrega"
      },
      description: {
        es: "Evaluación y reforzamiento estructural para buque de carga de 150m",
        en: "Evaluation and structural reinforcement for 150m cargo ship",
        ca: "Avaluació i reforçament estructural per a vaixell de càrrega de 150m"
      },
      category: {
        es: "Análisis Estructural",
        en: "Structural Analysis",
        ca: "Anàlisi Estructural"
      }
    }
  };
  
  // Datos para cada slide del carrusel
  const carouselSlides: CarouselSlide[] = [
    {
      image: images[0],
      title: carouselContent.slide1.title[locale],
      description: carouselContent.slide1.description[locale]
    },
    {
      image: images[1],
      title: carouselContent.slide2.title[locale],
      description: carouselContent.slide2.description[locale]
    },
    {
      image: images[2],
      title: carouselContent.slide3.title[locale],
      description: carouselContent.slide3.description[locale]
    },
    {
      image: images[3],
      title: carouselContent.slide4.title[locale],
      description: carouselContent.slide4.description[locale]
    }
  ];
  
  // Proyectos destacados
  const projects: Project[] = [
    {
      id: 1,
      title: projectsContent.project1.title[locale],
      description: projectsContent.project1.description[locale],
      category: projectsContent.project1.category[locale],
      link: "#naval",
      targetCategory: "structures",
    },
    {
      id: 2,
      title: projectsContent.project2.title[locale],
      description: projectsContent.project2.description[locale],
      category: projectsContent.project2.category[locale],
      link: "#naval",
      targetCategory: "vessels",
    },
    {
      id: 3,
      title: projectsContent.project3.title[locale],
      description: projectsContent.project3.description[locale],
      category: projectsContent.project3.category[locale],
      link: "#industrial",
      targetCategory: "industrial-diseno",
    },
  ];

  const [activeProject, setActiveProject] = useState<number>(0);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  // Cambiar la imagen cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsTransitioning(false);
      }, 500); // Duración del fade out
    }, 5000); // Cambiar cada 5 segundos

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative">
      {/* Carrusel de imágenes */}
      <div className="relative mb-8 overflow-hidden rounded-2xl" data-aos="fade-up">
        {/* Contenedor con altura fija para el carrusel */}
        <div className="relative" style={{ height: `${imageHeight}px`, minHeight: '300px' }}>
          {/* Imagen principal siempre visible para mantener el espacio */}
          <div className="relative w-full h-full">
            <Image
              src={carouselSlides[0].image}
              width={imageWidth}
              height={imageHeight}
              alt={`${imageAlt} 1`}
              className="w-full h-full object-cover rounded-2xl"
              priority
            />
          </div>
          
          {/* Imágenes del carrusel superpuestas */}
          {carouselSlides.map((slide, index) => (
            <div 
              key={index} 
              className={`absolute inset-0 transition-opacity duration-1000 ${currentImageIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0'} ${isTransitioning && currentImageIndex === index ? 'opacity-0' : ''}`}
            >
              <Image
                src={slide.image}
                width={imageWidth}
                height={imageHeight}
                alt={`${imageAlt} ${index + 1}`}
                className="w-full h-full object-cover rounded-2xl"
                priority={index === 0}
              />
            </div>
          ))}
          
          {/* Overlay con degradado */}
          <div className="absolute inset-0 z-20 bg-gradient-to-r from-gray-900/80 via-gray-900/40 to-gray-900/30"></div>
          
          {/* Componente de datos marítimos */}
          <MaritimeData />
          
          {/* Indicadores del carrusel */}
          <div className="absolute bottom-4 right-4 z-30 flex space-x-2">
            {carouselSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsTransitioning(true);
                  setTimeout(() => {
                    setCurrentImageIndex(index);
                    setIsTransitioning(false);
                  }, 500);
                }}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${currentImageIndex === index ? 'bg-white w-4' : 'bg-white/50'}`}
                aria-label={`Ver imagen ${index + 1}`}
              />
            ))}  
          </div>
          
          {/* Textos superpuestos - uno para cada slide */}
          {carouselSlides.map((slide, index) => (
            <div 
              key={`text-${index}`}
              className={`absolute bottom-0 left-0 p-6 md:p-8 lg:max-w-xl transition-opacity duration-1000 ${currentImageIndex === index ? 'opacity-100 z-30' : 'opacity-0'}`}
            >
              <h3 className="mb-2 text-2xl font-bold text-white">
                {slide.title}
              </h3>
              <p className="text-gray-200">
                {slide.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Proyectos destacados */}
      <div className="grid gap-6 md:grid-cols-3" data-aos="fade-up" data-aos-delay={200}>
        {projects.map((project, index) => (
          <div 
            key={project.id}
            className={`group cursor-pointer rounded-xl p-5 transition-all duration-300 ${
              activeProject === index 
                ? 'bg-indigo-600 text-white' 
                : 'bg-gray-800/50 text-gray-300 hover:bg-gray-800'
            }`}
            onClick={() => setActiveProject(index)}
          >
            <div className="mb-2 text-sm font-medium uppercase tracking-wider text-indigo-400 group-hover:text-indigo-300">
              {project.category}
            </div>
            <h4 className="mb-1 text-lg font-semibold">{project.title}</h4>
            <p className={`mb-4 text-sm ${activeProject === index ? 'text-indigo-100' : 'text-gray-400'}`}>
              {project.description}
            </p>
            <a 
              href={project.link}
              onClick={(e) => {
                if (project.targetCategory) {
                  e.preventDefault();
                  // Navegar a la sección
                  window.location.href = project.link;
                  // Establecer un timeout para dar tiempo a que se cargue la sección
                  setTimeout(() => {
                    // Buscar y hacer clic en el botón de categoría correspondiente
                    const categoryButtons = document.querySelectorAll('#naval button');
                    categoryButtons.forEach((button) => {
                      // Seleccionar la categoría correspondiente según el targetCategory del proyecto
                      if (project.targetCategory === 'structures' && button.textContent?.includes('Plataformas Offshore')) {
                        (button as HTMLButtonElement).click();
                      } else if (project.targetCategory === 'vessels' && button.textContent?.includes('Buques y Embarcaciones')) {
                        (button as HTMLButtonElement).click();
                      } else if (project.targetCategory === 'industrial-diseno') {
                        // Para la sección industrial, buscar el botón de Diseño Estructural
                        const industrialButtons = document.querySelectorAll('#industrial button');
                        industrialButtons.forEach((indButton) => {
                          if (indButton.textContent?.includes('Diseño Estructural')) {
                            (indButton as HTMLButtonElement).click();
                          }
                        });
                      }
                    });
                  }, 500);
                }
              }} 
              className={`inline-flex items-center text-sm font-medium ${
                activeProject === index 
                  ? 'text-white' 
                  : 'text-indigo-400 group-hover:text-indigo-300'
              }`}
            >
              Ver detalles
              <svg 
                className="ml-1 h-3 w-3" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 5l7 7-7 7" 
                />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
