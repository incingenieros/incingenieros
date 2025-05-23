"use client";

import { useEffect } from "react";
import Image from "next/image";
import WorflowImg01 from "@/public/images/workflow-01.png";
import WorflowImg02 from "@/public/images/workflow-02.png";
import WorflowImg03 from "@/public/images/workflow-03.png";
import Spotlight from "@/components/spotlight";
import { useLanguage } from "@/contexts/language-context";

// Declarar el tipo global para window
declare global {
  interface Window {
    expandAsistenciaTecnicaCard?: () => void;
  }
}

export default function SpecializationAreas() {
  const { locale, t } = useLanguage();
  // Función para manejar el clic en la tarjeta de Diseño Naval
  const handleDisenoNavalClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // Navegar a la sección Industrial
    window.location.href = '#industrial';
    
    // Establecer un timeout para dar tiempo a que se cargue la sección
    setTimeout(() => {
      // Buscar y hacer clic en el botón de Procesos Constructivos
      const industrialButtons = document.querySelectorAll('#industrial button');
      industrialButtons.forEach((button) => {
        if (button.textContent?.includes('Procesos Constructivos')) {
          (button as HTMLButtonElement).click();
        }
      });
    }, 500);
  };

  // Función para manejar el clic en la tarjeta de Normativa Marítima
  const handleNormativaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // Navegar a la sección Consultoría
    window.location.href = '#consultoria';
    
    // Llamar a la función expandAsistenciaTecnicaCard del script externo
    // Esta función se encargará de expandir la tarjeta de forma más robusta
    setTimeout(() => {
      if (typeof window !== 'undefined' && window.expandAsistenciaTecnicaCard) {
        window.expandAsistenciaTecnicaCard();
      }
    }, 500);
  };
  
  // Función para manejar el clic en la tarjeta de Ingeniería Offshore
  const handleIngenieriaOffshoreClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // Navegar a la sección Naval
    window.location.href = '#naval';
    
    // Establecer un timeout para dar tiempo a que se cargue la sección
    setTimeout(() => {
      // Buscar y hacer clic en el botón de Plataformas Offshore
      const navalButtons = document.querySelectorAll('#naval button');
      navalButtons.forEach((button) => {
        if (button.textContent?.includes('Plataformas Offshore')) {
          (button as HTMLButtonElement).click();
        }
      });
    }, 500);
  };
  
  // Cargar el script para expandir la tarjeta
  useEffect(() => {
    // Verificar si el script ya está cargado
    const scriptExists = document.querySelector('script[src="/js/expand-card.js"]');
    
    if (!scriptExists) {
      // Crear y agregar el script al documento
      const script = document.createElement('script');
      script.src = '/js/expand-card.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section id="experiencia" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                {locale === "es" ? "Experiencia Técnica" : 
                 locale === "en" ? "Technical Experience" : 
                 "Experiència Tècnica"}
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              {locale === "es" ? "Áreas de Especialización" : 
               locale === "en" ? "Areas of Specialization" : 
               "Àrees d'Especialització"}
            </h2>
            <p className="text-lg text-indigo-200/65">
              {locale === "es" ? "Competencias técnicas y experiencia en diferentes campos de la ingeniería naval y oceánica, desarrolladas a lo largo de más de dos décadas de trayectoria profesional." : 
               locale === "en" ? "Technical competencies and experience in different fields of naval and ocean engineering, developed over more than two decades of professional career." : 
               "Competències tècniques i experiència en diferents camps de l'enginyeria naval i oceànica, desenvolupades al llarg de més de dues dècades de trajectòria professional."}
            </p>
          </div>
          {/* Spotlight items */}
          <Spotlight className="group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-3">
            {/* Card 1 - Diseño Naval */}
            <a
              className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"
              href="#industrial"
              onClick={handleDisenoNavalClick}
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                {/* Arrow */}
                <div
                  className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-gray-700/50 bg-gray-800/65 text-gray-200 opacity-0 transition-opacity group-hover/card:opacity-100"
                  aria-hidden="true"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={9}
                    height={8}
                    fill="none"
                  >
                    <path
                      fill="#F4F4F5"
                      d="m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z"
                    />
                  </svg>
                </div>
                {/* Image */}
                <Image
                  className="inline-flex"
                  src={WorflowImg01}
                  width={350}
                  height={288}
                  alt="Workflow 01"
                />
                {/* Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-gray-700/.15),--theme(--color-gray-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                      <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                        {locale === "es" ? "Diseño Naval" : 
                         locale === "en" ? "Naval Design" : 
                         "Disseny Naval"}
                      </span>
                    </span>
                  </div>
                  <p className="text-indigo-200/65">
                    {locale === "es" ? "Diseño y cálculo estructural de embarcaciones comerciales, recreativas y plataformas offshore con software especializado." : 
                     locale === "en" ? "Design and structural calculation of commercial and recreational vessels and offshore platforms with specialized software." : 
                     "Disseny i càlcul estructural d'embarcacions comercials, recreatives i plataformes offshore amb programari especialitzat."}
                  </p>
                </div>
              </div>
            </a>
            {/* Card 2 - Normativa Marítima */}
            <a
              className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"
              href="#consultoria"
              onClick={handleNormativaClick}
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                {/* Arrow */}
                <div
                  className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-gray-700/50 bg-gray-800/65 text-gray-200 opacity-0 transition-opacity group-hover/card:opacity-100"
                  aria-hidden="true"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={9}
                    height={8}
                    fill="none"
                  >
                    <path
                      fill="#F4F4F5"
                      d="m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z"
                    />
                  </svg>
                </div>
                {/* Image */}
                <Image
                  className="inline-flex"
                  src={WorflowImg02}
                  width={350}
                  height={288}
                  alt="Workflow 02"
                />
                {/* Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-gray-700/.15),--theme(--color-gray-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                      <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                        {locale === "es" ? "Normativa Marítima" : 
                         locale === "en" ? "Maritime Regulations" : 
                         "Normativa Marítima"}
                      </span>
                    </span>
                  </div>
                  <p className="text-indigo-200/65">
                    {locale === "es" ? "Asesoría en normativa marítima internacional, certificaciones y procesos de homologación para embarcaciones y equipos." : 
                     locale === "en" ? "Consulting on international maritime regulations, certifications and approval processes for vessels and equipment." : 
                     "Assessoria en normativa marítima internacional, certificacions i processos d'homologació per a embarcacions i equips."}
                  </p>
                </div>
              </div>
            </a>
            {/* Card 3 - Ingeniería Offshore */}
            <a
              className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"
              href="#naval"
              onClick={handleIngenieriaOffshoreClick}
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                {/* Arrow */}
                <div
                  className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-gray-700/50 bg-gray-800/65 text-gray-200 opacity-0 transition-opacity group-hover/card:opacity-100"
                  aria-hidden="true"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={9}
                    height={8}
                    fill="none"
                  >
                    <path
                      fill="#F4F4F5"
                      d="m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z"
                    />
                  </svg>
                </div>
                {/* Image */}
                <Image
                  className="inline-flex"
                  src={WorflowImg03}
                  width={350}
                  height={288}
                  alt="Workflow 03"
                />
                {/* Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-gray-700/.15),--theme(--color-gray-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                      <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                        {locale === "es" ? "Ingeniería Offshore" : 
                         locale === "en" ? "Offshore Engineering" : 
                         "Enginyeria Offshore"}
                      </span>
                    </span>
                  </div>
                  <p className="text-indigo-200/65">
                    {locale === "es" ? "Desarrollo de soluciones para plataformas y estructuras marinas en condiciones extremas, con énfasis en seguridad y eficiencia." : 
                     locale === "en" ? "Development of solutions for platforms and marine structures in extreme conditions, with emphasis on safety and efficiency." : 
                     "Desenvolupament de solucions per a plataformes i estructures marines en condicions extremes, amb èmfasi en seguretat i eficiència."}
                  </p>
                </div>
              </div>
            </a>
          </Spotlight>
        </div>
      </div>
    </section>
  );
}
