"use client";

import { useState } from 'react';
import Image, { StaticImageData } from "next/image";

interface TestimonialProps {
  img: StaticImageData;
  clientImg: StaticImageData;
  name: string;
  position: string;
  company: string;
  content: string;
  categories: number[];
  category: number;
}

export default function ServiceTestimonial({ img, clientImg, name, position, company, content, categories, category }: TestimonialProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showModal, setShowModal] = useState(false);
  
  // Si la tarjeta no pertenece a la categoría seleccionada, mostrarla con opacidad reducida
  if (!categories.includes(category)) {
    return (
      <article className="relative rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-5 backdrop-blur-xs opacity-30 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] h-full flex flex-col min-h-[380px]">
        <div className="flex flex-col gap-4 flex-grow">
          <div>
            <Image src={clientImg} height={36} alt="Client logo" />
          </div>
          <p className="text-indigo-200/65 flex-grow">
            {content}
          </p>
          <div className="flex items-center gap-4 mt-1">
            <div className="relative mr-2 group cursor-pointer">
              <Image
                className="inline-flex shrink-0 rounded-full object-cover z-10 relative transition-transform duration-300 ease-in-out hover:scale-105"
                src={img}
                width={70}
                height={70}
                alt={name}
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-300 blur-[2px] transform scale-110 z-0 opacity-80"></div>
            </div>
            <div className="text-sm font-medium flex flex-col justify-between py-1">
              <span className="text-gray-200">{name}</span>
              <span className="text-indigo-300">{position}</span>
              <a
                className="text-indigo-200/65 transition-colors hover:text-indigo-500"
                href="#0"
              >
                {company}
              </a>
            </div>
          </div>
        </div>
      </article>
    );
  }
  
  return (
    <>
      <article 
        className="relative overflow-hidden rounded-2xl transition-all duration-300 bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-5 backdrop-blur-xs hover:bg-indigo-600/20 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] h-full flex flex-col min-h-[380px]" 
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <div className="flex flex-col gap-4 flex-grow">
          <div>
            <Image src={clientImg} height={36} alt="Client logo" />
          </div>
          <p className="text-indigo-200/65 flex-grow">
            {content}
          </p>
          <div className="flex items-center gap-4 mt-1">
            <div className="relative mr-2 group cursor-pointer">
              <Image
                className="inline-flex shrink-0 rounded-full object-cover z-10 relative transition-transform duration-300 ease-in-out hover:scale-105"
                src={img}
                width={70}
                height={70}
                alt={name}
                onClick={() => setShowModal(true)}
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-300 blur-[2px] transform scale-110 z-0 opacity-80"></div>
            </div>
            <div className="text-sm font-medium flex flex-col justify-between py-1">
              <span className="text-gray-200">{name}</span>
              <span className="text-indigo-300">{position}</span>
              <a
                className="text-indigo-200/65 transition-colors hover:text-indigo-500"
                href="#0"
              >
                {company}
              </a>
            </div>
          </div>
          
          {/* Botón "Ver más" que aparece al hacer hover */}
          <div 
            className={`mt-4 transition-all duration-500 ${
              isExpanded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4 h-0 overflow-hidden'
            }`}
          >
            <button className="text-sm text-indigo-300 hover:text-indigo-200 flex items-center">
              Ver más detalles
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Efecto de brillo en el borde al hacer hover */}
        <div 
          className={`absolute inset-0 border border-transparent transition-all duration-500 ${
            isExpanded ? 'border-indigo-500/30 shadow-[0_0_15px_rgba(99,102,241,0.3)]' : ''
          }`}
        ></div>
      </article>

      {/* Modal para mostrar la imagen en tamaño grande */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md bg-black/40 transition-all duration-300" onClick={() => setShowModal(false)}>
          <div className="relative max-w-2xl bg-gray-900/90 rounded-xl p-3 shadow-2xl transform transition-all scale-100 animate-fadeIn" onClick={(e) => e.stopPropagation()}>
            <button 
              className="absolute -top-4 -right-4 bg-indigo-600 text-white rounded-full p-2 shadow-lg hover:bg-indigo-700 transition-colors"
              onClick={() => setShowModal(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative overflow-hidden">
              <Image 
                src={img} 
                width={500} 
                height={500} 
                alt={name}
                className="rounded-lg object-cover animate-scaleIn"
                priority
              />
              <div className="absolute inset-0 rounded-lg border border-indigo-500/30 shadow-[inset_0_0_15px_rgba(99,102,241,0.2)]"></div>
            </div>
            <div className="mt-4 text-center p-2">
              <h3 className="text-xl font-bold text-white">{name}</h3>
              <p className="text-indigo-300">{position}</p>
              <p className="text-indigo-200/65">{company}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
