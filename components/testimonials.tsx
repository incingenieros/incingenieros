"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/language-context";
import useMasonry from "@/utils/useMasonry";
import ServiceTestimonial from "@/components/service-testimonial";
import TestimonialImg01 from "@/public/images/testimonial-01.jpg";
import TestimonialImg02 from "@/public/images/testimonial-02.jpg";
import TestimonialImg03 from "@/public/images/testimonial-03.jpg";
import TestimonialImg04 from "@/public/images/testimonial-04.jpg";
import TestimonialImg05 from "@/public/images/testimonial-05.jpg";
import TestimonialImg06 from "@/public/images/testimonial-06.jpg";
import TestimonialImg07 from "@/public/images/testimonial-07.jpg";
import TestimonialImg08 from "@/public/images/testimonial-08.jpg";
import TestimonialImg09 from "@/public/images/testimonial-09.jpg";
import ClientImg01 from "@/public/images/company-logos/astilleros-cantabrico.svg";
import ClientImg02 from "@/public/images/company-logos/grupo-maritimo.svg";
import ClientImg03 from "@/public/images/company-logos/consorcio-industrial.svg";
import ClientImg04 from "@/public/images/company-logos/northern-sea.svg";
import ClientImg05 from "@/public/images/company-logos/autoridad-portuaria.svg";
import ClientImg06 from "@/public/images/company-logos/naviera-atlantica.svg";
import ClientImg07 from "@/public/images/company-logos/planta-industrial.svg";
import ClientImg08 from "@/public/images/company-logos/bureau-veritas.svg";
import ClientImg09 from "@/public/images/company-logos/astilleros-ecologicos.svg";

// Definir las traducciones para las tarjetas de testimonios
const testimonial1Translations = {
  es: {
    name: "Antonio Méndez",
    position: "Director de Operaciones",
    company: "Astilleros Navales del Cantábrico",
    content: "\"La colaboración con el ingeniero Francisco ha sido fundamental para modernizar nuestras instalaciones. Su conocimiento en diseño naval nos permitió optimizar nuestros procesos de construcción, reduciendo los tiempos de entrega en un 25% y mejorando la calidad de nuestros buques pesqueros.\""
  },
  en: {
    name: "Antonio Méndez",
    position: "Operations Director",
    company: "Cantabrian Naval Shipyards",
    content: "\"The collaboration with Engineer Francisco has been fundamental to modernize our facilities. His knowledge in naval design allowed us to optimize our construction processes, reducing delivery times by 25% and improving the quality of our fishing vessels.\""
  },
  ca: {
    name: "Antonio Méndez",
    position: "Director d'Operacions",
    company: "Drassanes Navals del Cantàbric",
    content: "\"La col·laboració amb l'enginyer Francisco ha estat fonamental per modernitzar les nostres instal·lacions. El seu coneixement en disseny naval ens va permetre optimitzar els nostres processos de construcció, reduint els temps de lliurament en un 25% i millorant la qualitat dels nostres vaixells pesquers.\""
  }
};

const testimonial2Translations = {
  es: {
    name: "Elena Vázquez",
    position: "Gerente de Proyectos",
    company: "Grupo Marítimo Mediterráneo",
    content: "\"Gracias al ingeniero Francisco, pudimos implementar sistemas de propulsión más eficientes en nuestra flota de transporte. Su asesoría técnica fue clave para obtener las certificaciones internacionales necesarias, lo que nos ha abierto nuevos mercados en Europa y Asia.\""
  },
  en: {
    name: "Elena Vázquez",
    position: "Project Manager",
    company: "Mediterranean Maritime Group",
    content: "\"Thanks to Engineer Francisco, we were able to implement more efficient propulsion systems in our transport fleet. His technical advice was key to obtaining the necessary international certifications, which has opened new markets for us in Europe and Asia.\""
  },
  ca: {
    name: "Elena Vázquez",
    position: "Gerent de Projectes",
    company: "Grup Marítim Mediterrani",
    content: "\"Gràcies a l'enginyer Francisco, vam poder implementar sistemes de propulsió més eficients a la nostra flota de transport. El seu assessorament tècnic va ser clau per obtenir les certificacions internacionals necessàries, la qual cosa ens ha obert nous mercats a Europa i Àsia.\""
  }
};

const testimonial3Translations = {
  es: {
    name: "Javier Rodríguez",
    position: "Director Técnico",
    company: "Consorcio Industrial Marítimo",
    content: "\"La implementación de tecnologías sostenibles en nuestras operaciones parecía un desafío insuperable. El ingeniero Francisco diseñó una estrategia integral que nos permitió reducir nuestro impacto ambiental en un 40% mientras aumentábamos nuestra eficiencia operativa.\""
  },
  en: {
    name: "Javier Rodríguez",
    position: "Technical Director",
    company: "Maritime Industrial Consortium",
    content: "\"The implementation of sustainable technologies in our operations seemed an insurmountable challenge. Engineer Francisco designed a comprehensive strategy that allowed us to reduce our environmental impact by 40% while increasing our operational efficiency.\""
  },
  ca: {
    name: "Javier Rodríguez",
    position: "Director Tècnic",
    company: "Consorci Industrial Marítim",
    content: "\"La implementació de tecnologies sostenibles en les nostres operacions semblava un desafiament insuperable. L'enginyer Francisco va dissenyar una estratègia integral que ens va permetre reduir el nostre impacte ambiental en un 40% mentre augmentàvem la nostra eficiència operativa.\""
  }
};

const testimonial4Translations = {
  es: {
    name: "Michael Thompson",
    position: "Director de Operaciones",
    company: "Astilleros del Mar del Norte",
    content: "\"Trabajar con el Ingeniero Francisco transformó nuestros protocolos de mantenimiento de plataformas offshore. Su metodología de análisis estructural identificó puntos críticos de estrés que habíamos pasado por alto, potencialmente ahorrando millones en reparaciones y garantizando la seguridad de nuestra tripulación.\""
  },
  en: {
    name: "Michael Thompson",
    position: "Chief Operations Officer",
    company: "Northern Sea Shipyards",
    content: "\"Working with Engineer Francisco transformed our offshore platform maintenance protocols. His structural analysis methodology identified critical stress points we had overlooked, potentially saving us millions in repairs and ensuring the safety of our crew.\""
  },
  ca: {
    name: "Michael Thompson",
    position: "Director d'Operacions",
    company: "Drassanes del Mar del Nord",
    content: "\"Treballar amb l'Enginyer Francisco va transformar els nostres protocols de manteniment de plataformes offshore. La seva metodologia d'anàlisi estructural va identificar punts crítics d'estrès que havíem passat per alt, potencialment estalviant milions en reparacions i garantint la seguretat de la nostra tripulació.\""
  }
};

const testimonial5Translations = {
  es: {
    name: "Carmen Ortiz",
    position: "Directora de Cumplimiento",
    company: "Autoridad Portuaria de Valencia",
    content: "\"La certificación de nuestras nuevas instalaciones portuarias fue un proceso complejo que el ingeniero Francisco gestionó con extraordinaria eficiencia. Su conocimiento de las normativas internacionales nos permitió cumplir con todos los estándares de seguridad y calidad en tiempo récord.\""
  },
  en: {
    name: "Carmen Ortiz",
    position: "Compliance Director",
    company: "Valencia Port Authority",
    content: "\"The certification of our new port facilities was a complex process that Engineer Francisco managed with extraordinary efficiency. His knowledge of international regulations allowed us to comply with all safety and quality standards in record time.\""
  },
  ca: {
    name: "Carmen Ortiz",
    position: "Directora de Compliment",
    company: "Autoritat Portuària de València",
    content: "\"La certificació de les nostres noves instal·lacions portuàries va ser un procés complex que l'enginyer Francisco va gestionar amb extraordinària eficiència. El seu coneixement de les normatives internacionals ens va permetre complir amb tots els estàndards de seguretat i qualitat en temps rècord.\""
  }
};

const testimonial6Translations = {
  es: {
    name: "Raúl Jiménez",
    position: "Director de Innovación",
    company: "Naviera Atlántica",
    content: "\"El rediseño de nuestros sistemas de navegación realizado por el ingeniero Francisco ha revolucionado nuestra flota. La integración de tecnologías digitales ha mejorado la precisión de nuestras operaciones y reducido el consumo de combustible en un 22%, con un retorno de inversión en menos de 18 meses.\""
  },
  en: {
    name: "Raúl Jiménez",
    position: "Innovation Director",
    company: "Atlantic Shipping Company",
    content: "\"The redesign of our navigation systems carried out by Engineer Francisco has revolutionized our fleet. The integration of digital technologies has improved the precision of our operations and reduced fuel consumption by 22%, with a return on investment in less than 18 months.\""
  },
  ca: {
    name: "Raúl Jiménez",
    position: "Director d'Innovació",
    company: "Naviera Atlàntica",
    content: "\"El redisseny dels nostres sistemes de navegació realitzat per l'enginyer Francisco ha revolucionat la nostra flota. La integració de tecnologies digitals ha millorat la precisió de les nostres operacions i reduït el consum de combustible en un 22%, amb un retorn d'inversió en menys de 18 mesos.\""
  }
};

const testimonial7Translations = {
  es: {
    name: "Lucía Martínez",
    position: "Directora de Sostenibilidad",
    company: "Planta Industrial Marítima",
    content: "\"La transición hacia energías renovables en nuestras instalaciones costeras fue impecablemente planificada por el ingeniero Francisco. Su enfoque integral consideró aspectos técnicos, económicos y ambientales, permitiéndonos reducir nuestra huella de carbono mientras mejorábamos nuestra imagen corporativa.\""
  },
  en: {
    name: "Lucía Martínez",
    position: "Sustainability Director",
    company: "Maritime Industrial Plant",
    content: "\"The transition to renewable energies in our coastal facilities was impeccably planned by Engineer Francisco. His comprehensive approach considered technical, economic and environmental aspects, allowing us to reduce our carbon footprint while improving our corporate image.\""
  },
  ca: {
    name: "Lucía Martínez",
    position: "Directora de Sostenibilitat",
    company: "Planta Industrial Marítima",
    content: "\"La transició cap a energies renovables a les nostres instal·lacions costaneres va ser impecablement planificada per l'enginyer Francisco. El seu enfocament integral va considerar aspectes tècnics, econòmics i ambientals, permetent-nos reduir la nostra petjada de carboni mentre milloràvem la nostra imatge corporativa.\""
  }
};

const testimonial8Translations = {
  es: {
    name: "Alberto Sanz",
    position: "Jefe de Inspección Técnica",
    company: "Bureau Veritas Naval España",
    content: "\"La metodología de certificación desarrollada por el ingeniero Francisco ha transformado nuestros procesos de inspección. Lo que antes requería semanas de trabajo ahora se completa en días, manteniendo los más altos estándares de seguridad y calidad que exigen nuestros clientes internacionales.\""
  },
  en: {
    name: "Alberto Sanz",
    position: "Technical Inspection Chief",
    company: "Bureau Veritas Naval Spain",
    content: "\"The certification methodology developed by Engineer Francisco has transformed our inspection processes. What used to take weeks of work is now completed in days, maintaining the highest standards of safety and quality demanded by our international clients.\""
  },
  ca: {
    name: "Alberto Sanz",
    position: "Cap d'Inspecció Tècnica",
    company: "Bureau Veritas Naval Espanya",
    content: "\"La metodologia de certificació desenvolupada per l'enginyer Francisco ha transformat els nostres processos d'inspecció. El que abans requeria setmanes de treball ara es completa en dies, mantenint els més alts estàndards de seguretat i qualitat que exigeixen els nostres clients internacionals.\""
  }
};

const testimonial9Translations = {
  es: {
    name: "María Fernández",
    position: "CEO",
    company: "Astilleros Ecológicos del Sur",
    content: "\"La visión del ingeniero Francisco para integrar prácticas sostenibles en nuestros procesos de construcción naval ha sido revolucionaria. Sus innovaciones nos han posicionado como líderes en construcción naval ecológica, atrayendo clientes comprometidos con la sostenibilidad y abriendo nuevas oportunidades de negocio.\""
  },
  en: {
    name: "María Fernández",
    position: "CEO",
    company: "Eco Shipyards of the South",
    content: "\"Engineer Francisco's vision for integrating sustainable practices into our shipbuilding processes has been revolutionary. His innovations have positioned us as leaders in eco-friendly shipbuilding, attracting clients committed to sustainability and opening up new business opportunities.\""
  },
  ca: {
    name: "María Fernández",
    position: "CEO",
    company: "Drassanes Ecològiques del Sud",
    content: "\"La visió de l'enginyer Francisco per integrar pràctiques sostenibles en els nostres processos de construcció naval ha estat revolucionària. Les seves innovacions ens han posicionat com a líders en construcció naval ecològica, atraient clients compromesos amb la sostenibilitat i obrint noves oportunitats de negoci.\""
  }
};

const testimonials = [
  {
    img: TestimonialImg01,
    clientImg: ClientImg01,
    name: "Antonio Méndez",
    position: "Director de Operaciones",
    company: "Astilleros Navales del Cantábrico",
    content:
      "\"La colaboración con el ingeniero Francisco ha sido fundamental para modernizar nuestras instalaciones. Su conocimiento en diseño naval nos permitió optimizar nuestros procesos de construcción, reduciendo los tiempos de entrega en un 25% y mejorando la calidad de nuestros buques pesqueros.\"",
    categories: [1, 2, 5],
    translationKey: "testimonial1"
  },
  {
    img: TestimonialImg02,
    clientImg: ClientImg02,
    name: "Elena Vázquez",
    position: "Gerente de Proyectos",
    company: "Grupo Marítimo Mediterráneo",
    content:
      "\"Gracias al ingeniero Francisco, pudimos implementar sistemas de propulsión más eficientes en nuestra flota de transporte. Su asesoría técnica fue clave para obtener las certificaciones internacionales necesarias, lo que nos ha abierto nuevos mercados en Europa y Asia.\"",
    categories: [1, 2, 4],
    translationKey: "testimonial2"
  },
  {
    img: TestimonialImg03,
    clientImg: ClientImg03,
    name: "Javier Rodríguez",
    position: "Director Técnico",
    company: "Consorcio Industrial Marítimo",
    content:
      "\"La implementación de tecnologías sostenibles en nuestras operaciones parecía un desafío insuperable. El ingeniero Francisco diseñó una estrategia integral que nos permitió reducir nuestro impacto ambiental en un 40% mientras aumentábamos nuestra eficiencia operativa.\"",
    categories: [1, 3, 5],
    translationKey: "testimonial3"
  },
  {
    img: TestimonialImg04,
    clientImg: ClientImg04,
    name: "Michael Thompson",
    position: "Chief Operations Officer",
    company: "Northern Sea Shipyards",
    content:
      "\"Working with Engineer Francisco transformed our offshore platform maintenance protocols. His structural analysis methodology identified critical stress points we had overlooked, potentially saving us millions in repairs and ensuring the safety of our crew.\"",
    categories: [1, 4],
    translationKey: "testimonial4"
  },
  {
    img: TestimonialImg05,
    clientImg: ClientImg05,
    name: "Carmen Ortiz",
    position: "Directora de Cumplimiento",
    company: "Autoridad Portuaria de Valencia",
    content:
      "\"La certificación de nuestras nuevas instalaciones portuarias fue un proceso complejo que el ingeniero Francisco gestionó con extraordinaria eficiencia. Su conocimiento de las normativas internacionales nos permitió cumplir con todos los estándares de seguridad y calidad en tiempo récord.\"",
    categories: [1, 3, 4],
    translationKey: "testimonial5"
  },
  {
    img: TestimonialImg06,
    clientImg: ClientImg06,
    name: "Raúl Jiménez",
    position: "Director de Innovación",
    company: "Naviera Atlántica",
    content:
      "\"El rediseño de nuestros sistemas de navegación realizado por el ingeniero Francisco ha revolucionado nuestra flota. La integración de tecnologías digitales ha mejorado la precisión de nuestras operaciones y reducido el consumo de combustible en un 22%, con un retorno de inversión en menos de 18 meses.\"",
    categories: [1, 3],
    translationKey: "testimonial6"
  },
  {
    img: TestimonialImg07,
    clientImg: ClientImg07,
    name: "Lucía Martínez",
    position: "Directora de Sostenibilidad",
    company: "Planta Industrial Marítima",
    content:
      "\"La transición hacia energías renovables en nuestras instalaciones costeras fue impecablemente planificada por el ingeniero Francisco. Su enfoque integral consideró aspectos técnicos, económicos y ambientales, permitiéndonos reducir nuestra huella de carbono mientras mejorábamos nuestra imagen corporativa.\"",
    categories: [1, 3, 5],
    translationKey: "testimonial7"
  },
  {
    img: TestimonialImg08,
    clientImg: ClientImg08,
    name: "Alberto Sanz",
    position: "Jefe de Inspección Técnica",
    company: "Bureau Veritas Naval España",
    content:
      "\"La metodología de certificación desarrollada por el ingeniero Francisco ha transformado nuestros procesos de inspección. Lo que antes requería semanas de trabajo ahora se completa en días, manteniendo los más altos estándares de seguridad y calidad que exigen nuestros clientes internacionales.\"",
    categories: [1, 4],
    translationKey: "testimonial8"
  },
  {
    img: TestimonialImg09,
    clientImg: ClientImg09,
    name: "María Fernández",
    position: "CEO",
    company: "Astilleros Ecológicos del Sur",
    content:
      "\"La visión del ingeniero Francisco para integrar prácticas sostenibles en nuestros procesos de construcción naval ha sido revolucionaria. Sus innovaciones nos han posicionado como líderes en construcción naval ecológica, atrayendo clientes comprometidos con la sostenibilidad y abriendo nuevas oportunidades de negocio.\"",
    categories: [1, 2, 5],
    translationKey: "testimonial9"
  },
];

export default function Testimonials() {
  const masonryContainer = useMasonry();
  const [category, setCategory] = useState<number>(1);
  const [filteredTestimonials, setFilteredTestimonials] = useState(testimonials);
  const { locale } = useLanguage();
  
  // Función para obtener el testimonio traducido según el idioma seleccionado
  const getTranslatedTestimonial = (testimonial) => {
    // Obtener el idioma actual
    const lang = locale === "ca" ? "ca" : locale === "en" ? "en" : "es";
    
    // Aplicar traducciones según la clave de traducción
    if (testimonial.translationKey === "testimonial1") {
      console.log(`Traduciendo testimonio 1 a ${lang}`);
      return {
        ...testimonial,
        name: testimonial1Translations[lang].name,
        position: testimonial1Translations[lang].position,
        company: testimonial1Translations[lang].company,
        content: testimonial1Translations[lang].content
      };
    } else if (testimonial.translationKey === "testimonial2") {
      console.log(`Traduciendo testimonio 2 a ${lang}`);
      return {
        ...testimonial,
        name: testimonial2Translations[lang].name,
        position: testimonial2Translations[lang].position,
        company: testimonial2Translations[lang].company,
        content: testimonial2Translations[lang].content
      };
    } else if (testimonial.translationKey === "testimonial3") {
      console.log(`Traduciendo testimonio 3 a ${lang}`);
      return {
        ...testimonial,
        name: testimonial3Translations[lang].name,
        position: testimonial3Translations[lang].position,
        company: testimonial3Translations[lang].company,
        content: testimonial3Translations[lang].content
      };
    } else if (testimonial.translationKey === "testimonial4") {
      console.log(`Traduciendo testimonio 4 a ${lang}`);
      return {
        ...testimonial,
        name: testimonial4Translations[lang].name,
        position: testimonial4Translations[lang].position,
        company: testimonial4Translations[lang].company,
        content: testimonial4Translations[lang].content
      };
    } else if (testimonial.translationKey === "testimonial5") {
      console.log(`Traduciendo testimonio 5 a ${lang}`);
      return {
        ...testimonial,
        name: testimonial5Translations[lang].name,
        position: testimonial5Translations[lang].position,
        company: testimonial5Translations[lang].company,
        content: testimonial5Translations[lang].content
      };
    } else if (testimonial.translationKey === "testimonial6") {
      console.log(`Traduciendo testimonio 6 a ${lang}`);
      return {
        ...testimonial,
        name: testimonial6Translations[lang].name,
        position: testimonial6Translations[lang].position,
        company: testimonial6Translations[lang].company,
        content: testimonial6Translations[lang].content
      };
    } else if (testimonial.translationKey === "testimonial7") {
      console.log(`Traduciendo testimonio 7 a ${lang}`);
      return {
        ...testimonial,
        name: testimonial7Translations[lang].name,
        position: testimonial7Translations[lang].position,
        company: testimonial7Translations[lang].company,
        content: testimonial7Translations[lang].content
      };
    } else if (testimonial.translationKey === "testimonial8") {
      console.log(`Traduciendo testimonio 8 a ${lang}`);
      return {
        ...testimonial,
        name: testimonial8Translations[lang].name,
        position: testimonial8Translations[lang].position,
        company: testimonial8Translations[lang].company,
        content: testimonial8Translations[lang].content
      };
    } else if (testimonial.translationKey === "testimonial9") {
      console.log(`Traduciendo testimonio 9 a ${lang}`);
      return {
        ...testimonial,
        name: testimonial9Translations[lang].name,
        position: testimonial9Translations[lang].position,
        company: testimonial9Translations[lang].company,
        content: testimonial9Translations[lang].content
      };
    }
    
    return testimonial;
  };
  
  useEffect(() => {
    // Filtrar testimonios cuando cambia la categoría o el idioma
    if (category === 1) {
      setFilteredTestimonials([...testimonials]);
    } else {
      setFilteredTestimonials(testimonials.filter(testimonial => testimonial.categories.includes(category)));
    }
  }, [category, locale]);

  return (
    <section id="testimonios" className="scroll-mt-24">
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="pb-12 md:pb-20">
        {/* Section header */}
        <div className="mx-auto max-w-3xl pb-12 text-center">
        <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
            <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
              {locale === "es" ? "Soluciones técnicas que transformaron retos en logros" :
               locale === "en" ? "Technical solutions that transformed challenges into achievements" :
               "Solucions tècniques que van transformar reptes en èxits"}
            </span>
          </div>
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
            {locale === "es" ? "Casos de Éxito en Ingeniería Naval" :
             locale === "en" ? "Success Stories in Naval Engineering" :
             "Casos d'Èxit en Enginyeria Naval"}
          </h2>
          <p className="text-lg text-indigo-200/65">
            {locale === "es" ? "Colaboraciones estratégicas con empresas líderes del sector marítimo e industrial que han transformado sus operaciones y mejorado su competitividad gracias a nuestras soluciones de ingeniería." :
             locale === "en" ? "Strategic collaborations with leading companies in the maritime and industrial sector that have transformed their operations and improved their competitiveness thanks to our engineering solutions." :
             "Col·laboracions estratègiques amb empreses líders del sector marítim i industrial que han transformat les seves operacions i millorat la seva competitivitat gràcies a les nostres solucions d'enginyeria."}
          </p>
          <div className="mt-4 flex justify-center">
            <span className="inline-flex items-center rounded-full bg-indigo-900/30 px-3 py-1 text-sm font-medium text-indigo-300">
              <svg className="mr-1.5 h-2 w-2 fill-indigo-400" viewBox="0 0 8 8">
                <circle cx="4" cy="4" r="4" />
              </svg>
              {locale === "es" ? "Empresas colaboradoras del sector marítimo e industrial" :
               locale === "en" ? "Collaborating companies in the maritime and industrial sector" :
               "Empreses col·laboradores del sector marítim i industrial"}
            </span>
          </div>
        </div>

        <div>
          {/* Buttons */}
          <div className="flex justify-center pb-12 max-md:hidden md:pb-16">
            <div className="relative inline-flex flex-wrap justify-center rounded-[1.25rem] bg-gray-800/40 p-1">
              {/* Button #1 */}
              <button
                className={`flex h-8 flex-1 items-center gap-2.5 whitespace-nowrap rounded-full px-3 text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-3 focus-visible:ring-indigo-200 ${category === 1 ? "relative bg-linear-to-b from-gray-900 via-gray-800/60 to-gray-900 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-indigo-500/0),--theme(--color-indigo-500/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]" : "opacity-65 transition-opacity hover:opacity-90"}`}
                aria-pressed={category === 1}
                onClick={() => setCategory(1)}
              >
                <svg
                  className={`fill-current ${category === 1 ? "text-indigo-500" : "text-gray-600"}`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height={16}
                >
                  <path d="M.062 10.003a1 1 0 0 1 1.947.455c-.019.08.01.152.078.19l5.83 3.333c.052.03.115.03.168 0l5.83-3.333a.163.163 0 0 0 .078-.188 1 1 0 0 1 1.947-.459 2.161 2.161 0 0 1-1.032 2.384l-5.83 3.331a2.168 2.168 0 0 1-2.154 0l-5.83-3.331a2.162 2.162 0 0 1-1.032-2.382Zm7.854-7.981-5.83 3.332a.17.17 0 0 0 0 .295l5.828 3.33c.054.031.118.031.17.002l5.83-3.333a.17.17 0 0 0 0-.294L8.085 2.023a.172.172 0 0 0-.17-.001ZM9.076.285l5.83 3.332c1.458.833 1.458 2.935 0 3.768l-5.83 3.333c-.667.38-1.485.38-2.153-.001l-5.83-3.332c-1.457-.833-1.457-2.935 0-3.767L6.925.285a2.173 2.173 0 0 1 2.15 0Z" />
                </svg>
                <span>{locale === "es" ? "Ver Todo" :
                       locale === "en" ? "View All" :
                       "Veure Tot"}</span>
              </button>
              {/* Button #2 */}
              <button
                className={`flex h-8 flex-1 items-center gap-2.5 whitespace-nowrap rounded-full px-3 text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-3 focus-visible:ring-indigo-200 ${category === 2 ? "relative bg-linear-to-b from-gray-900 via-gray-800/60 to-gray-900 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-indigo-500/0),--theme(--color-indigo-500/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]" : "opacity-65 transition-opacity hover:opacity-90"}`}
                aria-pressed={category === 2}
                onClick={() => setCategory(2)}
              >
                <svg
                  className={`fill-current ${category === 2 ? "text-indigo-500" : "text-gray-600"}`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height={16}
                >
                  <path d="M6.5 3.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM9 6.855A3.502 3.502 0 0 0 8 0a3.5 3.5 0 0 0-1 6.855v1.656L5.534 9.65a3.5 3.5 0 1 0 1.229 1.578L8 10.267l1.238.962a3.5 3.5 0 1 0 1.229-1.578L9 8.511V6.855Zm2.303 4.74c.005-.005.01-.01.013-.016l.012-.016a1.5 1.5 0 1 1-.025.032ZM3.5 11A1.497 1.497 0 0 1 5 12.5 1.5 1.5 0 1 1 3.5 11Z" />
                </svg>
                <span>{locale === "es" ? "Astilleros" :
                       locale === "en" ? "Shipyards" :
                       "Drassanes"}</span>
              </button>
              {/* Button #3 */}
              <button
                className={`flex h-8 flex-1 items-center gap-2.5 whitespace-nowrap rounded-full px-3 text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-3 focus-visible:ring-indigo-200 ${category === 3 ? "relative bg-linear-to-b from-gray-900 via-gray-800/60 to-gray-900 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-indigo-500/0),--theme(--color-indigo-500/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]" : "opacity-65 transition-opacity hover:opacity-90"}`}
                aria-pressed={category === 3}
                onClick={() => setCategory(3)}
              >
                <svg
                  className={`fill-current ${category === 3 ? "text-indigo-500" : "text-gray-600"}`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height={16}
                >
                  <path d="M2.428 10c.665-1.815 1.98-3.604 3.44-4.802-.6-1.807-1.443-3.079-2.29-3.18-1.91-.227-2.246 2.04-.174 2.962a1 1 0 1 1-.813 1.827C-1.407 5.028-.589-.491 3.815.032c1.605.191 2.925 1.811 3.79 4.07.979-.427 1.937-.51 2.735-.092.818.429 1.143 1.123 1.294 2.148.015.1.022.149.043.32.542-.537 1.003-.797 1.693-.622.64.162.894.493 1.195 1.147l.018.04a1 1 0 0 1 1.133 1.61c-.46.47-1.12.574-1.744.398a1.661 1.661 0 0 1-.87-.592 2.127 2.127 0 0 1-.224-.349 3.225 3.225 0 0 1-.55.477c-.377.253-.8.368-1.259.267-.993-.218-1.21-.779-1.367-2.05-.027-.22-.033-.262-.046-.353-.067-.452-.144-.617-.244-.67-.225-.118-.665-.013-1.206.278.297 1.243.475 2.587.516 3.941H15a1 1 0 0 1 0 2H8.68l-.025.285c-.173 1.918-.906 3.381-2.654 3.668-1.5.246-3.013-.47-3.677-1.858-.29-.637-.39-1.35-.342-2.095H1a1 1 0 0 1 0-2h1.428Zm2.11 0h2.175a18.602 18.602 0 0 0-.284-2.577c-.205.202-.408.42-.606.654A9.596 9.596 0 0 0 4.537 10Zm2.135 2H3.942c-.032.465.03.888.194 1.25.258.538.89.836 1.54.73.546-.09.888-.772.988-1.875L6.673 12Z" />
                </svg>
                <span>{locale === "es" ? "Tecnología Naval" :
                       locale === "en" ? "Naval Technology" :
                       "Tecnologia Naval"}</span>
              </button>
              {/* Button #4 */}
              <button
                className={`flex h-8 flex-1 items-center gap-2.5 whitespace-nowrap rounded-full px-3 text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-3 focus-visible:ring-indigo-200 ${category === 4 ? "relative bg-linear-to-b from-gray-900 via-gray-800/60 to-gray-900 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-indigo-500/0),--theme(--color-indigo-500/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]" : "opacity-65 transition-opacity hover:opacity-90"}`}
                aria-pressed={category === 4}
                onClick={() => setCategory(4)}
              >
                <svg
                  className={`fill-current ${category === 4 ? "text-indigo-500" : "text-gray-600"}`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height={16}
                >
                  <path d="M3.757 3.758a6 6 0 0 1 8.485 8.485 5.992 5.992 0 0 1-5.301 1.664 1 1 0 1 0-.351 1.969 8 8 0 1 0-4.247-2.218 1 1 0 0 0 1.415-.001L9.12 8.294v1.827a1 1 0 1 0 2 0v-4.2a.997.997 0 0 0-1-1.042H5.879a1 1 0 1 0 0 2h1.829l-4.599 4.598a6 6 0 0 1 .648-7.719Z" />
                </svg>
                <span>{locale === "es" ? "Certificación" :
                       locale === "en" ? "Certification" :
                       "Certificació"}</span>
              </button>
              {/* Button #5 */}
              <button
                className={`flex h-8 flex-1 items-center gap-2.5 whitespace-nowrap rounded-full px-3 text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-3 focus-visible:ring-indigo-200 ${category === 5 ? "relative bg-linear-to-b from-gray-900 via-gray-800/60 to-gray-900 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-indigo-500/0),--theme(--color-indigo-500/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]" : "opacity-65 transition-opacity hover:opacity-90"}`}
                aria-pressed={category === 5}
                onClick={() => setCategory(5)}
              >
                <svg
                  className={`fill-current ${category === 5 ? "text-indigo-500" : "text-gray-600"}`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height={16}
                >
                  <path d="M13.95.879a3 3 0 0 0-4.243 0L1.293 9.293a1 1 0 0 0-.274.51l-1 5a1 1 0 0 0 1.177 1.177l5-1a1 1 0 0 0 .511-.273l1.16-1.16a1 1 0 0 0-1.414-1.414l-.946.946-3.232.646.646-3.232 8.2-8.2a1 1 0 0 1 1.414 0l1.172 1.172a1 1 0 0 1 0 1.414l-.55.549a1 1 0 0 0 1.415 1.414l.55-.55a3 3 0 0 0 0-4.241L13.948.879ZM3.25 4.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Zm11.474 6.029-1.521-.752-.752-1.521c-.168-.341-.73-.341-.896 0l-.752 1.52-1.521.753a.498.498 0 0 0 0 .896l1.52.752.753 1.52a.5.5 0 0 0 .896 0l.752-1.52 1.52-.752a.498.498 0 0 0 0-.896Z" />
                </svg>
                <span>{locale === "es" ? "Sostenibilidad" :
                       locale === "en" ? "Sustainability" :
                       "Sostenibilitat"}</span>
              </button>
            </div>
          </div>

          {/* Cards */}
          <div
            className="mx-auto grid max-w-sm items-stretch gap-8 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr"
          >
            {filteredTestimonials.map((testimonial, index) => {
              // Aplicar traducciones a los testimonios
              const translatedTestimonial = getTranslatedTestimonial(testimonial);
              return (
                <div key={index} className="group h-full">
                  <ServiceTestimonial 
                    img={translatedTestimonial.img}
                    clientImg={translatedTestimonial.clientImg}
                    name={translatedTestimonial.name}
                    position={translatedTestimonial.position}
                    company={translatedTestimonial.company}
                    content={translatedTestimonial.content}
                    categories={translatedTestimonial.categories}
                    category={category}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}
