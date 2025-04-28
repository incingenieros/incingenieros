"use client"

import { useState } from 'react'
import { useLanguage } from '@/contexts/language-context'

export default function ContentEditor() {
  const { locale } = useLanguage()
  const [activeTab, setActiveTab] = useState('hero')
  
  // Secciones del sitio web basadas en la estructura real
  const siteSections = [
    'hero',
    'specialization',
    'features',
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
      specialization: {
        es: 'Áreas de Especialización',
        en: 'Specialization Areas',
        ca: 'Àrees d\'Especialització'
      },
      features: {
        es: 'Características',
        en: 'Features',
        ca: 'Característiques'
      },
      industrial: {
        es: 'Ingeniería Industrial',
        en: 'Industrial Engineering',
        ca: 'Enginyeria Industrial'
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
      es: 'Descripción',
      en: 'Description',
      ca: 'Descripció'
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
        title: 'Diseño y cálculo para el Mar y la Industria',
        subtitle: 'Ingeniería Naval e Industrial',
        description: 'Soluciones de ingeniería naval e industrial con más de 20 años de experiencia en el sector marítimo y offshore.',
        button: 'Contactar',
        buttonLink: '#contacto',
        backgroundImage: '/images/hero-background.jpg'
      },
      en: {
        title: 'Design and Calculation for the Sea and Industry',
        subtitle: 'Naval and Industrial Engineering',
        description: 'Naval and industrial engineering solutions with over 20 years of experience in the maritime and offshore sector.',
        button: 'Contact',
        buttonLink: '#contact',
        backgroundImage: '/images/hero-background.jpg'
      },
      ca: {
        title: 'Disseny i càlcul per al Mar i la Indústria',
        subtitle: 'Enginyeria Naval i Industrial',
        description: 'Solucions d\'enginyeria naval i industrial amb més de 20 anys d\'experiència en el sector marítim i offshore.',
        button: 'Contactar',
        buttonLink: '#contacte',
        backgroundImage: '/images/hero-background.jpg'
      }
    },
    specialization: {
      es: {
        title: 'Áreas de Especialización',
        subtitle: 'Soluciones integrales',
        description: 'Ofrecemos una amplia gama de servicios especializados en ingeniería naval e industrial.',
        items: [
          {
            title: 'Consultoría',
            description: 'Asesoramiento especializado en proyectos navales e industriales',
            icon: 'chart-bar'
          },
          {
            title: 'Ingeniería Industrial',
            description: 'Soluciones para la industria y procesos de fabricación',
            icon: 'cog'
          },
          {
            title: 'Ingeniería Naval',
            description: 'Diseño de embarcaciones y estructuras marítimas',
            icon: 'ship'
          }
        ]
      },
      en: {
        title: 'Specialization Areas',
        subtitle: 'Comprehensive solutions',
        description: 'We offer a wide range of specialized services in naval and industrial engineering.',
        items: [
          {
            title: 'Consulting',
            description: 'Specialized advice on naval and industrial projects',
            icon: 'chart-bar'
          },
          {
            title: 'Industrial Engineering',
            description: 'Solutions for industry and manufacturing processes',
            icon: 'cog'
          },
          {
            title: 'Naval Engineering',
            description: 'Design of vessels and maritime structures',
            icon: 'ship'
          }
        ]
      },
      ca: {
        title: 'Àrees d\'Especialització',
        subtitle: 'Solucions integrals',
        description: 'Oferim una àmplia gamma de serveis especialitzats en enginyeria naval i industrial.',
        items: [
          {
            title: 'Consultoria',
            description: 'Assessorament especialitzat en projectes navals i industrials',
            icon: 'chart-bar'
          },
          {
            title: 'Enginyeria Industrial',
            description: 'Solucions per a la indústria i processos de fabricació',
            icon: 'cog'
          },
          {
            title: 'Enginyeria Naval',
            description: 'Disseny d\'embarcacions i estructures marítimes',
            icon: 'ship'
          }
        ]
      }
    },
    features: {
      es: {
        title: 'Características',
        subtitle: 'Lo que nos distingue',
        description: 'Nuestras características principales que nos diferencian en el mercado.',
        services: [
          {
            title: 'Consultoría',
            description: 'Asesoramiento especializado en proyectos navales e industriales.',
            icon: 'chart-bar'
          },
          {
            title: 'Diseño Naval',
            description: 'Diseño de embarcaciones y estructuras marítimas.',
            icon: 'ship'
          },
          {
            title: 'Ingeniería Industrial',
            description: 'Soluciones para la industria y procesos de fabricación.',
            icon: 'cog'
          },
          {
            title: 'Offshore',
            description: 'Proyectos especializados para el sector offshore.',
            icon: 'globe'
          }
        ]
      },
      en: {
        title: 'Features',
        subtitle: 'What sets us apart',
        description: 'Our main features that differentiate us in the market.',
        services: [
          {
            title: 'Consulting',
            description: 'Specialized advice on naval and industrial projects.',
            icon: 'chart-bar'
          },
          {
            title: 'Naval Design',
            description: 'Design of vessels and maritime structures.',
            icon: 'ship'
          },
          {
            title: 'Industrial Engineering',
            description: 'Solutions for industry and manufacturing processes.',
            icon: 'cog'
          },
          {
            title: 'Offshore',
            description: 'Specialized projects for the offshore sector.',
            icon: 'globe'
          }
        ]
      },
      ca: {
        title: 'Característiques',
        subtitle: 'El que ens distingeix',
        description: 'Les nostres característiques principals que ens diferencien al mercat.',
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
          {
            title: 'Offshore',
            description: 'Projectes especialitzats per al sector offshore.',
            icon: 'globe'
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
    industrial: {
      es: {
        title: 'Ingeniería Industrial',
        subtitle: 'Soluciones para la industria',
        description: 'Servicios especializados en el sector industrial con las últimas tecnologías.',
        categories: ['Todos', 'Naval', 'Industrial', 'Offshore', 'Consultoría'],
        projects: [
          {
            title: 'Diseño de embarcación de recreo',
            category: 'Naval',
            description: 'Diseño completo de embarcación de recreo de 15 metros.',
            image: '/images/projects/project-1.jpg'
          },
          {
            title: 'Optimización de procesos industriales',
            category: 'Industrial',
            description: 'Proyecto de optimización de procesos para empresa del sector metalúrgico.',
            image: '/images/projects/project-2.jpg'
          },
          {
            title: 'Plataforma offshore',
            category: 'Offshore',
            description: 'Diseño y cálculo de estructura para plataforma offshore.',
            image: '/images/projects/project-3.jpg'
          }
        ]
      },
      en: {
        title: 'Industrial Engineering',
        subtitle: 'Solutions for industry',
        description: 'Specialized services in the industrial sector with the latest technologies.',
        categories: ['All', 'Naval', 'Industrial', 'Offshore', 'Consulting'],
        projects: [
          {
            title: 'Recreational boat design',
            category: 'Naval',
            description: 'Complete design of a 15-meter recreational boat.',
            image: '/images/projects/project-1.jpg'
          },
          {
            title: 'Industrial process optimization',
            category: 'Industrial',
            description: 'Process optimization project for a metallurgical sector company.',
            image: '/images/projects/project-2.jpg'
          },
          {
            title: 'Offshore platform',
            category: 'Offshore',
            description: 'Design and calculation of structure for offshore platform.',
            image: '/images/projects/project-3.jpg'
          }
        ]
      },
      ca: {
        title: 'Enginyeria Industrial',
        subtitle: 'Solucions per a la indústria',
        description: 'Serveis especialitzats en el sector industrial amb les últimes tecnologies.',
        categories: ['Tots', 'Naval', 'Industrial', 'Offshore', 'Consultoria'],
        projects: [
          {
            title: 'Disseny d\'embarcació d\'esbarjo',
            category: 'Naval',
            description: 'Disseny complet d\'embarcació d\'esbarjo de 15 metres.',
            image: '/images/projects/project-1.jpg'
          },
          {
            title: 'Optimització de processos industrials',
            category: 'Industrial',
            description: 'Projecte d\'optimització de processos per a empresa del sector metal·lúrgic.',
            image: '/images/projects/project-2.jpg'
          },
          {
            title: 'Plataforma offshore',
            category: 'Offshore',
            description: 'Disseny i càlcul d\'estructura per a plataforma offshore.',
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
        title: 'Enginyeria Naval i Offshore',
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
        case 'specialization':
        case 'features':
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
      
      switch(activeTab) {
        case 'hero':
          return (
            <div className="bg-gray-800 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-medium text-indigo-300 mb-4">Vista previa</h3>
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
        case 'specialization':
          return (
            <div className="bg-gray-800 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-medium text-indigo-300 mb-4">Vista previa</h3>
              <div className="bg-gray-900 p-6 rounded-lg">
                <h2 className="text-xl font-bold text-white mb-2">{sectionContent.es.title || ''}</h2>
                <p className="text-indigo-200 mb-2">{sectionContent.es.subtitle || ''}</p>
                <p className="text-indigo-300 mb-6">{sectionContent.es.description || ''}</p>
                {sectionContent.es.items && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    {sectionContent.es.items.map((item, index) => (
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
        case 'features':
        case 'industrial':
        case 'naval':
          return (
            <div className="bg-gray-800 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-medium text-indigo-300 mb-4">Vista previa</h3>
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
              <h3 className="text-lg font-medium text-indigo-300 mb-4">Vista previa</h3>
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
              <h3 className="text-lg font-medium text-indigo-300 mb-4">Vista previa</h3>
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
            {locale === 'es' ? editorText.sections[activeTab]?.es || activeTab : 
             locale === 'en' ? editorText.sections[activeTab]?.en || activeTab : 
             editorText.sections[activeTab]?.ca || activeTab}
          </h3>
          <p className="text-indigo-200/65 mb-4">
            Edita los campos principales de esta sección en los tres idiomas disponibles
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
        {activeTab === 'specialization' && sectionContent.es.items && (
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-medium text-indigo-300 mb-4">
              Áreas de Especialización
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {sectionContent.es.items.map((item, index) => (
                <div key={index} className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-medium text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-indigo-200/65">{item.description}</p>
                  <div className="mt-2 text-xs text-indigo-300">Icono: {item.icon}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="p-6 overflow-auto" style={{ maxHeight: 'calc(100vh - 64px)' }}>
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
            <span>Secciones del sitio web</span>
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
