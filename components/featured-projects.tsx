"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import Link from "next/link";
import MaritimeData from "./maritime-data";

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  link: string;
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
  // Datos para cada slide del carrusel
  const carouselSlides: CarouselSlide[] = [
    {
      image: images[0],
      title: "Experiencia y Excelencia en Ingeniería Naval",
      description: "Más de dos décadas diseñando soluciones innovadoras para la industria marítima y offshore."
    },
    {
      image: images[1],
      title: "Diseño y Cálculo Estructural",
      description: "Especialización en análisis estructural y diseño de embarcaciones de alto rendimiento."
    },
    {
      image: images[2],
      title: "Consultoría Marítima Integral",
      description: "Asesoramiento técnico para optimización de procesos y cumplimiento normativo internacional."
    },
    {
      image: images[3],
      title: "Proyectos Offshore y Plataformas",
      description: "Desarrollo de soluciones para la industria energética marítima y plataformas offshore."
    }
  ];
  // Proyectos destacados
  const projects: Project[] = [
    {
      id: 1,
      title: "Diseño de Embarcación Offshore",
      description: "Diseño y cálculos estructurales para plataforma de trabajo en alta mar",
      category: "Diseño Naval",
      link: "/proyectos/diseno-embarcacion-offshore",
    },
    {
      id: 2,
      title: "Optimización de Sistemas de Propulsión",
      description: "Mejora de eficiencia en sistemas de propulsión para buques comerciales",
      category: "Ingeniería Marina",
      link: "/proyectos/optimizacion-propulsion",
    },
    {
      id: 3,
      title: "Análisis Estructural de Buque Carguero",
      description: "Evaluación y reforzamiento estructural para buque de carga de 150m",
      category: "Análisis Estructural",
      link: "/proyectos/analisis-buque-carguero",
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
            <Link 
              href={project.link} 
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
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
