"use client"

import { useState, useEffect } from 'react'
import { useLanguage } from '@/contexts/language-context'
import AdminHeader from './admin-header'
import AdminSidebar from './admin-sidebar'
import ContentEditor from './content-editor'

export default function Dashboard() {
  const { locale } = useLanguage()
  const [activeSection, setActiveSection] = useState('dashboard')
  
  // Asegurar que el contenido tenga scroll
  useEffect(() => {
    // Aplicar overflow-auto al contenedor principal cuando se monta el componente
    const mainContent = document.querySelector('.admin-main-content')
    if (mainContent) {
      mainContent.classList.add('overflow-auto')
    }
    
    // Asegurar que el body tenga altura completa y permita scroll
    document.body.style.height = '100%'
    document.body.style.overflow = 'auto'
    document.documentElement.style.height = '100%'
    document.documentElement.style.overflow = 'auto'
    
    // Asegurar que el contenedor del dashboard permita scroll
    const dashboardContainer = document.querySelector('.admin-dashboard-container')
    if (dashboardContainer) {
      dashboardContainer.classList.add('overflow-auto')
    }
    
    // Asegurar que el contenedor admin-only-container permita scroll
    const adminContainer = document.querySelector('.admin-only-container')
    if (adminContainer) {
      adminContainer.classList.add('overflow-auto')
    }
  }, [])

  // Traducciones para el dashboard
  const dashboardText = {
    welcome: {
      es: 'Bienvenido al Panel de Administración',
      en: 'Welcome to the Admin Panel',
      ca: 'Benvingut al Panell d\'Administració'
    },
    backToSite: {
      es: 'Volver al Sitio',
      en: 'Back to Site',
      ca: 'Tornar al Lloc'
    },
    overview: {
      es: 'Resumen del Sitio',
      en: 'Site Overview',
      ca: 'Resum del Lloc'
    },
    quickActions: {
      es: 'Acciones Rápidas',
      en: 'Quick Actions',
      ca: 'Accions Ràpides'
    },
    recentActivity: {
      es: 'Actividad Reciente',
      en: 'Recent Activity',
      ca: 'Activitat Recent'
    },
    contentStats: {
      es: 'Estadísticas de Contenido',
      en: 'Content Statistics',
      ca: 'Estadístiques de Contingut'
    },
    editContent: {
      es: 'Editar Contenido',
      en: 'Edit Content',
      ca: 'Editar Contingut'
    },
    manageMedia: {
      es: 'Gestionar Multimedia',
      en: 'Manage Media',
      ca: 'Gestionar Multimèdia'
    },
    viewAnalytics: {
      es: 'Ver Analíticas',
      en: 'View Analytics',
      ca: 'Veure Analítiques'
    },
    updateSettings: {
      es: 'Actualizar Configuración',
      en: 'Update Settings',
      ca: 'Actualitzar Configuració'
    },
    totalPages: {
      es: 'Total de Páginas',
      en: 'Total Pages',
      ca: 'Total de Pàgines'
    },
    mediaItems: {
      es: 'Elementos Multimedia',
      en: 'Media Items',
      ca: 'Elements Multimèdia'
    },
    languages: {
      es: 'Idiomas',
      en: 'Languages',
      ca: 'Idiomes'
    },
    lastUpdated: {
      es: 'Última Actualización',
      en: 'Last Updated',
      ca: 'Última Actualització'
    },
    viewWebsite: {
      es: 'Ver Sitio Web',
      en: 'View Website',
      ca: 'Veure Lloc Web'
    },
    activity: {
      updated: {
        es: 'actualizó',
        en: 'updated',
        ca: 'va actualitzar'
      },
      added: {
        es: 'añadió',
        en: 'added',
        ca: 'va afegir'
      },
      deleted: {
        es: 'eliminó',
        en: 'deleted',
        ca: 'va eliminar'
      },
      section: {
        hero: {
          es: 'la sección de Inicio',
          en: 'the Home section',
          ca: 'la secció d\'Inici'
        },
        about: {
          es: 'la sección Acerca de',
          en: 'the About section',
          ca: 'la secció Sobre'
        },
        services: {
          es: 'la sección de Servicios',
          en: 'the Services section',
          ca: 'la secció de Serveis'
        },
        contact: {
          es: 'la sección de Contacto',
          en: 'the Contact section',
          ca: 'la secció de Contacte'
        }
      }
    }
  }

  // Datos de ejemplo para el dashboard
  const siteStats = {
    totalPages: 7,
    mediaItems: 24,
    languages: 3,
    lastUpdated: '2025-04-24'
  }

  // Definir tipos para la actividad reciente
  type ActionType = 'updated' | 'added' | 'deleted';
  type SectionType = 'hero' | 'about' | 'services' | 'contact';

  interface ActivityItem {
    id: number;
    user: string;
    action: ActionType;
    section: SectionType;
    date: string;
  }

  // Actividad reciente (ejemplo)
  const recentActivity: ActivityItem[] = [
    {
      id: 1,
      user: 'Francisco Arrazola',
      action: 'updated',
      section: 'hero',
      date: '2025-04-24'
    },
    {
      id: 2,
      user: 'Francisco Arrazola',
      action: 'added',
      section: 'services',
      date: '2025-04-22'
    },
    {
      id: 3,
      user: 'Francisco Arrazola',
      action: 'updated',
      section: 'about',
      date: '2025-04-20'
    },
    {
      id: 4,
      user: 'Francisco Arrazola',
      action: 'updated',
      section: 'contact',
      date: '2025-04-18'
    }
  ]

  // Configuración de estilos para el scroll
  
  // Renderizar la sección activa
  const renderActiveSection = () => {
    switch (activeSection) {
      case 'dashboard':
        return (
          <div className="p-6">
            <div className="mb-8">
              <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold text-indigo-100 mb-2">
                  {locale === 'es' ? dashboardText.welcome.es : 
                   locale === 'en' ? dashboardText.welcome.en : 
                   dashboardText.welcome.ca}
                </h1>
                <a
                  href="/"
                  className="inline-flex items-center px-4 py-2 border border-indigo-500 rounded-md shadow-sm text-sm font-medium text-indigo-300 bg-gray-800 hover:bg-indigo-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                >
                  <svg className="mr-2 -ml-1 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  {locale === 'es' ? dashboardText.backToSite.es : 
                   locale === 'en' ? dashboardText.backToSite.en : 
                   dashboardText.backToSite.ca}
                </a>
              </div>
              <p className="text-indigo-200/65">
                {new Date().toLocaleDateString(locale === 'es' ? 'es-ES' : locale === 'en' ? 'en-US' : 'ca-ES', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {/* Estadísticas del sitio */}
              <div className="bg-gray-800 rounded-lg p-6 shadow-md border border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-indigo-300">
                    {locale === 'es' ? dashboardText.totalPages.es : 
                     locale === 'en' ? dashboardText.totalPages.en : 
                     dashboardText.totalPages.ca}
                  </h3>
                  <span className="bg-indigo-600/20 text-indigo-400 p-2 rounded-md">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </span>
                </div>
                <div className="text-3xl font-bold text-white">{siteStats.totalPages}</div>
              </div>

              <div className="bg-gray-800 rounded-lg p-6 shadow-md border border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-indigo-300">
                    {locale === 'es' ? dashboardText.mediaItems.es : 
                     locale === 'en' ? dashboardText.mediaItems.en : 
                     dashboardText.mediaItems.ca}
                  </h3>
                  <span className="bg-purple-600/20 text-purple-400 p-2 rounded-md">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </span>
                </div>
                <div className="text-3xl font-bold text-white">{siteStats.mediaItems}</div>
              </div>

              <div className="bg-gray-800 rounded-lg p-6 shadow-md border border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-indigo-300">
                    {locale === 'es' ? dashboardText.languages.es : 
                     locale === 'en' ? dashboardText.languages.en : 
                     dashboardText.languages.ca}
                  </h3>
                  <span className="bg-green-600/20 text-green-400 p-2 rounded-md">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                    </svg>
                  </span>
                </div>
                <div className="text-3xl font-bold text-white">{siteStats.languages}</div>
              </div>

              <div className="bg-gray-800 rounded-lg p-6 shadow-md border border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-indigo-300">
                    {locale === 'es' ? dashboardText.lastUpdated.es : 
                     locale === 'en' ? dashboardText.lastUpdated.en : 
                     dashboardText.lastUpdated.ca}
                  </h3>
                  <span className="bg-blue-600/20 text-blue-400 p-2 rounded-md">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                </div>
                <div className="text-lg font-bold text-white">{siteStats.lastUpdated}</div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Acciones rápidas */}
              <div className="bg-gray-800 rounded-lg p-6 shadow-md border border-gray-700">
                <h3 className="text-xl font-medium text-indigo-300 mb-4">
                  {locale === 'es' ? dashboardText.quickActions.es : 
                   locale === 'en' ? dashboardText.quickActions.en : 
                   dashboardText.quickActions.ca}
                </h3>
                <div className="space-y-4">
                  <button 
                    onClick={() => setActiveSection('content')}
                    className="w-full flex items-center justify-between p-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition"
                  >
                    <span className="flex items-center">
                      <span className="bg-indigo-600/20 text-indigo-400 p-2 rounded-md mr-3">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </span>
                      <span className="text-indigo-100">
                        {locale === 'es' ? dashboardText.editContent.es : 
                         locale === 'en' ? dashboardText.editContent.en : 
                         dashboardText.editContent.ca}
                      </span>
                    </span>
                    <svg className="w-5 h-5 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  
                  <button 
                    onClick={() => setActiveSection('media')}
                    className="w-full flex items-center justify-between p-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition"
                  >
                    <span className="flex items-center">
                      <span className="bg-purple-600/20 text-purple-400 p-2 rounded-md mr-3">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </span>
                      <span className="text-indigo-100">
                        {locale === 'es' ? dashboardText.manageMedia.es : 
                         locale === 'en' ? dashboardText.manageMedia.en : 
                         dashboardText.manageMedia.ca}
                      </span>
                    </span>
                    <svg className="w-5 h-5 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  
                  <button 
                    onClick={() => setActiveSection('analytics')}
                    className="w-full flex items-center justify-between p-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition"
                  >
                    <span className="flex items-center">
                      <span className="bg-green-600/20 text-green-400 p-2 rounded-md mr-3">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </span>
                      <span className="text-indigo-100">
                        {locale === 'es' ? dashboardText.viewAnalytics.es : 
                         locale === 'en' ? dashboardText.viewAnalytics.en : 
                         dashboardText.viewAnalytics.ca}
                      </span>
                    </span>
                    <svg className="w-5 h-5 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  
                  <button 
                    onClick={() => setActiveSection('settings')}
                    className="w-full flex items-center justify-between p-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition"
                  >
                    <span className="flex items-center">
                      <span className="bg-blue-600/20 text-blue-400 p-2 rounded-md mr-3">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </span>
                      <span className="text-indigo-100">
                        {locale === 'es' ? dashboardText.updateSettings.es : 
                         locale === 'en' ? dashboardText.updateSettings.en : 
                         dashboardText.updateSettings.ca}
                      </span>
                    </span>
                    <svg className="w-5 h-5 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  
                  <a 
                    href="/"
                    target="_blank"
                    className="w-full flex items-center justify-between p-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition"
                  >
                    <span className="flex items-center">
                      <span className="bg-red-600/20 text-red-400 p-2 rounded-md mr-3">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </span>
                      <span className="text-indigo-100">
                        {locale === 'es' ? dashboardText.viewWebsite.es : 
                         locale === 'en' ? dashboardText.viewWebsite.en : 
                         dashboardText.viewWebsite.ca}
                      </span>
                    </span>
                    <svg className="w-5 h-5 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Actividad reciente */}
              <div className="bg-gray-800 rounded-lg p-6 shadow-md border border-gray-700 lg:col-span-2">
                <h3 className="text-xl font-medium text-indigo-300 mb-4">
                  {locale === 'es' ? dashboardText.recentActivity.es : 
                   locale === 'en' ? dashboardText.recentActivity.en : 
                   dashboardText.recentActivity.ca}
                </h3>
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-start p-3 bg-gray-700 rounded-lg">
                      <div className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                        {activity.user.split(' ').map(name => name[0]).join('')}
                      </div>
                      <div>
                        <p className="text-indigo-100">
                          <span className="font-medium">{activity.user}</span>{' '}
                          {locale === 'es' 
                            ? (dashboardText.activity[activity.action as keyof typeof dashboardText.activity] as {es: string; en: string; ca: string}).es 
                            : locale === 'en' 
                              ? (dashboardText.activity[activity.action as keyof typeof dashboardText.activity] as {es: string; en: string; ca: string}).en 
                              : (dashboardText.activity[activity.action as keyof typeof dashboardText.activity] as {es: string; en: string; ca: string}).ca}{' '}
                          {locale === 'es' 
                            ? (dashboardText.activity.section[activity.section as keyof typeof dashboardText.activity.section] as {es: string; en: string; ca: string}).es 
                            : locale === 'en' 
                              ? (dashboardText.activity.section[activity.section as keyof typeof dashboardText.activity.section] as {es: string; en: string; ca: string}).en 
                              : (dashboardText.activity.section[activity.section as keyof typeof dashboardText.activity.section] as {es: string; en: string; ca: string}).ca}
                        </p>
                        <p className="text-indigo-300 text-sm mt-1">{activity.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )
      case 'content':
        return <ContentEditor />
      case 'users':
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold text-indigo-100 mb-4">Gestión de Usuarios</h2>
            <p className="text-indigo-200/65">Esta sección está en desarrollo.</p>
          </div>
        )
      case 'settings':
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold text-indigo-100 mb-4">Configuración</h2>
            <p className="text-indigo-200/65">Esta sección está en desarrollo.</p>
          </div>
        )
      case 'analytics':
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold text-indigo-100 mb-4">Analíticas</h2>
            <p className="text-indigo-200/65">Esta sección está en desarrollo.</p>
          </div>
        )
      case 'media':
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold text-indigo-100 mb-4">Gestión de Multimedia</h2>
            <p className="text-indigo-200/65">Esta sección está en desarrollo.</p>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col admin-dashboard-container overflow-auto">
      <AdminHeader />
      <div className="flex-1 flex flex-col md:flex-row">
        <AdminSidebar activeSection={activeSection} setActiveSection={setActiveSection} />
        <main className="flex-1 overflow-auto admin-main-content">
          {renderActiveSection()}
        </main>
      </div>
    </div>
  )
}