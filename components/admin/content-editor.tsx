"use client"

import { useState } from 'react'
import { useLanguage } from '@/contexts/language-context'

export default function ContentEditor() {
  const { locale } = useLanguage()
  const [activeTab, setActiveTab] = useState('hero')
  
  // Secciones del sitio web basadas en la estructura real
  const siteSections = [
    'hero',
    'features',
    'specialization',
    'industrial',
    'naval',
    'testimonials',
    'cta',
    'contact'
  ]
  const [saved, setSaved] = useState(false)

  // Traducciones para el editor de contenido
  const editorText = {
    title: {
      es: 'Editor de Contenido',
      en: 'Content Editor',
      ca: 'Editor de Contingut'
    },
    description: {
      es: 'Edita el contenido del sitio web en diferentes idiomas',
      en: 'Edit the website content in different languages',
      ca: 'Edita el contingut del lloc web en diferents idiomes'
    },
    mainTitle: {
      es: 'Título Principal',
      en: 'Main Title',
      ca: 'Títol Principal'
    },
    subtitle: {
      es: 'Subtítulo',
      en: 'Subtitle',
      ca: 'Subtítol'
    },
    button: {
      es: 'Texto del Botón',
      en: 'Button Text',
      ca: 'Text del Botó'
    },
    sections: {
      hero: {
        es: 'Inicio',
        en: 'Home',
        ca: 'Inici'
      },
      features: {
        es: 'Soluciones de Ingeniería',
        en: 'Engineering Solutions',
        ca: 'Solucions d\'Enginyeria'
      },
      specialization: {
        es: 'Áreas de Especialización',
        en: 'Specialization Areas',
        ca: 'Àrees d\'Especialització'
      },
      
      // En realidad es CONSULTORÍA
      industrial: {
        es: 'Servicios de Consultoría Profesional',
        en: 'Professional Consulting Services',
        ca: 'Serveis de Consultoria Professional'
      },
      naval: {
        es: 'Ingeniería Naval y Offshore',
        en: 'Naval and Offshore Engineering',
        ca: 'Enginyeria Naval i Offshore'
      },
      testimonials: {
        es: 'Testimonios',
        en: 'Testimonials',
        ca: 'Testimonis'
      },
      cta: {
        es: 'Llamada a la Acción',
        en: 'Call to Action',
        ca: 'Crida a l\'Acció'
      },
      contact: {
        es: 'Contacto',
        en: 'Contact',
        ca: 'Contacte'
      }
    },
    languages: {
      es: {
        es: 'Español',
        en: 'Spanish',
        ca: 'Espanyol'
      },
      en: {
        es: 'Inglés',
        en: 'English',
        ca: 'Anglès'
      },
      ca: {
        es: 'Catalán',
        en: 'Catalan',
        ca: 'Català'
      }
    },
    save: {
      es: 'Guardar Cambios',
      en: 'Save Changes',
      ca: 'Desar Canvis'
    },
    saved: {
      es: 'Cambios guardados correctamente',
      en: 'Changes saved successfully',
      ca: 'Canvis desats correctament'
    },
    mainTitle: {
      es: 'Título Principal',
      en: 'Main Title',
      ca: 'Títol Principal'
    },
    subtitle: {
      es: 'Subtítulo',
      en: 'Subtitle',
      ca: 'Subtítol'
    },
    description: {
      es: 'Edición de contenido del Sitio Web del Ing. Francisco Arrazola Méndez',
      en: 'Editing the content of the website of Eng. Francisco Arrazola Méndez',
      ca: 'Edició de contingut del Lloc Web de l\'Ing. Francisco Arrazola Méndez'
    },
    button: {
      es: 'Texto del Botón',
      en: 'Button Text',
      ca: 'Text del Botó'
    }
  }

  // Contenido inicial para cada sección en diferentes idiomas
  const [content, setContent] = useState({
    hero: {
      es: {
        title: 'Ing. Francisco Arrazola Méndez',
        subtitle: 'Ingeniero Naval y Oceánico',
        description: 'Con más de 20 Años de Experiencia, brindo soluciones técnicas y asesoramiento especializado para el sector marítimo, offshore e industrial.',
        button: 'Ver mi Trabajo',
        buttonLink: 'Contáctame',
        backgroundImage: '/images/hero-background.jpg'
      },
      en: {
        title: 'Ing. Francisco Arrazola Méndez',
        subtitle: 'Naval and Ocean Engineer',
        description: 'With over 20 Years of Experience, I provide technical solutions and specialized consulting for the maritime, offshore and industrial sectors.',
        button: 'View my Work',
        buttonLink: 'Contact me',
        backgroundImage: '/images/hero-background.jpg'
      },
      ca: {
        title: 'Ing. Francisco Arrazola Méndez',
        subtitle: 'Enginyer Naval i Oceànico',
        description: 'Amb més de 20 Anys d\'Experiència, ofereixo solucions tècniques i assessorament especialitzat per al sector marítim, offshore i industrial.',
        button: 'Veure el meu Treball',
        buttonLink: 'Contacta\'m',
        backgroundImage: '/images/hero-background.jpg'
      }
    },
    features: {
      es: {
        title: 'Diseño Naval',
        subtitle: 'Diseño de Embarcación Offshore',
        description: 'Diseño y cálculos estructurales para plataforma de trabajo en alta mar.',
        services: [
          {
            title: 'Diseño Naval',
            description: 'Diseño de Embarcación Offshore.',
            icon: 'Diseño y cálculos estructurales para plataforma de trabajo en alta mar.'
          },
          {
            title: 'Ingeniería Marina',
            description: 'Optimización de Sistemas de Propulsión.',
            icon: 'Mejora de eficiencia en sistemas de propulsión para buques comerciales.'
          },
          {
            title: 'Análisis Estructural',
            description: 'Análisis Estructural de Buque Carguero.',
            icon: 'Evaluación y reforzamiento estructural para buque de carga de 150m'
          },
        ]
      },
      en: {
        title: 'Naval Design',
        subtitle: 'Offshore Vessel Design',
        description: 'Design and structural calculations for offshore work platforms.',
        services: [
          {
            title: 'Naval Design',
            description: 'Offshore Vessel Design.',
            icon: 'Design and structural calculations for offshore work platforms.'
          },
          {
            title: 'Marine Engineering',
            description: 'Propulsion Systems Optimization.',
            icon: 'Efficiency improvement in propulsion systems for commercial vessels'
          },
          {
            title: 'Structural Analysis',
            description: 'Structural Analysis of Cargo Ship.',
            icon: 'Evaluation and structural reinforcement for 150m cargo ship'
          },
        ]
      },
      ca: {
        title: 'Disseny Naval',
        subtitle: 'Disseny d\'Embarcació Offshore',
        description: 'Disseny i càlculs estructurals per a plataforma de treball en alta mar.',
        services: [
          {
            title: 'Consultoria',
            description: 'Assessorament especialitzat en projectes navals i industrials.',
            icon: 'chart-bar'
          },
          {
            title: 'Disseny Naval',
            description: 'Disseny d\'embarcacions i estructures marítimes.',
            icon: 'ship'
          },
          {
            title: 'Enginyeria Industrial',
            description: 'Solucions per a la indústria i processos de fabricació.',
            icon: 'cog'
          },
        ]
      }
    },
    specialization: {
      es: {
        title: 'Experiencia Técnica',
        subtitle: 'Áreas de Especialización',
        description: 'Competencias técnicas y experiencia en diferentes campos de la ingeniería naval y oceánica, desarrolladas a lo largo de más de dos décadas de trayectoria profesional.',
        items: [
          {
            title: 'Diseño Naval',
            description: 'Diseño y cálculo estructural de embarcaciones comerciales, recreativas y plataformas offshore con software especializado.',
          },
          {
            title: 'Normativa Marítima',
            description: 'Especialista en normativa internacional (IMO, SOLAS, MARPOL) y certificaciones para embarcaciones y estructuras marinas.',
          },
          {
            title: 'Ingeniería Offshore',
            description: 'Desarrollo de soluciones para plataformas y estructuras marinas en condiciones extremas, con énfasis en seguridad y eficiencia.',
          }
        ]
      },
      en: {
        title: 'Technical Expertise',
        subtitle: 'Specialization Areas',
        description: 'Technical skills and experience in various fields of naval and ocean engineering, developed over more than two decades of professional career.',
        items: [
          {
            title: 'Naval Design',
            description: 'Design and structural calculation of commercial vessels, recreational boats, and offshore platforms using specialized software.',
          },
          {
            title: 'Maritime Regulations',
            description: 'Specialist in international regulations (IMO, SOLAS, MARPOL) and certifications for vessels and marine structures.',
          },
          {
            title: 'Offshore Engineering',
            description: 'Development of solutions for offshore platforms and structures under extreme conditions, with emphasis on safety and efficiency.',
          }
        ]
      },
      ca: {
        title: 'Experiència Tècnica',
        subtitle: 'Àrees d\'Especialització',
        description: 'Competències tècniques i experiència en diferents àmbits de l’enginyeria naval i oceànica, desenvolupades al llarg de més de dues dècades de trajectòria professional.',
        items: [
          {
            title: 'Disseny Naval',
            description: 'Disseny i càlcul estructural d’embarcacions comercials, d’esbarjo i plataformes offshore amb programari especialitzat.',
          },
          {
            title: 'Normativa Marítima',
            description: 'Especialista en normativa internacional (IMO, SOLAS, MARPOL) i certificacions per a embarcacions i estructures marines.',
          },
          {
            title: 'Enginyeria Offshore',
            description: 'Desenvolupament de solucions per a plataformes i estructures marines en condicions extremes, amb èmfasi en la seguretat i l’eficiència.',
          }
        ]
      }
    },
    
    testimonials: {
      es: {
        title: 'Testimonios',
        subtitle: 'Lo que dicen nuestros clientes',
        description: 'Lo que dicen nuestros clientes sobre nuestros servicios.',
        testimonials: [
          {
            name: 'Carlos Rodríguez',
            company: 'Naviera Mediterránea',
            text: 'Excelente servicio y profesionalidad en todos los proyectos que hemos realizado juntos.',
            image: '/images/testimonials/testimonial-1.jpg'
          },
          {
            name: 'María Gómez',
            company: 'Industrias Marítimas',
            text: 'Su experiencia en el sector naval ha sido clave para el éxito de nuestro proyecto.',
            image: '/images/testimonials/testimonial-2.jpg'
          },
          {
            name: 'Javier López',
            company: 'Offshore Solutions',
            text: 'Profesionales altamente cualificados y comprometidos con la excelencia.',
            image: '/images/testimonials/testimonial-3.jpg'
          }
        ]
      },
      en: {
        title: 'Testimonials',
        subtitle: 'What our clients say',
        description: 'What our clients say about our services.',
        testimonials: [
          {
            name: 'Carlos Rodríguez',
            company: 'Mediterranean Shipping',
            text: 'Excellent service and professionalism in all the projects we have carried out together.',
            image: '/images/testimonials/testimonial-1.jpg'
          },
          {
            name: 'María Gómez',
            company: 'Maritime Industries',
            text: 'Their experience in the naval sector has been key to the success of our project.',
            image: '/images/testimonials/testimonial-2.jpg'
          },
          {
            name: 'Javier López',
            company: 'Offshore Solutions',
            text: 'Highly qualified professionals committed to excellence.',
            image: '/images/testimonials/testimonial-3.jpg'
          }
        ]
      },
      ca: {
        title: 'Testimonis',
        subtitle: 'El que diuen els nostres clients',
        description: 'El que diuen els nostres clients sobre els nostres serveis.',
        testimonials: [
          {
            name: 'Carlos Rodríguez',
            company: 'Naviera Mediterrània',
            text: 'Excel·lent servei i professionalitat en tots els projectes que hem realitzat junts.',
            image: '/images/testimonials/testimonial-1.jpg'
          },
          {
            name: 'María Gómez',
            company: 'Indústries Marítimes',
            text: 'La seva experiència en el sector naval ha estat clau per a l\'exit del nostre projecte.',
            image: '/images/testimonials/testimonial-2.jpg'
          },
          {
            name: 'Javier López',
            company: 'Offshore Solutions',
            text: 'Professionals altament qualificats i compromesos amb l\'excel·lència.',
            image: '/images/testimonials/testimonial-3.jpg'
          }
        ]
      }
    },
    contact: {
      es: {
        title: 'Contacto',
        subtitle: 'Estamos aquí para ayudarte',
        description: 'Ponte en contacto con nosotros para más información.',
        address: 'Calle Principal 123, Barcelona, España',
        email: 'contacto@incingenieros.com',
        phone: '+34 123 456 789',
        formNameLabel: 'Nombre',
        formEmailLabel: 'Email',
        formMessageLabel: 'Mensaje',
        formButtonText: 'Enviar mensaje'
      },
      en: {
        title: 'Contact',
        subtitle: 'We are here to help you',
        description: 'Get in touch with us for more information.',
        address: 'Main Street 123, Barcelona, Spain',
        email: 'contact@incingenieros.com',
        phone: '+34 123 456 789',
        formNameLabel: 'Name',
        formEmailLabel: 'Email',
        formMessageLabel: 'Message',
        formButtonText: 'Send message'
      },
      ca: {
        title: 'Contacte',
        subtitle: 'Estem aquí per ajudar-te',
        description: 'Posa\'t en contacte amb nosaltres per a més informació.',
        address: 'Carrer Principal 123, Barcelona, Espanya',
        email: 'contacte@incingenieros.com',
        phone: '+34 123 456 789',
        formNameLabel: 'Nom',
        formEmailLabel: 'Email',
        formMessageLabel: 'Missatge',
        formButtonText: 'Enviar missatge'
      }
    },
    // En realidad aquí Industrial es CONSULTORÍA
    industrial: {
      es: {
        title: 'Servicios de Consultoría Profesional',
        subtitle: 'Asesoría Especializada',
        description: 'Ofrezco servicios de consultoría técnica especializada para proyectos marítimos, navales e industriales, aportando soluciones eficientes y personalizadas a cada cliente.',
        categories: ['Todos', 'Naval', 'Industrial', 'Offshore', 'Consultoría'],
        projects: [
          {
            title: 'Evaluación Técnica de Proyectos',
            category: 'Naval',
            description: 'Realizo un análisis detallado de proyectos en fases iniciales o en curso, teniendo en cuenta la normativa vigente, la viabilidad técnica y el impacto económico. Los informes que elaboro están diseñados para servir como herramienta en la toma de decisiones estratégicas.',
            image: '/images/projects/project-1.jpg'
          },
          {
            title: 'Estudios de Viabilidad',
            category: 'Industrial',
            description: 'Determino si un proyecto es viable desde los puntos de vista técnico, económico y logístico. Esta evaluación permite anticipar obstáculos, estimar recursos necesarios y definir un plan de acción efectivo.',
            image: '/images/projects/project-2.jpg'
          },
          {
            title: 'Supervisión de Obras',
            category: 'Offshore',
            description: 'Acompaño la ejecución de proyectos asegurando que se cumplan los estándares técnicos, los plazos de entrega y los criterios de calidad. La supervisión puede ser puntual o continua, en función del alcance de la obra.',
            image: '/images/projects/project-3.jpg'
          },
          {
            title: 'Optimización de Procesos',
            category: 'Naval',
            description: 'Identifico oportunidades de mejora en líneas de producción o ejecución de proyectos, con el objetivo de reducir tiempos, costos y errores. Trabajo con metodologías como Lean Manufacturing y Six Sigma.',
            image: '/images/projects/project-1.jpg'
          },
          {
            title: 'Consultoría en Certificación',
            category: 'Industrial',
            description: 'Acompaño a empresas y proyectos durante los procesos de certificación técnica y clasificación de buques o instalaciones, colaborando con entidades reconocidas como Bureau Veritas, DNV, Lloyd\'s Register o ABS.',
            image: '/images/projects/project-2.jpg'
          },
          {
            title: 'Asistencia Técnica Internacional',
            category: 'Offshore',
            description: 'Brindo soporte técnico a empresas que participan en proyectos internacionales, asegurando la adaptación a normativas locales e internacionales, la coordinación entre equipos multidisciplinares y el seguimiento de estándares de calidad globales.',
            image: '/images/projects/project-3.jpg'
          }
        ]
      },
      en: {
        title: 'Professional Consulting Services',
        subtitle: 'Specialized Advisory',
        description: 'I offer specialized technical consulting services for maritime, naval and industrial projects, providing efficient and customized solutions to each client.',
        categories: ['All', 'Naval', 'Industrial', 'Offshore', 'Consulting'],
        projects: [
          {
            title: 'Technical Project Evaluation',
            category: 'Naval',
            description: 'I perform a detailed analysis of projects in initial or ongoing phases, taking into account current regulations, technical feasibility and economic impact. The reports I prepare are designed to serve as a tool for strategic decision-making.',
            image: '/images/projects/project-1.jpg'
          },
          {
            title: 'Feasibility Studies',
            category: 'Industrial',
            description: 'I determine if a project is viable from technical, economic and logistical points of view. This evaluation allows anticipating obstacles, estimating necessary resources and defining an effective action plan.',
            image: '/images/projects/project-2.jpg'
          },
          {
            title: 'Project Supervision:',
            category: 'Offshore',
            description: 'I accompany the execution of projects ensuring that technical standards, delivery deadlines and quality criteria are met. Supervision can be punctual or continuous, depending on the scope of the work.',
            image: '/images/projects/project-3.jpg'
          },
          {
            title: 'Process Optimization',
            category: 'Naval',
            description: 'I identify opportunities for improvement in production lines or project execution, with the aim of reducing time, costs and errors. I work with methodologies such as Lean Manufacturing and Six Sigma.',
            image: '/images/projects/project-1.jpg'
          },
          {
            title: 'Certification Consulting',
            category: 'Industrial',
            description: 'I accompany companies and projects during technical certification processes and classification of ships or facilities, collaborating with recognized entities such as Bureau Veritas, DNV, Lloyd\'s Register or ABS.',
            image: '/images/projects/project-2.jpg'
          },
          {
            title: 'International Technical Assistance',
            category: 'Offshore',
            description: 'I provide technical support to companies participating in international projects, ensuring adaptation to local and international regulations, coordination between multidisciplinary teams and monitoring of global quality standards',
            image: '/images/projects/project-3.jpg'
          }
        ]
      },
      ca: {
        title: 'Serveis de Consultoria Professional',
        subtitle: 'Assessoria Especialitzada',
        description: 'Ofereixo serveis de consultoria tècnica especialitzada per a projectes marítims, navals i industrials, aportant solucions eficients i personalitzades a cada client.',
        categories: ['Tots', 'Naval', 'Industrial', 'Offshore', 'Consultoria'],
        projects: [
          {
            title: 'Avaluació Tècnica de Projectes',
            category: 'Naval',
            description: 'Realitzo una anàlisi detallada de projectes en fases inicials o en curs, tenint en compte la normativa vigent, la viabilitat tècnica i l\'impacte econòmic. Els informes que elaboro estan dissenyats per servir com a eina en la presa de decisions estratègiques.',
            image: '/images/projects/project-1.jpg'
          },
          {
            title: 'Estudis de Viabilitat',
            category: 'Industrial',
            description: 'Determino si un projecte és viable des dels punts de vista tècnic, econòmic i logístic. Aquesta avaluació permet anticipar obstacles, estimar recursos necessaris i definir un pla d\'acció efectiu.',
            image: '/images/projects/project-2.jpg'
          },
          {
            title: 'Supervisió d\'Obres',
            category: 'Offshore',
            description: 'Acompanyo l\'execució de projectes assegurant que es compleixin els estàndards tècnics, els terminis de lliurament i els criteris de qualitat. La supervisió pot ser puntual o contínua, en funció de l\'abast de l\'obra.',
            image: '/images/projects/project-3.jpg'
          },
          {
            title: 'Optimització de Processos',
            category: 'Naval',
            description: 'Identifico oportunitats de millora en línies de producció o execució de projectes, amb l\'objectiu de reduir temps, costos i errors. Treballo amb metodologies com Lean Manufacturing i Six Sigma.',
            image: '/images/projects/project-1.jpg'
          },
          {
            title: 'Consultoria en Certificació',
            category: 'Industrial',
            description: 'Acompanyo a empreses i projectes durant els processos de certificació tècnica i classificació de vaixells o instal·lacions, col·laborant amb entitats reconegudes com Bureau Veritas, DNV, Lloyd\'s Register o ABS.',
            image: '/images/projects/project-2.jpg'
          },
          {
            title: 'Assistència Tècnica Internacional',
            category: 'Offshore',
            description: 'Ofereixo suport tècnic a empreses que participen en projectes internacionals, assegurant l\'adaptació a normatives locals i internacionals, la coordinació entre equips multidisciplinaris i el seguiment d\'estàndards de qualitat globals.',
            image: '/images/projects/project-3.jpg'
          }
        ]
      }
    },
    naval: {
      es: {
        title: 'Ingeniería Naval y Offshore',
        subtitle: 'Expertos en el sector marítimo',
        description: 'Soluciones especializadas para embarcaciones y estructuras marítimas con los más altos estándares.',
      },
      en: {
        title: 'Naval and Offshore Engineering',
        subtitle: 'Experts in the maritime sector',
        description: 'Specialized solutions for vessels and maritime structures with the highest standards.',
      },
      ca: {
        title: 'Assistència Tècnica Internacional',
        subtitle: 'Experts en el sector marítim',
        description: 'Solucions especialitzades per a embarcacions i estructures marítimes amb els més alts estàndards.',
      }
    },
    cta: {
      es: {
        title: 'Trabajemos juntos',
        subtitle: 'Contacta con nosotros',
        description: 'Estamos listos para ayudarte con tu próximo proyecto de ingeniería.',
        buttonText: 'Contactar ahora',
        buttonLink: '#contacto'
      },
      en: {
        title: 'Let\'s work together',
        subtitle: 'Contact us',
        description: 'We are ready to help you with your next engineering project.',
        buttonText: 'Contact now',
        buttonLink: '#contact'
      },
      ca: {
        title: 'Treballem junts',
        subtitle: 'Contacta amb nosaltres',
        description: 'Estem preparats per ajudar-te amb el teu proper projecte d\'enginyeria.',
        buttonText: 'Contactar ara',
        buttonLink: '#contacte'
      }
    }
  })

  // Manejar cambios en los campos de texto
  const handleChange = (section: string, language: string, field: string, value: string) => {
    // Verificar que la sección y el idioma existen
    if (!content[section] || !content[section][language]) {
      console.error(`La sección ${section} o el idioma ${language} no existen en el contenido`)
      return
    }

    setContent({
      ...content,
      [section]: {
        ...content[section],
        [language]: {
          ...content[section][language],
          [field]: value
        }
      }
    })
    setSaved(false)
  }

  // Guardar cambios
  const handleSave = () => {
    // Aquí se implementaría la lógica para guardar los cambios en una base de datos
    setSaved(true)
    setTimeout(() => {
      setSaved(false)
    }, 3000)
  }

  // Renderizar campos de edición para la sección activa
  const renderEditorFields = () => {
    // Asegurar que la sección activa existe en el contenido
    const sectionContent = content[activeTab] || {}
    if (!sectionContent.es) return <div className="text-center p-6 text-indigo-300">Esta sección aún no está configurada</div>
    
    // Determinar qué campos mostrar en la vista principal (los más importantes)
    const getPrimaryFields = (section) => {
      const commonFields = ['title', 'subtitle', 'description']
      
      switch(section) {
        case 'hero':
          return [...commonFields, 'button', 'buttonLink']
        case 'features':
        case 'specialization':
        case 'industrial':
        case 'naval':
          return [...commonFields]
        case 'testimonials':
          return [...commonFields]
        case 'cta':
          return [...commonFields, 'buttonText', 'buttonLink']
        case 'contact':
          return [...commonFields, 'email', 'phone', 'address']
        default:
          return Object.keys(sectionContent.es).filter(field => 
            typeof sectionContent.es[field] === 'string' && 
            !field.includes('Image') && 
            !field.includes('icon')
          )
      }
    }
    
    const primaryFields = getPrimaryFields(activeTab)
    
    // Renderizar vista previa de la sección
    const renderSectionPreview = () => {
      if (!sectionContent || !sectionContent.es) return null;

      const previewTitle = locale === 'es'
            ? 'Vista previa'
            : locale === 'en'
            ? 'Preview'
            : 'Vista prèvia';

            const currentContent = locale === 'es' 
            ? sectionContent.es 
            : locale === 'en' 
            ? sectionContent.en 
            : sectionContent.ca;
      
      switch(activeTab) {
        case 'hero':
          return (
            <div className="bg-gray-800 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-medium text-indigo-300 mb-4">{previewTitle}</h3>
              <div className="bg-gray-900 p-6 rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-indigo-500 to-purple-600"></div>
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold text-white mb-2">{sectionContent.es.title || ''}</h2>
                  <p className="text-lg text-indigo-200 mb-4">{sectionContent.es.subtitle || ''}</p>
                  <p className="text-indigo-300 mb-6">{sectionContent.es.description || ''}</p>
                  <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors">
                    {sectionContent.es.button || 'Contactar'}
                  </button>
                </div>
              </div>
            </div>
          )
        case 'features':
          
          return (
            <div className="bg-gray-800 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-medium text-indigo-300 mb-4">{previewTitle}</h3>
              <div className="bg-gray-900 p-6 rounded-lg">
                <h2 className="text-xl font-bold text-white mb-2">{currentContent.title || ''}</h2>
                <p className="text-indigo-200 mb-2">{currentContent.subtitle || ''}</p>
                <p className="text-indigo-300 mb-6">{currentContent.description || ''}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {currentContent.services?.map((service, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded-lg">
                <h3 className="font-medium text-white mb-2">{service.title || ''}</h3>
                <p className="text-sm text-indigo-200">{service.description || ''}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
        case 'specialization':
          return (
            <div className="bg-gray-800 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-medium text-indigo-300 mb-4">{previewTitle}</h3>
              <div className="bg-gray-900 p-6 rounded-lg">
                <h2 className="text-xl font-bold text-white mb-2">{currentContent.title || ''}</h2>
                <p className="text-indigo-200 mb-2">{currentContent.subtitle || ''}</p>
                <p className="text-indigo-300 mb-6">{currentContent.description || ''}</p>
                {currentContent.items && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    {currentContent.items.map((item, index) => (
                      <div key={index} className="bg-gray-800 p-4 rounded-lg">
                        <h3 className="font-medium text-white mb-2">{item.title || ''}</h3>
                        <p className="text-sm text-indigo-200">{item.description || ''}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )
        case 'industrial':
          return (
            <div className="bg-gray-800 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-medium text-indigo-300 mb-4">{previewTitle}</h3>
              <div className="bg-gray-900 p-6 rounded-lg">
                <h2 className="text-xl font-bold text-white mb-2">{currentContent.title || ''}</h2>
                <p className="text-indigo-200 mb-2">{currentContent.subtitle || ''}</p>
                <p className="text-indigo-300 mb-6">{currentContent.description || ''}</p>
                {currentContent.projects && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    {currentContent.projects.map((projects, index) => (
                      <div key={index} className="bg-gray-800 p-4 rounded-lg">
                        <h3 className="font-medium text-white mb-2">{projects.title || ''}</h3>
                        <p className="text-sm text-indigo-200">{projects.description || ''}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )
        case 'naval':
          return (
            <div className="bg-gray-800 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-medium text-indigo-300 mb-4">{previewTitle}</h3>
              <div className="bg-gray-900 p-6 rounded-lg">
                <h2 className="text-xl font-bold text-white mb-2">{sectionContent.es.title || ''}</h2>
                <p className="text-indigo-200 mb-2">{sectionContent.es.subtitle || ''}</p>
                <p className="text-indigo-300">{sectionContent.es.description || ''}</p>
              </div>
            </div>
          )
        case 'testimonials':
          return (
            <div className="bg-gray-800 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-medium text-indigo-300 mb-4">{previewTitle}</h3>
              <div className="bg-gray-900 p-6 rounded-lg">
                <h2 className="text-xl font-bold text-white mb-4">{sectionContent.es.title || ''}</h2>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <p className="text-indigo-200 italic mb-4">"{sectionContent.es.description || ''}"</p>
                  <p className="text-white font-medium">Cliente satisfecho</p>
                </div>
              </div>
            </div>
          )
        case 'contact':
          return (
            <div className="bg-gray-800 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-medium text-indigo-300 mb-4">{previewTitle}</h3>
              <div className="bg-gray-900 p-6 rounded-lg">
                <h2 className="text-xl font-bold text-white mb-2">{sectionContent.es.title || ''}</h2>
                <p className="text-indigo-200 mb-4">{sectionContent.es.description || ''}</p>
                <div className="space-y-2 text-indigo-300">
                  {sectionContent.es.email && (
                    <p className="flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                      {sectionContent.es.email}
                    </p>
                  )}
                  {sectionContent.es.phone && (
                    <p className="flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
                      {sectionContent.es.phone}
                    </p>
                  )}
                  {sectionContent.es.address && (
                    <p className="flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
                      {sectionContent.es.address}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )
        default:
          return null
      }
    }
    
    return (
      <div className="grid grid-cols-1 gap-8">
        {/* Encabezado de la sección */}
        <div className="bg-gray-800 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-indigo-300 mb-2">
            {locale === 'es'
              ? editorText.sections[activeTab]?.es || activeTab
              : locale === 'en'
              ? editorText.sections[activeTab]?.en || activeTab
              : editorText.sections[activeTab]?.ca || activeTab}
          </h3>
          <p className="text-indigo-200/65 mb-4">
    {locale === 'es'
      ? 'Edita los campos principales de esta sección en los tres idiomas disponibles'
      : locale === 'en'
      ? 'Edit the main fields of this section in the three available languages'
      : 'Edita els camps principals d\'aquesta secció en els tres idiomes disponibles'}
  </p>
</div>

        
        {/* Vista previa de la sección */}
        {renderSectionPreview()}
        
        {/* Campos principales en los tres idiomas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Español */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-medium text-indigo-300 mb-4 flex items-center">
              <span className="inline-block w-6 h-4 bg-red-500 mr-2 rounded"></span>
              {locale === 'es' ? editorText.languages.es.es : 
               locale === 'en' ? editorText.languages.es.en : 
               editorText.languages.es.ca}
            </h3>
            <div className="space-y-4">
              {primaryFields.map((field) => {
                // Verificar si el campo existe
                if (!sectionContent.es.hasOwnProperty(field)) return null
                
                return (
                  <div key={`es-${field}`}>
                    <label className="block text-sm font-medium text-indigo-200 mb-1">
                      {field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}
                    </label>
                    {field === 'description' ? (
                      <textarea
                        value={sectionContent.es[field] || ''}
                        onChange={(e) => handleChange(activeTab, 'es', field, e.target.value)}
                        rows={3}
                        className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    ) : (
                      <input
                        type="text"
                        value={sectionContent.es[field] || ''}
                        onChange={(e) => handleChange(activeTab, 'es', field, e.target.value)}
                        className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Inglés */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-medium text-indigo-300 mb-4 flex items-center">
              <span className="inline-block w-6 h-4 bg-blue-500 mr-2 rounded"></span>
              {locale === 'es' ? editorText.languages.en.es : 
               locale === 'en' ? editorText.languages.en.en : 
               editorText.languages.en.ca}
            </h3>
            <div className="space-y-4">
              {primaryFields.map((field) => {
                // Verificar si el campo existe
                if (!sectionContent.en.hasOwnProperty(field)) return null
                
                return (
                  <div key={`en-${field}`}>
                    <label className="block text-sm font-medium text-indigo-200 mb-1">
                      {field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}
                    </label>
                    {field === 'description' ? (
                      <textarea
                        value={sectionContent.en[field] || ''}
                        onChange={(e) => handleChange(activeTab, 'en', field, e.target.value)}
                        rows={3}
                        className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    ) : (
                      <input
                        type="text"
                        value={sectionContent.en[field] || ''}
                        onChange={(e) => handleChange(activeTab, 'en', field, e.target.value)}
                        className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Catalán */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-medium text-indigo-300 mb-4 flex items-center">
              <span className="inline-block w-6 h-4 bg-yellow-500 mr-2 rounded"></span>
              {locale === 'es' ? editorText.languages.ca.es : 
               locale === 'en' ? editorText.languages.ca.en : 
               editorText.languages.ca.ca}
            </h3>
            <div className="space-y-4">
              {primaryFields.map((field) => {
                // Verificar si el campo existe
                if (!sectionContent.ca.hasOwnProperty(field)) return null
                
                return (
                  <div key={`ca-${field}`}>
                    <label className="block text-sm font-medium text-indigo-200 mb-1">
                      {field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}
                    </label>
                    {field === 'description' ? (
                      <textarea
                        value={sectionContent.ca[field] || ''}
                        onChange={(e) => handleChange(activeTab, 'ca', field, e.target.value)}
                        rows={3}
                        className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    ) : (
                      <input
                        type="text"
                        value={sectionContent.ca[field] || ''}
                        onChange={(e) => handleChange(activeTab, 'ca', field, e.target.value)}
                        className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Elementos adicionales específicos de la sección */}
        {activeTab === 'features' && sectionContent && (
          (() => {
            const selectedSection = sectionContent[locale] || sectionContent['ca'];

            const featuresTitle = locale === 'es'
              ? 'Soluciones de Ingeniería'
              : locale === 'en'
              ? 'Engineering Solutions'
              : 'Solucions d\'Enginyeria';

            return selectedSection.services && (
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-medium text-indigo-300 mb-4">
                  {featuresTitle}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {selectedSection.services.map((service, index) => (
                    <div key={index} className="bg-gray-700 p-4 rounded-lg">
                      <h4 className="font-medium text-white mb-2">{service.title}</h4>
                      <p className="text-sm text-indigo-200/65">{service.description}</p>
                      <div className="mt-2 text-xs text-indigo-300">{service.icon}</div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })()
        )}

        {/* Elementos adicionales específicos de la sección */}
        {activeTab === 'specialization' && sectionContent && (
          (() => {
            const selectedSection = locale === 'es'
              ? sectionContent.es
              : locale === 'en'
              ? sectionContent.en
              : sectionContent.ca;

            const specializationTitle = locale === 'es'
              ? 'Áreas de Especialización'
              : locale === 'en'
              ? 'Specialization Areas'
              : 'Àrees d\'Especialització';

            return selectedSection.items && (
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-medium text-indigo-300 mb-4">
                  {specializationTitle}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {selectedSection.items.map((item, index) => (
                    <div key={index} className="bg-gray-700 p-4 rounded-lg">
                      <h4 className="font-medium text-white mb-2">{item.title}</h4>
                      <p className="text-sm text-indigo-200/65">{item.description}</p>
                    <div className="mt-2 text-xs text-indigo-300">{item.icon}</div>
                </div>
          ))}
        </div>
      </div>
    );
  })()
)}

      </div>
    )
  }

  return (
    <div className="p-6 overflow-auto" style={{ maxHeight: 'calc(100vh - 64px)' }}>
      {/*}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-indigo-100 mb-2">
          {locale === 'es' ? editorText.title.es : 
           locale === 'en' ? editorText.title.en : 
           editorText.title.ca}
        </h2>
        <p className="text-indigo-200/65">
          {locale === 'es' ? editorText.description.es : 
           locale === 'en' ? editorText.description.en : 
           editorText.description.ca}
        </p>
      </div>
      */}

      {/* Encabezado del editor */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-indigo-100 mb-2">
          {locale === 'es' ? editorText.title.es : 
           locale === 'en' ? editorText.title.en : 
           editorText.title.ca}
        </h2>
        <p className="text-indigo-200/65 mb-6">
          {locale === 'es' ? editorText.description.es : 
           locale === 'en' ? editorText.description.en : 
           editorText.description.ca}
        </p>
      </div>

      {/* Campos de edición con scroll */}
      <div className="overflow-auto pb-20">
        {/* Tarjetas de vista previa de secciones */}
        <div className="mb-8 bg-gray-800 rounded-lg p-6">
          <h3 className="text-lg font-medium text-indigo-300 mb-4 flex items-center justify-between">
            <span>Secciones del Sitio Web:</span>
            <span className="text-sm font-normal text-indigo-400">
              Selecciona una sección para editar su contenido
            </span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {siteSections.map((section) => (
              <div 
                key={section} 
                className={`p-4 rounded-lg cursor-pointer transition-colors ${activeTab === section ? 'bg-indigo-600 ring-2 ring-indigo-300' : 'bg-gray-700 hover:bg-gray-600'}`}
                onClick={() => setActiveTab(section)}
              >
                <div className="flex items-center mb-2">
                  <span className={`w-2 h-2 rounded-full mr-2 ${activeTab === section ? 'bg-white' : 'bg-indigo-400'}`}></span>
                  <h4 className="font-medium text-white">
                    {locale === 'es' ? editorText.sections[section]?.es || section : 
                     locale === 'en' ? editorText.sections[section]?.en || section : 
                     editorText.sections[section]?.ca || section}
                  </h4>
                </div>
                <p className="text-sm text-indigo-200/65 line-clamp-2 min-h-[40px]">
                  {content[section] && content[section].es && content[section].es.description ? 
                    (locale === 'es' ? content[section].es.description.substring(0, 60) + '...' : 
                     locale === 'en' ? content[section].en.description.substring(0, 60) + '...' : 
                     content[section].ca.description.substring(0, 60) + '...') : 
                    'Editar contenido de esta sección'}
                </p>
                <div className="mt-2 text-xs text-indigo-300 flex items-center">
                  <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
                  </svg>
                  {content[section] && content[section].es ? 
                    `${Object.keys(content[section].es).filter(k => typeof content[section].es[k] === 'string').length} campos editables` : 
                    'Pendiente de configurar'}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Campos editables de la sección seleccionada */}
        <div className="mb-8">
          {renderEditorFields()}
        </div>
      </div>

      {/* Botón de guardar */}
      <div className="mt-8 flex items-center">
        <button
          onClick={handleSave}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {locale === 'es' ? editorText.save.es : 
           locale === 'en' ? editorText.save.en : 
           editorText.save.ca}
        </button>
        
        {saved && (
          <span className="ml-4 text-green-500">
            {locale === 'es' ? editorText.saved.es : 
             locale === 'en' ? editorText.saved.en : 
             editorText.saved.ca}
          </span>
        )}
      </div>
    </div>
  )
}
