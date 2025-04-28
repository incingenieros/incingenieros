"use client"

import { useState } from 'react'
import { useLanguage } from '@/contexts/language-context'

export default function AdminHeader() {
  const { locale, setLocale } = useLanguage()
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)

  // Traducciones para el header
  const headerText = {
    search: {
      es: 'Buscar...',
      en: 'Search...',
      ca: 'Cerca...'
    },

    profile: {
      es: 'Mi Perfil',
      en: 'My Profile',
      ca: 'El Meu Perfil'
    },
    settings: {
      es: 'Configuración',
      en: 'Settings',
      ca: 'Configuració'
    },
    logout: {
      es: 'Cerrar Sesión',
      en: 'Logout',
      ca: 'Tancar Sessió'
    }
  }

  return (
    <header className="bg-gray-900 border-b border-gray-800 h-16 flex items-center px-6">
      <div className="flex-1 flex items-center justify-between">
        {/* Búsqueda */}
        <div className="w-full max-w-md">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-700 rounded-md bg-gray-800 text-indigo-200 placeholder-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder={locale === 'es' ? headerText.search.es : locale === 'en' ? headerText.search.en : headerText.search.ca}
            />
          </div>
        </div>

        {/* Lado derecho */}
        <div className="ml-4 flex items-center md:ml-6 space-x-4">
          {/* Selector de idioma */}
          <div className="flex space-x-2">
            <button
              onClick={() => setLocale('es')}
              className={`flex items-center justify-center w-8 h-8 rounded-full ${locale === 'es' ? 'bg-indigo-600 text-white' : 'bg-gray-800 text-indigo-300 hover:bg-gray-700'}`}
              aria-label="Español"
            >
              ES
            </button>
            <button
              onClick={() => setLocale('en')}
              className={`flex items-center justify-center w-8 h-8 rounded-full ${locale === 'en' ? 'bg-indigo-600 text-white' : 'bg-gray-800 text-indigo-300 hover:bg-gray-700'}`}
              aria-label="English"
            >
              EN
            </button>
            <button
              onClick={() => setLocale('ca')}
              className={`flex items-center justify-center w-8 h-8 rounded-full ${locale === 'ca' ? 'bg-indigo-600 text-white' : 'bg-gray-800 text-indigo-300 hover:bg-gray-700'}`}
              aria-label="Català"
            >
              CA
            </button>
          </div>

          {/* Notificaciones */}
          <button className="text-indigo-300 hover:text-white p-1 rounded-full hover:bg-gray-800">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>

          {/* Perfil de usuario */}
          <div className="relative">
            <button
              onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
              className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              id="user-menu"
              aria-expanded="false"
              aria-haspopup="true"
            >
              <span className="sr-only">Abrir menú de usuario</span>
              <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-medium">
                FA
              </div>
            </button>

            {/* Menú desplegable */}
            {isProfileMenuOpen && (
              <div
                className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu"
              >
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-indigo-200 hover:bg-gray-700"
                  role="menuitem"
                >
                  {locale === 'es' ? headerText.profile.es : locale === 'en' ? headerText.profile.en : headerText.profile.ca}
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-indigo-200 hover:bg-gray-700"
                  role="menuitem"
                >
                  {locale === 'es' ? headerText.settings.es : locale === 'en' ? headerText.settings.en : headerText.settings.ca}
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-indigo-200 hover:bg-gray-700"
                  role="menuitem"
                >
                  {locale === 'es' ? headerText.logout.es : locale === 'en' ? headerText.logout.en : headerText.logout.ca}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
